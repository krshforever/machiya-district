(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wc="186",Gs={ROTATE:0,DOLLY:1,PAN:2},zs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Df=0,gh=1,Lf=2,Sr=1,If=2,_r=3,ss=0,xn=1,Ue=2,ei=0,wr=1,$o=2,_h=3,xh=4,Nf=5,Fs=100,Uf=101,Of=102,Ff=103,Bf=104,zf=200,kf=201,Gf=202,Hf=203,ud=204,dd=205,Vf=206,Wf=207,Xf=208,Yf=209,qf=210,Kf=211,Zf=212,Jf=213,$f=214,bl=0,El=1,Tl=2,Dr=3,Al=4,Rl=5,Cl=6,Pl=7,fd=0,Qf=1,jf=2,ni=0,bc=1,Ec=2,Tc=3,la=4,Ac=5,Lr=6,Ir=7,pd=300,rs=301,Ys=302,br=303,ba=304,ca=306,Xn=1e3,Hn=1001,Dl=1002,en=1003,tp=1004,jr=1005,Xe=1006,Ea=1007,Ni=1008,Rn=1009,md=1010,gd=1011,Nr=1012,Rc=1013,ri=1014,Cn=1015,sn=1016,Cc=1017,Pc=1018,Ur=1020,_d=35902,xd=35899,vd=1021,yd=1022,Vn=1023,Si=1026,ji=1027,Dc=1028,Lc=1029,os=1030,Ic=1031,Nc=1033,Bo=33776,zo=33777,ko=33778,Go=33779,Ll=35840,Il=35841,Nl=35842,Ul=35843,Ol=36196,Fl=37492,Bl=37496,zl=37488,kl=37489,Qo=37490,Gl=37491,Hl=37808,Vl=37809,Wl=37810,Xl=37811,Yl=37812,ql=37813,Kl=37814,Zl=37815,Jl=37816,$l=37817,Ql=37818,jl=37819,tc=37820,ec=37821,nc=36492,ic=36494,sc=36495,rc=36283,oc=36284,jo=36285,ac=36286,ep=3200,lc=0,np=1,kn="",ze="srgb",Or="srgb-linear",ta="linear",Ae="srgb",Ta=7680,ip=519,sp=512,rp=513,op=514,Uc=515,ap=516,lp=517,Oc=518,cp=519,hp=35044,vh="300 es",ti=2e3,Fr=2001;function up(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Br(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function dp(){const n=Br("canvas");return n.style.display="block",n}const yh={};function Mh(...n){const t="THREE."+n.shift();console.log(t,...n)}function Md(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Jt(...n){n=Md(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function me(...n){n=Md(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Hs(...n){const t=n.join(" ");t in yh||(yh[t]=!0,Jt(...n))}function fp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const pp={[bl]:El,[Tl]:Cl,[Al]:Pl,[Dr]:Rl,[El]:bl,[Cl]:Tl,[Pl]:Al,[Rl]:Dr};class Fi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sh=1234567;const Er=Math.PI/180,qs=180/Math.PI;function ds(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]+"-"+ln[t&255]+ln[t>>8&255]+"-"+ln[t>>16&15|64]+ln[t>>24&255]+"-"+ln[e&63|128]+ln[e>>8&255]+"-"+ln[e>>16&255]+ln[e>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function oe(n,t,e){return Math.max(t,Math.min(e,n))}function Fc(n,t){return(n%t+t)%t}function mp(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function gp(n,t,e){return n!==t?(e-n)/(t-n):0}function Tr(n,t,e){return(1-e)*n+e*t}function _p(n,t,e,i){return Tr(n,t,1-Math.exp(-e*i))}function xp(n,t=1){return t-Math.abs(Fc(n,t*2)-t)}function vp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function yp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Mp(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Sp(n,t){return n+Math.random()*(t-n)}function wp(n){return n*(.5-Math.random())}function bp(n){n!==void 0&&(Sh=n);let t=Sh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ep(n){return n*Er}function Tp(n){return n*qs}function Ap(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Rp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Cp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Pp(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),d=r((t-i)/2),u=o((t-i)/2),f=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*d,l*u,a*c);break;case"YZY":n.set(l*u,a*h,l*d,a*c);break;case"ZXZ":n.set(l*d,l*u,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*f,a*h,a*c);break;default:Jt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function fn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ke={DEG2RAD:Er,RAD2DEG:qs,generateUUID:ds,clamp:oe,euclideanModulo:Fc,mapLinear:mp,inverseLerp:gp,lerp:Tr,damp:_p,pingpong:xp,smoothstep:vp,smootherstep:yp,randInt:Mp,randFloat:Sp,randFloatSpread:wp,seededRandom:bp,degToRad:Ep,radToDeg:Tp,isPowerOfTwo:Ap,ceilPowerOfTwo:Rp,floorPowerOfTwo:Cp,setQuaternionFromProperEuler:Pp,normalize:fn,denormalize:Bs},hh=class hh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hh.prototype.isVector2=!0;let ht=hh;class Yn{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(d!==v||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*v;m<0&&(u=-u,f=-f,g=-g,v=-v,m=-m);let p=1-a;if(m<.9995){const y=Math.acos(m),w=Math.sin(y);p=Math.sin(p*y)/w,a=Math.sin(a*y)/w,l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+v*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+v*a;const y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-a*f,t[e+2]=c*g+h*f+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Jt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const uh=class uh{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Aa.copy(this).projectOnVector(t),this.sub(Aa)}reflect(t){return this.sub(Aa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};uh.prototype.isVector3=!0;let O=uh;const Aa=new O,wh=new Yn,dh=class dh{constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],v=s[0],m=s[3],p=s[6],y=s[1],w=s[4],_=s[7],M=s[2],b=s[5],R=s[8];return r[0]=o*v+a*y+l*M,r[3]=o*m+a*w+l*b,r[6]=o*p+a*_+l*R,r[1]=c*v+h*y+d*M,r[4]=c*m+h*w+d*b,r[7]=c*p+h*_+d*R,r[2]=u*v+f*y+g*M,r[5]=u*m+f*w+g*b,r[8]=u*p+f*_+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=e*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(s*c-h*i)*v,t[2]=(a*i-s*o)*v,t[3]=u*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(i*l-c*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Hs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ra.makeScale(t,e)),this}rotate(t){return Hs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ra.makeRotation(-t)),this}translate(t,e){return Hs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ra.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};dh.prototype.isMatrix3=!0;let ne=dh;const Ra=new ne,bh=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eh=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dp(){const n={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ae&&(s.r=yi(s.r),s.g=yi(s.g),s.b=yi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ae&&(s.r=Vs(s.r),s.g=Vs(s.g),s.b=Vs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===kn?ta:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Hs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Hs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Or]:{primaries:t,whitePoint:i,transfer:ta,toXYZ:bh,fromXYZ:Eh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:i,transfer:Ae,toXYZ:bh,fromXYZ:Eh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),n}const ge=Dp();function yi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ms;class Lp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ms===void 0&&(Ms=Br("canvas")),Ms.width=t.width,Ms.height=t.height;const s=Ms.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ms}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Br("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=yi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(yi(e[i]/255)*255):e[i]=yi(e[i]);return{data:e,width:t.width,height:t.height}}else return Jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ip=0;class Bc{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=ds(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ca(s[o].image)):r.push(Ca(s[o]))}else r=Ca(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Ca(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Lp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Jt("Texture: Unable to serialize Texture."),{})}let Np=0;const Pa=new O;class rn extends Fi{constructor(t=rn.DEFAULT_IMAGE,e=rn.DEFAULT_MAPPING,i=Hn,s=Hn,r=Xe,o=Ni,a=Vn,l=Rn,c=rn.DEFAULT_ANISOTROPY,h=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=ds(),this.name="",this.source=new Bc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Pa).x}get height(){return this.source.getSize(Pa).y}get depth(){return this.source.getSize(Pa).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xn:t.x=t.x-Math.floor(t.x);break;case Hn:t.x=t.x<0?0:1;break;case Dl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xn:t.y=t.y-Math.floor(t.y);break;case Hn:t.y=t.y<0?0:1;break;case Dl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=pd;rn.DEFAULT_ANISOTROPY=1;const fh=class fh{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,_=(f+1)/2,M=(p+1)/2,b=(h+u)/4,R=(d+v)/4,x=(g+m)/4;return w>_&&w>M?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=b/i,r=R/i):_>M?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=b/s,r=x/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=R/r,s=x/r),this.set(i,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-v)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this.w=oe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this.w=oe(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fh.prototype.isVector4=!0;let ke=fh;class Up extends Fi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ke(0,0,t,e),this.scissorTest=!1,this.viewport=new ke(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},r=new rn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Xe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Bc(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vn extends Up{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Sd extends rn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Op extends rn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const aa=class aa{constructor(t,e,i,s,r,o,a,l,c,h,d,u,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,d,u,f,g,v,m)}set(t,e,i,s,r,o,a,l,c,h,d,u,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new aa().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,s=1/Ss.setFromMatrixColumn(t,0).length(),r=1/Ss.setFromMatrixColumn(t,1).length(),o=1/Ss.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,f=o*d,g=a*h,v=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-v*c,e[9]=-a*l,e[2]=v-u*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u+v*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=v+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u-v*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=v-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,f=o*d,g=a*h,v=a*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-v*d}else if(t.order==="XZY"){const u=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fp,t,Bp)}lookAt(t,e,i){const s=this.elements;return Tn.subVectors(t,e),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Ai.crossVectors(i,Tn),Ai.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Ai.crossVectors(i,Tn)),Ai.normalize(),to.crossVectors(Tn,Ai),s[0]=Ai.x,s[4]=to.x,s[8]=Tn.x,s[1]=Ai.y,s[5]=to.y,s[9]=Tn.y,s[2]=Ai.z,s[6]=to.z,s[10]=Tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],y=i[3],w=i[7],_=i[11],M=i[15],b=s[0],R=s[4],x=s[8],S=s[12],E=s[1],A=s[5],C=s[9],P=s[13],L=s[2],I=s[6],U=s[10],B=s[14],W=s[3],F=s[7],G=s[11],X=s[15];return r[0]=o*b+a*E+l*L+c*W,r[4]=o*R+a*A+l*I+c*F,r[8]=o*x+a*C+l*U+c*G,r[12]=o*S+a*P+l*B+c*X,r[1]=h*b+d*E+u*L+f*W,r[5]=h*R+d*A+u*I+f*F,r[9]=h*x+d*C+u*U+f*G,r[13]=h*S+d*P+u*B+f*X,r[2]=g*b+v*E+m*L+p*W,r[6]=g*R+v*A+m*I+p*F,r[10]=g*x+v*C+m*U+p*G,r[14]=g*S+v*P+m*B+p*X,r[3]=y*b+w*E+_*L+M*W,r[7]=y*R+w*A+_*I+M*F,r[11]=y*x+w*C+_*U+M*G,r[15]=y*S+w*P+_*B+M*X,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15],y=l*f-c*u,w=a*f-c*d,_=a*u-l*d,M=o*f-c*h,b=o*u-l*h,R=o*d-a*h;return e*(v*y-m*w+p*_)-i*(g*y-m*M+p*b)+s*(g*w-v*M+p*R)-r*(g*_-v*b+m*R)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],y=e*a-i*o,w=e*l-s*o,_=e*c-r*o,M=i*l-s*a,b=i*c-r*a,R=s*c-r*l,x=h*v-d*g,S=h*m-u*g,E=h*p-f*g,A=d*m-u*v,C=d*p-f*v,P=u*p-f*m,L=y*P-w*C+_*A+M*E-b*S+R*x;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/L;return t[0]=(a*P-l*C+c*A)*I,t[1]=(s*C-i*P-r*A)*I,t[2]=(v*R-m*b+p*M)*I,t[3]=(u*b-d*R-f*M)*I,t[4]=(l*E-o*P-c*S)*I,t[5]=(e*P-s*E+r*S)*I,t[6]=(m*_-g*R-p*w)*I,t[7]=(h*R-u*_+f*w)*I,t[8]=(o*C-a*E+c*x)*I,t[9]=(i*E-e*C-r*x)*I,t[10]=(g*b-v*_+p*y)*I,t[11]=(d*_-h*b-f*y)*I,t[12]=(a*S-o*A-l*x)*I,t[13]=(e*A-i*S+s*x)*I,t[14]=(v*w-g*M-m*y)*I,t[15]=(h*M-d*w+u*y)*I,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,v=o*h,m=o*d,p=a*d,y=l*c,w=l*h,_=l*d,M=i.x,b=i.y,R=i.z;return s[0]=(1-(v+p))*M,s[1]=(f+_)*M,s[2]=(g-w)*M,s[3]=0,s[4]=(f-_)*b,s[5]=(1-(u+p))*b,s[6]=(m+y)*b,s[7]=0,s[8]=(g+w)*R,s[9]=(m-y)*R,s[10]=(1-(u+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=Ss.set(s[0],s[1],s[2]).length();const a=Ss.set(s[4],s[5],s[6]).length(),l=Ss.set(s[8],s[9],s[10]).length();r<0&&(o=-o),On.copy(this);const c=1/o,h=1/a,d=1/l;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=h,On.elements[5]*=h,On.elements[6]*=h,On.elements[8]*=d,On.elements[9]*=d,On.elements[10]*=d,e.setFromRotationMatrix(On),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=ti,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s);let g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===ti)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Fr)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=ti,l=!1){const c=this.elements,h=2/(e-t),d=2/(i-s),u=-(e+t)/(e-t),f=-(i+s)/(i-s);let g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===ti)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===Fr)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};aa.prototype.isMatrix4=!0;let re=aa;const Ss=new O,On=new re,Fp=new O(0,0,0),Bp=new O(1,1,1),Ai=new O,to=new O,Tn=new O,Th=new re,Ah=new Yn;class yn{constructor(t=0,e=0,i=0,s=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-oe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Th.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Th,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ah.setFromEuler(this),this.setFromQuaternion(Ah,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class zc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zp=0;const Rh=new O,ws=new Yn,ci=new re,eo=new O,ar=new O,kp=new O,Gp=new Yn,Ch=new O(1,0,0),Ph=new O(0,1,0),Dh=new O(0,0,1),Lh={type:"added"},Hp={type:"removed"},bs={type:"childadded",child:null},Da={type:"childremoved",child:null};class ae extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ae.DEFAULT_UP.clone();const t=new O,e=new yn,i=new Yn,s=new O(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new ne}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ws.setFromAxisAngle(t,e),this.quaternion.multiply(ws),this}rotateOnWorldAxis(t,e){return ws.setFromAxisAngle(t,e),this.quaternion.premultiply(ws),this}rotateX(t){return this.rotateOnAxis(Ch,t)}rotateY(t){return this.rotateOnAxis(Ph,t)}rotateZ(t){return this.rotateOnAxis(Dh,t)}translateOnAxis(t,e){return Rh.copy(t).applyQuaternion(this.quaternion),this.position.add(Rh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ch,t)}translateY(t){return this.translateOnAxis(Ph,t)}translateZ(t){return this.translateOnAxis(Dh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?eo.copy(t):eo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(ar,eo,this.up):ci.lookAt(eo,ar,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),ws.setFromRotationMatrix(ci),this.quaternion.premultiply(ws.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(me("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lh),bs.child=t,this.dispatchEvent(bs),bs.child=null):me("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hp),Da.child=t,this.dispatchEvent(Da),Da.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lh),bs.child=t,this.dispatchEvent(bs),bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,t,kp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,Gp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ae.DEFAULT_UP=new O(0,1,0);ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $t extends ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vp={type:"move"};class La{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new $t;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const wd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},no={h:0,s:0,l:0};function Ia(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Lt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ge.workingColorSpace){return this.r=t,this.g=e,this.b=i,ge.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ge.workingColorSpace){if(t=Fc(t,1),e=oe(e,0,1),i=oe(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Ia(o,r,t+1/3),this.g=Ia(o,r,t),this.b=Ia(o,r,t-1/3)}return ge.colorSpaceToWorking(this,s),this}setStyle(t,e=ze){function i(r){r!==void 0&&parseFloat(r)<1&&Jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){const i=wd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yi(t.r),this.g=yi(t.g),this.b=yi(t.b),this}copyLinearToSRGB(t){return this.r=Vs(t.r),this.g=Vs(t.g),this.b=Vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return ge.workingToColorSpace(cn.copy(this),t),Math.round(oe(cn.r*255,0,255))*65536+Math.round(oe(cn.g*255,0,255))*256+Math.round(oe(cn.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.workingToColorSpace(cn.copy(this),e);const i=cn.r,s=cn.g,r=cn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ge.workingColorSpace){return ge.workingToColorSpace(cn.copy(this),e),t.r=cn.r,t.g=cn.g,t.b=cn.b,t}getStyle(t=ze){ge.workingToColorSpace(cn.copy(this),t);const e=cn.r,i=cn.g,s=cn.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ri),this.setHSL(Ri.h+t,Ri.s+e,Ri.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ri),t.getHSL(no);const i=Tr(Ri.h,no.h,e),s=Tr(Ri.s,no.s,e),r=Tr(Ri.l,no.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new Lt;Lt.NAMES=wd;class kc{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Lt(t),this.near=e,this.far=i}clone(){return new kc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Wp extends ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Fn=new O,hi=new O,Na=new O,ui=new O,Es=new O,Ts=new O,Ih=new O,Ua=new O,Oa=new O,Fa=new O,Ba=new ke,za=new ke,ka=new ke;class Gn{constructor(t=new O,e=new O,i=new O){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Fn.subVectors(t,e),s.cross(Fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Fn.subVectors(s,e),hi.subVectors(i,e),Na.subVectors(t,e);const o=Fn.dot(Fn),a=Fn.dot(hi),l=Fn.dot(Na),c=hi.dot(hi),h=hi.dot(Na),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Ba.setScalar(0),za.setScalar(0),ka.setScalar(0),Ba.fromBufferAttribute(t,e),za.fromBufferAttribute(t,i),ka.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ba,r.x),o.addScaledVector(za,r.y),o.addScaledVector(ka,r.z),o}static isFrontFacing(t,e,i,s){return Fn.subVectors(i,e),hi.subVectors(t,e),Fn.cross(hi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Fn.cross(hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Gn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Gn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Gn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Gn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Gn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Es.subVectors(s,i),Ts.subVectors(r,i),Ua.subVectors(t,i);const l=Es.dot(Ua),c=Ts.dot(Ua);if(l<=0&&c<=0)return e.copy(i);Oa.subVectors(t,s);const h=Es.dot(Oa),d=Ts.dot(Oa);if(h>=0&&d<=h)return e.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Es,o);Fa.subVectors(t,r);const f=Es.dot(Fa),g=Ts.dot(Fa);if(g>=0&&f<=g)return e.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Ts,a);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Ih.subVectors(r,s),a=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(Ih,a);const p=1/(m+v+u);return o=v*p,a=u*p,e.copy(i).addScaledVector(Es,o).addScaledVector(Ts,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Bi{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Bn):Bn.fromBufferAttribute(r,o),Bn.applyMatrix4(t.matrixWorld),this.expandByPoint(Bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),io.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),io.copy(i.boundingBox)),io.applyMatrix4(t.matrixWorld),this.union(io)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bn),Bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(lr),so.subVectors(this.max,lr),As.subVectors(t.a,lr),Rs.subVectors(t.b,lr),Cs.subVectors(t.c,lr),Ci.subVectors(Rs,As),Pi.subVectors(Cs,Rs),Gi.subVectors(As,Cs);let e=[0,-Ci.z,Ci.y,0,-Pi.z,Pi.y,0,-Gi.z,Gi.y,Ci.z,0,-Ci.x,Pi.z,0,-Pi.x,Gi.z,0,-Gi.x,-Ci.y,Ci.x,0,-Pi.y,Pi.x,0,-Gi.y,Gi.x,0];return!Ga(e,As,Rs,Cs,so)||(e=[1,0,0,0,1,0,0,0,1],!Ga(e,As,Rs,Cs,so))?!1:(ro.crossVectors(Ci,Pi),e=[ro.x,ro.y,ro.z],Ga(e,As,Rs,Cs,so))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const di=[new O,new O,new O,new O,new O,new O,new O,new O],Bn=new O,io=new Bi,As=new O,Rs=new O,Cs=new O,Ci=new O,Pi=new O,Gi=new O,lr=new O,so=new O,ro=new O,Hi=new O;function Ga(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Hi.fromArray(n,r);const a=s.x*Math.abs(Hi.x)+s.y*Math.abs(Hi.y)+s.z*Math.abs(Hi.z),l=t.dot(Hi),c=e.dot(Hi),h=i.dot(Hi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const gi=Xp();function Xp(){const n=new ArrayBuffer(4),t=new Float32Array(n),e=new Uint32Array(n),i=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,s[l]=24,s[l|256]=24):(i[l]=31744,i[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:i,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function Yp(n){Math.abs(n)>65504&&Jt("DataUtils.toHalfFloat(): Value out of range."),n=oe(n,-65504,65504),gi.floatView[0]=n;const t=gi.uint32View[0],e=t>>23&511;return gi.baseTable[e]+((t&8388607)>>gi.shiftTable[e])}function qp(n){const t=n>>10;return gi.uint32View[0]=gi.mantissaTable[gi.offsetTable[t]+(n&1023)]+gi.exponentTable[t],gi.floatView[0]}class oo{static toHalfFloat(t){return Yp(t)}static fromHalfFloat(t){return qp(t)}}const Ye=new O,ao=new ht;let Kp=0;class Oe extends Fi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=hp,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ao.fromBufferAttribute(this,e),ao.applyMatrix3(t),this.setXY(e,ao.x,ao.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix3(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Bs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=fn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bs(e,this.array)),e}setX(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bs(e,this.array)),e}setY(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bs(e,this.array)),e}setW(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),i=fn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),i=fn(i,this.array),s=fn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),i=fn(i,this.array),s=fn(s,this.array),r=fn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class bd extends Oe{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ed extends Oe{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class le extends Oe{constructor(t,e,i){super(new Float32Array(t),e,i)}}const Zp=new Bi,cr=new O,Ha=new O;class $s{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Zp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cr.subVectors(t,this.center);const e=cr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(cr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ha.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cr.copy(t.center).add(Ha)),this.expandByPoint(cr.copy(t.center).sub(Ha))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Jp=0;const Ln=new re,Va=new ae,Ps=new O,An=new Bi,hr=new Bi,je=new O;class xe extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(up(t)?Ed:bd)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ne().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ln.makeRotationFromQuaternion(t),this.applyMatrix4(Ln),this}rotateX(t){return Ln.makeRotationX(t),this.applyMatrix4(Ln),this}rotateY(t){return Ln.makeRotationY(t),this.applyMatrix4(Ln),this}rotateZ(t){return Ln.makeRotationZ(t),this.applyMatrix4(Ln),this}translate(t,e,i){return Ln.makeTranslation(t,e,i),this.applyMatrix4(Ln),this}scale(t,e,i){return Ln.makeScale(t,e,i),this.applyMatrix4(Ln),this}lookAt(t){return Va.lookAt(t),Va.updateMatrix(),this.applyMatrix4(Va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new le(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){me("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];An.setFromBufferAttribute(r),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&me('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $s);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){me("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];hr.setFromBufferAttribute(a),this.morphTargetsRelative?(je.addVectors(An.min,hr.min),An.expandByPoint(je),je.addVectors(An.max,hr.max),An.expandByPoint(je)):(An.expandByPoint(hr.min),An.expandByPoint(hr.max))}An.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)je.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(je));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)je.fromBufferAttribute(a,c),l&&(Ps.fromBufferAttribute(t,c),je.add(Ps)),s=Math.max(s,i.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&me('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){me("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Oe(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new O,l[x]=new O;const c=new O,h=new O,d=new O,u=new ht,f=new ht,g=new ht,v=new O,m=new O;function p(x,S,E){c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,S),d.fromBufferAttribute(i,E),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,E),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const A=1/(f.x*g.y-g.x*f.y);isFinite(A)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(A),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(A),a[x].add(v),a[S].add(v),a[E].add(v),l[x].add(m),l[S].add(m),l[E].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let x=0,S=y.length;x<S;++x){const E=y[x],A=E.start,C=E.count;for(let P=A,L=A+C;P<L;P+=3)p(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const w=new O,_=new O,M=new O,b=new O;function R(x){M.fromBufferAttribute(s,x),b.copy(M);const S=a[x];w.copy(S),w.sub(M.multiplyScalar(M.dot(S))).normalize(),_.crossVectors(b,S);const A=_.dot(l[x])<0?-1:1;o.setXYZW(x,w.x,w.y,w.z,A)}for(let x=0,S=y.length;x<S;++x){const E=y[x],A=E.start,C=E.count;for(let P=A,L=A+C;P<L;P+=3)R(t.getX(P+0)),R(t.getX(P+1)),R(t.getX(P+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,h=new O,d=new O;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Oe(u,h,d)}if(this.index===null)return Jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new xe,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wa=new O,$p=new O,Qp=new ne;class mi{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Wa.subVectors(i,e).cross($p.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const s=t.delta(Wa),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Qp.getNormalMatrix(t),s=this.coplanarPoint(Wa).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let jp=0;class Qs extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=ds(),this.name="",this.type="Material",this.blending=wr,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ud,this.blendDst=dd,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ip,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ta,this.stencilZFail=Ta,this.stencilZPass=Ta,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Jt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Lt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new mi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ht().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ht().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const fi=new O,Xa=new O,lo=new O,co=new O;class ha{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fi.copy(this.origin).addScaledVector(this.direction,e),fi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Xa.copy(t).add(e).multiplyScalar(.5),lo.copy(e).sub(t).normalize(),co.copy(this.origin).sub(Xa);const r=t.distanceTo(e)*.5,o=-this.direction.dot(lo),a=co.dot(this.direction),l=-co.dot(lo),c=co.lengthSq(),h=Math.abs(1-o*o);let d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Xa).addScaledVector(lo,u),f}intersectSphere(t,e){if(t.radius<0)return null;fi.subVectors(t.center,this.origin);const i=fi.dot(this.direction),s=fi.dot(fi)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,fi)!==null}intersectTriangle(t,e,i,s,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,g=e.x-o.x,v=e.y-o.y,m=e.z-o.z,p=i.x-o.x,y=i.y-o.y,w=i.z-o.z,_=Math.abs(l),M=Math.abs(c),b=Math.abs(h);let R,x,S,E,A,C,P,L,I,U,B,W;if(_>=M&&_>=b?(S=l,C=d,I=g,W=p,l>=0?(R=c,x=h,E=u,A=f,P=v,L=m,U=y,B=w):(R=h,x=c,E=f,A=u,P=m,L=v,U=w,B=y)):M>=b?(S=c,C=u,I=v,W=y,c>=0?(R=h,x=l,E=f,A=d,P=m,L=g,U=w,B=p):(R=l,x=h,E=d,A=f,P=g,L=m,U=p,B=w)):(S=h,C=f,I=m,W=w,h>=0?(R=l,x=c,E=d,A=u,P=g,L=v,U=p,B=y):(R=c,x=l,E=u,A=d,P=v,L=g,U=y,B=p)),S===0)return null;const F=R/S,G=x/S,X=1/S,_t=E-F*C,yt=A-G*C,kt=P-F*I,Zt=L-G*I,jt=U-F*W,tt=B-G*W,nt=jt*Zt-tt*kt,V=_t*tt-yt*jt,rt=kt*yt-Zt*_t;if(s){if(nt<0||V<0||rt<0)return null}else if((nt<0||V<0||rt<0)&&(nt>0||V>0||rt>0))return null;const J=nt+V+rt;if(J===0)return null;const dt=X*(nt*C+V*I+rt*W);return(J>0?dt<0:dt>0)?null:this.at(dt/J,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Un extends Qs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=fd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Nh=new re,Vi=new ha,ho=new $s,Uh=new O,uo=new O,fo=new O,po=new O,Ya=new O,mo=new O,Oh=new O,go=new O;class Q extends ae{constructor(t=new xe,e=new Un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){mo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(Ya.fromBufferAttribute(d,t),o?mo.addScaledVector(Ya,h):mo.addScaledVector(Ya.sub(e),h))}e.add(mo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ho.copy(i.boundingSphere),ho.applyMatrix4(r),Vi.copy(t.ray).recast(t.near),!(ho.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(ho,Uh)===null||Vi.origin.distanceToSquared(Uh)>(t.far-t.near)**2))&&(Nh.copy(r).invert(),Vi.copy(t.ray).applyMatrix4(Nh),!(i.boundingBox!==null&&Vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Vi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,M=w;_<M;_+=3){const b=a.getX(_),R=a.getX(_+1),x=a.getX(_+2);s=_o(this,p,t,i,c,h,d,b,R,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=a.getX(m),w=a.getX(m+1),_=a.getX(m+2);s=_o(this,o,t,i,c,h,d,y,w,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,M=w;_<M;_+=3){const b=_,R=_+1,x=_+2;s=_o(this,p,t,i,c,h,d,b,R,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=m,w=m+1,_=m+2;s=_o(this,o,t,i,c,h,d,y,w,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function t0(n,t,e,i,s,r,o,a){let l;if(t.side===xn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===ss,a),l===null)return null;go.copy(a),go.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(go);return c<e.near||c>e.far?null:{distance:c,point:go.clone(),object:n}}function _o(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,uo),n.getVertexPosition(l,fo),n.getVertexPosition(c,po);const h=t0(n,t,e,i,uo,fo,po,Oh);if(h){const d=new O;Gn.getBarycoord(Oh,uo,fo,po,d),s&&(h.uv=Gn.getInterpolatedAttribute(s,a,l,c,d,new ht)),r&&(h.uv1=Gn.getInterpolatedAttribute(r,a,l,c,d,new ht)),o&&(h.normal=Gn.getInterpolatedAttribute(o,a,l,c,d,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new O,materialIndex:0};Gn.getNormal(uo,fo,po,u.normal),h.face=u,h.barycoord=d}return h}class ea extends rn{constructor(t=null,e=1,i=1,s,r,o,a,l,c=en,h=en,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ar extends Oe{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ds=new re,Fh=new re,xo=[],Bh=new Bi,e0=new re,ur=new Q,dr=new $s;class we extends Q{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ar(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,e0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Bi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ds),Bh.copy(t.boundingBox).applyMatrix4(Ds),this.boundingBox.union(Bh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new $s),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ds),dr.copy(t.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(dr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(ur.geometry=this.geometry,ur.material=this.material,ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dr.copy(this.boundingSphere),dr.applyMatrix4(i),t.ray.intersectsSphere(dr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ds),Fh.multiplyMatrices(i,Ds),ur.matrixWorld=Fh,ur.raycast(t,xo);for(let o=0,a=xo.length;o<a;o++){const l=xo[o];l.instanceId=r,l.object=this,e.push(l)}xo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ar(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ea(new Float32Array(s*this.count),s,this.count,Dc,Cn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Wi=new $s,n0=new ht(.5,.5),vo=new O;class Gc{constructor(t=new mi,e=new mi,i=new mi,s=new mi,r=new mi,o=new mi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ti,i=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],y=r[12],w=r[13],_=r[14],M=r[15];if(s[0].setComponents(c-o,f-h,p-g,M-y).normalize(),s[1].setComponents(c+o,f+h,p+g,M+y).normalize(),s[2].setComponents(c+a,f+d,p+v,M+w).normalize(),s[3].setComponents(c-a,f-d,p-v,M-w).normalize(),i)s[4].setComponents(l,u,m,_).normalize(),s[5].setComponents(c-l,f-u,p-m,M-_).normalize();else if(s[4].setComponents(c-l,f-u,p-m,M-_).normalize(),e===ti)s[5].setComponents(c+l,f+u,p+m,M+_).normalize();else if(e===Fr)s[5].setComponents(l,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(t){Wi.center.set(0,0,0);const e=n0.distanceTo(t.center);return Wi.radius=.7071067811865476+e,Wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(vo.x=s.normal.x>0?t.max.x:t.min.x,vo.y=s.normal.y>0?t.max.y:t.min.y,vo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(vo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ns extends Qs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const zh=new re,cc=new ha,yo=new $s,Mo=new O;class Ws extends ae{constructor(t=new xe,e=new ns){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yo.copy(i.boundingSphere),yo.applyMatrix4(s),yo.radius+=r,t.ray.intersectsSphere(yo)===!1)return;zh.copy(s).invert(),cc.copy(t.ray).applyMatrix4(zh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,v=f;g<v;g++){const m=c.getX(g);Mo.fromBufferAttribute(d,m),kh(Mo,m,l,s,t,e,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,v=f;g<v;g++)Mo.fromBufferAttribute(d,g),kh(Mo,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function kh(n,t,e,i,s,r,o){const a=cc.distanceSqToPoint(n);if(a<e){const l=new O;cc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Td extends rn{constructor(t=[],e=rs,i,s,r,o,a,l,c,h){super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class bn extends rn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zr extends rn{constructor(t,e,i=ri,s,r,o,a=en,l=en,c,h=Si,d=1){if(h!==Si&&h!==ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Bc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class i0 extends zr{constructor(t,e=ri,i=rs,s,r,o=en,a=en,l,c=Si){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Ad extends rn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Dt extends xe{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(d,2));function g(v,m,p,y,w,_,M,b,R,x,S){const E=_/R,A=M/x,C=_/2,P=M/2,L=b/2,I=R+1,U=x+1;let B=0,W=0;const F=new O;for(let G=0;G<U;G++){const X=G*A-P;for(let _t=0;_t<I;_t++){const yt=_t*E-C;F[v]=yt*y,F[m]=X*w,F[p]=L,c.push(F.x,F.y,F.z),F[v]=0,F[m]=0,F[p]=b>0?1:-1,h.push(F.x,F.y,F.z),d.push(_t/R),d.push(1-G/x),B+=1}}for(let G=0;G<x;G++)for(let X=0;X<R;X++){const _t=u+X+I*G,yt=u+X+I*(G+1),kt=u+(X+1)+I*(G+1),Zt=u+(X+1)+I*G;l.push(_t,yt,Zt),l.push(yt,kt,Zt),W+=6}a.addGroup(f,W,S),f+=W,u+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class qn extends xe{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new O,h=new ht;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=i+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(a,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class pe extends xe{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const v=[],m=i/2;let p=0;y(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new le(d,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(f,2));function y(){const _=new O,M=new O;let b=0;const R=(e-t)/i;for(let x=0;x<=r;x++){const S=[],E=x/r,A=E*(e-t)+t;for(let C=0;C<=s;C++){const P=C/s,L=P*l+a,I=Math.sin(L),U=Math.cos(L);M.x=A*I,M.y=-E*i+m,M.z=A*U,d.push(M.x,M.y,M.z),_.set(I,R,U).normalize(),u.push(_.x,_.y,_.z),f.push(P,1-E),S.push(g++)}v.push(S)}for(let x=0;x<s;x++)for(let S=0;S<r;S++){const E=v[S][x],A=v[S+1][x],C=v[S+1][x+1],P=v[S][x+1];(t>0||S!==0)&&(h.push(E,A,P),b+=3),(e>0||S!==r-1)&&(h.push(A,C,P),b+=3)}c.addGroup(p,b,0),p+=b}function w(_){const M=g,b=new ht,R=new O;let x=0;const S=_===!0?t:e,E=_===!0?1:-1;for(let C=1;C<=s;C++)d.push(0,m*E,0),u.push(0,E,0),f.push(.5,.5),g++;const A=g;for(let C=0;C<=s;C++){const L=C/s*l+a,I=Math.cos(L),U=Math.sin(L);R.x=S*U,R.y=m*E,R.z=S*I,d.push(R.x,R.y,R.z),u.push(0,E,0),b.x=I*.5+.5,b.y=U*.5*E+.5,f.push(b.x,b.y),g++}for(let C=0;C<s;C++){const P=M+C,L=A+C;_===!0?h.push(L,L+1,P):h.push(L+1,L,P),x+=3}c.addGroup(p,x,_===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Mi extends pe{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Mi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ua extends xe{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(r.slice(),3)),this.setAttribute("uv",new le(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const w=new O,_=new O,M=new O;for(let b=0;b<e.length;b+=3)f(e[b+0],w),f(e[b+1],_),f(e[b+2],M),l(w,_,M,y)}function l(y,w,_,M){const b=M+1,R=[];for(let x=0;x<=b;x++){R[x]=[];const S=y.clone().lerp(_,x/b),E=w.clone().lerp(_,x/b),A=b-x;for(let C=0;C<=A;C++)C===0&&x===b?R[x][C]=S:R[x][C]=S.clone().lerp(E,C/A)}for(let x=0;x<b;x++)for(let S=0;S<2*(b-x)-1;S++){const E=Math.floor(S/2);S%2===0?(u(R[x][E+1]),u(R[x+1][E]),u(R[x][E])):(u(R[x][E+1]),u(R[x+1][E+1]),u(R[x+1][E]))}}function c(y){const w=new O;for(let _=0;_<r.length;_+=3)w.x=r[_+0],w.y=r[_+1],w.z=r[_+2],w.normalize().multiplyScalar(y),r[_+0]=w.x,r[_+1]=w.y,r[_+2]=w.z}function h(){const y=new O;for(let w=0;w<r.length;w+=3){y.x=r[w+0],y.y=r[w+1],y.z=r[w+2];const _=m(y)/2/Math.PI+.5,M=p(y)/Math.PI+.5;o.push(_,1-M)}g(),d()}function d(){for(let y=0;y<o.length;y+=6){const w=o[y+0],_=o[y+2],M=o[y+4],b=Math.max(w,_,M),R=Math.min(w,_,M);b>.9&&R<.1&&(w<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),M<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,w){const _=y*3;w.x=t[_+0],w.y=t[_+1],w.z=t[_+2]}function g(){const y=new O,w=new O,_=new O,M=new O,b=new ht,R=new ht,x=new ht;for(let S=0,E=0;S<r.length;S+=9,E+=6){y.set(r[S+0],r[S+1],r[S+2]),w.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),b.set(o[E+0],o[E+1]),R.set(o[E+2],o[E+3]),x.set(o[E+4],o[E+5]),M.copy(y).add(w).add(_).divideScalar(3);const A=m(M);v(b,E+0,y,A),v(R,E+2,w,A),v(x,E+4,_,A)}}function v(y,w,_,M){M<0&&y.x===1&&(o[w]=y.x-1),_.x===0&&_.z===0&&(o[w]=M/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ua(t.vertices,t.indices,t.radius,t.detail)}}class Hc extends ua{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Hc(t.radius,t.detail)}}class oi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const h=i[s],u=i[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ht:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new O,s=[],r=[],o=[],a=new O,l=new re;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new O)}r[0]=new O,o[0]=new O;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(oe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(oe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Vc extends oi{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ht){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class s0 extends Vc{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Wc(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const Gh=new O,Hh=new O,qa=new Wc,Ka=new Wc,Za=new Wc;class r0 extends oi{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new O){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Hh.subVectors(s[0],s[1]).add(s[0]),c=Hh);const d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Gh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Gh),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),qa.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,v,m),Ka.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,v,m),Za.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(qa.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Ka.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Za.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(qa.calc(l),Ka.calc(l),Za.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Vh(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function o0(n,t){const e=1-n;return e*e*t}function a0(n,t){return 2*(1-n)*n*t}function l0(n,t){return n*n*t}function Rr(n,t,e,i){return o0(n,t)+a0(n,e)+l0(n,i)}function c0(n,t){const e=1-n;return e*e*e*t}function h0(n,t){const e=1-n;return 3*e*e*n*t}function u0(n,t){return 3*(1-n)*n*n*t}function d0(n,t){return n*n*n*t}function Cr(n,t,e,i,s){return c0(n,t)+h0(n,e)+u0(n,i)+d0(n,s)}class Rd extends oi{constructor(t=new ht,e=new ht,i=new ht,s=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ht){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Cr(t,s.x,r.x,o.x,a.x),Cr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class f0 extends oi{constructor(t=new O,e=new O,i=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new O){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Cr(t,s.x,r.x,o.x,a.x),Cr(t,s.y,r.y,o.y,a.y),Cr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Cd extends oi{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class p0 extends oi{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pd extends oi{constructor(t=new ht,e=new ht,i=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ht){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Rr(t,s.x,r.x,o.x),Rr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class na extends oi{constructor(t=new O,e=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new O){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Rr(t,s.x,r.x,o.x),Rr(t,s.y,r.y,o.y),Rr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dd extends oi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Vh(a,l.x,c.x,h.x,d.x),Vh(a,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new ht().fromArray(s))}return this}}var ia=Object.freeze({__proto__:null,ArcCurve:s0,CatmullRomCurve3:r0,CubicBezierCurve:Rd,CubicBezierCurve3:f0,EllipseCurve:Vc,LineCurve:Cd,LineCurve3:p0,QuadraticBezierCurve:Pd,QuadraticBezierCurve3:na,SplineCurve:Dd});class m0 extends oi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ia[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new ia[s.type]().fromJSON(s))}return this}}class Wh extends m0{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Cd(this.currentPoint.clone(),new ht(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new Pd(this.currentPoint.clone(),new ht(t,e),new ht(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new Rd(this.currentPoint.clone(),new ht(t,e),new ht(i,s),new ht(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Dd(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const c=new Vc(t,e,i,s,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class qr extends Wh{constructor(t){super(t),this.uuid=ds(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Wh().fromJSON(s))}return this}}function g0(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Ld(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=M0(n,t,r,e)),n.length>80*e){a=n[0],l=n[1];let h=a,d=l;for(let u=e;u<s;u+=e){const f=n[u],g=n[u+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return kr(r,o,e,a,l,c,0),o}function Ld(n,t,e,i,s){let r;if(s===L0(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=Xh(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=Xh(o/i|0,n[o],n[o+1],r);return r&&Ks(r,r.next)&&(Hr(r),r=r.next),r}function as(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ks(e,e.next)||Ge(e.prev,e,e.next)===0)){if(Hr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function kr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&T0(n,i,s,r);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?x0(n,i,s,r):_0(n)){t.push(l.i,n.i,c.i),Hr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=v0(as(n),t),kr(n,t,e,i,s,r,2)):o===2&&y0(n,t,e,i,s,r):kr(as(n),t,e,i,s,r,1);break}}}function _0(n){const t=n.prev,e=n,i=n.next;if(Ge(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c);let g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&xr(s,a,r,l,o,c,g.x,g.y)&&Ge(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function x0(n,t,e,i){const s=n.prev,r=n,o=n.next;if(Ge(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),g=Math.min(h,d,u),v=Math.max(a,l,c),m=Math.max(h,d,u),p=hc(f,g,t,e,i),y=hc(v,m,t,e,i);let w=n.prevZ,_=n.nextZ;for(;w&&w.z>=p&&_&&_.z<=y;){if(w.x>=f&&w.x<=v&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&xr(a,h,l,d,c,u,w.x,w.y)&&Ge(w.prev,w,w.next)>=0||(w=w.prevZ,_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&xr(a,h,l,d,c,u,_.x,_.y)&&Ge(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;w&&w.z>=p;){if(w.x>=f&&w.x<=v&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&xr(a,h,l,d,c,u,w.x,w.y)&&Ge(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&xr(a,h,l,d,c,u,_.x,_.y)&&Ge(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function v0(n,t){let e=n;do{const i=e.prev,s=e.next.next;!Ks(i,s)&&Nd(i,e,e.next,s)&&Gr(i,s)&&Gr(s,i)&&(t.push(i.i,e.i,s.i),Hr(e),Hr(e.next),e=n=s),e=e.next}while(e!==n);return as(e)}function y0(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&C0(o,a)){let l=Ud(o,a);o=as(o,o.next),l=as(l,l.next),kr(o,t,e,i,s,r,0),kr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function M0(n,t,e,i){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Ld(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(R0(c))}s.sort(S0);for(let r=0;r<s.length;r++)e=w0(s[r],e);return e}function S0(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function w0(n,t){const e=b0(n,t);if(!e)return t;const i=Ud(e,n);return as(i,i.next),as(e,e.next)}function b0(n,t){let e=t;const i=n.x,s=n.y;let r=-1/0,o;if(Ks(n,e))return e;do{if(Ks(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===i))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Id(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){const d=Math.abs(s-e.y)/(i-e.x);Gr(e,n)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&E0(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function E0(n,t){return Ge(n.prev,n,t.prev)<0&&Ge(t.next,n,n.next)<0}function T0(n,t,e,i){let s=n;do s.z===0&&(s.z=hc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,A0(s)}function A0(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function hc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function R0(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Id(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function xr(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&Id(n,t,e,i,s,r,o,a)}function C0(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!P0(n,t)&&(Gr(n,t)&&Gr(t,n)&&D0(n,t)&&(Ge(n.prev,n,t.prev)||Ge(n,t.prev,t))||Ks(n,t)&&Ge(n.prev,n,n.next)>0&&Ge(t.prev,t,t.next)>0)}function Ge(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ks(n,t){return n.x===t.x&&n.y===t.y}function Nd(n,t,e,i){const s=wo(Ge(n,t,e)),r=wo(Ge(n,t,i)),o=wo(Ge(e,i,n)),a=wo(Ge(e,i,t));return!!(s!==r&&o!==a||s===0&&So(n,e,t)||r===0&&So(n,i,t)||o===0&&So(e,n,i)||a===0&&So(e,t,i))}function So(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function wo(n){return n>0?1:n<0?-1:0}function P0(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Nd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Gr(n,t){return Ge(n.prev,n,n.next)<0?Ge(n,t,n.next)>=0&&Ge(n,n.prev,t)>=0:Ge(n,t,n.prev)<0||Ge(n,n.next,t)<0}function D0(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Ud(n,t){const e=uc(n.i,n.x,n.y),i=uc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Xh(n,t,e,i){const s=uc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Hr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function uc(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function L0(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class I0{static triangulate(t,e,i=2){return g0(t,e,i)}}class _i{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return _i.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Yh(t),qh(i,t);let o=t.length;e.forEach(Yh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,qh(i,e[l]);const a=I0.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Yh(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function qh(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Xc extends xe{constructor(t=new qr([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new le(s,3)),this.setAttribute("uv",new le(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:N0;let w,_=!1,M,b,R,x;if(p){w=p.getSpacedPoints(h),_=!0,u=!1;const $=p.isCatmullRomCurve3?p.closed:!1;M=p.computeFrenetFrames(h,$),b=new O,R=new O,x=new O}u||(m=0,f=0,g=0,v=0);const S=a.extractPoints(c);let E=S.shape;const A=S.holes;if(!_i.isClockWise(E)){E=E.reverse();for(let $=0,et=A.length;$<et;$++){const ct=A[$];_i.isClockWise(ct)&&(A[$]=ct.reverse())}}function P($){const ct=10000000000000001e-36;let pt=$[0];for(let mt=1;mt<=$.length;mt++){const gt=mt%$.length,St=$[gt],vt=St.x-pt.x,Bt=St.y-pt.y,z=vt*vt+Bt*Bt,te=Math.max(Math.abs(St.x),Math.abs(St.y),Math.abs(pt.x),Math.abs(pt.y)),ce=ct*te*te;if(z<=ce){$.splice(gt,1),mt--;continue}pt=St}}P(E),A.forEach(P);const L=A.length,I=E;for(let $=0;$<L;$++){const et=A[$];E=E.concat(et)}function U($,et,ct){return et||me("ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(et,ct)}const B=E.length;function W($,et,ct){let pt,mt,gt;const St=$.x-et.x,vt=$.y-et.y,Bt=ct.x-$.x,z=ct.y-$.y,te=St*St+vt*vt,ce=St*z-vt*Bt;if(Math.abs(ce)>Number.EPSILON){const N=Math.sqrt(te),T=Math.sqrt(Bt*Bt+z*z),Y=et.x-vt/N,Z=et.y+St/N,it=ct.x-z/T,Mt=ct.y+Bt/T,bt=((it-Y)*z-(Mt-Z)*Bt)/(St*z-vt*Bt);pt=Y+St*bt-$.x,mt=Z+vt*bt-$.y;const st=pt*pt+mt*mt;if(st<=2)return new ht(pt,mt);gt=Math.sqrt(st/2)}else{let N=!1;St>Number.EPSILON?Bt>Number.EPSILON&&(N=!0):St<-Number.EPSILON?Bt<-Number.EPSILON&&(N=!0):Math.sign(vt)===Math.sign(z)&&(N=!0),N?(pt=-vt,mt=St,gt=Math.sqrt(te)):(pt=St,mt=vt,gt=Math.sqrt(te/2))}return new ht(pt/gt,mt/gt)}const F=[];for(let $=0,et=I.length,ct=et-1,pt=$+1;$<et;$++,ct++,pt++)ct===et&&(ct=0),pt===et&&(pt=0),F[$]=W(I[$],I[ct],I[pt]);const G=[];let X,_t=F.concat();for(let $=0,et=L;$<et;$++){const ct=A[$];X=[];for(let pt=0,mt=ct.length,gt=mt-1,St=pt+1;pt<mt;pt++,gt++,St++)gt===mt&&(gt=0),St===mt&&(St=0),X[pt]=W(ct[pt],ct[gt],ct[St]);G.push(X),_t=_t.concat(X)}let yt;if(m===0)yt=_i.triangulateShape(I,A);else{const $=[],et=[];for(let ct=0;ct<m;ct++){const pt=ct/m,mt=f*Math.cos(pt*Math.PI/2),gt=g*Math.sin(pt*Math.PI/2)+v;for(let St=0,vt=I.length;St<vt;St++){const Bt=U(I[St],F[St],gt);V(Bt.x,Bt.y,-mt),pt===0&&$.push(Bt)}for(let St=0,vt=L;St<vt;St++){const Bt=A[St];X=G[St];const z=[];for(let te=0,ce=Bt.length;te<ce;te++){const N=U(Bt[te],X[te],gt);V(N.x,N.y,-mt),pt===0&&z.push(N)}pt===0&&et.push(z)}}yt=_i.triangulateShape($,et)}const kt=yt.length,Zt=g+v;for(let $=0;$<B;$++){const et=u?U(E[$],_t[$],Zt):E[$];_?(R.copy(M.normals[0]).multiplyScalar(et.x),b.copy(M.binormals[0]).multiplyScalar(et.y),x.copy(w[0]).add(R).add(b),V(x.x,x.y,x.z)):V(et.x,et.y,0)}for(let $=1;$<=h;$++)for(let et=0;et<B;et++){const ct=u?U(E[et],_t[et],Zt):E[et];_?(R.copy(M.normals[$]).multiplyScalar(ct.x),b.copy(M.binormals[$]).multiplyScalar(ct.y),x.copy(w[$]).add(R).add(b),V(x.x,x.y,x.z)):V(ct.x,ct.y,d/h*$)}for(let $=m-1;$>=0;$--){const et=$/m,ct=f*Math.cos(et*Math.PI/2),pt=g*Math.sin(et*Math.PI/2)+v;for(let mt=0,gt=I.length;mt<gt;mt++){const St=U(I[mt],F[mt],pt);V(St.x,St.y,d+ct)}for(let mt=0,gt=A.length;mt<gt;mt++){const St=A[mt];X=G[mt];for(let vt=0,Bt=St.length;vt<Bt;vt++){const z=U(St[vt],X[vt],pt);_?V(z.x,z.y+w[h-1].y,w[h-1].x+ct):V(z.x,z.y,d+ct)}}}jt(),tt();function jt(){const $=s.length/3;if(u){let et=0,ct=B*et;for(let pt=0;pt<kt;pt++){const mt=yt[pt];rt(mt[2]+ct,mt[1]+ct,mt[0]+ct)}et=h+m*2,ct=B*et;for(let pt=0;pt<kt;pt++){const mt=yt[pt];rt(mt[0]+ct,mt[1]+ct,mt[2]+ct)}}else{for(let et=0;et<kt;et++){const ct=yt[et];rt(ct[2],ct[1],ct[0])}for(let et=0;et<kt;et++){const ct=yt[et];rt(ct[0]+B*h,ct[1]+B*h,ct[2]+B*h)}}i.addGroup($,s.length/3-$,0)}function tt(){const $=s.length/3;let et=0;nt(I,et),et+=I.length;for(let ct=0,pt=A.length;ct<pt;ct++){const mt=A[ct];nt(mt,et),et+=mt.length}i.addGroup($,s.length/3-$,1)}function nt($,et){let ct=$.length;for(;--ct>=0;){const pt=ct;let mt=ct-1;mt<0&&(mt=$.length-1);for(let gt=0,St=h+m*2;gt<St;gt++){const vt=B*gt,Bt=B*(gt+1),z=et+pt+vt,te=et+mt+vt,ce=et+mt+Bt,N=et+pt+Bt;J(z,te,ce,N)}}}function V($,et,ct){l.push($),l.push(et),l.push(ct)}function rt($,et,ct){dt($),dt(et),dt(ct);const pt=s.length/3,mt=y.generateTopUV(i,s,pt-3,pt-2,pt-1);xt(mt[0]),xt(mt[1]),xt(mt[2])}function J($,et,ct,pt){dt($),dt(et),dt(pt),dt(et),dt(ct),dt(pt);const mt=s.length/3,gt=y.generateSideWallUV(i,s,mt-6,mt-3,mt-2,mt-1);xt(gt[0]),xt(gt[1]),xt(gt[3]),xt(gt[1]),xt(gt[2]),xt(gt[3])}function dt($){s.push(l[$*3+0]),s.push(l[$*3+1]),s.push(l[$*3+2])}function xt($){r.push($.x),r.push($.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return U0(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ia[s.type]().fromJSON(s)),new Xc(i,t.options)}}const N0={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new ht(r,o),new ht(a,l),new ht(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],d=t[i*3+2],u=t[s*3],f=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ht(o,1-l),new ht(c,1-d),new ht(u,1-g),new ht(v,1-p)]:[new ht(a,1-l),new ht(h,1-d),new ht(f,1-g),new ht(m,1-p)]}};function U0(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Kn extends ua{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Kn(t.radius,t.detail)}}class js extends xe{constructor(t=[new ht(0,-.5),new ht(.5,0),new ht(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=oe(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,d=new O,u=new ht,f=new O,g=new O,v=new O;let m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let y=0;y<=e;y++){const w=i+y*h*s,_=Math.sin(w),M=Math.cos(w);for(let b=0;b<=t.length-1;b++){d.x=t[b].x*_,d.y=t[b].y,d.z=t[b].x*M,o.push(d.x,d.y,d.z),u.x=y/e,u.y=b/(t.length-1),a.push(u.x,u.y);const R=l[3*b+0]*_,x=l[3*b+1],S=l[3*b+0]*M;c.push(R,x,S)}}for(let y=0;y<e;y++)for(let w=0;w<t.length-1;w++){const _=w+y*t.length,M=_,b=_+t.length,R=_+t.length+1,x=_+1;r.push(M,b,x),r.push(R,x,b)}this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("uv",new le(a,2)),this.setAttribute("normal",new le(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new js(t.points,t.segments,t.phiStart,t.phiLength)}}class Ee extends xe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const y=p*u-o;for(let w=0;w<c;w++){const _=w*d-r;g.push(_,-y,0),v.push(0,0,1),m.push(w/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const w=y+c*p,_=y+c*(p+1),M=y+1+c*(p+1),b=y+1+c*p;f.push(w,_,b),f.push(_,M,b)}this.setIndex(f),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(v,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ee(t.width,t.height,t.widthSegments,t.heightSegments)}}class Yc extends xe{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let d=t;const u=(e-t)/s,f=new O,g=new ht;for(let v=0;v<=s;v++){for(let m=0;m<=i;m++){const p=r+m/i*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let v=0;v<s;v++){const m=v*(i+1);for(let p=0;p<i;p++){const y=p+m,w=y,_=y+i+1,M=y+i+2,b=y+1;a.push(w,_,b),a.push(_,M,b)}}this.setIndex(a),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class da extends xe{constructor(t=new qr([new ht(0,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new le(s,3)),this.setAttribute("normal",new le(r,3)),this.setAttribute("uv",new le(o,2));function c(h){const d=s.length/3,u=h.extractPoints(e);let f=u.shape;const g=u.holes;_i.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const y=g[m];_i.isClockWise(y)===!0&&(g[m]=y.reverse())}const v=_i.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const y=g[m];f=f.concat(y)}for(let m=0,p=f.length;m<p;m++){const y=f[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,p=v.length;m<p;m++){const y=v[m],w=y[0]+d,_=y[1]+d,M=y[2]+d;i.push(w,_,M),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return O0(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];i.push(o)}return new da(i,t.curveSegments)}}function O0(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class _n extends xe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new O,u=new O,f=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const y=[],w=p/i,_=o+w*a,M=t*Math.cos(_),b=Math.sqrt(t*t-M*M);let R=0;p===0&&o===0?R=.5/e:p===i&&l===Math.PI&&(R=-.5/e);for(let x=0;x<=e;x++){const S=x/e,E=s+S*r;d.x=-b*Math.cos(E),d.y=M,d.z=b*Math.sin(E),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(S+R,1-w),y.push(c++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<e;y++){const w=h[p][y+1],_=h[p][y],M=h[p+1][y],b=h[p+1][y+1];(p!==0||o>0)&&f.push(w,_,b),(p!==i-1||l<Math.PI)&&f.push(_,M,b)}this.setIndex(f),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(v,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class tr extends xe{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],h=[],d=[],u=new O,f=new O,g=new O;for(let v=0;v<=i;v++){const m=o+v/i*a;for(let p=0;p<=s;p++){const y=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(y),f.y=(t+e*Math.cos(m))*Math.sin(y),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(v/i)}}for(let v=1;v<=i;v++)for(let m=1;m<=s;m++){const p=(s+1)*v+m-1,y=(s+1)*(v-1)+m-1,w=(s+1)*(v-1)+m,_=(s+1)*v+m;l.push(p,y,_),l.push(y,w,_)}this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class sa extends xe{constructor(t=new na(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new O,l=new O,c=new ht;let h=new O;const d=[],u=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new le(d,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(f,2));function v(){for(let w=0;w<e;w++)m(w);m(r===!1?e:0),y(),p()}function m(w){h=t.getPointAt(w/e,h);const _=o.normals[w],M=o.binormals[w];for(let b=0;b<=s;b++){const R=b/s*Math.PI*2,x=Math.sin(R),S=-Math.cos(R);l.x=S*_.x+x*M.x,l.y=S*_.y+x*M.y,l.z=S*_.z+x*M.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let w=1;w<=e;w++)for(let _=1;_<=s;_++){const M=(s+1)*(w-1)+(_-1),b=(s+1)*w+(_-1),R=(s+1)*w+_,x=(s+1)*(w-1)+_;g.push(M,b,x),g.push(b,R,x)}}function y(){for(let w=0;w<=e;w++)for(let _=0;_<=s;_++)c.x=w/e,c.y=_/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new sa(new ia[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function Zs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];if(Kh(s))s.isRenderTargetTexture?(Jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Kh(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function pn(n){const t={};for(let e=0;e<n.length;e++){const i=Zs(n[e]);for(const s in i)t[s]=i[s]}return t}function Kh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function F0(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Od(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}const Vr={clone:Zs,merge:pn};var B0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,z0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nn extends Qs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=B0,this.fragmentShader=z0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zs(t.uniforms),this.uniformsGroups=F0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Lt().setHex(s.value);break;case"v2":this.uniforms[i].value=new ht().fromArray(s.value);break;case"v3":this.uniforms[i].value=new O().fromArray(s.value);break;case"v4":this.uniforms[i].value=new ke().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ne().fromArray(s.value);break;case"m4":this.uniforms[i].value=new re().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Fd extends nn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ut extends Qs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lc,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class k0 extends Qs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ep,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class G0 extends Qs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Pr={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(Zh(n)||(this.files[n]=t))},get:function(n){if(this.enabled!==!1&&!Zh(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Zh(n){try{const t=n.slice(n.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class H0{constructor(t,e,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const V0=new H0;class er{constructor(t){this.manager=t!==void 0?t:V0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}er.DEFAULT_MATERIAL_NAME="__DEFAULT";const pi={};class W0 extends Error{constructor(t,e){super(t),this.response=e}}class Bd extends er{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Pr.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(pi[t]!==void 0){pi[t].push({onLoad:e,onProgress:i,onError:s});return}pi[t]=[],pi[t].push({onLoad:e,onProgress:i,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Jt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=pi[t],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0;let v=0;const m=new ReadableStream({start(p){y();function y(){d.read().then(({done:w,value:_})=>{if(w)p.close();else{v+=_.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let b=0,R=h.length;b<R;b++){const x=h[b];x.onProgress&&x.onProgress(M)}p.enqueue(_),y()}},w=>{p.error(w)})}}});return new Response(m)}else throw new W0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Pr.add(`file:${t}`,c);const h=pi[t];delete pi[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=pi[t];if(h===void 0)throw this.manager.itemError(t),c;delete pi[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ls=new WeakMap;class X0 extends er{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Pr.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let d=Ls.get(o);d===void 0&&(d=[],Ls.set(o,d)),d.push({onLoad:e,onError:s})}return o}const a=Br("img");function l(){h(),e&&e(this);const d=Ls.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}Ls.delete(this),r.manager.itemEnd(t)}function c(d){h(),s&&s(d),Pr.remove(`image:${t}`);const u=Ls.get(this)||[];for(let f=0;f<u.length;f++){const g=u[f];g.onError&&g.onError(d)}Ls.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Pr.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}}class Y0 extends er{constructor(t){super(t)}load(t,e,i,s){const r=this,o=new ea,a=new Bd(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(t,function(l){let c;try{c=r.parse(l)}catch(h){s!==void 0?s(h):me(h);return}r._applyTexData(o,c),e&&e(o,c)},i,s),o}createDataTexture(t){const e=new ea;return this._applyTexData(e,this.parse(t)),e}_applyTexData(t,e){e.image!==void 0?t.image=e.image:e.data!==void 0&&(t.image.width=e.width,t.image.height=e.height,t.image.data=e.data),t.wrapS=e.wrapS!==void 0?e.wrapS:Hn,t.wrapT=e.wrapT!==void 0?e.wrapT:Hn,t.magFilter=e.magFilter!==void 0?e.magFilter:Xe,t.minFilter=e.minFilter!==void 0?e.minFilter:Xe,t.anisotropy=e.anisotropy!==void 0?e.anisotropy:1,e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.mipmaps!==void 0&&(t.mipmaps=e.mipmaps,t.minFilter=Ni),e.mipmapCount===1&&(t.minFilter=Xe),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),t.needsUpdate=!0}}class zd extends er{constructor(t){super(t)}load(t,e,i,s){const r=new rn,o=new X0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class fa extends ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class q0 extends fa{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Ja=new re,Jh=new O,$h=new O;class qc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gc,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Jh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jh),$h.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($h),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Ja.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Ja,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Fr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Ja)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const bo=new O,Eo=new Yn,$n=new O;class kd extends ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(bo,Eo,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bo,Eo,$n.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(bo,Eo,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bo,Eo,$n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Di=new O,Qh=new ht,jh=new ht;class Sn extends kd{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=qs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Di.x,Di.y).multiplyScalar(-t/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Di.x,Di.y).multiplyScalar(-t/Di.z)}getViewSize(t,e){return this.getViewBounds(t,Qh,jh),e.subVectors(jh,Qh)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Er*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class K0 extends qc{constructor(){super(new Sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,i=qs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class Z0 extends fa{constructor(t,e,i=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.target=new ae,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new K0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class J0 extends qc{constructor(){super(new Sn(90,1,.5,500)),this.isPointLightShadow=!0}}class Kc extends fa{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new J0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class pa extends kd{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class $0 extends qc{constructor(){super(new pa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dc extends fa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.target=new ae,this.shadow=new $0}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}let To;class Gd{static getContext(){return To===void 0&&(To=new(window.AudioContext||window.webkitAudioContext)),To}static setContext(t){To=t}}class tu extends er{constructor(t){super(t)}load(t,e,i,s){const r=this,o=new Bd(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){try{const c=l.slice(0),h=Gd.getContext(),d=t+"#decode";r.manager.itemStart(d),h.decodeAudioData(c,function(u){e(u),r.manager.itemEnd(d)}).catch(function(u){a(u),r.manager.itemEnd(d)})}catch(c){a(c)}},i,s);function a(l){s?s(l):me(l),r.manager.itemError(t)}}}const Is=-90,Ns=1;class Q0 extends ae{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Sn(Is,Ns,t,e);s.layers=this.layers,this.add(s);const r=new Sn(Is,Ns,t,e);r.layers=this.layers,this.add(r);const o=new Sn(Is,Ns,t,e);o.layers=this.layers,this.add(o);const a=new Sn(Is,Ns,t,e);a.layers=this.layers,this.add(a);const l=new Sn(Is,Ns,t,e);l.layers=this.layers,this.add(l);const c=new Sn(Is,Ns,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===ti)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Fr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class j0 extends Sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Zc{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=tm.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function tm(){this._document.hidden===!1&&this.reset()}const Xi=new O,$a=new Yn,em=new O,Yi=new O,qi=new O;class nm extends ae{constructor(){super(),this.type="AudioListener",this.context=Gd.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new Zc}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t),this._timer.update();const e=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(Xi,$a,em),Yi.set(0,0,-1).applyQuaternion($a),qi.set(0,1,0).applyQuaternion($a),e.positionX){const i=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Xi.x,i),e.positionY.linearRampToValueAtTime(Xi.y,i),e.positionZ.linearRampToValueAtTime(Xi.z,i),e.forwardX.linearRampToValueAtTime(Yi.x,i),e.forwardY.linearRampToValueAtTime(Yi.y,i),e.forwardZ.linearRampToValueAtTime(Yi.z,i),e.upX.linearRampToValueAtTime(qi.x,i),e.upY.linearRampToValueAtTime(qi.y,i),e.upZ.linearRampToValueAtTime(qi.z,i)}else e.setPosition(Xi.x,Xi.y,Xi.z),e.setOrientation(Yi.x,Yi.y,Yi.z,qi.x,qi.y,qi.z)}}class im extends ae{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){Jt("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){Jt("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){Jt("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){Jt("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){Jt("Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(Jt("Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){Jt("Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}copy(t,e){return super.copy(t,e),t.sourceType!=="buffer"?(Jt("Audio: Audio source type cannot be copied."),this):(this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this)}clone(t){return new this.constructor(this.listener).copy(this,t)}}const Ki=new O,eu=new Yn,sm=new O,Zi=new O;class rm extends im{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,i){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=i,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Ki,eu,sm),Zi.set(0,0,1).applyQuaternion(eu);const e=this.panner;if(e.positionX){const i=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(Ki.x,i),e.positionY.linearRampToValueAtTime(Ki.y,i),e.positionZ.linearRampToValueAtTime(Ki.z,i),e.orientationX.linearRampToValueAtTime(Zi.x,i),e.orientationY.linearRampToValueAtTime(Zi.y,i),e.orientationZ.linearRampToValueAtTime(Zi.z,i)}else e.setPosition(Ki.x,Ki.y,Ki.z),e.setOrientation(Zi.x,Zi.y,Zi.z)}}const nu=new re;class om{constructor(t,e,i=0,s=1/0){this.ray=new ha(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new zc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):me("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return nu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nu),this}intersectObject(t,e=!0,i=[]){return fc(t,this,i,e),i.sort(iu),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)fc(t[s],this,i,e);return i.sort(iu),i}}function iu(n,t){return n.distance-t.distance}function fc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)fc(r[o],t,e,!0)}}class su{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=oe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(oe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const ph=class ph{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};ph.prototype.isMatrix2=!0;let ru=ph;class am extends Fi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function ou(n,t,e,i){const s=lm(i);switch(e){case vd:return n*t;case Dc:return n*t/s.components*s.byteLength;case Lc:return n*t/s.components*s.byteLength;case os:return n*t*2/s.components*s.byteLength;case Ic:return n*t*2/s.components*s.byteLength;case yd:return n*t*3/s.components*s.byteLength;case Vn:return n*t*4/s.components*s.byteLength;case Nc:return n*t*4/s.components*s.byteLength;case Bo:case zo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ko:case Go:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Il:case Ul:return Math.max(n,16)*Math.max(t,8)/4;case Ll:case Nl:return Math.max(n,8)*Math.max(t,8)/2;case Ol:case Fl:case zl:case kl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Bl:case Qo:case Gl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Hl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Vl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Wl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Xl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ql:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Kl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Zl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Jl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case $l:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ql:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case jl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case tc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ec:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case nc:case ic:case sc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case rc:case oc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case jo:case ac:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function lm(n){switch(n){case Rn:case md:return{byteLength:1,components:1};case Nr:case gd:case sn:return{byteLength:2,components:1};case Cc:case Pc:return{byteLength:2,components:4};case ri:case Rc:case Cn:return{byteLength:4,components:1};case _d:case xd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wc}}));typeof window<"u"&&(window.__THREE__?Jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hd(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function cm(n){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var hm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,um=`#ifdef USE_ALPHAHASH
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
#endif`,dm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gm=`#ifdef USE_AOMAP
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
#endif`,_m=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xm=`#ifdef USE_BATCHING
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
#endif`,vm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ym=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wm=`#ifdef USE_IRIDESCENCE
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
#endif`,bm=`#ifdef USE_BUMPMAP
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
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Lm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Im=`#define PI 3.141592653589793
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
} // validated`,Nm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Um=`vec3 transformedNormal = objectNormal;
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
#endif`,Om=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,km="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hm=`#ifdef USE_ENVMAP
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
#endif`,Vm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Wm=`#ifdef USE_ENVMAP
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
#endif`,Xm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ym=`#ifdef USE_ENVMAP
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
#endif`,qm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Km=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$m=`#ifdef USE_GRADIENTMAP
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
}`,Qm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ng=`#ifdef USE_ENVMAP
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
#endif`,ig=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ag=`PhysicalMaterial material;
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
#endif`,lg=`uniform sampler2D dfgLUT;
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
}`,cg=`
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
#endif`,hg=`#if defined( RE_IndirectDiffuse )
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
#endif`,ug=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,fg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_g=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yg=`#if defined( USE_POINTS_UV )
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
#endif`,Mg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Eg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tg=`#ifdef USE_MORPHTARGETS
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
#endif`,Ag=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ig=`#ifdef USE_NORMALMAP
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
#endif`,Ng=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ug=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Og=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zg=`float getShadowMask() {
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
}`,Jg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$g=`#ifdef USE_SKINNING
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
#endif`,Qg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jg=`#ifdef USE_SKINNING
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
#endif`,t_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,e_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,s_=`#ifdef USE_TRANSMISSION
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
#endif`,r_=`#ifdef USE_TRANSMISSION
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
#endif`,o_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const h_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u_=`uniform sampler2D t2D;
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
}`,d_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,p_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g_=`#include <common>
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
}`,__=`#if DEPTH_PACKING == 3200
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
}`,x_=`#define DISTANCE
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
}`,v_=`#define DISTANCE
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
}`,y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S_=`uniform float scale;
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
}`,w_=`uniform vec3 diffuse;
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
}`,b_=`#include <common>
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
}`,E_=`uniform vec3 diffuse;
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
}`,T_=`#define LAMBERT
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
}`,A_=`#define LAMBERT
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
}`,R_=`#define MATCAP
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
}`,C_=`#define MATCAP
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
}`,P_=`#define NORMAL
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
}`,D_=`#define NORMAL
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
}`,L_=`#define PHONG
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
}`,I_=`#define PHONG
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
}`,N_=`#define STANDARD
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
}`,U_=`#define STANDARD
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
}`,O_=`#define TOON
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
}`,F_=`#define TOON
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
}`,B_=`uniform float size;
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
}`,z_=`uniform vec3 diffuse;
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
}`,k_=`#include <common>
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
}`,G_=`uniform vec3 color;
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
}`,H_=`uniform float rotation;
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
}`,V_=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:hm,alphahash_pars_fragment:um,alphamap_fragment:dm,alphamap_pars_fragment:fm,alphatest_fragment:pm,alphatest_pars_fragment:mm,aomap_fragment:gm,aomap_pars_fragment:_m,batching_pars_vertex:xm,batching_vertex:vm,begin_vertex:ym,beginnormal_vertex:Mm,bsdfs:Sm,iridescence_fragment:wm,bumpmap_pars_fragment:bm,clipping_planes_fragment:Em,clipping_planes_pars_fragment:Tm,clipping_planes_pars_vertex:Am,clipping_planes_vertex:Rm,color_fragment:Cm,color_pars_fragment:Pm,color_pars_vertex:Dm,color_vertex:Lm,common:Im,cube_uv_reflection_fragment:Nm,defaultnormal_vertex:Um,displacementmap_pars_vertex:Om,displacementmap_vertex:Fm,emissivemap_fragment:Bm,emissivemap_pars_fragment:zm,colorspace_fragment:km,colorspace_pars_fragment:Gm,envmap_fragment:Hm,envmap_common_pars_fragment:Vm,envmap_pars_fragment:Wm,envmap_pars_vertex:Xm,envmap_physical_pars_fragment:ng,envmap_vertex:Ym,fog_vertex:qm,fog_pars_vertex:Km,fog_fragment:Zm,fog_pars_fragment:Jm,gradientmap_pars_fragment:$m,lightmap_pars_fragment:Qm,lights_lambert_fragment:jm,lights_lambert_pars_fragment:tg,lights_pars_begin:eg,lights_toon_fragment:ig,lights_toon_pars_fragment:sg,lights_phong_fragment:rg,lights_phong_pars_fragment:og,lights_physical_fragment:ag,lights_physical_pars_fragment:lg,lights_fragment_begin:cg,lights_fragment_maps:hg,lights_fragment_end:ug,lightprobes_pars_fragment:dg,logdepthbuf_fragment:fg,logdepthbuf_pars_fragment:pg,logdepthbuf_pars_vertex:mg,logdepthbuf_vertex:gg,map_fragment:_g,map_pars_fragment:xg,map_particle_fragment:vg,map_particle_pars_fragment:yg,metalnessmap_fragment:Mg,metalnessmap_pars_fragment:Sg,morphinstance_vertex:wg,morphcolor_vertex:bg,morphnormal_vertex:Eg,morphtarget_pars_vertex:Tg,morphtarget_vertex:Ag,normal_fragment_begin:Rg,normal_fragment_maps:Cg,normal_pars_fragment:Pg,normal_pars_vertex:Dg,normal_vertex:Lg,normalmap_pars_fragment:Ig,clearcoat_normal_fragment_begin:Ng,clearcoat_normal_fragment_maps:Ug,clearcoat_pars_fragment:Og,iridescence_pars_fragment:Fg,opaque_fragment:Bg,packing:zg,premultiplied_alpha_fragment:kg,project_vertex:Gg,dithering_fragment:Hg,dithering_pars_fragment:Vg,roughnessmap_fragment:Wg,roughnessmap_pars_fragment:Xg,shadowmap_pars_fragment:Yg,shadowmap_pars_vertex:qg,shadowmap_vertex:Kg,shadowmask_pars_fragment:Zg,skinbase_vertex:Jg,skinning_pars_vertex:$g,skinning_vertex:Qg,skinnormal_vertex:jg,specularmap_fragment:t_,specularmap_pars_fragment:e_,tonemapping_fragment:n_,tonemapping_pars_fragment:i_,transmission_fragment:s_,transmission_pars_fragment:r_,uv_pars_fragment:o_,uv_pars_vertex:a_,uv_vertex:l_,worldpos_vertex:c_,background_vert:h_,background_frag:u_,backgroundCube_vert:d_,backgroundCube_frag:f_,cube_vert:p_,cube_frag:m_,depth_vert:g_,depth_frag:__,distance_vert:x_,distance_frag:v_,equirect_vert:y_,equirect_frag:M_,linedashed_vert:S_,linedashed_frag:w_,meshbasic_vert:b_,meshbasic_frag:E_,meshlambert_vert:T_,meshlambert_frag:A_,meshmatcap_vert:R_,meshmatcap_frag:C_,meshnormal_vert:P_,meshnormal_frag:D_,meshphong_vert:L_,meshphong_frag:I_,meshphysical_vert:N_,meshphysical_frag:U_,meshtoon_vert:O_,meshtoon_frag:F_,points_vert:B_,points_frag:z_,shadow_vert:k_,shadow_frag:G_,sprite_vert:H_,sprite_frag:V_},It={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},jn={basic:{uniforms:pn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:pn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Lt(0)},envMapIntensity:{value:1}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:pn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:pn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:pn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new Lt(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:pn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:pn([It.points,It.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:pn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:pn([It.common,It.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:pn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:pn([It.sprite,It.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distance:{uniforms:pn([It.common,It.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distance_vert,fragmentShader:de.distance_frag},shadow:{uniforms:pn([It.lights,It.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};jn.physical={uniforms:pn([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const Ao={r:0,b:0,g:0},W_=new re,Vd=new ne;Vd.set(-1,0,0,0,1,0,0,0,1);function X_(n,t,e,i,s,r){const o=new Lt(0);let a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){const _=y.backgroundBlurriness>0;w=t.get(w,_)}return w}function g(y){let w=!1;const _=f(y);_===null?m(o,a):_&&_.isColor&&(m(_,1),w=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(y,w){const _=f(w);_&&(_.isCubeTexture||_.mapping===ca)?(c===void 0&&(c=new Q(new Dt(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:Zs(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(W_.makeRotationFromEuler(w.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Vd),c.material.toneMapped=ge.getTransfer(_.colorSpace)!==Ae,(h!==_||d!==_.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Q(new Ee(2,2),new nn({name:"BackgroundMaterial",uniforms:Zs(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ge.getTransfer(_.colorSpace)!==Ae,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,w){y.getRGB(Ao,Od(n)),e.buffers.color.setClear(Ao.r,Ao.g,Ao.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,w=1){o.set(y),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:g,addToRenderList:v,dispose:p}}function Y_(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,o=!1;function a(A,C,P,L,I){let U=!1;const B=d(A,L,P,C);r!==B&&(r=B,c(r.object)),U=f(A,L,P,I),U&&g(A,L,P,I),I!==null&&t.update(I,n.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,_(A,C,P,L),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function l(){return n.createVertexArray()}function c(A){return n.bindVertexArray(A)}function h(A){return n.deleteVertexArray(A)}function d(A,C,P,L){const I=L.wireframe===!0;let U=i[C.id];U===void 0&&(U={},i[C.id]=U);const B=A.isInstancedMesh===!0?A.id:0;let W=U[B];W===void 0&&(W={},U[B]=W);let F=W[P.id];F===void 0&&(F={},W[P.id]=F);let G=F[I];return G===void 0&&(G=u(l()),F[I]=G),G}function u(A){const C=[],P=[],L=[];for(let I=0;I<e;I++)C[I]=0,P[I]=0,L[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:P,attributeDivisors:L,object:A,attributes:{},index:null}}function f(A,C,P,L){const I=r.attributes,U=C.attributes;let B=0;const W=P.getAttributes();for(const F in W)if(W[F].location>=0){const X=I[F];let _t=U[F];if(_t===void 0&&(F==="instanceMatrix"&&A.instanceMatrix&&(_t=A.instanceMatrix),F==="instanceColor"&&A.instanceColor&&(_t=A.instanceColor)),X===void 0||X.attribute!==_t||_t&&X.data!==_t.data)return!0;B++}return r.attributesNum!==B||r.index!==L}function g(A,C,P,L){const I={},U=C.attributes;let B=0;const W=P.getAttributes();for(const F in W)if(W[F].location>=0){let X=U[F];X===void 0&&(F==="instanceMatrix"&&A.instanceMatrix&&(X=A.instanceMatrix),F==="instanceColor"&&A.instanceColor&&(X=A.instanceColor));const _t={};_t.attribute=X,X&&X.data&&(_t.data=X.data),I[F]=_t,B++}r.attributes=I,r.attributesNum=B,r.index=L}function v(){const A=r.newAttributes;for(let C=0,P=A.length;C<P;C++)A[C]=0}function m(A){p(A,0)}function p(A,C){const P=r.newAttributes,L=r.enabledAttributes,I=r.attributeDivisors;P[A]=1,L[A]===0&&(n.enableVertexAttribArray(A),L[A]=1),I[A]!==C&&(n.vertexAttribDivisor(A,C),I[A]=C)}function y(){const A=r.newAttributes,C=r.enabledAttributes;for(let P=0,L=C.length;P<L;P++)C[P]!==A[P]&&(n.disableVertexAttribArray(P),C[P]=0)}function w(A,C,P,L,I,U,B){B===!0?n.vertexAttribIPointer(A,C,P,I,U):n.vertexAttribPointer(A,C,P,L,I,U)}function _(A,C,P,L){v();const I=L.attributes,U=P.getAttributes(),B=C.defaultAttributeValues;for(const W in U){const F=U[W];if(F.location>=0){let G=I[W];if(G===void 0&&(W==="instanceMatrix"&&A.instanceMatrix&&(G=A.instanceMatrix),W==="instanceColor"&&A.instanceColor&&(G=A.instanceColor)),G!==void 0){const X=G.normalized,_t=G.itemSize,yt=t.get(G);if(yt===void 0)continue;const kt=yt.buffer,Zt=yt.type,jt=yt.bytesPerElement,tt=Zt===n.INT||Zt===n.UNSIGNED_INT||G.gpuType===Rc;if(G.isInterleavedBufferAttribute){const nt=G.data,V=nt.stride,rt=G.offset;if(nt.isInstancedInterleavedBuffer){for(let J=0;J<F.locationSize;J++)p(F.location+J,nt.meshPerAttribute);A.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let J=0;J<F.locationSize;J++)m(F.location+J);n.bindBuffer(n.ARRAY_BUFFER,kt);for(let J=0;J<F.locationSize;J++)w(F.location+J,_t/F.locationSize,Zt,X,V*jt,(rt+_t/F.locationSize*J)*jt,tt)}else{if(G.isInstancedBufferAttribute){for(let nt=0;nt<F.locationSize;nt++)p(F.location+nt,G.meshPerAttribute);A.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let nt=0;nt<F.locationSize;nt++)m(F.location+nt);n.bindBuffer(n.ARRAY_BUFFER,kt);for(let nt=0;nt<F.locationSize;nt++)w(F.location+nt,_t/F.locationSize,Zt,X,_t*jt,_t/F.locationSize*nt*jt,tt)}}else if(B!==void 0){const X=B[W];if(X!==void 0)switch(X.length){case 2:n.vertexAttrib2fv(F.location,X);break;case 3:n.vertexAttrib3fv(F.location,X);break;case 4:n.vertexAttrib4fv(F.location,X);break;default:n.vertexAttrib1fv(F.location,X)}}}}y()}function M(){S();for(const A in i){const C=i[A];for(const P in C){const L=C[P];for(const I in L){const U=L[I];for(const B in U)h(U[B].object),delete U[B];delete L[I]}}delete i[A]}}function b(A){if(i[A.id]===void 0)return;const C=i[A.id];for(const P in C){const L=C[P];for(const I in L){const U=L[I];for(const B in U)h(U[B].object),delete U[B];delete L[I]}}delete i[A.id]}function R(A){for(const C in i){const P=i[C];for(const L in P){const I=P[L];if(I[A.id]===void 0)continue;const U=I[A.id];for(const B in U)h(U[B].object),delete U[B];delete I[A.id]}}}function x(A){for(const C in i){const P=i[C],L=A.isInstancedMesh===!0?A.id:0,I=P[L];if(I!==void 0){for(const U in I){const B=I[U];for(const W in B)h(B[W].object),delete B[W];delete I[U]}delete P[L],Object.keys(P).length===0&&delete i[C]}}}function S(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:S,resetDefaultState:E,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function q_(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function K_(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Vn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const x=R===sn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Rn&&R!==Cn&&!x&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Jt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:_,maxSamples:M,samples:b}}function Z_(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new mi,a=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const y=r?0:i,w=y*4;let _=p.clippingState||null;l.value=_,_=h(g,u,w,f);for(let M=0;M!==w;++M)_[M]=e[M];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,_=f;w!==v;++w,_+=4)o.copy(d[w]).applyMatrix4(y,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}const ks=4,J_=6,$_=20,Q_=256,fr=new pa,au=new Lt;let Qa=null,ja=0,tl=0,el=!1;const j_=new O,Ji=new O;class ra{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:o=256,position:a=j_}=r;Qa=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Qa,ja,tl),this._renderer.xr.enabled=el,t.scissorTest=!1,Us(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rs||t.mapping===Ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qa=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:sn,format:Vn,colorSpace:Or,depthBuffer:!1},s=lu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lu(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=tx(r)),this._blurMaterial=nx(r,t,e),this._ggxMaterial=ex(r,t,e)}return s}_compileMaterial(t){const e=new Q(new xe,t);this._renderer.compile(e,fr)}_sceneToCubeUV(t,e,i,s,r){const l=new Sn(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(au),d.toneMapping=ni,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Q(new Dt,new Un({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let p=!1;const y=t.background;y?y.isColor&&(m.color.copy(y),t.background=null,p=!0):(m.color.copy(au),p=!0);for(let w=0;w<6;w++){const _=w%3;_===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):_===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));const M=this._cubeSize;Us(s,_*M,w>2?M:0,M,M),d.setRenderTarget(s),p&&d.render(v,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=y}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===rs||t.mapping===Ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Us(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,fr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-ks?i-g+ks:0),p=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,Us(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(a,fr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Us(t,m,p,3*v,2*v),s.setRenderTarget(t),s.render(a,fr)}_blur(t,e,i,s){const r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;const c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;const h=this._sizeLods[s],d=3*h*(s>this._lodMax-ks?s-this._lodMax+ks:0),u=4*(this._cubeSize-h);Us(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,fr)}}function tx(n){const t=[],e=[];let i=n;const s=n-ks+1+J_;for(let r=0;r<s;r++){const o=Math.pow(2,i);t.push(o);const a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),v=new Float32Array(f*u*d);for(let p=0;p<d;p++){const y=p%3*2/3-1,w=p>2?0:-1,_=[y,w,0,y+2/3,w,0,y+2/3,w+1,0,y,w,0,y+2/3,w+1,0,y,w+1,0];g.set(_,f*u*p);for(let M=0;M<u;M++){const b=h[M*2]*2-1,R=h[M*2+1]*2-1;p===0?Ji.set(1,R,b):p===1?Ji.set(-b,1,-R):p===2?Ji.set(-b,R,1):p===3?Ji.set(-1,R,-b):p===4?Ji.set(-b,-1,R):Ji.set(b,R,-1),Ji.toArray(v,(p*u+M)*f)}}const m=new xe;m.setAttribute("position",new Oe(g,f)),m.setAttribute("outputDirection",new Oe(v,f)),e.push(new Q(m,null)),i>ks&&i--}return{lodMeshes:e,sizeLods:t}}function lu(n,t,e){const i=new vn(n,t,e);return i.texture.mapping=ca,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Us(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function ex(n,t,e){return new nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Q_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ma(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function nx(n,t,e){return new nn({name:"SphericalGaussianBlur",defines:{SAMPLES:$_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ma(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function cu(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ma(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function hu(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function ma(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Wd extends vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Td(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Dt(5,5,5),r=new nn({name:"CubemapFromEquirect",uniforms:Zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:ei});r.uniforms.tEquirect.value=e;const o=new Q(s,r),a=e.minFilter;return e.minFilter===Ni&&(e.minFilter=Xe),new Q0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}function ix(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===br||f===ba)if(t.has(u)){const g=t.get(u).texture;return a(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const v=new Wd(g.height);return v.fromEquirectangularTexture(n,u),t.set(u,v),u.addEventListener("dispose",c),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const f=u.mapping,g=f===br||f===ba,v=f===rs||f===Ys;if(g||v){let m=e.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new ra(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const y=u.image;return g&&y&&y.height>0||v&&y&&l(y)?(i===null&&(i=new ra(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===br?u.mapping=rs:f===ba&&(u.mapping=Ys),u}function l(u){let f=0;const g=6;for(let v=0;v<g;v++)u[v]!==void 0&&f++;return f===g}function c(u){const f=u.target;f.removeEventListener("dispose",c);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function sx(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Hs("WebGLRenderer: "+i+" extension not supported."),s}}}function rx(n,t,e,i){const s={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)t.update(u[f],n.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,g=d.attributes.position;let v=0;if(g===void 0)return;if(f!==null){const y=f.array;v=f.version;for(let w=0,_=y.length;w<_;w+=3){const M=y[w+0],b=y[w+1],R=y[w+2];u.push(M,b,b,R,R,M)}}else{const y=g.array;v=g.version;for(let w=0,_=y.length/3-1;w<_;w+=3){const M=w+0,b=w+1,R=w+2;u.push(M,b,b,R,R,M)}}const m=new(g.count>=65535?Ed:bd)(u,1);m.version=v;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function ox(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*o),e.update(u,i,1)}function c(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*o,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let v=0;for(let m=0;m<f;m++)v+=u[m];e.update(v,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function ax(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:me("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function lx(n,t,e){const i=new WeakMap,s=new ke;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==d){let E=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var f=E;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let M=a.attributes.position.count*_,b=1;M>t.maxTextureSize&&(b=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const R=new Float32Array(M*b*4*d),x=new Sd(R,M,b,d);x.type=Cn,x.needsUpdate=!0;const S=_*4;for(let A=0;A<d;A++){const C=p[A],P=y[A],L=w[A],I=M*b*4*A;for(let U=0;U<C.count;U++){const B=U*S;g===!0&&(s.fromBufferAttribute(C,U),R[I+B+0]=s.x,R[I+B+1]=s.y,R[I+B+2]=s.z,R[I+B+3]=0),v===!0&&(s.fromBufferAttribute(P,U),R[I+B+4]=s.x,R[I+B+5]=s.y,R[I+B+6]=s.z,R[I+B+7]=0),m===!0&&(s.fromBufferAttribute(L,U),R[I+B+8]=s.x,R[I+B+9]=s.y,R[I+B+10]=s.z,R[I+B+11]=L.itemSize===4?s.w:1)}}u={count:d,texture:x,size:new ht(M,b)},i.set(a,u),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function cx(n,t,e,i,s){let r=new WeakMap;function o(c){const h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const hx={[bc]:"LINEAR_TONE_MAPPING",[Ec]:"REINHARD_TONE_MAPPING",[Tc]:"CINEON_TONE_MAPPING",[la]:"ACES_FILMIC_TONE_MAPPING",[Lr]:"AGX_TONE_MAPPING",[Ir]:"NEUTRAL_TONE_MAPPING",[Ac]:"CUSTOM_TONE_MAPPING"};function ux(n,t,e,i,s,r){const o=new vn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new xe;c.setAttribute("position",new le([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new le([0,2,0,0,2,0],2));const h=new Fd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Q(c,h),u=new pa(-1,1,1,-1,0,1);let f=null,g=null,v=!1,m,p=null,y=[],w=!1;this.setSize=function(_,M){o.setSize(_,M),a!==null&&a.setSize(_,M),l!==null&&l.setSize(_,M);for(let b=0;b<y.length;b++){const R=y[b];R.setSize&&R.setSize(_,M)}},this.setEffects=function(_){y=_,w=y.length>0&&y[0].isRenderPass===!0;const M=o.width,b=o.height;y.length>0&&a===null&&(a=new vn(M,b,{type:sn,depthBuffer:!1,stencilBuffer:!1}),l=new vn(M,b,{type:sn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<y.length;R++){const x=y[R];x.setSize&&x.setSize(M,b)}},this.begin=function(_,M){if(v||_.toneMapping===ni&&y.length===0)return!1;if(p=M,M!==null){const b=M.width,R=M.height;(o.width!==b||o.height!==R)&&this.setSize(b,R)}return w===!1&&_.setRenderTarget(o),m=_.toneMapping,_.toneMapping=ni,!0},this.hasRenderPass=function(){return w},this.end=function(_,M){_.toneMapping=m,v=!0;let b=o,R=a;for(let x=0;x<y.length;x++){const S=y[x];S.enabled!==!1&&(S.render(_,R,b,M),S.needsSwap!==!1&&(b=R,R=R===a?l:a))}if(f!==_.outputColorSpace||g!==_.toneMapping){f=_.outputColorSpace,g=_.toneMapping,h.defines={},ge.getTransfer(f)===Ae&&(h.defines.SRGB_TRANSFER="");const x=hx[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,_.setRenderTarget(p),_.render(d,u),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const Xd=new rn,pc=new zr(1,1),Yd=new Sd,qd=new Op,Kd=new Td,uu=[],du=[],fu=new Float32Array(16),pu=new Float32Array(9),mu=new Float32Array(4);function nr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=uu[s];if(r===void 0&&(r=new Float32Array(s),uu[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Je(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function $e(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ga(n,t){let e=du[t];e===void 0&&(e=new Int32Array(t),du[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function dx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function fx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;n.uniform2fv(this.addr,t),$e(e,t)}}function px(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Je(e,t))return;n.uniform3fv(this.addr,t),$e(e,t)}}function mx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;n.uniform4fv(this.addr,t),$e(e,t)}}function gx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Je(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),$e(e,t)}else{if(Je(e,i))return;mu.set(i),n.uniformMatrix2fv(this.addr,!1,mu),$e(e,i)}}function _x(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Je(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),$e(e,t)}else{if(Je(e,i))return;pu.set(i),n.uniformMatrix3fv(this.addr,!1,pu),$e(e,i)}}function xx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Je(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),$e(e,t)}else{if(Je(e,i))return;fu.set(i),n.uniformMatrix4fv(this.addr,!1,fu),$e(e,i)}}function vx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function yx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;n.uniform2iv(this.addr,t),$e(e,t)}}function Mx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;n.uniform3iv(this.addr,t),$e(e,t)}}function Sx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;n.uniform4iv(this.addr,t),$e(e,t)}}function wx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function bx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;n.uniform2uiv(this.addr,t),$e(e,t)}}function Ex(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;n.uniform3uiv(this.addr,t),$e(e,t)}}function Tx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;n.uniform4uiv(this.addr,t),$e(e,t)}}function Ax(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(pc.compareFunction=e.isReversedDepthBuffer()?Oc:Uc,r=pc):r=Xd,e.setTexture2D(t||r,s)}function Rx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||qd,s)}function Cx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Kd,s)}function Px(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Yd,s)}function Dx(n){switch(n){case 5126:return dx;case 35664:return fx;case 35665:return px;case 35666:return mx;case 35674:return gx;case 35675:return _x;case 35676:return xx;case 5124:case 35670:return vx;case 35667:case 35671:return yx;case 35668:case 35672:return Mx;case 35669:case 35673:return Sx;case 5125:return wx;case 36294:return bx;case 36295:return Ex;case 36296:return Tx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ax;case 35679:case 36299:case 36307:return Rx;case 35680:case 36300:case 36308:case 36293:return Cx;case 36289:case 36303:case 36311:case 36292:return Px}}function Lx(n,t){n.uniform1fv(this.addr,t)}function Ix(n,t){const e=nr(t,this.size,2);n.uniform2fv(this.addr,e)}function Nx(n,t){const e=nr(t,this.size,3);n.uniform3fv(this.addr,e)}function Ux(n,t){const e=nr(t,this.size,4);n.uniform4fv(this.addr,e)}function Ox(n,t){const e=nr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Fx(n,t){const e=nr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Bx(n,t){const e=nr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function zx(n,t){n.uniform1iv(this.addr,t)}function kx(n,t){n.uniform2iv(this.addr,t)}function Gx(n,t){n.uniform3iv(this.addr,t)}function Hx(n,t){n.uniform4iv(this.addr,t)}function Vx(n,t){n.uniform1uiv(this.addr,t)}function Wx(n,t){n.uniform2uiv(this.addr,t)}function Xx(n,t){n.uniform3uiv(this.addr,t)}function Yx(n,t){n.uniform4uiv(this.addr,t)}function qx(n,t,e){const i=this.cache,s=t.length,r=ga(e,s);Je(i,r)||(n.uniform1iv(this.addr,r),$e(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=pc:o=Xd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Kx(n,t,e){const i=this.cache,s=t.length,r=ga(e,s);Je(i,r)||(n.uniform1iv(this.addr,r),$e(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||qd,r[o])}function Zx(n,t,e){const i=this.cache,s=t.length,r=ga(e,s);Je(i,r)||(n.uniform1iv(this.addr,r),$e(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Kd,r[o])}function Jx(n,t,e){const i=this.cache,s=t.length,r=ga(e,s);Je(i,r)||(n.uniform1iv(this.addr,r),$e(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Yd,r[o])}function $x(n){switch(n){case 5126:return Lx;case 35664:return Ix;case 35665:return Nx;case 35666:return Ux;case 35674:return Ox;case 35675:return Fx;case 35676:return Bx;case 5124:case 35670:return zx;case 35667:case 35671:return kx;case 35668:case 35672:return Gx;case 35669:case 35673:return Hx;case 5125:return Vx;case 36294:return Wx;case 36295:return Xx;case 36296:return Yx;case 35678:case 36198:case 36298:case 36306:case 35682:return qx;case 35679:case 36299:case 36307:return Kx;case 35680:case 36300:case 36308:case 36293:return Zx;case 36289:case 36303:case 36311:case 36292:return Jx}}class Qx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Dx(e.type)}}class jx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$x(e.type)}}class tv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const nl=/(\w+)(\])?(\[|\.)?/g;function gu(n,t){n.seq.push(t),n.map[t.id]=t}function ev(n,t,e){const i=n.name,s=i.length;for(nl.lastIndex=0;;){const r=nl.exec(i),o=nl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){gu(e,c===void 0?new Qx(a,n,t):new jx(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new tv(a),gu(e,d)),e=d}}}class Ho{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);ev(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function _u(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const nv=37297;let iv=0;function sv(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const xu=new ne;function rv(n){ge._getMatrix(xu,ge.workingColorSpace,n);const t=`mat3( ${xu.elements.map(e=>e.toFixed(4))} )`;switch(ge.getTransfer(n)){case ta:return[t,"LinearTransferOETF"];case Ae:return[t,"sRGBTransferOETF"];default:return Jt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function vu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+sv(n.getShaderSource(t),a)}else return r}function ov(n,t){const e=rv(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const av={[bc]:"Linear",[Ec]:"Reinhard",[Tc]:"Cineon",[la]:"ACESFilmic",[Lr]:"AgX",[Ir]:"Neutral",[Ac]:"Custom"};function lv(n,t){const e=av[t];return e===void 0?(Jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ro=new O;function cv(){ge.getLuminanceCoefficients(Ro);const n=Ro.x.toFixed(4),t=Ro.y.toFixed(4),e=Ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vr).join(`
`)}function uv(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function dv(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function vr(n){return n!==""}function yu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Mu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fv=/^[ \t]*#include +<([\w\d./]+)>/gm;function mc(n){return n.replace(fv,mv)}const pv=new Map;function mv(n,t){let e=de[t];if(e===void 0){const i=pv.get(t);if(i!==void 0)e=de[i],Jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return mc(e)}const gv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Su(n){return n.replace(gv,_v)}function _v(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wu(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}const xv={[Sr]:"SHADOWMAP_TYPE_PCF",[_r]:"SHADOWMAP_TYPE_VSM"};function vv(n){return xv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const yv={[rs]:"ENVMAP_TYPE_CUBE",[Ys]:"ENVMAP_TYPE_CUBE",[ca]:"ENVMAP_TYPE_CUBE_UV"};function Mv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":yv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Sv={[Ys]:"ENVMAP_MODE_REFRACTION"};function wv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Sv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const bv={[fd]:"ENVMAP_BLENDING_MULTIPLY",[Qf]:"ENVMAP_BLENDING_MIX",[jf]:"ENVMAP_BLENDING_ADD"};function Ev(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":bv[n.combine]||"ENVMAP_BLENDING_NONE"}function Tv(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Av(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=vv(e),c=Mv(e),h=wv(e),d=Ev(e),u=Tv(e),f=hv(e),g=uv(r),v=s.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(vr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(vr).join(`
`),p.length>0&&(p+=`
`)):(m=[wu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),p=[wu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ni?"#define TONE_MAPPING":"",e.toneMapping!==ni?de.tonemapping_pars_fragment:"",e.toneMapping!==ni?lv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,ov("linearToOutputTexel",e.outputColorSpace),cv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vr).join(`
`)),o=mc(o),o=yu(o,e),o=Mu(o,e),a=mc(a),a=yu(a,e),a=Mu(a,e),o=Su(o),a=Su(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=y+m+o,_=y+p+a,M=_u(s,s.VERTEX_SHADER,w),b=_u(s,s.FRAGMENT_SHADER,_);s.attachShader(v,M),s.attachShader(v,b),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(A){if(n.debug.checkShaderErrors){const C=s.getProgramInfoLog(v)||"",P=s.getShaderInfoLog(M)||"",L=s.getShaderInfoLog(b)||"",I=C.trim(),U=P.trim(),B=L.trim();let W=!0,F=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,M,b);else{const G=vu(s,M,"vertex"),X=vu(s,b,"fragment");me("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+I+`
`+G+`
`+X)}else I!==""?Jt("WebGLProgram: Program Info Log:",I):(U===""||B==="")&&(F=!1);F&&(A.diagnostics={runnable:W,programLog:I,vertexShader:{log:U,prefix:m},fragmentShader:{log:B,prefix:p}})}s.deleteShader(M),s.deleteShader(b),x=new Ho(s,v),S=dv(s,v)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(v,nv)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=iv++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=b,this}let Rv=0;class Cv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Pv(t),e.set(t,i)),i}}class Pv{constructor(t){this.id=Rv++,this.code=t,this.usedTimes=0}}function Dv(n){return n===os||n===Qo||n===jo}function Lv(n,t,e,i,s,r){const o=new zc,a=new Cv,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer;let u=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,S,E,A,C,P){const L=A.fog,I=C.geometry,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,W=t.get(x.envMap||U,B),F=W&&W.mapping===ca?W.image.height:null,G=f[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Jt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const X=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,_t=X!==void 0?X.length:0;let yt=0;I.morphAttributes.position!==void 0&&(yt=1),I.morphAttributes.normal!==void 0&&(yt=2),I.morphAttributes.color!==void 0&&(yt=3);let kt,Zt,jt,tt;if(G){const Ce=jn[G];kt=Ce.vertexShader,Zt=Ce.fragmentShader}else{kt=x.vertexShader,Zt=x.fragmentShader;const Ce=a.getVertexShaderStage(x),ie=a.getFragmentShaderStage(x);a.update(x,Ce,ie),jt=Ce.id,tt=ie.id}const nt=n.getRenderTarget(),V=n.state.buffers.depth.getReversed(),rt=C.isInstancedMesh===!0,J=C.isBatchedMesh===!0,dt=!!x.map,xt=!!x.matcap,$=!!W,et=!!x.aoMap,ct=!!x.lightMap,pt=!!x.bumpMap&&x.wireframe===!1,mt=!!x.normalMap,gt=!!x.displacementMap,St=!!x.emissiveMap,vt=!!x.metalnessMap,Bt=!!x.roughnessMap,z=x.anisotropy>0,te=x.clearcoat>0,ce=x.dispersion>0,N=x.retroreflectivity>0,T=x.iridescence>0,Y=x.sheen>0,Z=x.transmission>0,it=z&&!!x.anisotropyMap,Mt=te&&!!x.clearcoatMap,bt=te&&!!x.clearcoatNormalMap,st=te&&!!x.clearcoatRoughnessMap,at=T&&!!x.iridescenceMap,At=T&&!!x.iridescenceThicknessMap,qt=Y&&!!x.sheenColorMap,wt=Y&&!!x.sheenRoughnessMap,Et=!!x.specularMap,Kt=!!x.specularColorMap,Vt=!!x.specularIntensityMap,ee=Z&&!!x.transmissionMap,H=Z&&!!x.thicknessMap,Tt=!!x.gradientMap,lt=!!x.alphaMap,Rt=x.alphaTest>0,Ut=!!x.alphaHash,ft=!!x.extensions;let Xt=ni;x.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Xt=n.toneMapping);const Yt={shaderID:G,shaderType:x.type,shaderName:x.name,vertexShader:kt,fragmentShader:Zt,defines:x.defines,customVertexShaderID:jt,customFragmentShaderID:tt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:J,batchingColor:J&&C._colorsTexture!==null,instancing:rt,instancingColor:rt&&C.instanceColor!==null,instancingMorph:rt&&C.morphTexture!==null,outputColorSpace:nt===null?n.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:ge.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:dt,matcap:xt,envMap:$,envMapMode:$&&W.mapping,envMapCubeUVHeight:F,aoMap:et,lightMap:ct,bumpMap:pt,normalMap:mt,displacementMap:gt,emissiveMap:St,normalMapObjectSpace:mt&&x.normalMapType===np,normalMapTangentSpace:mt&&x.normalMapType===lc,packedNormalMap:mt&&x.normalMapType===lc&&Dv(x.normalMap.format),metalnessMap:vt,roughnessMap:Bt,anisotropy:z,anisotropyMap:it,clearcoat:te,clearcoatMap:Mt,clearcoatNormalMap:bt,clearcoatRoughnessMap:st,dispersion:ce,retroreflection:N,iridescence:T,iridescenceMap:at,iridescenceThicknessMap:At,sheen:Y,sheenColorMap:qt,sheenRoughnessMap:wt,specularMap:Et,specularColorMap:Kt,specularIntensityMap:Vt,transmission:Z,transmissionMap:ee,thicknessMap:H,gradientMap:Tt,opaque:x.transparent===!1&&x.blending===wr&&x.alphaToCoverage===!1,alphaMap:lt,alphaTest:Rt,alphaHash:Ut,combine:x.combine,mapUv:dt&&g(x.map.channel),aoMapUv:et&&g(x.aoMap.channel),lightMapUv:ct&&g(x.lightMap.channel),bumpMapUv:pt&&g(x.bumpMap.channel),normalMapUv:mt&&g(x.normalMap.channel),displacementMapUv:gt&&g(x.displacementMap.channel),emissiveMapUv:St&&g(x.emissiveMap.channel),metalnessMapUv:vt&&g(x.metalnessMap.channel),roughnessMapUv:Bt&&g(x.roughnessMap.channel),anisotropyMapUv:it&&g(x.anisotropyMap.channel),clearcoatMapUv:Mt&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:bt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:At&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:wt&&g(x.sheenRoughnessMap.channel),specularMapUv:Et&&g(x.specularMap.channel),specularColorMapUv:Kt&&g(x.specularColorMap.channel),specularIntensityMapUv:Vt&&g(x.specularIntensityMap.channel),transmissionMapUv:ee&&g(x.transmissionMap.channel),thicknessMapUv:H&&g(x.thicknessMap.channel),alphaMapUv:lt&&g(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(mt||z),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!I.attributes.uv&&(dt||lt),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&mt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:V,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:yt,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:P.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&E.length>0,shadowMapType:n.shadowMap.type,toneMapping:Xt,decodeVideoTexture:dt&&x.map.isVideoTexture===!0&&ge.getTransfer(x.map.colorSpace)===Ae,decodeVideoTextureEmissive:St&&x.emissiveMap.isVideoTexture===!0&&ge.getTransfer(x.emissiveMap.colorSpace)===Ae,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ue,flipSided:x.side===xn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ft&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&x.extensions.multiDraw===!0||J)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Yt.vertexUv1s=l.has(1),Yt.vertexUv2s=l.has(2),Yt.vertexUv3s=l.has(3),l.clear(),Yt}function m(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const E in x.defines)S.push(E),S.push(x.defines[E]);return x.isRawShaderMaterial===!1&&(p(S,x),y(S,x),S.push(n.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function p(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function y(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function w(x){const S=f[x.type];let E;if(S){const A=jn[S];E=Vr.clone(A.uniforms)}else E=x.uniforms;return E}function _(x,S){let E=h.get(S);return E!==void 0?++E.usedTimes:(E=new Av(n,S,x,s),c.push(E),h.set(S,E)),E}function M(x){if(--x.usedTimes===0){const S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){a.remove(x)}function R(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:w,acquireProgram:_,releaseProgram:M,releaseShaderCache:b,programs:c,dispose:R}}function Iv(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Nv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function bu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Eu(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,v,m,p){let y=n[t];return y===void 0?(y={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:p},n[t]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=g,y.materialVariant=o(u),y.groupOrder=v,y.renderOrder=u.renderOrder,y.z=m,y.group=p),t++,y}function l(u,f,g,v,m,p,y){y.reversedDepth===!0&&(m=-m);const w=a(u,f,g,v,m,p);g.transmission>0?i.push(w):g.transparent===!0?s.push(w):e.push(w)}function c(u,f,g,v,m,p){const y=a(u,f,g,v,m,p);g.transmission>0?i.unshift(y):g.transparent===!0?s.unshift(y):e.unshift(y)}function h(u,f){e.length>1&&e.sort(u||Nv),i.length>1&&i.sort(f||bu),s.length>1&&s.sort(f||bu)}function d(){for(let u=t,f=n.length;u<f;u++){const g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Uv(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Eu,n.set(i,[o])):s>=r.length?(o=new Eu,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Ov(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new Lt};break;case"SpotLight":e={position:new O,direction:new O,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new O,halfWidth:new O,halfHeight:new O};break}return n[t.id]=e,e}}}function Fv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Bv=0;function zv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function kv(n){const t=new Ov,e=Fv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const s=new O,r=new re,o=new re;function a(c){let h=0,d=0,u=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,y=0,w=0,_=0,M=0,b=0,R=0,x=0,S=0,E=0;c.sort(zv);for(let C=0,P=c.length;C<P;C++){const L=c[C],I=L.color,U=L.intensity,B=L.distance;let W=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===os?W=L.shadow.map.texture:W=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=I.r*U,d+=I.g*U,u+=I.b*U;else if(L.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(L.sh.coefficients[F],U);E++}else if(L.isSunLight){const F=t.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const G=L.shadow,X=e.get(L);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),i.sunShadow[g]=X,i.sunShadowMap[g]=W;const _t=G.getViewportCount();for(let yt=0;yt<_t;yt++)i.sunShadowMatrix[v+yt]=G.getMatrix(yt),i.sunShadowCascade[v+yt]=G._cascadeData[yt];v+=_t,g++}i.sun[f]=F,f++}else if(L.isDirectionalLight){const F=t.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const G=L.shadow,X=e.get(L);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,i.directionalShadow[m]=X,i.directionalShadowMap[m]=W,i.directionalShadowMatrix[m]=L.shadow.matrix,M++}i.directional[m]=F,m++}else if(L.isSpotLight){const F=t.get(L);F.position.setFromMatrixPosition(L.matrixWorld),F.color.copy(I).multiplyScalar(U),F.distance=B,F.coneCos=Math.cos(L.angle),F.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),F.decay=L.decay,i.spot[y]=F;const G=L.shadow;if(L.map&&(i.spotLightMap[x]=L.map,x++,G.updateMatrices(L),L.castShadow&&S++),i.spotLightMatrix[y]=G.matrix,L.castShadow){const X=e.get(L);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,i.spotShadow[y]=X,i.spotShadowMap[y]=W,R++}y++}else if(L.isRectAreaLight){const F=t.get(L);F.color.copy(I).multiplyScalar(U),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),i.rectArea[w]=F,w++}else if(L.isPointLight){const F=t.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity),F.distance=L.distance,F.decay=L.decay,L.castShadow){const G=L.shadow,X=e.get(L);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,X.shadowCameraNear=G.camera.near,X.shadowCameraFar=G.camera.far,i.pointShadow[p]=X,i.pointShadowMap[p]=W,i.pointShadowMatrix[p]=L.shadow.matrix,b++}i.point[p]=F,p++}else if(L.isHemisphereLight){const F=t.get(L);F.skyColor.copy(L.color).multiplyScalar(U),F.groundColor.copy(L.groundColor).multiplyScalar(U),i.hemi[_]=F,_++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=It.LTC_FLOAT_1,i.rectAreaLTC2=It.LTC_FLOAT_2):(i.rectAreaLTC1=It.LTC_HALF_1,i.rectAreaLTC2=It.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const A=i.hash;(A.sunLength!==f||A.directionalLength!==m||A.pointLength!==p||A.spotLength!==y||A.rectAreaLength!==w||A.hemiLength!==_||A.numSunShadows!==g||A.numDirectionalShadows!==M||A.numPointShadows!==b||A.numSpotShadows!==R||A.numSpotMaps!==x||A.numLightProbes!==E)&&(i.sun.length=f,i.directional.length=m,i.spot.length=y,i.rectArea.length=w,i.point.length=p,i.hemi.length=_,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+x-S,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=E,A.sunLength=f,A.directionalLength=m,A.pointLength=p,A.spotLength=y,A.rectAreaLength=w,A.hemiLength=_,A.numSunShadows=g,A.numDirectionalShadows=M,A.numPointShadows=b,A.numSpotShadows=R,A.numSpotMaps=x,A.numLightProbes=E,i.version=Bv++)}function l(c,h){let d=0,u=0,f=0,g=0,v=0,m=0;const p=h.matrixWorldInverse;for(let y=0,w=c.length;y<w;y++){const _=c[y];if(_.isSunLight){const M=i.sun[d];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(p),d++}else if(_.isDirectionalLight){const M=i.directional[u];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),u++}else if(_.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),g++}else if(_.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){const M=i.hemi[m];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:i}}function Tu(n){const t=new kv(n),e=[],i=[],s=[];function r(u){d.camera=u,e.length=0,i.length=0,s.length=0}function o(u){e.push(u)}function a(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}const d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Gv(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Tu(n),t.set(s,[a])):r>=o.length?(a=new Tu(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const Hv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vv=`uniform sampler2D shadow_pass;
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
}`,Wv=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],Xv=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Au=new re,pr=new O,il=new O;function Yv(n,t,e){let i=new Gc;const s=new ht,r=new ht,o=new ke,a=new k0,l=new G0,c={},h=e.maxTextureSize,d={[ss]:xn,[xn]:ss,[Ue]:Ue},u=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Hv,fragmentShader:Vv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new xe;g.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Q(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sr;let p=this.type;this.render=function(b,R,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===If&&(Jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Sr);const S=n.getRenderTarget(),E=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),C=n.state;C.setBlending(ei),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const P=p!==this.type;P&&R.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(I=>I.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,I=b.length;L<I;L++){const U=b[L],B=U.shadow;if(B===void 0){Jt("WebGLShadowMap:",U,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const W=B.getFrameExtents();s.multiply(W),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,B.mapSize.y=r.y));const F=n.state.buffers.depth.getReversed();if(B.camera._reversedDepth=F,B.map===null||P===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===_r){if(U.isPointLight){Jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new vn(s.x,s.y,{format:os,type:sn,minFilter:Xe,magFilter:Xe,generateMipmaps:!1}),B.map.texture.name=U.name+".shadowMap",B.map.depthTexture=new zr(s.x,s.y,Cn),B.map.depthTexture.name=U.name+".shadowMapDepth",B.map.depthTexture.format=Si,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=en,B.map.depthTexture.magFilter=en}else U.isPointLight?(B.map=new Wd(s.x),B.map.depthTexture=new i0(s.x,ri)):(B.map=new vn(s.x,s.y),B.map.depthTexture=new zr(s.x,s.y,ri)),B.map.depthTexture.name=U.name+".shadowMap",B.map.depthTexture.format=Si,this.type===Sr?(B.map.depthTexture.compareFunction=F?Oc:Uc,B.map.depthTexture.minFilter=Xe,B.map.depthTexture.magFilter=Xe):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=en,B.map.depthTexture.magFilter=en);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);const G=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();U.isPointLight!==!0&&B.updateMatrices(U,x);for(let X=0;X<G;X++){const _t=B.getCamera(X);if(U.isPointLight){const yt=B.camera,kt=B.matrix,Zt=U.distance||yt.far;Zt!==yt.far&&(yt.far=Zt,yt.updateProjectionMatrix()),pr.setFromMatrixPosition(U.matrixWorld),yt.position.copy(pr),il.copy(yt.position),il.add(Wv[X]),yt.up.copy(Xv[X]),yt.lookAt(il),yt.updateMatrixWorld(),kt.makeTranslation(-pr.x,-pr.y,-pr.z),Au.multiplyMatrices(yt.projectionMatrix,yt.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Au,yt.coordinateSystem,yt.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,X),n.clear();else{X===0&&(n.setRenderTarget(B.map),n.clear());const yt=B.getViewport(X);o.set(r.x*yt.x,r.y*yt.y,r.x*yt.z,r.y*yt.w),C.viewport(o)}i=B.getFrustum(X),_(R,x,_t,U,this.type)}B.isPointLightShadow!==!0&&this.type===_r&&y(B,x),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,E,A)};function y(b,R){const x=t.update(v);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new vn(s.x,s.y,{format:os,type:sn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(R,null,x,u,v,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(R,null,x,f,v,null)}function w(b,R,x,S){let E=null;const A=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(A!==void 0)E=A;else if(E=x.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const C=E.uuid,P=R.uuid;let L=c[C];L===void 0&&(L={},c[C]=L);let I=L[P];I===void 0&&(I=E.clone(),L[P]=I,R.addEventListener("dispose",M)),E=I}if(E.visible=R.visible,E.wireframe=R.wireframe,S===_r?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:d[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,x.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const C=n.properties.get(E);C.light=x}return E}function _(b,R,x,S,E){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===_r)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const P=t.update(b),L=b.material;if(Array.isArray(L)){const I=P.groups;for(let U=0,B=I.length;U<B;U++){const W=I[U],F=L[W.materialIndex];if(F&&F.visible){const G=w(b,F,S,E);b.onBeforeShadow(n,b,R,x,P,G,W),n.renderBufferDirect(x,null,P,G,b,W),b.onAfterShadow(n,b,R,x,P,G,W)}}}else if(L.visible){const I=w(b,L,S,E);b.onBeforeShadow(n,b,R,x,P,I,null),n.renderBufferDirect(x,null,P,I,b,null),b.onAfterShadow(n,b,R,x,P,I,null)}}const C=b.children;for(let P=0,L=C.length;P<L;P++)_(C[P],R,x,S,E)}function M(b){b.target.removeEventListener("dispose",M);for(const x in c){const S=c[x],E=b.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function qv(n,t){function e(){let H=!1;const Tt=new ke;let lt=null;const Rt=new ke(0,0,0,0);return{setMask:function(Ut){lt!==Ut&&!H&&(n.colorMask(Ut,Ut,Ut,Ut),lt=Ut)},setLocked:function(Ut){H=Ut},setClear:function(Ut,ft,Xt,Yt,Ce){Ce===!0&&(Ut*=Yt,ft*=Yt,Xt*=Yt),Tt.set(Ut,ft,Xt,Yt),Rt.equals(Tt)===!1&&(n.clearColor(Ut,ft,Xt,Yt),Rt.copy(Tt))},reset:function(){H=!1,lt=null,Rt.set(-1,0,0,0)}}}function i(){let H=!1,Tt=!1,lt=null,Rt=null,Ut=null;return{setReversed:function(ft){if(Tt!==ft){const Xt=t.get("EXT_clip_control");ft?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),Tt=ft;const Yt=Ut;Ut=null,this.setClear(Yt)}},getReversed:function(){return Tt},setTest:function(ft){ft?nt(n.DEPTH_TEST):V(n.DEPTH_TEST)},setMask:function(ft){lt!==ft&&!H&&(n.depthMask(ft),lt=ft)},setFunc:function(ft){if(Tt&&(ft=pp[ft]),Rt!==ft){switch(ft){case bl:n.depthFunc(n.NEVER);break;case El:n.depthFunc(n.ALWAYS);break;case Tl:n.depthFunc(n.LESS);break;case Dr:n.depthFunc(n.LEQUAL);break;case Al:n.depthFunc(n.EQUAL);break;case Rl:n.depthFunc(n.GEQUAL);break;case Cl:n.depthFunc(n.GREATER);break;case Pl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Rt=ft}},setLocked:function(ft){H=ft},setClear:function(ft){Ut!==ft&&(Ut=ft,Tt&&(ft=1-ft),n.clearDepth(ft))},reset:function(){H=!1,lt=null,Rt=null,Ut=null,Tt=!1}}}function s(){let H=!1,Tt=null,lt=null,Rt=null,Ut=null,ft=null,Xt=null,Yt=null,Ce=null;return{setTest:function(ie){H||(ie?nt(n.STENCIL_TEST):V(n.STENCIL_TEST))},setMask:function(ie){Tt!==ie&&!H&&(n.stencilMask(ie),Tt=ie)},setFunc:function(ie,He,un){(lt!==ie||Rt!==He||Ut!==un)&&(n.stencilFunc(ie,He,un),lt=ie,Rt=He,Ut=un)},setOp:function(ie,He,un){(ft!==ie||Xt!==He||Yt!==un)&&(n.stencilOp(ie,He,un),ft=ie,Xt=He,Yt=un)},setLocked:function(ie){H=ie},setClear:function(ie){Ce!==ie&&(n.clearStencil(ie),Ce=ie)},reset:function(){H=!1,Tt=null,lt=null,Rt=null,Ut=null,ft=null,Xt=null,Yt=null,Ce=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let h={},d={},u={},f=new WeakMap,g=[],v=null,m=!1,p=null,y=null,w=null,_=null,M=null,b=null,R=null,x=new Lt(0,0,0),S=0,E=!1,A=null,C=null,P=null,L=null,I=null;const U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,W=0;const F=n.getParameter(n.VERSION);F.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(F)[1]),B=W>=1):F.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),B=W>=2);let G=null,X={};const _t=n.getParameter(n.SCISSOR_BOX),yt=n.getParameter(n.VIEWPORT),kt=new ke().fromArray(_t),Zt=new ke().fromArray(yt);function jt(H,Tt,lt,Rt){const Ut=new Uint8Array(4),ft=n.createTexture();n.bindTexture(H,ft),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xt=0;Xt<lt;Xt++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(Tt,0,n.RGBA,1,1,Rt,0,n.RGBA,n.UNSIGNED_BYTE,Ut):n.texImage2D(Tt+Xt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ut);return ft}const tt={};tt[n.TEXTURE_2D]=jt(n.TEXTURE_2D,n.TEXTURE_2D,1),tt[n.TEXTURE_CUBE_MAP]=jt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[n.TEXTURE_2D_ARRAY]=jt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),tt[n.TEXTURE_3D]=jt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(n.DEPTH_TEST),o.setFunc(Dr),pt(!1),mt(gh),nt(n.CULL_FACE),et(ei);function nt(H){h[H]!==!0&&(n.enable(H),h[H]=!0)}function V(H){h[H]!==!1&&(n.disable(H),h[H]=!1)}function rt(H,Tt){return u[H]!==Tt?(n.bindFramebuffer(H,Tt),u[H]=Tt,H===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Tt),H===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Tt),!0):!1}function J(H,Tt){let lt=g,Rt=!1;if(H){lt=f.get(Tt),lt===void 0&&(lt=[],f.set(Tt,lt));const Ut=H.textures;if(lt.length!==Ut.length||lt[0]!==n.COLOR_ATTACHMENT0){for(let ft=0,Xt=Ut.length;ft<Xt;ft++)lt[ft]=n.COLOR_ATTACHMENT0+ft;lt.length=Ut.length,Rt=!0}}else lt[0]!==n.BACK&&(lt[0]=n.BACK,Rt=!0);Rt&&n.drawBuffers(lt)}function dt(H){return v!==H?(n.useProgram(H),v=H,!0):!1}const xt={[Fs]:n.FUNC_ADD,[Uf]:n.FUNC_SUBTRACT,[Of]:n.FUNC_REVERSE_SUBTRACT};xt[Ff]=n.MIN,xt[Bf]=n.MAX;const $={[zf]:n.ZERO,[kf]:n.ONE,[Gf]:n.SRC_COLOR,[ud]:n.SRC_ALPHA,[qf]:n.SRC_ALPHA_SATURATE,[Xf]:n.DST_COLOR,[Vf]:n.DST_ALPHA,[Hf]:n.ONE_MINUS_SRC_COLOR,[dd]:n.ONE_MINUS_SRC_ALPHA,[Yf]:n.ONE_MINUS_DST_COLOR,[Wf]:n.ONE_MINUS_DST_ALPHA,[Kf]:n.CONSTANT_COLOR,[Zf]:n.ONE_MINUS_CONSTANT_COLOR,[Jf]:n.CONSTANT_ALPHA,[$f]:n.ONE_MINUS_CONSTANT_ALPHA};function et(H,Tt,lt,Rt,Ut,ft,Xt,Yt,Ce,ie){if(H===ei){m===!0&&(V(n.BLEND),m=!1);return}if(m===!1&&(nt(n.BLEND),m=!0),H!==Nf){if(H!==p||ie!==E){if((y!==Fs||M!==Fs)&&(n.blendEquation(n.FUNC_ADD),y=Fs,M=Fs),ie)switch(H){case wr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $o:n.blendFunc(n.ONE,n.ONE);break;case _h:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:me("WebGLState: Invalid blending: ",H);break}else switch(H){case wr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $o:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case _h:me("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xh:me("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:me("WebGLState: Invalid blending: ",H);break}w=null,_=null,b=null,R=null,x.set(0,0,0),S=0,p=H,E=ie}return}Ut=Ut||Tt,ft=ft||lt,Xt=Xt||Rt,(Tt!==y||Ut!==M)&&(n.blendEquationSeparate(xt[Tt],xt[Ut]),y=Tt,M=Ut),(lt!==w||Rt!==_||ft!==b||Xt!==R)&&(n.blendFuncSeparate($[lt],$[Rt],$[ft],$[Xt]),w=lt,_=Rt,b=ft,R=Xt),(Yt.equals(x)===!1||Ce!==S)&&(n.blendColor(Yt.r,Yt.g,Yt.b,Ce),x.copy(Yt),S=Ce),p=H,E=!1}function ct(H,Tt){H.side===Ue?V(n.CULL_FACE):nt(n.CULL_FACE);let lt=H.side===xn;Tt&&(lt=!lt),pt(lt),H.blending===wr&&H.transparent===!1?et(ei):et(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);const Rt=H.stencilWrite;a.setTest(Rt),Rt&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),St(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?nt(n.SAMPLE_ALPHA_TO_COVERAGE):V(n.SAMPLE_ALPHA_TO_COVERAGE)}function pt(H){A!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),A=H)}function mt(H){H!==Df?(nt(n.CULL_FACE),H!==C&&(H===gh?n.cullFace(n.BACK):H===Lf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):V(n.CULL_FACE),C=H}function gt(H){H!==P&&(B&&n.lineWidth(H),P=H)}function St(H,Tt,lt){H?(nt(n.POLYGON_OFFSET_FILL),(L!==Tt||I!==lt)&&(L=Tt,I=lt,o.getReversed()&&(Tt=-Tt),n.polygonOffset(Tt,lt))):V(n.POLYGON_OFFSET_FILL)}function vt(H){H?nt(n.SCISSOR_TEST):V(n.SCISSOR_TEST)}function Bt(H){H===void 0&&(H=n.TEXTURE0+U-1),G!==H&&(n.activeTexture(H),G=H)}function z(H,Tt,lt){lt===void 0&&(G===null?lt=n.TEXTURE0+U-1:lt=G);let Rt=X[lt];Rt===void 0&&(Rt={type:void 0,texture:void 0},X[lt]=Rt),(Rt.type!==H||Rt.texture!==Tt)&&(G!==lt&&(n.activeTexture(lt),G=lt),n.bindTexture(H,Tt||tt[H]),Rt.type=H,Rt.texture=Tt)}function te(){const H=X[G];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function ce(){try{n.compressedTexImage2D(...arguments)}catch(H){me("WebGLState:",H)}}function N(){try{n.compressedTexImage3D(...arguments)}catch(H){me("WebGLState:",H)}}function T(){try{n.texSubImage2D(...arguments)}catch(H){me("WebGLState:",H)}}function Y(){try{n.texSubImage3D(...arguments)}catch(H){me("WebGLState:",H)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(H){me("WebGLState:",H)}}function it(){try{n.compressedTexSubImage3D(...arguments)}catch(H){me("WebGLState:",H)}}function Mt(){try{n.texStorage2D(...arguments)}catch(H){me("WebGLState:",H)}}function bt(){try{n.texStorage3D(...arguments)}catch(H){me("WebGLState:",H)}}function st(){try{n.texImage2D(...arguments)}catch(H){me("WebGLState:",H)}}function at(){try{n.texImage3D(...arguments)}catch(H){me("WebGLState:",H)}}function At(H){return d[H]!==void 0?d[H]:n.getParameter(H)}function qt(H,Tt){d[H]!==Tt&&(n.pixelStorei(H,Tt),d[H]=Tt)}function wt(H){kt.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),kt.copy(H))}function Et(H){Zt.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),Zt.copy(H))}function Kt(H,Tt){let lt=c.get(Tt);lt===void 0&&(lt=new WeakMap,c.set(Tt,lt));let Rt=lt.get(H);Rt===void 0&&(Rt=n.getUniformBlockIndex(Tt,H.name),lt.set(H,Rt))}function Vt(H,Tt){const Rt=c.get(Tt).get(H);l.get(Tt)!==Rt&&(n.uniformBlockBinding(Tt,Rt,H.__bindingPointIndex),l.set(Tt,Rt))}function ee(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},G=null,X={},u={},f=new WeakMap,g=[],v=null,m=!1,p=null,y=null,w=null,_=null,M=null,b=null,R=null,x=new Lt(0,0,0),S=0,E=!1,A=null,C=null,P=null,L=null,I=null,kt.set(0,0,n.canvas.width,n.canvas.height),Zt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:nt,disable:V,bindFramebuffer:rt,drawBuffers:J,useProgram:dt,setBlending:et,setMaterial:ct,setFlipSided:pt,setCullFace:mt,setLineWidth:gt,setPolygonOffset:St,setScissorTest:vt,activeTexture:Bt,bindTexture:z,unbindTexture:te,compressedTexImage2D:ce,compressedTexImage3D:N,texImage2D:st,texImage3D:at,pixelStorei:qt,getParameter:At,updateUBOMapping:Kt,uniformBlockBinding:Vt,texStorage2D:Mt,texStorage3D:bt,texSubImage2D:T,texSubImage3D:Y,compressedTexSubImage2D:Z,compressedTexSubImage3D:it,scissor:wt,viewport:Et,reset:ee}}function Kv(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(N,T){return g?new OffscreenCanvas(N,T):Br("canvas")}function m(N,T,Y){let Z=1;const it=ce(N);if((it.width>Y||it.height>Y)&&(Z=Y/Math.max(it.width,it.height)),Z<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const Mt=Math.floor(Z*it.width),bt=Math.floor(Z*it.height);u===void 0&&(u=v(Mt,bt));const st=T?v(Mt,bt):u;return st.width=Mt,st.height=bt,st.getContext("2d").drawImage(N,0,0,Mt,bt),Jt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+Mt+"x"+bt+")."),st}else return"data"in N&&Jt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),N;return N}function p(N){return N.generateMipmaps}function y(N){n.generateMipmap(N)}function w(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(N,T,Y,Z,it,Mt=!1){if(N!==null){if(n[N]!==void 0)return n[N];Jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let bt;Z&&(bt=t.get("EXT_texture_norm16"),bt||Jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let st=T;if(T===n.RED&&(Y===n.FLOAT&&(st=n.R32F),Y===n.HALF_FLOAT&&(st=n.R16F),Y===n.UNSIGNED_BYTE&&(st=n.R8),Y===n.UNSIGNED_SHORT&&bt&&(st=bt.R16_EXT),Y===n.SHORT&&bt&&(st=bt.R16_SNORM_EXT)),T===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(st=n.R8UI),Y===n.UNSIGNED_SHORT&&(st=n.R16UI),Y===n.UNSIGNED_INT&&(st=n.R32UI),Y===n.BYTE&&(st=n.R8I),Y===n.SHORT&&(st=n.R16I),Y===n.INT&&(st=n.R32I)),T===n.RG&&(Y===n.FLOAT&&(st=n.RG32F),Y===n.HALF_FLOAT&&(st=n.RG16F),Y===n.UNSIGNED_BYTE&&(st=n.RG8),Y===n.UNSIGNED_SHORT&&bt&&(st=bt.RG16_EXT),Y===n.SHORT&&bt&&(st=bt.RG16_SNORM_EXT)),T===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(st=n.RG8UI),Y===n.UNSIGNED_SHORT&&(st=n.RG16UI),Y===n.UNSIGNED_INT&&(st=n.RG32UI),Y===n.BYTE&&(st=n.RG8I),Y===n.SHORT&&(st=n.RG16I),Y===n.INT&&(st=n.RG32I)),T===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(st=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(st=n.RGB16UI),Y===n.UNSIGNED_INT&&(st=n.RGB32UI),Y===n.BYTE&&(st=n.RGB8I),Y===n.SHORT&&(st=n.RGB16I),Y===n.INT&&(st=n.RGB32I)),T===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(st=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(st=n.RGBA16UI),Y===n.UNSIGNED_INT&&(st=n.RGBA32UI),Y===n.BYTE&&(st=n.RGBA8I),Y===n.SHORT&&(st=n.RGBA16I),Y===n.INT&&(st=n.RGBA32I)),T===n.RGB&&(Y===n.UNSIGNED_SHORT&&bt&&(st=bt.RGB16_EXT),Y===n.SHORT&&bt&&(st=bt.RGB16_SNORM_EXT),Y===n.UNSIGNED_INT_5_9_9_9_REV&&(st=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(st=n.R11F_G11F_B10F)),T===n.RGBA){const at=Mt?ta:ge.getTransfer(it);Y===n.FLOAT&&(st=n.RGBA32F),Y===n.HALF_FLOAT&&(st=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(st=at===Ae?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT&&bt&&(st=bt.RGBA16_EXT),Y===n.SHORT&&bt&&(st=bt.RGBA16_SNORM_EXT),Y===n.UNSIGNED_SHORT_4_4_4_4&&(st=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(st=n.RGB5_A1)}return(st===n.R16F||st===n.R32F||st===n.RG16F||st===n.RG32F||st===n.RGBA16F||st===n.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function M(N,T){let Y;return N?T===null||T===ri||T===Ur?Y=n.DEPTH24_STENCIL8:T===Cn?Y=n.DEPTH32F_STENCIL8:T===Nr&&(Y=n.DEPTH24_STENCIL8,Jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ri||T===Ur?Y=n.DEPTH_COMPONENT24:T===Cn?Y=n.DEPTH_COMPONENT32F:T===Nr&&(Y=n.DEPTH_COMPONENT16),Y}function b(N,T){return p(N)===!0||N.isFramebufferTexture&&N.minFilter!==en&&N.minFilter!==Xe?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function R(N){const T=N.target;T.removeEventListener("dispose",R),S(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&d.delete(T)}function x(N){const T=N.target;T.removeEventListener("dispose",x),A(T)}function S(N){const T=i.get(N);if(T.__webglInit===void 0)return;const Y=N.source,Z=f.get(Y);if(Z){const it=Z[T.__cacheKey];it.usedTimes--,it.usedTimes===0&&E(N),Object.keys(Z).length===0&&f.delete(Y)}i.remove(N)}function E(N){const T=i.get(N);n.deleteTexture(T.__webglTexture);const Y=N.source,Z=f.get(Y);delete Z[T.__cacheKey],o.memory.textures--}function A(N){const T=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(T.__webglFramebuffer[Z]))for(let it=0;it<T.__webglFramebuffer[Z].length;it++)n.deleteFramebuffer(T.__webglFramebuffer[Z][it]);else n.deleteFramebuffer(T.__webglFramebuffer[Z]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[Z])}else{if(Array.isArray(T.__webglFramebuffer))for(let Z=0;Z<T.__webglFramebuffer.length;Z++)n.deleteFramebuffer(T.__webglFramebuffer[Z]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Z=0;Z<T.__webglColorRenderbuffer.length;Z++)T.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[Z]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Y=N.textures;for(let Z=0,it=Y.length;Z<it;Z++){const Mt=i.get(Y[Z]);Mt.__webglTexture&&(n.deleteTexture(Mt.__webglTexture),o.memory.textures--),i.remove(Y[Z])}i.remove(N)}let C=0;function P(){C=0}function L(){return C}function I(N){C=N}function U(){const N=C;return N>=s.maxTextures&&Jt("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),C+=1,N}function B(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function W(N,T){const Y=i.get(N);if(N.isVideoTexture&&z(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Y.__version!==N.version){const Z=N.image;if(Z===null)Jt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Jt("WebGLRenderer: Texture marked for update but image is incomplete");else{V(Y,N,T);return}}else N.isExternalTexture&&(Y.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+T)}function F(N,T){const Y=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){V(Y,N,T);return}else N.isExternalTexture&&(Y.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+T)}function G(N,T){const Y=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){V(Y,N,T);return}e.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+T)}function X(N,T){const Y=i.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&Y.__version!==N.version){rt(Y,N,T);return}e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+T)}const _t={[Xn]:n.REPEAT,[Hn]:n.CLAMP_TO_EDGE,[Dl]:n.MIRRORED_REPEAT},yt={[en]:n.NEAREST,[tp]:n.NEAREST_MIPMAP_NEAREST,[jr]:n.NEAREST_MIPMAP_LINEAR,[Xe]:n.LINEAR,[Ea]:n.LINEAR_MIPMAP_NEAREST,[Ni]:n.LINEAR_MIPMAP_LINEAR},kt={[sp]:n.NEVER,[cp]:n.ALWAYS,[rp]:n.LESS,[Uc]:n.LEQUAL,[op]:n.EQUAL,[Oc]:n.GEQUAL,[ap]:n.GREATER,[lp]:n.NOTEQUAL};function Zt(N,T){if(T.type===Cn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Xe||T.magFilter===Ea||T.magFilter===jr||T.magFilter===Ni||T.minFilter===Xe||T.minFilter===Ea||T.minFilter===jr||T.minFilter===Ni)&&Jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,_t[T.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,_t[T.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,_t[T.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,yt[T.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,yt[T.minFilter]),T.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,kt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===en||T.minFilter!==jr&&T.minFilter!==Ni||T.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");n.texParameterf(N,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function jt(N,T){let Y=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",R));const Z=T.source;let it=f.get(Z);it===void 0&&(it={},f.set(Z,it));const Mt=B(T);if(Mt!==N.__cacheKey){it[Mt]===void 0&&(it[Mt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),it[Mt].usedTimes++;const bt=it[N.__cacheKey];bt!==void 0&&(it[N.__cacheKey].usedTimes--,bt.usedTimes===0&&E(T)),N.__cacheKey=Mt,N.__webglTexture=it[Mt].texture}return Y}function tt(N,T,Y){return Math.floor(Math.floor(N/Y)/T)}function nt(N,T,Y,Z){const Mt=N.updateRanges;if(Mt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,Y,Z,T.data);else{Mt.sort((qt,wt)=>qt.start-wt.start);let bt=0;for(let qt=1;qt<Mt.length;qt++){const wt=Mt[bt],Et=Mt[qt],Kt=wt.start+wt.count,Vt=tt(Et.start,T.width,4),ee=tt(wt.start,T.width,4);Et.start<=Kt+1&&Vt===ee&&tt(Et.start+Et.count-1,T.width,4)===Vt?wt.count=Math.max(wt.count,Et.start+Et.count-wt.start):(++bt,Mt[bt]=Et)}Mt.length=bt+1;const st=e.getParameter(n.UNPACK_ROW_LENGTH),at=e.getParameter(n.UNPACK_SKIP_PIXELS),At=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let qt=0,wt=Mt.length;qt<wt;qt++){const Et=Mt[qt],Kt=Math.floor(Et.start/4),Vt=Math.ceil(Et.count/4),ee=Kt%T.width,H=Math.floor(Kt/T.width),Tt=Vt,lt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ee),e.pixelStorei(n.UNPACK_SKIP_ROWS,H),e.texSubImage2D(n.TEXTURE_2D,0,ee,H,Tt,lt,Y,Z,T.data)}N.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,st),e.pixelStorei(n.UNPACK_SKIP_PIXELS,at),e.pixelStorei(n.UNPACK_SKIP_ROWS,At)}}function V(N,T,Y){let Z=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Z=n.TEXTURE_3D);const it=jt(N,T),Mt=T.source;e.bindTexture(Z,N.__webglTexture,n.TEXTURE0+Y);const bt=i.get(Mt);if(Mt.version!==bt.__version||it===!0){if(e.activeTexture(n.TEXTURE0+Y),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const lt=ge.getPrimaries(ge.workingColorSpace),Rt=T.colorSpace===kn?null:ge.getPrimaries(T.colorSpace),Ut=T.colorSpace===kn||lt===Rt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut)}e.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment);let at=m(T.image,!1,s.maxTextureSize);at=te(T,at);const At=r.convert(T.format,T.colorSpace),qt=r.convert(T.type);let wt=_(T.internalFormat,At,qt,T.normalized,T.colorSpace,T.isVideoTexture);Zt(Z,T);let Et;const Kt=T.mipmaps,Vt=T.isVideoTexture!==!0,ee=bt.__version===void 0||it===!0,H=Mt.dataReady,Tt=b(T,at);if(T.isDepthTexture)wt=M(T.format===ji,T.type),ee&&(Vt?e.texStorage2D(n.TEXTURE_2D,1,wt,at.width,at.height):e.texImage2D(n.TEXTURE_2D,0,wt,at.width,at.height,0,At,qt,null));else if(T.isDataTexture)if(Kt.length>0){Vt&&ee&&e.texStorage2D(n.TEXTURE_2D,Tt,wt,Kt[0].width,Kt[0].height);for(let lt=0,Rt=Kt.length;lt<Rt;lt++)Et=Kt[lt],Vt?H&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,Et.width,Et.height,At,qt,Et.data):e.texImage2D(n.TEXTURE_2D,lt,wt,Et.width,Et.height,0,At,qt,Et.data);T.generateMipmaps=!1}else Vt?(ee&&e.texStorage2D(n.TEXTURE_2D,Tt,wt,at.width,at.height),H&&nt(T,at,At,qt)):e.texImage2D(n.TEXTURE_2D,0,wt,at.width,at.height,0,At,qt,at.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Vt&&ee&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Tt,wt,Kt[0].width,Kt[0].height,at.depth);for(let lt=0,Rt=Kt.length;lt<Rt;lt++)if(Et=Kt[lt],T.format!==Vn)if(At!==null)if(Vt){if(H)if(T.layerUpdates.size>0){const Ut=ou(Et.width,Et.height,T.format,T.type);for(const ft of T.layerUpdates){const Xt=Et.data.subarray(ft*Ut/Et.data.BYTES_PER_ELEMENT,(ft+1)*Ut/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,ft,Et.width,Et.height,1,At,Xt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,0,Et.width,Et.height,at.depth,At,Et.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,lt,wt,Et.width,Et.height,at.depth,0,Et.data,0,0);else Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?H&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,0,Et.width,Et.height,at.depth,At,qt,Et.data):e.texImage3D(n.TEXTURE_2D_ARRAY,lt,wt,Et.width,Et.height,at.depth,0,At,qt,Et.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Vt&&ee&&e.texStorage2D(n.TEXTURE_2D,Tt,wt,Kt[0].width,Kt[0].height);for(let lt=0,Rt=Kt.length;lt<Rt;lt++)Et=Kt[lt],T.format!==Vn?At!==null?Vt?H&&e.compressedTexSubImage2D(n.TEXTURE_2D,lt,0,0,Et.width,Et.height,At,Et.data):e.compressedTexImage2D(n.TEXTURE_2D,lt,wt,Et.width,Et.height,0,Et.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?H&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,Et.width,Et.height,At,qt,Et.data):e.texImage2D(n.TEXTURE_2D,lt,wt,Et.width,Et.height,0,At,qt,Et.data)}else if(T.isDataArrayTexture)if(Vt){if(ee&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Tt,wt,at.width,at.height,at.depth),H)if(T.layerUpdates.size>0){const lt=ou(at.width,at.height,T.format,T.type);for(const Rt of T.layerUpdates){const Ut=at.data.subarray(Rt*lt/at.data.BYTES_PER_ELEMENT,(Rt+1)*lt/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Rt,at.width,at.height,1,At,qt,Ut)}T.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,At,qt,at.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,wt,at.width,at.height,at.depth,0,At,qt,at.data);else if(T.isData3DTexture)Vt?(ee&&e.texStorage3D(n.TEXTURE_3D,Tt,wt,at.width,at.height,at.depth),H&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,At,qt,at.data)):e.texImage3D(n.TEXTURE_3D,0,wt,at.width,at.height,at.depth,0,At,qt,at.data);else if(T.isFramebufferTexture){if(ee)if(Vt)e.texStorage2D(n.TEXTURE_2D,Tt,wt,at.width,at.height);else{let lt=at.width,Rt=at.height;for(let Ut=0;Ut<Tt;Ut++)e.texImage2D(n.TEXTURE_2D,Ut,wt,lt,Rt,0,At,qt,null),lt>>=1,Rt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in n){const lt=n.canvas;if(lt.hasAttribute("layoutsubtree")||lt.setAttribute("layoutsubtree","true"),at.parentNode!==lt){lt.appendChild(at),d.add(T),lt.onpaint=Rt=>{const Ut=Rt.changedElements;for(const ft of d)Ut.includes(ft.image)&&(ft.needsUpdate=!0)},lt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,at);else{const Ut=n.RGBA,ft=n.RGBA,Xt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ut,ft,Xt,at)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Kt.length>0){if(Vt&&ee){const lt=ce(Kt[0]);e.texStorage2D(n.TEXTURE_2D,Tt,wt,lt.width,lt.height)}for(let lt=0,Rt=Kt.length;lt<Rt;lt++)Et=Kt[lt],Vt?H&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,At,qt,Et):e.texImage2D(n.TEXTURE_2D,lt,wt,At,qt,Et);T.generateMipmaps=!1}else if(Vt){if(ee){const lt=ce(at);e.texStorage2D(n.TEXTURE_2D,Tt,wt,lt.width,lt.height)}H&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,At,qt,at)}else e.texImage2D(n.TEXTURE_2D,0,wt,At,qt,at);p(T)&&y(Z),bt.__version=Mt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function rt(N,T,Y){if(T.image.length!==6)return;const Z=jt(N,T),it=T.source;e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+Y);const Mt=i.get(it);if(it.version!==Mt.__version||Z===!0){e.activeTexture(n.TEXTURE0+Y);const bt=ge.getPrimaries(ge.workingColorSpace),st=T.colorSpace===kn?null:ge.getPrimaries(T.colorSpace),at=T.colorSpace===kn||bt===st?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);const At=T.isCompressedTexture||T.image[0].isCompressedTexture,qt=T.image[0]&&T.image[0].isDataTexture,wt=[];for(let ft=0;ft<6;ft++)!At&&!qt?wt[ft]=m(T.image[ft],!0,s.maxCubemapSize):wt[ft]=qt?T.image[ft].image:T.image[ft],wt[ft]=te(T,wt[ft]);const Et=wt[0],Kt=r.convert(T.format,T.colorSpace),Vt=r.convert(T.type),ee=_(T.internalFormat,Kt,Vt,T.normalized,T.colorSpace),H=T.isVideoTexture!==!0,Tt=Mt.__version===void 0||Z===!0,lt=it.dataReady;let Rt=b(T,Et);Zt(n.TEXTURE_CUBE_MAP,T);let Ut;if(At){H&&Tt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,ee,Et.width,Et.height);for(let ft=0;ft<6;ft++){Ut=wt[ft].mipmaps;for(let Xt=0;Xt<Ut.length;Xt++){const Yt=Ut[Xt];T.format!==Vn?Kt!==null?H?lt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Xt,0,0,Yt.width,Yt.height,Kt,Yt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Xt,ee,Yt.width,Yt.height,0,Yt.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Xt,0,0,Yt.width,Yt.height,Kt,Vt,Yt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Xt,ee,Yt.width,Yt.height,0,Kt,Vt,Yt.data)}}}else{if(Ut=T.mipmaps,H&&Tt){Ut.length>0&&Rt++;const ft=ce(wt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,ee,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(qt){H?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,wt[ft].width,wt[ft].height,Kt,Vt,wt[ft].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,ee,wt[ft].width,wt[ft].height,0,Kt,Vt,wt[ft].data);for(let Xt=0;Xt<Ut.length;Xt++){const Ce=Ut[Xt].image[ft].image;H?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Xt+1,0,0,Ce.width,Ce.height,Kt,Vt,Ce.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Xt+1,ee,Ce.width,Ce.height,0,Kt,Vt,Ce.data)}}else{H?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Kt,Vt,wt[ft]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,ee,Kt,Vt,wt[ft]);for(let Xt=0;Xt<Ut.length;Xt++){const Yt=Ut[Xt];H?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Xt+1,0,0,Kt,Vt,Yt.image[ft]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Xt+1,ee,Kt,Vt,Yt.image[ft])}}}p(T)&&y(n.TEXTURE_CUBE_MAP),Mt.__version=it.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function J(N,T,Y,Z,it,Mt){const bt=r.convert(Y.format,Y.colorSpace),st=r.convert(Y.type),at=_(Y.internalFormat,bt,st,Y.normalized,Y.colorSpace),At=i.get(T),qt=i.get(Y);if(qt.__renderTarget=T,!At.__hasExternalTextures){const wt=Math.max(1,T.width>>Mt),Et=Math.max(1,T.height>>Mt);it===n.TEXTURE_3D||it===n.TEXTURE_2D_ARRAY?e.texImage3D(it,Mt,at,wt,Et,T.depth,0,bt,st,null):e.texImage2D(it,Mt,at,wt,Et,0,bt,st,null)}e.bindFramebuffer(n.FRAMEBUFFER,N),Bt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,it,qt.__webglTexture,0,vt(T)):(it===n.TEXTURE_2D||it>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,it,qt.__webglTexture,Mt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function dt(N,T,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,N),T.depthBuffer){const Z=T.depthTexture,it=Z&&Z.isDepthTexture?Z.type:null,Mt=M(T.stencilBuffer,it),bt=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Bt(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,vt(T),Mt,T.width,T.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,vt(T),Mt,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Mt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,bt,n.RENDERBUFFER,N)}else{const Z=T.textures;for(let it=0;it<Z.length;it++){const Mt=Z[it],bt=r.convert(Mt.format,Mt.colorSpace),st=r.convert(Mt.type),at=_(Mt.internalFormat,bt,st,Mt.normalized,Mt.colorSpace);Bt(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,vt(T),at,T.width,T.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,vt(T),at,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,at,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function xt(N,T,Y){const Z=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const it=i.get(T.depthTexture);if(it.__renderTarget=T,(!it.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Z){if(it.__webglInit===void 0&&(it.__webglInit=!0,T.depthTexture.addEventListener("dispose",R)),it.__webglTexture===void 0){it.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,it.__webglTexture),Zt(n.TEXTURE_CUBE_MAP,T.depthTexture);const At=r.convert(T.depthTexture.format),qt=r.convert(T.depthTexture.type);let wt;T.depthTexture.format===Si?wt=n.DEPTH_COMPONENT24:T.depthTexture.format===ji&&(wt=n.DEPTH24_STENCIL8);for(let Et=0;Et<6;Et++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,wt,T.width,T.height,0,At,qt,null)}}else W(T.depthTexture,0);const Mt=it.__webglTexture,bt=vt(T),st=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+Y:n.TEXTURE_2D,at=T.depthTexture.format===ji?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===Si)Bt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,at,st,Mt,0,bt):n.framebufferTexture2D(n.FRAMEBUFFER,at,st,Mt,0);else if(T.depthTexture.format===ji)Bt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,at,st,Mt,0,bt):n.framebufferTexture2D(n.FRAMEBUFFER,at,st,Mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $(N){const T=i.get(N),Y=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const Z=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Z){const it=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Z.removeEventListener("dispose",it)};Z.addEventListener("dispose",it),T.__depthDisposeCallback=it}T.__boundDepthTexture=Z}if(N.depthTexture&&!T.__autoAllocateDepthBuffer)if(Y)for(let Z=0;Z<6;Z++)xt(T.__webglFramebuffer[Z],N,Z);else{const Z=N.texture.mipmaps;Z&&Z.length>0?xt(T.__webglFramebuffer[0],N,0):xt(T.__webglFramebuffer,N,0)}else if(Y){T.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[Z]),T.__webglDepthbuffer[Z]===void 0)T.__webglDepthbuffer[Z]=n.createRenderbuffer(),dt(T.__webglDepthbuffer[Z],N,!1);else{const it=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=T.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,Mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,Mt)}}else{const Z=N.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),dt(T.__webglDepthbuffer,N,!1);else{const it=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,Mt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function et(N,T,Y){const Z=i.get(N);T!==void 0&&J(Z.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&$(N)}function ct(N){const T=N.texture,Y=i.get(N),Z=i.get(T);N.addEventListener("dispose",x);const it=N.textures,Mt=N.isWebGLCubeRenderTarget===!0,bt=it.length>1;if(bt||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=T.version,o.memory.textures++),Mt){Y.__webglFramebuffer=[];for(let st=0;st<6;st++)if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer[st]=[];for(let at=0;at<T.mipmaps.length;at++)Y.__webglFramebuffer[st][at]=n.createFramebuffer()}else Y.__webglFramebuffer[st]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let st=0;st<T.mipmaps.length;st++)Y.__webglFramebuffer[st]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(bt)for(let st=0,at=it.length;st<at;st++){const At=i.get(it[st]);At.__webglTexture===void 0&&(At.__webglTexture=n.createTexture(),o.memory.textures++)}if(N.samples>0&&Bt(N)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let st=0;st<it.length;st++){const at=it[st];Y.__webglColorRenderbuffer[st]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[st]);const At=r.convert(at.format,at.colorSpace),qt=r.convert(at.type),wt=_(at.internalFormat,At,qt,at.normalized,at.colorSpace,N.isXRRenderTarget===!0),Et=vt(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,Et,wt,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.RENDERBUFFER,Y.__webglColorRenderbuffer[st])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),dt(Y.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Mt){e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Zt(n.TEXTURE_CUBE_MAP,T);for(let st=0;st<6;st++)if(T.mipmaps&&T.mipmaps.length>0)for(let at=0;at<T.mipmaps.length;at++)J(Y.__webglFramebuffer[st][at],N,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+st,at);else J(Y.__webglFramebuffer[st],N,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);p(T)&&y(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let st=0,at=it.length;st<at;st++){const At=it[st],qt=i.get(At);let wt=n.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(wt=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(wt,qt.__webglTexture),Zt(wt,At),J(Y.__webglFramebuffer,N,At,n.COLOR_ATTACHMENT0+st,wt,0),p(At)&&y(wt)}e.unbindTexture()}else{let st=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(st=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(st,Z.__webglTexture),Zt(st,T),T.mipmaps&&T.mipmaps.length>0)for(let at=0;at<T.mipmaps.length;at++)J(Y.__webglFramebuffer[at],N,T,n.COLOR_ATTACHMENT0,st,at);else J(Y.__webglFramebuffer,N,T,n.COLOR_ATTACHMENT0,st,0);p(T)&&y(st),e.unbindTexture()}N.depthBuffer&&$(N)}function pt(N){const T=N.textures;for(let Y=0,Z=T.length;Y<Z;Y++){const it=T[Y];if(p(it)){const Mt=w(N),bt=i.get(it).__webglTexture;e.bindTexture(Mt,bt),y(Mt),e.unbindTexture()}}}const mt=[],gt=[];function St(N){if(N.samples>0){if(Bt(N)===!1){const T=N.textures,Y=N.width,Z=N.height;let it=n.COLOR_BUFFER_BIT;const Mt=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,bt=i.get(N),st=T.length>1;if(st)for(let At=0;At<T.length;At++)e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);const at=N.texture.mipmaps;at&&at.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let At=0;At<T.length;At++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(it|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(it|=n.STENCIL_BUFFER_BIT)),st){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,bt.__webglColorRenderbuffer[At]);const qt=i.get(T[At]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,qt,0)}n.blitFramebuffer(0,0,Y,Z,0,0,Y,Z,it,n.NEAREST),l===!0&&(mt.length=0,gt.length=0,mt.push(n.COLOR_ATTACHMENT0+At),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(mt.push(Mt),gt.push(Mt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,gt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,mt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),st)for(let At=0;At<T.length;At++){e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.RENDERBUFFER,bt.__webglColorRenderbuffer[At]);const qt=i.get(T[At]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.TEXTURE_2D,qt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){const T=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function vt(N){return Math.min(s.maxSamples,N.samples)}function Bt(N){const T=i.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function z(N){const T=o.render.frame;h.get(N)!==T&&(h.set(N,T),N.update())}function te(N,T){const Y=N.colorSpace,Z=N.format,it=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Y!==Or&&Y!==kn&&(ge.getTransfer(Y)===Ae?(Z!==Vn||it!==Rn)&&Jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):me("WebGLTextures: Unsupported texture color space:",Y)),T}function ce(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=P,this.getTextureUnits=L,this.setTextureUnits=I,this.setTexture2D=W,this.setTexture2DArray=F,this.setTexture3D=G,this.setTextureCube=X,this.rebindTextures=et,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Bt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Zv(n,t){function e(i,s=kn){let r;const o=ge.getTransfer(s);if(i===Rn)return n.UNSIGNED_BYTE;if(i===Cc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Pc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===_d)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===xd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===md)return n.BYTE;if(i===gd)return n.SHORT;if(i===Nr)return n.UNSIGNED_SHORT;if(i===Rc)return n.INT;if(i===ri)return n.UNSIGNED_INT;if(i===Cn)return n.FLOAT;if(i===sn)return n.HALF_FLOAT;if(i===vd)return n.ALPHA;if(i===yd)return n.RGB;if(i===Vn)return n.RGBA;if(i===Si)return n.DEPTH_COMPONENT;if(i===ji)return n.DEPTH_STENCIL;if(i===Dc)return n.RED;if(i===Lc)return n.RED_INTEGER;if(i===os)return n.RG;if(i===Ic)return n.RG_INTEGER;if(i===Nc)return n.RGBA_INTEGER;if(i===Bo||i===zo||i===ko||i===Go)if(o===Ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===zo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ko)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Go)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ll||i===Il||i===Nl||i===Ul)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Il)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Nl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ul)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ol||i===Fl||i===Bl||i===zl||i===kl||i===Qo||i===Gl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ol||i===Fl)return o===Ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Bl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===zl)return r.COMPRESSED_R11_EAC;if(i===kl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Qo)return r.COMPRESSED_RG11_EAC;if(i===Gl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Hl||i===Vl||i===Wl||i===Xl||i===Yl||i===ql||i===Kl||i===Zl||i===Jl||i===$l||i===Ql||i===jl||i===tc||i===ec)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Hl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ql)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$l)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ql)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===tc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ec)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===nc||i===ic||i===sc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===nc)return o===Ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ic)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rc||i===oc||i===jo||i===ac)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===rc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===oc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ac)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ur?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const Jv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$v=`
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

}`;class Qv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Ad(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new nn({vertexShader:Jv,fragmentShader:$v,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Q(new Ee(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jv extends Fi{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",m=new Qv,p={},y=e.getContextAttributes();let w=null,_=null;const M=[],b=[],R=new ht;let x=null,S=null;const E=new Sn;E.viewport=new ke;const A=new Sn;A.viewport=new ke;const C=[E,A],P=new j0;let L=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let nt=M[tt];return nt===void 0&&(nt=new La,M[tt]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(tt){let nt=M[tt];return nt===void 0&&(nt=new La,M[tt]=nt),nt.getGripSpace()},this.getHand=function(tt){let nt=M[tt];return nt===void 0&&(nt=new La,M[tt]=nt),nt.getHandSpace()};function U(tt){const nt=b.indexOf(tt.inputSource);if(nt===-1)return;const V=M[nt];V!==void 0&&(V.update(tt.inputSource,tt.frame,c||o),V.dispatchEvent({type:tt.type,data:tt.inputSource}))}function B(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",W);for(let tt=0;tt<M.length;tt++){const nt=b[tt];nt!==null&&(b[tt]=null,M[tt].disconnect(nt))}L=null,I=null,m.reset();for(const tt in p)delete p[tt];if(t.setRenderTarget(w),f=null,u=null,d=null,s=null,_=null,jt.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(R.width,R.height,!1),S!==null){const tt=S.camera;tt.fov=S.fov,tt.zoom=S.zoom,tt.updateProjectionMatrix(),S=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,i.isPresenting===!0&&Jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){a=tt,i.isPresenting===!0&&Jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",B),s.addEventListener("inputsourceschange",W),y.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let V=null,rt=null,J=null;y.depth&&(J=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,V=y.stencil?ji:Si,rt=y.stencil?Ur:ri);const dt={colorFormat:e.RGBA8,depthFormat:J,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(dt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new vn(u.textureWidth,u.textureHeight,{format:Vn,type:Rn,depthTexture:new zr(u.textureWidth,u.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const V={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,V),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new vn(f.framebufferWidth,f.framebufferHeight,{format:Vn,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),jt.setContext(s),jt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(tt){for(let nt=0;nt<tt.removed.length;nt++){const V=tt.removed[nt],rt=b.indexOf(V);rt>=0&&(b[rt]=null,M[rt].disconnect(V))}for(let nt=0;nt<tt.added.length;nt++){const V=tt.added[nt];let rt=b.indexOf(V);if(rt===-1){for(let dt=0;dt<M.length;dt++)if(dt>=b.length){b.push(V),rt=dt;break}else if(b[dt]===null){b[dt]=V,rt=dt;break}if(rt===-1)break}const J=M[rt];J&&J.connect(V)}}const F=new O,G=new O;function X(tt,nt,V){F.setFromMatrixPosition(nt.matrixWorld),G.setFromMatrixPosition(V.matrixWorld);const rt=F.distanceTo(G),J=nt.projectionMatrix.elements,dt=V.projectionMatrix.elements,xt=J[14]/(J[10]-1),$=J[14]/(J[10]+1),et=(J[9]+1)/J[5],ct=(J[9]-1)/J[5],pt=(J[8]-1)/J[0],mt=(dt[8]+1)/dt[0],gt=xt*pt,St=xt*mt,vt=rt/(-pt+mt),Bt=vt*-pt;if(nt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(Bt),tt.translateZ(vt),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),J[10]===-1)tt.projectionMatrix.copy(nt.projectionMatrix),tt.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const z=xt+vt,te=$+vt,ce=gt-Bt,N=St+(rt-Bt),T=et*$/te*z,Y=ct*$/te*z;tt.projectionMatrix.makePerspective(ce,N,T,Y,z,te),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function _t(tt,nt){nt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(nt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let nt=tt.near,V=tt.far;m.texture!==null&&(m.depthNear>0&&(nt=m.depthNear),m.depthFar>0&&(V=m.depthFar)),P.near=A.near=E.near=nt,P.far=A.far=E.far=V,(L!==P.near||I!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),L=P.near,I=P.far),P.layers.mask=tt.layers.mask|6,E.layers.mask=P.layers.mask&-5,A.layers.mask=P.layers.mask&-3;const rt=tt.parent,J=P.cameras;_t(P,rt);for(let dt=0;dt<J.length;dt++)_t(J[dt],rt);J.length===2?X(P,E,A):P.projectionMatrix.copy(E.projectionMatrix),S===null&&tt.isPerspectiveCamera&&(S={camera:tt,fov:tt.fov,zoom:tt.zoom}),yt(tt,P,rt)};function yt(tt,nt,V){V===null?tt.matrix.copy(nt.matrixWorld):(tt.matrix.copy(V.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(nt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(nt.projectionMatrix),tt.projectionMatrixInverse.copy(nt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=qs*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(tt){l=tt,u!==null&&(u.fixedFoveation=tt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=tt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(P)},this.getCameraTexture=function(tt){return p[tt]};let kt=null;function Zt(tt,nt){if(h=nt.getViewerPose(c||o),g=nt,h!==null){const V=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let rt=!1;V.length!==P.cameras.length&&(P.cameras.length=0,rt=!0);for(let $=0;$<V.length;$++){const et=V[$];let ct=null;if(f!==null)ct=f.getViewport(et);else{const mt=d.getViewSubImage(u,et);ct=mt.viewport,$===0&&(t.setRenderTargetTextures(_,mt.colorTexture,mt.depthStencilTexture),t.setRenderTarget(_))}let pt=C[$];pt===void 0&&(pt=new Sn,pt.layers.enable($),pt.viewport=new ke,C[$]=pt),pt.matrix.fromArray(et.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(et.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(ct.x,ct.y,ct.width,ct.height),$===0&&(P.matrix.copy(pt.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),rt===!0&&P.cameras.push(pt)}const J=s.enabledFeatures;if(J&&J.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const $=d.getDepthInformation(V[0]);$&&$.isValid&&$.texture&&m.init($,s.renderState)}if(J&&J.includes("camera-access")&&v){t.state.unbindTexture(),d=i.getBinding();for(let $=0;$<V.length;$++){const et=V[$].camera;if(et){let ct=p[et];ct||(ct=new Ad,p[et]=ct);const pt=d.getCameraImage(et);ct.sourceTexture=pt}}}}for(let V=0;V<M.length;V++){const rt=b[V],J=M[V];rt!==null&&J!==void 0&&J.update(rt,nt,c||o)}kt&&kt(tt,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),g=null}const jt=new Hd;jt.setAnimationLoop(Zt),this.setAnimationLoop=function(tt){kt=tt},this.dispose=function(){}}}const t1=new re,Zd=new ne;Zd.set(-1,0,0,0,1,0,0,0,1);function e1(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Od(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,w,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===xn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===xn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),w=y.envMap,_=y.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(t1.makeRotationFromEuler(_)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Zd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===xn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function n1(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,M){const b=M.program;i.uniformBlockBinding(_,b)}function c(_,M){let b=s[_.id];b===void 0&&(m(_),b=h(_),s[_.id]=b,_.addEventListener("dispose",y));const R=M.program;i.updateUBOMapping(_,R);const x=t.render.frame;r[_.id]!==x&&(u(_),r[_.id]=x)}function h(_){const M=d();_.__bindingPointIndex=M;const b=n.createBuffer(),R=_.__size,x=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,R,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,b),b}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return me("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const M=s[_.id],b=_.uniforms,R=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let x=0,S=b.length;x<S;x++){const E=b[x];if(Array.isArray(E))for(let A=0,C=E.length;A<C;A++)f(E[A],x,A,R);else f(E,x,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,M,b,R){if(v(_,M,b,R)===!0){const x=_.__offset,S=_.value;if(Array.isArray(S)){let E=0;for(let A=0;A<S.length;A++){const C=S[A],P=p(C);g(C,_.__data,E),typeof C!="number"&&typeof C!="boolean"&&!C.isMatrix3&&!ArrayBuffer.isView(C)&&(E+=P.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(S,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,_.__data)}}function g(_,M,b){typeof _=="number"||typeof _=="boolean"?M[0]=_:_.isMatrix3?(M[0]=_.elements[0],M[1]=_.elements[1],M[2]=_.elements[2],M[3]=0,M[4]=_.elements[3],M[5]=_.elements[4],M[6]=_.elements[5],M[7]=0,M[8]=_.elements[6],M[9]=_.elements[7],M[10]=_.elements[8],M[11]=0):ArrayBuffer.isView(_)?M.set(new _.constructor(_.buffer,_.byteOffset,M.length)):_.toArray(M,b)}function v(_,M,b,R){const x=_.value,S=M+"_"+b;if(R[S]===void 0)return typeof x=="number"||typeof x=="boolean"?R[S]=x:ArrayBuffer.isView(x)?R[S]=x.slice():R[S]=x.clone(),!0;{const E=R[S];if(typeof x=="number"||typeof x=="boolean"){if(E!==x)return R[S]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(E.equals(x)===!1)return E.copy(x),!0}}return!1}function m(_){const M=_.uniforms;let b=0;const R=16;for(let S=0,E=M.length;S<E;S++){const A=Array.isArray(M[S])?M[S]:[M[S]];for(let C=0,P=A.length;C<P;C++){const L=A[C],I=Array.isArray(L.value)?L.value:[L.value];for(let U=0,B=I.length;U<B;U++){const W=I[U],F=p(W),G=b%R,X=G%F.boundary,_t=G+X;b+=X,_t!==0&&R-_t<F.storage&&(b+=R-_t),L.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=F.storage}}}const x=b%R;return x>0&&(b+=R-x),_.__size=b,_.__cache={},this}function p(_){const M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?Jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):Jt("WebGLRenderer: Unsupported uniform value type.",_),M}function y(_){const M=_.target;M.removeEventListener("dispose",y);const b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function w(){for(const _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:w}}const i1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Qn=null;function s1(){return Qn===null&&(Qn=new ea(i1,16,16,os,sn),Qn.name="DFG_LUT",Qn.minFilter=Xe,Qn.magFilter=Xe,Qn.wrapS=Hn,Qn.wrapT=Hn,Qn.generateMipmaps=!1,Qn.needsUpdate=!0),Qn}class r1{constructor(t={}){const{canvas:e=dp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Rn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const v=f,m=new Set([Nc,Ic,Lc]),p=new Set([Rn,ri,Nr,Ur,Cc,Pc]),y=new Uint32Array(4),w=new Int32Array(4),_=new O;let M=null,b=null;const R=[],x=[];let S=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let A=!1,C=null,P=null,L=null,I=null;this._outputColorSpace=ze;let U=0,B=0,W=null,F=-1,G=null;const X=new ke,_t=new ke;let yt=null;const kt=new Lt(0);let Zt=0,jt=e.width,tt=e.height,nt=1,V=null,rt=null;const J=new ke(0,0,jt,tt),dt=new ke(0,0,jt,tt);let xt=!1;const $=new Gc;let et=!1,ct=!1;const pt=new re,mt=new O,gt=new ke,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function Bt(){return W===null?nt:1}let z=i;function te(D,k){return e.getContext(D,k)}let ce,N,T,Y,Z,it,Mt,bt,st,at,At,qt,wt,Et,Kt,Vt,ee,H,Tt,lt,Rt,Ut,ft;try{const D={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wc}`),e.addEventListener("webglcontextlost",Ce,!1),e.addEventListener("webglcontextrestored",ie,!1),e.addEventListener("webglcontextcreationerror",He,!1),z===null){const k="webgl2";if(z=te(k,D),z===null)throw te(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xt()}catch(D){throw e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",He,!1),me("WebGLRenderer: "+D.message),D}function Xt(){ce=new sx(z),ce.init(),Rt=new Zv(z,ce),N=new K_(z,ce,t,Rt),T=new qv(z,ce),N.reversedDepthBuffer&&u&&T.buffers.depth.setReversed(!0),P=z.createFramebuffer(),L=z.createFramebuffer(),I=z.createFramebuffer(),Y=new ax(z),Z=new Iv,it=new Kv(z,ce,T,Z,N,Rt,Y),Mt=new ix(E),bt=new cm(z),Ut=new Y_(z,bt),st=new rx(z,bt,Y,Ut),at=new cx(z,st,bt,Ut,Y),H=new lx(z,N,it),Kt=new Z_(Z),At=new Lv(E,Mt,ce,N,Ut,Kt),qt=new e1(E,Z),wt=new Uv,Et=new Gv(ce),ee=new X_(E,Mt,T,at,g,l),Vt=new Yv(E,at,N),ft=new n1(z,Y,N,T),Tt=new q_(z,ce,Y),lt=new ox(z,ce,Y),Y.programs=At.programs,E.capabilities=N,E.extensions=ce,E.properties=Z,E.renderLists=wt,E.shadowMap=Vt,E.state=T,E.info=Y}v!==Rn&&(S=new ux(v,e.width,e.height,a,s,r));const Yt=new jv(E,z);this.xr=Yt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const D=ce.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=ce.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(D){D!==void 0&&(nt=D,this.setSize(jt,tt,!1))},this.getSize=function(D){return D.set(jt,tt)},this.setSize=function(D,k,j=!0){if(Yt.isPresenting){Jt("WebGLRenderer: Can't change size while VR device is presenting.");return}jt=D,tt=k,e.width=Math.floor(D*nt),e.height=Math.floor(k*nt),j===!0&&(e.style.width=D+"px",e.style.height=k+"px"),S!==null&&S.setSize(e.width,e.height),this.setViewport(0,0,D,k)},this.getDrawingBufferSize=function(D){return D.set(jt*nt,tt*nt).floor()},this.setDrawingBufferSize=function(D,k,j){jt=D,tt=k,nt=j,e.width=Math.floor(D*j),e.height=Math.floor(k*j),this.setViewport(0,0,D,k)},this.setEffects=function(D){if(v===Rn){me("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let k=0;k<D.length;k++)if(D[k].isOutputPass===!0){Jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(X)},this.getViewport=function(D){return D.copy(J)},this.setViewport=function(D,k,j,q){D.isVector4?J.set(D.x,D.y,D.z,D.w):J.set(D,k,j,q),T.viewport(X.copy(J).multiplyScalar(nt).round())},this.getScissor=function(D){return D.copy(dt)},this.setScissor=function(D,k,j,q){D.isVector4?dt.set(D.x,D.y,D.z,D.w):dt.set(D,k,j,q),T.scissor(_t.copy(dt).multiplyScalar(nt).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(D){T.setScissorTest(xt=D)},this.setOpaqueSort=function(D){V=D},this.setTransparentSort=function(D){rt=D},this.getClearColor=function(D){return D.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(D=!0,k=!0,j=!0){let q=0;if(D){let K=!1;if(W!==null){const Pt=W.texture.format;K=m.has(Pt)}if(K){const Pt=W.texture.type,Ft=p.has(Pt),Ct=ee.getClearColor(),Nt=ee.getClearAlpha(),Wt=Ct.r,se=Ct.g,he=Ct.b;Ft?(y[0]=Wt,y[1]=se,y[2]=he,y[3]=Nt,z.clearBufferuiv(z.COLOR,0,y)):(w[0]=Wt,w[1]=se,w[2]=he,w[3]=Nt,z.clearBufferiv(z.COLOR,0,w))}else q|=z.COLOR_BUFFER_BIT}k&&(q|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&z.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(D){D.setRenderer(this),C=D},this.dispose=function(){e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",He,!1),ee.dispose(),wt.dispose(),Et.dispose(),Z.dispose(),Mt.dispose(),at.dispose(),Ut.dispose(),ft.dispose(),At.dispose(),Yt.dispose(),Yt.removeEventListener("sessionstart",ms),Yt.removeEventListener("sessionend",$r),ot.stop()};function Ce(D){D.preventDefault(),Mh("WebGLRenderer: Context Lost."),A=!0}function ie(){Mh("WebGLRenderer: Context Restored."),A=!1;const D=Y.autoReset,k=Vt.enabled,j=Vt.autoUpdate,q=Vt.needsUpdate,K=Vt.type;Xt(),Y.autoReset=D,Vt.enabled=k,Vt.autoUpdate=j,Vt.needsUpdate=q,Vt.type=K}function He(D){me("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function un(D){const k=D.target;k.removeEventListener("dispose",un),Sa(k)}function Sa(D){rr(D),Z.remove(D)}function rr(D){const k=Z.get(D).programs;k!==void 0&&(k.forEach(function(j){At.releaseProgram(j)}),D.isShaderMaterial&&At.releaseShaderCache(D))}this.renderBufferDirect=function(D,k,j,q,K,Pt){k===null&&(k=St);const Ft=K.isMesh&&K.matrixWorld.determinantAffine()<0,Ct=gs(D,k,j,q,K);T.setMaterial(q,Ft);let Nt=j.index,Wt=1;if(q.wireframe===!0){if(Nt=st.getWireframeAttribute(j),Nt===void 0)return;Wt=2}const se=j.drawRange,he=j.attributes.position;let zt=se.start*Wt,ve=(se.start+se.count)*Wt;Pt!==null&&(zt=Math.max(zt,Pt.start*Wt),ve=Math.min(ve,(Pt.start+Pt.count)*Wt)),Nt!==null?(zt=Math.max(zt,0),ve=Math.min(ve,Nt.count)):he!=null&&(zt=Math.max(zt,0),ve=Math.min(ve,he.count));const ue=ve-zt;if(ue<0||ue===1/0)return;Ut.setup(K,q,Ct,j,Nt);let Fe,Ne=Tt;if(Nt!==null&&(Fe=bt.get(Nt),Ne=lt,Ne.setIndex(Fe)),K.isMesh)q.wireframe===!0?(T.setLineWidth(q.wireframeLinewidth*Bt()),Ne.setMode(z.LINES)):Ne.setMode(z.TRIANGLES);else if(K.isLine){let an=q.linewidth;an===void 0&&(an=1),T.setLineWidth(an*Bt()),K.isLineSegments?Ne.setMode(z.LINES):K.isLineLoop?Ne.setMode(z.LINE_LOOP):Ne.setMode(z.LINE_STRIP)}else K.isPoints?Ne.setMode(z.POINTS):K.isSprite&&Ne.setMode(z.TRIANGLES);if(K.isBatchedMesh)if(ce.get("WEBGL_multi_draw"))Ne.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const an=K._multiDrawStarts,Ht=K._multiDrawCounts,dn=K._multiDrawCount,ye=Nt?bt.get(Nt).bytesPerElement:1,Dn=Z.get(q).currentProgram.getUniforms();for(let Jn=0;Jn<dn;Jn++)Dn.setValue(z,"_gl_DrawID",Jn),Ne.render(an[Jn]/ye,Ht[Jn])}else if(K.isInstancedMesh)Ne.renderInstances(zt,ue,K.count);else if(j.isInstancedBufferGeometry){const an=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ht=Math.min(j.instanceCount,an);Ne.renderInstances(zt,ue,Ht)}else Ne.render(zt,ue)};function Jr(D,k,j,q){C!==null&&D.isNodeMaterial&&C.setObject(q,D),et===!0&&Kt.setState(D,j,!1),D.transparent===!0&&D.side===Ue&&D.forceSinglePass===!1?(D.side=xn,D.needsUpdate=!0,Zn(D,k,q),D.side=ss,D.needsUpdate=!0,Zn(D,k,q),D.side=Ue):Zn(D,k,q)}this.compile=function(D,k,j=null){j===null&&(j=D),C!==null&&C.renderStart(D,k,j),b=Et.get(j),b.init(k),x.push(b),j.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(b.pushLight(K),K.castShadow&&b.pushShadow(K))}),D!==j&&D.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(b.pushLight(K),K.castShadow&&b.pushShadow(K))}),b.setupLights(),C!==null&&C.updateLights(b.state.lightsArray),ct=this.localClippingEnabled,et=Kt.init(this.clippingPlanes,ct),et===!0&&Kt.setGlobalState(this.clippingPlanes,k),C!==null&&Vt.render(b.state.shadowsArray,j,k);const q=new Set;return D.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Pt=K.material;if(Pt)if(Array.isArray(Pt))for(let Ft=0;Ft<Pt.length;Ft++){const Ct=Pt[Ft];Jr(Ct,j,k,K),q.add(Ct)}else Jr(Pt,j,k,K),q.add(Pt)}),b=x.pop(),C!==null&&C.renderEnd(),q},this.compileAsync=function(D,k,j=null){const q=this.compile(D,k,j);return new Promise(K=>{function Pt(){if(q.forEach(function(Ft){const Nt=Z.get(Ft).currentProgram;(Nt===void 0||Nt.isReady())&&q.delete(Ft)}),q.size===0){K(D);return}setTimeout(Pt,10)}ce.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let or=null;function Qe(D){or&&or(D)}function ms(){ot.stop()}function $r(){ot.start()}const ot=new Hd;ot.setAnimationLoop(Qe),typeof self<"u"&&ot.setContext(self),this.setAnimationLoop=function(D){or=D,Yt.setAnimationLoop(D),D===null?ot.stop():ot.start()},Yt.addEventListener("sessionstart",ms),Yt.addEventListener("sessionend",$r),this.render=function(D,k){if(k!==void 0&&k.isCamera!==!0){me("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;C!==null&&C.renderStart(D,k);const j=Yt.enabled===!0&&Yt.isPresenting===!0,q=S!==null&&(W===null||j)&&S.begin(E,W);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Yt.enabled===!0&&Yt.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Yt.cameraAutoUpdate===!0&&Yt.updateCamera(k),k=Yt.getCamera()),D.isScene===!0&&D.onBeforeRender(E,D,k,W),b=Et.get(D,x.length),b.init(k),b.state.textureUnits=it.getTextureUnits(),x.push(b),pt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),$.setFromProjectionMatrix(pt,ti,k.reversedDepth),ct=this.localClippingEnabled,et=Kt.init(this.clippingPlanes,ct),M=wt.get(D,R.length),M.init(),R.push(M),Yt.enabled===!0&&Yt.isPresenting===!0){const Ft=E.xr.getDepthSensingMesh();Ft!==null&&Ot(Ft,k,-1/0,E.sortObjects)}Ot(D,k,0,E.sortObjects),M.finish(),C!==null&&C.updateLights(b.state.lightsArray),E.sortObjects===!0&&M.sort(V,rt),vt=Yt.enabled===!1||Yt.isPresenting===!1||Yt.hasDepthSensing()===!1,vt&&ee.addToRenderList(M,D),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),et===!0&&Kt.beginShadows();const K=b.state.shadowsArray;if(Vt.render(K,D,k),et===!0&&Kt.endShadows(),(q&&S.hasRenderPass())===!1){const Ft=M.opaque,Ct=M.transmissive;if(b.setupLights(),k.isArrayCamera){const Nt=k.cameras;if(Ct.length>0)for(let Wt=0,se=Nt.length;Wt<se;Wt++){const he=Nt[Wt];fe(Ft,Ct,D,he)}vt&&ee.render(D);for(let Wt=0,se=Nt.length;Wt<se;Wt++){const he=Nt[Wt];Qt(M,D,he,he.viewport)}}else Ct.length>0&&fe(Ft,Ct,D,k),vt&&ee.render(D),Qt(M,D,k)}W!==null&&B===0&&(it.updateMultisampleRenderTarget(W),it.updateRenderTargetMipmap(W)),q&&S.end(E),D.isScene===!0&&D.onAfterRender(E,D,k),Ut.resetDefaultState(),F=-1,G=null,x.pop(),x.length>0?(b=x[x.length-1],it.setTextureUnits(b.state.textureUnits),et===!0&&Kt.setGlobalState(E.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?M=R[R.length-1]:M=null,C!==null&&C.renderEnd()};function Ot(D,k,j,q){if(D.visible===!1)return;if(D.layers.test(k.layers)){if(D.isGroup)j=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(k);else if(D.isLightProbeGrid)b.pushLightProbeGrid(D);else if(D.isLight)b.pushLight(D),D.castShadow&&b.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||D.intersectsFrustum($)){q&&gt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(pt);const Ft=at.update(D),Ct=D.material;Ct.visible&&M.push(D,Ft,Ct,j,gt.z,null,k)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||D.intersectsFrustum($))){const Ft=at.update(D),Ct=D.material;if(q&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),gt.copy(D.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),gt.copy(Ft.boundingSphere.center)),gt.applyMatrix4(D.matrixWorld).applyMatrix4(pt)),Array.isArray(Ct)){const Nt=Ft.groups;for(let Wt=0,se=Nt.length;Wt<se;Wt++){const he=Nt[Wt],zt=Ct[he.materialIndex];zt&&zt.visible&&M.push(D,Ft,zt,j,gt.z,he,k)}}else Ct.visible&&M.push(D,Ft,Ct,j,gt.z,null,k)}}const Pt=D.children;for(let Ft=0,Ct=Pt.length;Ft<Ct;Ft++)Ot(Pt[Ft],k,j,q)}function Qt(D,k,j,q){const{opaque:K,transmissive:Pt,transparent:Ft}=D;b.setupLightsView(j),et===!0&&Kt.setGlobalState(E.clippingPlanes,j),q&&T.viewport(X.copy(q)),K.length>0&&Ve(K,k,j),Pt.length>0&&Ve(Pt,k,j),Ft.length>0&&Ve(Ft,k,j),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function fe(D,k,j,q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[q.id]===void 0){const zt=ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[q.id]=new vn(1,1,{generateMipmaps:!0,type:zt?sn:Rn,minFilter:Ni,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ge.workingColorSpace})}const Pt=b.state.transmissionRenderTarget[q.id],Ft=q.viewport||X;Pt.setSize(Ft.z*E.transmissionResolutionScale,Ft.w*E.transmissionResolutionScale);const Ct=E.getRenderTarget(),Nt=E.getActiveCubeFace(),Wt=E.getActiveMipmapLevel();E.setRenderTarget(Pt),E.getClearColor(kt),Zt=E.getClearAlpha(),Zt<1&&E.setClearColor(16777215,.5),E.clear(),vt&&ee.render(j);const se=E.toneMapping;E.toneMapping=ni;const he=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),b.setupLightsView(q),et===!0&&Kt.setGlobalState(E.clippingPlanes,q),Ve(D,j,q),it.updateMultisampleRenderTarget(Pt),it.updateRenderTargetMipmap(Pt),ce.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let ve=0,ue=k.length;ve<ue;ve++){const Fe=k[ve],{object:Ne,geometry:an,material:Ht,group:dn}=Fe;if(Ht.side===Ue&&Ne.layers.test(q.layers)){const ye=Ht.side;Ht.side=xn,Ht.needsUpdate=!0,En(Ne,j,q,an,Ht,dn),Ht.side=ye,Ht.needsUpdate=!0,zt=!0}}zt===!0&&(it.updateMultisampleRenderTarget(Pt),it.updateRenderTargetMipmap(Pt))}E.setRenderTarget(Ct,Nt,Wt),E.setClearColor(kt,Zt),he!==void 0&&(q.viewport=he),E.toneMapping=se}function Ve(D,k,j){const q=k.isScene===!0?k.overrideMaterial:null;for(let K=0,Pt=D.length;K<Pt;K++){const Ft=D[K],{object:Ct,geometry:Nt,group:Wt}=Ft;let se=Ft.material;se.allowOverride===!0&&q!==null&&(se=q),Ct.layers.test(j.layers)&&En(Ct,k,j,Nt,se,Wt)}}function En(D,k,j,q,K,Pt){C!==null&&K.isNodeMaterial&&C.setObject(D,K),D.onBeforeRender(E,k,j,q,K,Pt),D.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),K.onBeforeRender(E,k,j,q,D,Pt),K.transparent===!0&&K.side===Ue&&K.forceSinglePass===!1?(K.side=xn,K.needsUpdate=!0,E.renderBufferDirect(j,k,q,K,D,Pt),K.side=ss,K.needsUpdate=!0,E.renderBufferDirect(j,k,q,K,D,Pt),K.side=Ue):E.renderBufferDirect(j,k,q,K,D,Pt),D.onAfterRender(E,k,j,q,K,Pt)}function Zn(D,k,j){k.isScene!==!0&&(k=St);const q=Z.get(D),K=b.state.lights,Pt=b.state.shadowsArray,Ft=K.state.version,Ct=At.getParameters(D,K.state,Pt,k,j,b.state.lightProbeGridArray),Nt=At.getProgramCacheKey(Ct);let Wt=q.programs;q.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?k.environment:null,q.fog=k.fog;const se=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;q.envMap=Mt.get(D.envMap||q.environment,se),q.envMapRotation=q.environment!==null&&D.envMap===null?k.environmentRotation:D.envMapRotation,Wt===void 0&&(D.addEventListener("dispose",un),Wt=new Map,q.programs=Wt);let he=Wt.get(Nt);if(he!==void 0){if(q.currentProgram===he&&q.lightsStateVersion===Ft)return ki(D,Ct),he}else Ct.uniforms=At.getUniforms(D),C!==null&&D.isNodeMaterial&&C.build(D,j,Ct),D.onBeforeCompile(Ct,E),he=At.acquireProgram(Ct,Nt),Wt.set(Nt,he),q.uniforms=Ct.uniforms;const zt=q.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(zt.clippingPlanes=Kt.uniform),ki(D,Ct),q.needsLights=_s(D),q.lightsStateVersion=Ft,q.needsLights&&(zt.ambientLightColor.value=K.state.ambient,zt.lightProbe.value=K.state.probe,zt.sunLights.value=K.state.sun,zt.sunLightShadows.value=K.state.sunShadow,zt.directionalLights.value=K.state.directional,zt.directionalLightShadows.value=K.state.directionalShadow,zt.spotLights.value=K.state.spot,zt.spotLightShadows.value=K.state.spotShadow,zt.rectAreaLights.value=K.state.rectArea,zt.ltc_1.value=K.state.rectAreaLTC1,zt.ltc_2.value=K.state.rectAreaLTC2,zt.pointLights.value=K.state.point,zt.pointLightShadows.value=K.state.pointShadow,zt.hemisphereLights.value=K.state.hemi,zt.sunShadowMatrix.value=K.state.sunShadowMatrix,zt.sunShadowCascade.value=K.state.sunShadowCascade,zt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,zt.spotLightMatrix.value=K.state.spotLightMatrix,zt.spotLightMap.value=K.state.spotLightMap,zt.pointShadowMatrix.value=K.state.pointShadowMatrix),q.lightProbeGrid=b.state.lightProbeGridArray.length>0,q.currentProgram=he,q.uniformsList=null,he}function li(D){if(D.uniformsList===null){const k=D.currentProgram.getUniforms();D.uniformsList=Ho.seqWithValue(k.seq,D.uniforms)}return D.uniformsList}function ki(D,k){const j=Z.get(D);j.outputColorSpace=k.outputColorSpace,j.batching=k.batching,j.batchingColor=k.batchingColor,j.instancing=k.instancing,j.instancingColor=k.instancingColor,j.instancingMorph=k.instancingMorph,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function Qr(D,k){if(D.length===0)return null;if(D.length===1)return D[0].texture!==null?D[0]:null;_.setFromMatrixPosition(k.matrixWorld);for(let j=0,q=D.length;j<q;j++){const K=D[j];if(K.texture!==null&&K.boundingBox.containsPoint(_))return K}return null}function gs(D,k,j,q,K){k.isScene!==!0&&(k=St),it.resetTextureUnits();const Pt=k.fog,Ft=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?k.environment:null,Ct=W===null?E.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:ge.workingColorSpace,Nt=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Wt=Mt.get(q.envMap||Ft,Nt),se=q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,he=!!j.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),zt=!!j.morphAttributes.position,ve=!!j.morphAttributes.normal,ue=!!j.morphAttributes.color;let Fe=ni;q.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Fe=E.toneMapping);const Ne=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,an=Ne!==void 0?Ne.length:0,Ht=Z.get(q),dn=b.state.lights;if(et===!0&&(ct===!0||D!==G)){const Be=D===G&&q.id===F;Kt.setState(q,D,Be)}let ye=!1;q.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==dn.state.version||Ht.outputColorSpace!==Ct||K.isBatchedMesh&&Ht.batching===!1||!K.isBatchedMesh&&Ht.batching===!0||K.isBatchedMesh&&Ht.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Ht.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Ht.instancing===!1||!K.isInstancedMesh&&Ht.instancing===!0||K.isSkinnedMesh&&Ht.skinning===!1||!K.isSkinnedMesh&&Ht.skinning===!0||K.isInstancedMesh&&Ht.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ht.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ht.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ht.instancingMorph===!1&&K.morphTexture!==null||Ht.envMap!==Wt||q.fog===!0&&Ht.fog!==Pt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==Kt.numPlanes||Ht.numIntersection!==Kt.numIntersection)||Ht.vertexAlphas!==se||Ht.vertexTangents!==he||Ht.morphTargets!==zt||Ht.morphNormals!==ve||Ht.morphColors!==ue||Ht.toneMapping!==Fe||Ht.morphTargetsCount!==an||!!Ht.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ye=!0):(ye=!0,Ht.__version=q.version);let Dn=Ht.currentProgram;ye===!0&&(Dn=Zn(q,k,K),C&&q.isNodeMaterial&&C.onUpdateProgram(q,Dn,Ht));let Jn=!1,bi=!1,vs=!1;const Pe=Dn.getUniforms(),We=Ht.uniforms;if(T.useProgram(Dn.program)&&(Jn=!0,bi=!0,vs=!0),q.id!==F&&(F=q.id,bi=!0),Ht.needsLights){const Be=Qr(b.state.lightProbeGridArray,K);Ht.lightProbeGrid!==Be&&(Ht.lightProbeGrid=Be,bi=!0)}if(Jn||G!==D){T.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Pe.setValue(z,"projectionMatrix",D.projectionMatrix),Pe.setValue(z,"viewMatrix",D.matrixWorldInverse);const Ti=Pe.map.cameraPosition;Ti!==void 0&&Ti.setValue(z,mt.setFromMatrixPosition(D.matrixWorld)),N.logarithmicDepthBuffer&&Pe.setValue(z,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Pe.setValue(z,"isOrthographic",D.isOrthographicCamera===!0),G!==D&&(G=D,bi=!0,vs=!0)}if(Ht.needsLights&&(dn.state.sunShadowMap.length>0&&Pe.setValue(z,"sunShadowMap",dn.state.sunShadowMap,it),dn.state.directionalShadowMap.length>0&&Pe.setValue(z,"directionalShadowMap",dn.state.directionalShadowMap,it),dn.state.spotShadowMap.length>0&&Pe.setValue(z,"spotShadowMap",dn.state.spotShadowMap,it),dn.state.pointShadowMap.length>0&&Pe.setValue(z,"pointShadowMap",dn.state.pointShadowMap,it)),K.isSkinnedMesh){Pe.setOptional(z,K,"bindMatrix"),Pe.setOptional(z,K,"bindMatrixInverse");const Be=K.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),Pe.setValue(z,"boneTexture",Be.boneTexture,it))}K.isBatchedMesh&&(Pe.setOptional(z,K,"batchingTexture"),Pe.setValue(z,"batchingTexture",K._matricesTexture,it),Pe.setOptional(z,K,"batchingIdTexture"),Pe.setValue(z,"batchingIdTexture",K._indirectTexture,it),Pe.setOptional(z,K,"batchingColorTexture"),K._colorsTexture!==null&&Pe.setValue(z,"batchingColorTexture",K._colorsTexture,it));const Ei=j.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&H.update(K,j,Dn),(bi||Ht.receiveShadow!==K.receiveShadow)&&(Ht.receiveShadow=K.receiveShadow,Pe.setValue(z,"receiveShadow",K.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&k.environment!==null&&(We.envMapIntensity.value=k.environmentIntensity),We.dfgLUT!==void 0&&(We.dfgLUT.value=s1()),bi){if(Pe.setValue(z,"toneMappingExposure",E.toneMappingExposure),Ht.needsLights&&wa(We,vs),Pt&&q.fog===!0&&qt.refreshFogUniforms(We,Pt),qt.refreshMaterialUniforms(We,q,nt,tt,b.state.transmissionRenderTarget[D.id]),Ht.needsLights&&Ht.lightProbeGrid){const Be=Ht.lightProbeGrid;We.probesSH.value=Be.texture,We.probesMin.value.copy(Be.boundingBox.min),We.probesMax.value.copy(Be.boundingBox.max),We.probesResolution.value.copy(Be.resolution)}Ho.upload(z,li(Ht),We,it)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ho.upload(z,li(Ht),We,it),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Pe.setValue(z,"center",K.center),Pe.setValue(z,"modelViewMatrix",K.modelViewMatrix),Pe.setValue(z,"normalMatrix",K.normalMatrix),Pe.setValue(z,"modelMatrix",K.matrixWorld),q.uniformsGroups!==void 0){const Be=q.uniformsGroups;for(let Ti=0,ys=Be.length;Ti<ys;Ti++){const mh=Be[Ti];ft.update(mh,Dn),ft.bind(mh,Dn)}}return Dn}function wa(D,k){D.ambientLightColor.needsUpdate=k,D.lightProbe.needsUpdate=k,D.sunLights.needsUpdate=k,D.sunLightShadows.needsUpdate=k,D.directionalLights.needsUpdate=k,D.directionalLightShadows.needsUpdate=k,D.pointLights.needsUpdate=k,D.pointLightShadows.needsUpdate=k,D.spotLights.needsUpdate=k,D.spotLightShadows.needsUpdate=k,D.rectAreaLights.needsUpdate=k,D.hemisphereLights.needsUpdate=k}function _s(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(D,k,j){const q=Z.get(D);q.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Z.get(D.texture).__webglTexture=k,Z.get(D.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:j,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,k){const j=Z.get(D);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(D,k=0,j=0){W=D,U=k,B=j;let q=null,K=!1,Pt=!1;if(D){const Ct=Z.get(D);if(Ct.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(z.FRAMEBUFFER,Ct.__webglFramebuffer),X.copy(D.viewport),_t.copy(D.scissor),yt=D.scissorTest,T.viewport(X),T.scissor(_t),T.setScissorTest(yt),F=-1;return}else if(Ct.__webglFramebuffer===void 0)it.setupRenderTarget(D);else if(Ct.__hasExternalTextures)it.rebindTextures(D,Z.get(D.texture).__webglTexture,Z.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const se=D.depthTexture;if(Ct.__boundDepthTexture!==se){if(se!==null&&Z.has(se)&&(D.width!==se.image.width||D.height!==se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(D)}}const Nt=D.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(Pt=!0);const Wt=Z.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Wt[k])?q=Wt[k][j]:q=Wt[k],K=!0):D.samples>0&&it.useMultisampledRTT(D)===!1?q=Z.get(D).__webglMultisampledFramebuffer:Array.isArray(Wt)?q=Wt[j]:q=Wt,X.copy(D.viewport),_t.copy(D.scissor),yt=D.scissorTest}else X.copy(J).multiplyScalar(nt).floor(),_t.copy(dt).multiplyScalar(nt).floor(),yt=xt;if(j!==0&&(q=P),T.bindFramebuffer(z.FRAMEBUFFER,q)&&T.drawBuffers(D,q),T.viewport(X),T.scissor(_t),T.setScissorTest(yt),K){const Ct=Z.get(D.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ct.__webglTexture,j)}else if(Pt){const Ct=k;for(let Nt=0;Nt<D.textures.length;Nt++){const Wt=Z.get(D.textures[Nt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Nt,Wt.__webglTexture,j,Ct)}}else if(D!==null&&j!==0){const Ct=Z.get(D.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ct.__webglTexture,j)}F=-1};function xs(D){const k=Z.get(D);return(k.__readFormat!==D.format||k.__readType!==D.type)&&(k.__readFormat=D.format,k.__readType=D.type,k.__formatReadable=N.textureFormatReadable(D.format),k.__typeReadable=N.textureTypeReadable(D.type)),k}this.readRenderTargetPixels=function(D,k,j,q,K,Pt,Ft,Ct=0){if(!(D&&D.isWebGLRenderTarget)){me("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Z.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ft!==void 0&&(Nt=Nt[Ft]),Nt){T.bindFramebuffer(z.FRAMEBUFFER,Nt);try{const Wt=D.textures[Ct],se=Wt.format,he=Wt.type;D.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ct);const zt=xs(Wt);if(zt.__formatReadable===!1){me("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(zt.__typeReadable===!1){me("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=D.width-q&&j>=0&&j<=D.height-K&&z.readPixels(k,j,q,K,Rt.convert(se),Rt.convert(he),Pt)}finally{const Wt=W!==null?Z.get(W).__webglFramebuffer:null;T.bindFramebuffer(z.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(D,k,j,q,K,Pt,Ft,Ct=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Z.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ft!==void 0&&(Nt=Nt[Ft]),Nt)if(k>=0&&k<=D.width-q&&j>=0&&j<=D.height-K){T.bindFramebuffer(z.FRAMEBUFFER,Nt);const Wt=D.textures[Ct],se=Wt.format,he=Wt.type;D.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ct);const zt=xs(Wt);if(zt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(zt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ve=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ve),z.bufferData(z.PIXEL_PACK_BUFFER,Pt.byteLength,z.STREAM_READ),z.readPixels(k,j,q,K,Rt.convert(se),Rt.convert(he),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);const ue=W!==null?Z.get(W).__webglFramebuffer:null;T.bindFramebuffer(z.FRAMEBUFFER,ue);const Fe=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await fp(z,Fe,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ve),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Pt),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(ve),z.deleteSync(Fe),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,k=null,j=0){const q=Math.pow(2,-j),K=Math.floor(D.image.width*q),Pt=Math.floor(D.image.height*q),Ft=k!==null?k.x:0,Ct=k!==null?k.y:0;it.setTexture2D(D,0),z.copyTexSubImage2D(z.TEXTURE_2D,j,0,0,Ft,Ct,K,Pt),T.unbindTexture()},this.copyTextureToTexture=function(D,k,j=null,q=null,K=0,Pt=0){let Ft,Ct,Nt,Wt,se,he,zt,ve,ue;const Fe=D.isCompressedTexture?D.mipmaps[Pt]:D.image;if(j!==null)Ft=j.max.x-j.min.x,Ct=j.max.y-j.min.y,Nt=j.isBox3?j.max.z-j.min.z:1,Wt=j.min.x,se=j.min.y,he=j.isBox3?j.min.z:0;else{const We=Math.pow(2,-K);Ft=Math.floor(Fe.width*We),Ct=Math.floor(Fe.height*We),D.isDataArrayTexture?Nt=Fe.depth:D.isData3DTexture?Nt=Math.floor(Fe.depth*We):Nt=1,Wt=0,se=0,he=0}q!==null?(zt=q.x,ve=q.y,ue=q.z):(zt=0,ve=0,ue=0);const Ne=Rt.convert(k.format),an=Rt.convert(k.type);let Ht;k.isData3DTexture?(it.setTexture3D(k,0),Ht=z.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(it.setTexture2DArray(k,0),Ht=z.TEXTURE_2D_ARRAY):(it.setTexture2D(k,0),Ht=z.TEXTURE_2D),T.activeTexture(z.TEXTURE0),T.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,k.flipY),T.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),T.pixelStorei(z.UNPACK_ALIGNMENT,k.unpackAlignment);const dn=T.getParameter(z.UNPACK_ROW_LENGTH),ye=T.getParameter(z.UNPACK_IMAGE_HEIGHT),Dn=T.getParameter(z.UNPACK_SKIP_PIXELS),Jn=T.getParameter(z.UNPACK_SKIP_ROWS),bi=T.getParameter(z.UNPACK_SKIP_IMAGES);T.pixelStorei(z.UNPACK_ROW_LENGTH,Fe.width),T.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Fe.height),T.pixelStorei(z.UNPACK_SKIP_PIXELS,Wt),T.pixelStorei(z.UNPACK_SKIP_ROWS,se),T.pixelStorei(z.UNPACK_SKIP_IMAGES,he);const vs=D.isDataArrayTexture||D.isData3DTexture,Pe=k.isDataArrayTexture||k.isData3DTexture;if(D.isDepthTexture){const We=Z.get(D),Ei=Z.get(k),Be=Z.get(We.__renderTarget),Ti=Z.get(Ei.__renderTarget);T.bindFramebuffer(z.READ_FRAMEBUFFER,Be.__webglFramebuffer),T.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let ys=0;ys<Nt;ys++)vs&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Z.get(D).__webglTexture,K,he+ys),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Z.get(k).__webglTexture,Pt,ue+ys)),z.blitFramebuffer(Wt,se,Ft,Ct,zt,ve,Ft,Ct,z.DEPTH_BUFFER_BIT,z.NEAREST);T.bindFramebuffer(z.READ_FRAMEBUFFER,null),T.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(K!==0||D.isRenderTargetTexture||Z.has(D)){const We=Z.get(D),Ei=Z.get(k);T.bindFramebuffer(z.READ_FRAMEBUFFER,L),T.bindFramebuffer(z.DRAW_FRAMEBUFFER,I);for(let Be=0;Be<Nt;Be++)vs?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,We.__webglTexture,K,he+Be):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,We.__webglTexture,K),Pe?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ei.__webglTexture,Pt,ue+Be):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ei.__webglTexture,Pt),K!==0?z.blitFramebuffer(Wt,se,Ft,Ct,zt,ve,Ft,Ct,z.COLOR_BUFFER_BIT,z.NEAREST):Pe?z.copyTexSubImage3D(Ht,Pt,zt,ve,ue+Be,Wt,se,Ft,Ct):z.copyTexSubImage2D(Ht,Pt,zt,ve,Wt,se,Ft,Ct);T.bindFramebuffer(z.READ_FRAMEBUFFER,null),T.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Pe?D.isDataTexture||D.isData3DTexture?z.texSubImage3D(Ht,Pt,zt,ve,ue,Ft,Ct,Nt,Ne,an,Fe.data):k.isCompressedArrayTexture?z.compressedTexSubImage3D(Ht,Pt,zt,ve,ue,Ft,Ct,Nt,Ne,Fe.data):z.texSubImage3D(Ht,Pt,zt,ve,ue,Ft,Ct,Nt,Ne,an,Fe):D.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Pt,zt,ve,Ft,Ct,Ne,an,Fe.data):D.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Pt,zt,ve,Fe.width,Fe.height,Ne,Fe.data):z.texSubImage2D(z.TEXTURE_2D,Pt,zt,ve,Ft,Ct,Ne,an,Fe);T.pixelStorei(z.UNPACK_ROW_LENGTH,dn),T.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ye),T.pixelStorei(z.UNPACK_SKIP_PIXELS,Dn),T.pixelStorei(z.UNPACK_SKIP_ROWS,Jn),T.pixelStorei(z.UNPACK_SKIP_IMAGES,bi),Pt===0&&k.generateMipmaps&&z.generateMipmap(Ht),T.unbindTexture()},this.initRenderTarget=function(D){Z.get(D).__webglFramebuffer===void 0&&it.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?it.setTextureCube(D,0):D.isData3DTexture?it.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?it.setTexture2DArray(D,0):it.setTexture2D(D,0),T.unbindTexture()},this.resetState=function(){U=0,B=0,W=null,T.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=ge._getUnpackColorSpace()}}function hn(n,t,e=1,i=1){const s=document.createElement("canvas");s.width=s.height=n;const r=s.getContext("2d");t(r,n);const o=new bn(s);return o.wrapS=o.wrapT=Xn,o.repeat.set(e,i),o.colorSpace=ze,o.anisotropy=4,o}function ai(n){let t=n>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function oa(n,t,e,i){return(s,r)=>{const o=ai(n);s.fillStyle=t,s.fillRect(0,0,r,r);for(let a=0;a<130;a++){const l=o()*r;s.strokeStyle=o()<.3?i:e,s.globalAlpha=.14+o()*.24,s.lineWidth=.6+o()*2.2,s.beginPath(),s.moveTo(0,l);for(let c=0;c<=r;c+=16)s.lineTo(c,l+Math.sin(c*.05+a)*2.5);s.stroke()}for(let a=0;a<420;a++)s.fillStyle=e,s.globalAlpha=.1+o()*.12,s.fillRect(o()*r,o()*r,1+o()*1.5,1);s.globalAlpha=.5;for(let a=0;a<7;a++){const l=o()*r,c=o()*r;s.strokeStyle=e,s.lineWidth=1.2;for(let h=2;h<9;h+=2)s.beginPath(),s.ellipse(l,c,h*1.8,h,.3,0,Math.PI*2),s.stroke()}s.globalAlpha=1}}function sl(n){return n?oa(7,"#3d2a1c","#2a1d12","#54402c"):oa(21,"#8a6844","#6e5233","#a37f52")}function o1(n){return(t,e)=>{const i=ai(n);t.clearRect(0,0,e,e);for(let s=0;s<2;s++){const r=s?30:18;for(let o=0;o<r;o++){const a=e*.12+i()*e*.76,l=e*.12+i()*e*.76,c=5+i()*9,h=3.5+i()*6,d=i()*Math.PI,u=s?150+i()*70:70+i()*50;t.fillStyle=`rgb(${u*.62|0},${u|0},${u*.52|0})`,t.globalAlpha=.95,t.beginPath(),t.ellipse(a,l,c,h,d,0,Math.PI*2),t.fill(),t.globalAlpha=.5,t.fillStyle=s?"#2a4028":"#1c2e1e",t.beginPath(),t.ellipse(a,l,c*.5,h*.18,d,0,Math.PI*2),t.fill()}}t.globalAlpha=1}}function a1(n,t){const e=ai(99);n.fillStyle="#efe7d6",n.fillRect(0,0,t,t);for(let i=0;i<22;i++){const s=e()*t,r=e()*t,o=t*(.08+e()*.16),a=e()<.5?"210,203,188":"228,222,206",l=n.createRadialGradient(s,r,0,s,r,o);l.addColorStop(0,"rgba("+a+",0.10)"),l.addColorStop(1,"rgba("+a+",0)"),n.fillStyle=l,n.globalAlpha=1,n.beginPath(),n.arc(s,r,o,0,7),n.fill()}for(let i=0;i<2600;i++){const s=225+Math.floor(e()*28);n.fillStyle=`rgb(${s},${s-6},${s-20})`,n.globalAlpha=.35,n.fillRect(e()*t,e()*t,1.4,1.4)}n.globalAlpha=.08,n.fillStyle="#b09a78";for(let i=0;i<8;i++)n.beginPath(),n.arc(e()*t,e()*t,12+e()*30,0,7),n.fill();n.globalAlpha=1}function l1(n,t){const e=ai(5);n.fillStyle="#a8a06a",n.fillRect(0,0,t,t);for(let i=0;i<t;i+=3)n.fillStyle=i/3%2?"#9d955f":"#b3ab74",n.fillRect(0,i,t,2);for(let i=0;i<500;i++)n.fillStyle=e()<.5?"#8a824f":"#c0b87e",n.globalAlpha=.4,n.fillRect(e()*t,e()*t,2,1);n.globalAlpha=1}function c1(n,t){const e=ai(13);n.fillStyle="#f6efdd",n.fillRect(0,0,t,t);for(let i=0;i<900;i++)n.fillStyle=e()<.5?"#efe6d0":"#fbf5e6",n.globalAlpha=.5,n.fillRect(e()*t,e()*t,2,1);n.globalAlpha=1}function h1(n,t){const e=ai(31);n.fillStyle="#cfc6b4",n.fillRect(0,0,t,t);for(let i=0;i<1500;i++){const s=165+Math.floor(e()*70);n.fillStyle=`rgb(${s},${s-4},${s-14})`,n.beginPath(),n.arc(e()*t,e()*t,.8+e()*1.8,0,7),n.fill()}}function u1(n,t){const e=ai(77);n.fillStyle="#7d8f57",n.fillRect(0,0,t,t);for(let i=0;i<46;i++){const s=e()*t,r=e()*t,o=4+e()*16,a=e(),l=a<.4?"74,102,46":a<.75?"96,128,58":"112,140,72",c=n.createRadialGradient(s,r,0,s,r,o);c.addColorStop(0,"rgba("+l+",0.55)"),c.addColorStop(1,"rgba("+l+",0)"),n.fillStyle=c,n.globalAlpha=1,n.beginPath(),n.arc(s,r,o,0,7),n.fill()}for(let i=0;i<2200;i++)n.fillStyle=e()<.5?"#71834e":"#8a9c60",n.globalAlpha=.6,n.fillRect(e()*t,e()*t,1.5,3);n.globalAlpha=1}function d1(n,t){const e=ai(55);n.fillStyle="#9a968c",n.fillRect(0,0,t,t);for(let i=0;i<30;i++){const s=e()*t,r=e()*t,o=6+e()*30,a=118+Math.floor(e()*52)-26,l=n.createRadialGradient(s,r,0,s,r,o);l.addColorStop(0,"rgba("+a+","+a+","+(a+4)+",0.22)"),l.addColorStop(1,"rgba("+a+","+a+","+(a+4)+",0)"),n.fillStyle=l,n.globalAlpha=1,n.beginPath(),n.arc(s,r,o,0,7),n.fill()}for(let i=0;i<1200;i++){const s=120+Math.floor(e()*60);n.fillStyle=`rgb(${s},${s},${s-6})`,n.globalAlpha=.5,n.fillRect(e()*t,e()*t,2,2)}n.globalAlpha=.5,n.strokeStyle="rgba(38,38,42,1)",n.lineCap="round";for(let i=0;i<3;i++){let s=e()*t,r=e()*t;n.lineWidth=1.5+e()*1.5,n.beginPath(),n.moveTo(s,r);for(let o=0;o<7;o++)s+=(e()-.35)*26,r+=(e()-.35)*26,n.lineTo(s,r);n.stroke()}n.globalAlpha=.25,n.strokeStyle="#6f6b62";for(let i=0;i<6;i++)n.beginPath(),n.moveTo(e()*t,e()*t),n.lineTo(e()*t,e()*t),n.stroke();n.globalAlpha=1}function f1(n,t){const e=ai(2654435769);n.fillStyle="#808080",n.fillRect(0,0,t,t);for(let i=0;i<900;i++){const s=110+Math.floor(e()*60);n.fillStyle="rgb("+s+","+s+","+s+")",n.fillRect(Math.floor(e()*t),Math.floor(e()*t),1+Math.floor(e()*3),1+Math.floor(e()*3))}}function p1(n,t){const e=ai(5304813);n.fillStyle="#5a4632",n.fillRect(0,0,t,t);for(let i=0;i<40;i++){const s=e()*t,r=e()*t,o=4+e()*16,a=e()<.5?"66,50,34":"96,78,56",l=n.createRadialGradient(s,r,0,s,r,o);l.addColorStop(0,"rgba("+a+",0.5)"),l.addColorStop(1,"rgba("+a+",0)"),n.fillStyle=l,n.globalAlpha=1,n.beginPath(),n.arc(s,r,o,0,7),n.fill()}for(let i=0;i<300;i++)n.fillStyle=e()<.5?"rgba(40,30,20,0.5)":"rgba(140,115,85,0.5)",n.globalAlpha=1,n.fillRect(Math.floor(e()*t),Math.floor(e()*t),2,2);n.globalAlpha=1}function m1(n,t){n.fillStyle="#2e3d5c",n.fillRect(0,0,t,t),n.fillStyle="#efe7d2",n.fillRect(t*.18,0,t*.1,t),n.fillRect(t*.72,0,t*.1,t),n.beginPath(),n.arc(t/2,t*.34,t*.13,0,7),n.fill(),n.fillStyle="#2e3d5c",n.font=`bold ${Math.floor(t*.16)}px serif`,n.textAlign="center",n.fillText("TEA",t/2,t*.72)}function g1(n,t){const e=n.createLinearGradient(0,0,0,t);e.addColorStop(0,"#f3ecdb"),e.addColorStop(1,"#e4d8bd"),n.fillStyle=e,n.fillRect(0,0,t,t),n.strokeStyle="#4a4a48",n.lineCap="round";const i=(s,r,o,a)=>{n.lineWidth=o,n.beginPath(),n.moveTo(a,s),n.quadraticCurveTo(a+t*.2,s-r,a+t*.38,s-r*.25),n.quadraticCurveTo(a+t*.5,s-r*.7,a+t*.62,s-r*.1),n.stroke()};n.globalAlpha=.75,i(t*.62,t*.3,7,t*.05),n.globalAlpha=.5,i(t*.7,t*.2,5,t*.35),n.globalAlpha=.9,n.fillStyle="#b0533c",n.beginPath(),n.arc(t*.68,t*.26,t*.05,0,7),n.fill(),n.globalAlpha=1,n.fillStyle="#a33327",n.fillRect(t*.12,t*.78,t*.1,t*.1),n.fillStyle="#f3ecdb",n.font=`${Math.floor(t*.07)}px serif`,n.textAlign="center",n.fillText("wa",t*.17,t*.855)}function _1(n,t){n.fillStyle="#e9dfc6",n.fillRect(0,0,t,t),n.strokeStyle="#c9b98f",n.lineWidth=2,n.globalAlpha=.7;for(let e=-t;e<t*2;e+=26)n.beginPath(),n.arc(e,t*.9,22,Math.PI,0),n.stroke(),n.beginPath(),n.arc(e,t*.45,22,Math.PI,0),n.stroke();n.globalAlpha=1}function Jd(){const n=hn(256,sl(!1),1,1),t=hn(256,sl(!0),1,1),e={woodDark:new ut({map:t,color:12164995,roughness:.75,envMapIntensity:.25}),wood:new ut({map:n,color:13609080,roughness:.8,envMapIntensity:.25}),woodFloor:new ut({map:hn(256,sl(!1),4,1),color:14201219,roughness:.7,envMapIntensity:.3}),plaster:new ut({map:hn(256,a1,1,1),color:16777215,roughness:.95,envMapIntensity:.15}),paper:new ut({map:hn(128,c1,1,1),color:16774106,emissive:16768926,emissiveIntensity:.38,transparent:!0,opacity:.92,roughness:.9,side:Ue}),tatami:new ut({map:hn(256,l1,1,1),color:16777215,roughness:.95,envMapIntensity:.1}),tatamiEdge:new ut({color:3099194,roughness:.9}),roofTile:new ut({color:4869461,roughness:.55,metalness:.08,envMapIntensity:.5}),roofTileAlt:new ut({color:3948358,roughness:.6,metalness:.08,envMapIntensity:.5}),ridge:new ut({color:3487549,roughness:.5,metalness:.1,envMapIntensity:.6}),roofUnder:new ut({map:t,color:9072466,roughness:.9}),stone:new ut({map:hn(256,d1,1,1),color:16777215,roughness:.95,envMapIntensity:.15}),gravel:new ut({map:hn(256,h1,6,6),color:16777215,roughness:1}),grass:new ut({map:hn(256,u1,10,10),color:16777215,roughness:1}),moss:new ut({color:6126906,roughness:1,envMapIntensity:.1}),mossDark:new ut({color:4613420,roughness:1,envMapIntensity:.1}),bamboo:new ut({color:8364110,roughness:.6,envMapIntensity:.3}),bambooLeaf:new ut({color:5143092,roughness:.8,side:Ue}),trunk:new ut({map:t,color:10123868,roughness:.9}),mapleLeaf:new ut({color:16777215,roughness:.75,side:Ue}),fusuma:new ut({map:hn(256,_1,1,1),color:16777215,roughness:.9}),noren:new ut({map:hn(256,m1,1,1),color:16777215,roughness:.9,side:Ue}),scroll:new ut({map:hn(256,g1,1,1),color:16777215,roughness:.9}),lanternGlow:new ut({color:16767392,emissive:16751686,emissiveIntensity:2.2}),paperLantern:new ut({color:16770232,emissive:16757867,emissiveIntensity:1.4,roughness:.8}),bronze:new ut({color:4997688,roughness:.45,metalness:.7,envMapIntensity:.8})};e.woodNew=e.woodNew||new ut({map:hn(256,oa(501,"#9a7040","#7a5630","#bd9257"),1,1),color:16777215,roughness:.7}),e.woodAged=e.woodAged||new ut({map:hn(256,oa(502,"#77685a","#5c5148","#8d8172"),2,1),color:16777215,roughness:.9}),e.glassDark=e.glassDark||new ut({color:1053980,roughness:.08,metalness:.9}),e.bronze=e.bronze||new ut({color:7035443,roughness:.35,metalness:.9}),e.iron=e.iron||new ut({color:2829102,roughness:.5,metalness:.8}),e.soil=e.soil||new ut({color:4865843,roughness:1}),e.thatch=e.thatch||new ut({color:10127967,roughness:1}),e._wet=e._wet||[],e.registerWet=r=>(r&&!e._wet.includes(r)&&e._wet.push(r),r),e.plasterTinted=r=>new ut({color:r,roughness:.95}),[e.wood,e.woodDark,e.woodNew,e.woodAged,e.plaster,e.tile,e.stone,e.soil].forEach(r=>r&&e.registerWet(r)),e.tile=e.tile||e.roofTile,e.shoji=e.shoji||e.paper,e.registerWet(e.tile);const i=document.createElement("canvas");i.width=i.height=128,f1(i.getContext("2d"),128);const s=new bn(i);s.wrapS=s.wrapT=Xn,s.repeat.set(3,3),s.colorSpace=kn;for(const r of["wood","woodDark","woodNew","woodAged","plaster","stone","soil"])e[r]&&(e[r].roughnessMap=s,e[r].roughness=1);for(const r of["roofTile","roofTileAlt","ridge"])e[r]&&(e[r].roughnessMap=s,e[r].roughness=1,e[r].bumpMap=s,e[r].bumpScale=.25);e.soil.map=hn(128,p1,4,4),e.soil.needsUpdate=!0;{const r=(l,c=.9)=>new ut({color:l,roughness:c,envMapIntensity:.15}),o=(l,c=.8)=>new ut({color:l,roughness:c,side:Ue,envMapIntensity:.1});e.barkSugi=e.barkSugi||r(6965812),e.barkHinoki=e.barkHinoki||r(8018496),e.barkKeyaki=e.barkKeyaki||r(9079430,.85),e.barkMomiji=e.barkMomiji||r(8022620,.85),e.barkOrchard=e.barkOrchard||r(6969930),e.leafSugi=e.leafSugi||o(2968106,.9),e.leafBroad=e.leafBroad||o(4680501),e.leafMomiji=e.leafMomiji||o(5929530,.75),e.leafBlossom=e.leafBlossom||o(15247544,.7),e.leafPine=e.leafPine||o(4020784,.85),e.leafBamboo=e.leafBamboo||o(4878392,.75),e.leafSasa=e.leafSasa||o(4156212),e.leafFern=e.leafFern||o(3828544),e.leafSeedling=e.leafSeedling||o(5601850);const a=hn(128,o1(7701),1,1);for(const l of["leafSugi","leafBroad","leafMomiji","leafBlossom","leafPine","leafBamboo","leafSasa","leafFern","leafSeedling","bambooLeaf"]){const c=e[l];c&&(c.map=a,c.alphaTest=.45,c.color.setHex(16777215),c.needsUpdate=!0)}e.shoot=e.shoot||new ut({color:10135658,roughness:.8}),e.litter=e.litter||new ut({color:4864038,roughness:1}),e.impostor=e.impostor||new Un({color:3360814,side:Ue,fog:!0})}return e}const x1=Object.freeze(Object.defineProperty({__proto__:null,buildMaterials:Jd},Symbol.toStringTag,{value:"Module"}));function wi(n){let t=n>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Gt(n,t,e,i,s=0,r=0,o=0,a=0){const l=new Q(new Dt(n,t,e),i);return l.position.set(s,r,o),l.rotation.y=a,l.castShadow=!0,l.receiveShadow=!0,l}const mn=new ae;function xi(n,t){for(let e=0;e<t.length;e++){const i=t[e];mn.position.set(i.p[0],i.p[1],i.p[2]),mn.rotation.set(i.rx||0,i.ry||0,i.rz||0);const s=i.s===void 0?1:i.s;mn.scale.set(i.sx===void 0?s:i.sx,i.sy===void 0?s:i.sy,i.sz===void 0?s:i.sz),mn.updateMatrix(),n.setMatrixAt(e,mn.matrix),i.c&&n.setColorAt(e,i.c)}return n.instanceMatrix.needsUpdate=!0,n.instanceColor&&(n.instanceColor.needsUpdate=!0),n.castShadow=!0,n.receiveShadow=!0,n}function $d(n,t,e=.75,i=1){const s=new Kn(n,i),r=wi(t),o=s.attributes.position,a=new O,l=new Map;for(let c=0;c<o.count;c++){a.fromBufferAttribute(o,c);const h=`${a.x.toFixed(3)},${a.y.toFixed(3)},${a.z.toFixed(3)}`;let d=l.get(h);d===void 0&&(d=.78+r()*.5,l.set(h,d)),a.multiplyScalar(d),a.y*=e,o.setXYZ(c,a.x,a.y,a.z)}return s.computeVertexNormals(),s}let Co=null;function Qd(){if(Co)return Co;const n=document.createElement("canvas");n.width=n.height=128;const t=n.getContext("2d"),e=t.createRadialGradient(64,64,6,64,64,62);return e.addColorStop(0,"rgba(20,12,6,0.55)"),e.addColorStop(.6,"rgba(20,12,6,0.28)"),e.addColorStop(1,"rgba(20,12,6,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),Co=new bn(n),Co}function _a(n,t,e=1){const i=new Q(new Ee(n,t),new Un({map:Qd(),transparent:!0,opacity:e,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));return i.rotation.x=-Math.PI/2,i.renderOrder=1,i}function Jc(n,t,e,i,s,r,o){const a=new Dt(s,i,r),l=new Dt(e,s,r),c=new $t,h=(f,g)=>{const v=new we(f,o,g);return v.castShadow=!1,v.receiveShadow=!0,v},d=h(a,n+1),u=h(l,t+1);for(let f=0;f<=n;f++)mn.position.set(-e/2+f*e/n,0,0),mn.rotation.set(0,0,0),mn.scale.set(1,1,1),mn.updateMatrix(),d.setMatrixAt(f,mn.matrix);for(let f=0;f<=t;f++)mn.position.set(0,-i/2+f*i/t,0),mn.rotation.set(0,0,0),mn.scale.set(1,1,1),mn.updateMatrix(),u.setMatrixAt(f,mn.matrix);return d.instanceMatrix.needsUpdate=u.instanceMatrix.needsUpdate=!0,c.add(d,u),c}const v1=Object.freeze(Object.defineProperty({__proto__:null,blobTexture:Qd,contactShadow:_a,displacedRock:$d,fillInstances:xi,makeBeam:Gt,makeLatticeBars:Jc,mulberry:wi},Symbol.toStringTag,{value:"Module"})),jd={w:10,d:6.4,floorY:.7,wallTop:3.6,pillar:.22};function Po(n,t,e,i=[4,6]){const s=new $t,r=.07,o=.06,a=e.woodDark;s.add(Gt(n,r,o,a,0,t/2-r/2,0)),s.add(Gt(n,r,o,a,0,-t/2+r/2,0)),s.add(Gt(r,t,o,a,-n/2+r/2,0,0)),s.add(Gt(r,t,o,a,n/2-r/2,0,0)),s.add(Gt(.05,t-2*r,o*.7,a,0,0,0));const l=new Q(new Ee(n-2*r,t-2*r),e.paper);l.position.z=-.005,l.receiveShadow=!0,s.add(l);const c=Jc(i[0],i[1],n-2*r,t-2*r,.028,.02,e.woodDark);c.position.z=.018,s.add(c);const h=new Q(new pe(.035,.035,.03,12),e.bronze);return h.rotation.x=Math.PI/2,h.position.set(n/2-.16,0,.035),s.add(h),s}function y1(n){const t=new $t,e=wi(1234),{w:i,d:s,floorY:r,wallTop:o,pillar:a}=jd,l=i/2,c=s/2,h=_a(i+3.4,s+3.6,.9);h.position.set(0,.03,0),t.add(h);{const P=$d(.32,900,.62,0),L=[];for(let U=-l;U<=l+.01;U+=1.25)for(let B=-c;B<=c+.01;B+=1.6)L.push({p:[U+(e()-.5)*.15,.18,B+(e()-.5)*.15],ry:e()*6.3,s:.8+e()*.5});const I=new we(P,n.stone,L.length);xi(I,L),t.add(I)}t.add(Gt(i+.3,.24,.24,n.woodDark,0,r-.12,c)),t.add(Gt(i+.3,.24,.24,n.woodDark,0,r-.12,-c)),t.add(Gt(.24,.24,s,n.woodDark,-l,r-.12,0)),t.add(Gt(.24,.24,s,n.woodDark,l,r-.12,0));for(let P=-l+.8;P<l;P+=1.1)t.add(Gt(.14,.18,s-.2,n.wood,P,r-.1,0));const d=Gt(i+.2,.1,s,n.woodFloor,0,r-.02,0);t.add(d);const u=o-r,f=r+u/2,g=[];for(let P=0;P<=5;P++)g.push(-l+P*i/5);const v=[];g.forEach(P=>{v.push([P,c]),v.push([P,-c])}),[-c+s/4,0,c-s/4].forEach(P=>{v.push([-l,P]),v.push([l,P])}),v.forEach(([P,L])=>t.add(Gt(a,u,a,n.woodDark,P,f,L)));const m=o-.12;t.add(Gt(i+.24,.24,.2,n.woodDark,0,m,c)),t.add(Gt(i+.24,.24,.2,n.woodDark,0,m,-c)),t.add(Gt(.2,.24,s+.24,n.woodDark,-l,m,0)),t.add(Gt(.2,.24,s+.24,n.woodDark,l,m,0));const p=r+2.32;t.add(Gt(i,.14,.12,n.woodDark,0,p,c)),t.add(Gt(i,.1,.14,n.woodDark,0,r+.08,c)),t.add(Gt(i,.14,.12,n.woodDark,0,p,-c)),t.add(Gt(.14,.14,s,n.woodDark,-l,p,0)),t.add(Gt(.14,.14,s,n.woodDark,l,p,0));const y=(p+.07+m-.12)/2,w=m-.12-(p+.07);t.add(Gt(i-.2,w,.1,n.plaster,0,y,c)),t.add(Gt(i-.2,w,.1,n.plaster,0,y,-c)),t.add(Gt(.1,w,s-.2,n.plaster,-l,y,0)),t.add(Gt(.1,w,s-.2,n.plaster,l,y,0));const _=.1,M=p-(r+.1),b=(p+r+.1)/2;t.add(Gt(i-.2,M,_,n.plaster,0,b,-c)),[-l,l].forEach(P=>{t.add(Gt(_,M,s-.2,n.plaster,P,b,0))}),[-l,l].forEach(P=>{const L=P>0?1:-1;[-1.5,1.5].forEach(I=>{const U=r+1.75,B=new $t,W=1.5,F=1;B.add(Gt(W+.14,.09,.14,n.woodDark,0,F/2,0)),B.add(Gt(W+.14,.09,.14,n.woodDark,0,-F/2,0)),B.add(Gt(.09,F,.14,n.woodDark,-W/2,0,0)),B.add(Gt(.09,F,.14,n.woodDark,W/2,0,0));const G=new Q(new Ee(W,F),n.paper);G.rotation.y=Math.PI/2,B.add(G);const X=Jc(5,3,W,F,.03,.02,n.woodDark);X.rotation.y=Math.PI/2,X.position.x=L*.06,B.add(X),B.position.set(P+L*.09,U,I),t.add(B)})});const R=i/5,x=p-(r+.12),S=r+.12+x/2,E=[];for(let P=1;P<=3;P++){const L=-l+R*(P+.5),I=Po(R-.3,x,n);I.position.set(L-(R-.3)/4,S,c+.03);const U=Po(R-.3,x,n);U.position.set(L+(R-.3)/4,S,c-.04),t.add(I,U),P===2&&E.push({node:I,closed:I.position.x,open:I.position.x-(R-.3)/2},{node:U,closed:U.position.x,open:U.position.x+(R-.3)/2})}{const P=Po(R-.3,x,n);P.position.set(2,S,c-.04);const L=Po(R-.3,x,n);L.position.set(2,S,c+.1),t.add(P,L)}let A;{const P=-l+R*.5,L=Gt(R-.4,.12,1.6,n.stone,P,r-.06,c-.7);L.receiveShadow=!0,t.add(L);const I=Gt(1.5,.28,.55,n.stone,P,.2,c+1.65);t.add(I),t.add(Gt(.16,x+.1,.16,n.woodDark,P-.85,S,c+.05)),t.add(Gt(.16,x+.1,.16,n.woodDark,P+.85,S,c+.05)),t.add(Gt(1.9,.18,.2,n.woodDark,P,p+.05,c+.05)),A=new $t;for(let U=0;U<3;U++){const B=new Q(new Dt(.5,.85,.02),n.noren);B.position.set(-.53+U*.53,-.5,0),B.castShadow=!0,A.add(B)}A.position.set(P,p-.06,c+.12),t.add(A)}{const P=r-.06,L=Gt(i+.6,.12,1.25,n.woodFloor,0,P,c+.65);t.add(L);const I=Gt(1.25,.12,s+.6,n.woodFloor,l+.65,P,0);t.add(I);for(let W=-l-.2;W<=l+.25;W+=1.7)t.add(Gt(.14,P,.14,n.woodDark,W,P/2,c+1.2));for(let W=-c;W<=c+.01;W+=1.6)t.add(Gt(.14,P,.14,n.woodDark,l+1.2,P/2,W));const U=3.78-P;for(let W=-l-.2;W<=l+.25;W+=2.55)t.add(Gt(.13,U,.13,n.woodDark,W,P+U/2,c+1.2));for(let W=-c;W<=c+.01;W+=2.1)t.add(Gt(.13,U,.13,n.woodDark,l+1.2,P+U/2,W));t.add(Gt(i+.7,.16,.14,n.woodDark,0,3.62,c+1.2)),t.add(Gt(.14,.16,s+.7,n.woodDark,l+1.2,3.62,0));const B=P+.55;for(let W=-c;W<=1;W+=1.05)t.add(Gt(.09,.62,.09,n.woodDark,l+1.2,P+.31,W));t.add(Gt(.08,.08,4.4,n.wood,l+1.2,B,-c+2.2)),t.add(Gt(.06,.06,4.4,n.wood,l+1.2,B-.28,-c+2.2)),t.add(Gt(1.6,.22,.5,n.stone,-l+R*4.5,.16,c+1.65))}let C;{const P=new ut({color:5917240,roughness:.7,side:Ue}),L=new pe(.09,.09,i+2.6,10,1,!0,Math.PI,Math.PI);L.rotateZ(Math.PI/2),[c+1.55,-c-1.55].forEach(F=>{const G=new Q(L,P);G.position.set(0,3.66,F),t.add(G)});const I=new pe(.055,.055,3.5,8);[[-l-1.2,c+1.55],[-l-1.2,-c-1.55]].forEach(([F,G])=>{const X=new Q(I,n.bamboo);X.position.set(F,1.85,G),X.castShadow=!0,t.add(X)}),C=new $t;const U=new tr(.055,.014,6,10);for(let F=0;F<16;F++){const G=new Q(U,n.bronze);G.position.y=-F*.2,G.rotation.y=F%2*Math.PI/2,C.add(G)}C.position.set(l+1.2,3.6,c+1.55),t.add(C);const B=[];for(let F=0;F<=8;F++){const G=F/8*Math.PI;B.push(new ht(.12+Math.sin(G)*.3,F*.045))}const W=new Q(new js(B,14),n.stone);W.position.set(l+1.2,0,c+1.55),W.castShadow=W.receiveShadow=!0,t.add(W)}return{group:t,noren:A,rainChain:C,openBayX:-l+R*4.5,sliders:E}}function M1(n){const t=new $t;n.ridge.side=Ue;const e=6.42,i=3.7,s=4.7,r=6,o=s,a=e-i,l=Math.hypot(o,a),c=Math.atan2(a,o),h=o/l,d=a/l,u=r*2,f=new Dt(u,.16,l+.35),g=(e+i)/2-.06,v=s/2,m=new Q(f,n.roofUnder);m.position.set(0,g,v),m.rotation.x=c;const p=m.clone();p.position.z=-v,p.rotation.x=-c,m.castShadow=p.castShadow=!0,m.receiveShadow=p.receiveShadow=!0,t.add(m,p),t.add(Gt(u+.15,.3,.09,n.woodDark,0,i-.02,s+.02)),t.add(Gt(u+.15,.3,.09,n.woodDark,0,i-.02,-s-.02));{const y=new Dt(.12,.15,.9),w=[];for(let M=-5.6;M<=5.61;M+=.62)w.push({p:[M,i-.02,s-.35],rx:c}),w.push({p:[M,i-.02,-4.3500000000000005],rx:-c});const _=new we(y,n.woodDark,w.length);xi(_,w),_.castShadow=!1,t.add(_)}{const y=new pe(.085,.095,.55,7,1,!0);y.rotateZ(Math.PI/2),y.rotateY(Math.PI/2);const w=11,_=56,M=new we(y,n.roofTile,w*_*2),b=wi(20240),R=new Lt;let x=0;const S=[];for(let E=0;E<2;E++){const A=E===0?1:-1;for(let C=0;C<w;C++){const P=.32+C*((l-.35)/w),L=A*(s-P*h),I=i+P*d+.1;for(let U=0;U<_;U++){const B=-5.78+U*(11.56/(_-1));S.push({p:[B,I,L],rx:A*c});const W=.82+b()*.3;R.setRGB(W,W*1.01,W*1.06),M.setColorAt(x++,R)}}}xi(M,S),M.instanceColor.needsUpdate=!0,M.castShadow=!1,M.receiveShadow=!0,t.add(M)}{const y=new pe(.17,.17,.72,9,1,!0,0,Math.PI);y.rotateZ(Math.PI/2);const w=16,_=new we(y,n.ridge,w),M=[];for(let b=0;b<w;b++)M.push({p:[-5.6+b*(11.2/(w-1)),e+.02,0]});xi(_,M),_.castShadow=!1,t.add(_),t.add(Gt(.5,.22,.4,n.ridge,-5.85,e-.05,0)),t.add(Gt(.5,.22,.4,n.ridge,5.85,e-.05,0))}[-1,1].forEach(y=>{const w=new $t;w.add(Gt(.22,.5,.55,n.ridge,0,.2,0));const _=new Q(new pe(.3,.3,.14,12),n.ridge);_.rotation.z=Math.PI/2,_.position.y=.55,_.castShadow=!0,w.add(_);const M=new Q(new _n(.12,10,8),n.ridge);M.position.y=.78,M.castShadow=!0,w.add(M),w.position.set(y*5.95,e-.1,0),t.add(w)});{const y=new qr;y.moveTo(-3.2,3.55),y.lineTo(3.2,3.55),y.lineTo(0,e-.12),y.closePath();const w=new da(y);[4.94,-4.94].forEach(_=>{const M=new Q(w,n.plaster);M.rotation.y=Math.PI/2,M.position.x=_,M.castShadow=M.receiveShadow=!0,M.material.side=Ue,t.add(M)}),[1,-1].forEach(_=>{[1,-1].forEach(M=>{const b=Gt(.1,.24,l+.4,n.woodDark,_*(r-.02),g+.12,M*v);b.rotation.x=M*c,t.add(b)})})}{const y=new Dt(2,.09,1.7),w=c-.3;[[5.55,1,4.35,1],[-5.55,-1,4.35,1],[5.55,1,-4.35,-1],[-5.55,-1,-4.35,-1]].forEach(([M,b,R,x])=>{const S=new Q(y,n.roofUnder);S.position.set(M,i+.16,R),S.rotation.order="YXZ",S.rotation.y=b*x*.42,S.rotation.x=x*w,S.castShadow=S.receiveShadow=!0,t.add(S);const E=new pe(.085,.095,.55,7,1,!0);E.rotateZ(Math.PI/2),E.rotateY(Math.PI/2);const A=new we(E,n.roofTileAlt,5),C=[];for(let P=0;P<5;P++)C.push({p:[M-.7+P*.35,i+.38,R-x*.15],rx:x*w});xi(A,C),A.castShadow=!1,t.add(A)})}return{group:t,ridgeY:e,eaveY:i,eaveZ:s}}function S1(n){const t=new $t,{floorY:e}=jd,i=-.9,s=4.9,r=-2.9,o=2.9,a=(i+s)/2;{const f=e+.06;for(let g=r+.1;g+1.82<o+.01;g+=1.82+.02)for(let v=i+.1;v+.92<s+.01;v+=.92+.02){const m=new Q(new Dt(.92,.06,1.82),n.tatami);m.position.set(v+.92/2,f,g+1.82/2),m.receiveShadow=!0,t.add(m);const p=Gt(.92+.02,.06+.005,.035,n.tatamiEdge,v+.92/2,f,g+1.82-.017);p.castShadow=!1,t.add(p)}}{const h=3-e;[[i,0],[a,0],[s,-2],[s,2]].forEach(([u,f])=>t.add(Gt(.16,h,.16,n.woodDark,u,e+h/2,f)));const d=new Q(new Dt(s-i+.4,.08,o-r+.4),n.woodDark);d.position.set(a,3.02,0),t.add(d)}{const h=Gt(.1,2.2,o-r,n.plaster,i,e+1.15,0);t.add(h);for(let d=0;d<3;d++){const u=new $t,f=1.75,g=1.7;u.add(Gt(f,.06,.05,n.woodDark,0,g/2,0)),u.add(Gt(f,.06,.05,n.woodDark,0,-g/2,0)),u.add(Gt(.06,g,.05,n.woodDark,-f/2,0,0)),u.add(Gt(.06,g,.05,n.woodDark,f/2,0,0));const v=new Q(new Ee(f-.1,g-.1),n.fusuma);v.rotation.y=Math.PI/2,u.add(v);const m=new Q(new pe(.03,.03,.03,10),n.bronze);m.rotation.z=Math.PI/2,m.position.set(.04,0,.35),u.add(m),u.position.set(i+.09,e+1,-1.85+d*1.85),t.add(u)}}{const u=Gt(2.2,.16,1,n.wood,-2.6,e+.14,r+.55);t.add(u),t.add(Gt(.14,2.2,.14,n.woodDark,-2.6-2.2/2,e+1.1,r+.15)),t.add(Gt(.14,2.2,.14,n.woodDark,-2.6+2.2/2,e+1.1,r+.15)),t.add(Gt(2.2+.2,.14,.16,n.woodDark,-2.6,e+2.25,r+.15));const f=new $t,g=new Q(new Dt(.55,1.05,.02),n.scroll);f.add(g);const v=new pe(.025,.025,.7,8),m=new Q(v,n.woodDark);m.rotation.z=Math.PI/2,m.position.y=.55;const p=m.clone();p.position.y=-.55,f.add(m,p),f.position.set(-2.6-.45,e+1.55,r+.22),f.rotation.x=.03,t.add(f);const y=[];for(let R=0;R<=8;R++){const x=R/8*Math.PI;y.push(new ht(.03+Math.sin(x)*.11,R*.035))}const w=new Q(new js(y,12),new ut({color:3824268,roughness:.35,envMapIntensity:.7}));w.position.set(-2.6+.55,e+.22,r+.55),w.castShadow=!0,t.add(w);const _=new Q(new pe(.012,.012,.5,6),n.mossDark);_.position.set(-2.6+.55,e+.5,r+.55),t.add(_);const M=new Q(new Kn(.09,0),new ut({color:13920650,roughness:.7}));M.position.set(-2.6+.55,e+.78,r+.55),M.castShadow=!0,t.add(M);const b=new Q(new Kn(.14,0),n.stone);b.scale.y=.6,b.position.set(-2.6+.1,e+.26,r+.6),b.castShadow=!0,t.add(b)}{t.add(Gt(1.1,.07,.7,n.wood,2.2,e+.42,.6)),[[-.45,-.25],[.45,-.25],[-.45,.25],[.45,.25]].forEach(([f,g])=>t.add(Gt(.07,.32,.07,n.woodDark,2.2+f,e+.22,.6+g)));const u=new ut({color:8007221,roughness:.9});[[2.2-.2,.6+.75],[2.2+.35,.6-.7]].forEach(([f,g])=>{const v=new Q(new Dt(.5,.09,.5),u);v.position.set(f,e+.12,g),v.rotation.y=.2,v.castShadow=v.receiveShadow=!0,t.add(v)})}const l=new $t;{const h=new Q(new pe(.012,.012,.5,6),n.woodDark);h.position.y=.45,l.add(h);const d=new Q(new pe(.19,.19,.34,12),n.paperLantern);l.add(d);const u=new Q(new pe(.1,.14,.05,10),n.woodDark);u.position.y=.19;const f=u.clone();f.position.y=-.19,l.add(u,f);const g=new Q(new pe(.015,.03,.16,8),new ut({color:10695463,roughness:.8}));g.position.y=-.3,l.add(g),l.position.set(2,2.35,.4),t.add(l)}const c=new Kc(16757867,5,9,2);return c.position.set(2,2.3,.4),t.add(c),{group:t,lantern:l,lanternLight:c}}const w1={x:7.5,z:6,w:4.6,d:2.9};function b1(n){const t=new $t,{x:e,z:i,w:s,d:r}=w1,o=new Q(new qn(1,40),new ut({color:2241323,roughness:1}));o.rotation.x=-Math.PI/2,o.scale.set(s/2+.15,r/2+.15,1),o.position.set(e,-.1,i),o.receiveShadow=!0,t.add(o);const a=new ut({color:5337212,roughness:.1,metalness:.85,envMapIntensity:1.1,transparent:!0,opacity:.93}),l=30,c=18,h=new Ee(s,r,l,c),d=new Q(h,a);d.rotation.x=-Math.PI/2,d.position.set(e,.06,i),d.receiveShadow=!0,t.add(d);const u=h.attributes.position.array.slice();{const g=wi(646),v=22,m=new Kn(.22,0),p=new we(m,n.stone,v),y=[];for(let w=0;w<v;w++){const _=w/v*Math.PI*2;y.push({p:[e+Math.cos(_)*(s/2+.1),.1,i+Math.sin(_)*(r/2+.1)],ry:g()*6.3,s:.8+g()*.6,sy:.55})}xi(p,y),t.add(p)}function f(g,v=null){const m=h.attributes.position,y=1+(v&&typeof v.wetness=="number"?Math.min(Math.max(v.wetness,0),1):0)*.35;for(let w=0;w<m.count;w++){const _=u[w*3],M=u[w*3+1];m.setZ(w,(Math.sin(_*2.1+g*1.7)*.022+Math.cos(M*2.8+g*2.2)*.02)*y)}m.needsUpdate=!0,h.computeVertexNormals()}return{group:t,update:f,waterMat:a}}class E1 extends Y0{constructor(t){super(t),this.type=sn}parse(t){const o=function(x,S){switch(x){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(S||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(S||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(S||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(S||""))}},h=`
`,d=function(x,S,E){S=S||1024;let C=x.pos,P=-1,L=0,I="",U=String.fromCharCode.apply(null,new Uint16Array(x.subarray(C,C+128)));for(;0>(P=U.indexOf(h))&&L<S&&C<x.byteLength;)I+=U,L+=U.length,C+=128,U=String.fromCharCode.apply(null,new Uint16Array(x.subarray(C,C+128)));return-1<P?(x.pos+=L+P+1,I+U.slice(0,P)):!1},u=function(x){const S=/^#\?(\S+)/,E=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,A=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*FORMAT=(\S+)\s*$/,P=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,L={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let I,U;for((x.pos>=x.byteLength||!(I=d(x)))&&o(1,"no header found"),(U=I.match(S))||o(3,"bad initial token"),L.valid|=1,L.programtype=U[1],L.string+=I+`
`;I=d(x),I!==!1;){if(L.string+=I+`
`,I.charAt(0)==="#"){L.comments+=I+`
`;continue}if((U=I.match(E))&&(L.gamma=parseFloat(U[1])),(U=I.match(A))&&(L.exposure=parseFloat(U[1])),(U=I.match(C))&&(L.valid|=2,L.format=U[1]),(U=I.match(P))&&(L.valid|=4,L.height=parseInt(U[1],10),L.width=parseInt(U[2],10)),L.valid&2&&L.valid&4)break}return L.valid&2||o(3,"missing format specifier"),L.valid&4||o(3,"missing image size specifier"),L},f=function(x,S,E){const A=S;if(A<8||A>32767||x[0]!==2||x[1]!==2||x[2]&128)return new Uint8Array(x);A!==(x[2]<<8|x[3])&&o(3,"wrong scanline width");const C=new Uint8Array(4*S*E);C.length||o(4,"unable to allocate buffer space");let P=0,L=0;const I=4*A,U=new Uint8Array(4),B=new Uint8Array(I);let W=E;for(;W>0&&L<x.byteLength;){L+4>x.byteLength&&o(1),U[0]=x[L++],U[1]=x[L++],U[2]=x[L++],U[3]=x[L++],(U[0]!=2||U[1]!=2||(U[2]<<8|U[3])!=A)&&o(3,"bad rgbe scanline format");let F=0,G;for(;F<I&&L<x.byteLength;){G=x[L++];const _t=G>128;if(_t&&(G-=128),(G===0||F+G>I)&&o(3,"bad scanline data"),_t){const yt=x[L++];for(let kt=0;kt<G;kt++)B[F++]=yt}else B.set(x.subarray(L,L+G),F),F+=G,L+=G}const X=A;for(let _t=0;_t<X;_t++){let yt=0;C[P]=B[_t+yt],yt+=A,C[P+1]=B[_t+yt],yt+=A,C[P+2]=B[_t+yt],yt+=A,C[P+3]=B[_t+yt],P+=4}W--}return C},g=function(x,S,E,A){const C=x[S+3],P=Math.pow(2,C-128)/255;E[A+0]=x[S+0]*P,E[A+1]=x[S+1]*P,E[A+2]=x[S+2]*P,E[A+3]=1},v=function(x,S,E,A){const C=x[S+3],P=Math.pow(2,C-128)/255;E[A+0]=oo.toHalfFloat(Math.min(x[S+0]*P,65504)),E[A+1]=oo.toHalfFloat(Math.min(x[S+1]*P,65504)),E[A+2]=oo.toHalfFloat(Math.min(x[S+2]*P,65504)),E[A+3]=oo.toHalfFloat(1)},m=new Uint8Array(t);m.pos=0;const p=u(m),y=p.width,w=p.height,_=f(m.subarray(m.pos),y,w);let M,b,R;switch(this.type){case Cn:R=_.length/4;const x=new Float32Array(R*4);for(let E=0;E<R;E++)g(_,E*4,x,E*4);M=x,b=Cn;break;case sn:R=_.length/4;const S=new Uint16Array(R*4);for(let E=0;E<R;E++)v(_,E*4,S,E*4);M=S,b=sn;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:y,height:w,data:M,header:p.string,gamma:p.gamma,exposure:p.exposure,type:b,colorSpace:Or,minFilter:Xe,magFilter:Xe,generateMipmaps:!1,flipY:!0}}setDataType(t){return this.type=t,this}}class T1 extends E1{constructor(t){console.warn("RGBELoader has been deprecated. Please use HDRLoader instead."),super(t)}}const A1=[{key:"bark",albedo:"vendor/commons/sugi_bark/1280px-Cryptomeria_japonica_(bark)_of_Okuteshinmei-jinja.jpg",hasRough:!1,hasNormal:!1,materialKeys:["trunk"],repeat:[1,2],fallbackNote:"procedural darkWood canvas (materials.js trunk) stays when file missing"},{key:"woodAged",albedo:"vendor/commons/weathered_wood/1280px-Weathered_barn_wood_with_worm_holes.jpg",hasRough:!1,hasNormal:!1,materialKeys:["woodAged"],repeat:[2,1],fallbackNote:"procedural woodDrawTone(502) canvas stays when file missing"},{key:"moss",albedo:"vendor/commons/moss/1280px-Moss_green_texture.jpg",hasRough:!1,hasNormal:!1,materialKeys:["moss"],repeat:[3,3],fallbackNote:"flat moss color stays when file missing"},{key:"mossDark",albedo:"vendor/commons/moss_cc0/1280px-Moss_Texture.png",hasRough:!1,hasNormal:!1,materialKeys:["mossDark"],repeat:[3,3],fallbackNote:"flat mossDark color stays when file missing"},{key:"gravel",albedo:"vendor/commons/gravel/1280px-Gravel_texture.jpg",hasRough:!1,hasNormal:!1,materialKeys:["gravel"],repeat:[6,6],fallbackNote:"procedural gravelDraw canvas stays when file missing"},{key:"soil",albedo:"vendor/commons/needle_litter/Forest_floor_with_loblolly_pine_needles.jpg",hasRough:!1,hasNormal:!1,materialKeys:["soil"],repeat:[4,4],fallbackNote:"procedural soilDraw canvas stays when file missing"},{key:"ground037-soil",albedo:"vendor/ambientcg/Ground037/Ground037_1K-JPG_Color.jpg",normal:"vendor/ambientcg/Ground037/Ground037_1K-JPG_NormalGL.jpg",rough:"vendor/ambientcg/Ground037/Ground037_1K-JPG_Roughness.jpg",hasRough:!0,hasNormal:!0,materialKeys:["soil"],repeat:[110,110],fallbackNote:"procedural soilDraw canvas stays when file missing"},{key:"moss002",albedo:"vendor/ambientcg/Moss002/Moss002_1K-JPG_Color.jpg",normal:"vendor/ambientcg/Moss002/Moss002_1K-JPG_NormalGL.jpg",rough:"vendor/ambientcg/Moss002/Moss002_1K-JPG_Roughness.jpg",hasRough:!0,hasNormal:!0,materialKeys:["moss","mossDark"],repeat:[60,60],fallbackNote:"flat moss colors stay when file missing"},{key:"rock035",albedo:"vendor/ambientcg/Rock035/Rock035_1K-JPG_Color.jpg",normal:"vendor/ambientcg/Rock035/Rock035_1K-JPG_NormalGL.jpg",rough:"vendor/ambientcg/Rock035/Rock035_1K-JPG_Roughness.jpg",hasRough:!0,hasNormal:!0,materialKeys:["stone"],repeat:[24,24],fallbackNote:"procedural stoneDraw canvas stays when file missing"},{key:"gravel043",albedo:"vendor/ambientcg/Gravel043/Gravel043_1K-JPG_Color.jpg",normal:"vendor/ambientcg/Gravel043/Gravel043_1K-JPG_NormalGL.jpg",rough:"vendor/ambientcg/Gravel043/Gravel043_1K-JPG_Roughness.jpg",hasRough:!0,hasNormal:!0,materialKeys:["gravel"],repeat:[6,6],fallbackNote:"procedural gravelDraw canvas stays when file missing"},{key:"bark006",albedo:"vendor/ambientcg/Bark006/Bark006_1K-JPG_Color.jpg",normal:"vendor/ambientcg/Bark006/Bark006_1K-JPG_NormalGL.jpg",rough:"vendor/ambientcg/Bark006/Bark006_1K-JPG_Roughness.jpg",hasRough:!0,hasNormal:!0,materialKeys:["trunk"],repeat:[1,2],fallbackNote:"procedural darkWood canvas stays when file missing"},{key:"woodsiding013",albedo:"vendor/ambientcg/WoodSiding013/WoodSiding013_1K-JPG_Color.jpg",normal:"vendor/ambientcg/WoodSiding013/WoodSiding013_1K-JPG_NormalGL.jpg",rough:"vendor/ambientcg/WoodSiding013/WoodSiding013_1K-JPG_Roughness.jpg",hasRough:!0,hasNormal:!0,materialKeys:["woodAged","wood"],repeat:[2,1],fallbackNote:"procedural woodDrawTone canvases stay when file missing (woodNew untouched: new vs aged history)"},{key:"plaster001",albedo:"vendor/ambientcg/Plaster001/Plaster001_1K-JPG_Color.jpg",normal:"vendor/ambientcg/Plaster001/Plaster001_1K-JPG_NormalGL.jpg",rough:"vendor/ambientcg/Plaster001/Plaster001_1K-JPG_Roughness.jpg",hasRough:!0,hasNormal:!0,materialKeys:["plaster"],repeat:[1,1],fallbackNote:"procedural plasterDraw canvas stays when file missing"},{key:"roofing006",albedo:"vendor/ambientcg/RoofingTiles006/RoofingTiles006_1K-JPG_Color.jpg",normal:"vendor/ambientcg/RoofingTiles006/RoofingTiles006_1K-JPG_NormalGL.jpg",rough:"vendor/ambientcg/RoofingTiles006/RoofingTiles006_1K-JPG_Roughness.jpg",hasRough:!0,hasNormal:!0,materialKeys:["roofTile","roofTileAlt"],repeat:[4,4],fallbackNote:"flat ceramic + shared noise stay when file missing"},{key:"barkPBR",albedo:"vendor/commons/bark_pbr/bark_brown_diff.jpg",normal:"vendor/commons/bark_pbr/bark_brown_nor_1k.png",rough:"vendor/commons/bark_pbr/bark_brown_rough_1k.png",hasRough:!0,hasNormal:!0,materialKeys:["barkSugi","barkHinoki","barkOrchard"],repeat:[1,3],fallbackNote:"procedural bark colors stay when files missing"},{key:"zelkovaBark",albedo:"vendor/commons/zelkova_bark/zelkova_bark.jpg",hasRough:!1,hasNormal:!1,materialKeys:["barkKeyaki","barkMomiji"],repeat:[1,2],fallbackNote:"procedural smooth-grey bark stays when file missing"}],R1={clear:"vendor/hdri/venice_sunset_1k.hdr",overcast:"vendor/hdri/quarry_01_1k.hdr",night:"vendor/hdri/moonless_golf_1k.hdr"};function C1(n,t){return n.colorSpace=ze,n.wrapS=n.wrapT=Xn,t&&n.repeat.set(t[0],t[1]),n.anisotropy=4,n.needsUpdate=!0,n}function Ru(n,t){return n.colorSpace=kn,n.wrapS=n.wrapT=Xn,t&&n.repeat.set(t[0],t[1]),n.anisotropy=4,n.needsUpdate=!0,n}function P1(n,t={}){const e=t.loader||new zd,i={applied:[],missing:[]};for(const s of A1)if(!s.key.startsWith("polyhaven"))try{if(e.load(s.albedo,r=>{C1(r,s.repeat);let o=!1;for(const a of s.materialKeys){const l=n[a];l&&(l.map&&l.map.repeat&&r.repeat.copy(l.map.repeat),l.map=r,l.needsUpdate=!0,o=!0)}o?i.applied.includes(s.key)||i.applied.push(s.key):i.missing.includes(s.key)||i.missing.push(s.key)},void 0,()=>{i.missing.includes(s.key)||i.missing.push(s.key),t.verbose&&console.warn(`[vendor] missing scan, fallback kept: ${s.key} <- ${s.albedo}`)}),s.normal)try{e.load(s.normal,r=>{Ru(r,s.repeat);for(const o of s.materialKeys){const a=n[o];a&&"normalMap"in a&&(a.normalMap&&a.normalMap.repeat&&r.repeat.copy(a.normalMap.repeat),a.normalMap=r,"normalScale"in a&&a.normalScale&&a.normalScale.setScalar(.7),a.needsUpdate=!0)}},void 0,()=>{})}catch{}if(s.rough)try{e.load(s.rough,r=>{Ru(r,s.repeat);for(const o of s.materialKeys){const a=n[o];a&&"roughnessMap"in a&&(a.roughnessMap=r,"roughness"in a&&(a.roughness=1),a.needsUpdate=!0)}},void 0,()=>{})}catch{}}catch{i.missing.includes(s.key)||i.missing.push(s.key)}return i}const $c=13621468;function D1(n,t){const e=new nn({side:xn,depthWrite:!1,fog:!1,uniforms:{top:{value:new Lt(8366281)},mid:{value:new Lt(15909267)},bot:{value:new Lt(14721137)}},vertexShader:`
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
      }`}),i=new Q(new _n(150,24,16),e);i.frustumCulled=!1,n.add(i),n.fog=new kc($c,42,500);const s=new dc(16767400,3);s.position.set(14,8.5,12),s.target.position.set(0,1.2,0),s.castShadow=!0,s.shadow.mapSize.set(2048,2048),s.shadow.camera.left=-15,s.shadow.camera.right=15,s.shadow.camera.top=15,s.shadow.camera.bottom=-15,s.shadow.camera.near=10,s.shadow.camera.far=120,s.shadow.bias=-4e-4,s.shadow.normalBias=.03,n.add(s,s.target);const r=new q0(12375016,9072466,.6);n.add(r);const o=new dc(16764830,.35);o.position.set(-8,4,-6),n.add(o);const a=document.createElement("canvas");a.width=64,a.height=32;const l=a.getContext("2d"),c=l.createLinearGradient(0,0,0,32);c.addColorStop(0,"#6f96bd"),c.addColorStop(.34,"#a8b8c4"),c.addColorStop(.46,"#ffd9a0"),c.addColorStop(.52,"#c08a5e"),c.addColorStop(.6,"#6b5a44"),c.addColorStop(1,"#2e2a22"),l.fillStyle=c,l.fillRect(0,0,64,32);const h=l.createRadialGradient(41,9,0,41,9,11);h.addColorStop(0,"rgba(255,244,220,0.95)"),h.addColorStop(.4,"rgba(255,214,150,0.45)"),h.addColorStop(1,"rgba(255,200,130,0)"),l.fillStyle=h,l.fillRect(0,0,64,32);let d=1234567;const u=()=>(d=d*1103515245+12345&2147483647)/2147483647;for(let m=0;m<40;m++){const p=u()*64,y=18+u()*14,w=1+u()*3,_=l.createRadialGradient(p,y,0,p,y,w),M=u()<.5;_.addColorStop(0,M?"rgba(150,115,80,0.25)":"rgba(50,52,48,0.25)"),_.addColorStop(1,"rgba(0,0,0,0)"),l.fillStyle=_,l.beginPath(),l.arc(p,y,w,0,7),l.fill()}const f=new bn(a);f.mapping=br,f.colorSpace=ze;const g=new ra(t),v=g.fromEquirectangular(f);n.environment=v.texture,f.dispose(),g.dispose();try{new T1().load(R1.clear,m=>{try{m.mapping=br;const p=new ra(t),y=p.fromEquirectangular(m);n.environment=y.texture,m.dispose(),p.dispose()}catch{}},void 0,()=>{})}catch{}return{sun:s,hemi:r,skyMat:e,sky:i}}function on(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new xe;let c=0;for(let h=0;h<n.length;++h){const d=n[h];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const d=[];for(let u=0;u<n.length;++u){const f=n[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=n[u].attributes.position.count}l.setIndex(d)}for(const h in r){const d=Cu(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){const f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][u]);const g=Cu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function Cu(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){const h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Oe(o,e,i);let l=0;for(let c=0;c<n.length;++c){const h=n[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<e;g++){const v=h.getComponent(u,g);a.setComponent(u+d,g,v)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function tf(n,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count;let o=0;const a=Object.keys(n.attributes),l={},c={},h=[],d=["getX","getY","getZ","getW"],u=["setX","setY","setZ","setW"];for(let y=0,w=a.length;y<w;y++){const _=a[y],M=n.attributes[_];l[_]=new M.constructor(new M.array.constructor(M.count*M.itemSize),M.itemSize,M.normalized);const b=n.morphAttributes[_];b&&(c[_]||(c[_]=[]),b.forEach((R,x)=>{const S=new R.array.constructor(R.count*R.itemSize);c[_][x]=new R.constructor(S,R.itemSize,R.normalized)}))}const f=t*.5,g=Math.log10(1/t),v=Math.pow(10,g),m=f*v;for(let y=0;y<r;y++){const w=i?i.getX(y):y;let _="";for(let M=0,b=a.length;M<b;M++){const R=a[M],x=n.getAttribute(R),S=x.itemSize;for(let E=0;E<S;E++)_+=`${Math.trunc(x[d[E]](w)*v+m)},`}if(_ in e)h.push(e[_]);else{for(let M=0,b=a.length;M<b;M++){const R=a[M],x=n.getAttribute(R),S=n.morphAttributes[R],E=x.itemSize,A=l[R],C=c[R];for(let P=0;P<E;P++){const L=d[P],I=u[P];if(A[I](o,x[L](w)),S)for(let U=0,B=S.length;U<B;U++)C[U][I](o,S[U][L](w))}}e[_]=o,h.push(o),o++}}const p=n.clone();for(const y in n.attributes){const w=l[y];if(p.setAttribute(y,new w.constructor(w.array.slice(0,o*w.itemSize),w.itemSize,w.normalized)),y in c)for(let _=0;_<c[y].length;_++){const M=c[y][_];p.morphAttributes[y][_]=new M.constructor(M.array.slice(0,o*M.itemSize),M.itemSize,M.normalized)}}return p.setIndex(h),p}function Nn(n){let t=n>>>0||1;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const ef=x1,Pu=v1||{},nf={M:null};function sf(n){nf.M=n}const L1={tile:"roofTile",shoji:"paper"},rl={};function gn(n,t){const e=nf.M||ef;if(e&&e[n])return e[n];const i=L1[n];return i&&e&&e[i]?e[i]:(rl[n]||(rl[n]=t()),rl[n])}const zi=(n,t=.85,e=0)=>new ut({color:n,roughness:t,metalness:e}),Ii=()=>gn("woodDark",()=>zi(4864552,.8)),Du=()=>gn("woodNew",()=>zi(9069112,.7)),Lu=()=>gn("woodAged",()=>zi(7234136,.9)),Iu=()=>gn("plaster",()=>zi(15261904,.95)),I1=()=>gn("tile",()=>zi(3817286,.85)),rf=()=>gn("stone",()=>zi(9276808,.95)),N1=()=>gn("glassDark",()=>new ut({color:1053980,roughness:.08,metalness:.9})),yr=()=>gn("iron",()=>zi(2829102,.55,.8));function De(n,t,e,i,s,r,o,a,l=0,c=0,h=0){const d=new Dt(e,i,s),u=new re().makeRotationFromEuler(new yn(h,l,c));u.setPosition(r,o,a),d.applyMatrix4(u),(n[t]||(n[t]=[])).push(d)}function Nu(n,t,e,i,s,r,o=0,a=0,l=0){const c=new re().makeRotationFromEuler(new yn(o,a,l));c.setPosition(i,s,r),e.applyMatrix4(c),(n[t]||(n[t]=[])).push(e)}function U1(n,t,e,{shadow:i=!0,noCast:s=null}={}){for(const r of Object.keys(t)){const o=on(t[r],!1);t[r].forEach(l=>l.dispose());const a=new Q(o,e(r));a.castShadow=s&&s.has(r)?!1:i,a.receiveShadow=!0,n.add(a)}}function of(n={}){const t=Nn(n.seed??7),e=n.w??6.5,i=n.d??6,s=n.wallH??3.1,r=Ke.degToRad(n.pitch??28+t()*8),o=n.roofType??(t()<.7?"kirizuma":"yosemune"),a=n.facadeCols??Math.max(3,Math.round(e/1.8)),l=n.age??t(),c=!!n.isShop,h=n.engawa??(t()<.6?.9:0),d=new $t;d.name=n.name||"house";const u={},f=(n.woodTone??.5)>.6?"woodNew":"woodAged",g=V=>V==="WOOD"?gn(f,f==="woodNew"?Du:Lu):V==="WOOD_D"?Ii():V==="IRON"||V==="IRNNC"?yr():V==="RIDGE"?gn("ridge",()=>zi(3487549,.5,.1)):V==="PLAS"?ef.plasterTinted?.(n.plasterTone??15261904)??Iu():V==="STONE"?rf():Ii(),v=.55,m=.45,p=[],y=Math.max(3,Math.round(e/1.2)+1),w=Math.max(3,Math.round(i/1.2)+1);for(let V=0;V<y;V++)p.push([-e/2+e*V/(y-1),0,-i/2],[-e/2+e*V/(y-1),0,i/2]);for(let V=1;V<w-1;V++)p.push([-e/2,0,-i/2+i*V/(w-1)],[e/2,0,-i/2+i*V/(w-1)]);for(const[V,,rt]of p)De(u,"STONE",v,m,v,V,m/2-.06,rt,t()*.1);const _=m-.06;De(u,"WOOD_D",e+.3,.22,i+.3,0,_+.11,0);const M=.14,b=_+.22,R=b+s,x=n.winLayout??Array.from({length:a},()=>t()<.55?1:2),S=e/a;for(let V=0;V<a;V++){const rt=-e/2+S*(V+.5),J=x[V%x.length],dt=(n.doorSide??0)!==0&&(n.doorSide<0&&V===0||n.doorSide>0&&V===a-1),xt=b+.55,$=b+s-.75;J===0&&!dt?De(u,"PLAS",S-.16,s,M,rt,b+s/2,i/2):dt?(De(u,"PLAS",S-.16,xt-b,M,rt,(b+xt)/2,i/2),De(u,"PLAS",S-.16,R-(b+2.1),M,rt,(R+b+2.1)/2,i/2)):(De(u,"PLAS",S-.16,xt-b,M,rt,(b+xt)/2,i/2),De(u,"PLAS",S-.16,R-$,M,rt,(R+$)/2,i/2),De(u,"PLAS",.14,$-xt,M,rt-(S-.16)/2+.07,(xt+$)/2,i/2),De(u,"PLAS",.14,$-xt,M,rt+(S-.16)/2-.07,(xt+$)/2,i/2))}De(u,"PLAS",e,s,M,0,b+s/2,-i/2),De(u,"PLAS",M,s,i,-e/2,b+s/2,0),De(u,"PLAS",M,s,i,e/2,b+s/2,0);for(let V=0;V<=a;V++){const rt=-e/2+S*V;De(u,"WOOD_D",.14,s,.14,rt,b+s/2,i/2+.02),De(u,"WOOD_D",.14,s,.14,rt,b+s/2,-i/2-.02)}De(u,"WOOD_D",e+.24,.16,.18,0,R-.08,i/2+.02),De(u,"WOOD_D",e+.24,.12,.14,0,b+1.55,i/2+.03),De(u,"WOOD_D",e+.24,.2,.2,0,R+.02,-i/2-.02);for(let V=0;V<=a;V++){const rt=-e/2+S*V;De(u,"WOOD_D",.12,.12,.5,rt,R+.18,i/2+.25)}for(let V=0;V<a;V++){const rt=-e/2+S*(V+.5);De(u,"WOOD_D",.22,.16,.3,rt,R+.32,i/2+.32)}if(n.chains===!0){const V=Nn((n.seed??7)*7919+13);for(const rt of[1,-1]){const J=rt*(e/2-.35),dt=i/2+.5,xt=R+.42,$=.32,et=Math.max(8,Math.floor((xt-$)/.09));for(let ct=0;ct<=et;ct++){const pt=xt-(xt-$)*(ct/et),mt=(V()-.5)*.016,gt=(V()-.5)*.016,St=new tr(.035,.008,4,6);ct%2?Nu(u,"IRNNC",St,J+mt,pt,dt+gt,0,Math.PI/2,0):Nu(u,"IRNNC",St,J+mt,pt,dt+gt,0,0,0)}De(u,"STONE",.34,.12,.34,J,.06,dt,V()*.2)}}const E=[],A=[],C=new $t;for(let V=0;V<a;V++){const rt=-e/2+S*(V+.5),J=x[V%x.length],dt=(n.doorSide??0)!==0&&(n.doorSide<0&&V===0||n.doorSide>0&&V===a-1),xt=b+.55,$=b+s-.75,et=S-.44,ct=$-xt;if(dt){De(u,"WOOD_D",.12,2.15,.14,rt-et/2-.01,b+1.075,i/2+.02),De(u,"WOOD_D",.12,2.15,.14,rt+et/2+.01,b+1.075,i/2+.02),De(u,"WOOD_D",et+.26,.14,.14,rt,b+2.15,i/2+.02),De(u,"WOOD_D",et+.1,.07,.16,rt,b+.035,i/2+.02);const mt=new Q(new Dt(et/2-.03,2,.05),gn("woodAged",Lu));mt.position.set(rt-et/4,b+1,i/2+.06),C.add(mt);const gt=mt.clone();gt.position.x=rt+et/4,C.add(gt),A.push({node:mt,open:rt-et/4-(et/2-.02)},{node:gt,open:rt+et/4+(et/2-.02)});const St=new pe(.02,.02,.16,6);for(const vt of[rt-.08,rt+.08]){const Bt=new Q(St,yr());Bt.position.set(vt,b+1,i/2+.1),C.add(Bt)}if(c){const vt=new Q(new Dt(et,.5,.03),gn("noren",()=>new ut({color:2899555,roughness:.9})));vt.position.set(rt,b+2.35,i/2+.12),vt.castShadow=!0,C.add(vt)}continue}if(J===0)continue;const pt=new Q(new Dt(et+.1,ct+.1,.09),Ii());if(pt.position.set(rt,(xt+$)/2,i/2+.01),C.add(pt),J===1){const mt=new ut({color:15985881,roughness:.9,emissive:16762995,emissiveIntensity:0});E.push(mt);const gt=new Q(new Ee(et,ct),mt);gt.position.set(rt,(xt+$)/2,i/2+.072),C.add(gt);const St=Ii(),vt=4,Bt=3;for(let z=1;z<vt;z++){const te=new Q(new Dt(.045,ct,.03),St);te.position.set(rt-et/2+et*z/vt,(xt+$)/2,i/2+.08),C.add(te)}for(let z=1;z<Bt;z++){const te=new Q(new Dt(et,.045,.03),St);te.position.set(rt,xt+ct*z/Bt,i/2+.08),C.add(te)}}else{const mt=new Q(new Ee(et,ct),N1());mt.position.set(rt,(xt+$)/2,i/2+.068),C.add(mt);const gt=Ii();for(let vt=0;vt<=5;vt++){const Bt=new Q(new Dt(.05,ct,.04),gt);Bt.position.set(rt-et/2+et*vt/5,(xt+$)/2,i/2+.075),C.add(Bt)}const St=new Q(new Dt(et,.06,.04),gt);St.position.set(rt,(xt+$)/2,i/2+.075),C.add(St)}}if(C.traverse(V=>{V.isMesh&&(V.castShadow=!1,V.receiveShadow=!0)}),d.add(C),h>0){De(u,"WOOD",e*.95,.12,h,0,b+.12,i/2+h/2+.05);for(let V=0;V<=Math.round(e*.95/1.1);V++){const rt=-e*.95/2+e*.95*V/Math.round(e*.95/1.1);De(u,"STONE",.3,.3,.3,rt,.1,i/2+h+.02)}for(let V=0;V<=6;V++){const rt=-e*.9/2+e*.9*V/6;De(u,"WOOD_D",.09,.7,.09,rt,b+.5,i/2+h)}De(u,"WOOD_D",e*.9,.08,.1,0,b+.85,i/2+h)}{const V=new $t,rt=new Q(new Dt(e-.4,.08,i-.4),gn("woodNew",Du));rt.position.y=b+.04,rt.receiveShadow=!0,V.add(rt);const J=new Q(new Ee(e-.4,s-.3),new ut({color:10127984,roughness:1}));J.position.set(0,b+s/2,-i/2+.25),V.add(J);const dt=new Q(new Dt(1.7,.03,.9),new ut({color:10133611,roughness:1}));dt.position.set(-.6,b+.1,.3),V.add(dt);const xt=dt.clone();xt.position.x=1.2,V.add(xt);const $=new Q(new Dt(1.1,.32,.6),Ii());$.position.set(.2,b+.24,.3),V.add($);const et=new ut({color:4469538,emissive:16757854,emissiveIntensity:0});E.push(et);const ct=new Q(new _n(.09,10,8),et);ct.position.set(.2,b+s-.6,.3),V.add(ct);const pt=new Q(new pe(.008,.008,.7),yr());pt.position.set(.2,b+s-.25,.3),V.add(pt),V.traverse(mt=>{mt.isMesh&&(mt.castShadow=!1,mt.receiveShadow=!0)}),d.add(V)}U1(d,u,g,{shadow:!0,noCast:new Set(["IRNNC"])});const P=new $t,L=Math.tan(r)*(i/2+.9),I=R+.35,U=Math.hypot(i/2+.9,L)+.35,B=gn("tile",I1),W=gn("ridge",()=>new ut({color:3487549,roughness:.5,metalness:.1})),F=new ut({color:4010535,roughness:.95}),G=new Dt(.3,.07,.36),X=[],_t=[];for(const V of[1,-1]){const rt=new Dt(e+1.6,.12,U),J=V*(i/4+.22),dt=I+L/2;rt.applyMatrix4(new re().makeRotationX(V>0?r:-r)),rt.translate(0,dt,J),_t.push(rt);const xt=new Dt(e+1.5,.04,U*.98);xt.applyMatrix4(new re().makeRotationX(V>0?r:-r)),xt.translate(0,dt-.09,J);const $=new Q(on([xt],!1),F);$.receiveShadow=!0,P.add($);const et=Math.floor(U/.34),ct=Math.floor((e+1.4)/.32);for(let pt=0;pt<et;pt++)for(let mt=0;mt<ct;mt++){const gt=-((ct-1)*.32)/2+mt*.32+(t()-.5)*.015,St=-U/2+.2+pt*.34,vt=new O(gt,.1+(t()-.5)*.012,St).applyEuler(new yn(V>0?r:-r,0,0));X.push({p:[vt.x,vt.y+dt,vt.z+J],ry:(t()-.5)*.03,tone:.8+t()*.4})}}const yt=new Q(on(_t,!1),new ut({color:2894896,roughness:.9}));yt.castShadow=!0,P.add(yt);const kt=new we(G,B.clone(),X.length);{const V=new ae,rt=new Lt;X.forEach((J,dt)=>{V.position.set(...J.p),V.rotation.set(0,J.ry,0),V.updateMatrix(),kt.setMatrixAt(dt,V.matrix);const xt=J.tone*(1-l*.25);kt.setColorAt(dt,rt.setRGB(.32*xt+.1,.34*xt+.1,.38*xt+.12))}),kt.instanceMatrix.needsUpdate=!0,kt.instanceColor&&(kt.instanceColor.needsUpdate=!0)}kt.castShadow=!0,kt.receiveShadow=!0,P.add(kt);const Zt=new pe(.14,.14,.46,8,1,!1,0,Math.PI);Zt.rotateZ(Math.PI/2);const jt=Math.ceil((e+1.4)/.5);for(let V=0;V<jt;V++){const rt=new Q(Zt,W);rt.position.set(-(e+1.2)/2+.25+V*.5,I+L+.02,0),rt.castShadow=!0,P.add(rt)}const tt=new qr;tt.moveTo(-i/2,0),tt.lineTo(i/2,0),tt.lineTo(0,L),tt.closePath();const nt=new Xc(tt,{depth:.12,bevelEnabled:!1});nt.rotateY(Math.PI/2);for(const V of[e/2-.02,-e/2-.1]){const rt=new Q(nt,Iu());rt.position.set(V,R+.3,0),rt.castShadow=!0,P.add(rt)}if(o==="yosemune")for(const V of[1,-1]){const rt=new Q(new Dt(.14,U*.55,(i/2+.9)*1.02),yt.material);rt.position.set(V*(e/2+.55),I+L*.45,0),rt.rotation.z=V*.62,rt.castShadow=!0,P.add(rt)}if(o!=="yosemune"){const V=[];for(const J of[1,-1])for(const dt of[1,-1]){const xt=new Dt(.16,.09,U+.15);xt.applyMatrix4(new re().makeRotationX(dt>0?r:-r)),xt.translate(J*(e/2+.78),I+L/2+.13,dt*(i/4+.22)),V.push(xt)}const rt=new Q(on(V,!1),Ii());rt.castShadow=!0,rt.receiveShadow=!0,P.add(rt)}if(d.add(P),l>.15){const V=new Q(new Dt(e+.05,.5*l+.15,i+.05),new ut({color:3814700,roughness:1,transparent:!0,opacity:.25+l*.3,depthWrite:!1}));V.position.y=b+.25,V.renderOrder=2,d.add(V)}return d.traverse(V=>{V.isMesh&&V.material?.isMeshStandardMaterial&&Pu.registerWet&&Pu.registerWet(V.material)}),{group:d,glowMats:E,sliders:A,dims:{w:e,d:i,wallH:s},roofTopY:I+L}}function O1(n,t={}){if(!n||n.userData._upgraded)return n;n.userData._upgraded=!0;const e=new $t;e.name="hero_joinery_upgrade";const i=Ii(),s=yr(),r=(v,m,p,y,w,_)=>{const M=new Q(new Dt(v,m,p),i);return M.position.set(y,w,_),M.castShadow=!0,M.receiveShadow=!0,e.add(M),M},o=new Bi().setFromObject(n),a=o.max.x-o.min.x||9,l=o.max.z-o.min.z||7,c=(o.max.x+o.min.x)/2-n.position.x,h=(o.max.z+o.min.z)/2-n.position.z,d=rf();for(let v=-a/2;v<=a/2+.01;v+=1.15)for(const m of[-l/2-.15,l/2+.15]){const p=new Q(new Dt(.5,.4,.5),d);p.position.set(c+v,.14,h+m),p.receiveShadow=!0,p.castShadow=!1,e.add(p)}r(a*.98,.12,.1,c,t.nageshiY??2,h+l/2+.08);for(let v=-a/2+.8;v<a/2;v+=1.6)r(.24,.18,.3,c+v,t.eaveY??3.35,h+l/2+.3);{const v=[],m=(t.eaveY??3.35)+.4,p=.3,y=Math.max(8,Math.floor((m-p)/.09));for(const _ of[c-a/2+.35,c+a/2-.35]){const M=h+l/2+.5;for(let b=0;b<=y;b++){const R=new tr(.035,.008,4,6),x=new re().makeRotationFromEuler(new yn(0,b%2?Math.PI/2:0,0));x.setPosition(_,m-(m-p)*(b/y),M),R.applyMatrix4(x),v.push(R)}}const w=new Q(on(v,!1),s);v.forEach(_=>_.dispose()),w.castShadow=!1,w.receiveShadow=!0,e.add(w)}const u=new pe(.025,.025,.2,6);for(const v of[-.12,.12]){const m=new Q(u,s);m.position.set(c+(t.doorX??-2.2)+v,1.25,h+l/2+.12),e.add(m)}const f=new ut({color:4469538,emissive:16757854,emissiveIntensity:0}),g=new Q(new _n(.1,10,8),f);return g.position.set(c,2.6,h),e.add(g),n.userData.glowMats=[...n.userData.glowMats||[],f],n.add(e),n}const zn={strength:.45,gust(n){return this.strength*(.65+.35*Math.sin(n*.6)*Math.sin(n*.23+1.7))}},F1=["clear","windy","rainy","misty","snow"];function B1({scene:n,pondWaterMats:t=[],wetMats:e=[],heightFn:i=null,snowMats:s=[],dripPoints:r=[],basins:o=[]}={}){const a=Nn(777),l=Nn(778),c=new $t;c.name="weather",n?.add(c);let h="clear",d="clear",u=1,f=0,g=0;const v=typeof i=="function"?i:()=>0,m=Array.isArray(s)?s:[],p=800,y=new Float32Array(p*3);for(let J=0;J<p;J++)y[J*3]=(a()-.5)*60,y[J*3+1]=a()*18,y[J*3+2]=(a()-.5)*60;const w=new xe;w.setAttribute("position",new Oe(y,3));const _=new ns({color:11452368,size:.14,transparent:!0,opacity:0,depthWrite:!1}),M=new Ws(w,_);M.frustumCulled=!1,c.add(M);const b=new Un({color:13623530,transparent:!0,opacity:0,depthWrite:!1,side:Ue}),R=[],x=new Yc(.05,.09,12);for(let J=0;J<40;J++){const dt=new Q(x,b.clone());dt.rotation.x=-Math.PI/2;const xt=(a()-.5)*50,$=(a()-.5)*50;let et=.06;try{const ct=v(xt,$);Number.isFinite(ct)&&(et=ct+.03)}catch{}dt.position.set(xt,et,$),dt.userData.ph=a(),c.add(dt),R.push(dt)}const S=new ut({color:2106924,roughness:.05,metalness:.7,transparent:!0,opacity:0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),E=[];for(const J of r){const dt=.3+l()*.15,xt=new qn(dt,14);xt.rotateX(-Math.PI/2);let $=.045;try{const et=v(J.x,J.z);Number.isFinite(et)&&($=et+.025)}catch{}xt.translate(J.x,$,J.z),E.push(xt)}if(E.length){const J=on(E,!1);E.forEach(xt=>xt.dispose());const dt=new Q(J,S);c.add(dt)}const A=[];for(const[J,dt,xt]of o){const $=new Q(new qn(xt,20),S);$.rotation.x=-Math.PI/2,$.position.set(J,.045,dt),c.add($),A.push($)}const P=r.length*8,L=new Float32Array(Math.max(1,P)*3),I=new Float32Array(Math.max(1,P));for(let J=0;J<P;J++){const dt=r[J%Math.max(1,r.length)]||{x:0,z:0,top:4};L[J*3]=dt.x,L[J*3+1]=dt.top,L[J*3+2]=dt.z,I[J]=l()}const U=new xe;U.setAttribute("position",new Oe(L,3));const B=new ns({color:13623530,size:.09,transparent:!0,opacity:0,depthWrite:!1}),W=new Ws(U,B);W.frustumCulled=!1,c.add(W);const F=500,G=26,X=60,_t=new Float32Array(F*3),yt=new Float32Array(F),kt=new Float32Array(F);for(let J=0;J<F;J++)_t[J*3]=(a()-.5)*X,_t[J*3+1]=a()*G,_t[J*3+2]=(a()-.5)*X,yt[J]=.6+a()*.6,kt[J]=a()*Math.PI*2;const Zt=new xe;Zt.setAttribute("position",new Oe(_t,3));const jt=(()=>{const J=document.createElement("canvas");J.width=32,J.height=32;const dt=J.getContext("2d"),xt=dt.createRadialGradient(16,16,1,16,16,15);xt.addColorStop(0,"rgba(255,255,255,1)"),xt.addColorStop(.6,"rgba(255,255,255,0.8)"),xt.addColorStop(1,"rgba(255,255,255,0)"),dt.fillStyle=xt,dt.fillRect(0,0,32,32);const $=new bn(J);return $.colorSpace=ze,$})(),tt=new ns({map:jt,size:.16,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0,color:15922681}),nt=new Ws(Zt,tt);nt.frustumCulled=!1,nt.visible=!1,n?.add(nt);const V=new Lt(15265266);for(const J of m)!J||!J.color||J.userData._snowSeeded||(J.userData._snowSeeded=!0,J.userData._dryColor=J.color.clone(),J.userData._dryRough="roughness"in J?J.roughness:1);const rt={get state(){return u>=1?d:`${h}>${d}`},get wetness(){return f},setState(J){F1.includes(J)&&J!==d&&(h=u>=1?d:h,d=J,u=0)},update(J,dt){u=Math.min(1,u+J/3);const xt=u*u*(3-2*u),$=d==="rainy",et=d==="snow",ct=($?xt:1-xt)*(d==="rainy"?1:0)+(h==="rainy"&&d!=="rainy"?1-xt:0);g+=((d==="snow"?xt:h==="snow"?1-xt:0)-g)*Math.min(1,J*.8);const pt=d==="windy"?1.2:d==="rainy"?.8:d==="misty"?.15:d==="snow"?.55:.45;if(zn.strength+=(pt*(d==="windy"?1:xt||1)-zn.strength)*Math.min(1,J*1.2),d==="windy"&&(zn.strength+=(1.2-zn.strength)*Math.min(1,J)),_.opacity=ct*.75,_.opacity>.01){const gt=w.attributes.position.array,St=zn.gust(dt)*3.2;for(let vt=0;vt<p;vt++)gt[vt*3+1]-=J*11,gt[vt*3]+=St*J,gt[vt*3+1]<0&&(gt[vt*3+1]=15+a()*3,gt[vt*3]=(a()-.5)*60,gt[vt*3+2]=(a()-.5)*60);w.attributes.position.needsUpdate=!0;for(const vt of R){vt.material.opacity=ct*.6;const Bt=(dt*1.4+vt.userData.ph*7)%1;vt.scale.setScalar(.5+Bt*2.2),vt.material.opacity=ct*.6*(1-Bt)}}else for(const gt of R)gt.material.opacity=0;f+=((d==="rainy"?xt:d==="rainy"?1:h==="rainy"?1-xt:0)-f)*Math.min(1,J*.8);for(const gt of e)gt?.userData?._dry||(gt.userData._dry={r:gt.roughness??.85,e:gt.envMapIntensity??1,c:gt.color?gt.color.clone():null}),gt.roughness=Ke.lerp(gt.userData._dry.r,Math.min(.25,gt.userData._dry.r*.4),f),gt.envMapIntensity=Ke.lerp(gt.userData._dry.e,gt.userData._dry.e+.9,f),gt.userData._dry.c&&gt.color&&gt.color.copy(gt.userData._dry.c).multiplyScalar(Ke.lerp(1,.55,f));S.opacity=f*.8;const mt=.3+.7*f;for(const gt of A)gt.scale.set(mt,mt,1);if(B.opacity=ct*.85,B.opacity>.01&&r.length){const gt=U.attributes.position.array,St=zn.gust(dt)*.9;for(let vt=0;vt<P;vt++){const Bt=r[vt%r.length],z=(dt*2.2+I[vt]*7)%1;gt[vt*3]=Bt.x+St*z*.4,gt[vt*3+1]=Bt.top-z*(Bt.top-.1),gt[vt*3+2]=Bt.z}U.attributes.position.needsUpdate=!0}for(const gt of t)gt.roughness=Ke.lerp(.18,.05,f);if(nt.visible=g>.01,tt.opacity=.9*g,nt.visible){const St=zn.gust(dt)*(1.2+g*1);for(let vt=0;vt<F;vt++){let Bt=_t[vt*3+1]-yt[vt]*J,z=_t[vt*3]+(St+Math.sin(dt*1.3+kt[vt])*.25)*J;const te=_t[vt*3+2]+Math.cos(dt*1.1+kt[vt])*.2*J;Bt<=v(z,te)+.03&&(Bt=G*(.85+.15*Math.sin(kt[vt]+dt*.05)),z=(kt[vt]*97.31%1+1)%1*X-X/2),_t[vt*3]=z,_t[vt*3+1]=Bt,_t[vt*3+2]=te}Zt.attributes.position.needsUpdate=!0}if(m.length){const gt=g*.7;for(const St of m)!St||!St.color||!St.userData._snowSeeded||(St.color.copy(St.userData._dryColor).lerp(V,gt),"roughness"in St&&g>.001&&(St.roughness=St.userData._dryRough+(.9-St.userData._dryRough)*g*.85))}rt.rainK=ct,rt.mistK=d==="misty"?xt:h==="misty"?1-xt:0,rt.dimK=($?xt*.55:0)+(et?xt*.3:0),rt.snowK=g,rt.fogK=Math.max(rt.mistK,g*.6)},rainK:0,mistK:0,dimK:0,snowK:0,fogK:0};return rt}function z1(n,t={}){const e=new $t,i=wi(999),s=Array.isArray(t.leafSources)?t.leafSources:null;function r(_){if(!s||!s.length)return null;const M=s[_%s.length],R=(_*2654435761%1e3+1e3)%1e3/1e3*Math.PI*2+_%7*.13,x=(M.r||2.2)*(.35+.65*((_*40503%1e3+1e3)%1e3/1e3));return{x:M.x+Math.cos(R)*x,z:M.z+Math.sin(R)*x}}const o=170,a=new xe,l=new Float32Array(o*3),c=new Float32Array(o);for(let _=0;_<o;_++)l[_*3]=-22+i()*44,l[_*3+1]=.3+i()*6,l[_*3+2]=-14+i()*30,c[_]=i()*100;a.setAttribute("position",new Oe(l,3));const h=(()=>{const _=document.createElement("canvas");_.width=_.height=32;const M=_.getContext("2d"),b=M.createRadialGradient(16,16,1,16,16,15);return b.addColorStop(0,"rgba(255,240,214,1)"),b.addColorStop(1,"rgba(255,240,214,0)"),M.fillStyle=b,M.fillRect(0,0,32,32),new bn(_)})(),d=new Ws(a,new ns({map:h,size:.09,transparent:!0,opacity:.55,depthWrite:!1,color:16771264,sizeAttenuation:!0}));e.add(d);const u=40,f=new Ee(.17,.17),g=new we(f,n.mapleLeaf,u);g.castShadow=!1,g.receiveShadow=!1,g.frustumCulled=!1;const v=[],m=new Lt,p=[12597547,13849600,15105570,11088422];for(let _=0;_<u;_++){const M=r(_);v.push({bx:M?M.x:-6+(i()-.5)*30,bz:M?M.z:2+(i()-.5)*26,speed:.35+i()*.4,phase:i()*6.28,sway:.4+i()*.7,spin:1+i()*2}),m.setHex(p[Math.floor(i()*p.length)]),g.setColorAt(_,m)}g.instanceColor.needsUpdate=!0,e.add(g);const y=new ae;function w(_){const M=.5+zn.gust(_),b=a.attributes.position;for(let R=0;R<o;R++){const x=c[R];b.array[R*3]+=Math.sin(_*.3+x)*.0012*(.5+M),b.array[R*3+1]+=(.0016+Math.sin(_*.5+x*2)*8e-4)*(.5+M),b.array[R*3+1]>6.5&&(b.array[R*3+1]=.2)}b.needsUpdate=!0;for(let R=0;R<u;R++){const x=v[R];let E=4.8-(_*x.speed*(.6+M)+x.phase)%4.6;const A=x.bx+Math.sin(_*.9+x.phase)*x.sway*(.6+M),C=x.bz+Math.cos(_*.7+x.phase*1.3)*x.sway*.7;y.position.set(A,E,C),y.rotation.set(_*x.spin+x.phase,x.phase,_*x.spin*.7),y.scale.setScalar(1),y.updateMatrix(),g.setMatrixAt(R,y.matrix)}g.instanceMatrix.needsUpdate=!0}return w(.01),{group:e,update:w}}const Uu={type:"change"},Qc={type:"start"},af={type:"end"},Do=new ha,Ou=new mi,k1=Math.cos(70*Ke.DEG2RAD),qe=new O,Mn=2*Math.PI,Re={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ol=1e-6;class G1 extends am{constructor(t,e=null){super(t,e),this.state=Re.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gs.ROTATE,MIDDLE:Gs.DOLLY,RIGHT:Gs.PAN},this.touches={ONE:zs.ROTATE,TWO:zs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new Yn,this._lastTargetPosition=new O,this._quat=new Yn().setFromUnitVectors(t.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new su,this._sphericalDelta=new su,this._scale=1,this._panOffset=new O,this._rotateStart=new ht,this._rotateEnd=new ht,this._rotateDelta=new ht,this._panStart=new ht,this._panEnd=new ht,this._panDelta=new ht,this._dollyStart=new ht,this._dollyEnd=new ht,this._dollyDelta=new ht,this._dollyDirection=new O,this._mouse=new ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=V1.bind(this),this._onPointerDown=H1.bind(this),this._onPointerUp=W1.bind(this),this._onContextMenu=$1.bind(this),this._onMouseWheel=q1.bind(this),this._onKeyDown=K1.bind(this),this._onTouchStart=Z1.bind(this),this._onTouchMove=J1.bind(this),this._onMouseDown=X1.bind(this),this._onMouseMove=Y1.bind(this),this._interceptControlDown=Q1.bind(this),this._interceptControlUp=j1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Re.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Uu),this.update(),this.state=Re.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;qe.copy(e).sub(this.target),qe.applyQuaternion(this._quat),this._spherical.setFromVector3(qe),this.autoRotate&&this.state===Re.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Mn:i>Math.PI&&(i-=Mn),s<-Math.PI?s+=Mn:s>Math.PI&&(s-=Mn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(qe.setFromSpherical(this._spherical),qe.applyQuaternion(this._quatInverse),e.copy(this.target).add(qe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=qe.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new O(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=qe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Do.origin.copy(this.object.position),Do.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Do.direction))<k1?this.object.lookAt(this.target):(Ou.setFromNormalAndCoplanarPoint(this.object.up,this.target),Do.intersectPlane(Ou,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ol||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ol||this._lastTargetPosition.distanceToSquared(this.target)>ol?(this.dispatchEvent(Uu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Mn/60*this.autoRotateSpeed*t:Mn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){qe.setFromMatrixColumn(e,0),qe.multiplyScalar(-t),this._panOffset.add(qe)}_panUp(t,e){this.screenSpacePanning===!0?qe.setFromMatrixColumn(e,1):(qe.setFromMatrixColumn(e,0),qe.crossVectors(this.object.up,qe)),qe.multiplyScalar(t),this._panOffset.add(qe)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;qe.copy(s).sub(this.target);let r=qe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Mn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Mn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Mn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Mn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ht,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function H1(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function V1(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function W1(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(af),this.state=Re.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function X1(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Gs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Re.DOLLY;break;case Gs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Re.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Re.ROTATE}break;case Gs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Re.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Re.PAN}break;default:this.state=Re.NONE}this.state!==Re.NONE&&this.dispatchEvent(Qc)}function Y1(n){switch(this.state){case Re.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Re.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Re.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function q1(n){this.enabled===!1||this.enableZoom===!1||this.state!==Re.NONE||(n.preventDefault(),this.dispatchEvent(Qc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(af))}function K1(n){this.enabled!==!1&&this._handleKeyDown(n)}function Z1(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case zs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Re.TOUCH_ROTATE;break;case zs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Re.TOUCH_PAN;break;default:this.state=Re.NONE}break;case 2:switch(this.touches.TWO){case zs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Re.TOUCH_DOLLY_PAN;break;case zs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Re.TOUCH_DOLLY_ROTATE;break;default:this.state=Re.NONE}break;default:this.state=Re.NONE}this.state!==Re.NONE&&this.dispatchEvent(Qc)}function J1(n){switch(this._trackPointer(n),this.state){case Re.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Re.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Re.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Re.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Re.NONE}}function $1(n){this.enabled!==!1&&n.preventDefault()}function Q1(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function j1(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ty(n){const t=new Sn(45,window.innerWidth/window.innerHeight,.3,500);t.position.set(12.5,7,15.5);const e=new G1(t,n.domElement);e.target.set(0,2.2,1),e.enableDamping=!0,e.dampingFactor=.06,e.minDistance=5,e.maxDistance=48,e.maxPolarAngle=1.45,e.update();function i(){t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)}return window.addEventListener("resize",i),{camera:t,controls:e,onResize:i}}const ey=20260911,Ui=[{name:"hero",cx:0,cz:-1,w:9,d:7,kind:"hero"},{name:"A",cx:-10.5,cz:-1,w:6.5,d:6,kind:"home"},{name:"B",cx:9.8,cz:-.5,w:6,d:6.5,kind:"home"},{name:"shop1",cx:14,cz:13.5,w:7,d:5,kind:"shop"},{name:"shop2",cx:-13,cz:13.5,w:6.5,d:5,kind:"shop"},{name:"C",cx:-9,cz:-12,w:7,d:6,kind:"home"},{name:"D",cx:2,cz:-12.5,w:6.5,d:6,kind:"home"},{name:"E",cx:11.5,cz:-12,w:6,d:5.5,kind:"home"},{name:"F",cx:-19,cz:-3,w:5.5,d:6,kind:"home"},{name:"G",cx:-6,cz:21,w:6,d:5,kind:"home"},{name:"shed1",cx:19.5,cz:-4,w:3,d:2.5,kind:"shed"},{name:"shed2",cx:-20.5,cz:8,w:2.8,d:2.5,kind:"shed"}],ny={A:{seed:11,w:6.5,d:6,wallH:2.9,roofType:"kirizuma",pitch:30,facadeCols:4,doorSide:-1,engawa:.9,woodTone:.3,age:.7,chains:!0},B:{seed:22,w:6,d:6.5,wallH:3.3,roofType:"yosemune",pitch:32,facadeCols:3,doorSide:1,engawa:0,woodTone:.8,age:.2,chains:!0},shop1:{seed:33,w:7,d:5,wallH:3.4,roofType:"kirizuma",pitch:26,facadeCols:4,doorSide:0,engawa:1.4,woodTone:.6,age:.35,isShop:!0,chains:!0},shop2:{seed:44,w:6.5,d:5,wallH:3.2,roofType:"kirizuma",pitch:27,facadeCols:4,doorSide:0,engawa:1.2,woodTone:.4,age:.55,isShop:!0,chains:!0},C:{seed:55,w:7,d:6,wallH:3,roofType:"yosemune",pitch:31,facadeCols:4,doorSide:1,engawa:.9,woodTone:.5,age:.5},D:{seed:66,w:6.5,d:6,wallH:3.5,roofType:"kirizuma",pitch:33,facadeCols:3,doorSide:-1,engawa:0,woodTone:.75,age:.25},E:{seed:77,w:6,d:5.5,wallH:2.8,roofType:"kirizuma",pitch:29,facadeCols:3,doorSide:1,engawa:.8,woodTone:.35,age:.65},F:{seed:88,w:5.5,d:6,wallH:2.9,roofType:"yosemune",pitch:30,facadeCols:3,doorSide:-1,engawa:0,woodTone:.45,age:.6},G:{seed:99,w:6,d:5,wallH:3.1,roofType:"kirizuma",pitch:28,facadeCols:3,doorSide:1,engawa:.9,woodTone:.65,age:.3},shed1:{seed:111,w:3,d:2.5,wallH:2.2,roofType:"kirizuma",pitch:24,facadeCols:2,doorSide:0,engawa:0,woodTone:.2,age:.9,winLayout:[0,0]},shed2:{seed:122,w:2.8,d:2.5,wallH:2.1,roofType:"kirizuma",pitch:25,facadeCols:2,doorSide:0,engawa:0,woodTone:.25,age:.85,winLayout:[0,0]}};function iy(){for(let n=0;n<Ui.length;n++)for(let t=n+1;t<Ui.length;t++){const e=Ui[n],i=Ui[t],s=(e.w+i.w)/2+1-Math.abs(e.cx-i.cx),r=(e.d+i.d)/2+1-Math.abs(e.cz-i.cz);s>0&&r>0&&console.error(`[town] OVERLAP ${e.name}×${i.name} by ${s.toFixed(2)}×${r.toFixed(2)}m`)}}function sy(){const n=[[0,2.45,19,.55],[-8.5,.6,.55,4.2],[8.9,.6,.55,4.2],[.25,-5.05,6.4,.55],[-3.9,3.55,1.6,.7],[3.1,3.55,1.6,.7]],t=[],e=[];n.forEach(([r,o,a,l],c)=>{const h=new Ee(a,l);h.rotateX(-Math.PI/2),h.translate(r,.04,o),(c<4?t:e).push(h)});const i=new ut({color:3812896,roughness:1,metalness:0});i.polygonOffset=!0,i.polygonOffsetFactor=-1,i.polygonOffsetUnits=-1;const s=new $t;for(const r of[t,e]){const o=on(r,!1);r.forEach(a=>a.dispose()),s.add(new Q(o,i))}return s.traverse(r=>{r.isMesh&&(r.receiveShadow=!0)}),s}function ry({scene:n,heroGroup:t=null}={}){iy();const e=Nn(ey),i=new $t;i.name="town";const s=[];for(const g of Ui){if(g.kind==="hero"){t&&(t.position.set(g.cx,0,g.cz),i.add(t),s.push({name:"hero",group:t,glowMats:t.userData.glowMats||[],pos:t.position.clone()}));continue}const v={...ny[g.name],name:g.name},m=of(v);m.group.position.set(g.cx,0,g.cz),g.kind==="shop"&&(m.group.rotation.y=Math.PI),i.add(m.group),s.push({name:g.name,params:v,group:m.group,glowMats:m.glowMats,sliders:m.sliders||[],pos:m.group.position.clone()})}const r=oy(),o=new $t;o.name="ground_zoning";const a=new Q(new Ee(70,70),r.soil);a.rotation.x=-Math.PI/2,a.receiveShadow=!0,o.add(a);const l=(g,v,m,p,y,w=.02)=>{const _=new Q(new Ee(g,v),y);_.rotation.x=-Math.PI/2,_.position.set(m,w,p),_.receiveShadow=!0,o.add(_)};l(64,3,0,7,r.street),l(2,15,-5.9,-1.7,r.dirt),l(1.1,14.5,-5.9,-1.7,r.stonePath,.03),l(30,2,1,-7.5,r.dirt),l(26,2,-2,17.5,r.dirt),l(10,3.2,0,3.9,r.garden,.015),l(8,3,14,9.8,r.gravel,.015),l(7.5,3,-13,9.8,r.gravel,.015);{const g=new Dt(.5,.18,.3),v=64,m=new we(g,r.edging,v*2),p=new ae;let y=0;for(let w=0;w<v;w++)for(const _ of[5.35,8.65])p.position.set(-32+w*1+(e()-.5)*.05,.09,_),p.rotation.y=(e()-.5)*.06,p.updateMatrix(),m.setMatrixAt(y++,p.matrix);m.count=y,m.receiveShadow=!0,o.add(m)}i.add(o),i.add(ly(e)),i.add(cy(e)),i.add(sy()),i.add(hy()),i.add(uy(e)),n&&n.add(i);const c=[[-2.5,9.3],[8.5,9.3],[19.5,9],[-15.5,9.3],[-15,-6.8]],h=[];for(const[g,v]of c){let m=null,p=1/0;for(const M of s){const b=Ui.find(E=>E.name===M.name);if(!b)continue;const R=g-M.pos.x,x=v-M.pos.z,S=R*R+x*x;S<p&&(p=S,m={h:M,L:b})}if(!m||p>400)continue;const y=m.h.pos.x+Math.max(-m.L.w/2+.3,Math.min(m.L.w/2-.3,g-m.h.pos.x)),w=m.h.pos.z+Math.max(-m.L.d/2+.3,Math.min(m.L.d/2-.3,v-m.h.pos.z)),_=.6+(m.h.params?.wallH??3);h.push({a:[g,5.9,v],b:[y,_,w]})}const d=[],u={hero:{x:0,z:-1,w:9,d:7,rot:0,top:4.1},A:{x:-10.5,z:-1,w:6.5,d:6,rot:0,top:3.9},B:{x:9.8,z:-.5,w:6,d:6.5,rot:0,top:4.3},shop1:{x:14,z:13.5,w:7,d:5,rot:Math.PI,top:4.4},shop2:{x:-13,z:13.5,w:6.5,d:5,rot:Math.PI,top:4.2}};for(const g of Object.keys(u)){const v=u[g];for(const m of[1,-1]){const p=m*(v.w/2-.35),y=v.d/2+.5,w=v.rot===0?v.x+p:v.x-p,_=v.rot===0?v.z+y:v.z-y;d.push({x:w,z:_,top:v.top})}}return{group:i,houses:s,serviceDrops:h,dripPoints:d,basins:[[-5.9,8.2,1.3],[10.5,8.2,1.2],[.5,9.7,1]],lampPositions:[[-4.2,8.9],[6.5,8.9],[15.5,8.9],[-13.5,8.9],[-5,-6.5],[8,-6.5],[-6.4,1.5]],polePositions:c}}function oy(){const n=(e,i=.95)=>new ut({color:e,roughness:i}),t={soil:n(6050117),street:n(9407101,.9),dirt:n(7824462),stonePath:n(10132116),garden:n(6253386,1),gravel:n(10525320),edging:n(8224120)};for(const[e,i]of Object.entries(t))e!=="edging"&&(i.map=ay(e),i.needsUpdate=!0);return t}const al={};function ay(n){if(al[n])return al[n];let t=0;for(const a of n)t=t*31+a.charCodeAt(0)>>>0;const e=(()=>{let a=t||1;return()=>{a|=0,a=a+1831565813|0;let l=Math.imul(a^a>>>15,1|a);return l=l+Math.imul(l^l>>>7,61|l)^l,((l^l>>>14)>>>0)/4294967296}})(),i=128,s=document.createElement("canvas");s.width=s.height=i;const r=s.getContext("2d");r.fillStyle="#ffffff",r.fillRect(0,0,i,i);for(let a=0;a<900;a++){const l=205+Math.floor(e()*50);r.fillStyle=`rgb(${l},${l},${l})`,r.globalAlpha=.5,r.fillRect(e()*i,e()*i,1+e()*2.5,1+e()*2.5)}const o=new bn(s);return o.wrapS=o.wrapT=Xn,o.repeat.set(8,8),o.colorSpace=ze,al[n]=o,o}function ly(n,t){const e=new $t;e.name="stone_walls";const i=[[-16.5,2.8,-7.5,2.8,1.1],[5,2.8,12.5,2.8,1.1],[-13.5,-8.6,-4.5,-8.6,1],[8,18.2,-2.5,18.2,1],[17.8,11.5,21.5,11.5,1.2]],s=new Dt(.55,.32,.4),r=new ut({color:9145222,roughness:.95}),o=[];for(const[c,h,d,u,f]of i){const g=Math.hypot(d-c,u-h),v=Math.floor(g/.58),m=Math.atan2(d-c,u-h),p=Math.max(2,Math.round(f/.33));for(let y=0;y<v;y++)for(let w=0;w<p;w++){const _=(y+.5)/v;o.push({x:c+(d-c)*_+(n()-.5)*.04,z:h+(u-h)*_,y:.16+w*.32,ry:m+(n()-.5)*.08})}for(let y=0;y<v;y++){const w=(y+.5)/v;o.push({x:c+(d-c)*w,z:h+(u-h)*w,y:.16+p*.32+.06,ry:m,cap:!0})}}const a=new we(s,r,o.length),l=new ae;return o.forEach((c,h)=>{l.position.set(c.x,c.y,c.z),l.rotation.set(0,c.ry,0),l.scale.set(c.cap?1.15:1,c.cap?.45:1,c.cap?1.2:1),l.updateMatrix(),a.setMatrixAt(h,l.matrix)}),a.castShadow=!1,a.receiveShadow=!0,e.add(a),e}function cy(n){const t=new $t;t.name="fences_gates";const e=new ut({color:5916208,roughness:.85}),i=new ut({color:4141602,roughness:.85}),s={W:[],D:[]},r=(a,l,c,h,d,u,f,g=0)=>{const v=new Dt(l,c,h),m=new re().makeRotationY(g);m.setPosition(d,u,f),v.applyMatrix4(m),a.push(v)},o=[{x1:-4.6,z1:2.8,x2:4.6,z2:2.8,gate:.5},{x1:-16,z1:.5,x2:-16,z2:5.5,gate:-1},{x1:10.2,z1:11,x2:17.8,z2:11,gate:0}];for(const a of o){const l=Math.hypot(a.x2-a.x1,a.z2-a.z1),c=Math.floor(l/.28),h=Math.atan2(a.x2-a.x1,a.z2-a.z1)+Math.PI/2;for(let d=0;d<=c;d++){const u=d/c,f=a.x1+(a.x2-a.x1)*u,g=a.z1+(a.z2-a.z1)*u;a.gate&&Math.abs(u-.5)<.09||r(s.W,.16,1.1+(n()-.5)*.06,.04,f,.62,g,h)}r(s.D,l,.09,.06,(a.x1+a.x2)/2,1.05,(a.z1+a.z2)/2,h),r(s.D,l,.09,.06,(a.x1+a.x2)/2,.35,(a.z1+a.z2)/2,h),a.gate===.5?r(s.D,1.1,1.05,.06,(a.x1+a.x2)/2+.9,.6,(a.z1+a.z2)/2+.12,h):a.gate===-1&&r(s.D,1,1,.05,a.x1+.4,.58,a.z1+2.6,h+.6)}for(const[a,l]of[["W",e],["D",i]]){if(!s[a].length)continue;const c=new Q(on(s[a],!1),l);c.castShadow=!0,c.receiveShadow=!0,t.add(c)}return t}function hy(){const n=new $t;n.name="drainage";const t=new ut({color:3025960,roughness:.9}),e=new ut({color:1911347,roughness:.15,metalness:.6}),i=new ut({color:8224120,roughness:.95}),s=new Q(new Dt(60,.1,.5),t);s.position.set(0,.015,9.05),s.receiveShadow=!0,n.add(s);const r=new Q(new Ee(60,.3),e);r.rotation.x=-Math.PI/2,r.position.set(0,.05,9.05),n.add(r),n.userData.waterMat=e;const o=[];for(let l=-28;l<=28;l+=4){const c=new Dt(1.2,.06,.56);c.translate(l,.09,9.05),o.push(c)}const a=new Q(on(o,!1),i);a.receiveShadow=!0,n.add(a);for(const l of[-5.9,10.5]){const c=new Q(new Dt(1.6,.1,1.1),new ut({color:7033395,roughness:.8}));c.position.set(l,.12,9.05),c.castShadow=!0,c.receiveShadow=!0,n.add(c)}return n}function uy(n){const t=new $t;t.name="stepping_stones";const e=new ut({color:9408393,roughness:.95}),i=[],s=[{x:0,z0:5.4,z1:2.6,n:4},{x:-10.5,z0:5.4,z1:2.4,n:4},{x:9.8,z0:5.4,z1:3,n:3},{x:14,z0:8.6,z1:10.8,n:3},{x:-13,z0:8.6,z1:10.8,n:3}];for(const o of s)for(let a=0;a<o.n;a++){const l=(a+.5)/o.n,c=new pe(.32+n()*.1,.36,.09,7);c.translate(o.x+(n()-.5)*.3,.045,o.z0+(o.z1-o.z0)*l),i.push(c)}const r=new Q(on(i,!1),e);return r.receiveShadow=!0,t.add(r),t}const ll="audio/suzume.mp3",dy="audio/tsukimori-bgm.mp3",fy="Shamisen Nation (DOVA-SYNDROME)",Fu="Suzume",Lo=19e3,cl=14e3,Bu=8e3,mr=2200,hl=8;function lf(n,t,e){const i=e.w/2,s=e.d/2;return n>=e.cx-i&&n<=e.cx+i&&t>=e.cz-s&&t<=e.cz+s}function py(n,t,e){if(!e)return null;for(let i=0;i<e.length;i++){const s=e[i];if(s&&lf(n,t,s))return s}return null}function my(n,t,e,i,s){const r=s.w/2,o=s.d/2,a=s.cx-r,l=s.cx+r,c=s.cz-o,h=s.cz+o;if(n>=a&&n<=l&&t>=c&&t<=h||e>=a&&e<=l&&i>=c&&i<=h)return!0;const f=e-n,g=i-t;let v=0,m=1;if(Math.abs(f)<1e-12){if(n<a||n>l)return!1}else{let p=(a-n)/f,y=(l-n)/f;if(p>y){const w=p;p=y,y=w}if(p>v&&(v=p),y<m&&(m=y),v>m)return!1}if(Math.abs(g)<1e-12){if(t<c||t>h)return!1}else{let p=(c-t)/g,y=(h-t)/g;if(p>y){const w=p;p=y,y=w}if(p>v&&(v=p),y<m&&(m=y),v>m)return!1}return!0}function zu(n){return n<0?0:n>1?1:n}const ku=new WeakSet;function gy({camera:n=null,scene:t=null,zones:e=[]}={}){const o="inverse";let l=null,c=null,h=null,d=!1,u=null,f=!1,g=!1,v=!0,m=!1,p=!0,y=.9,w=!1,_=!1,M=.9,b=Lo,R=-1,x=Fu,S=null;const E=new O,A=new O;function C(F){g||(g=!0,console.warn(F))}function P(){w||d||n&&l&&(n.add(l),w=!0)}function L(){try{const F=l&&l.context;if(F&&F.state==="suspended"){const G=F.resume();G&&typeof G.catch=="function"&&G.catch(()=>{})}}catch{}}function I(){try{const F=l&&l.context;return!!F&&F.state==="running"}catch{return!1}}function U(){if(d||f||!u||!c)return!1;try{return c.isPlaying||c.play(),_=!1,!0}catch{return!1}}try{l=new nm,c=new rm(l),c.setRefDistance(2.5),c.setRolloffFactor(1.6),c.setMaxDistance(55),c.setDistanceModel(o),c.setLoop(!0),c.setVolume(y),h=l.context.createBiquadFilter(),h.type="lowpass",h.frequency.value=Lo,h.Q.value=.4,typeof c.setFilter=="function"&&c.setFilter(h),t&&typeof t.add=="function"&&t.add(c);try{const F=[{url:ll,label:Fu},{url:dy,label:fy}],G=X=>{if(X>=F.length){f=!0,C("[audio] missing "+ll+" (drop your file at public/"+ll+") and no bundled fallback — radio silent");return}new tu().load(F[X].url,_t=>{u=_t,x=F[X].label,f=!1;try{c.setBuffer(_t)}catch{}p&&v&&!m&&(P(),I()&&(L(),U()))},void 0,()=>{G(X+1)})};G(0)}catch{f=!0,C("[audio] loader unavailable — radio silent")}}catch{d=!0,f=!0,C("[audio] WebAudio unavailable — silent mode")}function B(){if(!n||!c)return R;c.getWorldPosition(E),A.setFromMatrixPosition(n.matrixWorld);const F=A.x-E.x,G=A.y-E.y,X=A.z-E.z;return Math.sqrt(F*F+G*G+X*X)}const W={source:c,loop:!0,volume:.9,refDistance:2.5,rolloffFactor:1.6,maxDistance:55,distanceModel:o,play(){return p=!0,d||f?!1:u?(P(),L(),U()):(P(),L(),!0)},pause(){if(p=!1,_=!1,!d&&c)try{c.pause()}catch{}},stop(){if(p=!1,_=!1,!d&&c)try{c.stop()}catch{}},mute(F){if(m=F!==!1,!d&&c&&m)try{c.setVolume(0)}catch{}},setVolume(F){const G=Number(F);y=Number.isFinite(G)?Math.min(1,Math.max(0,G)):y,m=!1,W.volume=y},loadCustom(F,G){if(!F||d)return!1;try{if(S&&S!==F)try{URL.revokeObjectURL(S)}catch{}return S=F,x=String(G||"Custom track").slice(0,48),f=!1,u=null,new tu().load(F,X=>{u=X;try{c&&c.setBuffer(X)}catch{}p&&v&&!m&&(P(),L(),U())},void 0,()=>{C("[audio] could not decode custom track (mp3/m4a/ogg/wav supported by your browser)")}),!0}catch{return!1}},setEnabled(F){if(v=!!F,v)p=!0,!d&&!f&&u?(P(),L(),U()):(P(),L());else if(p=!1,_=!1,!d&&c)try{c.pause()}catch{}},state(){const F=B(),G=zu(1-(b-mr)/(Lo-mr));let X=!1;try{X=!d&&!!c&&!!c.isPlaying}catch{X=!1}return{enabled:v,playing:X,track:x,missing:f,dist:F,muffleK:G}},update(F){let G=Number(F);if((!Number.isFinite(G)||G<0)&&(G=0),G>.1&&(G=.1),!n||!c)return;c.getWorldPosition(E),A.setFromMatrixPosition(n.matrixWorld);const X=A.x-E.x,_t=A.z-E.z,yt=Math.sqrt(X*X+(A.y-E.y)*(A.y-E.y)+_t*_t);R=yt;const kt=py(E.x,E.z,e),Zt=kt?lf(A.x,A.z,kt):!1;let jt=!1;if(!Zt&&e)for(let dt=0;dt<e.length;dt++){const xt=e[dt];if(!(!xt||xt===kt)&&my(A.x,A.z,E.x,E.z,xt)){jt=!0;break}}let tt,nt;if(yt>55)tt=mr,nt=0;else if(Zt)tt=Lo,nt=1;else if(!jt&&yt<hl)tt=cl,nt=.9;else{const dt=zu((yt-hl)/(55-hl));jt?(tt=Bu+(mr-Bu)*dt,nt=.55):(tt=cl+(mr-cl)*dt,nt=1)}let V=y*nt;(!v||m)&&(V=0);const rt=1-Math.exp(-6*G),J=1-Math.exp(-4*G);if(M+=(V-M)*(G===0?1:rt),b+=(tt-b)*(G===0?1:J),!d){try{h&&(h.frequency.value=b),c&&Math.abs(M-c.getVolume())>.002&&c.setVolume(M)}catch{}try{u&&c&&(M<.01&&(yt>55||!v||m)?c.isPlaying&&(c.pause(),_=!0):_&&v&&!m&&p&&yt<=55&&U())}catch{}}}};return W}function _y(n){if(!n||ku.has(n))return n;ku.add(n);const t=()=>{e();try{typeof n.setEnabled=="function"&&n.setEnabled(!0)}catch{}},e=()=>{try{document.removeEventListener("pointerdown",t),document.removeEventListener("keydown",t)}catch{}};try{document.addEventListener("pointerdown",t),document.addEventListener("keydown",t)}catch{}return n}function Gu(n,t,e){const i=Nn(n),s=document.createElement("canvas");s.width=128,s.height=256;const r=s.getContext("2d");r.fillStyle=t,r.fillRect(0,0,128,256),r.strokeStyle=e,r.lineCap="round";for(let a=0;a<3;a++){const l=34+i()*60,c=50+a*70;for(let h=0;h<4;h++)r.lineWidth=4+i()*7,r.beginPath(),r.moveTo(l-22+i()*10,c+(i()-.5)*30),r.quadraticCurveTo(l,c+(i()-.5)*34,l+22-i()*8,c+(i()-.5)*30),r.stroke();r.lineWidth=5,r.beginPath(),r.moveTo(l,c-26),r.lineTo(l+(i()-.5)*12,c+26),r.stroke()}const o=new bn(s);return o.colorSpace=ze,o}function xy({lampPositions:n=[],polePositions:t=[],serviceDrops:e=[]}={}){const i=Nn(4242),s=new $t;s.name="details";const r=[],o={wood:new ut({color:4864552,roughness:.85}),woodD:new ut({color:3352861,roughness:.9}),iron:new ut({color:2302758,roughness:.5,metalness:.85}),bronze:new ut({color:7035443,roughness:.35,metalness:.9}),paper:new ut({color:15788245,roughness:.9}),stone:new ut({color:9276808,roughness:.95}),leaf:new ut({color:4877109,roughness:1}),indigo:new ut({color:2833502,roughness:.95,side:Ue}),cream:new ut({color:14208952,roughness:.95,side:Ue})},a={},l=(S,E,A,C,P,L=0,I=0,U=0)=>{const B=new re().makeRotationFromEuler(new yn(I,L,U));B.setPosition(A,C,P),E.applyMatrix4(B),(a[S]||(a[S]=[])).push(E)},c=(S,E,A)=>new Dt(S,E,A),h=(S,E,A,C=8)=>new pe(S,E,A,C),d=[];for(const[S,E]of t)l("woodD",h(.11,.14,6.4),S,3.2,E),l("woodD",c(1.4,.1,.1),S,5.9,E),l("woodD",c(1.1,.09,.09),S,5.4,E),d.push(new O(S,5.9,E));const u=[],f=new ut({color:5591108,emissive:16760938,emissiveIntensity:0});n.forEach(([S,E],A)=>{l("iron",h(.06,.09,3.4),S,1.7,E),l("iron",c(.7,.07,.07),S+.3,3.35,E)});const g=[],v=(S,E,A,C)=>{const P=new tr(.34,.035,8,20);l("iron",P.clone(),S-.45,.34,E,A),l("iron",P.clone(),S+.45,.34,E,A);const L=(I,U,B,W)=>{const F=Math.hypot(B-I,W-U),G=h(.025,.025,F,6),X=new yn(0,A,Math.atan2(W-U,B-I)-Math.PI/2+C);G.applyMatrix4(new re().makeRotationFromEuler(X)),G.translate((I+B)/2+S,(U+W)/2,E),(a.iron||(a.iron=[])).push(G)};L(-.45,.34,0,.75),L(.45,.34,0,.75),L(0,.75,-.15,.95),L(-.45,.34,.45,.34),l("woodD",c(.28,.05,.22),S-.05,.78,E,A),l("iron",h(.02,.02,.4,6),S+.45,.95,E,0,0,Math.PI/2)};v(11.2,10.6,.2,.12),v(-10.8,10.7,-.15,-.1),v(-4.9,3.4,1.45,.14);const m=(S,E,A,C,P)=>{const L=Gu(P,"#2b3c5e","#e8e0cc"),I=new Q(new Dt(.9,1.8,.08),new ut({map:L,roughness:.85}));I.position.set(S,E,A),I.rotation.y=C,I.castShadow=!0,s.add(I)};m(10.6,2.6,10.9,.3,7),m(-10.2,2.5,10.9,-.25,21);for(const[S,E,A]of[[-7.2,2.9,5],[6.9,2.9,9],[5.4,-9.4,13]]){const C=Gu(A,"#4a3a28","#efe6d0"),P=new Q(new Dt(.34,.7,.05),new ut({map:C,roughness:.85}));P.position.set(S,2,E),s.add(P)}{const S=new Q(c(1,1.9,.7),new ut({color:12071722,roughness:.4,metalness:.3}));S.position.set(17.9,.95,10.6),S.castShadow=!0,s.add(S);const E=new ut({color:1118481,emissive:12576511,emissiveIntensity:1.2,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),A=new Q(new Ee(.8,1.2),E);A.position.set(17.9,1,10.24),A.rotation.y=Math.PI,s.add(A),s.userData.vendGlow=E}const p=(S,E,A=.45,C=0)=>l("wood",c(A,A,A),S,A/2,E,C);p(12.6,10.7,.5,.2),p(12.6,10.7+0,.42,.5),a.wood[a.wood.length-1].translate(0,.46,0),p(-14.8,10.6,.45,-.3),p(5.2,3.6,.4,.7);for(const[S,E]of[[1.8,3.2],[-2.2,3.3],[11.9,10.5]])l("woodD",h(.16,.13,.3),S,.15,E);const y=(S,E,A)=>{l("wood",c(1.6,.08,.4),S,.45,E,A),l("woodD",c(.08,.45,.36),S-.6,.22,E,A),l("woodD",c(.08,.45,.36),S+.6,.22,E,A)};y(.5,4.4,.1),y(-9.5,3.2,-.1);const w=[];for(let S=0;S<=6;S++)w.push(new ht(.14+S/6*.1,S/6*.28));const _=new js(w,10);for(const[S,E]of[[-3.4,3.1],[3.2,3],[10.9,10.8],[-11.5,10.6],[2.2,4.3]])l("stone",_.clone(),S,0,E),l("leaf",new _n(.2,7,6),S,.42,E);l("woodD",h(.2,.17,.5),-1.8,.25,3.5);for(let S=0;S<3;S++)l("cream",h(.015,.09,.9,6),-1.85+S*.06,.7,3.5+(S-1)*.05);for(const S of[-10,2,12])l("iron",c(.8,.04,.5),S,.1,9.05);const M=(S,E)=>{const A=Math.sin(S*127.1+E*311.7)*43758.5453;return A-Math.floor(A)};for(const[S,E]of[[5.6,.9],[-5.6,.9]])for(let A=0;A<14;A++){const C=Math.floor(A/5),P=A%5,L=c(.85+M(A,S)*.2,.15,.15),I=new re().makeRotationY((M(A,E)-.5)*.2);I.setPosition(S+(M(A,3)-.5)*.06,.1+C*.16,E+(P-2)*.17),L.applyMatrix4(I),(a.wood||(a.wood=[])).push(L)}{const S=new _n(.15,12,10),E=new ut({color:16773848,emissive:16757854,emissiveIntensity:1.2,roughness:.6});for(const[A,C]of[[-3.9,8.9],[6.8,8.9]]){const P=new Q(S,E);P.position.set(A,3.02,C),s.add(P)}}for(const[S,E]of[[13.5,"indigo"],[14.5,"cream"]]){const A=new Ee(.5,.9,1,2);A.translate(0,-.45,0);const C=new Q(A,o[E]);C.position.set(S,2.6,10.8),C.rotation.y=S<14?.15:-.12,C.castShadow=!0,s.add(C),r.push({mesh:C,phase:M(S,1)*6.28,amp:.08})}{const S=new Kn(.32,1),E=S.attributes.position;for(let P=0;P<E.count;P++){const L=1+.22*Math.sin(P*3.7)+.12*Math.sin(P*9.1+1.3);E.setXYZ(P,E.getX(P)*L,E.getY(P)*L*.72,E.getZ(P)*L)}S.computeVertexNormals();const A=new we(S,o.stone,5),C=new ae;[[-8.5,11.5],[-3.5,14.2],[-7.8,14.5],[-3.8,11.3],[-6,11]].forEach(([P,L],I)=>{C.position.set(P,.1,L),C.rotation.set(0,M(I,21)*6.28,0);const U=.7+M(I,22)*.9;C.scale.set(U,U*.8,U),C.updateMatrix(),A.setMatrixAt(I,C.matrix)}),A.instanceMatrix.needsUpdate=!0,A.castShadow=!0,A.receiveShadow=!0,s.add(A)}{const S=new Ee(.36,.3);S.translate(0,.15,0);const E=new we(S,o.leaf,24),A=new ae,C=[[-4.6,3.3],[-2,3.3],[1.5,3.3],[4.6,3.3],[-5.15,.9],[5.15,.9],[13,10.6],[15,10.6],[-14,10.6],[-12,10.6],[-6.2,1],[7.2,5.2]];let P=0;for(let L=0;L<12;L++)for(let I=0;I<2;I++){A.position.set(C[L][0],.02,C[L][1]),A.rotation.set(0,I*Math.PI/2+M(L,31)*.6,0);const U=.7+M(L,32+I)*.7;A.scale.set(U,U,U),A.updateMatrix(),E.setMatrixAt(P++,A.matrix)}E.instanceMatrix.needsUpdate=!0,E.castShadow=!1,E.receiveShadow=!1,s.add(E)}{const A=new Q(new Dt(.62,.9,.62),o.wood);A.position.set(15.5,.45,14.5),A.castShadow=!0,s.add(A);const C=new Q(new Dt(.55,.35,.3),o.wood);C.position.set(15.5,1.075,14.5),C.castShadow=!0,s.add(C);const P=new Q(new Dt(.5,.28,.02),o.iron);P.position.set(15.5,1.075,14.5-.16),s.add(P);const L=new pe(.025,.025,.03,10);for(const W of[-.12,-.05]){const F=new Q(L,o.bronze);F.rotation.x=Math.PI/2,F.position.set(15.5+W,.99,14.5-.18),s.add(F)}const I=new Q(new pe(.008,.012,.7,6),o.bronze);I.position.set(15.5+.18,1.55,14.5+.05),I.rotation.z=-.35,I.rotation.x=.12,s.add(I);const U=new ut({color:2102280,emissive:16757854,emissiveIntensity:1,roughness:.6}),B=new Q(new Dt(.3,.045,.012),U);B.position.set(15.5+.05,1.16,14.5-.175),s.add(B),s.userData.radioGlow=U,s.userData.radioPos=new O(15.5,1.15,14.5),s.userData.radioMeshes=[A,C,P,B]}const b=new Un({color:1118484});for(const S of e)try{const E=new O(S.a[0],S.a[1],S.a[2]),A=new O(S.b[0],S.b[1],S.b[2]);if(E.distanceTo(A)>22)continue;const C=E.clone().lerp(A,.5);C.y-=Math.min(.9,E.distanceTo(A)*.06);const P=new na(E,C,A),L=new Q(new sa(P,16,.012,5),b);s.add(L),l("cream",h(.03,.035,.09,8),A.x,A.y,A.z)}catch{}const R=S=>o[{WOOD:"wood",wood:"wood",woodD:"woodD",iron:"iron",stone:"stone",leaf:"leaf",cream:"cream"}[S]||"wood"];for(const S of Object.keys(a)){const E=new Q(on(a[S],!1),R(S));E.castShadow=S!=="leaf",E.receiveShadow=!0,s.add(E)}n.forEach(([S,E],A)=>{const C=new Q(new _n(.13,10,8),A<3?f:f.clone());if(C.position.set(S+.6,3.25,E),s.add(C),u.push(C.material),A<3){const P=new Kc(16760430,0,12,2);P.position.set(S+.6,3.2,E),s.add(P),g.push(P)}}),s.userData.lampGlows=u,s.userData.lampLights=g;const x=(S,E,A,C,P,L,I=0)=>{const U=new Ee(C,P,1,4);U.translate(0,-P/2,0);const B=new Q(U,o[L]);B.position.set(S,E,A),B.rotation.y=I,B.castShadow=!0,s.add(B),r.push({mesh:B,phase:i()*6.28,amp:.08+i()*.06})};for(let S=0;S<3;S++)x(12.4+S*.55,2.5,10.95,.45,.8,"indigo");for(let S=0;S<2;S++)x(-14.2+S*.55,2.4,10.95,.45,.7,"cream");x(1.5,2.2,2.62,.4,.6,"cream");for(let S=0;S<d.length-1;S++){const E=d[S],A=d[S+1];if(E.distanceTo(A)>16)continue;const C=E.clone().lerp(A,.5);C.y-=.7;for(const P of[0,-.22]){const L=new na(E.clone().add(new O(0,P,0)),C.clone().add(new O(0,P,0)),A.clone().add(new O(0,P,0))),I=new Q(new sa(L,20,.015,5),b);s.add(I)}}for(const[S,E]of[[-4.9,2.9],[4.9,2.9],[10.4,10.9],[-9.9,10.9]]){const A=new Q(h(.05,.07,.7,7),o.woodD);A.position.set(S,.55,E),A.castShadow=!0,s.add(A);for(let P=0;P<3;P++){const L=new Q(new _n(.32-P*.06,8,6),o.leaf);L.position.set(S+(i()-.5)*.2,1+P*.28,E+(i()-.5)*.2),L.scale.y=.75,L.castShadow=!0,s.add(L)}const C=new Q(_.clone(),o.stone);C.position.set(S,0,E),s.add(C)}return{group:s,cloth:r,lampGlows:u,lampLights:g}}function vy(n,t,e={strength:.5}){if(!n?.cloth)return;const i=.4+(e.strength??.5);for(const s of n.cloth)s.mesh.rotation.x=Math.sin(t*2.1+s.phase)*s.amp*i}const ul=["DAWN","DAY","GOLDEN","SUNSET","BLUE_HOUR","NIGHT","MOONLIT","RAIN_NIGHT","MIST_NIGHT"],Hu={DAWN:{sunC:16757370,sunI:1.6,el:12,az:95,sky:[10336470,15910043],fog:13620438,hemi:.5,hemiSky:12375016,hemiGround:9072466,exp:1,lit:0,lampK:1,starK:0},DAY:{sunC:16774112,sunI:2.6,el:62,az:150,sky:[7317724,13624303],fog:$c,hemi:.7,hemiSky:12375016,hemiGround:9072466,exp:1,lit:0,lampK:1,starK:0},GOLDEN:{sunC:16761963,sunI:2,el:18,az:235,sky:[8363204,16767392],fog:14207412,hemi:.55,hemiSky:15255968,hemiGround:6248010,exp:1.05,lit:0,lampK:1,starK:0},SUNSET:{sunC:16744013,sunI:1.4,el:6,az:262,sky:[5926824,16752228],fog:13216143,hemi:.45,hemiSky:9076672,hemiGround:4866104,exp:1.05,lit:.25,lampK:1,starK:.05},BLUE_HOUR:{sunC:8029951,sunI:.35,el:-4,az:290,sky:[1450573,12151374],fog:5922694,hemi:.35,hemiSky:4874144,hemiGround:3025448,exp:.9,lit:.8,lampK:1,starK:.3},NIGHT:{sunC:9414872,sunI:.22,el:28,az:300,sky:[395798,1055795],fog:725536,hemi:.18,hemiSky:2371676,hemiGround:658450,exp:.95,lit:1,lampK:1,starK:.9},MOONLIT:{sunC:12176639,sunI:1.1,el:48,az:40,sky:[330004,858160],fog:659746,hemi:.14,hemiSky:1713232,hemiGround:329484,exp:.85,lit:1,lampK:1,starK:1},RAIN_NIGHT:{sunC:5925514,sunI:.25,el:30,az:120,sky:[461588,1120294],fog:857119,hemi:.18,hemiSky:2765896,hemiGround:658448,exp:.8,lit:1,lampK:1.25,starK:.05},MIST_NIGHT:{sunC:6975622,sunI:.18,el:25,az:200,sky:[658708,1712168],fog:1317410,hemi:.2,hemiSky:3159615,hemiGround:790033,exp:.8,lit:1,lampK:1.1,starK:0}};function yy({renderer:n,scene:t,sun:e,hemi:i,skyMat:s=null,houses:r=[],lampGlows:o=[],lampLights:a=[],vendGlow:l=null,stars:c=null,moon:h=null}={}){let d="DAY",u="DAY",f=1,g=!1,v=0;const m=new Lt,p=new Lt,y=new Lt,w=new Lt,_=new Lt,M=new Lt,b=x("DAY"),R=x("DAY");function x(E){const A=Hu[E];return{...A,sky:[...A.sky]}}function S(E,A,C){const P=b,L=R,I=m.set(P.sunC).lerp(new Lt(L.sunC),A);if(e){const G=1-(C?.dimK??0);e.color.copy(I),e.intensity=Ke.lerp(P.sunI,L.sunI,A)*G;const X=Ke.degToRad(Ke.lerp(P.el,L.el,A)),_t=Ke.degToRad(Ke.lerp(P.az,L.az,A));e.position.set(Math.cos(X)*Math.cos(_t),Math.sin(X),Math.cos(X)*Math.sin(_t)).multiplyScalar(60)}if(p.set(P.sky[0]).lerp(new Lt(L.sky[0]),A),y.set(P.sky[1]).lerp(new Lt(L.sky[1]),A),s?.uniforms?(s.uniforms.topColor?.value.copy(p),s.uniforms.bottomColor?.value.copy(y),s.uniforms.top&&s.uniforms.top.value.copy(p),s.uniforms.mid&&s.uniforms.mid.value.copy(y),s.uniforms.bot&&s.uniforms.bot.value.copy(y).multiplyScalar(.82)):t?.background?.isColor&&t.background.copy(y),w.set(P.fog).lerp(new Lt(L.fog),A),t?.fog){t.fog.color.copy(w);const G=C?.mistK??0,X=C?.rainK??0,_t=C?.snowK??0;t.fog.near=Ke.lerp(42,10,G)-X*8-_t*6,t.fog.far=Ke.lerp(500,90,G)-X*180-_t*150}i&&(i.intensity=Ke.lerp(P.hemi,L.hemi,A),P.hemiSky!==void 0&&(i.color.copy(_.set(P.hemiSky).lerp(new Lt(L.hemiSky),A)),i.groundColor.copy(M.set(P.hemiGround).lerp(new Lt(L.hemiGround),A)))),n&&(n.toneMappingExposure=Ke.lerp(P.exp,L.exp,A));const U=Ke.lerp(P.lit??0,L.lit??0,A),B=Ke.lerp(P.lampK??1,L.lampK??1,A),W=Ke.lerp(P.starK??0,L.starK??0,A),F=U;for(const G of r)for(const X of G.glowMats||[])X.emissiveIntensity=F*(G.name==="hero"?1.6:.9);for(const G of o)G.emissiveIntensity=U*2.2*B;for(const G of a)G.intensity=U*14*B;l&&(l.emissiveIntensity=.4+U*1.6),c&&(c.material.opacity=U*W),h&&(h.material.opacity=U)}return{get state(){return f>=1?u:`${d}>${u}`},get auto(){return g},set(E){const A=String(E).toUpperCase().replace(/[\s-]+/g,"_");Hu[A]&&A!==u&&(Object.assign(b,x((f>=1,u))),d=f>=1?u:d,Object.assign(R,x(A)),u=A,f=0)},cycle(){this.set(ul[(ul.indexOf(u)+1)%ul.length])},toggleAuto(){return g=!g,g},update(E,A){g&&(v+=E,v>14&&(v=0,this.cycle())),f=Math.min(1,f+E/2.5);const C=f*f*(3-2*f);S(u,C,A)}}}function My(n){const t=new $t;t.name="night_sky";const e=400,i=new Float32Array(e*3);let s=-1627238007;const r=()=>(s=s*1103515245+12345&2147483647)/2147483647;for(let d=0;d<e;d++){const u=r()*Math.PI*2,f=r()*Math.PI*.45+.08,g=120;i[d*3]=Math.cos(u)*Math.cos(f)*g,i[d*3+1]=Math.sin(f)*g,i[d*3+2]=Math.sin(u)*Math.cos(f)*g}const o=new xe;o.setAttribute("position",new Oe(i,3));const a=new Ws(o,new ns({color:13623551,size:.7,transparent:!0,opacity:0,depthWrite:!1}));a.frustumCulled=!1,t.add(a);const l=new Q(new qn(3,24),new Un({color:15265791,transparent:!0,opacity:0,fog:!1}));l.position.set(-60,42,-80),l.lookAt(0,0,0),t.add(l);const c=new dc(10336488,0);c.position.copy(l.position),t.add(c),t.userData.setMoon=d=>{c.intensity=d*.35};const h=t.userData.setMoon;return n.add(t),{stars:a,moon:l,moonLight:c,setMoon:h}}function Sy(n){const t=n<0?0:n>1?1:n;return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}const be=[{n:"01 MOON FOREST ESTABLISHING",pos:[-28,14,-22],tgt:[0,2,4],fov:55,rail:{to:[-24,13,-18],tgtTo:null,period:14},mood:null,focus:{target:[0,2,4],dist:38},intent:"Moonlit canopy edge first, then eye drops to the lit village bowl."},{n:"02 LANTERN ALLEY",pos:[-5.9,1.6,-8],tgt:[-5.9,1.9,6],fov:50,rail:{to:[-5.9,1.6,1.5],tgtTo:[-5.9,1.9,8],period:12},mood:null,focus:{target:[-5.9,1.9,2],dist:10},intent:"Nearest lantern glow first, then eye travels down the alley line."},{n:"03 ROOF REVEAL",pos:[.5,5.4,1],tgt:[0,4,-1.2],fov:40,rail:{to:[3.8,6.6,6.8],tgtTo:[0,3.2,-1],period:12},mood:null,focus:{target:[0,4,-1],dist:3.5},intent:"Hero tile texture first, then rail pull reveals the ridge line."},{n:"04 MAPLE FOREGROUND",pos:[-4.9,2.7,5.6],tgt:[.5,2,-1.2],fov:45,rail:{to:[-3.6,2.6,5.2],tgtTo:null,period:10},mood:null,focus:{target:[.5,2,-1.2],dist:8.5},intent:"Red maple leaves first framing the edge, then hero house snaps into view."},{n:"05 POND",pos:[-8.6,1.7,13.4],tgt:[-4.2,.8,12.4],fov:50,rail:{to:[-3.4,1.7,13.4],tgtTo:[-6.5,.8,12.8],period:14},mood:null,focus:{target:[-6,.8,13],dist:4.5},intent:"Pond ripple highlight first, then lateral drift carries eye across reflections."},{n:"06 RAIN STREET",pos:[2.2,1.7,6.6],tgt:[-5,1.9,8.6],fov:50,rail:{to:[-1.5,1.7,6.4],tgtTo:null,period:11},mood:{time:"RAIN_NIGHT",wx:"rainy"},focus:{target:[-4.2,1.8,8.9],dist:7.5},intent:"Wet lamp halo first, then eye slides along the rain-streaked street."},{n:"07 MACHIYA ENTRANCE",pos:[6.6,1.9,6.2],tgt:[-.5,1.6,-.5],fov:40,rail:{to:[4.8,1.8,5],tgtTo:null,period:10},mood:null,focus:{target:[0,1.6,0],dist:9},intent:"Lattice doorway warmth first, then 3/4 facade and tiles read as one."},{n:"08 GARDEN PASSAGE",pos:[2.6,1.1,-6.8],tgt:[-2.2,1.3,-1.5],fov:50,rail:{to:[.8,1.1,-4.8],tgtTo:null,period:11},mood:null,focus:{target:[-2,1.2,-2],dist:6},intent:"Near planting leaves first, then low passage funnels eye to the court."},{n:"09 GOLDEN HOUR",pos:[-18,3.4,7.2],tgt:[12,2,7],fov:32,rail:{to:[-14,3,7.4],tgtTo:null,period:14},mood:{time:"GOLDEN",wx:"clear"},focus:{target:[0,2,7],dist:20},intent:"Long warm street axis first, then compressed facades glow edge to edge."},{n:"10 BLUE HOUR",pos:[12.5,5.5,-6],tgt:[0,2,4],fov:40,rail:{to:[9.5,5,-3.5],tgtTo:null,period:13},mood:{time:"BLUE_HOUR",wx:"clear"},focus:{target:[0,2,4],dist:16},intent:"Cool sky gradient first, then village lights detach from dusk."},{n:"11 MOONLIT ROOFLINE",pos:[14.5,4.6,10.5],tgt:[-20,5,-20],fov:24,rail:{to:[12.5,4.4,9],tgtTo:null,period:15},mood:{time:"MOONLIT",wx:"clear"},focus:{target:[-5,4.5,-6],dist:32},intent:"Stacked roof silhouettes first, then eye runs the telephoto line toward moon azimuth."},{n:"12 FINAL REVEAL",pos:[18,9.5,18.5],tgt:[-8,3,-8],fov:45,rail:{to:[15,8.5,16],tgtTo:null,period:16},mood:{time:"MIST_NIGHT",wx:"misty"},focus:{target:[-4,2.5,0],dist:34},intent:"Whole village bowl and moon glow first, then mist softens the far treeline."}];function wy(n,t){let e=0,i="orbit",s=!1,r=0;const o=9;let a=0,l=null,c=null;const h=new O().fromArray(be[0].pos);new O().fromArray(be[0].pos);const d=new O().fromArray(be[0].tgt);new O().fromArray(be[0].tgt),be[0].fov;function u(w,_){return _.fromArray(be[w].pos)}function f(w,_,M){M.fromArray(be[w].pos);const b=be[w].rail;if(b&&b.to){const R=b.to[0],x=b.to[1],S=b.to[2];M.set(M.x+(R-be[w].pos[0])*_,M.y+(x-be[w].pos[1])*_,M.z+(S-be[w].pos[2])*_)}return M}function g(w,_){return _.fromArray(be[w].tgt)}function v(w,_,M){M.fromArray(be[w].tgt);const b=be[w].rail;return b&&b.tgtTo&&M.set(M.x+(b.tgtTo[0]-be[w].tgt[0])*_,M.y+(b.tgtTo[1]-be[w].tgt[1])*_,M.z+(b.tgtTo[2]-be[w].tgt[2])*_),M}function m(w,_=2.5){const M=be.length,b=(w%M+M)%M;c={fp:n.position.clone(),tp:new O().fromArray(be[b].pos),ft:t?t.target.clone():new O().fromArray(be[b].tgt),tt:new O().fromArray(be[b].tgt),ff:n.fov,tf:be[b].fov,t:0,dur:Math.max(.01,_)},e=b,r=0,a=0}function p(w){u(w,n.position),t&&(g(w,t.target),t.update()),n.fov=be[w].fov,n.updateProjectionMatrix()}const y={get idx(){return e},get mode(){return i},get label(){return i==="orbit"?"orbit":be[e].n},get count(){return be.length},get names(){return be.map(w=>w.n)},setMode(w){return i=String(w),r=0,t&&(t.enabled=i!=="cine"),i==="cine"&&p(e),i},goTo(w,_=2.5,M=!1){const b=be.length,R=(w%b+b)%b;if(m(R,_),M&&l&&be[R].mood)try{l(be[R].mood)}catch{}return e},onMood(w){return typeof w=="function"&&(l=w),y},next(){return y.goTo(e+1,2.5,!1)},prev(){return y.goTo(e-1,2.5,!1)},toggleAdvance(){return s=!s,r=0,s},update(w){const _=Math.min(Math.max(w||0,0),.1);if(a+=_,i==="free"||i==="orbit"){let x=!1;try{x=!!(window.__explore&&window.__explore.on)}catch{}t&&!x&&t.update();return}if(s&&!c&&(r+=_,r>=o&&y.next()),c){c.t+=_;const x=Sy(c.t/c.dur);n.position.lerpVectors(c.fp,c.tp,x);const S=new O().lerpVectors(c.ft,c.tt,x);t&&t.target.copy(S),n.fov=c.ff+(c.tf-c.ff)*x,n.updateProjectionMatrix(),c.t>=c.dur&&(c=null,a=0),t&&t.update();return}const M=be[e].rail&&be[e].rail.period||12,b=.5+.5*Math.sin(a/M*Math.PI*2-Math.PI/2);f(e,b,h),v(e,b,d),n.position.copy(h),t&&t.target.copy(d);const R=be[e].fov;Math.abs(n.fov-R)>.01&&(n.fov+=(R-n.fov)*Math.min(1,_*2),n.updateProjectionMatrix()),t&&t.update()}};return y}function by(n,t){const e=[],i=[],s=new om,r=new ht;let o=0,a=0,l=0,c=0;function h(v,m){const p=t.getBoundingClientRect();r.set((v-p.left)/p.width*2-1,-((m-p.top)/p.height)*2+1),s.setFromCamera(r,n);const y=[];for(const M of e)y.push(M.node);for(const M of i)y.push(...M.meshes);const w=s.intersectObjects(y,!0);if(!w.length)return null;let _=w[0].object;for(const M of e){let b=_;for(;b;){if(b===M.node)return{kind:"slide",item:M};b=b.parent}}for(const M of i)for(const b of M.meshes){let R=_;for(;R;){if(R===b)return{kind:"action",item:M};R=R.parent}}return null}function d(v,m){if(!v)return null;const p={node:v,closed:v.position.x,open:m,t:0,target:0};return e.push(p),p}function u(v,m){!v||!v.length||typeof m!="function"||i.push({meshes:v.slice(),fn:m})}try{t.addEventListener("pointerdown",v=>{o=v.clientX,a=v.clientY,l=performance.now()}),t.addEventListener("pointerup",v=>{if(Math.hypot(v.clientX-o,v.clientY-a)>6||performance.now()-l>400)return;let p=null;try{p=h(v.clientX,v.clientY)}catch{p=null}if(p)if(p.kind==="slide")p.item.target=p.item.target>.5?0:1;else try{p.item.fn()}catch{}}),t.addEventListener("pointermove",v=>{const m=performance.now();if(m-c<120)return;c=m;let p=null;try{p=h(v.clientX,v.clientY)}catch{p=null}try{t.style.cursor=p?"pointer":""}catch{}})}catch{}function f(v){let m=Number(v);(!Number.isFinite(m)||m<0)&&(m=0),m>.1&&(m=.1);const p=1-Math.exp(-3*m||1e-4);for(const y of e){y.t+=(y.target-y.t)*(m===0?1:p),Math.abs(y.target-y.t)<.002&&(y.t=y.target);const w=y.t*y.t*(3-2*y.t);y.node.position.x=y.closed+(y.open-y.closed)*w}}return{addSlide:d,onTap:u,update:f,get count(){return e.length+i.length}}}const Vu=1.6,Ey=3.4;function Ty(n,t,e={}){const i=typeof e.heightFn=="function"?e.heightFn:()=>0,s=Array.isArray(e.solids)?e.solids:[];let r=!1,o=0,a=0;const l=new O(0,Vu,10),c={},h=new O,d=new O,u=new O;let f=-1,g=-1,v=0,m=0,p=0,y=0,w=0,_=0,M=0,b=0,R=!1,x=null;function S(I,U){let B=0;try{B=i(I,U)}catch{B=0}return(Number.isFinite(B)?B:0)+Vu}function E(I){for(const U of s){if(typeof U.blockWhen=="function"){let X=!1;try{X=!!U.blockWhen()}catch{X=!1}if(X)continue}const B=U.x0-.35,W=U.x1+.35,F=U.z0-.35,G=U.z1+.35;if(I.x>B&&I.x<W&&I.z>F&&I.z<G){const X=I.x-B,_t=W-I.x,yt=I.z-F,kt=G-I.z,Zt=Math.min(X,_t,yt,kt);Zt===X?I.x=B:Zt===_t?I.x=W:Zt===yt?I.z=F:I.z=G}}}function A(I,U){x||(x=document.createElement("div"),x.style.cssText="position:fixed;width:96px;height:96px;border-radius:50%;border:2px solid rgba(255,255,255,.35);background:rgba(255,255,255,.06);z-index:30;pointer-events:none;display:none;",document.body.appendChild(x)),x.style.display="block",x.style.left=I-48+"px",x.style.top=U-48+"px"}function C(){try{x&&(x.style.display="none")}catch{}}function P(I,U){return r=!!I,r?(U&&(l.set(U.x??0,0,U.z??10),o=U.yaw??0,a=0),l.y=S(l.x,l.z),n.position.copy(l),n.rotation.order="YXZ",n.rotation.set(a,o,0)):C(),r}try{window.addEventListener("keydown",F=>{c[F.code]=!0}),window.addEventListener("keyup",F=>{c[F.code]=!1});let I=-1,U=0,B=0;t.addEventListener("pointerdown",F=>{r&&(F.pointerType==="touch"?F.clientX<window.innerWidth/2&&f<0?(f=F.pointerId,v=p=F.clientX,m=y=F.clientY,A(v,m)):g<0&&(g=F.pointerId,w=M=F.clientX,_=b=F.clientY,R=!0):I<0&&(I=F.pointerId,U=F.clientX,B=F.clientY))});const W=F=>{F.pointerId===f&&(f=-1,C()),F.pointerId===g&&(g=-1,R=!1),F.pointerId===I&&(I=-1)};window.addEventListener("pointerup",W),window.addEventListener("pointercancel",W),window.addEventListener("pointermove",F=>{r&&(F.pointerId===f?(p=F.clientX,y=F.clientY):F.pointerId===g&&R?(o-=(F.clientX-M)*.0042,a-=(F.clientY-b)*.0042,a=Math.max(-1.48,Math.min(1.48,a)),M=F.clientX,b=F.clientY):F.pointerId===I&&F.buttons&&(o-=(F.clientX-U)*.0042,a-=(F.clientY-B)*.0042,a=Math.max(-1.48,Math.min(1.48,a)),U=F.clientX,B=F.clientY))})}catch{}function L(I){if(!r)return;let U=Number(I);(!Number.isFinite(U)||U<0)&&(U=0),U>.1&&(U=.1);let B=0,W=0;(c.KeyW||c.ArrowUp)&&(W+=1),(c.KeyS||c.ArrowDown)&&(W-=1),(c.KeyA||c.ArrowLeft)&&(B-=1),(c.KeyD||c.ArrowRight)&&(B+=1),f>=0&&(B+=(p-v)/40,W-=(y-m)/40);const F=Math.hypot(B,W);F>1&&(B/=F,W/=F),h.set(-Math.sin(o),0,-Math.cos(o)),d.set(-h.z,0,h.x),u.set(0,0,0).addScaledVector(h,W).addScaledVector(d,B),u.lengthSq()>0&&(u.normalize().multiplyScalar(Ey*U),l.x+=u.x,l.z+=u.z),E(l);const G=S(l.x,l.z);l.y+=(G-l.y)*Math.min(1,U*10+(U===0?1:0)),n.position.copy(l),n.rotation.order="YXZ";const X=1-Math.exp(-9*(U||.016));n.rotation.y+=(o-n.rotation.y)*X,n.rotation.x+=(a-n.rotation.x)*X,n.rotation.z=0,n.fov=55,n.updateProjectionMatrix()}return{update:L,setEnabled:P,get enabled(){return r}}}function Ay(n){n=n||{};var t=n.daytime||{},e=n.weather||{},i=n.cine||{},s=n.hudEl||null,r=n.audio||null,o=["DAWN","DAY","GOLDEN","SUNSET","BLUE_HOUR","NIGHT","MOONLIT","RAIN_NIGHT","MIST_NIGHT"],a={DAWN:"DAWN",DAY:"DAY",GOLDEN:"GOLDEN",SUNSET:"SUNSET",BLUE_HOUR:"BLUE",NIGHT:"NIGHT",MOONLIT:"MOON",RAIN_NIGHT:"RAIN",MIST_NIGHT:"MIST"},l=["clear","windy","rainy","misty","snow"],c={clear:"CLEAR",windy:"WINDY",rainy:"RAIN",misty:"MIST",snow:"SNOW"},h=["low","medium","high","cinematic"],d={low:"LOW",medium:"MED",high:"HIGH",cinematic:"CINE"},u={low:"off",medium:"off",high:"off",cinematic:"high"},f="20260911";function g(ot){return typeof ot=="function"?ot():ot}function v(ot,Ot){try{return ot==null?Ot:String(ot)}catch{return Ot}}function m(ot,Ot,Qt){var fe=document.createElement(ot);return Ot&&(fe.className=Ot),Qt!=null&&(fe.textContent=Qt),fe}function p(ot,Ot){try{ot.addEventListener("click",function(Qt){try{Qt.stopPropagation()}catch{}try{Ot()}catch{}})}catch{}}var y=!1;try{y=window.innerWidth<700}catch{y=!0}var w=y,_=!1,M="time",b=y?"medium":"high",R=!0,x=!1,S=!1,E="",A="",C=0,P=!1;try{P=/[?&]dev=1\b/.test(window.location.search||"")}catch{P=!1}var L='.tsuki-root{position:fixed;inset:0;z-index:20;pointer-events:none;font-family:system-ui,-apple-system,"Hiragino Sans","Noto Sans JP",sans-serif;color:#f2efe6;}.tsuki-root button,.tsuki-root input,.tsuki-l1,.tsuki-l2{pointer-events:auto;}.tsuki-l1{position:fixed;top:calc(env(safe-area-inset-top,0px) + 12px);right:calc(env(safe-area-inset-right,0px) + 12px);background:rgba(9,11,18,.55);-webkit-backdrop-filter:blur(18px) saturate(1.4);backdrop-filter:blur(18px) saturate(1.4);border:1px solid rgba(255,255,255,.14);border-radius:14px;box-shadow:0 4px 18px rgba(0,0,0,.35);padding:8px 10px;min-width:172px;max-width:62vw;display:flex;align-items:center;gap:8px;}.tsuki-title{font-size:12px;letter-spacing:.22em;font-weight:650;white-space:nowrap;}.tsuki-title .jp{font-weight:400;opacity:.75;letter-spacing:.35em;margin-left:6px;}#du-state{font-size:11px;letter-spacing:.08em;opacity:.85;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.tsuki-chev{margin-left:auto;min-width:44px;min-height:44px;border-radius:10px;border:1px solid rgba(255,255,255,.16);background:rgba(255,255,255,.07);color:#f2efe6;font-size:15px;line-height:1;}.tsuki-l2{position:fixed;top:calc(env(safe-area-inset-top,0px) + 96px);right:calc(env(safe-area-inset-right,0px) + 12px);width:300px;max-height:calc(100vh - 130px);overflow-y:auto;-webkit-overflow-scrolling:touch;background:rgba(9,11,18,.72);-webkit-backdrop-filter:blur(18px) saturate(1.4);backdrop-filter:blur(18px) saturate(1.4);border:1px solid rgba(255,255,255,.12);border-radius:16px;box-shadow:0 8px 28px rgba(0,0,0,.45);padding:6px 6px calc(env(safe-area-inset-bottom,0px) + 8px);}.tsuki-sec{border-top:1px solid rgba(255,255,255,.08);}.tsuki-sec:first-child{border-top:none;}.tsuki-sec-head{display:flex;width:100%;min-height:44px;align-items:center;background:none;border:none;color:#f2efe6;font-size:11px;letter-spacing:.24em;padding:6px 10px;}.tsuki-sec-head .dot{width:6px;height:6px;border-radius:50%;background:#c8a86a;margin-right:8px;opacity:.9;}.tsuki-sec-head .st{margin-left:auto;opacity:.55;font-size:10px;letter-spacing:.1em;}.tsuki-sec-body{padding:2px 8px 12px;display:none;}.tsuki-sec.open .tsuki-sec-body{display:block;}.tsuki-row{display:flex;flex-wrap:wrap;gap:6px;}.tsuki-seg{flex:1 1 30%;min-height:44px;min-width:44px;border-radius:9px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);color:#f2efe6;font-size:11px;letter-spacing:.06em;}.tsuki-seg.on{background:rgba(200,168,106,.22);border-color:rgba(200,168,106,.65);}.tsuki-shotname{font-size:17px;letter-spacing:.04em;margin:2px 2px 0;font-weight:650;}.tsuki-mood{font-size:11px;letter-spacing:.2em;opacity:.7;margin:2px;}.tsuki-counter{font-size:11px;letter-spacing:.14em;opacity:.55;margin:0 2px 8px;}.tsuki-trans{display:flex;gap:6px;margin-bottom:8px;}.tsuki-trans button{flex:1;min-height:44px;border-radius:9px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);color:#f2efe6;font-size:12px;}.tsuki-present-btn{width:100%;min-height:44px;border-radius:9px;border:1px solid rgba(200,168,106,.6);background:rgba(200,168,106,.14);color:#f2efe6;font-size:11px;letter-spacing:.22em;margin-bottom:8px;}.tsuki-l3{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:6px;}.tsuki-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px;}.tsuki-grid button{min-height:44px;border-radius:8px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04);color:#f2efe6;font-size:11px;text-align:left;padding:0 10px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.tsuki-grid button.on{background:rgba(200,168,106,.22);border-color:rgba(200,168,106,.65);}.tsuki-track{font-size:12px;margin:2px 2px 8px;opacity:.9;}.tsuki-vol{display:flex;align-items:center;gap:8px;margin:0 2px 6px;}.tsuki-vol input{flex:1;min-height:44px;}.tsuki-note{font-size:11px;line-height:1.5;opacity:.65;margin:4px 2px;font-family:ui-monospace,Menlo,monospace;}.tsuki-about{font-size:11px;line-height:1.9;letter-spacing:.18em;opacity:.8;padding:2px;}.tsuki-root.tsuki-present .tsuki-l1,.tsuki-root.tsuki-present .tsuki-l2{display:none;}.tsuki-anim{transition:opacity .22s ease-out,transform .22s ease-out;}.tsuki-dev{position:fixed;right:calc(env(safe-area-inset-right,0px) + 10px);bottom:calc(env(safe-area-inset-bottom,0px) + 10px);z-index:21;pointer-events:none;background:rgba(0,0,0,.72);border:1px solid rgba(255,255,255,.14);border-radius:8px;padding:8px 10px;font-family:ui-monospace,Menlo,monospace;font-size:10.5px;line-height:1.65;color:#cfe3cf;white-space:pre;max-width:70vw;overflow:hidden;}@media (max-width:700px) and (orientation:portrait){.tsuki-l2{top:auto;bottom:0;right:0;left:0;width:auto;border-radius:16px 16px 0 0;max-height:45vh;padding-bottom:calc(env(safe-area-inset-bottom,0px) + 10px);}.tsuki-l1{max-width:calc(100vw - 24px);}}@media (max-width:700px) and (orientation:landscape){.tsuki-l2{width:278px;max-height:72vh;top:calc(env(safe-area-inset-top,0px) + 88px);}}';try{var I=document.createElement("style");I.setAttribute("data-tsuki","1"),I.textContent=L,document.head.appendChild(I)}catch{}var U=m("div","tsuki-root tsuki-anim"),B=m("div","tsuki-l1"),W=m("div",null),F=m("div","tsuki-title","TSUKIMORI");try{var G=m("span","jp","月森");F.appendChild(G)}catch{}var X=m("div",null);try{X.id="du-state"}catch{}W.appendChild(F),W.appendChild(X);var _t=m("button","tsuki-chev","▾");try{_t.setAttribute("aria-label","toggle panel")}catch{}B.appendChild(W),B.appendChild(_t),U.appendChild(B);var yt=m("div","tsuki-l2");U.appendChild(yt);var kt={};function Zt(ot,Ot){var Qt=m("div","tsuki-sec"),fe=m("button","tsuki-sec-head");try{fe.setAttribute("aria-expanded","false")}catch{}var Ve=m("span","dot"),En=m("span",null,Ot),Zn=m("span","st","");fe.appendChild(Ve),fe.appendChild(En),fe.appendChild(Zn);var li=m("div","tsuki-sec-body");return Qt.appendChild(fe),Qt.appendChild(li),yt.appendChild(Qt),kt[ot]={sec:Qt,head:fe,tag:Zn},p(fe,function(){jt(M===ot?"":ot)}),li}function jt(ot){M=ot;try{for(var Ot in kt)if(Object.prototype.hasOwnProperty.call(kt,Ot)){var Qt=Ot===M,fe=kt[Ot];fe.sec.className="tsuki-sec"+(Qt?" open":"");try{fe.head.setAttribute("aria-expanded",Qt?"true":"false")}catch{}}}catch{}}var tt=Zt("time","TIME"),nt=m("div","tsuki-row");tt.appendChild(nt);var V={};o.forEach(function(ot){var Ot=m("button","tsuki-seg",a[ot]||ot);try{Ot.title=ot}catch{}nt.appendChild(Ot),V[ot]=Ot,p(Ot,function(){try{t.set(ot)}catch{}Qe()})});var rt=Zt("weather","WEATHER"),J=m("div","tsuki-row");rt.appendChild(J);var dt={};l.forEach(function(ot){var Ot=m("button","tsuki-seg",c[ot]||ot.toUpperCase());J.appendChild(Ot),dt[ot]=Ot,p(Ot,function(){try{e.setState(ot)}catch{}Qe()})});var xt=Zt("cine","CINEMATIC"),$=m("div","tsuki-shotname","—"),et=m("div","tsuki-mood","—"),ct=m("div","tsuki-counter","—");xt.appendChild($),xt.appendChild(et),xt.appendChild(ct);var pt=m("div","tsuki-trans"),mt=m("button",null,"◀"),gt=m("button",null,"❚❚ ADV"),St=m("button",null,"▶"),vt=m("button",null,"MODE"),Bt=m("button",null,"EXPLORE"),z=m("button",null,"AUTO");[mt,gt,St,vt,Bt,z].forEach(function(ot){pt.appendChild(ot)}),xt.appendChild(pt);var te=m("button","tsuki-present-btn","ENTER CINEMATIC");xt.appendChild(te);var ce=m("div","tsuki-l3"),N=m("div","tsuki-grid");ce.appendChild(N),xt.appendChild(ce);var T=[];function Y(){try{if(i&&Object.prototype.toString.call(i.names)==="[object Array]"&&i.names.length)return i.names}catch{}for(var ot=[],Ot=0;Ot<12;Ot++)ot.push("SHOT "+("0"+(Ot+1)).slice(-2));return ot}p(mt,function(){try{i.prev()}catch{}Qe()}),p(St,function(){try{i.next()}catch{}Qe()}),p(gt,function(){try{i.toggleAdvance()}catch{}R=!R,Qe()}),p(vt,function(){try{i.setMode(g(i.mode)==="cine"?"free":"cine")}catch{}Qe()});var Z=!1;p(Bt,function(){Z=!Z;try{window.dispatchEvent(new CustomEvent("tsuki-explore",{detail:Z}))}catch{}try{Bt.textContent=Z?"EXIT EXPLORE":"EXPLORE"}catch{}Qe()}),p(z,function(){try{t.toggleAuto()}catch{}x=!x,Qe()}),p(te,function(){un(!_)});function it(){try{N.textContent="",T=[];for(var ot=Y(),Ot=0;Ot<ot.length;Ot++)(function(Qt,fe){var Ve=m("button",null,("0"+(Qt+1)).slice(-2)+" · "+fe);N.appendChild(Ve),T.push(Ve),p(Ve,function(){try{i.setMode("cine")}catch{}try{i.goTo(Qt,2.5,!0)}catch{}Qe()})})(Ot,v(ot[Ot],"SHOT"))}catch{}}it();var Mt=Zt("audio","AUDIO"),bt=m("div","tsuki-track","♫ Suzume");Mt.appendChild(bt);var st=m("div","tsuki-row"),at=m("button","tsuki-seg","MUSIC OFF");st.appendChild(at),Mt.appendChild(st);var At=m("div","tsuki-vol"),qt=m("span",null,"VOL");try{qt.style.fontSize="11px",qt.style.opacity=".6"}catch{}var wt=m("input",null);try{wt.type="range",wt.min="0",wt.max="100",wt.value="80",wt.setAttribute("aria-label","music volume")}catch{}At.appendChild(qt),At.appendChild(wt),Mt.appendChild(At);var Et=m("div","tsuki-note","");if(Mt.appendChild(Et),!r){try{at.disabled=!0,wt.disabled=!0}catch{}Et.textContent="audio offline — running silent"}p(at,function(){if(r){var ot=!S;try{var Ot=r.state?r.state():null;Ot&&typeof Ot.enabled=="boolean"&&(ot=!Ot.enabled)}catch{}try{r.setEnabled(ot)}catch{}S=ot,Qe()}});try{wt.addEventListener("input",function(){if(r)try{var ot=parseFloat(wt.value)/100;ot>=0||(ot=0),ot>1&&(ot=1),r.setVolume(ot)}catch{}})}catch{}var Kt=m("button","tsuki-seg","+ ADD TRACK");try{Kt.title="Play your own audio file through the village radio"}catch{}st.appendChild(Kt);var Vt=null;try{Vt=document.createElement("input"),Vt.type="file",Vt.accept="audio/*,.mp3,.m4a,.ogg,.wav,.flac",Vt.style.display="none",document.body.appendChild(Vt),Vt.addEventListener("change",function(){try{var ot=Vt.files&&Vt.files[0];if(!ot||!r||typeof r.loadCustom!="function")return;var Ot=URL.createObjectURL(ot);if(r.loadCustom(Ot,ot.name.replace(/\.[^.]+$/,""))){try{r.setEnabled(!0)}catch{}S=!0}}catch{}try{Vt.value=""}catch{}Qe()})}catch{Vt=null}p(Kt,function(){if(r)try{Vt&&Vt.click()}catch{}});var ee=Zt("quality","QUALITY"),H=m("div","tsuki-row");ee.appendChild(H);var Tt={};h.forEach(function(ot){var Ot=m("button","tsuki-seg",d[ot]);H.appendChild(Ot),Tt[ot]=Ot,p(Ot,function(){lt(ot)})});function lt(ot){b=ot;try{window.dispatchEvent(new CustomEvent("tsuki-quality",{detail:ot}))}catch{}try{window.__post&&typeof window.__post.setQuality=="function"&&window.__post.setQuality(u[ot]||"off")}catch{}Qe()}var Rt=Zt("about","ABOUT"),Ut=m("div","tsuki-about","TSUKIMORI 月森 / THE MOON FOREST / LGCY STUDIOS / LGCY AI");Rt.appendChild(Ut);var ft=m("div","tsuki-note","BUILD "+ie+" · checking…");Rt.appendChild(ft);try{var Xt=null;try{Xt=new AbortController}catch{Xt=null}var Yt=setTimeout(function(){try{Xt&&Xt.abort()}catch{}},8e3),Ce=Xt?{signal:Xt.signal}:{};fetch("https://api.github.com/repos/krshforever/tsukimori/commits/main?per_page=1",Ce).then(function(ot){try{clearTimeout(Yt)}catch{}return ot.ok?ot.json():null}).then(function(ot){var Ot=ot&&ot.sha?String(ot.sha).slice(0,7):null,Qt=(ie.split(" ")[0]||"").toLowerCase(),fe;Ot?Qt&&Ot.toLowerCase()===Qt?fe="BUILD "+ie+" · ● CURRENT":fe="BUILD "+ie+" · ● UPDATE AVAILABLE ("+Ot+")":fe="BUILD "+ie+" · ● OFFLINE";try{ft.textContent=fe}catch{}try{window.__updateCheck={latest:Ot,current:Qt,build:ie}}catch{}}).catch(function(){try{clearTimeout(Yt)}catch{}try{ft.textContent="BUILD "+ie+" · ● OFFLINE"}catch{}try{window.__updateCheck={latest:null,current:null,build:ie}}catch{}})}catch{try{ft.textContent="BUILD "+ie}catch{}}var ie="dev";try{ie="90cabff 2026-09-13"}catch{}var He=null;if(P)try{He=m("pre","tsuki-dev","dev…"),document.body.appendChild(He)}catch{He=null}function un(ot){_=!!ot;try{if(_){try{var Ot=document.getElementById("caption");Ot&&(A=Ot.style.display,Ot.style.display="none")}catch{}try{s&&(E=s.style.display,s.style.display="none")}catch{}U.className="tsuki-root tsuki-anim tsuki-present";try{te.textContent="EXIT CINEMATIC"}catch{}}else{try{var Qt=document.getElementById("caption");Qt&&(Qt.style.display=A||"")}catch{}try{s&&(s.style.display=E||"")}catch{}U.className="tsuki-root tsuki-anim";try{te.textContent="ENTER CINEMATIC"}catch{}}}catch{}Qe()}function Sa(){w=!w;try{yt.style.display=w?"none":"",_t.textContent=w?"▸":"▾"}catch{}}p(_t,Sa);function rr(ot){try{if(ot&&ot.target&&ot.target.closest){var Ot=ot.target;if(Ot.closest(".tsuki-l2")||Ot.closest("input")||Ot.closest("select")||Ot.closest("textarea"))return}}catch{}un(!_)}try{window.addEventListener("dblclick",rr)}catch{}try{window.addEventListener("touchend",function(ot){try{var Ot=Date.now();Ot-C<350?(C=0,rr(ot)):C=Ot}catch{}},{passive:!0})}catch{}try{document.addEventListener("keydown",function(ot){try{ot&&ot.key==="Escape"&&_&&un(!1)}catch{}})}catch{}function Jr(){try{return v(g(t.state),"NIGHT")}catch{return"NIGHT"}}function or(){try{return v(g(e.state),"clear")}catch{return"clear"}}function Qe(){try{var ot=Jr(),Ot=or(),Qt=a[ot]||ot,fe=c[Ot]||String(Ot).toUpperCase(),Ve="FREE";try{Ve=v(g(i.label),"FREE")||"FREE"}catch{}var En=0,Zn=Y().length;try{En=parseInt(i.idx,10),En>=0||(En=0)}catch{}try{Zn=parseInt(i.count,10)||Y().length}catch{}var li=("0"+(En+1)).slice(-2),ki=("0"+Zn).slice(-2);try{X.textContent=Qt+" · "+fe+" · "+Ve}catch{}try{var Qr="";try{var gs=window.__perf?window.__perf():null;gs&&(Qr=" <"+gs.calls+"c "+gs.triangles+"t "+gs.fps+"f>")}catch{}s&&(s.textContent="TSUKIMORI 月森 — "+Qt+" · "+fe+" · "+Ve+" | SHOT "+li+"/"+ki+Qr)}catch{}try{var wa=Y();$.textContent=v(wa[En]||Ve,Ve),et.textContent=Qt+" · "+fe,ct.textContent="SHOT "+li+"/"+ki}catch{}try{for(var _s=0;_s<T.length;_s++)T[_s].className=_s===En?"on":""}catch{}try{for(var xs in V)Object.prototype.hasOwnProperty.call(V,xs)&&(V[xs].className="tsuki-seg"+(xs===ot?" on":""));for(var D in dt)Object.prototype.hasOwnProperty.call(dt,D)&&(dt[D].className="tsuki-seg"+(D===Ot?" on":""));for(var k in Tt)Object.prototype.hasOwnProperty.call(Tt,k)&&(Tt[k].className="tsuki-seg"+(k===b?" on":""))}catch{}try{var j=v(g(i.mode),"");vt.textContent="MODE "+(j?j.toUpperCase():"—"),gt.textContent=(R?"❚❚":"▶")+" ADV",z.textContent="AUTO "+(x?"ON":"OFF")}catch{}try{kt.time&&(kt.time.tag.textContent=Qt),kt.weather&&(kt.weather.tag.textContent=fe),kt.cine&&(kt.cine.tag.textContent=li+"/"+ki),kt.quality&&(kt.quality.tag.textContent=d[b]||"")}catch{}try{if(r&&typeof r.state=="function"){var q=null;try{q=r.state()}catch{q=null}q&&(typeof q.enabled=="boolean"&&(S=q.enabled),bt.textContent="♫ "+v(q.track,"Suzume")+(q.playing?" — PLAYING":""),at.textContent=S?"MUSIC ON":"MUSIC OFF",at.className="tsuki-seg"+(S?" on":""),Et.textContent=q.missing?"drop audio/suzume.mp3 into public/audio/":"")}else r&&(at.textContent=S?"MUSIC ON":"MUSIC OFF",Et.textContent="")}catch{}if(P&&He){var K=[];try{var Pt="n/a",Ft="n/a",Ct="n/a";try{var Nt=typeof window.__perf=="function"?window.__perf():window.__perf;Nt&&(Nt.fps!==void 0&&(Pt=String(Nt.fps)),Nt.calls!==void 0&&(Ft=String(Nt.calls)),Nt.tris!==void 0&&(Ct=String(Nt.tris)),Nt.draws!==void 0&&Ft==="n/a"&&(Ft=String(Nt.draws)),Nt.triangles!==void 0&&Ct==="n/a"&&(Ct=String(Nt.triangles)))}catch{}var Wt="n/a";try{window.__post&&(typeof window.__post.quality=="string"?Wt=window.__post.quality:typeof window.__post.getQuality=="function"?Wt=String(window.__post.getQuality()):typeof window.__post.current=="string"&&(Wt=window.__post.current))}catch{}var se="n/a",he="n/a";try{window.__cam&&(window.__cam.pos&&window.__cam.pos.length>=3&&(se=window.__cam.pos[0].toFixed(1)+","+window.__cam.pos[1].toFixed(1)+","+window.__cam.pos[2].toFixed(1)),window.__cam.tgt&&window.__cam.tgt.length>=3&&(he=window.__cam.tgt[0].toFixed(1)+","+window.__cam.tgt[1].toFixed(1)+","+window.__cam.tgt[2].toFixed(1)))}catch{}K.push("FPS "+Pt+"  calls "+Ft+"  tris "+Ct);try{var zt=null;try{zt=window.__updateCheck||null}catch{}var ve=zt?zt.latest?zt.latest.toLowerCase()===String(zt.current||"").toLowerCase()?"current":"BEHIND("+zt.latest+")":"offline":"";K.push("build "+ie+(ve?"  "+ve:""))}catch{try{K.push("build "+ie)}catch{}}K.push("gl WebGL2  post "+Wt+"  seed "+f),K.push("cam "+se+"  tgt "+he),K.push(Qt+" · "+fe+" · "+Ve),He.textContent=K.join(`
`)}catch{}}}catch{}}try{document.body.appendChild(U)}catch{}try{yt.style.display=w?"none":"",_t.textContent=w?"▸":"▾"}catch{}jt(M),Qe();var ms=null;try{ms=setInterval(Qe,250)}catch{}function $r(){try{ms&&clearInterval(ms)}catch{}try{window.removeEventListener("dblclick",rr)}catch{}try{U&&U.parentNode&&U.parentNode.removeChild(U)}catch{}try{He&&He.parentNode&&He.parentNode.removeChild(He)}catch{}}return{root:U,refresh:Qe,destroy:$r,setQuality:lt,setPresent:un}}const dl={geo:null};function cf(){return dl.geo||(dl.geo=new Dt(1,1,1)),dl.geo}const Wu={A:[[0,0,0,4],[2,0,2,4],[0,4,2,4],[0,2,2,2]],B:[[0,0,0,4],[0,4,2,4],[0,2,2,2],[0,0,2,0],[2,4,2,2],[2,2,2,0]],C:[[2,4,0,4],[0,4,0,0],[0,0,2,0]],D:[[0,0,0,4],[0,4,2,4],[2,4,2,0],[2,0,0,0]],E:[[2,4,0,4],[0,4,0,0],[0,0,2,0],[0,2,2,2]],F:[[2,4,0,4],[0,4,0,0],[0,2,2,2]],G:[[2,4,0,4],[0,4,0,0],[0,0,2,0],[2,0,2,2],[2,2,1,2]],H:[[0,0,0,4],[2,0,2,4],[0,2,2,2]],I:[[0,4,2,4],[1,4,1,0],[0,0,2,0]],J:[[2,4,2,0],[2,0,0,0],[0,0,0,2]],K:[[0,0,0,4],[2,4,0,2],[0,2,2,0]],L:[[0,4,0,0],[0,0,2,0]],M:[[0,0,0,4],[0,4,1,2],[1,2,2,4],[2,4,2,0]],N:[[0,0,0,4],[0,4,2,0],[2,0,2,4]],O:[[0,0,0,4],[0,4,2,4],[2,4,2,0],[2,0,0,0]],P:[[0,0,0,4],[0,4,2,4],[2,4,2,2],[2,2,0,2]],Q:[[0,0,0,4],[0,4,2,4],[2,4,2,0],[2,0,0,0],[1,1,2,0]],R:[[0,0,0,4],[0,4,2,4],[2,4,2,2],[2,2,0,2],[1,2,2,0]],S:[[2,4,0,4],[0,4,0,2],[0,2,2,2],[2,2,2,0],[2,0,0,0]],T:[[0,4,2,4],[1,4,1,0]],U:[[0,4,0,0],[0,0,2,0],[2,0,2,4]],V:[[0,4,1,0],[1,0,2,4]],W:[[0,4,0,0],[0,0,1,2],[1,2,2,0],[2,0,2,4]],X:[[0,0,2,4],[0,4,2,0]],Y:[[0,4,1,2],[2,4,1,2],[1,2,1,0]],Z:[[0,4,2,4],[2,4,0,0],[0,0,2,0]],0:[[0,0,0,4],[0,4,2,4],[2,4,2,0],[2,0,0,0],[0,0,2,4]],1:[[1,4,1,0],[0,0,2,0]],2:[[0,4,2,4],[2,4,2,2],[2,2,0,2],[0,2,0,0],[0,0,2,0]],3:[[0,4,2,4],[2,4,2,0],[0,2,2,2],[0,0,2,0]],4:[[0,4,0,2],[0,2,2,2],[2,4,2,0]],5:[[2,4,0,4],[0,4,0,2],[0,2,2,2],[2,2,2,0],[2,0,0,0]],6:[[2,4,0,4],[0,4,0,0],[0,0,2,0],[0,2,2,2],[2,2,2,0]],7:[[0,4,2,4],[2,4,0,0]],8:[[0,0,0,4],[0,4,2,4],[2,4,2,0],[2,0,0,0],[0,2,2,2]],9:[[2,0,0,0],[0,0,0,4],[0,4,2,4],[2,4,2,0],[0,2,2,2]]," ":[],"•":[[1,2,1,2]],".":[[1,0,1,0]],"-":[[0,2,2,2]],"/":[[0,0,2,4]],"&":[[0,0,0,4],[0,4,2,4],[2,4,2,2],[0,2,2,0],[2,0,0,0]],"©":null,月:[[0,0,0,4],[2,0,2,4],[0,4,2,4],[0,0,2,0],[0,2.6,2,2.6],[0,1.3,2,1.3]],森:"COMPOUND_MORI"};function Ry(){const n=[],t=(e,i,s,r)=>{n.push([e,i,e,i+r]),n.push([e-s/2,i+r,e+s/2,i+r]),n.push([e-s/2,i+r*.55,e+s/2,i+r*.55]),n.push([e-s*.28,i,e+s*.28,i])};return t(1,2.2,1.7,1.8),t(.35,0,1.1,1.9),t(1.65,0,1.1,1.9),n}function Cy(n){return n==="森"?Ry():n==="©"?[[.2,0,.2,4],[.2,4,1.8,4],[1.8,4,1.8,0],[1.8,0,.2,0],[.5,1.2,1.5,1.2],[.5,2.8,1.5,2.8]]:Wu[n]??Wu["-"]}function Qi(n,{size:t=.22,tracking:e=.32,thickness:i=.13,depth:s=.035}={}){const r=2*(t/4)+e*t,o=t/4,a=t/4,l=[];let c=0;const h=String(n).toUpperCase();for(const d of h){if(d===" "){c+=r;continue}for(const[u,f,g,v]of Cy(d)){const m=u===g&&f===v,p=c+u*o,y=f*a,w=c+g*o,_=v*a,M=w-p,b=_-y,R=Math.hypot(M,b),x=i*t;m?l.push({x:p,y,len:x*1.1,ang:0,t:x,sq:!0}):l.push({x:(p+w)/2,y:(y+_)/2,len:R+x*.9,ang:Math.atan2(b,M),t:x})}c+=r}return{strokes:l,width:Math.max(0,c-e*t),depth:s}}function gc(n,t,{depth:e=.035}={}){const i=[];for(const d of n){const{strokes:u}=Qi(d.text,d);for(const f of u)i.push({...f,ox:d.ox||0,oy:d.oy||0,oz:d.oz||0,depth:d.depth??e})}const s=cf(),r=new we(s,t,Math.max(1,i.length)),o=new re,a=new Yn,l=new yn,c=new O,h=new O;return i.forEach((d,u)=>{l.set(0,0,d.ang),a.setFromEuler(l),c.set(d.ox+d.x,d.oy+d.y,d.oz),h.set(d.len,d.t,d.depth),d.sq&&h.set(d.t,d.t,d.depth*.7),o.compose(c,a,h),r.setMatrixAt(u,o)}),r.instanceMatrix.needsUpdate=!0,r.castShadow=!1,r.receiveShadow=!1,r.frustumCulled=!0,r}function hf(n){const t=(e,i=.85,s={})=>new ut({color:e,roughness:i,metalness:0,...s});return{post:n?.woodAged||n?.woodDark||n?.wood||t(3812382,.9),beam:n?.woodDark||n?.woodAged||n?.wood||t(3023640,.9),board:n?.woodNew||n?.wood||t(4864550,.85),stone:n?.stone||n?.stoneDark||n?.rock||t(9078136,.95),bronze:n?.bronze||n?.brass||n?.iron||t(9202490,.45,{metalness:.85}),glyphMain:n?.brass||t(13215850,.38,{metalness:.9}),glyphSub:n?.bronze||t(10124623,.5,{metalness:.8}),wash:new ut({color:2826520,emissive:16763274,emissiveIntensity:.55,roughness:.6})}}function In(n,t,e,i,s,r,o,a=0){const l=new Q(cf(),i);return l.scale.set(n,t,e),l.position.set(s,r,o),l.rotation.y=a,l.castShadow=!0,l.receiveShadow=!0,l}function uf(n,t){const e=new qn(1,20),i=new Un({color:0,transparent:!0,opacity:.28,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),s=new Q(e,i);return s.rotation.x=-Math.PI/2,s.position.y=.03,s.scale.set(n,t,1),s.renderOrder=2,s}function Xu(n,t,e,i){const s=new qn(1,12),r=new Q(s,new ut({color:4872755,roughness:1}));return r.rotation.x=-Math.PI/2,r.position.set(t,.035,e),r.scale.set(n,n*.8,1),r.receiveShadow=!0,r.renderOrder=1,r}function Py(n,t={}){const e=hf(n),i=new $t;i.name="tsukimori-main-sign";const s=3.4,r=2.5,o=.16;for(const R of[-1,1])i.add(In(.5,.28,.5,e.stone,R*(s/2),.14,0)),i.add(In(o,r,o,e.post,R*(s/2),.28+r/2,0)),i.add(In(.22,.06,.22,e.bronze,R*(s/2),.3,0));i.add(In(s+.5,.14,.2,e.beam,0,.28+r+.07,0)),i.add(In(s+.3,.1,.12,e.beam,0,.62,0));const a=s-.2,l=1.35,c=1.72,h=.02,d=In(a,l,.07,e.board,0,c,h);i.add(d),i.add(In(a+.1,.05,.1,e.beam,0,c+l/2+.03,h)),i.add(In(a+.1,.05,.1,e.beam,0,c-l/2-.03,h));for(const R of[-1,1])for(const x of[-1,1])i.add(In(.09,.09,.1,e.bronze,R*(a/2-.05),c+x*(l/2-.05),h));const u=h+.035+.075,f=R=>-R/2,g=Qi("LGCY STUDIOS PRESENTS",{size:.115,tracking:.3}),v=Qi("TSUKIMORI",{size:.3,tracking:.3}),m=Qi("月森",{size:.3,tracking:.3}),p=Qi("THE MOON FOREST",{size:.13,tracking:.3}),y=Qi("BUILT WITH LGCY AI",{size:.1,tracking:.3}),w=gc([{text:"TSUKIMORI",size:.3,tracking:.3,ox:f(v.width),oy:c+.28,oz:u},{text:"月森",size:.3,tracking:.3,ox:f(m.width),oy:c-.14,oz:u}],e.glyphMain),_=gc([{text:"LGCY STUDIOS PRESENTS",size:.115,tracking:.3,ox:f(g.width),oy:c+.52,oz:u-.012},{text:"THE MOON FOREST",size:.13,tracking:.3,ox:f(p.width),oy:c-.44,oz:u-.012},{text:"BUILT WITH LGCY AI",size:.1,tracking:.3,ox:f(y.width),oy:c-.58,oz:u-.012}],e.glyphSub);i.add(w,_);const M=In(a-.2,.02,.02,e.wash,0,c+l/2-.06,h+.06);M.castShadow=!1,i.add(M);const b=new Z0(16767392,6,7,.55,.7,1.6);return b.position.set(0,2.6,1.6),b.target.position.set(0,c-.1,0),b.castShadow=!1,i.add(b,b.target),i.userData.signLight=b,i.userData.washMat=e.wash,i.add(uf(2.3,.8)),i.add(Xu(.3,-s/2,.32),Xu(.26,s/2,-.3)),i.position.set(...t.pos||[6.5,0,14.5]),i.rotation.y=t.ry??-.5,i}function Dy(n,t={}){const e=hf(n),i=new $t;i.name="lgcy-studio-plaque";for(const f of[-1,1])i.add(In(.07,.62,.07,e.post,f*.42,.31,0));const s=In(1.05,.52,.04,e.bronze,0,.62,.02);s.rotation.x=-.14,i.add(s);const r=.02+.02+.045,a=[{text:"LGCY STUDIOS",size:.085,tracking:.3,oy:.78},{text:"WORLD DESIGNED & BUILT WITH LGCY AI",size:.038,tracking:.28,oy:.66},{text:"PROCEDURAL ENVIRONMENT • CODE • AI",size:.038,tracking:.28,oy:.585},{text:"© 2026 LGCY STUDIOS",size:.038,tracking:.28,oy:.51}].map(f=>({...f,ox:-Qi(f.text,f).width/2,oz:r})),l=gc(a,e.glyphSub,{depth:.014});l.rotation.x=-.14,l.position.z=.005,i.add(l);const c=document.createElement("canvas");c.width=256,c.height=16;const h=c.getContext("2d");h.fillStyle="#3a2c16",h.fillRect(0,0,256,16),h.fillStyle="#d8b988",h.font="9px sans-serif",h.textAlign="center",h.fillText("tsukimori — moon forest district",128,11);const d=new bn(c);d.colorSpace=ze;const u=new Q(new Ee(.7,.044),new ut({map:d,roughness:.5,metalness:.6}));return u.position.set(0,.44,.045),u.rotation.x=-.14,i.add(u),i.add(uf(.8,.4)),i.position.set(...t.pos||[2.8,0,9.6]),i.rotation.y=t.ry??-.35,i}function Ly(n,t,e={}){const i=new $t;i.name="signage";const s=Py(t,{pos:e.signPos,ry:e.signRy}),r=Dy(t,{pos:e.plaquePos,ry:e.plaqueRy});return i.add(s,r),n.add(i),{group:i,sign:s,plaque:r,signLight:s.userData.signLight}}function Iy(n={}){let t=n.fps&&n.fps>0?Math.floor(n.fps):30,e=0;const i=[];let s=typeof n.onShot=="function"?n.onShot:null;const r=l=>1/l,o=(l,c)=>l*(1/c),a={get frame(){return e},get fps(){return t},get t(){return o(e,t)},get dt(){return r(t)},setFps(l){return l&&l>0&&(t=Math.floor(l)),t},register(l){return typeof l!="function"?()=>{}:(i.includes(l)||i.push(l),()=>a.unregister(l))},unregister(l){const c=i.indexOf(l);return c>=0&&i.splice(c,1),i.length},clear(){i.length=0},onShot(l){s=typeof l=="function"?l:null},step(l){const c=l&&l>0?l:r(t);e+=1;const h=o(e,t);for(let d=0;d<i.length;d++)i[d](c,h,e);return{frame:e,t:h,dt:c}},renderFrame(l){e=Math.max(0,Math.floor(l));const c=r(t),h=o(e,t);for(let d=0;d<i.length;d++)i[d](c,h,e);return{frame:e,t:h,dt:c}},reset(){return e=0,{frame:e,t:0,dt:r(t)}},renderShot(l,c){return s&&s(l,Math.max(0,Math.floor(c))),{shotId:l,...a.renderFrame(c)}},renderSequence(l,c,h,d){const u=d&&d>0?Math.floor(d):t,f=Math.max(0,Math.floor(c)),g=Math.max(f,Math.floor(h)),v=[],m=[];for(let p=f;p<=g;p++)v.push(p),m.push(p*(1/u));return{shotId:l,fps:u,frames:v,times:m}}};return a}const Vo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ir{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Ny=new pa(-1,1,1,-1,0,1);class Uy extends xe{constructor(){super(),this.setAttribute("position",new le([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new le([0,2,0,0,2,0],2))}}const Oy=new Uy;class jc{constructor(t){this._mesh=new Q(Oy,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Ny)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Fy extends ir{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof nn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Vr.clone(t.uniforms),this.material=new nn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new jc(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Yu extends ir{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class By extends ir{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class zy{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new ht);this._width=i.width,this._height=i.height,e=new vn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:sn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Fy(Vo),this.copyPass.material.blending=ei,this.timer=new Zc}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Yu!==void 0&&(o instanceof Yu?i=!0:o instanceof By&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ht);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ky extends ir{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Lt}render(t,e,i){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const Gy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Lt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Js extends ir{constructor(t,e=1,i,s){super(),this.strength=e,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new ht(t.x,t.y):new ht(256,256),this.clearColor=new Lt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new vn(r,o,{type:sn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new vn(r,o,{type:sn,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const u=new vn(r,o,{type:sn,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}const a=Gy;this.highPassUniforms=Vr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new nn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ht(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Vr.clone(Vo.uniforms),this.blendMaterial=new nn({uniforms:this.copyUniforms,vertexShader:Vo.vertexShader,fragmentShader:Vo.fragmentShader,premultipliedAlpha:!0,blending:$o,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Lt,this._oldClearAlpha=1,this._basic=new Un,this._fsQuad=new jc(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ht(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Js.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Js.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){const e=[],i=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(i*i))/i);const s=[],r=[];for(let o=1;o<t;o+=2){const a=e[o],l=o+1<t?e[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new nn({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ht(.5,.5)},direction:{value:new ht(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new nn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Js.BlurDirectionX=new ht(1,0);Js.BlurDirectionY=new ht(0,1);const Io={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Hy extends ir{constructor(){super(),this.isOutputPass=!0,this.uniforms=Vr.clone(Io.uniforms),this.material=new Fd({name:Io.name,uniforms:this.uniforms,vertexShader:Io.vertexShader,fragmentShader:Io.fragmentShader}),this._fsQuad=new jc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ge.getTransfer(this._outputColorSpace)===Ae&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===bc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ec?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Tc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===la?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Lr?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ir?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ac&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function Vy({renderer:n,scene:t,camera:e}){let i="off",s=null,r=null,o=1,a=1;function l(){try{const u=n.getSize(new ht);o=Math.max(1,Math.round(u.x)),a=Math.max(1,Math.round(u.y))}catch{o=o||1,a=a||1}}function c(){if(s)try{s.dispose()}catch{}s=null,r=null}function h(u){if(c(),l(),u==="low"||u==="high"){s=new zy(n),s.addPass(new ky(t,e)),u==="high"&&(r=new Js(new ht(o,a),.18,.6,.85),s.addPass(r)),s.addPass(new Hy);try{s.setSize(o,a)}catch{}}}return{get quality(){return i},setQuality(u){const f=u==="high"?"high":u==="low"?"low":"off";try{if(f===i&&(f==="off"||s))return i;if(f==="off")return c(),i="off",i;h(f),i=f}catch{try{c()}catch{}i="off"}return i},setSize(u,f){if(o=Math.max(1,Math.round(u)),a=Math.max(1,Math.round(f)),s)try{s.setSize(o,a)}catch{}},render(){if(i==="off"||!s)n.render(t,e);else try{s.render()}catch{n.render(t,e)}},dispose(){c(),i="off"}}}const Wy=20260912,qu=16;function Mr(n,t,e){let i=Math.imul(n,374761393)+Math.imul(t,668265263)+Math.imul(e,1442695041)|0;return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967296}function Xy(n,t){return Math.floor(Mr(n,t,Wy)*4294967296)}function _c(n,t,e){let i=(Xy(n,t)^Math.imul(e|0,2246822519))>>>0||1;return function(){i|=0,i=i+1831565813|0;let s=Math.imul(i^i>>>15,1|i);return s=s+Math.imul(s^s>>>7,61|s)^s,((s^s>>>14)>>>0)/4294967296}}function Yy(n,t,e){const i=Math.floor(n),s=Math.floor(t),r=n-i,o=t-s,a=r*r*(3-2*r),l=o*o*(3-2*o),c=Mr(i,s,e),h=Mr(i+1,s,e),d=Mr(i,s+1,e),u=Mr(i+1,s+1,e);return c+(h-c)*a+(d-c)*l+(c-h-d+u)*a*l}function th(n,t,e,i=4){let s=0,r=.5,o=1,a=0;for(let l=0;l<i;l++)s+=r*Yy(n*o,t*o,e+l*101),a+=r,r*=.5,o*=2.03;return s/a}function df(n,t){const e=Math.max(Math.abs(n)-24,0),i=Math.max(Math.abs(t-4)-22,0),s=Math.hypot(e,i),r=Math.min(Math.max(s/10,0),1);return r*r*(3-2*r)}const ff=[{cx:-8,cz:48.5,w:14,d:9,y:null},{cx:9,cz:50.5,w:12,d:8,y:null}];function pf(n){const t=(th(n.cx/42+7.3,n.cz/42-2.1,501,4)-.5)*11+Math.max(0,Math.hypot(n.cx,n.cz)-85)*.35;return Math.round(t*2)/2}function qy(n,t){let e=null;for(const i of ff){const s=Math.max(Math.abs(n-i.cx)-i.w/2,0),r=Math.max(Math.abs(t-i.cz)-i.d/2,0),o=Math.hypot(s,r),a=Math.min(Math.max(o/6,0),1),l=1-a*a*(3-2*a);l>0&&(!e||l>e.m)&&(e={m:l,y:pf(i)})}return e}function Ky(){return ff.map(n=>({...n,y:pf(n)}))}function Ku(n,t,e){const i=Math.min(Math.max((e-n)/(t-n),0),1);return i*i*(3-2*i)}function Te(n,t){const e=df(n,t);if(e<=0)return 0;const i=(th(n/42+7.3,t/42-2.1,501,4)-.5)*11,s=Math.hypot(n,t),r=Math.max(0,s-85)*.35;let o=(i+r)*e;const a=34+8*Math.sin(n*.045),l=Math.abs(t-a),c=-1.6+2.2*Ku(0,8,l),h=Ku(7,14,l);let d=c*(1-h)+o*h;const u=qy(n,t);return u&&u.m>0&&(d=u.y*u.m+d*(1-u.m)),d}function Wr(n,t){const i=Te(n+.6,t)-Te(n-.6,t),s=Te(n,t+.6)-Te(n,t-.6);return Math.hypot(i,s)/(2*.6)}function Zy(n,t,e,i=.45){const s=.65+.35*Math.sin(e*.6)*Math.sin(e*.23+1.7),r=Te(n,t),o=Te(n+1.5,t),a=Te(n,t+1.5),l=Math.min(1.5,Math.abs(o-r)+Math.abs(a-r)),h=1+.35*(1-Math.max(0,Math.min(1,(r+2)/6)))+l*.45;return i*2*s*h}function mf(n,t){const e=Te(n,t),i=Math.min(Math.max(1-e/9,0),1),s=th(n/25-3.7,t/25+9.2,777,3),r=34+8*Math.sin(n*.045),o=Math.max(0,1-Math.abs(t-r)/12);return Math.min(Math.max(i*.45+s*.35+o*.45,0),1)}function eh(n,t){if(df(n,t)<=0)return"village";const e=Te(n,t),i=mf(n,t),s=Wr(n,t),r=34+8*Math.sin(n*.045);return Math.abs(t-r)<5?"riverbank":e>9?"mountain":s>.45?"slope":i>.55?e<1.2?"field":"bamboo":i>.42?"maple":i>.25?"grassland":"outskirts"}function Oi(n,t){return[Math.floor(n/qu),Math.floor(t/qu)]}function ls(n,t,e,i){return`${n}_${t>=0?"e"+t:"w"+-t}_${e>=0?"s"+e:"n"+-e}_${String(i).padStart(3,"0")}`}const Wo=new Map;function Jy(n,t){return n+","+t}function cs(n,t,e){const i=Jy(n,t);return Wo.has(i)||Wo.set(i,[]),Wo.get(i).push(...e),e.length}function gf(){let n=0,t=0;for(const e of Wo.values())t++,n+=e.length;return{objects:n,chunks:t}}const Li=1,$y=.45,fl=0;function Qy(n){const t=Math.sin(n*127.1)*43758.5453;return t-Math.floor(t)}function jy({lampLights:n,lampGlows:t,houses:e}={}){const i=n||[],s=t||[],r=Math.min(i.length,s.length),o=[Li,Li,Li];let a=1;function l(h,d,u,f){const g=f>.05;f>=.85?(o[0]=Li,o[1]=Li,o[2]=Li):g?(o[0]=Li,o[1]=$y,o[2]=Li):(o[0]=fl,o[1]=fl,o[2]=fl);const v=Math.floor(d*2);if(a=u==="rainy"&&Qy(v)<.12?.25:1,!!g)for(let m=0;m<r;m++){const p=o[m%3]*a;i[m].intensity*=p;const y=s[m];y&&y.material&&typeof y.material.emissiveIntensity=="number"?y.material.emissiveIntensity*=p:y&&typeof y.emissiveIntensity=="number"&&(y.emissiveIntensity*=p)}}function c(){return{circuits:[o[0],o[1],o[2]],dip:a}}return{update:l,state:c}}function Zu(n){let t=n>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function tM(){const n=document.createElement("canvas");n.width=64,n.height=128;const t=n.getContext("2d"),e=t.createLinearGradient(0,128,0,0);e.addColorStop(0,"rgba(255,90,20,0)"),e.addColorStop(.35,"rgba(255,120,30,0.85)"),e.addColorStop(.65,"rgba(255,190,80,0.95)"),e.addColorStop(.9,"rgba(255,240,200,1)"),e.addColorStop(1,"rgba(255,255,240,0)"),t.fillStyle=e,t.fillRect(0,0,64,128),t.globalCompositeOperation="destination-in";const i=t.createRadialGradient(32,70,6,32,70,62);i.addColorStop(0,"rgba(0,0,0,1)"),i.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=i,t.fillRect(0,0,64,128);const s=new bn(n);return s.colorSpace=ze,s}function eM(){const n=document.createElement("canvas");n.width=64,n.height=64;const t=n.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,30);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.5,"rgba(255,255,255,0.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const i=new bn(n);return i.colorSpace=ze,i}const $i=60,Ju=2.2,pl=1.2;function nM(n,t,e,i){const s=typeof i=="number"&&isFinite(i)?i:0,r=new $t;r.position.set(t,s,e);const o=n&&n.stone||new ut({color:9080210,roughness:.95}),a=n&&n.wood||new ut({color:5913892,roughness:.9}),l=new we(new Dt(.28,.2,.22),o,8),c=new ae,h=Zu(61861);for(let A=0;A<8;A++){const C=A/8*Math.PI*2+(h()-.5)*.2;c.position.set(Math.cos(C)*.55,.1,Math.sin(C)*.55),c.rotation.set(0,-C+(h()-.5)*.4,0),c.scale.setScalar(.9+h()*.25),c.updateMatrix(),l.setMatrixAt(A,c.matrix)}l.instanceMatrix.needsUpdate=!0,l.receiveShadow=!0,r.add(l);const d=new we(new Dt(.12,.12,.9),a,4);for(let A=0;A<4;A++){const C=A/4*Math.PI*2+.4;c.position.set(Math.cos(C)*.18,.32,Math.sin(C)*.18),c.rotation.set(.62,C,0),c.scale.setScalar(1),c.updateMatrix(),d.setMatrixAt(A,c.matrix)}d.instanceMatrix.needsUpdate=!0,r.add(d);const u=tM(),f=new Un({map:u,transparent:!0,blending:$o,depthWrite:!1,side:Ue,fog:!1}),g=new Ee(.7,.9),v=new Q(g,f);v.position.y=.62;const m=new Q(g,f);m.position.y=.62,m.rotation.y=Math.PI/2,r.add(v,m);const p=new Float32Array($i*3),y=new Float32Array($i),w=new Float32Array($i),_=new Float32Array($i*2),M=Zu(24301);for(let A=0;A<$i;A++)y[A]=A/$i*(Ju/pl),w[A]=M()*Math.PI*2,_[A*2]=(M()-.5)*.3,_[A*2+1]=(M()-.5)*.3;const b=new xe;b.setAttribute("position",new Oe(p,3));const R=new ns({map:eM(),size:.55,transparent:!0,opacity:.32,depthWrite:!1,sizeAttenuation:!0,color:10133670}),x=new Ws(b,R);x.frustumCulled=!1,r.add(x);const S=new Kc(16747068,8,9,2);S.position.set(0,.85,0),S.castShadow=!1,r.add(S);function E(A,C,P){const L=typeof P=="number"&&isFinite(P)?P:0,I=1+.18*Math.sin(A*11)+.12*Math.sin(A*23+1.3),U=1+.18*Math.sin(A*12.3+2.1)+.12*Math.sin(A*27+.5);v.scale.set(I,1+.25*Math.sin(A*13+.7),1),m.scale.set(U,1+.25*Math.sin(A*14+2),1);for(let B=0;B<$i;B++){let W=y[B]+C;const F=Ju/pl;W>F&&(W-=F),y[B]=W;const G=.7+W*pl,X=L*W*.8;p[B*3]=_[B*2]+X+Math.sin(W*2+w[B])*.1,p[B*3+1]=G,p[B*3+2]=_[B*2+1]+Math.cos(W*1.7+w[B])*.1}b.attributes.position.needsUpdate=!0,S.intensity=8+2*Math.sin(A*11+Math.sin(A*23)*1.7)}return{group:r,update:E}}const ml=300,iM=3;function sM(n,t,e,i,s){const r=n==="village";switch(n){case"village":s.setRGB(.36,.32,.25);break;case"riverbank":s.setRGB(.52,.48,.38);break;case"mountain":s.setRGB(.42,.42,.44);break;case"slope":s.setRGB(.4,.36,.28);break;case"field":s.setRGB(.45,.48,.28);break;case"bamboo":s.setRGB(.3,.42,.24);break;case"maple":s.setRGB(.38,.36,.24);break;case"grassland":s.setRGB(.42,.46,.28);break;default:s.setRGB(.38,.36,.28)}const o=1-t*.25;return s.multiplyScalar(o),e>7&&s.lerp($u,Math.min((e-7)/8,.7)),r||(i>.5&&s.lerp($u,Math.min((i-.5)*1.8,.6)),t>.6&&i<.3&&s.lerp(rM,Math.min((t-.6)*2.2,.5)),t>.75&&i<.15&&s.lerp(oM,Math.min((t-.75)*2.4,.6)),(n==="maple"||n==="bamboo")&&s.lerp(aM,.45)),s}const $u=new Lt(.5,.5,.52),rM=new Lt(.32,.42,.22),oM=new Lt(.23,.19,.15),aM=new Lt(.36,.28,.18),lM=new Lt(.47,.43,.38),cM=new Lt(.3,.27,.22);function hM(n,t){let e=Math.imul(Math.round(n*13.7),374761393)+Math.imul(Math.round(t*13.7),668265263)|0;return e=Math.imul(e^e>>>13,1274126177),e^=e>>>16,(e>>>0)/4294967296}function uM(){const n=new $t;n.name="terrain";const t=Math.floor(ml/iM),e=new Ee(ml,ml,t,t);e.rotateX(-Math.PI/2);const i=e.attributes.position,s=new Float32Array(i.count*3),r=new Lt;for(let l=0;l<i.count;l++){const c=i.getX(l),h=i.getZ(l),d=Te(c,h);i.setY(l,d-.05);const u=mf(c,h),f=Wr(c,h);sM(eh(c,h),u,d,f,r);const g=hM(c,h);r.offsetHSL((g-.5)*.02,(g-.5)*.05,(g-.5)*.09);const v=f;v>.35&&r.lerp(lM,Math.min((v-.35)*1.6,.55)),v>.2&&u>.55&&r.lerp(cM,Math.min((u-.55)*1.8,.5)*Math.min((v-.2)*3,1)),s[l*3]=r.r,s[l*3+1]=r.g,s[l*3+2]=r.b}e.setAttribute("color",new Oe(s,3)),e.computeVertexNormals();const o=new ut({vertexColors:!0,roughness:.96,metalness:0});try{const l="vendor/ambientcg/Ground037/Ground037_1K-JPG_Color.jpg",c="vendor/commons/needle_litter/Forest_floor_with_loblolly_pine_needles.jpg",h=new Image,d=new Image;let u=0;const f=()=>{if(!(++u<2))try{const m=document.createElement("canvas");m.width=m.height=1024;const p=m.getContext("2d");p.drawImage(h,0,0,1024,1024),p.save(),p.translate(1024/2,1024/2),p.rotate(37*Math.PI/180),p.globalAlpha=.45;const y=1024*1.5;p.drawImage(d,-y/2,-y/2,y,y),p.restore();let w=918273;const _=()=>(w=w*1103515245+12345&2147483647)/2147483647;p.globalAlpha=.08;for(let b=0;b<2600;b++){const R=_()<.5?0:255;p.fillStyle=`rgb(${R},${R},${R})`,p.fillRect(_()*1024,_()*1024,1+_()*2,1+_()*2)}p.globalAlpha=1;const M=new bn(m);M.colorSpace=ze,M.wrapS=M.wrapT=Xn,M.repeat.set(75,75),M.anisotropy=4,M.needsUpdate=!0,o.map=M,o.needsUpdate=!0}catch{}},g=()=>{};h.onload=f,h.onerror=g,h.src=l,d.onload=f,d.onerror=g,d.src=c}catch{}try{const l=new zd,c=(d,u)=>(d.colorSpace=u?ze:kn,d.wrapS=d.wrapT=Xn,d.repeat.set(90,90),d.anisotropy=4,d.needsUpdate=!0,d),h=()=>{};l.load("vendor/ambientcg/Ground037/Ground037_1K-JPG_NormalGL.jpg",d=>{o.normalMap=c(d,!1),o.normalScale.setScalar(.6),o.needsUpdate=!0},void 0,h),l.load("vendor/ambientcg/Ground037/Ground037_1K-JPG_Roughness.jpg",d=>{o.roughnessMap=c(d,!1),o.needsUpdate=!0},void 0,h)}catch{}const a=new Q(e,o);return a.receiveShadow=!0,a.frustumCulled=!0,n.add(a),{group:n,mesh:a}}function dM(){const n=new $t;n.name="river";const t=60,e=8,i=[],s=[];for(let l=0;l<=t;l++){const c=-150+300*l/t,h=34+8*Math.sin(c*.045);if(i.push(c,-.8,h-e/2,c,-.8,h+e/2),l<t){const d=l*2;s.push(d,d+1,d+2,d+1,d+3,d+2)}}const r=new xe;r.setAttribute("position",new Oe(new Float32Array(i),3)),r.setIndex(s),r.computeVertexNormals();const o=new ut({color:3031624,roughness:.12,metalness:.75,envMapIntensity:1,transparent:!0,opacity:.94}),a=new Q(r,o);return a.receiveShadow=!0,n.add(a),{group:n,mesh:a,waterMat:o}}const fM=1374772973;function Qu(n){return n=n^fM|0,n=Math.imul(n^n>>>16,73244475),n=Math.imul(n^n>>>16,73244475),n=(n^n>>>16)>>>0,n/4294967296}function pM(n){const t=Math.floor(n),e=n-t,i=Qu(t),s=Qu(t+1),r=e*e*(3-2*e);return i+(s-i)*r}function mM(n){let t=0,e=.55,i=1,s=0;for(let r=0;r<3;r++){const o=pM(n*i);t+=(1-Math.abs(2*o-1))*e,s+=e,e*=.5,i*=2.13}return t/s}const gM=128,_M=[{r:260,hMax:42,tint:.55,yBase:-8},{r:312,hMax:58,tint:.72,yBase:-6},{r:368,hMax:74,tint:.88,yBase:-4}],xM=[{ang:0,depth:.75,width:.09},{ang:Math.PI,depth:.55,width:.07}];function vM(n){let t=1;for(const e of xM){let i=Math.abs(n-e.ang)%(Math.PI*2);i>Math.PI&&(i=Math.PI*2-i),t*=1-e.depth*Math.exp(-(i*i)/(e.width*e.width))}return Math.max(.08,t)}function yM(){const n=gM,t=_M,e=n+1,i=[],s=[],r=[],o=new Lt($c),a=o.clone().multiplyScalar(.42),l=new Lt;t.forEach((u,f)=>{const g=f*e*2;for(let v=0;v<=n;v++){const m=v/n*Math.PI*2,y=(6+mM(m*3.1+f*7.7)*(u.hMax-6))*vM(m),w=Math.cos(m)*u.r,_=Math.sin(m)*u.r;if(i.push(w,u.yBase,_),i.push(w,u.yBase+y,_),l.copy(a).lerp(o,u.tint),s.push(l.r,l.g,l.b),l.copy(a).lerp(o,Math.min(1,u.tint+y/u.hMax*.18)),s.push(l.r,l.g,l.b),v<n){const M=g+v*2;r.push(M,M+1,M+2,M+1,M+3,M+2)}}});const c=new xe;c.setAttribute("position",new le(i,3)),c.setAttribute("color",new le(s,3)),c.setIndex(r),c.computeBoundingSphere();const h=new Un({vertexColors:!0,fog:!0}),d=new Q(c,h);return d.castShadow=!1,d.receiveShadow=!1,d.frustumCulled=!1,d.renderOrder=1,d.name="farRidgeRing",d}function MM(n,t){let e=(Math.imul(n+1,2654435761)^Math.imul(t,40503))>>>0;return e^=e>>>15,e=Math.imul(e,2246822519),e^=e>>>13,(e>>>0)/4294967296}const SM=[{id:"r1",kind:"road",width:2.5,pts:[[0,24],[1,29],[2,32],[2,38],[1,42],[-4,41]]},{id:"r4",kind:"trail",width:1.2,pts:[[-4,41],[-12,40],[-20,38],[-26,40],[-31,44]]},{id:"r2",kind:"trail",width:1.2,pts:[[-24,10],[-36,2],[-48,-12],[-52,-30],[-44,-46]]},{id:"r3",kind:"trail",width:1.2,pts:[[24,5],[38,12],[52,26],[62,44]]}];function wM(n,t=2){const e=[];for(let i=0;i<n.length-1;i++){const[s,r]=n[i],[o,a]=n[i+1],l=Math.hypot(o-s,a-r),c=Math.max(1,Math.round(l/t));for(let h=0;h<c;h++)e.push([s+(o-s)*h/c,r+(a-r)*h/c])}return e.push(n[n.length-1].slice()),e}const _f=SM.map(n=>({...n,path:wM(n.pts)}));function xc(n,t){let e=1e9;for(const i of _f)for(const[s,r]of i.path){const o=Math.hypot(n-s,t-r);o<e&&(e=o)}return e}function bM(n){const t=new $t;t.name="roads";const e=new ut({color:7232066,roughness:.98}),i=new ut({color:6641207,roughness:1});let s=0;for(const r of _f){const o=r.width/2,a=[],l=[];r.path.forEach(([f,g],v)=>{const m=r.path[Math.min(v+1,r.path.length-1)],p=r.path[Math.max(v-1,0)];let y=m[0]-p[0],w=m[1]-p[1];const _=Math.hypot(y,w)||1;y/=_,w/=_;const M=-w,b=y,R=(MM(v,7)-.5)*.3,x=o+R,S=Te(f+M*x,g+b*x)+.07,E=Te(f-M*x,g-b*x)+.07,A=Te(f,g)+.07;if(a.push(f+M*x,S,g+b*x,f,A,g,f-M*x,E,g-b*x),v<r.path.length-1){const C=v*3;l.push(C,C+3,C+1,C+1,C+3,C+4,C+1,C+4,C+2,C+2,C+4,C+5)}});const c=new xe;c.setAttribute("position",new Oe(new Float32Array(a),3)),c.setIndex(l),c.computeVertexNormals();const h=new Q(c,r.kind==="road"?e:i);h.receiveShadow=!0,t.add(h);const[d,u]=Oi(r.path[0][0],r.path[0][1]);cs(d,u,[{id:ls("road",d,u,s++),type:"road",x:r.path[0][0],z:r.path[0][1],y:0,data:{road:r.id}}])}{const o=34+8*Math.sin(.09),a=Te(2,o-9),l=Te(2,o+9),c=Math.max(a,l)+.25,h=new ut({color:5916208,roughness:.85}),d=new ut({color:4141602,roughness:.85}),u=new Q(new Dt(2.2,.14,20),h);u.position.set(2,c,o),u.castShadow=!0,u.receiveShadow=!0,t.add(u);for(const v of[-1,1]){const m=new Q(new Dt(.09,.7,20),d);m.position.set(2+v*1,c+.42,o),m.castShadow=!0,t.add(m);for(const p of[-8,-4,0,4,8]){const y=new Q(new Dt(.12,1.1,.12),d);y.position.set(2+v*1,c-.1,o+p),t.add(y)}}const[f,g]=Oi(2,o);cs(f,g,[{id:ls("bridge",f,g,0),type:"bridge",x:2,z:o,y:c,data:{}}]);for(const v of[-1,1])for(const m of[-6,6]){const p=new Q(new Dt(.16,4.2,.16),d);p.position.set(2+v*.9,c-1.9,o+m),t.add(p)}}return{group:t}}function fs(n){let t=0,e=0;n.forEach(h=>{t+=h.attributes.position.count,e+=h.index.count});const i=new Float32Array(t*3),s=new Float32Array(t*3),r=new Float32Array(t*2),o=new Uint16Array(e);let a=0,l=0;n.forEach(h=>{const d=h.attributes.position,u=h.attributes.normal,f=h.attributes.uv;i.set(d.array,a*3),s.set(u.array,a*3),r.set(f.array,a*2);const g=h.index.array;for(let v=0;v<g.length;v++)o[l+v]=g[v]+a;a+=d.count,l+=g.length});const c=new xe;return c.setAttribute("position",new Oe(i,3)),c.setAttribute("normal",new Oe(s,3)),c.setAttribute("uv",new Oe(r,2)),c.setIndex(new Oe(o,1)),c}function EM(n,t,e,i=808){const s=new $t,r=wi(i),o=[],a=[],l=9;for(let d=0;d<l;d++){const u=t+(r()-.5)*1.6,f=e+(r()-.5)*1.6,g=3.4+r()*1.8,v=.03+r()*.07,m=r()*Math.PI*2,p=new $t,y=.5,w=.055;let _=0;for(;_<g;){const M=Math.min(y,g-_),b=new Q(new pe(w*.92,w,M,8),n.bamboo);b.position.y=_+M/2,b.castShadow=!0,p.add(b);const R=new Q(new pe(w*1.18,w*1.18,.035,8),n.bamboo);if(R.position.y=_+M,p.add(R),_>g*.35){const x=3+Math.floor(r()*3);for(let S=0;S<x;S++)a.push({x:u,y:_+M,z:f,top:_/g,seed:r()*10})}_+=M}p.position.set(u,0,f),p.rotation.set(Math.cos(m)*v,0,Math.sin(m)*v),p.userData.phase=r()*6.28,p.userData.baseRX=p.rotation.x,p.userData.baseRZ=p.rotation.z,o.push(p),s.add(p)}{const d=new Ee(.14,.62,1,2),u=d.attributes.position;for(let m=0;m<u.count;m++){const y=(u.getY(m)+.31)/.62;u.setX(m,u.getX(m)*(1-y*.85)),u.setZ(m,-Math.sin(y*Math.PI)*.06)}d.computeVertexNormals();const f=5,g=new we(d,n.bambooLeaf,a.length*f),v=[];a.forEach(m=>{for(let p=0;p<f;p++){const y=p/f*Math.PI*2+m.seed;v.push({p:[m.x+Math.cos(y)*.25,m.y+.05,m.z+Math.sin(y)*.25],rx:.9+r()*.5,ry:y,rz:.2,s:.8+r()*.5})}}),xi(g,v),g.castShadow=!1,s.add(g)}const c=_a(3.2,3.2,.5);c.position.set(t,.035,e),s.add(c);function h(d){for(const u of o)u.rotation.x=u.userData.baseRX+Math.sin(d*.9+u.userData.phase)*.02,u.rotation.z=u.userData.baseRZ+Math.cos(d*.7+u.userData.phase)*.02}return{group:s,update:h}}function TM(n,t,e,i=1555){const s=new $t,r=wi(i),o=[],a=new O(0,1,0);function l(p,y,w,_,M){const b=new pe(_*.62,_,w,7),R=new Q(b,n.trunk),x=p.clone().addScaledVector(y,w/2);R.position.copy(x),R.quaternion.setFromUnitVectors(a,y.clone().normalize()),R.castShadow=R.receiveShadow=!0,s.add(R);const S=p.clone().addScaledVector(y,w);if(M<=0||w<.35){o.push(S);return}o.push(S.clone().lerp(p,.4));const E=M>=3?3:2+(r()<.5?1:0);for(let A=0;A<E;A++){const C=y.clone();C.x+=(r()-.5)*1.1,C.z+=(r()-.5)*1.1,C.y+=r()*.45-.08,C.normalize(),l(S,C,w*(.55+r()*.15),_*.58,M-1)}}l(new O(0,0,0),new O(.08,1,.05),1.5,.22,4);function c(p){const y=new qr,w=7;for(let M=0;M<=20;M++){const b=M/20*Math.PI*2,R=Math.pow(Math.abs(Math.sin(b*w/2)),.7),x=p*(.35+.65*R),S=Math.cos(b)*x,E=Math.sin(b)*x;M===0?y.moveTo(S,E):y.lineTo(S,E)}return new da(y)}const h=fs([c(.17),c(.17).rotateY(Math.PI/2)]),d=340,u=new we(h,n.mapleLeaf,d),f=[],g=new Lt;for(let p=0;p<d;p++){const y=o[Math.floor(r()*o.length)],w=y.x+(r()-.5)*1.1,_=y.y+(r()-.5)*.9,M=y.z+(r()-.5)*1.1;f.push({p:[w,_,M],rx:r()*6.3,ry:r()*6.3,rz:r()*6.3,s:.75+r()*.7});const b=Ke.clamp((_-1.2)/2.2,0,1),R=r();Xo(p,77)<.14?g.setHex(5926960):R<b*.75?g.setHex(12728868):R<b*.75+.22?g.setHex(14711592):g.setHex(7178812),g.offsetHSL((Xo(p,11)-.5)*.08,0,(Xo(p,33)-.5)*.12),u.setColorAt(p,g)}xi(u,f),u.instanceColor.needsUpdate=!0,u.castShadow=!1,u.receiveShadow=!1,s.add(u),s.position.set(t,0,e);const v=_a(3.4,3.4,.5);v.position.y=.035,s.add(v);function m(p){s.rotation.z=Math.sin(p*.6)*.004,s.rotation.x=Math.cos(p*.45)*.003}return{group:s,update:m}}function xf(n,t=1,e=1,i=.6,s=0,r=0){const o=Nn(t*1e3+7),a=TM(n,0,0,t*7919+101),l=a.group||a;l.scale.setScalar(e*(.9+o()*.25));const c=new Lt(4880949).lerp(new Lt(12729374),i);return l.traverse(h=>{h.isMesh&&h.material?.color&&h.geometry?.type!=="CylinderGeometry"&&(h.material=h.material.clone(),h.material.color.copy(c).offsetHSL((o()-.5)*.03,0,(o()-.5)*.06))}),l.rotation.y=o()*6.28,l.position.set(s,0,r),l.userData.tick=a.update||null,l.userData.sway={amp:.02+o()*.02,freq:.8+o()*.6,ph:o()*6.28},l}function vf(n,t=1,e=0,i=0){const s=Nn(t*500+3),r=EM(n,0,0,t*4153+7),o=r.group||r;return o.rotation.y=s()*6.28,o.scale.setScalar(.85+s()*.4),o.position.set(e,0,i),o.userData.tick=r.update||null,o.userData.sway={amp:.015+s()*.02,freq:1.1+s()*.7,ph:s()*6.28},o}function Xo(n,t){let e=(Math.imul(n+1,2654435761)^Math.imul(t,40503))>>>0;return e^=e>>>15,e=Math.imul(e,2246822519),e^=e>>>13,(e>>>0)/4294967296}function AM(){const n=document.createElement("canvas");n.width=64,n.height=64;const t=n.getContext("2d");t.fillStyle="#000",t.fillRect(0,0,64,64),t.fillStyle="#fff";for(const[i,s,r]of[[14,9,-6],[30,11,0],[46,8,7]])t.beginPath(),t.moveTo(i-s/2,64),t.quadraticCurveTo(i-s/2+r,30,i+r,4+r*.2),t.quadraticCurveTo(i+s/2+r,30,i+s/2,64),t.closePath(),t.fill();return new bn(n)}function nh(n=1,t=.5){const e=Nn(n*77+1),i=new Kn(t,2),s=i.attributes.position;for(let a=0;a<s.count;a++){const l=1+(e()-.5)*.35;s.setXYZ(a,s.getX(a)*l,s.getY(a)*l*.72,s.getZ(a)*l)}i.computeVertexNormals();const r=new Q(i,new ut({color:new Lt(3759148).offsetHSL(0,0,(e()-.5)*.05),roughness:1})),o=.72+e()*.63;return r.scale.set(o,o*(.85+e()*.4),o),r.rotation.y=e()*Math.PI*2,r.castShadow=!0,r.userData.sway={amp:.008,freq:1.4,ph:e()*6.28},r}function ih(n=1,t=60,e=[6,3]){const i=Nn(n*31+5),s=new Ee(.5,.35);s.translate(0,.17,0);const r=RM([s,s.clone().rotateY(Math.PI/2)]),o=new ut({color:6058040,roughness:1,side:Ue,alphaTest:.4,alphaMap:AM(),alphaToCoverage:!0}),a=new we(r,o,t),l=new ae;for(let c=0;c<t;c++)l.position.set((i()-.5)*e[0],0,(i()-.5)*e[1]),l.rotation.y=i()*3.14,l.scale.setScalar(.7+i()*.7),(c+n%4+4)%4===0&&(l.scale.y*=1.9),l.updateMatrix(),a.setMatrixAt(c,l.matrix);return a.castShadow=!1,a.receiveShadow=!0,a}function RM(n){return fs(n)}function gl(n=1,t=2.2,e=2,i=40){const s=Nn(n*13+9),r=new Ee(.12,.12),o=new ut({color:4154928,roughness:1,side:Ue}),a=new we(r,o,i),l=new ae;for(let h=0;h<i;h++)l.position.set((s()-.5)*t,s()*e,.02+s()*.06),l.rotation.set(s()*3,s()*3,s()*3),l.updateMatrix(),a.setMatrixAt(h,l.matrix);a.castShadow=!1;const c=new $t;return c.add(a),c}function yf(n,t=1.6,e=1){const i=new Q(new qn(.5,10),new ut({color:4480046,roughness:1}));return i.rotation.x=-Math.PI/2,i.scale.set(t,e,1),i.receiveShadow=!0,i}let _l=null;function CM(){if(_l)return _l;const n=document.createElement("canvas");n.width=n.height=128;const t=n.getContext("2d");t.fillStyle="#4a3826",t.fillRect(0,0,128,128);const e=wi(1179143),i=["#a83a22","#c77b2e","#6b4e30","#5a6b35","#7d4a26","#8f5a24"];for(let r=0;r<650;r++){t.fillStyle=i[Math.floor(e()*i.length)],t.globalAlpha=.5+e()*.5;const o=1+e()*2.5;t.save(),t.translate(e()*128,e()*128),t.rotate(e()*3.14),t.fillRect(-o/2,-o/3,o,o*.66),t.restore()}t.globalAlpha=1;const s=new bn(n);return s.wrapS=s.wrapT=Xn,s.colorSpace=ze,s.anisotropy=4,_l=s,s}function Mf(n){const t=[];for(const s of n){const r=new qn(.5,12);r.rotateX(-Math.PI/2),r.scale(s.r*2.4,1,s.r*2);const o=Xo(s.seed||1,911);r.rotateY(o*6.28),r.translate(s.x,s.y,s.z),t.push(r)}if(!t.length)return null;const e=fs(t);t.forEach(s=>s.dispose());const i=new Q(e,new ut({map:CM(),roughness:1,metalness:0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));return i.receiveShadow=!0,i}function PM(n,t,e){const i=e?.gust?e.gust(t):.5;for(const s of n){const r=s.userData.sway;r&&(s.rotation.x=Math.sin(t*r.freq+r.ph)*r.amp*(.5+i),s.rotation.z=Math.cos(t*r.freq*.8+r.ph)*r.amp*(.5+i))}}const ju=65,DM=80;function LM(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function IM(n){let t=n>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function td(n){return IM(LM("TREE_V2:"+n))}function sr(n,t,e){const i=new pe(t*.72,t*e,n*.22,7,1);i.translate(0,n*.11,0);const s=new pe(t*.62*.72,t*.72,n*.78,7,1);return s.translate(0,n*.22+n*.39,0),fs([i,s])}function Sf(n,t){const e=new pe(t*.55,t,n,5,1);return e.translate(0,n/2,0),e}function wf(n,t){return new Ee(n,t)}function ps(n,t,e,i,s,r,o){const a=wf(s,r),l=new we(a,e,i.length),c=new ae,h=new Lt;for(let d=0;d<i.length;d++)c.position.copy(i[d].p),c.rotation.set(t()*.9-.45,t()*Math.PI*2,t()*.6-.3),c.updateMatrix(),l.setMatrixAt(d,c.matrix),h.set(o).offsetHSL((t()-.5)*.03,0,(t()-.5)*.08),l.setColorAt(d,h);return l.instanceMatrix.needsUpdate=!0,l.instanceColor&&(l.instanceColor.needsUpdate=!0),n.add(l),l}function bf(n,t,e,i,s,r){const o=[],a=s*Math.PI/180;for(let l=0;l<t;l++){const c=n.y+l/t*i;for(let h=0;h<e;h++){const d=h/e*Math.PI*2+r()*.6,u=i*(.55-l*.09);o.push({p:new O(n.x+Math.cos(d)*u,c+Math.sin(a)*u*.5,n.z+Math.sin(d)*u)})}}return o}function No(n,t){const e=new $t,i=9+t()*4,s=new Q(sr(i,.28+t()*.12,1.5),n.barkSugi);e.add(s);const r=ju+t()*(DM-ju),o=bf(new O(0,i*.5,0),4,5,i*.5,r-45,t);return ps(e,t,n.leafSugi,o,1.1,.9,2968106),e.userData={species:"sugi",h:i},e}function ed(n,t){const e=new $t,i=7+t()*2.5;e.add(new Q(sr(i,.24,1.3),n.barkHinoki));const s=bf(new O(0,i*.45,0),4,6,i*.55,30,t);return ps(e,t,n.leafSugi,s,.95,.8,3824176),e.userData={species:"hinoki",h:i},e}function xl(n,t){const e=new $t,i=2+Math.floor(t()*2),s=2.2+t()*.6,r=[],o=[];for(let a=0;a<i;a++){const l=.12+t()*.18,c=a/i*Math.PI*2+t(),h=s+t()*.5,d=sr(h,.22,1.35),u=new re().makeRotationAxis(new O(Math.cos(c),0,Math.sin(c)),l);d.applyMatrix4(u),r.push(d);const f=3+Math.floor(t()*2);for(let g=0;g<f;g++){const v=g/f*Math.PI*2+t()*.8,m=2.2+t()*1.6,p=Sf(m,.09),y=new ae;y.position.set(Math.cos(c)*l*h*2,h*.96,Math.sin(c)*l*h*2),y.rotation.set(.6+t()*.35,v,0,"YXZ"),y.updateMatrix(),p.applyMatrix4(y.matrix),r.push(p);const w=new O(0,m,0).applyMatrix4(y.matrix);o.push({p:w}),o.push({p:w.clone().add(new O(t()-.5,.4,t()-.5))})}}return e.add(new Q(fs(r),n.barkKeyaki)),ps(e,t,n.leafBroad,o,1.5,1.1,4680501),e.userData={species:"keyaki"},e}function vc(n,t,e={}){const i=new $t,s=3.5+t()*1.5,r=[sr(s*.55,.14,1.25)],o=[];for(let l=0;l<2;l++){const c=l*Math.PI+t()*.4;for(let h=0;h<2;h++){const d=Sf(1.6+t()*.8,.05),u=new ae;u.position.set(0,s*.55,0),u.rotation.set(.55+t()*.3,c+(h?.35:-.35),0,"YXZ"),u.updateMatrix(),d.applyMatrix4(u.matrix),r.push(d);const f=new O(0,1.6,0).applyMatrix4(u.matrix);o.push({p:f})}}const a=new Q(fs(r),n.barkMomiji);return i.add(a),i.userData={species:"momiji",bare:a},e.bare||ps(i,t,n.leafMomiji,o,.9,.7,e.autumn?11024930:5929530),i}function nd(n,t){const e=new $t,i=2.6+t()*1.2,s=sr(i,.2,1.4);s.applyMatrix4(new re().makeRotationZ(.12+t()*.12)),e.add(new Q(s,n.barkSugi));const r=3+Math.floor(t()*3);for(let o=0;o<r;o++){const a=new _n(.9-o*.1,7,5);a.scale(1.25,.32,1.25),a.translate((t()-.5)*1.6,i*.6+o*.5,(t()-.5)*1.6);const l=new Q(a,n.leafPine);e.add(l)}return e.userData={species:"matsu"},e}function Ef(n,t,e){const i=new $t,s=2.4+t()*.8;i.add(new Q(sr(s,.13,1.2),n.barkOrchard));const r=[];for(let h=0;h<6;h++){const d=h/6*Math.PI*2+t();r.push({p:new O(Math.cos(d)*1.1,s*.7+t()*.8,Math.sin(d)*1.1)})}ps(i,t,n.leafBroad,r,1,.8,6058040);const o=new _n(e==="kaki"?.07:.055,6,5),a=new Un({color:e==="kaki"?14182942:8014370}),l=new we(o,a,10),c=new ae;for(let h=0;h<10;h++){const d=r[Math.floor(t()*r.length)].p;c.position.set(d.x+(t()-.5)*.6,d.y-.25,d.z+(t()-.5)*.6),c.updateMatrix(),l.setMatrixAt(h,c.matrix)}return l.instanceMatrix.needsUpdate=!0,i.add(l),i.userData={species:e},i}function id(n,t){return Ef(n,t,"kaki")}function sd(n,t){return Ef(n,t,"kuri")}function NM(n,t,e={}){const i=vc(n,t,{bare:!0});if(i.userData.species="sakura",!e.bare){const s=[];for(i.updateMatrixWorld(!0),i.traverse(r=>{if(r.isMesh&&r.geometry){const o=new O;r.geometry.computeBoundingBox(),r.geometry.boundingBox.getCenter(o),r.localToWorld(o),i.worldToLocal(o),o.y>1.5&&s.push({p:o.clone()})}});s.length<6;)s.push({p:new O((t()-.5)*3,2.5+t(),(t()-.5)*3)});ps(i,t,n.leafBlossom,s.slice(0,8),1.2,.9,15247544)}return i}function Uo(n,t,e="moso"){const i=new $t,s=e==="moso"?5+Math.floor(t()*6):8+Math.floor(t()*8),r=e==="moso"?.06:.03,o=e==="moso"?7+t()*3:4+t()*2,a=[],l=[];for(let c=0;c<s;c++){const h=(t()-.5)*2.4,d=(t()-.5)*2.4,u=o*(.85+t()*.3),f=new pe(r*.8,r,u,6,1);f.translate(h,u/2,d),a.push(f),l.push({p:new O(h,u*.78,d)}),l.push({p:new O(h+.2,u*.95,d)})}if(i.add(new Q(fs(a),n.culm)),ps(i,t,n.leafBamboo,l,.9,.6,4878392),e==="moso"){const c=new Mi(.16,.35,6),h=new we(c,n.shoot,4),d=new ae;for(let u=0;u<4;u++)d.position.set((t()-.5)*2.6,.17,(t()-.5)*2.6),d.updateMatrix(),h.setMatrixAt(u,d.matrix);h.instanceMatrix.needsUpdate=!0,i.add(h)}return i.userData={species:"bamboo-"+e},i}function UM(n,t,e=4){const i=new $t,s=new ae,r=new we(wf(.7,.5),n.leafSasa,14);for(let d=0;d<14;d++)s.position.set((t()-.5)*e,.25,(t()-.5)*e),s.rotation.set(0,t()*3.14,0),s.updateMatrix(),r.setMatrixAt(d,s.matrix);r.instanceMatrix.needsUpdate=!0,i.add(r);const o=new we(new Mi(.3,.5,5,1,!0),n.leafFern,8);for(let d=0;d<8;d++)s.position.set((t()-.5)*e,.25,(t()-.5)*e),s.rotation.set(0,t()*3.14,0),s.updateMatrix(),o.setMatrixAt(d,s.matrix);o.instanceMatrix.needsUpdate=!0,i.add(o);const a=new we(new _n(.3,6,4,0,6.3,0,1.2),n.moss,6);for(let d=0;d<6;d++)s.position.set((t()-.5)*e,.02,(t()-.5)*e),s.scale.setScalar(.7+t()*.8),s.rotation.set(0,0,0),s.updateMatrix(),a.setMatrixAt(d,s.matrix);a.instanceMatrix.needsUpdate=!0,s.scale.setScalar(1),i.add(a);const l=new we(new Mi(.12,.45,5),n.leafSeedling,10);for(let d=0;d<10;d++)s.position.set((t()-.5)*e,.22,(t()-.5)*e),s.rotation.set(0,t()*3.14,0),s.updateMatrix(),l.setMatrixAt(d,s.matrix);l.instanceMatrix.needsUpdate=!0,i.add(l);const c=new Q(new pe(.16,.2,2.4,7),n.barkSugi);c.rotation.set(Math.PI/2,0,t()*3.14),c.position.y=.18,i.add(c);for(let d=0;d<3;d++){const u=new Q(new Mi(.09,.3,5),n.leafSeedling);u.position.set(-.7+d*.7,.42,0),i.add(u)}const h=new we(new qn(.35,7),n.litter,10);for(let d=0;d<10;d++)s.position.set((t()-.5)*e,.015,(t()-.5)*e),s.rotation.set(-Math.PI/2,0,t()*3.14),s.updateMatrix(),h.setMatrixAt(d,s.matrix);return h.instanceMatrix.needsUpdate=!0,i.add(h),i.userData={species:"understory"},i}function Le(n,t,e){let i=Math.imul(n,374761393)+Math.imul(t,668265263)+Math.imul(e,1442695041)|0;return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967296}function Os(n,t,e,i,s=130){const r=_c(7,3,i),o=[];for(let a=0;a<4e3&&o.length<t;a++){const l=r()*Math.PI*2,c=30+Math.sqrt(r())*(s-30),h=Math.cos(l)*c,d=Math.sin(l)*c*.9+6,u=eh(h,d);n.includes(u)&&(xc(h,d)<4||Math.hypot(h+48,d+28)<10||Wr(h,d)>.55||Math.abs(d-(34+8*Math.sin(h*.045)))<6||o.some(([f,g])=>Math.hypot(f-h,g-d)<e)||o.push([h,d]))}return o}function OM(n,t){const i=Math.floor(n/22),s=Math.floor(t/22),r=n/22-i,o=t/22-s,a=r*r*(3-2*r),l=o*o*(3-2*o),c=Le(i,s,201),h=Le(i+1,s,201),d=Le(i,s+1,201),u=Le(i+1,s+1,201),f=c+(h-c)*a+(d-c)*l+(c-h-d+u)*a*l,g=Le(i*3+11,s*3+7,202);return Math.min(1,Math.max(0,f*.72+g*.28))}function FM(n,t,e,i,s){const r=Le(Math.floor(e/12),Math.floor(i/12),203);return n==="bamboo"?"bamboo":n==="mountain"||n==="slope"?r<.68?"sugi":"hinoki":t<48?r<.55?"momiji":"pine":n==="maple"?r<.62?"momiji":"pine":n==="grassland"||n==="outskirts"?r<.5?"pine":"momiji":s()<.5?"sugi":"hinoki"}function BM(){const n=[new ht(.24,0),new ht(.2,.12),new ht(.13,.5),new ht(.105,1.2),new ht(.085,2),new ht(.06,2.6)],t=new js(n,6);return t.computeVertexNormals(),t}function Oo(n,t,e){const i=tf(n),s=i.attributes.position;for(let r=0;r<s.count;r++){const o=1+(Le(r,t,9)-.5)*e;s.setXYZ(r,s.getX(r)*o,s.getY(r)*(1+(Le(r,t+1,9)-.5)*e*.6),s.getZ(r)*o)}return i.computeVertexNormals(),i}function zM(n){let t=0;const e=n.map(a=>a.toNonIndexed());for(const a of e)t+=a.attributes.position.count;const i=new Float32Array(t*3),s=new Float32Array(t*3);let r=0;for(const a of e)i.set(a.attributes.position.array,r*3),a.attributes.normal&&s.set(a.attributes.normal.array,r*3),r+=a.attributes.position.count,a.dispose();const o=new xe;return o.setAttribute("position",new Oe(i,3)),o.setAttribute("normal",new Oe(s,3)),o}function gr(n,t){if(n==="sugi"){const s=new Mi(1.05,4.2,7,3);return s.translate(0,2.1,0),Oo(s,t,.22)}if(n==="hinoki"){const s=new Mi(1.3,3.9,8,2);return s.translate(0,1.95,0),Oo(s,t,.3)}if(n==="pine"){const s=new _n(1.6,8,4,0,Math.PI*2,0,Math.PI*.55);return s.scale(1,.45,1),s.translate(0,2.6,0),Oo(s,t,.2)}if(n==="bamboo"){const s=new Kn(.95,0);return s.scale(1,1.4,1),s.translate(0,2.4,0),Oo(s,t,.35)}const e=[],i=[[0,1.6,0,1.35],[.7,2.2,.3,1],[-.6,2.7,-.2,.75]];for(let s=0;s<i.length;s++){const[r,o,a,l]=i[s],c=new Kn(l,1);c.scale(1.25,.55,1.25),c.translate(r,o,a);const h=c.attributes.position,d=[];for(let g=0;g<h.count;g+=3)if(!(Le(g+s*131,t,12)<.4))for(let m=0;m<3;m++)d.push(h.getX(g+m),h.getY(g+m),h.getZ(g+m));const u=new xe;u.setAttribute("position",new Oe(new Float32Array(d),3));const f=tf(u);f.computeVertexNormals(),e.push(f),c.dispose()}return zM(e)}function kM(n){const t=new $t;t.name="ecology";const e=[],i=[],s=c=>(c?.userData?.sway&&e.push(c),c?.userData?.tick&&i.push(c.userData.tick),c),r=Os(["maple"],3,14,101,70);r.forEach(([c,h],d)=>{const u=Te(c,h),f=xf(n,500+d,1+Le(d,3,5)*.5,.35+Le(d,9,6)*.5,0,0);f.position.set(c,u,h),f.rotation.y=Le(d,13,7)*6.28,Fo(t,f),s(f)});{const c=r.map(([d,u],f)=>({x:d,y:Te(d,u)+.05,z:u,r:1.2,seed:720+f})),h=Mf(c);h&&t.add(h)}Os(["bamboo"],2,16,102,80).forEach(([c,h],d)=>{const u=vf(n,510+d,0,0);u.position.set(c,Te(c,h),h),Fo(t,u),s(u)}),Os(["maple","grassland","outskirts","slope"],8,12,103).forEach(([c,h],d)=>{const u=nh(520+d,.5+Le(d,21,8)*.6);u.position.set(c,Te(c,h)+.2,h),Fo(t,u),s(u)}),Os(["grassland","field","outskirts","riverbank"],6,14,104).forEach(([c,h],d)=>{const u=ih(530+d,50,[5,5]);u.position.set(c,Te(c,h)+.03,h),Fo(t,u)});{const c=_c(11,5,201),h=BM(),d={sugi:gr("sugi",211),hinoki:gr("hinoki",212),momiji:gr("momiji",213),bamboo:gr("bamboo",214),pine:gr("pine",215)},u=new ut({color:4864552,roughness:.95}),f=new ut({roughness:.95}),g=new ut({roughness:.8,side:Ue}),v={sugi:[],hinoki:[],momiji:[],bamboo:[],pine:[]},m={sugi:90,hinoki:65,momiji:45,bamboo:35,pine:35};for(let _=0;_<2500&&!(v.sugi.length+v.hinoki.length+v.momiji.length+v.bamboo.length+v.pine.length>=340);_++){const b=c()*Math.PI*2,R=32+Math.sqrt(c())*105,x=Math.cos(b)*R,S=Math.sin(b)*R*.9+6,E=eh(x,S);if(!["maple","bamboo","grassland","slope","mountain","outskirts"].includes(E)||xc(x,S)<3.5||Wr(x,S)>.7||Math.abs(S-(34+8*Math.sin(x*.045)))<5||Math.hypot(x+48,S+28)<9)continue;const A=OM(x,S);if(A<.28||A<.45&&Le(_,61,204)<.6)continue;const C=FM(E,Math.hypot(x,S),x,S,c);if(v[C].length>=m[C])continue;const P=Te(x,S),L=.75+Le(_,62,205)*.5,I=(E==="mountain"?.8+c()*.5:1+c()*.9)*L;v[C].push({x,y:P,z:S,sc:I,ry:c()*6.28,seed:_})}const p=new ae,y=new Lt,w=["sugi","hinoki","momiji","bamboo","pine"];for(const _ of w){const M=v[_];if(!M.length)continue;const b=new we(h,u,M.length),R=_==="momiji"?g:f,x=new we(d[_],R,M.length),S=new Float32Array(M.length),E=new Float32Array(M.length),A=new Float32Array(M.length);M.forEach((C,P)=>{const L=_==="bamboo"?[C.sc*.45,C.sc*1.5,C.sc*.45]:[C.sc,C.sc,C.sc];p.position.set(C.x,C.y-.05,C.z),p.rotation.set(0,C.ry,0),p.scale.set(L[0],L[1],L[2]),p.updateMatrix(),b.setMatrixAt(P,p.matrix);const I=_==="bamboo"?C.y+1.2*C.sc:_==="pine"?C.y+.9*C.sc:C.y+1*C.sc;p.position.set(C.x,I,C.z),p.rotation.set(0,C.ry+Le(P,71,206)*6.28,0);const U=_==="momiji"?C.sc*1.1:_==="pine"?C.sc*1.15:C.sc;p.scale.set(U,U*(_==="bamboo"?1.5:1),U),p.updateMatrix(),x.setMatrixAt(P,p.matrix),_==="sugi"?y.setHSL(.36+Le(P,43,3)*.03,.42,.16+Le(P,44,4)*.06):_==="hinoki"?y.setHSL(.33+Le(P,43,3)*.04,.4,.22+Le(P,44,4)*.07):_==="momiji"?y.setHSL(.02+Le(P,43,3)*.09,.62,.32+Le(P,44,4)*.12):_==="bamboo"?y.setHex(4157488).offsetHSL(0,0,(Le(P,44,4)-.5)*.06):y.setHSL(.3+Le(P,43,3)*.05,.38,.24+Le(P,44,4)*.07),x.setColorAt(P,y),S[P]=Le(P,72,207),E[P]=_==="momiji"?.35+Le(P,73,208)*.65:0,A[P]=Le(P,71,206)*6.28}),x.geometry=x.geometry.clone(),x.geometry.setAttribute("aWind",new Ar(S,1)),x.geometry.setAttribute("aAutumn",new Ar(E,1)),x.geometry.setAttribute("aUvRot",new Ar(A,1)),b.instanceMatrix.needsUpdate=!0,x.instanceMatrix.needsUpdate=!0,x.instanceColor&&(x.instanceColor.needsUpdate=!0),b.castShadow=!1,b.receiveShadow=!1,x.castShadow=!1,x.receiveShadow=!1,b.frustumCulled=!0,x.frustumCulled=!0,t.add(b,x)}}{const c={barkSugi:n.barkSugi,barkHinoki:n.barkHinoki,barkKeyaki:n.barkKeyaki,barkMomiji:n.barkMomiji,barkOrchard:n.barkOrchard,leafSugi:n.leafSugi,leafBroad:n.leafBroad,leafMomiji:n.leafMomiji,leafBlossom:n.leafBlossom,leafPine:n.leafPine,leafBamboo:n.leafBamboo,leafSasa:n.leafSasa,leafFern:n.leafFern,leafSeedling:n.leafSeedling,culm:n.bamboo,shoot:n.shoot,litter:n.litter,moss:n.moss,impostor:n.impostor},h=_c(9,4,301),d=(g,v,m=!1)=>!(xc(g,v)<3||Math.abs(v-(34+8*Math.sin(g*.045)))<5||Wr(g,v)>.6||!m&&Math.hypot(g+48,v+28)<9),u=(g,v,m,p={})=>{if(!d(v,m,p.shrineOK))return;const y=td(`village:${p.key||g.name}:${v.toFixed(1)},${m.toFixed(1)}`),w=g(c,y,p.arg);w.position.set(v,Te(v,m)+(p.sink||0),m),w.rotation.y=y()*6.28;const _=(p.s||1)*(.92+y()*.2);w.scale.setScalar(_),w.traverse(M=>{M.isMesh&&!M.isInstancedMesh&&(M.castShadow=!0)}),t.add(w)};u(xl,18+(h()-.5)*3,8+(h()-.5)*3,{key:"keyaki-meet"}),u(xl,-20+(h()-.5)*3,-6+(h()-.5)*3,{key:"keyaki-west"}),u(xl,6+(h()-.5)*3,-20+(h()-.5)*3,{key:"keyaki-south"}),u(NM,-38,-20,{key:"sakura-gather"}),u(nd,-40,-22,{key:"matsu-shrine"}),u(nd,26,14,{key:"matsu-street"}),u(ed,-52,-24,{key:"hinoki-L",shrineOK:!0}),u(ed,-44,-32,{key:"hinoki-R",shrineOK:!0}),u(No,-14,30,{key:"sugi-1"}),u(No,16,32,{key:"sugi-2"}),u(No,-30,12,{key:"sugi-3"}),u(No,30,-8,{key:"sugi-4"}),u(id,-6,44,{key:"kaki-1",s:.95}),u(id,-2,44.5,{key:"kaki-2",s:.9}),u(sd,2,48,{key:"kuri-1",s:.95}),u(sd,6,48.5,{key:"kuri-2",s:.9}),u(Uo,-26,20,{key:"moso-1",arg:"moso"}),u(Uo,24,24,{key:"moso-2",arg:"moso"});for(let g=0;g<3;g++)u(Uo,10+g*4,-4+(h()-.5),{key:`madake-e${g}`,arg:"madake",s:.8}),u(Uo,-12+g*4,-12+(h()-.5),{key:`madake-w${g}`,arg:"madake",s:.8});u(vc,12,30,{key:"momiji-river",arg:{autumn:!0}}),u(vc,-34,-14,{key:"momiji-shrine",arg:{autumn:!1}}),[...Os(["maple"],2,14,101,70).map(([g,v])=>[g+2,v+1]),...Os(["bamboo"],1,16,102,80).map(([g,v])=>[g-2,v-1])].forEach(([g,v],m)=>{if(!d(g,v))return;const p=td(`village:under:${m}`),y=UM(c,p,5);y.position.set(g,Te(g,v)+.02,v),t.add(y)})}return{group:t,vegRoots:e,tickers:i}}function Fo(n,t){n.add(t)}const GM=[{name:"hamletA",cx:-27,cz:34,seed:201,w:6,d:5,wallH:2.9,roofType:"kirizuma",pitch:30,facadeCols:3,doorSide:-1,engawa:.8,woodTone:.3,age:.7,winLayout:[1,0,2]},{name:"hamletB",cx:13,cz:24,seed:202,w:6,d:5.5,wallH:3,roofType:"yosemune",pitch:31,facadeCols:3,doorSide:1,engawa:0,woodTone:.6,age:.4,winLayout:[2,0,1]},{name:"hamletC",cx:22,cz:28,seed:203,w:6,d:5,wallH:2.8,roofType:"kirizuma",pitch:29,facadeCols:3,doorSide:1,engawa:.8,woodTone:.5,age:.55,winLayout:[1,2,0]}],HM=[{name:"farmhouse",cx:13,cz:29,seed:204,w:7.5,d:6,wallH:3.2,roofType:"kirizuma",pitch:32,facadeCols:4,doorSide:1,engawa:1,woodTone:.35,age:.6,winLayout:[1,2,1,0]},{name:"barn",cx:20,cz:30,seed:205,w:5,d:7,wallH:3.6,roofType:"kirizuma",pitch:40,facadeCols:2,doorSide:0,engawa:0,woodTone:.25,age:.8,winLayout:[0,0],glow:!1}];function VM(n){sf(n);const t=new $t;t.name="settlement";const e=[];for(const[s,r]of[[GM,40],[HM,50]])for(const[o,a]of s.entries()){const l=of({...a}),c=Te(a.cx,a.cz);l.group.position.set(a.cx,c,a.cz),t.add(l.group),e.push({name:a.name,group:l.group,glowMats:a.glow===!1?[]:l.glowMats,sliders:l.sliders||[],params:{...a},pos:new O(a.cx,c,a.cz),w:a.w,d:a.d});const[h,d]=Oi(a.cx,a.cz);cs(h,d,[{id:ls("house",h,d,r+o),type:"house",x:a.cx,z:a.cz,y:c,data:{name:a.name}}])}{const s={W:[],D:[]},r=[{x1:-30,z1:37.5,x2:-24,z2:37.5},{x1:8.5,z1:27.5,x2:8.5,z2:32}];for(const a of r){const l=Math.hypot(a.x2-a.x1,a.z2-a.z1),c=Math.max(2,Math.floor(l/1.4));for(let d=0;d<=c;d++){const u=d/c,f=a.x1+(a.x2-a.x1)*u,g=a.z1+(a.z2-a.z1)*u,v=new Dt(.1,1,.1);v.translate(f,Te(f,g)+.5,g),s.D.push(v)}const h=Math.atan2(a.x2-a.x1,a.z2-a.z1)+Math.PI/2;for(const d of[.85,.4]){const u=new Dt(l,.08,.06),f=new re().makeRotationY(h),g=(a.x1+a.x2)/2,v=(a.z1+a.z2)/2;f.setPosition(g,Te(g,v)+d,v),u.applyMatrix4(f),s.D.push(u)}}const o=new ut({color:5916208,roughness:.85});for(const a of Object.keys(s)){if(!s[a].length)continue;const l=new Q(on(s[a],!1),o);l.castShadow=!0,l.receiveShadow=!0,t.add(l)}}return Ky().forEach((s,r)=>{const a=s.w-1,l=s.d-.5*2,c=[],h=.35,d=.4;for(const[x,S,E,A]of[[a+d*2,d,0,-l/2],[a+d*2,d,0,l/2],[d,l,-a/2,0],[d,l,a/2,0]]){const C=new Dt(x,h,S);C.translate(s.cx+E,s.y+h/2-.05,s.cz+A),c.push(C)}const u=new Q(on(c,!1),new ut({color:7035456,roughness:1}));u.castShadow=!0,u.receiveShadow=!0,t.add(u);const f=new Q(new Ee(a,l),new ut({color:3360842,roughness:.12,metalness:.7,envMapIntensity:.9,transparent:!0,opacity:.95}));f.rotation.x=-Math.PI/2,f.position.set(s.cx,s.y+.12,s.cz),f.receiveShadow=!0,t.add(f),t.userData["paddyWater"+r]=f.material;const g=new Ee(.22,.4);g.translate(0,.2,0);const v=on([g,g.clone().rotateY(Math.PI/2)],!1),m=new ut({color:6982204,roughness:.9,side:Ue}),p=7,y=22,w=new we(v,m,p*y),_=new ae;let M=0;for(let x=0;x<p;x++)for(let S=0;S<y;S++){_.position.set(s.cx-a/2+.4+(a-.8)*S/(y-1),s.y+.1,s.cz-l/2+.4+(l-.8)*(x+.5)/p),_.rotation.set(0,(x*y+S)%8*.4,0);const E=.8+(x*31+S*17)%10/10*.5;_.scale.set(E,E,E),_.updateMatrix(),w.setMatrixAt(M++,_.matrix)}w.instanceMatrix.needsUpdate=!0,w.castShadow=!1,w.receiveShadow=!0,t.add(w);const[b,R]=Oi(s.cx,s.cz);cs(b,R,[{id:ls("paddy",b,R,r),type:"paddy",x:s.cx,z:s.cz,y:s.y,data:{}}])}),{group:t,houses:e}}const Me=.69,Se=.012;function WM(n){let t=2166136261;const e=String(n??"home");for(let i=0;i<e.length;i++)t^=e.charCodeAt(i),t=Math.imul(t,16777619);return t>>>0}function xa(n){let t=n>>>0||1;return function(){t+=1831565813;let e=Math.imul(t^t>>>15,t|1);return e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function va(n,t){return((typeof n.seed=="number"?n.seed>>>0:WM(n.seed??n.name??"house"))^Math.imul(t>>>0,2654435761))>>>0}const vl={};function yl(n,t,e=.9){return vl[n]||(vl[n]=new ut({color:t,roughness:e,metalness:0})),vl[n]}function Tf(n){const t=n||{},e=t.wood||t.timber||t.beam||t.frame||yl("wood",8018490),i=t.dark||t.iron||t.charcoal||t.kitchen||yl("dark",3025446,.85),s=t.ceramic||t.pot||t.clay||t.plaster||yl("ceramic",12101774,.6),r=t.stone||t.rock||t.step||i,o=t.fabric||t.cloth||t.curtain||t.noren||i;return{wood:e,dark:i,ceramic:s,stone:r,fabric:o}}function tn(n,t,e,i,s,r,o,a=0){const l=new Dt(t,e,i);a&&l.rotateY(a),l.translate(s,r,o),n.push(l)}function ii(n,t,e,i,s,r,o,a,l=!1){const c=new pe(t,e,i,s,1,l);c.translate(r,o,a),n.push(c)}function XM(n,t,e,i,s,r,o){const a=new Mi(t,e,i);a.translate(s,r,o),n.push(a)}function YM(n,t,e,i,s,r,o,a,l=8,c=6){const h=new _n(t,l,c);h.scale(e,i,s),h.translate(r,o,a),n.push(h)}function qM(n,t,e,i,s,r,o){const a=new pe(t,t,e,i);a.rotateX(Math.PI/2),a.translate(s,r,o),n.push(a)}function sh(n,t,e,i,s,r,o=0,a="z"){const l=new pe(t,t,e,6);o&&(a==="z"?l.rotateX(o):l.rotateZ(o)),l.translate(i,s,r),n.push(l)}function Wn(n,t,e){if(!t.length)return null;const i=on(t,!1);for(const r of t)r.dispose();if(!i)return null;const s=new Q(i,e);return n.add(s),s}function KM(n,t,e){const i=[],s=[],r=Tf(e),o=Math.max(2.2,t.w??3.4),a=Math.max(2.4,t.d??3.6),l=t.kind??"home",c=-a/2+.25,h=o/2-.2,d=Math.max(.8,h-.35);if(l==="home"){const u=rd(n,t,r,{w:o,d:a,zBack:c,sideX:h,hw:d});if(u&&u.glow)for(const f of u.glow)s.push(f)}else if(l==="shop")ZM(n,t,r,{w:o,d:a,zBack:c},i);else if(l==="farm"||l==="shed")JM(n,t,r,{d:a,zBack:c,sideX:h});else if(l==="hero")$M(n,t,r,{zBack:c,hw:d});else{const u=rd(n,t,r,{w:o,d:a,zBack:c,sideX:h,hw:d});if(u&&u.glow)for(const f of u.glow)s.push(f)}return{cloth:i,glow:s}}function rd(n,t,e,i){const s=xa(va(t,48879)),r=[],o=[],a=[],{zBack:l,sideX:c,hw:h}=i,d=Math.min(1.7,i.w-1.2),u=-Math.min(.9,h*.45)+(s()-.5)*.2,f=l+.3,g=Math.min(1.15,(t.wallH??1.9)-.55),v=d/2-.04;for(const E of[-1,1])tn(r,.08,g,.32,u+E*v,Me+Se+g/2,f);const m=[.28,.58,.88].filter(E=>E<g);for(const E of m)tn(r,d,.05,.34,u,Me+Se+E,f);const p=5+Math.floor(s()*3);for(let E=0;E<p;E++){const A=m[E%m.length],C=u-d/2+.18+E*(d-.36)/Math.max(1,p-1)+(s()-.5)*.04,P=.055+s()*.035,L=E%3===2?.07+s()*.03:.12+s()*.06;ii(a,P,P*.85,L,8,C,Me+Se+A+.025+L/2,f+(s()-.5)*.1)}const y=c-.32;qM(o,.17,Math.min(1.6,i.d-1.4),8,y,Me+Se+.17,-.15),tn(o,.38,.12,.26,y,Me+Se+.06,.78);const w=-(c-.38);tn(r,.46,.44,.46,w,Me+Se+.22,.62),tn(r,.4,.36,.4,w+.03,Me+Se+.44+.012+.18,.6);const _=Math.min(h,c-.55),M=l+.62;tn(r,.72,.24,.5,_,Me+Se+.12,M),tn(o,.42,.36,.42,_-.08,Me+Se+.24+.012+.18,M),ii(o,.16,.14,.15,8,_-.08,Me+Se+.24+.012+.36+.012+.075,M);for(let E=0;E<3;E++)ii(a,.09,.09,.026,8,_+.16+E%2*.02,Me+Se+.24+.012+.013+Math.floor(E/2)*.03,M-.12+E*.11);const b=[],R=m.length>1?m[1]:m[0];if(R!==void 0){let E=u-d/2+.25;for(let A=0;A<5;A++){const C=.035+s()*.03,P=.17+s()*.08;tn(o,C,P,.13,E,Me+Se+R+.025+P/2,f+(s()-.5)*.02),E+=C+.012}}const x=-(c-.28),S=l+.35;sh(r,.016,1.15,x,Me+Se+.57,S,.22,"x"),tn(o,.07,.22,.09,x,Me+Se+.13,S+.12),Wn(n,r,e.wood),Wn(n,o,e.dark),Wn(n,a,e.ceramic);{const E=h-.35,A=1.15,C=new Q(new Dt(.62,.4,.42),e.wood);C.position.set(E,Me+Se+.2,A),C.castShadow=C.receiveShadow=!0,n.add(C);const P=new Q(new Dt(.56,.4,.36),e.dark);P.position.set(E,Me+Se+.4+.2,A),P.castShadow=!0,n.add(P);const L=new ut({color:790550,roughness:.15,metalness:.4,emissive:10336472,emissiveIntensity:0}),I=new Q(new Dt(.46,.3,.02),L);I.position.set(E,Me+Se+.4+.2,A-.19),I.rotation.y=Math.PI,n.add(I),b.push(L);const U=new Q(new pe(.006,.006,.5,6),e.dark);U.position.set(E+.15,Me+Se+.4+.4+.25,A),U.rotation.z=.25,n.add(U)}return{glow:b}}function ZM(n,t,e,i,s){const r=xa(va(t,81)),o=[],a=[],{zBack:l}=i,c=Math.min(2,i.w-1),h=i.d/2-1.05;tn(o,c,.55,.5,0,Me+Se+.275,h),tn(o,c+.1,.05,.58,0,Me+Se+.55+.025,h);const d=Math.min(1.9,i.w-1);for(const m of[.55,.92])tn(o,d,.05,.32,0,Me+Se+m,l+.28);for(let m=0;m<8;m++){const p=m<4?.55:.92,y=-d/2+.2+m%4*((d-.4)/3)+(r()-.5)*.03,w=.06+r()*.03,_=.13+r()*.07;ii(a,w,w*.85,_,8,y,Me+Se+p+.025+_/2,l+.28)}Wn(n,o,e.wood),Wn(n,a,e.ceramic);const u=.72,f=Math.min(.9,(t.wallH??1.9)-.7),g=new Ee(u,f),v=new Q(g,e.fabric);v.material&&v.material.side!==void 0&&(v.material=v.material),v.material.side=Ue,v.position.set(Math.min(.85,i.w/2-.7),Me+Se+f/2+.55,l+.16),n.add(v),s.push({mesh:v,phase:r()*Math.PI*2,amp:.09+r()*.03})}function JM(n,t,e,i){const s=xa(va(t,244)),r=String(t.name??"").toLowerCase().startsWith("barn"),o=[],a=[],{zBack:l,sideX:c}=i,h=-(c-.18);for(const u of[.45,.85])tn(o,.06,.06,Math.min(1.6,i.d-1.2),h,Me+Se+u,-.1);const d=r?2:3;for(let u=0;u<d;u++){const f=-.6+u*.42+(s()-.5)*.06;sh(o,.022,1.25,h+.16,Me+Se+.62,f,.18,"z"),tn(a,.05,.22,.04,h+.27,Me+Se+.35,f)}if(!r){for(let u=0;u<3;u++)YM(a,.24,1,.62,1,.5+u%2*.42+(s()-.5)*.08,Me+Se+.15,l+.55+Math.floor(u/2)*.42);ii(o,.2,.15,.26,8,-.3,Me+Se+.13,l+.6,!0),ii(o,.17,.13,.22,8,-.72,Me+Se+.11,l+.62,!0);for(let u=0;u<6;u++)tn(o,.22,.16,.5,-.9+u*.26,Me+Se+.08,l+.32)}Wn(n,o,e.wood),Wn(n,a,e.dark)}function $M(n,t,e,i){const s=[],r=[],{zBack:o,hw:a}=i,l=-Math.min(.9,a*.5),c=o+.45;ii(s,.07,.11,.34,10,l,Me+Se+.17,c),ii(s,.05,.05,.06,8,l,Me+Se+.34+.03,c);const h=new Kn(.11,0);h.translate(l+.42,Me+Se+.08,c+.05),r.push(h),Wn(n,s,e.ceramic),Wn(n,r,e.stone)}function QM(n,t,e){const i=[],s=Tf(e),r=xa(va(t,225)),o=Math.max(2.4,t.d??3.6),a=t.kind??"home",l=o/2,c=r()<.5?-1:1,h=[],d=[];ii(h,.3,.34,.07,10,(r()-.5)*.2,.055,l+.95);const u=c*.62,f=l+.38;if(tn(d,.11,.09,.26,u,.065,f,(r()-.5)*.3),tn(d,.11,.09,.26,u+.15*c,.065,f+.03,(r()-.5)*.3),a==="home"||a==="farm"){const g=-c*.72,v=l+.36;ii(d,.13,.11,.42,8,g,.02+.21,v),sh(d,.015,.72,g,.02+.36,v,.06,"z"),XM(d,.13,.24,8,g+.02,.02+.72+.1,v)}return Wn(n,h,s.stone),Wn(n,d,s.dark),{cloth:i}}function jM(n,t,e,i){const s=new $t;s.name="torii";const r=Te(t,e),o=new ut({color:9054750,roughness:.6}),a=new ut({color:2763310,roughness:.7}),l={W:[],D:[]},c=m=>{const p=new pe(.14,.17,3,10);p.translate(m*1.1,1.5,0),l.W.push(p);const y=new pe(.22,.26,.3,10);y.translate(m*1.1,.15,0),l.D.push(y)};c(-1),c(1);const h=new Dt(3.4,.22,.3);h.translate(0,3.1,0),l.W.push(h);const d=new Dt(3.7,.12,.42);d.translate(0,3.28,0),l.D.push(d);const u=new Dt(2.4,.16,.16);u.translate(0,2.55,0),l.W.push(u);const f=new Dt(.14,.6,.14);f.translate(0,2.85,0),l.W.push(f);for(const[m,p]of[["W",o],["D",a]]){if(!l[m].length)continue;const y=new Q(on(l[m],!1),p);y.castShadow=!0,y.receiveShadow=!0,s.add(y)}s.position.set(t,r,e),s.rotation.y=i;const[g,v]=[Oi(t,e)[0],Oi(t,e)[1]];return cs(g,v,[{id:ls("torii",g,v,0),type:"torii",x:t,z:e,y:r,data:{}}]),{group:s}}function tS(n,t,e,i){const s=new $t;s.name="shrine";const r=Te(t,e),o=new ut({color:9145222,roughness:.95}),a=new ut({color:4864552,roughness:.85}),l=new ut({color:3352861,roughness:.9}),c={S:[],W:[],D:[]},h=new Dt(5,.6,4);h.translate(0,.3,0),c.S.push(h);for(let w=0;w<3;w++){const _=new Dt(1.6,.18,.5);_.translate(0,.09+w*.18,2+.25+(2-w)*.42),c.S.push(_)}for(const[w,_]of[[-1.5,-1],[1.5,-1],[-1.5,1],[1.5,1]]){const M=new Dt(.18,2.2,.18);M.translate(w,.6+1.1,_),c.W.push(M)}const d=new Dt(3.6,1.5,2.6);d.translate(0,.6+1.35,0),c.W.push(d);const u=new Dt(.7,1.1,.06);u.translate(0,.6+.85,1.32),c.D.push(u);for(const w of[1,-1]){const _=new Dt(4.6,.1,2.2),M=new re().makeRotationX(w>0?.62:-.62);M.setPosition(0,3.35,w*.85),_.applyMatrix4(M),c.D.push(_)}const f=new Dt(4.6,.14,.3);f.translate(0,3.95,0),c.D.push(f);for(let w=0;w<=10;w++){const _=w/10,M=-2.4+_*4.8;for(const b of[-1.9,1.9]){if(b>0&&Math.abs(M)<1.1)continue;const R=new Dt(.09,.7,.09);R.translate(M,.6+.35,b),c.D.push(R)}}const g=new Dt(4.9,.07,.08);g.translate(0,.6+.68,-1.9),c.D.push(g);const v=w=>w==="S"?o:w==="W"?a:l;for(const w of Object.keys(c)){if(!c[w].length)continue;const _=new Q(on(c[w],!1),v(w));_.castShadow=!0,_.receiveShadow=!0,s.add(_)}const m=new Q(new Dt(.8,.5,.4),l);m.position.set(0,.85,1.7),m.castShadow=!0,s.add(m),s.position.set(t,r,e),s.rotation.y=i;const[p,y]=Oi(t,e);return cs(p,y,[{id:ls("shrine",p,y,0),type:"shrine",x:t,z:e,y:r,data:{}}]),{group:s}}const Ze=new r1({antialias:!0,powerPreference:"high-performance"});Ze.setPixelRatio(Math.min(window.devicePixelRatio||1,2));window.addEventListener("tsuki-quality",n=>{try{const t=n&&n.detail,e=t==="low"?1:t==="medium"?1.5:2;Ze.setPixelRatio(Math.min(window.devicePixelRatio||1,e))}catch{}});Ze.setSize(window.innerWidth,window.innerHeight);Ze.shadowMap.enabled=!0;Ze.shadowMap.type=Sr;Ze.toneMapping=la;Ze.toneMappingExposure=1.06;try{const n=new URLSearchParams(location.search).get("tone");n==="agx"&&Lr!==void 0?Ze.toneMapping=Lr:n==="neutral"&&Ir!==void 0&&(Ze.toneMapping=Ir)}catch{}document.getElementById("app").appendChild(Ze.domElement);const _e=new Wp,Ie=Jd();P1(Ie);sf(Ie);const{sun:eS,hemi:nS,skyMat:iS,sky:od}=D1(_e,Ze),ya=new $t;ya.name="hero_machiya";const is=y1(Ie),sS=M1(Ie),Yo=S1(Ie);ya.add(is.group,sS.group,Yo.group);O1(ya,{nageshiY:2.2,eaveY:3.7,doorX:is.openBayX});const rh=[],oh=[],Ma=n=>(n?.userData?.sway&&rh.push(n),n?.userData?.tick&&oh.push(n.userData.tick),n),Pn=ry({scene:_e,heroGroup:ya});Pn.houses.forEach((n,t)=>{const[e,i]=Oi(n.pos.x,n.pos.z);cs(e,i,[{id:ls("house",e,i,t),type:n.name==="hero"?"hero":"house",x:n.pos.x,z:n.pos.z,y:0,data:{name:n.name}}])});window.__world={stats:gf};const qo=uM();_e.add(qo.group);qo.mesh&&qo.mesh.material&&Ie.registerWet&&Ie.registerWet(qo.mesh.material);const rS=dM();_e.add(rS.group);_e.add(yM());const oS=bM();_e.add(oS.group);const ah=kM(Ie);_e.add(ah.group);for(const n of ah.tickers)oh.push(n);for(const n of ah.vegRoots)rh.push(n);const Kr=VM(Ie);{const n=tS(Ie,-48,-28,-2.03);_e.add(n.group);const t=jM(Ie,-51,-29.5,2.68);_e.add(t.group)}_e.add(Kr.group);for(const n of Kr.houses)Pn.houses.push({name:n.name,group:n.group,glowMats:n.glowMats,pos:n.pos});const yc=[];function aS(n){if(n.params&&n.params.isShop)return"shop";const t=String(n.name||"").toLowerCase(),e=n.params&&n.params.winLayout;return t.startsWith("shed")||Array.isArray(e)&&e.length&&e.every(i=>!i)?"shed":t.startsWith("hamlet")||t.startsWith("farm")||t.startsWith("barn")?"farm":t==="hero"||t.startsWith("hero")?"hero":"home"}function lS(n,t){if(n.params&&typeof n.params.seed=="number")return n.params.seed>>>0;let e=2166136261;const i=String(n.name||"house"+t);for(let s=0;s<i.length;s++)e^=i.charCodeAt(s),e=Math.imul(e,16777619);return(e^Math.imul(t+1>>>0,2654435761))>>>0}for(let n=0;n<Pn.houses.length;n++){const t=Pn.houses[n],e=aS(t),i=lS(t,n),s={...t.params||{},name:t.name,kind:e,seed:i};e==="hero"&&(s.w=10,s.d=6.4,s.wallH=2.9);const r=KM(t.group,s,Ie),o=QM(t.group,s,Ie);if(r&&r.cloth)for(const a of r.cloth)yc.push(a);if(o&&o.cloth)for(const a of o.cloth)yc.push(a);if(r&&r.glow&&t.glowMats)for(const a of r.glow)t.glowMats.push(a)}console.log("WORLD registry: "+JSON.stringify(gf()));const wn=xy(Pn);_e.add(wn.group);const cS=jy({lampLights:wn.lampLights,lampGlows:wn.lampGlows,houses:Pn.houses}),Af=nM(Ie,7.5,24.5,Te(7.5,24.5));_e.add(Af.group);Ly(_e,Ie,{signPos:[6.5,0,14.5],signRy:-.5,plaquePos:[1,0,9.7],plaqueRy:-.35});const hs=b1(Ie);hs.group.position.set(-13.5,0,7);_e.add(hs.group);[[-4.2,4.6,1.3,.75],[6.8,4.4,1,.55],[-8.2,-6.2,1.5,.9],[13.5,-8.5,1.1,.4],[-16,3.5,.9,.65]].forEach(([n,t,e,i],s)=>{const r=xf(Ie,s+1,e,i,n,t);r.position.set(n,0,t),_e.add(r),Ma(r)});{const n=[[-4.2,4.6,1.3],[6.8,4.4,1],[-8.2,-6.2,1.5],[13.5,-8.5,1.1],[-16,3.5,.9]].map(([e,i,s],r)=>({x:e,y:.05,z:i,r:s,seed:700+r})),t=Mf(n);t&&_e.add(t)}[[0,-5.5],[-7.6,4.6],[7.5,-8.5]].forEach(([n,t],e)=>{const i=vf(Ie,10+e,n,t);_e.add(i),Ma(i)});[[-3.6,3.4,.55],[3.6,3.4,.5],[11,10.6,.6],[-11,10.6,.55],[-2,-8.6,.5]].forEach(([n,t,e],i)=>{const s=nh(20+i,e);s.position.set(n,.25,t),_e.add(s),Ma(s)});for(const[n,t,e,i,s]of[[0,4,8,2.5,31],[-6,13,7,4,32],[2,-7.5,20,1.5,33]]){const r=ih(s,60,[e,i]);r.position.set(n,.04,t),_e.add(r)}{const n=gl(41,2.4,2);n.rotation.y=-Math.PI/2,n.position.set(-5.08,.9,-1),_e.add(n);const t=gl(42,3,1.8);t.position.set(-9,.7,-8.92),_e.add(t);const e=gl(43,2.4,1.8);e.rotation.y=Math.PI/2,e.position.set(-9.68,.7,13.5),_e.add(e)}for(const[n,t,e,i,s]of[[-5.4,2.4,1.6,1,51],[5.4,2.4,1.6,1,52],[-4.2,8.9,1.2,.8,53],[0,4.2,2.2,1.4,54]]){const r=yf(s,e,i);r.position.set(n,.055,t),r.rotation.y=s,_e.add(r)}for(const[n,t,e,i,s]of[[-3.9,3.7,.9,.9,61],[3.1,3.7,.9,.9,62],[-8.4,2.2,.7,.7,63],[8.9,2.2,.7,.7,64]]){const r=yf(s,e,i);r.position.set(n,.055,t),r.rotation.y=s*.7,_e.add(r)}for(const[n,t,e,i]of[[-7.5,2.45,71,24],[-1.2,2.45,72,24],[4.8,2.45,73,24],[8.6,3.4,74,18],[-4.2,10.6,75,14]]){const s=ih(e,i,[1.2,1.2]);s.position.set(n,.04,t),_e.add(s)}for(const[n,t,e,i]of[[-2.5,-5.5,.85,81],[3,-5.2,1,82]]){const s=nh(i,e);s.position.set(n,.25,t),_e.add(s),Ma(s)}{const n=(s,r)=>((Math.imul(s+1,2654435761)^Math.imul(r,40503))>>>0>>>0)/4294967296,t=[12728868,14711592,10115616,7178812],e=(s,r,o,a,l)=>{const c=new Ee(.22,.18),h=new we(c,Ie.mapleLeaf,a),d=new ae,u=new Lt;for(let f=0;f<a;f++){const g=n(f,l)*Math.PI*2,v=Math.sqrt(n(f,l+1))*o;d.position.set(s+Math.cos(g)*v,.05,r+Math.sin(g)*v),d.rotation.set(-Math.PI/2,0,n(f,l+2)*Math.PI*2),d.updateMatrix(),h.setMatrixAt(f,d.matrix),u.setHex(t[Math.floor(n(f,l+3)*t.length)]),u.offsetHSL((n(f,l+4)-.5)*.05,0,(n(f,l+5)-.5)*.08),h.setColorAt(f,u)}h.instanceMatrix.needsUpdate=!0,h.instanceColor&&(h.instanceColor.needsUpdate=!0),h.receiveShadow=!0,_e.add(h)};e(-4.2,4.6,1.1,60,91),e(6.8,4.4,1,50,92);const i=(s,r,o,a)=>{const l=new we(new Hc(.05,0),Ie.stone,40),c=new ae;for(let h=0;h<40;h++){c.position.set(s+n(h,a)*(r-s),.07,o+(n(h,a+1)-.5)*.5),c.rotation.set(n(h,a+2)*3,n(h,a+3)*3,0);const d=.7+n(h,a+4)*.8;c.scale.set(d,d*.75,d),c.updateMatrix(),l.setMatrixAt(h,c.matrix)}l.instanceMatrix.needsUpdate=!0,l.castShadow=!1,l.receiveShadow=!0,_e.add(l)};i(-6,-1,4.9,93),i(1,6,8.2,94)}const Rf=z1(Ie,{leafSources:[{x:-4.2,z:4.6,r:2.4},{x:6.8,z:4.4,r:2.4},{x:-8.2,z:-6.2,r:2.4},{x:13.5,z:-8.5,r:2.4},{x:-16,z:3.5,r:2.6}]});_e.add(Rf.group);const ad=Pn.group.getObjectByName("drainage")?.userData.waterMat||null,ts=B1({scene:_e,pondWaterMats:ad?[hs.waterMat,ad]:[hs.waterMat],wetMats:Ie._wet||[],heightFn:(n,t)=>Te(n,t),snowMats:[Ie.stone,Ie.gravel,Ie.grass,Ie.roofTile,Ie.roofTileAlt,Ie.ridge].filter(Boolean),dripPoints:Pn.dripPoints||[],basins:Pn.basins||[]}),Mc=My(_e),Xs=yy({renderer:Ze,scene:_e,sun:eS,hemi:nS,skyMat:iS,houses:Pn.houses,lampGlows:wn.lampGlows,lampLights:wn.lampLights,vendGlow:wn.group.userData.vendGlow,stars:Mc.stars,moon:Mc.moon}),{camera:vi,controls:es}=ty(Ze),us=wy(vi,es),Ko=[],Zo=[],lh={items:[]};function Ml(n,t,e,i,s,r){const o=n-e/2,a=n+e/2,l=t-i/2,c=t+i/2,h=.15;if(s===null)return[{x0:o,x1:a,z0:l,z1:c}];const d=s-.55,u=s+.55;return[{x0:o,x1:d,z0:c-h,z1:c+h},{x0:u,x1:a,z0:c-h,z1:c+h},{x0:o,x1:a,z0:l-h,z1:l+h},{x0:o-h,x1:o+h,z0:l,z1:c},{x0:a-h,x1:a+h,z0:l,z1:c},{x0:d,x1:u,z0:c-.35,z1:c+.35,blockWhen:r}]}function ld(n,t,e,i){if(!e)return null;const s=n/(t??3);return i+(e<0?-n/2+s*.5:n/2-s*.5)}try{for(const t of Pn.houses){if(t.name==="hero")continue;const e=t.params||{},i=e.w??6,s=e.d??6,r=(t.sliders||[]).length&&(e.doorSide??0)!==0?ld(i,e.facadeCols,e.doorSide,t.pos.x):null,o=()=>(t._slideItems||[]).some(a=>a&&a.target>.5);for(const a of Ml(t.pos.x,t.pos.z,i,s,r,o))Ko.push(a);r!==null&&Zo.push({x0:t.pos.x-i/2,x1:t.pos.x+i/2,z0:t.pos.z-s/2,z1:t.pos.z+s/2})}const n=Ui.find(t=>t.name==="hero");if(n){const t=is&&typeof is.openBayX=="number"?is.openBayX+n.cx:null,e=()=>lh.items.some(i=>i&&i.target>.5);for(const i of Ml(n.cx,n.cz,n.w,n.d,t,e))Ko.push(i);t!==null&&Zo.push({x0:n.cx-n.w/2,x1:n.cx+n.w/2,z0:n.cz-n.d/2,z1:n.cz+n.d/2})}for(const t of Kr.houses){const e=t.params||{},i=e.w??t.w??6,s=e.d??t.d??6,r=(t.sliders||[]).length&&(e.doorSide??0)!==0?ld(i,e.facadeCols,e.doorSide,t.pos.x):null,o=()=>(t._slideItems||[]).some(a=>a&&a.target>.5);for(const a of Ml(t.pos.x,t.pos.z,i,s,r,o))Ko.push(a);r!==null&&Zo.push({x0:t.pos.x-i/2,x1:t.pos.x+i/2,z0:t.pos.z-s/2,z1:t.pos.z+s/2})}}catch{}const Xr=Ty(vi,Ze.domElement,{heightFn:(n,t)=>{let e=0;try{e=Te(n,t)}catch{e=0}Number.isFinite(e)||(e=0);for(const i of Zo)if(n>i.x0&&n<i.x1&&t>i.z0&&t<i.z1)return Math.max(e,.7);return e},solids:Ko});window.__explore={get on(){try{return Xr.enabled}catch{return!1}}};window.addEventListener("tsuki-explore",n=>{try{let t=!1,e=null;try{const i=n&&n.detail;i&&typeof i=="object"?(t=!!i.on,e=i.spawn||null):t=!!i}catch{}if(t){try{us.setMode("free")}catch{}es.enabled=!1;const i=e||{x:0,z:10};Xr.setEnabled(!0,{x:i.x??0,z:i.z??10,yaw:Math.PI})}else{Xr.setEnabled(!1),es.enabled=!0;try{us.setMode("orbit")}catch{}}}catch{}});const Zr=by(vi,Ze.domElement);for(const n of is.sliders||[]){const t=Zr.addSlide(n.node,n.open);t&&(t.t=0,lh.items.push(t))}for(const n of[...Pn.houses,...Kr.houses||[]]){n._slideItems=n._slideItems||[];for(const t of n.sliders||[])try{const e=Zr.addSlide(t.node,t.open);e&&(e.t=0,n._slideItems.push(e))}catch{}}{const n=(wn.group.userData.radioMeshes||[]).filter(Boolean);n.length&&Zr.onTap(n,()=>{try{const t=si.state?si.state():null;si.setEnabled(t&&typeof t.enabled=="boolean"?!t.enabled:!0)}catch{}})}console.log("INTERACT targets: "+Zr.count);const si=gy({camera:vi,scene:_e,zones:Ui});{const n=wn.group.userData.radioPos||new O(15.5,1.15,14.5);si.source&&si.source.position.copy(n)}new URLSearchParams(location.search).get("music")==="0"?si.setEnabled(!1):_y(si);window.__audio=si;us.onMood(({time:n,wx:t}={})=>{n&&Xs.set(n),t&&ts.setState(t)});const Yr=Vy({renderer:Ze,scene:_e,camera:vi});window.__post=Yr;try{const n=new URLSearchParams(location.search).get("post");Yr.setQuality(n==="high"?"high":n==="low"?"low":"off")}catch{try{Yr.setQuality("off")}catch{}}window.addEventListener("resize",()=>{try{Yr.setSize(window.innerWidth,window.innerHeight)}catch{}});const hS=hs.waterMat.color.clone(),cd=new Lt;let Sc=60;window.__perf=()=>({calls:Ze.info.render.calls,triangles:Ze.info.render.triangles,geometries:Ze.info.memory.geometries,fps:Math.round(Sc),errors:window.__errors||[]});window.__errors=[];window.addEventListener("error",n=>window.__errors.push(String(n.message)));Ay({daytime:Xs,weather:ts,cine:us,hudEl:document.getElementById("hud"),audio:si});{const n=new URLSearchParams(location.search),t=n.get("time"),e=n.get("wx"),i=n.get("shot");if(t&&Xs.set(t.toUpperCase()),e&&ts.setState(e.toLowerCase()),i!==null&&(us.setMode("cine"),us.goTo(Number(i)||0)),n.get("explore")==="1")try{const s=new URLSearchParams(location.search).get("exspawn");let r={x:0,z:10};if(s){const[o,a]=s.split(",").map(Number);Number.isFinite(o)&&Number.isFinite(a)&&(r={x:o,z:a})}window.dispatchEvent(new CustomEvent("tsuki-explore",{detail:{on:!0,spawn:r}}))}catch{}if(n.get("doors")==="1")try{for(const s of lh.items)s.target=1;for(const s of[...Pn.houses,...Kr.houses||[]])for(const r of s._slideItems||[])r.target=1}catch{}}const Sl=new Zc,ch=new URLSearchParams(location.search),Cf=ch.get("fixed")==="1",Jo=Iy({fps:Number(ch.get("fps"))||30}),uS=ch.get("lodfar")==="1";let wl=0;window.__cine={get frame(){return Jo.frame},get t(){return Jo.t},get fps(){return Jo.fps},mode:Cf?"fixed":"wall"};let hd=!0;function Pf(){requestAnimationFrame(Pf);let n,t;if(Cf){const s=Jo.step();n=s.dt,t=s.t}else Sl.update(),n=Math.min(Sl.getDelta(),.05),t=Sl.getElapsed();n>0&&(Sc+=(1/Math.max(n,.001)-Sc)*.05),wl++;const e=uS?2:vi.position.length()<60?0:vi.position.length()<120?1:2,i=e===0||(e===1?wl%2===0:wl%4===0);if(i){hs.update(t,ts),cd.copy(hS).lerp(_e.fog.color,.35),hs.waterMat.color.lerp(cd,.08),Rf.update(t,n);for(const s of oh)s(t)}is.noren.children.forEach((s,r)=>{s.rotation.x=Math.sin(t*1.3+r*.9)*.06*(.5+zn.gust(t))}),Yo.lantern.rotation.x=Math.sin(t*.8)*.03,Yo.lantern.rotation.z=Math.cos(t*.6)*.03,Yo.lanternLight.intensity=5+Math.sin(t*7.3)*.25+Math.sin(t*13.1)*.15,ts.update(n,t),Xs.update(n,ts);{const s=Xs.state,r=s==="NIGHT"||s==="MOONLIT"||s==="RAIN_NIGHT"||s==="MIST_NIGHT"?1:s==="SUNSET"||s==="BLUE_HOUR"?.45:0;cS.update(n,t,ts.state,r)}if(i&&Af.update(t,n,Zy(7.5,24.5,t)),Mc.setMoon(Xs.state==="NIGHT"?1:0),us.update(n),si.update(n),wn&&wn.group&&!wn.group.userData.__householdPushed){wn.group.userData.__householdPushed=!0;for(const s of yc)wn.cloth.push(s)}vy(wn,t,zn),i&&PM(rh,t,zn),Zr.update(n),Xr.update(n),Xr.enabled||es.update(),od&&od.position.copy(vi.position);try{window.__cam={pos:vi.position.toArray(),tgt:es&&es.target?es.target.toArray():[]}}catch{}if(Yr.render(),hd){hd=!1;const s=document.getElementById("loader");s.style.opacity="0",setTimeout(()=>s.remove(),700)}}Pf();
