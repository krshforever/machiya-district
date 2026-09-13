(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nc="186",Ys={ROTATE:0,DOLLY:1,PAN:2},Vs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gf=0,Ch=1,Hf=2,Tr=1,Vf=2,yr=3,ls=0,vn=1,Oe=2,si=0,Ar=1,ia=2,Ph=3,Dh=4,Wf=5,Hs=100,Xf=101,Yf=102,qf=103,Kf=104,Zf=200,Jf=201,$f=202,Qf=203,yd=204,Md=205,jf=206,tp=207,ep=208,np=209,ip=210,sp=211,rp=212,op=213,ap=214,Il=0,Nl=1,Ul=2,Nr=3,Ol=4,Fl=5,Bl=6,zl=7,Sd=0,lp=1,cp=2,ri=0,Uc=1,Oc=2,Fc=3,_a=4,Bc=5,Ur=6,Or=7,wd=300,cs=301,Qs=302,Rr=303,Na=304,xa=306,On=1e3,Xn=1001,kl=1002,sn=1003,hp=1004,io=1005,Ye=1006,Ua=1007,Bi=1008,Cn=1009,bd=1010,Ed=1011,Fr=1012,zc=1013,hi=1014,Pn=1015,on=1016,kc=1017,Gc=1018,Br=1020,Td=35902,Ad=35899,Rd=1021,Cd=1022,Yn=1023,Ti=1026,is=1027,Hc=1028,Vc=1029,hs=1030,Wc=1031,Xc=1033,Vo=33776,Wo=33777,Xo=33778,Yo=33779,Gl=35840,Hl=35841,Vl=35842,Wl=35843,Xl=36196,Yl=37492,ql=37496,Kl=37488,Zl=37489,sa=37490,Jl=37491,$l=37808,Ql=37809,jl=37810,tc=37811,ec=37812,nc=37813,ic=37814,sc=37815,rc=37816,oc=37817,ac=37818,lc=37819,cc=37820,hc=37821,uc=36492,dc=36494,fc=36495,pc=36283,mc=36284,ra=36285,gc=36286,up=3200,_c=0,dp=1,Un="",ke="srgb",zr="srgb-linear",oa="linear",Ce="srgb",Oa=7680,fp=519,pp=512,mp=513,gp=514,Yc=515,_p=516,xp=517,qc=518,vp=519,Pd=35044,Lh="300 es",ii=2e3,kr=2001;function yp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}const Mp={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function so(n,t){return new Mp[n](t)}function Gr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Sp(){const n=Gr("canvas");return n.style.display="block",n}const Ih={};function aa(...n){const t="THREE."+n.shift();console.log(t,...n)}function Dd(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function $t(...n){n=Dd(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function _e(...n){n=Dd(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function qs(...n){const t=n.join(" ");t in Ih||(Ih[t]=!0,$t(...n))}function wp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const bp={[Il]:Nl,[Ul]:Bl,[Ol]:zl,[Nr]:Fl,[Nl]:Il,[Bl]:Ul,[zl]:Ol,[Fl]:Nr};class Gi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nh=1234567;const Cr=Math.PI/180,js=180/Math.PI;function oi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]+"-"+hn[t&255]+hn[t>>8&255]+"-"+hn[t>>16&15|64]+hn[t>>24&255]+"-"+hn[e&63|128]+hn[e>>8&255]+"-"+hn[e>>16&255]+hn[e>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function le(n,t,e){return Math.max(t,Math.min(e,n))}function Kc(n,t){return(n%t+t)%t}function Ep(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Tp(n,t,e){return n!==t?(e-n)/(t-n):0}function Pr(n,t,e){return(1-e)*n+e*t}function Ap(n,t,e,i){return Pr(n,t,1-Math.exp(-e*i))}function Rp(n,t=1){return t-Math.abs(Kc(n,t*2)-t)}function Cp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Pp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Dp(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Lp(n,t){return n+Math.random()*(t-n)}function Ip(n){return n*(.5-Math.random())}function Np(n){n!==void 0&&(Nh=n);let t=Nh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Up(n){return n*Cr}function Op(n){return n*js}function Fp(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Bp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function zp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function kp(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),d=r((t-i)/2),u=o((t-i)/2),f=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*d,l*u,a*c);break;case"YZY":n.set(l*u,a*h,l*d,a*c);break;case"ZXZ":n.set(l*d,l*u,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*f,a*h,a*c);break;default:$t("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Vn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Pe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ze={DEG2RAD:Cr,RAD2DEG:js,generateUUID:oi,clamp:le,euclideanModulo:Kc,mapLinear:Ep,inverseLerp:Tp,lerp:Pr,damp:Ap,pingpong:Rp,smoothstep:Cp,smootherstep:Pp,randInt:Dp,randFloat:Lp,randFloatSpread:Ip,seededRandom:Np,degToRad:Up,radToDeg:Op,isPowerOfTwo:Fp,ceilPowerOfTwo:Bp,floorPowerOfTwo:zp,setQuaternionFromProperEuler:kp,normalize:Pe,denormalize:Vn},wh=class wh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(le(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(le(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};wh.prototype.isVector2=!0;let ut=wh;class Kn{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(d!==v||l!==u||c!==f||h!==g){let p=l*u+c*f+h*g+d*v;p<0&&(u=-u,f=-f,g=-g,v=-v,p=-p);let m=1-a;if(p<.9995){const y=Math.acos(p),w=Math.sin(y);m=Math.sin(m*y)/w,a=Math.sin(a*y)/w,l=l*m+u*a,c=c*m+f*a,h=h*m+g*a,d=d*m+v*a}else{l=l*m+u*a,c=c*m+f*a,h=h*m+g*a,d=d*m+v*a;const y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-a*f,t[e+2]=c*g+h*f+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:$t("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const bh=class bh{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(le(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Fa.copy(this).projectOnVector(t),this.sub(Fa)}reflect(t){return this.sub(Fa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(le(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};bh.prototype.isVector3=!0;let O=bh;const Fa=new O,Uh=new Kn,Eh=class Eh{constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],v=s[0],p=s[3],m=s[6],y=s[1],w=s[4],_=s[7],M=s[2],b=s[5],R=s[8];return r[0]=o*v+a*y+l*M,r[3]=o*p+a*w+l*b,r[6]=o*m+a*_+l*R,r[1]=c*v+h*y+d*M,r[4]=c*p+h*w+d*b,r[7]=c*m+h*_+d*R,r[2]=u*v+f*y+g*M,r[5]=u*p+f*w+g*b,r[8]=u*m+f*_+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=e*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(s*c-h*i)*v,t[2]=(a*i-s*o)*v,t[3]=u*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(i*l-c*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return qs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ba.makeScale(t,e)),this}rotate(t){return qs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ba.makeRotation(-t)),this}translate(t,e){return qs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ba.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Eh.prototype.isMatrix3=!0;let se=Eh;const Ba=new se,Oh=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fh=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gp(){const n={enabled:!0,workingColorSpace:zr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ce&&(s.r=Ei(s.r),s.g=Ei(s.g),s.b=Ei(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ce&&(s.r=Ks(s.r),s.g=Ks(s.g),s.b=Ks(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Un?oa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return qs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return qs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[zr]:{primaries:t,whitePoint:i,transfer:oa,toXYZ:Oh,fromXYZ:Fh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:t,whitePoint:i,transfer:Ce,toXYZ:Oh,fromXYZ:Fh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}}),n}const ve=Gp();function Ei(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ks(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Es;class Hp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Es===void 0&&(Es=Gr("canvas")),Es.width=t.width,Es.height=t.height;const s=Es.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Es}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Gr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ei(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ei(e[i]/255)*255):e[i]=Ei(e[i]);return{data:e,width:t.width,height:t.height}}else return $t("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Vp=0;class Zc{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=oi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(za(s[o].image)):r.push(za(s[o]))}else r=za(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function za(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Hp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:($t("Texture: Unable to serialize Texture."),{})}let Wp=0;const ka=new O;class an extends Gi{constructor(t=an.DEFAULT_IMAGE,e=an.DEFAULT_MAPPING,i=Xn,s=Xn,r=Ye,o=Bi,a=Yn,l=Cn,c=an.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=oi(),this.name="",this.source=new Zc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ka).x}get height(){return this.source.getSize(ka).y}get depth(){return this.source.getSize(ka).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){$t(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){$t(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case On:t.x=t.x-Math.floor(t.x);break;case Xn:t.x=t.x<0?0:1;break;case kl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case On:t.y=t.y-Math.floor(t.y);break;case Xn:t.y=t.y<0?0:1;break;case kl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=wd;an.DEFAULT_ANISOTROPY=1;const Th=class Th{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,_=(f+1)/2,M=(m+1)/2,b=(h+u)/4,R=(d+v)/4,x=(g+p)/4;return w>_&&w>M?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=b/i,r=R/i):_>M?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=b/s,r=x/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=R/r,s=x/r),this.set(i,s,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(d-v)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(le(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Th.prototype.isVector4=!0;let Ge=Th;class Xp extends Gi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ge(0,0,t,e),this.scissorTest=!1,this.viewport=new Ge(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},r=new an(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ye,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Zc(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yn extends Xp{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Ld extends an{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yp extends an{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const ga=class ga{constructor(t,e,i,s,r,o,a,l,c,h,d,u,f,g,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,d,u,f,g,v,p)}set(t,e,i,s,r,o,a,l,c,h,d,u,f,g,v,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ga().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,s=1/Ts.setFromMatrixColumn(t,0).length(),r=1/Ts.setFromMatrixColumn(t,1).length(),o=1/Ts.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,f=o*d,g=a*h,v=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-v*c,e[9]=-a*l,e[2]=v-u*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u+v*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=v+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u-v*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=v-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,f=o*d,g=a*h,v=a*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-v*d}else if(t.order==="XZY"){const u=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qp,t,Kp)}lookAt(t,e,i){const s=this.elements;return An.subVectors(t,e),An.lengthSq()===0&&(An.z=1),An.normalize(),Di.crossVectors(i,An),Di.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Di.crossVectors(i,An)),Di.normalize(),ro.crossVectors(An,Di),s[0]=Di.x,s[4]=ro.x,s[8]=An.x,s[1]=Di.y,s[5]=ro.y,s[9]=An.y,s[2]=Di.z,s[6]=ro.z,s[10]=An.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],v=i[6],p=i[10],m=i[14],y=i[3],w=i[7],_=i[11],M=i[15],b=s[0],R=s[4],x=s[8],S=s[12],E=s[1],T=s[5],C=s[9],P=s[13],L=s[2],I=s[6],N=s[10],B=s[14],G=s[3],U=s[7],k=s[11],X=s[15];return r[0]=o*b+a*E+l*L+c*G,r[4]=o*R+a*T+l*I+c*U,r[8]=o*x+a*C+l*N+c*k,r[12]=o*S+a*P+l*B+c*X,r[1]=h*b+d*E+u*L+f*G,r[5]=h*R+d*T+u*I+f*U,r[9]=h*x+d*C+u*N+f*k,r[13]=h*S+d*P+u*B+f*X,r[2]=g*b+v*E+p*L+m*G,r[6]=g*R+v*T+p*I+m*U,r[10]=g*x+v*C+p*N+m*k,r[14]=g*S+v*P+p*B+m*X,r[3]=y*b+w*E+_*L+M*G,r[7]=y*R+w*T+_*I+M*U,r[11]=y*x+w*C+_*N+M*k,r[15]=y*S+w*P+_*B+M*X,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],v=t[7],p=t[11],m=t[15],y=l*f-c*u,w=a*f-c*d,_=a*u-l*d,M=o*f-c*h,b=o*u-l*h,R=o*d-a*h;return e*(v*y-p*w+m*_)-i*(g*y-p*M+m*b)+s*(g*w-v*M+m*R)-r*(g*_-v*b+p*R)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],v=t[13],p=t[14],m=t[15],y=e*a-i*o,w=e*l-s*o,_=e*c-r*o,M=i*l-s*a,b=i*c-r*a,R=s*c-r*l,x=h*v-d*g,S=h*p-u*g,E=h*m-f*g,T=d*p-u*v,C=d*m-f*v,P=u*m-f*p,L=y*P-w*C+_*T+M*E-b*S+R*x;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/L;return t[0]=(a*P-l*C+c*T)*I,t[1]=(s*C-i*P-r*T)*I,t[2]=(v*R-p*b+m*M)*I,t[3]=(u*b-d*R-f*M)*I,t[4]=(l*E-o*P-c*S)*I,t[5]=(e*P-s*E+r*S)*I,t[6]=(p*_-g*R-m*w)*I,t[7]=(h*R-u*_+f*w)*I,t[8]=(o*C-a*E+c*x)*I,t[9]=(i*E-e*C-r*x)*I,t[10]=(g*b-v*_+m*y)*I,t[11]=(d*_-h*b-f*y)*I,t[12]=(a*S-o*T-l*x)*I,t[13]=(e*T-i*S+s*x)*I,t[14]=(v*w-g*M-p*y)*I,t[15]=(h*M-d*w+u*y)*I,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,v=o*h,p=o*d,m=a*d,y=l*c,w=l*h,_=l*d,M=i.x,b=i.y,R=i.z;return s[0]=(1-(v+m))*M,s[1]=(f+_)*M,s[2]=(g-w)*M,s[3]=0,s[4]=(f-_)*b,s[5]=(1-(u+m))*b,s[6]=(p+y)*b,s[7]=0,s[8]=(g+w)*R,s[9]=(p-y)*R,s[10]=(1-(u+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=Ts.set(s[0],s[1],s[2]).length();const a=Ts.set(s[4],s[5],s[6]).length(),l=Ts.set(s[8],s[9],s[10]).length();r<0&&(o=-o),zn.copy(this);const c=1/o,h=1/a,d=1/l;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=d,zn.elements[9]*=d,zn.elements[10]*=d,e.setFromRotationMatrix(zn),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=ii,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s);let g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===ii)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===kr)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=ii,l=!1){const c=this.elements,h=2/(e-t),d=2/(i-s),u=-(e+t)/(e-t),f=-(i+s)/(i-s);let g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===ii)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===kr)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};ga.prototype.isMatrix4=!0;let ae=ga;const Ts=new O,zn=new ae,qp=new O(0,0,0),Kp=new O(1,1,1),Di=new O,ro=new O,An=new O,Bh=new ae,zh=new Kn;class Mn{constructor(t=0,e=0,i=0,s=Mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-le(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:$t("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Bh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zh.setFromEuler(this),this.setFromQuaternion(zh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mn.DEFAULT_ORDER="XYZ";class Jc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Zp=0;const kh=new O,As=new Kn,fi=new ae,oo=new O,ur=new O,Jp=new O,$p=new Kn,Gh=new O(1,0,0),Hh=new O(0,1,0),Vh=new O(0,0,1),Wh={type:"added"},Qp={type:"removed"},Rs={type:"childadded",child:null},Ga={type:"childremoved",child:null};class ne extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ne.DEFAULT_UP.clone();const t=new O,e=new Mn,i=new Kn,s=new O(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new se}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return As.setFromAxisAngle(t,e),this.quaternion.multiply(As),this}rotateOnWorldAxis(t,e){return As.setFromAxisAngle(t,e),this.quaternion.premultiply(As),this}rotateX(t){return this.rotateOnAxis(Gh,t)}rotateY(t){return this.rotateOnAxis(Hh,t)}rotateZ(t){return this.rotateOnAxis(Vh,t)}translateOnAxis(t,e){return kh.copy(t).applyQuaternion(this.quaternion),this.position.add(kh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gh,t)}translateY(t){return this.translateOnAxis(Hh,t)}translateZ(t){return this.translateOnAxis(Vh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?oo.copy(t):oo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(ur,oo,this.up):fi.lookAt(oo,ur,this.up),this.quaternion.setFromRotationMatrix(fi),s&&(fi.extractRotation(s.matrixWorld),As.setFromRotationMatrix(fi),this.quaternion.premultiply(As.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(_e("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wh),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null):_e("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qp),Ga.child=t,this.dispatchEvent(Ga),Ga.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fi.multiply(t.parent.matrixWorld)),t.applyMatrix4(fi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wh),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,t,Jp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,$p,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ne.DEFAULT_UP=new O(0,1,0);ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Kt extends ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jp={type:"move"};class Ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,i),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Kt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},ao={h:0,s:0,l:0};function Va(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Nt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ve.workingColorSpace){return this.r=t,this.g=e,this.b=i,ve.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ve.workingColorSpace){if(t=Kc(t,1),e=le(e,0,1),i=le(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Va(o,r,t+1/3),this.g=Va(o,r,t),this.b=Va(o,r,t-1/3)}return ve.colorSpaceToWorking(this,s),this}setStyle(t,e=ke){function i(r){r!==void 0&&parseFloat(r)<1&&$t("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:$t("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);$t("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){const i=Id[t.toLowerCase()];return i!==void 0?this.setHex(i,e):$t("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ei(t.r),this.g=Ei(t.g),this.b=Ei(t.b),this}copyLinearToSRGB(t){return this.r=Ks(t.r),this.g=Ks(t.g),this.b=Ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return ve.workingToColorSpace(un.copy(this),t),Math.round(le(un.r*255,0,255))*65536+Math.round(le(un.g*255,0,255))*256+Math.round(le(un.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ve.workingColorSpace){ve.workingToColorSpace(un.copy(this),e);const i=un.r,s=un.g,r=un.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ve.workingColorSpace){return ve.workingToColorSpace(un.copy(this),e),t.r=un.r,t.g=un.g,t.b=un.b,t}getStyle(t=ke){ve.workingToColorSpace(un.copy(this),t);const e=un.r,i=un.g,s=un.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Li),this.setHSL(Li.h+t,Li.s+e,Li.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Li),t.getHSL(ao);const i=Pr(Li.h,ao.h,e),s=Pr(Li.s,ao.s,e),r=Pr(Li.l,ao.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new Nt;Nt.NAMES=Id;class $c{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Nt(t),this.near=e,this.far=i}clone(){return new $c(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class t0 extends ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const kn=new O,pi=new O,Wa=new O,mi=new O,Cs=new O,Ps=new O,Xh=new O,Xa=new O,Ya=new O,qa=new O,Ka=new Ge,Za=new Ge,Ja=new Ge;class Wn{constructor(t=new O,e=new O,i=new O){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),kn.subVectors(t,e),s.cross(kn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){kn.subVectors(s,e),pi.subVectors(i,e),Wa.subVectors(t,e);const o=kn.dot(kn),a=kn.dot(pi),l=kn.dot(Wa),c=pi.dot(pi),h=pi.dot(Wa),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mi.x),l.addScaledVector(o,mi.y),l.addScaledVector(a,mi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Ka.setScalar(0),Za.setScalar(0),Ja.setScalar(0),Ka.fromBufferAttribute(t,e),Za.fromBufferAttribute(t,i),Ja.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ka,r.x),o.addScaledVector(Za,r.y),o.addScaledVector(Ja,r.z),o}static isFrontFacing(t,e,i,s){return kn.subVectors(i,e),pi.subVectors(t,e),kn.cross(pi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return kn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),kn.cross(pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Wn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Wn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Wn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Wn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Wn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Cs.subVectors(s,i),Ps.subVectors(r,i),Xa.subVectors(t,i);const l=Cs.dot(Xa),c=Ps.dot(Xa);if(l<=0&&c<=0)return e.copy(i);Ya.subVectors(t,s);const h=Cs.dot(Ya),d=Ps.dot(Ya);if(h>=0&&d<=h)return e.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Cs,o);qa.subVectors(t,r);const f=Cs.dot(qa),g=Ps.dot(qa);if(g>=0&&f<=g)return e.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Ps,a);const p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return Xh.subVectors(r,s),a=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(Xh,a);const m=1/(p+v+u);return o=v*m,a=u*m,e.copy(i).addScaledVector(Cs,o).addScaledVector(Ps,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Hi{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Gn):Gn.fromBufferAttribute(r,o),Gn.applyMatrix4(t.matrixWorld),this.expandByPoint(Gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),lo.copy(i.boundingBox)),lo.applyMatrix4(t.matrixWorld),this.union(lo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gn),Gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(dr),co.subVectors(this.max,dr),Ds.subVectors(t.a,dr),Ls.subVectors(t.b,dr),Is.subVectors(t.c,dr),Ii.subVectors(Ls,Ds),Ni.subVectors(Is,Ls),Yi.subVectors(Ds,Is);let e=[0,-Ii.z,Ii.y,0,-Ni.z,Ni.y,0,-Yi.z,Yi.y,Ii.z,0,-Ii.x,Ni.z,0,-Ni.x,Yi.z,0,-Yi.x,-Ii.y,Ii.x,0,-Ni.y,Ni.x,0,-Yi.y,Yi.x,0];return!$a(e,Ds,Ls,Is,co)||(e=[1,0,0,0,1,0,0,0,1],!$a(e,Ds,Ls,Is,co))?!1:(ho.crossVectors(Ii,Ni),e=[ho.x,ho.y,ho.z],$a(e,Ds,Ls,Is,co))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const gi=[new O,new O,new O,new O,new O,new O,new O,new O],Gn=new O,lo=new Hi,Ds=new O,Ls=new O,Is=new O,Ii=new O,Ni=new O,Yi=new O,dr=new O,co=new O,ho=new O,qi=new O;function $a(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){qi.fromArray(n,r);const a=s.x*Math.abs(qi.x)+s.y*Math.abs(qi.y)+s.z*Math.abs(qi.z),l=t.dot(qi),c=e.dot(qi),h=i.dot(qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const yi=e0();function e0(){const n=new ArrayBuffer(4),t=new Float32Array(n),e=new Uint32Array(n),i=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,s[l]=24,s[l|256]=24):(i[l]=31744,i[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:i,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function n0(n){Math.abs(n)>65504&&$t("DataUtils.toHalfFloat(): Value out of range."),n=le(n,-65504,65504),yi.floatView[0]=n;const t=yi.uint32View[0],e=t>>23&511;return yi.baseTable[e]+((t&8388607)>>yi.shiftTable[e])}function i0(n){const t=n>>10;return yi.uint32View[0]=yi.mantissaTable[yi.offsetTable[t]+(n&1023)]+yi.exponentTable[t],yi.floatView[0]}class uo{static toHalfFloat(t){return n0(t)}static fromHalfFloat(t){return i0(t)}}const qe=new O,fo=new ut;let s0=0;class Me extends Gi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:s0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Pd,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)fo.fromBufferAttribute(this,e),fo.applyMatrix3(t),this.setXY(e,fo.x,fo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Vn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Pe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array),s=Pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array),s=Pe(s,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Nd extends Me{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ud extends Me{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ee extends Me{constructor(t,e,i){super(new Float32Array(t),e,i)}}const r0=new Hi,fr=new O,Qa=new O;class gs{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):r0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fr.subVectors(t,this.center);const e=fr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(fr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fr.copy(t.center).add(Qa)),this.expandByPoint(fr.copy(t.center).sub(Qa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let o0=0;const In=new ae,ja=new ne,Ns=new O,Rn=new Hi,pr=new Hi,tn=new O;class ge extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yp(t)?Ud:Nd)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new se().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return In.makeRotationFromQuaternion(t),this.applyMatrix4(In),this}rotateX(t){return In.makeRotationX(t),this.applyMatrix4(In),this}rotateY(t){return In.makeRotationY(t),this.applyMatrix4(In),this}rotateZ(t){return In.makeRotationZ(t),this.applyMatrix4(In),this}translate(t,e,i){return In.makeTranslation(t,e,i),this.applyMatrix4(In),this}scale(t,e,i){return In.makeScale(t,e,i),this.applyMatrix4(In),this}lookAt(t){return ja.lookAt(t),ja.updateMatrix(),this.applyMatrix4(ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ee(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&$t("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){_e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Rn.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&_e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){_e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];pr.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(Rn.min,pr.min),Rn.expandByPoint(tn),tn.addVectors(Rn.max,pr.max),Rn.expandByPoint(tn)):(Rn.expandByPoint(pr.min),Rn.expandByPoint(pr.max))}Rn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)tn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(tn));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)tn.fromBufferAttribute(a,c),l&&(Ns.fromBufferAttribute(t,c),tn.add(Ns)),s=Math.max(s,i.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&_e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){_e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Me(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new O,l[x]=new O;const c=new O,h=new O,d=new O,u=new ut,f=new ut,g=new ut,v=new O,p=new O;function m(x,S,E){c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,S),d.fromBufferAttribute(i,E),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,E),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const T=1/(f.x*g.y-g.x*f.y);isFinite(T)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(T),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(T),a[x].add(v),a[S].add(v),a[E].add(v),l[x].add(p),l[S].add(p),l[E].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let x=0,S=y.length;x<S;++x){const E=y[x],T=E.start,C=E.count;for(let P=T,L=T+C;P<L;P+=3)m(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const w=new O,_=new O,M=new O,b=new O;function R(x){M.fromBufferAttribute(s,x),b.copy(M);const S=a[x];w.copy(S),w.sub(M.multiplyScalar(M.dot(S))).normalize(),_.crossVectors(b,S);const T=_.dot(l[x])<0?-1:1;o.setXYZW(x,w.x,w.y,w.z,T)}for(let x=0,S=y.length;x<S;++x){const E=y[x],T=E.start,C=E.count;for(let P=T,L=T+C;P<L;P+=3)R(t.getX(P+0)),R(t.getX(P+1)),R(t.getX(P+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Me(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,h=new O,d=new O;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),v=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)tn.fromBufferAttribute(t,e),tn.normalize(),t.setXYZ(e,tn.x,tn.y,tn.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new Me(u,h,d)}if(this.index===null)return $t("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ge,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class a0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Pd,this.updateRanges=[],this.version=0,this.uuid=oi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const pn=new O;class la{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)pn.fromBufferAttribute(this,e),pn.applyMatrix4(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)pn.fromBufferAttribute(this,e),pn.applyNormalMatrix(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)pn.fromBufferAttribute(this,e),pn.transformDirection(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Vn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Pe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Vn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Vn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Vn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Vn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array),s=Pe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array),s=Pe(s,this.array),r=Pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){aa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Me(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new la(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){aa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const tl=new O,l0=new O,c0=new se;class vi{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=tl.subVectors(i,e).cross(l0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const s=t.delta(tl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||c0.getNormalMatrix(t),s=this.coplanarPoint(tl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let h0=0;class ir extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=oi(),this.name="",this.type="Material",this.blending=Ar,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yd,this.blendDst=Md,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=Nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oa,this.stencilZFail=Oa,this.stencilZPass=Oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){$t(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){$t(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Nt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new vi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ut().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ut().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const _i=new O,el=new O,po=new O,mo=new O;class va{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_i)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=_i.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_i.copy(this.origin).addScaledVector(this.direction,e),_i.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){el.copy(t).add(e).multiplyScalar(.5),po.copy(e).sub(t).normalize(),mo.copy(this.origin).sub(el);const r=t.distanceTo(e)*.5,o=-this.direction.dot(po),a=mo.dot(this.direction),l=-mo.dot(po),c=mo.lengthSq(),h=Math.abs(1-o*o);let d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(el).addScaledVector(po,u),f}intersectSphere(t,e){if(t.radius<0)return null;_i.subVectors(t.center,this.origin);const i=_i.dot(this.direction),s=_i.dot(_i)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,_i)!==null}intersectTriangle(t,e,i,s,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,g=e.x-o.x,v=e.y-o.y,p=e.z-o.z,m=i.x-o.x,y=i.y-o.y,w=i.z-o.z,_=Math.abs(l),M=Math.abs(c),b=Math.abs(h);let R,x,S,E,T,C,P,L,I,N,B,G;if(_>=M&&_>=b?(S=l,C=d,I=g,G=m,l>=0?(R=c,x=h,E=u,T=f,P=v,L=p,N=y,B=w):(R=h,x=c,E=f,T=u,P=p,L=v,N=w,B=y)):M>=b?(S=c,C=u,I=v,G=y,c>=0?(R=h,x=l,E=f,T=d,P=p,L=g,N=w,B=m):(R=l,x=h,E=d,T=f,P=g,L=p,N=m,B=w)):(S=h,C=f,I=p,G=w,h>=0?(R=l,x=c,E=d,T=u,P=g,L=v,N=m,B=y):(R=c,x=l,E=u,T=d,P=v,L=g,N=y,B=m)),S===0)return null;const U=R/S,k=x/S,X=1/S,dt=E-U*C,yt=T-k*C,wt=P-U*I,bt=L-k*I,Qt=N-U*G,j=B-k*G,nt=Qt*bt-j*wt,W=dt*j-yt*Qt,st=wt*yt-bt*dt;if(s){if(nt<0||W<0||st<0)return null}else if((nt<0||W<0||st<0)&&(nt>0||W>0||st>0))return null;const J=nt+W+st;if(J===0)return null;const ft=X*(nt*C+W*I+st*G);return(J>0?ft<0:ft>0)?null:this.at(ft/J,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bn extends ir{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=Sd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Yh=new ae,Ki=new va,go=new gs,qh=new O,_o=new O,xo=new O,vo=new O,nl=new O,yo=new O,Kh=new O,Mo=new O;class Q extends ne{constructor(t=new ge,e=new Bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){yo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(nl.fromBufferAttribute(d,t),o?yo.addScaledVector(nl,h):yo.addScaledVector(nl.sub(e),h))}e.add(yo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),go.copy(i.boundingSphere),go.applyMatrix4(r),Ki.copy(t.ray).recast(t.near),!(go.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(go,qh)===null||Ki.origin.distanceToSquared(qh)>(t.far-t.near)**2))&&(Yh.copy(r).invert(),Ki.copy(t.ray).applyMatrix4(Yh),!(i.boundingBox!==null&&Ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ki)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const p=u[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),w=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let _=y,M=w;_<M;_+=3){const b=a.getX(_),R=a.getX(_+1),x=a.getX(_+2);s=So(this,m,t,i,c,h,d,b,R,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const y=a.getX(p),w=a.getX(p+1),_=a.getX(p+2);s=So(this,o,t,i,c,h,d,y,w,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const p=u[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),w=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let _=y,M=w;_<M;_+=3){const b=_,R=_+1,x=_+2;s=So(this,m,t,i,c,h,d,b,R,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const y=p,w=p+1,_=p+2;s=So(this,o,t,i,c,h,d,y,w,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function u0(n,t,e,i,s,r,o,a){let l;if(t.side===vn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===ls,a),l===null)return null;Mo.copy(a),Mo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Mo);return c<e.near||c>e.far?null:{distance:c,point:Mo.clone(),object:n}}function So(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,_o),n.getVertexPosition(l,xo),n.getVertexPosition(c,vo);const h=u0(n,t,e,i,_o,xo,vo,Kh);if(h){const d=new O;Wn.getBarycoord(Kh,_o,xo,vo,d),s&&(h.uv=Wn.getInterpolatedAttribute(s,a,l,c,d,new ut)),r&&(h.uv1=Wn.getInterpolatedAttribute(r,a,l,c,d,new ut)),o&&(h.normal=Wn.getInterpolatedAttribute(o,a,l,c,d,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new O,materialIndex:0};Wn.getNormal(_o,xo,vo,u.normal),h.face=u,h.barycoord=d}return h}class ca extends an{constructor(t=null,e=1,i=1,s,r,o,a,l,c=sn,h=sn,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zs extends Me{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Us=new ae,Zh=new ae,wo=[],Jh=new Hi,d0=new ae,mr=new Q,gr=new gs;class ye extends Q{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Zs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,d0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Hi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Us),Jh.copy(t.boundingBox).applyMatrix4(Us),this.boundingBox.union(Jh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new gs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Us),gr.copy(t.boundingSphere).applyMatrix4(Us),this.boundingSphere.union(gr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(mr.geometry=this.geometry,mr.material=this.material,mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gr.copy(this.boundingSphere),gr.applyMatrix4(i),t.ray.intersectsSphere(gr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Us),Zh.multiplyMatrices(i,Us),mr.matrixWorld=Zh,mr.raycast(t,wo);for(let o=0,a=wo.length;o<a;o++){const l=wo[o];l.instanceId=r,l.object=this,e.push(l)}wo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Zs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ca(new Float32Array(s*this.count),s,this.count,Hc,Pn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Zi=new gs,f0=new ut(.5,.5),bo=new O;class Qc{constructor(t=new vi,e=new vi,i=new vi,s=new vi,r=new vi,o=new vi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ii,i=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],v=r[9],p=r[10],m=r[11],y=r[12],w=r[13],_=r[14],M=r[15];if(s[0].setComponents(c-o,f-h,m-g,M-y).normalize(),s[1].setComponents(c+o,f+h,m+g,M+y).normalize(),s[2].setComponents(c+a,f+d,m+v,M+w).normalize(),s[3].setComponents(c-a,f-d,m-v,M-w).normalize(),i)s[4].setComponents(l,u,p,_).normalize(),s[5].setComponents(c-l,f-u,m-p,M-_).normalize();else if(s[4].setComponents(c-l,f-u,m-p,M-_).normalize(),e===ii)s[5].setComponents(c+l,f+u,m+p,M+_).normalize();else if(e===kr)s[5].setComponents(l,u,p,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(t){Zi.center.set(0,0,0);const e=f0.distanceTo(t.center);return Zi.radius=.7071067811865476+e,Zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(bo.x=s.normal.x>0?t.max.x:t.min.x,bo.y=s.normal.y>0?t.max.y:t.min.y,bo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(bo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class os extends ir{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const $h=new ae,xc=new va,Eo=new gs,To=new O;class Js extends ne{constructor(t=new ge,e=new os){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Eo.copy(i.boundingSphere),Eo.applyMatrix4(s),Eo.radius+=r,t.ray.intersectsSphere(Eo)===!1)return;$h.copy(s).invert(),xc.copy(t.ray).applyMatrix4($h);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,v=f;g<v;g++){const p=c.getX(g);To.fromBufferAttribute(d,p),Qh(To,p,l,s,t,e,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,v=f;g<v;g++)To.fromBufferAttribute(d,g),Qh(To,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Qh(n,t,e,i,s,r,o){const a=xc.distanceSqToPoint(n);if(a<e){const l=new O;xc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Od extends an{constructor(t=[],e=cs,i,s,r,o,a,l,c,h){super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class En extends an{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hr extends an{constructor(t,e,i=hi,s,r,o,a=sn,l=sn,c,h=Ti,d=1){if(h!==Ti&&h!==is)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Zc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class p0 extends Hr{constructor(t,e=hi,i=cs,s,r,o=sn,a=sn,l,c=Ti){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Fd extends an{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Dt extends ge{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(d,2));function g(v,p,m,y,w,_,M,b,R,x,S){const E=_/R,T=M/x,C=_/2,P=M/2,L=b/2,I=R+1,N=x+1;let B=0,G=0;const U=new O;for(let k=0;k<N;k++){const X=k*T-P;for(let dt=0;dt<I;dt++){const yt=dt*E-C;U[v]=yt*y,U[p]=X*w,U[m]=L,c.push(U.x,U.y,U.z),U[v]=0,U[p]=0,U[m]=b>0?1:-1,h.push(U.x,U.y,U.z),d.push(dt/R),d.push(1-k/x),B+=1}}for(let k=0;k<x;k++)for(let X=0;X<R;X++){const dt=u+X+I*k,yt=u+X+I*(k+1),wt=u+(X+1)+I*(k+1),bt=u+(X+1)+I*k;l.push(dt,yt,bt),l.push(yt,wt,bt),G+=6}a.addGroup(f,G,S),f+=G,u+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Zn extends ge{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new O,h=new ut;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=i+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ee(o,3)),this.setAttribute("normal",new ee(a,3)),this.setAttribute("uv",new ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class me extends ge{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const v=[],p=i/2;let m=0;y(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ee(d,3)),this.setAttribute("normal",new ee(u,3)),this.setAttribute("uv",new ee(f,2));function y(){const _=new O,M=new O;let b=0;const R=(e-t)/i;for(let x=0;x<=r;x++){const S=[],E=x/r,T=E*(e-t)+t;for(let C=0;C<=s;C++){const P=C/s,L=P*l+a,I=Math.sin(L),N=Math.cos(L);M.x=T*I,M.y=-E*i+p,M.z=T*N,d.push(M.x,M.y,M.z),_.set(I,R,N).normalize(),u.push(_.x,_.y,_.z),f.push(P,1-E),S.push(g++)}v.push(S)}for(let x=0;x<s;x++)for(let S=0;S<r;S++){const E=v[S][x],T=v[S+1][x],C=v[S+1][x+1],P=v[S][x+1];(t>0||S!==0)&&(h.push(E,T,P),b+=3),(e>0||S!==r-1)&&(h.push(T,C,P),b+=3)}c.addGroup(m,b,0),m+=b}function w(_){const M=g,b=new ut,R=new O;let x=0;const S=_===!0?t:e,E=_===!0?1:-1;for(let C=1;C<=s;C++)d.push(0,p*E,0),u.push(0,E,0),f.push(.5,.5),g++;const T=g;for(let C=0;C<=s;C++){const L=C/s*l+a,I=Math.cos(L),N=Math.sin(L);R.x=S*N,R.y=p*E,R.z=S*I,d.push(R.x,R.y,R.z),u.push(0,E,0),b.x=I*.5+.5,b.y=N*.5*E+.5,f.push(b.x,b.y),g++}for(let C=0;C<s;C++){const P=M+C,L=T+C;_===!0?h.push(L,L+1,P):h.push(L+1,L,P),x+=3}c.addGroup(m,x,_===!0?1:2),m+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new me(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ai extends me{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ai(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ya extends ge{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new ee(r,3)),this.setAttribute("normal",new ee(r.slice(),3)),this.setAttribute("uv",new ee(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const w=new O,_=new O,M=new O;for(let b=0;b<e.length;b+=3)f(e[b+0],w),f(e[b+1],_),f(e[b+2],M),l(w,_,M,y)}function l(y,w,_,M){const b=M+1,R=[];for(let x=0;x<=b;x++){R[x]=[];const S=y.clone().lerp(_,x/b),E=w.clone().lerp(_,x/b),T=b-x;for(let C=0;C<=T;C++)C===0&&x===b?R[x][C]=S:R[x][C]=S.clone().lerp(E,C/T)}for(let x=0;x<b;x++)for(let S=0;S<2*(b-x)-1;S++){const E=Math.floor(S/2);S%2===0?(u(R[x][E+1]),u(R[x+1][E]),u(R[x][E])):(u(R[x][E+1]),u(R[x+1][E+1]),u(R[x+1][E]))}}function c(y){const w=new O;for(let _=0;_<r.length;_+=3)w.x=r[_+0],w.y=r[_+1],w.z=r[_+2],w.normalize().multiplyScalar(y),r[_+0]=w.x,r[_+1]=w.y,r[_+2]=w.z}function h(){const y=new O;for(let w=0;w<r.length;w+=3){y.x=r[w+0],y.y=r[w+1],y.z=r[w+2];const _=p(y)/2/Math.PI+.5,M=m(y)/Math.PI+.5;o.push(_,1-M)}g(),d()}function d(){for(let y=0;y<o.length;y+=6){const w=o[y+0],_=o[y+2],M=o[y+4],b=Math.max(w,_,M),R=Math.min(w,_,M);b>.9&&R<.1&&(w<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),M<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,w){const _=y*3;w.x=t[_+0],w.y=t[_+1],w.z=t[_+2]}function g(){const y=new O,w=new O,_=new O,M=new O,b=new ut,R=new ut,x=new ut;for(let S=0,E=0;S<r.length;S+=9,E+=6){y.set(r[S+0],r[S+1],r[S+2]),w.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),b.set(o[E+0],o[E+1]),R.set(o[E+2],o[E+3]),x.set(o[E+4],o[E+5]),M.copy(y).add(w).add(_).divideScalar(3);const T=p(M);v(b,E+0,y,T),v(R,E+2,w,T),v(x,E+4,_,T)}}function v(y,w,_,M){M<0&&y.x===1&&(o[w]=y.x-1),_.x===0&&_.z===0&&(o[w]=M/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ya(t.vertices,t.indices,t.radius,t.detail)}}class jc extends ya{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new jc(t.radius,t.detail)}}class ui{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$t("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const h=i[s],u=i[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ut:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new O,s=[],r=[],o=[],a=new O,l=new ae;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new O)}r[0]=new O,o[0]=new O;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(le(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(le(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class th extends ui{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ut){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class m0 extends th{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function eh(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const jh=new O,tu=new O,il=new eh,sl=new eh,rl=new eh;class g0 extends ui{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new O){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(tu.subVectors(s[0],s[1]).add(s[0]),c=tu);const d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(jh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=jh),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),il.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,v,p),sl.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,v,p),rl.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(il.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),sl.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),rl.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(il.calc(l),sl.calc(l),rl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function eu(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function _0(n,t){const e=1-n;return e*e*t}function x0(n,t){return 2*(1-n)*n*t}function v0(n,t){return n*n*t}function Dr(n,t,e,i){return _0(n,t)+x0(n,e)+v0(n,i)}function y0(n,t){const e=1-n;return e*e*e*t}function M0(n,t){const e=1-n;return 3*e*e*n*t}function S0(n,t){return 3*(1-n)*n*n*t}function w0(n,t){return n*n*n*t}function Lr(n,t,e,i,s){return y0(n,t)+M0(n,e)+S0(n,i)+w0(n,s)}class Bd extends ui{constructor(t=new ut,e=new ut,i=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ut){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Lr(t,s.x,r.x,o.x,a.x),Lr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class b0 extends ui{constructor(t=new O,e=new O,i=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new O){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Lr(t,s.x,r.x,o.x,a.x),Lr(t,s.y,r.y,o.y,a.y),Lr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class zd extends ui{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class E0 extends ui{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kd extends ui{constructor(t=new ut,e=new ut,i=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ut){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Dr(t,s.x,r.x,o.x),Dr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ha extends ui{constructor(t=new O,e=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new O){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Dr(t,s.x,r.x,o.x),Dr(t,s.y,r.y,o.y),Dr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gd extends ui{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(eu(a,l.x,c.x,h.x,d.x),eu(a,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new ut().fromArray(s))}return this}}var ua=Object.freeze({__proto__:null,ArcCurve:m0,CatmullRomCurve3:g0,CubicBezierCurve:Bd,CubicBezierCurve3:b0,EllipseCurve:th,LineCurve:zd,LineCurve3:E0,QuadraticBezierCurve:kd,QuadraticBezierCurve3:ha,SplineCurve:Gd});class T0 extends ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ua[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new ua[s.type]().fromJSON(s))}return this}}class nu extends T0{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new zd(this.currentPoint.clone(),new ut(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new kd(this.currentPoint.clone(),new ut(t,e),new ut(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new Bd(this.currentPoint.clone(),new ut(t,e),new ut(i,s),new ut(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Gd(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const c=new th(t,e,i,s,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class $r extends nu{constructor(t){super(t),this.uuid=oi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new nu().fromJSON(s))}return this}}function A0(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Hd(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=L0(n,t,r,e)),n.length>80*e){a=n[0],l=n[1];let h=a,d=l;for(let u=e;u<s;u+=e){const f=n[u],g=n[u+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Vr(r,o,e,a,l,c,0),o}function Hd(n,t,e,i,s){let r;if(s===V0(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=iu(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=iu(o/i|0,n[o],n[o+1],r);return r&&tr(r,r.next)&&(Xr(r),r=r.next),r}function us(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(tr(e,e.next)||He(e.prev,e,e.next)===0)){if(Xr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Vr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&F0(n,i,s,r);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?C0(n,i,s,r):R0(n)){t.push(l.i,n.i,c.i),Xr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=P0(us(n),t),Vr(n,t,e,i,s,r,2)):o===2&&D0(n,t,e,i,s,r):Vr(us(n),t,e,i,s,r,1);break}}}function R0(n){const t=n.prev,e=n,i=n.next;if(He(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c);let g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&Mr(s,a,r,l,o,c,g.x,g.y)&&He(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function C0(n,t,e,i){const s=n.prev,r=n,o=n.next;if(He(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),g=Math.min(h,d,u),v=Math.max(a,l,c),p=Math.max(h,d,u),m=vc(f,g,t,e,i),y=vc(v,p,t,e,i);let w=n.prevZ,_=n.nextZ;for(;w&&w.z>=m&&_&&_.z<=y;){if(w.x>=f&&w.x<=v&&w.y>=g&&w.y<=p&&w!==s&&w!==o&&Mr(a,h,l,d,c,u,w.x,w.y)&&He(w.prev,w,w.next)>=0||(w=w.prevZ,_.x>=f&&_.x<=v&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&Mr(a,h,l,d,c,u,_.x,_.y)&&He(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;w&&w.z>=m;){if(w.x>=f&&w.x<=v&&w.y>=g&&w.y<=p&&w!==s&&w!==o&&Mr(a,h,l,d,c,u,w.x,w.y)&&He(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&Mr(a,h,l,d,c,u,_.x,_.y)&&He(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function P0(n,t){let e=n;do{const i=e.prev,s=e.next.next;!tr(i,s)&&Wd(i,e,e.next,s)&&Wr(i,s)&&Wr(s,i)&&(t.push(i.i,e.i,s.i),Xr(e),Xr(e.next),e=n=s),e=e.next}while(e!==n);return us(e)}function D0(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&k0(o,a)){let l=Xd(o,a);o=us(o,o.next),l=us(l,l.next),Vr(o,t,e,i,s,r,0),Vr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function L0(n,t,e,i){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Hd(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(z0(c))}s.sort(I0);for(let r=0;r<s.length;r++)e=N0(s[r],e);return e}function I0(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function N0(n,t){const e=U0(n,t);if(!e)return t;const i=Xd(e,n);return us(i,i.next),us(e,e.next)}function U0(n,t){let e=t;const i=n.x,s=n.y;let r=-1/0,o;if(tr(n,e))return e;do{if(tr(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===i))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Vd(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){const d=Math.abs(s-e.y)/(i-e.x);Wr(e,n)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&O0(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function O0(n,t){return He(n.prev,n,t.prev)<0&&He(t.next,n,n.next)<0}function F0(n,t,e,i){let s=n;do s.z===0&&(s.z=vc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,B0(s)}function B0(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function vc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function z0(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Vd(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Mr(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&Vd(n,t,e,i,s,r,o,a)}function k0(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!G0(n,t)&&(Wr(n,t)&&Wr(t,n)&&H0(n,t)&&(He(n.prev,n,t.prev)||He(n,t.prev,t))||tr(n,t)&&He(n.prev,n,n.next)>0&&He(t.prev,t,t.next)>0)}function He(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function tr(n,t){return n.x===t.x&&n.y===t.y}function Wd(n,t,e,i){const s=Ro(He(n,t,e)),r=Ro(He(n,t,i)),o=Ro(He(e,i,n)),a=Ro(He(e,i,t));return!!(s!==r&&o!==a||s===0&&Ao(n,e,t)||r===0&&Ao(n,i,t)||o===0&&Ao(e,n,i)||a===0&&Ao(e,t,i))}function Ao(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Ro(n){return n>0?1:n<0?-1:0}function G0(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Wd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Wr(n,t){return He(n.prev,n,n.next)<0?He(n,t,n.next)>=0&&He(n,n.prev,t)>=0:He(n,t,n.prev)<0||He(n,n.next,t)<0}function H0(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Xd(n,t){const e=yc(n.i,n.x,n.y),i=yc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function iu(n,t,e,i){const s=yc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Xr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function yc(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function V0(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class W0{static triangulate(t,e,i=2){return A0(t,e,i)}}class Si{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Si.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];su(t),ru(i,t);let o=t.length;e.forEach(su);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,ru(i,e[l]);const a=W0.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function su(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function ru(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class nh extends ge{constructor(t=new $r([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new ee(s,3)),this.setAttribute("uv",new ee(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:X0;let w,_=!1,M,b,R,x;if(m){w=m.getSpacedPoints(h),_=!0,u=!1;const Z=m.isCatmullRomCurve3?m.closed:!1;M=m.computeFrenetFrames(h,Z),b=new O,R=new O,x=new O}u||(p=0,f=0,g=0,v=0);const S=a.extractPoints(c);let E=S.shape;const T=S.holes;if(!Si.isClockWise(E)){E=E.reverse();for(let Z=0,tt=T.length;Z<tt;Z++){const it=T[Z];Si.isClockWise(it)&&(T[Z]=it.reverse())}}function P(Z){const it=10000000000000001e-36;let ct=Z[0];for(let mt=1;mt<=Z.length;mt++){const _t=mt%Z.length,Mt=Z[_t],xt=Mt.x-ct.x,Ut=Mt.y-ct.y,z=xt*xt+Ut*Ut,jt=Math.max(Math.abs(Mt.x),Math.abs(Mt.y),Math.abs(ct.x),Math.abs(ct.y)),he=it*jt*jt;if(z<=he){Z.splice(_t,1),mt--;continue}ct=Mt}}P(E),T.forEach(P);const L=T.length,I=E;for(let Z=0;Z<L;Z++){const tt=T[Z];E=E.concat(tt)}function N(Z,tt,it){return tt||_e("ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(tt,it)}const B=E.length;function G(Z,tt,it){let ct,mt,_t;const Mt=Z.x-tt.x,xt=Z.y-tt.y,Ut=it.x-Z.x,z=it.y-Z.y,jt=Mt*Mt+xt*xt,he=Mt*z-xt*Ut;if(Math.abs(he)>Number.EPSILON){const F=Math.sqrt(jt),A=Math.sqrt(Ut*Ut+z*z),Y=tt.x-xt/F,$=tt.y+Mt/F,rt=it.x-z/A,St=it.y+Ut/A,Tt=((rt-Y)*z-(St-$)*Ut)/(Mt*z-xt*Ut);ct=Y+Mt*Tt-Z.x,mt=$+xt*Tt-Z.y;const ot=ct*ct+mt*mt;if(ot<=2)return new ut(ct,mt);_t=Math.sqrt(ot/2)}else{let F=!1;Mt>Number.EPSILON?Ut>Number.EPSILON&&(F=!0):Mt<-Number.EPSILON?Ut<-Number.EPSILON&&(F=!0):Math.sign(xt)===Math.sign(z)&&(F=!0),F?(ct=-xt,mt=Mt,_t=Math.sqrt(jt)):(ct=Mt,mt=xt,_t=Math.sqrt(jt/2))}return new ut(ct/_t,mt/_t)}const U=[];for(let Z=0,tt=I.length,it=tt-1,ct=Z+1;Z<tt;Z++,it++,ct++)it===tt&&(it=0),ct===tt&&(ct=0),U[Z]=G(I[Z],I[it],I[ct]);const k=[];let X,dt=U.concat();for(let Z=0,tt=L;Z<tt;Z++){const it=T[Z];X=[];for(let ct=0,mt=it.length,_t=mt-1,Mt=ct+1;ct<mt;ct++,_t++,Mt++)_t===mt&&(_t=0),Mt===mt&&(Mt=0),X[ct]=G(it[ct],it[_t],it[Mt]);k.push(X),dt=dt.concat(X)}let yt;if(p===0)yt=Si.triangulateShape(I,T);else{const Z=[],tt=[];for(let it=0;it<p;it++){const ct=it/p,mt=f*Math.cos(ct*Math.PI/2),_t=g*Math.sin(ct*Math.PI/2)+v;for(let Mt=0,xt=I.length;Mt<xt;Mt++){const Ut=N(I[Mt],U[Mt],_t);W(Ut.x,Ut.y,-mt),ct===0&&Z.push(Ut)}for(let Mt=0,xt=L;Mt<xt;Mt++){const Ut=T[Mt];X=k[Mt];const z=[];for(let jt=0,he=Ut.length;jt<he;jt++){const F=N(Ut[jt],X[jt],_t);W(F.x,F.y,-mt),ct===0&&z.push(F)}ct===0&&tt.push(z)}}yt=Si.triangulateShape(Z,tt)}const wt=yt.length,bt=g+v;for(let Z=0;Z<B;Z++){const tt=u?N(E[Z],dt[Z],bt):E[Z];_?(R.copy(M.normals[0]).multiplyScalar(tt.x),b.copy(M.binormals[0]).multiplyScalar(tt.y),x.copy(w[0]).add(R).add(b),W(x.x,x.y,x.z)):W(tt.x,tt.y,0)}for(let Z=1;Z<=h;Z++)for(let tt=0;tt<B;tt++){const it=u?N(E[tt],dt[tt],bt):E[tt];_?(R.copy(M.normals[Z]).multiplyScalar(it.x),b.copy(M.binormals[Z]).multiplyScalar(it.y),x.copy(w[Z]).add(R).add(b),W(x.x,x.y,x.z)):W(it.x,it.y,d/h*Z)}for(let Z=p-1;Z>=0;Z--){const tt=Z/p,it=f*Math.cos(tt*Math.PI/2),ct=g*Math.sin(tt*Math.PI/2)+v;for(let mt=0,_t=I.length;mt<_t;mt++){const Mt=N(I[mt],U[mt],ct);W(Mt.x,Mt.y,d+it)}for(let mt=0,_t=T.length;mt<_t;mt++){const Mt=T[mt];X=k[mt];for(let xt=0,Ut=Mt.length;xt<Ut;xt++){const z=N(Mt[xt],X[xt],ct);_?W(z.x,z.y+w[h-1].y,w[h-1].x+it):W(z.x,z.y,d+it)}}}Qt(),j();function Qt(){const Z=s.length/3;if(u){let tt=0,it=B*tt;for(let ct=0;ct<wt;ct++){const mt=yt[ct];st(mt[2]+it,mt[1]+it,mt[0]+it)}tt=h+p*2,it=B*tt;for(let ct=0;ct<wt;ct++){const mt=yt[ct];st(mt[0]+it,mt[1]+it,mt[2]+it)}}else{for(let tt=0;tt<wt;tt++){const it=yt[tt];st(it[2],it[1],it[0])}for(let tt=0;tt<wt;tt++){const it=yt[tt];st(it[0]+B*h,it[1]+B*h,it[2]+B*h)}}i.addGroup(Z,s.length/3-Z,0)}function j(){const Z=s.length/3;let tt=0;nt(I,tt),tt+=I.length;for(let it=0,ct=T.length;it<ct;it++){const mt=T[it];nt(mt,tt),tt+=mt.length}i.addGroup(Z,s.length/3-Z,1)}function nt(Z,tt){let it=Z.length;for(;--it>=0;){const ct=it;let mt=it-1;mt<0&&(mt=Z.length-1);for(let _t=0,Mt=h+p*2;_t<Mt;_t++){const xt=B*_t,Ut=B*(_t+1),z=tt+ct+xt,jt=tt+mt+xt,he=tt+mt+Ut,F=tt+ct+Ut;J(z,jt,he,F)}}}function W(Z,tt,it){l.push(Z),l.push(tt),l.push(it)}function st(Z,tt,it){ft(Z),ft(tt),ft(it);const ct=s.length/3,mt=y.generateTopUV(i,s,ct-3,ct-2,ct-1);gt(mt[0]),gt(mt[1]),gt(mt[2])}function J(Z,tt,it,ct){ft(Z),ft(tt),ft(ct),ft(tt),ft(it),ft(ct);const mt=s.length/3,_t=y.generateSideWallUV(i,s,mt-6,mt-3,mt-2,mt-1);gt(_t[0]),gt(_t[1]),gt(_t[3]),gt(_t[1]),gt(_t[2]),gt(_t[3])}function ft(Z){s.push(l[Z*3+0]),s.push(l[Z*3+1]),s.push(l[Z*3+2])}function gt(Z){r.push(Z.x),r.push(Z.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Y0(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ua[s.type]().fromJSON(s)),new nh(i,t.options)}}const X0={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new ut(r,o),new ut(a,l),new ut(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],d=t[i*3+2],u=t[s*3],f=t[s*3+1],g=t[s*3+2],v=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ut(o,1-l),new ut(c,1-d),new ut(u,1-g),new ut(v,1-m)]:[new ut(a,1-l),new ut(h,1-d),new ut(f,1-g),new ut(p,1-m)]}};function Y0(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Jn extends ya{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Jn(t.radius,t.detail)}}class sr extends ge{constructor(t=[new ut(0,-.5),new ut(.5,0),new ut(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=le(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,d=new O,u=new ut,f=new O,g=new O,v=new O;let p=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-p,f.z=m*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let y=0;y<=e;y++){const w=i+y*h*s,_=Math.sin(w),M=Math.cos(w);for(let b=0;b<=t.length-1;b++){d.x=t[b].x*_,d.y=t[b].y,d.z=t[b].x*M,o.push(d.x,d.y,d.z),u.x=y/e,u.y=b/(t.length-1),a.push(u.x,u.y);const R=l[3*b+0]*_,x=l[3*b+1],S=l[3*b+0]*M;c.push(R,x,S)}}for(let y=0;y<e;y++)for(let w=0;w<t.length-1;w++){const _=w+y*t.length,M=_,b=_+t.length,R=_+t.length+1,x=_+1;r.push(M,b,x),r.push(R,x,b)}this.setIndex(r),this.setAttribute("position",new ee(o,3)),this.setAttribute("uv",new ee(a,2)),this.setAttribute("normal",new ee(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sr(t.points,t.segments,t.phiStart,t.phiLength)}}class Ae extends ge{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],g=[],v=[],p=[];for(let m=0;m<h;m++){const y=m*u-o;for(let w=0;w<c;w++){const _=w*d-r;g.push(_,-y,0),v.push(0,0,1),p.push(w/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const w=y+c*m,_=y+c*(m+1),M=y+1+c*(m+1),b=y+1+c*m;f.push(w,_,b),f.push(_,M,b)}this.setIndex(f),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(v,3)),this.setAttribute("uv",new ee(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ae(t.width,t.height,t.widthSegments,t.heightSegments)}}class ih extends ge{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let d=t;const u=(e-t)/s,f=new O,g=new ut;for(let v=0;v<=s;v++){for(let p=0;p<=i;p++){const m=r+p/i*o;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let v=0;v<s;v++){const p=v*(i+1);for(let m=0;m<i;m++){const y=m+p,w=y,_=y+i+1,M=y+i+2,b=y+1;a.push(w,_,b),a.push(_,M,b)}}this.setIndex(a),this.setAttribute("position",new ee(l,3)),this.setAttribute("normal",new ee(c,3)),this.setAttribute("uv",new ee(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ih(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ma extends ge{constructor(t=new $r([new ut(0,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new ee(s,3)),this.setAttribute("normal",new ee(r,3)),this.setAttribute("uv",new ee(o,2));function c(h){const d=s.length/3,u=h.extractPoints(e);let f=u.shape;const g=u.holes;Si.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){const y=g[p];Si.isClockWise(y)===!0&&(g[p]=y.reverse())}const v=Si.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){const y=g[p];f=f.concat(y)}for(let p=0,m=f.length;p<m;p++){const y=f[p];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let p=0,m=v.length;p<m;p++){const y=v[p],w=y[0]+d,_=y[1]+d,M=y[2]+d;i.push(w,_,M),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return q0(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];i.push(o)}return new Ma(i,t.curveSegments)}}function q0(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class xn extends ge{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new O,u=new O,f=[],g=[],v=[],p=[];for(let m=0;m<=i;m++){const y=[],w=m/i,_=o+w*a,M=t*Math.cos(_),b=Math.sqrt(t*t-M*M);let R=0;m===0&&o===0?R=.5/e:m===i&&l===Math.PI&&(R=-.5/e);for(let x=0;x<=e;x++){const S=x/e,E=s+S*r;d.x=-b*Math.cos(E),d.y=M,d.z=b*Math.sin(E),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),p.push(S+R,1-w),y.push(c++)}h.push(y)}for(let m=0;m<i;m++)for(let y=0;y<e;y++){const w=h[m][y+1],_=h[m][y],M=h[m+1][y],b=h[m+1][y+1];(m!==0||o>0)&&f.push(w,_,b),(m!==i-1||l<Math.PI)&&f.push(_,M,b)}this.setIndex(f),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(v,3)),this.setAttribute("uv",new ee(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class rr extends ge{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],h=[],d=[],u=new O,f=new O,g=new O;for(let v=0;v<=i;v++){const p=o+v/i*a;for(let m=0;m<=s;m++){const y=m/s*r;f.x=(t+e*Math.cos(p))*Math.cos(y),f.y=(t+e*Math.cos(p))*Math.sin(y),f.z=e*Math.sin(p),c.push(f.x,f.y,f.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(m/s),d.push(v/i)}}for(let v=1;v<=i;v++)for(let p=1;p<=s;p++){const m=(s+1)*v+p-1,y=(s+1)*(v-1)+p-1,w=(s+1)*(v-1)+p,_=(s+1)*v+p;l.push(m,y,_),l.push(y,w,_)}this.setIndex(l),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class da extends ge{constructor(t=new ha(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new O,l=new O,c=new ut;let h=new O;const d=[],u=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new ee(d,3)),this.setAttribute("normal",new ee(u,3)),this.setAttribute("uv",new ee(f,2));function v(){for(let w=0;w<e;w++)p(w);p(r===!1?e:0),y(),m()}function p(w){h=t.getPointAt(w/e,h);const _=o.normals[w],M=o.binormals[w];for(let b=0;b<=s;b++){const R=b/s*Math.PI*2,x=Math.sin(R),S=-Math.cos(R);l.x=S*_.x+x*M.x,l.y=S*_.y+x*M.y,l.z=S*_.z+x*M.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function m(){for(let w=1;w<=e;w++)for(let _=1;_<=s;_++){const M=(s+1)*(w-1)+(_-1),b=(s+1)*w+(_-1),R=(s+1)*w+_,x=(s+1)*(w-1)+_;g.push(M,b,x),g.push(b,R,x)}}function y(){for(let w=0;w<=e;w++)for(let _=0;_<=s;_++)c.x=w/e,c.y=_/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new da(new ua[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function er(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];if(ou(s))s.isRenderTargetTexture?($t("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(ou(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function mn(n){const t={};for(let e=0;e<n.length;e++){const i=er(n[e]);for(const s in i)t[s]=i[s]}return t}function ou(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function K0(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Yd(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ve.workingColorSpace}const Yr={clone:er,merge:mn};var Z0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,J0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rn extends ir{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Z0,this.fragmentShader=J0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=er(t.uniforms),this.uniformsGroups=K0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Nt().setHex(s.value);break;case"v2":this.uniforms[i].value=new ut().fromArray(s.value);break;case"v3":this.uniforms[i].value=new O().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ge().fromArray(s.value);break;case"m3":this.uniforms[i].value=new se().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ae().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class qd extends rn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class pt extends ir{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_c,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $0 extends ir{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=up,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Q0 extends ir{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ir={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(au(n)||(this.files[n]=t))},get:function(n){if(this.enabled!==!1&&!au(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function au(n){try{const t=n.slice(n.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class j0{constructor(t,e,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const tm=new j0;class _s{constructor(t){this.manager=t!==void 0?t:tm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}_s.DEFAULT_MATERIAL_NAME="__DEFAULT";const xi={};class em extends Error{constructor(t,e){super(t),this.response=e}}class sh extends _s{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Ir.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(xi[t]!==void 0){xi[t].push({onLoad:e,onProgress:i,onError:s});return}xi[t]=[],xi[t].push({onLoad:e,onProgress:i,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&$t("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=xi[t],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0;let v=0;const p=new ReadableStream({start(m){y();function y(){d.read().then(({done:w,value:_})=>{if(w)m.close();else{v+=_.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let b=0,R=h.length;b<R;b++){const x=h[b];x.onProgress&&x.onProgress(M)}m.enqueue(_),y()}},w=>{m.error(w)})}}});return new Response(p)}else throw new em(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Ir.add(`file:${t}`,c);const h=xi[t];delete xi[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=xi[t];if(h===void 0)throw this.manager.itemError(t),c;delete xi[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Os=new WeakMap;class nm extends _s{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Ir.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let d=Os.get(o);d===void 0&&(d=[],Os.set(o,d)),d.push({onLoad:e,onError:s})}return o}const a=Gr("img");function l(){h(),e&&e(this);const d=Os.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}Os.delete(this),r.manager.itemEnd(t)}function c(d){h(),s&&s(d),Ir.remove(`image:${t}`);const u=Os.get(this)||[];for(let f=0;f<u.length;f++){const g=u[f];g.onError&&g.onError(d)}Os.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ir.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}}class im extends _s{constructor(t){super(t)}load(t,e,i,s){const r=this,o=new ca,a=new sh(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(t,function(l){let c;try{c=r.parse(l)}catch(h){s!==void 0?s(h):_e(h);return}r._applyTexData(o,c),e&&e(o,c)},i,s),o}createDataTexture(t){const e=new ca;return this._applyTexData(e,this.parse(t)),e}_applyTexData(t,e){e.image!==void 0?t.image=e.image:e.data!==void 0&&(t.image.width=e.width,t.image.height=e.height,t.image.data=e.data),t.wrapS=e.wrapS!==void 0?e.wrapS:Xn,t.wrapT=e.wrapT!==void 0?e.wrapT:Xn,t.magFilter=e.magFilter!==void 0?e.magFilter:Ye,t.minFilter=e.minFilter!==void 0?e.minFilter:Ye,t.anisotropy=e.anisotropy!==void 0?e.anisotropy:1,e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.mipmaps!==void 0&&(t.mipmaps=e.mipmaps,t.minFilter=Bi),e.mipmapCount===1&&(t.minFilter=Ye),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),t.needsUpdate=!0}}class rh extends _s{constructor(t){super(t)}load(t,e,i,s){const r=new an,o=new nm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class Sa extends ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class sm extends Sa{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const ol=new ae,lu=new O,cu=new O;class oh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qc,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;lu.setFromMatrixPosition(t.matrixWorld),e.position.copy(lu),cu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){ol.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(ol,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===kr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(ol)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Co=new O,Po=new Kn,ti=new O;class Kd extends ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Co,Po,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Co,Po,ti.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Co,Po,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Co,Po,ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ui=new O,hu=new ut,uu=new ut;class wn extends Kd{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=js*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Cr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return js*2*Math.atan(Math.tan(Cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ui.x,Ui.y).multiplyScalar(-t/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ui.x,Ui.y).multiplyScalar(-t/Ui.z)}getViewSize(t,e){return this.getViewBounds(t,hu,uu),e.subVectors(uu,hu)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Cr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class rm extends oh{constructor(){super(new wn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,i=js*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class om extends Sa{constructor(t,e,i=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ne.DEFAULT_UP),this.updateMatrix(),this.target=new ne,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new rm}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class am extends oh{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0}}class ah extends Sa{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new am}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class wa extends Kd{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class lm extends oh{constructor(){super(new wa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mc extends Sa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ne.DEFAULT_UP),this.updateMatrix(),this.target=new ne,this.shadow=new lm}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class cm extends ge{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class hm extends _s{constructor(t){super(t)}load(t,e,i,s){const r=this,o=new sh(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(l){s?s(l):_e(l),r.manager.itemError(t)}},i,s)}parse(t){const e={},i={};function s(f,g){if(e[g]!==void 0)return e[g];const p=f.interleavedBuffers[g],m=r(f,p.buffer),y=so(p.type,m),w=new a0(y,p.stride);return w.uuid=p.uuid,p.usage!==void 0&&w.setUsage(p.usage),e[g]=w,w}function r(f,g){if(i[g]!==void 0)return i[g];const p=f.arrayBuffers[g],m=new Uint32Array(p).buffer;return i[g]=m,m}const o=t.isInstancedBufferGeometry?new cm:new ge,a=t.data.index;if(a!==void 0){const f=so(a.type,a.array);o.setIndex(new Me(f,1))}const l=t.data.attributes;for(const f in l){const g=l[f];let v;if(g.isInterleavedBufferAttribute){const p=s(t.data,g.data);v=new la(p,g.itemSize,g.offset,g.normalized)}else{const p=so(g.type,g.array),m=g.isInstancedBufferAttribute?Zs:Me;v=new m(p,g.itemSize,g.normalized)}g.name!==void 0&&(v.name=g.name),g.usage!==void 0&&v.setUsage(g.usage),g.gpuType!==void 0&&(v.gpuType=g.gpuType),o.setAttribute(f,v)}const c=t.data.morphAttributes;if(c)for(const f in c){const g=c[f],v=[];for(let p=0,m=g.length;p<m;p++){const y=g[p];let w;if(y.isInterleavedBufferAttribute){const _=s(t.data,y.data);w=new la(_,y.itemSize,y.offset,y.normalized)}else{const _=so(y.type,y.array);w=new Me(_,y.itemSize,y.normalized)}y.name!==void 0&&(w.name=y.name),y.usage!==void 0&&w.setUsage(y.usage),y.gpuType!==void 0&&(w.gpuType=y.gpuType),v.push(w)}o.morphAttributes[f]=v}t.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const d=t.data.groups||t.data.drawcalls||t.data.offsets;if(d!==void 0)for(let f=0,g=d.length;f!==g;++f){const v=d[f];o.addGroup(v.start,v.count,v.materialIndex)}const u=t.data.boundingSphere;return u!==void 0&&(o.boundingSphere=new gs().fromJSON(u)),t.name&&(o.name=t.name),t.userData&&(o.userData=t.userData),o}}let Do;class Zd{static getContext(){return Do===void 0&&(Do=new(window.AudioContext||window.webkitAudioContext)),Do}static setContext(t){Do=t}}class du extends _s{constructor(t){super(t)}load(t,e,i,s){const r=this,o=new sh(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){try{const c=l.slice(0),h=Zd.getContext(),d=t+"#decode";r.manager.itemStart(d),h.decodeAudioData(c,function(u){e(u),r.manager.itemEnd(d)}).catch(function(u){a(u),r.manager.itemEnd(d)})}catch(c){a(c)}},i,s);function a(l){s?s(l):_e(l),r.manager.itemError(t)}}}const Fs=-90,Bs=1;class um extends ne{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new wn(Fs,Bs,t,e);s.layers=this.layers,this.add(s);const r=new wn(Fs,Bs,t,e);r.layers=this.layers,this.add(r);const o=new wn(Fs,Bs,t,e);o.layers=this.layers,this.add(o);const a=new wn(Fs,Bs,t,e);a.layers=this.layers,this.add(a);const l=new wn(Fs,Bs,t,e);l.layers=this.layers,this.add(l);const c=new wn(Fs,Bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===ii)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===kr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class dm extends wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class lh{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=fm.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function fm(){this._document.hidden===!1&&this.reset()}const Ji=new O,al=new Kn,pm=new O,$i=new O,Qi=new O;class mm extends ne{constructor(){super(),this.type="AudioListener",this.context=Zd.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new lh}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t),this._timer.update();const e=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(Ji,al,pm),$i.set(0,0,-1).applyQuaternion(al),Qi.set(0,1,0).applyQuaternion(al),e.positionX){const i=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Ji.x,i),e.positionY.linearRampToValueAtTime(Ji.y,i),e.positionZ.linearRampToValueAtTime(Ji.z,i),e.forwardX.linearRampToValueAtTime($i.x,i),e.forwardY.linearRampToValueAtTime($i.y,i),e.forwardZ.linearRampToValueAtTime($i.z,i),e.upX.linearRampToValueAtTime(Qi.x,i),e.upY.linearRampToValueAtTime(Qi.y,i),e.upZ.linearRampToValueAtTime(Qi.z,i)}else e.setPosition(Ji.x,Ji.y,Ji.z),e.setOrientation($i.x,$i.y,$i.z,Qi.x,Qi.y,Qi.z)}}class gm extends ne{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){$t("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){$t("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){$t("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){$t("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){$t("Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?($t("Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){$t("Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}copy(t,e){return super.copy(t,e),t.sourceType!=="buffer"?($t("Audio: Audio source type cannot be copied."),this):(this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this)}clone(t){return new this.constructor(this.listener).copy(this,t)}}const ji=new O,fu=new Kn,_m=new O,ts=new O;class xm extends gm{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,i){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=i,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(ji,fu,_m),ts.set(0,0,1).applyQuaternion(fu);const e=this.panner;if(e.positionX){const i=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(ji.x,i),e.positionY.linearRampToValueAtTime(ji.y,i),e.positionZ.linearRampToValueAtTime(ji.z,i),e.orientationX.linearRampToValueAtTime(ts.x,i),e.orientationY.linearRampToValueAtTime(ts.y,i),e.orientationZ.linearRampToValueAtTime(ts.z,i)}else e.setPosition(ji.x,ji.y,ji.z),e.setOrientation(ts.x,ts.y,ts.z)}}const pu=new ae;class vm{constructor(t,e,i=0,s=1/0){this.ray=new va(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Jc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):_e("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return pu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pu),this}intersectObject(t,e=!0,i=[]){return Sc(t,this,i,e),i.sort(mu),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Sc(t[s],this,i,e);return i.sort(mu),i}}function mu(n,t){return n.distance-t.distance}function Sc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Sc(r[o],t,e,!0)}}class gu{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=le(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(le(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ah=class Ah{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Ah.prototype.isMatrix2=!0;let _u=Ah;class ym extends Gi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function xu(n,t,e,i){const s=Mm(i);switch(e){case Rd:return n*t;case Hc:return n*t/s.components*s.byteLength;case Vc:return n*t/s.components*s.byteLength;case hs:return n*t*2/s.components*s.byteLength;case Wc:return n*t*2/s.components*s.byteLength;case Cd:return n*t*3/s.components*s.byteLength;case Yn:return n*t*4/s.components*s.byteLength;case Xc:return n*t*4/s.components*s.byteLength;case Vo:case Wo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Xo:case Yo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Hl:case Wl:return Math.max(n,16)*Math.max(t,8)/4;case Gl:case Vl:return Math.max(n,8)*Math.max(t,8)/2;case Xl:case Yl:case Kl:case Zl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ql:case sa:case Jl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case $l:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ql:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case jl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case tc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ec:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case nc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ic:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case sc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case rc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case oc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ac:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case lc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case cc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case hc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case uc:case dc:case fc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case pc:case mc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ra:case gc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Mm(n){switch(n){case Cn:case bd:return{byteLength:1,components:1};case Fr:case Ed:case on:return{byteLength:2,components:1};case kc:case Gc:return{byteLength:2,components:4};case hi:case zc:case Pn:return{byteLength:4,components:1};case Td:case Ad:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nc}}));typeof window<"u"&&(window.__THREE__?$t("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Jd(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Sm(n){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var wm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bm=`#ifdef USE_ALPHAHASH
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
#endif`,Em=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Am=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cm=`#ifdef USE_AOMAP
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
#endif`,Pm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dm=`#ifdef USE_BATCHING
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
#endif`,Lm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Im=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Um=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Om=`#ifdef USE_IRIDESCENCE
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
#endif`,Fm=`#ifdef USE_BUMPMAP
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
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Vm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ym=`#define PI 3.141592653589793
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
} // validated`,qm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Km=`vec3 transformedNormal = objectNormal;
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
#endif`,Zm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$m=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jm="gl_FragColor = linearToOutputTexel( gl_FragColor );",tg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eg=`#ifdef USE_ENVMAP
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
#endif`,ng=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ig=`#ifdef USE_ENVMAP
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
#endif`,sg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rg=`#ifdef USE_ENVMAP
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
#endif`,og=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ag=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hg=`#ifdef USE_GRADIENTMAP
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
}`,ug=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,mg=`#ifdef USE_ENVMAP
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
#endif`,gg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yg=`PhysicalMaterial material;
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
#endif`,Mg=`uniform sampler2D dfgLUT;
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
}`,Sg=`
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
#endif`,wg=`#if defined( RE_IndirectDiffuse )
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
#endif`,bg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Eg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Tg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ag=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ig=`#if defined( USE_POINTS_UV )
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
#endif`,Ng=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ug=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Og=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zg=`#ifdef USE_MORPHTARGETS
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
#endif`,kg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Yg=`#ifdef USE_NORMALMAP
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
#endif`,qg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$g=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,r_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,a_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,l_=`float getShadowMask() {
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
}`,c_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h_=`#ifdef USE_SKINNING
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
#endif`,u_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,d_=`#ifdef USE_SKINNING
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
#endif`,f_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,__=`#ifdef USE_TRANSMISSION
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
#endif`,x_=`#ifdef USE_TRANSMISSION
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
#endif`,v_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const w_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,b_=`uniform sampler2D t2D;
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
}`,E_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,A_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C_=`#include <common>
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
}`,P_=`#if DEPTH_PACKING == 3200
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
}`,D_=`#define DISTANCE
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
}`,L_=`#define DISTANCE
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
}`,I_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,N_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U_=`uniform float scale;
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
}`,O_=`uniform vec3 diffuse;
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
}`,F_=`#include <common>
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
}`,B_=`uniform vec3 diffuse;
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
}`,z_=`#define LAMBERT
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
}`,k_=`#define LAMBERT
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
}`,G_=`#define MATCAP
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
}`,H_=`#define MATCAP
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
}`,V_=`#define NORMAL
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
}`,W_=`#define NORMAL
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
}`,X_=`#define PHONG
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
}`,Y_=`#define PHONG
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
}`,q_=`#define STANDARD
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
}`,K_=`#define STANDARD
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
}`,Z_=`#define TOON
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
}`,J_=`#define TOON
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
}`,$_=`uniform float size;
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
}`,Q_=`uniform vec3 diffuse;
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
}`,j_=`#include <common>
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
}`,tx=`uniform vec3 color;
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
}`,ex=`uniform float rotation;
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
}`,nx=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:wm,alphahash_pars_fragment:bm,alphamap_fragment:Em,alphamap_pars_fragment:Tm,alphatest_fragment:Am,alphatest_pars_fragment:Rm,aomap_fragment:Cm,aomap_pars_fragment:Pm,batching_pars_vertex:Dm,batching_vertex:Lm,begin_vertex:Im,beginnormal_vertex:Nm,bsdfs:Um,iridescence_fragment:Om,bumpmap_pars_fragment:Fm,clipping_planes_fragment:Bm,clipping_planes_pars_fragment:zm,clipping_planes_pars_vertex:km,clipping_planes_vertex:Gm,color_fragment:Hm,color_pars_fragment:Vm,color_pars_vertex:Wm,color_vertex:Xm,common:Ym,cube_uv_reflection_fragment:qm,defaultnormal_vertex:Km,displacementmap_pars_vertex:Zm,displacementmap_vertex:Jm,emissivemap_fragment:$m,emissivemap_pars_fragment:Qm,colorspace_fragment:jm,colorspace_pars_fragment:tg,envmap_fragment:eg,envmap_common_pars_fragment:ng,envmap_pars_fragment:ig,envmap_pars_vertex:sg,envmap_physical_pars_fragment:mg,envmap_vertex:rg,fog_vertex:og,fog_pars_vertex:ag,fog_fragment:lg,fog_pars_fragment:cg,gradientmap_pars_fragment:hg,lightmap_pars_fragment:ug,lights_lambert_fragment:dg,lights_lambert_pars_fragment:fg,lights_pars_begin:pg,lights_toon_fragment:gg,lights_toon_pars_fragment:_g,lights_phong_fragment:xg,lights_phong_pars_fragment:vg,lights_physical_fragment:yg,lights_physical_pars_fragment:Mg,lights_fragment_begin:Sg,lights_fragment_maps:wg,lights_fragment_end:bg,lightprobes_pars_fragment:Eg,logdepthbuf_fragment:Tg,logdepthbuf_pars_fragment:Ag,logdepthbuf_pars_vertex:Rg,logdepthbuf_vertex:Cg,map_fragment:Pg,map_pars_fragment:Dg,map_particle_fragment:Lg,map_particle_pars_fragment:Ig,metalnessmap_fragment:Ng,metalnessmap_pars_fragment:Ug,morphinstance_vertex:Og,morphcolor_vertex:Fg,morphnormal_vertex:Bg,morphtarget_pars_vertex:zg,morphtarget_vertex:kg,normal_fragment_begin:Gg,normal_fragment_maps:Hg,normal_pars_fragment:Vg,normal_pars_vertex:Wg,normal_vertex:Xg,normalmap_pars_fragment:Yg,clearcoat_normal_fragment_begin:qg,clearcoat_normal_fragment_maps:Kg,clearcoat_pars_fragment:Zg,iridescence_pars_fragment:Jg,opaque_fragment:$g,packing:Qg,premultiplied_alpha_fragment:jg,project_vertex:t_,dithering_fragment:e_,dithering_pars_fragment:n_,roughnessmap_fragment:i_,roughnessmap_pars_fragment:s_,shadowmap_pars_fragment:r_,shadowmap_pars_vertex:o_,shadowmap_vertex:a_,shadowmask_pars_fragment:l_,skinbase_vertex:c_,skinning_pars_vertex:h_,skinning_vertex:u_,skinnormal_vertex:d_,specularmap_fragment:f_,specularmap_pars_fragment:p_,tonemapping_fragment:m_,tonemapping_pars_fragment:g_,transmission_fragment:__,transmission_pars_fragment:x_,uv_pars_fragment:v_,uv_pars_vertex:y_,uv_vertex:M_,worldpos_vertex:S_,background_vert:w_,background_frag:b_,backgroundCube_vert:E_,backgroundCube_frag:T_,cube_vert:A_,cube_frag:R_,depth_vert:C_,depth_frag:P_,distance_vert:D_,distance_frag:L_,equirect_vert:I_,equirect_frag:N_,linedashed_vert:U_,linedashed_frag:O_,meshbasic_vert:F_,meshbasic_frag:B_,meshlambert_vert:z_,meshlambert_frag:k_,meshmatcap_vert:G_,meshmatcap_frag:H_,meshnormal_vert:V_,meshnormal_frag:W_,meshphong_vert:X_,meshphong_frag:Y_,meshphysical_vert:q_,meshphysical_frag:K_,meshtoon_vert:Z_,meshtoon_frag:J_,points_vert:$_,points_frag:Q_,shadow_vert:j_,shadow_frag:tx,sprite_vert:ex,sprite_frag:nx},Ot={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},ni={basic:{uniforms:mn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:mn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Nt(0)},envMapIntensity:{value:1}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:mn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:mn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:mn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Nt(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:mn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:mn([Ot.points,Ot.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:mn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:mn([Ot.common,Ot.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:mn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:mn([Ot.sprite,Ot.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:mn([Ot.common,Ot.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:mn([Ot.lights,Ot.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};ni.physical={uniforms:mn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const Lo={r:0,b:0,g:0},ix=new ae,$d=new se;$d.set(-1,0,0,0,1,0,0,0,1);function sx(n,t,e,i,s,r){const o=new Nt(0);let a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){const _=y.backgroundBlurriness>0;w=t.get(w,_)}return w}function g(y){let w=!1;const _=f(y);_===null?p(o,a):_&&_.isColor&&(p(_,1),w=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(y,w){const _=f(w);_&&(_.isCubeTexture||_.mapping===xa)?(c===void 0&&(c=new Q(new Dt(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:er(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ix.makeRotationFromEuler(w.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply($d),c.material.toneMapped=ve.getTransfer(_.colorSpace)!==Ce,(h!==_||d!==_.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Q(new Ae(2,2),new rn({name:"BackgroundMaterial",uniforms:er(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ve.getTransfer(_.colorSpace)!==Ce,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,w){y.getRGB(Lo,Yd(n)),e.buffers.color.setClear(Lo.r,Lo.g,Lo.b,w,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,w=1){o.set(y),a=w,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,p(o,a)},render:g,addToRenderList:v,dispose:m}}function rx(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,o=!1;function a(T,C,P,L,I){let N=!1;const B=d(T,L,P,C);r!==B&&(r=B,c(r.object)),N=f(T,L,P,I),N&&g(T,L,P,I),I!==null&&t.update(I,n.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,_(T,C,P,L),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function l(){return n.createVertexArray()}function c(T){return n.bindVertexArray(T)}function h(T){return n.deleteVertexArray(T)}function d(T,C,P,L){const I=L.wireframe===!0;let N=i[C.id];N===void 0&&(N={},i[C.id]=N);const B=T.isInstancedMesh===!0?T.id:0;let G=N[B];G===void 0&&(G={},N[B]=G);let U=G[P.id];U===void 0&&(U={},G[P.id]=U);let k=U[I];return k===void 0&&(k=u(l()),U[I]=k),k}function u(T){const C=[],P=[],L=[];for(let I=0;I<e;I++)C[I]=0,P[I]=0,L[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:P,attributeDivisors:L,object:T,attributes:{},index:null}}function f(T,C,P,L){const I=r.attributes,N=C.attributes;let B=0;const G=P.getAttributes();for(const U in G)if(G[U].location>=0){const X=I[U];let dt=N[U];if(dt===void 0&&(U==="instanceMatrix"&&T.instanceMatrix&&(dt=T.instanceMatrix),U==="instanceColor"&&T.instanceColor&&(dt=T.instanceColor)),X===void 0||X.attribute!==dt||dt&&X.data!==dt.data)return!0;B++}return r.attributesNum!==B||r.index!==L}function g(T,C,P,L){const I={},N=C.attributes;let B=0;const G=P.getAttributes();for(const U in G)if(G[U].location>=0){let X=N[U];X===void 0&&(U==="instanceMatrix"&&T.instanceMatrix&&(X=T.instanceMatrix),U==="instanceColor"&&T.instanceColor&&(X=T.instanceColor));const dt={};dt.attribute=X,X&&X.data&&(dt.data=X.data),I[U]=dt,B++}r.attributes=I,r.attributesNum=B,r.index=L}function v(){const T=r.newAttributes;for(let C=0,P=T.length;C<P;C++)T[C]=0}function p(T){m(T,0)}function m(T,C){const P=r.newAttributes,L=r.enabledAttributes,I=r.attributeDivisors;P[T]=1,L[T]===0&&(n.enableVertexAttribArray(T),L[T]=1),I[T]!==C&&(n.vertexAttribDivisor(T,C),I[T]=C)}function y(){const T=r.newAttributes,C=r.enabledAttributes;for(let P=0,L=C.length;P<L;P++)C[P]!==T[P]&&(n.disableVertexAttribArray(P),C[P]=0)}function w(T,C,P,L,I,N,B){B===!0?n.vertexAttribIPointer(T,C,P,I,N):n.vertexAttribPointer(T,C,P,L,I,N)}function _(T,C,P,L){v();const I=L.attributes,N=P.getAttributes(),B=C.defaultAttributeValues;for(const G in N){const U=N[G];if(U.location>=0){let k=I[G];if(k===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(k=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(k=T.instanceColor)),k!==void 0){const X=k.normalized,dt=k.itemSize,yt=t.get(k);if(yt===void 0)continue;const wt=yt.buffer,bt=yt.type,Qt=yt.bytesPerElement,j=bt===n.INT||bt===n.UNSIGNED_INT||k.gpuType===zc;if(k.isInterleavedBufferAttribute){const nt=k.data,W=nt.stride,st=k.offset;if(nt.isInstancedInterleavedBuffer){for(let J=0;J<U.locationSize;J++)m(U.location+J,nt.meshPerAttribute);T.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let J=0;J<U.locationSize;J++)p(U.location+J);n.bindBuffer(n.ARRAY_BUFFER,wt);for(let J=0;J<U.locationSize;J++)w(U.location+J,dt/U.locationSize,bt,X,W*Qt,(st+dt/U.locationSize*J)*Qt,j)}else{if(k.isInstancedBufferAttribute){for(let nt=0;nt<U.locationSize;nt++)m(U.location+nt,k.meshPerAttribute);T.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let nt=0;nt<U.locationSize;nt++)p(U.location+nt);n.bindBuffer(n.ARRAY_BUFFER,wt);for(let nt=0;nt<U.locationSize;nt++)w(U.location+nt,dt/U.locationSize,bt,X,dt*Qt,dt/U.locationSize*nt*Qt,j)}}else if(B!==void 0){const X=B[G];if(X!==void 0)switch(X.length){case 2:n.vertexAttrib2fv(U.location,X);break;case 3:n.vertexAttrib3fv(U.location,X);break;case 4:n.vertexAttrib4fv(U.location,X);break;default:n.vertexAttrib1fv(U.location,X)}}}}y()}function M(){S();for(const T in i){const C=i[T];for(const P in C){const L=C[P];for(const I in L){const N=L[I];for(const B in N)h(N[B].object),delete N[B];delete L[I]}}delete i[T]}}function b(T){if(i[T.id]===void 0)return;const C=i[T.id];for(const P in C){const L=C[P];for(const I in L){const N=L[I];for(const B in N)h(N[B].object),delete N[B];delete L[I]}}delete i[T.id]}function R(T){for(const C in i){const P=i[C];for(const L in P){const I=P[L];if(I[T.id]===void 0)continue;const N=I[T.id];for(const B in N)h(N[B].object),delete N[B];delete I[T.id]}}}function x(T){for(const C in i){const P=i[C],L=T.isInstancedMesh===!0?T.id:0,I=P[L];if(I!==void 0){for(const N in I){const B=I[N];for(const G in B)h(B[G].object),delete B[G];delete I[N]}delete P[L],Object.keys(P).length===0&&delete i[C]}}}function S(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:S,resetDefaultState:E,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:p,disableUnusedAttributes:y}}function ox(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function ax(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Yn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const x=R===on&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Cn&&R!==Pn&&!x&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&($t("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&$t("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:_,maxSamples:M,samples:b}}function lx(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new vi,a=new se,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,m=n.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const y=r?0:i,w=y*4;let _=m.clippingState||null;l.value=_,_=h(g,u,w,f);for(let M=0;M!==w;++M)_[M]=e[M];m.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,g){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const m=f+v*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let w=0,_=f;w!==v;++w,_+=4)o.copy(d[w]).applyMatrix4(y,a),o.normal.toArray(p,_),p[_+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}const Ws=4,cx=6,hx=20,ux=256,_r=new wa,vu=new Nt;let ll=null,cl=0,hl=0,ul=!1;const dx=new O,es=new O;class fa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:o=256,position:a=dx}=r;ll=this._renderer.getRenderTarget(),cl=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Su(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ll,cl,hl),this._renderer.xr.enabled=ul,t.scissorTest=!1,zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cs||t.mapping===Qs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ll=this._renderer.getRenderTarget(),cl=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:on,format:Yn,colorSpace:zr,depthBuffer:!1},s=yu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yu(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=fx(r)),this._blurMaterial=mx(r,t,e),this._ggxMaterial=px(r,t,e)}return s}_compileMaterial(t){const e=new Q(new ge,t);this._renderer.compile(e,_r)}_sceneToCubeUV(t,e,i,s,r){const l=new wn(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(vu),d.toneMapping=ri,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Q(new Dt,new Bn({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,p=v.material;let m=!1;const y=t.background;y?y.isColor&&(p.color.copy(y),t.background=null,m=!0):(p.color.copy(vu),m=!0);for(let w=0;w<6;w++){const _=w%3;_===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):_===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));const M=this._cubeSize;zs(s,_*M,w>2?M:0,M,M),d.setRenderTarget(s),m&&d.render(v,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=y}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===cs||t.mapping===Qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Su()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;zs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,_r)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,v=this._sizeLods[i],p=3*v*(i>g-Ws?i-g+Ws:0),m=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,zs(r,p,m,3*v,2*v),s.setRenderTarget(r),s.render(a,_r),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,zs(t,p,m,3*v,2*v),s.setRenderTarget(t),s.render(a,_r)}_blur(t,e,i,s){const r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;const c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;const h=this._sizeLods[s],d=3*h*(s>this._lodMax-Ws?s-this._lodMax+Ws:0),u=4*(this._cubeSize-h);zs(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,_r)}}function fx(n){const t=[],e=[];let i=n;const s=n-Ws+1+cx;for(let r=0;r<s;r++){const o=Math.pow(2,i);t.push(o);const a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),v=new Float32Array(f*u*d);for(let m=0;m<d;m++){const y=m%3*2/3-1,w=m>2?0:-1,_=[y,w,0,y+2/3,w,0,y+2/3,w+1,0,y,w,0,y+2/3,w+1,0,y,w+1,0];g.set(_,f*u*m);for(let M=0;M<u;M++){const b=h[M*2]*2-1,R=h[M*2+1]*2-1;m===0?es.set(1,R,b):m===1?es.set(-b,1,-R):m===2?es.set(-b,R,1):m===3?es.set(-1,R,-b):m===4?es.set(-b,-1,R):es.set(b,R,-1),es.toArray(v,(m*u+M)*f)}}const p=new ge;p.setAttribute("position",new Me(g,f)),p.setAttribute("outputDirection",new Me(v,f)),e.push(new Q(p,null)),i>Ws&&i--}return{lodMeshes:e,sizeLods:t}}function yu(n,t,e){const i=new yn(n,t,e);return i.texture.mapping=xa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zs(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function px(n,t,e){return new rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ux,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ba(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function mx(n,t,e){return new rn({name:"SphericalGaussianBlur",defines:{SAMPLES:hx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ba(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Mu(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ba(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Su(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function ba(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Qd extends yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Od(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Dt(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:si});r.uniforms.tEquirect.value=e;const o=new Q(s,r),a=e.minFilter;return e.minFilter===Bi&&(e.minFilter=Ye),new um(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}function gx(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===Rr||f===Na)if(t.has(u)){const g=t.get(u).texture;return a(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const v=new Qd(g.height);return v.fromEquirectangularTexture(n,u),t.set(u,v),u.addEventListener("dispose",c),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const f=u.mapping,g=f===Rr||f===Na,v=f===cs||f===Qs;if(g||v){let p=e.get(u);const m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new fa(n)),p=g?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{const y=u.image;return g&&y&&y.height>0||v&&y&&l(y)?(i===null&&(i=new fa(n)),p=g?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,f){return f===Rr?u.mapping=cs:f===Na&&(u.mapping=Qs),u}function l(u){let f=0;const g=6;for(let v=0;v<g;v++)u[v]!==void 0&&f++;return f===g}function c(u){const f=u.target;f.removeEventListener("dispose",c);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function _x(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&qs("WebGLRenderer: "+i+" extension not supported."),s}}}function xx(n,t,e,i){const s={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)t.update(u[f],n.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,g=d.attributes.position;let v=0;if(g===void 0)return;if(f!==null){const y=f.array;v=f.version;for(let w=0,_=y.length;w<_;w+=3){const M=y[w+0],b=y[w+1],R=y[w+2];u.push(M,b,b,R,R,M)}}else{const y=g.array;v=g.version;for(let w=0,_=y.length/3-1;w<_;w+=3){const M=w+0,b=w+1,R=w+2;u.push(M,b,b,R,R,M)}}const p=new(g.count>=65535?Ud:Nd)(u,1);p.version=v;const m=r.get(d);m&&t.remove(m),r.set(d,p)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function vx(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*o),e.update(u,i,1)}function c(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*o,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let v=0;for(let p=0;p<f;p++)v+=u[p];e.update(v,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function yx(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:_e("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Mx(n,t,e){const i=new WeakMap,s=new Ge;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==d){let E=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var f=E;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),p===!0&&(_=3);let M=a.attributes.position.count*_,b=1;M>t.maxTextureSize&&(b=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const R=new Float32Array(M*b*4*d),x=new Ld(R,M,b,d);x.type=Pn,x.needsUpdate=!0;const S=_*4;for(let T=0;T<d;T++){const C=m[T],P=y[T],L=w[T],I=M*b*4*T;for(let N=0;N<C.count;N++){const B=N*S;g===!0&&(s.fromBufferAttribute(C,N),R[I+B+0]=s.x,R[I+B+1]=s.y,R[I+B+2]=s.z,R[I+B+3]=0),v===!0&&(s.fromBufferAttribute(P,N),R[I+B+4]=s.x,R[I+B+5]=s.y,R[I+B+6]=s.z,R[I+B+7]=0),p===!0&&(s.fromBufferAttribute(L,N),R[I+B+8]=s.x,R[I+B+9]=s.y,R[I+B+10]=s.z,R[I+B+11]=L.itemSize===4?s.w:1)}}u={count:d,texture:x,size:new ut(M,b)},i.set(a,u),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Sx(n,t,e,i,s){let r=new WeakMap;function o(c){const h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const wx={[Uc]:"LINEAR_TONE_MAPPING",[Oc]:"REINHARD_TONE_MAPPING",[Fc]:"CINEON_TONE_MAPPING",[_a]:"ACES_FILMIC_TONE_MAPPING",[Ur]:"AGX_TONE_MAPPING",[Or]:"NEUTRAL_TONE_MAPPING",[Bc]:"CUSTOM_TONE_MAPPING"};function bx(n,t,e,i,s,r){const o=new yn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new ge;c.setAttribute("position",new ee([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ee([0,2,0,0,2,0],2));const h=new qd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Q(c,h),u=new wa(-1,1,1,-1,0,1);let f=null,g=null,v=!1,p,m=null,y=[],w=!1;this.setSize=function(_,M){o.setSize(_,M),a!==null&&a.setSize(_,M),l!==null&&l.setSize(_,M);for(let b=0;b<y.length;b++){const R=y[b];R.setSize&&R.setSize(_,M)}},this.setEffects=function(_){y=_,w=y.length>0&&y[0].isRenderPass===!0;const M=o.width,b=o.height;y.length>0&&a===null&&(a=new yn(M,b,{type:on,depthBuffer:!1,stencilBuffer:!1}),l=new yn(M,b,{type:on,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<y.length;R++){const x=y[R];x.setSize&&x.setSize(M,b)}},this.begin=function(_,M){if(v||_.toneMapping===ri&&y.length===0)return!1;if(m=M,M!==null){const b=M.width,R=M.height;(o.width!==b||o.height!==R)&&this.setSize(b,R)}return w===!1&&_.setRenderTarget(o),p=_.toneMapping,_.toneMapping=ri,!0},this.hasRenderPass=function(){return w},this.end=function(_,M){_.toneMapping=p,v=!0;let b=o,R=a;for(let x=0;x<y.length;x++){const S=y[x];S.enabled!==!1&&(S.render(_,R,b,M),S.needsSwap!==!1&&(b=R,R=R===a?l:a))}if(f!==_.outputColorSpace||g!==_.toneMapping){f=_.outputColorSpace,g=_.toneMapping,h.defines={},ve.getTransfer(f)===Ce&&(h.defines.SRGB_TRANSFER="");const x=wx[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,_.setRenderTarget(m),_.render(d,u),m=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const jd=new an,wc=new Hr(1,1),tf=new Ld,ef=new Yp,nf=new Od,wu=[],bu=[],Eu=new Float32Array(16),Tu=new Float32Array(9),Au=new Float32Array(4);function or(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=wu[s];if(r===void 0&&(r=new Float32Array(s),wu[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function $e(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Qe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ea(n,t){let e=bu[t];e===void 0&&(e=new Int32Array(t),bu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Ex(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Tx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;n.uniform2fv(this.addr,t),Qe(e,t)}}function Ax(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;n.uniform3fv(this.addr,t),Qe(e,t)}}function Rx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;n.uniform4fv(this.addr,t),Qe(e,t)}}function Cx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Qe(e,t)}else{if($e(e,i))return;Au.set(i),n.uniformMatrix2fv(this.addr,!1,Au),Qe(e,i)}}function Px(n,t){const e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Qe(e,t)}else{if($e(e,i))return;Tu.set(i),n.uniformMatrix3fv(this.addr,!1,Tu),Qe(e,i)}}function Dx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Qe(e,t)}else{if($e(e,i))return;Eu.set(i),n.uniformMatrix4fv(this.addr,!1,Eu),Qe(e,i)}}function Lx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Ix(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;n.uniform2iv(this.addr,t),Qe(e,t)}}function Nx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;n.uniform3iv(this.addr,t),Qe(e,t)}}function Ux(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;n.uniform4iv(this.addr,t),Qe(e,t)}}function Ox(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Fx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;n.uniform2uiv(this.addr,t),Qe(e,t)}}function Bx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;n.uniform3uiv(this.addr,t),Qe(e,t)}}function zx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;n.uniform4uiv(this.addr,t),Qe(e,t)}}function kx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(wc.compareFunction=e.isReversedDepthBuffer()?qc:Yc,r=wc):r=jd,e.setTexture2D(t||r,s)}function Gx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||ef,s)}function Hx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||nf,s)}function Vx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||tf,s)}function Wx(n){switch(n){case 5126:return Ex;case 35664:return Tx;case 35665:return Ax;case 35666:return Rx;case 35674:return Cx;case 35675:return Px;case 35676:return Dx;case 5124:case 35670:return Lx;case 35667:case 35671:return Ix;case 35668:case 35672:return Nx;case 35669:case 35673:return Ux;case 5125:return Ox;case 36294:return Fx;case 36295:return Bx;case 36296:return zx;case 35678:case 36198:case 36298:case 36306:case 35682:return kx;case 35679:case 36299:case 36307:return Gx;case 35680:case 36300:case 36308:case 36293:return Hx;case 36289:case 36303:case 36311:case 36292:return Vx}}function Xx(n,t){n.uniform1fv(this.addr,t)}function Yx(n,t){const e=or(t,this.size,2);n.uniform2fv(this.addr,e)}function qx(n,t){const e=or(t,this.size,3);n.uniform3fv(this.addr,e)}function Kx(n,t){const e=or(t,this.size,4);n.uniform4fv(this.addr,e)}function Zx(n,t){const e=or(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Jx(n,t){const e=or(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function $x(n,t){const e=or(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Qx(n,t){n.uniform1iv(this.addr,t)}function jx(n,t){n.uniform2iv(this.addr,t)}function tv(n,t){n.uniform3iv(this.addr,t)}function ev(n,t){n.uniform4iv(this.addr,t)}function nv(n,t){n.uniform1uiv(this.addr,t)}function iv(n,t){n.uniform2uiv(this.addr,t)}function sv(n,t){n.uniform3uiv(this.addr,t)}function rv(n,t){n.uniform4uiv(this.addr,t)}function ov(n,t,e){const i=this.cache,s=t.length,r=Ea(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=wc:o=jd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function av(n,t,e){const i=this.cache,s=t.length,r=Ea(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ef,r[o])}function lv(n,t,e){const i=this.cache,s=t.length,r=Ea(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||nf,r[o])}function cv(n,t,e){const i=this.cache,s=t.length,r=Ea(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||tf,r[o])}function hv(n){switch(n){case 5126:return Xx;case 35664:return Yx;case 35665:return qx;case 35666:return Kx;case 35674:return Zx;case 35675:return Jx;case 35676:return $x;case 5124:case 35670:return Qx;case 35667:case 35671:return jx;case 35668:case 35672:return tv;case 35669:case 35673:return ev;case 5125:return nv;case 36294:return iv;case 36295:return sv;case 36296:return rv;case 35678:case 36198:case 36298:case 36306:case 35682:return ov;case 35679:case 36299:case 36307:return av;case 35680:case 36300:case 36308:case 36293:return lv;case 36289:case 36303:case 36311:case 36292:return cv}}class uv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Wx(e.type)}}class dv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=hv(e.type)}}class fv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const dl=/(\w+)(\])?(\[|\.)?/g;function Ru(n,t){n.seq.push(t),n.map[t.id]=t}function pv(n,t,e){const i=n.name,s=i.length;for(dl.lastIndex=0;;){const r=dl.exec(i),o=dl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ru(e,c===void 0?new uv(a,n,t):new dv(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new fv(a),Ru(e,d)),e=d}}}class qo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);pv(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Cu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const mv=37297;let gv=0;function _v(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Pu=new se;function xv(n){ve._getMatrix(Pu,ve.workingColorSpace,n);const t=`mat3( ${Pu.elements.map(e=>e.toFixed(4))} )`;switch(ve.getTransfer(n)){case oa:return[t,"LinearTransferOETF"];case Ce:return[t,"sRGBTransferOETF"];default:return $t("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Du(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+_v(n.getShaderSource(t),a)}else return r}function vv(n,t){const e=xv(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const yv={[Uc]:"Linear",[Oc]:"Reinhard",[Fc]:"Cineon",[_a]:"ACESFilmic",[Ur]:"AgX",[Or]:"Neutral",[Bc]:"Custom"};function Mv(n,t){const e=yv[t];return e===void 0?($t("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Io=new O;function Sv(){ve.getLuminanceCoefficients(Io);const n=Io.x.toFixed(4),t=Io.y.toFixed(4),e=Io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sr).join(`
`)}function bv(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Ev(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Sr(n){return n!==""}function Lu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Iu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Tv=/^[ \t]*#include +<([\w\d./]+)>/gm;function bc(n){return n.replace(Tv,Rv)}const Av=new Map;function Rv(n,t){let e=fe[t];if(e===void 0){const i=Av.get(t);if(i!==void 0)e=fe[i],$t('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return bc(e)}const Cv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nu(n){return n.replace(Cv,Pv)}function Pv(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Dv={[Tr]:"SHADOWMAP_TYPE_PCF",[yr]:"SHADOWMAP_TYPE_VSM"};function Lv(n){return Dv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Iv={[cs]:"ENVMAP_TYPE_CUBE",[Qs]:"ENVMAP_TYPE_CUBE",[xa]:"ENVMAP_TYPE_CUBE_UV"};function Nv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Iv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Uv={[Qs]:"ENVMAP_MODE_REFRACTION"};function Ov(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Uv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Fv={[Sd]:"ENVMAP_BLENDING_MULTIPLY",[lp]:"ENVMAP_BLENDING_MIX",[cp]:"ENVMAP_BLENDING_ADD"};function Bv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Fv[n.combine]||"ENVMAP_BLENDING_NONE"}function zv(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function kv(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Lv(e),c=Nv(e),h=Ov(e),d=Bv(e),u=zv(e),f=wv(e),g=bv(r),v=s.createProgram();let p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Sr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Sr).join(`
`),m.length>0&&(m+=`
`)):(p=[Uu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),m=[Uu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?fe.tonemapping_pars_fragment:"",e.toneMapping!==ri?Mv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,vv("linearToOutputTexel",e.outputColorSpace),Sv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Sr).join(`
`)),o=bc(o),o=Lu(o,e),o=Iu(o,e),a=bc(a),a=Lu(a,e),a=Iu(a,e),o=Nu(o),a=Nu(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const w=y+p+o,_=y+m+a,M=Cu(s,s.VERTEX_SHADER,w),b=Cu(s,s.FRAGMENT_SHADER,_);s.attachShader(v,M),s.attachShader(v,b),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(T){if(n.debug.checkShaderErrors){const C=s.getProgramInfoLog(v)||"",P=s.getShaderInfoLog(M)||"",L=s.getShaderInfoLog(b)||"",I=C.trim(),N=P.trim(),B=L.trim();let G=!0,U=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,M,b);else{const k=Du(s,M,"vertex"),X=Du(s,b,"fragment");_e("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+I+`
`+k+`
`+X)}else I!==""?$t("WebGLProgram: Program Info Log:",I):(N===""||B==="")&&(U=!1);U&&(T.diagnostics={runnable:G,programLog:I,vertexShader:{log:N,prefix:p},fragmentShader:{log:B,prefix:m}})}s.deleteShader(M),s.deleteShader(b),x=new qo(s,v),S=Ev(s,v)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(v,mv)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gv++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=b,this}let Gv=0;class Hv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Vv(t),e.set(t,i)),i}}class Vv{constructor(t){this.id=Gv++,this.code=t,this.usedTimes=0}}function Wv(n){return n===hs||n===sa||n===ra}function Xv(n,t,e,i,s,r){const o=new Jc,a=new Hv,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer;let u=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,S,E,T,C,P){const L=T.fog,I=C.geometry,N=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?T.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,G=t.get(x.envMap||N,B),U=G&&G.mapping===xa?G.image.height:null,k=f[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&$t("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const X=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,dt=X!==void 0?X.length:0;let yt=0;I.morphAttributes.position!==void 0&&(yt=1),I.morphAttributes.normal!==void 0&&(yt=2),I.morphAttributes.color!==void 0&&(yt=3);let wt,bt,Qt,j;if(k){const Ie=ni[k];wt=Ie.vertexShader,bt=Ie.fragmentShader}else{wt=x.vertexShader,bt=x.fragmentShader;const Ie=a.getVertexShaderStage(x),re=a.getFragmentShaderStage(x);a.update(x,Ie,re),Qt=Ie.id,j=re.id}const nt=n.getRenderTarget(),W=n.state.buffers.depth.getReversed(),st=C.isInstancedMesh===!0,J=C.isBatchedMesh===!0,ft=!!x.map,gt=!!x.matcap,Z=!!G,tt=!!x.aoMap,it=!!x.lightMap,ct=!!x.bumpMap&&x.wireframe===!1,mt=!!x.normalMap,_t=!!x.displacementMap,Mt=!!x.emissiveMap,xt=!!x.metalnessMap,Ut=!!x.roughnessMap,z=x.anisotropy>0,jt=x.clearcoat>0,he=x.dispersion>0,F=x.retroreflectivity>0,A=x.iridescence>0,Y=x.sheen>0,$=x.transmission>0,rt=z&&!!x.anisotropyMap,St=jt&&!!x.clearcoatMap,Tt=jt&&!!x.clearcoatNormalMap,ot=jt&&!!x.clearcoatRoughnessMap,lt=A&&!!x.iridescenceMap,Ct=A&&!!x.iridescenceThicknessMap,Zt=Y&&!!x.sheenColorMap,Et=Y&&!!x.sheenRoughnessMap,At=!!x.specularMap,Jt=!!x.specularColorMap,Wt=!!x.specularIntensityMap,ie=$&&!!x.transmissionMap,V=$&&!!x.thicknessMap,Rt=!!x.gradientMap,ht=!!x.alphaMap,Pt=x.alphaTest>0,Bt=!!x.alphaHash,vt=!!x.extensions;let Yt=ri;x.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Yt=n.toneMapping);const qt={shaderID:k,shaderType:x.type,shaderName:x.name,vertexShader:wt,fragmentShader:bt,defines:x.defines,customVertexShaderID:Qt,customFragmentShaderID:j,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:J,batchingColor:J&&C._colorsTexture!==null,instancing:st,instancingColor:st&&C.instanceColor!==null,instancingMorph:st&&C.morphTexture!==null,outputColorSpace:nt===null?n.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:ve.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ft,matcap:gt,envMap:Z,envMapMode:Z&&G.mapping,envMapCubeUVHeight:U,aoMap:tt,lightMap:it,bumpMap:ct,normalMap:mt,displacementMap:_t,emissiveMap:Mt,normalMapObjectSpace:mt&&x.normalMapType===dp,normalMapTangentSpace:mt&&x.normalMapType===_c,packedNormalMap:mt&&x.normalMapType===_c&&Wv(x.normalMap.format),metalnessMap:xt,roughnessMap:Ut,anisotropy:z,anisotropyMap:rt,clearcoat:jt,clearcoatMap:St,clearcoatNormalMap:Tt,clearcoatRoughnessMap:ot,dispersion:he,retroreflection:F,iridescence:A,iridescenceMap:lt,iridescenceThicknessMap:Ct,sheen:Y,sheenColorMap:Zt,sheenRoughnessMap:Et,specularMap:At,specularColorMap:Jt,specularIntensityMap:Wt,transmission:$,transmissionMap:ie,thicknessMap:V,gradientMap:Rt,opaque:x.transparent===!1&&x.blending===Ar&&x.alphaToCoverage===!1,alphaMap:ht,alphaTest:Pt,alphaHash:Bt,combine:x.combine,mapUv:ft&&g(x.map.channel),aoMapUv:tt&&g(x.aoMap.channel),lightMapUv:it&&g(x.lightMap.channel),bumpMapUv:ct&&g(x.bumpMap.channel),normalMapUv:mt&&g(x.normalMap.channel),displacementMapUv:_t&&g(x.displacementMap.channel),emissiveMapUv:Mt&&g(x.emissiveMap.channel),metalnessMapUv:xt&&g(x.metalnessMap.channel),roughnessMapUv:Ut&&g(x.roughnessMap.channel),anisotropyMapUv:rt&&g(x.anisotropyMap.channel),clearcoatMapUv:St&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Zt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Et&&g(x.sheenRoughnessMap.channel),specularMapUv:At&&g(x.specularMap.channel),specularColorMapUv:Jt&&g(x.specularColorMap.channel),specularIntensityMapUv:Wt&&g(x.specularIntensityMap.channel),transmissionMapUv:ie&&g(x.transmissionMap.channel),thicknessMapUv:V&&g(x.thicknessMap.channel),alphaMapUv:ht&&g(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(mt||z),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!I.attributes.uv&&(ft||ht),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&mt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:W,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:yt,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:P.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&E.length>0,shadowMapType:n.shadowMap.type,toneMapping:Yt,decodeVideoTexture:ft&&x.map.isVideoTexture===!0&&ve.getTransfer(x.map.colorSpace)===Ce,decodeVideoTextureEmissive:Mt&&x.emissiveMap.isVideoTexture===!0&&ve.getTransfer(x.emissiveMap.colorSpace)===Ce,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Oe,flipSided:x.side===vn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:vt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&x.extensions.multiDraw===!0||J)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return qt.vertexUv1s=l.has(1),qt.vertexUv2s=l.has(2),qt.vertexUv3s=l.has(3),l.clear(),qt}function p(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const E in x.defines)S.push(E),S.push(x.defines[E]);return x.isRawShaderMaterial===!1&&(m(S,x),y(S,x),S.push(n.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function m(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function y(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function w(x){const S=f[x.type];let E;if(S){const T=ni[S];E=Yr.clone(T.uniforms)}else E=x.uniforms;return E}function _(x,S){let E=h.get(S);return E!==void 0?++E.usedTimes:(E=new kv(n,S,x,s),c.push(E),h.set(S,E)),E}function M(x){if(--x.usedTimes===0){const S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){a.remove(x)}function R(){a.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:w,acquireProgram:_,releaseProgram:M,releaseShaderCache:b,programs:c,dispose:R}}function Yv(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function qv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Ou(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Fu(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,v,p,m){let y=n[t];return y===void 0?(y={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:p,group:m},n[t]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=g,y.materialVariant=o(u),y.groupOrder=v,y.renderOrder=u.renderOrder,y.z=p,y.group=m),t++,y}function l(u,f,g,v,p,m,y){y.reversedDepth===!0&&(p=-p);const w=a(u,f,g,v,p,m);g.transmission>0?i.push(w):g.transparent===!0?s.push(w):e.push(w)}function c(u,f,g,v,p,m){const y=a(u,f,g,v,p,m);g.transmission>0?i.unshift(y):g.transparent===!0?s.unshift(y):e.unshift(y)}function h(u,f){e.length>1&&e.sort(u||qv),i.length>1&&i.sort(f||Ou),s.length>1&&s.sort(f||Ou)}function d(){for(let u=t,f=n.length;u<f;u++){const g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Kv(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Fu,n.set(i,[o])):s>=r.length?(o=new Fu,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Zv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new Nt};break;case"SpotLight":e={position:new O,direction:new O,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new O,halfWidth:new O,halfHeight:new O};break}return n[t.id]=e,e}}}function Jv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let $v=0;function Qv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function jv(n){const t=new Zv,e=Jv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const s=new O,r=new ae,o=new ae;function a(c){let h=0,d=0,u=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let f=0,g=0,v=0,p=0,m=0,y=0,w=0,_=0,M=0,b=0,R=0,x=0,S=0,E=0;c.sort(Qv);for(let C=0,P=c.length;C<P;C++){const L=c[C],I=L.color,N=L.intensity,B=L.distance;let G=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===hs?G=L.shadow.map.texture:G=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=I.r*N,d+=I.g*N,u+=I.b*N;else if(L.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(L.sh.coefficients[U],N);E++}else if(L.isSunLight){const U=t.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const k=L.shadow,X=e.get(L);X.shadowIntensity=k.intensity,X.shadowBias=k.bias,X.shadowNormalBias=k.normalBias,X.shadowRadius=k.radius,X.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),i.sunShadow[g]=X,i.sunShadowMap[g]=G;const dt=k.getViewportCount();for(let yt=0;yt<dt;yt++)i.sunShadowMatrix[v+yt]=k.getMatrix(yt),i.sunShadowCascade[v+yt]=k._cascadeData[yt];v+=dt,g++}i.sun[f]=U,f++}else if(L.isDirectionalLight){const U=t.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const k=L.shadow,X=e.get(L);X.shadowIntensity=k.intensity,X.shadowBias=k.bias,X.shadowNormalBias=k.normalBias,X.shadowRadius=k.radius,X.shadowMapSize=k.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=G,i.directionalShadowMatrix[p]=L.shadow.matrix,M++}i.directional[p]=U,p++}else if(L.isSpotLight){const U=t.get(L);U.position.setFromMatrixPosition(L.matrixWorld),U.color.copy(I).multiplyScalar(N),U.distance=B,U.coneCos=Math.cos(L.angle),U.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),U.decay=L.decay,i.spot[y]=U;const k=L.shadow;if(L.map&&(i.spotLightMap[x]=L.map,x++,k.updateMatrices(L),L.castShadow&&S++),i.spotLightMatrix[y]=k.matrix,L.castShadow){const X=e.get(L);X.shadowIntensity=k.intensity,X.shadowBias=k.bias,X.shadowNormalBias=k.normalBias,X.shadowRadius=k.radius,X.shadowMapSize=k.mapSize,i.spotShadow[y]=X,i.spotShadowMap[y]=G,R++}y++}else if(L.isRectAreaLight){const U=t.get(L);U.color.copy(I).multiplyScalar(N),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),i.rectArea[w]=U,w++}else if(L.isPointLight){const U=t.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),U.distance=L.distance,U.decay=L.decay,L.castShadow){const k=L.shadow,X=e.get(L);X.shadowIntensity=k.intensity,X.shadowBias=k.bias,X.shadowNormalBias=k.normalBias,X.shadowRadius=k.radius,X.shadowMapSize=k.mapSize,X.shadowCameraNear=k.camera.near,X.shadowCameraFar=k.camera.far,i.pointShadow[m]=X,i.pointShadowMap[m]=G,i.pointShadowMatrix[m]=L.shadow.matrix,b++}i.point[m]=U,m++}else if(L.isHemisphereLight){const U=t.get(L);U.skyColor.copy(L.color).multiplyScalar(N),U.groundColor.copy(L.groundColor).multiplyScalar(N),i.hemi[_]=U,_++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ot.LTC_FLOAT_1,i.rectAreaLTC2=Ot.LTC_FLOAT_2):(i.rectAreaLTC1=Ot.LTC_HALF_1,i.rectAreaLTC2=Ot.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const T=i.hash;(T.sunLength!==f||T.directionalLength!==p||T.pointLength!==m||T.spotLength!==y||T.rectAreaLength!==w||T.hemiLength!==_||T.numSunShadows!==g||T.numDirectionalShadows!==M||T.numPointShadows!==b||T.numSpotShadows!==R||T.numSpotMaps!==x||T.numLightProbes!==E)&&(i.sun.length=f,i.directional.length=p,i.spot.length=y,i.rectArea.length=w,i.point.length=m,i.hemi.length=_,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+x-S,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=E,T.sunLength=f,T.directionalLength=p,T.pointLength=m,T.spotLength=y,T.rectAreaLength=w,T.hemiLength=_,T.numSunShadows=g,T.numDirectionalShadows=M,T.numPointShadows=b,T.numSpotShadows=R,T.numSpotMaps=x,T.numLightProbes=E,i.version=$v++)}function l(c,h){let d=0,u=0,f=0,g=0,v=0,p=0;const m=h.matrixWorldInverse;for(let y=0,w=c.length;y<w;y++){const _=c[y];if(_.isSunLight){const M=i.sun[d];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),d++}else if(_.isDirectionalLight){const M=i.directional[u];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(_.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),g++}else if(_.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const M=i.hemi[p];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),p++}}}return{setup:a,setupView:l,state:i}}function Bu(n){const t=new jv(n),e=[],i=[],s=[];function r(u){d.camera=u,e.length=0,i.length=0,s.length=0}function o(u){e.push(u)}function a(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}const d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function t1(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Bu(n),t.set(s,[a])):r>=o.length?(a=new Bu(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const e1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n1=`uniform sampler2D shadow_pass;
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
}`,i1=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],s1=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],zu=new ae,xr=new O,fl=new O;function r1(n,t,e){let i=new Qc;const s=new ut,r=new ut,o=new Ge,a=new $0,l=new Q0,c={},h=e.maxTextureSize,d={[ls]:vn,[vn]:ls,[Oe]:Oe},u=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:e1,fragmentShader:n1}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new ge;g.setAttribute("position",new Me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Q(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tr;let m=this.type;this.render=function(b,R,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===Vf&&($t("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Tr);const S=n.getRenderTarget(),E=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),C=n.state;C.setBlending(si),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const P=m!==this.type;P&&R.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(I=>I.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,I=b.length;L<I;L++){const N=b[L],B=N.shadow;if(B===void 0){$t("WebGLShadowMap:",N,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const G=B.getFrameExtents();s.multiply(G),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/G.x),s.x=r.x*G.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/G.y),s.y=r.y*G.y,B.mapSize.y=r.y));const U=n.state.buffers.depth.getReversed();if(B.camera._reversedDepth=U,B.map===null||P===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===yr){if(N.isPointLight){$t("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new yn(s.x,s.y,{format:hs,type:on,minFilter:Ye,magFilter:Ye,generateMipmaps:!1}),B.map.texture.name=N.name+".shadowMap",B.map.depthTexture=new Hr(s.x,s.y,Pn),B.map.depthTexture.name=N.name+".shadowMapDepth",B.map.depthTexture.format=Ti,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=sn,B.map.depthTexture.magFilter=sn}else N.isPointLight?(B.map=new Qd(s.x),B.map.depthTexture=new p0(s.x,hi)):(B.map=new yn(s.x,s.y),B.map.depthTexture=new Hr(s.x,s.y,hi)),B.map.depthTexture.name=N.name+".shadowMap",B.map.depthTexture.format=Ti,this.type===Tr?(B.map.depthTexture.compareFunction=U?qc:Yc,B.map.depthTexture.minFilter=Ye,B.map.depthTexture.magFilter=Ye):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=sn,B.map.depthTexture.magFilter=sn);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);const k=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();N.isPointLight!==!0&&B.updateMatrices(N,x);for(let X=0;X<k;X++){const dt=B.getCamera(X);if(N.isPointLight){const yt=B.camera,wt=B.matrix,bt=N.distance||yt.far;bt!==yt.far&&(yt.far=bt,yt.updateProjectionMatrix()),xr.setFromMatrixPosition(N.matrixWorld),yt.position.copy(xr),fl.copy(yt.position),fl.add(i1[X]),yt.up.copy(s1[X]),yt.lookAt(fl),yt.updateMatrixWorld(),wt.makeTranslation(-xr.x,-xr.y,-xr.z),zu.multiplyMatrices(yt.projectionMatrix,yt.matrixWorldInverse),B._frustum.setFromProjectionMatrix(zu,yt.coordinateSystem,yt.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,X),n.clear();else{X===0&&(n.setRenderTarget(B.map),n.clear());const yt=B.getViewport(X);o.set(r.x*yt.x,r.y*yt.y,r.x*yt.z,r.y*yt.w),C.viewport(o)}i=B.getFrustum(X),_(R,x,dt,N,this.type)}B.isPointLightShadow!==!0&&this.type===yr&&y(B,x),B.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(S,E,T)};function y(b,R){const x=t.update(v);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new yn(s.x,s.y,{format:hs,type:on}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(R,null,x,u,v,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(R,null,x,f,v,null)}function w(b,R,x,S){let E=null;const T=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(T!==void 0)E=T;else if(E=x.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const C=E.uuid,P=R.uuid;let L=c[C];L===void 0&&(L={},c[C]=L);let I=L[P];I===void 0&&(I=E.clone(),L[P]=I,R.addEventListener("dispose",M)),E=I}if(E.visible=R.visible,E.wireframe=R.wireframe,S===yr?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:d[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,x.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const C=n.properties.get(E);C.light=x}return E}function _(b,R,x,S,E){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===yr)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const P=t.update(b),L=b.material;if(Array.isArray(L)){const I=P.groups;for(let N=0,B=I.length;N<B;N++){const G=I[N],U=L[G.materialIndex];if(U&&U.visible){const k=w(b,U,S,E);b.onBeforeShadow(n,b,R,x,P,k,G),n.renderBufferDirect(x,null,P,k,b,G),b.onAfterShadow(n,b,R,x,P,k,G)}}}else if(L.visible){const I=w(b,L,S,E);b.onBeforeShadow(n,b,R,x,P,I,null),n.renderBufferDirect(x,null,P,I,b,null),b.onAfterShadow(n,b,R,x,P,I,null)}}const C=b.children;for(let P=0,L=C.length;P<L;P++)_(C[P],R,x,S,E)}function M(b){b.target.removeEventListener("dispose",M);for(const x in c){const S=c[x],E=b.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function o1(n,t){function e(){let V=!1;const Rt=new Ge;let ht=null;const Pt=new Ge(0,0,0,0);return{setMask:function(Bt){ht!==Bt&&!V&&(n.colorMask(Bt,Bt,Bt,Bt),ht=Bt)},setLocked:function(Bt){V=Bt},setClear:function(Bt,vt,Yt,qt,Ie){Ie===!0&&(Bt*=qt,vt*=qt,Yt*=qt),Rt.set(Bt,vt,Yt,qt),Pt.equals(Rt)===!1&&(n.clearColor(Bt,vt,Yt,qt),Pt.copy(Rt))},reset:function(){V=!1,ht=null,Pt.set(-1,0,0,0)}}}function i(){let V=!1,Rt=!1,ht=null,Pt=null,Bt=null;return{setReversed:function(vt){if(Rt!==vt){const Yt=t.get("EXT_clip_control");vt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),Rt=vt;const qt=Bt;Bt=null,this.setClear(qt)}},getReversed:function(){return Rt},setTest:function(vt){vt?nt(n.DEPTH_TEST):W(n.DEPTH_TEST)},setMask:function(vt){ht!==vt&&!V&&(n.depthMask(vt),ht=vt)},setFunc:function(vt){if(Rt&&(vt=bp[vt]),Pt!==vt){switch(vt){case Il:n.depthFunc(n.NEVER);break;case Nl:n.depthFunc(n.ALWAYS);break;case Ul:n.depthFunc(n.LESS);break;case Nr:n.depthFunc(n.LEQUAL);break;case Ol:n.depthFunc(n.EQUAL);break;case Fl:n.depthFunc(n.GEQUAL);break;case Bl:n.depthFunc(n.GREATER);break;case zl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pt=vt}},setLocked:function(vt){V=vt},setClear:function(vt){Bt!==vt&&(Bt=vt,Rt&&(vt=1-vt),n.clearDepth(vt))},reset:function(){V=!1,ht=null,Pt=null,Bt=null,Rt=!1}}}function s(){let V=!1,Rt=null,ht=null,Pt=null,Bt=null,vt=null,Yt=null,qt=null,Ie=null;return{setTest:function(re){V||(re?nt(n.STENCIL_TEST):W(n.STENCIL_TEST))},setMask:function(re){Rt!==re&&!V&&(n.stencilMask(re),Rt=re)},setFunc:function(re,Ve,dn){(ht!==re||Pt!==Ve||Bt!==dn)&&(n.stencilFunc(re,Ve,dn),ht=re,Pt=Ve,Bt=dn)},setOp:function(re,Ve,dn){(vt!==re||Yt!==Ve||qt!==dn)&&(n.stencilOp(re,Ve,dn),vt=re,Yt=Ve,qt=dn)},setLocked:function(re){V=re},setClear:function(re){Ie!==re&&(n.clearStencil(re),Ie=re)},reset:function(){V=!1,Rt=null,ht=null,Pt=null,Bt=null,vt=null,Yt=null,qt=null,Ie=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let h={},d={},u={},f=new WeakMap,g=[],v=null,p=!1,m=null,y=null,w=null,_=null,M=null,b=null,R=null,x=new Nt(0,0,0),S=0,E=!1,T=null,C=null,P=null,L=null,I=null;const N=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,G=0;const U=n.getParameter(n.VERSION);U.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(U)[1]),B=G>=1):U.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),B=G>=2);let k=null,X={};const dt=n.getParameter(n.SCISSOR_BOX),yt=n.getParameter(n.VIEWPORT),wt=new Ge().fromArray(dt),bt=new Ge().fromArray(yt);function Qt(V,Rt,ht,Pt){const Bt=new Uint8Array(4),vt=n.createTexture();n.bindTexture(V,vt),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Yt=0;Yt<ht;Yt++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(Rt,0,n.RGBA,1,1,Pt,0,n.RGBA,n.UNSIGNED_BYTE,Bt):n.texImage2D(Rt+Yt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Bt);return vt}const j={};j[n.TEXTURE_2D]=Qt(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=Qt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=Qt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=Qt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(n.DEPTH_TEST),o.setFunc(Nr),ct(!1),mt(Ch),nt(n.CULL_FACE),tt(si);function nt(V){h[V]!==!0&&(n.enable(V),h[V]=!0)}function W(V){h[V]!==!1&&(n.disable(V),h[V]=!1)}function st(V,Rt){return u[V]!==Rt?(n.bindFramebuffer(V,Rt),u[V]=Rt,V===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Rt),V===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Rt),!0):!1}function J(V,Rt){let ht=g,Pt=!1;if(V){ht=f.get(Rt),ht===void 0&&(ht=[],f.set(Rt,ht));const Bt=V.textures;if(ht.length!==Bt.length||ht[0]!==n.COLOR_ATTACHMENT0){for(let vt=0,Yt=Bt.length;vt<Yt;vt++)ht[vt]=n.COLOR_ATTACHMENT0+vt;ht.length=Bt.length,Pt=!0}}else ht[0]!==n.BACK&&(ht[0]=n.BACK,Pt=!0);Pt&&n.drawBuffers(ht)}function ft(V){return v!==V?(n.useProgram(V),v=V,!0):!1}const gt={[Hs]:n.FUNC_ADD,[Xf]:n.FUNC_SUBTRACT,[Yf]:n.FUNC_REVERSE_SUBTRACT};gt[qf]=n.MIN,gt[Kf]=n.MAX;const Z={[Zf]:n.ZERO,[Jf]:n.ONE,[$f]:n.SRC_COLOR,[yd]:n.SRC_ALPHA,[ip]:n.SRC_ALPHA_SATURATE,[ep]:n.DST_COLOR,[jf]:n.DST_ALPHA,[Qf]:n.ONE_MINUS_SRC_COLOR,[Md]:n.ONE_MINUS_SRC_ALPHA,[np]:n.ONE_MINUS_DST_COLOR,[tp]:n.ONE_MINUS_DST_ALPHA,[sp]:n.CONSTANT_COLOR,[rp]:n.ONE_MINUS_CONSTANT_COLOR,[op]:n.CONSTANT_ALPHA,[ap]:n.ONE_MINUS_CONSTANT_ALPHA};function tt(V,Rt,ht,Pt,Bt,vt,Yt,qt,Ie,re){if(V===si){p===!0&&(W(n.BLEND),p=!1);return}if(p===!1&&(nt(n.BLEND),p=!0),V!==Wf){if(V!==m||re!==E){if((y!==Hs||M!==Hs)&&(n.blendEquation(n.FUNC_ADD),y=Hs,M=Hs),re)switch(V){case Ar:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ia:n.blendFunc(n.ONE,n.ONE);break;case Ph:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:_e("WebGLState: Invalid blending: ",V);break}else switch(V){case Ar:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ia:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ph:_e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dh:_e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:_e("WebGLState: Invalid blending: ",V);break}w=null,_=null,b=null,R=null,x.set(0,0,0),S=0,m=V,E=re}return}Bt=Bt||Rt,vt=vt||ht,Yt=Yt||Pt,(Rt!==y||Bt!==M)&&(n.blendEquationSeparate(gt[Rt],gt[Bt]),y=Rt,M=Bt),(ht!==w||Pt!==_||vt!==b||Yt!==R)&&(n.blendFuncSeparate(Z[ht],Z[Pt],Z[vt],Z[Yt]),w=ht,_=Pt,b=vt,R=Yt),(qt.equals(x)===!1||Ie!==S)&&(n.blendColor(qt.r,qt.g,qt.b,Ie),x.copy(qt),S=Ie),m=V,E=!1}function it(V,Rt){V.side===Oe?W(n.CULL_FACE):nt(n.CULL_FACE);let ht=V.side===vn;Rt&&(ht=!ht),ct(ht),V.blending===Ar&&V.transparent===!1?tt(si):tt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);const Pt=V.stencilWrite;a.setTest(Pt),Pt&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Mt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?nt(n.SAMPLE_ALPHA_TO_COVERAGE):W(n.SAMPLE_ALPHA_TO_COVERAGE)}function ct(V){T!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),T=V)}function mt(V){V!==Gf?(nt(n.CULL_FACE),V!==C&&(V===Ch?n.cullFace(n.BACK):V===Hf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):W(n.CULL_FACE),C=V}function _t(V){V!==P&&(B&&n.lineWidth(V),P=V)}function Mt(V,Rt,ht){V?(nt(n.POLYGON_OFFSET_FILL),(L!==Rt||I!==ht)&&(L=Rt,I=ht,o.getReversed()&&(Rt=-Rt),n.polygonOffset(Rt,ht))):W(n.POLYGON_OFFSET_FILL)}function xt(V){V?nt(n.SCISSOR_TEST):W(n.SCISSOR_TEST)}function Ut(V){V===void 0&&(V=n.TEXTURE0+N-1),k!==V&&(n.activeTexture(V),k=V)}function z(V,Rt,ht){ht===void 0&&(k===null?ht=n.TEXTURE0+N-1:ht=k);let Pt=X[ht];Pt===void 0&&(Pt={type:void 0,texture:void 0},X[ht]=Pt),(Pt.type!==V||Pt.texture!==Rt)&&(k!==ht&&(n.activeTexture(ht),k=ht),n.bindTexture(V,Rt||j[V]),Pt.type=V,Pt.texture=Rt)}function jt(){const V=X[k];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function he(){try{n.compressedTexImage2D(...arguments)}catch(V){_e("WebGLState:",V)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(V){_e("WebGLState:",V)}}function A(){try{n.texSubImage2D(...arguments)}catch(V){_e("WebGLState:",V)}}function Y(){try{n.texSubImage3D(...arguments)}catch(V){_e("WebGLState:",V)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(V){_e("WebGLState:",V)}}function rt(){try{n.compressedTexSubImage3D(...arguments)}catch(V){_e("WebGLState:",V)}}function St(){try{n.texStorage2D(...arguments)}catch(V){_e("WebGLState:",V)}}function Tt(){try{n.texStorage3D(...arguments)}catch(V){_e("WebGLState:",V)}}function ot(){try{n.texImage2D(...arguments)}catch(V){_e("WebGLState:",V)}}function lt(){try{n.texImage3D(...arguments)}catch(V){_e("WebGLState:",V)}}function Ct(V){return d[V]!==void 0?d[V]:n.getParameter(V)}function Zt(V,Rt){d[V]!==Rt&&(n.pixelStorei(V,Rt),d[V]=Rt)}function Et(V){wt.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),wt.copy(V))}function At(V){bt.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),bt.copy(V))}function Jt(V,Rt){let ht=c.get(Rt);ht===void 0&&(ht=new WeakMap,c.set(Rt,ht));let Pt=ht.get(V);Pt===void 0&&(Pt=n.getUniformBlockIndex(Rt,V.name),ht.set(V,Pt))}function Wt(V,Rt){const Pt=c.get(Rt).get(V);l.get(Rt)!==Pt&&(n.uniformBlockBinding(Rt,Pt,V.__bindingPointIndex),l.set(Rt,Pt))}function ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},k=null,X={},u={},f=new WeakMap,g=[],v=null,p=!1,m=null,y=null,w=null,_=null,M=null,b=null,R=null,x=new Nt(0,0,0),S=0,E=!1,T=null,C=null,P=null,L=null,I=null,wt.set(0,0,n.canvas.width,n.canvas.height),bt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:nt,disable:W,bindFramebuffer:st,drawBuffers:J,useProgram:ft,setBlending:tt,setMaterial:it,setFlipSided:ct,setCullFace:mt,setLineWidth:_t,setPolygonOffset:Mt,setScissorTest:xt,activeTexture:Ut,bindTexture:z,unbindTexture:jt,compressedTexImage2D:he,compressedTexImage3D:F,texImage2D:ot,texImage3D:lt,pixelStorei:Zt,getParameter:Ct,updateUBOMapping:Jt,uniformBlockBinding:Wt,texStorage2D:St,texStorage3D:Tt,texSubImage2D:A,texSubImage3D:Y,compressedTexSubImage2D:$,compressedTexSubImage3D:rt,scissor:Et,viewport:At,reset:ie}}function a1(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(F,A){return g?new OffscreenCanvas(F,A):Gr("canvas")}function p(F,A,Y){let $=1;const rt=he(F);if((rt.width>Y||rt.height>Y)&&($=Y/Math.max(rt.width,rt.height)),$<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const St=Math.floor($*rt.width),Tt=Math.floor($*rt.height);u===void 0&&(u=v(St,Tt));const ot=A?v(St,Tt):u;return ot.width=St,ot.height=Tt,ot.getContext("2d").drawImage(F,0,0,St,Tt),$t("WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+St+"x"+Tt+")."),ot}else return"data"in F&&$t("WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),F;return F}function m(F){return F.generateMipmaps}function y(F){n.generateMipmap(F)}function w(F){return F.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?n.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(F,A,Y,$,rt,St=!1){if(F!==null){if(n[F]!==void 0)return n[F];$t("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Tt;$&&(Tt=t.get("EXT_texture_norm16"),Tt||$t("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ot=A;if(A===n.RED&&(Y===n.FLOAT&&(ot=n.R32F),Y===n.HALF_FLOAT&&(ot=n.R16F),Y===n.UNSIGNED_BYTE&&(ot=n.R8),Y===n.UNSIGNED_SHORT&&Tt&&(ot=Tt.R16_EXT),Y===n.SHORT&&Tt&&(ot=Tt.R16_SNORM_EXT)),A===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ot=n.R8UI),Y===n.UNSIGNED_SHORT&&(ot=n.R16UI),Y===n.UNSIGNED_INT&&(ot=n.R32UI),Y===n.BYTE&&(ot=n.R8I),Y===n.SHORT&&(ot=n.R16I),Y===n.INT&&(ot=n.R32I)),A===n.RG&&(Y===n.FLOAT&&(ot=n.RG32F),Y===n.HALF_FLOAT&&(ot=n.RG16F),Y===n.UNSIGNED_BYTE&&(ot=n.RG8),Y===n.UNSIGNED_SHORT&&Tt&&(ot=Tt.RG16_EXT),Y===n.SHORT&&Tt&&(ot=Tt.RG16_SNORM_EXT)),A===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ot=n.RG8UI),Y===n.UNSIGNED_SHORT&&(ot=n.RG16UI),Y===n.UNSIGNED_INT&&(ot=n.RG32UI),Y===n.BYTE&&(ot=n.RG8I),Y===n.SHORT&&(ot=n.RG16I),Y===n.INT&&(ot=n.RG32I)),A===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ot=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(ot=n.RGB16UI),Y===n.UNSIGNED_INT&&(ot=n.RGB32UI),Y===n.BYTE&&(ot=n.RGB8I),Y===n.SHORT&&(ot=n.RGB16I),Y===n.INT&&(ot=n.RGB32I)),A===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ot=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(ot=n.RGBA16UI),Y===n.UNSIGNED_INT&&(ot=n.RGBA32UI),Y===n.BYTE&&(ot=n.RGBA8I),Y===n.SHORT&&(ot=n.RGBA16I),Y===n.INT&&(ot=n.RGBA32I)),A===n.RGB&&(Y===n.UNSIGNED_SHORT&&Tt&&(ot=Tt.RGB16_EXT),Y===n.SHORT&&Tt&&(ot=Tt.RGB16_SNORM_EXT),Y===n.UNSIGNED_INT_5_9_9_9_REV&&(ot=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(ot=n.R11F_G11F_B10F)),A===n.RGBA){const lt=St?oa:ve.getTransfer(rt);Y===n.FLOAT&&(ot=n.RGBA32F),Y===n.HALF_FLOAT&&(ot=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(ot=lt===Ce?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT&&Tt&&(ot=Tt.RGBA16_EXT),Y===n.SHORT&&Tt&&(ot=Tt.RGBA16_SNORM_EXT),Y===n.UNSIGNED_SHORT_4_4_4_4&&(ot=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(ot=n.RGB5_A1)}return(ot===n.R16F||ot===n.R32F||ot===n.RG16F||ot===n.RG32F||ot===n.RGBA16F||ot===n.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function M(F,A){let Y;return F?A===null||A===hi||A===Br?Y=n.DEPTH24_STENCIL8:A===Pn?Y=n.DEPTH32F_STENCIL8:A===Fr&&(Y=n.DEPTH24_STENCIL8,$t("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===hi||A===Br?Y=n.DEPTH_COMPONENT24:A===Pn?Y=n.DEPTH_COMPONENT32F:A===Fr&&(Y=n.DEPTH_COMPONENT16),Y}function b(F,A){return m(F)===!0||F.isFramebufferTexture&&F.minFilter!==sn&&F.minFilter!==Ye?Math.log2(Math.max(A.width,A.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?A.mipmaps.length:1}function R(F){const A=F.target;A.removeEventListener("dispose",R),S(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function x(F){const A=F.target;A.removeEventListener("dispose",x),T(A)}function S(F){const A=i.get(F);if(A.__webglInit===void 0)return;const Y=F.source,$=f.get(Y);if($){const rt=$[A.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&E(F),Object.keys($).length===0&&f.delete(Y)}i.remove(F)}function E(F){const A=i.get(F);n.deleteTexture(A.__webglTexture);const Y=F.source,$=f.get(Y);delete $[A.__cacheKey],o.memory.textures--}function T(F){const A=i.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),i.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(A.__webglFramebuffer[$]))for(let rt=0;rt<A.__webglFramebuffer[$].length;rt++)n.deleteFramebuffer(A.__webglFramebuffer[$][rt]);else n.deleteFramebuffer(A.__webglFramebuffer[$]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[$])}else{if(Array.isArray(A.__webglFramebuffer))for(let $=0;$<A.__webglFramebuffer.length;$++)n.deleteFramebuffer(A.__webglFramebuffer[$]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let $=0;$<A.__webglColorRenderbuffer.length;$++)A.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[$]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Y=F.textures;for(let $=0,rt=Y.length;$<rt;$++){const St=i.get(Y[$]);St.__webglTexture&&(n.deleteTexture(St.__webglTexture),o.memory.textures--),i.remove(Y[$])}i.remove(F)}let C=0;function P(){C=0}function L(){return C}function I(F){C=F}function N(){const F=C;return F>=s.maxTextures&&$t("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+s.maxTextures),C+=1,F}function B(F){const A=[];return A.push(F.wrapS),A.push(F.wrapT),A.push(F.wrapR||0),A.push(F.magFilter),A.push(F.minFilter),A.push(F.anisotropy),A.push(F.internalFormat),A.push(F.format),A.push(F.type),A.push(F.generateMipmaps),A.push(F.premultiplyAlpha),A.push(F.flipY),A.push(F.unpackAlignment),A.push(F.colorSpace),A.join()}function G(F,A){const Y=i.get(F);if(F.isVideoTexture&&z(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&Y.__version!==F.version){const $=F.image;if($===null)$t("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)$t("WebGLRenderer: Texture marked for update but image is incomplete");else{W(Y,F,A);return}}else F.isExternalTexture&&(Y.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+A)}function U(F,A){const Y=i.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Y.__version!==F.version){W(Y,F,A);return}else F.isExternalTexture&&(Y.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+A)}function k(F,A){const Y=i.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Y.__version!==F.version){W(Y,F,A);return}e.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+A)}function X(F,A){const Y=i.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&Y.__version!==F.version){st(Y,F,A);return}e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+A)}const dt={[On]:n.REPEAT,[Xn]:n.CLAMP_TO_EDGE,[kl]:n.MIRRORED_REPEAT},yt={[sn]:n.NEAREST,[hp]:n.NEAREST_MIPMAP_NEAREST,[io]:n.NEAREST_MIPMAP_LINEAR,[Ye]:n.LINEAR,[Ua]:n.LINEAR_MIPMAP_NEAREST,[Bi]:n.LINEAR_MIPMAP_LINEAR},wt={[pp]:n.NEVER,[vp]:n.ALWAYS,[mp]:n.LESS,[Yc]:n.LEQUAL,[gp]:n.EQUAL,[qc]:n.GEQUAL,[_p]:n.GREATER,[xp]:n.NOTEQUAL};function bt(F,A){if(A.type===Pn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Ye||A.magFilter===Ua||A.magFilter===io||A.magFilter===Bi||A.minFilter===Ye||A.minFilter===Ua||A.minFilter===io||A.minFilter===Bi)&&$t("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(F,n.TEXTURE_WRAP_S,dt[A.wrapS]),n.texParameteri(F,n.TEXTURE_WRAP_T,dt[A.wrapT]),(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)&&n.texParameteri(F,n.TEXTURE_WRAP_R,dt[A.wrapR]),n.texParameteri(F,n.TEXTURE_MAG_FILTER,yt[A.magFilter]),n.texParameteri(F,n.TEXTURE_MIN_FILTER,yt[A.minFilter]),A.compareFunction&&(n.texParameteri(F,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(F,n.TEXTURE_COMPARE_FUNC,wt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===sn||A.minFilter!==io&&A.minFilter!==Bi||A.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");n.texParameterf(F,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function Qt(F,A){let Y=!1;F.__webglInit===void 0&&(F.__webglInit=!0,A.addEventListener("dispose",R));const $=A.source;let rt=f.get($);rt===void 0&&(rt={},f.set($,rt));const St=B(A);if(St!==F.__cacheKey){rt[St]===void 0&&(rt[St]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),rt[St].usedTimes++;const Tt=rt[F.__cacheKey];Tt!==void 0&&(rt[F.__cacheKey].usedTimes--,Tt.usedTimes===0&&E(A)),F.__cacheKey=St,F.__webglTexture=rt[St].texture}return Y}function j(F,A,Y){return Math.floor(Math.floor(F/Y)/A)}function nt(F,A,Y,$){const St=F.updateRanges;if(St.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,A.width,A.height,Y,$,A.data);else{St.sort((Zt,Et)=>Zt.start-Et.start);let Tt=0;for(let Zt=1;Zt<St.length;Zt++){const Et=St[Tt],At=St[Zt],Jt=Et.start+Et.count,Wt=j(At.start,A.width,4),ie=j(Et.start,A.width,4);At.start<=Jt+1&&Wt===ie&&j(At.start+At.count-1,A.width,4)===Wt?Et.count=Math.max(Et.count,At.start+At.count-Et.start):(++Tt,St[Tt]=At)}St.length=Tt+1;const ot=e.getParameter(n.UNPACK_ROW_LENGTH),lt=e.getParameter(n.UNPACK_SKIP_PIXELS),Ct=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,A.width);for(let Zt=0,Et=St.length;Zt<Et;Zt++){const At=St[Zt],Jt=Math.floor(At.start/4),Wt=Math.ceil(At.count/4),ie=Jt%A.width,V=Math.floor(Jt/A.width),Rt=Wt,ht=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ie),e.pixelStorei(n.UNPACK_SKIP_ROWS,V),e.texSubImage2D(n.TEXTURE_2D,0,ie,V,Rt,ht,Y,$,A.data)}F.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,ot),e.pixelStorei(n.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Ct)}}function W(F,A,Y){let $=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&($=n.TEXTURE_3D);const rt=Qt(F,A),St=A.source;e.bindTexture($,F.__webglTexture,n.TEXTURE0+Y);const Tt=i.get(St);if(St.version!==Tt.__version||rt===!0){if(e.activeTexture(n.TEXTURE0+Y),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const ht=ve.getPrimaries(ve.workingColorSpace),Pt=A.colorSpace===Un?null:ve.getPrimaries(A.colorSpace),Bt=A.colorSpace===Un||ht===Pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt)}e.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment);let lt=p(A.image,!1,s.maxTextureSize);lt=jt(A,lt);const Ct=r.convert(A.format,A.colorSpace),Zt=r.convert(A.type);let Et=_(A.internalFormat,Ct,Zt,A.normalized,A.colorSpace,A.isVideoTexture);bt($,A);let At;const Jt=A.mipmaps,Wt=A.isVideoTexture!==!0,ie=Tt.__version===void 0||rt===!0,V=St.dataReady,Rt=b(A,lt);if(A.isDepthTexture)Et=M(A.format===is,A.type),ie&&(Wt?e.texStorage2D(n.TEXTURE_2D,1,Et,lt.width,lt.height):e.texImage2D(n.TEXTURE_2D,0,Et,lt.width,lt.height,0,Ct,Zt,null));else if(A.isDataTexture)if(Jt.length>0){Wt&&ie&&e.texStorage2D(n.TEXTURE_2D,Rt,Et,Jt[0].width,Jt[0].height);for(let ht=0,Pt=Jt.length;ht<Pt;ht++)At=Jt[ht],Wt?V&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,At.width,At.height,Ct,Zt,At.data):e.texImage2D(n.TEXTURE_2D,ht,Et,At.width,At.height,0,Ct,Zt,At.data);A.generateMipmaps=!1}else Wt?(ie&&e.texStorage2D(n.TEXTURE_2D,Rt,Et,lt.width,lt.height),V&&nt(A,lt,Ct,Zt)):e.texImage2D(n.TEXTURE_2D,0,Et,lt.width,lt.height,0,Ct,Zt,lt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Wt&&ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Rt,Et,Jt[0].width,Jt[0].height,lt.depth);for(let ht=0,Pt=Jt.length;ht<Pt;ht++)if(At=Jt[ht],A.format!==Yn)if(Ct!==null)if(Wt){if(V)if(A.layerUpdates.size>0){const Bt=xu(At.width,At.height,A.format,A.type);for(const vt of A.layerUpdates){const Yt=At.data.subarray(vt*Bt/At.data.BYTES_PER_ELEMENT,(vt+1)*Bt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,vt,At.width,At.height,1,Ct,Yt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,0,At.width,At.height,lt.depth,Ct,At.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ht,Et,At.width,At.height,lt.depth,0,At.data,0,0);else $t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?V&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,0,At.width,At.height,lt.depth,Ct,Zt,At.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ht,Et,At.width,At.height,lt.depth,0,Ct,Zt,At.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{Wt&&ie&&e.texStorage2D(n.TEXTURE_2D,Rt,Et,Jt[0].width,Jt[0].height);for(let ht=0,Pt=Jt.length;ht<Pt;ht++)At=Jt[ht],A.format!==Yn?Ct!==null?Wt?V&&e.compressedTexSubImage2D(n.TEXTURE_2D,ht,0,0,At.width,At.height,Ct,At.data):e.compressedTexImage2D(n.TEXTURE_2D,ht,Et,At.width,At.height,0,At.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?V&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,At.width,At.height,Ct,Zt,At.data):e.texImage2D(n.TEXTURE_2D,ht,Et,At.width,At.height,0,Ct,Zt,At.data)}else if(A.isDataArrayTexture)if(Wt){if(ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Rt,Et,lt.width,lt.height,lt.depth),V)if(A.layerUpdates.size>0){const ht=xu(lt.width,lt.height,A.format,A.type);for(const Pt of A.layerUpdates){const Bt=lt.data.subarray(Pt*ht/lt.data.BYTES_PER_ELEMENT,(Pt+1)*ht/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Pt,lt.width,lt.height,1,Ct,Zt,Bt)}A.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Ct,Zt,lt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Et,lt.width,lt.height,lt.depth,0,Ct,Zt,lt.data);else if(A.isData3DTexture)Wt?(ie&&e.texStorage3D(n.TEXTURE_3D,Rt,Et,lt.width,lt.height,lt.depth),V&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Ct,Zt,lt.data)):e.texImage3D(n.TEXTURE_3D,0,Et,lt.width,lt.height,lt.depth,0,Ct,Zt,lt.data);else if(A.isFramebufferTexture){if(ie)if(Wt)e.texStorage2D(n.TEXTURE_2D,Rt,Et,lt.width,lt.height);else{let ht=lt.width,Pt=lt.height;for(let Bt=0;Bt<Rt;Bt++)e.texImage2D(n.TEXTURE_2D,Bt,Et,ht,Pt,0,Ct,Zt,null),ht>>=1,Pt>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in n){const ht=n.canvas;if(ht.hasAttribute("layoutsubtree")||ht.setAttribute("layoutsubtree","true"),lt.parentNode!==ht){ht.appendChild(lt),d.add(A),ht.onpaint=Pt=>{const Bt=Pt.changedElements;for(const vt of d)Bt.includes(vt.image)&&(vt.needsUpdate=!0)},ht.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,lt);else{const Bt=n.RGBA,vt=n.RGBA,Yt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Bt,vt,Yt,lt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Jt.length>0){if(Wt&&ie){const ht=he(Jt[0]);e.texStorage2D(n.TEXTURE_2D,Rt,Et,ht.width,ht.height)}for(let ht=0,Pt=Jt.length;ht<Pt;ht++)At=Jt[ht],Wt?V&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,Ct,Zt,At):e.texImage2D(n.TEXTURE_2D,ht,Et,Ct,Zt,At);A.generateMipmaps=!1}else if(Wt){if(ie){const ht=he(lt);e.texStorage2D(n.TEXTURE_2D,Rt,Et,ht.width,ht.height)}V&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ct,Zt,lt)}else e.texImage2D(n.TEXTURE_2D,0,Et,Ct,Zt,lt);m(A)&&y($),Tt.__version=St.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function st(F,A,Y){if(A.image.length!==6)return;const $=Qt(F,A),rt=A.source;e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+Y);const St=i.get(rt);if(rt.version!==St.__version||$===!0){e.activeTexture(n.TEXTURE0+Y);const Tt=ve.getPrimaries(ve.workingColorSpace),ot=A.colorSpace===Un?null:ve.getPrimaries(A.colorSpace),lt=A.colorSpace===Un||Tt===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);const Ct=A.isCompressedTexture||A.image[0].isCompressedTexture,Zt=A.image[0]&&A.image[0].isDataTexture,Et=[];for(let vt=0;vt<6;vt++)!Ct&&!Zt?Et[vt]=p(A.image[vt],!0,s.maxCubemapSize):Et[vt]=Zt?A.image[vt].image:A.image[vt],Et[vt]=jt(A,Et[vt]);const At=Et[0],Jt=r.convert(A.format,A.colorSpace),Wt=r.convert(A.type),ie=_(A.internalFormat,Jt,Wt,A.normalized,A.colorSpace),V=A.isVideoTexture!==!0,Rt=St.__version===void 0||$===!0,ht=rt.dataReady;let Pt=b(A,At);bt(n.TEXTURE_CUBE_MAP,A);let Bt;if(Ct){V&&Rt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Pt,ie,At.width,At.height);for(let vt=0;vt<6;vt++){Bt=Et[vt].mipmaps;for(let Yt=0;Yt<Bt.length;Yt++){const qt=Bt[Yt];A.format!==Yn?Jt!==null?V?ht&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Yt,0,0,qt.width,qt.height,Jt,qt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Yt,ie,qt.width,qt.height,0,qt.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Yt,0,0,qt.width,qt.height,Jt,Wt,qt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Yt,ie,qt.width,qt.height,0,Jt,Wt,qt.data)}}}else{if(Bt=A.mipmaps,V&&Rt){Bt.length>0&&Pt++;const vt=he(Et[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Pt,ie,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Zt){V?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Et[vt].width,Et[vt].height,Jt,Wt,Et[vt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ie,Et[vt].width,Et[vt].height,0,Jt,Wt,Et[vt].data);for(let Yt=0;Yt<Bt.length;Yt++){const Ie=Bt[Yt].image[vt].image;V?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Yt+1,0,0,Ie.width,Ie.height,Jt,Wt,Ie.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Yt+1,ie,Ie.width,Ie.height,0,Jt,Wt,Ie.data)}}else{V?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Jt,Wt,Et[vt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ie,Jt,Wt,Et[vt]);for(let Yt=0;Yt<Bt.length;Yt++){const qt=Bt[Yt];V?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Yt+1,0,0,Jt,Wt,qt.image[vt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Yt+1,ie,Jt,Wt,qt.image[vt])}}}m(A)&&y(n.TEXTURE_CUBE_MAP),St.__version=rt.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function J(F,A,Y,$,rt,St){const Tt=r.convert(Y.format,Y.colorSpace),ot=r.convert(Y.type),lt=_(Y.internalFormat,Tt,ot,Y.normalized,Y.colorSpace),Ct=i.get(A),Zt=i.get(Y);if(Zt.__renderTarget=A,!Ct.__hasExternalTextures){const Et=Math.max(1,A.width>>St),At=Math.max(1,A.height>>St);rt===n.TEXTURE_3D||rt===n.TEXTURE_2D_ARRAY?e.texImage3D(rt,St,lt,Et,At,A.depth,0,Tt,ot,null):e.texImage2D(rt,St,lt,Et,At,0,Tt,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,F),Ut(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,rt,Zt.__webglTexture,0,xt(A)):(rt===n.TEXTURE_2D||rt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,rt,Zt.__webglTexture,St),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ft(F,A,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,F),A.depthBuffer){const $=A.depthTexture,rt=$&&$.isDepthTexture?$.type:null,St=M(A.stencilBuffer,rt),Tt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ut(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt(A),St,A.width,A.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt(A),St,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,St,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Tt,n.RENDERBUFFER,F)}else{const $=A.textures;for(let rt=0;rt<$.length;rt++){const St=$[rt],Tt=r.convert(St.format,St.colorSpace),ot=r.convert(St.type),lt=_(St.internalFormat,Tt,ot,St.normalized,St.colorSpace);Ut(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt(A),lt,A.width,A.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt(A),lt,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,lt,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function gt(F,A,Y){const $=A.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,F),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const rt=i.get(A.depthTexture);if(rt.__renderTarget=A,(!rt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),$){if(rt.__webglInit===void 0&&(rt.__webglInit=!0,A.depthTexture.addEventListener("dispose",R)),rt.__webglTexture===void 0){rt.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,rt.__webglTexture),bt(n.TEXTURE_CUBE_MAP,A.depthTexture);const Ct=r.convert(A.depthTexture.format),Zt=r.convert(A.depthTexture.type);let Et;A.depthTexture.format===Ti?Et=n.DEPTH_COMPONENT24:A.depthTexture.format===is&&(Et=n.DEPTH24_STENCIL8);for(let At=0;At<6;At++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,Et,A.width,A.height,0,Ct,Zt,null)}}else G(A.depthTexture,0);const St=rt.__webglTexture,Tt=xt(A),ot=$?n.TEXTURE_CUBE_MAP_POSITIVE_X+Y:n.TEXTURE_2D,lt=A.depthTexture.format===is?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(A.depthTexture.format===Ti)Ut(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,lt,ot,St,0,Tt):n.framebufferTexture2D(n.FRAMEBUFFER,lt,ot,St,0);else if(A.depthTexture.format===is)Ut(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,lt,ot,St,0,Tt):n.framebufferTexture2D(n.FRAMEBUFFER,lt,ot,St,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Z(F){const A=i.get(F),Y=F.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==F.depthTexture){const $=F.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),$){const rt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,$.removeEventListener("dispose",rt)};$.addEventListener("dispose",rt),A.__depthDisposeCallback=rt}A.__boundDepthTexture=$}if(F.depthTexture&&!A.__autoAllocateDepthBuffer)if(Y)for(let $=0;$<6;$++)gt(A.__webglFramebuffer[$],F,$);else{const $=F.texture.mipmaps;$&&$.length>0?gt(A.__webglFramebuffer[0],F,0):gt(A.__webglFramebuffer,F,0)}else if(Y){A.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[$]),A.__webglDepthbuffer[$]===void 0)A.__webglDepthbuffer[$]=n.createRenderbuffer(),ft(A.__webglDepthbuffer[$],F,!1);else{const rt=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,St=A.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,St),n.framebufferRenderbuffer(n.FRAMEBUFFER,rt,n.RENDERBUFFER,St)}}else{const $=F.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),ft(A.__webglDepthbuffer,F,!1);else{const rt=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,St=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,St),n.framebufferRenderbuffer(n.FRAMEBUFFER,rt,n.RENDERBUFFER,St)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function tt(F,A,Y){const $=i.get(F);A!==void 0&&J($.__webglFramebuffer,F,F.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&Z(F)}function it(F){const A=F.texture,Y=i.get(F),$=i.get(A);F.addEventListener("dispose",x);const rt=F.textures,St=F.isWebGLCubeRenderTarget===!0,Tt=rt.length>1;if(Tt||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=A.version,o.memory.textures++),St){Y.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(A.mipmaps&&A.mipmaps.length>0){Y.__webglFramebuffer[ot]=[];for(let lt=0;lt<A.mipmaps.length;lt++)Y.__webglFramebuffer[ot][lt]=n.createFramebuffer()}else Y.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ot=0;ot<A.mipmaps.length;ot++)Y.__webglFramebuffer[ot]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(Tt)for(let ot=0,lt=rt.length;ot<lt;ot++){const Ct=i.get(rt[ot]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=n.createTexture(),o.memory.textures++)}if(F.samples>0&&Ut(F)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ot=0;ot<rt.length;ot++){const lt=rt[ot];Y.__webglColorRenderbuffer[ot]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[ot]);const Ct=r.convert(lt.format,lt.colorSpace),Zt=r.convert(lt.type),Et=_(lt.internalFormat,Ct,Zt,lt.normalized,lt.colorSpace,F.isXRRenderTarget===!0),At=xt(F);n.renderbufferStorageMultisample(n.RENDERBUFFER,At,Et,F.width,F.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,Y.__webglColorRenderbuffer[ot])}n.bindRenderbuffer(n.RENDERBUFFER,null),F.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),ft(Y.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(St){e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),bt(n.TEXTURE_CUBE_MAP,A);for(let ot=0;ot<6;ot++)if(A.mipmaps&&A.mipmaps.length>0)for(let lt=0;lt<A.mipmaps.length;lt++)J(Y.__webglFramebuffer[ot][lt],F,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,lt);else J(Y.__webglFramebuffer[ot],F,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(A)&&y(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ot=0,lt=rt.length;ot<lt;ot++){const Ct=rt[ot],Zt=i.get(Ct);let Et=n.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Et=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Et,Zt.__webglTexture),bt(Et,Ct),J(Y.__webglFramebuffer,F,Ct,n.COLOR_ATTACHMENT0+ot,Et,0),m(Ct)&&y(Et)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(ot=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,$.__webglTexture),bt(ot,A),A.mipmaps&&A.mipmaps.length>0)for(let lt=0;lt<A.mipmaps.length;lt++)J(Y.__webglFramebuffer[lt],F,A,n.COLOR_ATTACHMENT0,ot,lt);else J(Y.__webglFramebuffer,F,A,n.COLOR_ATTACHMENT0,ot,0);m(A)&&y(ot),e.unbindTexture()}F.depthBuffer&&Z(F)}function ct(F){const A=F.textures;for(let Y=0,$=A.length;Y<$;Y++){const rt=A[Y];if(m(rt)){const St=w(F),Tt=i.get(rt).__webglTexture;e.bindTexture(St,Tt),y(St),e.unbindTexture()}}}const mt=[],_t=[];function Mt(F){if(F.samples>0){if(Ut(F)===!1){const A=F.textures,Y=F.width,$=F.height;let rt=n.COLOR_BUFFER_BIT;const St=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Tt=i.get(F),ot=A.length>1;if(ot)for(let Ct=0;Ct<A.length;Ct++)e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);const lt=F.texture.mipmaps;lt&&lt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Ct=0;Ct<A.length;Ct++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(rt|=n.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(rt|=n.STENCIL_BUFFER_BIT)),ot){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[Ct]);const Zt=i.get(A[Ct]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Zt,0)}n.blitFramebuffer(0,0,Y,$,0,0,Y,$,rt,n.NEAREST),l===!0&&(mt.length=0,_t.length=0,mt.push(n.COLOR_ATTACHMENT0+Ct),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(mt.push(St),_t.push(St),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,_t)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,mt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ot)for(let Ct=0;Ct<A.length;Ct++){e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[Ct]);const Zt=i.get(A[Ct]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.TEXTURE_2D,Zt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&l){const A=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function xt(F){return Math.min(s.maxSamples,F.samples)}function Ut(F){const A=i.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function z(F){const A=o.render.frame;h.get(F)!==A&&(h.set(F,A),F.update())}function jt(F,A){const Y=F.colorSpace,$=F.format,rt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||Y!==zr&&Y!==Un&&(ve.getTransfer(Y)===Ce?($!==Yn||rt!==Cn)&&$t("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):_e("WebGLTextures: Unsupported texture color space:",Y)),A}function he(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(c.width=F.naturalWidth||F.width,c.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(c.width=F.displayWidth,c.height=F.displayHeight):(c.width=F.width,c.height=F.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=P,this.getTextureUnits=L,this.setTextureUnits=I,this.setTexture2D=G,this.setTexture2DArray=U,this.setTexture3D=k,this.setTextureCube=X,this.rebindTextures=tt,this.setupRenderTarget=it,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Ut,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function l1(n,t){function e(i,s=Un){let r;const o=ve.getTransfer(s);if(i===Cn)return n.UNSIGNED_BYTE;if(i===kc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Gc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Td)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ad)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===bd)return n.BYTE;if(i===Ed)return n.SHORT;if(i===Fr)return n.UNSIGNED_SHORT;if(i===zc)return n.INT;if(i===hi)return n.UNSIGNED_INT;if(i===Pn)return n.FLOAT;if(i===on)return n.HALF_FLOAT;if(i===Rd)return n.ALPHA;if(i===Cd)return n.RGB;if(i===Yn)return n.RGBA;if(i===Ti)return n.DEPTH_COMPONENT;if(i===is)return n.DEPTH_STENCIL;if(i===Hc)return n.RED;if(i===Vc)return n.RED_INTEGER;if(i===hs)return n.RG;if(i===Wc)return n.RG_INTEGER;if(i===Xc)return n.RGBA_INTEGER;if(i===Vo||i===Wo||i===Xo||i===Yo)if(o===Ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Vo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Vo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Yo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Gl||i===Hl||i===Vl||i===Wl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Gl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Hl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xl||i===Yl||i===ql||i===Kl||i===Zl||i===sa||i===Jl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Xl||i===Yl)return o===Ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ql)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Kl)return r.COMPRESSED_R11_EAC;if(i===Zl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===sa)return r.COMPRESSED_RG11_EAC;if(i===Jl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===$l||i===Ql||i===jl||i===tc||i===ec||i===nc||i===ic||i===sc||i===rc||i===oc||i===ac||i===lc||i===cc||i===hc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===$l)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ql)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===jl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===tc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ec)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===nc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ic)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===rc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===oc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ac)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===lc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===cc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===uc||i===dc||i===fc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===uc)return o===Ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===dc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===pc||i===mc||i===ra||i===gc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===pc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===mc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ra)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Br?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const c1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,h1=`
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

}`;class u1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Fd(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new rn({vertexShader:c1,fragmentShader:h1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Q(new Ae(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class d1 extends Gi{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",p=new u1,m={},y=e.getContextAttributes();let w=null,_=null;const M=[],b=[],R=new ut;let x=null,S=null;const E=new wn;E.viewport=new Ge;const T=new wn;T.viewport=new Ge;const C=[E,T],P=new dm;let L=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let nt=M[j];return nt===void 0&&(nt=new Ha,M[j]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(j){let nt=M[j];return nt===void 0&&(nt=new Ha,M[j]=nt),nt.getGripSpace()},this.getHand=function(j){let nt=M[j];return nt===void 0&&(nt=new Ha,M[j]=nt),nt.getHandSpace()};function N(j){const nt=b.indexOf(j.inputSource);if(nt===-1)return;const W=M[nt];W!==void 0&&(W.update(j.inputSource,j.frame,c||o),W.dispatchEvent({type:j.type,data:j.inputSource}))}function B(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",G);for(let j=0;j<M.length;j++){const nt=b[j];nt!==null&&(b[j]=null,M[j].disconnect(nt))}L=null,I=null,p.reset();for(const j in m)delete m[j];if(t.setRenderTarget(w),f=null,u=null,d=null,s=null,_=null,Qt.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(R.width,R.height,!1),S!==null){const j=S.camera;j.fov=S.fov,j.zoom=S.zoom,j.updateProjectionMatrix(),S=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&$t("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&$t("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",B),s.addEventListener("inputsourceschange",G),y.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let W=null,st=null,J=null;y.depth&&(J=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,W=y.stencil?is:Ti,st=y.stencil?Br:hi);const ft={colorFormat:e.RGBA8,depthFormat:J,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(ft),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new yn(u.textureWidth,u.textureHeight,{format:Yn,type:Cn,depthTexture:new Hr(u.textureWidth,u.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const W={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,W),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new yn(f.framebufferWidth,f.framebufferHeight,{format:Yn,type:Cn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Qt.setContext(s),Qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function G(j){for(let nt=0;nt<j.removed.length;nt++){const W=j.removed[nt],st=b.indexOf(W);st>=0&&(b[st]=null,M[st].disconnect(W))}for(let nt=0;nt<j.added.length;nt++){const W=j.added[nt];let st=b.indexOf(W);if(st===-1){for(let ft=0;ft<M.length;ft++)if(ft>=b.length){b.push(W),st=ft;break}else if(b[ft]===null){b[ft]=W,st=ft;break}if(st===-1)break}const J=M[st];J&&J.connect(W)}}const U=new O,k=new O;function X(j,nt,W){U.setFromMatrixPosition(nt.matrixWorld),k.setFromMatrixPosition(W.matrixWorld);const st=U.distanceTo(k),J=nt.projectionMatrix.elements,ft=W.projectionMatrix.elements,gt=J[14]/(J[10]-1),Z=J[14]/(J[10]+1),tt=(J[9]+1)/J[5],it=(J[9]-1)/J[5],ct=(J[8]-1)/J[0],mt=(ft[8]+1)/ft[0],_t=gt*ct,Mt=gt*mt,xt=st/(-ct+mt),Ut=xt*-ct;if(nt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ut),j.translateZ(xt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),J[10]===-1)j.projectionMatrix.copy(nt.projectionMatrix),j.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const z=gt+xt,jt=Z+xt,he=_t-Ut,F=Mt+(st-Ut),A=tt*Z/jt*z,Y=it*Z/jt*z;j.projectionMatrix.makePerspective(he,F,A,Y,z,jt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function dt(j,nt){nt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(nt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let nt=j.near,W=j.far;p.texture!==null&&(p.depthNear>0&&(nt=p.depthNear),p.depthFar>0&&(W=p.depthFar)),P.near=T.near=E.near=nt,P.far=T.far=E.far=W,(L!==P.near||I!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),L=P.near,I=P.far),P.layers.mask=j.layers.mask|6,E.layers.mask=P.layers.mask&-5,T.layers.mask=P.layers.mask&-3;const st=j.parent,J=P.cameras;dt(P,st);for(let ft=0;ft<J.length;ft++)dt(J[ft],st);J.length===2?X(P,E,T):P.projectionMatrix.copy(E.projectionMatrix),S===null&&j.isPerspectiveCamera&&(S={camera:j,fov:j.fov,zoom:j.zoom}),yt(j,P,st)};function yt(j,nt,W){W===null?j.matrix.copy(nt.matrixWorld):(j.matrix.copy(W.matrixWorld),j.matrix.invert(),j.matrix.multiply(nt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(nt.projectionMatrix),j.projectionMatrixInverse.copy(nt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=js*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(P)},this.getCameraTexture=function(j){return m[j]};let wt=null;function bt(j,nt){if(h=nt.getViewerPose(c||o),g=nt,h!==null){const W=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let st=!1;W.length!==P.cameras.length&&(P.cameras.length=0,st=!0);for(let Z=0;Z<W.length;Z++){const tt=W[Z];let it=null;if(f!==null)it=f.getViewport(tt);else{const mt=d.getViewSubImage(u,tt);it=mt.viewport,Z===0&&(t.setRenderTargetTextures(_,mt.colorTexture,mt.depthStencilTexture),t.setRenderTarget(_))}let ct=C[Z];ct===void 0&&(ct=new wn,ct.layers.enable(Z),ct.viewport=new Ge,C[Z]=ct),ct.matrix.fromArray(tt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(tt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(it.x,it.y,it.width,it.height),Z===0&&(P.matrix.copy(ct.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),st===!0&&P.cameras.push(ct)}const J=s.enabledFeatures;if(J&&J.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const Z=d.getDepthInformation(W[0]);Z&&Z.isValid&&Z.texture&&p.init(Z,s.renderState)}if(J&&J.includes("camera-access")&&v){t.state.unbindTexture(),d=i.getBinding();for(let Z=0;Z<W.length;Z++){const tt=W[Z].camera;if(tt){let it=m[tt];it||(it=new Fd,m[tt]=it);const ct=d.getCameraImage(tt);it.sourceTexture=ct}}}}for(let W=0;W<M.length;W++){const st=b[W],J=M[W];st!==null&&J!==void 0&&J.update(st,nt,c||o)}wt&&wt(j,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),g=null}const Qt=new Jd;Qt.setAnimationLoop(bt),this.setAnimationLoop=function(j){wt=j},this.dispose=function(){}}}const f1=new ae,sf=new se;sf.set(-1,0,0,0,1,0,0,0,1);function p1(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Yd(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,y,w,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,_)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,w):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===vn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===vn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=t.get(m),w=y.envMap,_=y.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(f1.makeRotationFromEuler(_)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(sf),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,w){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=w*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===vn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function m1(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,M){const b=M.program;i.uniformBlockBinding(_,b)}function c(_,M){let b=s[_.id];b===void 0&&(p(_),b=h(_),s[_.id]=b,_.addEventListener("dispose",y));const R=M.program;i.updateUBOMapping(_,R);const x=t.render.frame;r[_.id]!==x&&(u(_),r[_.id]=x)}function h(_){const M=d();_.__bindingPointIndex=M;const b=n.createBuffer(),R=_.__size,x=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,R,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,b),b}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return _e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const M=s[_.id],b=_.uniforms,R=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let x=0,S=b.length;x<S;x++){const E=b[x];if(Array.isArray(E))for(let T=0,C=E.length;T<C;T++)f(E[T],x,T,R);else f(E,x,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,M,b,R){if(v(_,M,b,R)===!0){const x=_.__offset,S=_.value;if(Array.isArray(S)){let E=0;for(let T=0;T<S.length;T++){const C=S[T],P=m(C);g(C,_.__data,E),typeof C!="number"&&typeof C!="boolean"&&!C.isMatrix3&&!ArrayBuffer.isView(C)&&(E+=P.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(S,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,_.__data)}}function g(_,M,b){typeof _=="number"||typeof _=="boolean"?M[0]=_:_.isMatrix3?(M[0]=_.elements[0],M[1]=_.elements[1],M[2]=_.elements[2],M[3]=0,M[4]=_.elements[3],M[5]=_.elements[4],M[6]=_.elements[5],M[7]=0,M[8]=_.elements[6],M[9]=_.elements[7],M[10]=_.elements[8],M[11]=0):ArrayBuffer.isView(_)?M.set(new _.constructor(_.buffer,_.byteOffset,M.length)):_.toArray(M,b)}function v(_,M,b,R){const x=_.value,S=M+"_"+b;if(R[S]===void 0)return typeof x=="number"||typeof x=="boolean"?R[S]=x:ArrayBuffer.isView(x)?R[S]=x.slice():R[S]=x.clone(),!0;{const E=R[S];if(typeof x=="number"||typeof x=="boolean"){if(E!==x)return R[S]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(E.equals(x)===!1)return E.copy(x),!0}}return!1}function p(_){const M=_.uniforms;let b=0;const R=16;for(let S=0,E=M.length;S<E;S++){const T=Array.isArray(M[S])?M[S]:[M[S]];for(let C=0,P=T.length;C<P;C++){const L=T[C],I=Array.isArray(L.value)?L.value:[L.value];for(let N=0,B=I.length;N<B;N++){const G=I[N],U=m(G),k=b%R,X=k%U.boundary,dt=k+X;b+=X,dt!==0&&R-dt<U.storage&&(b+=R-dt),L.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=U.storage}}}const x=b%R;return x>0&&(b+=R-x),_.__size=b,_.__cache={},this}function m(_){const M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?$t("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):$t("WebGLRenderer: Unsupported uniform value type.",_),M}function y(_){const M=_.target;M.removeEventListener("dispose",y);const b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function w(){for(const _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:w}}const g1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ei=null;function _1(){return ei===null&&(ei=new ca(g1,16,16,hs,on),ei.name="DFG_LUT",ei.minFilter=Ye,ei.magFilter=Ye,ei.wrapS=Xn,ei.wrapT=Xn,ei.generateMipmaps=!1,ei.needsUpdate=!0),ei}class x1{constructor(t={}){const{canvas:e=Sp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Cn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const v=f,p=new Set([Xc,Wc,Vc]),m=new Set([Cn,hi,Fr,Br,kc,Gc]),y=new Uint32Array(4),w=new Int32Array(4),_=new O;let M=null,b=null;const R=[],x=[];let S=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let T=!1,C=null,P=null,L=null,I=null;this._outputColorSpace=ke;let N=0,B=0,G=null,U=-1,k=null;const X=new Ge,dt=new Ge;let yt=null;const wt=new Nt(0);let bt=0,Qt=e.width,j=e.height,nt=1,W=null,st=null;const J=new Ge(0,0,Qt,j),ft=new Ge(0,0,Qt,j);let gt=!1;const Z=new Qc;let tt=!1,it=!1;const ct=new ae,mt=new O,_t=new Ge,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function Ut(){return G===null?nt:1}let z=i;function jt(D,H){return e.getContext(D,H)}let he,F,A,Y,$,rt,St,Tt,ot,lt,Ct,Zt,Et,At,Jt,Wt,ie,V,Rt,ht,Pt,Bt,vt;try{const D={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Nc}`),e.addEventListener("webglcontextlost",Ie,!1),e.addEventListener("webglcontextrestored",re,!1),e.addEventListener("webglcontextcreationerror",Ve,!1),z===null){const H="webgl2";if(z=jt(H,D),z===null)throw jt(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Yt()}catch(D){throw e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",Ve,!1),_e("WebGLRenderer: "+D.message),D}function Yt(){he=new _x(z),he.init(),Pt=new l1(z,he),F=new ax(z,he,t,Pt),A=new o1(z,he),F.reversedDepthBuffer&&u&&A.buffers.depth.setReversed(!0),P=z.createFramebuffer(),L=z.createFramebuffer(),I=z.createFramebuffer(),Y=new yx(z),$=new Yv,rt=new a1(z,he,A,$,F,Pt,Y),St=new gx(E),Tt=new Sm(z),Bt=new rx(z,Tt),ot=new xx(z,Tt,Y,Bt),lt=new Sx(z,ot,Tt,Bt,Y),V=new Mx(z,F,rt),Jt=new lx($),Ct=new Xv(E,St,he,F,Bt,Jt),Zt=new p1(E,$),Et=new Kv,At=new t1(he),ie=new sx(E,St,A,lt,g,l),Wt=new r1(E,lt,F),vt=new m1(z,Y,F,A),Rt=new ox(z,he,Y),ht=new vx(z,he,Y),Y.programs=Ct.programs,E.capabilities=F,E.extensions=he,E.properties=$,E.renderLists=Et,E.shadowMap=Wt,E.state=A,E.info=Y}v!==Cn&&(S=new bx(v,e.width,e.height,a,s,r));const qt=new d1(E,z);this.xr=qt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const D=he.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=he.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(D){D!==void 0&&(nt=D,this.setSize(Qt,j,!1))},this.getSize=function(D){return D.set(Qt,j)},this.setSize=function(D,H,et=!0){if(qt.isPresenting){$t("WebGLRenderer: Can't change size while VR device is presenting.");return}Qt=D,j=H,e.width=Math.floor(D*nt),e.height=Math.floor(H*nt),et===!0&&(e.style.width=D+"px",e.style.height=H+"px"),S!==null&&S.setSize(e.width,e.height),this.setViewport(0,0,D,H)},this.getDrawingBufferSize=function(D){return D.set(Qt*nt,j*nt).floor()},this.setDrawingBufferSize=function(D,H,et){Qt=D,j=H,nt=et,e.width=Math.floor(D*et),e.height=Math.floor(H*et),this.setViewport(0,0,D,H)},this.setEffects=function(D){if(v===Cn){_e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let H=0;H<D.length;H++)if(D[H].isOutputPass===!0){$t("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(X)},this.getViewport=function(D){return D.copy(J)},this.setViewport=function(D,H,et,q){D.isVector4?J.set(D.x,D.y,D.z,D.w):J.set(D,H,et,q),A.viewport(X.copy(J).multiplyScalar(nt).round())},this.getScissor=function(D){return D.copy(ft)},this.setScissor=function(D,H,et,q){D.isVector4?ft.set(D.x,D.y,D.z,D.w):ft.set(D,H,et,q),A.scissor(dt.copy(ft).multiplyScalar(nt).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(D){A.setScissorTest(gt=D)},this.setOpaqueSort=function(D){W=D},this.setTransparentSort=function(D){st=D},this.getClearColor=function(D){return D.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(D=!0,H=!0,et=!0){let q=0;if(D){let K=!1;if(G!==null){const It=G.texture.format;K=p.has(It)}if(K){const It=G.texture.type,kt=m.has(It),Lt=ie.getClearColor(),Ft=ie.getClearAlpha(),Xt=Lt.r,oe=Lt.g,ue=Lt.b;kt?(y[0]=Xt,y[1]=oe,y[2]=ue,y[3]=Ft,z.clearBufferuiv(z.COLOR,0,y)):(w[0]=Xt,w[1]=oe,w[2]=ue,w[3]=Ft,z.clearBufferiv(z.COLOR,0,w))}else q|=z.COLOR_BUFFER_BIT}H&&(q|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),et&&(q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&z.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(D){D.setRenderer(this),C=D},this.dispose=function(){e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",Ve,!1),ie.dispose(),Et.dispose(),At.dispose(),$.dispose(),St.dispose(),lt.dispose(),Bt.dispose(),vt.dispose(),Ct.dispose(),qt.dispose(),qt.removeEventListener("sessionstart",vs),qt.removeEventListener("sessionend",eo),at.stop()};function Ie(D){D.preventDefault(),aa("WebGLRenderer: Context Lost."),T=!0}function re(){aa("WebGLRenderer: Context Restored."),T=!1;const D=Y.autoReset,H=Wt.enabled,et=Wt.autoUpdate,q=Wt.needsUpdate,K=Wt.type;Yt(),Y.autoReset=D,Wt.enabled=H,Wt.autoUpdate=et,Wt.needsUpdate=q,Wt.type=K}function Ve(D){_e("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function dn(D){const H=D.target;H.removeEventListener("dispose",dn),La(H)}function La(D){cr(D),$.remove(D)}function cr(D){const H=$.get(D).programs;H!==void 0&&(H.forEach(function(et){Ct.releaseProgram(et)}),D.isShaderMaterial&&Ct.releaseShaderCache(D))}this.renderBufferDirect=function(D,H,et,q,K,It){H===null&&(H=Mt);const kt=K.isMesh&&K.matrixWorld.determinantAffine()<0,Lt=ys(D,H,et,q,K);A.setMaterial(q,kt);let Ft=et.index,Xt=1;if(q.wireframe===!0){if(Ft=ot.getWireframeAttribute(et),Ft===void 0)return;Xt=2}const oe=et.drawRange,ue=et.attributes.position;let Gt=oe.start*Xt,Se=(oe.start+oe.count)*Xt;It!==null&&(Gt=Math.max(Gt,It.start*Xt),Se=Math.min(Se,(It.start+It.count)*Xt)),Ft!==null?(Gt=Math.max(Gt,0),Se=Math.min(Se,Ft.count)):ue!=null&&(Gt=Math.max(Gt,0),Se=Math.min(Se,ue.count));const de=Se-Gt;if(de<0||de===1/0)return;Bt.setup(K,q,Lt,et,Ft);let Be,Fe=Rt;if(Ft!==null&&(Be=Tt.get(Ft),Fe=ht,Fe.setIndex(Be)),K.isMesh)q.wireframe===!0?(A.setLineWidth(q.wireframeLinewidth*Ut()),Fe.setMode(z.LINES)):Fe.setMode(z.TRIANGLES);else if(K.isLine){let cn=q.linewidth;cn===void 0&&(cn=1),A.setLineWidth(cn*Ut()),K.isLineSegments?Fe.setMode(z.LINES):K.isLineLoop?Fe.setMode(z.LINE_LOOP):Fe.setMode(z.LINE_STRIP)}else K.isPoints?Fe.setMode(z.POINTS):K.isSprite&&Fe.setMode(z.TRIANGLES);if(K.isBatchedMesh)if(he.get("WEBGL_multi_draw"))Fe.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const cn=K._multiDrawStarts,Vt=K._multiDrawCounts,fn=K._multiDrawCount,we=Ft?Tt.get(Ft).bytesPerElement:1,Ln=$.get(q).currentProgram.getUniforms();for(let jn=0;jn<fn;jn++)Ln.setValue(z,"_gl_DrawID",jn),Fe.render(cn[jn]/we,Vt[jn])}else if(K.isInstancedMesh)Fe.renderInstances(Gt,de,K.count);else if(et.isInstancedBufferGeometry){const cn=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Vt=Math.min(et.instanceCount,cn);Fe.renderInstances(Gt,de,Vt)}else Fe.render(Gt,de)};function to(D,H,et,q){C!==null&&D.isNodeMaterial&&C.setObject(q,D),tt===!0&&Jt.setState(D,et,!1),D.transparent===!0&&D.side===Oe&&D.forceSinglePass===!1?(D.side=vn,D.needsUpdate=!0,Qn(D,H,q),D.side=ls,D.needsUpdate=!0,Qn(D,H,q),D.side=Oe):Qn(D,H,q)}this.compile=function(D,H,et=null){et===null&&(et=D),C!==null&&C.renderStart(D,H,et),b=At.get(et),b.init(H),x.push(b),et.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(b.pushLight(K),K.castShadow&&b.pushShadow(K))}),D!==et&&D.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(b.pushLight(K),K.castShadow&&b.pushShadow(K))}),b.setupLights(),C!==null&&C.updateLights(b.state.lightsArray),it=this.localClippingEnabled,tt=Jt.init(this.clippingPlanes,it),tt===!0&&Jt.setGlobalState(this.clippingPlanes,H),C!==null&&Wt.render(b.state.shadowsArray,et,H);const q=new Set;return D.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const It=K.material;if(It)if(Array.isArray(It))for(let kt=0;kt<It.length;kt++){const Lt=It[kt];to(Lt,et,H,K),q.add(Lt)}else to(It,et,H,K),q.add(It)}),b=x.pop(),C!==null&&C.renderEnd(),q},this.compileAsync=function(D,H,et=null){const q=this.compile(D,H,et);return new Promise(K=>{function It(){if(q.forEach(function(kt){const Ft=$.get(kt).currentProgram;(Ft===void 0||Ft.isReady())&&q.delete(kt)}),q.size===0){K(D);return}setTimeout(It,10)}he.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let hr=null;function je(D){hr&&hr(D)}function vs(){at.stop()}function eo(){at.start()}const at=new Jd;at.setAnimationLoop(je),typeof self<"u"&&at.setContext(self),this.setAnimationLoop=function(D){hr=D,qt.setAnimationLoop(D),D===null?at.stop():at.start()},qt.addEventListener("sessionstart",vs),qt.addEventListener("sessionend",eo),this.render=function(D,H){if(H!==void 0&&H.isCamera!==!0){_e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;C!==null&&C.renderStart(D,H);const et=qt.enabled===!0&&qt.isPresenting===!0,q=S!==null&&(G===null||et)&&S.begin(E,G);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),qt.enabled===!0&&qt.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(qt.cameraAutoUpdate===!0&&qt.updateCamera(H),H=qt.getCamera()),D.isScene===!0&&D.onBeforeRender(E,D,H,G),b=At.get(D,x.length),b.init(H),b.state.textureUnits=rt.getTextureUnits(),x.push(b),ct.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Z.setFromProjectionMatrix(ct,ii,H.reversedDepth),it=this.localClippingEnabled,tt=Jt.init(this.clippingPlanes,it),M=Et.get(D,R.length),M.init(),R.push(M),qt.enabled===!0&&qt.isPresenting===!0){const kt=E.xr.getDepthSensingMesh();kt!==null&&zt(kt,H,-1/0,E.sortObjects)}zt(D,H,0,E.sortObjects),M.finish(),C!==null&&C.updateLights(b.state.lightsArray),E.sortObjects===!0&&M.sort(W,st),xt=qt.enabled===!1||qt.isPresenting===!1||qt.hasDepthSensing()===!1,xt&&ie.addToRenderList(M,D),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),tt===!0&&Jt.beginShadows();const K=b.state.shadowsArray;if(Wt.render(K,D,H),tt===!0&&Jt.endShadows(),(q&&S.hasRenderPass())===!1){const kt=M.opaque,Lt=M.transmissive;if(b.setupLights(),H.isArrayCamera){const Ft=H.cameras;if(Lt.length>0)for(let Xt=0,oe=Ft.length;Xt<oe;Xt++){const ue=Ft[Xt];pe(kt,Lt,D,ue)}xt&&ie.render(D);for(let Xt=0,oe=Ft.length;Xt<oe;Xt++){const ue=Ft[Xt];te(M,D,ue,ue.viewport)}}else Lt.length>0&&pe(kt,Lt,D,H),xt&&ie.render(D),te(M,D,H)}G!==null&&B===0&&(rt.updateMultisampleRenderTarget(G),rt.updateRenderTargetMipmap(G)),q&&S.end(E),D.isScene===!0&&D.onAfterRender(E,D,H),Bt.resetDefaultState(),U=-1,k=null,x.pop(),x.length>0?(b=x[x.length-1],rt.setTextureUnits(b.state.textureUnits),tt===!0&&Jt.setGlobalState(E.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?M=R[R.length-1]:M=null,C!==null&&C.renderEnd()};function zt(D,H,et,q){if(D.visible===!1)return;if(D.layers.test(H.layers)){if(D.isGroup)et=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(H);else if(D.isLightProbeGrid)b.pushLightProbeGrid(D);else if(D.isLight)b.pushLight(D),D.castShadow&&b.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||D.intersectsFrustum(Z)){q&&_t.setFromMatrixPosition(D.matrixWorld).applyMatrix4(ct);const kt=lt.update(D),Lt=D.material;Lt.visible&&M.push(D,kt,Lt,et,_t.z,null,H)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||D.intersectsFrustum(Z))){const kt=lt.update(D),Lt=D.material;if(q&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),_t.copy(D.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),_t.copy(kt.boundingSphere.center)),_t.applyMatrix4(D.matrixWorld).applyMatrix4(ct)),Array.isArray(Lt)){const Ft=kt.groups;for(let Xt=0,oe=Ft.length;Xt<oe;Xt++){const ue=Ft[Xt],Gt=Lt[ue.materialIndex];Gt&&Gt.visible&&M.push(D,kt,Gt,et,_t.z,ue,H)}}else Lt.visible&&M.push(D,kt,Lt,et,_t.z,null,H)}}const It=D.children;for(let kt=0,Lt=It.length;kt<Lt;kt++)zt(It[kt],H,et,q)}function te(D,H,et,q){const{opaque:K,transmissive:It,transparent:kt}=D;b.setupLightsView(et),tt===!0&&Jt.setGlobalState(E.clippingPlanes,et),q&&A.viewport(X.copy(q)),K.length>0&&We(K,H,et),It.length>0&&We(It,H,et),kt.length>0&&We(kt,H,et),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function pe(D,H,et,q){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[q.id]===void 0){const Gt=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[q.id]=new yn(1,1,{generateMipmaps:!0,type:Gt?on:Cn,minFilter:Bi,samples:Math.max(4,F.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ve.workingColorSpace})}const It=b.state.transmissionRenderTarget[q.id],kt=q.viewport||X;It.setSize(kt.z*E.transmissionResolutionScale,kt.w*E.transmissionResolutionScale);const Lt=E.getRenderTarget(),Ft=E.getActiveCubeFace(),Xt=E.getActiveMipmapLevel();E.setRenderTarget(It),E.getClearColor(wt),bt=E.getClearAlpha(),bt<1&&E.setClearColor(16777215,.5),E.clear(),xt&&ie.render(et);const oe=E.toneMapping;E.toneMapping=ri;const ue=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),b.setupLightsView(q),tt===!0&&Jt.setGlobalState(E.clippingPlanes,q),We(D,et,q),rt.updateMultisampleRenderTarget(It),rt.updateRenderTargetMipmap(It),he.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Se=0,de=H.length;Se<de;Se++){const Be=H[Se],{object:Fe,geometry:cn,material:Vt,group:fn}=Be;if(Vt.side===Oe&&Fe.layers.test(q.layers)){const we=Vt.side;Vt.side=vn,Vt.needsUpdate=!0,Tn(Fe,et,q,cn,Vt,fn),Vt.side=we,Vt.needsUpdate=!0,Gt=!0}}Gt===!0&&(rt.updateMultisampleRenderTarget(It),rt.updateRenderTargetMipmap(It))}E.setRenderTarget(Lt,Ft,Xt),E.setClearColor(wt,bt),ue!==void 0&&(q.viewport=ue),E.toneMapping=oe}function We(D,H,et){const q=H.isScene===!0?H.overrideMaterial:null;for(let K=0,It=D.length;K<It;K++){const kt=D[K],{object:Lt,geometry:Ft,group:Xt}=kt;let oe=kt.material;oe.allowOverride===!0&&q!==null&&(oe=q),Lt.layers.test(et.layers)&&Tn(Lt,H,et,Ft,oe,Xt)}}function Tn(D,H,et,q,K,It){C!==null&&K.isNodeMaterial&&C.setObject(D,K),D.onBeforeRender(E,H,et,q,K,It),D.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),K.onBeforeRender(E,H,et,q,D,It),K.transparent===!0&&K.side===Oe&&K.forceSinglePass===!1?(K.side=vn,K.needsUpdate=!0,E.renderBufferDirect(et,H,q,K,D,It),K.side=ls,K.needsUpdate=!0,E.renderBufferDirect(et,H,q,K,D,It),K.side=Oe):E.renderBufferDirect(et,H,q,K,D,It),D.onAfterRender(E,H,et,q,K,It)}function Qn(D,H,et){H.isScene!==!0&&(H=Mt);const q=$.get(D),K=b.state.lights,It=b.state.shadowsArray,kt=K.state.version,Lt=Ct.getParameters(D,K.state,It,H,et,b.state.lightProbeGridArray),Ft=Ct.getProgramCacheKey(Lt);let Xt=q.programs;q.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?H.environment:null,q.fog=H.fog;const oe=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;q.envMap=St.get(D.envMap||q.environment,oe),q.envMapRotation=q.environment!==null&&D.envMap===null?H.environmentRotation:D.envMapRotation,Xt===void 0&&(D.addEventListener("dispose",dn),Xt=new Map,q.programs=Xt);let ue=Xt.get(Ft);if(ue!==void 0){if(q.currentProgram===ue&&q.lightsStateVersion===kt)return Xi(D,Lt),ue}else Lt.uniforms=Ct.getUniforms(D),C!==null&&D.isNodeMaterial&&C.build(D,et,Lt),D.onBeforeCompile(Lt,E),ue=Ct.acquireProgram(Lt,Ft),Xt.set(Ft,ue),q.uniforms=Lt.uniforms;const Gt=q.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Gt.clippingPlanes=Jt.uniform),Xi(D,Lt),q.needsLights=Ms(D),q.lightsStateVersion=kt,q.needsLights&&(Gt.ambientLightColor.value=K.state.ambient,Gt.lightProbe.value=K.state.probe,Gt.sunLights.value=K.state.sun,Gt.sunLightShadows.value=K.state.sunShadow,Gt.directionalLights.value=K.state.directional,Gt.directionalLightShadows.value=K.state.directionalShadow,Gt.spotLights.value=K.state.spot,Gt.spotLightShadows.value=K.state.spotShadow,Gt.rectAreaLights.value=K.state.rectArea,Gt.ltc_1.value=K.state.rectAreaLTC1,Gt.ltc_2.value=K.state.rectAreaLTC2,Gt.pointLights.value=K.state.point,Gt.pointLightShadows.value=K.state.pointShadow,Gt.hemisphereLights.value=K.state.hemi,Gt.sunShadowMatrix.value=K.state.sunShadowMatrix,Gt.sunShadowCascade.value=K.state.sunShadowCascade,Gt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Gt.spotLightMatrix.value=K.state.spotLightMatrix,Gt.spotLightMap.value=K.state.spotLightMap,Gt.pointShadowMatrix.value=K.state.pointShadowMatrix),q.lightProbeGrid=b.state.lightProbeGridArray.length>0,q.currentProgram=ue,q.uniformsList=null,ue}function di(D){if(D.uniformsList===null){const H=D.currentProgram.getUniforms();D.uniformsList=qo.seqWithValue(H.seq,D.uniforms)}return D.uniformsList}function Xi(D,H){const et=$.get(D);et.outputColorSpace=H.outputColorSpace,et.batching=H.batching,et.batchingColor=H.batchingColor,et.instancing=H.instancing,et.instancingColor=H.instancingColor,et.instancingMorph=H.instancingMorph,et.skinning=H.skinning,et.morphTargets=H.morphTargets,et.morphNormals=H.morphNormals,et.morphColors=H.morphColors,et.morphTargetsCount=H.morphTargetsCount,et.numClippingPlanes=H.numClippingPlanes,et.numIntersection=H.numClipIntersection,et.vertexAlphas=H.vertexAlphas,et.vertexTangents=H.vertexTangents,et.toneMapping=H.toneMapping}function no(D,H){if(D.length===0)return null;if(D.length===1)return D[0].texture!==null?D[0]:null;_.setFromMatrixPosition(H.matrixWorld);for(let et=0,q=D.length;et<q;et++){const K=D[et];if(K.texture!==null&&K.boundingBox.containsPoint(_))return K}return null}function ys(D,H,et,q,K){H.isScene!==!0&&(H=Mt),rt.resetTextureUnits();const It=H.fog,kt=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?H.environment:null,Lt=G===null?E.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:ve.workingColorSpace,Ft=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Xt=St.get(q.envMap||kt,Ft),oe=q.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,ue=!!et.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Gt=!!et.morphAttributes.position,Se=!!et.morphAttributes.normal,de=!!et.morphAttributes.color;let Be=ri;q.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Be=E.toneMapping);const Fe=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,cn=Fe!==void 0?Fe.length:0,Vt=$.get(q),fn=b.state.lights;if(tt===!0&&(it===!0||D!==k)){const ze=D===k&&q.id===U;Jt.setState(q,D,ze)}let we=!1;q.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==fn.state.version||Vt.outputColorSpace!==Lt||K.isBatchedMesh&&Vt.batching===!1||!K.isBatchedMesh&&Vt.batching===!0||K.isBatchedMesh&&Vt.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Vt.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Vt.instancing===!1||!K.isInstancedMesh&&Vt.instancing===!0||K.isSkinnedMesh&&Vt.skinning===!1||!K.isSkinnedMesh&&Vt.skinning===!0||K.isInstancedMesh&&Vt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Vt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Vt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Vt.instancingMorph===!1&&K.morphTexture!==null||Vt.envMap!==Xt||q.fog===!0&&Vt.fog!==It||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Jt.numPlanes||Vt.numIntersection!==Jt.numIntersection)||Vt.vertexAlphas!==oe||Vt.vertexTangents!==ue||Vt.morphTargets!==Gt||Vt.morphNormals!==Se||Vt.morphColors!==de||Vt.toneMapping!==Be||Vt.morphTargetsCount!==cn||!!Vt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(we=!0):(we=!0,Vt.__version=q.version);let Ln=Vt.currentProgram;we===!0&&(Ln=Qn(q,H,K),C&&q.isNodeMaterial&&C.onUpdateProgram(q,Ln,Vt));let jn=!1,Ri=!1,ws=!1;const Ne=Ln.getUniforms(),Xe=Vt.uniforms;if(A.useProgram(Ln.program)&&(jn=!0,Ri=!0,ws=!0),q.id!==U&&(U=q.id,Ri=!0),Vt.needsLights){const ze=no(b.state.lightProbeGridArray,K);Vt.lightProbeGrid!==ze&&(Vt.lightProbeGrid=ze,Ri=!0)}if(jn||k!==D){A.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Ne.setValue(z,"projectionMatrix",D.projectionMatrix),Ne.setValue(z,"viewMatrix",D.matrixWorldInverse);const Pi=Ne.map.cameraPosition;Pi!==void 0&&Pi.setValue(z,mt.setFromMatrixPosition(D.matrixWorld)),F.logarithmicDepthBuffer&&Ne.setValue(z,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ne.setValue(z,"isOrthographic",D.isOrthographicCamera===!0),k!==D&&(k=D,Ri=!0,ws=!0)}if(Vt.needsLights&&(fn.state.sunShadowMap.length>0&&Ne.setValue(z,"sunShadowMap",fn.state.sunShadowMap,rt),fn.state.directionalShadowMap.length>0&&Ne.setValue(z,"directionalShadowMap",fn.state.directionalShadowMap,rt),fn.state.spotShadowMap.length>0&&Ne.setValue(z,"spotShadowMap",fn.state.spotShadowMap,rt),fn.state.pointShadowMap.length>0&&Ne.setValue(z,"pointShadowMap",fn.state.pointShadowMap,rt)),K.isSkinnedMesh){Ne.setOptional(z,K,"bindMatrix"),Ne.setOptional(z,K,"bindMatrixInverse");const ze=K.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),Ne.setValue(z,"boneTexture",ze.boneTexture,rt))}K.isBatchedMesh&&(Ne.setOptional(z,K,"batchingTexture"),Ne.setValue(z,"batchingTexture",K._matricesTexture,rt),Ne.setOptional(z,K,"batchingIdTexture"),Ne.setValue(z,"batchingIdTexture",K._indirectTexture,rt),Ne.setOptional(z,K,"batchingColorTexture"),K._colorsTexture!==null&&Ne.setValue(z,"batchingColorTexture",K._colorsTexture,rt));const Ci=et.morphAttributes;if((Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0)&&V.update(K,et,Ln),(Ri||Vt.receiveShadow!==K.receiveShadow)&&(Vt.receiveShadow=K.receiveShadow,Ne.setValue(z,"receiveShadow",K.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&H.environment!==null&&(Xe.envMapIntensity.value=H.environmentIntensity),Xe.dfgLUT!==void 0&&(Xe.dfgLUT.value=_1()),Ri){if(Ne.setValue(z,"toneMappingExposure",E.toneMappingExposure),Vt.needsLights&&Ia(Xe,ws),It&&q.fog===!0&&Zt.refreshFogUniforms(Xe,It),Zt.refreshMaterialUniforms(Xe,q,nt,j,b.state.transmissionRenderTarget[D.id]),Vt.needsLights&&Vt.lightProbeGrid){const ze=Vt.lightProbeGrid;Xe.probesSH.value=ze.texture,Xe.probesMin.value.copy(ze.boundingBox.min),Xe.probesMax.value.copy(ze.boundingBox.max),Xe.probesResolution.value.copy(ze.resolution)}qo.upload(z,di(Vt),Xe,rt)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(qo.upload(z,di(Vt),Xe,rt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ne.setValue(z,"center",K.center),Ne.setValue(z,"modelViewMatrix",K.modelViewMatrix),Ne.setValue(z,"normalMatrix",K.normalMatrix),Ne.setValue(z,"modelMatrix",K.matrixWorld),q.uniformsGroups!==void 0){const ze=q.uniformsGroups;for(let Pi=0,bs=ze.length;Pi<bs;Pi++){const Rh=ze[Pi];vt.update(Rh,Ln),vt.bind(Rh,Ln)}}return Ln}function Ia(D,H){D.ambientLightColor.needsUpdate=H,D.lightProbe.needsUpdate=H,D.sunLights.needsUpdate=H,D.sunLightShadows.needsUpdate=H,D.directionalLights.needsUpdate=H,D.directionalLightShadows.needsUpdate=H,D.pointLights.needsUpdate=H,D.pointLightShadows.needsUpdate=H,D.spotLights.needsUpdate=H,D.spotLightShadows.needsUpdate=H,D.rectAreaLights.needsUpdate=H,D.hemisphereLights.needsUpdate=H}function Ms(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(D,H,et){const q=$.get(D);q.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),$.get(D.texture).__webglTexture=H,$.get(D.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:et,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,H){const et=$.get(D);et.__webglFramebuffer=H,et.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(D,H=0,et=0){G=D,N=H,B=et;let q=null,K=!1,It=!1;if(D){const Lt=$.get(D);if(Lt.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(z.FRAMEBUFFER,Lt.__webglFramebuffer),X.copy(D.viewport),dt.copy(D.scissor),yt=D.scissorTest,A.viewport(X),A.scissor(dt),A.setScissorTest(yt),U=-1;return}else if(Lt.__webglFramebuffer===void 0)rt.setupRenderTarget(D);else if(Lt.__hasExternalTextures)rt.rebindTextures(D,$.get(D.texture).__webglTexture,$.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const oe=D.depthTexture;if(Lt.__boundDepthTexture!==oe){if(oe!==null&&$.has(oe)&&(D.width!==oe.image.width||D.height!==oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(D)}}const Ft=D.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(It=!0);const Xt=$.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Xt[H])?q=Xt[H][et]:q=Xt[H],K=!0):D.samples>0&&rt.useMultisampledRTT(D)===!1?q=$.get(D).__webglMultisampledFramebuffer:Array.isArray(Xt)?q=Xt[et]:q=Xt,X.copy(D.viewport),dt.copy(D.scissor),yt=D.scissorTest}else X.copy(J).multiplyScalar(nt).floor(),dt.copy(ft).multiplyScalar(nt).floor(),yt=gt;if(et!==0&&(q=P),A.bindFramebuffer(z.FRAMEBUFFER,q)&&A.drawBuffers(D,q),A.viewport(X),A.scissor(dt),A.setScissorTest(yt),K){const Lt=$.get(D.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+H,Lt.__webglTexture,et)}else if(It){const Lt=H;for(let Ft=0;Ft<D.textures.length;Ft++){const Xt=$.get(D.textures[Ft]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ft,Xt.__webglTexture,et,Lt)}}else if(D!==null&&et!==0){const Lt=$.get(D.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Lt.__webglTexture,et)}U=-1};function Ss(D){const H=$.get(D);return(H.__readFormat!==D.format||H.__readType!==D.type)&&(H.__readFormat=D.format,H.__readType=D.type,H.__formatReadable=F.textureFormatReadable(D.format),H.__typeReadable=F.textureTypeReadable(D.type)),H}this.readRenderTargetPixels=function(D,H,et,q,K,It,kt,Lt=0){if(!(D&&D.isWebGLRenderTarget)){_e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=$.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&kt!==void 0&&(Ft=Ft[kt]),Ft){A.bindFramebuffer(z.FRAMEBUFFER,Ft);try{const Xt=D.textures[Lt],oe=Xt.format,ue=Xt.type;D.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Lt);const Gt=Ss(Xt);if(Gt.__formatReadable===!1){_e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Gt.__typeReadable===!1){_e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=D.width-q&&et>=0&&et<=D.height-K&&z.readPixels(H,et,q,K,Pt.convert(oe),Pt.convert(ue),It)}finally{const Xt=G!==null?$.get(G).__webglFramebuffer:null;A.bindFramebuffer(z.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(D,H,et,q,K,It,kt,Lt=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=$.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&kt!==void 0&&(Ft=Ft[kt]),Ft)if(H>=0&&H<=D.width-q&&et>=0&&et<=D.height-K){A.bindFramebuffer(z.FRAMEBUFFER,Ft);const Xt=D.textures[Lt],oe=Xt.format,ue=Xt.type;D.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Lt);const Gt=Ss(Xt);if(Gt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Gt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Se=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Se),z.bufferData(z.PIXEL_PACK_BUFFER,It.byteLength,z.STREAM_READ),z.readPixels(H,et,q,K,Pt.convert(oe),Pt.convert(ue),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);const de=G!==null?$.get(G).__webglFramebuffer:null;A.bindFramebuffer(z.FRAMEBUFFER,de);const Be=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await wp(z,Be,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Se),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,It),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(Se),z.deleteSync(Be),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,H=null,et=0){const q=Math.pow(2,-et),K=Math.floor(D.image.width*q),It=Math.floor(D.image.height*q),kt=H!==null?H.x:0,Lt=H!==null?H.y:0;rt.setTexture2D(D,0),z.copyTexSubImage2D(z.TEXTURE_2D,et,0,0,kt,Lt,K,It),A.unbindTexture()},this.copyTextureToTexture=function(D,H,et=null,q=null,K=0,It=0){let kt,Lt,Ft,Xt,oe,ue,Gt,Se,de;const Be=D.isCompressedTexture?D.mipmaps[It]:D.image;if(et!==null)kt=et.max.x-et.min.x,Lt=et.max.y-et.min.y,Ft=et.isBox3?et.max.z-et.min.z:1,Xt=et.min.x,oe=et.min.y,ue=et.isBox3?et.min.z:0;else{const Xe=Math.pow(2,-K);kt=Math.floor(Be.width*Xe),Lt=Math.floor(Be.height*Xe),D.isDataArrayTexture?Ft=Be.depth:D.isData3DTexture?Ft=Math.floor(Be.depth*Xe):Ft=1,Xt=0,oe=0,ue=0}q!==null?(Gt=q.x,Se=q.y,de=q.z):(Gt=0,Se=0,de=0);const Fe=Pt.convert(H.format),cn=Pt.convert(H.type);let Vt;H.isData3DTexture?(rt.setTexture3D(H,0),Vt=z.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(rt.setTexture2DArray(H,0),Vt=z.TEXTURE_2D_ARRAY):(rt.setTexture2D(H,0),Vt=z.TEXTURE_2D),A.activeTexture(z.TEXTURE0),A.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,H.flipY),A.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),A.pixelStorei(z.UNPACK_ALIGNMENT,H.unpackAlignment);const fn=A.getParameter(z.UNPACK_ROW_LENGTH),we=A.getParameter(z.UNPACK_IMAGE_HEIGHT),Ln=A.getParameter(z.UNPACK_SKIP_PIXELS),jn=A.getParameter(z.UNPACK_SKIP_ROWS),Ri=A.getParameter(z.UNPACK_SKIP_IMAGES);A.pixelStorei(z.UNPACK_ROW_LENGTH,Be.width),A.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Be.height),A.pixelStorei(z.UNPACK_SKIP_PIXELS,Xt),A.pixelStorei(z.UNPACK_SKIP_ROWS,oe),A.pixelStorei(z.UNPACK_SKIP_IMAGES,ue);const ws=D.isDataArrayTexture||D.isData3DTexture,Ne=H.isDataArrayTexture||H.isData3DTexture;if(D.isDepthTexture){const Xe=$.get(D),Ci=$.get(H),ze=$.get(Xe.__renderTarget),Pi=$.get(Ci.__renderTarget);A.bindFramebuffer(z.READ_FRAMEBUFFER,ze.__webglFramebuffer),A.bindFramebuffer(z.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let bs=0;bs<Ft;bs++)ws&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,$.get(D).__webglTexture,K,ue+bs),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,$.get(H).__webglTexture,It,de+bs)),z.blitFramebuffer(Xt,oe,kt,Lt,Gt,Se,kt,Lt,z.DEPTH_BUFFER_BIT,z.NEAREST);A.bindFramebuffer(z.READ_FRAMEBUFFER,null),A.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(K!==0||D.isRenderTargetTexture||$.has(D)){const Xe=$.get(D),Ci=$.get(H);A.bindFramebuffer(z.READ_FRAMEBUFFER,L),A.bindFramebuffer(z.DRAW_FRAMEBUFFER,I);for(let ze=0;ze<Ft;ze++)ws?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Xe.__webglTexture,K,ue+ze):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Xe.__webglTexture,K),Ne?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ci.__webglTexture,It,de+ze):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ci.__webglTexture,It),K!==0?z.blitFramebuffer(Xt,oe,kt,Lt,Gt,Se,kt,Lt,z.COLOR_BUFFER_BIT,z.NEAREST):Ne?z.copyTexSubImage3D(Vt,It,Gt,Se,de+ze,Xt,oe,kt,Lt):z.copyTexSubImage2D(Vt,It,Gt,Se,Xt,oe,kt,Lt);A.bindFramebuffer(z.READ_FRAMEBUFFER,null),A.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ne?D.isDataTexture||D.isData3DTexture?z.texSubImage3D(Vt,It,Gt,Se,de,kt,Lt,Ft,Fe,cn,Be.data):H.isCompressedArrayTexture?z.compressedTexSubImage3D(Vt,It,Gt,Se,de,kt,Lt,Ft,Fe,Be.data):z.texSubImage3D(Vt,It,Gt,Se,de,kt,Lt,Ft,Fe,cn,Be):D.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,It,Gt,Se,kt,Lt,Fe,cn,Be.data):D.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,It,Gt,Se,Be.width,Be.height,Fe,Be.data):z.texSubImage2D(z.TEXTURE_2D,It,Gt,Se,kt,Lt,Fe,cn,Be);A.pixelStorei(z.UNPACK_ROW_LENGTH,fn),A.pixelStorei(z.UNPACK_IMAGE_HEIGHT,we),A.pixelStorei(z.UNPACK_SKIP_PIXELS,Ln),A.pixelStorei(z.UNPACK_SKIP_ROWS,jn),A.pixelStorei(z.UNPACK_SKIP_IMAGES,Ri),It===0&&H.generateMipmaps&&z.generateMipmap(Vt),A.unbindTexture()},this.initRenderTarget=function(D){$.get(D).__webglFramebuffer===void 0&&rt.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?rt.setTextureCube(D,0):D.isData3DTexture?rt.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?rt.setTexture2DArray(D,0):rt.setTexture2D(D,0),A.unbindTexture()},this.resetState=function(){N=0,B=0,G=null,A.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ve._getDrawingBufferColorSpace(t),e.unpackColorSpace=ve._getUnpackColorSpace()}}function en(n,t,e=1,i=1){const s=document.createElement("canvas");s.width=s.height=n;const r=s.getContext("2d");t(r,n);const o=new En(s);return o.wrapS=o.wrapT=On,o.repeat.set(e,i),o.colorSpace=ke,o.anisotropy=4,o}function $n(n){let t=n>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function pa(n,t,e,i){return(s,r)=>{const o=$n(n);s.fillStyle=t,s.fillRect(0,0,r,r);for(let a=0;a<130;a++){const l=o()*r;s.strokeStyle=o()<.3?i:e,s.globalAlpha=.14+o()*.24,s.lineWidth=.6+o()*2.2,s.beginPath(),s.moveTo(0,l);for(let c=0;c<=r;c+=16)s.lineTo(c,l+Math.sin(c*.05+a)*2.5);s.stroke()}for(let a=0;a<420;a++)s.fillStyle=e,s.globalAlpha=.1+o()*.12,s.fillRect(o()*r,o()*r,1+o()*1.5,1);s.globalAlpha=.5;for(let a=0;a<7;a++){const l=o()*r,c=o()*r;s.strokeStyle=e,s.lineWidth=1.2;for(let h=2;h<9;h+=2)s.beginPath(),s.ellipse(l,c,h*1.8,h,.3,0,Math.PI*2),s.stroke()}s.globalAlpha=1}}function pl(n){return n?pa(7,"#3d2a1c","#2a1d12","#54402c"):pa(21,"#8a6844","#6e5233","#a37f52")}function v1(n){return(t,e)=>{const i=$n(n);t.clearRect(0,0,e,e);for(let s=0;s<2;s++){const r=s?30:18;for(let o=0;o<r;o++){const a=e*.12+i()*e*.76,l=e*.12+i()*e*.76,c=5+i()*9,h=3.5+i()*6,d=i()*Math.PI,u=s?150+i()*70:70+i()*50;t.fillStyle=`rgb(${u*.62|0},${u|0},${u*.52|0})`,t.globalAlpha=.95,t.beginPath(),t.ellipse(a,l,c,h,d,0,Math.PI*2),t.fill(),t.globalAlpha=.5,t.fillStyle=s?"#2a4028":"#1c2e1e",t.beginPath(),t.ellipse(a,l,c*.5,h*.18,d,0,Math.PI*2),t.fill()}}t.globalAlpha=1}}function y1(n,t){return(e,i)=>{const s=$n(t);e.clearRect(0,0,i,i);const r=(o,a,l,c,h,d)=>{e.fillStyle=`rgb(${d*.72|0},${d|0},${d*.62|0})`,e.globalAlpha=.96,e.beginPath(),e.ellipse(o,a,l,c,h,0,Math.PI*2),e.fill(),e.globalAlpha=.55,e.strokeStyle="#33502f",e.lineWidth=1,e.beginPath(),e.moveTo(o-Math.cos(h)*l,a-Math.sin(h)*l),e.lineTo(o+Math.cos(h)*l,a+Math.sin(h)*l),e.stroke()};if(n==="spray"){e.strokeStyle="#8a9a7a",e.lineWidth=2,e.globalAlpha=.9,e.beginPath(),e.moveTo(i*.5,i*.95),e.lineTo(i*.5,i*.08),e.stroke();for(let o=0;o<26;o++){const a=i*.1+s()*i*.8,l=o%2?1:-1,c=150+s()*70;e.fillStyle=`rgb(${c*.7|0},${c|0},${c*.6|0})`,e.globalAlpha=.95,e.beginPath(),e.ellipse(i*.5+l*(4+s()*9),a,2+s()*2.5,5+s()*5,l*.9,0,Math.PI*2),e.fill()}}else if(n==="ovate")for(let o=0;o<7;o++){const a=i*.2+s()*i*.6,l=i*.15+s()*i*.7;r(a,l,9+s()*7,5.5+s()*4,(s()-.5)*1.2,150+s()*70)}else if(n==="fascicle")for(let o=0;o<4;o++){const a=i*.25+o*i*.17,l=i*.85-o%2*i*.1;for(let c=0;c<8;c++){const h=-Math.PI/2+(c-3.5)*.16+(s()-.5)*.1,d=i*(.3+s()*.18),u=140+s()*60;e.strokeStyle=`rgb(${u*.68|0},${u|0},${u*.58|0})`,e.lineWidth=2.2,e.globalAlpha=.95,e.beginPath(),e.moveTo(a,l),e.lineTo(a+Math.cos(h)*d,l+Math.sin(h)*d),e.stroke()}}else if(n==="petal")for(let o=0;o<9;o++){const a=i*.2+s()*i*.6,l=i*.2+s()*i*.6,c=200+s()*55;e.fillStyle=`rgb(${c|0},${c*.88|0},${c*.9|0})`,e.globalAlpha=.95;for(let h=0;h<5;h++){const d=h/5*Math.PI*2+s();e.beginPath(),e.ellipse(a+Math.cos(d)*5,l+Math.sin(d)*5,5.5,3.6,d,0,Math.PI*2),e.fill()}}e.globalAlpha=1}}function M1(n,t){const e=$n(99);n.fillStyle="#efe7d6",n.fillRect(0,0,t,t);for(let i=0;i<22;i++){const s=e()*t,r=e()*t,o=t*(.08+e()*.16),a=e()<.5?"210,203,188":"228,222,206",l=n.createRadialGradient(s,r,0,s,r,o);l.addColorStop(0,"rgba("+a+",0.10)"),l.addColorStop(1,"rgba("+a+",0)"),n.fillStyle=l,n.globalAlpha=1,n.beginPath(),n.arc(s,r,o,0,7),n.fill()}for(let i=0;i<2600;i++){const s=225+Math.floor(e()*28);n.fillStyle=`rgb(${s},${s-6},${s-20})`,n.globalAlpha=.35,n.fillRect(e()*t,e()*t,1.4,1.4)}n.globalAlpha=.08,n.fillStyle="#b09a78";for(let i=0;i<8;i++)n.beginPath(),n.arc(e()*t,e()*t,12+e()*30,0,7),n.fill();n.globalAlpha=1}function S1(n,t){const e=$n(5);n.fillStyle="#a8a06a",n.fillRect(0,0,t,t);for(let i=0;i<t;i+=3)n.fillStyle=i/3%2?"#9d955f":"#b3ab74",n.fillRect(0,i,t,2);for(let i=0;i<500;i++)n.fillStyle=e()<.5?"#8a824f":"#c0b87e",n.globalAlpha=.4,n.fillRect(e()*t,e()*t,2,1);n.globalAlpha=1}function w1(n,t){const e=$n(13);n.fillStyle="#f6efdd",n.fillRect(0,0,t,t);for(let i=0;i<900;i++)n.fillStyle=e()<.5?"#efe6d0":"#fbf5e6",n.globalAlpha=.5,n.fillRect(e()*t,e()*t,2,1);n.globalAlpha=1}function b1(n,t){const e=$n(31);n.fillStyle="#cfc6b4",n.fillRect(0,0,t,t);for(let i=0;i<1500;i++){const s=165+Math.floor(e()*70);n.fillStyle=`rgb(${s},${s-4},${s-14})`,n.beginPath(),n.arc(e()*t,e()*t,.8+e()*1.8,0,7),n.fill()}}function E1(n,t){const e=$n(77);n.fillStyle="#7d8f57",n.fillRect(0,0,t,t);for(let i=0;i<46;i++){const s=e()*t,r=e()*t,o=4+e()*16,a=e(),l=a<.4?"74,102,46":a<.75?"96,128,58":"112,140,72",c=n.createRadialGradient(s,r,0,s,r,o);c.addColorStop(0,"rgba("+l+",0.55)"),c.addColorStop(1,"rgba("+l+",0)"),n.fillStyle=c,n.globalAlpha=1,n.beginPath(),n.arc(s,r,o,0,7),n.fill()}for(let i=0;i<2200;i++)n.fillStyle=e()<.5?"#71834e":"#8a9c60",n.globalAlpha=.6,n.fillRect(e()*t,e()*t,1.5,3);n.globalAlpha=1}function T1(n,t){const e=$n(55);n.fillStyle="#9a968c",n.fillRect(0,0,t,t);for(let i=0;i<30;i++){const s=e()*t,r=e()*t,o=6+e()*30,a=118+Math.floor(e()*52)-26,l=n.createRadialGradient(s,r,0,s,r,o);l.addColorStop(0,"rgba("+a+","+a+","+(a+4)+",0.22)"),l.addColorStop(1,"rgba("+a+","+a+","+(a+4)+",0)"),n.fillStyle=l,n.globalAlpha=1,n.beginPath(),n.arc(s,r,o,0,7),n.fill()}for(let i=0;i<1200;i++){const s=120+Math.floor(e()*60);n.fillStyle=`rgb(${s},${s},${s-6})`,n.globalAlpha=.5,n.fillRect(e()*t,e()*t,2,2)}n.globalAlpha=.5,n.strokeStyle="rgba(38,38,42,1)",n.lineCap="round";for(let i=0;i<3;i++){let s=e()*t,r=e()*t;n.lineWidth=1.5+e()*1.5,n.beginPath(),n.moveTo(s,r);for(let o=0;o<7;o++)s+=(e()-.35)*26,r+=(e()-.35)*26,n.lineTo(s,r);n.stroke()}n.globalAlpha=.25,n.strokeStyle="#6f6b62";for(let i=0;i<6;i++)n.beginPath(),n.moveTo(e()*t,e()*t),n.lineTo(e()*t,e()*t),n.stroke();n.globalAlpha=1}function A1(n,t){const e=$n(2654435769);n.fillStyle="#808080",n.fillRect(0,0,t,t);for(let i=0;i<900;i++){const s=110+Math.floor(e()*60);n.fillStyle="rgb("+s+","+s+","+s+")",n.fillRect(Math.floor(e()*t),Math.floor(e()*t),1+Math.floor(e()*3),1+Math.floor(e()*3))}}function R1(n,t){const e=$n(5304813);n.fillStyle="#5a4632",n.fillRect(0,0,t,t);for(let i=0;i<40;i++){const s=e()*t,r=e()*t,o=4+e()*16,a=e()<.5?"66,50,34":"96,78,56",l=n.createRadialGradient(s,r,0,s,r,o);l.addColorStop(0,"rgba("+a+",0.5)"),l.addColorStop(1,"rgba("+a+",0)"),n.fillStyle=l,n.globalAlpha=1,n.beginPath(),n.arc(s,r,o,0,7),n.fill()}for(let i=0;i<300;i++)n.fillStyle=e()<.5?"rgba(40,30,20,0.5)":"rgba(140,115,85,0.5)",n.globalAlpha=1,n.fillRect(Math.floor(e()*t),Math.floor(e()*t),2,2);n.globalAlpha=1}function C1(n,t){n.fillStyle="#2e3d5c",n.fillRect(0,0,t,t),n.fillStyle="#efe7d2",n.fillRect(t*.18,0,t*.1,t),n.fillRect(t*.72,0,t*.1,t),n.beginPath(),n.arc(t/2,t*.34,t*.13,0,7),n.fill(),n.fillStyle="#2e3d5c",n.font=`bold ${Math.floor(t*.16)}px serif`,n.textAlign="center",n.fillText("TEA",t/2,t*.72)}function P1(n,t){const e=n.createLinearGradient(0,0,0,t);e.addColorStop(0,"#f3ecdb"),e.addColorStop(1,"#e4d8bd"),n.fillStyle=e,n.fillRect(0,0,t,t),n.strokeStyle="#4a4a48",n.lineCap="round";const i=(s,r,o,a)=>{n.lineWidth=o,n.beginPath(),n.moveTo(a,s),n.quadraticCurveTo(a+t*.2,s-r,a+t*.38,s-r*.25),n.quadraticCurveTo(a+t*.5,s-r*.7,a+t*.62,s-r*.1),n.stroke()};n.globalAlpha=.75,i(t*.62,t*.3,7,t*.05),n.globalAlpha=.5,i(t*.7,t*.2,5,t*.35),n.globalAlpha=.9,n.fillStyle="#b0533c",n.beginPath(),n.arc(t*.68,t*.26,t*.05,0,7),n.fill(),n.globalAlpha=1,n.fillStyle="#a33327",n.fillRect(t*.12,t*.78,t*.1,t*.1),n.fillStyle="#f3ecdb",n.font=`${Math.floor(t*.07)}px serif`,n.textAlign="center",n.fillText("wa",t*.17,t*.855)}function D1(n,t){n.fillStyle="#e9dfc6",n.fillRect(0,0,t,t),n.strokeStyle="#c9b98f",n.lineWidth=2,n.globalAlpha=.7;for(let e=-t;e<t*2;e+=26)n.beginPath(),n.arc(e,t*.9,22,Math.PI,0),n.stroke(),n.beginPath(),n.arc(e,t*.45,22,Math.PI,0),n.stroke();n.globalAlpha=1}function rf(){const n=en(256,pl(!1),1,1),t=en(256,pl(!0),1,1),e={woodDark:new pt({map:t,color:12164995,roughness:.75,envMapIntensity:.25}),wood:new pt({map:n,color:13609080,roughness:.8,envMapIntensity:.25}),woodFloor:new pt({map:en(256,pl(!1),4,1),color:14201219,roughness:.7,envMapIntensity:.3}),plaster:new pt({map:en(256,M1,1,1),color:16777215,roughness:.95,envMapIntensity:.15}),paper:new pt({map:en(128,w1,1,1),color:16774106,emissive:16768926,emissiveIntensity:.38,transparent:!0,opacity:.92,roughness:.9,side:Oe}),tatami:new pt({map:en(256,S1,1,1),color:16777215,roughness:.95,envMapIntensity:.1}),tatamiEdge:new pt({color:3099194,roughness:.9}),roofTile:new pt({color:4869461,roughness:.55,metalness:.08,envMapIntensity:.5}),roofTileAlt:new pt({color:3948358,roughness:.6,metalness:.08,envMapIntensity:.5}),ridge:new pt({color:3487549,roughness:.5,metalness:.1,envMapIntensity:.6}),roofUnder:new pt({map:t,color:9072466,roughness:.9}),stone:new pt({map:en(256,T1,1,1),color:16777215,roughness:.95,envMapIntensity:.15}),gravel:new pt({map:en(256,b1,6,6),color:16777215,roughness:1}),grass:new pt({map:en(256,E1,10,10),color:16777215,roughness:1}),moss:new pt({color:6126906,roughness:1,envMapIntensity:.1}),mossDark:new pt({color:4613420,roughness:1,envMapIntensity:.1}),bamboo:new pt({color:8364110,roughness:.6,envMapIntensity:.3}),bambooLeaf:new pt({color:5143092,roughness:.8,side:Oe}),trunk:new pt({map:t,color:10123868,roughness:.9}),mapleLeaf:new pt({color:16777215,roughness:.75,side:Oe}),fusuma:new pt({map:en(256,D1,1,1),color:16777215,roughness:.9}),noren:new pt({map:en(256,C1,1,1),color:16777215,roughness:.9,side:Oe}),scroll:new pt({map:en(256,P1,1,1),color:16777215,roughness:.9}),lanternGlow:new pt({color:16767392,emissive:16751686,emissiveIntensity:2.2}),paperLantern:new pt({color:16770232,emissive:16757867,emissiveIntensity:1.4,roughness:.8}),bronze:new pt({color:4997688,roughness:.45,metalness:.7,envMapIntensity:.8})};e.woodNew=e.woodNew||new pt({map:en(256,pa(501,"#9a7040","#7a5630","#bd9257"),1,1),color:16777215,roughness:.7}),e.woodAged=e.woodAged||new pt({map:en(256,pa(502,"#77685a","#5c5148","#8d8172"),2,1),color:16777215,roughness:.9}),e.glassDark=e.glassDark||new pt({color:1053980,roughness:.08,metalness:.9}),e.bronze=e.bronze||new pt({color:7035443,roughness:.35,metalness:.9}),e.iron=e.iron||new pt({color:2829102,roughness:.5,metalness:.8}),e.soil=e.soil||new pt({color:4865843,roughness:1}),e.thatch=e.thatch||new pt({color:10127967,roughness:1}),e._wet=e._wet||[],e.registerWet=r=>(r&&!e._wet.includes(r)&&e._wet.push(r),r),e.plasterTinted=r=>new pt({color:r,roughness:.95}),[e.wood,e.woodDark,e.woodNew,e.woodAged,e.plaster,e.tile,e.stone,e.soil].forEach(r=>r&&e.registerWet(r)),e.tile=e.tile||e.roofTile,e.shoji=e.shoji||e.paper,e.registerWet(e.tile);const i=document.createElement("canvas");i.width=i.height=128,A1(i.getContext("2d"),128);const s=new En(i);s.wrapS=s.wrapT=On,s.repeat.set(3,3),s.colorSpace=Un;for(const r of["wood","woodDark","woodNew","woodAged","plaster","stone","soil"])e[r]&&(e[r].roughnessMap=s,e[r].roughness=1);for(const r of["roofTile","roofTileAlt","ridge"])e[r]&&(e[r].roughnessMap=s,e[r].roughness=1,e[r].bumpMap=s,e[r].bumpScale=.25);e.soil.map=en(128,R1,4,4),e.soil.needsUpdate=!0;{const r=(h,d=.9)=>new pt({color:h,roughness:d,envMapIntensity:.15}),o=(h,d=.8)=>new pt({color:h,roughness:d,side:Oe,envMapIntensity:.1});e.barkSugi=e.barkSugi||r(6965812),e.barkHinoki=e.barkHinoki||r(8018496),e.barkKeyaki=e.barkKeyaki||r(9079430,.85),e.barkMomiji=e.barkMomiji||r(8022620,.85),e.barkOrchard=e.barkOrchard||r(6969930),e.leafSugi=e.leafSugi||o(2968106,.9),e.leafBroad=e.leafBroad||o(4680501),e.leafMomiji=e.leafMomiji||o(5929530,.75),e.leafBlossom=e.leafBlossom||o(15247544,.7),e.leafPine=e.leafPine||o(4020784,.85),e.leafBamboo=e.leafBamboo||o(4878392,.75),e.leafSasa=e.leafSasa||o(4156212),e.leafFern=e.leafFern||o(3828544),e.leafSeedling=e.leafSeedling||o(5601850);const a=en(128,v1(7701),1,1);for(const h of["leafSugi","leafBroad","leafMomiji","leafBlossom","leafPine","leafBamboo","leafSasa","leafFern","leafSeedling","bambooLeaf"]){const d=e[h];d&&(d.map=a,d.alphaTest=.45,d.color.setHex(16777215),d.needsUpdate=!0)}const l={leafSugi:"spray",leafBroad:"ovate",leafPine:"fascicle",leafBlossom:"petal"};let c=7710;for(const[h,d]of Object.entries(l)){const u=e[h];u&&(u.map=en(128,y1(d,c++),1,1),u.alphaTest=.45,u.color.setHex(16777215),u.needsUpdate=!0)}e.shoot=e.shoot||new pt({color:10135658,roughness:.8}),e.litter=e.litter||new pt({color:4864038,roughness:1}),e.impostor=e.impostor||new Bn({color:3360814,side:Oe,fog:!0})}return e}const L1=Object.freeze(Object.defineProperty({__proto__:null,buildMaterials:rf},Symbol.toStringTag,{value:"Module"}));function Ai(n){let t=n>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Ht(n,t,e,i,s=0,r=0,o=0,a=0){const l=new Q(new Dt(n,t,e),i);return l.position.set(s,r,o),l.rotation.y=a,l.castShadow=!0,l.receiveShadow=!0,l}const gn=new ne;function wi(n,t){for(let e=0;e<t.length;e++){const i=t[e];gn.position.set(i.p[0],i.p[1],i.p[2]),gn.rotation.set(i.rx||0,i.ry||0,i.rz||0);const s=i.s===void 0?1:i.s;gn.scale.set(i.sx===void 0?s:i.sx,i.sy===void 0?s:i.sy,i.sz===void 0?s:i.sz),gn.updateMatrix(),n.setMatrixAt(e,gn.matrix),i.c&&n.setColorAt(e,i.c)}return n.instanceMatrix.needsUpdate=!0,n.instanceColor&&(n.instanceColor.needsUpdate=!0),n.castShadow=!0,n.receiveShadow=!0,n}function of(n,t,e=.75,i=1){const s=new Jn(n,i),r=Ai(t),o=s.attributes.position,a=new O,l=new Map;for(let c=0;c<o.count;c++){a.fromBufferAttribute(o,c);const h=`${a.x.toFixed(3)},${a.y.toFixed(3)},${a.z.toFixed(3)}`;let d=l.get(h);d===void 0&&(d=.78+r()*.5,l.set(h,d)),a.multiplyScalar(d),a.y*=e,o.setXYZ(c,a.x,a.y,a.z)}return s.computeVertexNormals(),s}let No=null;function af(){if(No)return No;const n=document.createElement("canvas");n.width=n.height=128;const t=n.getContext("2d"),e=t.createRadialGradient(64,64,6,64,64,62);return e.addColorStop(0,"rgba(20,12,6,0.55)"),e.addColorStop(.6,"rgba(20,12,6,0.28)"),e.addColorStop(1,"rgba(20,12,6,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),No=new En(n),No}function Ta(n,t,e=1){const i=new Q(new Ae(n,t),new Bn({map:af(),transparent:!0,opacity:e,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));return i.rotation.x=-Math.PI/2,i.renderOrder=1,i}function ch(n,t,e,i,s,r,o){const a=new Dt(s,i,r),l=new Dt(e,s,r),c=new Kt,h=(f,g)=>{const v=new ye(f,o,g);return v.castShadow=!1,v.receiveShadow=!0,v},d=h(a,n+1),u=h(l,t+1);for(let f=0;f<=n;f++)gn.position.set(-e/2+f*e/n,0,0),gn.rotation.set(0,0,0),gn.scale.set(1,1,1),gn.updateMatrix(),d.setMatrixAt(f,gn.matrix);for(let f=0;f<=t;f++)gn.position.set(0,-i/2+f*i/t,0),gn.rotation.set(0,0,0),gn.scale.set(1,1,1),gn.updateMatrix(),u.setMatrixAt(f,gn.matrix);return d.instanceMatrix.needsUpdate=u.instanceMatrix.needsUpdate=!0,c.add(d,u),c}const I1=Object.freeze(Object.defineProperty({__proto__:null,blobTexture:af,contactShadow:Ta,displacedRock:of,fillInstances:wi,makeBeam:Ht,makeLatticeBars:ch,mulberry:Ai},Symbol.toStringTag,{value:"Module"})),lf={w:10,d:6.4,floorY:.7,wallTop:3.6,pillar:.22};function Uo(n,t,e,i=[4,6]){const s=new Kt,r=.07,o=.06,a=e.woodDark;s.add(Ht(n,r,o,a,0,t/2-r/2,0)),s.add(Ht(n,r,o,a,0,-t/2+r/2,0)),s.add(Ht(r,t,o,a,-n/2+r/2,0,0)),s.add(Ht(r,t,o,a,n/2-r/2,0,0)),s.add(Ht(.05,t-2*r,o*.7,a,0,0,0));const l=new Q(new Ae(n-2*r,t-2*r),e.paper);l.position.z=-.005,l.receiveShadow=!0,s.add(l);const c=ch(i[0],i[1],n-2*r,t-2*r,.028,.02,e.woodDark);c.position.z=.018,s.add(c);const h=new Q(new me(.035,.035,.03,12),e.bronze);return h.rotation.x=Math.PI/2,h.position.set(n/2-.16,0,.035),s.add(h),s}function N1(n){const t=new Kt,e=Ai(1234),{w:i,d:s,floorY:r,wallTop:o,pillar:a}=lf,l=i/2,c=s/2,h=Ta(i+3.4,s+3.6,.9);h.position.set(0,.03,0),t.add(h);{const P=of(.32,900,.62,0),L=[];for(let N=-l;N<=l+.01;N+=1.25)for(let B=-c;B<=c+.01;B+=1.6)L.push({p:[N+(e()-.5)*.15,.18,B+(e()-.5)*.15],ry:e()*6.3,s:.8+e()*.5});const I=new ye(P,n.stone,L.length);wi(I,L),t.add(I)}t.add(Ht(i+.3,.24,.24,n.woodDark,0,r-.12,c)),t.add(Ht(i+.3,.24,.24,n.woodDark,0,r-.12,-c)),t.add(Ht(.24,.24,s,n.woodDark,-l,r-.12,0)),t.add(Ht(.24,.24,s,n.woodDark,l,r-.12,0));for(let P=-l+.8;P<l;P+=1.1)t.add(Ht(.14,.18,s-.2,n.wood,P,r-.1,0));const d=Ht(i+.2,.1,s,n.woodFloor,0,r-.02,0);t.add(d);const u=o-r,f=r+u/2,g=[];for(let P=0;P<=5;P++)g.push(-l+P*i/5);const v=[];g.forEach(P=>{v.push([P,c]),v.push([P,-c])}),[-c+s/4,0,c-s/4].forEach(P=>{v.push([-l,P]),v.push([l,P])}),v.forEach(([P,L])=>t.add(Ht(a,u,a,n.woodDark,P,f,L)));const p=o-.12;t.add(Ht(i+.24,.24,.2,n.woodDark,0,p,c)),t.add(Ht(i+.24,.24,.2,n.woodDark,0,p,-c)),t.add(Ht(.2,.24,s+.24,n.woodDark,-l,p,0)),t.add(Ht(.2,.24,s+.24,n.woodDark,l,p,0));const m=r+2.32;t.add(Ht(i,.14,.12,n.woodDark,0,m,c)),t.add(Ht(i,.1,.14,n.woodDark,0,r+.08,c)),t.add(Ht(i,.14,.12,n.woodDark,0,m,-c)),t.add(Ht(.14,.14,s,n.woodDark,-l,m,0)),t.add(Ht(.14,.14,s,n.woodDark,l,m,0));const y=(m+.07+p-.12)/2,w=p-.12-(m+.07);t.add(Ht(i-.2,w,.1,n.plaster,0,y,c)),t.add(Ht(i-.2,w,.1,n.plaster,0,y,-c)),t.add(Ht(.1,w,s-.2,n.plaster,-l,y,0)),t.add(Ht(.1,w,s-.2,n.plaster,l,y,0));const _=.1,M=m-(r+.1),b=(m+r+.1)/2;t.add(Ht(i-.2,M,_,n.plaster,0,b,-c)),[-l,l].forEach(P=>{t.add(Ht(_,M,s-.2,n.plaster,P,b,0))}),[-l,l].forEach(P=>{const L=P>0?1:-1;[-1.5,1.5].forEach(I=>{const N=r+1.75,B=new Kt,G=1.5,U=1;B.add(Ht(G+.14,.09,.14,n.woodDark,0,U/2,0)),B.add(Ht(G+.14,.09,.14,n.woodDark,0,-U/2,0)),B.add(Ht(.09,U,.14,n.woodDark,-G/2,0,0)),B.add(Ht(.09,U,.14,n.woodDark,G/2,0,0));const k=new Q(new Ae(G,U),n.paper);k.rotation.y=Math.PI/2,B.add(k);const X=ch(5,3,G,U,.03,.02,n.woodDark);X.rotation.y=Math.PI/2,X.position.x=L*.06,B.add(X),B.position.set(P+L*.09,N,I),t.add(B)})});const R=i/5,x=m-(r+.12),S=r+.12+x/2,E=[];for(let P=1;P<=3;P++){const L=-l+R*(P+.5),I=Uo(R-.3,x,n);I.position.set(L-(R-.3)/4,S,c+.03);const N=Uo(R-.3,x,n);N.position.set(L+(R-.3)/4,S,c-.04),t.add(I,N),P===2&&E.push({node:I,closed:I.position.x,open:I.position.x-(R-.3)/2},{node:N,closed:N.position.x,open:N.position.x+(R-.3)/2})}{const P=Uo(R-.3,x,n);P.position.set(2,S,c-.04);const L=Uo(R-.3,x,n);L.position.set(2,S,c+.1),t.add(P,L)}let T;{const P=-l+R*.5,L=Ht(R-.4,.12,1.6,n.stone,P,r-.06,c-.7);L.receiveShadow=!0,t.add(L);const I=Ht(1.5,.28,.55,n.stone,P,.2,c+1.65);t.add(I),t.add(Ht(.16,x+.1,.16,n.woodDark,P-.85,S,c+.05)),t.add(Ht(.16,x+.1,.16,n.woodDark,P+.85,S,c+.05)),t.add(Ht(1.9,.18,.2,n.woodDark,P,m+.05,c+.05)),T=new Kt;for(let N=0;N<3;N++){const B=new Q(new Dt(.5,.85,.02),n.noren);B.position.set(-.53+N*.53,-.5,0),B.castShadow=!0,T.add(B)}T.position.set(P,m-.06,c+.12),t.add(T)}{const P=r-.06,L=Ht(i+.6,.12,1.25,n.woodFloor,0,P,c+.65);t.add(L);const I=Ht(1.25,.12,s+.6,n.woodFloor,l+.65,P,0);t.add(I);for(let G=-l-.2;G<=l+.25;G+=1.7)t.add(Ht(.14,P,.14,n.woodDark,G,P/2,c+1.2));for(let G=-c;G<=c+.01;G+=1.6)t.add(Ht(.14,P,.14,n.woodDark,l+1.2,P/2,G));const N=3.78-P;for(let G=-l-.2;G<=l+.25;G+=2.55)t.add(Ht(.13,N,.13,n.woodDark,G,P+N/2,c+1.2));for(let G=-c;G<=c+.01;G+=2.1)t.add(Ht(.13,N,.13,n.woodDark,l+1.2,P+N/2,G));t.add(Ht(i+.7,.16,.14,n.woodDark,0,3.62,c+1.2)),t.add(Ht(.14,.16,s+.7,n.woodDark,l+1.2,3.62,0));const B=P+.55;for(let G=-c;G<=1;G+=1.05)t.add(Ht(.09,.62,.09,n.woodDark,l+1.2,P+.31,G));t.add(Ht(.08,.08,4.4,n.wood,l+1.2,B,-c+2.2)),t.add(Ht(.06,.06,4.4,n.wood,l+1.2,B-.28,-c+2.2)),t.add(Ht(1.6,.22,.5,n.stone,-l+R*4.5,.16,c+1.65))}let C;{const P=new pt({color:5917240,roughness:.7,side:Oe}),L=new me(.09,.09,i+2.6,10,1,!0,Math.PI,Math.PI);L.rotateZ(Math.PI/2),[c+1.55,-c-1.55].forEach(U=>{const k=new Q(L,P);k.position.set(0,3.66,U),t.add(k)});const I=new me(.055,.055,3.5,8);[[-l-1.2,c+1.55],[-l-1.2,-c-1.55]].forEach(([U,k])=>{const X=new Q(I,n.bamboo);X.position.set(U,1.85,k),X.castShadow=!0,t.add(X)}),C=new Kt;const N=new rr(.055,.014,6,10);for(let U=0;U<16;U++){const k=new Q(N,n.bronze);k.position.y=-U*.2,k.rotation.y=U%2*Math.PI/2,C.add(k)}C.position.set(l+1.2,3.6,c+1.55),t.add(C);const B=[];for(let U=0;U<=8;U++){const k=U/8*Math.PI;B.push(new ut(.12+Math.sin(k)*.3,U*.045))}const G=new Q(new sr(B,14),n.stone);G.position.set(l+1.2,0,c+1.55),G.castShadow=G.receiveShadow=!0,t.add(G)}return{group:t,noren:T,rainChain:C,openBayX:-l+R*4.5,sliders:E}}function U1(n){const t=new Kt;n.ridge.side=Oe;const e=6.42,i=3.7,s=4.7,r=6,o=s,a=e-i,l=Math.hypot(o,a),c=Math.atan2(a,o),h=o/l,d=a/l,u=r*2,f=new Dt(u,.16,l+.35),g=(e+i)/2-.06,v=s/2,p=new Q(f,n.roofUnder);p.position.set(0,g,v),p.rotation.x=c;const m=p.clone();m.position.z=-v,m.rotation.x=-c,p.castShadow=m.castShadow=!0,p.receiveShadow=m.receiveShadow=!0,t.add(p,m),t.add(Ht(u+.15,.3,.09,n.woodDark,0,i-.02,s+.02)),t.add(Ht(u+.15,.3,.09,n.woodDark,0,i-.02,-s-.02));{const y=new Dt(.12,.15,.9),w=[];for(let M=-5.6;M<=5.61;M+=.62)w.push({p:[M,i-.02,s-.35],rx:c}),w.push({p:[M,i-.02,-4.3500000000000005],rx:-c});const _=new ye(y,n.woodDark,w.length);wi(_,w),_.castShadow=!1,t.add(_)}{const y=new me(.085,.095,.55,7,1,!0);y.rotateZ(Math.PI/2),y.rotateY(Math.PI/2);const w=11,_=56,M=new ye(y,n.roofTile,w*_*2),b=Ai(20240),R=new Nt;let x=0;const S=[];for(let E=0;E<2;E++){const T=E===0?1:-1;for(let C=0;C<w;C++){const P=.32+C*((l-.35)/w),L=T*(s-P*h),I=i+P*d+.1;for(let N=0;N<_;N++){const B=-5.78+N*(11.56/(_-1));S.push({p:[B,I,L],rx:T*c});const G=.82+b()*.3;R.setRGB(G,G*1.01,G*1.06),M.setColorAt(x++,R)}}}wi(M,S),M.instanceColor.needsUpdate=!0,M.castShadow=!1,M.receiveShadow=!0,t.add(M)}{const y=new me(.17,.17,.72,9,1,!0,0,Math.PI);y.rotateZ(Math.PI/2);const w=16,_=new ye(y,n.ridge,w),M=[];for(let b=0;b<w;b++)M.push({p:[-5.6+b*(11.2/(w-1)),e+.02,0]});wi(_,M),_.castShadow=!1,t.add(_),t.add(Ht(.5,.22,.4,n.ridge,-5.85,e-.05,0)),t.add(Ht(.5,.22,.4,n.ridge,5.85,e-.05,0))}[-1,1].forEach(y=>{const w=new Kt;w.add(Ht(.22,.5,.55,n.ridge,0,.2,0));const _=new Q(new me(.3,.3,.14,12),n.ridge);_.rotation.z=Math.PI/2,_.position.y=.55,_.castShadow=!0,w.add(_);const M=new Q(new xn(.12,10,8),n.ridge);M.position.y=.78,M.castShadow=!0,w.add(M),w.position.set(y*5.95,e-.1,0),t.add(w)});{const y=new $r;y.moveTo(-3.2,3.55),y.lineTo(3.2,3.55),y.lineTo(0,e-.12),y.closePath();const w=new Ma(y);[4.94,-4.94].forEach(_=>{const M=new Q(w,n.plaster);M.rotation.y=Math.PI/2,M.position.x=_,M.castShadow=M.receiveShadow=!0,M.material.side=Oe,t.add(M)}),[1,-1].forEach(_=>{[1,-1].forEach(M=>{const b=Ht(.1,.24,l+.4,n.woodDark,_*(r-.02),g+.12,M*v);b.rotation.x=M*c,t.add(b)})})}{const y=new Dt(2,.09,1.7),w=c-.3;[[5.55,1,4.35,1],[-5.55,-1,4.35,1],[5.55,1,-4.35,-1],[-5.55,-1,-4.35,-1]].forEach(([M,b,R,x])=>{const S=new Q(y,n.roofUnder);S.position.set(M,i+.16,R),S.rotation.order="YXZ",S.rotation.y=b*x*.42,S.rotation.x=x*w,S.castShadow=S.receiveShadow=!0,t.add(S);const E=new me(.085,.095,.55,7,1,!0);E.rotateZ(Math.PI/2),E.rotateY(Math.PI/2);const T=new ye(E,n.roofTileAlt,5),C=[];for(let P=0;P<5;P++)C.push({p:[M-.7+P*.35,i+.38,R-x*.15],rx:x*w});wi(T,C),T.castShadow=!1,t.add(T)})}return{group:t,ridgeY:e,eaveY:i,eaveZ:s}}function O1(n){const t=new Kt,{floorY:e}=lf,i=-.9,s=4.9,r=-2.9,o=2.9,a=(i+s)/2;{const f=e+.06;for(let g=r+.1;g+1.82<o+.01;g+=1.82+.02)for(let v=i+.1;v+.92<s+.01;v+=.92+.02){const p=new Q(new Dt(.92,.06,1.82),n.tatami);p.position.set(v+.92/2,f,g+1.82/2),p.receiveShadow=!0,t.add(p);const m=Ht(.92+.02,.06+.005,.035,n.tatamiEdge,v+.92/2,f,g+1.82-.017);m.castShadow=!1,t.add(m)}}{const h=3-e;[[i,0],[a,0],[s,-2],[s,2]].forEach(([u,f])=>t.add(Ht(.16,h,.16,n.woodDark,u,e+h/2,f)));const d=new Q(new Dt(s-i+.4,.08,o-r+.4),n.woodDark);d.position.set(a,3.02,0),t.add(d)}{const h=Ht(.1,2.2,o-r,n.plaster,i,e+1.15,0);t.add(h);for(let d=0;d<3;d++){const u=new Kt,f=1.75,g=1.7;u.add(Ht(f,.06,.05,n.woodDark,0,g/2,0)),u.add(Ht(f,.06,.05,n.woodDark,0,-g/2,0)),u.add(Ht(.06,g,.05,n.woodDark,-f/2,0,0)),u.add(Ht(.06,g,.05,n.woodDark,f/2,0,0));const v=new Q(new Ae(f-.1,g-.1),n.fusuma);v.rotation.y=Math.PI/2,u.add(v);const p=new Q(new me(.03,.03,.03,10),n.bronze);p.rotation.z=Math.PI/2,p.position.set(.04,0,.35),u.add(p),u.position.set(i+.09,e+1,-1.85+d*1.85),t.add(u)}}{const u=Ht(2.2,.16,1,n.wood,-2.6,e+.14,r+.55);t.add(u),t.add(Ht(.14,2.2,.14,n.woodDark,-2.6-2.2/2,e+1.1,r+.15)),t.add(Ht(.14,2.2,.14,n.woodDark,-2.6+2.2/2,e+1.1,r+.15)),t.add(Ht(2.2+.2,.14,.16,n.woodDark,-2.6,e+2.25,r+.15));const f=new Kt,g=new Q(new Dt(.55,1.05,.02),n.scroll);f.add(g);const v=new me(.025,.025,.7,8),p=new Q(v,n.woodDark);p.rotation.z=Math.PI/2,p.position.y=.55;const m=p.clone();m.position.y=-.55,f.add(p,m),f.position.set(-2.6-.45,e+1.55,r+.22),f.rotation.x=.03,t.add(f);const y=[];for(let R=0;R<=8;R++){const x=R/8*Math.PI;y.push(new ut(.03+Math.sin(x)*.11,R*.035))}const w=new Q(new sr(y,12),new pt({color:3824268,roughness:.35,envMapIntensity:.7}));w.position.set(-2.6+.55,e+.22,r+.55),w.castShadow=!0,t.add(w);const _=new Q(new me(.012,.012,.5,6),n.mossDark);_.position.set(-2.6+.55,e+.5,r+.55),t.add(_);const M=new Q(new Jn(.09,0),new pt({color:13920650,roughness:.7}));M.position.set(-2.6+.55,e+.78,r+.55),M.castShadow=!0,t.add(M);const b=new Q(new Jn(.14,0),n.stone);b.scale.y=.6,b.position.set(-2.6+.1,e+.26,r+.6),b.castShadow=!0,t.add(b)}{t.add(Ht(1.1,.07,.7,n.wood,2.2,e+.42,.6)),[[-.45,-.25],[.45,-.25],[-.45,.25],[.45,.25]].forEach(([f,g])=>t.add(Ht(.07,.32,.07,n.woodDark,2.2+f,e+.22,.6+g)));const u=new pt({color:8007221,roughness:.9});[[2.2-.2,.6+.75],[2.2+.35,.6-.7]].forEach(([f,g])=>{const v=new Q(new Dt(.5,.09,.5),u);v.position.set(f,e+.12,g),v.rotation.y=.2,v.castShadow=v.receiveShadow=!0,t.add(v)})}const l=new Kt;{const h=new Q(new me(.012,.012,.5,6),n.woodDark);h.position.y=.45,l.add(h);const d=new Q(new me(.19,.19,.34,12),n.paperLantern);l.add(d);const u=new Q(new me(.1,.14,.05,10),n.woodDark);u.position.y=.19;const f=u.clone();f.position.y=-.19,l.add(u,f);const g=new Q(new me(.015,.03,.16,8),new pt({color:10695463,roughness:.8}));g.position.y=-.3,l.add(g),l.position.set(2,2.35,.4),t.add(l)}const c=new ah(16757867,5,9,2);return c.position.set(2,2.3,.4),t.add(c),{group:t,lantern:l,lanternLight:c}}const F1={x:7.5,z:6,w:4.6,d:2.9};function B1(n){const t=new Kt,{x:e,z:i,w:s,d:r}=F1,o=new Q(new Zn(1,40),new pt({color:2241323,roughness:1}));o.rotation.x=-Math.PI/2,o.scale.set(s/2+.15,r/2+.15,1),o.position.set(e,-.1,i),o.receiveShadow=!0,t.add(o);const a=new pt({color:5337212,roughness:.1,metalness:.85,envMapIntensity:1.1,transparent:!0,opacity:.93}),l=30,c=18,h=new Ae(s,r,l,c),d=new Q(h,a);d.rotation.x=-Math.PI/2,d.position.set(e,.06,i),d.receiveShadow=!0,t.add(d);const u=h.attributes.position.array.slice();{const g=Ai(646),v=22,p=new Jn(.22,0),m=new ye(p,n.stone,v),y=[];for(let w=0;w<v;w++){const _=w/v*Math.PI*2;y.push({p:[e+Math.cos(_)*(s/2+.1),.1,i+Math.sin(_)*(r/2+.1)],ry:g()*6.3,s:.8+g()*.6,sy:.55})}wi(m,y),t.add(m)}function f(g,v=null){const p=h.attributes.position,y=1+(v&&typeof v.wetness=="number"?Math.min(Math.max(v.wetness,0),1):0)*.35;for(let w=0;w<p.count;w++){const _=u[w*3],M=u[w*3+1];p.setZ(w,(Math.sin(_*2.1+g*1.7)*.022+Math.cos(M*2.8+g*2.2)*.02)*y)}p.needsUpdate=!0,h.computeVertexNormals()}return{group:t,update:f,waterMat:a}}class z1 extends im{constructor(t){super(t),this.type=on}parse(t){const o=function(x,S){switch(x){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(S||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(S||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(S||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(S||""))}},h=`
`,d=function(x,S,E){S=S||1024;let C=x.pos,P=-1,L=0,I="",N=String.fromCharCode.apply(null,new Uint16Array(x.subarray(C,C+128)));for(;0>(P=N.indexOf(h))&&L<S&&C<x.byteLength;)I+=N,L+=N.length,C+=128,N=String.fromCharCode.apply(null,new Uint16Array(x.subarray(C,C+128)));return-1<P?(x.pos+=L+P+1,I+N.slice(0,P)):!1},u=function(x){const S=/^#\?(\S+)/,E=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,T=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*FORMAT=(\S+)\s*$/,P=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,L={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let I,N;for((x.pos>=x.byteLength||!(I=d(x)))&&o(1,"no header found"),(N=I.match(S))||o(3,"bad initial token"),L.valid|=1,L.programtype=N[1],L.string+=I+`
`;I=d(x),I!==!1;){if(L.string+=I+`
`,I.charAt(0)==="#"){L.comments+=I+`
`;continue}if((N=I.match(E))&&(L.gamma=parseFloat(N[1])),(N=I.match(T))&&(L.exposure=parseFloat(N[1])),(N=I.match(C))&&(L.valid|=2,L.format=N[1]),(N=I.match(P))&&(L.valid|=4,L.height=parseInt(N[1],10),L.width=parseInt(N[2],10)),L.valid&2&&L.valid&4)break}return L.valid&2||o(3,"missing format specifier"),L.valid&4||o(3,"missing image size specifier"),L},f=function(x,S,E){const T=S;if(T<8||T>32767||x[0]!==2||x[1]!==2||x[2]&128)return new Uint8Array(x);T!==(x[2]<<8|x[3])&&o(3,"wrong scanline width");const C=new Uint8Array(4*S*E);C.length||o(4,"unable to allocate buffer space");let P=0,L=0;const I=4*T,N=new Uint8Array(4),B=new Uint8Array(I);let G=E;for(;G>0&&L<x.byteLength;){L+4>x.byteLength&&o(1),N[0]=x[L++],N[1]=x[L++],N[2]=x[L++],N[3]=x[L++],(N[0]!=2||N[1]!=2||(N[2]<<8|N[3])!=T)&&o(3,"bad rgbe scanline format");let U=0,k;for(;U<I&&L<x.byteLength;){k=x[L++];const dt=k>128;if(dt&&(k-=128),(k===0||U+k>I)&&o(3,"bad scanline data"),dt){const yt=x[L++];for(let wt=0;wt<k;wt++)B[U++]=yt}else B.set(x.subarray(L,L+k),U),U+=k,L+=k}const X=T;for(let dt=0;dt<X;dt++){let yt=0;C[P]=B[dt+yt],yt+=T,C[P+1]=B[dt+yt],yt+=T,C[P+2]=B[dt+yt],yt+=T,C[P+3]=B[dt+yt],P+=4}G--}return C},g=function(x,S,E,T){const C=x[S+3],P=Math.pow(2,C-128)/255;E[T+0]=x[S+0]*P,E[T+1]=x[S+1]*P,E[T+2]=x[S+2]*P,E[T+3]=1},v=function(x,S,E,T){const C=x[S+3],P=Math.pow(2,C-128)/255;E[T+0]=uo.toHalfFloat(Math.min(x[S+0]*P,65504)),E[T+1]=uo.toHalfFloat(Math.min(x[S+1]*P,65504)),E[T+2]=uo.toHalfFloat(Math.min(x[S+2]*P,65504)),E[T+3]=uo.toHalfFloat(1)},p=new Uint8Array(t);p.pos=0;const m=u(p),y=m.width,w=m.height,_=f(p.subarray(p.pos),y,w);let M,b,R;switch(this.type){case Pn:R=_.length/4;const x=new Float32Array(R*4);for(let E=0;E<R;E++)g(_,E*4,x,E*4);M=x,b=Pn;break;case on:R=_.length/4;const S=new Uint16Array(R*4);for(let E=0;E<R;E++)v(_,E*4,S,E*4);M=S,b=on;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:y,height:w,data:M,header:m.string,gamma:m.gamma,exposure:m.exposure,type:b,colorSpace:zr,minFilter:Ye,magFilter:Ye,generateMipmaps:!1,flipY:!0}}setDataType(t){return this.type=t,this}}class k1 extends z1{constructor(t){console.warn("RGBELoader has been deprecated. Please use HDRLoader instead."),super(t)}}const G1=[{key:"bark",albedo:"vendor/commons/sugi_bark/1280px-Cryptomeria_japonica_(bark)_of_Okuteshinmei-jinja.jpg",hasRough:!1,hasNormal:!1,materialKeys:["trunk"],repeat:[1,2],fallbackNote:"procedural darkWood canvas (materials.js trunk) stays when file missing"},{key:"woodAged",albedo:"vendor/commons/weathered_wood/1280px-Weathered_barn_wood_with_worm_holes.jpg",hasRough:!1,hasNormal:!1,materialKeys:["woodAged"],repeat:[2,1],fallbackNote:"procedural woodDrawTone(502) canvas stays when file missing"},{key:"moss",albedo:"vendor/commons/moss/1280px-Moss_green_texture.jpg",hasRough:!1,hasNormal:!1,materialKeys:["moss"],repeat:[3,3],fallbackNote:"flat moss color stays when file missing"},{key:"mossDark",albedo:"vendor/commons/moss_cc0/1280px-Moss_Texture.png",hasRough:!1,hasNormal:!1,materialKeys:["mossDark"],repeat:[3,3],fallbackNote:"flat mossDark color stays when file missing"},{key:"gravel",albedo:"vendor/commons/gravel/1280px-Gravel_texture.jpg",hasRough:!1,hasNormal:!1,materialKeys:["gravel"],repeat:[6,6],fallbackNote:"procedural gravelDraw canvas stays when file missing"},{key:"soil",albedo:"vendor/commons/needle_litter/Forest_floor_with_loblolly_pine_needles.jpg",hasRough:!1,hasNormal:!1,materialKeys:["soil"],repeat:[4,4],fallbackNote:"procedural soilDraw canvas stays when file missing"},{key:"ground037-soil",albedo:"vendor/ambientcg/Ground037/Ground037_1K-JPG_Color.jpg",normal:"vendor/ambientcg/Ground037/Ground037_1K-JPG_NormalGL.jpg",rough:"vendor/ambientcg/Ground037/Ground037_1K-JPG_Roughness.jpg",hasRough:!0,hasNormal:!0,materialKeys:["soil"],repeat:[110,110],fallbackNote:"procedural soilDraw canvas stays when file missing"},{key:"moss002",albedo:"vendor/ambientcg/Moss002/Moss002_1K-JPG_Color.jpg",normal:"vendor/ambientcg/Moss002/Moss002_1K-JPG_NormalGL.jpg",rough:"vendor/ambientcg/Moss002/Moss002_1K-JPG_Roughness.jpg",hasRough:!0,hasNormal:!0,materialKeys:["moss","mossDark"],repeat:[60,60],fallbackNote:"flat moss colors stay when file missing"},{key:"rock035",albedo:"vendor/ambientcg/Rock035/Rock035_1K-JPG_Color.jpg",normal:"vendor/ambientcg/Rock035/Rock035_1K-JPG_NormalGL.jpg",rough:"vendor/ambientcg/Rock035/Rock035_1K-JPG_Roughness.jpg",hasRough:!0,hasNormal:!0,materialKeys:["stone"],repeat:[24,24],fallbackNote:"procedural stoneDraw canvas stays when file missing"},{key:"gravel043",albedo:"vendor/ambientcg/Gravel043/Gravel043_1K-JPG_Color.jpg",normal:"vendor/ambientcg/Gravel043/Gravel043_1K-JPG_NormalGL.jpg",rough:"vendor/ambientcg/Gravel043/Gravel043_1K-JPG_Roughness.jpg",hasRough:!0,hasNormal:!0,materialKeys:["gravel"],repeat:[6,6],fallbackNote:"procedural gravelDraw canvas stays when file missing"},{key:"bark006",albedo:"vendor/ambientcg/Bark006/Bark006_1K-JPG_Color.jpg",normal:"vendor/ambientcg/Bark006/Bark006_1K-JPG_NormalGL.jpg",rough:"vendor/ambientcg/Bark006/Bark006_1K-JPG_Roughness.jpg",hasRough:!0,hasNormal:!0,materialKeys:["trunk"],repeat:[1,2],fallbackNote:"procedural darkWood canvas stays when file missing"},{key:"woodsiding013",albedo:"vendor/ambientcg/WoodSiding013/WoodSiding013_1K-JPG_Color.jpg",normal:"vendor/ambientcg/WoodSiding013/WoodSiding013_1K-JPG_NormalGL.jpg",rough:"vendor/ambientcg/WoodSiding013/WoodSiding013_1K-JPG_Roughness.jpg",hasRough:!0,hasNormal:!0,materialKeys:["woodAged","wood"],repeat:[2,1],fallbackNote:"procedural woodDrawTone canvases stay when file missing (woodNew untouched: new vs aged history)"},{key:"plaster001",albedo:"vendor/ambientcg/Plaster001/Plaster001_1K-JPG_Color.jpg",normal:"vendor/ambientcg/Plaster001/Plaster001_1K-JPG_NormalGL.jpg",rough:"vendor/ambientcg/Plaster001/Plaster001_1K-JPG_Roughness.jpg",hasRough:!0,hasNormal:!0,materialKeys:["plaster"],repeat:[1,1],fallbackNote:"procedural plasterDraw canvas stays when file missing"},{key:"roofing006",albedo:"vendor/ambientcg/RoofingTiles006/RoofingTiles006_1K-JPG_Color.jpg",normal:"vendor/ambientcg/RoofingTiles006/RoofingTiles006_1K-JPG_NormalGL.jpg",rough:"vendor/ambientcg/RoofingTiles006/RoofingTiles006_1K-JPG_Roughness.jpg",hasRough:!0,hasNormal:!0,materialKeys:["roofTile","roofTileAlt"],repeat:[4,4],fallbackNote:"flat ceramic + shared noise stay when file missing"},{key:"barkPBR",albedo:"vendor/commons/bark_pbr/bark_brown_diff.jpg",normal:"vendor/commons/bark_pbr/bark_brown_nor_1k.png",rough:"vendor/commons/bark_pbr/bark_brown_rough_1k.png",hasRough:!0,hasNormal:!0,materialKeys:["barkSugi","barkHinoki","barkOrchard"],repeat:[1,3],fallbackNote:"procedural bark colors stay when files missing"},{key:"zelkovaBark",albedo:"vendor/commons/zelkova_bark/zelkova_bark.jpg",hasRough:!1,hasNormal:!1,materialKeys:["barkKeyaki","barkMomiji"],repeat:[1,2],fallbackNote:"procedural smooth-grey bark stays when file missing"}],H1={clear:"vendor/hdri/venice_sunset_1k.hdr",overcast:"vendor/hdri/quarry_01_1k.hdr",night:"vendor/hdri/moonless_golf_1k.hdr"};function V1(n,t){return n.colorSpace=ke,n.wrapS=n.wrapT=On,t&&n.repeat.set(t[0],t[1]),n.anisotropy=4,n.needsUpdate=!0,n}function ku(n,t){return n.colorSpace=Un,n.wrapS=n.wrapT=On,t&&n.repeat.set(t[0],t[1]),n.anisotropy=4,n.needsUpdate=!0,n}function W1(n,t={}){const e=t.loader||new rh,i={applied:[],missing:[]};for(const s of G1)if(!s.key.startsWith("polyhaven"))try{if(e.load(s.albedo,r=>{V1(r,s.repeat);let o=!1;for(const a of s.materialKeys){const l=n[a];l&&(l.map&&l.map.repeat&&r.repeat.copy(l.map.repeat),l.map=r,l.needsUpdate=!0,o=!0)}o?i.applied.includes(s.key)||i.applied.push(s.key):i.missing.includes(s.key)||i.missing.push(s.key)},void 0,()=>{i.missing.includes(s.key)||i.missing.push(s.key),t.verbose&&console.warn(`[vendor] missing scan, fallback kept: ${s.key} <- ${s.albedo}`)}),s.normal)try{e.load(s.normal,r=>{ku(r,s.repeat);for(const o of s.materialKeys){const a=n[o];a&&"normalMap"in a&&(a.normalMap&&a.normalMap.repeat&&r.repeat.copy(a.normalMap.repeat),a.normalMap=r,"normalScale"in a&&a.normalScale&&a.normalScale.setScalar(.7),a.needsUpdate=!0)}},void 0,()=>{})}catch{}if(s.rough)try{e.load(s.rough,r=>{ku(r,s.repeat);for(const o of s.materialKeys){const a=n[o];a&&"roughnessMap"in a&&(a.roughnessMap=r,"roughness"in a&&(a.roughness=1),a.needsUpdate=!0)}},void 0,()=>{})}catch{}}catch{i.missing.includes(s.key)||i.missing.push(s.key)}return i}const hh=13621468;function X1(n,t){const e=new rn({side:vn,depthWrite:!1,fog:!1,uniforms:{top:{value:new Nt(8366281)},mid:{value:new Nt(15909267)},bot:{value:new Nt(14721137)}},vertexShader:`
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
      }`}),i=new Q(new xn(150,24,16),e);i.frustumCulled=!1,n.add(i),n.fog=new $c(hh,42,500);const s=new Mc(16767400,3);s.position.set(14,8.5,12),s.target.position.set(0,1.2,0),s.castShadow=!0,s.shadow.mapSize.set(2048,2048),s.shadow.camera.left=-15,s.shadow.camera.right=15,s.shadow.camera.top=15,s.shadow.camera.bottom=-15,s.shadow.camera.near=10,s.shadow.camera.far=120,s.shadow.bias=-4e-4,s.shadow.normalBias=.03,n.add(s,s.target);const r=new sm(12375016,9072466,.6);n.add(r);const o=new Mc(16764830,.35);o.position.set(-8,4,-6),n.add(o);const a=document.createElement("canvas");a.width=64,a.height=32;const l=a.getContext("2d"),c=l.createLinearGradient(0,0,0,32);c.addColorStop(0,"#6f96bd"),c.addColorStop(.34,"#a8b8c4"),c.addColorStop(.46,"#ffd9a0"),c.addColorStop(.52,"#c08a5e"),c.addColorStop(.6,"#6b5a44"),c.addColorStop(1,"#2e2a22"),l.fillStyle=c,l.fillRect(0,0,64,32);const h=l.createRadialGradient(41,9,0,41,9,11);h.addColorStop(0,"rgba(255,244,220,0.95)"),h.addColorStop(.4,"rgba(255,214,150,0.45)"),h.addColorStop(1,"rgba(255,200,130,0)"),l.fillStyle=h,l.fillRect(0,0,64,32);let d=1234567;const u=()=>(d=d*1103515245+12345&2147483647)/2147483647;for(let p=0;p<40;p++){const m=u()*64,y=18+u()*14,w=1+u()*3,_=l.createRadialGradient(m,y,0,m,y,w),M=u()<.5;_.addColorStop(0,M?"rgba(150,115,80,0.25)":"rgba(50,52,48,0.25)"),_.addColorStop(1,"rgba(0,0,0,0)"),l.fillStyle=_,l.beginPath(),l.arc(m,y,w,0,7),l.fill()}const f=new En(a);f.mapping=Rr,f.colorSpace=ke;const g=new fa(t),v=g.fromEquirectangular(f);n.environment=v.texture,f.dispose(),g.dispose();try{new k1().load(H1.clear,p=>{try{p.mapping=Rr;const m=new fa(t),y=m.fromEquirectangular(p);n.environment=y.texture,p.dispose(),m.dispose()}catch{}},void 0,()=>{})}catch{}return{sun:s,hemi:r,skyMat:e,sky:i}}function ln(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new ge;let c=0;for(let h=0;h<n.length;++h){const d=n[h];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const d=[];for(let u=0;u<n.length;++u){const f=n[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=n[u].attributes.position.count}l.setIndex(d)}for(const h in r){const d=Gu(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){const f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][u]);const g=Gu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function Gu(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){const h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Me(o,e,i);let l=0;for(let c=0;c<n.length;++c){const h=n[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<e;g++){const v=h.getComponent(u,g);a.setComponent(u+d,g,v)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function cf(n,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count;let o=0;const a=Object.keys(n.attributes),l={},c={},h=[],d=["getX","getY","getZ","getW"],u=["setX","setY","setZ","setW"];for(let y=0,w=a.length;y<w;y++){const _=a[y],M=n.attributes[_];l[_]=new M.constructor(new M.array.constructor(M.count*M.itemSize),M.itemSize,M.normalized);const b=n.morphAttributes[_];b&&(c[_]||(c[_]=[]),b.forEach((R,x)=>{const S=new R.array.constructor(R.count*R.itemSize);c[_][x]=new R.constructor(S,R.itemSize,R.normalized)}))}const f=t*.5,g=Math.log10(1/t),v=Math.pow(10,g),p=f*v;for(let y=0;y<r;y++){const w=i?i.getX(y):y;let _="";for(let M=0,b=a.length;M<b;M++){const R=a[M],x=n.getAttribute(R),S=x.itemSize;for(let E=0;E<S;E++)_+=`${Math.trunc(x[d[E]](w)*v+p)},`}if(_ in e)h.push(e[_]);else{for(let M=0,b=a.length;M<b;M++){const R=a[M],x=n.getAttribute(R),S=n.morphAttributes[R],E=x.itemSize,T=l[R],C=c[R];for(let P=0;P<E;P++){const L=d[P],I=u[P];if(T[I](o,x[L](w)),S)for(let N=0,B=S.length;N<B;N++)C[N][I](o,S[N][L](w))}}e[_]=o,h.push(o),o++}}const m=n.clone();for(const y in n.attributes){const w=l[y];if(m.setAttribute(y,new w.constructor(w.array.slice(0,o*w.itemSize),w.itemSize,w.normalized)),y in c)for(let _=0;_<c[y].length;_++){const M=c[y][_];m.morphAttributes[y][_]=new M.constructor(M.array.slice(0,o*M.itemSize),M.itemSize,M.normalized)}}return m.setIndex(h),m}function Fn(n){let t=n>>>0||1;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const hf=L1,Hu=I1||{},uf={M:null};function df(n){uf.M=n}const Y1={tile:"roofTile",shoji:"paper"},ml={};function _n(n,t){const e=uf.M||hf;if(e&&e[n])return e[n];const i=Y1[n];return i&&e&&e[i]?e[i]:(ml[n]||(ml[n]=t()),ml[n])}const Vi=(n,t=.85,e=0)=>new pt({color:n,roughness:t,metalness:e}),Fi=()=>_n("woodDark",()=>Vi(4864552,.8)),Vu=()=>_n("woodNew",()=>Vi(9069112,.7)),Wu=()=>_n("woodAged",()=>Vi(7234136,.9)),Xu=()=>_n("plaster",()=>Vi(15261904,.95)),q1=()=>_n("tile",()=>Vi(3817286,.85)),ff=()=>_n("stone",()=>Vi(9276808,.95)),K1=()=>_n("glassDark",()=>new pt({color:1053980,roughness:.08,metalness:.9})),wr=()=>_n("iron",()=>Vi(2829102,.55,.8));function Ue(n,t,e,i,s,r,o,a,l=0,c=0,h=0){const d=new Dt(e,i,s),u=new ae().makeRotationFromEuler(new Mn(h,l,c));u.setPosition(r,o,a),d.applyMatrix4(u),(n[t]||(n[t]=[])).push(d)}function Yu(n,t,e,i,s,r,o=0,a=0,l=0){const c=new ae().makeRotationFromEuler(new Mn(o,a,l));c.setPosition(i,s,r),e.applyMatrix4(c),(n[t]||(n[t]=[])).push(e)}function Z1(n,t,e,{shadow:i=!0,noCast:s=null}={}){for(const r of Object.keys(t)){const o=ln(t[r],!1);t[r].forEach(l=>l.dispose());const a=new Q(o,e(r));a.castShadow=s&&s.has(r)?!1:i,a.receiveShadow=!0,n.add(a)}}function pf(n={}){const t=Fn(n.seed??7),e=n.w??6.5,i=n.d??6,s=n.wallH??3.1,r=Ze.degToRad(n.pitch??28+t()*8),o=n.roofType??(t()<.7?"kirizuma":"yosemune"),a=n.facadeCols??Math.max(3,Math.round(e/1.8)),l=n.age??t(),c=!!n.isShop,h=n.engawa??(t()<.6?.9:0),d=new Kt;d.name=n.name||"house";const u={},f=(n.woodTone??.5)>.6?"woodNew":"woodAged",g=W=>W==="WOOD"?_n(f,f==="woodNew"?Vu:Wu):W==="WOOD_D"?Fi():W==="IRON"||W==="IRNNC"?wr():W==="RIDGE"?_n("ridge",()=>Vi(3487549,.5,.1)):W==="PLAS"?hf.plasterTinted?.(n.plasterTone??15261904)??Xu():W==="STONE"?ff():Fi(),v=.55,p=.45,m=[],y=Math.max(3,Math.round(e/1.2)+1),w=Math.max(3,Math.round(i/1.2)+1);for(let W=0;W<y;W++)m.push([-e/2+e*W/(y-1),0,-i/2],[-e/2+e*W/(y-1),0,i/2]);for(let W=1;W<w-1;W++)m.push([-e/2,0,-i/2+i*W/(w-1)],[e/2,0,-i/2+i*W/(w-1)]);for(const[W,,st]of m)Ue(u,"STONE",v,p,v,W,p/2-.06,st,t()*.1);const _=p-.06;Ue(u,"WOOD_D",e+.3,.22,i+.3,0,_+.11,0);const M=.14,b=_+.22,R=b+s,x=n.winLayout??Array.from({length:a},()=>t()<.55?1:2),S=e/a;for(let W=0;W<a;W++){const st=-e/2+S*(W+.5),J=x[W%x.length],ft=(n.doorSide??0)!==0&&(n.doorSide<0&&W===0||n.doorSide>0&&W===a-1),gt=b+.55,Z=b+s-.75;J===0&&!ft?Ue(u,"PLAS",S-.16,s,M,st,b+s/2,i/2):ft?(Ue(u,"PLAS",S-.16,gt-b,M,st,(b+gt)/2,i/2),Ue(u,"PLAS",S-.16,R-(b+2.1),M,st,(R+b+2.1)/2,i/2)):(Ue(u,"PLAS",S-.16,gt-b,M,st,(b+gt)/2,i/2),Ue(u,"PLAS",S-.16,R-Z,M,st,(R+Z)/2,i/2),Ue(u,"PLAS",.14,Z-gt,M,st-(S-.16)/2+.07,(gt+Z)/2,i/2),Ue(u,"PLAS",.14,Z-gt,M,st+(S-.16)/2-.07,(gt+Z)/2,i/2))}Ue(u,"PLAS",e,s,M,0,b+s/2,-i/2),Ue(u,"PLAS",M,s,i,-e/2,b+s/2,0),Ue(u,"PLAS",M,s,i,e/2,b+s/2,0);for(let W=0;W<=a;W++){const st=-e/2+S*W;Ue(u,"WOOD_D",.14,s,.14,st,b+s/2,i/2+.02),Ue(u,"WOOD_D",.14,s,.14,st,b+s/2,-i/2-.02)}Ue(u,"WOOD_D",e+.24,.16,.18,0,R-.08,i/2+.02),Ue(u,"WOOD_D",e+.24,.12,.14,0,b+1.55,i/2+.03),Ue(u,"WOOD_D",e+.24,.2,.2,0,R+.02,-i/2-.02);for(let W=0;W<=a;W++){const st=-e/2+S*W;Ue(u,"WOOD_D",.12,.12,.5,st,R+.18,i/2+.25)}for(let W=0;W<a;W++){const st=-e/2+S*(W+.5);Ue(u,"WOOD_D",.22,.16,.3,st,R+.32,i/2+.32)}if(n.chains===!0){const W=Fn((n.seed??7)*7919+13);for(const st of[1,-1]){const J=st*(e/2-.35),ft=i/2+.5,gt=R+.42,Z=.32,tt=Math.max(8,Math.floor((gt-Z)/.09));for(let it=0;it<=tt;it++){const ct=gt-(gt-Z)*(it/tt),mt=(W()-.5)*.016,_t=(W()-.5)*.016,Mt=new rr(.035,.008,4,6);it%2?Yu(u,"IRNNC",Mt,J+mt,ct,ft+_t,0,Math.PI/2,0):Yu(u,"IRNNC",Mt,J+mt,ct,ft+_t,0,0,0)}Ue(u,"STONE",.34,.12,.34,J,.06,ft,W()*.2)}}const E=[],T=[],C=new Kt;for(let W=0;W<a;W++){const st=-e/2+S*(W+.5),J=x[W%x.length],ft=(n.doorSide??0)!==0&&(n.doorSide<0&&W===0||n.doorSide>0&&W===a-1),gt=b+.55,Z=b+s-.75,tt=S-.44,it=Z-gt;if(ft){Ue(u,"WOOD_D",.12,2.15,.14,st-tt/2-.01,b+1.075,i/2+.02),Ue(u,"WOOD_D",.12,2.15,.14,st+tt/2+.01,b+1.075,i/2+.02),Ue(u,"WOOD_D",tt+.26,.14,.14,st,b+2.15,i/2+.02),Ue(u,"WOOD_D",tt+.1,.07,.16,st,b+.035,i/2+.02);const mt=new Q(new Dt(tt/2-.03,2,.05),_n("woodAged",Wu));mt.position.set(st-tt/4,b+1,i/2+.06),C.add(mt);const _t=mt.clone();_t.position.x=st+tt/4,C.add(_t),T.push({node:mt,open:st-tt/4-(tt/2-.02)},{node:_t,open:st+tt/4+(tt/2-.02)});const Mt=new me(.02,.02,.16,6);for(const xt of[st-.08,st+.08]){const Ut=new Q(Mt,wr());Ut.position.set(xt,b+1,i/2+.1),C.add(Ut)}if(c){const xt=new Q(new Dt(tt,.5,.03),_n("noren",()=>new pt({color:2899555,roughness:.9})));xt.position.set(st,b+2.35,i/2+.12),xt.castShadow=!0,C.add(xt)}continue}if(J===0)continue;const ct=new Q(new Dt(tt+.1,it+.1,.09),Fi());if(ct.position.set(st,(gt+Z)/2,i/2+.01),C.add(ct),J===1){const mt=new pt({color:15985881,roughness:.9,emissive:16762995,emissiveIntensity:0});E.push(mt);const _t=new Q(new Ae(tt,it),mt);_t.position.set(st,(gt+Z)/2,i/2+.072),C.add(_t);const Mt=Fi(),xt=4,Ut=3;for(let z=1;z<xt;z++){const jt=new Q(new Dt(.045,it,.03),Mt);jt.position.set(st-tt/2+tt*z/xt,(gt+Z)/2,i/2+.08),C.add(jt)}for(let z=1;z<Ut;z++){const jt=new Q(new Dt(tt,.045,.03),Mt);jt.position.set(st,gt+it*z/Ut,i/2+.08),C.add(jt)}}else{const mt=new Q(new Ae(tt,it),K1());mt.position.set(st,(gt+Z)/2,i/2+.068),C.add(mt);const _t=Fi();for(let xt=0;xt<=5;xt++){const Ut=new Q(new Dt(.05,it,.04),_t);Ut.position.set(st-tt/2+tt*xt/5,(gt+Z)/2,i/2+.075),C.add(Ut)}const Mt=new Q(new Dt(tt,.06,.04),_t);Mt.position.set(st,(gt+Z)/2,i/2+.075),C.add(Mt)}}if(C.traverse(W=>{W.isMesh&&(W.castShadow=!1,W.receiveShadow=!0)}),d.add(C),h>0){Ue(u,"WOOD",e*.95,.12,h,0,b+.12,i/2+h/2+.05);for(let W=0;W<=Math.round(e*.95/1.1);W++){const st=-e*.95/2+e*.95*W/Math.round(e*.95/1.1);Ue(u,"STONE",.3,.3,.3,st,.1,i/2+h+.02)}for(let W=0;W<=6;W++){const st=-e*.9/2+e*.9*W/6;Ue(u,"WOOD_D",.09,.7,.09,st,b+.5,i/2+h)}Ue(u,"WOOD_D",e*.9,.08,.1,0,b+.85,i/2+h)}{const W=new Kt,st=new Q(new Dt(e-.4,.08,i-.4),_n("woodNew",Vu));st.position.y=b+.04,st.receiveShadow=!0,W.add(st);const J=new Q(new Ae(e-.4,s-.3),new pt({color:10127984,roughness:1}));J.position.set(0,b+s/2,-i/2+.25),W.add(J);const ft=new Q(new Dt(1.7,.03,.9),new pt({color:10133611,roughness:1}));ft.position.set(-.6,b+.1,.3),W.add(ft);const gt=ft.clone();gt.position.x=1.2,W.add(gt);const Z=new Q(new Dt(1.1,.32,.6),Fi());Z.position.set(.2,b+.24,.3),W.add(Z);const tt=new pt({color:4469538,emissive:16757854,emissiveIntensity:0});E.push(tt);const it=new Q(new xn(.09,10,8),tt);it.position.set(.2,b+s-.6,.3),W.add(it);const ct=new Q(new me(.008,.008,.7),wr());ct.position.set(.2,b+s-.25,.3),W.add(ct),W.traverse(mt=>{mt.isMesh&&(mt.castShadow=!1,mt.receiveShadow=!0)}),d.add(W)}Z1(d,u,g,{shadow:!0,noCast:new Set(["IRNNC"])});const P=new Kt,L=Math.tan(r)*(i/2+.9),I=R+.35,N=Math.hypot(i/2+.9,L)+.35,B=_n("tile",q1),G=_n("ridge",()=>new pt({color:3487549,roughness:.5,metalness:.1})),U=new pt({color:4010535,roughness:.95}),k=new Dt(.3,.07,.36),X=[],dt=[];for(const W of[1,-1]){const st=new Dt(e+1.6,.12,N),J=W*(i/4+.22),ft=I+L/2;st.applyMatrix4(new ae().makeRotationX(W>0?r:-r)),st.translate(0,ft,J),dt.push(st);const gt=new Dt(e+1.5,.04,N*.98);gt.applyMatrix4(new ae().makeRotationX(W>0?r:-r)),gt.translate(0,ft-.09,J);const Z=new Q(ln([gt],!1),U);Z.receiveShadow=!0,P.add(Z);const tt=Math.floor(N/.34),it=Math.floor((e+1.4)/.32);for(let ct=0;ct<tt;ct++)for(let mt=0;mt<it;mt++){const _t=-((it-1)*.32)/2+mt*.32+(t()-.5)*.015,Mt=-N/2+.2+ct*.34,xt=new O(_t,.1+(t()-.5)*.012,Mt).applyEuler(new Mn(W>0?r:-r,0,0));X.push({p:[xt.x,xt.y+ft,xt.z+J],ry:(t()-.5)*.03,tone:.8+t()*.4})}}const yt=new Q(ln(dt,!1),new pt({color:2894896,roughness:.9}));yt.castShadow=!0,P.add(yt);const wt=new ye(k,B.clone(),X.length);{const W=new ne,st=new Nt;X.forEach((J,ft)=>{W.position.set(...J.p),W.rotation.set(0,J.ry,0),W.updateMatrix(),wt.setMatrixAt(ft,W.matrix);const gt=J.tone*(1-l*.25);wt.setColorAt(ft,st.setRGB(.32*gt+.1,.34*gt+.1,.38*gt+.12))}),wt.instanceMatrix.needsUpdate=!0,wt.instanceColor&&(wt.instanceColor.needsUpdate=!0)}wt.castShadow=!0,wt.receiveShadow=!0,P.add(wt);const bt=new me(.14,.14,.46,8,1,!1,0,Math.PI);bt.rotateZ(Math.PI/2);const Qt=Math.ceil((e+1.4)/.5);for(let W=0;W<Qt;W++){const st=new Q(bt,G);st.position.set(-(e+1.2)/2+.25+W*.5,I+L+.02,0),st.castShadow=!0,P.add(st)}const j=new $r;j.moveTo(-i/2,0),j.lineTo(i/2,0),j.lineTo(0,L),j.closePath();const nt=new nh(j,{depth:.12,bevelEnabled:!1});nt.rotateY(Math.PI/2);for(const W of[e/2-.02,-e/2-.1]){const st=new Q(nt,Xu());st.position.set(W,R+.3,0),st.castShadow=!0,P.add(st)}if(o==="yosemune")for(const W of[1,-1]){const st=new Q(new Dt(.14,N*.55,(i/2+.9)*1.02),yt.material);st.position.set(W*(e/2+.55),I+L*.45,0),st.rotation.z=W*.62,st.castShadow=!0,P.add(st)}if(o!=="yosemune"){const W=[];for(const J of[1,-1])for(const ft of[1,-1]){const gt=new Dt(.16,.09,N+.15);gt.applyMatrix4(new ae().makeRotationX(ft>0?r:-r)),gt.translate(J*(e/2+.78),I+L/2+.13,ft*(i/4+.22)),W.push(gt)}const st=new Q(ln(W,!1),Fi());st.castShadow=!0,st.receiveShadow=!0,P.add(st)}if(d.add(P),l>.15){const W=new Q(new Dt(e+.05,.5*l+.15,i+.05),new pt({color:3814700,roughness:1,transparent:!0,opacity:.25+l*.3,depthWrite:!1}));W.position.y=b+.25,W.renderOrder=2,d.add(W)}return d.traverse(W=>{W.isMesh&&W.material?.isMeshStandardMaterial&&Hu.registerWet&&Hu.registerWet(W.material)}),{group:d,glowMats:E,sliders:T,dims:{w:e,d:i,wallH:s},roofTopY:I+L}}function J1(n,t={}){if(!n||n.userData._upgraded)return n;n.userData._upgraded=!0;const e=new Kt;e.name="hero_joinery_upgrade";const i=Fi(),s=wr(),r=(v,p,m,y,w,_)=>{const M=new Q(new Dt(v,p,m),i);return M.position.set(y,w,_),M.castShadow=!0,M.receiveShadow=!0,e.add(M),M},o=new Hi().setFromObject(n),a=o.max.x-o.min.x||9,l=o.max.z-o.min.z||7,c=(o.max.x+o.min.x)/2-n.position.x,h=(o.max.z+o.min.z)/2-n.position.z,d=ff();for(let v=-a/2;v<=a/2+.01;v+=1.15)for(const p of[-l/2-.15,l/2+.15]){const m=new Q(new Dt(.5,.4,.5),d);m.position.set(c+v,.14,h+p),m.receiveShadow=!0,m.castShadow=!1,e.add(m)}r(a*.98,.12,.1,c,t.nageshiY??2,h+l/2+.08);for(let v=-a/2+.8;v<a/2;v+=1.6)r(.24,.18,.3,c+v,t.eaveY??3.35,h+l/2+.3);{const v=[],p=(t.eaveY??3.35)+.4,m=.3,y=Math.max(8,Math.floor((p-m)/.09));for(const _ of[c-a/2+.35,c+a/2-.35]){const M=h+l/2+.5;for(let b=0;b<=y;b++){const R=new rr(.035,.008,4,6),x=new ae().makeRotationFromEuler(new Mn(0,b%2?Math.PI/2:0,0));x.setPosition(_,p-(p-m)*(b/y),M),R.applyMatrix4(x),v.push(R)}}const w=new Q(ln(v,!1),s);v.forEach(_=>_.dispose()),w.castShadow=!1,w.receiveShadow=!0,e.add(w)}const u=new me(.025,.025,.2,6);for(const v of[-.12,.12]){const p=new Q(u,s);p.position.set(c+(t.doorX??-2.2)+v,1.25,h+l/2+.12),e.add(p)}const f=new pt({color:4469538,emissive:16757854,emissiveIntensity:0}),g=new Q(new xn(.1,10,8),f);return g.position.set(c,2.6,h),e.add(g),n.userData.glowMats=[...n.userData.glowMats||[],f],n.add(e),n}const Hn={strength:.45,gust(n){return this.strength*(.65+.35*Math.sin(n*.6)*Math.sin(n*.23+1.7))}},$1=["clear","windy","rainy","misty","snow"];function Q1({scene:n,pondWaterMats:t=[],wetMats:e=[],heightFn:i=null,snowMats:s=[],dripPoints:r=[],basins:o=[]}={}){const a=Fn(777),l=Fn(778),c=new Kt;c.name="weather",n?.add(c);let h="clear",d="clear",u=1,f=0,g=0;const v=typeof i=="function"?i:()=>0,p=Array.isArray(s)?s:[],m=800,y=new Float32Array(m*3);for(let J=0;J<m;J++)y[J*3]=(a()-.5)*60,y[J*3+1]=a()*18,y[J*3+2]=(a()-.5)*60;const w=new ge;w.setAttribute("position",new Me(y,3));const _=new os({color:11452368,size:.14,transparent:!0,opacity:0,depthWrite:!1}),M=new Js(w,_);M.frustumCulled=!1,c.add(M);const b=new Bn({color:13623530,transparent:!0,opacity:0,depthWrite:!1,side:Oe}),R=[],x=new ih(.05,.09,12);for(let J=0;J<40;J++){const ft=new Q(x,b.clone());ft.rotation.x=-Math.PI/2;const gt=(a()-.5)*50,Z=(a()-.5)*50;let tt=.06;try{const it=v(gt,Z);Number.isFinite(it)&&(tt=it+.03)}catch{}ft.position.set(gt,tt,Z),ft.userData.ph=a(),c.add(ft),R.push(ft)}const S=new pt({color:2106924,roughness:.05,metalness:.7,transparent:!0,opacity:0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),E=[];for(const J of r){const ft=.3+l()*.15,gt=new Zn(ft,14);gt.rotateX(-Math.PI/2);let Z=.045;try{const tt=v(J.x,J.z);Number.isFinite(tt)&&(Z=tt+.025)}catch{}gt.translate(J.x,Z,J.z),E.push(gt)}if(E.length){const J=ln(E,!1);E.forEach(gt=>gt.dispose());const ft=new Q(J,S);c.add(ft)}const T=[];for(const[J,ft,gt]of o){const Z=new Q(new Zn(gt,20),S);Z.rotation.x=-Math.PI/2,Z.position.set(J,.045,ft),c.add(Z),T.push(Z)}const P=r.length*8,L=new Float32Array(Math.max(1,P)*3),I=new Float32Array(Math.max(1,P));for(let J=0;J<P;J++){const ft=r[J%Math.max(1,r.length)]||{x:0,z:0,top:4};L[J*3]=ft.x,L[J*3+1]=ft.top,L[J*3+2]=ft.z,I[J]=l()}const N=new ge;N.setAttribute("position",new Me(L,3));const B=new os({color:13623530,size:.09,transparent:!0,opacity:0,depthWrite:!1}),G=new Js(N,B);G.frustumCulled=!1,c.add(G);const U=500,k=26,X=60,dt=new Float32Array(U*3),yt=new Float32Array(U),wt=new Float32Array(U);for(let J=0;J<U;J++)dt[J*3]=(a()-.5)*X,dt[J*3+1]=a()*k,dt[J*3+2]=(a()-.5)*X,yt[J]=.6+a()*.6,wt[J]=a()*Math.PI*2;const bt=new ge;bt.setAttribute("position",new Me(dt,3));const Qt=(()=>{const J=document.createElement("canvas");J.width=32,J.height=32;const ft=J.getContext("2d"),gt=ft.createRadialGradient(16,16,1,16,16,15);gt.addColorStop(0,"rgba(255,255,255,1)"),gt.addColorStop(.6,"rgba(255,255,255,0.8)"),gt.addColorStop(1,"rgba(255,255,255,0)"),ft.fillStyle=gt,ft.fillRect(0,0,32,32);const Z=new En(J);return Z.colorSpace=ke,Z})(),j=new os({map:Qt,size:.16,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0,color:15922681}),nt=new Js(bt,j);nt.frustumCulled=!1,nt.visible=!1,n?.add(nt);const W=new Nt(15265266);for(const J of p)!J||!J.color||J.userData._snowSeeded||(J.userData._snowSeeded=!0,J.userData._dryColor=J.color.clone(),J.userData._dryRough="roughness"in J?J.roughness:1);const st={get state(){return u>=1?d:`${h}>${d}`},get wetness(){return f},setState(J){$1.includes(J)&&J!==d&&(h=u>=1?d:h,d=J,u=0)},update(J,ft){u=Math.min(1,u+J/3);const gt=u*u*(3-2*u),Z=d==="rainy",tt=d==="snow",it=(Z?gt:1-gt)*(d==="rainy"?1:0)+(h==="rainy"&&d!=="rainy"?1-gt:0);g+=((d==="snow"?gt:h==="snow"?1-gt:0)-g)*Math.min(1,J*.8);const ct=d==="windy"?1.2:d==="rainy"?.8:d==="misty"?.15:d==="snow"?.55:.45;if(Hn.strength+=(ct*(d==="windy"?1:gt||1)-Hn.strength)*Math.min(1,J*1.2),d==="windy"&&(Hn.strength+=(1.2-Hn.strength)*Math.min(1,J)),_.opacity=it*.75,_.opacity>.01){const _t=w.attributes.position.array,Mt=Hn.gust(ft)*3.2;for(let xt=0;xt<m;xt++)_t[xt*3+1]-=J*11,_t[xt*3]+=Mt*J,_t[xt*3+1]<0&&(_t[xt*3+1]=15+a()*3,_t[xt*3]=(a()-.5)*60,_t[xt*3+2]=(a()-.5)*60);w.attributes.position.needsUpdate=!0;for(const xt of R){xt.material.opacity=it*.6;const Ut=(ft*1.4+xt.userData.ph*7)%1;xt.scale.setScalar(.5+Ut*2.2),xt.material.opacity=it*.6*(1-Ut)}}else for(const _t of R)_t.material.opacity=0;f+=((d==="rainy"?gt:d==="rainy"?1:h==="rainy"?1-gt:0)-f)*Math.min(1,J*.8);for(const _t of e)_t?.userData?._dry||(_t.userData._dry={r:_t.roughness??.85,e:_t.envMapIntensity??1,c:_t.color?_t.color.clone():null}),_t.roughness=Ze.lerp(_t.userData._dry.r,Math.min(.25,_t.userData._dry.r*.4),f),_t.envMapIntensity=Ze.lerp(_t.userData._dry.e,_t.userData._dry.e+.9,f),_t.userData._dry.c&&_t.color&&_t.color.copy(_t.userData._dry.c).multiplyScalar(Ze.lerp(1,.55,f));S.opacity=f*.8;const mt=.3+.7*f;for(const _t of T)_t.scale.set(mt,mt,1);if(B.opacity=it*.85,B.opacity>.01&&r.length){const _t=N.attributes.position.array,Mt=Hn.gust(ft)*.9;for(let xt=0;xt<P;xt++){const Ut=r[xt%r.length],z=(ft*2.2+I[xt]*7)%1;_t[xt*3]=Ut.x+Mt*z*.4,_t[xt*3+1]=Ut.top-z*(Ut.top-.1),_t[xt*3+2]=Ut.z}N.attributes.position.needsUpdate=!0}for(const _t of t)_t.roughness=Ze.lerp(.18,.05,f);if(nt.visible=g>.01,j.opacity=.9*g,nt.visible){const Mt=Hn.gust(ft)*(1.2+g*1);for(let xt=0;xt<U;xt++){let Ut=dt[xt*3+1]-yt[xt]*J,z=dt[xt*3]+(Mt+Math.sin(ft*1.3+wt[xt])*.25)*J;const jt=dt[xt*3+2]+Math.cos(ft*1.1+wt[xt])*.2*J;Ut<=v(z,jt)+.03&&(Ut=k*(.85+.15*Math.sin(wt[xt]+ft*.05)),z=(wt[xt]*97.31%1+1)%1*X-X/2),dt[xt*3]=z,dt[xt*3+1]=Ut,dt[xt*3+2]=jt}bt.attributes.position.needsUpdate=!0}if(p.length){const _t=g*.7;for(const Mt of p)!Mt||!Mt.color||!Mt.userData._snowSeeded||(Mt.color.copy(Mt.userData._dryColor).lerp(W,_t),"roughness"in Mt&&g>.001&&(Mt.roughness=Mt.userData._dryRough+(.9-Mt.userData._dryRough)*g*.85))}st.rainK=it,st.mistK=d==="misty"?gt:h==="misty"?1-gt:0,st.dimK=(Z?gt*.55:0)+(tt?gt*.3:0),st.snowK=g,st.fogK=Math.max(st.mistK,g*.6)},rainK:0,mistK:0,dimK:0,snowK:0,fogK:0};return st}function j1(n,t={}){const e=new Kt,i=Ai(999),s=Array.isArray(t.leafSources)?t.leafSources:null;function r(_){if(!s||!s.length)return null;const M=s[_%s.length],R=(_*2654435761%1e3+1e3)%1e3/1e3*Math.PI*2+_%7*.13,x=(M.r||2.2)*(.35+.65*((_*40503%1e3+1e3)%1e3/1e3));return{x:M.x+Math.cos(R)*x,z:M.z+Math.sin(R)*x}}const o=170,a=new ge,l=new Float32Array(o*3),c=new Float32Array(o);for(let _=0;_<o;_++)l[_*3]=-22+i()*44,l[_*3+1]=.3+i()*6,l[_*3+2]=-14+i()*30,c[_]=i()*100;a.setAttribute("position",new Me(l,3));const h=(()=>{const _=document.createElement("canvas");_.width=_.height=32;const M=_.getContext("2d"),b=M.createRadialGradient(16,16,1,16,16,15);return b.addColorStop(0,"rgba(255,240,214,1)"),b.addColorStop(1,"rgba(255,240,214,0)"),M.fillStyle=b,M.fillRect(0,0,32,32),new En(_)})(),d=new Js(a,new os({map:h,size:.09,transparent:!0,opacity:.55,depthWrite:!1,color:16771264,sizeAttenuation:!0}));e.add(d);const u=40,f=new Ae(.17,.17),g=new ye(f,n.mapleLeaf,u);g.castShadow=!1,g.receiveShadow=!1,g.frustumCulled=!1;const v=[],p=new Nt,m=[12597547,13849600,15105570,11088422];for(let _=0;_<u;_++){const M=r(_);v.push({bx:M?M.x:-6+(i()-.5)*30,bz:M?M.z:2+(i()-.5)*26,speed:.35+i()*.4,phase:i()*6.28,sway:.4+i()*.7,spin:1+i()*2}),p.setHex(m[Math.floor(i()*m.length)]),g.setColorAt(_,p)}g.instanceColor.needsUpdate=!0,e.add(g);const y=new ne;function w(_){const M=.5+Hn.gust(_),b=a.attributes.position;for(let R=0;R<o;R++){const x=c[R];b.array[R*3]+=Math.sin(_*.3+x)*.0012*(.5+M),b.array[R*3+1]+=(.0016+Math.sin(_*.5+x*2)*8e-4)*(.5+M),b.array[R*3+1]>6.5&&(b.array[R*3+1]=.2)}b.needsUpdate=!0;for(let R=0;R<u;R++){const x=v[R];let E=4.8-(_*x.speed*(.6+M)+x.phase)%4.6;const T=x.bx+Math.sin(_*.9+x.phase)*x.sway*(.6+M),C=x.bz+Math.cos(_*.7+x.phase*1.3)*x.sway*.7;y.position.set(T,E,C),y.rotation.set(_*x.spin+x.phase,x.phase,_*x.spin*.7),y.scale.setScalar(1),y.updateMatrix(),g.setMatrixAt(R,y.matrix)}g.instanceMatrix.needsUpdate=!0}return w(.01),{group:e,update:w}}const qu={type:"change"},uh={type:"start"},mf={type:"end"},Oo=new va,Ku=new vi,ty=Math.cos(70*Ze.DEG2RAD),Ke=new O,Sn=2*Math.PI,De={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},gl=1e-6;class ey extends ym{constructor(t,e=null){super(t,e),this.state=De.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ys.ROTATE,MIDDLE:Ys.DOLLY,RIGHT:Ys.PAN},this.touches={ONE:Vs.ROTATE,TWO:Vs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new Kn,this._lastTargetPosition=new O,this._quat=new Kn().setFromUnitVectors(t.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new gu,this._sphericalDelta=new gu,this._scale=1,this._panOffset=new O,this._rotateStart=new ut,this._rotateEnd=new ut,this._rotateDelta=new ut,this._panStart=new ut,this._panEnd=new ut,this._panDelta=new ut,this._dollyStart=new ut,this._dollyEnd=new ut,this._dollyDelta=new ut,this._dollyDirection=new O,this._mouse=new ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=iy.bind(this),this._onPointerDown=ny.bind(this),this._onPointerUp=sy.bind(this),this._onContextMenu=uy.bind(this),this._onMouseWheel=ay.bind(this),this._onKeyDown=ly.bind(this),this._onTouchStart=cy.bind(this),this._onTouchMove=hy.bind(this),this._onMouseDown=ry.bind(this),this._onMouseMove=oy.bind(this),this._interceptControlDown=dy.bind(this),this._interceptControlUp=fy.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=De.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(qu),this.update(),this.state=De.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Ke.copy(e).sub(this.target),Ke.applyQuaternion(this._quat),this._spherical.setFromVector3(Ke),this.autoRotate&&this.state===De.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Sn:i>Math.PI&&(i-=Sn),s<-Math.PI?s+=Sn:s>Math.PI&&(s-=Sn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ke.setFromSpherical(this._spherical),Ke.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ke),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ke.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new O(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ke.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Oo.origin.copy(this.object.position),Oo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Oo.direction))<ty?this.object.lookAt(this.target):(Ku.setFromNormalAndCoplanarPoint(this.object.up,this.target),Oo.intersectPlane(Ku,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>gl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>gl||this._lastTargetPosition.distanceToSquared(this.target)>gl?(this.dispatchEvent(qu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Sn/60*this.autoRotateSpeed*t:Sn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ke.setFromMatrixColumn(e,0),Ke.multiplyScalar(-t),this._panOffset.add(Ke)}_panUp(t,e){this.screenSpacePanning===!0?Ke.setFromMatrixColumn(e,1):(Ke.setFromMatrixColumn(e,0),Ke.crossVectors(this.object.up,Ke)),Ke.multiplyScalar(t),this._panOffset.add(Ke)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ke.copy(s).sub(this.target);let r=Ke.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ut,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function ny(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function iy(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function sy(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(mf),this.state=De.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function ry(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ys.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=De.DOLLY;break;case Ys.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=De.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=De.ROTATE}break;case Ys.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=De.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=De.PAN}break;default:this.state=De.NONE}this.state!==De.NONE&&this.dispatchEvent(uh)}function oy(n){switch(this.state){case De.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case De.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case De.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function ay(n){this.enabled===!1||this.enableZoom===!1||this.state!==De.NONE||(n.preventDefault(),this.dispatchEvent(uh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(mf))}function ly(n){this.enabled!==!1&&this._handleKeyDown(n)}function cy(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Vs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=De.TOUCH_ROTATE;break;case Vs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=De.TOUCH_PAN;break;default:this.state=De.NONE}break;case 2:switch(this.touches.TWO){case Vs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=De.TOUCH_DOLLY_PAN;break;case Vs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=De.TOUCH_DOLLY_ROTATE;break;default:this.state=De.NONE}break;default:this.state=De.NONE}this.state!==De.NONE&&this.dispatchEvent(uh)}function hy(n){switch(this._trackPointer(n),this.state){case De.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case De.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case De.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case De.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=De.NONE}}function uy(n){this.enabled!==!1&&n.preventDefault()}function dy(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fy(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function py(n){const t=new wn(45,window.innerWidth/window.innerHeight,.3,500);t.position.set(12.5,7,15.5);const e=new ey(t,n.domElement);e.target.set(0,2.2,1),e.enableDamping=!0,e.dampingFactor=.06,e.minDistance=5,e.maxDistance=48,e.maxPolarAngle=1.45,e.update();function i(){t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)}return window.addEventListener("resize",i),{camera:t,controls:e,onResize:i}}const my=20260911,zi=[{name:"hero",cx:0,cz:-1,w:9,d:7,kind:"hero"},{name:"A",cx:-10.5,cz:-1,w:6.5,d:6,kind:"home"},{name:"B",cx:9.8,cz:-.5,w:6,d:6.5,kind:"home"},{name:"shop1",cx:14,cz:13.5,w:7,d:5,kind:"shop"},{name:"shop2",cx:-13,cz:13.5,w:6.5,d:5,kind:"shop"},{name:"C",cx:-9,cz:-12,w:7,d:6,kind:"home"},{name:"D",cx:2,cz:-12.5,w:6.5,d:6,kind:"home"},{name:"E",cx:11.5,cz:-12,w:6,d:5.5,kind:"home"},{name:"F",cx:-19,cz:-3,w:5.5,d:6,kind:"home"},{name:"G",cx:-6,cz:21,w:6,d:5,kind:"home"},{name:"shed1",cx:19.5,cz:-4,w:3,d:2.5,kind:"shed"},{name:"shed2",cx:-20.5,cz:8,w:2.8,d:2.5,kind:"shed"}],gy={A:{seed:11,w:6.5,d:6,wallH:2.9,roofType:"kirizuma",pitch:30,facadeCols:4,doorSide:-1,engawa:.9,woodTone:.3,age:.7,chains:!0},B:{seed:22,w:6,d:6.5,wallH:3.3,roofType:"yosemune",pitch:32,facadeCols:3,doorSide:1,engawa:0,woodTone:.8,age:.2,chains:!0},shop1:{seed:33,w:7,d:5,wallH:3.4,roofType:"kirizuma",pitch:26,facadeCols:4,doorSide:0,engawa:1.4,woodTone:.6,age:.35,isShop:!0,chains:!0},shop2:{seed:44,w:6.5,d:5,wallH:3.2,roofType:"kirizuma",pitch:27,facadeCols:4,doorSide:0,engawa:1.2,woodTone:.4,age:.55,isShop:!0,chains:!0},C:{seed:55,w:7,d:6,wallH:3,roofType:"yosemune",pitch:31,facadeCols:4,doorSide:1,engawa:.9,woodTone:.5,age:.5},D:{seed:66,w:6.5,d:6,wallH:3.5,roofType:"kirizuma",pitch:33,facadeCols:3,doorSide:-1,engawa:0,woodTone:.75,age:.25},E:{seed:77,w:6,d:5.5,wallH:2.8,roofType:"kirizuma",pitch:29,facadeCols:3,doorSide:1,engawa:.8,woodTone:.35,age:.65},F:{seed:88,w:5.5,d:6,wallH:2.9,roofType:"yosemune",pitch:30,facadeCols:3,doorSide:-1,engawa:0,woodTone:.45,age:.6},G:{seed:99,w:6,d:5,wallH:3.1,roofType:"kirizuma",pitch:28,facadeCols:3,doorSide:1,engawa:.9,woodTone:.65,age:.3},shed1:{seed:111,w:3,d:2.5,wallH:2.2,roofType:"kirizuma",pitch:24,facadeCols:2,doorSide:0,engawa:0,woodTone:.2,age:.9,winLayout:[0,0]},shed2:{seed:122,w:2.8,d:2.5,wallH:2.1,roofType:"kirizuma",pitch:25,facadeCols:2,doorSide:0,engawa:0,woodTone:.25,age:.85,winLayout:[0,0]}};function _y(){for(let n=0;n<zi.length;n++)for(let t=n+1;t<zi.length;t++){const e=zi[n],i=zi[t],s=(e.w+i.w)/2+1-Math.abs(e.cx-i.cx),r=(e.d+i.d)/2+1-Math.abs(e.cz-i.cz);s>0&&r>0&&console.error(`[town] OVERLAP ${e.name}×${i.name} by ${s.toFixed(2)}×${r.toFixed(2)}m`)}}function xy(){const n=[[0,2.45,19,.55],[-8.5,.6,.55,4.2],[8.9,.6,.55,4.2],[.25,-5.05,6.4,.55],[-3.9,3.55,1.6,.7],[3.1,3.55,1.6,.7]],t=[],e=[];n.forEach(([r,o,a,l],c)=>{const h=new Ae(a,l);h.rotateX(-Math.PI/2),h.translate(r,.04,o),(c<4?t:e).push(h)});const i=new pt({color:3812896,roughness:1,metalness:0});i.polygonOffset=!0,i.polygonOffsetFactor=-1,i.polygonOffsetUnits=-1;const s=new Kt;for(const r of[t,e]){const o=ln(r,!1);r.forEach(a=>a.dispose()),s.add(new Q(o,i))}return s.traverse(r=>{r.isMesh&&(r.receiveShadow=!0)}),s}function vy({scene:n,heroGroup:t=null}={}){_y();const e=Fn(my),i=new Kt;i.name="town";const s=[];for(const g of zi){if(g.kind==="hero"){t&&(t.position.set(g.cx,0,g.cz),i.add(t),s.push({name:"hero",group:t,glowMats:t.userData.glowMats||[],pos:t.position.clone()}));continue}const v={...gy[g.name],name:g.name},p=pf(v);p.group.position.set(g.cx,0,g.cz),g.kind==="shop"&&(p.group.rotation.y=Math.PI),i.add(p.group),s.push({name:g.name,params:v,group:p.group,glowMats:p.glowMats,sliders:p.sliders||[],pos:p.group.position.clone()})}const r=yy(),o=new Kt;o.name="ground_zoning";const a=new Q(new Ae(70,70),r.soil);a.rotation.x=-Math.PI/2,a.receiveShadow=!0,o.add(a);const l=(g,v,p,m,y,w=.02)=>{const _=new Q(new Ae(g,v),y);_.rotation.x=-Math.PI/2,_.position.set(p,w,m),_.receiveShadow=!0,o.add(_)};l(64,3,0,7,r.street),l(2,15,-5.9,-1.7,r.dirt),l(1.1,14.5,-5.9,-1.7,r.stonePath,.03),l(30,2,1,-7.5,r.dirt),l(26,2,-2,17.5,r.dirt),l(10,3.2,0,3.9,r.garden,.015),l(8,3,14,9.8,r.gravel,.015),l(7.5,3,-13,9.8,r.gravel,.015);{const g=new Dt(.5,.18,.3),v=64,p=new ye(g,r.edging,v*2),m=new ne;let y=0;for(let w=0;w<v;w++)for(const _ of[5.35,8.65])m.position.set(-32+w*1+(e()-.5)*.05,.09,_),m.rotation.y=(e()-.5)*.06,m.updateMatrix(),p.setMatrixAt(y++,m.matrix);p.count=y,p.receiveShadow=!0,o.add(p)}i.add(o),i.add(Sy(e)),i.add(wy(e)),i.add(xy()),i.add(by()),i.add(Ey(e)),n&&n.add(i);const c=[[-2.5,9.3],[8.5,9.3],[19.5,9],[-15.5,9.3],[-15,-6.8]],h=[];for(const[g,v]of c){let p=null,m=1/0;for(const M of s){const b=zi.find(E=>E.name===M.name);if(!b)continue;const R=g-M.pos.x,x=v-M.pos.z,S=R*R+x*x;S<m&&(m=S,p={h:M,L:b})}if(!p||m>400)continue;const y=p.h.pos.x+Math.max(-p.L.w/2+.3,Math.min(p.L.w/2-.3,g-p.h.pos.x)),w=p.h.pos.z+Math.max(-p.L.d/2+.3,Math.min(p.L.d/2-.3,v-p.h.pos.z)),_=.6+(p.h.params?.wallH??3);h.push({a:[g,5.9,v],b:[y,_,w]})}const d=[],u={hero:{x:0,z:-1,w:9,d:7,rot:0,top:4.1},A:{x:-10.5,z:-1,w:6.5,d:6,rot:0,top:3.9},B:{x:9.8,z:-.5,w:6,d:6.5,rot:0,top:4.3},shop1:{x:14,z:13.5,w:7,d:5,rot:Math.PI,top:4.4},shop2:{x:-13,z:13.5,w:6.5,d:5,rot:Math.PI,top:4.2}};for(const g of Object.keys(u)){const v=u[g];for(const p of[1,-1]){const m=p*(v.w/2-.35),y=v.d/2+.5,w=v.rot===0?v.x+m:v.x-m,_=v.rot===0?v.z+y:v.z-y;d.push({x:w,z:_,top:v.top})}}return{group:i,houses:s,serviceDrops:h,dripPoints:d,basins:[[-5.9,8.2,1.3],[10.5,8.2,1.2],[.5,9.7,1]],lampPositions:[[-4.2,8.9],[6.5,8.9],[15.5,8.9],[-13.5,8.9],[-5,-6.5],[8,-6.5],[-6.4,1.5]],polePositions:c}}function yy(){const n=(e,i=.95)=>new pt({color:e,roughness:i}),t={soil:n(6050117),street:n(9407101,.9),dirt:n(7824462),stonePath:n(10132116),garden:n(6253386,1),gravel:n(10525320),edging:n(8224120)};for(const[e,i]of Object.entries(t))e!=="edging"&&(i.map=My(e),i.needsUpdate=!0);return t}const _l={};function My(n){if(_l[n])return _l[n];let t=0;for(const a of n)t=t*31+a.charCodeAt(0)>>>0;const e=(()=>{let a=t||1;return()=>{a|=0,a=a+1831565813|0;let l=Math.imul(a^a>>>15,1|a);return l=l+Math.imul(l^l>>>7,61|l)^l,((l^l>>>14)>>>0)/4294967296}})(),i=128,s=document.createElement("canvas");s.width=s.height=i;const r=s.getContext("2d");r.fillStyle="#ffffff",r.fillRect(0,0,i,i);for(let a=0;a<900;a++){const l=205+Math.floor(e()*50);r.fillStyle=`rgb(${l},${l},${l})`,r.globalAlpha=.5,r.fillRect(e()*i,e()*i,1+e()*2.5,1+e()*2.5)}const o=new En(s);return o.wrapS=o.wrapT=On,o.repeat.set(8,8),o.colorSpace=ke,_l[n]=o,o}function Sy(n,t){const e=new Kt;e.name="stone_walls";const i=[[-16.5,2.8,-7.5,2.8,1.1],[5,2.8,12.5,2.8,1.1],[-13.5,-8.6,-4.5,-8.6,1],[8,18.2,-2.5,18.2,1],[17.8,11.5,21.5,11.5,1.2]],s=new Dt(.55,.32,.4),r=new pt({color:9145222,roughness:.95}),o=[];for(const[c,h,d,u,f]of i){const g=Math.hypot(d-c,u-h),v=Math.floor(g/.58),p=Math.atan2(d-c,u-h),m=Math.max(2,Math.round(f/.33));for(let y=0;y<v;y++)for(let w=0;w<m;w++){const _=(y+.5)/v;o.push({x:c+(d-c)*_+(n()-.5)*.04,z:h+(u-h)*_,y:.16+w*.32,ry:p+(n()-.5)*.08})}for(let y=0;y<v;y++){const w=(y+.5)/v;o.push({x:c+(d-c)*w,z:h+(u-h)*w,y:.16+m*.32+.06,ry:p,cap:!0})}}const a=new ye(s,r,o.length),l=new ne;return o.forEach((c,h)=>{l.position.set(c.x,c.y,c.z),l.rotation.set(0,c.ry,0),l.scale.set(c.cap?1.15:1,c.cap?.45:1,c.cap?1.2:1),l.updateMatrix(),a.setMatrixAt(h,l.matrix)}),a.castShadow=!1,a.receiveShadow=!0,e.add(a),e}function wy(n){const t=new Kt;t.name="fences_gates";const e=new pt({color:5916208,roughness:.85}),i=new pt({color:4141602,roughness:.85}),s={W:[],D:[]},r=(a,l,c,h,d,u,f,g=0)=>{const v=new Dt(l,c,h),p=new ae().makeRotationY(g);p.setPosition(d,u,f),v.applyMatrix4(p),a.push(v)},o=[{x1:-4.6,z1:2.8,x2:4.6,z2:2.8,gate:.5},{x1:-16,z1:.5,x2:-16,z2:5.5,gate:-1},{x1:10.2,z1:11,x2:17.8,z2:11,gate:0}];for(const a of o){const l=Math.hypot(a.x2-a.x1,a.z2-a.z1),c=Math.floor(l/.28),h=Math.atan2(a.x2-a.x1,a.z2-a.z1)+Math.PI/2;for(let d=0;d<=c;d++){const u=d/c,f=a.x1+(a.x2-a.x1)*u,g=a.z1+(a.z2-a.z1)*u;a.gate&&Math.abs(u-.5)<.09||r(s.W,.16,1.1+(n()-.5)*.06,.04,f,.62,g,h)}r(s.D,l,.09,.06,(a.x1+a.x2)/2,1.05,(a.z1+a.z2)/2,h),r(s.D,l,.09,.06,(a.x1+a.x2)/2,.35,(a.z1+a.z2)/2,h),a.gate===.5?r(s.D,1.1,1.05,.06,(a.x1+a.x2)/2+.9,.6,(a.z1+a.z2)/2+.12,h):a.gate===-1&&r(s.D,1,1,.05,a.x1+.4,.58,a.z1+2.6,h+.6)}for(const[a,l]of[["W",e],["D",i]]){if(!s[a].length)continue;const c=new Q(ln(s[a],!1),l);c.castShadow=!0,c.receiveShadow=!0,t.add(c)}return t}function by(){const n=new Kt;n.name="drainage";const t=new pt({color:3025960,roughness:.9}),e=new pt({color:1911347,roughness:.15,metalness:.6}),i=new pt({color:8224120,roughness:.95}),s=new Q(new Dt(60,.1,.5),t);s.position.set(0,.015,9.05),s.receiveShadow=!0,n.add(s);const r=new Q(new Ae(60,.3),e);r.rotation.x=-Math.PI/2,r.position.set(0,.05,9.05),n.add(r),n.userData.waterMat=e;const o=[];for(let l=-28;l<=28;l+=4){const c=new Dt(1.2,.06,.56);c.translate(l,.09,9.05),o.push(c)}const a=new Q(ln(o,!1),i);a.receiveShadow=!0,n.add(a);for(const l of[-5.9,10.5]){const c=new Q(new Dt(1.6,.1,1.1),new pt({color:7033395,roughness:.8}));c.position.set(l,.12,9.05),c.castShadow=!0,c.receiveShadow=!0,n.add(c)}return n}function Ey(n){const t=new Kt;t.name="stepping_stones";const e=new pt({color:9408393,roughness:.95}),i=[],s=[{x:0,z0:5.4,z1:2.6,n:4},{x:-10.5,z0:5.4,z1:2.4,n:4},{x:9.8,z0:5.4,z1:3,n:3},{x:14,z0:8.6,z1:10.8,n:3},{x:-13,z0:8.6,z1:10.8,n:3}];for(const o of s)for(let a=0;a<o.n;a++){const l=(a+.5)/o.n,c=new me(.32+n()*.1,.36,.09,7);c.translate(o.x+(n()-.5)*.3,.045,o.z0+(o.z1-o.z0)*l),i.push(c)}const r=new Q(ln(i,!1),e);return r.receiveShadow=!0,t.add(r),t}const xl="audio/suzume.mp3",Ty="audio/tsukimori-bgm.mp3",Ay="Shamisen Nation (DOVA-SYNDROME)",Zu="Suzume",Fo=19e3,vl=14e3,Ju=8e3,vr=2200,yl=8;function gf(n,t,e){const i=e.w/2,s=e.d/2;return n>=e.cx-i&&n<=e.cx+i&&t>=e.cz-s&&t<=e.cz+s}function Ry(n,t,e){if(!e)return null;for(let i=0;i<e.length;i++){const s=e[i];if(s&&gf(n,t,s))return s}return null}function Cy(n,t,e,i,s){const r=s.w/2,o=s.d/2,a=s.cx-r,l=s.cx+r,c=s.cz-o,h=s.cz+o;if(n>=a&&n<=l&&t>=c&&t<=h||e>=a&&e<=l&&i>=c&&i<=h)return!0;const f=e-n,g=i-t;let v=0,p=1;if(Math.abs(f)<1e-12){if(n<a||n>l)return!1}else{let m=(a-n)/f,y=(l-n)/f;if(m>y){const w=m;m=y,y=w}if(m>v&&(v=m),y<p&&(p=y),v>p)return!1}if(Math.abs(g)<1e-12){if(t<c||t>h)return!1}else{let m=(c-t)/g,y=(h-t)/g;if(m>y){const w=m;m=y,y=w}if(m>v&&(v=m),y<p&&(p=y),v>p)return!1}return!0}function $u(n){return n<0?0:n>1?1:n}const Qu=new WeakSet;function Py({camera:n=null,scene:t=null,zones:e=[]}={}){const o="inverse";let l=null,c=null,h=null,d=!1,u=null,f=!1,g=!1,v=!0,p=!1,m=!0,y=.9,w=!1,_=!1,M=.9,b=Fo,R=-1,x=Zu,S=null;const E=new O,T=new O;function C(U){g||(g=!0,console.warn(U))}function P(){w||d||n&&l&&(n.add(l),w=!0)}function L(){try{const U=l&&l.context;if(U&&U.state==="suspended"){const k=U.resume();k&&typeof k.catch=="function"&&k.catch(()=>{})}}catch{}}function I(){try{const U=l&&l.context;return!!U&&U.state==="running"}catch{return!1}}function N(){if(d||f||!u||!c)return!1;try{return c.isPlaying||c.play(),_=!1,!0}catch{return!1}}try{l=new mm,c=new xm(l),c.setRefDistance(2.5),c.setRolloffFactor(1.6),c.setMaxDistance(55),c.setDistanceModel(o),c.setLoop(!0),c.setVolume(y),h=l.context.createBiquadFilter(),h.type="lowpass",h.frequency.value=Fo,h.Q.value=.4,typeof c.setFilter=="function"&&c.setFilter(h),t&&typeof t.add=="function"&&t.add(c);try{const U=[{url:xl,label:Zu},{url:Ty,label:Ay}],k=X=>{if(X>=U.length){f=!0,C("[audio] missing "+xl+" (drop your file at public/"+xl+") and no bundled fallback — radio silent");return}new du().load(U[X].url,dt=>{u=dt,x=U[X].label,f=!1;try{c.setBuffer(dt)}catch{}m&&v&&!p&&(P(),I()&&(L(),N()))},void 0,()=>{k(X+1)})};k(0)}catch{f=!0,C("[audio] loader unavailable — radio silent")}}catch{d=!0,f=!0,C("[audio] WebAudio unavailable — silent mode")}function B(){if(!n||!c)return R;c.getWorldPosition(E),T.setFromMatrixPosition(n.matrixWorld);const U=T.x-E.x,k=T.y-E.y,X=T.z-E.z;return Math.sqrt(U*U+k*k+X*X)}const G={source:c,loop:!0,volume:.9,refDistance:2.5,rolloffFactor:1.6,maxDistance:55,distanceModel:o,play(){return m=!0,d||f?!1:u?(P(),L(),N()):(P(),L(),!0)},pause(){if(m=!1,_=!1,!d&&c)try{c.pause()}catch{}},stop(){if(m=!1,_=!1,!d&&c)try{c.stop()}catch{}},mute(U){if(p=U!==!1,!d&&c&&p)try{c.setVolume(0)}catch{}},setVolume(U){const k=Number(U);y=Number.isFinite(k)?Math.min(1,Math.max(0,k)):y,p=!1,G.volume=y},loadCustom(U,k){if(!U||d)return!1;try{if(S&&S!==U)try{URL.revokeObjectURL(S)}catch{}return S=U,x=String(k||"Custom track").slice(0,48),f=!1,u=null,new du().load(U,X=>{u=X;try{c&&c.setBuffer(X)}catch{}m&&v&&!p&&(P(),L(),N())},void 0,()=>{C("[audio] could not decode custom track (mp3/m4a/ogg/wav supported by your browser)")}),!0}catch{return!1}},setEnabled(U){if(v=!!U,v)m=!0,!d&&!f&&u?(P(),L(),N()):(P(),L());else if(m=!1,_=!1,!d&&c)try{c.pause()}catch{}},state(){const U=B(),k=$u(1-(b-vr)/(Fo-vr));let X=!1;try{X=!d&&!!c&&!!c.isPlaying}catch{X=!1}return{enabled:v,playing:X,track:x,missing:f,dist:U,muffleK:k}},update(U){let k=Number(U);if((!Number.isFinite(k)||k<0)&&(k=0),k>.1&&(k=.1),!n||!c)return;c.getWorldPosition(E),T.setFromMatrixPosition(n.matrixWorld);const X=T.x-E.x,dt=T.z-E.z,yt=Math.sqrt(X*X+(T.y-E.y)*(T.y-E.y)+dt*dt);R=yt;const wt=Ry(E.x,E.z,e),bt=wt?gf(T.x,T.z,wt):!1;let Qt=!1;if(!bt&&e)for(let ft=0;ft<e.length;ft++){const gt=e[ft];if(!(!gt||gt===wt)&&Cy(T.x,T.z,E.x,E.z,gt)){Qt=!0;break}}let j,nt;if(yt>55)j=vr,nt=0;else if(bt)j=Fo,nt=1;else if(!Qt&&yt<yl)j=vl,nt=.9;else{const ft=$u((yt-yl)/(55-yl));Qt?(j=Ju+(vr-Ju)*ft,nt=.55):(j=vl+(vr-vl)*ft,nt=1)}let W=y*nt;(!v||p)&&(W=0);const st=1-Math.exp(-6*k),J=1-Math.exp(-4*k);if(M+=(W-M)*(k===0?1:st),b+=(j-b)*(k===0?1:J),!d){try{h&&(h.frequency.value=b),c&&Math.abs(M-c.getVolume())>.002&&c.setVolume(M)}catch{}try{u&&c&&(M<.01&&(yt>55||!v||p)?c.isPlaying&&(c.pause(),_=!0):_&&v&&!p&&m&&yt<=55&&N())}catch{}}}};return G}function Dy(n){if(!n||Qu.has(n))return n;Qu.add(n);const t=()=>{e();try{typeof n.setEnabled=="function"&&n.setEnabled(!0)}catch{}},e=()=>{try{document.removeEventListener("pointerdown",t),document.removeEventListener("keydown",t)}catch{}};try{document.addEventListener("pointerdown",t),document.addEventListener("keydown",t)}catch{}return n}function ju(n,t,e){const i=Fn(n),s=document.createElement("canvas");s.width=128,s.height=256;const r=s.getContext("2d");r.fillStyle=t,r.fillRect(0,0,128,256),r.strokeStyle=e,r.lineCap="round";for(let a=0;a<3;a++){const l=34+i()*60,c=50+a*70;for(let h=0;h<4;h++)r.lineWidth=4+i()*7,r.beginPath(),r.moveTo(l-22+i()*10,c+(i()-.5)*30),r.quadraticCurveTo(l,c+(i()-.5)*34,l+22-i()*8,c+(i()-.5)*30),r.stroke();r.lineWidth=5,r.beginPath(),r.moveTo(l,c-26),r.lineTo(l+(i()-.5)*12,c+26),r.stroke()}const o=new En(s);return o.colorSpace=ke,o}function Ly({lampPositions:n=[],polePositions:t=[],serviceDrops:e=[]}={}){const i=Fn(4242),s=new Kt;s.name="details";const r=[],o={wood:new pt({color:4864552,roughness:.85}),woodD:new pt({color:3352861,roughness:.9}),iron:new pt({color:2302758,roughness:.5,metalness:.85}),bronze:new pt({color:7035443,roughness:.35,metalness:.9}),paper:new pt({color:15788245,roughness:.9}),stone:new pt({color:9276808,roughness:.95}),leaf:new pt({color:4877109,roughness:1}),indigo:new pt({color:2833502,roughness:.95,side:Oe}),cream:new pt({color:14208952,roughness:.95,side:Oe})},a={},l=(S,E,T,C,P,L=0,I=0,N=0)=>{const B=new ae().makeRotationFromEuler(new Mn(I,L,N));B.setPosition(T,C,P),E.applyMatrix4(B),(a[S]||(a[S]=[])).push(E)},c=(S,E,T)=>new Dt(S,E,T),h=(S,E,T,C=8)=>new me(S,E,T,C),d=[];for(const[S,E]of t)l("woodD",h(.11,.14,6.4),S,3.2,E),l("woodD",c(1.4,.1,.1),S,5.9,E),l("woodD",c(1.1,.09,.09),S,5.4,E),d.push(new O(S,5.9,E));const u=[],f=new pt({color:5591108,emissive:16760938,emissiveIntensity:0});n.forEach(([S,E],T)=>{l("iron",h(.06,.09,3.4),S,1.7,E),l("iron",c(.7,.07,.07),S+.3,3.35,E)});const g=[],v=(S,E,T,C)=>{const P=new rr(.34,.035,8,20);l("iron",P.clone(),S-.45,.34,E,T),l("iron",P.clone(),S+.45,.34,E,T);const L=(I,N,B,G)=>{const U=Math.hypot(B-I,G-N),k=h(.025,.025,U,6),X=new Mn(0,T,Math.atan2(G-N,B-I)-Math.PI/2+C);k.applyMatrix4(new ae().makeRotationFromEuler(X)),k.translate((I+B)/2+S,(N+G)/2,E),(a.iron||(a.iron=[])).push(k)};L(-.45,.34,0,.75),L(.45,.34,0,.75),L(0,.75,-.15,.95),L(-.45,.34,.45,.34),l("woodD",c(.28,.05,.22),S-.05,.78,E,T),l("iron",h(.02,.02,.4,6),S+.45,.95,E,0,0,Math.PI/2)};v(11.2,10.6,.2,.12),v(-10.8,10.7,-.15,-.1),v(-4.9,3.4,1.45,.14);const p=(S,E,T,C,P)=>{const L=ju(P,"#2b3c5e","#e8e0cc"),I=new Q(new Dt(.9,1.8,.08),new pt({map:L,roughness:.85}));I.position.set(S,E,T),I.rotation.y=C,I.castShadow=!0,s.add(I)};p(10.6,2.6,10.9,.3,7),p(-10.2,2.5,10.9,-.25,21);for(const[S,E,T]of[[-7.2,2.9,5],[6.9,2.9,9],[5.4,-9.4,13]]){const C=ju(T,"#4a3a28","#efe6d0"),P=new Q(new Dt(.34,.7,.05),new pt({map:C,roughness:.85}));P.position.set(S,2,E),s.add(P)}{const S=new Q(c(1,1.9,.7),new pt({color:12071722,roughness:.4,metalness:.3}));S.position.set(17.9,.95,10.6),S.castShadow=!0,s.add(S);const E=new pt({color:1118481,emissive:12576511,emissiveIntensity:1.2,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),T=new Q(new Ae(.8,1.2),E);T.position.set(17.9,1,10.24),T.rotation.y=Math.PI,s.add(T),s.userData.vendGlow=E}const m=(S,E,T=.45,C=0)=>l("wood",c(T,T,T),S,T/2,E,C);m(12.6,10.7,.5,.2),m(12.6,10.7+0,.42,.5),a.wood[a.wood.length-1].translate(0,.46,0),m(-14.8,10.6,.45,-.3),m(5.2,3.6,.4,.7);for(const[S,E]of[[1.8,3.2],[-2.2,3.3],[11.9,10.5]])l("woodD",h(.16,.13,.3),S,.15,E);const y=(S,E,T)=>{l("wood",c(1.6,.08,.4),S,.45,E,T),l("woodD",c(.08,.45,.36),S-.6,.22,E,T),l("woodD",c(.08,.45,.36),S+.6,.22,E,T)};y(.5,4.4,.1),y(-9.5,3.2,-.1);const w=[];for(let S=0;S<=6;S++)w.push(new ut(.14+S/6*.1,S/6*.28));const _=new sr(w,10);for(const[S,E]of[[-3.4,3.1],[3.2,3],[10.9,10.8],[-11.5,10.6],[2.2,4.3]])l("stone",_.clone(),S,0,E),l("leaf",new xn(.2,7,6),S,.42,E);l("woodD",h(.2,.17,.5),-1.8,.25,3.5);for(let S=0;S<3;S++)l("cream",h(.015,.09,.9,6),-1.85+S*.06,.7,3.5+(S-1)*.05);for(const S of[-10,2,12])l("iron",c(.8,.04,.5),S,.1,9.05);const M=(S,E)=>{const T=Math.sin(S*127.1+E*311.7)*43758.5453;return T-Math.floor(T)};for(const[S,E]of[[5.6,.9],[-5.6,.9]])for(let T=0;T<14;T++){const C=Math.floor(T/5),P=T%5,L=c(.85+M(T,S)*.2,.15,.15),I=new ae().makeRotationY((M(T,E)-.5)*.2);I.setPosition(S+(M(T,3)-.5)*.06,.1+C*.16,E+(P-2)*.17),L.applyMatrix4(I),(a.wood||(a.wood=[])).push(L)}{const S=new xn(.15,12,10),E=new pt({color:16773848,emissive:16757854,emissiveIntensity:1.2,roughness:.6});for(const[T,C]of[[-3.9,8.9],[6.8,8.9]]){const P=new Q(S,E);P.position.set(T,3.02,C),s.add(P)}}for(const[S,E]of[[13.5,"indigo"],[14.5,"cream"]]){const T=new Ae(.5,.9,1,2);T.translate(0,-.45,0);const C=new Q(T,o[E]);C.position.set(S,2.6,10.8),C.rotation.y=S<14?.15:-.12,C.castShadow=!0,s.add(C),r.push({mesh:C,phase:M(S,1)*6.28,amp:.08})}{const S=new Jn(.32,1),E=S.attributes.position;for(let P=0;P<E.count;P++){const L=1+.22*Math.sin(P*3.7)+.12*Math.sin(P*9.1+1.3);E.setXYZ(P,E.getX(P)*L,E.getY(P)*L*.72,E.getZ(P)*L)}S.computeVertexNormals();const T=new ye(S,o.stone,5),C=new ne;[[-8.5,11.5],[-3.5,14.2],[-7.8,14.5],[-3.8,11.3],[-6,11]].forEach(([P,L],I)=>{C.position.set(P,.1,L),C.rotation.set(0,M(I,21)*6.28,0);const N=.7+M(I,22)*.9;C.scale.set(N,N*.8,N),C.updateMatrix(),T.setMatrixAt(I,C.matrix)}),T.instanceMatrix.needsUpdate=!0,T.castShadow=!0,T.receiveShadow=!0,s.add(T)}{const S=new Ae(.36,.3);S.translate(0,.15,0);const E=new ye(S,o.leaf,24),T=new ne,C=[[-4.6,3.3],[-2,3.3],[1.5,3.3],[4.6,3.3],[-5.15,.9],[5.15,.9],[13,10.6],[15,10.6],[-14,10.6],[-12,10.6],[-6.2,1],[7.2,5.2]];let P=0;for(let L=0;L<12;L++)for(let I=0;I<2;I++){T.position.set(C[L][0],.02,C[L][1]),T.rotation.set(0,I*Math.PI/2+M(L,31)*.6,0);const N=.7+M(L,32+I)*.7;T.scale.set(N,N,N),T.updateMatrix(),E.setMatrixAt(P++,T.matrix)}E.instanceMatrix.needsUpdate=!0,E.castShadow=!1,E.receiveShadow=!1,s.add(E)}{const T=new Q(new Dt(.62,.9,.62),o.wood);T.position.set(15.5,.45,14.5),T.castShadow=!0,s.add(T);const C=new Q(new Dt(.55,.35,.3),o.wood);C.position.set(15.5,1.075,14.5),C.castShadow=!0,s.add(C);const P=new Q(new Dt(.5,.28,.02),o.iron);P.position.set(15.5,1.075,14.5-.16),s.add(P);const L=new me(.025,.025,.03,10);for(const G of[-.12,-.05]){const U=new Q(L,o.bronze);U.rotation.x=Math.PI/2,U.position.set(15.5+G,.99,14.5-.18),s.add(U)}const I=new Q(new me(.008,.012,.7,6),o.bronze);I.position.set(15.5+.18,1.55,14.5+.05),I.rotation.z=-.35,I.rotation.x=.12,s.add(I);const N=new pt({color:2102280,emissive:16757854,emissiveIntensity:1,roughness:.6}),B=new Q(new Dt(.3,.045,.012),N);B.position.set(15.5+.05,1.16,14.5-.175),s.add(B),s.userData.radioGlow=N,s.userData.radioPos=new O(15.5,1.15,14.5),s.userData.radioMeshes=[T,C,P,B]}const b=new Bn({color:1118484});for(const S of e)try{const E=new O(S.a[0],S.a[1],S.a[2]),T=new O(S.b[0],S.b[1],S.b[2]);if(E.distanceTo(T)>22)continue;const C=E.clone().lerp(T,.5);C.y-=Math.min(.9,E.distanceTo(T)*.06);const P=new ha(E,C,T),L=new Q(new da(P,16,.012,5),b);s.add(L),l("cream",h(.03,.035,.09,8),T.x,T.y,T.z)}catch{}const R=S=>o[{WOOD:"wood",wood:"wood",woodD:"woodD",iron:"iron",stone:"stone",leaf:"leaf",cream:"cream"}[S]||"wood"];for(const S of Object.keys(a)){const E=new Q(ln(a[S],!1),R(S));E.castShadow=S!=="leaf",E.receiveShadow=!0,s.add(E)}n.forEach(([S,E],T)=>{const C=new Q(new xn(.13,10,8),T<3?f:f.clone());if(C.position.set(S+.6,3.25,E),s.add(C),u.push(C.material),T<3){const P=new ah(16760430,0,12,2);P.position.set(S+.6,3.2,E),s.add(P),g.push(P)}}),s.userData.lampGlows=u,s.userData.lampLights=g;const x=(S,E,T,C,P,L,I=0)=>{const N=new Ae(C,P,1,4);N.translate(0,-P/2,0);const B=new Q(N,o[L]);B.position.set(S,E,T),B.rotation.y=I,B.castShadow=!0,s.add(B),r.push({mesh:B,phase:i()*6.28,amp:.08+i()*.06})};for(let S=0;S<3;S++)x(12.4+S*.55,2.5,10.95,.45,.8,"indigo");for(let S=0;S<2;S++)x(-14.2+S*.55,2.4,10.95,.45,.7,"cream");x(1.5,2.2,2.62,.4,.6,"cream");for(let S=0;S<d.length-1;S++){const E=d[S],T=d[S+1];if(E.distanceTo(T)>16)continue;const C=E.clone().lerp(T,.5);C.y-=.7;for(const P of[0,-.22]){const L=new ha(E.clone().add(new O(0,P,0)),C.clone().add(new O(0,P,0)),T.clone().add(new O(0,P,0))),I=new Q(new da(L,20,.015,5),b);s.add(I)}}for(const[S,E]of[[-4.9,2.9],[4.9,2.9],[10.4,10.9],[-9.9,10.9]]){const T=new Q(h(.05,.07,.7,7),o.woodD);T.position.set(S,.55,E),T.castShadow=!0,s.add(T);for(let P=0;P<3;P++){const L=new Q(new xn(.32-P*.06,8,6),o.leaf);L.position.set(S+(i()-.5)*.2,1+P*.28,E+(i()-.5)*.2),L.scale.y=.75,L.castShadow=!0,s.add(L)}const C=new Q(_.clone(),o.stone);C.position.set(S,0,E),s.add(C)}return{group:s,cloth:r,lampGlows:u,lampLights:g}}function Iy(n,t,e={strength:.5}){if(!n?.cloth)return;const i=.4+(e.strength??.5);for(const s of n.cloth)s.mesh.rotation.x=Math.sin(t*2.1+s.phase)*s.amp*i}const Ml=["DAWN","DAY","GOLDEN","SUNSET","BLUE_HOUR","NIGHT","MOONLIT","RAIN_NIGHT","MIST_NIGHT"],td={DAWN:{sunC:16757370,sunI:1.6,el:12,az:95,sky:[10336470,15910043],fog:13620438,hemi:.5,hemiSky:12375016,hemiGround:9072466,exp:1,lit:0,lampK:1,starK:0},DAY:{sunC:16774112,sunI:2.6,el:62,az:150,sky:[7317724,13624303],fog:hh,hemi:.7,hemiSky:12375016,hemiGround:9072466,exp:1,lit:0,lampK:1,starK:0},GOLDEN:{sunC:16761963,sunI:2,el:18,az:235,sky:[8363204,16767392],fog:14207412,hemi:.55,hemiSky:15255968,hemiGround:6248010,exp:1.05,lit:0,lampK:1,starK:0},SUNSET:{sunC:16744013,sunI:1.4,el:6,az:262,sky:[5926824,16752228],fog:13216143,hemi:.45,hemiSky:9076672,hemiGround:4866104,exp:1.05,lit:.25,lampK:1,starK:.05},BLUE_HOUR:{sunC:8029951,sunI:.35,el:-4,az:290,sky:[1450573,12151374],fog:5922694,hemi:.35,hemiSky:4874144,hemiGround:3025448,exp:.9,lit:.8,lampK:1,starK:.3},NIGHT:{sunC:9414872,sunI:.22,el:28,az:300,sky:[395798,1055795],fog:725536,hemi:.18,hemiSky:2371676,hemiGround:658450,exp:.95,lit:1,lampK:1,starK:.9},MOONLIT:{sunC:12176639,sunI:1.1,el:48,az:40,sky:[330004,858160],fog:659746,hemi:.14,hemiSky:1713232,hemiGround:329484,exp:.85,lit:1,lampK:1,starK:1},RAIN_NIGHT:{sunC:5925514,sunI:.25,el:30,az:120,sky:[461588,1120294],fog:857119,hemi:.18,hemiSky:2765896,hemiGround:658448,exp:.8,lit:1,lampK:1.25,starK:.05},MIST_NIGHT:{sunC:6975622,sunI:.18,el:25,az:200,sky:[658708,1712168],fog:1317410,hemi:.2,hemiSky:3159615,hemiGround:790033,exp:.8,lit:1,lampK:1.1,starK:0}};function Ny({renderer:n,scene:t,sun:e,hemi:i,skyMat:s=null,houses:r=[],lampGlows:o=[],lampLights:a=[],vendGlow:l=null,stars:c=null,moon:h=null}={}){let d="DAY",u="DAY",f=1,g=!1,v=0;const p=new Nt,m=new Nt,y=new Nt,w=new Nt,_=new Nt,M=new Nt,b=x("DAY"),R=x("DAY");function x(E){const T=td[E];return{...T,sky:[...T.sky]}}function S(E,T,C){const P=b,L=R,I=p.set(P.sunC).lerp(new Nt(L.sunC),T);if(e){const k=1-(C?.dimK??0);e.color.copy(I),e.intensity=Ze.lerp(P.sunI,L.sunI,T)*k;const X=Ze.degToRad(Ze.lerp(P.el,L.el,T)),dt=Ze.degToRad(Ze.lerp(P.az,L.az,T));e.position.set(Math.cos(X)*Math.cos(dt),Math.sin(X),Math.cos(X)*Math.sin(dt)).multiplyScalar(60)}if(m.set(P.sky[0]).lerp(new Nt(L.sky[0]),T),y.set(P.sky[1]).lerp(new Nt(L.sky[1]),T),s?.uniforms?(s.uniforms.topColor?.value.copy(m),s.uniforms.bottomColor?.value.copy(y),s.uniforms.top&&s.uniforms.top.value.copy(m),s.uniforms.mid&&s.uniforms.mid.value.copy(y),s.uniforms.bot&&s.uniforms.bot.value.copy(y).multiplyScalar(.82)):t?.background?.isColor&&t.background.copy(y),w.set(P.fog).lerp(new Nt(L.fog),T),t?.fog){t.fog.color.copy(w);const k=C?.mistK??0,X=C?.rainK??0,dt=C?.snowK??0;t.fog.near=Ze.lerp(42,10,k)-X*8-dt*6,t.fog.far=Ze.lerp(500,90,k)-X*180-dt*150}i&&(i.intensity=Ze.lerp(P.hemi,L.hemi,T),P.hemiSky!==void 0&&(i.color.copy(_.set(P.hemiSky).lerp(new Nt(L.hemiSky),T)),i.groundColor.copy(M.set(P.hemiGround).lerp(new Nt(L.hemiGround),T)))),n&&(n.toneMappingExposure=Ze.lerp(P.exp,L.exp,T));const N=Ze.lerp(P.lit??0,L.lit??0,T),B=Ze.lerp(P.lampK??1,L.lampK??1,T),G=Ze.lerp(P.starK??0,L.starK??0,T),U=N;for(const k of r)for(const X of k.glowMats||[])X.emissiveIntensity=U*(k.name==="hero"?1.6:.9);for(const k of o)k.emissiveIntensity=N*2.2*B;for(const k of a)k.intensity=N*14*B;l&&(l.emissiveIntensity=.4+N*1.6),c&&(c.material.opacity=N*G),h&&(h.material.opacity=N)}return{get state(){return f>=1?u:`${d}>${u}`},get auto(){return g},set(E){const T=String(E).toUpperCase().replace(/[\s-]+/g,"_");td[T]&&T!==u&&(Object.assign(b,x((f>=1,u))),d=f>=1?u:d,Object.assign(R,x(T)),u=T,f=0)},cycle(){this.set(Ml[(Ml.indexOf(u)+1)%Ml.length])},toggleAuto(){return g=!g,g},update(E,T){g&&(v+=E,v>14&&(v=0,this.cycle())),f=Math.min(1,f+E/2.5);const C=f*f*(3-2*f);S(u,C,T)}}}function Uy(n){const t=new Kt;t.name="night_sky";const e=400,i=new Float32Array(e*3);let s=-1627238007;const r=()=>(s=s*1103515245+12345&2147483647)/2147483647;for(let d=0;d<e;d++){const u=r()*Math.PI*2,f=r()*Math.PI*.45+.08,g=120;i[d*3]=Math.cos(u)*Math.cos(f)*g,i[d*3+1]=Math.sin(f)*g,i[d*3+2]=Math.sin(u)*Math.cos(f)*g}const o=new ge;o.setAttribute("position",new Me(i,3));const a=new Js(o,new os({color:13623551,size:.7,transparent:!0,opacity:0,depthWrite:!1}));a.frustumCulled=!1,t.add(a);const l=new Q(new Zn(3,24),new Bn({color:15265791,transparent:!0,opacity:0,fog:!1}));l.position.set(-60,42,-80),l.lookAt(0,0,0),t.add(l);const c=new Mc(10336488,0);c.position.copy(l.position),t.add(c),t.userData.setMoon=d=>{c.intensity=d*.35};const h=t.userData.setMoon;return n.add(t),{stars:a,moon:l,moonLight:c,setMoon:h}}function Oy(n){const t=n<0?0:n>1?1:n;return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}const Re=[{n:"01 MOON FOREST ESTABLISHING",pos:[-28,14,-22],tgt:[0,2,4],fov:55,rail:{to:[-24,13,-18],tgtTo:null,period:14},mood:null,focus:{target:[0,2,4],dist:38},intent:"Moonlit canopy edge first, then eye drops to the lit village bowl."},{n:"02 LANTERN ALLEY",pos:[-5.9,1.6,-8],tgt:[-5.9,1.9,6],fov:50,rail:{to:[-5.9,1.6,1.5],tgtTo:[-5.9,1.9,8],period:12},mood:null,focus:{target:[-5.9,1.9,2],dist:10},intent:"Nearest lantern glow first, then eye travels down the alley line."},{n:"03 ROOF REVEAL",pos:[.5,5.4,1],tgt:[0,4,-1.2],fov:40,rail:{to:[3.8,6.6,6.8],tgtTo:[0,3.2,-1],period:12},mood:null,focus:{target:[0,4,-1],dist:3.5},intent:"Hero tile texture first, then rail pull reveals the ridge line."},{n:"04 MAPLE FOREGROUND",pos:[-4.9,2.7,5.6],tgt:[.5,2,-1.2],fov:45,rail:{to:[-3.6,2.6,5.2],tgtTo:null,period:10},mood:null,focus:{target:[.5,2,-1.2],dist:8.5},intent:"Red maple leaves first framing the edge, then hero house snaps into view."},{n:"05 POND",pos:[-8.6,1.7,13.4],tgt:[-4.2,.8,12.4],fov:50,rail:{to:[-3.4,1.7,13.4],tgtTo:[-6.5,.8,12.8],period:14},mood:null,focus:{target:[-6,.8,13],dist:4.5},intent:"Pond ripple highlight first, then lateral drift carries eye across reflections."},{n:"06 RAIN STREET",pos:[2.2,1.7,6.6],tgt:[-5,1.9,8.6],fov:50,rail:{to:[-1.5,1.7,6.4],tgtTo:null,period:11},mood:{time:"RAIN_NIGHT",wx:"rainy"},focus:{target:[-4.2,1.8,8.9],dist:7.5},intent:"Wet lamp halo first, then eye slides along the rain-streaked street."},{n:"07 MACHIYA ENTRANCE",pos:[6.6,1.9,6.2],tgt:[-.5,1.6,-.5],fov:40,rail:{to:[4.8,1.8,5],tgtTo:null,period:10},mood:null,focus:{target:[0,1.6,0],dist:9},intent:"Lattice doorway warmth first, then 3/4 facade and tiles read as one."},{n:"08 GARDEN PASSAGE",pos:[2.6,1.1,-6.8],tgt:[-2.2,1.3,-1.5],fov:50,rail:{to:[.8,1.1,-4.8],tgtTo:null,period:11},mood:null,focus:{target:[-2,1.2,-2],dist:6},intent:"Near planting leaves first, then low passage funnels eye to the court."},{n:"09 GOLDEN HOUR",pos:[-18,3.4,7.2],tgt:[12,2,7],fov:32,rail:{to:[-14,3,7.4],tgtTo:null,period:14},mood:{time:"GOLDEN",wx:"clear"},focus:{target:[0,2,7],dist:20},intent:"Long warm street axis first, then compressed facades glow edge to edge."},{n:"10 BLUE HOUR",pos:[12.5,5.5,-6],tgt:[0,2,4],fov:40,rail:{to:[9.5,5,-3.5],tgtTo:null,period:13},mood:{time:"BLUE_HOUR",wx:"clear"},focus:{target:[0,2,4],dist:16},intent:"Cool sky gradient first, then village lights detach from dusk."},{n:"11 MOONLIT ROOFLINE",pos:[14.5,4.6,10.5],tgt:[-20,5,-20],fov:24,rail:{to:[12.5,4.4,9],tgtTo:null,period:15},mood:{time:"MOONLIT",wx:"clear"},focus:{target:[-5,4.5,-6],dist:32},intent:"Stacked roof silhouettes first, then eye runs the telephoto line toward moon azimuth."},{n:"12 FINAL REVEAL",pos:[18,9.5,18.5],tgt:[-8,3,-8],fov:45,rail:{to:[15,8.5,16],tgtTo:null,period:16},mood:{time:"MIST_NIGHT",wx:"misty"},focus:{target:[-4,2.5,0],dist:34},intent:"Whole village bowl and moon glow first, then mist softens the far treeline."}];function Fy(n,t){let e=0,i="orbit",s=!1,r=0;const o=9;let a=0,l=null,c=null;const h=new O().fromArray(Re[0].pos);new O().fromArray(Re[0].pos);const d=new O().fromArray(Re[0].tgt);new O().fromArray(Re[0].tgt),Re[0].fov;function u(w,_){return _.fromArray(Re[w].pos)}function f(w,_,M){M.fromArray(Re[w].pos);const b=Re[w].rail;if(b&&b.to){const R=b.to[0],x=b.to[1],S=b.to[2];M.set(M.x+(R-Re[w].pos[0])*_,M.y+(x-Re[w].pos[1])*_,M.z+(S-Re[w].pos[2])*_)}return M}function g(w,_){return _.fromArray(Re[w].tgt)}function v(w,_,M){M.fromArray(Re[w].tgt);const b=Re[w].rail;return b&&b.tgtTo&&M.set(M.x+(b.tgtTo[0]-Re[w].tgt[0])*_,M.y+(b.tgtTo[1]-Re[w].tgt[1])*_,M.z+(b.tgtTo[2]-Re[w].tgt[2])*_),M}function p(w,_=2.5){const M=Re.length,b=(w%M+M)%M;c={fp:n.position.clone(),tp:new O().fromArray(Re[b].pos),ft:t?t.target.clone():new O().fromArray(Re[b].tgt),tt:new O().fromArray(Re[b].tgt),ff:n.fov,tf:Re[b].fov,t:0,dur:Math.max(.01,_)},e=b,r=0,a=0}function m(w){u(w,n.position),t&&(g(w,t.target),t.update()),n.fov=Re[w].fov,n.updateProjectionMatrix()}const y={get idx(){return e},get mode(){return i},get label(){return i==="orbit"?"orbit":Re[e].n},get count(){return Re.length},get names(){return Re.map(w=>w.n)},setMode(w){return i=String(w),r=0,t&&(t.enabled=i!=="cine"),i==="cine"&&m(e),i},goTo(w,_=2.5,M=!1){const b=Re.length,R=(w%b+b)%b;if(p(R,_),M&&l&&Re[R].mood)try{l(Re[R].mood)}catch{}return e},onMood(w){return typeof w=="function"&&(l=w),y},next(){return y.goTo(e+1,2.5,!1)},prev(){return y.goTo(e-1,2.5,!1)},toggleAdvance(){return s=!s,r=0,s},update(w){const _=Math.min(Math.max(w||0,0),.1);if(a+=_,i==="free"||i==="orbit"){let x=!1;try{x=!!(window.__explore&&window.__explore.on)}catch{}t&&!x&&t.update();return}if(s&&!c&&(r+=_,r>=o&&y.next()),c){c.t+=_;const x=Oy(c.t/c.dur);n.position.lerpVectors(c.fp,c.tp,x);const S=new O().lerpVectors(c.ft,c.tt,x);t&&t.target.copy(S),n.fov=c.ff+(c.tf-c.ff)*x,n.updateProjectionMatrix(),c.t>=c.dur&&(c=null,a=0),t&&t.update();return}const M=Re[e].rail&&Re[e].rail.period||12,b=.5+.5*Math.sin(a/M*Math.PI*2-Math.PI/2);f(e,b,h),v(e,b,d),n.position.copy(h),t&&t.target.copy(d);const R=Re[e].fov;Math.abs(n.fov-R)>.01&&(n.fov+=(R-n.fov)*Math.min(1,_*2),n.updateProjectionMatrix()),t&&t.update()}};return y}function By(n,t){const e=[],i=[],s=new vm,r=new ut;let o=0,a=0,l=0,c=0;function h(v,p){const m=t.getBoundingClientRect();r.set((v-m.left)/m.width*2-1,-((p-m.top)/m.height)*2+1),s.setFromCamera(r,n);const y=[];for(const M of e)y.push(M.node);for(const M of i)y.push(...M.meshes);const w=s.intersectObjects(y,!0);if(!w.length)return null;let _=w[0].object;for(const M of e){let b=_;for(;b;){if(b===M.node)return{kind:"slide",item:M};b=b.parent}}for(const M of i)for(const b of M.meshes){let R=_;for(;R;){if(R===b)return{kind:"action",item:M};R=R.parent}}return null}function d(v,p){if(!v)return null;const m={node:v,closed:v.position.x,open:p,t:0,target:0};return e.push(m),m}function u(v,p){!v||!v.length||typeof p!="function"||i.push({meshes:v.slice(),fn:p})}try{t.addEventListener("pointerdown",v=>{o=v.clientX,a=v.clientY,l=performance.now()}),t.addEventListener("pointerup",v=>{if(Math.hypot(v.clientX-o,v.clientY-a)>6||performance.now()-l>400)return;let m=null;try{m=h(v.clientX,v.clientY)}catch{m=null}if(m)if(m.kind==="slide")m.item.target=m.item.target>.5?0:1;else try{m.item.fn()}catch{}}),t.addEventListener("pointermove",v=>{const p=performance.now();if(p-c<120)return;c=p;let m=null;try{m=h(v.clientX,v.clientY)}catch{m=null}try{t.style.cursor=m?"pointer":""}catch{}})}catch{}function f(v){let p=Number(v);(!Number.isFinite(p)||p<0)&&(p=0),p>.1&&(p=.1);const m=1-Math.exp(-3*p||1e-4);for(const y of e){y.t+=(y.target-y.t)*(p===0?1:m),Math.abs(y.target-y.t)<.002&&(y.t=y.target);const w=y.t*y.t*(3-2*y.t);y.node.position.x=y.closed+(y.open-y.closed)*w}}return{addSlide:d,onTap:u,update:f,get count(){return e.length+i.length}}}const ed=1.6,zy=3.4;function ky(n,t,e={}){const i=typeof e.heightFn=="function"?e.heightFn:()=>0,s=Array.isArray(e.solids)?e.solids:[];let r=!1,o=0,a=0;const l=new O(0,ed,10),c={},h=new O,d=new O,u=new O;let f=-1,g=-1,v=0,p=0,m=0,y=0,w=0,_=0,M=0,b=0,R=!1,x=null;function S(I,N){let B=0;try{B=i(I,N)}catch{B=0}return(Number.isFinite(B)?B:0)+ed}function E(I){for(const N of s){if(typeof N.blockWhen=="function"){let X=!1;try{X=!!N.blockWhen()}catch{X=!1}if(X)continue}const B=N.x0-.35,G=N.x1+.35,U=N.z0-.35,k=N.z1+.35;if(I.x>B&&I.x<G&&I.z>U&&I.z<k){const X=I.x-B,dt=G-I.x,yt=I.z-U,wt=k-I.z,bt=Math.min(X,dt,yt,wt);bt===X?I.x=B:bt===dt?I.x=G:bt===yt?I.z=U:I.z=k}}}function T(I,N){x||(x=document.createElement("div"),x.style.cssText="position:fixed;width:96px;height:96px;border-radius:50%;border:2px solid rgba(255,255,255,.35);background:rgba(255,255,255,.06);z-index:30;pointer-events:none;display:none;",document.body.appendChild(x)),x.style.display="block",x.style.left=I-48+"px",x.style.top=N-48+"px"}function C(){try{x&&(x.style.display="none")}catch{}}function P(I,N){return r=!!I,r?(N&&(l.set(N.x??0,0,N.z??10),o=N.yaw??0,a=0),l.y=S(l.x,l.z),n.position.copy(l),n.rotation.order="YXZ",n.rotation.set(a,o,0)):C(),r}try{window.addEventListener("keydown",U=>{c[U.code]=!0}),window.addEventListener("keyup",U=>{c[U.code]=!1});let I=-1,N=0,B=0;t.addEventListener("pointerdown",U=>{r&&(U.pointerType==="touch"?U.clientX<window.innerWidth/2&&f<0?(f=U.pointerId,v=m=U.clientX,p=y=U.clientY,T(v,p)):g<0&&(g=U.pointerId,w=M=U.clientX,_=b=U.clientY,R=!0):I<0&&(I=U.pointerId,N=U.clientX,B=U.clientY))});const G=U=>{U.pointerId===f&&(f=-1,C()),U.pointerId===g&&(g=-1,R=!1),U.pointerId===I&&(I=-1)};window.addEventListener("pointerup",G),window.addEventListener("pointercancel",G),window.addEventListener("pointermove",U=>{r&&(U.pointerId===f?(m=U.clientX,y=U.clientY):U.pointerId===g&&R?(o-=(U.clientX-M)*.0042,a-=(U.clientY-b)*.0042,a=Math.max(-1.48,Math.min(1.48,a)),M=U.clientX,b=U.clientY):U.pointerId===I&&U.buttons&&(o-=(U.clientX-N)*.0042,a-=(U.clientY-B)*.0042,a=Math.max(-1.48,Math.min(1.48,a)),N=U.clientX,B=U.clientY))})}catch{}function L(I){if(!r)return;let N=Number(I);(!Number.isFinite(N)||N<0)&&(N=0),N>.1&&(N=.1);let B=0,G=0;(c.KeyW||c.ArrowUp)&&(G+=1),(c.KeyS||c.ArrowDown)&&(G-=1),(c.KeyA||c.ArrowLeft)&&(B-=1),(c.KeyD||c.ArrowRight)&&(B+=1),f>=0&&(B+=(m-v)/40,G-=(y-p)/40);const U=Math.hypot(B,G);U>1&&(B/=U,G/=U),h.set(-Math.sin(o),0,-Math.cos(o)),d.set(-h.z,0,h.x),u.set(0,0,0).addScaledVector(h,G).addScaledVector(d,B),u.lengthSq()>0&&(u.normalize().multiplyScalar(zy*N),l.x+=u.x,l.z+=u.z),E(l);const k=S(l.x,l.z);l.y+=(k-l.y)*Math.min(1,N*10+(N===0?1:0)),n.position.copy(l),n.rotation.order="YXZ";const X=1-Math.exp(-9*(N||.016));n.rotation.y+=(o-n.rotation.y)*X,n.rotation.x+=(a-n.rotation.x)*X,n.rotation.z=0,n.fov=55,n.updateProjectionMatrix()}return{update:L,setEnabled:P,get enabled(){return r}}}function Gy(n){n=n||{};var t=n.daytime||{},e=n.weather||{},i=n.cine||{},s=n.hudEl||null,r=n.audio||null,o=["DAWN","DAY","GOLDEN","SUNSET","BLUE_HOUR","NIGHT","MOONLIT","RAIN_NIGHT","MIST_NIGHT"],a={DAWN:"DAWN",DAY:"DAY",GOLDEN:"GOLDEN",SUNSET:"SUNSET",BLUE_HOUR:"BLUE",NIGHT:"NIGHT",MOONLIT:"MOON",RAIN_NIGHT:"RAIN",MIST_NIGHT:"MIST"},l=["clear","windy","rainy","misty","snow"],c={clear:"CLEAR",windy:"WINDY",rainy:"RAIN",misty:"MIST",snow:"SNOW"},h=["low","medium","high","cinematic"],d={low:"LOW",medium:"MED",high:"HIGH",cinematic:"CINE"},u={low:"off",medium:"off",high:"off",cinematic:"high"},f="20260911";function g(at){return typeof at=="function"?at():at}function v(at,zt){try{return at==null?zt:String(at)}catch{return zt}}function p(at,zt,te){var pe=document.createElement(at);return zt&&(pe.className=zt),te!=null&&(pe.textContent=te),pe}function m(at,zt){try{at.addEventListener("click",function(te){try{te.stopPropagation()}catch{}try{zt()}catch{}})}catch{}}var y=!1;try{y=window.innerWidth<700}catch{y=!0}var w=y,_=!1,M="time",b=y?"medium":"high",R=!0,x=!1,S=!1,E="",T="",C=0,P=!1;try{P=/[?&]dev=1\b/.test(window.location.search||"")}catch{P=!1}var L='.tsuki-root{position:fixed;inset:0;z-index:20;pointer-events:none;font-family:system-ui,-apple-system,"Hiragino Sans","Noto Sans JP",sans-serif;color:#f2efe6;}.tsuki-root button,.tsuki-root input,.tsuki-l1,.tsuki-l2{pointer-events:auto;}.tsuki-l1{position:fixed;top:calc(env(safe-area-inset-top,0px) + 12px);right:calc(env(safe-area-inset-right,0px) + 12px);background:rgba(9,11,18,.55);-webkit-backdrop-filter:blur(18px) saturate(1.4);backdrop-filter:blur(18px) saturate(1.4);border:1px solid rgba(255,255,255,.14);border-radius:14px;box-shadow:0 4px 18px rgba(0,0,0,.35);padding:8px 10px;min-width:172px;max-width:62vw;display:flex;align-items:center;gap:8px;}.tsuki-title{font-size:12px;letter-spacing:.22em;font-weight:650;white-space:nowrap;}.tsuki-title .jp{font-weight:400;opacity:.75;letter-spacing:.35em;margin-left:6px;}#du-state{font-size:11px;letter-spacing:.08em;opacity:.85;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.tsuki-chev{margin-left:auto;min-width:44px;min-height:44px;border-radius:10px;border:1px solid rgba(255,255,255,.16);background:rgba(255,255,255,.07);color:#f2efe6;font-size:15px;line-height:1;}.tsuki-l2{position:fixed;top:calc(env(safe-area-inset-top,0px) + 96px);right:calc(env(safe-area-inset-right,0px) + 12px);width:300px;max-height:calc(100vh - 130px);overflow-y:auto;-webkit-overflow-scrolling:touch;background:rgba(9,11,18,.72);-webkit-backdrop-filter:blur(18px) saturate(1.4);backdrop-filter:blur(18px) saturate(1.4);border:1px solid rgba(255,255,255,.12);border-radius:16px;box-shadow:0 8px 28px rgba(0,0,0,.45);padding:6px 6px calc(env(safe-area-inset-bottom,0px) + 8px);}.tsuki-sec{border-top:1px solid rgba(255,255,255,.08);}.tsuki-sec:first-child{border-top:none;}.tsuki-sec-head{display:flex;width:100%;min-height:44px;align-items:center;background:none;border:none;color:#f2efe6;font-size:11px;letter-spacing:.24em;padding:6px 10px;}.tsuki-sec-head .dot{width:6px;height:6px;border-radius:50%;background:#c8a86a;margin-right:8px;opacity:.9;}.tsuki-sec-head .st{margin-left:auto;opacity:.55;font-size:10px;letter-spacing:.1em;}.tsuki-sec-body{padding:2px 8px 12px;display:none;}.tsuki-sec.open .tsuki-sec-body{display:block;}.tsuki-row{display:flex;flex-wrap:wrap;gap:6px;}.tsuki-seg{flex:1 1 30%;min-height:44px;min-width:44px;border-radius:9px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);color:#f2efe6;font-size:11px;letter-spacing:.06em;}.tsuki-seg.on{background:rgba(200,168,106,.22);border-color:rgba(200,168,106,.65);}.tsuki-shotname{font-size:17px;letter-spacing:.04em;margin:2px 2px 0;font-weight:650;}.tsuki-mood{font-size:11px;letter-spacing:.2em;opacity:.7;margin:2px;}.tsuki-counter{font-size:11px;letter-spacing:.14em;opacity:.55;margin:0 2px 8px;}.tsuki-trans{display:flex;gap:6px;margin-bottom:8px;}.tsuki-trans button{flex:1;min-height:44px;border-radius:9px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);color:#f2efe6;font-size:12px;}.tsuki-present-btn{width:100%;min-height:44px;border-radius:9px;border:1px solid rgba(200,168,106,.6);background:rgba(200,168,106,.14);color:#f2efe6;font-size:11px;letter-spacing:.22em;margin-bottom:8px;}.tsuki-l3{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:6px;}.tsuki-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px;}.tsuki-grid button{min-height:44px;border-radius:8px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04);color:#f2efe6;font-size:11px;text-align:left;padding:0 10px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.tsuki-grid button.on{background:rgba(200,168,106,.22);border-color:rgba(200,168,106,.65);}.tsuki-track{font-size:12px;margin:2px 2px 8px;opacity:.9;}.tsuki-vol{display:flex;align-items:center;gap:8px;margin:0 2px 6px;}.tsuki-vol input{flex:1;min-height:44px;}.tsuki-note{font-size:11px;line-height:1.5;opacity:.65;margin:4px 2px;font-family:ui-monospace,Menlo,monospace;}.tsuki-about{font-size:11px;line-height:1.9;letter-spacing:.18em;opacity:.8;padding:2px;}.tsuki-root.tsuki-present .tsuki-l1,.tsuki-root.tsuki-present .tsuki-l2{display:none;}.tsuki-anim{transition:opacity .22s ease-out,transform .22s ease-out;}.tsuki-dev{position:fixed;right:calc(env(safe-area-inset-right,0px) + 10px);bottom:calc(env(safe-area-inset-bottom,0px) + 10px);z-index:21;pointer-events:none;background:rgba(0,0,0,.72);border:1px solid rgba(255,255,255,.14);border-radius:8px;padding:8px 10px;font-family:ui-monospace,Menlo,monospace;font-size:10.5px;line-height:1.65;color:#cfe3cf;white-space:pre;max-width:70vw;overflow:hidden;}@media (max-width:700px) and (orientation:portrait){.tsuki-l2{top:auto;bottom:0;right:0;left:0;width:auto;border-radius:16px 16px 0 0;max-height:45vh;padding-bottom:calc(env(safe-area-inset-bottom,0px) + 10px);}.tsuki-l1{max-width:calc(100vw - 24px);}}@media (max-width:700px) and (orientation:landscape){.tsuki-l2{width:278px;max-height:72vh;top:calc(env(safe-area-inset-top,0px) + 88px);}}';try{var I=document.createElement("style");I.setAttribute("data-tsuki","1"),I.textContent=L,document.head.appendChild(I)}catch{}var N=p("div","tsuki-root tsuki-anim"),B=p("div","tsuki-l1"),G=p("div",null),U=p("div","tsuki-title","TSUKIMORI");try{var k=p("span","jp","月森");U.appendChild(k)}catch{}var X=p("div",null);try{X.id="du-state"}catch{}G.appendChild(U),G.appendChild(X);var dt=p("button","tsuki-chev","▾");try{dt.setAttribute("aria-label","toggle panel")}catch{}B.appendChild(G),B.appendChild(dt),N.appendChild(B);var yt=p("div","tsuki-l2");N.appendChild(yt);var wt={};function bt(at,zt){var te=p("div","tsuki-sec"),pe=p("button","tsuki-sec-head");try{pe.setAttribute("aria-expanded","false")}catch{}var We=p("span","dot"),Tn=p("span",null,zt),Qn=p("span","st","");pe.appendChild(We),pe.appendChild(Tn),pe.appendChild(Qn);var di=p("div","tsuki-sec-body");return te.appendChild(pe),te.appendChild(di),yt.appendChild(te),wt[at]={sec:te,head:pe,tag:Qn},m(pe,function(){Qt(M===at?"":at)}),di}function Qt(at){M=at;try{for(var zt in wt)if(Object.prototype.hasOwnProperty.call(wt,zt)){var te=zt===M,pe=wt[zt];pe.sec.className="tsuki-sec"+(te?" open":"");try{pe.head.setAttribute("aria-expanded",te?"true":"false")}catch{}}}catch{}}var j=bt("time","TIME"),nt=p("div","tsuki-row");j.appendChild(nt);var W={};o.forEach(function(at){var zt=p("button","tsuki-seg",a[at]||at);try{zt.title=at}catch{}nt.appendChild(zt),W[at]=zt,m(zt,function(){try{t.set(at)}catch{}je()})});var st=bt("weather","WEATHER"),J=p("div","tsuki-row");st.appendChild(J);var ft={};l.forEach(function(at){var zt=p("button","tsuki-seg",c[at]||at.toUpperCase());J.appendChild(zt),ft[at]=zt,m(zt,function(){try{e.setState(at)}catch{}je()})});var gt=bt("cine","CINEMATIC"),Z=p("div","tsuki-shotname","—"),tt=p("div","tsuki-mood","—"),it=p("div","tsuki-counter","—");gt.appendChild(Z),gt.appendChild(tt),gt.appendChild(it);var ct=p("div","tsuki-trans"),mt=p("button",null,"◀"),_t=p("button",null,"❚❚ ADV"),Mt=p("button",null,"▶"),xt=p("button",null,"MODE"),Ut=p("button",null,"EXPLORE"),z=p("button",null,"AUTO");[mt,_t,Mt,xt,Ut,z].forEach(function(at){ct.appendChild(at)}),gt.appendChild(ct);var jt=p("button","tsuki-present-btn","ENTER CINEMATIC");gt.appendChild(jt);var he=p("div","tsuki-l3"),F=p("div","tsuki-grid");he.appendChild(F),gt.appendChild(he);var A=[];function Y(){try{if(i&&Object.prototype.toString.call(i.names)==="[object Array]"&&i.names.length)return i.names}catch{}for(var at=[],zt=0;zt<12;zt++)at.push("SHOT "+("0"+(zt+1)).slice(-2));return at}m(mt,function(){try{i.prev()}catch{}je()}),m(Mt,function(){try{i.next()}catch{}je()}),m(_t,function(){try{i.toggleAdvance()}catch{}R=!R,je()}),m(xt,function(){try{i.setMode(g(i.mode)==="cine"?"free":"cine")}catch{}je()});var $=!1;m(Ut,function(){$=!$;try{window.dispatchEvent(new CustomEvent("tsuki-explore",{detail:$}))}catch{}try{Ut.textContent=$?"EXIT EXPLORE":"EXPLORE"}catch{}je()}),m(z,function(){try{t.toggleAuto()}catch{}x=!x,je()}),m(jt,function(){dn(!_)});function rt(){try{F.textContent="",A=[];for(var at=Y(),zt=0;zt<at.length;zt++)(function(te,pe){var We=p("button",null,("0"+(te+1)).slice(-2)+" · "+pe);F.appendChild(We),A.push(We),m(We,function(){try{i.setMode("cine")}catch{}try{i.goTo(te,2.5,!0)}catch{}je()})})(zt,v(at[zt],"SHOT"))}catch{}}rt();var St=bt("audio","AUDIO"),Tt=p("div","tsuki-track","♫ Suzume");St.appendChild(Tt);var ot=p("div","tsuki-row"),lt=p("button","tsuki-seg","MUSIC OFF");ot.appendChild(lt),St.appendChild(ot);var Ct=p("div","tsuki-vol"),Zt=p("span",null,"VOL");try{Zt.style.fontSize="11px",Zt.style.opacity=".6"}catch{}var Et=p("input",null);try{Et.type="range",Et.min="0",Et.max="100",Et.value="80",Et.setAttribute("aria-label","music volume")}catch{}Ct.appendChild(Zt),Ct.appendChild(Et),St.appendChild(Ct);var At=p("div","tsuki-note","");if(St.appendChild(At),!r){try{lt.disabled=!0,Et.disabled=!0}catch{}At.textContent="audio offline — running silent"}m(lt,function(){if(r){var at=!S;try{var zt=r.state?r.state():null;zt&&typeof zt.enabled=="boolean"&&(at=!zt.enabled)}catch{}try{r.setEnabled(at)}catch{}S=at,je()}});try{Et.addEventListener("input",function(){if(r)try{var at=parseFloat(Et.value)/100;at>=0||(at=0),at>1&&(at=1),r.setVolume(at)}catch{}})}catch{}var Jt=p("button","tsuki-seg","+ ADD TRACK");try{Jt.title="Play your own audio file through the village radio"}catch{}ot.appendChild(Jt);var Wt=null;try{Wt=document.createElement("input"),Wt.type="file",Wt.accept="audio/*,.mp3,.m4a,.ogg,.wav,.flac",Wt.style.display="none",document.body.appendChild(Wt),Wt.addEventListener("change",function(){try{var at=Wt.files&&Wt.files[0];if(!at||!r||typeof r.loadCustom!="function")return;var zt=URL.createObjectURL(at);if(r.loadCustom(zt,at.name.replace(/\.[^.]+$/,""))){try{r.setEnabled(!0)}catch{}S=!0}}catch{}try{Wt.value=""}catch{}je()})}catch{Wt=null}m(Jt,function(){if(r)try{Wt&&Wt.click()}catch{}});var ie=bt("quality","QUALITY"),V=p("div","tsuki-row");ie.appendChild(V);var Rt={};h.forEach(function(at){var zt=p("button","tsuki-seg",d[at]);V.appendChild(zt),Rt[at]=zt,m(zt,function(){ht(at)})});function ht(at){b=at;try{window.dispatchEvent(new CustomEvent("tsuki-quality",{detail:at}))}catch{}try{window.__post&&typeof window.__post.setQuality=="function"&&window.__post.setQuality(u[at]||"off")}catch{}je()}var Pt=bt("about","ABOUT"),Bt=p("div","tsuki-about","TSUKIMORI 月森 / THE MOON FOREST / LGCY STUDIOS / LGCY AI");Pt.appendChild(Bt);var vt=p("div","tsuki-note","BUILD "+re+" · checking…");Pt.appendChild(vt);try{var Yt=null;try{Yt=new AbortController}catch{Yt=null}var qt=setTimeout(function(){try{Yt&&Yt.abort()}catch{}},8e3),Ie=Yt?{signal:Yt.signal}:{};fetch("https://api.github.com/repos/krshforever/tsukimori/commits/main?per_page=1",Ie).then(function(at){try{clearTimeout(qt)}catch{}return at.ok?at.json():null}).then(function(at){var zt=at&&at.sha?String(at.sha).slice(0,7):null,te=(re.split(" ")[0]||"").toLowerCase(),pe;zt?te&&zt.toLowerCase()===te?pe="BUILD "+re+" · ● CURRENT":pe="BUILD "+re+" · ● UPDATE AVAILABLE ("+zt+")":pe="BUILD "+re+" · ● OFFLINE";try{vt.textContent=pe}catch{}try{window.__updateCheck={latest:zt,current:te,build:re}}catch{}}).catch(function(){try{clearTimeout(qt)}catch{}try{vt.textContent="BUILD "+re+" · ● OFFLINE"}catch{}try{window.__updateCheck={latest:null,current:null,build:re}}catch{}})}catch{try{vt.textContent="BUILD "+re}catch{}}var re="dev";try{re="e148547 2026-09-13"}catch{}var Ve=null;if(P)try{Ve=p("pre","tsuki-dev","dev…"),document.body.appendChild(Ve)}catch{Ve=null}function dn(at){_=!!at;try{if(_){try{var zt=document.getElementById("caption");zt&&(T=zt.style.display,zt.style.display="none")}catch{}try{s&&(E=s.style.display,s.style.display="none")}catch{}N.className="tsuki-root tsuki-anim tsuki-present";try{jt.textContent="EXIT CINEMATIC"}catch{}}else{try{var te=document.getElementById("caption");te&&(te.style.display=T||"")}catch{}try{s&&(s.style.display=E||"")}catch{}N.className="tsuki-root tsuki-anim";try{jt.textContent="ENTER CINEMATIC"}catch{}}}catch{}je()}function La(){w=!w;try{yt.style.display=w?"none":"",dt.textContent=w?"▸":"▾"}catch{}}m(dt,La);function cr(at){try{if(at&&at.target&&at.target.closest){var zt=at.target;if(zt.closest(".tsuki-l2")||zt.closest("input")||zt.closest("select")||zt.closest("textarea"))return}}catch{}dn(!_)}try{window.addEventListener("dblclick",cr)}catch{}try{window.addEventListener("touchend",function(at){try{var zt=Date.now();zt-C<350?(C=0,cr(at)):C=zt}catch{}},{passive:!0})}catch{}try{document.addEventListener("keydown",function(at){try{at&&at.key==="Escape"&&_&&dn(!1)}catch{}})}catch{}function to(){try{return v(g(t.state),"NIGHT")}catch{return"NIGHT"}}function hr(){try{return v(g(e.state),"clear")}catch{return"clear"}}function je(){try{var at=to(),zt=hr(),te=a[at]||at,pe=c[zt]||String(zt).toUpperCase(),We="FREE";try{We=v(g(i.label),"FREE")||"FREE"}catch{}var Tn=0,Qn=Y().length;try{Tn=parseInt(i.idx,10),Tn>=0||(Tn=0)}catch{}try{Qn=parseInt(i.count,10)||Y().length}catch{}var di=("0"+(Tn+1)).slice(-2),Xi=("0"+Qn).slice(-2);try{X.textContent=te+" · "+pe+" · "+We}catch{}try{var no="";try{var ys=window.__perf?window.__perf():null;ys&&(no=" <"+ys.calls+"c "+ys.triangles+"t "+ys.fps+"f>")}catch{}s&&(s.textContent="TSUKIMORI 月森 — "+te+" · "+pe+" · "+We+" | SHOT "+di+"/"+Xi+no)}catch{}try{var Ia=Y();Z.textContent=v(Ia[Tn]||We,We),tt.textContent=te+" · "+pe,it.textContent="SHOT "+di+"/"+Xi}catch{}try{for(var Ms=0;Ms<A.length;Ms++)A[Ms].className=Ms===Tn?"on":""}catch{}try{for(var Ss in W)Object.prototype.hasOwnProperty.call(W,Ss)&&(W[Ss].className="tsuki-seg"+(Ss===at?" on":""));for(var D in ft)Object.prototype.hasOwnProperty.call(ft,D)&&(ft[D].className="tsuki-seg"+(D===zt?" on":""));for(var H in Rt)Object.prototype.hasOwnProperty.call(Rt,H)&&(Rt[H].className="tsuki-seg"+(H===b?" on":""))}catch{}try{var et=v(g(i.mode),"");xt.textContent="MODE "+(et?et.toUpperCase():"—"),_t.textContent=(R?"❚❚":"▶")+" ADV",z.textContent="AUTO "+(x?"ON":"OFF")}catch{}try{wt.time&&(wt.time.tag.textContent=te),wt.weather&&(wt.weather.tag.textContent=pe),wt.cine&&(wt.cine.tag.textContent=di+"/"+Xi),wt.quality&&(wt.quality.tag.textContent=d[b]||"")}catch{}try{if(r&&typeof r.state=="function"){var q=null;try{q=r.state()}catch{q=null}q&&(typeof q.enabled=="boolean"&&(S=q.enabled),Tt.textContent="♫ "+v(q.track,"Suzume")+(q.playing?" — PLAYING":""),lt.textContent=S?"MUSIC ON":"MUSIC OFF",lt.className="tsuki-seg"+(S?" on":""),At.textContent=q.missing?"drop audio/suzume.mp3 into public/audio/":"")}else r&&(lt.textContent=S?"MUSIC ON":"MUSIC OFF",At.textContent="")}catch{}if(P&&Ve){var K=[];try{var It="n/a",kt="n/a",Lt="n/a";try{var Ft=typeof window.__perf=="function"?window.__perf():window.__perf;Ft&&(Ft.fps!==void 0&&(It=String(Ft.fps)),Ft.calls!==void 0&&(kt=String(Ft.calls)),Ft.tris!==void 0&&(Lt=String(Ft.tris)),Ft.draws!==void 0&&kt==="n/a"&&(kt=String(Ft.draws)),Ft.triangles!==void 0&&Lt==="n/a"&&(Lt=String(Ft.triangles)))}catch{}var Xt="n/a";try{window.__post&&(typeof window.__post.quality=="string"?Xt=window.__post.quality:typeof window.__post.getQuality=="function"?Xt=String(window.__post.getQuality()):typeof window.__post.current=="string"&&(Xt=window.__post.current))}catch{}var oe="n/a",ue="n/a";try{window.__cam&&(window.__cam.pos&&window.__cam.pos.length>=3&&(oe=window.__cam.pos[0].toFixed(1)+","+window.__cam.pos[1].toFixed(1)+","+window.__cam.pos[2].toFixed(1)),window.__cam.tgt&&window.__cam.tgt.length>=3&&(ue=window.__cam.tgt[0].toFixed(1)+","+window.__cam.tgt[1].toFixed(1)+","+window.__cam.tgt[2].toFixed(1)))}catch{}K.push("FPS "+It+"  calls "+kt+"  tris "+Lt);try{var Gt=null;try{Gt=window.__updateCheck||null}catch{}var Se=Gt?Gt.latest?Gt.latest.toLowerCase()===String(Gt.current||"").toLowerCase()?"current":"BEHIND("+Gt.latest+")":"offline":"";K.push("build "+re+(Se?"  "+Se:""))}catch{try{K.push("build "+re)}catch{}}K.push("gl WebGL2  post "+Xt+"  seed "+f),K.push("cam "+oe+"  tgt "+ue),K.push(te+" · "+pe+" · "+We),Ve.textContent=K.join(`
`)}catch{}}}catch{}}try{document.body.appendChild(N)}catch{}try{yt.style.display=w?"none":"",dt.textContent=w?"▸":"▾"}catch{}Qt(M),je();var vs=null;try{vs=setInterval(je,250)}catch{}function eo(){try{vs&&clearInterval(vs)}catch{}try{window.removeEventListener("dblclick",cr)}catch{}try{N&&N.parentNode&&N.parentNode.removeChild(N)}catch{}try{Ve&&Ve.parentNode&&Ve.parentNode.removeChild(Ve)}catch{}}return{root:N,refresh:je,destroy:eo,setQuality:ht,setPresent:dn}}const Sl={geo:null};function _f(){return Sl.geo||(Sl.geo=new Dt(1,1,1)),Sl.geo}const nd={A:[[0,0,0,4],[2,0,2,4],[0,4,2,4],[0,2,2,2]],B:[[0,0,0,4],[0,4,2,4],[0,2,2,2],[0,0,2,0],[2,4,2,2],[2,2,2,0]],C:[[2,4,0,4],[0,4,0,0],[0,0,2,0]],D:[[0,0,0,4],[0,4,2,4],[2,4,2,0],[2,0,0,0]],E:[[2,4,0,4],[0,4,0,0],[0,0,2,0],[0,2,2,2]],F:[[2,4,0,4],[0,4,0,0],[0,2,2,2]],G:[[2,4,0,4],[0,4,0,0],[0,0,2,0],[2,0,2,2],[2,2,1,2]],H:[[0,0,0,4],[2,0,2,4],[0,2,2,2]],I:[[0,4,2,4],[1,4,1,0],[0,0,2,0]],J:[[2,4,2,0],[2,0,0,0],[0,0,0,2]],K:[[0,0,0,4],[2,4,0,2],[0,2,2,0]],L:[[0,4,0,0],[0,0,2,0]],M:[[0,0,0,4],[0,4,1,2],[1,2,2,4],[2,4,2,0]],N:[[0,0,0,4],[0,4,2,0],[2,0,2,4]],O:[[0,0,0,4],[0,4,2,4],[2,4,2,0],[2,0,0,0]],P:[[0,0,0,4],[0,4,2,4],[2,4,2,2],[2,2,0,2]],Q:[[0,0,0,4],[0,4,2,4],[2,4,2,0],[2,0,0,0],[1,1,2,0]],R:[[0,0,0,4],[0,4,2,4],[2,4,2,2],[2,2,0,2],[1,2,2,0]],S:[[2,4,0,4],[0,4,0,2],[0,2,2,2],[2,2,2,0],[2,0,0,0]],T:[[0,4,2,4],[1,4,1,0]],U:[[0,4,0,0],[0,0,2,0],[2,0,2,4]],V:[[0,4,1,0],[1,0,2,4]],W:[[0,4,0,0],[0,0,1,2],[1,2,2,0],[2,0,2,4]],X:[[0,0,2,4],[0,4,2,0]],Y:[[0,4,1,2],[2,4,1,2],[1,2,1,0]],Z:[[0,4,2,4],[2,4,0,0],[0,0,2,0]],0:[[0,0,0,4],[0,4,2,4],[2,4,2,0],[2,0,0,0],[0,0,2,4]],1:[[1,4,1,0],[0,0,2,0]],2:[[0,4,2,4],[2,4,2,2],[2,2,0,2],[0,2,0,0],[0,0,2,0]],3:[[0,4,2,4],[2,4,2,0],[0,2,2,2],[0,0,2,0]],4:[[0,4,0,2],[0,2,2,2],[2,4,2,0]],5:[[2,4,0,4],[0,4,0,2],[0,2,2,2],[2,2,2,0],[2,0,0,0]],6:[[2,4,0,4],[0,4,0,0],[0,0,2,0],[0,2,2,2],[2,2,2,0]],7:[[0,4,2,4],[2,4,0,0]],8:[[0,0,0,4],[0,4,2,4],[2,4,2,0],[2,0,0,0],[0,2,2,2]],9:[[2,0,0,0],[0,0,0,4],[0,4,2,4],[2,4,2,0],[0,2,2,2]]," ":[],"•":[[1,2,1,2]],".":[[1,0,1,0]],"-":[[0,2,2,2]],"/":[[0,0,2,4]],"&":[[0,0,0,4],[0,4,2,4],[2,4,2,2],[0,2,2,0],[2,0,0,0]],"©":null,月:[[0,0,0,4],[2,0,2,4],[0,4,2,4],[0,0,2,0],[0,2.6,2,2.6],[0,1.3,2,1.3]],森:"COMPOUND_MORI"};function Hy(){const n=[],t=(e,i,s,r)=>{n.push([e,i,e,i+r]),n.push([e-s/2,i+r,e+s/2,i+r]),n.push([e-s/2,i+r*.55,e+s/2,i+r*.55]),n.push([e-s*.28,i,e+s*.28,i])};return t(1,2.2,1.7,1.8),t(.35,0,1.1,1.9),t(1.65,0,1.1,1.9),n}function Vy(n){return n==="森"?Hy():n==="©"?[[.2,0,.2,4],[.2,4,1.8,4],[1.8,4,1.8,0],[1.8,0,.2,0],[.5,1.2,1.5,1.2],[.5,2.8,1.5,2.8]]:nd[n]??nd["-"]}function Mi(n,{size:t=.22,tracking:e=.32,thickness:i=.13,depth:s=.035}={}){const r=2*(t/4)+e*t,o=t/4,a=t/4,l=[];let c=0;const h=String(n).toUpperCase();for(const d of h){if(d===" "){c+=r;continue}for(const[u,f,g,v]of Vy(d)){const p=u===g&&f===v,m=c+u*o,y=f*a,w=c+g*o,_=v*a,M=w-m,b=_-y,R=Math.hypot(M,b),x=i*t;p?l.push({x:m,y,len:x*1.1,ang:0,t:x,sq:!0}):l.push({x:(m+w)/2,y:(y+_)/2,len:R+x*.9,ang:Math.atan2(b,M),t:x})}c+=r}return{strokes:l,width:Math.max(0,c-e*t),depth:s}}function qr(n,t,{depth:e=.035}={}){const i=[];for(const d of n){const{strokes:u}=Mi(d.text,d);for(const f of u)i.push({...f,ox:d.ox||0,oy:d.oy||0,oz:d.oz||0,depth:d.depth??e})}const s=_f(),r=new ye(s,t,Math.max(1,i.length)),o=new ae,a=new Kn,l=new Mn,c=new O,h=new O;return i.forEach((d,u)=>{l.set(0,0,d.ang),a.setFromEuler(l),c.set(d.ox+d.x,d.oy+d.y,d.oz),h.set(d.len,d.t,d.depth),d.sq&&h.set(d.t,d.t,d.depth*.7),o.compose(c,a,h),r.setMatrixAt(u,o)}),r.instanceMatrix.needsUpdate=!0,r.castShadow=!1,r.receiveShadow=!1,r.frustumCulled=!0,r}function xf(n){const t=(e,i=.85,s={})=>new pt({color:e,roughness:i,metalness:0,...s});return{post:n?.woodAged||n?.woodDark||n?.wood||t(3812382,.9),beam:n?.woodDark||n?.woodAged||n?.wood||t(3023640,.9),board:n?.woodNew||n?.wood||t(4864550,.85),stone:n?.stone||n?.stoneDark||n?.rock||t(9078136,.95),bronze:n?.bronze||n?.brass||n?.iron||t(9202490,.45,{metalness:.85}),glyphMain:n?.brass||t(13215850,.38,{metalness:.9}),glyphSub:n?.bronze||t(10124623,.5,{metalness:.8}),wash:new pt({color:2826520,emissive:16763274,emissiveIntensity:.55,roughness:.6})}}function Nn(n,t,e,i,s,r,o,a=0){const l=new Q(_f(),i);return l.scale.set(n,t,e),l.position.set(s,r,o),l.rotation.y=a,l.castShadow=!0,l.receiveShadow=!0,l}function vf(n,t){const e=new Zn(1,20),i=new Bn({color:0,transparent:!0,opacity:.28,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),s=new Q(e,i);return s.rotation.x=-Math.PI/2,s.position.y=.03,s.scale.set(n,t,1),s.renderOrder=2,s}function id(n,t,e,i){const s=new Zn(1,12),r=new Q(s,new pt({color:4872755,roughness:1}));return r.rotation.x=-Math.PI/2,r.position.set(t,.035,e),r.scale.set(n,n*.8,1),r.receiveShadow=!0,r.renderOrder=1,r}function Wy(n,t={}){const e=xf(n),i=new Kt;i.name="tsukimori-main-sign";const s=3.4,r=2.5,o=.16;for(const R of[-1,1])i.add(Nn(.5,.28,.5,e.stone,R*(s/2),.14,0)),i.add(Nn(o,r,o,e.post,R*(s/2),.28+r/2,0)),i.add(Nn(.22,.06,.22,e.bronze,R*(s/2),.3,0));i.add(Nn(s+.5,.14,.2,e.beam,0,.28+r+.07,0)),i.add(Nn(s+.3,.1,.12,e.beam,0,.62,0));const a=s-.2,l=1.35,c=1.72,h=.02,d=Nn(a,l,.07,e.board,0,c,h);i.add(d),i.add(Nn(a+.1,.05,.1,e.beam,0,c+l/2+.03,h)),i.add(Nn(a+.1,.05,.1,e.beam,0,c-l/2-.03,h));for(const R of[-1,1])for(const x of[-1,1])i.add(Nn(.09,.09,.1,e.bronze,R*(a/2-.05),c+x*(l/2-.05),h));const u=h+.035+.075,f=R=>-R/2,g=Mi("LGCY STUDIOS PRESENTS",{size:.115,tracking:.3}),v=Mi("TSUKIMORI",{size:.3,tracking:.3}),p=Mi("月森",{size:.3,tracking:.3}),m=Mi("THE MOON FOREST",{size:.13,tracking:.3}),y=Mi("BUILT WITH LGCY AI",{size:.1,tracking:.3}),w=qr([{text:"TSUKIMORI",size:.3,tracking:.3,ox:f(v.width),oy:c+.28,oz:u},{text:"月森",size:.3,tracking:.3,ox:f(p.width),oy:c-.14,oz:u}],e.glyphMain),_=qr([{text:"LGCY STUDIOS PRESENTS",size:.115,tracking:.3,ox:f(g.width),oy:c+.52,oz:u-.012},{text:"THE MOON FOREST",size:.13,tracking:.3,ox:f(m.width),oy:c-.44,oz:u-.012},{text:"BUILT WITH LGCY AI",size:.1,tracking:.3,ox:f(y.width),oy:c-.58,oz:u-.012}],e.glyphSub);i.add(w,_);const M=Nn(a-.2,.02,.02,e.wash,0,c+l/2-.06,h+.06);M.castShadow=!1,i.add(M);const b=new om(16767392,6,7,.55,.7,1.6);return b.position.set(0,2.6,1.6),b.target.position.set(0,c-.1,0),b.castShadow=!1,i.add(b,b.target),i.userData.signLight=b,i.userData.washMat=e.wash,i.add(vf(2.3,.8)),i.add(id(.3,-s/2,.32),id(.26,s/2,-.3)),i.position.set(...t.pos||[6.5,0,14.5]),i.rotation.y=t.ry??-.5,i}function Xy(n,t={}){const e=xf(n),i=new Kt;i.name="lgcy-studio-plaque";for(const f of[-1,1])i.add(Nn(.07,.62,.07,e.post,f*.42,.31,0));const s=Nn(1.05,.52,.04,e.bronze,0,.62,.02);s.rotation.x=-.14,i.add(s);const r=.02+.02+.045,a=[{text:"LGCY STUDIOS",size:.085,tracking:.3,oy:.78},{text:"WORLD DESIGNED & BUILT WITH LGCY AI",size:.038,tracking:.28,oy:.66},{text:"PROCEDURAL ENVIRONMENT • CODE • AI",size:.038,tracking:.28,oy:.585},{text:"© 2026 LGCY STUDIOS",size:.038,tracking:.28,oy:.51}].map(f=>({...f,ox:-Mi(f.text,f).width/2,oz:r})),l=qr(a,e.glyphSub,{depth:.014});l.rotation.x=-.14,l.position.z=.005,i.add(l);const c=document.createElement("canvas");c.width=256,c.height=16;const h=c.getContext("2d");h.fillStyle="#3a2c16",h.fillRect(0,0,256,16),h.fillStyle="#d8b988",h.font="9px sans-serif",h.textAlign="center",h.fillText("tsukimori — moon forest district",128,11);const d=new En(c);d.colorSpace=ke;const u=new Q(new Ae(.7,.044),new pt({map:d,roughness:.5,metalness:.6}));return u.position.set(0,.44,.045),u.rotation.x=-.14,i.add(u),i.add(vf(.8,.4)),i.position.set(...t.pos||[2.8,0,9.6]),i.rotation.y=t.ry??-.35,i}function Yy(n,t,e={}){const i=new Kt;i.name="signage";const s=Wy(t,{pos:e.signPos,ry:e.signRy}),r=Xy(t,{pos:e.plaquePos,ry:e.plaqueRy});return i.add(s,r),n.add(i),{group:i,sign:s,plaque:r,signLight:s.userData.signLight}}function qy(n={}){let t=n.fps&&n.fps>0?Math.floor(n.fps):30,e=0;const i=[];let s=typeof n.onShot=="function"?n.onShot:null;const r=l=>1/l,o=(l,c)=>l*(1/c),a={get frame(){return e},get fps(){return t},get t(){return o(e,t)},get dt(){return r(t)},setFps(l){return l&&l>0&&(t=Math.floor(l)),t},register(l){return typeof l!="function"?()=>{}:(i.includes(l)||i.push(l),()=>a.unregister(l))},unregister(l){const c=i.indexOf(l);return c>=0&&i.splice(c,1),i.length},clear(){i.length=0},onShot(l){s=typeof l=="function"?l:null},step(l){const c=l&&l>0?l:r(t);e+=1;const h=o(e,t);for(let d=0;d<i.length;d++)i[d](c,h,e);return{frame:e,t:h,dt:c}},renderFrame(l){e=Math.max(0,Math.floor(l));const c=r(t),h=o(e,t);for(let d=0;d<i.length;d++)i[d](c,h,e);return{frame:e,t:h,dt:c}},reset(){return e=0,{frame:e,t:0,dt:r(t)}},renderShot(l,c){return s&&s(l,Math.max(0,Math.floor(c))),{shotId:l,...a.renderFrame(c)}},renderSequence(l,c,h,d){const u=d&&d>0?Math.floor(d):t,f=Math.max(0,Math.floor(c)),g=Math.max(f,Math.floor(h)),v=[],p=[];for(let m=f;m<=g;m++)v.push(m),p.push(m*(1/u));return{shotId:l,fps:u,frames:v,times:p}}};return a}const Ko={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ar{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Ky=new wa(-1,1,1,-1,0,1);class Zy extends ge{constructor(){super(),this.setAttribute("position",new ee([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ee([0,2,0,0,2,0],2))}}const Jy=new Zy;class dh{constructor(t){this._mesh=new Q(Jy,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Ky)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class $y extends ar{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof rn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Yr.clone(t.uniforms),this.material=new rn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new dh(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class sd extends ar{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Qy extends ar{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class jy{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new ut);this._width=i.width,this._height=i.height,e=new yn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:on}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new $y(Ko),this.copyPass.material.blending=si,this.timer=new lh}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}sd!==void 0&&(o instanceof sd?i=!0:o instanceof Qy&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ut);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class tM extends ar{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Nt}render(t,e,i){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const eM={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Nt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class nr extends ar{constructor(t,e=1,i,s){super(),this.strength=e,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new ut(t.x,t.y):new ut(256,256),this.clearColor=new Nt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new yn(r,o,{type:on,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new yn(r,o,{type:on,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const u=new yn(r,o,{type:on,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}const a=eM;this.highPassUniforms=Yr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new rn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ut(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Yr.clone(Ko.uniforms),this.blendMaterial=new rn({uniforms:this.copyUniforms,vertexShader:Ko.vertexShader,fragmentShader:Ko.fragmentShader,premultipliedAlpha:!0,blending:ia,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Nt,this._oldClearAlpha=1,this._basic=new Bn,this._fsQuad=new dh(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ut(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=nr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=nr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){const e=[],i=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(i*i))/i);const s=[],r=[];for(let o=1;o<t;o+=2){const a=e[o],l=o+1<t?e[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new rn({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ut(.5,.5)},direction:{value:new ut(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}}nr.BlurDirectionX=new ut(1,0);nr.BlurDirectionY=new ut(0,1);const Bo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class nM extends ar{constructor(){super(),this.isOutputPass=!0,this.uniforms=Yr.clone(Bo.uniforms),this.material=new qd({name:Bo.name,uniforms:this.uniforms,vertexShader:Bo.vertexShader,fragmentShader:Bo.fragmentShader}),this._fsQuad=new dh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ve.getTransfer(this._outputColorSpace)===Ce&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Uc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Oc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Fc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===_a?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ur?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Or?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Bc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function iM({renderer:n,scene:t,camera:e}){let i="off",s=null,r=null,o=1,a=1;function l(){try{const u=n.getSize(new ut);o=Math.max(1,Math.round(u.x)),a=Math.max(1,Math.round(u.y))}catch{o=o||1,a=a||1}}function c(){if(s)try{s.dispose()}catch{}s=null,r=null}function h(u){if(c(),l(),u==="low"||u==="high"){s=new jy(n),s.addPass(new tM(t,e)),u==="high"&&(r=new nr(new ut(o,a),.18,.6,.85),s.addPass(r)),s.addPass(new nM);try{s.setSize(o,a)}catch{}}}return{get quality(){return i},setQuality(u){const f=u==="high"?"high":u==="low"?"low":"off";try{if(f===i&&(f==="off"||s))return i;if(f==="off")return c(),i="off",i;h(f),i=f}catch{try{c()}catch{}i="off"}return i},setSize(u,f){if(o=Math.max(1,Math.round(u)),a=Math.max(1,Math.round(f)),s)try{s.setSize(o,a)}catch{}},render(){if(i==="off"||!s)n.render(t,e);else try{s.render()}catch{n.render(t,e)}},dispose(){c(),i="off"}}}const sM=20260912,rd=16;function br(n,t,e){let i=Math.imul(n,374761393)+Math.imul(t,668265263)+Math.imul(e,1442695041)|0;return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967296}function rM(n,t){return Math.floor(br(n,t,sM)*4294967296)}function Ec(n,t,e){let i=(rM(n,t)^Math.imul(e|0,2246822519))>>>0||1;return function(){i|=0,i=i+1831565813|0;let s=Math.imul(i^i>>>15,1|i);return s=s+Math.imul(s^s>>>7,61|s)^s,((s^s>>>14)>>>0)/4294967296}}function oM(n,t,e){const i=Math.floor(n),s=Math.floor(t),r=n-i,o=t-s,a=r*r*(3-2*r),l=o*o*(3-2*o),c=br(i,s,e),h=br(i+1,s,e),d=br(i,s+1,e),u=br(i+1,s+1,e);return c+(h-c)*a+(d-c)*l+(c-h-d+u)*a*l}function fh(n,t,e,i=4){let s=0,r=.5,o=1,a=0;for(let l=0;l<i;l++)s+=r*oM(n*o,t*o,e+l*101),a+=r,r*=.5,o*=2.03;return s/a}function yf(n,t){const e=Math.max(Math.abs(n)-24,0),i=Math.max(Math.abs(t-4)-22,0),s=Math.hypot(e,i),r=Math.min(Math.max(s/10,0),1);return r*r*(3-2*r)}const Mf=[{cx:-8,cz:48.5,w:14,d:9,y:null},{cx:9,cz:50.5,w:12,d:8,y:null}];function Sf(n){const t=(fh(n.cx/42+7.3,n.cz/42-2.1,501,4)-.5)*11+Math.max(0,Math.hypot(n.cx,n.cz)-85)*.35;return Math.round(t*2)/2}function aM(n,t){let e=null;for(const i of Mf){const s=Math.max(Math.abs(n-i.cx)-i.w/2,0),r=Math.max(Math.abs(t-i.cz)-i.d/2,0),o=Math.hypot(s,r),a=Math.min(Math.max(o/6,0),1),l=1-a*a*(3-2*a);l>0&&(!e||l>e.m)&&(e={m:l,y:Sf(i)})}return e}function lM(){return Mf.map(n=>({...n,y:Sf(n)}))}function od(n,t,e){const i=Math.min(Math.max((e-n)/(t-n),0),1);return i*i*(3-2*i)}function Te(n,t){const e=yf(n,t);if(e<=0)return 0;const i=(fh(n/42+7.3,t/42-2.1,501,4)-.5)*11,s=Math.hypot(n,t),r=Math.max(0,s-85)*.35;let o=(i+r)*e;const a=34+8*Math.sin(n*.045),l=Math.abs(t-a),c=-1.6+2.2*od(0,8,l),h=od(7,14,l);let d=c*(1-h)+o*h;const u=aM(n,t);return u&&u.m>0&&(d=u.y*u.m+d*(1-u.m)),d}function Kr(n,t){const i=Te(n+.6,t)-Te(n-.6,t),s=Te(n,t+.6)-Te(n,t-.6);return Math.hypot(i,s)/(2*.6)}function cM(n,t,e,i=.45){const s=.65+.35*Math.sin(e*.6)*Math.sin(e*.23+1.7),r=Te(n,t),o=Te(n+1.5,t),a=Te(n,t+1.5),l=Math.min(1.5,Math.abs(o-r)+Math.abs(a-r)),h=1+.35*(1-Math.max(0,Math.min(1,(r+2)/6)))+l*.45;return i*2*s*h}function wf(n,t){const e=Te(n,t),i=Math.min(Math.max(1-e/9,0),1),s=fh(n/25-3.7,t/25+9.2,777,3),r=34+8*Math.sin(n*.045),o=Math.max(0,1-Math.abs(t-r)/12);return Math.min(Math.max(i*.45+s*.35+o*.45,0),1)}function ph(n,t){if(yf(n,t)<=0)return"village";const e=Te(n,t),i=wf(n,t),s=Kr(n,t),r=34+8*Math.sin(n*.045);return Math.abs(t-r)<5?"riverbank":e>9?"mountain":s>.45?"slope":i>.55?e<1.2?"field":"bamboo":i>.42?"maple":i>.25?"grassland":"outskirts"}function ki(n,t){return[Math.floor(n/rd),Math.floor(t/rd)]}function ds(n,t,e,i){return`${n}_${t>=0?"e"+t:"w"+-t}_${e>=0?"s"+e:"n"+-e}_${String(i).padStart(3,"0")}`}const Zo=new Map;function hM(n,t){return n+","+t}function fs(n,t,e){const i=hM(n,t);return Zo.has(i)||Zo.set(i,[]),Zo.get(i).push(...e),e.length}function bf(){let n=0,t=0;for(const e of Zo.values())t++,n+=e.length;return{objects:n,chunks:t}}const Oi=1,uM=.45,wl=0;function dM(n){const t=Math.sin(n*127.1)*43758.5453;return t-Math.floor(t)}function fM({lampLights:n,lampGlows:t,houses:e}={}){const i=n||[],s=t||[],r=Math.min(i.length,s.length),o=[Oi,Oi,Oi];let a=1;function l(h,d,u,f){const g=f>.05;f>=.85?(o[0]=Oi,o[1]=Oi,o[2]=Oi):g?(o[0]=Oi,o[1]=uM,o[2]=Oi):(o[0]=wl,o[1]=wl,o[2]=wl);const v=Math.floor(d*2);if(a=u==="rainy"&&dM(v)<.12?.25:1,!!g)for(let p=0;p<r;p++){const m=o[p%3]*a;i[p].intensity*=m;const y=s[p];y&&y.material&&typeof y.material.emissiveIntensity=="number"?y.material.emissiveIntensity*=m:y&&typeof y.emissiveIntensity=="number"&&(y.emissiveIntensity*=m)}}function c(){return{circuits:[o[0],o[1],o[2]],dip:a}}return{update:l,state:c}}function ad(n){let t=n>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function pM(){const n=document.createElement("canvas");n.width=64,n.height=128;const t=n.getContext("2d"),e=t.createLinearGradient(0,128,0,0);e.addColorStop(0,"rgba(255,90,20,0)"),e.addColorStop(.35,"rgba(255,120,30,0.85)"),e.addColorStop(.65,"rgba(255,190,80,0.95)"),e.addColorStop(.9,"rgba(255,240,200,1)"),e.addColorStop(1,"rgba(255,255,240,0)"),t.fillStyle=e,t.fillRect(0,0,64,128),t.globalCompositeOperation="destination-in";const i=t.createRadialGradient(32,70,6,32,70,62);i.addColorStop(0,"rgba(0,0,0,1)"),i.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=i,t.fillRect(0,0,64,128);const s=new En(n);return s.colorSpace=ke,s}function mM(){const n=document.createElement("canvas");n.width=64,n.height=64;const t=n.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,30);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.5,"rgba(255,255,255,0.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const i=new En(n);return i.colorSpace=ke,i}const ns=60,ld=2.2,bl=1.2;function gM(n,t,e,i){const s=typeof i=="number"&&isFinite(i)?i:0,r=new Kt;r.position.set(t,s,e);const o=n&&n.stone||new pt({color:9080210,roughness:.95}),a=n&&n.wood||new pt({color:5913892,roughness:.9}),l=new ye(new Dt(.28,.2,.22),o,8),c=new ne,h=ad(61861);for(let T=0;T<8;T++){const C=T/8*Math.PI*2+(h()-.5)*.2;c.position.set(Math.cos(C)*.55,.1,Math.sin(C)*.55),c.rotation.set(0,-C+(h()-.5)*.4,0),c.scale.setScalar(.9+h()*.25),c.updateMatrix(),l.setMatrixAt(T,c.matrix)}l.instanceMatrix.needsUpdate=!0,l.receiveShadow=!0,r.add(l);const d=new ye(new Dt(.12,.12,.9),a,4);for(let T=0;T<4;T++){const C=T/4*Math.PI*2+.4;c.position.set(Math.cos(C)*.18,.32,Math.sin(C)*.18),c.rotation.set(.62,C,0),c.scale.setScalar(1),c.updateMatrix(),d.setMatrixAt(T,c.matrix)}d.instanceMatrix.needsUpdate=!0,r.add(d);const u=pM(),f=new Bn({map:u,transparent:!0,blending:ia,depthWrite:!1,side:Oe,fog:!1}),g=new Ae(.7,.9),v=new Q(g,f);v.position.y=.62;const p=new Q(g,f);p.position.y=.62,p.rotation.y=Math.PI/2,r.add(v,p);const m=new Float32Array(ns*3),y=new Float32Array(ns),w=new Float32Array(ns),_=new Float32Array(ns*2),M=ad(24301);for(let T=0;T<ns;T++)y[T]=T/ns*(ld/bl),w[T]=M()*Math.PI*2,_[T*2]=(M()-.5)*.3,_[T*2+1]=(M()-.5)*.3;const b=new ge;b.setAttribute("position",new Me(m,3));const R=new os({map:mM(),size:.55,transparent:!0,opacity:.32,depthWrite:!1,sizeAttenuation:!0,color:10133670}),x=new Js(b,R);x.frustumCulled=!1,r.add(x);const S=new ah(16747068,8,9,2);S.position.set(0,.85,0),S.castShadow=!1,r.add(S);function E(T,C,P){const L=typeof P=="number"&&isFinite(P)?P:0,I=1+.18*Math.sin(T*11)+.12*Math.sin(T*23+1.3),N=1+.18*Math.sin(T*12.3+2.1)+.12*Math.sin(T*27+.5);v.scale.set(I,1+.25*Math.sin(T*13+.7),1),p.scale.set(N,1+.25*Math.sin(T*14+2),1);for(let B=0;B<ns;B++){let G=y[B]+C;const U=ld/bl;G>U&&(G-=U),y[B]=G;const k=.7+G*bl,X=L*G*.8;m[B*3]=_[B*2]+X+Math.sin(G*2+w[B])*.1,m[B*3+1]=k,m[B*3+2]=_[B*2+1]+Math.cos(G*1.7+w[B])*.1}b.attributes.position.needsUpdate=!0,S.intensity=8+2*Math.sin(T*11+Math.sin(T*23)*1.7)}return{group:r,update:E}}const El=300,_M=3;function xM(n,t,e,i,s){const r=n==="village";switch(n){case"village":s.setRGB(.36,.32,.25);break;case"riverbank":s.setRGB(.52,.48,.38);break;case"mountain":s.setRGB(.42,.42,.44);break;case"slope":s.setRGB(.4,.36,.28);break;case"field":s.setRGB(.45,.48,.28);break;case"bamboo":s.setRGB(.3,.42,.24);break;case"maple":s.setRGB(.38,.36,.24);break;case"grassland":s.setRGB(.42,.46,.28);break;default:s.setRGB(.38,.36,.28)}const o=1-t*.25;return s.multiplyScalar(o),e>7&&s.lerp(cd,Math.min((e-7)/8,.7)),r||(i>.5&&s.lerp(cd,Math.min((i-.5)*1.8,.6)),t>.6&&i<.3&&s.lerp(vM,Math.min((t-.6)*2.2,.5)),t>.75&&i<.15&&s.lerp(yM,Math.min((t-.75)*2.4,.6)),(n==="maple"||n==="bamboo")&&s.lerp(MM,.45)),s}const cd=new Nt(.5,.5,.52),vM=new Nt(.32,.42,.22),yM=new Nt(.23,.19,.15),MM=new Nt(.36,.28,.18),SM=new Nt(.47,.43,.38),wM=new Nt(.3,.27,.22);function bM(n,t){let e=Math.imul(Math.round(n*13.7),374761393)+Math.imul(Math.round(t*13.7),668265263)|0;return e=Math.imul(e^e>>>13,1274126177),e^=e>>>16,(e>>>0)/4294967296}function EM(){const n=new Kt;n.name="terrain";const t=Math.floor(El/_M),e=new Ae(El,El,t,t);e.rotateX(-Math.PI/2);const i=e.attributes.position,s=new Float32Array(i.count*3),r=new Nt;for(let l=0;l<i.count;l++){const c=i.getX(l),h=i.getZ(l),d=Te(c,h);i.setY(l,d-.05);const u=wf(c,h),f=Kr(c,h);xM(ph(c,h),u,d,f,r);const g=bM(c,h);r.offsetHSL((g-.5)*.02,(g-.5)*.05,(g-.5)*.09);const v=f;v>.35&&r.lerp(SM,Math.min((v-.35)*1.6,.55)),v>.2&&u>.55&&r.lerp(wM,Math.min((u-.55)*1.8,.5)*Math.min((v-.2)*3,1)),s[l*3]=r.r,s[l*3+1]=r.g,s[l*3+2]=r.b}e.setAttribute("color",new Me(s,3)),e.computeVertexNormals();const o=new pt({vertexColors:!0,roughness:.96,metalness:0});try{const l="vendor/ambientcg/Ground037/Ground037_1K-JPG_Color.jpg",c="vendor/commons/needle_litter/Forest_floor_with_loblolly_pine_needles.jpg",h=new Image,d=new Image;let u=0;const f=()=>{if(!(++u<2))try{const p=document.createElement("canvas");p.width=p.height=1024;const m=p.getContext("2d");m.drawImage(h,0,0,1024,1024),m.save(),m.translate(1024/2,1024/2),m.rotate(37*Math.PI/180),m.globalAlpha=.45;const y=1024*1.5;m.drawImage(d,-y/2,-y/2,y,y),m.restore();let w=918273;const _=()=>(w=w*1103515245+12345&2147483647)/2147483647;m.globalAlpha=.08;for(let b=0;b<2600;b++){const R=_()<.5?0:255;m.fillStyle=`rgb(${R},${R},${R})`,m.fillRect(_()*1024,_()*1024,1+_()*2,1+_()*2)}m.globalAlpha=1;const M=new En(p);M.colorSpace=ke,M.wrapS=M.wrapT=On,M.repeat.set(75,75),M.anisotropy=4,M.needsUpdate=!0,o.map=M,o.needsUpdate=!0}catch{}},g=()=>{};h.onload=f,h.onerror=g,h.src=l,d.onload=f,d.onerror=g,d.src=c}catch{}try{const l=new rh,c=(d,u)=>(d.colorSpace=u?ke:Un,d.wrapS=d.wrapT=On,d.repeat.set(90,90),d.anisotropy=4,d.needsUpdate=!0,d),h=()=>{};l.load("vendor/ambientcg/Ground037/Ground037_1K-JPG_NormalGL.jpg",d=>{o.normalMap=c(d,!1),o.normalScale.setScalar(.6),o.needsUpdate=!0},void 0,h),l.load("vendor/ambientcg/Ground037/Ground037_1K-JPG_Roughness.jpg",d=>{o.roughnessMap=c(d,!1),o.needsUpdate=!0},void 0,h)}catch{}const a=new Q(e,o);return a.receiveShadow=!0,a.frustumCulled=!0,n.add(a),{group:n,mesh:a}}function TM(){const n=new Kt;n.name="river";const t=60,e=8,i=[],s=[];for(let l=0;l<=t;l++){const c=-150+300*l/t,h=34+8*Math.sin(c*.045);if(i.push(c,-.8,h-e/2,c,-.8,h+e/2),l<t){const d=l*2;s.push(d,d+1,d+2,d+1,d+3,d+2)}}const r=new ge;r.setAttribute("position",new Me(new Float32Array(i),3)),r.setIndex(s),r.computeVertexNormals();const o=new pt({color:3031624,roughness:.12,metalness:.75,envMapIntensity:1,transparent:!0,opacity:.94}),a=new Q(r,o);return a.receiveShadow=!0,n.add(a),{group:n,mesh:a,waterMat:o}}const AM=1374772973;function hd(n){return n=n^AM|0,n=Math.imul(n^n>>>16,73244475),n=Math.imul(n^n>>>16,73244475),n=(n^n>>>16)>>>0,n/4294967296}function RM(n){const t=Math.floor(n),e=n-t,i=hd(t),s=hd(t+1),r=e*e*(3-2*e);return i+(s-i)*r}function CM(n){let t=0,e=.55,i=1,s=0;for(let r=0;r<3;r++){const o=RM(n*i);t+=(1-Math.abs(2*o-1))*e,s+=e,e*=.5,i*=2.13}return t/s}const PM=128,DM=[{r:260,hMax:42,tint:.55,yBase:-8},{r:312,hMax:58,tint:.72,yBase:-6},{r:368,hMax:74,tint:.88,yBase:-4}],LM=[{ang:0,depth:.75,width:.09},{ang:Math.PI,depth:.55,width:.07}];function IM(n){let t=1;for(const e of LM){let i=Math.abs(n-e.ang)%(Math.PI*2);i>Math.PI&&(i=Math.PI*2-i),t*=1-e.depth*Math.exp(-(i*i)/(e.width*e.width))}return Math.max(.08,t)}function NM(){const n=PM,t=DM,e=n+1,i=[],s=[],r=[],o=new Nt(hh),a=o.clone().multiplyScalar(.42),l=new Nt;t.forEach((u,f)=>{const g=f*e*2;for(let v=0;v<=n;v++){const p=v/n*Math.PI*2,y=(6+CM(p*3.1+f*7.7)*(u.hMax-6))*IM(p),w=Math.cos(p)*u.r,_=Math.sin(p)*u.r;if(i.push(w,u.yBase,_),i.push(w,u.yBase+y,_),l.copy(a).lerp(o,u.tint),s.push(l.r,l.g,l.b),l.copy(a).lerp(o,Math.min(1,u.tint+y/u.hMax*.18)),s.push(l.r,l.g,l.b),v<n){const M=g+v*2;r.push(M,M+1,M+2,M+1,M+3,M+2)}}});const c=new ge;c.setAttribute("position",new ee(i,3)),c.setAttribute("color",new ee(s,3)),c.setIndex(r),c.computeBoundingSphere();const h=new Bn({vertexColors:!0,fog:!0}),d=new Q(c,h);return d.castShadow=!1,d.receiveShadow=!1,d.frustumCulled=!1,d.renderOrder=1,d.name="farRidgeRing",d}function UM(n,t){let e=(Math.imul(n+1,2654435761)^Math.imul(t,40503))>>>0;return e^=e>>>15,e=Math.imul(e,2246822519),e^=e>>>13,(e>>>0)/4294967296}const OM=[{id:"r1",kind:"road",width:2.5,pts:[[0,24],[1,29],[2,32],[2,38],[1,42],[-4,41]]},{id:"r4",kind:"trail",width:1.2,pts:[[-4,41],[-12,40],[-20,38],[-26,40],[-31,44]]},{id:"r2",kind:"trail",width:1.2,pts:[[-24,10],[-36,2],[-48,-12],[-52,-30],[-44,-46]]},{id:"r3",kind:"trail",width:1.2,pts:[[24,5],[38,12],[52,26],[62,44]]}];function FM(n,t=2){const e=[];for(let i=0;i<n.length-1;i++){const[s,r]=n[i],[o,a]=n[i+1],l=Math.hypot(o-s,a-r),c=Math.max(1,Math.round(l/t));for(let h=0;h<c;h++)e.push([s+(o-s)*h/c,r+(a-r)*h/c])}return e.push(n[n.length-1].slice()),e}const Ef=OM.map(n=>({...n,path:FM(n.pts)}));function Tc(n,t){let e=1e9;for(const i of Ef)for(const[s,r]of i.path){const o=Math.hypot(n-s,t-r);o<e&&(e=o)}return e}function BM(n){const t=new Kt;t.name="roads";const e=new pt({color:7232066,roughness:.98}),i=new pt({color:6641207,roughness:1});let s=0;for(const r of Ef){const o=r.width/2,a=[],l=[];r.path.forEach(([f,g],v)=>{const p=r.path[Math.min(v+1,r.path.length-1)],m=r.path[Math.max(v-1,0)];let y=p[0]-m[0],w=p[1]-m[1];const _=Math.hypot(y,w)||1;y/=_,w/=_;const M=-w,b=y,R=(UM(v,7)-.5)*.3,x=o+R,S=Te(f+M*x,g+b*x)+.07,E=Te(f-M*x,g-b*x)+.07,T=Te(f,g)+.07;if(a.push(f+M*x,S,g+b*x,f,T,g,f-M*x,E,g-b*x),v<r.path.length-1){const C=v*3;l.push(C,C+3,C+1,C+1,C+3,C+4,C+1,C+4,C+2,C+2,C+4,C+5)}});const c=new ge;c.setAttribute("position",new Me(new Float32Array(a),3)),c.setIndex(l),c.computeVertexNormals();const h=new Q(c,r.kind==="road"?e:i);h.receiveShadow=!0,t.add(h);const[d,u]=ki(r.path[0][0],r.path[0][1]);fs(d,u,[{id:ds("road",d,u,s++),type:"road",x:r.path[0][0],z:r.path[0][1],y:0,data:{road:r.id}}])}{const o=34+8*Math.sin(.09),a=Te(2,o-9),l=Te(2,o+9),c=Math.max(a,l)+.25,h=new pt({color:5916208,roughness:.85}),d=new pt({color:4141602,roughness:.85}),u=new Q(new Dt(2.2,.14,20),h);u.position.set(2,c,o),u.castShadow=!0,u.receiveShadow=!0,t.add(u);for(const v of[-1,1]){const p=new Q(new Dt(.09,.7,20),d);p.position.set(2+v*1,c+.42,o),p.castShadow=!0,t.add(p);for(const m of[-8,-4,0,4,8]){const y=new Q(new Dt(.12,1.1,.12),d);y.position.set(2+v*1,c-.1,o+m),t.add(y)}}const[f,g]=ki(2,o);fs(f,g,[{id:ds("bridge",f,g,0),type:"bridge",x:2,z:o,y:c,data:{}}]);for(const v of[-1,1])for(const p of[-6,6]){const m=new Q(new Dt(.16,4.2,.16),d);m.position.set(2+v*.9,c-1.9,o+p),t.add(m)}}return{group:t}}const zM=Math.PI*(3-Math.sqrt(5));function kM(n){let t=n>>>0||1;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function GM(n,t){const e=Math.abs(n.y)>.9?new O(1,0,0):new O(0,1,0),i=new O().crossVectors(n,e).normalize();return t&&t()<.5&&i.negate(),i}function HM(n={}){const{seed:t=1,maxDepth:e=3,children:i=[4,6,5],length:s=5.2,radius:r=.34,radialSegments:o=5,sectionLength:a=1.6,minLength:l=.35,minRadius:c=.02,taper:h=.62,lengthDecay:d=.62,spread:u=.55,flare:f=.9,flareSharp:g=6,droop:v=.08,upPull:p=.12,gnarl:m=.08,leanX:y=0,leanZ:w=0,heightHint:_=9}=n,M=kM(t),b=[],R=[],x=[],S=[],E=[],T=[];let C=1e-4,P=0;const L=new O(0,1,0),I=new O(0,-1,0),N=new O,B=new O,G=new O,U=new O,k=new O;function X(bt,Qt,j,nt,W,st,J,ft){const gt=Math.max(1,Math.round(j/a));N.copy(Qt).normalize(),G.copy(GM(N,M)),U.crossVectors(N,G).normalize(),B.copy(bt);const Z=P;for(let tt=0;tt<=gt;tt++){const it=tt/gt;N.lerp(I,v*.12).normalize(),N.lerp(L,p*.12).normalize(),G.addScaledVector(N,-G.dot(N)).normalize(),U.crossVectors(N,G).normalize(),tt>0&&(B.addScaledVector(N,j/gt),B.addScaledVector(G,(M()-.5)*m*.35),B.addScaledVector(U,(M()-.5)*m*.35)),B.y>C&&(C=B.y);let ct=nt+(W-nt)*it;st===0&&(ct*=1+f*Math.exp(-it*g)),ct=Math.max(ct,c*.6);const mt=J+(ft-J)*it,_t=Math.min(1,Math.max(0,B.y/_));for(let Mt=0;Mt<=o;Mt++){const xt=Mt/o,Ut=xt*Math.PI*2,z=Math.cos(Ut),jt=Math.sin(Ut);k.set(B.x+(G.x*z+U.x*jt)*ct,B.y+(G.y*z+U.y*jt)*ct,B.z+(G.z*z+U.z*jt)*ct),b.push(k.x,k.y,k.z),R.push(G.x*z+U.x*jt,G.y*z+U.y*jt,G.z*z+U.z*jt),x.push(xt,_t),S.push(mt),P++}}for(let tt=0;tt<gt;tt++)for(let it=0;it<o;it++){const ct=Z+tt*(o+1)+it,mt=ct+o+1;E.push(ct,mt,ct+1,ct+1,mt,mt+1)}return{endPos:B.clone(),endDir:N.clone()}}function dt(bt,Qt,j,nt,W){const st=W/(e+1),J=(W+1)/(e+1),ft=Math.max(c,nt*h),gt=X(bt,Qt,j,nt,ft,W,st,J);if(W>=e){T.push(gt.endPos.clone());return}const Z=i[W]||0;if(Z<=0){T.push(gt.endPos.clone());return}const tt=Math.max(c,ft/Math.sqrt(Z)*1.02);for(let it=0;it<Z;it++){const ct=it*zM+M()*.6,mt=it===0,_t=mt?u*.32:u*(.8+M()*.7),Mt=new O(Math.cos(ct),0,Math.sin(ct)),xt=gt.endDir.clone().applyAxisAngle(Mt,_t).normalize();xt.lerp(L,p*.35).normalize();const Ut=j*d*(.85+M()*.3);if(Ut<l)continue;const z=tt*(mt?1.12:.9+M()*.2);z<c||dt(gt.endPos,xt,Ut,z,W+1)}}const yt=new O(y,1,w).normalize();dt(new O(0,0,0),yt,s,r,0);const wt=new ge;return wt.setAttribute("position",new ee(b,3)),wt.setAttribute("normal",new ee(R,3)),wt.setAttribute("uv",new ee(x,2)),wt.setAttribute("aWind",new ee(S,1)),wt.setIndex(E),{geometry:wt,tips:T,height:C}}const VM={sugi:{maxDepth:3,children:[4,5,4],length:6.4,radius:.36,lengthDecay:.58,spread:.42,taper:.6,droop:.04,upPull:.22,gnarl:.04,heightHint:11},keyaki:{maxDepth:3,children:[4,6,5],length:3.6,radius:.42,lengthDecay:.66,spread:.72,taper:.62,droop:.1,upPull:.1,gnarl:.1,heightHint:8},momiji:{maxDepth:3,children:[4,5,5],length:3.2,radius:.3,lengthDecay:.64,spread:.95,taper:.6,droop:.14,upPull:.06,gnarl:.07,heightHint:7},matsu:{maxDepth:3,children:[3,5,4],length:3.8,radius:.38,lengthDecay:.62,spread:.68,taper:.58,droop:.06,upPull:.16,gnarl:.22,leanX:.28,leanZ:.1,heightHint:7},sakura:{maxDepth:3,children:[4,6,5],length:3.4,radius:.33,lengthDecay:.68,spread:.78,taper:.62,droop:.12,upPull:.14,gnarl:.09,heightHint:8}};function Wi(n){let t=0,e=0;n.forEach(h=>{t+=h.attributes.position.count,e+=h.index.count});const i=new Float32Array(t*3),s=new Float32Array(t*3),r=new Float32Array(t*2),o=new Uint16Array(e);let a=0,l=0;n.forEach(h=>{const d=h.attributes.position,u=h.attributes.normal,f=h.attributes.uv;i.set(d.array,a*3),s.set(u.array,a*3),r.set(f.array,a*2);const g=h.index.array;for(let v=0;v<g.length;v++)o[l+v]=g[v]+a;a+=d.count,l+=g.length});const c=new ge;return c.setAttribute("position",new Me(i,3)),c.setAttribute("normal",new Me(s,3)),c.setAttribute("uv",new Me(r,2)),c.setIndex(new Me(o,1)),c}function WM(n,t,e,i=808){const s=new Kt,r=Ai(i),o=[],a=[],l=9;for(let d=0;d<l;d++){const u=t+(r()-.5)*1.6,f=e+(r()-.5)*1.6,g=3.4+r()*1.8,v=.03+r()*.07,p=r()*Math.PI*2,m=new Kt,y=.5,w=.055;let _=0;for(;_<g;){const M=Math.min(y,g-_),b=new Q(new me(w*.92,w,M,8),n.bamboo);b.position.y=_+M/2,b.castShadow=!0,m.add(b);const R=new Q(new me(w*1.18,w*1.18,.035,8),n.bamboo);if(R.position.y=_+M,m.add(R),_>g*.35){const x=3+Math.floor(r()*3);for(let S=0;S<x;S++)a.push({x:u,y:_+M,z:f,top:_/g,seed:r()*10})}_+=M}m.position.set(u,0,f),m.rotation.set(Math.cos(p)*v,0,Math.sin(p)*v),m.userData.phase=r()*6.28,m.userData.baseRX=m.rotation.x,m.userData.baseRZ=m.rotation.z,o.push(m),s.add(m)}{const d=new Ae(.14,.62,1,2),u=d.attributes.position;for(let p=0;p<u.count;p++){const y=(u.getY(p)+.31)/.62;u.setX(p,u.getX(p)*(1-y*.85)),u.setZ(p,-Math.sin(y*Math.PI)*.06)}d.computeVertexNormals();const f=5,g=new ye(d,n.bambooLeaf,a.length*f),v=[];a.forEach(p=>{for(let m=0;m<f;m++){const y=m/f*Math.PI*2+p.seed;v.push({p:[p.x+Math.cos(y)*.25,p.y+.05,p.z+Math.sin(y)*.25],rx:.9+r()*.5,ry:y,rz:.2,s:.8+r()*.5})}}),wi(g,v),g.castShadow=!1,s.add(g)}const c=Ta(3.2,3.2,.5);c.position.set(t,.035,e),s.add(c);function h(d){for(const u of o)u.rotation.x=u.userData.baseRX+Math.sin(d*.9+u.userData.phase)*.02,u.rotation.z=u.userData.baseRZ+Math.cos(d*.7+u.userData.phase)*.02}return{group:s,update:h}}function XM(n,t,e,i=1555){const s=new Kt,r=Ai(i),o=[],a=new O(0,1,0);function l(m,y,w,_,M){const b=new me(_*.62,_,w,7),R=new Q(b,n.trunk),x=m.clone().addScaledVector(y,w/2);R.position.copy(x),R.quaternion.setFromUnitVectors(a,y.clone().normalize()),R.castShadow=R.receiveShadow=!0,s.add(R);const S=m.clone().addScaledVector(y,w);if(M<=0||w<.35){o.push(S);return}o.push(S.clone().lerp(m,.4));const E=M>=3?3:2+(r()<.5?1:0);for(let T=0;T<E;T++){const C=y.clone();C.x+=(r()-.5)*1.1,C.z+=(r()-.5)*1.1,C.y+=r()*.45-.08,C.normalize(),l(S,C,w*(.55+r()*.15),_*.58,M-1)}}l(new O(0,0,0),new O(.08,1,.05),1.5,.22,4);function c(m){const y=new $r,w=7;for(let M=0;M<=20;M++){const b=M/20*Math.PI*2,R=Math.pow(Math.abs(Math.sin(b*w/2)),.7),x=m*(.35+.65*R),S=Math.cos(b)*x,E=Math.sin(b)*x;M===0?y.moveTo(S,E):y.lineTo(S,E)}return new Ma(y)}const h=Wi([c(.17),c(.17).rotateY(Math.PI/2)]),d=340,u=new ye(h,n.mapleLeaf,d),f=[],g=new Nt;for(let m=0;m<d;m++){const y=o[Math.floor(r()*o.length)],w=y.x+(r()-.5)*1.1,_=y.y+(r()-.5)*.9,M=y.z+(r()-.5)*1.1;f.push({p:[w,_,M],rx:r()*6.3,ry:r()*6.3,rz:r()*6.3,s:.75+r()*.7});const b=Ze.clamp((_-1.2)/2.2,0,1),R=r();Jo(m,77)<.14?g.setHex(5926960):R<b*.75?g.setHex(12728868):R<b*.75+.22?g.setHex(14711592):g.setHex(7178812),g.offsetHSL((Jo(m,11)-.5)*.08,0,(Jo(m,33)-.5)*.12),u.setColorAt(m,g)}wi(u,f),u.instanceColor.needsUpdate=!0,u.castShadow=!1,u.receiveShadow=!1,s.add(u),s.position.set(t,0,e);const v=Ta(3.4,3.4,.5);v.position.y=.035,s.add(v);function p(m){s.rotation.z=Math.sin(m*.6)*.004,s.rotation.x=Math.cos(m*.45)*.003}return{group:s,update:p}}function Tf(n,t=1,e=1,i=.6,s=0,r=0){const o=Fn(t*1e3+7),a=XM(n,0,0,t*7919+101),l=a.group||a;l.scale.setScalar(e*(.9+o()*.25));const c=new Nt(4880949).lerp(new Nt(12729374),i);return l.traverse(h=>{h.isMesh&&h.material?.color&&h.geometry?.type!=="CylinderGeometry"&&(h.material=h.material.clone(),h.material.color.copy(c).offsetHSL((o()-.5)*.03,0,(o()-.5)*.06))}),l.rotation.y=o()*6.28,l.position.set(s,0,r),l.userData.tick=a.update||null,l.userData.sway={amp:.02+o()*.02,freq:.8+o()*.6,ph:o()*6.28},l}function Af(n,t=1,e=0,i=0){const s=Fn(t*500+3),r=WM(n,0,0,t*4153+7),o=r.group||r;return o.rotation.y=s()*6.28,o.scale.setScalar(.85+s()*.4),o.position.set(e,0,i),o.userData.tick=r.update||null,o.userData.sway={amp:.015+s()*.02,freq:1.1+s()*.7,ph:s()*6.28},o}function Jo(n,t){let e=(Math.imul(n+1,2654435761)^Math.imul(t,40503))>>>0;return e^=e>>>15,e=Math.imul(e,2246822519),e^=e>>>13,(e>>>0)/4294967296}function YM(){const n=document.createElement("canvas");n.width=64,n.height=64;const t=n.getContext("2d");t.fillStyle="#000",t.fillRect(0,0,64,64),t.fillStyle="#fff";for(const[i,s,r]of[[14,9,-6],[30,11,0],[46,8,7]])t.beginPath(),t.moveTo(i-s/2,64),t.quadraticCurveTo(i-s/2+r,30,i+r,4+r*.2),t.quadraticCurveTo(i+s/2+r,30,i+s/2,64),t.closePath(),t.fill();return new En(n)}function mh(n=1,t=.5){const e=Fn(n*77+1),i=new Jn(t,2),s=i.attributes.position;for(let a=0;a<s.count;a++){const l=1+(e()-.5)*.35;s.setXYZ(a,s.getX(a)*l,s.getY(a)*l*.72,s.getZ(a)*l)}i.computeVertexNormals();const r=new Q(i,new pt({color:new Nt(3759148).offsetHSL(0,0,(e()-.5)*.05),roughness:1})),o=.72+e()*.63;return r.scale.set(o,o*(.85+e()*.4),o),r.rotation.y=e()*Math.PI*2,r.castShadow=!0,r.userData.sway={amp:.008,freq:1.4,ph:e()*6.28},r}function gh(n=1,t=60,e=[6,3]){const i=Fn(n*31+5),s=new Ae(.5,.35);s.translate(0,.17,0);const r=qM([s,s.clone().rotateY(Math.PI/2)]),o=new pt({color:6058040,roughness:1,side:Oe,alphaTest:.4,alphaMap:YM(),alphaToCoverage:!0}),a=new ye(r,o,t),l=new ne;for(let c=0;c<t;c++)l.position.set((i()-.5)*e[0],0,(i()-.5)*e[1]),l.rotation.y=i()*3.14,l.scale.setScalar(.7+i()*.7),(c+n%4+4)%4===0&&(l.scale.y*=1.9),l.updateMatrix(),a.setMatrixAt(c,l.matrix);return a.castShadow=!1,a.receiveShadow=!0,a}function qM(n){return Wi(n)}function Tl(n=1,t=2.2,e=2,i=40){const s=Fn(n*13+9),r=new Ae(.12,.12),o=new pt({color:4154928,roughness:1,side:Oe}),a=new ye(r,o,i),l=new ne;for(let h=0;h<i;h++)l.position.set((s()-.5)*t,s()*e,.02+s()*.06),l.rotation.set(s()*3,s()*3,s()*3),l.updateMatrix(),a.setMatrixAt(h,l.matrix);a.castShadow=!1;const c=new Kt;return c.add(a),c}function Rf(n,t=1.6,e=1){const i=new Q(new Zn(.5,10),new pt({color:4480046,roughness:1}));return i.rotation.x=-Math.PI/2,i.scale.set(t,e,1),i.receiveShadow=!0,i}let Al=null;function KM(){if(Al)return Al;const n=document.createElement("canvas");n.width=n.height=128;const t=n.getContext("2d");t.fillStyle="#4a3826",t.fillRect(0,0,128,128);const e=Ai(1179143),i=["#a83a22","#c77b2e","#6b4e30","#5a6b35","#7d4a26","#8f5a24"];for(let r=0;r<650;r++){t.fillStyle=i[Math.floor(e()*i.length)],t.globalAlpha=.5+e()*.5;const o=1+e()*2.5;t.save(),t.translate(e()*128,e()*128),t.rotate(e()*3.14),t.fillRect(-o/2,-o/3,o,o*.66),t.restore()}t.globalAlpha=1;const s=new En(n);return s.wrapS=s.wrapT=On,s.colorSpace=ke,s.anisotropy=4,Al=s,s}function Cf(n){const t=[];for(const s of n){const r=new Zn(.5,12);r.rotateX(-Math.PI/2),r.scale(s.r*2.4,1,s.r*2);const o=Jo(s.seed||1,911);r.rotateY(o*6.28),r.translate(s.x,s.y,s.z),t.push(r)}if(!t.length)return null;const e=Wi(t);t.forEach(s=>s.dispose());const i=new Q(e,new pt({map:KM(),roughness:1,metalness:0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));return i.receiveShadow=!0,i}function ZM(n,t,e){const i=e?.gust?e.gust(t):.5;for(const s of n){const r=s.userData.sway;r&&(s.rotation.x=Math.sin(t*r.freq+r.ph)*r.amp*(.5+i),s.rotation.z=Math.cos(t*r.freq*.8+r.ph)*r.amp*(.5+i))}}function Aa(n,t,e,i,s=!0,r=null){const o=[],a=new ne;if(s){const c=9+Math.floor(t()*4);for(let h=0;h<c;h++){const d=h/c*Math.PI*2+t()*.3,u=new Dt(.045+t()*.03,e*(.35+t()*.25),.07);a.position.set(Math.cos(d)*(i+.03),e*(.2+t()*.2),Math.sin(d)*(i+.03)),a.rotation.set((t()-.5)*.1,-d,(t()-.5)*.12),a.updateMatrix(),u.applyMatrix4(a.matrix),o.push(u)}}{const c=5+Math.floor(t()*3);for(let h=0;h<c;h++){const d=h/c*Math.PI*2+t()*.5,u=new ai(.07+t()*.05,.6+t()*.5,5);a.position.set(Math.cos(d)*(i+.25),.08,Math.sin(d)*(i+.25)),a.rotation.set(Math.PI/2-.25,0,-d+Math.PI/2),a.updateMatrix(),u.applyMatrix4(a.matrix),o.push(u)}}const l=new Q(Wi(o),r||n.barkSugi);return l.castShadow=!0,l}const ud=65,JM=80;function $M(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function QM(n){let t=n>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Ac(n){return QM($M("TREE_V2:"+n))}function lr(n,t,e){const i=new me(t*.72,t*e,n*.22,7,1);i.translate(0,n*.11,0);const s=new me(t*.62*.72,t*.72,n*.78,7,1);return s.translate(0,n*.22+n*.39,0),Wi([i,s])}function Pf(n,t){const e=new me(t*.55,t,n,5,1);return e.translate(0,n/2,0),e}function Df(n,t){return new Ae(n,t)}function xs(n,t,e,i,s,r,o){const a=Df(s,r),l=new ye(a,e,i.length),c=new ne,h=new Nt;for(let d=0;d<i.length;d++)c.position.copy(i[d].p),c.rotation.set(t()*.9-.45,t()*Math.PI*2,t()*.6-.3),c.updateMatrix(),l.setMatrixAt(d,c.matrix),h.set(o).offsetHSL((t()-.5)*.03,0,(t()-.5)*.08),l.setColorAt(d,h);return l.instanceMatrix.needsUpdate=!0,l.instanceColor&&(l.instanceColor.needsUpdate=!0),n.add(l),l}function Lf(n,t,e,i,s,r){const o=[],a=s*Math.PI/180;for(let l=0;l<t;l++){const c=n.y+l/t*i;for(let h=0;h<e;h++){const d=h/e*Math.PI*2+r()*.6,u=i*(.55-l*.09);o.push({p:new O(n.x+Math.cos(d)*u,c+Math.sin(a)*u*.5,n.z+Math.sin(d)*u)})}}return o}function Er(n,t){const e=new Kt,i=9+t()*4,s=new Q(lr(i,.28+t()*.12,1.5),n.barkSugi);e.add(s),e.add(Aa(n,t,i,.3,!0));const r=ud+t()*(JM-ud),o=Lf(new O(0,i*.5,0),4,5,i*.5,r-45,t);return xs(e,t,n.leafSugi,o,1.1,.9,2968106),e.userData={species:"sugi",h:i},e}function Rc(n,t){const e=new Kt,i=7+t()*2.5;e.add(new Q(lr(i,.24,1.3),n.barkHinoki));const s=Lf(new O(0,i*.45,0),4,6,i*.55,30,t);return xs(e,t,n.leafSugi,s,.95,.8,3824176),e.userData={species:"hinoki",h:i},e}function $o(n,t){const e=new Kt,i=2+Math.floor(t()*2),s=2.2+t()*.6,r=[],o=[];for(let a=0;a<i;a++){const l=.12+t()*.18,c=a/i*Math.PI*2+t(),h=s+t()*.5,d=lr(h,.22,1.35),u=new ae().makeRotationAxis(new O(Math.cos(c),0,Math.sin(c)),l);d.applyMatrix4(u),r.push(d);const f=3+Math.floor(t()*2);for(let g=0;g<f;g++){const v=g/f*Math.PI*2+t()*.8,p=2.2+t()*1.6,m=Pf(p,.09),y=new ne;y.position.set(Math.cos(c)*l*h*2,h*.96,Math.sin(c)*l*h*2),y.rotation.set(.6+t()*.35,v,0,"YXZ"),y.updateMatrix(),m.applyMatrix4(y.matrix),r.push(m);const w=new O(0,p,0).applyMatrix4(y.matrix);o.push({p:w}),o.push({p:w.clone().add(new O(t()-.5,.4,t()-.5))})}}return e.add(new Q(Wi(r),n.barkKeyaki)),e.add(Aa(n,t,3.2,.24,!1,n.barkKeyaki)),xs(e,t,n.leafBroad,o,1.5,1.1,4680501),e.userData={species:"keyaki"},e}function ma(n,t,e={}){const i=new Kt,s=3.5+t()*1.5,r=[lr(s*.55,.14,1.25)],o=[];for(let l=0;l<2;l++){const c=l*Math.PI+t()*.4;for(let h=0;h<2;h++){const d=Pf(1.6+t()*.8,.05),u=new ne;u.position.set(0,s*.55,0),u.rotation.set(.55+t()*.3,c+(h?.35:-.35),0,"YXZ"),u.updateMatrix(),d.applyMatrix4(u.matrix),r.push(d);const f=new O(0,1.6,0).applyMatrix4(u.matrix);o.push({p:f})}}const a=new Q(Wi(r),n.barkMomiji);return i.add(a),i.add(Aa(n,t,2.2,.15,!1,n.barkMomiji)),i.userData={species:"momiji",bare:a},e.bare||xs(i,t,n.leafMomiji,o,.9,.7,e.autumn?11024930:5929530),i}function Cc(n,t){const e=new Kt,i=2.6+t()*1.2,s=lr(i,.2,1.4);s.applyMatrix4(new ae().makeRotationZ(.12+t()*.12)),e.add(new Q(s,n.barkSugi)),e.add(Aa(n,t,i,.22,!0));const r=3+Math.floor(t()*3);for(let o=0;o<r;o++){const a=new xn(.9-o*.1,7,5);a.scale(1.25,.32,1.25),a.translate((t()-.5)*1.6,i*.6+o*.5,(t()-.5)*1.6);const l=new Q(a,n.leafPine);e.add(l)}return e.userData={species:"matsu"},e}function If(n,t,e){const i=new Kt,s=2.4+t()*.8;i.add(new Q(lr(s,.13,1.2),n.barkOrchard));const r=[];for(let h=0;h<6;h++){const d=h/6*Math.PI*2+t();r.push({p:new O(Math.cos(d)*1.1,s*.7+t()*.8,Math.sin(d)*1.1)})}xs(i,t,n.leafBroad,r,1,.8,6058040);const o=new xn(e==="kaki"?.07:.055,6,5),a=new Bn({color:e==="kaki"?14182942:8014370}),l=new ye(o,a,10),c=new ne;for(let h=0;h<10;h++){const d=r[Math.floor(t()*r.length)].p;c.position.set(d.x+(t()-.5)*.6,d.y-.25,d.z+(t()-.5)*.6),c.updateMatrix(),l.setMatrixAt(h,c.matrix)}return l.instanceMatrix.needsUpdate=!0,i.add(l),i.userData={species:e},i}function Pc(n,t){return If(n,t,"kaki")}function dd(n,t){return If(n,t,"kuri")}function Nf(n,t,e={}){const i=ma(n,t,{bare:!0});if(i.userData.species="sakura",!e.bare){const s=[];for(i.updateMatrixWorld(!0),i.traverse(r=>{if(r.isMesh&&r.geometry){const o=new O;r.geometry.computeBoundingBox(),r.geometry.boundingBox.getCenter(o),r.localToWorld(o),i.worldToLocal(o),o.y>1.5&&s.push({p:o.clone()})}});s.length<6;)s.push({p:new O((t()-.5)*3,2.5+t(),(t()-.5)*3)});xs(i,t,n.leafBlossom,s.slice(0,8),1.2,.9,15247544)}return i}function Xs(n,t,e="moso"){const i=new Kt,s=e==="moso"?5+Math.floor(t()*6):8+Math.floor(t()*8),r=e==="moso"?.06:.03,o=e==="moso"?7+t()*3:4+t()*2,a=[],l=[];for(let c=0;c<s;c++){const h=(t()-.5)*2.4,d=(t()-.5)*2.4,u=o*(.85+t()*.3),f=new me(r*.8,r,u,6,1);f.translate(h,u/2,d),a.push(f),l.push({p:new O(h,u*.78,d)}),l.push({p:new O(h+.2,u*.95,d)})}if(i.add(new Q(Wi(a),n.culm)),xs(i,t,n.leafBamboo,l,.9,.6,4878392),e==="moso"){const c=new ai(.16,.35,6),h=new ye(c,n.shoot,4),d=new ne;for(let u=0;u<4;u++)d.position.set((t()-.5)*2.6,.17,(t()-.5)*2.6),d.updateMatrix(),h.setMatrixAt(u,d.matrix);h.instanceMatrix.needsUpdate=!0,i.add(h)}return i.userData={species:"bamboo-"+e},i}function Uf(n,t,e=4){const i=new Kt,s=new ne,r=new ye(Df(.7,.5),n.leafSasa,14);for(let d=0;d<14;d++)s.position.set((t()-.5)*e,.25,(t()-.5)*e),s.rotation.set(0,t()*3.14,0),s.updateMatrix(),r.setMatrixAt(d,s.matrix);r.instanceMatrix.needsUpdate=!0,i.add(r);const o=new ye(new ai(.3,.5,5,1,!0),n.leafFern,8);for(let d=0;d<8;d++)s.position.set((t()-.5)*e,.25,(t()-.5)*e),s.rotation.set(0,t()*3.14,0),s.updateMatrix(),o.setMatrixAt(d,s.matrix);o.instanceMatrix.needsUpdate=!0,i.add(o);const a=new ye(new xn(.3,6,4,0,6.3,0,1.2),n.moss,6);for(let d=0;d<6;d++)s.position.set((t()-.5)*e,.02,(t()-.5)*e),s.scale.setScalar(.7+t()*.8),s.rotation.set(0,0,0),s.updateMatrix(),a.setMatrixAt(d,s.matrix);a.instanceMatrix.needsUpdate=!0,s.scale.setScalar(1),i.add(a);const l=new ye(new ai(.12,.45,5),n.leafSeedling,10);for(let d=0;d<10;d++)s.position.set((t()-.5)*e,.22,(t()-.5)*e),s.rotation.set(0,t()*3.14,0),s.updateMatrix(),l.setMatrixAt(d,s.matrix);l.instanceMatrix.needsUpdate=!0,i.add(l);const c=new Q(new me(.16,.2,2.4,7),n.barkSugi);c.rotation.set(Math.PI/2,0,t()*3.14),c.position.y=.18,i.add(c);for(let d=0;d<3;d++){const u=new Q(new ai(.09,.3,5),n.leafSeedling);u.position.set(-.7+d*.7,.42,0),i.add(u)}const h=new ye(new Zn(.35,7),n.litter,10);for(let d=0;d<10;d++)s.position.set((t()-.5)*e,.015,(t()-.5)*e),s.rotation.set(-Math.PI/2,0,t()*3.14),s.updateMatrix(),h.setMatrixAt(d,s.matrix);return h.instanceMatrix.needsUpdate=!0,i.add(h),i.userData={species:"understory"},i}function ce(n,t,e){let i=Math.imul(n,374761393)+Math.imul(t,668265263)+Math.imul(e,1442695041)|0;return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967296}function ks(n,t,e,i,s=130){const r=Ec(7,3,i),o=[];for(let a=0;a<4e3&&o.length<t;a++){const l=r()*Math.PI*2,c=30+Math.sqrt(r())*(s-30),h=Math.cos(l)*c,d=Math.sin(l)*c*.9+6,u=ph(h,d);n.includes(u)&&(Tc(h,d)<4||Math.hypot(h+48,d+28)<10||Kr(h,d)>.55||Math.abs(d-(34+8*Math.sin(h*.045)))<6||o.some(([f,g])=>Math.hypot(f-h,g-d)<e)||o.push([h,d]))}return o}function jM(n,t){const i=Math.floor(n/22),s=Math.floor(t/22),r=n/22-i,o=t/22-s,a=r*r*(3-2*r),l=o*o*(3-2*o),c=ce(i,s,201),h=ce(i+1,s,201),d=ce(i,s+1,201),u=ce(i+1,s+1,201),f=c+(h-c)*a+(d-c)*l+(c-h-d+u)*a*l,g=ce(i*3+11,s*3+7,202);return Math.min(1,Math.max(0,f*.72+g*.28))}function tS(n,t,e,i,s){const r=ce(Math.floor(e/12),Math.floor(i/12),203);return n==="bamboo"?"bamboo":n==="mountain"||n==="slope"?r<.68?"sugi":"hinoki":t<48?r<.55?"momiji":"pine":n==="maple"?r<.62?"momiji":"pine":n==="grassland"||n==="outskirts"?r<.5?"pine":"momiji":s()<.5?"sugi":"hinoki"}function eS(){const n=[new ut(.24,0),new ut(.2,.12),new ut(.13,.5),new ut(.105,1.2),new ut(.085,2),new ut(.06,2.6)],t=new sr(n,6);return t.computeVertexNormals(),t}function zo(n,t,e){const i=cf(n),s=i.attributes.position;for(let r=0;r<s.count;r++){const o=1+(ce(r,t,9)-.5)*e;s.setXYZ(r,s.getX(r)*o,s.getY(r)*(1+(ce(r,t+1,9)-.5)*e*.6),s.getZ(r)*o)}return i.computeVertexNormals(),i}function nS(n){let t=0;const e=n.map(a=>a.toNonIndexed());for(const a of e)t+=a.attributes.position.count;const i=new Float32Array(t*3),s=new Float32Array(t*3);let r=0;for(const a of e)i.set(a.attributes.position.array,r*3),a.attributes.normal&&s.set(a.attributes.normal.array,r*3),r+=a.attributes.position.count,a.dispose();const o=new ge;return o.setAttribute("position",new Me(i,3)),o.setAttribute("normal",new Me(s,3)),o}function fd(n,t){if(n==="sugi"){const s=new ai(1.05,4.2,7,3);return s.translate(0,2.1,0),zo(s,t,.22)}if(n==="hinoki"){const s=new ai(1.3,3.9,8,2);return s.translate(0,1.95,0),zo(s,t,.3)}if(n==="pine"){const s=new xn(1.6,8,4,0,Math.PI*2,0,Math.PI*.55);return s.scale(1,.45,1),s.translate(0,2.6,0),zo(s,t,.2)}if(n==="bamboo"){const s=new Jn(.95,0);return s.scale(1,1.4,1),s.translate(0,2.4,0),zo(s,t,.35)}const e=[],i=[[0,1.6,0,1.35],[.7,2.2,.3,1],[-.6,2.7,-.2,.75]];for(let s=0;s<i.length;s++){const[r,o,a,l]=i[s],c=new Jn(l,1);c.scale(1.25,.55,1.25),c.translate(r,o,a);const h=c.attributes.position,d=[];for(let g=0;g<h.count;g+=3)if(!(ce(g+s*131,t,12)<.4))for(let p=0;p<3;p++)d.push(h.getX(g+p),h.getY(g+p),h.getZ(g+p));const u=new ge;u.setAttribute("position",new Me(new Float32Array(d),3));const f=cf(u);f.computeVertexNormals(),e.push(f),c.dispose()}return nS(e)}function iS(n){const t=new Kt;t.name="ecology";const e=[],i=[],s=c=>(c?.userData?.sway&&e.push(c),c?.userData?.tick&&i.push(c.userData.tick),c),r=ks(["maple"],3,14,101,70);r.forEach(([c,h],d)=>{const u=Te(c,h),f=Tf(n,500+d,1+ce(d,3,5)*.5,.35+ce(d,9,6)*.5,0,0);f.position.set(c,u,h),f.rotation.y=ce(d,13,7)*6.28,ko(t,f),s(f)});{const c=r.map(([d,u],f)=>({x:d,y:Te(d,u)+.05,z:u,r:1.2,seed:720+f})),h=Cf(c);h&&t.add(h)}ks(["bamboo"],2,16,102,80).forEach(([c,h],d)=>{const u=Af(n,510+d,0,0);u.position.set(c,Te(c,h),h),ko(t,u),s(u)}),ks(["maple","grassland","outskirts","slope"],8,12,103).forEach(([c,h],d)=>{const u=mh(520+d,.5+ce(d,21,8)*.6);u.position.set(c,Te(c,h)+.2,h),ko(t,u),s(u)}),ks(["grassland","field","outskirts","riverbank"],6,14,104).forEach(([c,h],d)=>{const u=gh(530+d,50,[5,5]);u.position.set(c,Te(c,h)+.03,h),ko(t,u)});{const c=Ec(11,5,201),h=eS(),d={hinoki:fd("hinoki",212),bamboo:fd("bamboo",214)},u=new pt({color:4864552,roughness:.95}),f=new pt({roughness:.95}),g=new pt({roughness:.8,side:Oe}),v={sugi:[],hinoki:[],momiji:[],bamboo:[],pine:[]},p={sugi:30,hinoki:65,momiji:20,bamboo:35,pine:15};for(let _=0;_<2500&&!(v.sugi.length+v.hinoki.length+v.momiji.length+v.bamboo.length+v.pine.length>=340);_++){const b=c()*Math.PI*2,R=32+Math.sqrt(c())*105,x=Math.cos(b)*R,S=Math.sin(b)*R*.9+6,E=ph(x,S);if(!["maple","bamboo","grassland","slope","mountain","outskirts"].includes(E)||Tc(x,S)<3.5||Kr(x,S)>.7||Math.abs(S-(34+8*Math.sin(x*.045)))<5||Math.hypot(x+48,S+28)<9)continue;const T=jM(x,S);if(T<.28||T<.45&&ce(_,61,204)<.6)continue;const C=tS(E,Math.hypot(x,S),x,S,c);if(v[C].length>=p[C])continue;const P=Te(x,S),L=.75+ce(_,62,205)*.5,I=(E==="mountain"?.8+c()*.5:1+c()*.9)*L;v[C].push({x,y:P,z:S,sc:I,ry:c()*6.28,seed:_})}const m=new ne,y=new Nt,w=["hinoki","bamboo"];for(const _ of w){const M=v[_];if(!M.length)continue;const b=new ye(h,u,M.length),R=_==="momiji"?g:f,x=new ye(d[_],R,M.length),S=new Float32Array(M.length),E=new Float32Array(M.length),T=new Float32Array(M.length);M.forEach((C,P)=>{const L=_==="bamboo"?[C.sc*.45,C.sc*1.5,C.sc*.45]:[C.sc,C.sc,C.sc];m.position.set(C.x,C.y-.05,C.z),m.rotation.set(0,C.ry,0),m.scale.set(L[0],L[1],L[2]),m.updateMatrix(),b.setMatrixAt(P,m.matrix);const I=_==="bamboo"?C.y+1.2*C.sc:_==="pine"?C.y+.9*C.sc:C.y+1*C.sc;m.position.set(C.x,I,C.z),m.rotation.set(0,C.ry+ce(P,71,206)*6.28,0);const N=_==="momiji"?C.sc*1.1:_==="pine"?C.sc*1.15:C.sc;m.scale.set(N,N*(_==="bamboo"?1.5:1),N),m.updateMatrix(),x.setMatrixAt(P,m.matrix),_==="sugi"?y.setHSL(.36+ce(P,43,3)*.03,.42,.16+ce(P,44,4)*.06):_==="hinoki"?y.setHSL(.33+ce(P,43,3)*.04,.4,.22+ce(P,44,4)*.07):_==="momiji"?y.setHSL(.02+ce(P,43,3)*.09,.62,.32+ce(P,44,4)*.12):_==="bamboo"?y.setHex(4157488).offsetHSL(0,0,(ce(P,44,4)-.5)*.06):y.setHSL(.3+ce(P,43,3)*.05,.38,.24+ce(P,44,4)*.07),x.setColorAt(P,y),S[P]=ce(P,72,207),E[P]=_==="momiji"?.35+ce(P,73,208)*.65:0,T[P]=ce(P,71,206)*6.28}),x.geometry=x.geometry.clone(),x.geometry.setAttribute("aWind",new Zs(S,1)),x.geometry.setAttribute("aAutumn",new Zs(E,1)),x.geometry.setAttribute("aUvRot",new Zs(T,1)),b.instanceMatrix.needsUpdate=!0,x.instanceMatrix.needsUpdate=!0,x.instanceColor&&(x.instanceColor.needsUpdate=!0),b.castShadow=!1,b.receiveShadow=!1,x.castShadow=!1,x.receiveShadow=!1,b.frustumCulled=!0,x.frustumCulled=!0,t.add(b,x)}{const M={sugi:"sugi",momiji:"momiji",pine:"matsu"},b={sugi:n.barkSugi,momiji:n.barkMomiji,pine:n.barkOrchard},R={sugi:n.leafSugi,momiji:n.leafMomiji,pine:n.leafPine},x={sugi:.85,momiji:.9,pine:1.1},S={sugi:0,momiji:1,pine:2},E=T=>{const C=T.map(U=>U.toNonIndexed());let P=0;for(const U of C)P+=U.attributes.position.count;const L=new Float32Array(P*3),I=new Float32Array(P*3),N=new Float32Array(P*2);let B=0;for(const U of C)L.set(U.attributes.position.array,B*3),I.set(U.attributes.normal.array,B*3),N.set(U.attributes.uv.array,B*2),B+=U.attributes.position.count,U.dispose();const G=new ge;return G.setAttribute("position",new Me(L,3)),G.setAttribute("normal",new Me(I,3)),G.setAttribute("uv",new Me(N,2)),G};for(const T of["sugi","momiji","pine"]){const C=v[T];if(!C.length)continue;const P=VM[M[T]];for(let L=0;L<5;L++){const I=C.filter((wt,bt)=>bt%5===L);if(!I.length)continue;const N=Math.floor(ce(S[T]*57+L*13,301,302)*1e9),B=HM({...P,seed:N,radialSegments:5,sectionLength:1.6}),G=[],U=new ne;for(const wt of B.tips)for(let bt=0;bt<2;bt++){const Qt=new Ae(x[T],x[T]*.8);U.position.copy(wt),U.rotation.set(0,(wt.x*3.1+wt.z*1.7+bt*Math.PI/2)%(Math.PI*2),0),U.updateMatrix(),Qt.applyMatrix4(U.matrix),G.push(Qt)}const k=E(G),X=new ye(B.geometry,b[T],I.length),dt=new ye(k,R[T],I.length),yt=new ne;I.forEach((wt,bt)=>{yt.position.set(wt.x,wt.y-.05,wt.z),yt.rotation.set(0,wt.ry,0),yt.scale.set(wt.sc,wt.sc,wt.sc),yt.updateMatrix(),X.setMatrixAt(bt,yt.matrix),dt.setMatrixAt(bt,yt.matrix),T==="sugi"?y.setHSL(.36+ce(bt,43,3)*.03,.42,.16+ce(bt,44,4)*.06):T==="momiji"?y.setHSL(.02+ce(bt,43,3)*.09,.62,.32+ce(bt,44,4)*.12):y.setHSL(.3+ce(bt,43,3)*.05,.38,.24+ce(bt,44,4)*.07),X.setColorAt(bt,y),T==="sugi"?y.setHSL(.33+ce(bt,45,5)*.04,.45,.25+ce(bt,46,6)*.08):T==="momiji"?y.setHSL(.05+ce(bt,45,5)*.08,.6,.35+ce(bt,46,6)*.1):y.setHSL(.29+ce(bt,45,5)*.05,.42,.28+ce(bt,46,6)*.08),dt.setColorAt(bt,y)}),X.instanceMatrix.needsUpdate=!0,dt.instanceMatrix.needsUpdate=!0,X.instanceColor&&(X.instanceColor.needsUpdate=!0),dt.instanceColor&&(dt.instanceColor.needsUpdate=!0),X.castShadow=!1,X.receiveShadow=!1,dt.castShadow=!1,dt.receiveShadow=!1,X.frustumCulled=!1,dt.frustumCulled=!1,t.add(X,dt)}}}}{const c={barkSugi:n.barkSugi,barkHinoki:n.barkHinoki,barkKeyaki:n.barkKeyaki,barkMomiji:n.barkMomiji,barkOrchard:n.barkOrchard,leafSugi:n.leafSugi,leafBroad:n.leafBroad,leafMomiji:n.leafMomiji,leafBlossom:n.leafBlossom,leafPine:n.leafPine,leafBamboo:n.leafBamboo,leafSasa:n.leafSasa,leafFern:n.leafFern,leafSeedling:n.leafSeedling,culm:n.bamboo,shoot:n.shoot,litter:n.litter,moss:n.moss,impostor:n.impostor},h=Ec(9,4,301),d=(g,v,p=!1)=>!(Tc(g,v)<3||Math.abs(v-(34+8*Math.sin(g*.045)))<5||Kr(g,v)>.6||!p&&Math.hypot(g+48,v+28)<9),u=(g,v,p,m={})=>{if(!d(v,p,m.shrineOK))return;const y=Ac(`village:${m.key||g.name}:${v.toFixed(1)},${p.toFixed(1)}`),w=g(c,y,m.arg);w.position.set(v,Te(v,p)+(m.sink||0),p),w.rotation.y=y()*6.28;const _=(m.s||1)*(.92+y()*.2);w.scale.setScalar(_),w.traverse(M=>{M.isMesh&&!M.isInstancedMesh&&(M.castShadow=!0)}),t.add(w)};u($o,18+(h()-.5)*3,8+(h()-.5)*3,{key:"keyaki-meet"}),u($o,-20+(h()-.5)*3,-6+(h()-.5)*3,{key:"keyaki-west"}),u($o,6+(h()-.5)*3,-20+(h()-.5)*3,{key:"keyaki-south"}),u(Nf,-38,-20,{key:"sakura-gather"}),u(Cc,-40,-22,{key:"matsu-shrine"}),u(Cc,26,14,{key:"matsu-street"}),u(Rc,-55,-20,{key:"hinoki-L",shrineOK:!0}),u(Rc,-44,-32,{key:"hinoki-R",shrineOK:!0}),u(Er,-10,24,{key:"sugi-1"}),u(Er,16,32,{key:"sugi-2"}),u(Er,-30,12,{key:"sugi-3"}),u(Er,30,-8,{key:"sugi-4"}),u(Pc,-6,44,{key:"kaki-1",s:.95}),u(Pc,-2,44.5,{key:"kaki-2",s:.9}),u(dd,2,48,{key:"kuri-1",s:.95}),u(dd,6,48.5,{key:"kuri-2",s:.9}),u(Xs,-26,20,{key:"moso-1",arg:"moso"}),u(Xs,24,24,{key:"moso-2",arg:"moso"});for(let g=0;g<3;g++)u(Xs,10+g*4,-4+(h()-.5),{key:`madake-e${g}`,arg:"madake",s:.8}),u(Xs,-12+g*4,-12+(h()-.5),{key:`madake-w${g}`,arg:"madake",s:.8});u(ma,12,30,{key:"momiji-river",arg:{autumn:!0}}),u(ma,-34,-14,{key:"momiji-shrine",arg:{autumn:!1}}),[...ks(["maple"],2,14,101,70).map(([g,v])=>[g+2,v+1]),...ks(["bamboo"],1,16,102,80).map(([g,v])=>[g-2,v-1])].forEach(([g,v],p)=>{if(!d(g,v))return;const m=Ac(`village:under:${p}`),y=Uf(c,m,5);y.position.set(g,Te(g,v)+.02,v),t.add(y)})}return{group:t,vegRoots:e,tickers:i}}function ko(n,t){n.add(t)}const sS=[{name:"sugiA",set:"pine",x:37,z:57,ry:.7,h:11},{name:"sugiB",set:"pine",x:73,z:57,ry:2.4,h:10},{name:"oakA",set:"oak",x:51,z:46,ry:1.9,h:8},{name:"oakB",set:"oak",x:59,z:46,ry:4.2,h:8.5}],rS={pine:{color:"pine_color_1k.jpg",normal:"pine_normal_1k.jpg",rough:"pine_roughness_1k.jpg",leaf:"pine_color.png"},oak:{color:"oak_color_1k.jpg",normal:"oak_normal_1k.jpg",rough:"oak_roughness_1k.jpg",leaf:"oak_color.png"}},Go={};function oS(n){if(Go[n])return Go[n];const t=rS[n],e=new pt({color:12163712,roughness:.95,envMapIntensity:.15}),i=new rh,s=()=>{},r=(a,l)=>(a.colorSpace=l?ke:Un,a.wrapS=a.wrapT=On,a.anisotropy=4,a);i.load(`vendor/eztree/${t.color}`,a=>{e.map=r(a,!0),e.needsUpdate=!0},void 0,s),i.load(`vendor/eztree/${t.normal}`,a=>{e.normalMap=r(a,!1),e.needsUpdate=!0},void 0,s),i.load(`vendor/eztree/${t.rough}`,a=>{e.roughnessMap=r(a,!1),e.roughness=1,e.needsUpdate=!0},void 0,s);const o=new pt({color:16777215,roughness:.85,side:Oe,alphaTest:.45,envMapIntensity:.1});return i.load(`vendor/eztree/${t.leaf}`,a=>{a.colorSpace=ke,o.map=a,o.needsUpdate=!0},void 0,()=>{}),Go[n]={bark:e,leaf:o},Go[n]}function aS(n){const t=new Kt;t.name="ezHeroes";const e=new hm,i=()=>{};for(const s of sS){const{bark:r,leaf:o}=oS(s.set),a=n(s.x,s.z),l=new Kt;l.position.set(s.x,a-.05,s.z),l.rotation.y=s.ry,l.visible=!1,t.add(l);let c=0,h=null;const d=(u,f,g,v)=>{u.computeBoundingBox();const p=u.boundingBox;if(v){if(l.userData.s=s.h/Math.max(.001,p.max.y-p.min.y),h){const w=h;h=null,d(w,o,!1,!1)}}else if(l.userData.s===void 0){h=u;return}const m=l.userData.s,y=new Q(u,f);y.scale.setScalar(m),y.position.y=-p.min.y*m,y.castShadow=g,l.add(y),++c===2&&(l.visible=!0)};e.load(`vendor/eztree/ezhero-${s.name}-bark.json`,u=>d(u,r,!0,!0),void 0,i),e.load(`vendor/eztree/ezhero-${s.name}-leaf.json`,u=>d(u,o,!1,!1),void 0,i)}return t}const lS=[["SUGI","sugi",37,52,.8],["KEYAKI","keyaki",46,52,.8],["MOMIJI","momiji",55,52,.85],["MATSU","matsu",64,52,.9],["SAKURA","sakura",73,52,.85],["HINOKI","hinoki",37,61,.85],["KAKI","kaki",46,61,.9],["MOSO","moso",55,61,1],["MADAKE","madake",64,61,.9],["SHITAKUSA","under",73,61,1]],cS={sugi:(n,t)=>Er(n,t),keyaki:(n,t)=>$o(n,t),momiji:(n,t)=>ma(n,t,{autumn:!0}),matsu:(n,t)=>Cc(n,t),sakura:(n,t)=>Nf(n,t),hinoki:(n,t)=>Rc(n,t),kaki:(n,t)=>Pc(n,t),moso:(n,t)=>Xs(n,t,"moso"),madake:(n,t)=>Xs(n,t,"madake"),under:(n,t)=>Uf(n,t,5)};function Ho(n,t,e,i,s,r){const o=new Kt,a=n.woodAged||n.woodDark||n.wood,l=n.woodNew||n.wood,c=new Q(new Dt(.09,1.1,.09),a);c.position.y=.55,c.castShadow=!0;const h=new Q(new Dt(1.15,.34,.05),l);h.position.y=1.05,h.castShadow=!0,o.add(c,h);const d=Mi(t,{size:.16,tracking:.3}),u=new pt({color:2760728,roughness:.9}),f=qr([{text:t,size:.16,tracking:.3,ox:-d.width/2,oy:.96,oz:.028}],u);return o.add(f),o.position.set(e,i,s),o.rotation.y=r,o}function Gs(n,t,e,i,s,r=1,o=1.6,a=.3){const l=new Kt,c=n.woodNew||n.wood,h=new Q(new Dt(r,.3,.045),c);h.position.set(0,o,a),h.castShadow=!0,l.add(h);const d=t.length>7?.12:.15,u=Mi(t,{size:d,tracking:.3}),f=new pt({color:2103314,roughness:.9}),g=qr([{text:t,size:d,tracking:.3,ox:-u.width/2,oy:o-.08,oz:a+.026}],f);return l.add(g),l.position.set(e,i,s),l.rotation.y=Math.PI,l}function hS(n,t){const e=new Kt;e.name="testingZone";const i={barkSugi:n.barkSugi,barkHinoki:n.barkHinoki,barkKeyaki:n.barkKeyaki,barkMomiji:n.barkMomiji,barkOrchard:n.barkOrchard,leafSugi:n.leafSugi,leafBroad:n.leafBroad,leafMomiji:n.leafMomiji,leafBlossom:n.leafBlossom,leafPine:n.leafPine,leafBamboo:n.leafBamboo,leafSasa:n.leafSasa,leafFern:n.leafFern,leafSeedling:n.leafSeedling,culm:n.bamboo,shoot:n.shoot,litter:n.litter,moss:n.moss,impostor:n.impostor};e.add(Ho(n,"TREE TESTING ZONE",55,t(55,47),47,Math.PI)),e.add(Ho(n,"EZ SUGI A",37,t(37,58.5),58.5,Math.PI*.85)),e.add(Ho(n,"EZ SUGI B",73,t(73,58.5),58.5,Math.PI*.85));for(const[s,r,o,a,l]of lS){const c=t(o,a),h=Ac(`testzone:${r}`),d=cS[r](i,h);d.position.set(o,c,a),d.rotation.y=h()*6.28,d.scale.setScalar(l),d.traverse(u=>{u.isMesh&&!u.isInstancedMesh&&(u.castShadow=!0)}),e.add(d),e.add(Ho(n,s,o+2.2,t(o+2.2,a+1.5),a+1.5,Math.PI*.85)),r==="under"||(r==="moso"||r==="madake"?e.add(Gs(n,s,o,c,a,1,1.7,.14)):e.add(Gs(n,s,o,c,a)))}return e.add(Gs(n,"EZ SUGI A",37,t(37,57),57,1.25)),e.add(Gs(n,"EZ SUGI B",73,t(73,57),57,1.25)),e.add(Gs(n,"EZ OAK A",51,t(51,46),46,1.15)),e.add(Gs(n,"EZ OAK B",59,t(59,46),46,1.15)),e}const uS=[{name:"hamletA",cx:-27,cz:34,seed:201,w:6,d:5,wallH:2.9,roofType:"kirizuma",pitch:30,facadeCols:3,doorSide:-1,engawa:.8,woodTone:.3,age:.7,winLayout:[1,0,2]},{name:"hamletB",cx:13,cz:24,seed:202,w:6,d:5.5,wallH:3,roofType:"yosemune",pitch:31,facadeCols:3,doorSide:1,engawa:0,woodTone:.6,age:.4,winLayout:[2,0,1]},{name:"hamletC",cx:22,cz:28,seed:203,w:6,d:5,wallH:2.8,roofType:"kirizuma",pitch:29,facadeCols:3,doorSide:1,engawa:.8,woodTone:.5,age:.55,winLayout:[1,2,0]}],dS=[{name:"farmhouse",cx:13,cz:29,seed:204,w:7.5,d:6,wallH:3.2,roofType:"kirizuma",pitch:32,facadeCols:4,doorSide:1,engawa:1,woodTone:.35,age:.6,winLayout:[1,2,1,0]},{name:"barn",cx:20,cz:30,seed:205,w:5,d:7,wallH:3.6,roofType:"kirizuma",pitch:40,facadeCols:2,doorSide:0,engawa:0,woodTone:.25,age:.8,winLayout:[0,0],glow:!1}];function fS(n){df(n);const t=new Kt;t.name="settlement";const e=[];for(const[s,r]of[[uS,40],[dS,50]])for(const[o,a]of s.entries()){const l=pf({...a}),c=Te(a.cx,a.cz);l.group.position.set(a.cx,c,a.cz),t.add(l.group),e.push({name:a.name,group:l.group,glowMats:a.glow===!1?[]:l.glowMats,sliders:l.sliders||[],params:{...a},pos:new O(a.cx,c,a.cz),w:a.w,d:a.d});const[h,d]=ki(a.cx,a.cz);fs(h,d,[{id:ds("house",h,d,r+o),type:"house",x:a.cx,z:a.cz,y:c,data:{name:a.name}}])}{const s={W:[],D:[]},r=[{x1:-30,z1:37.5,x2:-24,z2:37.5},{x1:8.5,z1:27.5,x2:8.5,z2:32}];for(const a of r){const l=Math.hypot(a.x2-a.x1,a.z2-a.z1),c=Math.max(2,Math.floor(l/1.4));for(let d=0;d<=c;d++){const u=d/c,f=a.x1+(a.x2-a.x1)*u,g=a.z1+(a.z2-a.z1)*u,v=new Dt(.1,1,.1);v.translate(f,Te(f,g)+.5,g),s.D.push(v)}const h=Math.atan2(a.x2-a.x1,a.z2-a.z1)+Math.PI/2;for(const d of[.85,.4]){const u=new Dt(l,.08,.06),f=new ae().makeRotationY(h),g=(a.x1+a.x2)/2,v=(a.z1+a.z2)/2;f.setPosition(g,Te(g,v)+d,v),u.applyMatrix4(f),s.D.push(u)}}const o=new pt({color:5916208,roughness:.85});for(const a of Object.keys(s)){if(!s[a].length)continue;const l=new Q(ln(s[a],!1),o);l.castShadow=!0,l.receiveShadow=!0,t.add(l)}}return lM().forEach((s,r)=>{const a=s.w-1,l=s.d-.5*2,c=[],h=.35,d=.4;for(const[x,S,E,T]of[[a+d*2,d,0,-l/2],[a+d*2,d,0,l/2],[d,l,-a/2,0],[d,l,a/2,0]]){const C=new Dt(x,h,S);C.translate(s.cx+E,s.y+h/2-.05,s.cz+T),c.push(C)}const u=new Q(ln(c,!1),new pt({color:7035456,roughness:1}));u.castShadow=!0,u.receiveShadow=!0,t.add(u);const f=new Q(new Ae(a,l),new pt({color:3360842,roughness:.12,metalness:.7,envMapIntensity:.9,transparent:!0,opacity:.95}));f.rotation.x=-Math.PI/2,f.position.set(s.cx,s.y+.12,s.cz),f.receiveShadow=!0,t.add(f),t.userData["paddyWater"+r]=f.material;const g=new Ae(.22,.4);g.translate(0,.2,0);const v=ln([g,g.clone().rotateY(Math.PI/2)],!1),p=new pt({color:6982204,roughness:.9,side:Oe}),m=7,y=22,w=new ye(v,p,m*y),_=new ne;let M=0;for(let x=0;x<m;x++)for(let S=0;S<y;S++){_.position.set(s.cx-a/2+.4+(a-.8)*S/(y-1),s.y+.1,s.cz-l/2+.4+(l-.8)*(x+.5)/m),_.rotation.set(0,(x*y+S)%8*.4,0);const E=.8+(x*31+S*17)%10/10*.5;_.scale.set(E,E,E),_.updateMatrix(),w.setMatrixAt(M++,_.matrix)}w.instanceMatrix.needsUpdate=!0,w.castShadow=!1,w.receiveShadow=!0,t.add(w);const[b,R]=ki(s.cx,s.cz);fs(b,R,[{id:ds("paddy",b,R,r),type:"paddy",x:s.cx,z:s.cz,y:s.y,data:{}}])}),{group:t,houses:e}}const be=.69,Ee=.012;function pS(n){let t=2166136261;const e=String(n??"home");for(let i=0;i<e.length;i++)t^=e.charCodeAt(i),t=Math.imul(t,16777619);return t>>>0}function Ra(n){let t=n>>>0||1;return function(){t+=1831565813;let e=Math.imul(t^t>>>15,t|1);return e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Ca(n,t){return((typeof n.seed=="number"?n.seed>>>0:pS(n.seed??n.name??"house"))^Math.imul(t>>>0,2654435761))>>>0}const Rl={};function Cl(n,t,e=.9){return Rl[n]||(Rl[n]=new pt({color:t,roughness:e,metalness:0})),Rl[n]}function Of(n){const t=n||{},e=t.wood||t.timber||t.beam||t.frame||Cl("wood",8018490),i=t.dark||t.iron||t.charcoal||t.kitchen||Cl("dark",3025446,.85),s=t.ceramic||t.pot||t.clay||t.plaster||Cl("ceramic",12101774,.6),r=t.stone||t.rock||t.step||i,o=t.fabric||t.cloth||t.curtain||t.noren||i;return{wood:e,dark:i,ceramic:s,stone:r,fabric:o}}function nn(n,t,e,i,s,r,o,a=0){const l=new Dt(t,e,i);a&&l.rotateY(a),l.translate(s,r,o),n.push(l)}function li(n,t,e,i,s,r,o,a,l=!1){const c=new me(t,e,i,s,1,l);c.translate(r,o,a),n.push(c)}function mS(n,t,e,i,s,r,o){const a=new ai(t,e,i);a.translate(s,r,o),n.push(a)}function gS(n,t,e,i,s,r,o,a,l=8,c=6){const h=new xn(t,l,c);h.scale(e,i,s),h.translate(r,o,a),n.push(h)}function _S(n,t,e,i,s,r,o){const a=new me(t,t,e,i);a.rotateX(Math.PI/2),a.translate(s,r,o),n.push(a)}function _h(n,t,e,i,s,r,o=0,a="z"){const l=new me(t,t,e,6);o&&(a==="z"?l.rotateX(o):l.rotateZ(o)),l.translate(i,s,r),n.push(l)}function qn(n,t,e){if(!t.length)return null;const i=ln(t,!1);for(const r of t)r.dispose();if(!i)return null;const s=new Q(i,e);return n.add(s),s}function xS(n,t,e){const i=[],s=[],r=Of(e),o=Math.max(2.2,t.w??3.4),a=Math.max(2.4,t.d??3.6),l=t.kind??"home",c=-a/2+.25,h=o/2-.2,d=Math.max(.8,h-.35);if(l==="home"){const u=pd(n,t,r,{w:o,d:a,zBack:c,sideX:h,hw:d});if(u&&u.glow)for(const f of u.glow)s.push(f)}else if(l==="shop")vS(n,t,r,{w:o,d:a,zBack:c},i);else if(l==="farm"||l==="shed")yS(n,t,r,{d:a,zBack:c,sideX:h});else if(l==="hero")MS(n,t,r,{zBack:c,hw:d});else{const u=pd(n,t,r,{w:o,d:a,zBack:c,sideX:h,hw:d});if(u&&u.glow)for(const f of u.glow)s.push(f)}return{cloth:i,glow:s}}function pd(n,t,e,i){const s=Ra(Ca(t,48879)),r=[],o=[],a=[],{zBack:l,sideX:c,hw:h}=i,d=Math.min(1.7,i.w-1.2),u=-Math.min(.9,h*.45)+(s()-.5)*.2,f=l+.3,g=Math.min(1.15,(t.wallH??1.9)-.55),v=d/2-.04;for(const E of[-1,1])nn(r,.08,g,.32,u+E*v,be+Ee+g/2,f);const p=[.28,.58,.88].filter(E=>E<g);for(const E of p)nn(r,d,.05,.34,u,be+Ee+E,f);const m=5+Math.floor(s()*3);for(let E=0;E<m;E++){const T=p[E%p.length],C=u-d/2+.18+E*(d-.36)/Math.max(1,m-1)+(s()-.5)*.04,P=.055+s()*.035,L=E%3===2?.07+s()*.03:.12+s()*.06;li(a,P,P*.85,L,8,C,be+Ee+T+.025+L/2,f+(s()-.5)*.1)}const y=c-.32;_S(o,.17,Math.min(1.6,i.d-1.4),8,y,be+Ee+.17,-.15),nn(o,.38,.12,.26,y,be+Ee+.06,.78);const w=-(c-.38);nn(r,.46,.44,.46,w,be+Ee+.22,.62),nn(r,.4,.36,.4,w+.03,be+Ee+.44+.012+.18,.6);const _=Math.min(h,c-.55),M=l+.62;nn(r,.72,.24,.5,_,be+Ee+.12,M),nn(o,.42,.36,.42,_-.08,be+Ee+.24+.012+.18,M),li(o,.16,.14,.15,8,_-.08,be+Ee+.24+.012+.36+.012+.075,M);for(let E=0;E<3;E++)li(a,.09,.09,.026,8,_+.16+E%2*.02,be+Ee+.24+.012+.013+Math.floor(E/2)*.03,M-.12+E*.11);const b=[],R=p.length>1?p[1]:p[0];if(R!==void 0){let E=u-d/2+.25;for(let T=0;T<5;T++){const C=.035+s()*.03,P=.17+s()*.08;nn(o,C,P,.13,E,be+Ee+R+.025+P/2,f+(s()-.5)*.02),E+=C+.012}}const x=-(c-.28),S=l+.35;_h(r,.016,1.15,x,be+Ee+.57,S,.22,"x"),nn(o,.07,.22,.09,x,be+Ee+.13,S+.12),qn(n,r,e.wood),qn(n,o,e.dark),qn(n,a,e.ceramic);{const E=h-.35,T=1.15,C=new Q(new Dt(.62,.4,.42),e.wood);C.position.set(E,be+Ee+.2,T),C.castShadow=C.receiveShadow=!0,n.add(C);const P=new Q(new Dt(.56,.4,.36),e.dark);P.position.set(E,be+Ee+.4+.2,T),P.castShadow=!0,n.add(P);const L=new pt({color:790550,roughness:.15,metalness:.4,emissive:10336472,emissiveIntensity:0}),I=new Q(new Dt(.46,.3,.02),L);I.position.set(E,be+Ee+.4+.2,T-.19),I.rotation.y=Math.PI,n.add(I),b.push(L);const N=new Q(new me(.006,.006,.5,6),e.dark);N.position.set(E+.15,be+Ee+.4+.4+.25,T),N.rotation.z=.25,n.add(N)}return{glow:b}}function vS(n,t,e,i,s){const r=Ra(Ca(t,81)),o=[],a=[],{zBack:l}=i,c=Math.min(2,i.w-1),h=i.d/2-1.05;nn(o,c,.55,.5,0,be+Ee+.275,h),nn(o,c+.1,.05,.58,0,be+Ee+.55+.025,h);const d=Math.min(1.9,i.w-1);for(const p of[.55,.92])nn(o,d,.05,.32,0,be+Ee+p,l+.28);for(let p=0;p<8;p++){const m=p<4?.55:.92,y=-d/2+.2+p%4*((d-.4)/3)+(r()-.5)*.03,w=.06+r()*.03,_=.13+r()*.07;li(a,w,w*.85,_,8,y,be+Ee+m+.025+_/2,l+.28)}qn(n,o,e.wood),qn(n,a,e.ceramic);const u=.72,f=Math.min(.9,(t.wallH??1.9)-.7),g=new Ae(u,f),v=new Q(g,e.fabric);v.material&&v.material.side!==void 0&&(v.material=v.material),v.material.side=Oe,v.position.set(Math.min(.85,i.w/2-.7),be+Ee+f/2+.55,l+.16),n.add(v),s.push({mesh:v,phase:r()*Math.PI*2,amp:.09+r()*.03})}function yS(n,t,e,i){const s=Ra(Ca(t,244)),r=String(t.name??"").toLowerCase().startsWith("barn"),o=[],a=[],{zBack:l,sideX:c}=i,h=-(c-.18);for(const u of[.45,.85])nn(o,.06,.06,Math.min(1.6,i.d-1.2),h,be+Ee+u,-.1);const d=r?2:3;for(let u=0;u<d;u++){const f=-.6+u*.42+(s()-.5)*.06;_h(o,.022,1.25,h+.16,be+Ee+.62,f,.18,"z"),nn(a,.05,.22,.04,h+.27,be+Ee+.35,f)}if(!r){for(let u=0;u<3;u++)gS(a,.24,1,.62,1,.5+u%2*.42+(s()-.5)*.08,be+Ee+.15,l+.55+Math.floor(u/2)*.42);li(o,.2,.15,.26,8,-.3,be+Ee+.13,l+.6,!0),li(o,.17,.13,.22,8,-.72,be+Ee+.11,l+.62,!0);for(let u=0;u<6;u++)nn(o,.22,.16,.5,-.9+u*.26,be+Ee+.08,l+.32)}qn(n,o,e.wood),qn(n,a,e.dark)}function MS(n,t,e,i){const s=[],r=[],{zBack:o,hw:a}=i,l=-Math.min(.9,a*.5),c=o+.45;li(s,.07,.11,.34,10,l,be+Ee+.17,c),li(s,.05,.05,.06,8,l,be+Ee+.34+.03,c);const h=new Jn(.11,0);h.translate(l+.42,be+Ee+.08,c+.05),r.push(h),qn(n,s,e.ceramic),qn(n,r,e.stone)}function SS(n,t,e){const i=[],s=Of(e),r=Ra(Ca(t,225)),o=Math.max(2.4,t.d??3.6),a=t.kind??"home",l=o/2,c=r()<.5?-1:1,h=[],d=[];li(h,.3,.34,.07,10,(r()-.5)*.2,.055,l+.95);const u=c*.62,f=l+.38;if(nn(d,.11,.09,.26,u,.065,f,(r()-.5)*.3),nn(d,.11,.09,.26,u+.15*c,.065,f+.03,(r()-.5)*.3),a==="home"||a==="farm"){const g=-c*.72,v=l+.36;li(d,.13,.11,.42,8,g,.02+.21,v),_h(d,.015,.72,g,.02+.36,v,.06,"z"),mS(d,.13,.24,8,g+.02,.02+.72+.1,v)}return qn(n,h,s.stone),qn(n,d,s.dark),{cloth:i}}function wS(n,t,e,i){const s=new Kt;s.name="torii";const r=Te(t,e),o=new pt({color:9054750,roughness:.6}),a=new pt({color:2763310,roughness:.7}),l={W:[],D:[]},c=p=>{const m=new me(.14,.17,3,10);m.translate(p*1.1,1.5,0),l.W.push(m);const y=new me(.22,.26,.3,10);y.translate(p*1.1,.15,0),l.D.push(y)};c(-1),c(1);const h=new Dt(3.4,.22,.3);h.translate(0,3.1,0),l.W.push(h);const d=new Dt(3.7,.12,.42);d.translate(0,3.28,0),l.D.push(d);const u=new Dt(2.4,.16,.16);u.translate(0,2.55,0),l.W.push(u);const f=new Dt(.14,.6,.14);f.translate(0,2.85,0),l.W.push(f);for(const[p,m]of[["W",o],["D",a]]){if(!l[p].length)continue;const y=new Q(ln(l[p],!1),m);y.castShadow=!0,y.receiveShadow=!0,s.add(y)}s.position.set(t,r,e),s.rotation.y=i;const[g,v]=[ki(t,e)[0],ki(t,e)[1]];return fs(g,v,[{id:ds("torii",g,v,0),type:"torii",x:t,z:e,y:r,data:{}}]),{group:s}}function bS(n,t,e,i){const s=new Kt;s.name="shrine";const r=Te(t,e),o=new pt({color:9145222,roughness:.95}),a=new pt({color:4864552,roughness:.85}),l=new pt({color:3352861,roughness:.9}),c={S:[],W:[],D:[]},h=new Dt(5,.6,4);h.translate(0,.3,0),c.S.push(h);for(let w=0;w<3;w++){const _=new Dt(1.6,.18,.5);_.translate(0,.09+w*.18,2+.25+(2-w)*.42),c.S.push(_)}for(const[w,_]of[[-1.5,-1],[1.5,-1],[-1.5,1],[1.5,1]]){const M=new Dt(.18,2.2,.18);M.translate(w,.6+1.1,_),c.W.push(M)}const d=new Dt(3.6,1.5,2.6);d.translate(0,.6+1.35,0),c.W.push(d);const u=new Dt(.7,1.1,.06);u.translate(0,.6+.85,1.32),c.D.push(u);for(const w of[1,-1]){const _=new Dt(4.6,.1,2.2),M=new ae().makeRotationX(w>0?.62:-.62);M.setPosition(0,3.35,w*.85),_.applyMatrix4(M),c.D.push(_)}const f=new Dt(4.6,.14,.3);f.translate(0,3.95,0),c.D.push(f);for(let w=0;w<=10;w++){const _=w/10,M=-2.4+_*4.8;for(const b of[-1.9,1.9]){if(b>0&&Math.abs(M)<1.1)continue;const R=new Dt(.09,.7,.09);R.translate(M,.6+.35,b),c.D.push(R)}}const g=new Dt(4.9,.07,.08);g.translate(0,.6+.68,-1.9),c.D.push(g);const v=w=>w==="S"?o:w==="W"?a:l;for(const w of Object.keys(c)){if(!c[w].length)continue;const _=new Q(ln(c[w],!1),v(w));_.castShadow=!0,_.receiveShadow=!0,s.add(_)}const p=new Q(new Dt(.8,.5,.4),l);p.position.set(0,.85,1.7),p.castShadow=!0,s.add(p),s.position.set(t,r,e),s.rotation.y=i;const[m,y]=ki(t,e);return fs(m,y,[{id:ds("shrine",m,y,0),type:"shrine",x:t,z:e,y:r,data:{}}]),{group:s}}const Je=new x1({antialias:!0,powerPreference:"high-performance"});Je.setPixelRatio(Math.min(window.devicePixelRatio||1,2));window.addEventListener("tsuki-quality",n=>{try{const t=n&&n.detail,e=t==="low"?1:t==="medium"?1.5:2;Je.setPixelRatio(Math.min(window.devicePixelRatio||1,e))}catch{}});Je.setSize(window.innerWidth,window.innerHeight);Je.shadowMap.enabled=!0;Je.shadowMap.type=Tr;Je.toneMapping=_a;Je.toneMappingExposure=1.06;try{const n=new URLSearchParams(location.search).get("tone");n==="agx"&&Ur!==void 0?Je.toneMapping=Ur:n==="neutral"&&Or!==void 0&&(Je.toneMapping=Or)}catch{}document.getElementById("app").appendChild(Je.domElement);const xe=new t0,Le=rf();W1(Le);df(Le);const{sun:ES,hemi:TS,skyMat:AS,sky:md}=X1(xe,Je),Pa=new Kt;Pa.name="hero_machiya";const as=N1(Le),RS=U1(Le),Qo=O1(Le);Pa.add(as.group,RS.group,Qo.group);J1(Pa,{nageshiY:2.2,eaveY:3.7,doorX:as.openBayX});const xh=[],vh=[],Da=n=>(n?.userData?.sway&&xh.push(n),n?.userData?.tick&&vh.push(n.userData.tick),n),Dn=vy({scene:xe,heroGroup:Pa});Dn.houses.forEach((n,t)=>{const[e,i]=ki(n.pos.x,n.pos.z);fs(e,i,[{id:ds("house",e,i,t),type:n.name==="hero"?"hero":"house",x:n.pos.x,z:n.pos.z,y:0,data:{name:n.name}}])});window.__world={stats:bf};const jo=EM();xe.add(jo.group);jo.mesh&&jo.mesh.material&&Le.registerWet&&Le.registerWet(jo.mesh.material);const CS=TM();xe.add(CS.group);xe.add(NM());const PS=BM();xe.add(PS.group);const yh=iS(Le);xe.add(yh.group);xe.add(aS(Te));xe.add(hS(Le,Te));for(const n of yh.tickers)vh.push(n);for(const n of yh.vegRoots)xh.push(n);const Qr=fS(Le);{const n=bS(Le,-48,-28,-2.03);xe.add(n.group);const t=wS(Le,-51,-29.5,2.68);xe.add(t.group)}xe.add(Qr.group);for(const n of Qr.houses)Dn.houses.push({name:n.name,group:n.group,glowMats:n.glowMats,pos:n.pos});const Dc=[];function DS(n){if(n.params&&n.params.isShop)return"shop";const t=String(n.name||"").toLowerCase(),e=n.params&&n.params.winLayout;return t.startsWith("shed")||Array.isArray(e)&&e.length&&e.every(i=>!i)?"shed":t.startsWith("hamlet")||t.startsWith("farm")||t.startsWith("barn")?"farm":t==="hero"||t.startsWith("hero")?"hero":"home"}function LS(n,t){if(n.params&&typeof n.params.seed=="number")return n.params.seed>>>0;let e=2166136261;const i=String(n.name||"house"+t);for(let s=0;s<i.length;s++)e^=i.charCodeAt(s),e=Math.imul(e,16777619);return(e^Math.imul(t+1>>>0,2654435761))>>>0}for(let n=0;n<Dn.houses.length;n++){const t=Dn.houses[n],e=DS(t),i=LS(t,n),s={...t.params||{},name:t.name,kind:e,seed:i};e==="hero"&&(s.w=10,s.d=6.4,s.wallH=2.9);const r=xS(t.group,s,Le),o=SS(t.group,s,Le);if(r&&r.cloth)for(const a of r.cloth)Dc.push(a);if(o&&o.cloth)for(const a of o.cloth)Dc.push(a);if(r&&r.glow&&t.glowMats)for(const a of r.glow)t.glowMats.push(a)}console.log("WORLD registry: "+JSON.stringify(bf()));const bn=Ly(Dn);xe.add(bn.group);const IS=fM({lampLights:bn.lampLights,lampGlows:bn.lampGlows,houses:Dn.houses}),Ff=gM(Le,7.5,24.5,Te(7.5,24.5));xe.add(Ff.group);Yy(xe,Le,{signPos:[6.5,0,14.5],signRy:-.5,plaquePos:[1,0,9.7],plaqueRy:-.35});const ps=B1(Le);ps.group.position.set(-13.5,0,7);xe.add(ps.group);[[-4.2,4.6,1.3,.75],[6.8,4.4,1,.55],[-8.2,-6.2,1.5,.9],[13.5,-8.5,1.1,.4],[-16,3.5,.9,.65]].forEach(([n,t,e,i],s)=>{const r=Tf(Le,s+1,e,i,n,t);r.position.set(n,0,t),xe.add(r),Da(r)});{const n=[[-4.2,4.6,1.3],[6.8,4.4,1],[-8.2,-6.2,1.5],[13.5,-8.5,1.1],[-16,3.5,.9]].map(([e,i,s],r)=>({x:e,y:.05,z:i,r:s,seed:700+r})),t=Cf(n);t&&xe.add(t)}[[0,-5.5],[-7.6,4.6],[7.5,-8.5]].forEach(([n,t],e)=>{const i=Af(Le,10+e,n,t);xe.add(i),Da(i)});[[-3.6,3.4,.55],[3.6,3.4,.5],[11,10.6,.6],[-11,10.6,.55],[-2,-8.6,.5]].forEach(([n,t,e],i)=>{const s=mh(20+i,e);s.position.set(n,.25,t),xe.add(s),Da(s)});for(const[n,t,e,i,s]of[[0,4,8,2.5,31],[-6,13,7,4,32],[2,-7.5,20,1.5,33]]){const r=gh(s,60,[e,i]);r.position.set(n,.04,t),xe.add(r)}{const n=Tl(41,2.4,2);n.rotation.y=-Math.PI/2,n.position.set(-5.08,.9,-1),xe.add(n);const t=Tl(42,3,1.8);t.position.set(-9,.7,-8.92),xe.add(t);const e=Tl(43,2.4,1.8);e.rotation.y=Math.PI/2,e.position.set(-9.68,.7,13.5),xe.add(e)}for(const[n,t,e,i,s]of[[-5.4,2.4,1.6,1,51],[5.4,2.4,1.6,1,52],[-4.2,8.9,1.2,.8,53],[0,4.2,2.2,1.4,54]]){const r=Rf(s,e,i);r.position.set(n,.055,t),r.rotation.y=s,xe.add(r)}for(const[n,t,e,i,s]of[[-3.9,3.7,.9,.9,61],[3.1,3.7,.9,.9,62],[-8.4,2.2,.7,.7,63],[8.9,2.2,.7,.7,64]]){const r=Rf(s,e,i);r.position.set(n,.055,t),r.rotation.y=s*.7,xe.add(r)}for(const[n,t,e,i]of[[-7.5,2.45,71,24],[-1.2,2.45,72,24],[4.8,2.45,73,24],[8.6,3.4,74,18],[-4.2,10.6,75,14]]){const s=gh(e,i,[1.2,1.2]);s.position.set(n,.04,t),xe.add(s)}for(const[n,t,e,i]of[[-2.5,-5.5,.85,81],[3,-5.2,1,82]]){const s=mh(i,e);s.position.set(n,.25,t),xe.add(s),Da(s)}{const n=(s,r)=>((Math.imul(s+1,2654435761)^Math.imul(r,40503))>>>0>>>0)/4294967296,t=[12728868,14711592,10115616,7178812],e=(s,r,o,a,l)=>{const c=new Ae(.22,.18),h=new ye(c,Le.mapleLeaf,a),d=new ne,u=new Nt;for(let f=0;f<a;f++){const g=n(f,l)*Math.PI*2,v=Math.sqrt(n(f,l+1))*o;d.position.set(s+Math.cos(g)*v,.05,r+Math.sin(g)*v),d.rotation.set(-Math.PI/2,0,n(f,l+2)*Math.PI*2),d.updateMatrix(),h.setMatrixAt(f,d.matrix),u.setHex(t[Math.floor(n(f,l+3)*t.length)]),u.offsetHSL((n(f,l+4)-.5)*.05,0,(n(f,l+5)-.5)*.08),h.setColorAt(f,u)}h.instanceMatrix.needsUpdate=!0,h.instanceColor&&(h.instanceColor.needsUpdate=!0),h.receiveShadow=!0,xe.add(h)};e(-4.2,4.6,1.1,60,91),e(6.8,4.4,1,50,92);const i=(s,r,o,a)=>{const l=new ye(new jc(.05,0),Le.stone,40),c=new ne;for(let h=0;h<40;h++){c.position.set(s+n(h,a)*(r-s),.07,o+(n(h,a+1)-.5)*.5),c.rotation.set(n(h,a+2)*3,n(h,a+3)*3,0);const d=.7+n(h,a+4)*.8;c.scale.set(d,d*.75,d),c.updateMatrix(),l.setMatrixAt(h,c.matrix)}l.instanceMatrix.needsUpdate=!0,l.castShadow=!1,l.receiveShadow=!0,xe.add(l)};i(-6,-1,4.9,93),i(1,6,8.2,94)}const Bf=j1(Le,{leafSources:[{x:-4.2,z:4.6,r:2.4},{x:6.8,z:4.4,r:2.4},{x:-8.2,z:-6.2,r:2.4},{x:13.5,z:-8.5,r:2.4},{x:-16,z:3.5,r:2.6}]});xe.add(Bf.group);const gd=Dn.group.getObjectByName("drainage")?.userData.waterMat||null,ss=Q1({scene:xe,pondWaterMats:gd?[ps.waterMat,gd]:[ps.waterMat],wetMats:Le._wet||[],heightFn:(n,t)=>Te(n,t),snowMats:[Le.stone,Le.gravel,Le.grass,Le.roofTile,Le.roofTileAlt,Le.ridge].filter(Boolean),dripPoints:Dn.dripPoints||[],basins:Dn.basins||[]}),Lc=Uy(xe),$s=Ny({renderer:Je,scene:xe,sun:ES,hemi:TS,skyMat:AS,houses:Dn.houses,lampGlows:bn.lampGlows,lampLights:bn.lampLights,vendGlow:bn.group.userData.vendGlow,stars:Lc.stars,moon:Lc.moon}),{camera:bi,controls:rs}=py(Je),ms=Fy(bi,rs),ta=[],ea=[],Mh={items:[]};function Pl(n,t,e,i,s,r){const o=n-e/2,a=n+e/2,l=t-i/2,c=t+i/2,h=.15;if(s===null)return[{x0:o,x1:a,z0:l,z1:c}];const d=s-.55,u=s+.55;return[{x0:o,x1:d,z0:c-h,z1:c+h},{x0:u,x1:a,z0:c-h,z1:c+h},{x0:o,x1:a,z0:l-h,z1:l+h},{x0:o-h,x1:o+h,z0:l,z1:c},{x0:a-h,x1:a+h,z0:l,z1:c},{x0:d,x1:u,z0:c-.35,z1:c+.35,blockWhen:r}]}function _d(n,t,e,i){if(!e)return null;const s=n/(t??3);return i+(e<0?-n/2+s*.5:n/2-s*.5)}try{for(const t of Dn.houses){if(t.name==="hero")continue;const e=t.params||{},i=e.w??6,s=e.d??6,r=(t.sliders||[]).length&&(e.doorSide??0)!==0?_d(i,e.facadeCols,e.doorSide,t.pos.x):null,o=()=>(t._slideItems||[]).some(a=>a&&a.target>.5);for(const a of Pl(t.pos.x,t.pos.z,i,s,r,o))ta.push(a);r!==null&&ea.push({x0:t.pos.x-i/2,x1:t.pos.x+i/2,z0:t.pos.z-s/2,z1:t.pos.z+s/2})}const n=zi.find(t=>t.name==="hero");if(n){const t=as&&typeof as.openBayX=="number"?as.openBayX+n.cx:null,e=()=>Mh.items.some(i=>i&&i.target>.5);for(const i of Pl(n.cx,n.cz,n.w,n.d,t,e))ta.push(i);t!==null&&ea.push({x0:n.cx-n.w/2,x1:n.cx+n.w/2,z0:n.cz-n.d/2,z1:n.cz+n.d/2})}for(const t of Qr.houses){const e=t.params||{},i=e.w??t.w??6,s=e.d??t.d??6,r=(t.sliders||[]).length&&(e.doorSide??0)!==0?_d(i,e.facadeCols,e.doorSide,t.pos.x):null,o=()=>(t._slideItems||[]).some(a=>a&&a.target>.5);for(const a of Pl(t.pos.x,t.pos.z,i,s,r,o))ta.push(a);r!==null&&ea.push({x0:t.pos.x-i/2,x1:t.pos.x+i/2,z0:t.pos.z-s/2,z1:t.pos.z+s/2})}}catch{}const Zr=ky(bi,Je.domElement,{heightFn:(n,t)=>{let e=0;try{e=Te(n,t)}catch{e=0}Number.isFinite(e)||(e=0);for(const i of ea)if(n>i.x0&&n<i.x1&&t>i.z0&&t<i.z1)return Math.max(e,.7);return e},solids:ta});window.__explore={get on(){try{return Zr.enabled}catch{return!1}}};window.addEventListener("tsuki-explore",n=>{try{let t=!1,e=null;try{const i=n&&n.detail;i&&typeof i=="object"?(t=!!i.on,e=i.spawn||null):t=!!i}catch{}if(t){try{ms.setMode("free")}catch{}rs.enabled=!1;const i=e||{x:0,z:10};Zr.setEnabled(!0,{x:i.x??0,z:i.z??10,yaw:Math.PI})}else{Zr.setEnabled(!1),rs.enabled=!0;try{ms.setMode("orbit")}catch{}}}catch{}});const jr=By(bi,Je.domElement);for(const n of as.sliders||[]){const t=jr.addSlide(n.node,n.open);t&&(t.t=0,Mh.items.push(t))}for(const n of[...Dn.houses,...Qr.houses||[]]){n._slideItems=n._slideItems||[];for(const t of n.sliders||[])try{const e=jr.addSlide(t.node,t.open);e&&(e.t=0,n._slideItems.push(e))}catch{}}{const n=(bn.group.userData.radioMeshes||[]).filter(Boolean);n.length&&jr.onTap(n,()=>{try{const t=ci.state?ci.state():null;ci.setEnabled(t&&typeof t.enabled=="boolean"?!t.enabled:!0)}catch{}})}console.log("INTERACT targets: "+jr.count);const ci=Py({camera:bi,scene:xe,zones:zi});{const n=bn.group.userData.radioPos||new O(15.5,1.15,14.5);ci.source&&ci.source.position.copy(n)}new URLSearchParams(location.search).get("music")==="0"?ci.setEnabled(!1):Dy(ci);window.__audio=ci;ms.onMood(({time:n,wx:t}={})=>{n&&$s.set(n),t&&ss.setState(t)});const Jr=iM({renderer:Je,scene:xe,camera:bi});window.__post=Jr;try{const n=new URLSearchParams(location.search).get("post");Jr.setQuality(n==="high"?"high":n==="low"?"low":"off")}catch{try{Jr.setQuality("off")}catch{}}window.addEventListener("resize",()=>{try{Jr.setSize(window.innerWidth,window.innerHeight)}catch{}});const NS=ps.waterMat.color.clone(),xd=new Nt;let Ic=60;window.__perf=()=>({calls:Je.info.render.calls,triangles:Je.info.render.triangles,geometries:Je.info.memory.geometries,fps:Math.round(Ic),errors:window.__errors||[]});window.__errors=[];window.addEventListener("error",n=>window.__errors.push(String(n.message)));Gy({daytime:$s,weather:ss,cine:ms,hudEl:document.getElementById("hud"),audio:ci});{const n=new URLSearchParams(location.search),t=n.get("time"),e=n.get("wx"),i=n.get("shot");if(t&&$s.set(t.toUpperCase()),e&&ss.setState(e.toLowerCase()),i!==null&&(ms.setMode("cine"),ms.goTo(Number(i)||0)),n.get("explore")==="1")try{const s=new URLSearchParams(location.search).get("exspawn");let r={x:0,z:10};if(s){const[o,a]=s.split(",").map(Number);Number.isFinite(o)&&Number.isFinite(a)&&(r={x:o,z:a})}window.dispatchEvent(new CustomEvent("tsuki-explore",{detail:{on:!0,spawn:r}}))}catch{}if(n.get("doors")==="1")try{for(const s of Mh.items)s.target=1;for(const s of[...Dn.houses,...Qr.houses||[]])for(const r of s._slideItems||[])r.target=1}catch{}}const Dl=new lh,Sh=new URLSearchParams(location.search),zf=Sh.get("fixed")==="1",na=qy({fps:Number(Sh.get("fps"))||30}),US=Sh.get("lodfar")==="1";let Ll=0;window.__cine={get frame(){return na.frame},get t(){return na.t},get fps(){return na.fps},mode:zf?"fixed":"wall"};let vd=!0;function kf(){requestAnimationFrame(kf);let n,t;if(zf){const s=na.step();n=s.dt,t=s.t}else Dl.update(),n=Math.min(Dl.getDelta(),.05),t=Dl.getElapsed();n>0&&(Ic+=(1/Math.max(n,.001)-Ic)*.05),Ll++;const e=US?2:bi.position.length()<60?0:bi.position.length()<120?1:2,i=e===0||(e===1?Ll%2===0:Ll%4===0);if(i){ps.update(t,ss),xd.copy(NS).lerp(xe.fog.color,.35),ps.waterMat.color.lerp(xd,.08),Bf.update(t,n);for(const s of vh)s(t)}as.noren.children.forEach((s,r)=>{s.rotation.x=Math.sin(t*1.3+r*.9)*.06*(.5+Hn.gust(t))}),Qo.lantern.rotation.x=Math.sin(t*.8)*.03,Qo.lantern.rotation.z=Math.cos(t*.6)*.03,Qo.lanternLight.intensity=5+Math.sin(t*7.3)*.25+Math.sin(t*13.1)*.15,ss.update(n,t),$s.update(n,ss);{const s=$s.state,r=s==="NIGHT"||s==="MOONLIT"||s==="RAIN_NIGHT"||s==="MIST_NIGHT"?1:s==="SUNSET"||s==="BLUE_HOUR"?.45:0;IS.update(n,t,ss.state,r)}if(i&&Ff.update(t,n,cM(7.5,24.5,t)),Lc.setMoon($s.state==="NIGHT"?1:0),ms.update(n),ci.update(n),bn&&bn.group&&!bn.group.userData.__householdPushed){bn.group.userData.__householdPushed=!0;for(const s of Dc)bn.cloth.push(s)}Iy(bn,t,Hn),i&&ZM(xh,t,Hn),jr.update(n),Zr.update(n),Zr.enabled||rs.update(),md&&md.position.copy(bi.position);try{window.__cam={pos:bi.position.toArray(),tgt:rs&&rs.target?rs.target.toArray():[]}}catch{}if(Jr.render(),vd){vd=!1;const s=document.getElementById("loader");s.style.opacity="0",setTimeout(()=>s.remove(),700)}}kf();
