(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pc="186",Fs={ROTATE:0,DOLLY:1,PAN:2},Us={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pf=0,lh=1,mf=2,_r=1,gf=2,dr=3,is=0,_n=1,Fe=2,Qn=0,xr=1,Xo=2,ch=3,hh=4,_f=5,Is=100,xf=101,vf=102,yf=103,Mf=104,Sf=200,wf=201,bf=202,Ef=203,$u=204,Qu=205,Tf=206,Af=207,Rf=208,Cf=209,Pf=210,Df=211,Lf=212,If=213,Nf=214,xl=0,vl=1,yl=2,Tr=3,Ml=4,Sl=5,wl=6,bl=7,ju=0,Uf=1,Of=2,jn=0,mc=1,gc=2,_c=3,na=4,xc=5,Ar=6,Rr=7,td=300,ss=301,Hs=302,vr=303,va=304,ia=306,ni=1e3,Gn=1001,El=1002,en=1003,Ff=1004,Kr=1005,Xe=1006,ya=1007,Ii=1008,Tn=1009,ed=1010,nd=1011,Cr=1012,vc=1013,ii=1014,An=1015,sn=1016,yc=1017,Mc=1018,Pr=1020,id=35902,sd=35899,rd=1021,od=1022,Hn=1023,yi=1026,Qi=1027,Sc=1028,wc=1029,rs=1030,bc=1031,Ec=1033,Lo=33776,Io=33777,No=33778,Uo=33779,Tl=35840,Al=35841,Rl=35842,Cl=35843,Pl=36196,Dl=37492,Ll=37496,Il=37488,Nl=37489,Yo=37490,Ul=37491,Ol=37808,Fl=37809,zl=37810,Bl=37811,kl=37812,Gl=37813,Hl=37814,Vl=37815,Wl=37816,Xl=37817,Yl=37818,ql=37819,Kl=37820,Zl=37821,Jl=36492,$l=36494,Ql=36495,jl=36283,tc=36284,qo=36285,ec=36286,zf=3200,nc=0,Bf=1,Bn="",Be="srgb",Dr="srgb-linear",Ko="linear",Ee="srgb",Ma=7680,kf=519,Gf=512,Hf=513,Vf=514,Tc=515,Wf=516,Xf=517,Ac=518,Yf=519,qf=35044,uh="300 es",$n=2e3,Lr=2001;function Kf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zf(){const i=Ir("canvas");return i.style.display="block",i}const dh={};function fh(...i){const t="THREE."+i.shift();console.log(t,...i)}function ad(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Jt(...i){i=ad(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function fe(...i){i=ad(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function zs(...i){const t=i.join(" ");t in dh||(dh[t]=!0,Jt(...i))}function Jf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const $f={[xl]:vl,[yl]:wl,[Ml]:bl,[Tr]:Sl,[vl]:xl,[wl]:yl,[bl]:Ml,[Sl]:Tr};class Oi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ph=1234567;const yr=Math.PI/180,Vs=180/Math.PI;function us(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[t&255]+ln[t>>8&255]+"-"+ln[t>>16&15|64]+ln[t>>24&255]+"-"+ln[e&63|128]+ln[e>>8&255]+"-"+ln[e>>16&255]+ln[e>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function re(i,t,e){return Math.max(t,Math.min(e,i))}function Rc(i,t){return(i%t+t)%t}function Qf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function jf(i,t,e){return i!==t?(e-i)/(t-i):0}function Mr(i,t,e){return(1-e)*i+e*t}function tp(i,t,e,n){return Mr(i,t,1-Math.exp(-e*n))}function ep(i,t=1){return t-Math.abs(Rc(i,t*2)-t)}function np(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ip(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function sp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function rp(i,t){return i+Math.random()*(t-i)}function op(i){return i*(.5-Math.random())}function ap(i){i!==void 0&&(ph=i);let t=ph+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function lp(i){return i*yr}function cp(i){return i*Vs}function hp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function up(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function dp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function fp(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:Jt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ns(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function fn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ke={DEG2RAD:yr,RAD2DEG:Vs,generateUUID:us,clamp:re,euclideanModulo:Rc,mapLinear:Qf,inverseLerp:jf,lerp:Mr,damp:tp,pingpong:ep,smoothstep:np,smootherstep:ip,randInt:sp,randFloat:rp,randFloatSpread:op,seededRandom:ap,degToRad:lp,radToDeg:cp,isPowerOfTwo:hp,ceilPowerOfTwo:up,floorPowerOfTwo:dp,setQuaternionFromProperEuler:fp,normalize:fn,denormalize:Ns},nh=class nh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};nh.prototype.isVector2=!0;let ht=nh;class Wn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(d!==v||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*v;m<0&&(u=-u,f=-f,g=-g,v=-v,m=-m);let p=1-a;if(m<.9995){const y=Math.acos(m),w=Math.sin(y);p=Math.sin(p*y)/w,a=Math.sin(a*y)/w,l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+v*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+v*a;const y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-a*f,t[e+2]=c*g+h*f+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Jt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ih=class ih{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(mh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(mh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Sa.copy(this).projectOnVector(t),this.sub(Sa)}reflect(t){return this.sub(Sa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ih.prototype.isVector3=!0;let F=ih;const Sa=new F,mh=new Wn,sh=class sh{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],y=s[1],w=s[4],_=s[7],S=s[2],b=s[5],R=s[8];return r[0]=o*v+a*y+l*S,r[3]=o*m+a*w+l*b,r[6]=o*p+a*_+l*R,r[1]=c*v+h*y+d*S,r[4]=c*m+h*w+d*b,r[7]=c*p+h*_+d*R,r[2]=u*v+f*y+g*S,r[5]=u*m+f*w+g*b,r[8]=u*p+f*_+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=u*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return zs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wa.makeScale(t,e)),this}rotate(t){return zs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wa.makeRotation(-t)),this}translate(t,e){return zs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};sh.prototype.isMatrix3=!0;let ne=sh;const wa=new ne,gh=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_h=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pp(){const i={enabled:!0,workingColorSpace:Dr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ee&&(s.r=vi(s.r),s.g=vi(s.g),s.b=vi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ee&&(s.r=Bs(s.r),s.g=Bs(s.g),s.b=Bs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bn?Ko:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return zs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return zs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Dr]:{primaries:t,whitePoint:n,transfer:Ko,toXYZ:gh,fromXYZ:_h,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:t,whitePoint:n,transfer:Ee,toXYZ:gh,fromXYZ:_h,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}}),i}const pe=pp();function vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let xs;class mp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{xs===void 0&&(xs=Ir("canvas")),xs.width=t.width,xs.height=t.height;const s=xs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=xs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ir("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=vi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vi(e[n]/255)*255):e[n]=vi(e[n]);return{data:e,width:t.width,height:t.height}}else return Jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gp=0;class Cc{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=us(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ba(s[o].image)):r.push(ba(s[o]))}else r=ba(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ba(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?mp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Jt("Texture: Unable to serialize Texture."),{})}let _p=0;const Ea=new F;class rn extends Oi{constructor(t=rn.DEFAULT_IMAGE,e=rn.DEFAULT_MAPPING,n=Gn,s=Gn,r=Xe,o=Ii,a=Hn,l=Tn,c=rn.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=us(),this.name="",this.source=new Cc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ea).x}get height(){return this.source.getSize(Ea).y}get depth(){return this.source.getSize(Ea).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==td)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ni:t.x=t.x-Math.floor(t.x);break;case Gn:t.x=t.x<0?0:1;break;case El:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ni:t.y=t.y-Math.floor(t.y);break;case Gn:t.y=t.y<0?0:1;break;case El:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=td;rn.DEFAULT_ANISOTROPY=1;const rh=class rh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,_=(f+1)/2,S=(p+1)/2,b=(h+u)/4,R=(d+v)/4,x=(g+m)/4;return w>_&&w>S?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=b/n,r=R/n):_>S?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=b/s,r=x/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=R/r,s=x/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-v)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};rh.prototype.isVector4=!0;let ke=rh;class xp extends Oi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ke(0,0,t,e),this.scissorTest=!1,this.viewport=new ke(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new rn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Xe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Cc(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xn extends xp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ld extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vp extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const ea=class ea{constructor(t,e,n,s,r,o,a,l,c,h,d,u,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,f,g,v,m)}set(t,e,n,s,r,o,a,l,c,h,d,u,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ea().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/vs.setFromMatrixColumn(t,0).length(),r=1/vs.setFromMatrixColumn(t,1).length(),o=1/vs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,f=o*d,g=a*h,v=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-v*c,e[9]=-a*l,e[2]=v-u*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u+v*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=v+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u-v*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=v-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,f=o*d,g=a*h,v=a*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-v*d}else if(t.order==="XZY"){const u=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yp,t,Mp)}lookAt(t,e,n){const s=this.elements;return bn.subVectors(t,e),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Ti.crossVectors(n,bn),Ti.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Ti.crossVectors(n,bn)),Ti.normalize(),Zr.crossVectors(bn,Ti),s[0]=Ti.x,s[4]=Zr.x,s[8]=bn.x,s[1]=Ti.y,s[5]=Zr.y,s[9]=bn.y,s[2]=Ti.z,s[6]=Zr.z,s[10]=bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],y=n[3],w=n[7],_=n[11],S=n[15],b=s[0],R=s[4],x=s[8],M=s[12],T=s[1],A=s[5],P=s[9],D=s[13],L=s[2],I=s[6],U=s[10],z=s[14],W=s[3],O=s[7],G=s[11],X=s[15];return r[0]=o*b+a*T+l*L+c*W,r[4]=o*R+a*A+l*I+c*O,r[8]=o*x+a*P+l*U+c*G,r[12]=o*M+a*D+l*z+c*X,r[1]=h*b+d*T+u*L+f*W,r[5]=h*R+d*A+u*I+f*O,r[9]=h*x+d*P+u*U+f*G,r[13]=h*M+d*D+u*z+f*X,r[2]=g*b+v*T+m*L+p*W,r[6]=g*R+v*A+m*I+p*O,r[10]=g*x+v*P+m*U+p*G,r[14]=g*M+v*D+m*z+p*X,r[3]=y*b+w*T+_*L+S*W,r[7]=y*R+w*A+_*I+S*O,r[11]=y*x+w*P+_*U+S*G,r[15]=y*M+w*D+_*z+S*X,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15],y=l*f-c*u,w=a*f-c*d,_=a*u-l*d,S=o*f-c*h,b=o*u-l*h,R=o*d-a*h;return e*(v*y-m*w+p*_)-n*(g*y-m*S+p*b)+s*(g*w-v*S+p*R)-r*(g*_-v*b+m*R)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],y=e*a-n*o,w=e*l-s*o,_=e*c-r*o,S=n*l-s*a,b=n*c-r*a,R=s*c-r*l,x=h*v-d*g,M=h*m-u*g,T=h*p-f*g,A=d*m-u*v,P=d*p-f*v,D=u*p-f*m,L=y*D-w*P+_*A+S*T-b*M+R*x;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/L;return t[0]=(a*D-l*P+c*A)*I,t[1]=(s*P-n*D-r*A)*I,t[2]=(v*R-m*b+p*S)*I,t[3]=(u*b-d*R-f*S)*I,t[4]=(l*T-o*D-c*M)*I,t[5]=(e*D-s*T+r*M)*I,t[6]=(m*_-g*R-p*w)*I,t[7]=(h*R-u*_+f*w)*I,t[8]=(o*P-a*T+c*x)*I,t[9]=(n*T-e*P-r*x)*I,t[10]=(g*b-v*_+p*y)*I,t[11]=(d*_-h*b-f*y)*I,t[12]=(a*M-o*A-l*x)*I,t[13]=(e*A-n*M+s*x)*I,t[14]=(v*w-g*S-m*y)*I,t[15]=(h*S-d*w+u*y)*I,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,v=o*h,m=o*d,p=a*d,y=l*c,w=l*h,_=l*d,S=n.x,b=n.y,R=n.z;return s[0]=(1-(v+p))*S,s[1]=(f+_)*S,s[2]=(g-w)*S,s[3]=0,s[4]=(f-_)*b,s[5]=(1-(u+p))*b,s[6]=(m+y)*b,s[7]=0,s[8]=(g+w)*R,s[9]=(m-y)*R,s[10]=(1-(u+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=vs.set(s[0],s[1],s[2]).length();const a=vs.set(s[4],s[5],s[6]).length(),l=vs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Un.copy(this);const c=1/o,h=1/a,d=1/l;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=d,Un.elements[9]*=d,Un.elements[10]*=d,e.setFromRotationMatrix(Un),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=$n,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===$n)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Lr)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=$n,l=!1){const c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s);let g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===$n)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===Lr)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ea.prototype.isMatrix4=!0;let ae=ea;const vs=new F,Un=new ae,yp=new F(0,0,0),Mp=new F(1,1,1),Ti=new F,Zr=new F,bn=new F,xh=new ae,vh=new Wn;class vn{constructor(t=0,e=0,n=0,s=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-re(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vh.setFromEuler(this),this.setFromQuaternion(vh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class Pc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Sp=0;const yh=new F,ys=new Wn,li=new ae,Jr=new F,nr=new F,wp=new F,bp=new Wn,Mh=new F(1,0,0),Sh=new F(0,1,0),wh=new F(0,0,1),bh={type:"added"},Ep={type:"removed"},Ms={type:"childadded",child:null},Ta={type:"childremoved",child:null};class me extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=me.DEFAULT_UP.clone();const t=new F,e=new vn,n=new Wn,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new ne}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ys.setFromAxisAngle(t,e),this.quaternion.multiply(ys),this}rotateOnWorldAxis(t,e){return ys.setFromAxisAngle(t,e),this.quaternion.premultiply(ys),this}rotateX(t){return this.rotateOnAxis(Mh,t)}rotateY(t){return this.rotateOnAxis(Sh,t)}rotateZ(t){return this.rotateOnAxis(wh,t)}translateOnAxis(t,e){return yh.copy(t).applyQuaternion(this.quaternion),this.position.add(yh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mh,t)}translateY(t){return this.translateOnAxis(Sh,t)}translateZ(t){return this.translateOnAxis(wh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Jr.copy(t):Jr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(nr,Jr,this.up):li.lookAt(Jr,nr,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),ys.setFromRotationMatrix(li),this.quaternion.premultiply(ys.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(fe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bh),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null):fe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ep),Ta.child=t,this.dispatchEvent(Ta),Ta.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),li.multiply(t.parent.matrixWorld)),t.applyMatrix4(li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bh),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,t,wp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,bp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}me.DEFAULT_UP=new F(0,1,0);me.DEFAULT_MATRIX_AUTO_UPDATE=!0;me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $t extends me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tp={type:"move"};class Aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Tp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new $t;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},$r={h:0,s:0,l:0};function Ra(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class It{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=pe.workingColorSpace){if(t=Rc(t,1),e=re(e,0,1),n=re(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ra(o,r,t+1/3),this.g=Ra(o,r,t),this.b=Ra(o,r,t-1/3)}return pe.colorSpaceToWorking(this,s),this}setStyle(t,e=Be){function n(r){r!==void 0&&parseFloat(r)<1&&Jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){const n=cd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vi(t.r),this.g=vi(t.g),this.b=vi(t.b),this}copyLinearToSRGB(t){return this.r=Bs(t.r),this.g=Bs(t.g),this.b=Bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return pe.workingToColorSpace(cn.copy(this),t),Math.round(re(cn.r*255,0,255))*65536+Math.round(re(cn.g*255,0,255))*256+Math.round(re(cn.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.workingToColorSpace(cn.copy(this),e);const n=cn.r,s=cn.g,r=cn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=pe.workingColorSpace){return pe.workingToColorSpace(cn.copy(this),e),t.r=cn.r,t.g=cn.g,t.b=cn.b,t}getStyle(t=Be){pe.workingToColorSpace(cn.copy(this),t);const e=cn.r,n=cn.g,s=cn.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ai),this.setHSL(Ai.h+t,Ai.s+e,Ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ai),t.getHSL($r);const n=Mr(Ai.h,$r.h,e),s=Mr(Ai.s,$r.s,e),r=Mr(Ai.l,$r.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new It;It.NAMES=cd;class Dc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new It(t),this.near=e,this.far=n}clone(){return new Dc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ap extends me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const On=new F,ci=new F,Ca=new F,hi=new F,Ss=new F,ws=new F,Eh=new F,Pa=new F,Da=new F,La=new F,Ia=new ke,Na=new ke,Ua=new ke;class kn{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),On.subVectors(t,e),s.cross(On);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){On.subVectors(s,e),ci.subVectors(n,e),Ca.subVectors(t,e);const o=On.dot(On),a=On.dot(ci),l=On.dot(Ca),c=ci.dot(ci),h=ci.dot(Ca),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hi.x),l.addScaledVector(o,hi.y),l.addScaledVector(a,hi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ia.setScalar(0),Na.setScalar(0),Ua.setScalar(0),Ia.fromBufferAttribute(t,e),Na.fromBufferAttribute(t,n),Ua.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ia,r.x),o.addScaledVector(Na,r.y),o.addScaledVector(Ua,r.z),o}static isFrontFacing(t,e,n,s){return On.subVectors(n,e),ci.subVectors(t,e),On.cross(ci).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return On.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),On.cross(ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return kn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return kn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return kn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return kn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return kn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ss.subVectors(s,n),ws.subVectors(r,n),Pa.subVectors(t,n);const l=Ss.dot(Pa),c=ws.dot(Pa);if(l<=0&&c<=0)return e.copy(n);Da.subVectors(t,s);const h=Ss.dot(Da),d=ws.dot(Da);if(h>=0&&d<=h)return e.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ss,o);La.subVectors(t,r);const f=Ss.dot(La),g=ws.dot(La);if(g>=0&&f<=g)return e.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ws,a);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Eh.subVectors(r,s),a=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(Eh,a);const p=1/(m+v+u);return o=v*p,a=u*p,e.copy(n).addScaledVector(Ss,o).addScaledVector(ws,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Fi{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Fn):Fn.fromBufferAttribute(r,o),Fn.applyMatrix4(t.matrixWorld),this.expandByPoint(Fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qr.copy(n.boundingBox)),Qr.applyMatrix4(t.matrixWorld),this.union(Qr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fn),Fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ir),jr.subVectors(this.max,ir),bs.subVectors(t.a,ir),Es.subVectors(t.b,ir),Ts.subVectors(t.c,ir),Ri.subVectors(Es,bs),Ci.subVectors(Ts,Es),ki.subVectors(bs,Ts);let e=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-ki.z,ki.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,ki.z,0,-ki.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-ki.y,ki.x,0];return!Oa(e,bs,Es,Ts,jr)||(e=[1,0,0,0,1,0,0,0,1],!Oa(e,bs,Es,Ts,jr))?!1:(to.crossVectors(Ri,Ci),e=[to.x,to.y,to.z],Oa(e,bs,Es,Ts,jr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ui=[new F,new F,new F,new F,new F,new F,new F,new F],Fn=new F,Qr=new Fi,bs=new F,Es=new F,Ts=new F,Ri=new F,Ci=new F,ki=new F,ir=new F,jr=new F,to=new F,Gi=new F;function Oa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Gi.fromArray(i,r);const a=s.x*Math.abs(Gi.x)+s.y*Math.abs(Gi.y)+s.z*Math.abs(Gi.z),l=t.dot(Gi),c=e.dot(Gi),h=n.dot(Gi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const mi=Rp();function Rp(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function Cp(i){Math.abs(i)>65504&&Jt("DataUtils.toHalfFloat(): Value out of range."),i=re(i,-65504,65504),mi.floatView[0]=i;const t=mi.uint32View[0],e=t>>23&511;return mi.baseTable[e]+((t&8388607)>>mi.shiftTable[e])}function Pp(i){const t=i>>10;return mi.uint32View[0]=mi.mantissaTable[mi.offsetTable[t]+(i&1023)]+mi.exponentTable[t],mi.floatView[0]}class eo{static toHalfFloat(t){return Cp(t)}static fromHalfFloat(t){return Pp(t)}}const Ye=new F,no=new ht;let Dp=0;class Ne extends Oi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=qf,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)no.fromBufferAttribute(this,e),no.applyMatrix3(t),this.setXY(e,no.x,no.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix3(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ns(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ns(e,this.array)),e}setX(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ns(e,this.array)),e}setY(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ns(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ns(e,this.array)),e}setW(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),n=fn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),n=fn(n,this.array),s=fn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),n=fn(n,this.array),s=fn(s,this.array),r=fn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class hd extends Ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ud extends Ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class oe extends Ne{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Lp=new Fi,sr=new F,Fa=new F;class qs{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Lp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sr.subVectors(t,this.center);const e=sr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(sr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sr.copy(t.center).add(Fa)),this.expandByPoint(sr.copy(t.center).sub(Fa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Ip=0;const Dn=new ae,za=new me,As=new F,En=new Fi,rr=new Fi,je=new F;class xe extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kf(t)?ud:hd)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ne().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Dn.makeRotationFromQuaternion(t),this.applyMatrix4(Dn),this}rotateX(t){return Dn.makeRotationX(t),this.applyMatrix4(Dn),this}rotateY(t){return Dn.makeRotationY(t),this.applyMatrix4(Dn),this}rotateZ(t){return Dn.makeRotationZ(t),this.applyMatrix4(Dn),this}translate(t,e,n){return Dn.makeTranslation(t,e,n),this.applyMatrix4(Dn),this}scale(t,e,n){return Dn.makeScale(t,e,n),this.applyMatrix4(Dn),this}lookAt(t){return za.lookAt(t),za.updateMatrix(),this.applyMatrix4(za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new oe(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(En.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];rr.setFromBufferAttribute(a),this.morphTargetsRelative?(je.addVectors(En.min,rr.min),En.expandByPoint(je),je.addVectors(En.max,rr.max),En.expandByPoint(je)):(En.expandByPoint(rr.min),En.expandByPoint(rr.max))}En.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)je.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(je));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)je.fromBufferAttribute(a,c),l&&(As.fromBufferAttribute(t,c),je.add(As)),s=Math.max(s,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ne(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new F,l[x]=new F;const c=new F,h=new F,d=new F,u=new ht,f=new ht,g=new ht,v=new F,m=new F;function p(x,M,T){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,T),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,T),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const A=1/(f.x*g.y-g.x*f.y);isFinite(A)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(A),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(A),a[x].add(v),a[M].add(v),a[T].add(v),l[x].add(m),l[M].add(m),l[T].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let x=0,M=y.length;x<M;++x){const T=y[x],A=T.start,P=T.count;for(let D=A,L=A+P;D<L;D+=3)p(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const w=new F,_=new F,S=new F,b=new F;function R(x){S.fromBufferAttribute(s,x),b.copy(S);const M=a[x];w.copy(M),w.sub(S.multiplyScalar(S.dot(M))).normalize(),_.crossVectors(b,M);const A=_.dot(l[x])<0?-1:1;o.setXYZW(x,w.x,w.y,w.z,A)}for(let x=0,M=y.length;x<M;++x){const T=y[x],A=T.start,P=T.count;for(let D=A,L=A+P;D<L;D+=3)R(t.getX(D+0)),R(t.getX(D+1)),R(t.getX(D+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,h=new F,d=new F;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Ne(u,h,d)}if(this.index===null)return Jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new xe,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ba=new F,Np=new F,Up=new ne;class pi{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ba.subVectors(n,e).cross(Np.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Ba),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Up.getNormalMatrix(t),s=this.coplanarPoint(Ba).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Op=0;class Ks extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=us(),this.name="",this.type="Material",this.blending=xr,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$u,this.blendDst=Qu,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ma,this.stencilZFail=Ma,this.stencilZPass=Ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Jt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new It().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new pi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ht().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ht().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const di=new F,ka=new F,io=new F,so=new F;class sa{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(di.copy(this.origin).addScaledVector(this.direction,e),di.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ka.copy(t).add(e).multiplyScalar(.5),io.copy(e).sub(t).normalize(),so.copy(this.origin).sub(ka);const r=t.distanceTo(e)*.5,o=-this.direction.dot(io),a=so.dot(this.direction),l=-so.dot(io),c=so.lengthSq(),h=Math.abs(1-o*o);let d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ka).addScaledVector(io,u),f}intersectSphere(t,e){if(t.radius<0)return null;di.subVectors(t.center,this.origin);const n=di.dot(this.direction),s=di.dot(di)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,di)!==null}intersectTriangle(t,e,n,s,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,g=e.x-o.x,v=e.y-o.y,m=e.z-o.z,p=n.x-o.x,y=n.y-o.y,w=n.z-o.z,_=Math.abs(l),S=Math.abs(c),b=Math.abs(h);let R,x,M,T,A,P,D,L,I,U,z,W;if(_>=S&&_>=b?(M=l,P=d,I=g,W=p,l>=0?(R=c,x=h,T=u,A=f,D=v,L=m,U=y,z=w):(R=h,x=c,T=f,A=u,D=m,L=v,U=w,z=y)):S>=b?(M=c,P=u,I=v,W=y,c>=0?(R=h,x=l,T=f,A=d,D=m,L=g,U=w,z=p):(R=l,x=h,T=d,A=f,D=g,L=m,U=p,z=w)):(M=h,P=f,I=m,W=w,h>=0?(R=l,x=c,T=d,A=u,D=g,L=v,U=p,z=y):(R=c,x=l,T=u,A=d,D=v,L=g,U=y,z=p)),M===0)return null;const O=R/M,G=x/M,X=1/M,_t=T-O*P,yt=A-G*P,kt=D-O*I,Zt=L-G*I,jt=U-O*W,j=z-G*W,nt=jt*Zt-j*kt,V=_t*j-yt*jt,rt=kt*yt-Zt*_t;if(s){if(nt<0||V<0||rt<0)return null}else if((nt<0||V<0||rt<0)&&(nt>0||V>0||rt>0))return null;const J=nt+V+rt;if(J===0)return null;const ut=X*(nt*P+V*I+rt*W);return(J>0?ut<0:ut>0)?null:this.at(ut/J,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ri extends Ks{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=ju,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Th=new ae,Hi=new sa,ro=new qs,Ah=new F,oo=new F,ao=new F,lo=new F,Ga=new F,co=new F,Rh=new F,ho=new F;class et extends me{constructor(t=new xe,e=new ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){co.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(Ga.fromBufferAttribute(d,t),o?co.addScaledVector(Ga,h):co.addScaledVector(Ga.sub(e),h))}e.add(co)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(r),Hi.copy(t.ray).recast(t.near),!(ro.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(ro,Ah)===null||Hi.origin.distanceToSquared(Ah)>(t.far-t.near)**2))&&(Th.copy(r).invert(),Hi.copy(t.ray).applyMatrix4(Th),!(n.boundingBox!==null&&Hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Hi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,S=w;_<S;_+=3){const b=a.getX(_),R=a.getX(_+1),x=a.getX(_+2);s=uo(this,p,t,n,c,h,d,b,R,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=a.getX(m),w=a.getX(m+1),_=a.getX(m+2);s=uo(this,o,t,n,c,h,d,y,w,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,S=w;_<S;_+=3){const b=_,R=_+1,x=_+2;s=uo(this,p,t,n,c,h,d,b,R,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=m,w=m+1,_=m+2;s=uo(this,o,t,n,c,h,d,y,w,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Fp(i,t,e,n,s,r,o,a){let l;if(t.side===_n?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===is,a),l===null)return null;ho.copy(a),ho.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ho);return c<e.near||c>e.far?null:{distance:c,point:ho.clone(),object:i}}function uo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,oo),i.getVertexPosition(l,ao),i.getVertexPosition(c,lo);const h=Fp(i,t,e,n,oo,ao,lo,Rh);if(h){const d=new F;kn.getBarycoord(Rh,oo,ao,lo,d),s&&(h.uv=kn.getInterpolatedAttribute(s,a,l,c,d,new ht)),r&&(h.uv1=kn.getInterpolatedAttribute(r,a,l,c,d,new ht)),o&&(h.normal=kn.getInterpolatedAttribute(o,a,l,c,d,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new F,materialIndex:0};kn.getNormal(oo,ao,lo,u.normal),h.face=u,h.barycoord=d}return h}class Zo extends rn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=en,h=en,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sr extends Ne{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Rs=new ae,Ch=new ae,fo=[],Ph=new Fi,zp=new ae,or=new et,ar=new qs;class ze extends et{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Sr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,zp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Fi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Rs),Ph.copy(t.boundingBox).applyMatrix4(Rs),this.boundingBox.union(Ph)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new qs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Rs),ar.copy(t.boundingSphere).applyMatrix4(Rs),this.boundingSphere.union(ar)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(or.geometry=this.geometry,or.material=this.material,or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ar.copy(this.boundingSphere),ar.applyMatrix4(n),t.ray.intersectsSphere(ar)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Rs),Ch.multiplyMatrices(n,Rs),or.matrixWorld=Ch,or.raycast(t,fo);for(let o=0,a=fo.length;o<a;o++){const l=fo[o];l.instanceId=r,l.object=this,e.push(l)}fo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Sr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zo(new Float32Array(s*this.count),s,this.count,Sc,An));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Vi=new qs,Bp=new ht(.5,.5),po=new F;class Lc{constructor(t=new pi,e=new pi,n=new pi,s=new pi,r=new pi,o=new pi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=$n,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],y=r[12],w=r[13],_=r[14],S=r[15];if(s[0].setComponents(c-o,f-h,p-g,S-y).normalize(),s[1].setComponents(c+o,f+h,p+g,S+y).normalize(),s[2].setComponents(c+a,f+d,p+v,S+w).normalize(),s[3].setComponents(c-a,f-d,p-v,S-w).normalize(),n)s[4].setComponents(l,u,m,_).normalize(),s[5].setComponents(c-l,f-u,p-m,S-_).normalize();else if(s[4].setComponents(c-l,f-u,p-m,S-_).normalize(),e===$n)s[5].setComponents(c+l,f+u,p+m,S+_).normalize();else if(e===Lr)s[5].setComponents(l,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(t){Vi.center.set(0,0,0);const e=Bp.distanceTo(t.center);return Vi.radius=.7071067811865476+e,Vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(po.x=s.normal.x>0?t.max.x:t.min.x,po.y=s.normal.y>0?t.max.y:t.min.y,po.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(po)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class es extends Ks{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Dh=new ae,ic=new sa,mo=new qs,go=new F;class ks extends me{constructor(t=new xe,e=new es){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(s),mo.radius+=r,t.ray.intersectsSphere(mo)===!1)return;Dh.copy(s).invert(),ic.copy(t.ray).applyMatrix4(Dh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,v=f;g<v;g++){const m=c.getX(g);go.fromBufferAttribute(d,m),Lh(go,m,l,s,t,e,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,v=f;g<v;g++)go.fromBufferAttribute(d,g),Lh(go,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Lh(i,t,e,n,s,r,o){const a=ic.distanceSqToPoint(i);if(a<e){const l=new F;ic.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class dd extends rn{constructor(t=[],e=ss,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Cn extends rn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Nr extends rn{constructor(t,e,n=ii,s,r,o,a=en,l=en,c,h=yi,d=1){if(h!==yi&&h!==Qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Cc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class kp extends Nr{constructor(t,e=ii,n=ss,s,r,o=en,a=en,l,c=yi){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class fd extends rn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Dt extends xe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(d,2));function g(v,m,p,y,w,_,S,b,R,x,M){const T=_/R,A=S/x,P=_/2,D=S/2,L=b/2,I=R+1,U=x+1;let z=0,W=0;const O=new F;for(let G=0;G<U;G++){const X=G*A-D;for(let _t=0;_t<I;_t++){const yt=_t*T-P;O[v]=yt*y,O[m]=X*w,O[p]=L,c.push(O.x,O.y,O.z),O[v]=0,O[m]=0,O[p]=b>0?1:-1,h.push(O.x,O.y,O.z),d.push(_t/R),d.push(1-G/x),z+=1}}for(let G=0;G<x;G++)for(let X=0;X<R;X++){const _t=u+X+I*G,yt=u+X+I*(G+1),kt=u+(X+1)+I*(G+1),Zt=u+(X+1)+I*G;l.push(_t,yt,Zt),l.push(yt,kt,Zt),W+=6}a.addGroup(f,W,M),f+=W,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class si extends xe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new F,h=new ht;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(a,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new si(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class _e extends xe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const v=[],m=n/2;let p=0;y(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new oe(d,3)),this.setAttribute("normal",new oe(u,3)),this.setAttribute("uv",new oe(f,2));function y(){const _=new F,S=new F;let b=0;const R=(e-t)/n;for(let x=0;x<=r;x++){const M=[],T=x/r,A=T*(e-t)+t;for(let P=0;P<=s;P++){const D=P/s,L=D*l+a,I=Math.sin(L),U=Math.cos(L);S.x=A*I,S.y=-T*n+m,S.z=A*U,d.push(S.x,S.y,S.z),_.set(I,R,U).normalize(),u.push(_.x,_.y,_.z),f.push(D,1-T),M.push(g++)}v.push(M)}for(let x=0;x<s;x++)for(let M=0;M<r;M++){const T=v[M][x],A=v[M+1][x],P=v[M+1][x+1],D=v[M][x+1];(t>0||M!==0)&&(h.push(T,A,D),b+=3),(e>0||M!==r-1)&&(h.push(A,P,D),b+=3)}c.addGroup(p,b,0),p+=b}function w(_){const S=g,b=new ht,R=new F;let x=0;const M=_===!0?t:e,T=_===!0?1:-1;for(let P=1;P<=s;P++)d.push(0,m*T,0),u.push(0,T,0),f.push(.5,.5),g++;const A=g;for(let P=0;P<=s;P++){const L=P/s*l+a,I=Math.cos(L),U=Math.sin(L);R.x=M*U,R.y=m*T,R.z=M*I,d.push(R.x,R.y,R.z),u.push(0,T,0),b.x=I*.5+.5,b.y=U*.5*T+.5,f.push(b.x,b.y),g++}for(let P=0;P<s;P++){const D=S+P,L=A+P;_===!0?h.push(L,L+1,D):h.push(L+1,L,D),x+=3}c.addGroup(p,x,_===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ur extends _e{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ur(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ra extends xe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new oe(r,3)),this.setAttribute("normal",new oe(r.slice(),3)),this.setAttribute("uv",new oe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const w=new F,_=new F,S=new F;for(let b=0;b<e.length;b+=3)f(e[b+0],w),f(e[b+1],_),f(e[b+2],S),l(w,_,S,y)}function l(y,w,_,S){const b=S+1,R=[];for(let x=0;x<=b;x++){R[x]=[];const M=y.clone().lerp(_,x/b),T=w.clone().lerp(_,x/b),A=b-x;for(let P=0;P<=A;P++)P===0&&x===b?R[x][P]=M:R[x][P]=M.clone().lerp(T,P/A)}for(let x=0;x<b;x++)for(let M=0;M<2*(b-x)-1;M++){const T=Math.floor(M/2);M%2===0?(u(R[x][T+1]),u(R[x+1][T]),u(R[x][T])):(u(R[x][T+1]),u(R[x+1][T+1]),u(R[x+1][T]))}}function c(y){const w=new F;for(let _=0;_<r.length;_+=3)w.x=r[_+0],w.y=r[_+1],w.z=r[_+2],w.normalize().multiplyScalar(y),r[_+0]=w.x,r[_+1]=w.y,r[_+2]=w.z}function h(){const y=new F;for(let w=0;w<r.length;w+=3){y.x=r[w+0],y.y=r[w+1],y.z=r[w+2];const _=m(y)/2/Math.PI+.5,S=p(y)/Math.PI+.5;o.push(_,1-S)}g(),d()}function d(){for(let y=0;y<o.length;y+=6){const w=o[y+0],_=o[y+2],S=o[y+4],b=Math.max(w,_,S),R=Math.min(w,_,S);b>.9&&R<.1&&(w<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),S<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,w){const _=y*3;w.x=t[_+0],w.y=t[_+1],w.z=t[_+2]}function g(){const y=new F,w=new F,_=new F,S=new F,b=new ht,R=new ht,x=new ht;for(let M=0,T=0;M<r.length;M+=9,T+=6){y.set(r[M+0],r[M+1],r[M+2]),w.set(r[M+3],r[M+4],r[M+5]),_.set(r[M+6],r[M+7],r[M+8]),b.set(o[T+0],o[T+1]),R.set(o[T+2],o[T+3]),x.set(o[T+4],o[T+5]),S.copy(y).add(w).add(_).divideScalar(3);const A=m(S);v(b,T+0,y,A),v(R,T+2,w,A),v(x,T+4,_,A)}}function v(y,w,_,S){S<0&&y.x===1&&(o[w]=y.x-1),_.x===0&&_.z===0&&(o[w]=S/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ra(t.vertices,t.indices,t.radius,t.detail)}}class Ic extends ra{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ic(t.radius,t.detail)}}class oi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ht:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new F,s=[],r=[],o=[],a=new F,l=new ae;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new F)}r[0]=new F,o[0]=new F;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(re(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(re(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Nc extends oi{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ht){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Gp extends Nc{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Uc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Ih=new F,Nh=new F,Ha=new Uc,Va=new Uc,Wa=new Uc;class Hp extends oi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new F){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Nh.subVectors(s[0],s[1]).add(s[0]),c=Nh);const d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ih.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ih),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Ha.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,v,m),Va.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,v,m),Wa.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Ha.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Va.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Wa.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Ha.calc(l),Va.calc(l),Wa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Uh(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Vp(i,t){const e=1-i;return e*e*t}function Wp(i,t){return 2*(1-i)*i*t}function Xp(i,t){return i*i*t}function wr(i,t,e,n){return Vp(i,t)+Wp(i,e)+Xp(i,n)}function Yp(i,t){const e=1-i;return e*e*e*t}function qp(i,t){const e=1-i;return 3*e*e*i*t}function Kp(i,t){return 3*(1-i)*i*i*t}function Zp(i,t){return i*i*i*t}function br(i,t,e,n,s){return Yp(i,t)+qp(i,e)+Kp(i,n)+Zp(i,s)}class pd extends oi{constructor(t=new ht,e=new ht,n=new ht,s=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ht){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(br(t,s.x,r.x,o.x,a.x),br(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Jp extends oi{constructor(t=new F,e=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new F){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(br(t,s.x,r.x,o.x,a.x),br(t,s.y,r.y,o.y,a.y),br(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class md extends oi{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $p extends oi{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gd extends oi{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(wr(t,s.x,r.x,o.x),wr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jo extends oi{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(wr(t,s.x,r.x,o.x),wr(t,s.y,r.y,o.y),wr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _d extends oi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Uh(a,l.x,c.x,h.x,d.x),Uh(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ht().fromArray(s))}return this}}var $o=Object.freeze({__proto__:null,ArcCurve:Gp,CatmullRomCurve3:Hp,CubicBezierCurve:pd,CubicBezierCurve3:Jp,EllipseCurve:Nc,LineCurve:md,LineCurve3:$p,QuadraticBezierCurve:gd,QuadraticBezierCurve3:Jo,SplineCurve:_d});class Qp extends oi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $o[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new $o[s.type]().fromJSON(s))}return this}}class Oh extends Qp{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new md(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new gd(this.currentPoint.clone(),new ht(t,e),new ht(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new pd(this.currentPoint.clone(),new ht(t,e),new ht(n,s),new ht(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new _d(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new Nc(t,e,n,s,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Hr extends Oh{constructor(t){super(t),this.uuid=us(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Oh().fromJSON(s))}return this}}function jp(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=xd(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=s0(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,d=l;for(let u=e;u<s;u+=e){const f=i[u],g=i[u+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Or(r,o,e,a,l,c,0),o}function xd(i,t,e,n,s){let r;if(s===m0(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Fh(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Fh(o/n|0,i[o],i[o+1],r);return r&&Ws(r,r.next)&&(zr(r),r=r.next),r}function os(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ws(e,e.next)||Ge(e.prev,e,e.next)===0)){if(zr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Or(i,t,e,n,s,r,o){if(!i)return;!o&&r&&c0(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?e0(i,n,s,r):t0(i)){t.push(l.i,i.i,c.i),zr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=n0(os(i),t),Or(i,t,e,n,s,r,2)):o===2&&i0(i,t,e,n,s,r):Or(os(i),t,e,n,s,r,1);break}}}function t0(i){const t=i.prev,e=i,n=i.next;if(Ge(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&fr(s,a,r,l,o,c,g.x,g.y)&&Ge(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function e0(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Ge(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),g=Math.min(h,d,u),v=Math.max(a,l,c),m=Math.max(h,d,u),p=sc(f,g,t,e,n),y=sc(v,m,t,e,n);let w=i.prevZ,_=i.nextZ;for(;w&&w.z>=p&&_&&_.z<=y;){if(w.x>=f&&w.x<=v&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&fr(a,h,l,d,c,u,w.x,w.y)&&Ge(w.prev,w,w.next)>=0||(w=w.prevZ,_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&fr(a,h,l,d,c,u,_.x,_.y)&&Ge(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;w&&w.z>=p;){if(w.x>=f&&w.x<=v&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&fr(a,h,l,d,c,u,w.x,w.y)&&Ge(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&fr(a,h,l,d,c,u,_.x,_.y)&&Ge(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function n0(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Ws(n,s)&&yd(n,e,e.next,s)&&Fr(n,s)&&Fr(s,n)&&(t.push(n.i,e.i,s.i),zr(e),zr(e.next),e=i=s),e=e.next}while(e!==i);return os(e)}function i0(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&d0(o,a)){let l=Md(o,a);o=os(o,o.next),l=os(l,l.next),Or(o,t,e,n,s,r,0),Or(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function s0(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=xd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(u0(c))}s.sort(r0);for(let r=0;r<s.length;r++)e=o0(s[r],e);return e}function r0(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function o0(i,t){const e=a0(i,t);if(!e)return t;const n=Md(e,i);return os(n,n.next),os(e,e.next)}function a0(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(Ws(i,e))return e;do{if(Ws(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&vd(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const d=Math.abs(s-e.y)/(n-e.x);Fr(e,i)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&l0(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function l0(i,t){return Ge(i.prev,i,t.prev)<0&&Ge(t.next,i,i.next)<0}function c0(i,t,e,n){let s=i;do s.z===0&&(s.z=sc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,h0(s)}function h0(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function sc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function u0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function vd(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function fr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&vd(i,t,e,n,s,r,o,a)}function d0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!f0(i,t)&&(Fr(i,t)&&Fr(t,i)&&p0(i,t)&&(Ge(i.prev,i,t.prev)||Ge(i,t.prev,t))||Ws(i,t)&&Ge(i.prev,i,i.next)>0&&Ge(t.prev,t,t.next)>0)}function Ge(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ws(i,t){return i.x===t.x&&i.y===t.y}function yd(i,t,e,n){const s=xo(Ge(i,t,e)),r=xo(Ge(i,t,n)),o=xo(Ge(e,n,i)),a=xo(Ge(e,n,t));return!!(s!==r&&o!==a||s===0&&_o(i,e,t)||r===0&&_o(i,n,t)||o===0&&_o(e,i,n)||a===0&&_o(e,t,n))}function _o(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function xo(i){return i>0?1:i<0?-1:0}function f0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&yd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Fr(i,t){return Ge(i.prev,i,i.next)<0?Ge(i,t,i.next)>=0&&Ge(i,i.prev,t)>=0:Ge(i,t,i.prev)<0||Ge(i,i.next,t)<0}function p0(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Md(i,t){const e=rc(i.i,i.x,i.y),n=rc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Fh(i,t,e,n){const s=rc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function zr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function rc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function m0(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class g0{static triangulate(t,e,n=2){return jp(t,e,n)}}class gi{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return gi.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];zh(t),Bh(n,t);let o=t.length;e.forEach(zh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Bh(n,e[l]);const a=g0.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function zh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Bh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Oc extends xe{constructor(t=new Hr([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new oe(s,3)),this.setAttribute("uv",new oe(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:_0;let w,_=!1,S,b,R,x;if(p){w=p.getSpacedPoints(h),_=!0,u=!1;const $=p.isCatmullRomCurve3?p.closed:!1;S=p.computeFrenetFrames(h,$),b=new F,R=new F,x=new F}u||(m=0,f=0,g=0,v=0);const M=a.extractPoints(c);let T=M.shape;const A=M.holes;if(!gi.isClockWise(T)){T=T.reverse();for(let $=0,tt=A.length;$<tt;$++){const ct=A[$];gi.isClockWise(ct)&&(A[$]=ct.reverse())}}function D($){const ct=10000000000000001e-36;let pt=$[0];for(let mt=1;mt<=$.length;mt++){const gt=mt%$.length,St=$[gt],vt=St.x-pt.x,zt=St.y-pt.y,B=vt*vt+zt*zt,te=Math.max(Math.abs(St.x),Math.abs(St.y),Math.abs(pt.x),Math.abs(pt.y)),le=ct*te*te;if(B<=le){$.splice(gt,1),mt--;continue}pt=St}}D(T),A.forEach(D);const L=A.length,I=T;for(let $=0;$<L;$++){const tt=A[$];T=T.concat(tt)}function U($,tt,ct){return tt||fe("ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(tt,ct)}const z=T.length;function W($,tt,ct){let pt,mt,gt;const St=$.x-tt.x,vt=$.y-tt.y,zt=ct.x-$.x,B=ct.y-$.y,te=St*St+vt*vt,le=St*B-vt*zt;if(Math.abs(le)>Number.EPSILON){const N=Math.sqrt(te),E=Math.sqrt(zt*zt+B*B),Y=tt.x-vt/N,Z=tt.y+St/N,it=ct.x-B/E,Mt=ct.y+zt/E,bt=((it-Y)*B-(Mt-Z)*zt)/(St*B-vt*zt);pt=Y+St*bt-$.x,mt=Z+vt*bt-$.y;const st=pt*pt+mt*mt;if(st<=2)return new ht(pt,mt);gt=Math.sqrt(st/2)}else{let N=!1;St>Number.EPSILON?zt>Number.EPSILON&&(N=!0):St<-Number.EPSILON?zt<-Number.EPSILON&&(N=!0):Math.sign(vt)===Math.sign(B)&&(N=!0),N?(pt=-vt,mt=St,gt=Math.sqrt(te)):(pt=St,mt=vt,gt=Math.sqrt(te/2))}return new ht(pt/gt,mt/gt)}const O=[];for(let $=0,tt=I.length,ct=tt-1,pt=$+1;$<tt;$++,ct++,pt++)ct===tt&&(ct=0),pt===tt&&(pt=0),O[$]=W(I[$],I[ct],I[pt]);const G=[];let X,_t=O.concat();for(let $=0,tt=L;$<tt;$++){const ct=A[$];X=[];for(let pt=0,mt=ct.length,gt=mt-1,St=pt+1;pt<mt;pt++,gt++,St++)gt===mt&&(gt=0),St===mt&&(St=0),X[pt]=W(ct[pt],ct[gt],ct[St]);G.push(X),_t=_t.concat(X)}let yt;if(m===0)yt=gi.triangulateShape(I,A);else{const $=[],tt=[];for(let ct=0;ct<m;ct++){const pt=ct/m,mt=f*Math.cos(pt*Math.PI/2),gt=g*Math.sin(pt*Math.PI/2)+v;for(let St=0,vt=I.length;St<vt;St++){const zt=U(I[St],O[St],gt);V(zt.x,zt.y,-mt),pt===0&&$.push(zt)}for(let St=0,vt=L;St<vt;St++){const zt=A[St];X=G[St];const B=[];for(let te=0,le=zt.length;te<le;te++){const N=U(zt[te],X[te],gt);V(N.x,N.y,-mt),pt===0&&B.push(N)}pt===0&&tt.push(B)}}yt=gi.triangulateShape($,tt)}const kt=yt.length,Zt=g+v;for(let $=0;$<z;$++){const tt=u?U(T[$],_t[$],Zt):T[$];_?(R.copy(S.normals[0]).multiplyScalar(tt.x),b.copy(S.binormals[0]).multiplyScalar(tt.y),x.copy(w[0]).add(R).add(b),V(x.x,x.y,x.z)):V(tt.x,tt.y,0)}for(let $=1;$<=h;$++)for(let tt=0;tt<z;tt++){const ct=u?U(T[tt],_t[tt],Zt):T[tt];_?(R.copy(S.normals[$]).multiplyScalar(ct.x),b.copy(S.binormals[$]).multiplyScalar(ct.y),x.copy(w[$]).add(R).add(b),V(x.x,x.y,x.z)):V(ct.x,ct.y,d/h*$)}for(let $=m-1;$>=0;$--){const tt=$/m,ct=f*Math.cos(tt*Math.PI/2),pt=g*Math.sin(tt*Math.PI/2)+v;for(let mt=0,gt=I.length;mt<gt;mt++){const St=U(I[mt],O[mt],pt);V(St.x,St.y,d+ct)}for(let mt=0,gt=A.length;mt<gt;mt++){const St=A[mt];X=G[mt];for(let vt=0,zt=St.length;vt<zt;vt++){const B=U(St[vt],X[vt],pt);_?V(B.x,B.y+w[h-1].y,w[h-1].x+ct):V(B.x,B.y,d+ct)}}}jt(),j();function jt(){const $=s.length/3;if(u){let tt=0,ct=z*tt;for(let pt=0;pt<kt;pt++){const mt=yt[pt];rt(mt[2]+ct,mt[1]+ct,mt[0]+ct)}tt=h+m*2,ct=z*tt;for(let pt=0;pt<kt;pt++){const mt=yt[pt];rt(mt[0]+ct,mt[1]+ct,mt[2]+ct)}}else{for(let tt=0;tt<kt;tt++){const ct=yt[tt];rt(ct[2],ct[1],ct[0])}for(let tt=0;tt<kt;tt++){const ct=yt[tt];rt(ct[0]+z*h,ct[1]+z*h,ct[2]+z*h)}}n.addGroup($,s.length/3-$,0)}function j(){const $=s.length/3;let tt=0;nt(I,tt),tt+=I.length;for(let ct=0,pt=A.length;ct<pt;ct++){const mt=A[ct];nt(mt,tt),tt+=mt.length}n.addGroup($,s.length/3-$,1)}function nt($,tt){let ct=$.length;for(;--ct>=0;){const pt=ct;let mt=ct-1;mt<0&&(mt=$.length-1);for(let gt=0,St=h+m*2;gt<St;gt++){const vt=z*gt,zt=z*(gt+1),B=tt+pt+vt,te=tt+mt+vt,le=tt+mt+zt,N=tt+pt+zt;J(B,te,le,N)}}}function V($,tt,ct){l.push($),l.push(tt),l.push(ct)}function rt($,tt,ct){ut($),ut(tt),ut(ct);const pt=s.length/3,mt=y.generateTopUV(n,s,pt-3,pt-2,pt-1);xt(mt[0]),xt(mt[1]),xt(mt[2])}function J($,tt,ct,pt){ut($),ut(tt),ut(pt),ut(tt),ut(ct),ut(pt);const mt=s.length/3,gt=y.generateSideWallUV(n,s,mt-6,mt-3,mt-2,mt-1);xt(gt[0]),xt(gt[1]),xt(gt[3]),xt(gt[1]),xt(gt[2]),xt(gt[3])}function ut($){s.push(l[$*3+0]),s.push(l[$*3+1]),s.push(l[$*3+2])}function xt($){r.push($.x),r.push($.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return x0(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new $o[s.type]().fromJSON(s)),new Oc(n,t.options)}}const _0={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ht(r,o),new ht(a,l),new ht(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ht(o,1-l),new ht(c,1-d),new ht(u,1-g),new ht(v,1-p)]:[new ht(a,1-l),new ht(h,1-d),new ht(f,1-g),new ht(m,1-p)]}};function x0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Xn extends ra{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Xn(t.radius,t.detail)}}class Zs extends xe{constructor(t=[new ht(0,-.5),new ht(.5,0),new ht(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=re(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,d=new F,u=new ht,f=new F,g=new F,v=new F;let m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let y=0;y<=e;y++){const w=n+y*h*s,_=Math.sin(w),S=Math.cos(w);for(let b=0;b<=t.length-1;b++){d.x=t[b].x*_,d.y=t[b].y,d.z=t[b].x*S,o.push(d.x,d.y,d.z),u.x=y/e,u.y=b/(t.length-1),a.push(u.x,u.y);const R=l[3*b+0]*_,x=l[3*b+1],M=l[3*b+0]*S;c.push(R,x,M)}}for(let y=0;y<e;y++)for(let w=0;w<t.length-1;w++){const _=w+y*t.length,S=_,b=_+t.length,R=_+t.length+1,x=_+1;r.push(S,b,x),r.push(R,x,b)}this.setIndex(r),this.setAttribute("position",new oe(o,3)),this.setAttribute("uv",new oe(a,2)),this.setAttribute("normal",new oe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zs(t.points,t.segments,t.phiStart,t.phiLength)}}class be extends xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const y=p*u-o;for(let w=0;w<c;w++){const _=w*d-r;g.push(_,-y,0),v.push(0,0,1),m.push(w/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const w=y+c*p,_=y+c*(p+1),S=y+1+c*(p+1),b=y+1+c*p;f.push(w,_,b),f.push(_,S,b)}this.setIndex(f),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(v,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new be(t.width,t.height,t.widthSegments,t.heightSegments)}}class Fc extends xe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let d=t;const u=(e-t)/s,f=new F,g=new ht;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let v=0;v<s;v++){const m=v*(n+1);for(let p=0;p<n;p++){const y=p+m,w=y,_=y+n+1,S=y+n+2,b=y+1;a.push(w,_,b),a.push(_,S,b)}}this.setIndex(a),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class oa extends xe{constructor(t=new Hr([new ht(0,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new oe(s,3)),this.setAttribute("normal",new oe(r,3)),this.setAttribute("uv",new oe(o,2));function c(h){const d=s.length/3,u=h.extractPoints(e);let f=u.shape;const g=u.holes;gi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const y=g[m];gi.isClockWise(y)===!0&&(g[m]=y.reverse())}const v=gi.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const y=g[m];f=f.concat(y)}for(let m=0,p=f.length;m<p;m++){const y=f[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,p=v.length;m<p;m++){const y=v[m],w=y[0]+d,_=y[1]+d,S=y[2]+d;n.push(w,_,S),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return v0(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new oa(n,t.curveSegments)}}function v0(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class In extends xe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new F,u=new F,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const y=[],w=p/n,_=o+w*a,S=t*Math.cos(_),b=Math.sqrt(t*t-S*S);let R=0;p===0&&o===0?R=.5/e:p===n&&l===Math.PI&&(R=-.5/e);for(let x=0;x<=e;x++){const M=x/e,T=s+M*r;d.x=-b*Math.cos(T),d.y=S,d.z=b*Math.sin(T),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(M+R,1-w),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const w=h[p][y+1],_=h[p][y],S=h[p+1][y],b=h[p+1][y+1];(p!==0||o>0)&&f.push(w,_,b),(p!==n-1||l<Math.PI)&&f.push(_,S,b)}this.setIndex(f),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(v,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new In(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Js extends xe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],d=[],u=new F,f=new F,g=new F;for(let v=0;v<=n;v++){const m=o+v/n*a;for(let p=0;p<=s;p++){const y=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(y),f.y=(t+e*Math.cos(m))*Math.sin(y),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=s;m++){const p=(s+1)*v+m-1,y=(s+1)*(v-1)+m-1,w=(s+1)*(v-1)+m,_=(s+1)*v+m;l.push(p,y,_),l.push(y,w,_)}this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Js(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class Qo extends xe{constructor(t=new Jo(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new F,l=new F,c=new ht;let h=new F;const d=[],u=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new oe(d,3)),this.setAttribute("normal",new oe(u,3)),this.setAttribute("uv",new oe(f,2));function v(){for(let w=0;w<e;w++)m(w);m(r===!1?e:0),y(),p()}function m(w){h=t.getPointAt(w/e,h);const _=o.normals[w],S=o.binormals[w];for(let b=0;b<=s;b++){const R=b/s*Math.PI*2,x=Math.sin(R),M=-Math.cos(R);l.x=M*_.x+x*S.x,l.y=M*_.y+x*S.y,l.z=M*_.z+x*S.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let w=1;w<=e;w++)for(let _=1;_<=s;_++){const S=(s+1)*(w-1)+(_-1),b=(s+1)*w+(_-1),R=(s+1)*w+_,x=(s+1)*(w-1)+_;g.push(S,b,x),g.push(b,R,x)}}function y(){for(let w=0;w<=e;w++)for(let _=0;_<=s;_++)c.x=w/e,c.y=_/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Qo(new $o[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function Xs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(kh(s))s.isRenderTargetTexture?(Jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(kh(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function pn(i){const t={};for(let e=0;e<i.length;e++){const n=Xs(i[e]);for(const s in n)t[s]=n[s]}return t}function kh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function y0(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Sd(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}const Br={clone:Xs,merge:pn};var M0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,S0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nn extends Ks{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=M0,this.fragmentShader=S0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xs(t.uniforms),this.uniformsGroups=y0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new It().setHex(s.value);break;case"v2":this.uniforms[n].value=new ht().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ke().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ne().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ae().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class wd extends nn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class dt extends Ks{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nc,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class w0 extends Ks{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class b0 extends Ks{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Er={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Gh(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Gh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Gh(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class E0{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const T0=new E0;class $s{constructor(t){this.manager=t!==void 0?t:T0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}$s.DEFAULT_MATERIAL_NAME="__DEFAULT";const fi={};class A0 extends Error{constructor(t,e){super(t),this.response=e}}class bd extends $s{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Er.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(fi[t]!==void 0){fi[t].push({onLoad:e,onProgress:n,onError:s});return}fi[t]=[],fi[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Jt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=fi[t],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0;let v=0;const m=new ReadableStream({start(p){y();function y(){d.read().then(({done:w,value:_})=>{if(w)p.close();else{v+=_.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let b=0,R=h.length;b<R;b++){const x=h[b];x.onProgress&&x.onProgress(S)}p.enqueue(_),y()}},w=>{p.error(w)})}}});return new Response(m)}else throw new A0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Er.add(`file:${t}`,c);const h=fi[t];delete fi[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=fi[t];if(h===void 0)throw this.manager.itemError(t),c;delete fi[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Cs=new WeakMap;class R0 extends $s{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Er.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let d=Cs.get(o);d===void 0&&(d=[],Cs.set(o,d)),d.push({onLoad:e,onError:s})}return o}const a=Ir("img");function l(){h(),e&&e(this);const d=Cs.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}Cs.delete(this),r.manager.itemEnd(t)}function c(d){h(),s&&s(d),Er.remove(`image:${t}`);const u=Cs.get(this)||[];for(let f=0;f<u.length;f++){const g=u[f];g.onError&&g.onError(d)}Cs.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Er.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}}class C0 extends $s{constructor(t){super(t)}load(t,e,n,s){const r=this,o=new Zo,a=new bd(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(t,function(l){let c;try{c=r.parse(l)}catch(h){s!==void 0?s(h):fe(h);return}r._applyTexData(o,c),e&&e(o,c)},n,s),o}createDataTexture(t){const e=new Zo;return this._applyTexData(e,this.parse(t)),e}_applyTexData(t,e){e.image!==void 0?t.image=e.image:e.data!==void 0&&(t.image.width=e.width,t.image.height=e.height,t.image.data=e.data),t.wrapS=e.wrapS!==void 0?e.wrapS:Gn,t.wrapT=e.wrapT!==void 0?e.wrapT:Gn,t.magFilter=e.magFilter!==void 0?e.magFilter:Xe,t.minFilter=e.minFilter!==void 0?e.minFilter:Xe,t.anisotropy=e.anisotropy!==void 0?e.anisotropy:1,e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.mipmaps!==void 0&&(t.mipmaps=e.mipmaps,t.minFilter=Ii),e.mipmapCount===1&&(t.minFilter=Xe),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),t.needsUpdate=!0}}class Ed extends $s{constructor(t){super(t)}load(t,e,n,s){const r=new rn,o=new R0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class aa extends me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class P0 extends aa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Xa=new ae,Hh=new F,Vh=new F;class zc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lc,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Hh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hh),Vh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Vh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Xa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Xa,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Lr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Xa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const vo=new F,yo=new Wn,Kn=new F;class Td extends me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(vo,yo,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vo,yo,Kn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(vo,yo,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vo,yo,Kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Pi=new F,Wh=new ht,Xh=new ht;class Mn extends Td{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Vs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z)}getViewSize(t,e){return this.getViewBounds(t,Wh,Xh),e.subVectors(Xh,Wh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(yr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class D0 extends zc{constructor(){super(new Mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=Vs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class L0 extends aa{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new D0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class I0 extends zc{constructor(){super(new Mn(90,1,.5,500)),this.isPointLightShadow=!0}}class Bc extends aa{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new I0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class la extends Td{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class N0 extends zc{constructor(){super(new la(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oc extends aa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.shadow=new N0}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}let Mo;class Ad{static getContext(){return Mo===void 0&&(Mo=new(window.AudioContext||window.webkitAudioContext)),Mo}static setContext(t){Mo=t}}class Yh extends $s{constructor(t){super(t)}load(t,e,n,s){const r=this,o=new bd(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){try{const c=l.slice(0),h=Ad.getContext(),d=t+"#decode";r.manager.itemStart(d),h.decodeAudioData(c,function(u){e(u),r.manager.itemEnd(d)}).catch(function(u){a(u),r.manager.itemEnd(d)})}catch(c){a(c)}},n,s);function a(l){s?s(l):fe(l),r.manager.itemError(t)}}}const Ps=-90,Ds=1;class U0 extends me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Mn(Ps,Ds,t,e);s.layers=this.layers,this.add(s);const r=new Mn(Ps,Ds,t,e);r.layers=this.layers,this.add(r);const o=new Mn(Ps,Ds,t,e);o.layers=this.layers,this.add(o);const a=new Mn(Ps,Ds,t,e);a.layers=this.layers,this.add(a);const l=new Mn(Ps,Ds,t,e);l.layers=this.layers,this.add(l);const c=new Mn(Ps,Ds,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===$n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class O0 extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class kc{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=F0.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function F0(){this._document.hidden===!1&&this.reset()}const Wi=new F,Ya=new Wn,z0=new F,Xi=new F,Yi=new F;class B0 extends me{constructor(){super(),this.type="AudioListener",this.context=Ad.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new kc}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t),this._timer.update();const e=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(Wi,Ya,z0),Xi.set(0,0,-1).applyQuaternion(Ya),Yi.set(0,1,0).applyQuaternion(Ya),e.positionX){const n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Wi.x,n),e.positionY.linearRampToValueAtTime(Wi.y,n),e.positionZ.linearRampToValueAtTime(Wi.z,n),e.forwardX.linearRampToValueAtTime(Xi.x,n),e.forwardY.linearRampToValueAtTime(Xi.y,n),e.forwardZ.linearRampToValueAtTime(Xi.z,n),e.upX.linearRampToValueAtTime(Yi.x,n),e.upY.linearRampToValueAtTime(Yi.y,n),e.upZ.linearRampToValueAtTime(Yi.z,n)}else e.setPosition(Wi.x,Wi.y,Wi.z),e.setOrientation(Xi.x,Xi.y,Xi.z,Yi.x,Yi.y,Yi.z)}}class k0 extends me{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){Jt("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){Jt("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){Jt("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){Jt("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){Jt("Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(Jt("Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){Jt("Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}copy(t,e){return super.copy(t,e),t.sourceType!=="buffer"?(Jt("Audio: Audio source type cannot be copied."),this):(this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this)}clone(t){return new this.constructor(this.listener).copy(this,t)}}const qi=new F,qh=new Wn,G0=new F,Ki=new F;class H0 extends k0{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(qi,qh,G0),Ki.set(0,0,1).applyQuaternion(qh);const e=this.panner;if(e.positionX){const n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(qi.x,n),e.positionY.linearRampToValueAtTime(qi.y,n),e.positionZ.linearRampToValueAtTime(qi.z,n),e.orientationX.linearRampToValueAtTime(Ki.x,n),e.orientationY.linearRampToValueAtTime(Ki.y,n),e.orientationZ.linearRampToValueAtTime(Ki.z,n)}else e.setPosition(qi.x,qi.y,qi.z),e.setOrientation(Ki.x,Ki.y,Ki.z)}}const Kh=new ae;class V0{constructor(t,e,n=0,s=1/0){this.ray=new sa(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Pc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):fe("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Kh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Kh),this}intersectObject(t,e=!0,n=[]){return ac(t,this,n,e),n.sort(Zh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ac(t[s],this,n,e);return n.sort(Zh),n}}function Zh(i,t){return i.distance-t.distance}function ac(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)ac(r[o],t,e,!0)}}class Jh{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=re(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(re(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const oh=class oh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};oh.prototype.isMatrix2=!0;let $h=oh;class W0 extends Oi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Qh(i,t,e,n){const s=X0(n);switch(e){case rd:return i*t;case Sc:return i*t/s.components*s.byteLength;case wc:return i*t/s.components*s.byteLength;case rs:return i*t*2/s.components*s.byteLength;case bc:return i*t*2/s.components*s.byteLength;case od:return i*t*3/s.components*s.byteLength;case Hn:return i*t*4/s.components*s.byteLength;case Ec:return i*t*4/s.components*s.byteLength;case Lo:case Io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case No:case Uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Al:case Cl:return Math.max(i,16)*Math.max(t,8)/4;case Tl:case Rl:return Math.max(i,8)*Math.max(t,8)/2;case Pl:case Dl:case Il:case Nl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ll:case Yo:case Ul:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ol:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case zl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case kl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Gl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Vl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Yl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ql:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Kl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Zl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Jl:case $l:case Ql:return Math.ceil(i/4)*Math.ceil(t/4)*16;case jl:case tc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case qo:case ec:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function X0(i){switch(i){case Tn:case ed:return{byteLength:1,components:1};case Cr:case nd:case sn:return{byteLength:2,components:1};case yc:case Mc:return{byteLength:2,components:4};case ii:case vc:case An:return{byteLength:4,components:1};case id:case sd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pc}}));typeof window<"u"&&(window.__THREE__?Jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Rd(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Y0(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var q0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,K0=`#ifdef USE_ALPHAHASH
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
#endif`,Z0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,J0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Q0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,j0=`#ifdef USE_AOMAP
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
#endif`,tm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,em=`#ifdef USE_BATCHING
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
#endif`,nm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,im=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,om=`#ifdef USE_IRIDESCENCE
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
#endif`,am=`#ifdef USE_BUMPMAP
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
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,gm=`#define PI 3.141592653589793
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
} // validated`,_m=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xm=`vec3 transformedNormal = objectNormal;
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
#endif`,vm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ym=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wm="gl_FragColor = linearToOutputTexel( gl_FragColor );",bm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Em=`#ifdef USE_ENVMAP
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
#endif`,Tm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
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
#endif`,Rm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cm=`#ifdef USE_ENVMAP
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
#endif`,Pm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Im=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nm=`#ifdef USE_GRADIENTMAP
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
}`,Um=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Om=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Bm=`#ifdef USE_ENVMAP
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
#endif`,km=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wm=`PhysicalMaterial material;
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
#endif`,Xm=`uniform sampler2D dfgLUT;
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
}`,Ym=`
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
#endif`,qm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Km=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Jm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$m=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ng=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ig=`#if defined( USE_POINTS_UV )
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
#endif`,sg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,og=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ag=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cg=`#ifdef USE_MORPHTARGETS
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
#endif`,hg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ug=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gg=`#ifdef USE_NORMALMAP
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
#endif`,_g=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Eg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ag=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lg=`float getShadowMask() {
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
}`,Ig=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ng=`#ifdef USE_SKINNING
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
#endif`,Ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Og=`#ifdef USE_SKINNING
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
#endif`,Fg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gg=`#ifdef USE_TRANSMISSION
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
#endif`,Hg=`#ifdef USE_TRANSMISSION
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
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kg=`uniform sampler2D t2D;
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
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jg=`#include <common>
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
}`,t_=`#if DEPTH_PACKING == 3200
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
}`,e_=`#define DISTANCE
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
}`,n_=`#define DISTANCE
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
}`,i_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r_=`uniform float scale;
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
}`,o_=`uniform vec3 diffuse;
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
}`,a_=`#include <common>
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
}`,l_=`uniform vec3 diffuse;
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
}`,c_=`#define LAMBERT
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
}`,h_=`#define LAMBERT
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
}`,u_=`#define MATCAP
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
}`,d_=`#define MATCAP
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
}`,f_=`#define NORMAL
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
}`,p_=`#define NORMAL
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
}`,m_=`#define PHONG
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
}`,g_=`#define PHONG
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
}`,__=`#define STANDARD
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
}`,x_=`#define STANDARD
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
}`,v_=`#define TOON
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
}`,y_=`#define TOON
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
}`,M_=`uniform float size;
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
}`,S_=`uniform vec3 diffuse;
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
}`,w_=`#include <common>
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
}`,b_=`uniform vec3 color;
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
}`,E_=`uniform float rotation;
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
}`,T_=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:q0,alphahash_pars_fragment:K0,alphamap_fragment:Z0,alphamap_pars_fragment:J0,alphatest_fragment:$0,alphatest_pars_fragment:Q0,aomap_fragment:j0,aomap_pars_fragment:tm,batching_pars_vertex:em,batching_vertex:nm,begin_vertex:im,beginnormal_vertex:sm,bsdfs:rm,iridescence_fragment:om,bumpmap_pars_fragment:am,clipping_planes_fragment:lm,clipping_planes_pars_fragment:cm,clipping_planes_pars_vertex:hm,clipping_planes_vertex:um,color_fragment:dm,color_pars_fragment:fm,color_pars_vertex:pm,color_vertex:mm,common:gm,cube_uv_reflection_fragment:_m,defaultnormal_vertex:xm,displacementmap_pars_vertex:vm,displacementmap_vertex:ym,emissivemap_fragment:Mm,emissivemap_pars_fragment:Sm,colorspace_fragment:wm,colorspace_pars_fragment:bm,envmap_fragment:Em,envmap_common_pars_fragment:Tm,envmap_pars_fragment:Am,envmap_pars_vertex:Rm,envmap_physical_pars_fragment:Bm,envmap_vertex:Cm,fog_vertex:Pm,fog_pars_vertex:Dm,fog_fragment:Lm,fog_pars_fragment:Im,gradientmap_pars_fragment:Nm,lightmap_pars_fragment:Um,lights_lambert_fragment:Om,lights_lambert_pars_fragment:Fm,lights_pars_begin:zm,lights_toon_fragment:km,lights_toon_pars_fragment:Gm,lights_phong_fragment:Hm,lights_phong_pars_fragment:Vm,lights_physical_fragment:Wm,lights_physical_pars_fragment:Xm,lights_fragment_begin:Ym,lights_fragment_maps:qm,lights_fragment_end:Km,lightprobes_pars_fragment:Zm,logdepthbuf_fragment:Jm,logdepthbuf_pars_fragment:$m,logdepthbuf_pars_vertex:Qm,logdepthbuf_vertex:jm,map_fragment:tg,map_pars_fragment:eg,map_particle_fragment:ng,map_particle_pars_fragment:ig,metalnessmap_fragment:sg,metalnessmap_pars_fragment:rg,morphinstance_vertex:og,morphcolor_vertex:ag,morphnormal_vertex:lg,morphtarget_pars_vertex:cg,morphtarget_vertex:hg,normal_fragment_begin:ug,normal_fragment_maps:dg,normal_pars_fragment:fg,normal_pars_vertex:pg,normal_vertex:mg,normalmap_pars_fragment:gg,clearcoat_normal_fragment_begin:_g,clearcoat_normal_fragment_maps:xg,clearcoat_pars_fragment:vg,iridescence_pars_fragment:yg,opaque_fragment:Mg,packing:Sg,premultiplied_alpha_fragment:wg,project_vertex:bg,dithering_fragment:Eg,dithering_pars_fragment:Tg,roughnessmap_fragment:Ag,roughnessmap_pars_fragment:Rg,shadowmap_pars_fragment:Cg,shadowmap_pars_vertex:Pg,shadowmap_vertex:Dg,shadowmask_pars_fragment:Lg,skinbase_vertex:Ig,skinning_pars_vertex:Ng,skinning_vertex:Ug,skinnormal_vertex:Og,specularmap_fragment:Fg,specularmap_pars_fragment:zg,tonemapping_fragment:Bg,tonemapping_pars_fragment:kg,transmission_fragment:Gg,transmission_pars_fragment:Hg,uv_pars_fragment:Vg,uv_pars_vertex:Wg,uv_vertex:Xg,worldpos_vertex:Yg,background_vert:qg,background_frag:Kg,backgroundCube_vert:Zg,backgroundCube_frag:Jg,cube_vert:$g,cube_frag:Qg,depth_vert:jg,depth_frag:t_,distance_vert:e_,distance_frag:n_,equirect_vert:i_,equirect_frag:s_,linedashed_vert:r_,linedashed_frag:o_,meshbasic_vert:a_,meshbasic_frag:l_,meshlambert_vert:c_,meshlambert_frag:h_,meshmatcap_vert:u_,meshmatcap_frag:d_,meshnormal_vert:f_,meshnormal_frag:p_,meshphong_vert:m_,meshphong_frag:g_,meshphysical_vert:__,meshphysical_frag:x_,meshtoon_vert:v_,meshtoon_frag:y_,points_vert:M_,points_frag:S_,shadow_vert:w_,shadow_frag:b_,sprite_vert:E_,sprite_frag:T_},Lt={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},Jn={basic:{uniforms:pn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:pn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new It(0)},envMapIntensity:{value:1}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:pn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:pn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:pn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new It(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:pn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:pn([Lt.points,Lt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:pn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:pn([Lt.common,Lt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:pn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:pn([Lt.sprite,Lt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distance:{uniforms:pn([Lt.common,Lt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distance_vert,fragmentShader:ue.distance_frag},shadow:{uniforms:pn([Lt.lights,Lt.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Jn.physical={uniforms:pn([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const So={r:0,b:0,g:0},A_=new ae,Cd=new ne;Cd.set(-1,0,0,0,1,0,0,0,1);function R_(i,t,e,n,s,r){const o=new It(0);let a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){const _=y.backgroundBlurriness>0;w=t.get(w,_)}return w}function g(y){let w=!1;const _=f(y);_===null?m(o,a):_&&_.isColor&&(m(_,1),w=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(y,w){const _=f(w);_&&(_.isCubeTexture||_.mapping===ia)?(c===void 0&&(c=new et(new Dt(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:Xs(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(A_.makeRotationFromEuler(w.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Cd),c.material.toneMapped=pe.getTransfer(_.colorSpace)!==Ee,(h!==_||d!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new et(new be(2,2),new nn({name:"BackgroundMaterial",uniforms:Xs(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=pe.getTransfer(_.colorSpace)!==Ee,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,w){y.getRGB(So,Sd(i)),e.buffers.color.setClear(So.r,So.g,So.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,w=1){o.set(y),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:g,addToRenderList:v,dispose:p}}function C_(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,o=!1;function a(A,P,D,L,I){let U=!1;const z=d(A,L,D,P);r!==z&&(r=z,c(r.object)),U=f(A,L,D,I),U&&g(A,L,D,I),I!==null&&t.update(I,i.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,_(A,P,D,L),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function l(){return i.createVertexArray()}function c(A){return i.bindVertexArray(A)}function h(A){return i.deleteVertexArray(A)}function d(A,P,D,L){const I=L.wireframe===!0;let U=n[P.id];U===void 0&&(U={},n[P.id]=U);const z=A.isInstancedMesh===!0?A.id:0;let W=U[z];W===void 0&&(W={},U[z]=W);let O=W[D.id];O===void 0&&(O={},W[D.id]=O);let G=O[I];return G===void 0&&(G=u(l()),O[I]=G),G}function u(A){const P=[],D=[],L=[];for(let I=0;I<e;I++)P[I]=0,D[I]=0,L[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:L,object:A,attributes:{},index:null}}function f(A,P,D,L){const I=r.attributes,U=P.attributes;let z=0;const W=D.getAttributes();for(const O in W)if(W[O].location>=0){const X=I[O];let _t=U[O];if(_t===void 0&&(O==="instanceMatrix"&&A.instanceMatrix&&(_t=A.instanceMatrix),O==="instanceColor"&&A.instanceColor&&(_t=A.instanceColor)),X===void 0||X.attribute!==_t||_t&&X.data!==_t.data)return!0;z++}return r.attributesNum!==z||r.index!==L}function g(A,P,D,L){const I={},U=P.attributes;let z=0;const W=D.getAttributes();for(const O in W)if(W[O].location>=0){let X=U[O];X===void 0&&(O==="instanceMatrix"&&A.instanceMatrix&&(X=A.instanceMatrix),O==="instanceColor"&&A.instanceColor&&(X=A.instanceColor));const _t={};_t.attribute=X,X&&X.data&&(_t.data=X.data),I[O]=_t,z++}r.attributes=I,r.attributesNum=z,r.index=L}function v(){const A=r.newAttributes;for(let P=0,D=A.length;P<D;P++)A[P]=0}function m(A){p(A,0)}function p(A,P){const D=r.newAttributes,L=r.enabledAttributes,I=r.attributeDivisors;D[A]=1,L[A]===0&&(i.enableVertexAttribArray(A),L[A]=1),I[A]!==P&&(i.vertexAttribDivisor(A,P),I[A]=P)}function y(){const A=r.newAttributes,P=r.enabledAttributes;for(let D=0,L=P.length;D<L;D++)P[D]!==A[D]&&(i.disableVertexAttribArray(D),P[D]=0)}function w(A,P,D,L,I,U,z){z===!0?i.vertexAttribIPointer(A,P,D,I,U):i.vertexAttribPointer(A,P,D,L,I,U)}function _(A,P,D,L){v();const I=L.attributes,U=D.getAttributes(),z=P.defaultAttributeValues;for(const W in U){const O=U[W];if(O.location>=0){let G=I[W];if(G===void 0&&(W==="instanceMatrix"&&A.instanceMatrix&&(G=A.instanceMatrix),W==="instanceColor"&&A.instanceColor&&(G=A.instanceColor)),G!==void 0){const X=G.normalized,_t=G.itemSize,yt=t.get(G);if(yt===void 0)continue;const kt=yt.buffer,Zt=yt.type,jt=yt.bytesPerElement,j=Zt===i.INT||Zt===i.UNSIGNED_INT||G.gpuType===vc;if(G.isInterleavedBufferAttribute){const nt=G.data,V=nt.stride,rt=G.offset;if(nt.isInstancedInterleavedBuffer){for(let J=0;J<O.locationSize;J++)p(O.location+J,nt.meshPerAttribute);A.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let J=0;J<O.locationSize;J++)m(O.location+J);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let J=0;J<O.locationSize;J++)w(O.location+J,_t/O.locationSize,Zt,X,V*jt,(rt+_t/O.locationSize*J)*jt,j)}else{if(G.isInstancedBufferAttribute){for(let nt=0;nt<O.locationSize;nt++)p(O.location+nt,G.meshPerAttribute);A.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let nt=0;nt<O.locationSize;nt++)m(O.location+nt);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let nt=0;nt<O.locationSize;nt++)w(O.location+nt,_t/O.locationSize,Zt,X,_t*jt,_t/O.locationSize*nt*jt,j)}}else if(z!==void 0){const X=z[W];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(O.location,X);break;case 3:i.vertexAttrib3fv(O.location,X);break;case 4:i.vertexAttrib4fv(O.location,X);break;default:i.vertexAttrib1fv(O.location,X)}}}}y()}function S(){M();for(const A in n){const P=n[A];for(const D in P){const L=P[D];for(const I in L){const U=L[I];for(const z in U)h(U[z].object),delete U[z];delete L[I]}}delete n[A]}}function b(A){if(n[A.id]===void 0)return;const P=n[A.id];for(const D in P){const L=P[D];for(const I in L){const U=L[I];for(const z in U)h(U[z].object),delete U[z];delete L[I]}}delete n[A.id]}function R(A){for(const P in n){const D=n[P];for(const L in D){const I=D[L];if(I[A.id]===void 0)continue;const U=I[A.id];for(const z in U)h(U[z].object),delete U[z];delete I[A.id]}}}function x(A){for(const P in n){const D=n[P],L=A.isInstancedMesh===!0?A.id:0,I=D[L];if(I!==void 0){for(const U in I){const z=I[U];for(const W in z)h(z[W].object),delete z[W];delete I[U]}delete D[L],Object.keys(D).length===0&&delete n[P]}}}function M(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:M,resetDefaultState:T,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function P_(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function D_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Hn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const x=R===sn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Tn&&R!==An&&!x&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Jt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:_,maxSamples:S,samples:b}}function L_(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new pi,a=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,w=y*4;let _=p.clippingState||null;l.value=_,_=h(g,u,w,f);for(let S=0;S!==w;++S)_[S]=e[S];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,_=f;w!==v;++w,_+=4)o.copy(d[w]).applyMatrix4(y,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}const Os=4,I_=6,N_=20,U_=256,lr=new la,jh=new It;let qa=null,Ka=0,Za=0,Ja=!1;const O_=new F,Zi=new F;class jo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=O_}=r;qa=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),Ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(qa,Ka,Za),this._renderer.xr.enabled=Ja,t.scissorTest=!1,Ls(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ss||t.mapping===Hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qa=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),Ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:sn,format:Hn,colorSpace:Dr,depthBuffer:!1},s=tu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tu(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=F_(r)),this._blurMaterial=B_(r,t,e),this._ggxMaterial=z_(r,t,e)}return s}_compileMaterial(t){const e=new et(new xe,t);this._renderer.compile(e,lr)}_sceneToCubeUV(t,e,n,s,r){const l=new Mn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(jh),d.toneMapping=jn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new et(new Dt,new ri({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let p=!1;const y=t.background;y?y.isColor&&(m.color.copy(y),t.background=null,p=!0):(m.color.copy(jh),p=!0);for(let w=0;w<6;w++){const _=w%3;_===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):_===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));const S=this._cubeSize;Ls(s,_*S,w>2?S:0,S,S),d.setRenderTarget(s),p&&d.render(v,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ss||t.mapping===Hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ls(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,lr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-Os?n-g+Os:0),p=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,Ls(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(a,lr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Ls(t,m,p,3*v,2*v),s.setRenderTarget(t),s.render(a,lr)}_blur(t,e,n,s){const r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;const c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[s],d=3*h*(s>this._lodMax-Os?s-this._lodMax+Os:0),u=4*(this._cubeSize-h);Ls(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,lr)}}function F_(i){const t=[],e=[];let n=i;const s=i-Os+1+I_;for(let r=0;r<s;r++){const o=Math.pow(2,n);t.push(o);const a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),v=new Float32Array(f*u*d);for(let p=0;p<d;p++){const y=p%3*2/3-1,w=p>2?0:-1,_=[y,w,0,y+2/3,w,0,y+2/3,w+1,0,y,w,0,y+2/3,w+1,0,y,w+1,0];g.set(_,f*u*p);for(let S=0;S<u;S++){const b=h[S*2]*2-1,R=h[S*2+1]*2-1;p===0?Zi.set(1,R,b):p===1?Zi.set(-b,1,-R):p===2?Zi.set(-b,R,1):p===3?Zi.set(-1,R,-b):p===4?Zi.set(-b,-1,R):Zi.set(b,R,-1),Zi.toArray(v,(p*u+S)*f)}}const m=new xe;m.setAttribute("position",new Ne(g,f)),m.setAttribute("outputDirection",new Ne(v,f)),e.push(new et(m,null)),n>Os&&n--}return{lodMeshes:e,sizeLods:t}}function tu(i,t,e){const n=new xn(i,t,e);return n.texture.mapping=ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ls(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function z_(i,t,e){return new nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:U_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ca(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function B_(i,t,e){return new nn({name:"SphericalGaussianBlur",defines:{SAMPLES:N_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ca(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function eu(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ca(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function nu(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function ca(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Pd extends xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new dd(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Dt(5,5,5),r=new nn({name:"CubemapFromEquirect",uniforms:Xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:Qn});r.uniforms.tEquirect.value=e;const o=new et(s,r),a=e.minFilter;return e.minFilter===Ii&&(e.minFilter=Xe),new U0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}function k_(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===vr||f===va)if(t.has(u)){const g=t.get(u).texture;return a(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const v=new Pd(g.height);return v.fromEquirectangularTexture(i,u),t.set(u,v),u.addEventListener("dispose",c),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const f=u.mapping,g=f===vr||f===va,v=f===ss||f===Hs;if(g||v){let m=e.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new jo(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const y=u.image;return g&&y&&y.height>0||v&&y&&l(y)?(n===null&&(n=new jo(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===vr?u.mapping=ss:f===va&&(u.mapping=Hs),u}function l(u){let f=0;const g=6;for(let v=0;v<g;v++)u[v]!==void 0&&f++;return f===g}function c(u){const f=u.target;f.removeEventListener("dispose",c);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function G_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&zs("WebGLRenderer: "+n+" extension not supported."),s}}}function H_(i,t,e,n){const s={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,g=d.attributes.position;let v=0;if(g===void 0)return;if(f!==null){const y=f.array;v=f.version;for(let w=0,_=y.length;w<_;w+=3){const S=y[w+0],b=y[w+1],R=y[w+2];u.push(S,b,b,R,R,S)}}else{const y=g.array;v=g.version;for(let w=0,_=y.length/3-1;w<_;w+=3){const S=w+0,b=w+1,R=w+2;u.push(S,b,b,R,R,S)}}const m=new(g.count>=65535?ud:hd)(u,1);m.version=v;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function V_(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let v=0;for(let m=0;m<f;m++)v+=u[m];e.update(v,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function W_(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:fe("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function X_(i,t,e){const n=new WeakMap,s=new ke;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let T=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",T)};var f=T;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let S=a.attributes.position.count*_,b=1;S>t.maxTextureSize&&(b=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const R=new Float32Array(S*b*4*d),x=new ld(R,S,b,d);x.type=An,x.needsUpdate=!0;const M=_*4;for(let A=0;A<d;A++){const P=p[A],D=y[A],L=w[A],I=S*b*4*A;for(let U=0;U<P.count;U++){const z=U*M;g===!0&&(s.fromBufferAttribute(P,U),R[I+z+0]=s.x,R[I+z+1]=s.y,R[I+z+2]=s.z,R[I+z+3]=0),v===!0&&(s.fromBufferAttribute(D,U),R[I+z+4]=s.x,R[I+z+5]=s.y,R[I+z+6]=s.z,R[I+z+7]=0),m===!0&&(s.fromBufferAttribute(L,U),R[I+z+8]=s.x,R[I+z+9]=s.y,R[I+z+10]=s.z,R[I+z+11]=L.itemSize===4?s.w:1)}}u={count:d,texture:x,size:new ht(S,b)},n.set(a,u),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Y_(i,t,e,n,s){let r=new WeakMap;function o(c){const h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const q_={[mc]:"LINEAR_TONE_MAPPING",[gc]:"REINHARD_TONE_MAPPING",[_c]:"CINEON_TONE_MAPPING",[na]:"ACES_FILMIC_TONE_MAPPING",[Ar]:"AGX_TONE_MAPPING",[Rr]:"NEUTRAL_TONE_MAPPING",[xc]:"CUSTOM_TONE_MAPPING"};function K_(i,t,e,n,s,r){const o=new xn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new xe;c.setAttribute("position",new oe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new oe([0,2,0,0,2,0],2));const h=new wd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new et(c,h),u=new la(-1,1,1,-1,0,1);let f=null,g=null,v=!1,m,p=null,y=[],w=!1;this.setSize=function(_,S){o.setSize(_,S),a!==null&&a.setSize(_,S),l!==null&&l.setSize(_,S);for(let b=0;b<y.length;b++){const R=y[b];R.setSize&&R.setSize(_,S)}},this.setEffects=function(_){y=_,w=y.length>0&&y[0].isRenderPass===!0;const S=o.width,b=o.height;y.length>0&&a===null&&(a=new xn(S,b,{type:sn,depthBuffer:!1,stencilBuffer:!1}),l=new xn(S,b,{type:sn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<y.length;R++){const x=y[R];x.setSize&&x.setSize(S,b)}},this.begin=function(_,S){if(v||_.toneMapping===jn&&y.length===0)return!1;if(p=S,S!==null){const b=S.width,R=S.height;(o.width!==b||o.height!==R)&&this.setSize(b,R)}return w===!1&&_.setRenderTarget(o),m=_.toneMapping,_.toneMapping=jn,!0},this.hasRenderPass=function(){return w},this.end=function(_,S){_.toneMapping=m,v=!0;let b=o,R=a;for(let x=0;x<y.length;x++){const M=y[x];M.enabled!==!1&&(M.render(_,R,b,S),M.needsSwap!==!1&&(b=R,R=R===a?l:a))}if(f!==_.outputColorSpace||g!==_.toneMapping){f=_.outputColorSpace,g=_.toneMapping,h.defines={},pe.getTransfer(f)===Ee&&(h.defines.SRGB_TRANSFER="");const x=q_[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,_.setRenderTarget(p),_.render(d,u),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const Dd=new rn,lc=new Nr(1,1),Ld=new ld,Id=new vp,Nd=new dd,iu=[],su=[],ru=new Float32Array(16),ou=new Float32Array(9),au=new Float32Array(4);function Qs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=iu[s];if(r===void 0&&(r=new Float32Array(s),iu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Je(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function $e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ha(i,t){let e=su[t];e===void 0&&(e=new Int32Array(t),su[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Z_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function J_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2fv(this.addr,t),$e(e,t)}}function $_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Je(e,t))return;i.uniform3fv(this.addr,t),$e(e,t)}}function Q_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4fv(this.addr,t),$e(e,t)}}function j_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),$e(e,t)}else{if(Je(e,n))return;au.set(n),i.uniformMatrix2fv(this.addr,!1,au),$e(e,n)}}function tx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),$e(e,t)}else{if(Je(e,n))return;ou.set(n),i.uniformMatrix3fv(this.addr,!1,ou),$e(e,n)}}function ex(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),$e(e,t)}else{if(Je(e,n))return;ru.set(n),i.uniformMatrix4fv(this.addr,!1,ru),$e(e,n)}}function nx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ix(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2iv(this.addr,t),$e(e,t)}}function sx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;i.uniform3iv(this.addr,t),$e(e,t)}}function rx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4iv(this.addr,t),$e(e,t)}}function ox(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ax(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2uiv(this.addr,t),$e(e,t)}}function lx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;i.uniform3uiv(this.addr,t),$e(e,t)}}function cx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4uiv(this.addr,t),$e(e,t)}}function hx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(lc.compareFunction=e.isReversedDepthBuffer()?Ac:Tc,r=lc):r=Dd,e.setTexture2D(t||r,s)}function ux(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Id,s)}function dx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Nd,s)}function fx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ld,s)}function px(i){switch(i){case 5126:return Z_;case 35664:return J_;case 35665:return $_;case 35666:return Q_;case 35674:return j_;case 35675:return tx;case 35676:return ex;case 5124:case 35670:return nx;case 35667:case 35671:return ix;case 35668:case 35672:return sx;case 35669:case 35673:return rx;case 5125:return ox;case 36294:return ax;case 36295:return lx;case 36296:return cx;case 35678:case 36198:case 36298:case 36306:case 35682:return hx;case 35679:case 36299:case 36307:return ux;case 35680:case 36300:case 36308:case 36293:return dx;case 36289:case 36303:case 36311:case 36292:return fx}}function mx(i,t){i.uniform1fv(this.addr,t)}function gx(i,t){const e=Qs(t,this.size,2);i.uniform2fv(this.addr,e)}function _x(i,t){const e=Qs(t,this.size,3);i.uniform3fv(this.addr,e)}function xx(i,t){const e=Qs(t,this.size,4);i.uniform4fv(this.addr,e)}function vx(i,t){const e=Qs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function yx(i,t){const e=Qs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Mx(i,t){const e=Qs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Sx(i,t){i.uniform1iv(this.addr,t)}function wx(i,t){i.uniform2iv(this.addr,t)}function bx(i,t){i.uniform3iv(this.addr,t)}function Ex(i,t){i.uniform4iv(this.addr,t)}function Tx(i,t){i.uniform1uiv(this.addr,t)}function Ax(i,t){i.uniform2uiv(this.addr,t)}function Rx(i,t){i.uniform3uiv(this.addr,t)}function Cx(i,t){i.uniform4uiv(this.addr,t)}function Px(i,t,e){const n=this.cache,s=t.length,r=ha(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=lc:o=Dd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Dx(i,t,e){const n=this.cache,s=t.length,r=ha(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Id,r[o])}function Lx(i,t,e){const n=this.cache,s=t.length,r=ha(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Nd,r[o])}function Ix(i,t,e){const n=this.cache,s=t.length,r=ha(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ld,r[o])}function Nx(i){switch(i){case 5126:return mx;case 35664:return gx;case 35665:return _x;case 35666:return xx;case 35674:return vx;case 35675:return yx;case 35676:return Mx;case 5124:case 35670:return Sx;case 35667:case 35671:return wx;case 35668:case 35672:return bx;case 35669:case 35673:return Ex;case 5125:return Tx;case 36294:return Ax;case 36295:return Rx;case 36296:return Cx;case 35678:case 36198:case 36298:case 36306:case 35682:return Px;case 35679:case 36299:case 36307:return Dx;case 35680:case 36300:case 36308:case 36293:return Lx;case 36289:case 36303:case 36311:case 36292:return Ix}}class Ux{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=px(e.type)}}class Ox{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Nx(e.type)}}class Fx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const $a=/(\w+)(\])?(\[|\.)?/g;function lu(i,t){i.seq.push(t),i.map[t.id]=t}function zx(i,t,e){const n=i.name,s=n.length;for($a.lastIndex=0;;){const r=$a.exec(n),o=$a.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){lu(e,c===void 0?new Ux(a,i,t):new Ox(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Fx(a),lu(e,d)),e=d}}}class Oo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);zx(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function cu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Bx=37297;let kx=0;function Gx(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const hu=new ne;function Hx(i){pe._getMatrix(hu,pe.workingColorSpace,i);const t=`mat3( ${hu.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(i)){case Ko:return[t,"LinearTransferOETF"];case Ee:return[t,"sRGBTransferOETF"];default:return Jt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function uu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Gx(i.getShaderSource(t),a)}else return r}function Vx(i,t){const e=Hx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Wx={[mc]:"Linear",[gc]:"Reinhard",[_c]:"Cineon",[na]:"ACESFilmic",[Ar]:"AgX",[Rr]:"Neutral",[xc]:"Custom"};function Xx(i,t){const e=Wx[t];return e===void 0?(Jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const wo=new F;function Yx(){pe.getLuminanceCoefficients(wo);const i=wo.x.toFixed(4),t=wo.y.toFixed(4),e=wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pr).join(`
`)}function Kx(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Zx(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function pr(i){return i!==""}function du(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Jx=/^[ \t]*#include +<([\w\d./]+)>/gm;function cc(i){return i.replace(Jx,Qx)}const $x=new Map;function Qx(i,t){let e=ue[t];if(e===void 0){const n=$x.get(t);if(n!==void 0)e=ue[n],Jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return cc(e)}const jx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pu(i){return i.replace(jx,tv)}function tv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const ev={[_r]:"SHADOWMAP_TYPE_PCF",[dr]:"SHADOWMAP_TYPE_VSM"};function nv(i){return ev[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const iv={[ss]:"ENVMAP_TYPE_CUBE",[Hs]:"ENVMAP_TYPE_CUBE",[ia]:"ENVMAP_TYPE_CUBE_UV"};function sv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":iv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const rv={[Hs]:"ENVMAP_MODE_REFRACTION"};function ov(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":rv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const av={[ju]:"ENVMAP_BLENDING_MULTIPLY",[Uf]:"ENVMAP_BLENDING_MIX",[Of]:"ENVMAP_BLENDING_ADD"};function lv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":av[i.combine]||"ENVMAP_BLENDING_NONE"}function cv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function hv(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=nv(e),c=sv(e),h=ov(e),d=lv(e),u=cv(e),f=qx(e),g=Kx(r),v=s.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(pr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(pr).join(`
`),p.length>0&&(p+=`
`)):(m=[mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),p=[mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==jn?"#define TONE_MAPPING":"",e.toneMapping!==jn?ue.tonemapping_pars_fragment:"",e.toneMapping!==jn?Xx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,Vx("linearToOutputTexel",e.outputColorSpace),Yx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pr).join(`
`)),o=cc(o),o=du(o,e),o=fu(o,e),a=cc(a),a=du(a,e),a=fu(a,e),o=pu(o),a=pu(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===uh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=y+m+o,_=y+p+a,S=cu(s,s.VERTEX_SHADER,w),b=cu(s,s.FRAGMENT_SHADER,_);s.attachShader(v,S),s.attachShader(v,b),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(A){if(i.debug.checkShaderErrors){const P=s.getProgramInfoLog(v)||"",D=s.getShaderInfoLog(S)||"",L=s.getShaderInfoLog(b)||"",I=P.trim(),U=D.trim(),z=L.trim();let W=!0,O=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,S,b);else{const G=uu(s,S,"vertex"),X=uu(s,b,"fragment");fe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+I+`
`+G+`
`+X)}else I!==""?Jt("WebGLProgram: Program Info Log:",I):(U===""||z==="")&&(O=!1);O&&(A.diagnostics={runnable:W,programLog:I,vertexShader:{log:U,prefix:m},fragmentShader:{log:z,prefix:p}})}s.deleteShader(S),s.deleteShader(b),x=new Oo(s,v),M=Zx(s,v)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(v,Bx)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=kx++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=b,this}let uv=0;class dv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new fv(t),e.set(t,n)),n}}class fv{constructor(t){this.id=uv++,this.code=t,this.usedTimes=0}}function pv(i){return i===rs||i===Yo||i===qo}function mv(i,t,e,n,s,r){const o=new Pc,a=new dv,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,M,T,A,P,D){const L=A.fog,I=P.geometry,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,W=t.get(x.envMap||U,z),O=W&&W.mapping===ia?W.image.height:null,G=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Jt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const X=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,_t=X!==void 0?X.length:0;let yt=0;I.morphAttributes.position!==void 0&&(yt=1),I.morphAttributes.normal!==void 0&&(yt=2),I.morphAttributes.color!==void 0&&(yt=3);let kt,Zt,jt,j;if(G){const Re=Jn[G];kt=Re.vertexShader,Zt=Re.fragmentShader}else{kt=x.vertexShader,Zt=x.fragmentShader;const Re=a.getVertexShaderStage(x),ie=a.getFragmentShaderStage(x);a.update(x,Re,ie),jt=Re.id,j=ie.id}const nt=i.getRenderTarget(),V=i.state.buffers.depth.getReversed(),rt=P.isInstancedMesh===!0,J=P.isBatchedMesh===!0,ut=!!x.map,xt=!!x.matcap,$=!!W,tt=!!x.aoMap,ct=!!x.lightMap,pt=!!x.bumpMap&&x.wireframe===!1,mt=!!x.normalMap,gt=!!x.displacementMap,St=!!x.emissiveMap,vt=!!x.metalnessMap,zt=!!x.roughnessMap,B=x.anisotropy>0,te=x.clearcoat>0,le=x.dispersion>0,N=x.retroreflectivity>0,E=x.iridescence>0,Y=x.sheen>0,Z=x.transmission>0,it=B&&!!x.anisotropyMap,Mt=te&&!!x.clearcoatMap,bt=te&&!!x.clearcoatNormalMap,st=te&&!!x.clearcoatRoughnessMap,at=E&&!!x.iridescenceMap,At=E&&!!x.iridescenceThicknessMap,qt=Y&&!!x.sheenColorMap,wt=Y&&!!x.sheenRoughnessMap,Et=!!x.specularMap,Kt=!!x.specularColorMap,Vt=!!x.specularIntensityMap,ee=Z&&!!x.transmissionMap,H=Z&&!!x.thicknessMap,Tt=!!x.gradientMap,lt=!!x.alphaMap,Rt=x.alphaTest>0,Ut=!!x.alphaHash,ft=!!x.extensions;let Xt=jn;x.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Xt=i.toneMapping);const Yt={shaderID:G,shaderType:x.type,shaderName:x.name,vertexShader:kt,fragmentShader:Zt,defines:x.defines,customVertexShaderID:jt,customFragmentShaderID:j,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:J,batchingColor:J&&P._colorsTexture!==null,instancing:rt,instancingColor:rt&&P.instanceColor!==null,instancingMorph:rt&&P.morphTexture!==null,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:pe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ut,matcap:xt,envMap:$,envMapMode:$&&W.mapping,envMapCubeUVHeight:O,aoMap:tt,lightMap:ct,bumpMap:pt,normalMap:mt,displacementMap:gt,emissiveMap:St,normalMapObjectSpace:mt&&x.normalMapType===Bf,normalMapTangentSpace:mt&&x.normalMapType===nc,packedNormalMap:mt&&x.normalMapType===nc&&pv(x.normalMap.format),metalnessMap:vt,roughnessMap:zt,anisotropy:B,anisotropyMap:it,clearcoat:te,clearcoatMap:Mt,clearcoatNormalMap:bt,clearcoatRoughnessMap:st,dispersion:le,retroreflection:N,iridescence:E,iridescenceMap:at,iridescenceThicknessMap:At,sheen:Y,sheenColorMap:qt,sheenRoughnessMap:wt,specularMap:Et,specularColorMap:Kt,specularIntensityMap:Vt,transmission:Z,transmissionMap:ee,thicknessMap:H,gradientMap:Tt,opaque:x.transparent===!1&&x.blending===xr&&x.alphaToCoverage===!1,alphaMap:lt,alphaTest:Rt,alphaHash:Ut,combine:x.combine,mapUv:ut&&g(x.map.channel),aoMapUv:tt&&g(x.aoMap.channel),lightMapUv:ct&&g(x.lightMap.channel),bumpMapUv:pt&&g(x.bumpMap.channel),normalMapUv:mt&&g(x.normalMap.channel),displacementMapUv:gt&&g(x.displacementMap.channel),emissiveMapUv:St&&g(x.emissiveMap.channel),metalnessMapUv:vt&&g(x.metalnessMap.channel),roughnessMapUv:zt&&g(x.roughnessMap.channel),anisotropyMapUv:it&&g(x.anisotropyMap.channel),clearcoatMapUv:Mt&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:bt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:At&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:wt&&g(x.sheenRoughnessMap.channel),specularMapUv:Et&&g(x.specularMap.channel),specularColorMapUv:Kt&&g(x.specularColorMap.channel),specularIntensityMapUv:Vt&&g(x.specularIntensityMap.channel),transmissionMapUv:ee&&g(x.transmissionMap.channel),thicknessMapUv:H&&g(x.thicknessMap.channel),alphaMapUv:lt&&g(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(mt||B),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!I.attributes.uv&&(ut||lt),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&mt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:V,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:yt,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xt,decodeVideoTexture:ut&&x.map.isVideoTexture===!0&&pe.getTransfer(x.map.colorSpace)===Ee,decodeVideoTextureEmissive:St&&x.emissiveMap.isVideoTexture===!0&&pe.getTransfer(x.emissiveMap.colorSpace)===Ee,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Fe,flipSided:x.side===_n,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ft&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&x.extensions.multiDraw===!0||J)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Yt.vertexUv1s=l.has(1),Yt.vertexUv2s=l.has(2),Yt.vertexUv3s=l.has(3),l.clear(),Yt}function m(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const T in x.defines)M.push(T),M.push(x.defines[T]);return x.isRawShaderMaterial===!1&&(p(M,x),y(M,x),M.push(i.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function p(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function y(x,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function w(x){const M=f[x.type];let T;if(M){const A=Jn[M];T=Br.clone(A.uniforms)}else T=x.uniforms;return T}function _(x,M){let T=h.get(M);return T!==void 0?++T.usedTimes:(T=new hv(i,M,x,s),c.push(T),h.set(M,T)),T}function S(x){if(--x.usedTimes===0){const M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){a.remove(x)}function R(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:w,acquireProgram:_,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:R}}function gv(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function _v(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function gu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _u(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,v,m,p){let y=i[t];return y===void 0?(y={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:p},i[t]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=g,y.materialVariant=o(u),y.groupOrder=v,y.renderOrder=u.renderOrder,y.z=m,y.group=p),t++,y}function l(u,f,g,v,m,p,y){y.reversedDepth===!0&&(m=-m);const w=a(u,f,g,v,m,p);g.transmission>0?n.push(w):g.transparent===!0?s.push(w):e.push(w)}function c(u,f,g,v,m,p){const y=a(u,f,g,v,m,p);g.transmission>0?n.unshift(y):g.transparent===!0?s.unshift(y):e.unshift(y)}function h(u,f){e.length>1&&e.sort(u||_v),n.length>1&&n.sort(f||gu),s.length>1&&s.sort(f||gu)}function d(){for(let u=t,f=i.length;u<f;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function xv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new _u,i.set(n,[o])):s>=r.length?(o=new _u,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function vv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new F,color:new It};break;case"SpotLight":e={position:new F,direction:new F,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function yv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Mv=0;function Sv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function wv(i){const t=new vv,e=yv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const s=new F,r=new ae,o=new ae;function a(c){let h=0,d=0,u=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,y=0,w=0,_=0,S=0,b=0,R=0,x=0,M=0,T=0;c.sort(Sv);for(let P=0,D=c.length;P<D;P++){const L=c[P],I=L.color,U=L.intensity,z=L.distance;let W=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===rs?W=L.shadow.map.texture:W=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=I.r*U,d+=I.g*U,u+=I.b*U;else if(L.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(L.sh.coefficients[O],U);T++}else if(L.isSunLight){const O=t.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const G=L.shadow,X=e.get(L);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),n.sunShadow[g]=X,n.sunShadowMap[g]=W;const _t=G.getViewportCount();for(let yt=0;yt<_t;yt++)n.sunShadowMatrix[v+yt]=G.getMatrix(yt),n.sunShadowCascade[v+yt]=G._cascadeData[yt];v+=_t,g++}n.sun[f]=O,f++}else if(L.isDirectionalLight){const O=t.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const G=L.shadow,X=e.get(L);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,n.directionalShadow[m]=X,n.directionalShadowMap[m]=W,n.directionalShadowMatrix[m]=L.shadow.matrix,S++}n.directional[m]=O,m++}else if(L.isSpotLight){const O=t.get(L);O.position.setFromMatrixPosition(L.matrixWorld),O.color.copy(I).multiplyScalar(U),O.distance=z,O.coneCos=Math.cos(L.angle),O.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),O.decay=L.decay,n.spot[y]=O;const G=L.shadow;if(L.map&&(n.spotLightMap[x]=L.map,x++,G.updateMatrices(L),L.castShadow&&M++),n.spotLightMatrix[y]=G.matrix,L.castShadow){const X=e.get(L);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,n.spotShadow[y]=X,n.spotShadowMap[y]=W,R++}y++}else if(L.isRectAreaLight){const O=t.get(L);O.color.copy(I).multiplyScalar(U),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),n.rectArea[w]=O,w++}else if(L.isPointLight){const O=t.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),O.distance=L.distance,O.decay=L.decay,L.castShadow){const G=L.shadow,X=e.get(L);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,X.shadowCameraNear=G.camera.near,X.shadowCameraFar=G.camera.far,n.pointShadow[p]=X,n.pointShadowMap[p]=W,n.pointShadowMatrix[p]=L.shadow.matrix,b++}n.point[p]=O,p++}else if(L.isHemisphereLight){const O=t.get(L);O.skyColor.copy(L.color).multiplyScalar(U),O.groundColor.copy(L.groundColor).multiplyScalar(U),n.hemi[_]=O,_++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Lt.LTC_FLOAT_1,n.rectAreaLTC2=Lt.LTC_FLOAT_2):(n.rectAreaLTC1=Lt.LTC_HALF_1,n.rectAreaLTC2=Lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const A=n.hash;(A.sunLength!==f||A.directionalLength!==m||A.pointLength!==p||A.spotLength!==y||A.rectAreaLength!==w||A.hemiLength!==_||A.numSunShadows!==g||A.numDirectionalShadows!==S||A.numPointShadows!==b||A.numSpotShadows!==R||A.numSpotMaps!==x||A.numLightProbes!==T)&&(n.sun.length=f,n.directional.length=m,n.spot.length=y,n.rectArea.length=w,n.point.length=p,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+x-M,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=T,A.sunLength=f,A.directionalLength=m,A.pointLength=p,A.spotLength=y,A.rectAreaLength=w,A.hemiLength=_,A.numSunShadows=g,A.numDirectionalShadows=S,A.numPointShadows=b,A.numSpotShadows=R,A.numSpotMaps=x,A.numLightProbes=T,n.version=Mv++)}function l(c,h){let d=0,u=0,f=0,g=0,v=0,m=0;const p=h.matrixWorldInverse;for(let y=0,w=c.length;y<w;y++){const _=c[y];if(_.isSunLight){const S=n.sun[d];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(p),d++}else if(_.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),u++}else if(_.isSpotLight){const S=n.spot[g];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),g++}else if(_.isRectAreaLight){const S=n.rectArea[v];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){const S=n.hemi[m];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:n}}function xu(i){const t=new wv(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}const d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function bv(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new xu(i),t.set(s,[a])):r>=o.length?(a=new xu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Ev=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tv=`uniform sampler2D shadow_pass;
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
}`,Av=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Rv=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],vu=new ae,cr=new F,Qa=new F;function Cv(i,t,e){let n=new Lc;const s=new ht,r=new ht,o=new ke,a=new w0,l=new b0,c={},h=e.maxTextureSize,d={[is]:_n,[_n]:is,[Fe]:Fe},u=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Ev,fragmentShader:Tv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new xe;g.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new et(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_r;let p=this.type;this.render=function(b,R,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===gf&&(Jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=_r);const M=i.getRenderTarget(),T=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Qn),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const D=p!==this.type;D&&R.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(I=>I.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,I=b.length;L<I;L++){const U=b[L],z=U.shadow;if(z===void 0){Jt("WebGLShadowMap:",U,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const W=z.getFrameExtents();s.multiply(W),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,z.mapSize.y=r.y));const O=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=O,z.map===null||D===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===dr){if(U.isPointLight){Jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new xn(s.x,s.y,{format:rs,type:sn,minFilter:Xe,magFilter:Xe,generateMipmaps:!1}),z.map.texture.name=U.name+".shadowMap",z.map.depthTexture=new Nr(s.x,s.y,An),z.map.depthTexture.name=U.name+".shadowMapDepth",z.map.depthTexture.format=yi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=en,z.map.depthTexture.magFilter=en}else U.isPointLight?(z.map=new Pd(s.x),z.map.depthTexture=new kp(s.x,ii)):(z.map=new xn(s.x,s.y),z.map.depthTexture=new Nr(s.x,s.y,ii)),z.map.depthTexture.name=U.name+".shadowMap",z.map.depthTexture.format=yi,this.type===_r?(z.map.depthTexture.compareFunction=O?Ac:Tc,z.map.depthTexture.minFilter=Xe,z.map.depthTexture.magFilter=Xe):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=en,z.map.depthTexture.magFilter=en);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);const G=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();U.isPointLight!==!0&&z.updateMatrices(U,x);for(let X=0;X<G;X++){const _t=z.getCamera(X);if(U.isPointLight){const yt=z.camera,kt=z.matrix,Zt=U.distance||yt.far;Zt!==yt.far&&(yt.far=Zt,yt.updateProjectionMatrix()),cr.setFromMatrixPosition(U.matrixWorld),yt.position.copy(cr),Qa.copy(yt.position),Qa.add(Av[X]),yt.up.copy(Rv[X]),yt.lookAt(Qa),yt.updateMatrixWorld(),kt.makeTranslation(-cr.x,-cr.y,-cr.z),vu.multiplyMatrices(yt.projectionMatrix,yt.matrixWorldInverse),z._frustum.setFromProjectionMatrix(vu,yt.coordinateSystem,yt.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,X),i.clear();else{X===0&&(i.setRenderTarget(z.map),i.clear());const yt=z.getViewport(X);o.set(r.x*yt.x,r.y*yt.y,r.x*yt.z,r.y*yt.w),P.viewport(o)}n=z.getFrustum(X),_(R,x,_t,U,this.type)}z.isPointLightShadow!==!0&&this.type===dr&&y(z,x),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,T,A)};function y(b,R){const x=t.update(v);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new xn(s.x,s.y,{format:rs,type:sn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(R,null,x,u,v,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(R,null,x,f,v,null)}function w(b,R,x,M){let T=null;const A=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(A!==void 0)T=A;else if(T=x.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const P=T.uuid,D=R.uuid;let L=c[P];L===void 0&&(L={},c[P]=L);let I=L[D];I===void 0&&(I=T.clone(),L[D]=I,R.addEventListener("dispose",S)),T=I}if(T.visible=R.visible,T.wireframe=R.wireframe,M===dr?T.side=R.shadowSide!==null?R.shadowSide:R.side:T.side=R.shadowSide!==null?R.shadowSide:d[R.side],T.alphaMap=R.alphaMap,T.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,T.map=R.map,T.clipShadows=R.clipShadows,T.clippingPlanes=R.clippingPlanes,T.clipIntersection=R.clipIntersection,T.displacementMap=R.displacementMap,T.displacementScale=R.displacementScale,T.displacementBias=R.displacementBias,T.wireframeLinewidth=R.wireframeLinewidth,T.linewidth=R.linewidth,x.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const P=i.properties.get(T);P.light=x}return T}function _(b,R,x,M,T){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&T===dr)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const D=t.update(b),L=b.material;if(Array.isArray(L)){const I=D.groups;for(let U=0,z=I.length;U<z;U++){const W=I[U],O=L[W.materialIndex];if(O&&O.visible){const G=w(b,O,M,T);b.onBeforeShadow(i,b,R,x,D,G,W),i.renderBufferDirect(x,null,D,G,b,W),b.onAfterShadow(i,b,R,x,D,G,W)}}}else if(L.visible){const I=w(b,L,M,T);b.onBeforeShadow(i,b,R,x,D,I,null),i.renderBufferDirect(x,null,D,I,b,null),b.onAfterShadow(i,b,R,x,D,I,null)}}const P=b.children;for(let D=0,L=P.length;D<L;D++)_(P[D],R,x,M,T)}function S(b){b.target.removeEventListener("dispose",S);for(const x in c){const M=c[x],T=b.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function Pv(i,t){function e(){let H=!1;const Tt=new ke;let lt=null;const Rt=new ke(0,0,0,0);return{setMask:function(Ut){lt!==Ut&&!H&&(i.colorMask(Ut,Ut,Ut,Ut),lt=Ut)},setLocked:function(Ut){H=Ut},setClear:function(Ut,ft,Xt,Yt,Re){Re===!0&&(Ut*=Yt,ft*=Yt,Xt*=Yt),Tt.set(Ut,ft,Xt,Yt),Rt.equals(Tt)===!1&&(i.clearColor(Ut,ft,Xt,Yt),Rt.copy(Tt))},reset:function(){H=!1,lt=null,Rt.set(-1,0,0,0)}}}function n(){let H=!1,Tt=!1,lt=null,Rt=null,Ut=null;return{setReversed:function(ft){if(Tt!==ft){const Xt=t.get("EXT_clip_control");ft?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),Tt=ft;const Yt=Ut;Ut=null,this.setClear(Yt)}},getReversed:function(){return Tt},setTest:function(ft){ft?nt(i.DEPTH_TEST):V(i.DEPTH_TEST)},setMask:function(ft){lt!==ft&&!H&&(i.depthMask(ft),lt=ft)},setFunc:function(ft){if(Tt&&(ft=$f[ft]),Rt!==ft){switch(ft){case xl:i.depthFunc(i.NEVER);break;case vl:i.depthFunc(i.ALWAYS);break;case yl:i.depthFunc(i.LESS);break;case Tr:i.depthFunc(i.LEQUAL);break;case Ml:i.depthFunc(i.EQUAL);break;case Sl:i.depthFunc(i.GEQUAL);break;case wl:i.depthFunc(i.GREATER);break;case bl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Rt=ft}},setLocked:function(ft){H=ft},setClear:function(ft){Ut!==ft&&(Ut=ft,Tt&&(ft=1-ft),i.clearDepth(ft))},reset:function(){H=!1,lt=null,Rt=null,Ut=null,Tt=!1}}}function s(){let H=!1,Tt=null,lt=null,Rt=null,Ut=null,ft=null,Xt=null,Yt=null,Re=null;return{setTest:function(ie){H||(ie?nt(i.STENCIL_TEST):V(i.STENCIL_TEST))},setMask:function(ie){Tt!==ie&&!H&&(i.stencilMask(ie),Tt=ie)},setFunc:function(ie,He,hn){(lt!==ie||Rt!==He||Ut!==hn)&&(i.stencilFunc(ie,He,hn),lt=ie,Rt=He,Ut=hn)},setOp:function(ie,He,hn){(ft!==ie||Xt!==He||Yt!==hn)&&(i.stencilOp(ie,He,hn),ft=ie,Xt=He,Yt=hn)},setLocked:function(ie){H=ie},setClear:function(ie){Re!==ie&&(i.clearStencil(ie),Re=ie)},reset:function(){H=!1,Tt=null,lt=null,Rt=null,Ut=null,ft=null,Xt=null,Yt=null,Re=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},d={},u={},f=new WeakMap,g=[],v=null,m=!1,p=null,y=null,w=null,_=null,S=null,b=null,R=null,x=new It(0,0,0),M=0,T=!1,A=null,P=null,D=null,L=null,I=null;const U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,W=0;const O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(O)[1]),z=W>=1):O.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),z=W>=2);let G=null,X={};const _t=i.getParameter(i.SCISSOR_BOX),yt=i.getParameter(i.VIEWPORT),kt=new ke().fromArray(_t),Zt=new ke().fromArray(yt);function jt(H,Tt,lt,Rt){const Ut=new Uint8Array(4),ft=i.createTexture();i.bindTexture(H,ft),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<lt;Xt++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(Tt,0,i.RGBA,1,1,Rt,0,i.RGBA,i.UNSIGNED_BYTE,Ut):i.texImage2D(Tt+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ut);return ft}const j={};j[i.TEXTURE_2D]=jt(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=jt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=jt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=jt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(i.DEPTH_TEST),o.setFunc(Tr),pt(!1),mt(lh),nt(i.CULL_FACE),tt(Qn);function nt(H){h[H]!==!0&&(i.enable(H),h[H]=!0)}function V(H){h[H]!==!1&&(i.disable(H),h[H]=!1)}function rt(H,Tt){return u[H]!==Tt?(i.bindFramebuffer(H,Tt),u[H]=Tt,H===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Tt),H===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Tt),!0):!1}function J(H,Tt){let lt=g,Rt=!1;if(H){lt=f.get(Tt),lt===void 0&&(lt=[],f.set(Tt,lt));const Ut=H.textures;if(lt.length!==Ut.length||lt[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,Xt=Ut.length;ft<Xt;ft++)lt[ft]=i.COLOR_ATTACHMENT0+ft;lt.length=Ut.length,Rt=!0}}else lt[0]!==i.BACK&&(lt[0]=i.BACK,Rt=!0);Rt&&i.drawBuffers(lt)}function ut(H){return v!==H?(i.useProgram(H),v=H,!0):!1}const xt={[Is]:i.FUNC_ADD,[xf]:i.FUNC_SUBTRACT,[vf]:i.FUNC_REVERSE_SUBTRACT};xt[yf]=i.MIN,xt[Mf]=i.MAX;const $={[Sf]:i.ZERO,[wf]:i.ONE,[bf]:i.SRC_COLOR,[$u]:i.SRC_ALPHA,[Pf]:i.SRC_ALPHA_SATURATE,[Rf]:i.DST_COLOR,[Tf]:i.DST_ALPHA,[Ef]:i.ONE_MINUS_SRC_COLOR,[Qu]:i.ONE_MINUS_SRC_ALPHA,[Cf]:i.ONE_MINUS_DST_COLOR,[Af]:i.ONE_MINUS_DST_ALPHA,[Df]:i.CONSTANT_COLOR,[Lf]:i.ONE_MINUS_CONSTANT_COLOR,[If]:i.CONSTANT_ALPHA,[Nf]:i.ONE_MINUS_CONSTANT_ALPHA};function tt(H,Tt,lt,Rt,Ut,ft,Xt,Yt,Re,ie){if(H===Qn){m===!0&&(V(i.BLEND),m=!1);return}if(m===!1&&(nt(i.BLEND),m=!0),H!==_f){if(H!==p||ie!==T){if((y!==Is||S!==Is)&&(i.blendEquation(i.FUNC_ADD),y=Is,S=Is),ie)switch(H){case xr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xo:i.blendFunc(i.ONE,i.ONE);break;case ch:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:fe("WebGLState: Invalid blending: ",H);break}else switch(H){case xr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ch:fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hh:fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:fe("WebGLState: Invalid blending: ",H);break}w=null,_=null,b=null,R=null,x.set(0,0,0),M=0,p=H,T=ie}return}Ut=Ut||Tt,ft=ft||lt,Xt=Xt||Rt,(Tt!==y||Ut!==S)&&(i.blendEquationSeparate(xt[Tt],xt[Ut]),y=Tt,S=Ut),(lt!==w||Rt!==_||ft!==b||Xt!==R)&&(i.blendFuncSeparate($[lt],$[Rt],$[ft],$[Xt]),w=lt,_=Rt,b=ft,R=Xt),(Yt.equals(x)===!1||Re!==M)&&(i.blendColor(Yt.r,Yt.g,Yt.b,Re),x.copy(Yt),M=Re),p=H,T=!1}function ct(H,Tt){H.side===Fe?V(i.CULL_FACE):nt(i.CULL_FACE);let lt=H.side===_n;Tt&&(lt=!lt),pt(lt),H.blending===xr&&H.transparent===!1?tt(Qn):tt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);const Rt=H.stencilWrite;a.setTest(Rt),Rt&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),St(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):V(i.SAMPLE_ALPHA_TO_COVERAGE)}function pt(H){A!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),A=H)}function mt(H){H!==pf?(nt(i.CULL_FACE),H!==P&&(H===lh?i.cullFace(i.BACK):H===mf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):V(i.CULL_FACE),P=H}function gt(H){H!==D&&(z&&i.lineWidth(H),D=H)}function St(H,Tt,lt){H?(nt(i.POLYGON_OFFSET_FILL),(L!==Tt||I!==lt)&&(L=Tt,I=lt,o.getReversed()&&(Tt=-Tt),i.polygonOffset(Tt,lt))):V(i.POLYGON_OFFSET_FILL)}function vt(H){H?nt(i.SCISSOR_TEST):V(i.SCISSOR_TEST)}function zt(H){H===void 0&&(H=i.TEXTURE0+U-1),G!==H&&(i.activeTexture(H),G=H)}function B(H,Tt,lt){lt===void 0&&(G===null?lt=i.TEXTURE0+U-1:lt=G);let Rt=X[lt];Rt===void 0&&(Rt={type:void 0,texture:void 0},X[lt]=Rt),(Rt.type!==H||Rt.texture!==Tt)&&(G!==lt&&(i.activeTexture(lt),G=lt),i.bindTexture(H,Tt||j[H]),Rt.type=H,Rt.texture=Tt)}function te(){const H=X[G];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function le(){try{i.compressedTexImage2D(...arguments)}catch(H){fe("WebGLState:",H)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(H){fe("WebGLState:",H)}}function E(){try{i.texSubImage2D(...arguments)}catch(H){fe("WebGLState:",H)}}function Y(){try{i.texSubImage3D(...arguments)}catch(H){fe("WebGLState:",H)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(H){fe("WebGLState:",H)}}function it(){try{i.compressedTexSubImage3D(...arguments)}catch(H){fe("WebGLState:",H)}}function Mt(){try{i.texStorage2D(...arguments)}catch(H){fe("WebGLState:",H)}}function bt(){try{i.texStorage3D(...arguments)}catch(H){fe("WebGLState:",H)}}function st(){try{i.texImage2D(...arguments)}catch(H){fe("WebGLState:",H)}}function at(){try{i.texImage3D(...arguments)}catch(H){fe("WebGLState:",H)}}function At(H){return d[H]!==void 0?d[H]:i.getParameter(H)}function qt(H,Tt){d[H]!==Tt&&(i.pixelStorei(H,Tt),d[H]=Tt)}function wt(H){kt.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),kt.copy(H))}function Et(H){Zt.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),Zt.copy(H))}function Kt(H,Tt){let lt=c.get(Tt);lt===void 0&&(lt=new WeakMap,c.set(Tt,lt));let Rt=lt.get(H);Rt===void 0&&(Rt=i.getUniformBlockIndex(Tt,H.name),lt.set(H,Rt))}function Vt(H,Tt){const Rt=c.get(Tt).get(H);l.get(Tt)!==Rt&&(i.uniformBlockBinding(Tt,Rt,H.__bindingPointIndex),l.set(Tt,Rt))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},G=null,X={},u={},f=new WeakMap,g=[],v=null,m=!1,p=null,y=null,w=null,_=null,S=null,b=null,R=null,x=new It(0,0,0),M=0,T=!1,A=null,P=null,D=null,L=null,I=null,kt.set(0,0,i.canvas.width,i.canvas.height),Zt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:nt,disable:V,bindFramebuffer:rt,drawBuffers:J,useProgram:ut,setBlending:tt,setMaterial:ct,setFlipSided:pt,setCullFace:mt,setLineWidth:gt,setPolygonOffset:St,setScissorTest:vt,activeTexture:zt,bindTexture:B,unbindTexture:te,compressedTexImage2D:le,compressedTexImage3D:N,texImage2D:st,texImage3D:at,pixelStorei:qt,getParameter:At,updateUBOMapping:Kt,uniformBlockBinding:Vt,texStorage2D:Mt,texStorage3D:bt,texSubImage2D:E,texSubImage3D:Y,compressedTexSubImage2D:Z,compressedTexSubImage3D:it,scissor:wt,viewport:Et,reset:ee}}function Dv(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(N,E){return g?new OffscreenCanvas(N,E):Ir("canvas")}function m(N,E,Y){let Z=1;const it=le(N);if((it.width>Y||it.height>Y)&&(Z=Y/Math.max(it.width,it.height)),Z<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const Mt=Math.floor(Z*it.width),bt=Math.floor(Z*it.height);u===void 0&&(u=v(Mt,bt));const st=E?v(Mt,bt):u;return st.width=Mt,st.height=bt,st.getContext("2d").drawImage(N,0,0,Mt,bt),Jt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+Mt+"x"+bt+")."),st}else return"data"in N&&Jt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),N;return N}function p(N){return N.generateMipmaps}function y(N){i.generateMipmap(N)}function w(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(N,E,Y,Z,it,Mt=!1){if(N!==null){if(i[N]!==void 0)return i[N];Jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let bt;Z&&(bt=t.get("EXT_texture_norm16"),bt||Jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let st=E;if(E===i.RED&&(Y===i.FLOAT&&(st=i.R32F),Y===i.HALF_FLOAT&&(st=i.R16F),Y===i.UNSIGNED_BYTE&&(st=i.R8),Y===i.UNSIGNED_SHORT&&bt&&(st=bt.R16_EXT),Y===i.SHORT&&bt&&(st=bt.R16_SNORM_EXT)),E===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(st=i.R8UI),Y===i.UNSIGNED_SHORT&&(st=i.R16UI),Y===i.UNSIGNED_INT&&(st=i.R32UI),Y===i.BYTE&&(st=i.R8I),Y===i.SHORT&&(st=i.R16I),Y===i.INT&&(st=i.R32I)),E===i.RG&&(Y===i.FLOAT&&(st=i.RG32F),Y===i.HALF_FLOAT&&(st=i.RG16F),Y===i.UNSIGNED_BYTE&&(st=i.RG8),Y===i.UNSIGNED_SHORT&&bt&&(st=bt.RG16_EXT),Y===i.SHORT&&bt&&(st=bt.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(st=i.RG8UI),Y===i.UNSIGNED_SHORT&&(st=i.RG16UI),Y===i.UNSIGNED_INT&&(st=i.RG32UI),Y===i.BYTE&&(st=i.RG8I),Y===i.SHORT&&(st=i.RG16I),Y===i.INT&&(st=i.RG32I)),E===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(st=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(st=i.RGB16UI),Y===i.UNSIGNED_INT&&(st=i.RGB32UI),Y===i.BYTE&&(st=i.RGB8I),Y===i.SHORT&&(st=i.RGB16I),Y===i.INT&&(st=i.RGB32I)),E===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(st=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(st=i.RGBA16UI),Y===i.UNSIGNED_INT&&(st=i.RGBA32UI),Y===i.BYTE&&(st=i.RGBA8I),Y===i.SHORT&&(st=i.RGBA16I),Y===i.INT&&(st=i.RGBA32I)),E===i.RGB&&(Y===i.UNSIGNED_SHORT&&bt&&(st=bt.RGB16_EXT),Y===i.SHORT&&bt&&(st=bt.RGB16_SNORM_EXT),Y===i.UNSIGNED_INT_5_9_9_9_REV&&(st=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(st=i.R11F_G11F_B10F)),E===i.RGBA){const at=Mt?Ko:pe.getTransfer(it);Y===i.FLOAT&&(st=i.RGBA32F),Y===i.HALF_FLOAT&&(st=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(st=at===Ee?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT&&bt&&(st=bt.RGBA16_EXT),Y===i.SHORT&&bt&&(st=bt.RGBA16_SNORM_EXT),Y===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function S(N,E){let Y;return N?E===null||E===ii||E===Pr?Y=i.DEPTH24_STENCIL8:E===An?Y=i.DEPTH32F_STENCIL8:E===Cr&&(Y=i.DEPTH24_STENCIL8,Jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ii||E===Pr?Y=i.DEPTH_COMPONENT24:E===An?Y=i.DEPTH_COMPONENT32F:E===Cr&&(Y=i.DEPTH_COMPONENT16),Y}function b(N,E){return p(N)===!0||N.isFramebufferTexture&&N.minFilter!==en&&N.minFilter!==Xe?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function R(N){const E=N.target;E.removeEventListener("dispose",R),M(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&d.delete(E)}function x(N){const E=N.target;E.removeEventListener("dispose",x),A(E)}function M(N){const E=n.get(N);if(E.__webglInit===void 0)return;const Y=N.source,Z=f.get(Y);if(Z){const it=Z[E.__cacheKey];it.usedTimes--,it.usedTimes===0&&T(N),Object.keys(Z).length===0&&f.delete(Y)}n.remove(N)}function T(N){const E=n.get(N);i.deleteTexture(E.__webglTexture);const Y=N.source,Z=f.get(Y);delete Z[E.__cacheKey],o.memory.textures--}function A(N){const E=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let it=0;it<E.__webglFramebuffer[Z].length;it++)i.deleteFramebuffer(E.__webglFramebuffer[Z][it]);else i.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)i.deleteFramebuffer(E.__webglFramebuffer[Z]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Y=N.textures;for(let Z=0,it=Y.length;Z<it;Z++){const Mt=n.get(Y[Z]);Mt.__webglTexture&&(i.deleteTexture(Mt.__webglTexture),o.memory.textures--),n.remove(Y[Z])}n.remove(N)}let P=0;function D(){P=0}function L(){return P}function I(N){P=N}function U(){const N=P;return N>=s.maxTextures&&Jt("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),P+=1,N}function z(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function W(N,E){const Y=n.get(N);if(N.isVideoTexture&&B(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Y.__version!==N.version){const Z=N.image;if(Z===null)Jt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Jt("WebGLRenderer: Texture marked for update but image is incomplete");else{V(Y,N,E);return}}else N.isExternalTexture&&(Y.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+E)}function O(N,E){const Y=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){V(Y,N,E);return}else N.isExternalTexture&&(Y.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+E)}function G(N,E){const Y=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){V(Y,N,E);return}e.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+E)}function X(N,E){const Y=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&Y.__version!==N.version){rt(Y,N,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+E)}const _t={[ni]:i.REPEAT,[Gn]:i.CLAMP_TO_EDGE,[El]:i.MIRRORED_REPEAT},yt={[en]:i.NEAREST,[Ff]:i.NEAREST_MIPMAP_NEAREST,[Kr]:i.NEAREST_MIPMAP_LINEAR,[Xe]:i.LINEAR,[ya]:i.LINEAR_MIPMAP_NEAREST,[Ii]:i.LINEAR_MIPMAP_LINEAR},kt={[Gf]:i.NEVER,[Yf]:i.ALWAYS,[Hf]:i.LESS,[Tc]:i.LEQUAL,[Vf]:i.EQUAL,[Ac]:i.GEQUAL,[Wf]:i.GREATER,[Xf]:i.NOTEQUAL};function Zt(N,E){if(E.type===An&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Xe||E.magFilter===ya||E.magFilter===Kr||E.magFilter===Ii||E.minFilter===Xe||E.minFilter===ya||E.minFilter===Kr||E.minFilter===Ii)&&Jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,_t[E.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,_t[E.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,_t[E.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,yt[E.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,yt[E.minFilter]),E.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,kt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===en||E.minFilter!==Kr&&E.minFilter!==Ii||E.type===An&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");i.texParameterf(N,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function jt(N,E){let Y=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",R));const Z=E.source;let it=f.get(Z);it===void 0&&(it={},f.set(Z,it));const Mt=z(E);if(Mt!==N.__cacheKey){it[Mt]===void 0&&(it[Mt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),it[Mt].usedTimes++;const bt=it[N.__cacheKey];bt!==void 0&&(it[N.__cacheKey].usedTimes--,bt.usedTimes===0&&T(E)),N.__cacheKey=Mt,N.__webglTexture=it[Mt].texture}return Y}function j(N,E,Y){return Math.floor(Math.floor(N/Y)/E)}function nt(N,E,Y,Z){const Mt=N.updateRanges;if(Mt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,Y,Z,E.data);else{Mt.sort((qt,wt)=>qt.start-wt.start);let bt=0;for(let qt=1;qt<Mt.length;qt++){const wt=Mt[bt],Et=Mt[qt],Kt=wt.start+wt.count,Vt=j(Et.start,E.width,4),ee=j(wt.start,E.width,4);Et.start<=Kt+1&&Vt===ee&&j(Et.start+Et.count-1,E.width,4)===Vt?wt.count=Math.max(wt.count,Et.start+Et.count-wt.start):(++bt,Mt[bt]=Et)}Mt.length=bt+1;const st=e.getParameter(i.UNPACK_ROW_LENGTH),at=e.getParameter(i.UNPACK_SKIP_PIXELS),At=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let qt=0,wt=Mt.length;qt<wt;qt++){const Et=Mt[qt],Kt=Math.floor(Et.start/4),Vt=Math.ceil(Et.count/4),ee=Kt%E.width,H=Math.floor(Kt/E.width),Tt=Vt,lt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),e.pixelStorei(i.UNPACK_SKIP_ROWS,H),e.texSubImage2D(i.TEXTURE_2D,0,ee,H,Tt,lt,Y,Z,E.data)}N.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,st),e.pixelStorei(i.UNPACK_SKIP_PIXELS,at),e.pixelStorei(i.UNPACK_SKIP_ROWS,At)}}function V(N,E,Y){let Z=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=i.TEXTURE_3D);const it=jt(N,E),Mt=E.source;e.bindTexture(Z,N.__webglTexture,i.TEXTURE0+Y);const bt=n.get(Mt);if(Mt.version!==bt.__version||it===!0){if(e.activeTexture(i.TEXTURE0+Y),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const lt=pe.getPrimaries(pe.workingColorSpace),Rt=E.colorSpace===Bn?null:pe.getPrimaries(E.colorSpace),Ut=E.colorSpace===Bn||lt===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut)}e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let at=m(E.image,!1,s.maxTextureSize);at=te(E,at);const At=r.convert(E.format,E.colorSpace),qt=r.convert(E.type);let wt=_(E.internalFormat,At,qt,E.normalized,E.colorSpace,E.isVideoTexture);Zt(Z,E);let Et;const Kt=E.mipmaps,Vt=E.isVideoTexture!==!0,ee=bt.__version===void 0||it===!0,H=Mt.dataReady,Tt=b(E,at);if(E.isDepthTexture)wt=S(E.format===Qi,E.type),ee&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,wt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,wt,at.width,at.height,0,At,qt,null));else if(E.isDataTexture)if(Kt.length>0){Vt&&ee&&e.texStorage2D(i.TEXTURE_2D,Tt,wt,Kt[0].width,Kt[0].height);for(let lt=0,Rt=Kt.length;lt<Rt;lt++)Et=Kt[lt],Vt?H&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,Et.width,Et.height,At,qt,Et.data):e.texImage2D(i.TEXTURE_2D,lt,wt,Et.width,Et.height,0,At,qt,Et.data);E.generateMipmaps=!1}else Vt?(ee&&e.texStorage2D(i.TEXTURE_2D,Tt,wt,at.width,at.height),H&&nt(E,at,At,qt)):e.texImage2D(i.TEXTURE_2D,0,wt,at.width,at.height,0,At,qt,at.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Vt&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,wt,Kt[0].width,Kt[0].height,at.depth);for(let lt=0,Rt=Kt.length;lt<Rt;lt++)if(Et=Kt[lt],E.format!==Hn)if(At!==null)if(Vt){if(H)if(E.layerUpdates.size>0){const Ut=Qh(Et.width,Et.height,E.format,E.type);for(const ft of E.layerUpdates){const Xt=Et.data.subarray(ft*Ut/Et.data.BYTES_PER_ELEMENT,(ft+1)*Ut/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,ft,Et.width,Et.height,1,At,Xt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,Et.width,Et.height,at.depth,At,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,lt,wt,Et.width,Et.height,at.depth,0,Et.data,0,0);else Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?H&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,Et.width,Et.height,at.depth,At,qt,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,lt,wt,Et.width,Et.height,at.depth,0,At,qt,Et.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Vt&&ee&&e.texStorage2D(i.TEXTURE_2D,Tt,wt,Kt[0].width,Kt[0].height);for(let lt=0,Rt=Kt.length;lt<Rt;lt++)Et=Kt[lt],E.format!==Hn?At!==null?Vt?H&&e.compressedTexSubImage2D(i.TEXTURE_2D,lt,0,0,Et.width,Et.height,At,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,lt,wt,Et.width,Et.height,0,Et.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?H&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,Et.width,Et.height,At,qt,Et.data):e.texImage2D(i.TEXTURE_2D,lt,wt,Et.width,Et.height,0,At,qt,Et.data)}else if(E.isDataArrayTexture)if(Vt){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,wt,at.width,at.height,at.depth),H)if(E.layerUpdates.size>0){const lt=Qh(at.width,at.height,E.format,E.type);for(const Rt of E.layerUpdates){const Ut=at.data.subarray(Rt*lt/at.data.BYTES_PER_ELEMENT,(Rt+1)*lt/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Rt,at.width,at.height,1,At,qt,Ut)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,At,qt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,wt,at.width,at.height,at.depth,0,At,qt,at.data);else if(E.isData3DTexture)Vt?(ee&&e.texStorage3D(i.TEXTURE_3D,Tt,wt,at.width,at.height,at.depth),H&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,At,qt,at.data)):e.texImage3D(i.TEXTURE_3D,0,wt,at.width,at.height,at.depth,0,At,qt,at.data);else if(E.isFramebufferTexture){if(ee)if(Vt)e.texStorage2D(i.TEXTURE_2D,Tt,wt,at.width,at.height);else{let lt=at.width,Rt=at.height;for(let Ut=0;Ut<Tt;Ut++)e.texImage2D(i.TEXTURE_2D,Ut,wt,lt,Rt,0,At,qt,null),lt>>=1,Rt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){const lt=i.canvas;if(lt.hasAttribute("layoutsubtree")||lt.setAttribute("layoutsubtree","true"),at.parentNode!==lt){lt.appendChild(at),d.add(E),lt.onpaint=Rt=>{const Ut=Rt.changedElements;for(const ft of d)Ut.includes(ft.image)&&(ft.needsUpdate=!0)},lt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,at);else{const Ut=i.RGBA,ft=i.RGBA,Xt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ut,ft,Xt,at)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Kt.length>0){if(Vt&&ee){const lt=le(Kt[0]);e.texStorage2D(i.TEXTURE_2D,Tt,wt,lt.width,lt.height)}for(let lt=0,Rt=Kt.length;lt<Rt;lt++)Et=Kt[lt],Vt?H&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,At,qt,Et):e.texImage2D(i.TEXTURE_2D,lt,wt,At,qt,Et);E.generateMipmaps=!1}else if(Vt){if(ee){const lt=le(at);e.texStorage2D(i.TEXTURE_2D,Tt,wt,lt.width,lt.height)}H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,qt,at)}else e.texImage2D(i.TEXTURE_2D,0,wt,At,qt,at);p(E)&&y(Z),bt.__version=Mt.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function rt(N,E,Y){if(E.image.length!==6)return;const Z=jt(N,E),it=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+Y);const Mt=n.get(it);if(it.version!==Mt.__version||Z===!0){e.activeTexture(i.TEXTURE0+Y);const bt=pe.getPrimaries(pe.workingColorSpace),st=E.colorSpace===Bn?null:pe.getPrimaries(E.colorSpace),at=E.colorSpace===Bn||bt===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);const At=E.isCompressedTexture||E.image[0].isCompressedTexture,qt=E.image[0]&&E.image[0].isDataTexture,wt=[];for(let ft=0;ft<6;ft++)!At&&!qt?wt[ft]=m(E.image[ft],!0,s.maxCubemapSize):wt[ft]=qt?E.image[ft].image:E.image[ft],wt[ft]=te(E,wt[ft]);const Et=wt[0],Kt=r.convert(E.format,E.colorSpace),Vt=r.convert(E.type),ee=_(E.internalFormat,Kt,Vt,E.normalized,E.colorSpace),H=E.isVideoTexture!==!0,Tt=Mt.__version===void 0||Z===!0,lt=it.dataReady;let Rt=b(E,Et);Zt(i.TEXTURE_CUBE_MAP,E);let Ut;if(At){H&&Tt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,ee,Et.width,Et.height);for(let ft=0;ft<6;ft++){Ut=wt[ft].mipmaps;for(let Xt=0;Xt<Ut.length;Xt++){const Yt=Ut[Xt];E.format!==Hn?Kt!==null?H?lt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Xt,0,0,Yt.width,Yt.height,Kt,Yt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Xt,ee,Yt.width,Yt.height,0,Yt.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Xt,0,0,Yt.width,Yt.height,Kt,Vt,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Xt,ee,Yt.width,Yt.height,0,Kt,Vt,Yt.data)}}}else{if(Ut=E.mipmaps,H&&Tt){Ut.length>0&&Rt++;const ft=le(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,ee,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(qt){H?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,wt[ft].width,wt[ft].height,Kt,Vt,wt[ft].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,ee,wt[ft].width,wt[ft].height,0,Kt,Vt,wt[ft].data);for(let Xt=0;Xt<Ut.length;Xt++){const Re=Ut[Xt].image[ft].image;H?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Xt+1,0,0,Re.width,Re.height,Kt,Vt,Re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Xt+1,ee,Re.width,Re.height,0,Kt,Vt,Re.data)}}else{H?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Kt,Vt,wt[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,ee,Kt,Vt,wt[ft]);for(let Xt=0;Xt<Ut.length;Xt++){const Yt=Ut[Xt];H?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Xt+1,0,0,Kt,Vt,Yt.image[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Xt+1,ee,Kt,Vt,Yt.image[ft])}}}p(E)&&y(i.TEXTURE_CUBE_MAP),Mt.__version=it.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function J(N,E,Y,Z,it,Mt){const bt=r.convert(Y.format,Y.colorSpace),st=r.convert(Y.type),at=_(Y.internalFormat,bt,st,Y.normalized,Y.colorSpace),At=n.get(E),qt=n.get(Y);if(qt.__renderTarget=E,!At.__hasExternalTextures){const wt=Math.max(1,E.width>>Mt),Et=Math.max(1,E.height>>Mt);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,Mt,at,wt,Et,E.depth,0,bt,st,null):e.texImage2D(it,Mt,at,wt,Et,0,bt,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,N),zt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,it,qt.__webglTexture,0,vt(E)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,it,qt.__webglTexture,Mt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(N,E,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,N),E.depthBuffer){const Z=E.depthTexture,it=Z&&Z.isDepthTexture?Z.type:null,Mt=S(E.stencilBuffer,it),bt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;zt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt(E),Mt,E.width,E.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt(E),Mt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,N)}else{const Z=E.textures;for(let it=0;it<Z.length;it++){const Mt=Z[it],bt=r.convert(Mt.format,Mt.colorSpace),st=r.convert(Mt.type),at=_(Mt.internalFormat,bt,st,Mt.normalized,Mt.colorSpace);zt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt(E),at,E.width,E.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt(E),at,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,at,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xt(N,E,Y){const Z=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const it=n.get(E.depthTexture);if(it.__renderTarget=E,(!it.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Z){if(it.__webglInit===void 0&&(it.__webglInit=!0,E.depthTexture.addEventListener("dispose",R)),it.__webglTexture===void 0){it.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),Zt(i.TEXTURE_CUBE_MAP,E.depthTexture);const At=r.convert(E.depthTexture.format),qt=r.convert(E.depthTexture.type);let wt;E.depthTexture.format===yi?wt=i.DEPTH_COMPONENT24:E.depthTexture.format===Qi&&(wt=i.DEPTH24_STENCIL8);for(let Et=0;Et<6;Et++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,wt,E.width,E.height,0,At,qt,null)}}else W(E.depthTexture,0);const Mt=it.__webglTexture,bt=vt(E),st=Z?i.TEXTURE_CUBE_MAP_POSITIVE_X+Y:i.TEXTURE_2D,at=E.depthTexture.format===Qi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===yi)zt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,st,Mt,0,bt):i.framebufferTexture2D(i.FRAMEBUFFER,at,st,Mt,0);else if(E.depthTexture.format===Qi)zt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,st,Mt,0,bt):i.framebufferTexture2D(i.FRAMEBUFFER,at,st,Mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $(N){const E=n.get(N),Y=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const Z=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Z){const it=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Z.removeEventListener("dispose",it)};Z.addEventListener("dispose",it),E.__depthDisposeCallback=it}E.__boundDepthTexture=Z}if(N.depthTexture&&!E.__autoAllocateDepthBuffer)if(Y)for(let Z=0;Z<6;Z++)xt(E.__webglFramebuffer[Z],N,Z);else{const Z=N.texture.mipmaps;Z&&Z.length>0?xt(E.__webglFramebuffer[0],N,0):xt(E.__webglFramebuffer,N,0)}else if(Y){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]===void 0)E.__webglDepthbuffer[Z]=i.createRenderbuffer(),ut(E.__webglDepthbuffer[Z],N,!1);else{const it=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=E.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,Mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,Mt)}}else{const Z=N.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),ut(E.__webglDepthbuffer,N,!1);else{const it=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,Mt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(N,E,Y){const Z=n.get(N);E!==void 0&&J(Z.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&$(N)}function ct(N){const E=N.texture,Y=n.get(N),Z=n.get(E);N.addEventListener("dispose",x);const it=N.textures,Mt=N.isWebGLCubeRenderTarget===!0,bt=it.length>1;if(bt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=E.version,o.memory.textures++),Mt){Y.__webglFramebuffer=[];for(let st=0;st<6;st++)if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[st]=[];for(let at=0;at<E.mipmaps.length;at++)Y.__webglFramebuffer[st][at]=i.createFramebuffer()}else Y.__webglFramebuffer[st]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let st=0;st<E.mipmaps.length;st++)Y.__webglFramebuffer[st]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(bt)for(let st=0,at=it.length;st<at;st++){const At=n.get(it[st]);At.__webglTexture===void 0&&(At.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&zt(N)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let st=0;st<it.length;st++){const at=it[st];Y.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[st]);const At=r.convert(at.format,at.colorSpace),qt=r.convert(at.type),wt=_(at.internalFormat,At,qt,at.normalized,at.colorSpace,N.isXRRenderTarget===!0),Et=vt(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,wt,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,Y.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(Y.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Mt){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Zt(i.TEXTURE_CUBE_MAP,E);for(let st=0;st<6;st++)if(E.mipmaps&&E.mipmaps.length>0)for(let at=0;at<E.mipmaps.length;at++)J(Y.__webglFramebuffer[st][at],N,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,at);else J(Y.__webglFramebuffer[st],N,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);p(E)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let st=0,at=it.length;st<at;st++){const At=it[st],qt=n.get(At);let wt=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(wt=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(wt,qt.__webglTexture),Zt(wt,At),J(Y.__webglFramebuffer,N,At,i.COLOR_ATTACHMENT0+st,wt,0),p(At)&&y(wt)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(st=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,Z.__webglTexture),Zt(st,E),E.mipmaps&&E.mipmaps.length>0)for(let at=0;at<E.mipmaps.length;at++)J(Y.__webglFramebuffer[at],N,E,i.COLOR_ATTACHMENT0,st,at);else J(Y.__webglFramebuffer,N,E,i.COLOR_ATTACHMENT0,st,0);p(E)&&y(st),e.unbindTexture()}N.depthBuffer&&$(N)}function pt(N){const E=N.textures;for(let Y=0,Z=E.length;Y<Z;Y++){const it=E[Y];if(p(it)){const Mt=w(N),bt=n.get(it).__webglTexture;e.bindTexture(Mt,bt),y(Mt),e.unbindTexture()}}}const mt=[],gt=[];function St(N){if(N.samples>0){if(zt(N)===!1){const E=N.textures,Y=N.width,Z=N.height;let it=i.COLOR_BUFFER_BIT;const Mt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(N),st=E.length>1;if(st)for(let At=0;At<E.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);const at=N.texture.mipmaps;at&&at.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let At=0;At<E.length;At++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[At]);const qt=n.get(E[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qt,0)}i.blitFramebuffer(0,0,Y,Z,0,0,Y,Z,it,i.NEAREST),l===!0&&(mt.length=0,gt.length=0,mt.push(i.COLOR_ATTACHMENT0+At),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(mt.push(Mt),gt.push(Mt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,gt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,mt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let At=0;At<E.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,bt.__webglColorRenderbuffer[At]);const qt=n.get(E[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){const E=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function vt(N){return Math.min(s.maxSamples,N.samples)}function zt(N){const E=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function B(N){const E=o.render.frame;h.get(N)!==E&&(h.set(N,E),N.update())}function te(N,E){const Y=N.colorSpace,Z=N.format,it=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Y!==Dr&&Y!==Bn&&(pe.getTransfer(Y)===Ee?(Z!==Hn||it!==Tn)&&Jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):fe("WebGLTextures: Unsupported texture color space:",Y)),E}function le(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=D,this.getTextureUnits=L,this.setTextureUnits=I,this.setTexture2D=W,this.setTexture2DArray=O,this.setTexture3D=G,this.setTextureCube=X,this.rebindTextures=tt,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=J,this.useMultisampledRTT=zt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Lv(i,t){function e(n,s=Bn){let r;const o=pe.getTransfer(s);if(n===Tn)return i.UNSIGNED_BYTE;if(n===yc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Mc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===id)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===sd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ed)return i.BYTE;if(n===nd)return i.SHORT;if(n===Cr)return i.UNSIGNED_SHORT;if(n===vc)return i.INT;if(n===ii)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===sn)return i.HALF_FLOAT;if(n===rd)return i.ALPHA;if(n===od)return i.RGB;if(n===Hn)return i.RGBA;if(n===yi)return i.DEPTH_COMPONENT;if(n===Qi)return i.DEPTH_STENCIL;if(n===Sc)return i.RED;if(n===wc)return i.RED_INTEGER;if(n===rs)return i.RG;if(n===bc)return i.RG_INTEGER;if(n===Ec)return i.RGBA_INTEGER;if(n===Lo||n===Io||n===No||n===Uo)if(o===Ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Lo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Lo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Io)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Uo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Tl||n===Al||n===Rl||n===Cl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Al)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Rl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pl||n===Dl||n===Ll||n===Il||n===Nl||n===Yo||n===Ul)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Pl||n===Dl)return o===Ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ll)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Il)return r.COMPRESSED_R11_EAC;if(n===Nl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Yo)return r.COMPRESSED_RG11_EAC;if(n===Ul)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ol||n===Fl||n===zl||n===Bl||n===kl||n===Gl||n===Hl||n===Vl||n===Wl||n===Xl||n===Yl||n===ql||n===Kl||n===Zl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ol)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ql)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jl||n===$l||n===Ql)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Jl)return o===Ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$l)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ql)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jl||n===tc||n===qo||n===ec)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===jl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===tc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ec)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Pr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Iv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Nv=`
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

}`;class Uv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new fd(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new nn({vertexShader:Iv,fragmentShader:Nv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new et(new be(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ov extends Oi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",m=new Uv,p={},y=e.getContextAttributes();let w=null,_=null;const S=[],b=[],R=new ht;let x=null,M=null;const T=new Mn;T.viewport=new ke;const A=new Mn;A.viewport=new ke;const P=[T,A],D=new O0;let L=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let nt=S[j];return nt===void 0&&(nt=new Aa,S[j]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(j){let nt=S[j];return nt===void 0&&(nt=new Aa,S[j]=nt),nt.getGripSpace()},this.getHand=function(j){let nt=S[j];return nt===void 0&&(nt=new Aa,S[j]=nt),nt.getHandSpace()};function U(j){const nt=b.indexOf(j.inputSource);if(nt===-1)return;const V=S[nt];V!==void 0&&(V.update(j.inputSource,j.frame,c||o),V.dispatchEvent({type:j.type,data:j.inputSource}))}function z(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",W);for(let j=0;j<S.length;j++){const nt=b[j];nt!==null&&(b[j]=null,S[j].disconnect(nt))}L=null,I=null,m.reset();for(const j in p)delete p[j];if(t.setRenderTarget(w),f=null,u=null,d=null,s=null,_=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(R.width,R.height,!1),M!==null){const j=M.camera;j.fov=M.fov,j.zoom=M.zoom,j.updateProjectionMatrix(),M=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&Jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",z),s.addEventListener("inputsourceschange",W),y.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let V=null,rt=null,J=null;y.depth&&(J=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,V=y.stencil?Qi:yi,rt=y.stencil?Pr:ii);const ut={colorFormat:e.RGBA8,depthFormat:J,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(ut),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new xn(u.textureWidth,u.textureHeight,{format:Hn,type:Tn,depthTexture:new Nr(u.textureWidth,u.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const V={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,V),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new xn(f.framebufferWidth,f.framebufferHeight,{format:Hn,type:Tn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),jt.setContext(s),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(j){for(let nt=0;nt<j.removed.length;nt++){const V=j.removed[nt],rt=b.indexOf(V);rt>=0&&(b[rt]=null,S[rt].disconnect(V))}for(let nt=0;nt<j.added.length;nt++){const V=j.added[nt];let rt=b.indexOf(V);if(rt===-1){for(let ut=0;ut<S.length;ut++)if(ut>=b.length){b.push(V),rt=ut;break}else if(b[ut]===null){b[ut]=V,rt=ut;break}if(rt===-1)break}const J=S[rt];J&&J.connect(V)}}const O=new F,G=new F;function X(j,nt,V){O.setFromMatrixPosition(nt.matrixWorld),G.setFromMatrixPosition(V.matrixWorld);const rt=O.distanceTo(G),J=nt.projectionMatrix.elements,ut=V.projectionMatrix.elements,xt=J[14]/(J[10]-1),$=J[14]/(J[10]+1),tt=(J[9]+1)/J[5],ct=(J[9]-1)/J[5],pt=(J[8]-1)/J[0],mt=(ut[8]+1)/ut[0],gt=xt*pt,St=xt*mt,vt=rt/(-pt+mt),zt=vt*-pt;if(nt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(zt),j.translateZ(vt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),J[10]===-1)j.projectionMatrix.copy(nt.projectionMatrix),j.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const B=xt+vt,te=$+vt,le=gt-zt,N=St+(rt-zt),E=tt*$/te*B,Y=ct*$/te*B;j.projectionMatrix.makePerspective(le,N,E,Y,B,te),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function _t(j,nt){nt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(nt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let nt=j.near,V=j.far;m.texture!==null&&(m.depthNear>0&&(nt=m.depthNear),m.depthFar>0&&(V=m.depthFar)),D.near=A.near=T.near=nt,D.far=A.far=T.far=V,(L!==D.near||I!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),L=D.near,I=D.far),D.layers.mask=j.layers.mask|6,T.layers.mask=D.layers.mask&-5,A.layers.mask=D.layers.mask&-3;const rt=j.parent,J=D.cameras;_t(D,rt);for(let ut=0;ut<J.length;ut++)_t(J[ut],rt);J.length===2?X(D,T,A):D.projectionMatrix.copy(T.projectionMatrix),M===null&&j.isPerspectiveCamera&&(M={camera:j,fov:j.fov,zoom:j.zoom}),yt(j,D,rt)};function yt(j,nt,V){V===null?j.matrix.copy(nt.matrixWorld):(j.matrix.copy(V.matrixWorld),j.matrix.invert(),j.matrix.multiply(nt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(nt.projectionMatrix),j.projectionMatrixInverse.copy(nt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Vs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(j){return p[j]};let kt=null;function Zt(j,nt){if(h=nt.getViewerPose(c||o),g=nt,h!==null){const V=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let rt=!1;V.length!==D.cameras.length&&(D.cameras.length=0,rt=!0);for(let $=0;$<V.length;$++){const tt=V[$];let ct=null;if(f!==null)ct=f.getViewport(tt);else{const mt=d.getViewSubImage(u,tt);ct=mt.viewport,$===0&&(t.setRenderTargetTextures(_,mt.colorTexture,mt.depthStencilTexture),t.setRenderTarget(_))}let pt=P[$];pt===void 0&&(pt=new Mn,pt.layers.enable($),pt.viewport=new ke,P[$]=pt),pt.matrix.fromArray(tt.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(tt.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(ct.x,ct.y,ct.width,ct.height),$===0&&(D.matrix.copy(pt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),rt===!0&&D.cameras.push(pt)}const J=s.enabledFeatures;if(J&&J.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const $=d.getDepthInformation(V[0]);$&&$.isValid&&$.texture&&m.init($,s.renderState)}if(J&&J.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let $=0;$<V.length;$++){const tt=V[$].camera;if(tt){let ct=p[tt];ct||(ct=new fd,p[tt]=ct);const pt=d.getCameraImage(tt);ct.sourceTexture=pt}}}}for(let V=0;V<S.length;V++){const rt=b[V],J=S[V];rt!==null&&J!==void 0&&J.update(rt,nt,c||o)}kt&&kt(j,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const jt=new Rd;jt.setAnimationLoop(Zt),this.setAnimationLoop=function(j){kt=j},this.dispose=function(){}}}const Fv=new ae,Ud=new ne;Ud.set(-1,0,0,0,1,0,0,0,1);function zv(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Sd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,w,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===_n&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===_n&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),w=y.envMap,_=y.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(Fv.makeRotationFromEuler(_)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ud),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===_n&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Bv(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,S){const b=S.program;n.uniformBlockBinding(_,b)}function c(_,S){let b=s[_.id];b===void 0&&(m(_),b=h(_),s[_.id]=b,_.addEventListener("dispose",y));const R=S.program;n.updateUBOMapping(_,R);const x=t.render.frame;r[_.id]!==x&&(u(_),r[_.id]=x)}function h(_){const S=d();_.__bindingPointIndex=S;const b=i.createBuffer(),R=_.__size,x=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,R,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return fe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const S=s[_.id],b=_.uniforms,R=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let x=0,M=b.length;x<M;x++){const T=b[x];if(Array.isArray(T))for(let A=0,P=T.length;A<P;A++)f(T[A],x,A,R);else f(T,x,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,S,b,R){if(v(_,S,b,R)===!0){const x=_.__offset,M=_.value;if(Array.isArray(M)){let T=0;for(let A=0;A<M.length;A++){const P=M[A],D=p(P);g(P,_.__data,T),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(T+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(M,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,_.__data)}}function g(_,S,b){typeof _=="number"||typeof _=="boolean"?S[0]=_:_.isMatrix3?(S[0]=_.elements[0],S[1]=_.elements[1],S[2]=_.elements[2],S[3]=0,S[4]=_.elements[3],S[5]=_.elements[4],S[6]=_.elements[5],S[7]=0,S[8]=_.elements[6],S[9]=_.elements[7],S[10]=_.elements[8],S[11]=0):ArrayBuffer.isView(_)?S.set(new _.constructor(_.buffer,_.byteOffset,S.length)):_.toArray(S,b)}function v(_,S,b,R){const x=_.value,M=S+"_"+b;if(R[M]===void 0)return typeof x=="number"||typeof x=="boolean"?R[M]=x:ArrayBuffer.isView(x)?R[M]=x.slice():R[M]=x.clone(),!0;{const T=R[M];if(typeof x=="number"||typeof x=="boolean"){if(T!==x)return R[M]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(T.equals(x)===!1)return T.copy(x),!0}}return!1}function m(_){const S=_.uniforms;let b=0;const R=16;for(let M=0,T=S.length;M<T;M++){const A=Array.isArray(S[M])?S[M]:[S[M]];for(let P=0,D=A.length;P<D;P++){const L=A[P],I=Array.isArray(L.value)?L.value:[L.value];for(let U=0,z=I.length;U<z;U++){const W=I[U],O=p(W),G=b%R,X=G%O.boundary,_t=G+X;b+=X,_t!==0&&R-_t<O.storage&&(b+=R-_t),L.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=O.storage}}}const x=b%R;return x>0&&(b+=R-x),_.__size=b,_.__cache={},this}function p(_){const S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?Jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(S.boundary=16,S.storage=_.byteLength):Jt("WebGLRenderer: Unsupported uniform value type.",_),S}function y(_){const S=_.target;S.removeEventListener("dispose",y);const b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function w(){for(const _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:w}}const kv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Zn=null;function Gv(){return Zn===null&&(Zn=new Zo(kv,16,16,rs,sn),Zn.name="DFG_LUT",Zn.minFilter=Xe,Zn.magFilter=Xe,Zn.wrapS=Gn,Zn.wrapT=Gn,Zn.generateMipmaps=!1,Zn.needsUpdate=!0),Zn}class Hv{constructor(t={}){const{canvas:e=Zf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Tn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const v=f,m=new Set([Ec,bc,wc]),p=new Set([Tn,ii,Cr,Pr,yc,Mc]),y=new Uint32Array(4),w=new Int32Array(4),_=new F;let S=null,b=null;const R=[],x=[];let M=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let A=!1,P=null,D=null,L=null,I=null;this._outputColorSpace=Be;let U=0,z=0,W=null,O=-1,G=null;const X=new ke,_t=new ke;let yt=null;const kt=new It(0);let Zt=0,jt=e.width,j=e.height,nt=1,V=null,rt=null;const J=new ke(0,0,jt,j),ut=new ke(0,0,jt,j);let xt=!1;const $=new Lc;let tt=!1,ct=!1;const pt=new ae,mt=new F,gt=new ke,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function zt(){return W===null?nt:1}let B=n;function te(C,k){return e.getContext(C,k)}let le,N,E,Y,Z,it,Mt,bt,st,at,At,qt,wt,Et,Kt,Vt,ee,H,Tt,lt,Rt,Ut,ft;try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pc}`),e.addEventListener("webglcontextlost",Re,!1),e.addEventListener("webglcontextrestored",ie,!1),e.addEventListener("webglcontextcreationerror",He,!1),B===null){const k="webgl2";if(B=te(k,C),B===null)throw te(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xt()}catch(C){throw e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",He,!1),fe("WebGLRenderer: "+C.message),C}function Xt(){le=new G_(B),le.init(),Rt=new Lv(B,le),N=new D_(B,le,t,Rt),E=new Pv(B,le),N.reversedDepthBuffer&&u&&E.buffers.depth.setReversed(!0),D=B.createFramebuffer(),L=B.createFramebuffer(),I=B.createFramebuffer(),Y=new W_(B),Z=new gv,it=new Dv(B,le,E,Z,N,Rt,Y),Mt=new k_(T),bt=new Y0(B),Ut=new C_(B,bt),st=new H_(B,bt,Y,Ut),at=new Y_(B,st,bt,Ut,Y),H=new X_(B,N,it),Kt=new L_(Z),At=new mv(T,Mt,le,N,Ut,Kt),qt=new zv(T,Z),wt=new xv,Et=new bv(le),ee=new R_(T,Mt,E,at,g,l),Vt=new Cv(T,at,N),ft=new Bv(B,Y,N,E),Tt=new P_(B,le,Y),lt=new V_(B,le,Y),Y.programs=At.programs,T.capabilities=N,T.extensions=le,T.properties=Z,T.renderLists=wt,T.shadowMap=Vt,T.state=E,T.info=Y}v!==Tn&&(M=new K_(v,e.width,e.height,a,s,r));const Yt=new Ov(T,B);this.xr=Yt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const C=le.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=le.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(C){C!==void 0&&(nt=C,this.setSize(jt,j,!1))},this.getSize=function(C){return C.set(jt,j)},this.setSize=function(C,k,Q=!0){if(Yt.isPresenting){Jt("WebGLRenderer: Can't change size while VR device is presenting.");return}jt=C,j=k,e.width=Math.floor(C*nt),e.height=Math.floor(k*nt),Q===!0&&(e.style.width=C+"px",e.style.height=k+"px"),M!==null&&M.setSize(e.width,e.height),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(jt*nt,j*nt).floor()},this.setDrawingBufferSize=function(C,k,Q){jt=C,j=k,nt=Q,e.width=Math.floor(C*Q),e.height=Math.floor(k*Q),this.setViewport(0,0,C,k)},this.setEffects=function(C){if(v===Tn){fe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let k=0;k<C.length;k++)if(C[k].isOutputPass===!0){Jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(X)},this.getViewport=function(C){return C.copy(J)},this.setViewport=function(C,k,Q,q){C.isVector4?J.set(C.x,C.y,C.z,C.w):J.set(C,k,Q,q),E.viewport(X.copy(J).multiplyScalar(nt).round())},this.getScissor=function(C){return C.copy(ut)},this.setScissor=function(C,k,Q,q){C.isVector4?ut.set(C.x,C.y,C.z,C.w):ut.set(C,k,Q,q),E.scissor(_t.copy(ut).multiplyScalar(nt).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(C){E.setScissorTest(xt=C)},this.setOpaqueSort=function(C){V=C},this.setTransparentSort=function(C){rt=C},this.getClearColor=function(C){return C.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(C=!0,k=!0,Q=!0){let q=0;if(C){let K=!1;if(W!==null){const Pt=W.texture.format;K=m.has(Pt)}if(K){const Pt=W.texture.type,Ft=p.has(Pt),Ct=ee.getClearColor(),Nt=ee.getClearAlpha(),Wt=Ct.r,se=Ct.g,ce=Ct.b;Ft?(y[0]=Wt,y[1]=se,y[2]=ce,y[3]=Nt,B.clearBufferuiv(B.COLOR,0,y)):(w[0]=Wt,w[1]=se,w[2]=ce,w[3]=Nt,B.clearBufferiv(B.COLOR,0,w))}else q|=B.COLOR_BUFFER_BIT}k&&(q|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(q|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&B.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),P=C},this.dispose=function(){e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",He,!1),ee.dispose(),wt.dispose(),Et.dispose(),Z.dispose(),Mt.dispose(),at.dispose(),Ut.dispose(),ft.dispose(),At.dispose(),Yt.dispose(),Yt.removeEventListener("sessionstart",ds),Yt.removeEventListener("sessionend",Yr),ot.stop()};function Re(C){C.preventDefault(),fh("WebGLRenderer: Context Lost."),A=!0}function ie(){fh("WebGLRenderer: Context Restored."),A=!1;const C=Y.autoReset,k=Vt.enabled,Q=Vt.autoUpdate,q=Vt.needsUpdate,K=Vt.type;Xt(),Y.autoReset=C,Vt.enabled=k,Vt.autoUpdate=Q,Vt.needsUpdate=q,Vt.type=K}function He(C){fe("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function hn(C){const k=C.target;k.removeEventListener("dispose",hn),_a(k)}function _a(C){tr(C),Z.remove(C)}function tr(C){const k=Z.get(C).programs;k!==void 0&&(k.forEach(function(Q){At.releaseProgram(Q)}),C.isShaderMaterial&&At.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,Q,q,K,Pt){k===null&&(k=St);const Ft=K.isMesh&&K.matrixWorld.determinantAffine()<0,Ct=fs(C,k,Q,q,K);E.setMaterial(q,Ft);let Nt=Q.index,Wt=1;if(q.wireframe===!0){if(Nt=st.getWireframeAttribute(Q),Nt===void 0)return;Wt=2}const se=Q.drawRange,ce=Q.attributes.position;let Bt=se.start*Wt,ve=(se.start+se.count)*Wt;Pt!==null&&(Bt=Math.max(Bt,Pt.start*Wt),ve=Math.min(ve,(Pt.start+Pt.count)*Wt)),Nt!==null?(Bt=Math.max(Bt,0),ve=Math.min(ve,Nt.count)):ce!=null&&(Bt=Math.max(Bt,0),ve=Math.min(ve,ce.count));const he=ve-Bt;if(he<0||he===1/0)return;Ut.setup(K,q,Ct,Q,Nt);let Ue,Ie=Tt;if(Nt!==null&&(Ue=bt.get(Nt),Ie=lt,Ie.setIndex(Ue)),K.isMesh)q.wireframe===!0?(E.setLineWidth(q.wireframeLinewidth*zt()),Ie.setMode(B.LINES)):Ie.setMode(B.TRIANGLES);else if(K.isLine){let an=q.linewidth;an===void 0&&(an=1),E.setLineWidth(an*zt()),K.isLineSegments?Ie.setMode(B.LINES):K.isLineLoop?Ie.setMode(B.LINE_LOOP):Ie.setMode(B.LINE_STRIP)}else K.isPoints?Ie.setMode(B.POINTS):K.isSprite&&Ie.setMode(B.TRIANGLES);if(K.isBatchedMesh)if(le.get("WEBGL_multi_draw"))Ie.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const an=K._multiDrawStarts,Ht=K._multiDrawCounts,un=K._multiDrawCount,ye=Nt?bt.get(Nt).bytesPerElement:1,Pn=Z.get(q).currentProgram.getUniforms();for(let qn=0;qn<un;qn++)Pn.setValue(B,"_gl_DrawID",qn),Ie.render(an[qn]/ye,Ht[qn])}else if(K.isInstancedMesh)Ie.renderInstances(Bt,he,K.count);else if(Q.isInstancedBufferGeometry){const an=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ht=Math.min(Q.instanceCount,an);Ie.renderInstances(Bt,he,Ht)}else Ie.render(Bt,he)};function Xr(C,k,Q,q){P!==null&&C.isNodeMaterial&&P.setObject(q,C),tt===!0&&Kt.setState(C,Q,!1),C.transparent===!0&&C.side===Fe&&C.forceSinglePass===!1?(C.side=_n,C.needsUpdate=!0,Yn(C,k,q),C.side=is,C.needsUpdate=!0,Yn(C,k,q),C.side=Fe):Yn(C,k,q)}this.compile=function(C,k,Q=null){Q===null&&(Q=C),P!==null&&P.renderStart(C,k,Q),b=Et.get(Q),b.init(k),x.push(b),Q.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(b.pushLight(K),K.castShadow&&b.pushShadow(K))}),C!==Q&&C.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(b.pushLight(K),K.castShadow&&b.pushShadow(K))}),b.setupLights(),P!==null&&P.updateLights(b.state.lightsArray),ct=this.localClippingEnabled,tt=Kt.init(this.clippingPlanes,ct),tt===!0&&Kt.setGlobalState(this.clippingPlanes,k),P!==null&&Vt.render(b.state.shadowsArray,Q,k);const q=new Set;return C.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Pt=K.material;if(Pt)if(Array.isArray(Pt))for(let Ft=0;Ft<Pt.length;Ft++){const Ct=Pt[Ft];Xr(Ct,Q,k,K),q.add(Ct)}else Xr(Pt,Q,k,K),q.add(Pt)}),b=x.pop(),P!==null&&P.renderEnd(),q},this.compileAsync=function(C,k,Q=null){const q=this.compile(C,k,Q);return new Promise(K=>{function Pt(){if(q.forEach(function(Ft){const Nt=Z.get(Ft).currentProgram;(Nt===void 0||Nt.isReady())&&q.delete(Ft)}),q.size===0){K(C);return}setTimeout(Pt,10)}le.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let er=null;function Qe(C){er&&er(C)}function ds(){ot.stop()}function Yr(){ot.start()}const ot=new Rd;ot.setAnimationLoop(Qe),typeof self<"u"&&ot.setContext(self),this.setAnimationLoop=function(C){er=C,Yt.setAnimationLoop(C),C===null?ot.stop():ot.start()},Yt.addEventListener("sessionstart",ds),Yt.addEventListener("sessionend",Yr),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;P!==null&&P.renderStart(C,k);const Q=Yt.enabled===!0&&Yt.isPresenting===!0,q=M!==null&&(W===null||Q)&&M.begin(T,W);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Yt.enabled===!0&&Yt.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(Yt.cameraAutoUpdate===!0&&Yt.updateCamera(k),k=Yt.getCamera()),C.isScene===!0&&C.onBeforeRender(T,C,k,W),b=Et.get(C,x.length),b.init(k),b.state.textureUnits=it.getTextureUnits(),x.push(b),pt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),$.setFromProjectionMatrix(pt,$n,k.reversedDepth),ct=this.localClippingEnabled,tt=Kt.init(this.clippingPlanes,ct),S=wt.get(C,R.length),S.init(),R.push(S),Yt.enabled===!0&&Yt.isPresenting===!0){const Ft=T.xr.getDepthSensingMesh();Ft!==null&&Ot(Ft,k,-1/0,T.sortObjects)}Ot(C,k,0,T.sortObjects),S.finish(),P!==null&&P.updateLights(b.state.lightsArray),T.sortObjects===!0&&S.sort(V,rt),vt=Yt.enabled===!1||Yt.isPresenting===!1||Yt.hasDepthSensing()===!1,vt&&ee.addToRenderList(S,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),tt===!0&&Kt.beginShadows();const K=b.state.shadowsArray;if(Vt.render(K,C,k),tt===!0&&Kt.endShadows(),(q&&M.hasRenderPass())===!1){const Ft=S.opaque,Ct=S.transmissive;if(b.setupLights(),k.isArrayCamera){const Nt=k.cameras;if(Ct.length>0)for(let Wt=0,se=Nt.length;Wt<se;Wt++){const ce=Nt[Wt];de(Ft,Ct,C,ce)}vt&&ee.render(C);for(let Wt=0,se=Nt.length;Wt<se;Wt++){const ce=Nt[Wt];Qt(S,C,ce,ce.viewport)}}else Ct.length>0&&de(Ft,Ct,C,k),vt&&ee.render(C),Qt(S,C,k)}W!==null&&z===0&&(it.updateMultisampleRenderTarget(W),it.updateRenderTargetMipmap(W)),q&&M.end(T),C.isScene===!0&&C.onAfterRender(T,C,k),Ut.resetDefaultState(),O=-1,G=null,x.pop(),x.length>0?(b=x[x.length-1],it.setTextureUnits(b.state.textureUnits),tt===!0&&Kt.setGlobalState(T.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?S=R[R.length-1]:S=null,P!==null&&P.renderEnd()};function Ot(C,k,Q,q){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)Q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLightProbeGrid)b.pushLightProbeGrid(C);else if(C.isLight)b.pushLight(C),C.castShadow&&b.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum($)){q&&gt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(pt);const Ft=at.update(C),Ct=C.material;Ct.visible&&S.push(C,Ft,Ct,Q,gt.z,null,k)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum($))){const Ft=at.update(C),Ct=C.material;if(q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),gt.copy(C.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),gt.copy(Ft.boundingSphere.center)),gt.applyMatrix4(C.matrixWorld).applyMatrix4(pt)),Array.isArray(Ct)){const Nt=Ft.groups;for(let Wt=0,se=Nt.length;Wt<se;Wt++){const ce=Nt[Wt],Bt=Ct[ce.materialIndex];Bt&&Bt.visible&&S.push(C,Ft,Bt,Q,gt.z,ce,k)}}else Ct.visible&&S.push(C,Ft,Ct,Q,gt.z,null,k)}}const Pt=C.children;for(let Ft=0,Ct=Pt.length;Ft<Ct;Ft++)Ot(Pt[Ft],k,Q,q)}function Qt(C,k,Q,q){const{opaque:K,transmissive:Pt,transparent:Ft}=C;b.setupLightsView(Q),tt===!0&&Kt.setGlobalState(T.clippingPlanes,Q),q&&E.viewport(X.copy(q)),K.length>0&&Ve(K,k,Q),Pt.length>0&&Ve(Pt,k,Q),Ft.length>0&&Ve(Ft,k,Q),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function de(C,k,Q,q){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[q.id]===void 0){const Bt=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[q.id]=new xn(1,1,{generateMipmaps:!0,type:Bt?sn:Tn,minFilter:Ii,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pe.workingColorSpace})}const Pt=b.state.transmissionRenderTarget[q.id],Ft=q.viewport||X;Pt.setSize(Ft.z*T.transmissionResolutionScale,Ft.w*T.transmissionResolutionScale);const Ct=T.getRenderTarget(),Nt=T.getActiveCubeFace(),Wt=T.getActiveMipmapLevel();T.setRenderTarget(Pt),T.getClearColor(kt),Zt=T.getClearAlpha(),Zt<1&&T.setClearColor(16777215,.5),T.clear(),vt&&ee.render(Q);const se=T.toneMapping;T.toneMapping=jn;const ce=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),b.setupLightsView(q),tt===!0&&Kt.setGlobalState(T.clippingPlanes,q),Ve(C,Q,q),it.updateMultisampleRenderTarget(Pt),it.updateRenderTargetMipmap(Pt),le.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let ve=0,he=k.length;ve<he;ve++){const Ue=k[ve],{object:Ie,geometry:an,material:Ht,group:un}=Ue;if(Ht.side===Fe&&Ie.layers.test(q.layers)){const ye=Ht.side;Ht.side=_n,Ht.needsUpdate=!0,wn(Ie,Q,q,an,Ht,un),Ht.side=ye,Ht.needsUpdate=!0,Bt=!0}}Bt===!0&&(it.updateMultisampleRenderTarget(Pt),it.updateRenderTargetMipmap(Pt))}T.setRenderTarget(Ct,Nt,Wt),T.setClearColor(kt,Zt),ce!==void 0&&(q.viewport=ce),T.toneMapping=se}function Ve(C,k,Q){const q=k.isScene===!0?k.overrideMaterial:null;for(let K=0,Pt=C.length;K<Pt;K++){const Ft=C[K],{object:Ct,geometry:Nt,group:Wt}=Ft;let se=Ft.material;se.allowOverride===!0&&q!==null&&(se=q),Ct.layers.test(Q.layers)&&wn(Ct,k,Q,Nt,se,Wt)}}function wn(C,k,Q,q,K,Pt){P!==null&&K.isNodeMaterial&&P.setObject(C,K),C.onBeforeRender(T,k,Q,q,K,Pt),C.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(T,k,Q,q,C,Pt),K.transparent===!0&&K.side===Fe&&K.forceSinglePass===!1?(K.side=_n,K.needsUpdate=!0,T.renderBufferDirect(Q,k,q,K,C,Pt),K.side=is,K.needsUpdate=!0,T.renderBufferDirect(Q,k,q,K,C,Pt),K.side=Fe):T.renderBufferDirect(Q,k,q,K,C,Pt),C.onAfterRender(T,k,Q,q,K,Pt)}function Yn(C,k,Q){k.isScene!==!0&&(k=St);const q=Z.get(C),K=b.state.lights,Pt=b.state.shadowsArray,Ft=K.state.version,Ct=At.getParameters(C,K.state,Pt,k,Q,b.state.lightProbeGridArray),Nt=At.getProgramCacheKey(Ct);let Wt=q.programs;q.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?k.environment:null,q.fog=k.fog;const se=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;q.envMap=Mt.get(C.envMap||q.environment,se),q.envMapRotation=q.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,Wt===void 0&&(C.addEventListener("dispose",hn),Wt=new Map,q.programs=Wt);let ce=Wt.get(Nt);if(ce!==void 0){if(q.currentProgram===ce&&q.lightsStateVersion===Ft)return Bi(C,Ct),ce}else Ct.uniforms=At.getUniforms(C),P!==null&&C.isNodeMaterial&&P.build(C,Q,Ct),C.onBeforeCompile(Ct,T),ce=At.acquireProgram(Ct,Nt),Wt.set(Nt,ce),q.uniforms=Ct.uniforms;const Bt=q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Bt.clippingPlanes=Kt.uniform),Bi(C,Ct),q.needsLights=ps(C),q.lightsStateVersion=Ft,q.needsLights&&(Bt.ambientLightColor.value=K.state.ambient,Bt.lightProbe.value=K.state.probe,Bt.sunLights.value=K.state.sun,Bt.sunLightShadows.value=K.state.sunShadow,Bt.directionalLights.value=K.state.directional,Bt.directionalLightShadows.value=K.state.directionalShadow,Bt.spotLights.value=K.state.spot,Bt.spotLightShadows.value=K.state.spotShadow,Bt.rectAreaLights.value=K.state.rectArea,Bt.ltc_1.value=K.state.rectAreaLTC1,Bt.ltc_2.value=K.state.rectAreaLTC2,Bt.pointLights.value=K.state.point,Bt.pointLightShadows.value=K.state.pointShadow,Bt.hemisphereLights.value=K.state.hemi,Bt.sunShadowMatrix.value=K.state.sunShadowMatrix,Bt.sunShadowCascade.value=K.state.sunShadowCascade,Bt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Bt.spotLightMatrix.value=K.state.spotLightMatrix,Bt.spotLightMap.value=K.state.spotLightMap,Bt.pointShadowMatrix.value=K.state.pointShadowMatrix),q.lightProbeGrid=b.state.lightProbeGridArray.length>0,q.currentProgram=ce,q.uniformsList=null,ce}function ai(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=Oo.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function Bi(C,k){const Q=Z.get(C);Q.outputColorSpace=k.outputColorSpace,Q.batching=k.batching,Q.batchingColor=k.batchingColor,Q.instancing=k.instancing,Q.instancingColor=k.instancingColor,Q.instancingMorph=k.instancingMorph,Q.skinning=k.skinning,Q.morphTargets=k.morphTargets,Q.morphNormals=k.morphNormals,Q.morphColors=k.morphColors,Q.morphTargetsCount=k.morphTargetsCount,Q.numClippingPlanes=k.numClippingPlanes,Q.numIntersection=k.numClipIntersection,Q.vertexAlphas=k.vertexAlphas,Q.vertexTangents=k.vertexTangents,Q.toneMapping=k.toneMapping}function qr(C,k){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;_.setFromMatrixPosition(k.matrixWorld);for(let Q=0,q=C.length;Q<q;Q++){const K=C[Q];if(K.texture!==null&&K.boundingBox.containsPoint(_))return K}return null}function fs(C,k,Q,q,K){k.isScene!==!0&&(k=St),it.resetTextureUnits();const Pt=k.fog,Ft=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?k.environment:null,Ct=W===null?T.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:pe.workingColorSpace,Nt=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Wt=Mt.get(q.envMap||Ft,Nt),se=q.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ce=!!Q.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Bt=!!Q.morphAttributes.position,ve=!!Q.morphAttributes.normal,he=!!Q.morphAttributes.color;let Ue=jn;q.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Ue=T.toneMapping);const Ie=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,an=Ie!==void 0?Ie.length:0,Ht=Z.get(q),un=b.state.lights;if(tt===!0&&(ct===!0||C!==G)){const Oe=C===G&&q.id===O;Kt.setState(q,C,Oe)}let ye=!1;q.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==un.state.version||Ht.outputColorSpace!==Ct||K.isBatchedMesh&&Ht.batching===!1||!K.isBatchedMesh&&Ht.batching===!0||K.isBatchedMesh&&Ht.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Ht.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Ht.instancing===!1||!K.isInstancedMesh&&Ht.instancing===!0||K.isSkinnedMesh&&Ht.skinning===!1||!K.isSkinnedMesh&&Ht.skinning===!0||K.isInstancedMesh&&Ht.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ht.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ht.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ht.instancingMorph===!1&&K.morphTexture!==null||Ht.envMap!==Wt||q.fog===!0&&Ht.fog!==Pt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==Kt.numPlanes||Ht.numIntersection!==Kt.numIntersection)||Ht.vertexAlphas!==se||Ht.vertexTangents!==ce||Ht.morphTargets!==Bt||Ht.morphNormals!==ve||Ht.morphColors!==he||Ht.toneMapping!==Ue||Ht.morphTargetsCount!==an||!!Ht.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ye=!0):(ye=!0,Ht.__version=q.version);let Pn=Ht.currentProgram;ye===!0&&(Pn=Yn(q,k,K),P&&q.isNodeMaterial&&P.onUpdateProgram(q,Pn,Ht));let qn=!1,wi=!1,gs=!1;const Ce=Pn.getUniforms(),We=Ht.uniforms;if(E.useProgram(Pn.program)&&(qn=!0,wi=!0,gs=!0),q.id!==O&&(O=q.id,wi=!0),Ht.needsLights){const Oe=qr(b.state.lightProbeGridArray,K);Ht.lightProbeGrid!==Oe&&(Ht.lightProbeGrid=Oe,wi=!0)}if(qn||G!==C){E.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ce.setValue(B,"projectionMatrix",C.projectionMatrix),Ce.setValue(B,"viewMatrix",C.matrixWorldInverse);const Ei=Ce.map.cameraPosition;Ei!==void 0&&Ei.setValue(B,mt.setFromMatrixPosition(C.matrixWorld)),N.logarithmicDepthBuffer&&Ce.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ce.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),G!==C&&(G=C,wi=!0,gs=!0)}if(Ht.needsLights&&(un.state.sunShadowMap.length>0&&Ce.setValue(B,"sunShadowMap",un.state.sunShadowMap,it),un.state.directionalShadowMap.length>0&&Ce.setValue(B,"directionalShadowMap",un.state.directionalShadowMap,it),un.state.spotShadowMap.length>0&&Ce.setValue(B,"spotShadowMap",un.state.spotShadowMap,it),un.state.pointShadowMap.length>0&&Ce.setValue(B,"pointShadowMap",un.state.pointShadowMap,it)),K.isSkinnedMesh){Ce.setOptional(B,K,"bindMatrix"),Ce.setOptional(B,K,"bindMatrixInverse");const Oe=K.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),Ce.setValue(B,"boneTexture",Oe.boneTexture,it))}K.isBatchedMesh&&(Ce.setOptional(B,K,"batchingTexture"),Ce.setValue(B,"batchingTexture",K._matricesTexture,it),Ce.setOptional(B,K,"batchingIdTexture"),Ce.setValue(B,"batchingIdTexture",K._indirectTexture,it),Ce.setOptional(B,K,"batchingColorTexture"),K._colorsTexture!==null&&Ce.setValue(B,"batchingColorTexture",K._colorsTexture,it));const bi=Q.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&H.update(K,Q,Pn),(wi||Ht.receiveShadow!==K.receiveShadow)&&(Ht.receiveShadow=K.receiveShadow,Ce.setValue(B,"receiveShadow",K.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&k.environment!==null&&(We.envMapIntensity.value=k.environmentIntensity),We.dfgLUT!==void 0&&(We.dfgLUT.value=Gv()),wi){if(Ce.setValue(B,"toneMappingExposure",T.toneMappingExposure),Ht.needsLights&&xa(We,gs),Pt&&q.fog===!0&&qt.refreshFogUniforms(We,Pt),qt.refreshMaterialUniforms(We,q,nt,j,b.state.transmissionRenderTarget[C.id]),Ht.needsLights&&Ht.lightProbeGrid){const Oe=Ht.lightProbeGrid;We.probesSH.value=Oe.texture,We.probesMin.value.copy(Oe.boundingBox.min),We.probesMax.value.copy(Oe.boundingBox.max),We.probesResolution.value.copy(Oe.resolution)}Oo.upload(B,ai(Ht),We,it)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Oo.upload(B,ai(Ht),We,it),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ce.setValue(B,"center",K.center),Ce.setValue(B,"modelViewMatrix",K.modelViewMatrix),Ce.setValue(B,"normalMatrix",K.normalMatrix),Ce.setValue(B,"modelMatrix",K.matrixWorld),q.uniformsGroups!==void 0){const Oe=q.uniformsGroups;for(let Ei=0,_s=Oe.length;Ei<_s;Ei++){const ah=Oe[Ei];ft.update(ah,Pn),ft.bind(ah,Pn)}}return Pn}function xa(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.sunLights.needsUpdate=k,C.sunLightShadows.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function ps(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(C,k,Q){const q=Z.get(C);q.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Z.get(C.texture).__webglTexture=k,Z.get(C.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Q,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,k){const Q=Z.get(C);Q.__webglFramebuffer=k,Q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,Q=0){W=C,U=k,z=Q;let q=null,K=!1,Pt=!1;if(C){const Ct=Z.get(C);if(Ct.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(B.FRAMEBUFFER,Ct.__webglFramebuffer),X.copy(C.viewport),_t.copy(C.scissor),yt=C.scissorTest,E.viewport(X),E.scissor(_t),E.setScissorTest(yt),O=-1;return}else if(Ct.__webglFramebuffer===void 0)it.setupRenderTarget(C);else if(Ct.__hasExternalTextures)it.rebindTextures(C,Z.get(C.texture).__webglTexture,Z.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const se=C.depthTexture;if(Ct.__boundDepthTexture!==se){if(se!==null&&Z.has(se)&&(C.width!==se.image.width||C.height!==se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(C)}}const Nt=C.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(Pt=!0);const Wt=Z.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Wt[k])?q=Wt[k][Q]:q=Wt[k],K=!0):C.samples>0&&it.useMultisampledRTT(C)===!1?q=Z.get(C).__webglMultisampledFramebuffer:Array.isArray(Wt)?q=Wt[Q]:q=Wt,X.copy(C.viewport),_t.copy(C.scissor),yt=C.scissorTest}else X.copy(J).multiplyScalar(nt).floor(),_t.copy(ut).multiplyScalar(nt).floor(),yt=xt;if(Q!==0&&(q=D),E.bindFramebuffer(B.FRAMEBUFFER,q)&&E.drawBuffers(C,q),E.viewport(X),E.scissor(_t),E.setScissorTest(yt),K){const Ct=Z.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ct.__webglTexture,Q)}else if(Pt){const Ct=k;for(let Nt=0;Nt<C.textures.length;Nt++){const Wt=Z.get(C.textures[Nt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Nt,Wt.__webglTexture,Q,Ct)}}else if(C!==null&&Q!==0){const Ct=Z.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ct.__webglTexture,Q)}O=-1};function ms(C){const k=Z.get(C);return(k.__readFormat!==C.format||k.__readType!==C.type)&&(k.__readFormat=C.format,k.__readType=C.type,k.__formatReadable=N.textureFormatReadable(C.format),k.__typeReadable=N.textureTypeReadable(C.type)),k}this.readRenderTargetPixels=function(C,k,Q,q,K,Pt,Ft,Ct=0){if(!(C&&C.isWebGLRenderTarget)){fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Z.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ft!==void 0&&(Nt=Nt[Ft]),Nt){E.bindFramebuffer(B.FRAMEBUFFER,Nt);try{const Wt=C.textures[Ct],se=Wt.format,ce=Wt.type;C.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ct);const Bt=ms(Wt);if(Bt.__formatReadable===!1){fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Bt.__typeReadable===!1){fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-q&&Q>=0&&Q<=C.height-K&&B.readPixels(k,Q,q,K,Rt.convert(se),Rt.convert(ce),Pt)}finally{const Wt=W!==null?Z.get(W).__webglFramebuffer:null;E.bindFramebuffer(B.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(C,k,Q,q,K,Pt,Ft,Ct=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Z.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ft!==void 0&&(Nt=Nt[Ft]),Nt)if(k>=0&&k<=C.width-q&&Q>=0&&Q<=C.height-K){E.bindFramebuffer(B.FRAMEBUFFER,Nt);const Wt=C.textures[Ct],se=Wt.format,ce=Wt.type;C.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ct);const Bt=ms(Wt);if(Bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ve=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ve),B.bufferData(B.PIXEL_PACK_BUFFER,Pt.byteLength,B.STREAM_READ),B.readPixels(k,Q,q,K,Rt.convert(se),Rt.convert(ce),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);const he=W!==null?Z.get(W).__webglFramebuffer:null;E.bindFramebuffer(B.FRAMEBUFFER,he);const Ue=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Jf(B,Ue,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ve),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Pt),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(ve),B.deleteSync(Ue),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,k=null,Q=0){const q=Math.pow(2,-Q),K=Math.floor(C.image.width*q),Pt=Math.floor(C.image.height*q),Ft=k!==null?k.x:0,Ct=k!==null?k.y:0;it.setTexture2D(C,0),B.copyTexSubImage2D(B.TEXTURE_2D,Q,0,0,Ft,Ct,K,Pt),E.unbindTexture()},this.copyTextureToTexture=function(C,k,Q=null,q=null,K=0,Pt=0){let Ft,Ct,Nt,Wt,se,ce,Bt,ve,he;const Ue=C.isCompressedTexture?C.mipmaps[Pt]:C.image;if(Q!==null)Ft=Q.max.x-Q.min.x,Ct=Q.max.y-Q.min.y,Nt=Q.isBox3?Q.max.z-Q.min.z:1,Wt=Q.min.x,se=Q.min.y,ce=Q.isBox3?Q.min.z:0;else{const We=Math.pow(2,-K);Ft=Math.floor(Ue.width*We),Ct=Math.floor(Ue.height*We),C.isDataArrayTexture?Nt=Ue.depth:C.isData3DTexture?Nt=Math.floor(Ue.depth*We):Nt=1,Wt=0,se=0,ce=0}q!==null?(Bt=q.x,ve=q.y,he=q.z):(Bt=0,ve=0,he=0);const Ie=Rt.convert(k.format),an=Rt.convert(k.type);let Ht;k.isData3DTexture?(it.setTexture3D(k,0),Ht=B.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(it.setTexture2DArray(k,0),Ht=B.TEXTURE_2D_ARRAY):(it.setTexture2D(k,0),Ht=B.TEXTURE_2D),E.activeTexture(B.TEXTURE0),E.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),E.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),E.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment);const un=E.getParameter(B.UNPACK_ROW_LENGTH),ye=E.getParameter(B.UNPACK_IMAGE_HEIGHT),Pn=E.getParameter(B.UNPACK_SKIP_PIXELS),qn=E.getParameter(B.UNPACK_SKIP_ROWS),wi=E.getParameter(B.UNPACK_SKIP_IMAGES);E.pixelStorei(B.UNPACK_ROW_LENGTH,Ue.width),E.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ue.height),E.pixelStorei(B.UNPACK_SKIP_PIXELS,Wt),E.pixelStorei(B.UNPACK_SKIP_ROWS,se),E.pixelStorei(B.UNPACK_SKIP_IMAGES,ce);const gs=C.isDataArrayTexture||C.isData3DTexture,Ce=k.isDataArrayTexture||k.isData3DTexture;if(C.isDepthTexture){const We=Z.get(C),bi=Z.get(k),Oe=Z.get(We.__renderTarget),Ei=Z.get(bi.__renderTarget);E.bindFramebuffer(B.READ_FRAMEBUFFER,Oe.__webglFramebuffer),E.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let _s=0;_s<Nt;_s++)gs&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Z.get(C).__webglTexture,K,ce+_s),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Z.get(k).__webglTexture,Pt,he+_s)),B.blitFramebuffer(Wt,se,Ft,Ct,Bt,ve,Ft,Ct,B.DEPTH_BUFFER_BIT,B.NEAREST);E.bindFramebuffer(B.READ_FRAMEBUFFER,null),E.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(K!==0||C.isRenderTargetTexture||Z.has(C)){const We=Z.get(C),bi=Z.get(k);E.bindFramebuffer(B.READ_FRAMEBUFFER,L),E.bindFramebuffer(B.DRAW_FRAMEBUFFER,I);for(let Oe=0;Oe<Nt;Oe++)gs?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,We.__webglTexture,K,ce+Oe):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,We.__webglTexture,K),Ce?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,bi.__webglTexture,Pt,he+Oe):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,bi.__webglTexture,Pt),K!==0?B.blitFramebuffer(Wt,se,Ft,Ct,Bt,ve,Ft,Ct,B.COLOR_BUFFER_BIT,B.NEAREST):Ce?B.copyTexSubImage3D(Ht,Pt,Bt,ve,he+Oe,Wt,se,Ft,Ct):B.copyTexSubImage2D(Ht,Pt,Bt,ve,Wt,se,Ft,Ct);E.bindFramebuffer(B.READ_FRAMEBUFFER,null),E.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Ce?C.isDataTexture||C.isData3DTexture?B.texSubImage3D(Ht,Pt,Bt,ve,he,Ft,Ct,Nt,Ie,an,Ue.data):k.isCompressedArrayTexture?B.compressedTexSubImage3D(Ht,Pt,Bt,ve,he,Ft,Ct,Nt,Ie,Ue.data):B.texSubImage3D(Ht,Pt,Bt,ve,he,Ft,Ct,Nt,Ie,an,Ue):C.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Pt,Bt,ve,Ft,Ct,Ie,an,Ue.data):C.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Pt,Bt,ve,Ue.width,Ue.height,Ie,Ue.data):B.texSubImage2D(B.TEXTURE_2D,Pt,Bt,ve,Ft,Ct,Ie,an,Ue);E.pixelStorei(B.UNPACK_ROW_LENGTH,un),E.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ye),E.pixelStorei(B.UNPACK_SKIP_PIXELS,Pn),E.pixelStorei(B.UNPACK_SKIP_ROWS,qn),E.pixelStorei(B.UNPACK_SKIP_IMAGES,wi),Pt===0&&k.generateMipmaps&&B.generateMipmap(Ht),E.unbindTexture()},this.initRenderTarget=function(C){Z.get(C).__webglFramebuffer===void 0&&it.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?it.setTextureCube(C,0):C.isData3DTexture?it.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?it.setTexture2DArray(C,0):it.setTexture2D(C,0),E.unbindTexture()},this.resetState=function(){U=0,z=0,W=null,E.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}}function dn(i,t,e=1,n=1){const s=document.createElement("canvas");s.width=s.height=i;const r=s.getContext("2d");t(r,i);const o=new Cn(s);return o.wrapS=o.wrapT=ni,o.repeat.set(e,n),o.colorSpace=Be,o.anisotropy=4,o}function Mi(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function ta(i,t,e,n){return(s,r)=>{const o=Mi(i);s.fillStyle=t,s.fillRect(0,0,r,r);for(let a=0;a<130;a++){const l=o()*r;s.strokeStyle=o()<.3?n:e,s.globalAlpha=.14+o()*.24,s.lineWidth=.6+o()*2.2,s.beginPath(),s.moveTo(0,l);for(let c=0;c<=r;c+=16)s.lineTo(c,l+Math.sin(c*.05+a)*2.5);s.stroke()}for(let a=0;a<420;a++)s.fillStyle=e,s.globalAlpha=.1+o()*.12,s.fillRect(o()*r,o()*r,1+o()*1.5,1);s.globalAlpha=.5;for(let a=0;a<7;a++){const l=o()*r,c=o()*r;s.strokeStyle=e,s.lineWidth=1.2;for(let h=2;h<9;h+=2)s.beginPath(),s.ellipse(l,c,h*1.8,h,.3,0,Math.PI*2),s.stroke()}s.globalAlpha=1}}function ja(i){return i?ta(7,"#3d2a1c","#2a1d12","#54402c"):ta(21,"#8a6844","#6e5233","#a37f52")}function Vv(i,t){const e=Mi(99);i.fillStyle="#efe7d6",i.fillRect(0,0,t,t);for(let n=0;n<22;n++){const s=e()*t,r=e()*t,o=t*(.08+e()*.16),a=e()<.5?"210,203,188":"228,222,206",l=i.createRadialGradient(s,r,0,s,r,o);l.addColorStop(0,"rgba("+a+",0.10)"),l.addColorStop(1,"rgba("+a+",0)"),i.fillStyle=l,i.globalAlpha=1,i.beginPath(),i.arc(s,r,o,0,7),i.fill()}for(let n=0;n<2600;n++){const s=225+Math.floor(e()*28);i.fillStyle=`rgb(${s},${s-6},${s-20})`,i.globalAlpha=.35,i.fillRect(e()*t,e()*t,1.4,1.4)}i.globalAlpha=.08,i.fillStyle="#b09a78";for(let n=0;n<8;n++)i.beginPath(),i.arc(e()*t,e()*t,12+e()*30,0,7),i.fill();i.globalAlpha=1}function Wv(i,t){const e=Mi(5);i.fillStyle="#a8a06a",i.fillRect(0,0,t,t);for(let n=0;n<t;n+=3)i.fillStyle=n/3%2?"#9d955f":"#b3ab74",i.fillRect(0,n,t,2);for(let n=0;n<500;n++)i.fillStyle=e()<.5?"#8a824f":"#c0b87e",i.globalAlpha=.4,i.fillRect(e()*t,e()*t,2,1);i.globalAlpha=1}function Xv(i,t){const e=Mi(13);i.fillStyle="#f6efdd",i.fillRect(0,0,t,t);for(let n=0;n<900;n++)i.fillStyle=e()<.5?"#efe6d0":"#fbf5e6",i.globalAlpha=.5,i.fillRect(e()*t,e()*t,2,1);i.globalAlpha=1}function Yv(i,t){const e=Mi(31);i.fillStyle="#cfc6b4",i.fillRect(0,0,t,t);for(let n=0;n<1500;n++){const s=165+Math.floor(e()*70);i.fillStyle=`rgb(${s},${s-4},${s-14})`,i.beginPath(),i.arc(e()*t,e()*t,.8+e()*1.8,0,7),i.fill()}}function qv(i,t){const e=Mi(77);i.fillStyle="#7d8f57",i.fillRect(0,0,t,t);for(let n=0;n<46;n++){const s=e()*t,r=e()*t,o=4+e()*16,a=e(),l=a<.4?"74,102,46":a<.75?"96,128,58":"112,140,72",c=i.createRadialGradient(s,r,0,s,r,o);c.addColorStop(0,"rgba("+l+",0.55)"),c.addColorStop(1,"rgba("+l+",0)"),i.fillStyle=c,i.globalAlpha=1,i.beginPath(),i.arc(s,r,o,0,7),i.fill()}for(let n=0;n<2200;n++)i.fillStyle=e()<.5?"#71834e":"#8a9c60",i.globalAlpha=.6,i.fillRect(e()*t,e()*t,1.5,3);i.globalAlpha=1}function Kv(i,t){const e=Mi(55);i.fillStyle="#9a968c",i.fillRect(0,0,t,t);for(let n=0;n<30;n++){const s=e()*t,r=e()*t,o=6+e()*30,a=118+Math.floor(e()*52)-26,l=i.createRadialGradient(s,r,0,s,r,o);l.addColorStop(0,"rgba("+a+","+a+","+(a+4)+",0.22)"),l.addColorStop(1,"rgba("+a+","+a+","+(a+4)+",0)"),i.fillStyle=l,i.globalAlpha=1,i.beginPath(),i.arc(s,r,o,0,7),i.fill()}for(let n=0;n<1200;n++){const s=120+Math.floor(e()*60);i.fillStyle=`rgb(${s},${s},${s-6})`,i.globalAlpha=.5,i.fillRect(e()*t,e()*t,2,2)}i.globalAlpha=.5,i.strokeStyle="rgba(38,38,42,1)",i.lineCap="round";for(let n=0;n<3;n++){let s=e()*t,r=e()*t;i.lineWidth=1.5+e()*1.5,i.beginPath(),i.moveTo(s,r);for(let o=0;o<7;o++)s+=(e()-.35)*26,r+=(e()-.35)*26,i.lineTo(s,r);i.stroke()}i.globalAlpha=.25,i.strokeStyle="#6f6b62";for(let n=0;n<6;n++)i.beginPath(),i.moveTo(e()*t,e()*t),i.lineTo(e()*t,e()*t),i.stroke();i.globalAlpha=1}function Zv(i,t){const e=Mi(2654435769);i.fillStyle="#808080",i.fillRect(0,0,t,t);for(let n=0;n<900;n++){const s=110+Math.floor(e()*60);i.fillStyle="rgb("+s+","+s+","+s+")",i.fillRect(Math.floor(e()*t),Math.floor(e()*t),1+Math.floor(e()*3),1+Math.floor(e()*3))}}function Jv(i,t){const e=Mi(5304813);i.fillStyle="#5a4632",i.fillRect(0,0,t,t);for(let n=0;n<40;n++){const s=e()*t,r=e()*t,o=4+e()*16,a=e()<.5?"66,50,34":"96,78,56",l=i.createRadialGradient(s,r,0,s,r,o);l.addColorStop(0,"rgba("+a+",0.5)"),l.addColorStop(1,"rgba("+a+",0)"),i.fillStyle=l,i.globalAlpha=1,i.beginPath(),i.arc(s,r,o,0,7),i.fill()}for(let n=0;n<300;n++)i.fillStyle=e()<.5?"rgba(40,30,20,0.5)":"rgba(140,115,85,0.5)",i.globalAlpha=1,i.fillRect(Math.floor(e()*t),Math.floor(e()*t),2,2);i.globalAlpha=1}function $v(i,t){i.fillStyle="#2e3d5c",i.fillRect(0,0,t,t),i.fillStyle="#efe7d2",i.fillRect(t*.18,0,t*.1,t),i.fillRect(t*.72,0,t*.1,t),i.beginPath(),i.arc(t/2,t*.34,t*.13,0,7),i.fill(),i.fillStyle="#2e3d5c",i.font=`bold ${Math.floor(t*.16)}px serif`,i.textAlign="center",i.fillText("TEA",t/2,t*.72)}function Qv(i,t){const e=i.createLinearGradient(0,0,0,t);e.addColorStop(0,"#f3ecdb"),e.addColorStop(1,"#e4d8bd"),i.fillStyle=e,i.fillRect(0,0,t,t),i.strokeStyle="#4a4a48",i.lineCap="round";const n=(s,r,o,a)=>{i.lineWidth=o,i.beginPath(),i.moveTo(a,s),i.quadraticCurveTo(a+t*.2,s-r,a+t*.38,s-r*.25),i.quadraticCurveTo(a+t*.5,s-r*.7,a+t*.62,s-r*.1),i.stroke()};i.globalAlpha=.75,n(t*.62,t*.3,7,t*.05),i.globalAlpha=.5,n(t*.7,t*.2,5,t*.35),i.globalAlpha=.9,i.fillStyle="#b0533c",i.beginPath(),i.arc(t*.68,t*.26,t*.05,0,7),i.fill(),i.globalAlpha=1,i.fillStyle="#a33327",i.fillRect(t*.12,t*.78,t*.1,t*.1),i.fillStyle="#f3ecdb",i.font=`${Math.floor(t*.07)}px serif`,i.textAlign="center",i.fillText("wa",t*.17,t*.855)}function jv(i,t){i.fillStyle="#e9dfc6",i.fillRect(0,0,t,t),i.strokeStyle="#c9b98f",i.lineWidth=2,i.globalAlpha=.7;for(let e=-t;e<t*2;e+=26)i.beginPath(),i.arc(e,t*.9,22,Math.PI,0),i.stroke(),i.beginPath(),i.arc(e,t*.45,22,Math.PI,0),i.stroke();i.globalAlpha=1}function Od(){const i=dn(256,ja(!1),1,1),t=dn(256,ja(!0),1,1),e={woodDark:new dt({map:t,color:12164995,roughness:.75,envMapIntensity:.25}),wood:new dt({map:i,color:13609080,roughness:.8,envMapIntensity:.25}),woodFloor:new dt({map:dn(256,ja(!1),4,1),color:14201219,roughness:.7,envMapIntensity:.3}),plaster:new dt({map:dn(256,Vv,1,1),color:16777215,roughness:.95,envMapIntensity:.15}),paper:new dt({map:dn(128,Xv,1,1),color:16774106,emissive:16768926,emissiveIntensity:.38,transparent:!0,opacity:.92,roughness:.9,side:Fe}),tatami:new dt({map:dn(256,Wv,1,1),color:16777215,roughness:.95,envMapIntensity:.1}),tatamiEdge:new dt({color:3099194,roughness:.9}),roofTile:new dt({color:4869461,roughness:.55,metalness:.08,envMapIntensity:.5}),roofTileAlt:new dt({color:3948358,roughness:.6,metalness:.08,envMapIntensity:.5}),ridge:new dt({color:3487549,roughness:.5,metalness:.1,envMapIntensity:.6}),roofUnder:new dt({map:t,color:9072466,roughness:.9}),stone:new dt({map:dn(256,Kv,1,1),color:16777215,roughness:.95,envMapIntensity:.15}),gravel:new dt({map:dn(256,Yv,6,6),color:16777215,roughness:1}),grass:new dt({map:dn(256,qv,10,10),color:16777215,roughness:1}),moss:new dt({color:6126906,roughness:1,envMapIntensity:.1}),mossDark:new dt({color:4613420,roughness:1,envMapIntensity:.1}),bamboo:new dt({color:8364110,roughness:.6,envMapIntensity:.3}),bambooLeaf:new dt({color:5143092,roughness:.8,side:Fe}),trunk:new dt({map:t,color:10123868,roughness:.9}),mapleLeaf:new dt({color:16777215,roughness:.75,side:Fe}),fusuma:new dt({map:dn(256,jv,1,1),color:16777215,roughness:.9}),noren:new dt({map:dn(256,$v,1,1),color:16777215,roughness:.9,side:Fe}),scroll:new dt({map:dn(256,Qv,1,1),color:16777215,roughness:.9}),lanternGlow:new dt({color:16767392,emissive:16751686,emissiveIntensity:2.2}),paperLantern:new dt({color:16770232,emissive:16757867,emissiveIntensity:1.4,roughness:.8}),bronze:new dt({color:4997688,roughness:.45,metalness:.7,envMapIntensity:.8})};e.woodNew=e.woodNew||new dt({map:dn(256,ta(501,"#9a7040","#7a5630","#bd9257"),1,1),color:16777215,roughness:.7}),e.woodAged=e.woodAged||new dt({map:dn(256,ta(502,"#77685a","#5c5148","#8d8172"),2,1),color:16777215,roughness:.9}),e.glassDark=e.glassDark||new dt({color:1053980,roughness:.08,metalness:.9}),e.bronze=e.bronze||new dt({color:7035443,roughness:.35,metalness:.9}),e.iron=e.iron||new dt({color:2829102,roughness:.5,metalness:.8}),e.soil=e.soil||new dt({color:4865843,roughness:1}),e.thatch=e.thatch||new dt({color:10127967,roughness:1}),e._wet=e._wet||[],e.registerWet=r=>(r&&!e._wet.includes(r)&&e._wet.push(r),r),e.plasterTinted=r=>new dt({color:r,roughness:.95}),[e.wood,e.woodDark,e.woodNew,e.woodAged,e.plaster,e.tile,e.stone,e.soil].forEach(r=>r&&e.registerWet(r)),e.tile=e.tile||e.roofTile,e.shoji=e.shoji||e.paper,e.registerWet(e.tile);const n=document.createElement("canvas");n.width=n.height=128,Zv(n.getContext("2d"),128);const s=new Cn(n);s.wrapS=s.wrapT=ni,s.repeat.set(3,3),s.colorSpace=Bn;for(const r of["wood","woodDark","woodNew","woodAged","plaster","stone","soil"])e[r]&&(e[r].roughnessMap=s,e[r].roughness=1);for(const r of["roofTile","roofTileAlt","ridge"])e[r]&&(e[r].roughnessMap=s,e[r].roughness=1,e[r].bumpMap=s,e[r].bumpScale=.25);return e.soil.map=dn(128,Jv,4,4),e.soil.needsUpdate=!0,e}const t1=Object.freeze(Object.defineProperty({__proto__:null,buildMaterials:Od},Symbol.toStringTag,{value:"Module"}));function Si(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Gt(i,t,e,n,s=0,r=0,o=0,a=0){const l=new et(new Dt(i,t,e),n);return l.position.set(s,r,o),l.rotation.y=a,l.castShadow=!0,l.receiveShadow=!0,l}const mn=new me;function _i(i,t){for(let e=0;e<t.length;e++){const n=t[e];mn.position.set(n.p[0],n.p[1],n.p[2]),mn.rotation.set(n.rx||0,n.ry||0,n.rz||0);const s=n.s===void 0?1:n.s;mn.scale.set(n.sx===void 0?s:n.sx,n.sy===void 0?s:n.sy,n.sz===void 0?s:n.sz),mn.updateMatrix(),i.setMatrixAt(e,mn.matrix),n.c&&i.setColorAt(e,n.c)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),i.castShadow=!0,i.receiveShadow=!0,i}function Fd(i,t,e=.75,n=1){const s=new Xn(i,n),r=Si(t),o=s.attributes.position,a=new F,l=new Map;for(let c=0;c<o.count;c++){a.fromBufferAttribute(o,c);const h=`${a.x.toFixed(3)},${a.y.toFixed(3)},${a.z.toFixed(3)}`;let d=l.get(h);d===void 0&&(d=.78+r()*.5,l.set(h,d)),a.multiplyScalar(d),a.y*=e,o.setXYZ(c,a.x,a.y,a.z)}return s.computeVertexNormals(),s}let bo=null;function zd(){if(bo)return bo;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,6,64,64,62);return e.addColorStop(0,"rgba(20,12,6,0.55)"),e.addColorStop(.6,"rgba(20,12,6,0.28)"),e.addColorStop(1,"rgba(20,12,6,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),bo=new Cn(i),bo}function ua(i,t,e=1){const n=new et(new be(i,t),new ri({map:zd(),transparent:!0,opacity:e,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));return n.rotation.x=-Math.PI/2,n.renderOrder=1,n}function Gc(i,t,e,n,s,r,o){const a=new Dt(s,n,r),l=new Dt(e,s,r),c=new $t,h=(f,g)=>{const v=new ze(f,o,g);return v.castShadow=!1,v.receiveShadow=!0,v},d=h(a,i+1),u=h(l,t+1);for(let f=0;f<=i;f++)mn.position.set(-e/2+f*e/i,0,0),mn.rotation.set(0,0,0),mn.scale.set(1,1,1),mn.updateMatrix(),d.setMatrixAt(f,mn.matrix);for(let f=0;f<=t;f++)mn.position.set(0,-n/2+f*n/t,0),mn.rotation.set(0,0,0),mn.scale.set(1,1,1),mn.updateMatrix(),u.setMatrixAt(f,mn.matrix);return d.instanceMatrix.needsUpdate=u.instanceMatrix.needsUpdate=!0,c.add(d,u),c}const e1=Object.freeze(Object.defineProperty({__proto__:null,blobTexture:zd,contactShadow:ua,displacedRock:Fd,fillInstances:_i,makeBeam:Gt,makeLatticeBars:Gc,mulberry:Si},Symbol.toStringTag,{value:"Module"})),Bd={w:10,d:6.4,floorY:.7,wallTop:3.6,pillar:.22};function Eo(i,t,e,n=[4,6]){const s=new $t,r=.07,o=.06,a=e.woodDark;s.add(Gt(i,r,o,a,0,t/2-r/2,0)),s.add(Gt(i,r,o,a,0,-t/2+r/2,0)),s.add(Gt(r,t,o,a,-i/2+r/2,0,0)),s.add(Gt(r,t,o,a,i/2-r/2,0,0)),s.add(Gt(.05,t-2*r,o*.7,a,0,0,0));const l=new et(new be(i-2*r,t-2*r),e.paper);l.position.z=-.005,l.receiveShadow=!0,s.add(l);const c=Gc(n[0],n[1],i-2*r,t-2*r,.028,.02,e.woodDark);c.position.z=.018,s.add(c);const h=new et(new _e(.035,.035,.03,12),e.bronze);return h.rotation.x=Math.PI/2,h.position.set(i/2-.16,0,.035),s.add(h),s}function n1(i){const t=new $t,e=Si(1234),{w:n,d:s,floorY:r,wallTop:o,pillar:a}=Bd,l=n/2,c=s/2,h=ua(n+3.4,s+3.6,.9);h.position.set(0,.03,0),t.add(h);{const D=Fd(.32,900,.62,0),L=[];for(let U=-l;U<=l+.01;U+=1.25)for(let z=-c;z<=c+.01;z+=1.6)L.push({p:[U+(e()-.5)*.15,.18,z+(e()-.5)*.15],ry:e()*6.3,s:.8+e()*.5});const I=new ze(D,i.stone,L.length);_i(I,L),t.add(I)}t.add(Gt(n+.3,.24,.24,i.woodDark,0,r-.12,c)),t.add(Gt(n+.3,.24,.24,i.woodDark,0,r-.12,-c)),t.add(Gt(.24,.24,s,i.woodDark,-l,r-.12,0)),t.add(Gt(.24,.24,s,i.woodDark,l,r-.12,0));for(let D=-l+.8;D<l;D+=1.1)t.add(Gt(.14,.18,s-.2,i.wood,D,r-.1,0));const d=Gt(n+.2,.1,s,i.woodFloor,0,r-.02,0);t.add(d);const u=o-r,f=r+u/2,g=[];for(let D=0;D<=5;D++)g.push(-l+D*n/5);const v=[];g.forEach(D=>{v.push([D,c]),v.push([D,-c])}),[-c+s/4,0,c-s/4].forEach(D=>{v.push([-l,D]),v.push([l,D])}),v.forEach(([D,L])=>t.add(Gt(a,u,a,i.woodDark,D,f,L)));const m=o-.12;t.add(Gt(n+.24,.24,.2,i.woodDark,0,m,c)),t.add(Gt(n+.24,.24,.2,i.woodDark,0,m,-c)),t.add(Gt(.2,.24,s+.24,i.woodDark,-l,m,0)),t.add(Gt(.2,.24,s+.24,i.woodDark,l,m,0));const p=r+2.32;t.add(Gt(n,.14,.12,i.woodDark,0,p,c)),t.add(Gt(n,.1,.14,i.woodDark,0,r+.08,c)),t.add(Gt(n,.14,.12,i.woodDark,0,p,-c)),t.add(Gt(.14,.14,s,i.woodDark,-l,p,0)),t.add(Gt(.14,.14,s,i.woodDark,l,p,0));const y=(p+.07+m-.12)/2,w=m-.12-(p+.07);t.add(Gt(n-.2,w,.1,i.plaster,0,y,c)),t.add(Gt(n-.2,w,.1,i.plaster,0,y,-c)),t.add(Gt(.1,w,s-.2,i.plaster,-l,y,0)),t.add(Gt(.1,w,s-.2,i.plaster,l,y,0));const _=.1,S=p-(r+.1),b=(p+r+.1)/2;t.add(Gt(n-.2,S,_,i.plaster,0,b,-c)),[-l,l].forEach(D=>{t.add(Gt(_,S,s-.2,i.plaster,D,b,0))}),[-l,l].forEach(D=>{const L=D>0?1:-1;[-1.5,1.5].forEach(I=>{const U=r+1.75,z=new $t,W=1.5,O=1;z.add(Gt(W+.14,.09,.14,i.woodDark,0,O/2,0)),z.add(Gt(W+.14,.09,.14,i.woodDark,0,-O/2,0)),z.add(Gt(.09,O,.14,i.woodDark,-W/2,0,0)),z.add(Gt(.09,O,.14,i.woodDark,W/2,0,0));const G=new et(new be(W,O),i.paper);G.rotation.y=Math.PI/2,z.add(G);const X=Gc(5,3,W,O,.03,.02,i.woodDark);X.rotation.y=Math.PI/2,X.position.x=L*.06,z.add(X),z.position.set(D+L*.09,U,I),t.add(z)})});const R=n/5,x=p-(r+.12),M=r+.12+x/2,T=[];for(let D=1;D<=3;D++){const L=-l+R*(D+.5),I=Eo(R-.3,x,i);I.position.set(L-(R-.3)/4,M,c+.03);const U=Eo(R-.3,x,i);U.position.set(L+(R-.3)/4,M,c-.04),t.add(I,U),D===2&&T.push({node:I,closed:I.position.x,open:I.position.x-(R-.3)/2},{node:U,closed:U.position.x,open:U.position.x+(R-.3)/2})}{const D=Eo(R-.3,x,i);D.position.set(2,M,c-.04);const L=Eo(R-.3,x,i);L.position.set(2,M,c+.1),t.add(D,L)}let A;{const D=-l+R*.5,L=Gt(R-.4,.12,1.6,i.stone,D,r-.06,c-.7);L.receiveShadow=!0,t.add(L);const I=Gt(1.5,.28,.55,i.stone,D,.2,c+1.65);t.add(I),t.add(Gt(.16,x+.1,.16,i.woodDark,D-.85,M,c+.05)),t.add(Gt(.16,x+.1,.16,i.woodDark,D+.85,M,c+.05)),t.add(Gt(1.9,.18,.2,i.woodDark,D,p+.05,c+.05)),A=new $t;for(let U=0;U<3;U++){const z=new et(new Dt(.5,.85,.02),i.noren);z.position.set(-.53+U*.53,-.5,0),z.castShadow=!0,A.add(z)}A.position.set(D,p-.06,c+.12),t.add(A)}{const D=r-.06,L=Gt(n+.6,.12,1.25,i.woodFloor,0,D,c+.65);t.add(L);const I=Gt(1.25,.12,s+.6,i.woodFloor,l+.65,D,0);t.add(I);for(let W=-l-.2;W<=l+.25;W+=1.7)t.add(Gt(.14,D,.14,i.woodDark,W,D/2,c+1.2));for(let W=-c;W<=c+.01;W+=1.6)t.add(Gt(.14,D,.14,i.woodDark,l+1.2,D/2,W));const U=3.78-D;for(let W=-l-.2;W<=l+.25;W+=2.55)t.add(Gt(.13,U,.13,i.woodDark,W,D+U/2,c+1.2));for(let W=-c;W<=c+.01;W+=2.1)t.add(Gt(.13,U,.13,i.woodDark,l+1.2,D+U/2,W));t.add(Gt(n+.7,.16,.14,i.woodDark,0,3.62,c+1.2)),t.add(Gt(.14,.16,s+.7,i.woodDark,l+1.2,3.62,0));const z=D+.55;for(let W=-c;W<=1;W+=1.05)t.add(Gt(.09,.62,.09,i.woodDark,l+1.2,D+.31,W));t.add(Gt(.08,.08,4.4,i.wood,l+1.2,z,-c+2.2)),t.add(Gt(.06,.06,4.4,i.wood,l+1.2,z-.28,-c+2.2)),t.add(Gt(1.6,.22,.5,i.stone,-l+R*4.5,.16,c+1.65))}let P;{const D=new dt({color:5917240,roughness:.7,side:Fe}),L=new _e(.09,.09,n+2.6,10,1,!0,Math.PI,Math.PI);L.rotateZ(Math.PI/2),[c+1.55,-c-1.55].forEach(O=>{const G=new et(L,D);G.position.set(0,3.66,O),t.add(G)});const I=new _e(.055,.055,3.5,8);[[-l-1.2,c+1.55],[-l-1.2,-c-1.55]].forEach(([O,G])=>{const X=new et(I,i.bamboo);X.position.set(O,1.85,G),X.castShadow=!0,t.add(X)}),P=new $t;const U=new Js(.055,.014,6,10);for(let O=0;O<16;O++){const G=new et(U,i.bronze);G.position.y=-O*.2,G.rotation.y=O%2*Math.PI/2,P.add(G)}P.position.set(l+1.2,3.6,c+1.55),t.add(P);const z=[];for(let O=0;O<=8;O++){const G=O/8*Math.PI;z.push(new ht(.12+Math.sin(G)*.3,O*.045))}const W=new et(new Zs(z,14),i.stone);W.position.set(l+1.2,0,c+1.55),W.castShadow=W.receiveShadow=!0,t.add(W)}return{group:t,noren:A,rainChain:P,openBayX:-l+R*4.5,sliders:T}}function i1(i){const t=new $t;i.ridge.side=Fe;const e=6.42,n=3.7,s=4.7,r=6,o=s,a=e-n,l=Math.hypot(o,a),c=Math.atan2(a,o),h=o/l,d=a/l,u=r*2,f=new Dt(u,.16,l+.35),g=(e+n)/2-.06,v=s/2,m=new et(f,i.roofUnder);m.position.set(0,g,v),m.rotation.x=c;const p=m.clone();p.position.z=-v,p.rotation.x=-c,m.castShadow=p.castShadow=!0,m.receiveShadow=p.receiveShadow=!0,t.add(m,p),t.add(Gt(u+.15,.3,.09,i.woodDark,0,n-.02,s+.02)),t.add(Gt(u+.15,.3,.09,i.woodDark,0,n-.02,-s-.02));{const y=new Dt(.12,.15,.9),w=[];for(let S=-5.6;S<=5.61;S+=.62)w.push({p:[S,n-.02,s-.35],rx:c}),w.push({p:[S,n-.02,-4.3500000000000005],rx:-c});const _=new ze(y,i.woodDark,w.length);_i(_,w),_.castShadow=!1,t.add(_)}{const y=new _e(.085,.095,.55,7,1,!0);y.rotateZ(Math.PI/2),y.rotateY(Math.PI/2);const w=11,_=56,S=new ze(y,i.roofTile,w*_*2),b=Si(20240),R=new It;let x=0;const M=[];for(let T=0;T<2;T++){const A=T===0?1:-1;for(let P=0;P<w;P++){const D=.32+P*((l-.35)/w),L=A*(s-D*h),I=n+D*d+.1;for(let U=0;U<_;U++){const z=-5.78+U*(11.56/(_-1));M.push({p:[z,I,L],rx:A*c});const W=.82+b()*.3;R.setRGB(W,W*1.01,W*1.06),S.setColorAt(x++,R)}}}_i(S,M),S.instanceColor.needsUpdate=!0,S.castShadow=!1,S.receiveShadow=!0,t.add(S)}{const y=new _e(.17,.17,.72,9,1,!0,0,Math.PI);y.rotateZ(Math.PI/2);const w=16,_=new ze(y,i.ridge,w),S=[];for(let b=0;b<w;b++)S.push({p:[-5.6+b*(11.2/(w-1)),e+.02,0]});_i(_,S),_.castShadow=!1,t.add(_),t.add(Gt(.5,.22,.4,i.ridge,-5.85,e-.05,0)),t.add(Gt(.5,.22,.4,i.ridge,5.85,e-.05,0))}[-1,1].forEach(y=>{const w=new $t;w.add(Gt(.22,.5,.55,i.ridge,0,.2,0));const _=new et(new _e(.3,.3,.14,12),i.ridge);_.rotation.z=Math.PI/2,_.position.y=.55,_.castShadow=!0,w.add(_);const S=new et(new In(.12,10,8),i.ridge);S.position.y=.78,S.castShadow=!0,w.add(S),w.position.set(y*5.95,e-.1,0),t.add(w)});{const y=new Hr;y.moveTo(-3.2,3.55),y.lineTo(3.2,3.55),y.lineTo(0,e-.12),y.closePath();const w=new oa(y);[4.94,-4.94].forEach(_=>{const S=new et(w,i.plaster);S.rotation.y=Math.PI/2,S.position.x=_,S.castShadow=S.receiveShadow=!0,S.material.side=Fe,t.add(S)}),[1,-1].forEach(_=>{[1,-1].forEach(S=>{const b=Gt(.1,.24,l+.4,i.woodDark,_*(r-.02),g+.12,S*v);b.rotation.x=S*c,t.add(b)})})}{const y=new Dt(2,.09,1.7),w=c-.3;[[5.55,1,4.35,1],[-5.55,-1,4.35,1],[5.55,1,-4.35,-1],[-5.55,-1,-4.35,-1]].forEach(([S,b,R,x])=>{const M=new et(y,i.roofUnder);M.position.set(S,n+.16,R),M.rotation.order="YXZ",M.rotation.y=b*x*.42,M.rotation.x=x*w,M.castShadow=M.receiveShadow=!0,t.add(M);const T=new _e(.085,.095,.55,7,1,!0);T.rotateZ(Math.PI/2),T.rotateY(Math.PI/2);const A=new ze(T,i.roofTileAlt,5),P=[];for(let D=0;D<5;D++)P.push({p:[S-.7+D*.35,n+.38,R-x*.15],rx:x*w});_i(A,P),A.castShadow=!1,t.add(A)})}return{group:t,ridgeY:e,eaveY:n,eaveZ:s}}function s1(i){const t=new $t,{floorY:e}=Bd,n=-.9,s=4.9,r=-2.9,o=2.9,a=(n+s)/2;{const f=e+.06;for(let g=r+.1;g+1.82<o+.01;g+=1.82+.02)for(let v=n+.1;v+.92<s+.01;v+=.92+.02){const m=new et(new Dt(.92,.06,1.82),i.tatami);m.position.set(v+.92/2,f,g+1.82/2),m.receiveShadow=!0,t.add(m);const p=Gt(.92+.02,.06+.005,.035,i.tatamiEdge,v+.92/2,f,g+1.82-.017);p.castShadow=!1,t.add(p)}}{const h=3-e;[[n,0],[a,0],[s,-2],[s,2]].forEach(([u,f])=>t.add(Gt(.16,h,.16,i.woodDark,u,e+h/2,f)));const d=new et(new Dt(s-n+.4,.08,o-r+.4),i.woodDark);d.position.set(a,3.02,0),t.add(d)}{const h=Gt(.1,2.2,o-r,i.plaster,n,e+1.15,0);t.add(h);for(let d=0;d<3;d++){const u=new $t,f=1.75,g=1.7;u.add(Gt(f,.06,.05,i.woodDark,0,g/2,0)),u.add(Gt(f,.06,.05,i.woodDark,0,-g/2,0)),u.add(Gt(.06,g,.05,i.woodDark,-f/2,0,0)),u.add(Gt(.06,g,.05,i.woodDark,f/2,0,0));const v=new et(new be(f-.1,g-.1),i.fusuma);v.rotation.y=Math.PI/2,u.add(v);const m=new et(new _e(.03,.03,.03,10),i.bronze);m.rotation.z=Math.PI/2,m.position.set(.04,0,.35),u.add(m),u.position.set(n+.09,e+1,-1.85+d*1.85),t.add(u)}}{const u=Gt(2.2,.16,1,i.wood,-2.6,e+.14,r+.55);t.add(u),t.add(Gt(.14,2.2,.14,i.woodDark,-2.6-2.2/2,e+1.1,r+.15)),t.add(Gt(.14,2.2,.14,i.woodDark,-2.6+2.2/2,e+1.1,r+.15)),t.add(Gt(2.2+.2,.14,.16,i.woodDark,-2.6,e+2.25,r+.15));const f=new $t,g=new et(new Dt(.55,1.05,.02),i.scroll);f.add(g);const v=new _e(.025,.025,.7,8),m=new et(v,i.woodDark);m.rotation.z=Math.PI/2,m.position.y=.55;const p=m.clone();p.position.y=-.55,f.add(m,p),f.position.set(-2.6-.45,e+1.55,r+.22),f.rotation.x=.03,t.add(f);const y=[];for(let R=0;R<=8;R++){const x=R/8*Math.PI;y.push(new ht(.03+Math.sin(x)*.11,R*.035))}const w=new et(new Zs(y,12),new dt({color:3824268,roughness:.35,envMapIntensity:.7}));w.position.set(-2.6+.55,e+.22,r+.55),w.castShadow=!0,t.add(w);const _=new et(new _e(.012,.012,.5,6),i.mossDark);_.position.set(-2.6+.55,e+.5,r+.55),t.add(_);const S=new et(new Xn(.09,0),new dt({color:13920650,roughness:.7}));S.position.set(-2.6+.55,e+.78,r+.55),S.castShadow=!0,t.add(S);const b=new et(new Xn(.14,0),i.stone);b.scale.y=.6,b.position.set(-2.6+.1,e+.26,r+.6),b.castShadow=!0,t.add(b)}{t.add(Gt(1.1,.07,.7,i.wood,2.2,e+.42,.6)),[[-.45,-.25],[.45,-.25],[-.45,.25],[.45,.25]].forEach(([f,g])=>t.add(Gt(.07,.32,.07,i.woodDark,2.2+f,e+.22,.6+g)));const u=new dt({color:8007221,roughness:.9});[[2.2-.2,.6+.75],[2.2+.35,.6-.7]].forEach(([f,g])=>{const v=new et(new Dt(.5,.09,.5),u);v.position.set(f,e+.12,g),v.rotation.y=.2,v.castShadow=v.receiveShadow=!0,t.add(v)})}const l=new $t;{const h=new et(new _e(.012,.012,.5,6),i.woodDark);h.position.y=.45,l.add(h);const d=new et(new _e(.19,.19,.34,12),i.paperLantern);l.add(d);const u=new et(new _e(.1,.14,.05,10),i.woodDark);u.position.y=.19;const f=u.clone();f.position.y=-.19,l.add(u,f);const g=new et(new _e(.015,.03,.16,8),new dt({color:10695463,roughness:.8}));g.position.y=-.3,l.add(g),l.position.set(2,2.35,.4),t.add(l)}const c=new Bc(16757867,5,9,2);return c.position.set(2,2.3,.4),t.add(c),{group:t,lantern:l,lanternLight:c}}const r1={x:7.5,z:6,w:4.6,d:2.9};function o1(i){const t=new $t,{x:e,z:n,w:s,d:r}=r1,o=new et(new si(1,40),new dt({color:2241323,roughness:1}));o.rotation.x=-Math.PI/2,o.scale.set(s/2+.15,r/2+.15,1),o.position.set(e,-.1,n),o.receiveShadow=!0,t.add(o);const a=new dt({color:5337212,roughness:.1,metalness:.85,envMapIntensity:1.1,transparent:!0,opacity:.93}),l=30,c=18,h=new be(s,r,l,c),d=new et(h,a);d.rotation.x=-Math.PI/2,d.position.set(e,.06,n),d.receiveShadow=!0,t.add(d);const u=h.attributes.position.array.slice();{const g=Si(646),v=22,m=new Xn(.22,0),p=new ze(m,i.stone,v),y=[];for(let w=0;w<v;w++){const _=w/v*Math.PI*2;y.push({p:[e+Math.cos(_)*(s/2+.1),.1,n+Math.sin(_)*(r/2+.1)],ry:g()*6.3,s:.8+g()*.6,sy:.55})}_i(p,y),t.add(p)}function f(g,v=null){const m=h.attributes.position,y=1+(v&&typeof v.wetness=="number"?Math.min(Math.max(v.wetness,0),1):0)*.35;for(let w=0;w<m.count;w++){const _=u[w*3],S=u[w*3+1];m.setZ(w,(Math.sin(_*2.1+g*1.7)*.022+Math.cos(S*2.8+g*2.2)*.02)*y)}m.needsUpdate=!0,h.computeVertexNormals()}return{group:t,update:f,waterMat:a}}class a1 extends C0{constructor(t){super(t),this.type=sn}parse(t){const o=function(x,M){switch(x){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(M||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(M||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(M||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(M||""))}},h=`
`,d=function(x,M,T){M=M||1024;let P=x.pos,D=-1,L=0,I="",U=String.fromCharCode.apply(null,new Uint16Array(x.subarray(P,P+128)));for(;0>(D=U.indexOf(h))&&L<M&&P<x.byteLength;)I+=U,L+=U.length,P+=128,U=String.fromCharCode.apply(null,new Uint16Array(x.subarray(P,P+128)));return-1<D?(x.pos+=L+D+1,I+U.slice(0,D)):!1},u=function(x){const M=/^#\?(\S+)/,T=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,A=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,P=/^\s*FORMAT=(\S+)\s*$/,D=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,L={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let I,U;for((x.pos>=x.byteLength||!(I=d(x)))&&o(1,"no header found"),(U=I.match(M))||o(3,"bad initial token"),L.valid|=1,L.programtype=U[1],L.string+=I+`
`;I=d(x),I!==!1;){if(L.string+=I+`
`,I.charAt(0)==="#"){L.comments+=I+`
`;continue}if((U=I.match(T))&&(L.gamma=parseFloat(U[1])),(U=I.match(A))&&(L.exposure=parseFloat(U[1])),(U=I.match(P))&&(L.valid|=2,L.format=U[1]),(U=I.match(D))&&(L.valid|=4,L.height=parseInt(U[1],10),L.width=parseInt(U[2],10)),L.valid&2&&L.valid&4)break}return L.valid&2||o(3,"missing format specifier"),L.valid&4||o(3,"missing image size specifier"),L},f=function(x,M,T){const A=M;if(A<8||A>32767||x[0]!==2||x[1]!==2||x[2]&128)return new Uint8Array(x);A!==(x[2]<<8|x[3])&&o(3,"wrong scanline width");const P=new Uint8Array(4*M*T);P.length||o(4,"unable to allocate buffer space");let D=0,L=0;const I=4*A,U=new Uint8Array(4),z=new Uint8Array(I);let W=T;for(;W>0&&L<x.byteLength;){L+4>x.byteLength&&o(1),U[0]=x[L++],U[1]=x[L++],U[2]=x[L++],U[3]=x[L++],(U[0]!=2||U[1]!=2||(U[2]<<8|U[3])!=A)&&o(3,"bad rgbe scanline format");let O=0,G;for(;O<I&&L<x.byteLength;){G=x[L++];const _t=G>128;if(_t&&(G-=128),(G===0||O+G>I)&&o(3,"bad scanline data"),_t){const yt=x[L++];for(let kt=0;kt<G;kt++)z[O++]=yt}else z.set(x.subarray(L,L+G),O),O+=G,L+=G}const X=A;for(let _t=0;_t<X;_t++){let yt=0;P[D]=z[_t+yt],yt+=A,P[D+1]=z[_t+yt],yt+=A,P[D+2]=z[_t+yt],yt+=A,P[D+3]=z[_t+yt],D+=4}W--}return P},g=function(x,M,T,A){const P=x[M+3],D=Math.pow(2,P-128)/255;T[A+0]=x[M+0]*D,T[A+1]=x[M+1]*D,T[A+2]=x[M+2]*D,T[A+3]=1},v=function(x,M,T,A){const P=x[M+3],D=Math.pow(2,P-128)/255;T[A+0]=eo.toHalfFloat(Math.min(x[M+0]*D,65504)),T[A+1]=eo.toHalfFloat(Math.min(x[M+1]*D,65504)),T[A+2]=eo.toHalfFloat(Math.min(x[M+2]*D,65504)),T[A+3]=eo.toHalfFloat(1)},m=new Uint8Array(t);m.pos=0;const p=u(m),y=p.width,w=p.height,_=f(m.subarray(m.pos),y,w);let S,b,R;switch(this.type){case An:R=_.length/4;const x=new Float32Array(R*4);for(let T=0;T<R;T++)g(_,T*4,x,T*4);S=x,b=An;break;case sn:R=_.length/4;const M=new Uint16Array(R*4);for(let T=0;T<R;T++)v(_,T*4,M,T*4);S=M,b=sn;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:y,height:w,data:S,header:p.string,gamma:p.gamma,exposure:p.exposure,type:b,colorSpace:Dr,minFilter:Xe,magFilter:Xe,generateMipmaps:!1,flipY:!0}}setDataType(t){return this.type=t,this}}class l1 extends a1{constructor(t){console.warn("RGBELoader has been deprecated. Please use HDRLoader instead."),super(t)}}const c1=[{key:"bark",albedo:"vendor/commons/sugi_bark/1280px-Cryptomeria_japonica_(bark)_of_Okuteshinmei-jinja.jpg",hasRough:!1,hasNormal:!1,materialKeys:["trunk"],repeat:[1,2],fallbackNote:"procedural darkWood canvas (materials.js trunk) stays when file missing"},{key:"woodAged",albedo:"vendor/commons/weathered_wood/1280px-Weathered_barn_wood_with_worm_holes.jpg",hasRough:!1,hasNormal:!1,materialKeys:["woodAged"],repeat:[2,1],fallbackNote:"procedural woodDrawTone(502) canvas stays when file missing"},{key:"moss",albedo:"vendor/commons/moss/1280px-Moss_green_texture.jpg",hasRough:!1,hasNormal:!1,materialKeys:["moss"],repeat:[3,3],fallbackNote:"flat moss color stays when file missing"},{key:"mossDark",albedo:"vendor/commons/moss_cc0/1280px-Moss_Texture.png",hasRough:!1,hasNormal:!1,materialKeys:["mossDark"],repeat:[3,3],fallbackNote:"flat mossDark color stays when file missing"},{key:"gravel",albedo:"vendor/commons/gravel/1280px-Gravel_texture.jpg",hasRough:!1,hasNormal:!1,materialKeys:["gravel"],repeat:[6,6],fallbackNote:"procedural gravelDraw canvas stays when file missing"},{key:"soil",albedo:"vendor/commons/needle_litter/Forest_floor_with_loblolly_pine_needles.jpg",hasRough:!1,hasNormal:!1,materialKeys:["soil"],repeat:[4,4],fallbackNote:"procedural soilDraw canvas stays when file missing"},{key:"ground037-soil",albedo:"vendor/ambientcg/Ground037/Ground037_1K-JPG_Color.jpg",normal:"vendor/ambientcg/Ground037/Ground037_1K-JPG_NormalGL.jpg",rough:"vendor/ambientcg/Ground037/Ground037_1K-JPG_Roughness.jpg",hasRough:!0,hasNormal:!0,materialKeys:["soil"],repeat:[110,110],fallbackNote:"procedural soilDraw canvas stays when file missing"},{key:"moss002",albedo:"vendor/ambientcg/Moss002/Moss002_1K-JPG_Color.jpg",normal:"vendor/ambientcg/Moss002/Moss002_1K-JPG_NormalGL.jpg",rough:"vendor/ambientcg/Moss002/Moss002_1K-JPG_Roughness.jpg",hasRough:!0,hasNormal:!0,materialKeys:["moss","mossDark"],repeat:[60,60],fallbackNote:"flat moss colors stay when file missing"},{key:"rock035",albedo:"vendor/ambientcg/Rock035/Rock035_1K-JPG_Color.jpg",normal:"vendor/ambientcg/Rock035/Rock035_1K-JPG_NormalGL.jpg",rough:"vendor/ambientcg/Rock035/Rock035_1K-JPG_Roughness.jpg",hasRough:!0,hasNormal:!0,materialKeys:["stone"],repeat:[24,24],fallbackNote:"procedural stoneDraw canvas stays when file missing"},{key:"gravel043",albedo:"vendor/ambientcg/Gravel043/Gravel043_1K-JPG_Color.jpg",normal:"vendor/ambientcg/Gravel043/Gravel043_1K-JPG_NormalGL.jpg",rough:"vendor/ambientcg/Gravel043/Gravel043_1K-JPG_Roughness.jpg",hasRough:!0,hasNormal:!0,materialKeys:["gravel"],repeat:[6,6],fallbackNote:"procedural gravelDraw canvas stays when file missing"},{key:"bark006",albedo:"vendor/ambientcg/Bark006/Bark006_1K-JPG_Color.jpg",normal:"vendor/ambientcg/Bark006/Bark006_1K-JPG_NormalGL.jpg",rough:"vendor/ambientcg/Bark006/Bark006_1K-JPG_Roughness.jpg",hasRough:!0,hasNormal:!0,materialKeys:["trunk"],repeat:[1,2],fallbackNote:"procedural darkWood canvas stays when file missing"},{key:"woodsiding013",albedo:"vendor/ambientcg/WoodSiding013/WoodSiding013_1K-JPG_Color.jpg",normal:"vendor/ambientcg/WoodSiding013/WoodSiding013_1K-JPG_NormalGL.jpg",rough:"vendor/ambientcg/WoodSiding013/WoodSiding013_1K-JPG_Roughness.jpg",hasRough:!0,hasNormal:!0,materialKeys:["woodAged","wood"],repeat:[2,1],fallbackNote:"procedural woodDrawTone canvases stay when file missing (woodNew untouched: new vs aged history)"},{key:"plaster001",albedo:"vendor/ambientcg/Plaster001/Plaster001_1K-JPG_Color.jpg",normal:"vendor/ambientcg/Plaster001/Plaster001_1K-JPG_NormalGL.jpg",rough:"vendor/ambientcg/Plaster001/Plaster001_1K-JPG_Roughness.jpg",hasRough:!0,hasNormal:!0,materialKeys:["plaster"],repeat:[1,1],fallbackNote:"procedural plasterDraw canvas stays when file missing"},{key:"roofing006",albedo:"vendor/ambientcg/RoofingTiles006/RoofingTiles006_1K-JPG_Color.jpg",normal:"vendor/ambientcg/RoofingTiles006/RoofingTiles006_1K-JPG_NormalGL.jpg",rough:"vendor/ambientcg/RoofingTiles006/RoofingTiles006_1K-JPG_Roughness.jpg",hasRough:!0,hasNormal:!0,materialKeys:["roofTile","roofTileAlt"],repeat:[4,4],fallbackNote:"flat ceramic + shared noise stay when file missing"}],h1={clear:"vendor/hdri/venice_sunset_1k.hdr",overcast:"vendor/hdri/quarry_01_1k.hdr",night:"vendor/hdri/moonless_golf_1k.hdr"};function u1(i,t){return i.colorSpace=Be,i.wrapS=i.wrapT=ni,t&&i.repeat.set(t[0],t[1]),i.anisotropy=4,i.needsUpdate=!0,i}function yu(i,t){return i.colorSpace=Bn,i.wrapS=i.wrapT=ni,t&&i.repeat.set(t[0],t[1]),i.anisotropy=4,i.needsUpdate=!0,i}function d1(i,t={}){const e=t.loader||new Ed,n={applied:[],missing:[]};for(const s of c1)if(!s.key.startsWith("polyhaven"))try{if(e.load(s.albedo,r=>{u1(r,s.repeat);let o=!1;for(const a of s.materialKeys){const l=i[a];l&&(l.map&&l.map.repeat&&r.repeat.copy(l.map.repeat),l.map=r,l.needsUpdate=!0,o=!0)}o?n.applied.includes(s.key)||n.applied.push(s.key):n.missing.includes(s.key)||n.missing.push(s.key)},void 0,()=>{n.missing.includes(s.key)||n.missing.push(s.key),t.verbose&&console.warn(`[vendor] missing scan, fallback kept: ${s.key} <- ${s.albedo}`)}),s.normal)try{e.load(s.normal,r=>{yu(r,s.repeat);for(const o of s.materialKeys){const a=i[o];a&&"normalMap"in a&&(a.normalMap&&a.normalMap.repeat&&r.repeat.copy(a.normalMap.repeat),a.normalMap=r,"normalScale"in a&&a.normalScale&&a.normalScale.setScalar(.7),a.needsUpdate=!0)}},void 0,()=>{})}catch{}if(s.rough)try{e.load(s.rough,r=>{yu(r,s.repeat);for(const o of s.materialKeys){const a=i[o];a&&"roughnessMap"in a&&(a.roughnessMap=r,"roughness"in a&&(a.roughness=1),a.needsUpdate=!0)}},void 0,()=>{})}catch{}}catch{n.missing.includes(s.key)||n.missing.push(s.key)}return n}const Hc=13621468;function f1(i,t){const e=new nn({side:_n,depthWrite:!1,fog:!1,uniforms:{top:{value:new It(8366281)},mid:{value:new It(15909267)},bot:{value:new It(14721137)}},vertexShader:`
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
      }`}),n=new et(new In(150,24,16),e);n.frustumCulled=!1,i.add(n),i.fog=new Dc(Hc,42,500);const s=new oc(16767400,3);s.position.set(14,8.5,12),s.target.position.set(0,1.2,0),s.castShadow=!0,s.shadow.mapSize.set(2048,2048),s.shadow.camera.left=-15,s.shadow.camera.right=15,s.shadow.camera.top=15,s.shadow.camera.bottom=-15,s.shadow.camera.near=10,s.shadow.camera.far=120,s.shadow.bias=-4e-4,s.shadow.normalBias=.03,i.add(s,s.target);const r=new P0(12375016,9072466,.6);i.add(r);const o=new oc(16764830,.35);o.position.set(-8,4,-6),i.add(o);const a=document.createElement("canvas");a.width=64,a.height=32;const l=a.getContext("2d"),c=l.createLinearGradient(0,0,0,32);c.addColorStop(0,"#6f96bd"),c.addColorStop(.34,"#a8b8c4"),c.addColorStop(.46,"#ffd9a0"),c.addColorStop(.52,"#c08a5e"),c.addColorStop(.6,"#6b5a44"),c.addColorStop(1,"#2e2a22"),l.fillStyle=c,l.fillRect(0,0,64,32);const h=l.createRadialGradient(41,9,0,41,9,11);h.addColorStop(0,"rgba(255,244,220,0.95)"),h.addColorStop(.4,"rgba(255,214,150,0.45)"),h.addColorStop(1,"rgba(255,200,130,0)"),l.fillStyle=h,l.fillRect(0,0,64,32);let d=1234567;const u=()=>(d=d*1103515245+12345&2147483647)/2147483647;for(let m=0;m<40;m++){const p=u()*64,y=18+u()*14,w=1+u()*3,_=l.createRadialGradient(p,y,0,p,y,w),S=u()<.5;_.addColorStop(0,S?"rgba(150,115,80,0.25)":"rgba(50,52,48,0.25)"),_.addColorStop(1,"rgba(0,0,0,0)"),l.fillStyle=_,l.beginPath(),l.arc(p,y,w,0,7),l.fill()}const f=new Cn(a);f.mapping=vr,f.colorSpace=Be;const g=new jo(t),v=g.fromEquirectangular(f);i.environment=v.texture,f.dispose(),g.dispose();try{new l1().load(h1.clear,m=>{try{m.mapping=vr;const p=new jo(t),y=p.fromEquirectangular(m);i.environment=y.texture,m.dispose(),p.dispose()}catch{}},void 0,()=>{})}catch{}return{sun:s,hemi:r,skyMat:e,sky:n}}function on(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new xe;let c=0;for(let h=0;h<i.length;++h){const d=i[h];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const d=[];for(let u=0;u<i.length;++u){const f=i[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(const h in r){const d=Mu(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){const f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][u]);const g=Mu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function Mu(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Ne(o,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<e;g++){const v=h.getComponent(u,g);a.setComponent(u+d,g,v)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function Nn(i){let t=i>>>0||1;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const kd=t1,Su=e1||{},Gd={M:null};function Hd(i){Gd.M=i}const p1={tile:"roofTile",shoji:"paper"},tl={};function gn(i,t){const e=Gd.M||kd;if(e&&e[i])return e[i];const n=p1[i];return n&&e&&e[n]?e[n]:(tl[i]||(tl[i]=t()),tl[i])}const zi=(i,t=.85,e=0)=>new dt({color:i,roughness:t,metalness:e}),Li=()=>gn("woodDark",()=>zi(4864552,.8)),wu=()=>gn("woodNew",()=>zi(9069112,.7)),bu=()=>gn("woodAged",()=>zi(7234136,.9)),Eu=()=>gn("plaster",()=>zi(15261904,.95)),m1=()=>gn("tile",()=>zi(3817286,.85)),Vd=()=>gn("stone",()=>zi(9276808,.95)),g1=()=>gn("glassDark",()=>new dt({color:1053980,roughness:.08,metalness:.9})),mr=()=>gn("iron",()=>zi(2829102,.55,.8));function Pe(i,t,e,n,s,r,o,a,l=0,c=0,h=0){const d=new Dt(e,n,s),u=new ae().makeRotationFromEuler(new vn(h,l,c));u.setPosition(r,o,a),d.applyMatrix4(u),(i[t]||(i[t]=[])).push(d)}function Tu(i,t,e,n,s,r,o=0,a=0,l=0){const c=new ae().makeRotationFromEuler(new vn(o,a,l));c.setPosition(n,s,r),e.applyMatrix4(c),(i[t]||(i[t]=[])).push(e)}function _1(i,t,e,{shadow:n=!0,noCast:s=null}={}){for(const r of Object.keys(t)){const o=on(t[r],!1);t[r].forEach(l=>l.dispose());const a=new et(o,e(r));a.castShadow=s&&s.has(r)?!1:n,a.receiveShadow=!0,i.add(a)}}function Wd(i={}){const t=Nn(i.seed??7),e=i.w??6.5,n=i.d??6,s=i.wallH??3.1,r=Ke.degToRad(i.pitch??28+t()*8),o=i.roofType??(t()<.7?"kirizuma":"yosemune"),a=i.facadeCols??Math.max(3,Math.round(e/1.8)),l=i.age??t(),c=!!i.isShop,h=i.engawa??(t()<.6?.9:0),d=new $t;d.name=i.name||"house";const u={},f=(i.woodTone??.5)>.6?"woodNew":"woodAged",g=V=>V==="WOOD"?gn(f,f==="woodNew"?wu:bu):V==="WOOD_D"?Li():V==="IRON"||V==="IRNNC"?mr():V==="RIDGE"?gn("ridge",()=>zi(3487549,.5,.1)):V==="PLAS"?kd.plasterTinted?.(i.plasterTone??15261904)??Eu():V==="STONE"?Vd():Li(),v=.55,m=.45,p=[],y=Math.max(3,Math.round(e/1.2)+1),w=Math.max(3,Math.round(n/1.2)+1);for(let V=0;V<y;V++)p.push([-e/2+e*V/(y-1),0,-n/2],[-e/2+e*V/(y-1),0,n/2]);for(let V=1;V<w-1;V++)p.push([-e/2,0,-n/2+n*V/(w-1)],[e/2,0,-n/2+n*V/(w-1)]);for(const[V,,rt]of p)Pe(u,"STONE",v,m,v,V,m/2-.06,rt,t()*.1);const _=m-.06;Pe(u,"WOOD_D",e+.3,.22,n+.3,0,_+.11,0);const S=.14,b=_+.22,R=b+s,x=i.winLayout??Array.from({length:a},()=>t()<.55?1:2),M=e/a;for(let V=0;V<a;V++){const rt=-e/2+M*(V+.5),J=x[V%x.length],ut=(i.doorSide??0)!==0&&(i.doorSide<0&&V===0||i.doorSide>0&&V===a-1),xt=b+.55,$=b+s-.75;J===0&&!ut?Pe(u,"PLAS",M-.16,s,S,rt,b+s/2,n/2):ut?(Pe(u,"PLAS",M-.16,xt-b,S,rt,(b+xt)/2,n/2),Pe(u,"PLAS",M-.16,R-(b+2.1),S,rt,(R+b+2.1)/2,n/2)):(Pe(u,"PLAS",M-.16,xt-b,S,rt,(b+xt)/2,n/2),Pe(u,"PLAS",M-.16,R-$,S,rt,(R+$)/2,n/2),Pe(u,"PLAS",.14,$-xt,S,rt-(M-.16)/2+.07,(xt+$)/2,n/2),Pe(u,"PLAS",.14,$-xt,S,rt+(M-.16)/2-.07,(xt+$)/2,n/2))}Pe(u,"PLAS",e,s,S,0,b+s/2,-n/2),Pe(u,"PLAS",S,s,n,-e/2,b+s/2,0),Pe(u,"PLAS",S,s,n,e/2,b+s/2,0);for(let V=0;V<=a;V++){const rt=-e/2+M*V;Pe(u,"WOOD_D",.14,s,.14,rt,b+s/2,n/2+.02),Pe(u,"WOOD_D",.14,s,.14,rt,b+s/2,-n/2-.02)}Pe(u,"WOOD_D",e+.24,.16,.18,0,R-.08,n/2+.02),Pe(u,"WOOD_D",e+.24,.12,.14,0,b+1.55,n/2+.03),Pe(u,"WOOD_D",e+.24,.2,.2,0,R+.02,-n/2-.02);for(let V=0;V<=a;V++){const rt=-e/2+M*V;Pe(u,"WOOD_D",.12,.12,.5,rt,R+.18,n/2+.25)}for(let V=0;V<a;V++){const rt=-e/2+M*(V+.5);Pe(u,"WOOD_D",.22,.16,.3,rt,R+.32,n/2+.32)}if(i.chains===!0){const V=Nn((i.seed??7)*7919+13);for(const rt of[1,-1]){const J=rt*(e/2-.35),ut=n/2+.5,xt=R+.42,$=.32,tt=Math.max(8,Math.floor((xt-$)/.09));for(let ct=0;ct<=tt;ct++){const pt=xt-(xt-$)*(ct/tt),mt=(V()-.5)*.016,gt=(V()-.5)*.016,St=new Js(.035,.008,4,6);ct%2?Tu(u,"IRNNC",St,J+mt,pt,ut+gt,0,Math.PI/2,0):Tu(u,"IRNNC",St,J+mt,pt,ut+gt,0,0,0)}Pe(u,"STONE",.34,.12,.34,J,.06,ut,V()*.2)}}const T=[],A=[],P=new $t;for(let V=0;V<a;V++){const rt=-e/2+M*(V+.5),J=x[V%x.length],ut=(i.doorSide??0)!==0&&(i.doorSide<0&&V===0||i.doorSide>0&&V===a-1),xt=b+.55,$=b+s-.75,tt=M-.44,ct=$-xt;if(ut){Pe(u,"WOOD_D",.12,2.15,.14,rt-tt/2-.01,b+1.075,n/2+.02),Pe(u,"WOOD_D",.12,2.15,.14,rt+tt/2+.01,b+1.075,n/2+.02),Pe(u,"WOOD_D",tt+.26,.14,.14,rt,b+2.15,n/2+.02),Pe(u,"WOOD_D",tt+.1,.07,.16,rt,b+.035,n/2+.02);const mt=new et(new Dt(tt/2-.03,2,.05),gn("woodAged",bu));mt.position.set(rt-tt/4,b+1,n/2+.06),P.add(mt);const gt=mt.clone();gt.position.x=rt+tt/4,P.add(gt),A.push({node:mt,open:rt-tt/4-(tt/2-.02)},{node:gt,open:rt+tt/4+(tt/2-.02)});const St=new _e(.02,.02,.16,6);for(const vt of[rt-.08,rt+.08]){const zt=new et(St,mr());zt.position.set(vt,b+1,n/2+.1),P.add(zt)}if(c){const vt=new et(new Dt(tt,.5,.03),gn("noren",()=>new dt({color:2899555,roughness:.9})));vt.position.set(rt,b+2.35,n/2+.12),vt.castShadow=!0,P.add(vt)}continue}if(J===0)continue;const pt=new et(new Dt(tt+.1,ct+.1,.09),Li());if(pt.position.set(rt,(xt+$)/2,n/2+.01),P.add(pt),J===1){const mt=new dt({color:15985881,roughness:.9,emissive:16762995,emissiveIntensity:0});T.push(mt);const gt=new et(new be(tt,ct),mt);gt.position.set(rt,(xt+$)/2,n/2+.072),P.add(gt);const St=Li(),vt=4,zt=3;for(let B=1;B<vt;B++){const te=new et(new Dt(.045,ct,.03),St);te.position.set(rt-tt/2+tt*B/vt,(xt+$)/2,n/2+.08),P.add(te)}for(let B=1;B<zt;B++){const te=new et(new Dt(tt,.045,.03),St);te.position.set(rt,xt+ct*B/zt,n/2+.08),P.add(te)}}else{const mt=new et(new be(tt,ct),g1());mt.position.set(rt,(xt+$)/2,n/2+.068),P.add(mt);const gt=Li();for(let vt=0;vt<=5;vt++){const zt=new et(new Dt(.05,ct,.04),gt);zt.position.set(rt-tt/2+tt*vt/5,(xt+$)/2,n/2+.075),P.add(zt)}const St=new et(new Dt(tt,.06,.04),gt);St.position.set(rt,(xt+$)/2,n/2+.075),P.add(St)}}if(P.traverse(V=>{V.isMesh&&(V.castShadow=!1,V.receiveShadow=!0)}),d.add(P),h>0){Pe(u,"WOOD",e*.95,.12,h,0,b+.12,n/2+h/2+.05);for(let V=0;V<=Math.round(e*.95/1.1);V++){const rt=-e*.95/2+e*.95*V/Math.round(e*.95/1.1);Pe(u,"STONE",.3,.3,.3,rt,.1,n/2+h+.02)}for(let V=0;V<=6;V++){const rt=-e*.9/2+e*.9*V/6;Pe(u,"WOOD_D",.09,.7,.09,rt,b+.5,n/2+h)}Pe(u,"WOOD_D",e*.9,.08,.1,0,b+.85,n/2+h)}{const V=new $t,rt=new et(new Dt(e-.4,.08,n-.4),gn("woodNew",wu));rt.position.y=b+.04,rt.receiveShadow=!0,V.add(rt);const J=new et(new be(e-.4,s-.3),new dt({color:10127984,roughness:1}));J.position.set(0,b+s/2,-n/2+.25),V.add(J);const ut=new et(new Dt(1.7,.03,.9),new dt({color:10133611,roughness:1}));ut.position.set(-.6,b+.1,.3),V.add(ut);const xt=ut.clone();xt.position.x=1.2,V.add(xt);const $=new et(new Dt(1.1,.32,.6),Li());$.position.set(.2,b+.24,.3),V.add($);const tt=new dt({color:4469538,emissive:16757854,emissiveIntensity:0});T.push(tt);const ct=new et(new In(.09,10,8),tt);ct.position.set(.2,b+s-.6,.3),V.add(ct);const pt=new et(new _e(.008,.008,.7),mr());pt.position.set(.2,b+s-.25,.3),V.add(pt),V.traverse(mt=>{mt.isMesh&&(mt.castShadow=!1,mt.receiveShadow=!0)}),d.add(V)}_1(d,u,g,{shadow:!0,noCast:new Set(["IRNNC"])});const D=new $t,L=Math.tan(r)*(n/2+.9),I=R+.35,U=Math.hypot(n/2+.9,L)+.35,z=gn("tile",m1),W=gn("ridge",()=>new dt({color:3487549,roughness:.5,metalness:.1})),O=new dt({color:4010535,roughness:.95}),G=new Dt(.3,.07,.36),X=[],_t=[];for(const V of[1,-1]){const rt=new Dt(e+1.6,.12,U),J=V*(n/4+.22),ut=I+L/2;rt.applyMatrix4(new ae().makeRotationX(V>0?r:-r)),rt.translate(0,ut,J),_t.push(rt);const xt=new Dt(e+1.5,.04,U*.98);xt.applyMatrix4(new ae().makeRotationX(V>0?r:-r)),xt.translate(0,ut-.09,J);const $=new et(on([xt],!1),O);$.receiveShadow=!0,D.add($);const tt=Math.floor(U/.34),ct=Math.floor((e+1.4)/.32);for(let pt=0;pt<tt;pt++)for(let mt=0;mt<ct;mt++){const gt=-((ct-1)*.32)/2+mt*.32+(t()-.5)*.015,St=-U/2+.2+pt*.34,vt=new F(gt,.1+(t()-.5)*.012,St).applyEuler(new vn(V>0?r:-r,0,0));X.push({p:[vt.x,vt.y+ut,vt.z+J],ry:(t()-.5)*.03,tone:.8+t()*.4})}}const yt=new et(on(_t,!1),new dt({color:2894896,roughness:.9}));yt.castShadow=!0,D.add(yt);const kt=new ze(G,z.clone(),X.length);{const V=new me,rt=new It;X.forEach((J,ut)=>{V.position.set(...J.p),V.rotation.set(0,J.ry,0),V.updateMatrix(),kt.setMatrixAt(ut,V.matrix);const xt=J.tone*(1-l*.25);kt.setColorAt(ut,rt.setRGB(.32*xt+.1,.34*xt+.1,.38*xt+.12))}),kt.instanceMatrix.needsUpdate=!0,kt.instanceColor&&(kt.instanceColor.needsUpdate=!0)}kt.castShadow=!0,kt.receiveShadow=!0,D.add(kt);const Zt=new _e(.14,.14,.46,8,1,!1,0,Math.PI);Zt.rotateZ(Math.PI/2);const jt=Math.ceil((e+1.4)/.5);for(let V=0;V<jt;V++){const rt=new et(Zt,W);rt.position.set(-(e+1.2)/2+.25+V*.5,I+L+.02,0),rt.castShadow=!0,D.add(rt)}const j=new Hr;j.moveTo(-n/2,0),j.lineTo(n/2,0),j.lineTo(0,L),j.closePath();const nt=new Oc(j,{depth:.12,bevelEnabled:!1});nt.rotateY(Math.PI/2);for(const V of[e/2-.02,-e/2-.1]){const rt=new et(nt,Eu());rt.position.set(V,R+.3,0),rt.castShadow=!0,D.add(rt)}if(o==="yosemune")for(const V of[1,-1]){const rt=new et(new Dt(.14,U*.55,(n/2+.9)*1.02),yt.material);rt.position.set(V*(e/2+.55),I+L*.45,0),rt.rotation.z=V*.62,rt.castShadow=!0,D.add(rt)}if(o!=="yosemune"){const V=[];for(const J of[1,-1])for(const ut of[1,-1]){const xt=new Dt(.16,.09,U+.15);xt.applyMatrix4(new ae().makeRotationX(ut>0?r:-r)),xt.translate(J*(e/2+.78),I+L/2+.13,ut*(n/4+.22)),V.push(xt)}const rt=new et(on(V,!1),Li());rt.castShadow=!0,rt.receiveShadow=!0,D.add(rt)}if(d.add(D),l>.15){const V=new et(new Dt(e+.05,.5*l+.15,n+.05),new dt({color:3814700,roughness:1,transparent:!0,opacity:.25+l*.3,depthWrite:!1}));V.position.y=b+.25,V.renderOrder=2,d.add(V)}return d.traverse(V=>{V.isMesh&&V.material?.isMeshStandardMaterial&&Su.registerWet&&Su.registerWet(V.material)}),{group:d,glowMats:T,sliders:A,dims:{w:e,d:n,wallH:s},roofTopY:I+L}}function x1(i,t={}){if(!i||i.userData._upgraded)return i;i.userData._upgraded=!0;const e=new $t;e.name="hero_joinery_upgrade";const n=Li(),s=mr(),r=(v,m,p,y,w,_)=>{const S=new et(new Dt(v,m,p),n);return S.position.set(y,w,_),S.castShadow=!0,S.receiveShadow=!0,e.add(S),S},o=new Fi().setFromObject(i),a=o.max.x-o.min.x||9,l=o.max.z-o.min.z||7,c=(o.max.x+o.min.x)/2-i.position.x,h=(o.max.z+o.min.z)/2-i.position.z,d=Vd();for(let v=-a/2;v<=a/2+.01;v+=1.15)for(const m of[-l/2-.15,l/2+.15]){const p=new et(new Dt(.5,.4,.5),d);p.position.set(c+v,.14,h+m),p.receiveShadow=!0,p.castShadow=!1,e.add(p)}r(a*.98,.12,.1,c,t.nageshiY??2,h+l/2+.08);for(let v=-a/2+.8;v<a/2;v+=1.6)r(.24,.18,.3,c+v,t.eaveY??3.35,h+l/2+.3);{const v=[],m=(t.eaveY??3.35)+.4,p=.3,y=Math.max(8,Math.floor((m-p)/.09));for(const _ of[c-a/2+.35,c+a/2-.35]){const S=h+l/2+.5;for(let b=0;b<=y;b++){const R=new Js(.035,.008,4,6),x=new ae().makeRotationFromEuler(new vn(0,b%2?Math.PI/2:0,0));x.setPosition(_,m-(m-p)*(b/y),S),R.applyMatrix4(x),v.push(R)}}const w=new et(on(v,!1),s);v.forEach(_=>_.dispose()),w.castShadow=!1,w.receiveShadow=!0,e.add(w)}const u=new _e(.025,.025,.2,6);for(const v of[-.12,.12]){const m=new et(u,s);m.position.set(c+(t.doorX??-2.2)+v,1.25,h+l/2+.12),e.add(m)}const f=new dt({color:4469538,emissive:16757854,emissiveIntensity:0}),g=new et(new In(.1,10,8),f);return g.position.set(c,2.6,h),e.add(g),i.userData.glowMats=[...i.userData.glowMats||[],f],i.add(e),i}const zn={strength:.45,gust(i){return this.strength*(.65+.35*Math.sin(i*.6)*Math.sin(i*.23+1.7))}},v1=["clear","windy","rainy","misty","snow"];function y1({scene:i,pondWaterMats:t=[],wetMats:e=[],heightFn:n=null,snowMats:s=[],dripPoints:r=[],basins:o=[]}={}){const a=Nn(777),l=Nn(778),c=new $t;c.name="weather",i?.add(c);let h="clear",d="clear",u=1,f=0,g=0;const v=typeof n=="function"?n:()=>0,m=Array.isArray(s)?s:[],p=800,y=new Float32Array(p*3);for(let J=0;J<p;J++)y[J*3]=(a()-.5)*60,y[J*3+1]=a()*18,y[J*3+2]=(a()-.5)*60;const w=new xe;w.setAttribute("position",new Ne(y,3));const _=new es({color:11452368,size:.14,transparent:!0,opacity:0,depthWrite:!1}),S=new ks(w,_);S.frustumCulled=!1,c.add(S);const b=new ri({color:13623530,transparent:!0,opacity:0,depthWrite:!1,side:Fe}),R=[],x=new Fc(.05,.09,12);for(let J=0;J<40;J++){const ut=new et(x,b.clone());ut.rotation.x=-Math.PI/2;const xt=(a()-.5)*50,$=(a()-.5)*50;let tt=.06;try{const ct=v(xt,$);Number.isFinite(ct)&&(tt=ct+.03)}catch{}ut.position.set(xt,tt,$),ut.userData.ph=a(),c.add(ut),R.push(ut)}const M=new dt({color:2106924,roughness:.05,metalness:.7,transparent:!0,opacity:0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),T=[];for(const J of r){const ut=.3+l()*.15,xt=new si(ut,14);xt.rotateX(-Math.PI/2);let $=.045;try{const tt=v(J.x,J.z);Number.isFinite(tt)&&($=tt+.025)}catch{}xt.translate(J.x,$,J.z),T.push(xt)}if(T.length){const J=on(T,!1);T.forEach(xt=>xt.dispose());const ut=new et(J,M);c.add(ut)}const A=[];for(const[J,ut,xt]of o){const $=new et(new si(xt,20),M);$.rotation.x=-Math.PI/2,$.position.set(J,.045,ut),c.add($),A.push($)}const D=r.length*8,L=new Float32Array(Math.max(1,D)*3),I=new Float32Array(Math.max(1,D));for(let J=0;J<D;J++){const ut=r[J%Math.max(1,r.length)]||{x:0,z:0,top:4};L[J*3]=ut.x,L[J*3+1]=ut.top,L[J*3+2]=ut.z,I[J]=l()}const U=new xe;U.setAttribute("position",new Ne(L,3));const z=new es({color:13623530,size:.09,transparent:!0,opacity:0,depthWrite:!1}),W=new ks(U,z);W.frustumCulled=!1,c.add(W);const O=500,G=26,X=60,_t=new Float32Array(O*3),yt=new Float32Array(O),kt=new Float32Array(O);for(let J=0;J<O;J++)_t[J*3]=(a()-.5)*X,_t[J*3+1]=a()*G,_t[J*3+2]=(a()-.5)*X,yt[J]=.6+a()*.6,kt[J]=a()*Math.PI*2;const Zt=new xe;Zt.setAttribute("position",new Ne(_t,3));const jt=(()=>{const J=document.createElement("canvas");J.width=32,J.height=32;const ut=J.getContext("2d"),xt=ut.createRadialGradient(16,16,1,16,16,15);xt.addColorStop(0,"rgba(255,255,255,1)"),xt.addColorStop(.6,"rgba(255,255,255,0.8)"),xt.addColorStop(1,"rgba(255,255,255,0)"),ut.fillStyle=xt,ut.fillRect(0,0,32,32);const $=new Cn(J);return $.colorSpace=Be,$})(),j=new es({map:jt,size:.16,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0,color:15922681}),nt=new ks(Zt,j);nt.frustumCulled=!1,nt.visible=!1,i?.add(nt);const V=new It(15265266);for(const J of m)!J||!J.color||J.userData._snowSeeded||(J.userData._snowSeeded=!0,J.userData._dryColor=J.color.clone(),J.userData._dryRough="roughness"in J?J.roughness:1);const rt={get state(){return u>=1?d:`${h}>${d}`},get wetness(){return f},setState(J){v1.includes(J)&&J!==d&&(h=u>=1?d:h,d=J,u=0)},update(J,ut){u=Math.min(1,u+J/3);const xt=u*u*(3-2*u),$=d==="rainy",tt=d==="snow",ct=($?xt:1-xt)*(d==="rainy"?1:0)+(h==="rainy"&&d!=="rainy"?1-xt:0);g+=((d==="snow"?xt:h==="snow"?1-xt:0)-g)*Math.min(1,J*.8);const pt=d==="windy"?1.2:d==="rainy"?.8:d==="misty"?.15:d==="snow"?.55:.45;if(zn.strength+=(pt*(d==="windy"?1:xt||1)-zn.strength)*Math.min(1,J*1.2),d==="windy"&&(zn.strength+=(1.2-zn.strength)*Math.min(1,J)),_.opacity=ct*.75,_.opacity>.01){const gt=w.attributes.position.array,St=zn.gust(ut)*3.2;for(let vt=0;vt<p;vt++)gt[vt*3+1]-=J*11,gt[vt*3]+=St*J,gt[vt*3+1]<0&&(gt[vt*3+1]=15+a()*3,gt[vt*3]=(a()-.5)*60,gt[vt*3+2]=(a()-.5)*60);w.attributes.position.needsUpdate=!0;for(const vt of R){vt.material.opacity=ct*.6;const zt=(ut*1.4+vt.userData.ph*7)%1;vt.scale.setScalar(.5+zt*2.2),vt.material.opacity=ct*.6*(1-zt)}}else for(const gt of R)gt.material.opacity=0;f+=((d==="rainy"?xt:d==="rainy"?1:h==="rainy"?1-xt:0)-f)*Math.min(1,J*.8);for(const gt of e)gt?.userData?._dry||(gt.userData._dry={r:gt.roughness??.85,e:gt.envMapIntensity??1,c:gt.color?gt.color.clone():null}),gt.roughness=Ke.lerp(gt.userData._dry.r,Math.min(.25,gt.userData._dry.r*.4),f),gt.envMapIntensity=Ke.lerp(gt.userData._dry.e,gt.userData._dry.e+.9,f),gt.userData._dry.c&&gt.color&&gt.color.copy(gt.userData._dry.c).multiplyScalar(Ke.lerp(1,.55,f));M.opacity=f*.8;const mt=.3+.7*f;for(const gt of A)gt.scale.set(mt,mt,1);if(z.opacity=ct*.85,z.opacity>.01&&r.length){const gt=U.attributes.position.array,St=zn.gust(ut)*.9;for(let vt=0;vt<D;vt++){const zt=r[vt%r.length],B=(ut*2.2+I[vt]*7)%1;gt[vt*3]=zt.x+St*B*.4,gt[vt*3+1]=zt.top-B*(zt.top-.1),gt[vt*3+2]=zt.z}U.attributes.position.needsUpdate=!0}for(const gt of t)gt.roughness=Ke.lerp(.18,.05,f);if(nt.visible=g>.01,j.opacity=.9*g,nt.visible){const St=zn.gust(ut)*(1.2+g*1);for(let vt=0;vt<O;vt++){let zt=_t[vt*3+1]-yt[vt]*J,B=_t[vt*3]+(St+Math.sin(ut*1.3+kt[vt])*.25)*J;const te=_t[vt*3+2]+Math.cos(ut*1.1+kt[vt])*.2*J;zt<=v(B,te)+.03&&(zt=G*(.85+.15*Math.sin(kt[vt]+ut*.05)),B=(kt[vt]*97.31%1+1)%1*X-X/2),_t[vt*3]=B,_t[vt*3+1]=zt,_t[vt*3+2]=te}Zt.attributes.position.needsUpdate=!0}if(m.length){const gt=g*.7;for(const St of m)!St||!St.color||!St.userData._snowSeeded||(St.color.copy(St.userData._dryColor).lerp(V,gt),"roughness"in St&&g>.001&&(St.roughness=St.userData._dryRough+(.9-St.userData._dryRough)*g*.85))}rt.rainK=ct,rt.mistK=d==="misty"?xt:h==="misty"?1-xt:0,rt.dimK=($?xt*.55:0)+(tt?xt*.3:0),rt.snowK=g,rt.fogK=Math.max(rt.mistK,g*.6)},rainK:0,mistK:0,dimK:0,snowK:0,fogK:0};return rt}function M1(i,t={}){const e=new $t,n=Si(999),s=Array.isArray(t.leafSources)?t.leafSources:null;function r(_){if(!s||!s.length)return null;const S=s[_%s.length],R=(_*2654435761%1e3+1e3)%1e3/1e3*Math.PI*2+_%7*.13,x=(S.r||2.2)*(.35+.65*((_*40503%1e3+1e3)%1e3/1e3));return{x:S.x+Math.cos(R)*x,z:S.z+Math.sin(R)*x}}const o=170,a=new xe,l=new Float32Array(o*3),c=new Float32Array(o);for(let _=0;_<o;_++)l[_*3]=-22+n()*44,l[_*3+1]=.3+n()*6,l[_*3+2]=-14+n()*30,c[_]=n()*100;a.setAttribute("position",new Ne(l,3));const h=(()=>{const _=document.createElement("canvas");_.width=_.height=32;const S=_.getContext("2d"),b=S.createRadialGradient(16,16,1,16,16,15);return b.addColorStop(0,"rgba(255,240,214,1)"),b.addColorStop(1,"rgba(255,240,214,0)"),S.fillStyle=b,S.fillRect(0,0,32,32),new Cn(_)})(),d=new ks(a,new es({map:h,size:.09,transparent:!0,opacity:.55,depthWrite:!1,color:16771264,sizeAttenuation:!0}));e.add(d);const u=40,f=new be(.17,.17),g=new ze(f,i.mapleLeaf,u);g.castShadow=!1,g.receiveShadow=!1,g.frustumCulled=!1;const v=[],m=new It,p=[12597547,13849600,15105570,11088422];for(let _=0;_<u;_++){const S=r(_);v.push({bx:S?S.x:-6+(n()-.5)*30,bz:S?S.z:2+(n()-.5)*26,speed:.35+n()*.4,phase:n()*6.28,sway:.4+n()*.7,spin:1+n()*2}),m.setHex(p[Math.floor(n()*p.length)]),g.setColorAt(_,m)}g.instanceColor.needsUpdate=!0,e.add(g);const y=new me;function w(_){const S=.5+zn.gust(_),b=a.attributes.position;for(let R=0;R<o;R++){const x=c[R];b.array[R*3]+=Math.sin(_*.3+x)*.0012*(.5+S),b.array[R*3+1]+=(.0016+Math.sin(_*.5+x*2)*8e-4)*(.5+S),b.array[R*3+1]>6.5&&(b.array[R*3+1]=.2)}b.needsUpdate=!0;for(let R=0;R<u;R++){const x=v[R];let T=4.8-(_*x.speed*(.6+S)+x.phase)%4.6;const A=x.bx+Math.sin(_*.9+x.phase)*x.sway*(.6+S),P=x.bz+Math.cos(_*.7+x.phase*1.3)*x.sway*.7;y.position.set(A,T,P),y.rotation.set(_*x.spin+x.phase,x.phase,_*x.spin*.7),y.scale.setScalar(1),y.updateMatrix(),g.setMatrixAt(R,y.matrix)}g.instanceMatrix.needsUpdate=!0}return w(.01),{group:e,update:w}}const Au={type:"change"},Vc={type:"start"},Xd={type:"end"},To=new sa,Ru=new pi,S1=Math.cos(70*Ke.DEG2RAD),qe=new F,yn=2*Math.PI,Te={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},el=1e-6;class w1 extends W0{constructor(t,e=null){super(t,e),this.state=Te.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fs.ROTATE,MIDDLE:Fs.DOLLY,RIGHT:Fs.PAN},this.touches={ONE:Us.ROTATE,TWO:Us.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new Wn,this._lastTargetPosition=new F,this._quat=new Wn().setFromUnitVectors(t.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Jh,this._sphericalDelta=new Jh,this._scale=1,this._panOffset=new F,this._rotateStart=new ht,this._rotateEnd=new ht,this._rotateDelta=new ht,this._panStart=new ht,this._panEnd=new ht,this._panDelta=new ht,this._dollyStart=new ht,this._dollyEnd=new ht,this._dollyDelta=new ht,this._dollyDirection=new F,this._mouse=new ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=E1.bind(this),this._onPointerDown=b1.bind(this),this._onPointerUp=T1.bind(this),this._onContextMenu=I1.bind(this),this._onMouseWheel=C1.bind(this),this._onKeyDown=P1.bind(this),this._onTouchStart=D1.bind(this),this._onTouchMove=L1.bind(this),this._onMouseDown=A1.bind(this),this._onMouseMove=R1.bind(this),this._interceptControlDown=N1.bind(this),this._interceptControlUp=U1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Te.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Au),this.update(),this.state=Te.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;qe.copy(e).sub(this.target),qe.applyQuaternion(this._quat),this._spherical.setFromVector3(qe),this.autoRotate&&this.state===Te.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=yn:n>Math.PI&&(n-=yn),s<-Math.PI?s+=yn:s>Math.PI&&(s-=yn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(qe.setFromSpherical(this._spherical),qe.applyQuaternion(this._quatInverse),e.copy(this.target).add(qe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=qe.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new F(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=qe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(To.origin.copy(this.object.position),To.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(To.direction))<S1?this.object.lookAt(this.target):(Ru.setFromNormalAndCoplanarPoint(this.object.up,this.target),To.intersectPlane(Ru,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>el||8*(1-this._lastQuaternion.dot(this.object.quaternion))>el||this._lastTargetPosition.distanceToSquared(this.target)>el?(this.dispatchEvent(Au),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?yn/60*this.autoRotateSpeed*t:yn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){qe.setFromMatrixColumn(e,0),qe.multiplyScalar(-t),this._panOffset.add(qe)}_panUp(t,e){this.screenSpacePanning===!0?qe.setFromMatrixColumn(e,1):(qe.setFromMatrixColumn(e,0),qe.crossVectors(this.object.up,qe)),qe.multiplyScalar(t),this._panOffset.add(qe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;qe.copy(s).sub(this.target);let r=qe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(yn*this._rotateDelta.x/e.clientHeight),this._rotateUp(yn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(yn*this._rotateDelta.x/e.clientHeight),this._rotateUp(yn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ht,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function b1(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function E1(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function T1(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Xd),this.state=Te.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function A1(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Fs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Te.DOLLY;break;case Fs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Te.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Te.ROTATE}break;case Fs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Te.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Te.PAN}break;default:this.state=Te.NONE}this.state!==Te.NONE&&this.dispatchEvent(Vc)}function R1(i){switch(this.state){case Te.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Te.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Te.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function C1(i){this.enabled===!1||this.enableZoom===!1||this.state!==Te.NONE||(i.preventDefault(),this.dispatchEvent(Vc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Xd))}function P1(i){this.enabled!==!1&&this._handleKeyDown(i)}function D1(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Us.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Te.TOUCH_ROTATE;break;case Us.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Te.TOUCH_PAN;break;default:this.state=Te.NONE}break;case 2:switch(this.touches.TWO){case Us.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Te.TOUCH_DOLLY_PAN;break;case Us.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Te.TOUCH_DOLLY_ROTATE;break;default:this.state=Te.NONE}break;default:this.state=Te.NONE}this.state!==Te.NONE&&this.dispatchEvent(Vc)}function L1(i){switch(this._trackPointer(i),this.state){case Te.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Te.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Te.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Te.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Te.NONE}}function I1(i){this.enabled!==!1&&i.preventDefault()}function N1(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function U1(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function O1(i){const t=new Mn(45,window.innerWidth/window.innerHeight,.3,500);t.position.set(12.5,7,15.5);const e=new w1(t,i.domElement);e.target.set(0,2.2,1),e.enableDamping=!0,e.dampingFactor=.06,e.minDistance=5,e.maxDistance=48,e.maxPolarAngle=1.45,e.update();function n(){t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)}return window.addEventListener("resize",n),{camera:t,controls:e,onResize:n}}const F1=20260911,Ni=[{name:"hero",cx:0,cz:-1,w:9,d:7,kind:"hero"},{name:"A",cx:-10.5,cz:-1,w:6.5,d:6,kind:"home"},{name:"B",cx:9.8,cz:-.5,w:6,d:6.5,kind:"home"},{name:"shop1",cx:14,cz:13.5,w:7,d:5,kind:"shop"},{name:"shop2",cx:-13,cz:13.5,w:6.5,d:5,kind:"shop"},{name:"C",cx:-9,cz:-12,w:7,d:6,kind:"home"},{name:"D",cx:2,cz:-12.5,w:6.5,d:6,kind:"home"},{name:"E",cx:11.5,cz:-12,w:6,d:5.5,kind:"home"},{name:"F",cx:-19,cz:-3,w:5.5,d:6,kind:"home"},{name:"G",cx:-6,cz:21,w:6,d:5,kind:"home"},{name:"shed1",cx:19.5,cz:-4,w:3,d:2.5,kind:"shed"},{name:"shed2",cx:-20.5,cz:8,w:2.8,d:2.5,kind:"shed"}],z1={A:{seed:11,w:6.5,d:6,wallH:2.9,roofType:"kirizuma",pitch:30,facadeCols:4,doorSide:-1,engawa:.9,woodTone:.3,age:.7,chains:!0},B:{seed:22,w:6,d:6.5,wallH:3.3,roofType:"yosemune",pitch:32,facadeCols:3,doorSide:1,engawa:0,woodTone:.8,age:.2,chains:!0},shop1:{seed:33,w:7,d:5,wallH:3.4,roofType:"kirizuma",pitch:26,facadeCols:4,doorSide:0,engawa:1.4,woodTone:.6,age:.35,isShop:!0,chains:!0},shop2:{seed:44,w:6.5,d:5,wallH:3.2,roofType:"kirizuma",pitch:27,facadeCols:4,doorSide:0,engawa:1.2,woodTone:.4,age:.55,isShop:!0,chains:!0},C:{seed:55,w:7,d:6,wallH:3,roofType:"yosemune",pitch:31,facadeCols:4,doorSide:1,engawa:.9,woodTone:.5,age:.5},D:{seed:66,w:6.5,d:6,wallH:3.5,roofType:"kirizuma",pitch:33,facadeCols:3,doorSide:-1,engawa:0,woodTone:.75,age:.25},E:{seed:77,w:6,d:5.5,wallH:2.8,roofType:"kirizuma",pitch:29,facadeCols:3,doorSide:1,engawa:.8,woodTone:.35,age:.65},F:{seed:88,w:5.5,d:6,wallH:2.9,roofType:"yosemune",pitch:30,facadeCols:3,doorSide:-1,engawa:0,woodTone:.45,age:.6},G:{seed:99,w:6,d:5,wallH:3.1,roofType:"kirizuma",pitch:28,facadeCols:3,doorSide:1,engawa:.9,woodTone:.65,age:.3},shed1:{seed:111,w:3,d:2.5,wallH:2.2,roofType:"kirizuma",pitch:24,facadeCols:2,doorSide:0,engawa:0,woodTone:.2,age:.9,winLayout:[0,0]},shed2:{seed:122,w:2.8,d:2.5,wallH:2.1,roofType:"kirizuma",pitch:25,facadeCols:2,doorSide:0,engawa:0,woodTone:.25,age:.85,winLayout:[0,0]}};function B1(){for(let i=0;i<Ni.length;i++)for(let t=i+1;t<Ni.length;t++){const e=Ni[i],n=Ni[t],s=(e.w+n.w)/2+1-Math.abs(e.cx-n.cx),r=(e.d+n.d)/2+1-Math.abs(e.cz-n.cz);s>0&&r>0&&console.error(`[town] OVERLAP ${e.name}×${n.name} by ${s.toFixed(2)}×${r.toFixed(2)}m`)}}function k1(){const i=[[0,2.45,19,.55],[-8.5,.6,.55,4.2],[8.9,.6,.55,4.2],[.25,-5.05,6.4,.55],[-3.9,3.55,1.6,.7],[3.1,3.55,1.6,.7]],t=[],e=[];i.forEach(([r,o,a,l],c)=>{const h=new be(a,l);h.rotateX(-Math.PI/2),h.translate(r,.04,o),(c<4?t:e).push(h)});const n=new dt({color:3812896,roughness:1,metalness:0});n.polygonOffset=!0,n.polygonOffsetFactor=-1,n.polygonOffsetUnits=-1;const s=new $t;for(const r of[t,e]){const o=on(r,!1);r.forEach(a=>a.dispose()),s.add(new et(o,n))}return s.traverse(r=>{r.isMesh&&(r.receiveShadow=!0)}),s}function G1({scene:i,heroGroup:t=null}={}){B1();const e=Nn(F1),n=new $t;n.name="town";const s=[];for(const g of Ni){if(g.kind==="hero"){t&&(t.position.set(g.cx,0,g.cz),n.add(t),s.push({name:"hero",group:t,glowMats:t.userData.glowMats||[],pos:t.position.clone()}));continue}const v={...z1[g.name],name:g.name},m=Wd(v);m.group.position.set(g.cx,0,g.cz),g.kind==="shop"&&(m.group.rotation.y=Math.PI),n.add(m.group),s.push({name:g.name,params:v,group:m.group,glowMats:m.glowMats,sliders:m.sliders||[],pos:m.group.position.clone()})}const r=H1(),o=new $t;o.name="ground_zoning";const a=new et(new be(70,70),r.soil);a.rotation.x=-Math.PI/2,a.receiveShadow=!0,o.add(a);const l=(g,v,m,p,y,w=.02)=>{const _=new et(new be(g,v),y);_.rotation.x=-Math.PI/2,_.position.set(m,w,p),_.receiveShadow=!0,o.add(_)};l(64,3,0,7,r.street),l(2,15,-5.9,-1.7,r.dirt),l(1.1,14.5,-5.9,-1.7,r.stonePath,.03),l(30,2,1,-7.5,r.dirt),l(26,2,-2,17.5,r.dirt),l(10,3.2,0,3.9,r.garden,.015),l(8,3,14,9.8,r.gravel,.015),l(7.5,3,-13,9.8,r.gravel,.015);{const g=new Dt(.5,.18,.3),v=64,m=new ze(g,r.edging,v*2),p=new me;let y=0;for(let w=0;w<v;w++)for(const _ of[5.35,8.65])p.position.set(-32+w*1+(e()-.5)*.05,.09,_),p.rotation.y=(e()-.5)*.06,p.updateMatrix(),m.setMatrixAt(y++,p.matrix);m.count=y,m.receiveShadow=!0,o.add(m)}n.add(o),n.add(W1(e)),n.add(X1(e)),n.add(k1()),n.add(Y1()),n.add(q1(e)),i&&i.add(n);const c=[[-2.5,9.3],[8.5,9.3],[19.5,9],[-15.5,9.3],[-15,-6.8]],h=[];for(const[g,v]of c){let m=null,p=1/0;for(const S of s){const b=Ni.find(T=>T.name===S.name);if(!b)continue;const R=g-S.pos.x,x=v-S.pos.z,M=R*R+x*x;M<p&&(p=M,m={h:S,L:b})}if(!m||p>400)continue;const y=m.h.pos.x+Math.max(-m.L.w/2+.3,Math.min(m.L.w/2-.3,g-m.h.pos.x)),w=m.h.pos.z+Math.max(-m.L.d/2+.3,Math.min(m.L.d/2-.3,v-m.h.pos.z)),_=.6+(m.h.params?.wallH??3);h.push({a:[g,5.9,v],b:[y,_,w]})}const d=[],u={hero:{x:0,z:-1,w:9,d:7,rot:0,top:4.1},A:{x:-10.5,z:-1,w:6.5,d:6,rot:0,top:3.9},B:{x:9.8,z:-.5,w:6,d:6.5,rot:0,top:4.3},shop1:{x:14,z:13.5,w:7,d:5,rot:Math.PI,top:4.4},shop2:{x:-13,z:13.5,w:6.5,d:5,rot:Math.PI,top:4.2}};for(const g of Object.keys(u)){const v=u[g];for(const m of[1,-1]){const p=m*(v.w/2-.35),y=v.d/2+.5,w=v.rot===0?v.x+p:v.x-p,_=v.rot===0?v.z+y:v.z-y;d.push({x:w,z:_,top:v.top})}}return{group:n,houses:s,serviceDrops:h,dripPoints:d,basins:[[-5.9,8.2,1.3],[10.5,8.2,1.2],[.5,9.7,1]],lampPositions:[[-4.2,8.9],[6.5,8.9],[15.5,8.9],[-13.5,8.9],[-5,-6.5],[8,-6.5],[-6.4,1.5]],polePositions:c}}function H1(){const i=(e,n=.95)=>new dt({color:e,roughness:n}),t={soil:i(6050117),street:i(9407101,.9),dirt:i(7824462),stonePath:i(10132116),garden:i(6253386,1),gravel:i(10525320),edging:i(8224120)};for(const[e,n]of Object.entries(t))e!=="edging"&&(n.map=V1(e),n.needsUpdate=!0);return t}const nl={};function V1(i){if(nl[i])return nl[i];let t=0;for(const a of i)t=t*31+a.charCodeAt(0)>>>0;const e=(()=>{let a=t||1;return()=>{a|=0,a=a+1831565813|0;let l=Math.imul(a^a>>>15,1|a);return l=l+Math.imul(l^l>>>7,61|l)^l,((l^l>>>14)>>>0)/4294967296}})(),n=128,s=document.createElement("canvas");s.width=s.height=n;const r=s.getContext("2d");r.fillStyle="#ffffff",r.fillRect(0,0,n,n);for(let a=0;a<900;a++){const l=205+Math.floor(e()*50);r.fillStyle=`rgb(${l},${l},${l})`,r.globalAlpha=.5,r.fillRect(e()*n,e()*n,1+e()*2.5,1+e()*2.5)}const o=new Cn(s);return o.wrapS=o.wrapT=ni,o.repeat.set(8,8),o.colorSpace=Be,nl[i]=o,o}function W1(i,t){const e=new $t;e.name="stone_walls";const n=[[-16.5,2.8,-7.5,2.8,1.1],[5,2.8,12.5,2.8,1.1],[-13.5,-8.6,-4.5,-8.6,1],[8,18.2,-2.5,18.2,1],[17.8,11.5,21.5,11.5,1.2]],s=new Dt(.55,.32,.4),r=new dt({color:9145222,roughness:.95}),o=[];for(const[c,h,d,u,f]of n){const g=Math.hypot(d-c,u-h),v=Math.floor(g/.58),m=Math.atan2(d-c,u-h),p=Math.max(2,Math.round(f/.33));for(let y=0;y<v;y++)for(let w=0;w<p;w++){const _=(y+.5)/v;o.push({x:c+(d-c)*_+(i()-.5)*.04,z:h+(u-h)*_,y:.16+w*.32,ry:m+(i()-.5)*.08})}for(let y=0;y<v;y++){const w=(y+.5)/v;o.push({x:c+(d-c)*w,z:h+(u-h)*w,y:.16+p*.32+.06,ry:m,cap:!0})}}const a=new ze(s,r,o.length),l=new me;return o.forEach((c,h)=>{l.position.set(c.x,c.y,c.z),l.rotation.set(0,c.ry,0),l.scale.set(c.cap?1.15:1,c.cap?.45:1,c.cap?1.2:1),l.updateMatrix(),a.setMatrixAt(h,l.matrix)}),a.castShadow=!1,a.receiveShadow=!0,e.add(a),e}function X1(i){const t=new $t;t.name="fences_gates";const e=new dt({color:5916208,roughness:.85}),n=new dt({color:4141602,roughness:.85}),s={W:[],D:[]},r=(a,l,c,h,d,u,f,g=0)=>{const v=new Dt(l,c,h),m=new ae().makeRotationY(g);m.setPosition(d,u,f),v.applyMatrix4(m),a.push(v)},o=[{x1:-4.6,z1:2.8,x2:4.6,z2:2.8,gate:.5},{x1:-16,z1:.5,x2:-16,z2:5.5,gate:-1},{x1:10.2,z1:11,x2:17.8,z2:11,gate:0}];for(const a of o){const l=Math.hypot(a.x2-a.x1,a.z2-a.z1),c=Math.floor(l/.28),h=Math.atan2(a.x2-a.x1,a.z2-a.z1)+Math.PI/2;for(let d=0;d<=c;d++){const u=d/c,f=a.x1+(a.x2-a.x1)*u,g=a.z1+(a.z2-a.z1)*u;a.gate&&Math.abs(u-.5)<.09||r(s.W,.16,1.1+(i()-.5)*.06,.04,f,.62,g,h)}r(s.D,l,.09,.06,(a.x1+a.x2)/2,1.05,(a.z1+a.z2)/2,h),r(s.D,l,.09,.06,(a.x1+a.x2)/2,.35,(a.z1+a.z2)/2,h),a.gate===.5?r(s.D,1.1,1.05,.06,(a.x1+a.x2)/2+.9,.6,(a.z1+a.z2)/2+.12,h):a.gate===-1&&r(s.D,1,1,.05,a.x1+.4,.58,a.z1+2.6,h+.6)}for(const[a,l]of[["W",e],["D",n]]){if(!s[a].length)continue;const c=new et(on(s[a],!1),l);c.castShadow=!0,c.receiveShadow=!0,t.add(c)}return t}function Y1(){const i=new $t;i.name="drainage";const t=new dt({color:3025960,roughness:.9}),e=new dt({color:1911347,roughness:.15,metalness:.6}),n=new dt({color:8224120,roughness:.95}),s=new et(new Dt(60,.1,.5),t);s.position.set(0,.015,9.05),s.receiveShadow=!0,i.add(s);const r=new et(new be(60,.3),e);r.rotation.x=-Math.PI/2,r.position.set(0,.05,9.05),i.add(r),i.userData.waterMat=e;const o=[];for(let l=-28;l<=28;l+=4){const c=new Dt(1.2,.06,.56);c.translate(l,.09,9.05),o.push(c)}const a=new et(on(o,!1),n);a.receiveShadow=!0,i.add(a);for(const l of[-5.9,10.5]){const c=new et(new Dt(1.6,.1,1.1),new dt({color:7033395,roughness:.8}));c.position.set(l,.12,9.05),c.castShadow=!0,c.receiveShadow=!0,i.add(c)}return i}function q1(i){const t=new $t;t.name="stepping_stones";const e=new dt({color:9408393,roughness:.95}),n=[],s=[{x:0,z0:5.4,z1:2.6,n:4},{x:-10.5,z0:5.4,z1:2.4,n:4},{x:9.8,z0:5.4,z1:3,n:3},{x:14,z0:8.6,z1:10.8,n:3},{x:-13,z0:8.6,z1:10.8,n:3}];for(const o of s)for(let a=0;a<o.n;a++){const l=(a+.5)/o.n,c=new _e(.32+i()*.1,.36,.09,7);c.translate(o.x+(i()-.5)*.3,.045,o.z0+(o.z1-o.z0)*l),n.push(c)}const r=new et(on(n,!1),e);return r.receiveShadow=!0,t.add(r),t}const il="audio/suzume.mp3",K1="audio/tsukimori-bgm.mp3",Z1="Shamisen Nation (DOVA-SYNDROME)",Cu="Suzume",Ao=19e3,sl=14e3,Pu=8e3,hr=2200,rl=8;function Yd(i,t,e){const n=e.w/2,s=e.d/2;return i>=e.cx-n&&i<=e.cx+n&&t>=e.cz-s&&t<=e.cz+s}function J1(i,t,e){if(!e)return null;for(let n=0;n<e.length;n++){const s=e[n];if(s&&Yd(i,t,s))return s}return null}function $1(i,t,e,n,s){const r=s.w/2,o=s.d/2,a=s.cx-r,l=s.cx+r,c=s.cz-o,h=s.cz+o;if(i>=a&&i<=l&&t>=c&&t<=h||e>=a&&e<=l&&n>=c&&n<=h)return!0;const f=e-i,g=n-t;let v=0,m=1;if(Math.abs(f)<1e-12){if(i<a||i>l)return!1}else{let p=(a-i)/f,y=(l-i)/f;if(p>y){const w=p;p=y,y=w}if(p>v&&(v=p),y<m&&(m=y),v>m)return!1}if(Math.abs(g)<1e-12){if(t<c||t>h)return!1}else{let p=(c-t)/g,y=(h-t)/g;if(p>y){const w=p;p=y,y=w}if(p>v&&(v=p),y<m&&(m=y),v>m)return!1}return!0}function Du(i){return i<0?0:i>1?1:i}const Lu=new WeakSet;function Q1({camera:i=null,scene:t=null,zones:e=[]}={}){const o="inverse";let l=null,c=null,h=null,d=!1,u=null,f=!1,g=!1,v=!0,m=!1,p=!0,y=.9,w=!1,_=!1,S=.9,b=Ao,R=-1,x=Cu,M=null;const T=new F,A=new F;function P(O){g||(g=!0,console.warn(O))}function D(){w||d||i&&l&&(i.add(l),w=!0)}function L(){try{const O=l&&l.context;if(O&&O.state==="suspended"){const G=O.resume();G&&typeof G.catch=="function"&&G.catch(()=>{})}}catch{}}function I(){try{const O=l&&l.context;return!!O&&O.state==="running"}catch{return!1}}function U(){if(d||f||!u||!c)return!1;try{return c.isPlaying||c.play(),_=!1,!0}catch{return!1}}try{l=new B0,c=new H0(l),c.setRefDistance(2.5),c.setRolloffFactor(1.6),c.setMaxDistance(55),c.setDistanceModel(o),c.setLoop(!0),c.setVolume(y),h=l.context.createBiquadFilter(),h.type="lowpass",h.frequency.value=Ao,h.Q.value=.4,typeof c.setFilter=="function"&&c.setFilter(h),t&&typeof t.add=="function"&&t.add(c);try{const O=[{url:il,label:Cu},{url:K1,label:Z1}],G=X=>{if(X>=O.length){f=!0,P("[audio] missing "+il+" (drop your file at public/"+il+") and no bundled fallback — radio silent");return}new Yh().load(O[X].url,_t=>{u=_t,x=O[X].label,f=!1;try{c.setBuffer(_t)}catch{}p&&v&&!m&&(D(),I()&&(L(),U()))},void 0,()=>{G(X+1)})};G(0)}catch{f=!0,P("[audio] loader unavailable — radio silent")}}catch{d=!0,f=!0,P("[audio] WebAudio unavailable — silent mode")}function z(){if(!i||!c)return R;c.getWorldPosition(T),A.setFromMatrixPosition(i.matrixWorld);const O=A.x-T.x,G=A.y-T.y,X=A.z-T.z;return Math.sqrt(O*O+G*G+X*X)}const W={source:c,loop:!0,volume:.9,refDistance:2.5,rolloffFactor:1.6,maxDistance:55,distanceModel:o,play(){return p=!0,d||f?!1:u?(D(),L(),U()):(D(),L(),!0)},pause(){if(p=!1,_=!1,!d&&c)try{c.pause()}catch{}},stop(){if(p=!1,_=!1,!d&&c)try{c.stop()}catch{}},mute(O){if(m=O!==!1,!d&&c&&m)try{c.setVolume(0)}catch{}},setVolume(O){const G=Number(O);y=Number.isFinite(G)?Math.min(1,Math.max(0,G)):y,m=!1,W.volume=y},loadCustom(O,G){if(!O||d)return!1;try{if(M&&M!==O)try{URL.revokeObjectURL(M)}catch{}return M=O,x=String(G||"Custom track").slice(0,48),f=!1,u=null,new Yh().load(O,X=>{u=X;try{c&&c.setBuffer(X)}catch{}p&&v&&!m&&(D(),L(),U())},void 0,()=>{P("[audio] could not decode custom track (mp3/m4a/ogg/wav supported by your browser)")}),!0}catch{return!1}},setEnabled(O){if(v=!!O,v)p=!0,!d&&!f&&u?(D(),L(),U()):(D(),L());else if(p=!1,_=!1,!d&&c)try{c.pause()}catch{}},state(){const O=z(),G=Du(1-(b-hr)/(Ao-hr));let X=!1;try{X=!d&&!!c&&!!c.isPlaying}catch{X=!1}return{enabled:v,playing:X,track:x,missing:f,dist:O,muffleK:G}},update(O){let G=Number(O);if((!Number.isFinite(G)||G<0)&&(G=0),G>.1&&(G=.1),!i||!c)return;c.getWorldPosition(T),A.setFromMatrixPosition(i.matrixWorld);const X=A.x-T.x,_t=A.z-T.z,yt=Math.sqrt(X*X+(A.y-T.y)*(A.y-T.y)+_t*_t);R=yt;const kt=J1(T.x,T.z,e),Zt=kt?Yd(A.x,A.z,kt):!1;let jt=!1;if(!Zt&&e)for(let ut=0;ut<e.length;ut++){const xt=e[ut];if(!(!xt||xt===kt)&&$1(A.x,A.z,T.x,T.z,xt)){jt=!0;break}}let j,nt;if(yt>55)j=hr,nt=0;else if(Zt)j=Ao,nt=1;else if(!jt&&yt<rl)j=sl,nt=.9;else{const ut=Du((yt-rl)/(55-rl));jt?(j=Pu+(hr-Pu)*ut,nt=.55):(j=sl+(hr-sl)*ut,nt=1)}let V=y*nt;(!v||m)&&(V=0);const rt=1-Math.exp(-6*G),J=1-Math.exp(-4*G);if(S+=(V-S)*(G===0?1:rt),b+=(j-b)*(G===0?1:J),!d){try{h&&(h.frequency.value=b),c&&Math.abs(S-c.getVolume())>.002&&c.setVolume(S)}catch{}try{u&&c&&(S<.01&&(yt>55||!v||m)?c.isPlaying&&(c.pause(),_=!0):_&&v&&!m&&p&&yt<=55&&U())}catch{}}}};return W}function j1(i){if(!i||Lu.has(i))return i;Lu.add(i);const t=()=>{e();try{typeof i.setEnabled=="function"&&i.setEnabled(!0)}catch{}},e=()=>{try{document.removeEventListener("pointerdown",t),document.removeEventListener("keydown",t)}catch{}};try{document.addEventListener("pointerdown",t),document.addEventListener("keydown",t)}catch{}return i}function Iu(i,t,e){const n=Nn(i),s=document.createElement("canvas");s.width=128,s.height=256;const r=s.getContext("2d");r.fillStyle=t,r.fillRect(0,0,128,256),r.strokeStyle=e,r.lineCap="round";for(let a=0;a<3;a++){const l=34+n()*60,c=50+a*70;for(let h=0;h<4;h++)r.lineWidth=4+n()*7,r.beginPath(),r.moveTo(l-22+n()*10,c+(n()-.5)*30),r.quadraticCurveTo(l,c+(n()-.5)*34,l+22-n()*8,c+(n()-.5)*30),r.stroke();r.lineWidth=5,r.beginPath(),r.moveTo(l,c-26),r.lineTo(l+(n()-.5)*12,c+26),r.stroke()}const o=new Cn(s);return o.colorSpace=Be,o}function ty({lampPositions:i=[],polePositions:t=[],serviceDrops:e=[]}={}){const n=Nn(4242),s=new $t;s.name="details";const r=[],o={wood:new dt({color:4864552,roughness:.85}),woodD:new dt({color:3352861,roughness:.9}),iron:new dt({color:2302758,roughness:.5,metalness:.85}),bronze:new dt({color:7035443,roughness:.35,metalness:.9}),paper:new dt({color:15788245,roughness:.9}),stone:new dt({color:9276808,roughness:.95}),leaf:new dt({color:4877109,roughness:1}),indigo:new dt({color:2833502,roughness:.95,side:Fe}),cream:new dt({color:14208952,roughness:.95,side:Fe})},a={},l=(M,T,A,P,D,L=0,I=0,U=0)=>{const z=new ae().makeRotationFromEuler(new vn(I,L,U));z.setPosition(A,P,D),T.applyMatrix4(z),(a[M]||(a[M]=[])).push(T)},c=(M,T,A)=>new Dt(M,T,A),h=(M,T,A,P=8)=>new _e(M,T,A,P),d=[];for(const[M,T]of t)l("woodD",h(.11,.14,6.4),M,3.2,T),l("woodD",c(1.4,.1,.1),M,5.9,T),l("woodD",c(1.1,.09,.09),M,5.4,T),d.push(new F(M,5.9,T));const u=[],f=new dt({color:5591108,emissive:16760938,emissiveIntensity:0});i.forEach(([M,T],A)=>{l("iron",h(.06,.09,3.4),M,1.7,T),l("iron",c(.7,.07,.07),M+.3,3.35,T)});const g=[],v=(M,T,A,P)=>{const D=new Js(.34,.035,8,20);l("iron",D.clone(),M-.45,.34,T,A),l("iron",D.clone(),M+.45,.34,T,A);const L=(I,U,z,W)=>{const O=Math.hypot(z-I,W-U),G=h(.025,.025,O,6),X=new vn(0,A,Math.atan2(W-U,z-I)-Math.PI/2+P);G.applyMatrix4(new ae().makeRotationFromEuler(X)),G.translate((I+z)/2+M,(U+W)/2,T),(a.iron||(a.iron=[])).push(G)};L(-.45,.34,0,.75),L(.45,.34,0,.75),L(0,.75,-.15,.95),L(-.45,.34,.45,.34),l("woodD",c(.28,.05,.22),M-.05,.78,T,A),l("iron",h(.02,.02,.4,6),M+.45,.95,T,0,0,Math.PI/2)};v(11.2,10.6,.2,.12),v(-10.8,10.7,-.15,-.1),v(-4.9,3.4,1.45,.14);const m=(M,T,A,P,D)=>{const L=Iu(D,"#2b3c5e","#e8e0cc"),I=new et(new Dt(.9,1.8,.08),new dt({map:L,roughness:.85}));I.position.set(M,T,A),I.rotation.y=P,I.castShadow=!0,s.add(I)};m(10.6,2.6,10.9,.3,7),m(-10.2,2.5,10.9,-.25,21);for(const[M,T,A]of[[-7.2,2.9,5],[6.9,2.9,9],[5.4,-9.4,13]]){const P=Iu(A,"#4a3a28","#efe6d0"),D=new et(new Dt(.34,.7,.05),new dt({map:P,roughness:.85}));D.position.set(M,2,T),s.add(D)}{const M=new et(c(1,1.9,.7),new dt({color:12071722,roughness:.4,metalness:.3}));M.position.set(17.9,.95,10.6),M.castShadow=!0,s.add(M);const T=new dt({color:1118481,emissive:12576511,emissiveIntensity:1.2,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),A=new et(new be(.8,1.2),T);A.position.set(17.9,1,10.24),A.rotation.y=Math.PI,s.add(A),s.userData.vendGlow=T}const p=(M,T,A=.45,P=0)=>l("wood",c(A,A,A),M,A/2,T,P);p(12.6,10.7,.5,.2),p(12.6,10.7+0,.42,.5),a.wood[a.wood.length-1].translate(0,.46,0),p(-14.8,10.6,.45,-.3),p(5.2,3.6,.4,.7);for(const[M,T]of[[1.8,3.2],[-2.2,3.3],[11.9,10.5]])l("woodD",h(.16,.13,.3),M,.15,T);const y=(M,T,A)=>{l("wood",c(1.6,.08,.4),M,.45,T,A),l("woodD",c(.08,.45,.36),M-.6,.22,T,A),l("woodD",c(.08,.45,.36),M+.6,.22,T,A)};y(.5,4.4,.1),y(-9.5,3.2,-.1);const w=[];for(let M=0;M<=6;M++)w.push(new ht(.14+M/6*.1,M/6*.28));const _=new Zs(w,10);for(const[M,T]of[[-3.4,3.1],[3.2,3],[10.9,10.8],[-11.5,10.6],[2.2,4.3]])l("stone",_.clone(),M,0,T),l("leaf",new In(.2,7,6),M,.42,T);l("woodD",h(.2,.17,.5),-1.8,.25,3.5);for(let M=0;M<3;M++)l("cream",h(.015,.09,.9,6),-1.85+M*.06,.7,3.5+(M-1)*.05);for(const M of[-10,2,12])l("iron",c(.8,.04,.5),M,.1,9.05);const S=(M,T)=>{const A=Math.sin(M*127.1+T*311.7)*43758.5453;return A-Math.floor(A)};for(const[M,T]of[[5.6,.9],[-5.6,.9]])for(let A=0;A<14;A++){const P=Math.floor(A/5),D=A%5,L=c(.85+S(A,M)*.2,.15,.15),I=new ae().makeRotationY((S(A,T)-.5)*.2);I.setPosition(M+(S(A,3)-.5)*.06,.1+P*.16,T+(D-2)*.17),L.applyMatrix4(I),(a.wood||(a.wood=[])).push(L)}{const M=new In(.15,12,10),T=new dt({color:16773848,emissive:16757854,emissiveIntensity:1.2,roughness:.6});for(const[A,P]of[[-3.9,8.9],[6.8,8.9]]){const D=new et(M,T);D.position.set(A,3.02,P),s.add(D)}}for(const[M,T]of[[13.5,"indigo"],[14.5,"cream"]]){const A=new be(.5,.9,1,2);A.translate(0,-.45,0);const P=new et(A,o[T]);P.position.set(M,2.6,10.8),P.rotation.y=M<14?.15:-.12,P.castShadow=!0,s.add(P),r.push({mesh:P,phase:S(M,1)*6.28,amp:.08})}{const M=new Xn(.32,1),T=M.attributes.position;for(let D=0;D<T.count;D++){const L=1+.22*Math.sin(D*3.7)+.12*Math.sin(D*9.1+1.3);T.setXYZ(D,T.getX(D)*L,T.getY(D)*L*.72,T.getZ(D)*L)}M.computeVertexNormals();const A=new ze(M,o.stone,5),P=new me;[[-8.5,11.5],[-3.5,14.2],[-7.8,14.5],[-3.8,11.3],[-6,11]].forEach(([D,L],I)=>{P.position.set(D,.1,L),P.rotation.set(0,S(I,21)*6.28,0);const U=.7+S(I,22)*.9;P.scale.set(U,U*.8,U),P.updateMatrix(),A.setMatrixAt(I,P.matrix)}),A.instanceMatrix.needsUpdate=!0,A.castShadow=!0,A.receiveShadow=!0,s.add(A)}{const M=new be(.36,.3);M.translate(0,.15,0);const T=new ze(M,o.leaf,24),A=new me,P=[[-4.6,3.3],[-2,3.3],[1.5,3.3],[4.6,3.3],[-5.15,.9],[5.15,.9],[13,10.6],[15,10.6],[-14,10.6],[-12,10.6],[-6.2,1],[7.2,5.2]];let D=0;for(let L=0;L<12;L++)for(let I=0;I<2;I++){A.position.set(P[L][0],.02,P[L][1]),A.rotation.set(0,I*Math.PI/2+S(L,31)*.6,0);const U=.7+S(L,32+I)*.7;A.scale.set(U,U,U),A.updateMatrix(),T.setMatrixAt(D++,A.matrix)}T.instanceMatrix.needsUpdate=!0,T.castShadow=!1,T.receiveShadow=!1,s.add(T)}{const A=new et(new Dt(.62,.9,.62),o.wood);A.position.set(15.5,.45,14.5),A.castShadow=!0,s.add(A);const P=new et(new Dt(.55,.35,.3),o.wood);P.position.set(15.5,1.075,14.5),P.castShadow=!0,s.add(P);const D=new et(new Dt(.5,.28,.02),o.iron);D.position.set(15.5,1.075,14.5-.16),s.add(D);const L=new _e(.025,.025,.03,10);for(const W of[-.12,-.05]){const O=new et(L,o.bronze);O.rotation.x=Math.PI/2,O.position.set(15.5+W,.99,14.5-.18),s.add(O)}const I=new et(new _e(.008,.012,.7,6),o.bronze);I.position.set(15.5+.18,1.55,14.5+.05),I.rotation.z=-.35,I.rotation.x=.12,s.add(I);const U=new dt({color:2102280,emissive:16757854,emissiveIntensity:1,roughness:.6}),z=new et(new Dt(.3,.045,.012),U);z.position.set(15.5+.05,1.16,14.5-.175),s.add(z),s.userData.radioGlow=U,s.userData.radioPos=new F(15.5,1.15,14.5),s.userData.radioMeshes=[A,P,D,z]}const b=new ri({color:1118484});for(const M of e)try{const T=new F(M.a[0],M.a[1],M.a[2]),A=new F(M.b[0],M.b[1],M.b[2]);if(T.distanceTo(A)>22)continue;const P=T.clone().lerp(A,.5);P.y-=Math.min(.9,T.distanceTo(A)*.06);const D=new Jo(T,P,A),L=new et(new Qo(D,16,.012,5),b);s.add(L),l("cream",h(.03,.035,.09,8),A.x,A.y,A.z)}catch{}const R=M=>o[{WOOD:"wood",wood:"wood",woodD:"woodD",iron:"iron",stone:"stone",leaf:"leaf",cream:"cream"}[M]||"wood"];for(const M of Object.keys(a)){const T=new et(on(a[M],!1),R(M));T.castShadow=M!=="leaf",T.receiveShadow=!0,s.add(T)}i.forEach(([M,T],A)=>{const P=new et(new In(.13,10,8),A<3?f:f.clone());if(P.position.set(M+.6,3.25,T),s.add(P),u.push(P.material),A<3){const D=new Bc(16760430,0,12,2);D.position.set(M+.6,3.2,T),s.add(D),g.push(D)}}),s.userData.lampGlows=u,s.userData.lampLights=g;const x=(M,T,A,P,D,L,I=0)=>{const U=new be(P,D,1,4);U.translate(0,-D/2,0);const z=new et(U,o[L]);z.position.set(M,T,A),z.rotation.y=I,z.castShadow=!0,s.add(z),r.push({mesh:z,phase:n()*6.28,amp:.08+n()*.06})};for(let M=0;M<3;M++)x(12.4+M*.55,2.5,10.95,.45,.8,"indigo");for(let M=0;M<2;M++)x(-14.2+M*.55,2.4,10.95,.45,.7,"cream");x(1.5,2.2,2.62,.4,.6,"cream");for(let M=0;M<d.length-1;M++){const T=d[M],A=d[M+1];if(T.distanceTo(A)>16)continue;const P=T.clone().lerp(A,.5);P.y-=.7;for(const D of[0,-.22]){const L=new Jo(T.clone().add(new F(0,D,0)),P.clone().add(new F(0,D,0)),A.clone().add(new F(0,D,0))),I=new et(new Qo(L,20,.015,5),b);s.add(I)}}for(const[M,T]of[[-4.9,2.9],[4.9,2.9],[10.4,10.9],[-9.9,10.9]]){const A=new et(h(.05,.07,.7,7),o.woodD);A.position.set(M,.55,T),A.castShadow=!0,s.add(A);for(let D=0;D<3;D++){const L=new et(new In(.32-D*.06,8,6),o.leaf);L.position.set(M+(n()-.5)*.2,1+D*.28,T+(n()-.5)*.2),L.scale.y=.75,L.castShadow=!0,s.add(L)}const P=new et(_.clone(),o.stone);P.position.set(M,0,T),s.add(P)}return{group:s,cloth:r,lampGlows:u,lampLights:g}}function ey(i,t,e={strength:.5}){if(!i?.cloth)return;const n=.4+(e.strength??.5);for(const s of i.cloth)s.mesh.rotation.x=Math.sin(t*2.1+s.phase)*s.amp*n}const ol=["DAWN","DAY","GOLDEN","SUNSET","BLUE_HOUR","NIGHT","MOONLIT","RAIN_NIGHT","MIST_NIGHT"],Nu={DAWN:{sunC:16757370,sunI:1.6,el:12,az:95,sky:[10336470,15910043],fog:13620438,hemi:.5,hemiSky:12375016,hemiGround:9072466,exp:1,lit:0,lampK:1,starK:0},DAY:{sunC:16774112,sunI:2.6,el:62,az:150,sky:[7317724,13624303],fog:Hc,hemi:.7,hemiSky:12375016,hemiGround:9072466,exp:1,lit:0,lampK:1,starK:0},GOLDEN:{sunC:16761963,sunI:2,el:18,az:235,sky:[8363204,16767392],fog:14207412,hemi:.55,hemiSky:15255968,hemiGround:6248010,exp:1.05,lit:0,lampK:1,starK:0},SUNSET:{sunC:16744013,sunI:1.4,el:6,az:262,sky:[5926824,16752228],fog:13216143,hemi:.45,hemiSky:9076672,hemiGround:4866104,exp:1.05,lit:.25,lampK:1,starK:.05},BLUE_HOUR:{sunC:8029951,sunI:.35,el:-4,az:290,sky:[1450573,12151374],fog:5922694,hemi:.35,hemiSky:4874144,hemiGround:3025448,exp:.9,lit:.8,lampK:1,starK:.3},NIGHT:{sunC:9414872,sunI:.22,el:28,az:300,sky:[395798,1055795],fog:725536,hemi:.18,hemiSky:2371676,hemiGround:658450,exp:.95,lit:1,lampK:1,starK:.9},MOONLIT:{sunC:12176639,sunI:1.1,el:48,az:40,sky:[330004,858160],fog:659746,hemi:.14,hemiSky:1713232,hemiGround:329484,exp:.85,lit:1,lampK:1,starK:1},RAIN_NIGHT:{sunC:5925514,sunI:.25,el:30,az:120,sky:[461588,1120294],fog:857119,hemi:.18,hemiSky:2765896,hemiGround:658448,exp:.8,lit:1,lampK:1.25,starK:.05},MIST_NIGHT:{sunC:6975622,sunI:.18,el:25,az:200,sky:[658708,1712168],fog:1317410,hemi:.2,hemiSky:3159615,hemiGround:790033,exp:.8,lit:1,lampK:1.1,starK:0}};function ny({renderer:i,scene:t,sun:e,hemi:n,skyMat:s=null,houses:r=[],lampGlows:o=[],lampLights:a=[],vendGlow:l=null,stars:c=null,moon:h=null}={}){let d="DAY",u="DAY",f=1,g=!1,v=0;const m=new It,p=new It,y=new It,w=new It,_=new It,S=new It,b=x("DAY"),R=x("DAY");function x(T){const A=Nu[T];return{...A,sky:[...A.sky]}}function M(T,A,P){const D=b,L=R,I=m.set(D.sunC).lerp(new It(L.sunC),A);if(e){const G=1-(P?.dimK??0);e.color.copy(I),e.intensity=Ke.lerp(D.sunI,L.sunI,A)*G;const X=Ke.degToRad(Ke.lerp(D.el,L.el,A)),_t=Ke.degToRad(Ke.lerp(D.az,L.az,A));e.position.set(Math.cos(X)*Math.cos(_t),Math.sin(X),Math.cos(X)*Math.sin(_t)).multiplyScalar(60)}if(p.set(D.sky[0]).lerp(new It(L.sky[0]),A),y.set(D.sky[1]).lerp(new It(L.sky[1]),A),s?.uniforms?(s.uniforms.topColor?.value.copy(p),s.uniforms.bottomColor?.value.copy(y),s.uniforms.top&&s.uniforms.top.value.copy(p),s.uniforms.mid&&s.uniforms.mid.value.copy(y),s.uniforms.bot&&s.uniforms.bot.value.copy(y).multiplyScalar(.82)):t?.background?.isColor&&t.background.copy(y),w.set(D.fog).lerp(new It(L.fog),A),t?.fog){t.fog.color.copy(w);const G=P?.mistK??0,X=P?.rainK??0,_t=P?.snowK??0;t.fog.near=Ke.lerp(42,10,G)-X*8-_t*6,t.fog.far=Ke.lerp(500,90,G)-X*180-_t*150}n&&(n.intensity=Ke.lerp(D.hemi,L.hemi,A),D.hemiSky!==void 0&&(n.color.copy(_.set(D.hemiSky).lerp(new It(L.hemiSky),A)),n.groundColor.copy(S.set(D.hemiGround).lerp(new It(L.hemiGround),A)))),i&&(i.toneMappingExposure=Ke.lerp(D.exp,L.exp,A));const U=Ke.lerp(D.lit??0,L.lit??0,A),z=Ke.lerp(D.lampK??1,L.lampK??1,A),W=Ke.lerp(D.starK??0,L.starK??0,A),O=U;for(const G of r)for(const X of G.glowMats||[])X.emissiveIntensity=O*(G.name==="hero"?1.6:.9);for(const G of o)G.emissiveIntensity=U*2.2*z;for(const G of a)G.intensity=U*14*z;l&&(l.emissiveIntensity=.4+U*1.6),c&&(c.material.opacity=U*W),h&&(h.material.opacity=U)}return{get state(){return f>=1?u:`${d}>${u}`},get auto(){return g},set(T){const A=String(T).toUpperCase().replace(/[\s-]+/g,"_");Nu[A]&&A!==u&&(Object.assign(b,x((f>=1,u))),d=f>=1?u:d,Object.assign(R,x(A)),u=A,f=0)},cycle(){this.set(ol[(ol.indexOf(u)+1)%ol.length])},toggleAuto(){return g=!g,g},update(T,A){g&&(v+=T,v>14&&(v=0,this.cycle())),f=Math.min(1,f+T/2.5);const P=f*f*(3-2*f);M(u,P,A)}}}function iy(i){const t=new $t;t.name="night_sky";const e=400,n=new Float32Array(e*3);let s=-1627238007;const r=()=>(s=s*1103515245+12345&2147483647)/2147483647;for(let d=0;d<e;d++){const u=r()*Math.PI*2,f=r()*Math.PI*.45+.08,g=120;n[d*3]=Math.cos(u)*Math.cos(f)*g,n[d*3+1]=Math.sin(f)*g,n[d*3+2]=Math.sin(u)*Math.cos(f)*g}const o=new xe;o.setAttribute("position",new Ne(n,3));const a=new ks(o,new es({color:13623551,size:.7,transparent:!0,opacity:0,depthWrite:!1}));a.frustumCulled=!1,t.add(a);const l=new et(new si(3,24),new ri({color:15265791,transparent:!0,opacity:0,fog:!1}));l.position.set(-60,42,-80),l.lookAt(0,0,0),t.add(l);const c=new oc(10336488,0);c.position.copy(l.position),t.add(c),t.userData.setMoon=d=>{c.intensity=d*.35};const h=t.userData.setMoon;return i.add(t),{stars:a,moon:l,moonLight:c,setMoon:h}}function sy(i){const t=i<0?0:i>1?1:i;return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}const we=[{n:"01 MOON FOREST ESTABLISHING",pos:[-28,14,-22],tgt:[0,2,4],fov:55,rail:{to:[-24,13,-18],tgtTo:null,period:14},mood:null,focus:{target:[0,2,4],dist:38},intent:"Moonlit canopy edge first, then eye drops to the lit village bowl."},{n:"02 LANTERN ALLEY",pos:[-5.9,1.6,-8],tgt:[-5.9,1.9,6],fov:50,rail:{to:[-5.9,1.6,1.5],tgtTo:[-5.9,1.9,8],period:12},mood:null,focus:{target:[-5.9,1.9,2],dist:10},intent:"Nearest lantern glow first, then eye travels down the alley line."},{n:"03 ROOF REVEAL",pos:[.5,5.4,1],tgt:[0,4,-1.2],fov:40,rail:{to:[3.8,6.6,6.8],tgtTo:[0,3.2,-1],period:12},mood:null,focus:{target:[0,4,-1],dist:3.5},intent:"Hero tile texture first, then rail pull reveals the ridge line."},{n:"04 MAPLE FOREGROUND",pos:[-4.9,2.7,5.6],tgt:[.5,2,-1.2],fov:45,rail:{to:[-3.6,2.6,5.2],tgtTo:null,period:10},mood:null,focus:{target:[.5,2,-1.2],dist:8.5},intent:"Red maple leaves first framing the edge, then hero house snaps into view."},{n:"05 POND",pos:[-8.6,1.7,13.4],tgt:[-4.2,.8,12.4],fov:50,rail:{to:[-3.4,1.7,13.4],tgtTo:[-6.5,.8,12.8],period:14},mood:null,focus:{target:[-6,.8,13],dist:4.5},intent:"Pond ripple highlight first, then lateral drift carries eye across reflections."},{n:"06 RAIN STREET",pos:[2.2,1.7,6.6],tgt:[-5,1.9,8.6],fov:50,rail:{to:[-1.5,1.7,6.4],tgtTo:null,period:11},mood:{time:"RAIN_NIGHT",wx:"rainy"},focus:{target:[-4.2,1.8,8.9],dist:7.5},intent:"Wet lamp halo first, then eye slides along the rain-streaked street."},{n:"07 MACHIYA ENTRANCE",pos:[6.6,1.9,6.2],tgt:[-.5,1.6,-.5],fov:40,rail:{to:[4.8,1.8,5],tgtTo:null,period:10},mood:null,focus:{target:[0,1.6,0],dist:9},intent:"Lattice doorway warmth first, then 3/4 facade and tiles read as one."},{n:"08 GARDEN PASSAGE",pos:[2.6,1.1,-6.8],tgt:[-2.2,1.3,-1.5],fov:50,rail:{to:[.8,1.1,-4.8],tgtTo:null,period:11},mood:null,focus:{target:[-2,1.2,-2],dist:6},intent:"Near planting leaves first, then low passage funnels eye to the court."},{n:"09 GOLDEN HOUR",pos:[-18,3.4,7.2],tgt:[12,2,7],fov:32,rail:{to:[-14,3,7.4],tgtTo:null,period:14},mood:{time:"GOLDEN",wx:"clear"},focus:{target:[0,2,7],dist:20},intent:"Long warm street axis first, then compressed facades glow edge to edge."},{n:"10 BLUE HOUR",pos:[12.5,5.5,-6],tgt:[0,2,4],fov:40,rail:{to:[9.5,5,-3.5],tgtTo:null,period:13},mood:{time:"BLUE_HOUR",wx:"clear"},focus:{target:[0,2,4],dist:16},intent:"Cool sky gradient first, then village lights detach from dusk."},{n:"11 MOONLIT ROOFLINE",pos:[14.5,4.6,10.5],tgt:[-20,5,-20],fov:24,rail:{to:[12.5,4.4,9],tgtTo:null,period:15},mood:{time:"MOONLIT",wx:"clear"},focus:{target:[-5,4.5,-6],dist:32},intent:"Stacked roof silhouettes first, then eye runs the telephoto line toward moon azimuth."},{n:"12 FINAL REVEAL",pos:[18,9.5,18.5],tgt:[-8,3,-8],fov:45,rail:{to:[15,8.5,16],tgtTo:null,period:16},mood:{time:"MIST_NIGHT",wx:"misty"},focus:{target:[-4,2.5,0],dist:34},intent:"Whole village bowl and moon glow first, then mist softens the far treeline."}];function ry(i,t){let e=0,n="orbit",s=!1,r=0;const o=9;let a=0,l=null,c=null;const h=new F().fromArray(we[0].pos);new F().fromArray(we[0].pos);const d=new F().fromArray(we[0].tgt);new F().fromArray(we[0].tgt),we[0].fov;function u(w,_){return _.fromArray(we[w].pos)}function f(w,_,S){S.fromArray(we[w].pos);const b=we[w].rail;if(b&&b.to){const R=b.to[0],x=b.to[1],M=b.to[2];S.set(S.x+(R-we[w].pos[0])*_,S.y+(x-we[w].pos[1])*_,S.z+(M-we[w].pos[2])*_)}return S}function g(w,_){return _.fromArray(we[w].tgt)}function v(w,_,S){S.fromArray(we[w].tgt);const b=we[w].rail;return b&&b.tgtTo&&S.set(S.x+(b.tgtTo[0]-we[w].tgt[0])*_,S.y+(b.tgtTo[1]-we[w].tgt[1])*_,S.z+(b.tgtTo[2]-we[w].tgt[2])*_),S}function m(w,_=2.5){const S=we.length,b=(w%S+S)%S;c={fp:i.position.clone(),tp:new F().fromArray(we[b].pos),ft:t?t.target.clone():new F().fromArray(we[b].tgt),tt:new F().fromArray(we[b].tgt),ff:i.fov,tf:we[b].fov,t:0,dur:Math.max(.01,_)},e=b,r=0,a=0}function p(w){u(w,i.position),t&&(g(w,t.target),t.update()),i.fov=we[w].fov,i.updateProjectionMatrix()}const y={get idx(){return e},get mode(){return n},get label(){return n==="orbit"?"orbit":we[e].n},get count(){return we.length},get names(){return we.map(w=>w.n)},setMode(w){return n=String(w),r=0,t&&(t.enabled=n!=="cine"),n==="cine"&&p(e),n},goTo(w,_=2.5,S=!1){const b=we.length,R=(w%b+b)%b;if(m(R,_),S&&l&&we[R].mood)try{l(we[R].mood)}catch{}return e},onMood(w){return typeof w=="function"&&(l=w),y},next(){return y.goTo(e+1,2.5,!1)},prev(){return y.goTo(e-1,2.5,!1)},toggleAdvance(){return s=!s,r=0,s},update(w){const _=Math.min(Math.max(w||0,0),.1);if(a+=_,n==="free"||n==="orbit"){let x=!1;try{x=!!(window.__explore&&window.__explore.on)}catch{}t&&!x&&t.update();return}if(s&&!c&&(r+=_,r>=o&&y.next()),c){c.t+=_;const x=sy(c.t/c.dur);i.position.lerpVectors(c.fp,c.tp,x);const M=new F().lerpVectors(c.ft,c.tt,x);t&&t.target.copy(M),i.fov=c.ff+(c.tf-c.ff)*x,i.updateProjectionMatrix(),c.t>=c.dur&&(c=null,a=0),t&&t.update();return}const S=we[e].rail&&we[e].rail.period||12,b=.5+.5*Math.sin(a/S*Math.PI*2-Math.PI/2);f(e,b,h),v(e,b,d),i.position.copy(h),t&&t.target.copy(d);const R=we[e].fov;Math.abs(i.fov-R)>.01&&(i.fov+=(R-i.fov)*Math.min(1,_*2),i.updateProjectionMatrix()),t&&t.update()}};return y}function oy(i,t){const e=[],n=[],s=new V0,r=new ht;let o=0,a=0,l=0,c=0;function h(v,m){const p=t.getBoundingClientRect();r.set((v-p.left)/p.width*2-1,-((m-p.top)/p.height)*2+1),s.setFromCamera(r,i);const y=[];for(const S of e)y.push(S.node);for(const S of n)y.push(...S.meshes);const w=s.intersectObjects(y,!0);if(!w.length)return null;let _=w[0].object;for(const S of e){let b=_;for(;b;){if(b===S.node)return{kind:"slide",item:S};b=b.parent}}for(const S of n)for(const b of S.meshes){let R=_;for(;R;){if(R===b)return{kind:"action",item:S};R=R.parent}}return null}function d(v,m){if(!v)return null;const p={node:v,closed:v.position.x,open:m,t:0,target:0};return e.push(p),p}function u(v,m){!v||!v.length||typeof m!="function"||n.push({meshes:v.slice(),fn:m})}try{t.addEventListener("pointerdown",v=>{o=v.clientX,a=v.clientY,l=performance.now()}),t.addEventListener("pointerup",v=>{if(Math.hypot(v.clientX-o,v.clientY-a)>6||performance.now()-l>400)return;let p=null;try{p=h(v.clientX,v.clientY)}catch{p=null}if(p)if(p.kind==="slide")p.item.target=p.item.target>.5?0:1;else try{p.item.fn()}catch{}}),t.addEventListener("pointermove",v=>{const m=performance.now();if(m-c<120)return;c=m;let p=null;try{p=h(v.clientX,v.clientY)}catch{p=null}try{t.style.cursor=p?"pointer":""}catch{}})}catch{}function f(v){let m=Number(v);(!Number.isFinite(m)||m<0)&&(m=0),m>.1&&(m=.1);const p=1-Math.exp(-3*m||1e-4);for(const y of e){y.t+=(y.target-y.t)*(m===0?1:p),Math.abs(y.target-y.t)<.002&&(y.t=y.target);const w=y.t*y.t*(3-2*y.t);y.node.position.x=y.closed+(y.open-y.closed)*w}}return{addSlide:d,onTap:u,update:f,get count(){return e.length+n.length}}}const Uu=1.6,ay=3.4;function ly(i,t,e={}){const n=typeof e.heightFn=="function"?e.heightFn:()=>0,s=Array.isArray(e.solids)?e.solids:[];let r=!1,o=0,a=0;const l=new F(0,Uu,10),c={},h=new F,d=new F,u=new F;let f=-1,g=-1,v=0,m=0,p=0,y=0,w=0,_=0,S=0,b=0,R=!1,x=null;function M(I,U){let z=0;try{z=n(I,U)}catch{z=0}return(Number.isFinite(z)?z:0)+Uu}function T(I){for(const U of s){if(typeof U.blockWhen=="function"){let X=!1;try{X=!!U.blockWhen()}catch{X=!1}if(X)continue}const z=U.x0-.35,W=U.x1+.35,O=U.z0-.35,G=U.z1+.35;if(I.x>z&&I.x<W&&I.z>O&&I.z<G){const X=I.x-z,_t=W-I.x,yt=I.z-O,kt=G-I.z,Zt=Math.min(X,_t,yt,kt);Zt===X?I.x=z:Zt===_t?I.x=W:Zt===yt?I.z=O:I.z=G}}}function A(I,U){x||(x=document.createElement("div"),x.style.cssText="position:fixed;width:96px;height:96px;border-radius:50%;border:2px solid rgba(255,255,255,.35);background:rgba(255,255,255,.06);z-index:30;pointer-events:none;display:none;",document.body.appendChild(x)),x.style.display="block",x.style.left=I-48+"px",x.style.top=U-48+"px"}function P(){try{x&&(x.style.display="none")}catch{}}function D(I,U){return r=!!I,r?(U&&(l.set(U.x??0,0,U.z??10),o=U.yaw??0,a=0),l.y=M(l.x,l.z),i.position.copy(l),i.rotation.order="YXZ",i.rotation.set(a,o,0)):P(),r}try{window.addEventListener("keydown",O=>{c[O.code]=!0}),window.addEventListener("keyup",O=>{c[O.code]=!1});let I=-1,U=0,z=0;t.addEventListener("pointerdown",O=>{r&&(O.pointerType==="touch"?O.clientX<window.innerWidth/2&&f<0?(f=O.pointerId,v=p=O.clientX,m=y=O.clientY,A(v,m)):g<0&&(g=O.pointerId,w=S=O.clientX,_=b=O.clientY,R=!0):I<0&&(I=O.pointerId,U=O.clientX,z=O.clientY))});const W=O=>{O.pointerId===f&&(f=-1,P()),O.pointerId===g&&(g=-1,R=!1),O.pointerId===I&&(I=-1)};window.addEventListener("pointerup",W),window.addEventListener("pointercancel",W),window.addEventListener("pointermove",O=>{r&&(O.pointerId===f?(p=O.clientX,y=O.clientY):O.pointerId===g&&R?(o-=(O.clientX-S)*.0042,a-=(O.clientY-b)*.0042,a=Math.max(-1.48,Math.min(1.48,a)),S=O.clientX,b=O.clientY):O.pointerId===I&&O.buttons&&(o-=(O.clientX-U)*.0042,a-=(O.clientY-z)*.0042,a=Math.max(-1.48,Math.min(1.48,a)),U=O.clientX,z=O.clientY))})}catch{}function L(I){if(!r)return;let U=Number(I);(!Number.isFinite(U)||U<0)&&(U=0),U>.1&&(U=.1);let z=0,W=0;(c.KeyW||c.ArrowUp)&&(W+=1),(c.KeyS||c.ArrowDown)&&(W-=1),(c.KeyA||c.ArrowLeft)&&(z-=1),(c.KeyD||c.ArrowRight)&&(z+=1),f>=0&&(z+=(p-v)/40,W-=(y-m)/40);const O=Math.hypot(z,W);O>1&&(z/=O,W/=O),h.set(-Math.sin(o),0,-Math.cos(o)),d.set(-h.z,0,h.x),u.set(0,0,0).addScaledVector(h,W).addScaledVector(d,z),u.lengthSq()>0&&(u.normalize().multiplyScalar(ay*U),l.x+=u.x,l.z+=u.z),T(l);const G=M(l.x,l.z);l.y+=(G-l.y)*Math.min(1,U*10+(U===0?1:0)),i.position.copy(l),i.rotation.order="YXZ";const X=1-Math.exp(-9*(U||.016));i.rotation.y+=(o-i.rotation.y)*X,i.rotation.x+=(a-i.rotation.x)*X,i.rotation.z=0,i.fov=55,i.updateProjectionMatrix()}return{update:L,setEnabled:D,get enabled(){return r}}}function cy(i){i=i||{};var t=i.daytime||{},e=i.weather||{},n=i.cine||{},s=i.hudEl||null,r=i.audio||null,o=["DAWN","DAY","GOLDEN","SUNSET","BLUE_HOUR","NIGHT","MOONLIT","RAIN_NIGHT","MIST_NIGHT"],a={DAWN:"DAWN",DAY:"DAY",GOLDEN:"GOLDEN",SUNSET:"SUNSET",BLUE_HOUR:"BLUE",NIGHT:"NIGHT",MOONLIT:"MOON",RAIN_NIGHT:"RAIN",MIST_NIGHT:"MIST"},l=["clear","windy","rainy","misty","snow"],c={clear:"CLEAR",windy:"WINDY",rainy:"RAIN",misty:"MIST",snow:"SNOW"},h=["low","medium","high","cinematic"],d={low:"LOW",medium:"MED",high:"HIGH",cinematic:"CINE"},u={low:"off",medium:"off",high:"off",cinematic:"high"},f="20260911";function g(ot){return typeof ot=="function"?ot():ot}function v(ot,Ot){try{return ot==null?Ot:String(ot)}catch{return Ot}}function m(ot,Ot,Qt){var de=document.createElement(ot);return Ot&&(de.className=Ot),Qt!=null&&(de.textContent=Qt),de}function p(ot,Ot){try{ot.addEventListener("click",function(Qt){try{Qt.stopPropagation()}catch{}try{Ot()}catch{}})}catch{}}var y=!1;try{y=window.innerWidth<700}catch{y=!0}var w=y,_=!1,S="time",b=y?"medium":"high",R=!0,x=!1,M=!1,T="",A="",P=0,D=!1;try{D=/[?&]dev=1\b/.test(window.location.search||"")}catch{D=!1}var L='.tsuki-root{position:fixed;inset:0;z-index:20;pointer-events:none;font-family:system-ui,-apple-system,"Hiragino Sans","Noto Sans JP",sans-serif;color:#f2efe6;}.tsuki-root button,.tsuki-root input,.tsuki-l1,.tsuki-l2{pointer-events:auto;}.tsuki-l1{position:fixed;top:calc(env(safe-area-inset-top,0px) + 12px);right:calc(env(safe-area-inset-right,0px) + 12px);background:rgba(9,11,18,.55);-webkit-backdrop-filter:blur(18px) saturate(1.4);backdrop-filter:blur(18px) saturate(1.4);border:1px solid rgba(255,255,255,.14);border-radius:14px;box-shadow:0 4px 18px rgba(0,0,0,.35);padding:8px 10px;min-width:172px;max-width:62vw;display:flex;align-items:center;gap:8px;}.tsuki-title{font-size:12px;letter-spacing:.22em;font-weight:650;white-space:nowrap;}.tsuki-title .jp{font-weight:400;opacity:.75;letter-spacing:.35em;margin-left:6px;}#du-state{font-size:11px;letter-spacing:.08em;opacity:.85;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.tsuki-chev{margin-left:auto;min-width:44px;min-height:44px;border-radius:10px;border:1px solid rgba(255,255,255,.16);background:rgba(255,255,255,.07);color:#f2efe6;font-size:15px;line-height:1;}.tsuki-l2{position:fixed;top:calc(env(safe-area-inset-top,0px) + 96px);right:calc(env(safe-area-inset-right,0px) + 12px);width:300px;max-height:calc(100vh - 130px);overflow-y:auto;-webkit-overflow-scrolling:touch;background:rgba(9,11,18,.72);-webkit-backdrop-filter:blur(18px) saturate(1.4);backdrop-filter:blur(18px) saturate(1.4);border:1px solid rgba(255,255,255,.12);border-radius:16px;box-shadow:0 8px 28px rgba(0,0,0,.45);padding:6px 6px calc(env(safe-area-inset-bottom,0px) + 8px);}.tsuki-sec{border-top:1px solid rgba(255,255,255,.08);}.tsuki-sec:first-child{border-top:none;}.tsuki-sec-head{display:flex;width:100%;min-height:44px;align-items:center;background:none;border:none;color:#f2efe6;font-size:11px;letter-spacing:.24em;padding:6px 10px;}.tsuki-sec-head .dot{width:6px;height:6px;border-radius:50%;background:#c8a86a;margin-right:8px;opacity:.9;}.tsuki-sec-head .st{margin-left:auto;opacity:.55;font-size:10px;letter-spacing:.1em;}.tsuki-sec-body{padding:2px 8px 12px;display:none;}.tsuki-sec.open .tsuki-sec-body{display:block;}.tsuki-row{display:flex;flex-wrap:wrap;gap:6px;}.tsuki-seg{flex:1 1 30%;min-height:44px;min-width:44px;border-radius:9px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);color:#f2efe6;font-size:11px;letter-spacing:.06em;}.tsuki-seg.on{background:rgba(200,168,106,.22);border-color:rgba(200,168,106,.65);}.tsuki-shotname{font-size:17px;letter-spacing:.04em;margin:2px 2px 0;font-weight:650;}.tsuki-mood{font-size:11px;letter-spacing:.2em;opacity:.7;margin:2px;}.tsuki-counter{font-size:11px;letter-spacing:.14em;opacity:.55;margin:0 2px 8px;}.tsuki-trans{display:flex;gap:6px;margin-bottom:8px;}.tsuki-trans button{flex:1;min-height:44px;border-radius:9px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);color:#f2efe6;font-size:12px;}.tsuki-present-btn{width:100%;min-height:44px;border-radius:9px;border:1px solid rgba(200,168,106,.6);background:rgba(200,168,106,.14);color:#f2efe6;font-size:11px;letter-spacing:.22em;margin-bottom:8px;}.tsuki-l3{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:6px;}.tsuki-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px;}.tsuki-grid button{min-height:44px;border-radius:8px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04);color:#f2efe6;font-size:11px;text-align:left;padding:0 10px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.tsuki-grid button.on{background:rgba(200,168,106,.22);border-color:rgba(200,168,106,.65);}.tsuki-track{font-size:12px;margin:2px 2px 8px;opacity:.9;}.tsuki-vol{display:flex;align-items:center;gap:8px;margin:0 2px 6px;}.tsuki-vol input{flex:1;min-height:44px;}.tsuki-note{font-size:11px;line-height:1.5;opacity:.65;margin:4px 2px;font-family:ui-monospace,Menlo,monospace;}.tsuki-about{font-size:11px;line-height:1.9;letter-spacing:.18em;opacity:.8;padding:2px;}.tsuki-root.tsuki-present .tsuki-l1,.tsuki-root.tsuki-present .tsuki-l2{display:none;}.tsuki-anim{transition:opacity .22s ease-out,transform .22s ease-out;}.tsuki-dev{position:fixed;right:calc(env(safe-area-inset-right,0px) + 10px);bottom:calc(env(safe-area-inset-bottom,0px) + 10px);z-index:21;pointer-events:none;background:rgba(0,0,0,.72);border:1px solid rgba(255,255,255,.14);border-radius:8px;padding:8px 10px;font-family:ui-monospace,Menlo,monospace;font-size:10.5px;line-height:1.65;color:#cfe3cf;white-space:pre;max-width:70vw;overflow:hidden;}@media (max-width:700px) and (orientation:portrait){.tsuki-l2{top:auto;bottom:0;right:0;left:0;width:auto;border-radius:16px 16px 0 0;max-height:45vh;padding-bottom:calc(env(safe-area-inset-bottom,0px) + 10px);}.tsuki-l1{max-width:calc(100vw - 24px);}}@media (max-width:700px) and (orientation:landscape){.tsuki-l2{width:278px;max-height:72vh;top:calc(env(safe-area-inset-top,0px) + 88px);}}';try{var I=document.createElement("style");I.setAttribute("data-tsuki","1"),I.textContent=L,document.head.appendChild(I)}catch{}var U=m("div","tsuki-root tsuki-anim"),z=m("div","tsuki-l1"),W=m("div",null),O=m("div","tsuki-title","TSUKIMORI");try{var G=m("span","jp","月森");O.appendChild(G)}catch{}var X=m("div",null);try{X.id="du-state"}catch{}W.appendChild(O),W.appendChild(X);var _t=m("button","tsuki-chev","▾");try{_t.setAttribute("aria-label","toggle panel")}catch{}z.appendChild(W),z.appendChild(_t),U.appendChild(z);var yt=m("div","tsuki-l2");U.appendChild(yt);var kt={};function Zt(ot,Ot){var Qt=m("div","tsuki-sec"),de=m("button","tsuki-sec-head");try{de.setAttribute("aria-expanded","false")}catch{}var Ve=m("span","dot"),wn=m("span",null,Ot),Yn=m("span","st","");de.appendChild(Ve),de.appendChild(wn),de.appendChild(Yn);var ai=m("div","tsuki-sec-body");return Qt.appendChild(de),Qt.appendChild(ai),yt.appendChild(Qt),kt[ot]={sec:Qt,head:de,tag:Yn},p(de,function(){jt(S===ot?"":ot)}),ai}function jt(ot){S=ot;try{for(var Ot in kt)if(Object.prototype.hasOwnProperty.call(kt,Ot)){var Qt=Ot===S,de=kt[Ot];de.sec.className="tsuki-sec"+(Qt?" open":"");try{de.head.setAttribute("aria-expanded",Qt?"true":"false")}catch{}}}catch{}}var j=Zt("time","TIME"),nt=m("div","tsuki-row");j.appendChild(nt);var V={};o.forEach(function(ot){var Ot=m("button","tsuki-seg",a[ot]||ot);try{Ot.title=ot}catch{}nt.appendChild(Ot),V[ot]=Ot,p(Ot,function(){try{t.set(ot)}catch{}Qe()})});var rt=Zt("weather","WEATHER"),J=m("div","tsuki-row");rt.appendChild(J);var ut={};l.forEach(function(ot){var Ot=m("button","tsuki-seg",c[ot]||ot.toUpperCase());J.appendChild(Ot),ut[ot]=Ot,p(Ot,function(){try{e.setState(ot)}catch{}Qe()})});var xt=Zt("cine","CINEMATIC"),$=m("div","tsuki-shotname","—"),tt=m("div","tsuki-mood","—"),ct=m("div","tsuki-counter","—");xt.appendChild($),xt.appendChild(tt),xt.appendChild(ct);var pt=m("div","tsuki-trans"),mt=m("button",null,"◀"),gt=m("button",null,"❚❚ ADV"),St=m("button",null,"▶"),vt=m("button",null,"MODE"),zt=m("button",null,"EXPLORE"),B=m("button",null,"AUTO");[mt,gt,St,vt,zt,B].forEach(function(ot){pt.appendChild(ot)}),xt.appendChild(pt);var te=m("button","tsuki-present-btn","ENTER CINEMATIC");xt.appendChild(te);var le=m("div","tsuki-l3"),N=m("div","tsuki-grid");le.appendChild(N),xt.appendChild(le);var E=[];function Y(){try{if(n&&Object.prototype.toString.call(n.names)==="[object Array]"&&n.names.length)return n.names}catch{}for(var ot=[],Ot=0;Ot<12;Ot++)ot.push("SHOT "+("0"+(Ot+1)).slice(-2));return ot}p(mt,function(){try{n.prev()}catch{}Qe()}),p(St,function(){try{n.next()}catch{}Qe()}),p(gt,function(){try{n.toggleAdvance()}catch{}R=!R,Qe()}),p(vt,function(){try{n.setMode(g(n.mode)==="cine"?"free":"cine")}catch{}Qe()});var Z=!1;p(zt,function(){Z=!Z;try{window.dispatchEvent(new CustomEvent("tsuki-explore",{detail:Z}))}catch{}try{zt.textContent=Z?"EXIT EXPLORE":"EXPLORE"}catch{}Qe()}),p(B,function(){try{t.toggleAuto()}catch{}x=!x,Qe()}),p(te,function(){hn(!_)});function it(){try{N.textContent="",E=[];for(var ot=Y(),Ot=0;Ot<ot.length;Ot++)(function(Qt,de){var Ve=m("button",null,("0"+(Qt+1)).slice(-2)+" · "+de);N.appendChild(Ve),E.push(Ve),p(Ve,function(){try{n.setMode("cine")}catch{}try{n.goTo(Qt,2.5,!0)}catch{}Qe()})})(Ot,v(ot[Ot],"SHOT"))}catch{}}it();var Mt=Zt("audio","AUDIO"),bt=m("div","tsuki-track","♫ Suzume");Mt.appendChild(bt);var st=m("div","tsuki-row"),at=m("button","tsuki-seg","MUSIC OFF");st.appendChild(at),Mt.appendChild(st);var At=m("div","tsuki-vol"),qt=m("span",null,"VOL");try{qt.style.fontSize="11px",qt.style.opacity=".6"}catch{}var wt=m("input",null);try{wt.type="range",wt.min="0",wt.max="100",wt.value="80",wt.setAttribute("aria-label","music volume")}catch{}At.appendChild(qt),At.appendChild(wt),Mt.appendChild(At);var Et=m("div","tsuki-note","");if(Mt.appendChild(Et),!r){try{at.disabled=!0,wt.disabled=!0}catch{}Et.textContent="audio offline — running silent"}p(at,function(){if(r){var ot=!M;try{var Ot=r.state?r.state():null;Ot&&typeof Ot.enabled=="boolean"&&(ot=!Ot.enabled)}catch{}try{r.setEnabled(ot)}catch{}M=ot,Qe()}});try{wt.addEventListener("input",function(){if(r)try{var ot=parseFloat(wt.value)/100;ot>=0||(ot=0),ot>1&&(ot=1),r.setVolume(ot)}catch{}})}catch{}var Kt=m("button","tsuki-seg","+ ADD TRACK");try{Kt.title="Play your own audio file through the village radio"}catch{}st.appendChild(Kt);var Vt=null;try{Vt=document.createElement("input"),Vt.type="file",Vt.accept="audio/*,.mp3,.m4a,.ogg,.wav,.flac",Vt.style.display="none",document.body.appendChild(Vt),Vt.addEventListener("change",function(){try{var ot=Vt.files&&Vt.files[0];if(!ot||!r||typeof r.loadCustom!="function")return;var Ot=URL.createObjectURL(ot);if(r.loadCustom(Ot,ot.name.replace(/\.[^.]+$/,""))){try{r.setEnabled(!0)}catch{}M=!0}}catch{}try{Vt.value=""}catch{}Qe()})}catch{Vt=null}p(Kt,function(){if(r)try{Vt&&Vt.click()}catch{}});var ee=Zt("quality","QUALITY"),H=m("div","tsuki-row");ee.appendChild(H);var Tt={};h.forEach(function(ot){var Ot=m("button","tsuki-seg",d[ot]);H.appendChild(Ot),Tt[ot]=Ot,p(Ot,function(){lt(ot)})});function lt(ot){b=ot;try{window.dispatchEvent(new CustomEvent("tsuki-quality",{detail:ot}))}catch{}try{window.__post&&typeof window.__post.setQuality=="function"&&window.__post.setQuality(u[ot]||"off")}catch{}Qe()}var Rt=Zt("about","ABOUT"),Ut=m("div","tsuki-about","TSUKIMORI 月森 / THE MOON FOREST / LGCY STUDIOS / LGCY AI");Rt.appendChild(Ut);var ft=m("div","tsuki-note","BUILD "+ie+" · checking…");Rt.appendChild(ft);try{var Xt=null;try{Xt=new AbortController}catch{Xt=null}var Yt=setTimeout(function(){try{Xt&&Xt.abort()}catch{}},8e3),Re=Xt?{signal:Xt.signal}:{};fetch("https://api.github.com/repos/krshforever/tsukimori/commits/main?per_page=1",Re).then(function(ot){try{clearTimeout(Yt)}catch{}return ot.ok?ot.json():null}).then(function(ot){var Ot=ot&&ot.sha?String(ot.sha).slice(0,7):null,Qt=(ie.split(" ")[0]||"").toLowerCase(),de;Ot?Qt&&Ot.toLowerCase()===Qt?de="BUILD "+ie+" · ● CURRENT":de="BUILD "+ie+" · ● UPDATE AVAILABLE ("+Ot+")":de="BUILD "+ie+" · ● OFFLINE";try{ft.textContent=de}catch{}try{window.__updateCheck={latest:Ot,current:Qt,build:ie}}catch{}}).catch(function(){try{clearTimeout(Yt)}catch{}try{ft.textContent="BUILD "+ie+" · ● OFFLINE"}catch{}try{window.__updateCheck={latest:null,current:null,build:ie}}catch{}})}catch{try{ft.textContent="BUILD "+ie}catch{}}var ie="dev";try{ie="2c86f7f 2026-09-13"}catch{}var He=null;if(D)try{He=m("pre","tsuki-dev","dev…"),document.body.appendChild(He)}catch{He=null}function hn(ot){_=!!ot;try{if(_){try{var Ot=document.getElementById("caption");Ot&&(A=Ot.style.display,Ot.style.display="none")}catch{}try{s&&(T=s.style.display,s.style.display="none")}catch{}U.className="tsuki-root tsuki-anim tsuki-present";try{te.textContent="EXIT CINEMATIC"}catch{}}else{try{var Qt=document.getElementById("caption");Qt&&(Qt.style.display=A||"")}catch{}try{s&&(s.style.display=T||"")}catch{}U.className="tsuki-root tsuki-anim";try{te.textContent="ENTER CINEMATIC"}catch{}}}catch{}Qe()}function _a(){w=!w;try{yt.style.display=w?"none":"",_t.textContent=w?"▸":"▾"}catch{}}p(_t,_a);function tr(ot){try{if(ot&&ot.target&&ot.target.closest){var Ot=ot.target;if(Ot.closest(".tsuki-l2")||Ot.closest("input")||Ot.closest("select")||Ot.closest("textarea"))return}}catch{}hn(!_)}try{window.addEventListener("dblclick",tr)}catch{}try{window.addEventListener("touchend",function(ot){try{var Ot=Date.now();Ot-P<350?(P=0,tr(ot)):P=Ot}catch{}},{passive:!0})}catch{}try{document.addEventListener("keydown",function(ot){try{ot&&ot.key==="Escape"&&_&&hn(!1)}catch{}})}catch{}function Xr(){try{return v(g(t.state),"NIGHT")}catch{return"NIGHT"}}function er(){try{return v(g(e.state),"clear")}catch{return"clear"}}function Qe(){try{var ot=Xr(),Ot=er(),Qt=a[ot]||ot,de=c[Ot]||String(Ot).toUpperCase(),Ve="FREE";try{Ve=v(g(n.label),"FREE")||"FREE"}catch{}var wn=0,Yn=Y().length;try{wn=parseInt(n.idx,10),wn>=0||(wn=0)}catch{}try{Yn=parseInt(n.count,10)||Y().length}catch{}var ai=("0"+(wn+1)).slice(-2),Bi=("0"+Yn).slice(-2);try{X.textContent=Qt+" · "+de+" · "+Ve}catch{}try{var qr="";try{var fs=window.__perf?window.__perf():null;fs&&(qr=" <"+fs.calls+"c "+fs.triangles+"t "+fs.fps+"f>")}catch{}s&&(s.textContent="TSUKIMORI 月森 — "+Qt+" · "+de+" · "+Ve+" | SHOT "+ai+"/"+Bi+qr)}catch{}try{var xa=Y();$.textContent=v(xa[wn]||Ve,Ve),tt.textContent=Qt+" · "+de,ct.textContent="SHOT "+ai+"/"+Bi}catch{}try{for(var ps=0;ps<E.length;ps++)E[ps].className=ps===wn?"on":""}catch{}try{for(var ms in V)Object.prototype.hasOwnProperty.call(V,ms)&&(V[ms].className="tsuki-seg"+(ms===ot?" on":""));for(var C in ut)Object.prototype.hasOwnProperty.call(ut,C)&&(ut[C].className="tsuki-seg"+(C===Ot?" on":""));for(var k in Tt)Object.prototype.hasOwnProperty.call(Tt,k)&&(Tt[k].className="tsuki-seg"+(k===b?" on":""))}catch{}try{var Q=v(g(n.mode),"");vt.textContent="MODE "+(Q?Q.toUpperCase():"—"),gt.textContent=(R?"❚❚":"▶")+" ADV",B.textContent="AUTO "+(x?"ON":"OFF")}catch{}try{kt.time&&(kt.time.tag.textContent=Qt),kt.weather&&(kt.weather.tag.textContent=de),kt.cine&&(kt.cine.tag.textContent=ai+"/"+Bi),kt.quality&&(kt.quality.tag.textContent=d[b]||"")}catch{}try{if(r&&typeof r.state=="function"){var q=null;try{q=r.state()}catch{q=null}q&&(typeof q.enabled=="boolean"&&(M=q.enabled),bt.textContent="♫ "+v(q.track,"Suzume")+(q.playing?" — PLAYING":""),at.textContent=M?"MUSIC ON":"MUSIC OFF",at.className="tsuki-seg"+(M?" on":""),Et.textContent=q.missing?"drop audio/suzume.mp3 into public/audio/":"")}else r&&(at.textContent=M?"MUSIC ON":"MUSIC OFF",Et.textContent="")}catch{}if(D&&He){var K=[];try{var Pt="n/a",Ft="n/a",Ct="n/a";try{var Nt=typeof window.__perf=="function"?window.__perf():window.__perf;Nt&&(Nt.fps!==void 0&&(Pt=String(Nt.fps)),Nt.calls!==void 0&&(Ft=String(Nt.calls)),Nt.tris!==void 0&&(Ct=String(Nt.tris)),Nt.draws!==void 0&&Ft==="n/a"&&(Ft=String(Nt.draws)),Nt.triangles!==void 0&&Ct==="n/a"&&(Ct=String(Nt.triangles)))}catch{}var Wt="n/a";try{window.__post&&(typeof window.__post.quality=="string"?Wt=window.__post.quality:typeof window.__post.getQuality=="function"?Wt=String(window.__post.getQuality()):typeof window.__post.current=="string"&&(Wt=window.__post.current))}catch{}var se="n/a",ce="n/a";try{window.__cam&&(window.__cam.pos&&window.__cam.pos.length>=3&&(se=window.__cam.pos[0].toFixed(1)+","+window.__cam.pos[1].toFixed(1)+","+window.__cam.pos[2].toFixed(1)),window.__cam.tgt&&window.__cam.tgt.length>=3&&(ce=window.__cam.tgt[0].toFixed(1)+","+window.__cam.tgt[1].toFixed(1)+","+window.__cam.tgt[2].toFixed(1)))}catch{}K.push("FPS "+Pt+"  calls "+Ft+"  tris "+Ct);try{var Bt=null;try{Bt=window.__updateCheck||null}catch{}var ve=Bt?Bt.latest?Bt.latest.toLowerCase()===String(Bt.current||"").toLowerCase()?"current":"BEHIND("+Bt.latest+")":"offline":"";K.push("build "+ie+(ve?"  "+ve:""))}catch{try{K.push("build "+ie)}catch{}}K.push("gl WebGL2  post "+Wt+"  seed "+f),K.push("cam "+se+"  tgt "+ce),K.push(Qt+" · "+de+" · "+Ve),He.textContent=K.join(`
`)}catch{}}}catch{}}try{document.body.appendChild(U)}catch{}try{yt.style.display=w?"none":"",_t.textContent=w?"▸":"▾"}catch{}jt(S),Qe();var ds=null;try{ds=setInterval(Qe,250)}catch{}function Yr(){try{ds&&clearInterval(ds)}catch{}try{window.removeEventListener("dblclick",tr)}catch{}try{U&&U.parentNode&&U.parentNode.removeChild(U)}catch{}try{He&&He.parentNode&&He.parentNode.removeChild(He)}catch{}}return{root:U,refresh:Qe,destroy:Yr,setQuality:lt,setPresent:hn}}const al={geo:null};function qd(){return al.geo||(al.geo=new Dt(1,1,1)),al.geo}const Ou={A:[[0,0,0,4],[2,0,2,4],[0,4,2,4],[0,2,2,2]],B:[[0,0,0,4],[0,4,2,4],[0,2,2,2],[0,0,2,0],[2,4,2,2],[2,2,2,0]],C:[[2,4,0,4],[0,4,0,0],[0,0,2,0]],D:[[0,0,0,4],[0,4,2,4],[2,4,2,0],[2,0,0,0]],E:[[2,4,0,4],[0,4,0,0],[0,0,2,0],[0,2,2,2]],F:[[2,4,0,4],[0,4,0,0],[0,2,2,2]],G:[[2,4,0,4],[0,4,0,0],[0,0,2,0],[2,0,2,2],[2,2,1,2]],H:[[0,0,0,4],[2,0,2,4],[0,2,2,2]],I:[[0,4,2,4],[1,4,1,0],[0,0,2,0]],J:[[2,4,2,0],[2,0,0,0],[0,0,0,2]],K:[[0,0,0,4],[2,4,0,2],[0,2,2,0]],L:[[0,4,0,0],[0,0,2,0]],M:[[0,0,0,4],[0,4,1,2],[1,2,2,4],[2,4,2,0]],N:[[0,0,0,4],[0,4,2,0],[2,0,2,4]],O:[[0,0,0,4],[0,4,2,4],[2,4,2,0],[2,0,0,0]],P:[[0,0,0,4],[0,4,2,4],[2,4,2,2],[2,2,0,2]],Q:[[0,0,0,4],[0,4,2,4],[2,4,2,0],[2,0,0,0],[1,1,2,0]],R:[[0,0,0,4],[0,4,2,4],[2,4,2,2],[2,2,0,2],[1,2,2,0]],S:[[2,4,0,4],[0,4,0,2],[0,2,2,2],[2,2,2,0],[2,0,0,0]],T:[[0,4,2,4],[1,4,1,0]],U:[[0,4,0,0],[0,0,2,0],[2,0,2,4]],V:[[0,4,1,0],[1,0,2,4]],W:[[0,4,0,0],[0,0,1,2],[1,2,2,0],[2,0,2,4]],X:[[0,0,2,4],[0,4,2,0]],Y:[[0,4,1,2],[2,4,1,2],[1,2,1,0]],Z:[[0,4,2,4],[2,4,0,0],[0,0,2,0]],0:[[0,0,0,4],[0,4,2,4],[2,4,2,0],[2,0,0,0],[0,0,2,4]],1:[[1,4,1,0],[0,0,2,0]],2:[[0,4,2,4],[2,4,2,2],[2,2,0,2],[0,2,0,0],[0,0,2,0]],3:[[0,4,2,4],[2,4,2,0],[0,2,2,2],[0,0,2,0]],4:[[0,4,0,2],[0,2,2,2],[2,4,2,0]],5:[[2,4,0,4],[0,4,0,2],[0,2,2,2],[2,2,2,0],[2,0,0,0]],6:[[2,4,0,4],[0,4,0,0],[0,0,2,0],[0,2,2,2],[2,2,2,0]],7:[[0,4,2,4],[2,4,0,0]],8:[[0,0,0,4],[0,4,2,4],[2,4,2,0],[2,0,0,0],[0,2,2,2]],9:[[2,0,0,0],[0,0,0,4],[0,4,2,4],[2,4,2,0],[0,2,2,2]]," ":[],"•":[[1,2,1,2]],".":[[1,0,1,0]],"-":[[0,2,2,2]],"/":[[0,0,2,4]],"&":[[0,0,0,4],[0,4,2,4],[2,4,2,2],[0,2,2,0],[2,0,0,0]],"©":null,月:[[0,0,0,4],[2,0,2,4],[0,4,2,4],[0,0,2,0],[0,2.6,2,2.6],[0,1.3,2,1.3]],森:"COMPOUND_MORI"};function hy(){const i=[],t=(e,n,s,r)=>{i.push([e,n,e,n+r]),i.push([e-s/2,n+r,e+s/2,n+r]),i.push([e-s/2,n+r*.55,e+s/2,n+r*.55]),i.push([e-s*.28,n,e+s*.28,n])};return t(1,2.2,1.7,1.8),t(.35,0,1.1,1.9),t(1.65,0,1.1,1.9),i}function uy(i){return i==="森"?hy():i==="©"?[[.2,0,.2,4],[.2,4,1.8,4],[1.8,4,1.8,0],[1.8,0,.2,0],[.5,1.2,1.5,1.2],[.5,2.8,1.5,2.8]]:Ou[i]??Ou["-"]}function $i(i,{size:t=.22,tracking:e=.32,thickness:n=.13,depth:s=.035}={}){const r=2*(t/4)+e*t,o=t/4,a=t/4,l=[];let c=0;const h=String(i).toUpperCase();for(const d of h){if(d===" "){c+=r;continue}for(const[u,f,g,v]of uy(d)){const m=u===g&&f===v,p=c+u*o,y=f*a,w=c+g*o,_=v*a,S=w-p,b=_-y,R=Math.hypot(S,b),x=n*t;m?l.push({x:p,y,len:x*1.1,ang:0,t:x,sq:!0}):l.push({x:(p+w)/2,y:(y+_)/2,len:R+x*.9,ang:Math.atan2(b,S),t:x})}c+=r}return{strokes:l,width:Math.max(0,c-e*t),depth:s}}function hc(i,t,{depth:e=.035}={}){const n=[];for(const d of i){const{strokes:u}=$i(d.text,d);for(const f of u)n.push({...f,ox:d.ox||0,oy:d.oy||0,oz:d.oz||0,depth:d.depth??e})}const s=qd(),r=new ze(s,t,Math.max(1,n.length)),o=new ae,a=new Wn,l=new vn,c=new F,h=new F;return n.forEach((d,u)=>{l.set(0,0,d.ang),a.setFromEuler(l),c.set(d.ox+d.x,d.oy+d.y,d.oz),h.set(d.len,d.t,d.depth),d.sq&&h.set(d.t,d.t,d.depth*.7),o.compose(c,a,h),r.setMatrixAt(u,o)}),r.instanceMatrix.needsUpdate=!0,r.castShadow=!1,r.receiveShadow=!1,r.frustumCulled=!0,r}function Kd(i){const t=(e,n=.85,s={})=>new dt({color:e,roughness:n,metalness:0,...s});return{post:i?.woodAged||i?.woodDark||i?.wood||t(3812382,.9),beam:i?.woodDark||i?.woodAged||i?.wood||t(3023640,.9),board:i?.woodNew||i?.wood||t(4864550,.85),stone:i?.stone||i?.stoneDark||i?.rock||t(9078136,.95),bronze:i?.bronze||i?.brass||i?.iron||t(9202490,.45,{metalness:.85}),glyphMain:i?.brass||t(13215850,.38,{metalness:.9}),glyphSub:i?.bronze||t(10124623,.5,{metalness:.8}),wash:new dt({color:2826520,emissive:16763274,emissiveIntensity:.55,roughness:.6})}}function Ln(i,t,e,n,s,r,o,a=0){const l=new et(qd(),n);return l.scale.set(i,t,e),l.position.set(s,r,o),l.rotation.y=a,l.castShadow=!0,l.receiveShadow=!0,l}function Zd(i,t){const e=new si(1,20),n=new ri({color:0,transparent:!0,opacity:.28,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),s=new et(e,n);return s.rotation.x=-Math.PI/2,s.position.y=.03,s.scale.set(i,t,1),s.renderOrder=2,s}function Fu(i,t,e,n){const s=new si(1,12),r=new et(s,new dt({color:4872755,roughness:1}));return r.rotation.x=-Math.PI/2,r.position.set(t,.035,e),r.scale.set(i,i*.8,1),r.receiveShadow=!0,r.renderOrder=1,r}function dy(i,t={}){const e=Kd(i),n=new $t;n.name="tsukimori-main-sign";const s=3.4,r=2.5,o=.16;for(const R of[-1,1])n.add(Ln(.5,.28,.5,e.stone,R*(s/2),.14,0)),n.add(Ln(o,r,o,e.post,R*(s/2),.28+r/2,0)),n.add(Ln(.22,.06,.22,e.bronze,R*(s/2),.3,0));n.add(Ln(s+.5,.14,.2,e.beam,0,.28+r+.07,0)),n.add(Ln(s+.3,.1,.12,e.beam,0,.62,0));const a=s-.2,l=1.35,c=1.72,h=.02,d=Ln(a,l,.07,e.board,0,c,h);n.add(d),n.add(Ln(a+.1,.05,.1,e.beam,0,c+l/2+.03,h)),n.add(Ln(a+.1,.05,.1,e.beam,0,c-l/2-.03,h));for(const R of[-1,1])for(const x of[-1,1])n.add(Ln(.09,.09,.1,e.bronze,R*(a/2-.05),c+x*(l/2-.05),h));const u=h+.035+.075,f=R=>-R/2,g=$i("LGCY STUDIOS PRESENTS",{size:.115,tracking:.3}),v=$i("TSUKIMORI",{size:.3,tracking:.3}),m=$i("月森",{size:.3,tracking:.3}),p=$i("THE MOON FOREST",{size:.13,tracking:.3}),y=$i("BUILT WITH LGCY AI",{size:.1,tracking:.3}),w=hc([{text:"TSUKIMORI",size:.3,tracking:.3,ox:f(v.width),oy:c+.28,oz:u},{text:"月森",size:.3,tracking:.3,ox:f(m.width),oy:c-.14,oz:u}],e.glyphMain),_=hc([{text:"LGCY STUDIOS PRESENTS",size:.115,tracking:.3,ox:f(g.width),oy:c+.52,oz:u-.012},{text:"THE MOON FOREST",size:.13,tracking:.3,ox:f(p.width),oy:c-.44,oz:u-.012},{text:"BUILT WITH LGCY AI",size:.1,tracking:.3,ox:f(y.width),oy:c-.58,oz:u-.012}],e.glyphSub);n.add(w,_);const S=Ln(a-.2,.02,.02,e.wash,0,c+l/2-.06,h+.06);S.castShadow=!1,n.add(S);const b=new L0(16767392,6,7,.55,.7,1.6);return b.position.set(0,2.6,1.6),b.target.position.set(0,c-.1,0),b.castShadow=!1,n.add(b,b.target),n.userData.signLight=b,n.userData.washMat=e.wash,n.add(Zd(2.3,.8)),n.add(Fu(.3,-s/2,.32),Fu(.26,s/2,-.3)),n.position.set(...t.pos||[6.5,0,14.5]),n.rotation.y=t.ry??-.5,n}function fy(i,t={}){const e=Kd(i),n=new $t;n.name="lgcy-studio-plaque";for(const f of[-1,1])n.add(Ln(.07,.62,.07,e.post,f*.42,.31,0));const s=Ln(1.05,.52,.04,e.bronze,0,.62,.02);s.rotation.x=-.14,n.add(s);const r=.02+.02+.045,a=[{text:"LGCY STUDIOS",size:.085,tracking:.3,oy:.78},{text:"WORLD DESIGNED & BUILT WITH LGCY AI",size:.038,tracking:.28,oy:.66},{text:"PROCEDURAL ENVIRONMENT • CODE • AI",size:.038,tracking:.28,oy:.585},{text:"© 2026 LGCY STUDIOS",size:.038,tracking:.28,oy:.51}].map(f=>({...f,ox:-$i(f.text,f).width/2,oz:r})),l=hc(a,e.glyphSub,{depth:.014});l.rotation.x=-.14,l.position.z=.005,n.add(l);const c=document.createElement("canvas");c.width=256,c.height=16;const h=c.getContext("2d");h.fillStyle="#3a2c16",h.fillRect(0,0,256,16),h.fillStyle="#d8b988",h.font="9px sans-serif",h.textAlign="center",h.fillText("tsukimori — moon forest district",128,11);const d=new Cn(c);d.colorSpace=Be;const u=new et(new be(.7,.044),new dt({map:d,roughness:.5,metalness:.6}));return u.position.set(0,.44,.045),u.rotation.x=-.14,n.add(u),n.add(Zd(.8,.4)),n.position.set(...t.pos||[2.8,0,9.6]),n.rotation.y=t.ry??-.35,n}function py(i,t,e={}){const n=new $t;n.name="signage";const s=dy(t,{pos:e.signPos,ry:e.signRy}),r=fy(t,{pos:e.plaquePos,ry:e.plaqueRy});return n.add(s,r),i.add(n),{group:n,sign:s,plaque:r,signLight:s.userData.signLight}}function my(i={}){let t=i.fps&&i.fps>0?Math.floor(i.fps):30,e=0;const n=[];let s=typeof i.onShot=="function"?i.onShot:null;const r=l=>1/l,o=(l,c)=>l*(1/c),a={get frame(){return e},get fps(){return t},get t(){return o(e,t)},get dt(){return r(t)},setFps(l){return l&&l>0&&(t=Math.floor(l)),t},register(l){return typeof l!="function"?()=>{}:(n.includes(l)||n.push(l),()=>a.unregister(l))},unregister(l){const c=n.indexOf(l);return c>=0&&n.splice(c,1),n.length},clear(){n.length=0},onShot(l){s=typeof l=="function"?l:null},step(l){const c=l&&l>0?l:r(t);e+=1;const h=o(e,t);for(let d=0;d<n.length;d++)n[d](c,h,e);return{frame:e,t:h,dt:c}},renderFrame(l){e=Math.max(0,Math.floor(l));const c=r(t),h=o(e,t);for(let d=0;d<n.length;d++)n[d](c,h,e);return{frame:e,t:h,dt:c}},reset(){return e=0,{frame:e,t:0,dt:r(t)}},renderShot(l,c){return s&&s(l,Math.max(0,Math.floor(c))),{shotId:l,...a.renderFrame(c)}},renderSequence(l,c,h,d){const u=d&&d>0?Math.floor(d):t,f=Math.max(0,Math.floor(c)),g=Math.max(f,Math.floor(h)),v=[],m=[];for(let p=f;p<=g;p++)v.push(p),m.push(p*(1/u));return{shotId:l,fps:u,frames:v,times:m}}};return a}const Fo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class js{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const gy=new la(-1,1,1,-1,0,1);class _y extends xe{constructor(){super(),this.setAttribute("position",new oe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new oe([0,2,0,0,2,0],2))}}const xy=new _y;class Wc{constructor(t){this._mesh=new et(xy,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,gy)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class vy extends js{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof nn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Br.clone(t.uniforms),this.material=new nn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Wc(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class zu extends js{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class yy extends js{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class My{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new ht);this._width=n.width,this._height=n.height,e=new xn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:sn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new vy(Fo),this.copyPass.material.blending=Qn,this.timer=new kc}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}zu!==void 0&&(o instanceof zu?n=!0:o instanceof yy&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ht);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Sy extends js{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new It}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const wy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new It(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ys extends js{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new ht(t.x,t.y):new ht(256,256),this.clearColor=new It(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new xn(r,o,{type:sn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new xn(r,o,{type:sn,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const u=new xn(r,o,{type:sn,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}const a=wy;this.highPassUniforms=Br.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new nn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ht(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Br.clone(Fo.uniforms),this.blendMaterial=new nn({uniforms:this.copyUniforms,vertexShader:Fo.vertexShader,fragmentShader:Fo.fragmentShader,premultipliedAlpha:!0,blending:Xo,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new It,this._oldClearAlpha=1,this._basic=new ri,this._fsQuad=new Wc(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ht(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ys.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ys.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){const e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);const s=[],r=[];for(let o=1;o<t;o+=2){const a=e[o],l=o+1<t?e[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new nn({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ht(.5,.5)},direction:{value:new ht(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}}Ys.BlurDirectionX=new ht(1,0);Ys.BlurDirectionY=new ht(0,1);const Ro={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class by extends js{constructor(){super(),this.isOutputPass=!0,this.uniforms=Br.clone(Ro.uniforms),this.material=new wd({name:Ro.name,uniforms:this.uniforms,vertexShader:Ro.vertexShader,fragmentShader:Ro.fragmentShader}),this._fsQuad=new Wc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},pe.getTransfer(this._outputColorSpace)===Ee&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===mc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===gc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===_c?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===na?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ar?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Rr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===xc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function Ey({renderer:i,scene:t,camera:e}){let n="off",s=null,r=null,o=1,a=1;function l(){try{const u=i.getSize(new ht);o=Math.max(1,Math.round(u.x)),a=Math.max(1,Math.round(u.y))}catch{o=o||1,a=a||1}}function c(){if(s)try{s.dispose()}catch{}s=null,r=null}function h(u){if(c(),l(),u==="low"||u==="high"){s=new My(i),s.addPass(new Sy(t,e)),u==="high"&&(r=new Ys(new ht(o,a),.18,.6,.85),s.addPass(r)),s.addPass(new by);try{s.setSize(o,a)}catch{}}}return{get quality(){return n},setQuality(u){const f=u==="high"?"high":u==="low"?"low":"off";try{if(f===n&&(f==="off"||s))return n;if(f==="off")return c(),n="off",n;h(f),n=f}catch{try{c()}catch{}n="off"}return n},setSize(u,f){if(o=Math.max(1,Math.round(u)),a=Math.max(1,Math.round(f)),s)try{s.setSize(o,a)}catch{}},render(){if(n==="off"||!s)i.render(t,e);else try{s.render()}catch{i.render(t,e)}},dispose(){c(),n="off"}}}const Ty=20260912,Bu=16;function gr(i,t,e){let n=Math.imul(i,374761393)+Math.imul(t,668265263)+Math.imul(e,1442695041)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}function Ay(i,t){return Math.floor(gr(i,t,Ty)*4294967296)}function Jd(i,t,e){let n=(Ay(i,t)^Math.imul(e|0,2246822519))>>>0||1;return function(){n|=0,n=n+1831565813|0;let s=Math.imul(n^n>>>15,1|n);return s=s+Math.imul(s^s>>>7,61|s)^s,((s^s>>>14)>>>0)/4294967296}}function Ry(i,t,e){const n=Math.floor(i),s=Math.floor(t),r=i-n,o=t-s,a=r*r*(3-2*r),l=o*o*(3-2*o),c=gr(n,s,e),h=gr(n+1,s,e),d=gr(n,s+1,e),u=gr(n+1,s+1,e);return c+(h-c)*a+(d-c)*l+(c-h-d+u)*a*l}function Xc(i,t,e,n=4){let s=0,r=.5,o=1,a=0;for(let l=0;l<n;l++)s+=r*Ry(i*o,t*o,e+l*101),a+=r,r*=.5,o*=2.03;return s/a}function $d(i,t){const e=Math.max(Math.abs(i)-24,0),n=Math.max(Math.abs(t-4)-22,0),s=Math.hypot(e,n),r=Math.min(Math.max(s/10,0),1);return r*r*(3-2*r)}const Qd=[{cx:-8,cz:48.5,w:14,d:9,y:null},{cx:9,cz:50.5,w:12,d:8,y:null}];function jd(i){const t=(Xc(i.cx/42+7.3,i.cz/42-2.1,501,4)-.5)*11+Math.max(0,Math.hypot(i.cx,i.cz)-85)*.35;return Math.round(t*2)/2}function Cy(i,t){let e=null;for(const n of Qd){const s=Math.max(Math.abs(i-n.cx)-n.w/2,0),r=Math.max(Math.abs(t-n.cz)-n.d/2,0),o=Math.hypot(s,r),a=Math.min(Math.max(o/6,0),1),l=1-a*a*(3-2*a);l>0&&(!e||l>e.m)&&(e={m:l,y:jd(n)})}return e}function Py(){return Qd.map(i=>({...i,y:jd(i)}))}function ku(i,t,e){const n=Math.min(Math.max((e-i)/(t-i),0),1);return n*n*(3-2*n)}function Ae(i,t){const e=$d(i,t);if(e<=0)return 0;const n=(Xc(i/42+7.3,t/42-2.1,501,4)-.5)*11,s=Math.hypot(i,t),r=Math.max(0,s-85)*.35;let o=(n+r)*e;const a=34+8*Math.sin(i*.045),l=Math.abs(t-a),c=-1.6+2.2*ku(0,8,l),h=ku(7,14,l);let d=c*(1-h)+o*h;const u=Cy(i,t);return u&&u.m>0&&(d=u.y*u.m+d*(1-u.m)),d}function da(i,t){const n=Ae(i+.6,t)-Ae(i-.6,t),s=Ae(i,t+.6)-Ae(i,t-.6);return Math.hypot(n,s)/(2*.6)}function Dy(i,t,e,n=.45){const s=.65+.35*Math.sin(e*.6)*Math.sin(e*.23+1.7),r=Ae(i,t),o=Ae(i+1.5,t),a=Ae(i,t+1.5),l=Math.min(1.5,Math.abs(o-r)+Math.abs(a-r)),h=1+.35*(1-Math.max(0,Math.min(1,(r+2)/6)))+l*.45;return n*2*s*h}function tf(i,t){const e=Ae(i,t),n=Math.min(Math.max(1-e/9,0),1),s=Xc(i/25-3.7,t/25+9.2,777,3),r=34+8*Math.sin(i*.045),o=Math.max(0,1-Math.abs(t-r)/12);return Math.min(Math.max(n*.45+s*.35+o*.45,0),1)}function Yc(i,t){if($d(i,t)<=0)return"village";const e=Ae(i,t),n=tf(i,t),s=da(i,t),r=34+8*Math.sin(i*.045);return Math.abs(t-r)<5?"riverbank":e>9?"mountain":s>.45?"slope":n>.55?e<1.2?"field":"bamboo":n>.42?"maple":n>.25?"grassland":"outskirts"}function Ui(i,t){return[Math.floor(i/Bu),Math.floor(t/Bu)]}function as(i,t,e,n){return`${i}_${t>=0?"e"+t:"w"+-t}_${e>=0?"s"+e:"n"+-e}_${String(n).padStart(3,"0")}`}const zo=new Map;function Ly(i,t){return i+","+t}function ls(i,t,e){const n=Ly(i,t);return zo.has(n)||zo.set(n,[]),zo.get(n).push(...e),e.length}function ef(){let i=0,t=0;for(const e of zo.values())t++,i+=e.length;return{objects:i,chunks:t}}const Di=1,Iy=.45,ll=0;function Ny(i){const t=Math.sin(i*127.1)*43758.5453;return t-Math.floor(t)}function Uy({lampLights:i,lampGlows:t,houses:e}={}){const n=i||[],s=t||[],r=Math.min(n.length,s.length),o=[Di,Di,Di];let a=1;function l(h,d,u,f){const g=f>.05;f>=.85?(o[0]=Di,o[1]=Di,o[2]=Di):g?(o[0]=Di,o[1]=Iy,o[2]=Di):(o[0]=ll,o[1]=ll,o[2]=ll);const v=Math.floor(d*2);if(a=u==="rainy"&&Ny(v)<.12?.25:1,!!g)for(let m=0;m<r;m++){const p=o[m%3]*a;n[m].intensity*=p;const y=s[m];y&&y.material&&typeof y.material.emissiveIntensity=="number"?y.material.emissiveIntensity*=p:y&&typeof y.emissiveIntensity=="number"&&(y.emissiveIntensity*=p)}}function c(){return{circuits:[o[0],o[1],o[2]],dip:a}}return{update:l,state:c}}function Gu(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Oy(){const i=document.createElement("canvas");i.width=64,i.height=128;const t=i.getContext("2d"),e=t.createLinearGradient(0,128,0,0);e.addColorStop(0,"rgba(255,90,20,0)"),e.addColorStop(.35,"rgba(255,120,30,0.85)"),e.addColorStop(.65,"rgba(255,190,80,0.95)"),e.addColorStop(.9,"rgba(255,240,200,1)"),e.addColorStop(1,"rgba(255,255,240,0)"),t.fillStyle=e,t.fillRect(0,0,64,128),t.globalCompositeOperation="destination-in";const n=t.createRadialGradient(32,70,6,32,70,62);n.addColorStop(0,"rgba(0,0,0,1)"),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,64,128);const s=new Cn(i);return s.colorSpace=Be,s}function Fy(){const i=document.createElement("canvas");i.width=64,i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,30);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.5,"rgba(255,255,255,0.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const n=new Cn(i);return n.colorSpace=Be,n}const Ji=60,Hu=2.2,cl=1.2;function zy(i,t,e,n){const s=typeof n=="number"&&isFinite(n)?n:0,r=new $t;r.position.set(t,s,e);const o=i&&i.stone||new dt({color:9080210,roughness:.95}),a=i&&i.wood||new dt({color:5913892,roughness:.9}),l=new ze(new Dt(.28,.2,.22),o,8),c=new me,h=Gu(61861);for(let A=0;A<8;A++){const P=A/8*Math.PI*2+(h()-.5)*.2;c.position.set(Math.cos(P)*.55,.1,Math.sin(P)*.55),c.rotation.set(0,-P+(h()-.5)*.4,0),c.scale.setScalar(.9+h()*.25),c.updateMatrix(),l.setMatrixAt(A,c.matrix)}l.instanceMatrix.needsUpdate=!0,l.receiveShadow=!0,r.add(l);const d=new ze(new Dt(.12,.12,.9),a,4);for(let A=0;A<4;A++){const P=A/4*Math.PI*2+.4;c.position.set(Math.cos(P)*.18,.32,Math.sin(P)*.18),c.rotation.set(.62,P,0),c.scale.setScalar(1),c.updateMatrix(),d.setMatrixAt(A,c.matrix)}d.instanceMatrix.needsUpdate=!0,r.add(d);const u=Oy(),f=new ri({map:u,transparent:!0,blending:Xo,depthWrite:!1,side:Fe,fog:!1}),g=new be(.7,.9),v=new et(g,f);v.position.y=.62;const m=new et(g,f);m.position.y=.62,m.rotation.y=Math.PI/2,r.add(v,m);const p=new Float32Array(Ji*3),y=new Float32Array(Ji),w=new Float32Array(Ji),_=new Float32Array(Ji*2),S=Gu(24301);for(let A=0;A<Ji;A++)y[A]=A/Ji*(Hu/cl),w[A]=S()*Math.PI*2,_[A*2]=(S()-.5)*.3,_[A*2+1]=(S()-.5)*.3;const b=new xe;b.setAttribute("position",new Ne(p,3));const R=new es({map:Fy(),size:.55,transparent:!0,opacity:.32,depthWrite:!1,sizeAttenuation:!0,color:10133670}),x=new ks(b,R);x.frustumCulled=!1,r.add(x);const M=new Bc(16747068,8,9,2);M.position.set(0,.85,0),M.castShadow=!1,r.add(M);function T(A,P,D){const L=typeof D=="number"&&isFinite(D)?D:0,I=1+.18*Math.sin(A*11)+.12*Math.sin(A*23+1.3),U=1+.18*Math.sin(A*12.3+2.1)+.12*Math.sin(A*27+.5);v.scale.set(I,1+.25*Math.sin(A*13+.7),1),m.scale.set(U,1+.25*Math.sin(A*14+2),1);for(let z=0;z<Ji;z++){let W=y[z]+P;const O=Hu/cl;W>O&&(W-=O),y[z]=W;const G=.7+W*cl,X=L*W*.8;p[z*3]=_[z*2]+X+Math.sin(W*2+w[z])*.1,p[z*3+1]=G,p[z*3+2]=_[z*2+1]+Math.cos(W*1.7+w[z])*.1}b.attributes.position.needsUpdate=!0,M.intensity=8+2*Math.sin(A*11+Math.sin(A*23)*1.7)}return{group:r,update:T}}const hl=300,By=3;function ky(i,t,e,n,s){const r=i==="village";switch(i){case"village":s.setRGB(.36,.32,.25);break;case"riverbank":s.setRGB(.52,.48,.38);break;case"mountain":s.setRGB(.42,.42,.44);break;case"slope":s.setRGB(.4,.36,.28);break;case"field":s.setRGB(.45,.48,.28);break;case"bamboo":s.setRGB(.3,.42,.24);break;case"maple":s.setRGB(.38,.36,.24);break;case"grassland":s.setRGB(.42,.46,.28);break;default:s.setRGB(.38,.36,.28)}const o=1-t*.25;return s.multiplyScalar(o),e>7&&s.lerp(Vu,Math.min((e-7)/8,.7)),r||(n>.5&&s.lerp(Vu,Math.min((n-.5)*1.8,.6)),t>.6&&n<.3&&s.lerp(Gy,Math.min((t-.6)*2.2,.5)),t>.75&&n<.15&&s.lerp(Hy,Math.min((t-.75)*2.4,.6)),(i==="maple"||i==="bamboo")&&s.lerp(Vy,.45)),s}const Vu=new It(.5,.5,.52),Gy=new It(.32,.42,.22),Hy=new It(.23,.19,.15),Vy=new It(.36,.28,.18),Wy=new It(.47,.43,.38),Xy=new It(.3,.27,.22);function Yy(i,t){let e=Math.imul(Math.round(i*13.7),374761393)+Math.imul(Math.round(t*13.7),668265263)|0;return e=Math.imul(e^e>>>13,1274126177),e^=e>>>16,(e>>>0)/4294967296}function qy(){const i=new $t;i.name="terrain";const t=Math.floor(hl/By),e=new be(hl,hl,t,t);e.rotateX(-Math.PI/2);const n=e.attributes.position,s=new Float32Array(n.count*3),r=new It;for(let l=0;l<n.count;l++){const c=n.getX(l),h=n.getZ(l),d=Ae(c,h);n.setY(l,d-.05);const u=tf(c,h),f=da(c,h);ky(Yc(c,h),u,d,f,r);const g=Yy(c,h);r.offsetHSL((g-.5)*.02,(g-.5)*.05,(g-.5)*.09);const v=f;v>.35&&r.lerp(Wy,Math.min((v-.35)*1.6,.55)),v>.2&&u>.55&&r.lerp(Xy,Math.min((u-.55)*1.8,.5)*Math.min((v-.2)*3,1)),s[l*3]=r.r,s[l*3+1]=r.g,s[l*3+2]=r.b}e.setAttribute("color",new Ne(s,3)),e.computeVertexNormals();const o=new dt({vertexColors:!0,roughness:.96,metalness:0});try{const l=new Ed,c=(d,u)=>(d.colorSpace=u?Be:Bn,d.wrapS=d.wrapT=ni,d.repeat.set(90,90),d.anisotropy=4,d.needsUpdate=!0,d),h=()=>{};l.load("vendor/ambientcg/Ground037/Ground037_1K-JPG_Color.jpg",d=>{o.map=c(d,!0),o.needsUpdate=!0},void 0,h),l.load("vendor/ambientcg/Ground037/Ground037_1K-JPG_NormalGL.jpg",d=>{o.normalMap=c(d,!1),o.normalScale.setScalar(.6),o.needsUpdate=!0},void 0,h),l.load("vendor/ambientcg/Ground037/Ground037_1K-JPG_Roughness.jpg",d=>{o.roughnessMap=c(d,!1),o.needsUpdate=!0},void 0,h)}catch{}const a=new et(e,o);return a.receiveShadow=!0,a.frustumCulled=!0,i.add(a),{group:i,mesh:a}}function Ky(){const i=new $t;i.name="river";const t=60,e=8,n=[],s=[];for(let l=0;l<=t;l++){const c=-150+300*l/t,h=34+8*Math.sin(c*.045);if(n.push(c,-.8,h-e/2,c,-.8,h+e/2),l<t){const d=l*2;s.push(d,d+1,d+2,d+1,d+3,d+2)}}const r=new xe;r.setAttribute("position",new Ne(new Float32Array(n),3)),r.setIndex(s),r.computeVertexNormals();const o=new dt({color:3031624,roughness:.12,metalness:.75,envMapIntensity:1,transparent:!0,opacity:.94}),a=new et(r,o);return a.receiveShadow=!0,i.add(a),{group:i,mesh:a,waterMat:o}}const Zy=1374772973;function Wu(i){return i=i^Zy|0,i=Math.imul(i^i>>>16,73244475),i=Math.imul(i^i>>>16,73244475),i=(i^i>>>16)>>>0,i/4294967296}function Jy(i){const t=Math.floor(i),e=i-t,n=Wu(t),s=Wu(t+1),r=e*e*(3-2*e);return n+(s-n)*r}function $y(i){let t=0,e=.55,n=1,s=0;for(let r=0;r<3;r++){const o=Jy(i*n);t+=(1-Math.abs(2*o-1))*e,s+=e,e*=.5,n*=2.13}return t/s}const Qy=128,jy=[{r:260,hMax:42,tint:.55,yBase:-8},{r:312,hMax:58,tint:.72,yBase:-6},{r:368,hMax:74,tint:.88,yBase:-4}],tM=[{ang:0,depth:.75,width:.09},{ang:Math.PI,depth:.55,width:.07}];function eM(i){let t=1;for(const e of tM){let n=Math.abs(i-e.ang)%(Math.PI*2);n>Math.PI&&(n=Math.PI*2-n),t*=1-e.depth*Math.exp(-(n*n)/(e.width*e.width))}return Math.max(.08,t)}function nM(){const i=Qy,t=jy,e=i+1,n=[],s=[],r=[],o=new It(Hc),a=o.clone().multiplyScalar(.42),l=new It;t.forEach((u,f)=>{const g=f*e*2;for(let v=0;v<=i;v++){const m=v/i*Math.PI*2,y=(6+$y(m*3.1+f*7.7)*(u.hMax-6))*eM(m),w=Math.cos(m)*u.r,_=Math.sin(m)*u.r;if(n.push(w,u.yBase,_),n.push(w,u.yBase+y,_),l.copy(a).lerp(o,u.tint),s.push(l.r,l.g,l.b),l.copy(a).lerp(o,Math.min(1,u.tint+y/u.hMax*.18)),s.push(l.r,l.g,l.b),v<i){const S=g+v*2;r.push(S,S+1,S+2,S+1,S+3,S+2)}}});const c=new xe;c.setAttribute("position",new oe(n,3)),c.setAttribute("color",new oe(s,3)),c.setIndex(r),c.computeBoundingSphere();const h=new ri({vertexColors:!0,fog:!0}),d=new et(c,h);return d.castShadow=!1,d.receiveShadow=!1,d.frustumCulled=!1,d.renderOrder=1,d.name="farRidgeRing",d}function iM(i,t){let e=(Math.imul(i+1,2654435761)^Math.imul(t,40503))>>>0;return e^=e>>>15,e=Math.imul(e,2246822519),e^=e>>>13,(e>>>0)/4294967296}const sM=[{id:"r1",kind:"road",width:2.5,pts:[[0,24],[1,29],[2,32],[2,38],[1,42],[-4,41]]},{id:"r4",kind:"trail",width:1.2,pts:[[-4,41],[-12,40],[-20,38],[-26,40],[-31,44]]},{id:"r2",kind:"trail",width:1.2,pts:[[-24,10],[-36,2],[-48,-12],[-52,-30],[-44,-46]]},{id:"r3",kind:"trail",width:1.2,pts:[[24,5],[38,12],[52,26],[62,44]]}];function rM(i,t=2){const e=[];for(let n=0;n<i.length-1;n++){const[s,r]=i[n],[o,a]=i[n+1],l=Math.hypot(o-s,a-r),c=Math.max(1,Math.round(l/t));for(let h=0;h<c;h++)e.push([s+(o-s)*h/c,r+(a-r)*h/c])}return e.push(i[i.length-1].slice()),e}const nf=sM.map(i=>({...i,path:rM(i.pts)}));function sf(i,t){let e=1e9;for(const n of nf)for(const[s,r]of n.path){const o=Math.hypot(i-s,t-r);o<e&&(e=o)}return e}function oM(i){const t=new $t;t.name="roads";const e=new dt({color:7232066,roughness:.98}),n=new dt({color:6641207,roughness:1});let s=0;for(const r of nf){const o=r.width/2,a=[],l=[];r.path.forEach(([f,g],v)=>{const m=r.path[Math.min(v+1,r.path.length-1)],p=r.path[Math.max(v-1,0)];let y=m[0]-p[0],w=m[1]-p[1];const _=Math.hypot(y,w)||1;y/=_,w/=_;const S=-w,b=y,R=(iM(v,7)-.5)*.3,x=o+R,M=Ae(f+S*x,g+b*x)+.07,T=Ae(f-S*x,g-b*x)+.07,A=Ae(f,g)+.07;if(a.push(f+S*x,M,g+b*x,f,A,g,f-S*x,T,g-b*x),v<r.path.length-1){const P=v*3;l.push(P,P+3,P+1,P+1,P+3,P+4,P+1,P+4,P+2,P+2,P+4,P+5)}});const c=new xe;c.setAttribute("position",new Ne(new Float32Array(a),3)),c.setIndex(l),c.computeVertexNormals();const h=new et(c,r.kind==="road"?e:n);h.receiveShadow=!0,t.add(h);const[d,u]=Ui(r.path[0][0],r.path[0][1]);ls(d,u,[{id:as("road",d,u,s++),type:"road",x:r.path[0][0],z:r.path[0][1],y:0,data:{road:r.id}}])}{const o=34+8*Math.sin(.09),a=Ae(2,o-9),l=Ae(2,o+9),c=Math.max(a,l)+.25,h=new dt({color:5916208,roughness:.85}),d=new dt({color:4141602,roughness:.85}),u=new et(new Dt(2.2,.14,20),h);u.position.set(2,c,o),u.castShadow=!0,u.receiveShadow=!0,t.add(u);for(const v of[-1,1]){const m=new et(new Dt(.09,.7,20),d);m.position.set(2+v*1,c+.42,o),m.castShadow=!0,t.add(m);for(const p of[-8,-4,0,4,8]){const y=new et(new Dt(.12,1.1,.12),d);y.position.set(2+v*1,c-.1,o+p),t.add(y)}}const[f,g]=Ui(2,o);ls(f,g,[{id:as("bridge",f,g,0),type:"bridge",x:2,z:o,y:c,data:{}}]);for(const v of[-1,1])for(const m of[-6,6]){const p=new et(new Dt(.16,4.2,.16),d);p.position.set(2+v*.9,c-1.9,o+m),t.add(p)}}return{group:t}}function qc(i){let t=0,e=0;i.forEach(h=>{t+=h.attributes.position.count,e+=h.index.count});const n=new Float32Array(t*3),s=new Float32Array(t*3),r=new Float32Array(t*2),o=new Uint16Array(e);let a=0,l=0;i.forEach(h=>{const d=h.attributes.position,u=h.attributes.normal,f=h.attributes.uv;n.set(d.array,a*3),s.set(u.array,a*3),r.set(f.array,a*2);const g=h.index.array;for(let v=0;v<g.length;v++)o[l+v]=g[v]+a;a+=d.count,l+=g.length});const c=new xe;return c.setAttribute("position",new Ne(n,3)),c.setAttribute("normal",new Ne(s,3)),c.setAttribute("uv",new Ne(r,2)),c.setIndex(new Ne(o,1)),c}function aM(i,t,e,n=808){const s=new $t,r=Si(n),o=[],a=[],l=9;for(let d=0;d<l;d++){const u=t+(r()-.5)*1.6,f=e+(r()-.5)*1.6,g=3.4+r()*1.8,v=.03+r()*.07,m=r()*Math.PI*2,p=new $t,y=.5,w=.055;let _=0;for(;_<g;){const S=Math.min(y,g-_),b=new et(new _e(w*.92,w,S,8),i.bamboo);b.position.y=_+S/2,b.castShadow=!0,p.add(b);const R=new et(new _e(w*1.18,w*1.18,.035,8),i.bamboo);if(R.position.y=_+S,p.add(R),_>g*.35){const x=3+Math.floor(r()*3);for(let M=0;M<x;M++)a.push({x:u,y:_+S,z:f,top:_/g,seed:r()*10})}_+=S}p.position.set(u,0,f),p.rotation.set(Math.cos(m)*v,0,Math.sin(m)*v),p.userData.phase=r()*6.28,p.userData.baseRX=p.rotation.x,p.userData.baseRZ=p.rotation.z,o.push(p),s.add(p)}{const d=new be(.14,.62,1,2),u=d.attributes.position;for(let m=0;m<u.count;m++){const y=(u.getY(m)+.31)/.62;u.setX(m,u.getX(m)*(1-y*.85)),u.setZ(m,-Math.sin(y*Math.PI)*.06)}d.computeVertexNormals();const f=5,g=new ze(d,i.bambooLeaf,a.length*f),v=[];a.forEach(m=>{for(let p=0;p<f;p++){const y=p/f*Math.PI*2+m.seed;v.push({p:[m.x+Math.cos(y)*.25,m.y+.05,m.z+Math.sin(y)*.25],rx:.9+r()*.5,ry:y,rz:.2,s:.8+r()*.5})}}),_i(g,v),g.castShadow=!1,s.add(g)}const c=ua(3.2,3.2,.5);c.position.set(t,.035,e),s.add(c);function h(d){for(const u of o)u.rotation.x=u.userData.baseRX+Math.sin(d*.9+u.userData.phase)*.02,u.rotation.z=u.userData.baseRZ+Math.cos(d*.7+u.userData.phase)*.02}return{group:s,update:h}}function lM(i,t,e,n=1555){const s=new $t,r=Si(n),o=[],a=new F(0,1,0);function l(p,y,w,_,S){const b=new _e(_*.62,_,w,7),R=new et(b,i.trunk),x=p.clone().addScaledVector(y,w/2);R.position.copy(x),R.quaternion.setFromUnitVectors(a,y.clone().normalize()),R.castShadow=R.receiveShadow=!0,s.add(R);const M=p.clone().addScaledVector(y,w);if(S<=0||w<.35){o.push(M);return}o.push(M.clone().lerp(p,.4));const T=S>=3?3:2+(r()<.5?1:0);for(let A=0;A<T;A++){const P=y.clone();P.x+=(r()-.5)*1.1,P.z+=(r()-.5)*1.1,P.y+=r()*.45-.08,P.normalize(),l(M,P,w*(.55+r()*.15),_*.58,S-1)}}l(new F(0,0,0),new F(.08,1,.05),1.5,.22,4);function c(p){const y=new Hr,w=7;for(let S=0;S<=20;S++){const b=S/20*Math.PI*2,R=Math.pow(Math.abs(Math.sin(b*w/2)),.7),x=p*(.35+.65*R),M=Math.cos(b)*x,T=Math.sin(b)*x;S===0?y.moveTo(M,T):y.lineTo(M,T)}return new oa(y)}const h=qc([c(.17),c(.17).rotateY(Math.PI/2)]),d=340,u=new ze(h,i.mapleLeaf,d),f=[],g=new It;for(let p=0;p<d;p++){const y=o[Math.floor(r()*o.length)],w=y.x+(r()-.5)*1.1,_=y.y+(r()-.5)*.9,S=y.z+(r()-.5)*1.1;f.push({p:[w,_,S],rx:r()*6.3,ry:r()*6.3,rz:r()*6.3,s:.75+r()*.7});const b=Ke.clamp((_-1.2)/2.2,0,1),R=r();Bo(p,77)<.14?g.setHex(5926960):R<b*.75?g.setHex(12728868):R<b*.75+.22?g.setHex(14711592):g.setHex(7178812),g.offsetHSL((Bo(p,11)-.5)*.08,0,(Bo(p,33)-.5)*.12),u.setColorAt(p,g)}_i(u,f),u.instanceColor.needsUpdate=!0,u.castShadow=!1,u.receiveShadow=!1,s.add(u),s.position.set(t,0,e);const v=ua(3.4,3.4,.5);v.position.y=.035,s.add(v);function m(p){s.rotation.z=Math.sin(p*.6)*.004,s.rotation.x=Math.cos(p*.45)*.003}return{group:s,update:m}}function rf(i,t=1,e=1,n=.6,s=0,r=0){const o=Nn(t*1e3+7),a=lM(i,0,0,t*7919+101),l=a.group||a;l.scale.setScalar(e*(.9+o()*.25));const c=new It(4880949).lerp(new It(12729374),n);return l.traverse(h=>{h.isMesh&&h.material?.color&&h.geometry?.type!=="CylinderGeometry"&&(h.material=h.material.clone(),h.material.color.copy(c).offsetHSL((o()-.5)*.03,0,(o()-.5)*.06))}),l.rotation.y=o()*6.28,l.position.set(s,0,r),l.userData.tick=a.update||null,l.userData.sway={amp:.02+o()*.02,freq:.8+o()*.6,ph:o()*6.28},l}function of(i,t=1,e=0,n=0){const s=Nn(t*500+3),r=aM(i,0,0,t*4153+7),o=r.group||r;return o.rotation.y=s()*6.28,o.scale.setScalar(.85+s()*.4),o.position.set(e,0,n),o.userData.tick=r.update||null,o.userData.sway={amp:.015+s()*.02,freq:1.1+s()*.7,ph:s()*6.28},o}function Bo(i,t){let e=(Math.imul(i+1,2654435761)^Math.imul(t,40503))>>>0;return e^=e>>>15,e=Math.imul(e,2246822519),e^=e>>>13,(e>>>0)/4294967296}function cM(){const i=document.createElement("canvas");i.width=64,i.height=64;const t=i.getContext("2d");t.fillStyle="#000",t.fillRect(0,0,64,64),t.fillStyle="#fff";for(const[n,s,r]of[[14,9,-6],[30,11,0],[46,8,7]])t.beginPath(),t.moveTo(n-s/2,64),t.quadraticCurveTo(n-s/2+r,30,n+r,4+r*.2),t.quadraticCurveTo(n+s/2+r,30,n+s/2,64),t.closePath(),t.fill();return new Cn(i)}function Kc(i=1,t=.5){const e=Nn(i*77+1),n=new Xn(t,2),s=n.attributes.position;for(let a=0;a<s.count;a++){const l=1+(e()-.5)*.35;s.setXYZ(a,s.getX(a)*l,s.getY(a)*l*.72,s.getZ(a)*l)}n.computeVertexNormals();const r=new et(n,new dt({color:new It(3759148).offsetHSL(0,0,(e()-.5)*.05),roughness:1})),o=.72+e()*.63;return r.scale.set(o,o*(.85+e()*.4),o),r.rotation.y=e()*Math.PI*2,r.castShadow=!0,r.userData.sway={amp:.008,freq:1.4,ph:e()*6.28},r}function Zc(i=1,t=60,e=[6,3]){const n=Nn(i*31+5),s=new be(.5,.35);s.translate(0,.17,0);const r=hM([s,s.clone().rotateY(Math.PI/2)]),o=new dt({color:6058040,roughness:1,side:Fe,alphaTest:.4,alphaMap:cM(),alphaToCoverage:!0}),a=new ze(r,o,t),l=new me;for(let c=0;c<t;c++)l.position.set((n()-.5)*e[0],0,(n()-.5)*e[1]),l.rotation.y=n()*3.14,l.scale.setScalar(.7+n()*.7),(c+i%4+4)%4===0&&(l.scale.y*=1.9),l.updateMatrix(),a.setMatrixAt(c,l.matrix);return a.castShadow=!1,a.receiveShadow=!0,a}function hM(i){return qc(i)}function ul(i=1,t=2.2,e=2,n=40){const s=Nn(i*13+9),r=new be(.12,.12),o=new dt({color:4154928,roughness:1,side:Fe}),a=new ze(r,o,n),l=new me;for(let h=0;h<n;h++)l.position.set((s()-.5)*t,s()*e,.02+s()*.06),l.rotation.set(s()*3,s()*3,s()*3),l.updateMatrix(),a.setMatrixAt(h,l.matrix);a.castShadow=!1;const c=new $t;return c.add(a),c}function af(i,t=1.6,e=1){const n=new et(new si(.5,10),new dt({color:4480046,roughness:1}));return n.rotation.x=-Math.PI/2,n.scale.set(t,e,1),n.receiveShadow=!0,n}let dl=null;function uM(){if(dl)return dl;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d");t.fillStyle="#4a3826",t.fillRect(0,0,128,128);const e=Si(1179143),n=["#a83a22","#c77b2e","#6b4e30","#5a6b35","#7d4a26","#8f5a24"];for(let r=0;r<650;r++){t.fillStyle=n[Math.floor(e()*n.length)],t.globalAlpha=.5+e()*.5;const o=1+e()*2.5;t.save(),t.translate(e()*128,e()*128),t.rotate(e()*3.14),t.fillRect(-o/2,-o/3,o,o*.66),t.restore()}t.globalAlpha=1;const s=new Cn(i);return s.wrapS=s.wrapT=ni,s.colorSpace=Be,s.anisotropy=4,dl=s,s}function lf(i){const t=[];for(const s of i){const r=new si(.5,12);r.rotateX(-Math.PI/2),r.scale(s.r*2.4,1,s.r*2);const o=Bo(s.seed||1,911);r.rotateY(o*6.28),r.translate(s.x,s.y,s.z),t.push(r)}if(!t.length)return null;const e=qc(t);t.forEach(s=>s.dispose());const n=new et(e,new dt({map:uM(),roughness:1,metalness:0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));return n.receiveShadow=!0,n}function dM(i,t,e){const n=e?.gust?e.gust(t):.5;for(const s of i){const r=s.userData.sway;r&&(s.rotation.x=Math.sin(t*r.freq+r.ph)*r.amp*(.5+n),s.rotation.z=Math.cos(t*r.freq*.8+r.ph)*r.amp*(.5+n))}}function De(i,t,e){let n=Math.imul(i,374761393)+Math.imul(t,668265263)+Math.imul(e,1442695041)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}function Co(i,t,e,n,s=130){const r=Jd(7,3,n),o=[];for(let a=0;a<4e3&&o.length<t;a++){const l=r()*Math.PI*2,c=30+Math.sqrt(r())*(s-30),h=Math.cos(l)*c,d=Math.sin(l)*c*.9+6,u=Yc(h,d);i.includes(u)&&(sf(h,d)<4||Math.hypot(h+48,d+28)<10||da(h,d)>.55||Math.abs(d-(34+8*Math.sin(h*.045)))<6||o.some(([f,g])=>Math.hypot(f-h,g-d)<e)||o.push([h,d]))}return o}function fM(i,t){const n=Math.floor(i/22),s=Math.floor(t/22),r=i/22-n,o=t/22-s,a=r*r*(3-2*r),l=o*o*(3-2*o),c=De(n,s,201),h=De(n+1,s,201),d=De(n,s+1,201),u=De(n+1,s+1,201),f=c+(h-c)*a+(d-c)*l+(c-h-d+u)*a*l,g=De(n*3+11,s*3+7,202);return Math.min(1,Math.max(0,f*.72+g*.28))}function pM(i,t,e,n,s){const r=De(Math.floor(e/12),Math.floor(n/12),203);return i==="bamboo"?"bamboo":i==="mountain"||i==="slope"?r<.68?"sugi":"hinoki":t<48?r<.55?"momiji":"pine":i==="maple"?r<.62?"momiji":"pine":i==="grassland"||i==="outskirts"?r<.5?"pine":"momiji":s()<.5?"sugi":"hinoki"}function mM(){const i=[new ht(.24,0),new ht(.2,.12),new ht(.13,.5),new ht(.105,1.2),new ht(.085,2),new ht(.06,2.6)],t=new Zs(i,6);return t.computeVertexNormals(),t}function Po(i,t,e){const n=i.attributes.position;for(let s=0;s<n.count;s++){const r=1+(De(s,t,9)-.5)*e;n.setXYZ(s,n.getX(s)*r,n.getY(s)*(1+(De(s,t+1,9)-.5)*e*.6),n.getZ(s)*r)}return i.computeVertexNormals(),i}function gM(i){let t=0;const e=i.map(a=>a.toNonIndexed());for(const a of e)t+=a.attributes.position.count;const n=new Float32Array(t*3),s=new Float32Array(t*3);let r=0;for(const a of e)n.set(a.attributes.position.array,r*3),a.attributes.normal&&s.set(a.attributes.normal.array,r*3),r+=a.attributes.position.count,a.dispose();const o=new xe;return o.setAttribute("position",new Ne(n,3)),o.setAttribute("normal",new Ne(s,3)),o}function ur(i,t){if(i==="sugi"){const s=new Ur(1.05,4.2,7,3);return s.translate(0,2.1,0),Po(s,t,.22)}if(i==="hinoki"){const s=new Ur(1.3,3.9,8,2);return s.translate(0,1.95,0),Po(s,t,.3)}if(i==="pine"){const s=new In(1.6,8,4,0,Math.PI*2,0,Math.PI*.55);return s.scale(1,.45,1),s.translate(0,2.6,0),Po(s,t,.2)}if(i==="bamboo"){const s=new Xn(.95,0);return s.scale(1,1.4,1),s.translate(0,2.4,0),Po(s,t,.35)}const e=[],n=[[0,1.6,0,1.35],[.7,2.2,.3,1],[-.6,2.7,-.2,.75]];for(let s=0;s<n.length;s++){const[r,o,a,l]=n[s],c=new Xn(l,0);c.scale(1.25,.55,1.25),c.translate(r,o,a);const h=c.attributes.position,d=[];for(let f=0;f<h.count;f++)De(f*7+s*131,t,12)<.4||d.push(h.getX(f),h.getY(f),h.getZ(f));const u=new xe;u.setAttribute("position",new Ne(new Float32Array(d),3)),u.computeVertexNormals(),e.push(u),c.dispose()}return gM(e)}function _M(i){const t=new $t;t.name="ecology";const e=[],n=[],s=c=>(c?.userData?.sway&&e.push(c),c?.userData?.tick&&n.push(c.userData.tick),c),r=Co(["maple"],3,14,101,70);r.forEach(([c,h],d)=>{const u=Ae(c,h),f=rf(i,500+d,1+De(d,3,5)*.5,.35+De(d,9,6)*.5,0,0);f.position.set(c,u,h),f.rotation.y=De(d,13,7)*6.28,Do(t,f),s(f)});{const c=r.map(([d,u],f)=>({x:d,y:Ae(d,u)+.05,z:u,r:1.2,seed:720+f})),h=lf(c);h&&t.add(h)}Co(["bamboo"],2,16,102,80).forEach(([c,h],d)=>{const u=of(i,510+d,0,0);u.position.set(c,Ae(c,h),h),Do(t,u),s(u)}),Co(["maple","grassland","outskirts","slope"],8,12,103).forEach(([c,h],d)=>{const u=Kc(520+d,.5+De(d,21,8)*.6);u.position.set(c,Ae(c,h)+.2,h),Do(t,u),s(u)}),Co(["grassland","field","outskirts","riverbank"],6,14,104).forEach(([c,h],d)=>{const u=Zc(530+d,50,[5,5]);u.position.set(c,Ae(c,h)+.03,h),Do(t,u)});{const c=Jd(11,5,201),h=mM(),d={sugi:ur("sugi",211),hinoki:ur("hinoki",212),momiji:ur("momiji",213),bamboo:ur("bamboo",214),pine:ur("pine",215)},u=new dt({color:4864552,roughness:.95}),f=new dt({roughness:.95}),g=new dt({roughness:.8,side:Fe}),v={sugi:[],hinoki:[],momiji:[],bamboo:[],pine:[]},m={sugi:90,hinoki:65,momiji:60,bamboo:35,pine:35};for(let _=0;_<2500&&!(v.sugi.length+v.hinoki.length+v.momiji.length+v.bamboo.length+v.pine.length>=340);_++){const b=c()*Math.PI*2,R=32+Math.sqrt(c())*105,x=Math.cos(b)*R,M=Math.sin(b)*R*.9+6,T=Yc(x,M);if(!["maple","bamboo","grassland","slope","mountain","outskirts"].includes(T)||sf(x,M)<3.5||da(x,M)>.7||Math.abs(M-(34+8*Math.sin(x*.045)))<5||Math.hypot(x+48,M+28)<9)continue;const A=fM(x,M);if(A<.28||A<.45&&De(_,61,204)<.6)continue;const P=pM(T,Math.hypot(x,M),x,M,c);if(v[P].length>=m[P])continue;const D=Ae(x,M),L=.75+De(_,62,205)*.5,I=(T==="mountain"?.8+c()*.5:1+c()*.9)*L;v[P].push({x,y:D,z:M,sc:I,ry:c()*6.28,seed:_})}const p=new me,y=new It,w=["sugi","hinoki","momiji","bamboo","pine"];for(const _ of w){const S=v[_];if(!S.length)continue;const b=new ze(h,u,S.length),R=_==="momiji"?g:f,x=new ze(d[_],R,S.length),M=new Float32Array(S.length),T=new Float32Array(S.length),A=new Float32Array(S.length);S.forEach((P,D)=>{const L=_==="bamboo"?[P.sc*.45,P.sc*1.5,P.sc*.45]:[P.sc,P.sc,P.sc];p.position.set(P.x,P.y-.05,P.z),p.rotation.set(0,P.ry,0),p.scale.set(L[0],L[1],L[2]),p.updateMatrix(),b.setMatrixAt(D,p.matrix);const I=_==="bamboo"?P.y+1.2*P.sc:_==="pine"?P.y+.9*P.sc:P.y+1*P.sc;p.position.set(P.x,I,P.z),p.rotation.set(0,P.ry+De(D,71,206)*6.28,0);const U=_==="momiji"?P.sc*1.1:_==="pine"?P.sc*1.15:P.sc;p.scale.set(U,U*(_==="bamboo"?1.5:1),U),p.updateMatrix(),x.setMatrixAt(D,p.matrix),_==="sugi"?y.setHSL(.36+De(D,43,3)*.03,.42,.16+De(D,44,4)*.06):_==="hinoki"?y.setHSL(.33+De(D,43,3)*.04,.4,.22+De(D,44,4)*.07):_==="momiji"?y.setHSL(.02+De(D,43,3)*.09,.62,.32+De(D,44,4)*.12):_==="bamboo"?y.setHex(4157488).offsetHSL(0,0,(De(D,44,4)-.5)*.06):y.setHSL(.3+De(D,43,3)*.05,.38,.24+De(D,44,4)*.07),x.setColorAt(D,y),M[D]=De(D,72,207),T[D]=_==="momiji"?.35+De(D,73,208)*.65:0,A[D]=De(D,71,206)*6.28}),x.geometry=x.geometry.clone(),x.geometry.setAttribute("aWind",new Sr(M,1)),x.geometry.setAttribute("aAutumn",new Sr(T,1)),x.geometry.setAttribute("aUvRot",new Sr(A,1)),b.instanceMatrix.needsUpdate=!0,x.instanceMatrix.needsUpdate=!0,x.instanceColor&&(x.instanceColor.needsUpdate=!0),b.castShadow=!1,b.receiveShadow=!1,x.castShadow=!1,x.receiveShadow=!1,b.frustumCulled=!0,x.frustumCulled=!0,t.add(b,x)}}return{group:t,vegRoots:e,tickers:n}}function Do(i,t){i.add(t)}const xM=[{name:"hamletA",cx:-27,cz:34,seed:201,w:6,d:5,wallH:2.9,roofType:"kirizuma",pitch:30,facadeCols:3,doorSide:-1,engawa:.8,woodTone:.3,age:.7,winLayout:[1,0,2]},{name:"hamletB",cx:13,cz:24,seed:202,w:6,d:5.5,wallH:3,roofType:"yosemune",pitch:31,facadeCols:3,doorSide:1,engawa:0,woodTone:.6,age:.4,winLayout:[2,0,1]},{name:"hamletC",cx:22,cz:28,seed:203,w:6,d:5,wallH:2.8,roofType:"kirizuma",pitch:29,facadeCols:3,doorSide:1,engawa:.8,woodTone:.5,age:.55,winLayout:[1,2,0]}],vM=[{name:"farmhouse",cx:13,cz:29,seed:204,w:7.5,d:6,wallH:3.2,roofType:"kirizuma",pitch:32,facadeCols:4,doorSide:1,engawa:1,woodTone:.35,age:.6,winLayout:[1,2,1,0]},{name:"barn",cx:20,cz:30,seed:205,w:5,d:7,wallH:3.6,roofType:"kirizuma",pitch:40,facadeCols:2,doorSide:0,engawa:0,woodTone:.25,age:.8,winLayout:[0,0],glow:!1}];function yM(i){Hd(i);const t=new $t;t.name="settlement";const e=[];for(const[s,r]of[[xM,40],[vM,50]])for(const[o,a]of s.entries()){const l=Wd({...a}),c=Ae(a.cx,a.cz);l.group.position.set(a.cx,c,a.cz),t.add(l.group),e.push({name:a.name,group:l.group,glowMats:a.glow===!1?[]:l.glowMats,sliders:l.sliders||[],params:{...a},pos:new F(a.cx,c,a.cz),w:a.w,d:a.d});const[h,d]=Ui(a.cx,a.cz);ls(h,d,[{id:as("house",h,d,r+o),type:"house",x:a.cx,z:a.cz,y:c,data:{name:a.name}}])}{const s={W:[],D:[]},r=[{x1:-30,z1:37.5,x2:-24,z2:37.5},{x1:8.5,z1:27.5,x2:8.5,z2:32}];for(const a of r){const l=Math.hypot(a.x2-a.x1,a.z2-a.z1),c=Math.max(2,Math.floor(l/1.4));for(let d=0;d<=c;d++){const u=d/c,f=a.x1+(a.x2-a.x1)*u,g=a.z1+(a.z2-a.z1)*u,v=new Dt(.1,1,.1);v.translate(f,Ae(f,g)+.5,g),s.D.push(v)}const h=Math.atan2(a.x2-a.x1,a.z2-a.z1)+Math.PI/2;for(const d of[.85,.4]){const u=new Dt(l,.08,.06),f=new ae().makeRotationY(h),g=(a.x1+a.x2)/2,v=(a.z1+a.z2)/2;f.setPosition(g,Ae(g,v)+d,v),u.applyMatrix4(f),s.D.push(u)}}const o=new dt({color:5916208,roughness:.85});for(const a of Object.keys(s)){if(!s[a].length)continue;const l=new et(on(s[a],!1),o);l.castShadow=!0,l.receiveShadow=!0,t.add(l)}}return Py().forEach((s,r)=>{const a=s.w-1,l=s.d-.5*2,c=[],h=.35,d=.4;for(const[x,M,T,A]of[[a+d*2,d,0,-l/2],[a+d*2,d,0,l/2],[d,l,-a/2,0],[d,l,a/2,0]]){const P=new Dt(x,h,M);P.translate(s.cx+T,s.y+h/2-.05,s.cz+A),c.push(P)}const u=new et(on(c,!1),new dt({color:7035456,roughness:1}));u.castShadow=!0,u.receiveShadow=!0,t.add(u);const f=new et(new be(a,l),new dt({color:3360842,roughness:.12,metalness:.7,envMapIntensity:.9,transparent:!0,opacity:.95}));f.rotation.x=-Math.PI/2,f.position.set(s.cx,s.y+.12,s.cz),f.receiveShadow=!0,t.add(f),t.userData["paddyWater"+r]=f.material;const g=new be(.22,.4);g.translate(0,.2,0);const v=on([g,g.clone().rotateY(Math.PI/2)],!1),m=new dt({color:6982204,roughness:.9,side:Fe}),p=7,y=22,w=new ze(v,m,p*y),_=new me;let S=0;for(let x=0;x<p;x++)for(let M=0;M<y;M++){_.position.set(s.cx-a/2+.4+(a-.8)*M/(y-1),s.y+.1,s.cz-l/2+.4+(l-.8)*(x+.5)/p),_.rotation.set(0,(x*y+M)%8*.4,0);const T=.8+(x*31+M*17)%10/10*.5;_.scale.set(T,T,T),_.updateMatrix(),w.setMatrixAt(S++,_.matrix)}w.instanceMatrix.needsUpdate=!0,w.castShadow=!1,w.receiveShadow=!0,t.add(w);const[b,R]=Ui(s.cx,s.cz);ls(b,R,[{id:as("paddy",b,R,r),type:"paddy",x:s.cx,z:s.cz,y:s.y,data:{}}])}),{group:t,houses:e}}const Me=.69,Se=.012;function MM(i){let t=2166136261;const e=String(i??"home");for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function fa(i){let t=i>>>0||1;return function(){t+=1831565813;let e=Math.imul(t^t>>>15,t|1);return e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function pa(i,t){return((typeof i.seed=="number"?i.seed>>>0:MM(i.seed??i.name??"house"))^Math.imul(t>>>0,2654435761))>>>0}const fl={};function pl(i,t,e=.9){return fl[i]||(fl[i]=new dt({color:t,roughness:e,metalness:0})),fl[i]}function cf(i){const t=i||{},e=t.wood||t.timber||t.beam||t.frame||pl("wood",8018490),n=t.dark||t.iron||t.charcoal||t.kitchen||pl("dark",3025446,.85),s=t.ceramic||t.pot||t.clay||t.plaster||pl("ceramic",12101774,.6),r=t.stone||t.rock||t.step||n,o=t.fabric||t.cloth||t.curtain||t.noren||n;return{wood:e,dark:n,ceramic:s,stone:r,fabric:o}}function tn(i,t,e,n,s,r,o,a=0){const l=new Dt(t,e,n);a&&l.rotateY(a),l.translate(s,r,o),i.push(l)}function ti(i,t,e,n,s,r,o,a,l=!1){const c=new _e(t,e,n,s,1,l);c.translate(r,o,a),i.push(c)}function SM(i,t,e,n,s,r,o){const a=new Ur(t,e,n);a.translate(s,r,o),i.push(a)}function wM(i,t,e,n,s,r,o,a,l=8,c=6){const h=new In(t,l,c);h.scale(e,n,s),h.translate(r,o,a),i.push(h)}function bM(i,t,e,n,s,r,o){const a=new _e(t,t,e,n);a.rotateX(Math.PI/2),a.translate(s,r,o),i.push(a)}function Jc(i,t,e,n,s,r,o=0,a="z"){const l=new _e(t,t,e,6);o&&(a==="z"?l.rotateX(o):l.rotateZ(o)),l.translate(n,s,r),i.push(l)}function Vn(i,t,e){if(!t.length)return null;const n=on(t,!1);for(const r of t)r.dispose();if(!n)return null;const s=new et(n,e);return i.add(s),s}function EM(i,t,e){const n=[],s=[],r=cf(e),o=Math.max(2.2,t.w??3.4),a=Math.max(2.4,t.d??3.6),l=t.kind??"home",c=-a/2+.25,h=o/2-.2,d=Math.max(.8,h-.35);if(l==="home"){const u=Xu(i,t,r,{w:o,d:a,zBack:c,sideX:h,hw:d});if(u&&u.glow)for(const f of u.glow)s.push(f)}else if(l==="shop")TM(i,t,r,{w:o,d:a,zBack:c},n);else if(l==="farm"||l==="shed")AM(i,t,r,{d:a,zBack:c,sideX:h});else if(l==="hero")RM(i,t,r,{zBack:c,hw:d});else{const u=Xu(i,t,r,{w:o,d:a,zBack:c,sideX:h,hw:d});if(u&&u.glow)for(const f of u.glow)s.push(f)}return{cloth:n,glow:s}}function Xu(i,t,e,n){const s=fa(pa(t,48879)),r=[],o=[],a=[],{zBack:l,sideX:c,hw:h}=n,d=Math.min(1.7,n.w-1.2),u=-Math.min(.9,h*.45)+(s()-.5)*.2,f=l+.3,g=Math.min(1.15,(t.wallH??1.9)-.55),v=d/2-.04;for(const T of[-1,1])tn(r,.08,g,.32,u+T*v,Me+Se+g/2,f);const m=[.28,.58,.88].filter(T=>T<g);for(const T of m)tn(r,d,.05,.34,u,Me+Se+T,f);const p=5+Math.floor(s()*3);for(let T=0;T<p;T++){const A=m[T%m.length],P=u-d/2+.18+T*(d-.36)/Math.max(1,p-1)+(s()-.5)*.04,D=.055+s()*.035,L=T%3===2?.07+s()*.03:.12+s()*.06;ti(a,D,D*.85,L,8,P,Me+Se+A+.025+L/2,f+(s()-.5)*.1)}const y=c-.32;bM(o,.17,Math.min(1.6,n.d-1.4),8,y,Me+Se+.17,-.15),tn(o,.38,.12,.26,y,Me+Se+.06,.78);const w=-(c-.38);tn(r,.46,.44,.46,w,Me+Se+.22,.62),tn(r,.4,.36,.4,w+.03,Me+Se+.44+.012+.18,.6);const _=Math.min(h,c-.55),S=l+.62;tn(r,.72,.24,.5,_,Me+Se+.12,S),tn(o,.42,.36,.42,_-.08,Me+Se+.24+.012+.18,S),ti(o,.16,.14,.15,8,_-.08,Me+Se+.24+.012+.36+.012+.075,S);for(let T=0;T<3;T++)ti(a,.09,.09,.026,8,_+.16+T%2*.02,Me+Se+.24+.012+.013+Math.floor(T/2)*.03,S-.12+T*.11);const b=[],R=m.length>1?m[1]:m[0];if(R!==void 0){let T=u-d/2+.25;for(let A=0;A<5;A++){const P=.035+s()*.03,D=.17+s()*.08;tn(o,P,D,.13,T,Me+Se+R+.025+D/2,f+(s()-.5)*.02),T+=P+.012}}const x=-(c-.28),M=l+.35;Jc(r,.016,1.15,x,Me+Se+.57,M,.22,"x"),tn(o,.07,.22,.09,x,Me+Se+.13,M+.12),Vn(i,r,e.wood),Vn(i,o,e.dark),Vn(i,a,e.ceramic);{const T=h-.35,A=1.15,P=new et(new Dt(.62,.4,.42),e.wood);P.position.set(T,Me+Se+.2,A),P.castShadow=P.receiveShadow=!0,i.add(P);const D=new et(new Dt(.56,.4,.36),e.dark);D.position.set(T,Me+Se+.4+.2,A),D.castShadow=!0,i.add(D);const L=new dt({color:790550,roughness:.15,metalness:.4,emissive:10336472,emissiveIntensity:0}),I=new et(new Dt(.46,.3,.02),L);I.position.set(T,Me+Se+.4+.2,A-.19),I.rotation.y=Math.PI,i.add(I),b.push(L);const U=new et(new _e(.006,.006,.5,6),e.dark);U.position.set(T+.15,Me+Se+.4+.4+.25,A),U.rotation.z=.25,i.add(U)}return{glow:b}}function TM(i,t,e,n,s){const r=fa(pa(t,81)),o=[],a=[],{zBack:l}=n,c=Math.min(2,n.w-1),h=n.d/2-1.05;tn(o,c,.55,.5,0,Me+Se+.275,h),tn(o,c+.1,.05,.58,0,Me+Se+.55+.025,h);const d=Math.min(1.9,n.w-1);for(const m of[.55,.92])tn(o,d,.05,.32,0,Me+Se+m,l+.28);for(let m=0;m<8;m++){const p=m<4?.55:.92,y=-d/2+.2+m%4*((d-.4)/3)+(r()-.5)*.03,w=.06+r()*.03,_=.13+r()*.07;ti(a,w,w*.85,_,8,y,Me+Se+p+.025+_/2,l+.28)}Vn(i,o,e.wood),Vn(i,a,e.ceramic);const u=.72,f=Math.min(.9,(t.wallH??1.9)-.7),g=new be(u,f),v=new et(g,e.fabric);v.material&&v.material.side!==void 0&&(v.material=v.material),v.material.side=Fe,v.position.set(Math.min(.85,n.w/2-.7),Me+Se+f/2+.55,l+.16),i.add(v),s.push({mesh:v,phase:r()*Math.PI*2,amp:.09+r()*.03})}function AM(i,t,e,n){const s=fa(pa(t,244)),r=String(t.name??"").toLowerCase().startsWith("barn"),o=[],a=[],{zBack:l,sideX:c}=n,h=-(c-.18);for(const u of[.45,.85])tn(o,.06,.06,Math.min(1.6,n.d-1.2),h,Me+Se+u,-.1);const d=r?2:3;for(let u=0;u<d;u++){const f=-.6+u*.42+(s()-.5)*.06;Jc(o,.022,1.25,h+.16,Me+Se+.62,f,.18,"z"),tn(a,.05,.22,.04,h+.27,Me+Se+.35,f)}if(!r){for(let u=0;u<3;u++)wM(a,.24,1,.62,1,.5+u%2*.42+(s()-.5)*.08,Me+Se+.15,l+.55+Math.floor(u/2)*.42);ti(o,.2,.15,.26,8,-.3,Me+Se+.13,l+.6,!0),ti(o,.17,.13,.22,8,-.72,Me+Se+.11,l+.62,!0);for(let u=0;u<6;u++)tn(o,.22,.16,.5,-.9+u*.26,Me+Se+.08,l+.32)}Vn(i,o,e.wood),Vn(i,a,e.dark)}function RM(i,t,e,n){const s=[],r=[],{zBack:o,hw:a}=n,l=-Math.min(.9,a*.5),c=o+.45;ti(s,.07,.11,.34,10,l,Me+Se+.17,c),ti(s,.05,.05,.06,8,l,Me+Se+.34+.03,c);const h=new Xn(.11,0);h.translate(l+.42,Me+Se+.08,c+.05),r.push(h),Vn(i,s,e.ceramic),Vn(i,r,e.stone)}function CM(i,t,e){const n=[],s=cf(e),r=fa(pa(t,225)),o=Math.max(2.4,t.d??3.6),a=t.kind??"home",l=o/2,c=r()<.5?-1:1,h=[],d=[];ti(h,.3,.34,.07,10,(r()-.5)*.2,.055,l+.95);const u=c*.62,f=l+.38;if(tn(d,.11,.09,.26,u,.065,f,(r()-.5)*.3),tn(d,.11,.09,.26,u+.15*c,.065,f+.03,(r()-.5)*.3),a==="home"||a==="farm"){const g=-c*.72,v=l+.36;ti(d,.13,.11,.42,8,g,.02+.21,v),Jc(d,.015,.72,g,.02+.36,v,.06,"z"),SM(d,.13,.24,8,g+.02,.02+.72+.1,v)}return Vn(i,h,s.stone),Vn(i,d,s.dark),{cloth:n}}function PM(i,t,e,n){const s=new $t;s.name="torii";const r=Ae(t,e),o=new dt({color:9054750,roughness:.6}),a=new dt({color:2763310,roughness:.7}),l={W:[],D:[]},c=m=>{const p=new _e(.14,.17,3,10);p.translate(m*1.1,1.5,0),l.W.push(p);const y=new _e(.22,.26,.3,10);y.translate(m*1.1,.15,0),l.D.push(y)};c(-1),c(1);const h=new Dt(3.4,.22,.3);h.translate(0,3.1,0),l.W.push(h);const d=new Dt(3.7,.12,.42);d.translate(0,3.28,0),l.D.push(d);const u=new Dt(2.4,.16,.16);u.translate(0,2.55,0),l.W.push(u);const f=new Dt(.14,.6,.14);f.translate(0,2.85,0),l.W.push(f);for(const[m,p]of[["W",o],["D",a]]){if(!l[m].length)continue;const y=new et(on(l[m],!1),p);y.castShadow=!0,y.receiveShadow=!0,s.add(y)}s.position.set(t,r,e),s.rotation.y=n;const[g,v]=[Ui(t,e)[0],Ui(t,e)[1]];return ls(g,v,[{id:as("torii",g,v,0),type:"torii",x:t,z:e,y:r,data:{}}]),{group:s}}function DM(i,t,e,n){const s=new $t;s.name="shrine";const r=Ae(t,e),o=new dt({color:9145222,roughness:.95}),a=new dt({color:4864552,roughness:.85}),l=new dt({color:3352861,roughness:.9}),c={S:[],W:[],D:[]},h=new Dt(5,.6,4);h.translate(0,.3,0),c.S.push(h);for(let w=0;w<3;w++){const _=new Dt(1.6,.18,.5);_.translate(0,.09+w*.18,2+.25+(2-w)*.42),c.S.push(_)}for(const[w,_]of[[-1.5,-1],[1.5,-1],[-1.5,1],[1.5,1]]){const S=new Dt(.18,2.2,.18);S.translate(w,.6+1.1,_),c.W.push(S)}const d=new Dt(3.6,1.5,2.6);d.translate(0,.6+1.35,0),c.W.push(d);const u=new Dt(.7,1.1,.06);u.translate(0,.6+.85,1.32),c.D.push(u);for(const w of[1,-1]){const _=new Dt(4.6,.1,2.2),S=new ae().makeRotationX(w>0?.62:-.62);S.setPosition(0,3.35,w*.85),_.applyMatrix4(S),c.D.push(_)}const f=new Dt(4.6,.14,.3);f.translate(0,3.95,0),c.D.push(f);for(let w=0;w<=10;w++){const _=w/10,S=-2.4+_*4.8;for(const b of[-1.9,1.9]){if(b>0&&Math.abs(S)<1.1)continue;const R=new Dt(.09,.7,.09);R.translate(S,.6+.35,b),c.D.push(R)}}const g=new Dt(4.9,.07,.08);g.translate(0,.6+.68,-1.9),c.D.push(g);const v=w=>w==="S"?o:w==="W"?a:l;for(const w of Object.keys(c)){if(!c[w].length)continue;const _=new et(on(c[w],!1),v(w));_.castShadow=!0,_.receiveShadow=!0,s.add(_)}const m=new et(new Dt(.8,.5,.4),l);m.position.set(0,.85,1.7),m.castShadow=!0,s.add(m),s.position.set(t,r,e),s.rotation.y=n;const[p,y]=Ui(t,e);return ls(p,y,[{id:as("shrine",p,y,0),type:"shrine",x:t,z:e,y:r,data:{}}]),{group:s}}const Ze=new Hv({antialias:!0,powerPreference:"high-performance"});Ze.setPixelRatio(Math.min(window.devicePixelRatio||1,2));window.addEventListener("tsuki-quality",i=>{try{const t=i&&i.detail,e=t==="low"?1:t==="medium"?1.5:2;Ze.setPixelRatio(Math.min(window.devicePixelRatio||1,e))}catch{}});Ze.setSize(window.innerWidth,window.innerHeight);Ze.shadowMap.enabled=!0;Ze.shadowMap.type=_r;Ze.toneMapping=na;Ze.toneMappingExposure=1.06;try{const i=new URLSearchParams(location.search).get("tone");i==="agx"&&Ar!==void 0?Ze.toneMapping=Ar:i==="neutral"&&Rr!==void 0&&(Ze.toneMapping=Rr)}catch{}document.getElementById("app").appendChild(Ze.domElement);const ge=new Ap,Le=Od();d1(Le);Hd(Le);const{sun:LM,hemi:IM,skyMat:NM,sky:Yu}=f1(ge,Ze),ma=new $t;ma.name="hero_machiya";const ns=n1(Le),UM=i1(Le),ko=s1(Le);ma.add(ns.group,UM.group,ko.group);x1(ma,{nageshiY:2.2,eaveY:3.7,doorX:ns.openBayX});const $c=[],Qc=[],ga=i=>(i?.userData?.sway&&$c.push(i),i?.userData?.tick&&Qc.push(i.userData.tick),i),Rn=G1({scene:ge,heroGroup:ma});Rn.houses.forEach((i,t)=>{const[e,n]=Ui(i.pos.x,i.pos.z);ls(e,n,[{id:as("house",e,n,t),type:i.name==="hero"?"hero":"house",x:i.pos.x,z:i.pos.z,y:0,data:{name:i.name}}])});window.__world={stats:ef};const Go=qy();ge.add(Go.group);Go.mesh&&Go.mesh.material&&Le.registerWet&&Le.registerWet(Go.mesh.material);const OM=Ky();ge.add(OM.group);ge.add(nM());const FM=oM();ge.add(FM.group);const jc=_M(Le);ge.add(jc.group);for(const i of jc.tickers)Qc.push(i);for(const i of jc.vegRoots)$c.push(i);const Vr=yM(Le);{const i=DM(Le,-48,-28,-2.03);ge.add(i.group);const t=PM(Le,-51,-29.5,2.68);ge.add(t.group)}ge.add(Vr.group);for(const i of Vr.houses)Rn.houses.push({name:i.name,group:i.group,glowMats:i.glowMats,pos:i.pos});const uc=[];function zM(i){if(i.params&&i.params.isShop)return"shop";const t=String(i.name||"").toLowerCase(),e=i.params&&i.params.winLayout;return t.startsWith("shed")||Array.isArray(e)&&e.length&&e.every(n=>!n)?"shed":t.startsWith("hamlet")||t.startsWith("farm")||t.startsWith("barn")?"farm":t==="hero"||t.startsWith("hero")?"hero":"home"}function BM(i,t){if(i.params&&typeof i.params.seed=="number")return i.params.seed>>>0;let e=2166136261;const n=String(i.name||"house"+t);for(let s=0;s<n.length;s++)e^=n.charCodeAt(s),e=Math.imul(e,16777619);return(e^Math.imul(t+1>>>0,2654435761))>>>0}for(let i=0;i<Rn.houses.length;i++){const t=Rn.houses[i],e=zM(t),n=BM(t,i),s={...t.params||{},name:t.name,kind:e,seed:n};e==="hero"&&(s.w=10,s.d=6.4,s.wallH=2.9);const r=EM(t.group,s,Le),o=CM(t.group,s,Le);if(r&&r.cloth)for(const a of r.cloth)uc.push(a);if(o&&o.cloth)for(const a of o.cloth)uc.push(a);if(r&&r.glow&&t.glowMats)for(const a of r.glow)t.glowMats.push(a)}console.log("WORLD registry: "+JSON.stringify(ef()));const Sn=ty(Rn);ge.add(Sn.group);const kM=Uy({lampLights:Sn.lampLights,lampGlows:Sn.lampGlows,houses:Rn.houses}),hf=zy(Le,7.5,24.5,Ae(7.5,24.5));ge.add(hf.group);py(ge,Le,{signPos:[6.5,0,14.5],signRy:-.5,plaquePos:[1,0,9.7],plaqueRy:-.35});const cs=o1(Le);cs.group.position.set(-13.5,0,7);ge.add(cs.group);[[-4.2,4.6,1.3,.75],[6.8,4.4,1,.55],[-8.2,-6.2,1.5,.9],[13.5,-8.5,1.1,.4],[-16,3.5,.9,.65]].forEach(([i,t,e,n],s)=>{const r=rf(Le,s+1,e,n,i,t);r.position.set(i,0,t),ge.add(r),ga(r)});{const i=[[-4.2,4.6,1.3],[6.8,4.4,1],[-8.2,-6.2,1.5],[13.5,-8.5,1.1],[-16,3.5,.9]].map(([e,n,s],r)=>({x:e,y:.05,z:n,r:s,seed:700+r})),t=lf(i);t&&ge.add(t)}[[0,-5.5],[-7.6,4.6],[7.5,-8.5]].forEach(([i,t],e)=>{const n=of(Le,10+e,i,t);ge.add(n),ga(n)});[[-3.6,3.4,.55],[3.6,3.4,.5],[11,10.6,.6],[-11,10.6,.55],[-2,-8.6,.5]].forEach(([i,t,e],n)=>{const s=Kc(20+n,e);s.position.set(i,.25,t),ge.add(s),ga(s)});for(const[i,t,e,n,s]of[[0,4,8,2.5,31],[-6,13,7,4,32],[2,-7.5,20,1.5,33]]){const r=Zc(s,60,[e,n]);r.position.set(i,.04,t),ge.add(r)}{const i=ul(41,2.4,2);i.rotation.y=-Math.PI/2,i.position.set(-5.08,.9,-1),ge.add(i);const t=ul(42,3,1.8);t.position.set(-9,.7,-8.92),ge.add(t);const e=ul(43,2.4,1.8);e.rotation.y=Math.PI/2,e.position.set(-9.68,.7,13.5),ge.add(e)}for(const[i,t,e,n,s]of[[-5.4,2.4,1.6,1,51],[5.4,2.4,1.6,1,52],[-4.2,8.9,1.2,.8,53],[0,4.2,2.2,1.4,54]]){const r=af(s,e,n);r.position.set(i,.055,t),r.rotation.y=s,ge.add(r)}for(const[i,t,e,n,s]of[[-3.9,3.7,.9,.9,61],[3.1,3.7,.9,.9,62],[-8.4,2.2,.7,.7,63],[8.9,2.2,.7,.7,64]]){const r=af(s,e,n);r.position.set(i,.055,t),r.rotation.y=s*.7,ge.add(r)}for(const[i,t,e,n]of[[-7.5,2.45,71,24],[-1.2,2.45,72,24],[4.8,2.45,73,24],[8.6,3.4,74,18],[-4.2,10.6,75,14]]){const s=Zc(e,n,[1.2,1.2]);s.position.set(i,.04,t),ge.add(s)}for(const[i,t,e,n]of[[-2.5,-5.5,.85,81],[3,-5.2,1,82]]){const s=Kc(n,e);s.position.set(i,.25,t),ge.add(s),ga(s)}{const i=(s,r)=>((Math.imul(s+1,2654435761)^Math.imul(r,40503))>>>0>>>0)/4294967296,t=[12728868,14711592,10115616,7178812],e=(s,r,o,a,l)=>{const c=new be(.22,.18),h=new ze(c,Le.mapleLeaf,a),d=new me,u=new It;for(let f=0;f<a;f++){const g=i(f,l)*Math.PI*2,v=Math.sqrt(i(f,l+1))*o;d.position.set(s+Math.cos(g)*v,.05,r+Math.sin(g)*v),d.rotation.set(-Math.PI/2,0,i(f,l+2)*Math.PI*2),d.updateMatrix(),h.setMatrixAt(f,d.matrix),u.setHex(t[Math.floor(i(f,l+3)*t.length)]),u.offsetHSL((i(f,l+4)-.5)*.05,0,(i(f,l+5)-.5)*.08),h.setColorAt(f,u)}h.instanceMatrix.needsUpdate=!0,h.instanceColor&&(h.instanceColor.needsUpdate=!0),h.receiveShadow=!0,ge.add(h)};e(-4.2,4.6,1.1,60,91),e(6.8,4.4,1,50,92);const n=(s,r,o,a)=>{const l=new ze(new Ic(.05,0),Le.stone,40),c=new me;for(let h=0;h<40;h++){c.position.set(s+i(h,a)*(r-s),.07,o+(i(h,a+1)-.5)*.5),c.rotation.set(i(h,a+2)*3,i(h,a+3)*3,0);const d=.7+i(h,a+4)*.8;c.scale.set(d,d*.75,d),c.updateMatrix(),l.setMatrixAt(h,c.matrix)}l.instanceMatrix.needsUpdate=!0,l.castShadow=!1,l.receiveShadow=!0,ge.add(l)};n(-6,-1,4.9,93),n(1,6,8.2,94)}const uf=M1(Le,{leafSources:[{x:-4.2,z:4.6,r:2.4},{x:6.8,z:4.4,r:2.4},{x:-8.2,z:-6.2,r:2.4},{x:13.5,z:-8.5,r:2.4},{x:-16,z:3.5,r:2.6}]});ge.add(uf.group);const qu=Rn.group.getObjectByName("drainage")?.userData.waterMat||null,ji=y1({scene:ge,pondWaterMats:qu?[cs.waterMat,qu]:[cs.waterMat],wetMats:Le._wet||[],heightFn:(i,t)=>Ae(i,t),snowMats:[Le.stone,Le.gravel,Le.grass,Le.roofTile,Le.roofTileAlt,Le.ridge].filter(Boolean),dripPoints:Rn.dripPoints||[],basins:Rn.basins||[]}),dc=iy(ge),Gs=ny({renderer:Ze,scene:ge,sun:LM,hemi:IM,skyMat:NM,houses:Rn.houses,lampGlows:Sn.lampGlows,lampLights:Sn.lampLights,vendGlow:Sn.group.userData.vendGlow,stars:dc.stars,moon:dc.moon}),{camera:xi,controls:ts}=O1(Ze),hs=ry(xi,ts),Ho=[],Vo=[],th={items:[]};function ml(i,t,e,n,s,r){const o=i-e/2,a=i+e/2,l=t-n/2,c=t+n/2,h=.15;if(s===null)return[{x0:o,x1:a,z0:l,z1:c}];const d=s-.55,u=s+.55;return[{x0:o,x1:d,z0:c-h,z1:c+h},{x0:u,x1:a,z0:c-h,z1:c+h},{x0:o,x1:a,z0:l-h,z1:l+h},{x0:o-h,x1:o+h,z0:l,z1:c},{x0:a-h,x1:a+h,z0:l,z1:c},{x0:d,x1:u,z0:c-.35,z1:c+.35,blockWhen:r}]}function Ku(i,t,e,n){if(!e)return null;const s=i/(t??3);return n+(e<0?-i/2+s*.5:i/2-s*.5)}try{for(const t of Rn.houses){if(t.name==="hero")continue;const e=t.params||{},n=e.w??6,s=e.d??6,r=(t.sliders||[]).length&&(e.doorSide??0)!==0?Ku(n,e.facadeCols,e.doorSide,t.pos.x):null,o=()=>(t._slideItems||[]).some(a=>a&&a.target>.5);for(const a of ml(t.pos.x,t.pos.z,n,s,r,o))Ho.push(a);r!==null&&Vo.push({x0:t.pos.x-n/2,x1:t.pos.x+n/2,z0:t.pos.z-s/2,z1:t.pos.z+s/2})}const i=Ni.find(t=>t.name==="hero");if(i){const t=ns&&typeof ns.openBayX=="number"?ns.openBayX+i.cx:null,e=()=>th.items.some(n=>n&&n.target>.5);for(const n of ml(i.cx,i.cz,i.w,i.d,t,e))Ho.push(n);t!==null&&Vo.push({x0:i.cx-i.w/2,x1:i.cx+i.w/2,z0:i.cz-i.d/2,z1:i.cz+i.d/2})}for(const t of Vr.houses){const e=t.params||{},n=e.w??t.w??6,s=e.d??t.d??6,r=(t.sliders||[]).length&&(e.doorSide??0)!==0?Ku(n,e.facadeCols,e.doorSide,t.pos.x):null,o=()=>(t._slideItems||[]).some(a=>a&&a.target>.5);for(const a of ml(t.pos.x,t.pos.z,n,s,r,o))Ho.push(a);r!==null&&Vo.push({x0:t.pos.x-n/2,x1:t.pos.x+n/2,z0:t.pos.z-s/2,z1:t.pos.z+s/2})}}catch{}const kr=ly(xi,Ze.domElement,{heightFn:(i,t)=>{let e=0;try{e=Ae(i,t)}catch{e=0}Number.isFinite(e)||(e=0);for(const n of Vo)if(i>n.x0&&i<n.x1&&t>n.z0&&t<n.z1)return Math.max(e,.7);return e},solids:Ho});window.__explore={get on(){try{return kr.enabled}catch{return!1}}};window.addEventListener("tsuki-explore",i=>{try{let t=!1,e=null;try{const n=i&&i.detail;n&&typeof n=="object"?(t=!!n.on,e=n.spawn||null):t=!!n}catch{}if(t){try{hs.setMode("free")}catch{}ts.enabled=!1;const n=e||{x:0,z:10};kr.setEnabled(!0,{x:n.x??0,z:n.z??10,yaw:Math.PI})}else{kr.setEnabled(!1),ts.enabled=!0;try{hs.setMode("orbit")}catch{}}}catch{}});const Wr=oy(xi,Ze.domElement);for(const i of ns.sliders||[]){const t=Wr.addSlide(i.node,i.open);t&&(t.t=0,th.items.push(t))}for(const i of[...Rn.houses,...Vr.houses||[]]){i._slideItems=i._slideItems||[];for(const t of i.sliders||[])try{const e=Wr.addSlide(t.node,t.open);e&&(e.t=0,i._slideItems.push(e))}catch{}}{const i=(Sn.group.userData.radioMeshes||[]).filter(Boolean);i.length&&Wr.onTap(i,()=>{try{const t=ei.state?ei.state():null;ei.setEnabled(t&&typeof t.enabled=="boolean"?!t.enabled:!0)}catch{}})}console.log("INTERACT targets: "+Wr.count);const ei=Q1({camera:xi,scene:ge,zones:Ni});{const i=Sn.group.userData.radioPos||new F(15.5,1.15,14.5);ei.source&&ei.source.position.copy(i)}new URLSearchParams(location.search).get("music")==="0"?ei.setEnabled(!1):j1(ei);window.__audio=ei;hs.onMood(({time:i,wx:t}={})=>{i&&Gs.set(i),t&&ji.setState(t)});const Gr=Ey({renderer:Ze,scene:ge,camera:xi});window.__post=Gr;try{const i=new URLSearchParams(location.search).get("post");Gr.setQuality(i==="high"?"high":i==="low"?"low":"off")}catch{try{Gr.setQuality("off")}catch{}}window.addEventListener("resize",()=>{try{Gr.setSize(window.innerWidth,window.innerHeight)}catch{}});const GM=cs.waterMat.color.clone(),Zu=new It;let fc=60;window.__perf=()=>({calls:Ze.info.render.calls,triangles:Ze.info.render.triangles,geometries:Ze.info.memory.geometries,fps:Math.round(fc),errors:window.__errors||[]});window.__errors=[];window.addEventListener("error",i=>window.__errors.push(String(i.message)));cy({daytime:Gs,weather:ji,cine:hs,hudEl:document.getElementById("hud"),audio:ei});{const i=new URLSearchParams(location.search),t=i.get("time"),e=i.get("wx"),n=i.get("shot");if(t&&Gs.set(t.toUpperCase()),e&&ji.setState(e.toLowerCase()),n!==null&&(hs.setMode("cine"),hs.goTo(Number(n)||0)),i.get("explore")==="1")try{const s=new URLSearchParams(location.search).get("exspawn");let r={x:0,z:10};if(s){const[o,a]=s.split(",").map(Number);Number.isFinite(o)&&Number.isFinite(a)&&(r={x:o,z:a})}window.dispatchEvent(new CustomEvent("tsuki-explore",{detail:{on:!0,spawn:r}}))}catch{}if(i.get("doors")==="1")try{for(const s of th.items)s.target=1;for(const s of[...Rn.houses,...Vr.houses||[]])for(const r of s._slideItems||[])r.target=1}catch{}}const gl=new kc,eh=new URLSearchParams(location.search),df=eh.get("fixed")==="1",Wo=my({fps:Number(eh.get("fps"))||30}),HM=eh.get("lodfar")==="1";let _l=0;window.__cine={get frame(){return Wo.frame},get t(){return Wo.t},get fps(){return Wo.fps},mode:df?"fixed":"wall"};let Ju=!0;function ff(){requestAnimationFrame(ff);let i,t;if(df){const s=Wo.step();i=s.dt,t=s.t}else gl.update(),i=Math.min(gl.getDelta(),.05),t=gl.getElapsed();i>0&&(fc+=(1/Math.max(i,.001)-fc)*.05),_l++;const e=HM?2:xi.position.length()<60?0:xi.position.length()<120?1:2,n=e===0||(e===1?_l%2===0:_l%4===0);if(n){cs.update(t,ji),Zu.copy(GM).lerp(ge.fog.color,.35),cs.waterMat.color.lerp(Zu,.08),uf.update(t,i);for(const s of Qc)s(t)}ns.noren.children.forEach((s,r)=>{s.rotation.x=Math.sin(t*1.3+r*.9)*.06*(.5+zn.gust(t))}),ko.lantern.rotation.x=Math.sin(t*.8)*.03,ko.lantern.rotation.z=Math.cos(t*.6)*.03,ko.lanternLight.intensity=5+Math.sin(t*7.3)*.25+Math.sin(t*13.1)*.15,ji.update(i,t),Gs.update(i,ji);{const s=Gs.state,r=s==="NIGHT"||s==="MOONLIT"||s==="RAIN_NIGHT"||s==="MIST_NIGHT"?1:s==="SUNSET"||s==="BLUE_HOUR"?.45:0;kM.update(i,t,ji.state,r)}if(n&&hf.update(t,i,Dy(7.5,24.5,t)),dc.setMoon(Gs.state==="NIGHT"?1:0),hs.update(i),ei.update(i),Sn&&Sn.group&&!Sn.group.userData.__householdPushed){Sn.group.userData.__householdPushed=!0;for(const s of uc)Sn.cloth.push(s)}ey(Sn,t,zn),n&&dM($c,t,zn),Wr.update(i),kr.update(i),kr.enabled||ts.update(),Yu&&Yu.position.copy(xi.position);try{window.__cam={pos:xi.position.toArray(),tgt:ts&&ts.target?ts.target.toArray():[]}}catch{}if(Gr.render(),Ju){Ju=!1;const s=document.getElementById("loader");s.style.opacity="0",setTimeout(()=>s.remove(),700)}}ff();
