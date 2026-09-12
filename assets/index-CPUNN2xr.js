(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zl="186",Ds={ROTATE:0,DOLLY:1,PAN:2},Cs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xd=0,Xc=1,Yd=2,lr=1,qd=2,sr=3,$i=0,dn=1,Ne=2,qn=0,cr=1,Eo=2,Yc=3,qc=4,Kd=5,As=100,Zd=101,Jd=102,$d=103,Qd=104,jd=200,tf=201,ef=202,nf=203,Cu=204,Pu=205,sf=206,rf=207,of=208,af=209,lf=210,cf=211,hf=212,uf=213,df=214,Ja=0,$a=1,Qa=2,pr=3,ja=4,tl=5,el=6,nl=7,Du=0,ff=1,pf=2,Kn=0,Jl=1,$l=2,Ql=3,Io=4,jl=5,mr=6,gr=7,Lu=300,Qi=301,Us=302,mo=303,Qo=304,No=306,Os=1e3,ui=1001,il=1002,Qe=1003,mf=1004,Ir=1005,sn=1006,jo=1007,Yi=1008,wn=1009,Iu=1010,Nu=1011,_r=1012,tc=1013,$n=1014,Nn=1015,_n=1016,ec=1017,nc=1018,xr=1020,Uu=35902,Ou=35899,Fu=1021,Bu=1022,Un=1023,mi=1026,qi=1027,ic=1028,sc=1029,ji=1030,rc=1031,oc=1033,go=33776,_o=33777,xo=33778,vo=33779,sl=35840,rl=35841,ol=35842,al=35843,ll=36196,cl=37492,hl=37496,ul=37488,dl=37489,To=37490,fl=37491,pl=37808,ml=37809,gl=37810,_l=37811,xl=37812,vl=37813,Ml=37814,yl=37815,Sl=37816,wl=37817,bl=37818,El=37819,Tl=37820,Al=37821,Rl=36492,Cl=36494,Pl=36495,Dl=36283,Ll=36284,Ao=36285,Il=36286,gf=3200,Nl=0,_f=1,hi="",We="srgb",Ro="srgb-linear",Co="linear",Se="srgb",ta=7680,xf=519,vf=512,Mf=513,yf=514,ac=515,Sf=516,wf=517,lc=518,bf=519,Ef=35044,Kc="300 es",Yn=2e3,vr=2001;function Tf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Po(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Af(){const i=Po("canvas");return i.style.display="block",i}const Zc={};function Jc(...i){const t="THREE."+i.shift();console.log(t,...i)}function zu(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Jt(...i){i=zu(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function me(...i){i=zu(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ls(...i){const t=i.join(" ");t in Zc||(Zc[t]=!0,Jt(...i))}function Rf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Cf={[Ja]:$a,[Qa]:el,[ja]:nl,[pr]:tl,[$a]:Ja,[el]:Qa,[nl]:ja,[tl]:pr};class Ci{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $c=1234567;const hr=Math.PI/180,Fs=180/Math.PI;function rs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function se(i,t,e){return Math.max(t,Math.min(e,i))}function cc(i,t){return(i%t+t)%t}function Pf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Df(i,t,e){return i!==t?(e-i)/(t-i):0}function ur(i,t,e){return(1-e)*i+e*t}function Lf(i,t,e,n){return ur(i,t,1-Math.exp(-e*n))}function If(i,t=1){return t-Math.abs(cc(i,t*2)-t)}function Nf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Uf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Of(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ff(i,t){return i+Math.random()*(t-i)}function Bf(i){return i*(.5-Math.random())}function zf(i){i!==void 0&&($c=i);let t=$c+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function kf(i){return i*hr}function Gf(i){return i*Fs}function Hf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Vf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Wf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xf(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*_,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*_,a*c);break;case"ZYZ":i.set(l*_,l*f,a*h,a*c);break;default:Jt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Rs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ln(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const $e={DEG2RAD:hr,RAD2DEG:Fs,generateUUID:rs,clamp:se,euclideanModulo:cc,mapLinear:Pf,inverseLerp:Df,lerp:ur,damp:Lf,pingpong:If,smoothstep:Nf,smootherstep:Uf,randInt:Of,randFloat:Ff,randFloatSpread:Bf,seededRandom:zf,degToRad:kf,radToDeg:Gf,isPowerOfTwo:Hf,ceilPowerOfTwo:Vf,floorPowerOfTwo:Wf,setQuaternionFromProperEuler:Xf,normalize:ln,denormalize:Rs},zc=class zc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};zc.prototype.isVector2=!0;let ot=zc;class Bn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],_=r[o+2],v=r[o+3];if(d!==v||l!==u||c!==f||h!==_){let p=l*u+c*f+h*_+d*v;p<0&&(u=-u,f=-f,_=-_,v=-v,p=-p);let m=1-a;if(p<.9995){const M=Math.acos(p),y=Math.sin(M);m=Math.sin(m*M)/y,a=Math.sin(a*M)/y,l=l*m+u*a,c=c*m+f*a,h=h*m+_*a,d=d*m+v*a}else{l=l*m+u*a,c=c*m+f*a,h=h*m+_*a,d=d*m+v*a;const M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],_=r[o+3];return t[e]=a*_+h*d+l*f-c*u,t[e+1]=l*_+h*u+c*d-a*f,t[e+2]=c*_+h*f+a*u-l*d,t[e+3]=h*_-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"YXZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"ZXY":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"ZYX":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"YZX":this._x=u*h*d+c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d-u*f*_;break;case"XZY":this._x=u*h*d-c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d+u*f*_;break;default:Jt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const kc=class kc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Qc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Qc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ea.copy(this).projectOnVector(t),this.sub(ea)}reflect(t){return this.sub(ea.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};kc.prototype.isVector3=!0;let O=kc;const ea=new O,Qc=new Bn,Gc=class Gc{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],_=n[8],v=s[0],p=s[3],m=s[6],M=s[1],y=s[4],x=s[7],w=s[2],S=s[5],T=s[8];return r[0]=o*v+a*M+l*w,r[3]=o*p+a*y+l*S,r[6]=o*m+a*x+l*T,r[1]=c*v+h*M+d*w,r[4]=c*p+h*y+d*S,r[7]=c*m+h*x+d*T,r[2]=u*v+f*M+_*w,r[5]=u*p+f*y+_*S,r[8]=u*m+f*x+_*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,_=e*d+n*u+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=d*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=u*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Ls("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(na.makeScale(t,e)),this}rotate(t){return Ls("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(na.makeRotation(-t)),this}translate(t,e){return Ls("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(na.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Gc.prototype.isMatrix3=!0;let ee=Gc;const na=new ee,jc=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),th=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yf(){const i={enabled:!0,workingColorSpace:Ro,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Se&&(s.r=pi(s.r),s.g=pi(s.g),s.b=pi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Se&&(s.r=Is(s.r),s.g=Is(s.g),s.b=Is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hi?Co:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ls("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ls("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ro]:{primaries:t,whitePoint:n,transfer:Co,toXYZ:jc,fromXYZ:th,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:We},outputColorSpaceConfig:{drawingBufferColorSpace:We}},[We]:{primaries:t,whitePoint:n,transfer:Se,toXYZ:jc,fromXYZ:th,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:We}}}),i}const de=Yf();function pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let fs;class qf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{fs===void 0&&(fs=Po("canvas")),fs.width=t.width,fs.height=t.height;const s=fs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=fs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Po("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=pi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(pi(e[n]/255)*255):e[n]=pi(e[n]);return{data:e,width:t.width,height:t.height}}else return Jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Kf=0;class hc{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=rs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ia(s[o].image)):r.push(ia(s[o]))}else r=ia(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ia(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Jt("Texture: Unable to serialize Texture."),{})}let Zf=0;const sa=new O;class rn extends Ci{constructor(t=rn.DEFAULT_IMAGE,e=rn.DEFAULT_MAPPING,n=ui,s=ui,r=sn,o=Yi,a=Un,l=wn,c=rn.DEFAULT_ANISOTROPY,h=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=rs(),this.name="",this.source=new hc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(sa).x}get height(){return this.source.getSize(sa).y}get depth(){return this.source.getSize(sa).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Os:t.x=t.x-Math.floor(t.x);break;case ui:t.x=t.x<0?0:1;break;case il:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Os:t.y=t.y-Math.floor(t.y);break;case ui:t.y=t.y<0?0:1;break;case il:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Lu;rn.DEFAULT_ANISOTROPY=1;const Hc=class Hc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],_=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(_+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,x=(f+1)/2,w=(m+1)/2,S=(h+u)/4,T=(d+v)/4,g=(_+p)/4;return y>x&&y>w?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=S/n,r=T/n):x>w?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=S/s,r=g/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=T/r,s=g/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-_)*(p-_)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(p-_)/M,this.y=(d-v)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hc.prototype.isVector4=!0;let Oe=Hc;class Jf extends Ci{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Oe(0,0,t,e),this.scissorTest=!1,this.viewport=new Oe(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new rn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new hc(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fn extends Jf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ku extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $f extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Lo=class Lo{constructor(t,e,n,s,r,o,a,l,c,h,d,u,f,_,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,f,_,v,p)}set(t,e,n,s,r,o,a,l,c,h,d,u,f,_,v,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=_,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lo().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/ps.setFromMatrixColumn(t,0).length(),r=1/ps.setFromMatrixColumn(t,1).length(),o=1/ps.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,f=o*d,_=a*h,v=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+_*c,e[5]=u-v*c,e[9]=-a*l,e[2]=v-u*c,e[6]=_+f*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,_=c*h,v=c*d;e[0]=u+v*a,e[4]=_*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-_,e[6]=v+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,_=c*h,v=c*d;e[0]=u-v*a,e[4]=-o*d,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*h,e[9]=v-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,f=o*d,_=a*h,v=a*d;e[0]=l*h,e[4]=_*c-f,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=f*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,f=o*c,_=a*l,v=a*c;e[0]=l*h,e[4]=v-u*d,e[8]=_*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+_,e[10]=u-v*d}else if(t.order==="XZY"){const u=o*l,f=o*c,_=a*l,v=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=o*h,e[9]=f*d-_,e[2]=_*d-f,e[6]=a*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qf,t,jf)}lookAt(t,e,n){const s=this.elements;return Mn.subVectors(t,e),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),yi.crossVectors(n,Mn),yi.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),yi.crossVectors(n,Mn)),yi.normalize(),Nr.crossVectors(Mn,yi),s[0]=yi.x,s[4]=Nr.x,s[8]=Mn.x,s[1]=yi.y,s[5]=Nr.y,s[9]=Mn.y,s[2]=yi.z,s[6]=Nr.z,s[10]=Mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],_=n[2],v=n[6],p=n[10],m=n[14],M=n[3],y=n[7],x=n[11],w=n[15],S=s[0],T=s[4],g=s[8],b=s[12],A=s[1],C=s[5],P=s[9],L=s[13],N=s[2],U=s[6],B=s[10],z=s[14],W=s[3],D=s[7],G=s[11],X=s[15];return r[0]=o*S+a*A+l*N+c*W,r[4]=o*T+a*C+l*U+c*D,r[8]=o*g+a*P+l*B+c*G,r[12]=o*b+a*L+l*z+c*X,r[1]=h*S+d*A+u*N+f*W,r[5]=h*T+d*C+u*U+f*D,r[9]=h*g+d*P+u*B+f*G,r[13]=h*b+d*L+u*z+f*X,r[2]=_*S+v*A+p*N+m*W,r[6]=_*T+v*C+p*U+m*D,r[10]=_*g+v*P+p*B+m*G,r[14]=_*b+v*L+p*z+m*X,r[3]=M*S+y*A+x*N+w*W,r[7]=M*T+y*C+x*U+w*D,r[11]=M*g+y*P+x*B+w*G,r[15]=M*b+y*L+x*z+w*X,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],_=t[3],v=t[7],p=t[11],m=t[15],M=l*f-c*u,y=a*f-c*d,x=a*u-l*d,w=o*f-c*h,S=o*u-l*h,T=o*d-a*h;return e*(v*M-p*y+m*x)-n*(_*M-p*w+m*S)+s*(_*y-v*w+m*T)-r*(_*x-v*S+p*T)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],_=t[12],v=t[13],p=t[14],m=t[15],M=e*a-n*o,y=e*l-s*o,x=e*c-r*o,w=n*l-s*a,S=n*c-r*a,T=s*c-r*l,g=h*v-d*_,b=h*p-u*_,A=h*m-f*_,C=d*p-u*v,P=d*m-f*v,L=u*m-f*p,N=M*L-y*P+x*C+w*A-S*b+T*g;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/N;return t[0]=(a*L-l*P+c*C)*U,t[1]=(s*P-n*L-r*C)*U,t[2]=(v*T-p*S+m*w)*U,t[3]=(u*S-d*T-f*w)*U,t[4]=(l*A-o*L-c*b)*U,t[5]=(e*L-s*A+r*b)*U,t[6]=(p*x-_*T-m*y)*U,t[7]=(h*T-u*x+f*y)*U,t[8]=(o*P-a*A+c*g)*U,t[9]=(n*A-e*P-r*g)*U,t[10]=(_*S-v*x+m*M)*U,t[11]=(d*x-h*S-f*M)*U,t[12]=(a*b-o*C-l*g)*U,t[13]=(e*C-n*b+s*g)*U,t[14]=(v*y-_*w-p*M)*U,t[15]=(h*w-d*y+u*M)*U,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,_=r*d,v=o*h,p=o*d,m=a*d,M=l*c,y=l*h,x=l*d,w=n.x,S=n.y,T=n.z;return s[0]=(1-(v+m))*w,s[1]=(f+x)*w,s[2]=(_-y)*w,s[3]=0,s[4]=(f-x)*S,s[5]=(1-(u+m))*S,s[6]=(p+M)*S,s[7]=0,s[8]=(_+y)*T,s[9]=(p-M)*T,s[10]=(1-(u+v))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=ps.set(s[0],s[1],s[2]).length();const a=ps.set(s[4],s[5],s[6]).length(),l=ps.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Pn.copy(this);const c=1/o,h=1/a,d=1/l;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=d,Pn.elements[9]*=d,Pn.elements[10]*=d,e.setFromRotationMatrix(Pn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Yn,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let _,v;if(l)_=r/(o-r),v=o*r/(o-r);else if(a===Yn)_=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===vr)_=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Yn,l=!1){const c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s);let _,v;if(l)_=1/(o-r),v=o/(o-r);else if(a===Yn)_=-2/(o-r),v=-(o+r)/(o-r);else if(a===vr)_=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Lo.prototype.isMatrix4=!0;let ue=Lo;const ps=new O,Pn=new ue,Qf=new O(0,0,0),jf=new O(1,1,1),yi=new O,Nr=new O,Mn=new O,eh=new ue,nh=new Bn;class bn{constructor(t=0,e=0,n=0,s=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return eh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(eh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nh.setFromEuler(this),this.setFromQuaternion(nh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class uc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let tp=0;const ih=new O,ms=new Bn,ni=new ue,Ur=new O,Zs=new O,ep=new O,np=new Bn,sh=new O(1,0,0),rh=new O(0,1,0),oh=new O(0,0,1),ah={type:"added"},ip={type:"removed"},gs={type:"childadded",child:null},ra={type:"childremoved",child:null};class fe extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fe.DEFAULT_UP.clone();const t=new O,e=new bn,n=new Bn,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new ee}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.multiply(ms),this}rotateOnWorldAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.premultiply(ms),this}rotateX(t){return this.rotateOnAxis(sh,t)}rotateY(t){return this.rotateOnAxis(rh,t)}rotateZ(t){return this.rotateOnAxis(oh,t)}translateOnAxis(t,e){return ih.copy(t).applyQuaternion(this.quaternion),this.position.add(ih.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sh,t)}translateY(t){return this.translateOnAxis(rh,t)}translateZ(t){return this.translateOnAxis(oh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ur.copy(t):Ur.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(Zs,Ur,this.up):ni.lookAt(Ur,Zs,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),ms.setFromRotationMatrix(ni),this.quaternion.premultiply(ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(me("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ah),gs.child=t,this.dispatchEvent(gs),gs.child=null):me("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ip),ra.child=t,this.dispatchEvent(ra),ra.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ah),gs.child=t,this.dispatchEvent(gs),gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,t,ep),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,np,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}fe.DEFAULT_UP=new O(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Qt extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sp={type:"move"};class oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,_=.005;c.inputState.pinching&&u>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},Or={h:0,s:0,l:0};function aa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ft{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=de.workingColorSpace){if(t=cc(t,1),e=se(e,0,1),n=se(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=aa(o,r,t+1/3),this.g=aa(o,r,t),this.b=aa(o,r,t-1/3)}return de.colorSpaceToWorking(this,s),this}setStyle(t,e=We){function n(r){r!==void 0&&parseFloat(r)<1&&Jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){const n=Gu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pi(t.r),this.g=pi(t.g),this.b=pi(t.b),this}copyLinearToSRGB(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return de.workingToColorSpace(nn.copy(this),t),Math.round(se(nn.r*255,0,255))*65536+Math.round(se(nn.g*255,0,255))*256+Math.round(se(nn.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.workingToColorSpace(nn.copy(this),e);const n=nn.r,s=nn.g,r=nn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=de.workingColorSpace){return de.workingToColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=We){de.workingToColorSpace(nn.copy(this),t);const e=nn.r,n=nn.g,s=nn.b;return t!==We?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Si),this.setHSL(Si.h+t,Si.s+e,Si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Si),t.getHSL(Or);const n=ur(Si.h,Or.h,e),s=ur(Si.s,Or.s,e),r=ur(Si.l,Or.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new Ft;Ft.NAMES=Gu;class dc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ft(t),this.near=e,this.far=n}clone(){return new dc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class rp extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Dn=new O,ii=new O,la=new O,si=new O,_s=new O,xs=new O,lh=new O,ca=new O,ha=new O,ua=new O,da=new Oe,fa=new Oe,pa=new Oe;class In{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Dn.subVectors(t,e),s.cross(Dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Dn.subVectors(s,e),ii.subVectors(n,e),la.subVectors(t,e);const o=Dn.dot(Dn),a=Dn.dot(ii),l=Dn.dot(la),c=ii.dot(ii),h=ii.dot(la),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,_=(o*h-a*l)*u;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,si.x),l.addScaledVector(o,si.y),l.addScaledVector(a,si.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return da.setScalar(0),fa.setScalar(0),pa.setScalar(0),da.fromBufferAttribute(t,e),fa.fromBufferAttribute(t,n),pa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(da,r.x),o.addScaledVector(fa,r.y),o.addScaledVector(pa,r.z),o}static isFrontFacing(t,e,n,s){return Dn.subVectors(n,e),ii.subVectors(t,e),Dn.cross(ii).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Dn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Dn.cross(ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return In.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return In.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return In.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return In.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return In.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;_s.subVectors(s,n),xs.subVectors(r,n),ca.subVectors(t,n);const l=_s.dot(ca),c=xs.dot(ca);if(l<=0&&c<=0)return e.copy(n);ha.subVectors(t,s);const h=_s.dot(ha),d=xs.dot(ha);if(h>=0&&d<=h)return e.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(_s,o);ua.subVectors(t,r);const f=_s.dot(ua),_=xs.dot(ua);if(_>=0&&f<=_)return e.copy(r);const v=f*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(xs,a);const p=h*_-f*d;if(p<=0&&d-h>=0&&f-_>=0)return lh.subVectors(r,s),a=(d-h)/(d-h+(f-_)),e.copy(s).addScaledVector(lh,a);const m=1/(p+v+u);return o=v*m,a=u*m,e.copy(n).addScaledVector(_s,o).addScaledVector(xs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Pi{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ln):Ln.fromBufferAttribute(r,o),Ln.applyMatrix4(t.matrixWorld),this.expandByPoint(Ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fr.copy(n.boundingBox)),Fr.applyMatrix4(t.matrixWorld),this.union(Fr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Js),Br.subVectors(this.max,Js),vs.subVectors(t.a,Js),Ms.subVectors(t.b,Js),ys.subVectors(t.c,Js),wi.subVectors(Ms,vs),bi.subVectors(ys,Ms),Ni.subVectors(vs,ys);let e=[0,-wi.z,wi.y,0,-bi.z,bi.y,0,-Ni.z,Ni.y,wi.z,0,-wi.x,bi.z,0,-bi.x,Ni.z,0,-Ni.x,-wi.y,wi.x,0,-bi.y,bi.x,0,-Ni.y,Ni.x,0];return!ma(e,vs,Ms,ys,Br)||(e=[1,0,0,0,1,0,0,0,1],!ma(e,vs,Ms,ys,Br))?!1:(zr.crossVectors(wi,bi),e=[zr.x,zr.y,zr.z],ma(e,vs,Ms,ys,Br))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ri=[new O,new O,new O,new O,new O,new O,new O,new O],Ln=new O,Fr=new Pi,vs=new O,Ms=new O,ys=new O,wi=new O,bi=new O,Ni=new O,Js=new O,Br=new O,zr=new O,Ui=new O;function ma(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ui.fromArray(i,r);const a=s.x*Math.abs(Ui.x)+s.y*Math.abs(Ui.y)+s.z*Math.abs(Ui.z),l=t.dot(Ui),c=e.dot(Ui),h=n.dot(Ui);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ve=new O,kr=new ot;let op=0;class Be extends Ci{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:op++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ef,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)kr.fromBufferAttribute(this,e),kr.applyMatrix3(t),this.setXY(e,kr.x,kr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Rs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ln(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Rs(e,this.array)),e}setX(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Rs(e,this.array)),e}setY(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Rs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Rs(e,this.array)),e}setW(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array),r=ln(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Hu extends Be{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Vu extends Be{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ce extends Be{constructor(t,e,n){super(new Float32Array(t),e,n)}}const ap=new Pi,$s=new O,ga=new O;class Vs{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ap.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$s.subVectors(t,this.center);const e=$s.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector($s,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ga.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($s.copy(t.center).add(ga)),this.expandByPoint($s.copy(t.center).sub(ga))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let lp=0;const Tn=new ue,_a=new fe,Ss=new O,yn=new Pi,Qs=new Pi,Je=new O;class we extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Tf(t)?Vu:Hu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Tn.makeRotationFromQuaternion(t),this.applyMatrix4(Tn),this}rotateX(t){return Tn.makeRotationX(t),this.applyMatrix4(Tn),this}rotateY(t){return Tn.makeRotationY(t),this.applyMatrix4(Tn),this}rotateZ(t){return Tn.makeRotationZ(t),this.applyMatrix4(Tn),this}translate(t,e,n){return Tn.makeTranslation(t,e,n),this.applyMatrix4(Tn),this}scale(t,e,n){return Tn.makeScale(t,e,n),this.applyMatrix4(Tn),this}lookAt(t){return _a.lookAt(t),_a.updateMatrix(),this.applyMatrix4(_a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ce(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){me("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&me('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){me("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Je.addVectors(yn.min,Qs.min),yn.expandByPoint(Je),Je.addVectors(yn.max,Qs.max),yn.expandByPoint(Je)):(yn.expandByPoint(Qs.min),yn.expandByPoint(Qs.max))}yn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Je.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Je));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Je.fromBufferAttribute(a,c),l&&(Ss.fromBufferAttribute(t,c),Je.add(Ss)),s=Math.max(s,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&me('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){me("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Be(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let g=0;g<n.count;g++)a[g]=new O,l[g]=new O;const c=new O,h=new O,d=new O,u=new ot,f=new ot,_=new ot,v=new O,p=new O;function m(g,b,A){c.fromBufferAttribute(n,g),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,A),u.fromBufferAttribute(r,g),f.fromBufferAttribute(r,b),_.fromBufferAttribute(r,A),h.sub(c),d.sub(c),f.sub(u),_.sub(u);const C=1/(f.x*_.y-_.x*f.y);isFinite(C)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(C),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(C),a[g].add(v),a[b].add(v),a[A].add(v),l[g].add(p),l[b].add(p),l[A].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let g=0,b=M.length;g<b;++g){const A=M[g],C=A.start,P=A.count;for(let L=C,N=C+P;L<N;L+=3)m(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const y=new O,x=new O,w=new O,S=new O;function T(g){w.fromBufferAttribute(s,g),S.copy(w);const b=a[g];y.copy(b),y.sub(w.multiplyScalar(w.dot(b))).normalize(),x.crossVectors(S,b);const C=x.dot(l[g])<0?-1:1;o.setXYZW(g,y.x,y.y,y.z,C)}for(let g=0,b=M.length;g<b;++g){const A=M[g],C=A.start,P=A.count;for(let L=C,N=C+P;L<N;L+=3)T(t.getX(L+0)),T(t.getX(L+1)),T(t.getX(L+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,h=new O,d=new O;if(t)for(let u=0,f=t.count;u<f;u+=3){const _=t.getX(u+0),v=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,_=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let m=0;m<h;m++)u[_++]=c[f++]}return new Be(u,h,d)}if(this.index===null)return Jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xa=new O,cp=new O,hp=new ee;class ci{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=xa.subVectors(n,e).cross(cp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(xa),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||hp.getNormalMatrix(t),s=this.coplanarPoint(xa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let up=0;class Ws extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=cr,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cu,this.blendDst=Pu,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ta,this.stencilZFail=ta,this.stencilZPass=ta,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Jt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ft().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ci().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ot().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const oi=new O,va=new O,Gr=new O,Hr=new O;class Uo{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,oi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=oi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(oi.copy(this.origin).addScaledVector(this.direction,e),oi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){va.copy(t).add(e).multiplyScalar(.5),Gr.copy(e).sub(t).normalize(),Hr.copy(this.origin).sub(va);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Gr),a=Hr.dot(this.direction),l=-Hr.dot(Gr),c=Hr.lengthSq(),h=Math.abs(1-o*o);let d,u,f,_;if(h>0)if(d=o*l-a,u=o*a-l,_=r*h,d>=0)if(u>=-_)if(u<=_){const v=1/h;d*=v,u*=v,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-_?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=_?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(va).addScaledVector(Gr,u),f}intersectSphere(t,e){if(t.radius<0)return null;oi.subVectors(t.center,this.origin);const n=oi.dot(this.direction),s=oi.dot(oi)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,oi)!==null}intersectTriangle(t,e,n,s,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,_=e.x-o.x,v=e.y-o.y,p=e.z-o.z,m=n.x-o.x,M=n.y-o.y,y=n.z-o.z,x=Math.abs(l),w=Math.abs(c),S=Math.abs(h);let T,g,b,A,C,P,L,N,U,B,z,W;if(x>=w&&x>=S?(b=l,P=d,U=_,W=m,l>=0?(T=c,g=h,A=u,C=f,L=v,N=p,B=M,z=y):(T=h,g=c,A=f,C=u,L=p,N=v,B=y,z=M)):w>=S?(b=c,P=u,U=v,W=M,c>=0?(T=h,g=l,A=f,C=d,L=p,N=_,B=y,z=m):(T=l,g=h,A=d,C=f,L=_,N=p,B=m,z=y)):(b=h,P=f,U=p,W=y,h>=0?(T=l,g=c,A=d,C=u,L=_,N=v,B=m,z=M):(T=c,g=l,A=u,C=d,L=v,N=_,B=M,z=m)),b===0)return null;const D=T/b,G=g/b,X=1/b,ft=A-D*P,gt=C-G*P,Zt=L-D*U,$t=N-G*U,Lt=B-D*W,J=z-G*W,F=Lt*$t-J*Zt,Q=ft*J-gt*Lt,Rt=Zt*gt-$t*ft;if(s){if(F<0||Q<0||Rt<0)return null}else if((F<0||Q<0||Rt<0)&&(F>0||Q>0||Rt>0))return null;const pt=F+Q+Rt;if(pt===0)return null;const _t=X*(F*P+Q*U+Rt*W);return(pt>0?_t<0:_t>0)?null:this.at(_t/pt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gi extends Ws{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Du,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ch=new ue,Oi=new Uo,Vr=new Vs,hh=new O,Wr=new O,Xr=new O,Yr=new O,Ma=new O,qr=new O,uh=new O,Kr=new O;class it extends fe{constructor(t=new we,e=new gi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){qr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(Ma.fromBufferAttribute(d,t),o?qr.addScaledVector(Ma,h):qr.addScaledVector(Ma.sub(e),h))}e.add(qr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(r),Oi.copy(t.ray).recast(t.near),!(Vr.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(Vr,hh)===null||Oi.origin.distanceToSquared(hh)>(t.far-t.near)**2))&&(ch.copy(r).invert(),Oi.copy(t.ray).applyMatrix4(ch),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Oi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=u.length;_<v;_++){const p=u[_],m=o[p.materialIndex],M=Math.max(p.start,f.start),y=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let x=M,w=y;x<w;x+=3){const S=a.getX(x),T=a.getX(x+1),g=a.getX(x+2);s=Zr(this,m,t,n,c,h,d,S,T,g),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=_,m=v;p<m;p+=3){const M=a.getX(p),y=a.getX(p+1),x=a.getX(p+2);s=Zr(this,o,t,n,c,h,d,M,y,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=u.length;_<v;_++){const p=u[_],m=o[p.materialIndex],M=Math.max(p.start,f.start),y=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let x=M,w=y;x<w;x+=3){const S=x,T=x+1,g=x+2;s=Zr(this,m,t,n,c,h,d,S,T,g),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=_,m=v;p<m;p+=3){const M=p,y=p+1,x=p+2;s=Zr(this,o,t,n,c,h,d,M,y,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function dp(i,t,e,n,s,r,o,a){let l;if(t.side===dn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===$i,a),l===null)return null;Kr.copy(a),Kr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Kr);return c<e.near||c>e.far?null:{distance:c,point:Kr.clone(),object:i}}function Zr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Wr),i.getVertexPosition(l,Xr),i.getVertexPosition(c,Yr);const h=dp(i,t,e,n,Wr,Xr,Yr,uh);if(h){const d=new O;In.getBarycoord(uh,Wr,Xr,Yr,d),s&&(h.uv=In.getInterpolatedAttribute(s,a,l,c,d,new ot)),r&&(h.uv1=In.getInterpolatedAttribute(r,a,l,c,d,new ot)),o&&(h.normal=In.getInterpolatedAttribute(o,a,l,c,d,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new O,materialIndex:0};In.getNormal(Wr,Xr,Yr,u.normal),h.face=u,h.barycoord=d}return h}class Wu extends rn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Qe,h=Qe,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dh extends Be{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ws=new ue,fh=new ue,Jr=[],ph=new Pi,fp=new ue,js=new it,tr=new Vs;class Ie extends it{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new dh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,fp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Pi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ws),ph.copy(t.boundingBox).applyMatrix4(ws),this.boundingBox.union(ph)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ws),tr.copy(t.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(tr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(js.geometry=this.geometry,js.material=this.material,js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tr.copy(this.boundingSphere),tr.applyMatrix4(n),t.ray.intersectsSphere(tr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ws),fh.multiplyMatrices(n,ws),js.matrixWorld=fh,js.raycast(t,Jr);for(let o=0,a=Jr.length;o<a;o++){const l=Jr[o];l.instanceId=r,l.object=this,e.push(l)}Jr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new dh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wu(new Float32Array(s*this.count),s,this.count,ic,Nn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Fi=new Vs,pp=new ot(.5,.5),$r=new O;class fc{constructor(t=new ci,e=new ci,n=new ci,s=new ci,r=new ci,o=new ci){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Yn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],_=r[8],v=r[9],p=r[10],m=r[11],M=r[12],y=r[13],x=r[14],w=r[15];if(s[0].setComponents(c-o,f-h,m-_,w-M).normalize(),s[1].setComponents(c+o,f+h,m+_,w+M).normalize(),s[2].setComponents(c+a,f+d,m+v,w+y).normalize(),s[3].setComponents(c-a,f-d,m-v,w-y).normalize(),n)s[4].setComponents(l,u,p,x).normalize(),s[5].setComponents(c-l,f-u,m-p,w-x).normalize();else if(s[4].setComponents(c-l,f-u,m-p,w-x).normalize(),e===Yn)s[5].setComponents(c+l,f+u,m+p,w+x).normalize();else if(e===vr)s[5].setComponents(l,u,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(t){Fi.center.set(0,0,0);const e=pp.distanceTo(t.center);return Fi.radius=.7071067811865476+e,Fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if($r.x=s.normal.x>0?t.max.x:t.min.x,$r.y=s.normal.y>0?t.max.y:t.min.y,$r.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint($r)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Bs extends Ws{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const mh=new ue,Ul=new Uo,Qr=new Vs,jr=new O;class Mr extends fe{constructor(t=new we,e=new Bs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(s),Qr.radius+=r,t.ray.intersectsSphere(Qr)===!1)return;mh.copy(s).invert(),Ul.copy(t.ray).applyMatrix4(mh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let _=u,v=f;_<v;_++){const p=c.getX(_);jr.fromBufferAttribute(d,p),gh(jr,p,l,s,t,e,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let _=u,v=f;_<v;_++)jr.fromBufferAttribute(d,_),gh(jr,_,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function gh(i,t,e,n,s,r,o){const a=Ul.distanceSqToPoint(i);if(a<e){const l=new O;Ul.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Xu extends rn{constructor(t=[],e=Qi,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Cn extends rn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yr extends rn{constructor(t,e,n=$n,s,r,o,a=Qe,l=Qe,c,h=mi,d=1){if(h!==mi&&h!==qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new hc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class mp extends yr{constructor(t,e=$n,n=Qi,s,r,o=Qe,a=Qe,l,c=mi){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Yu extends rn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Pt extends we{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(d,2));function _(v,p,m,M,y,x,w,S,T,g,b){const A=x/T,C=w/g,P=x/2,L=w/2,N=S/2,U=T+1,B=g+1;let z=0,W=0;const D=new O;for(let G=0;G<B;G++){const X=G*C-L;for(let ft=0;ft<U;ft++){const gt=ft*A-P;D[v]=gt*M,D[p]=X*y,D[m]=N,c.push(D.x,D.y,D.z),D[v]=0,D[p]=0,D[m]=S>0?1:-1,h.push(D.x,D.y,D.z),d.push(ft/T),d.push(1-G/g),z+=1}}for(let G=0;G<g;G++)for(let X=0;X<T;X++){const ft=u+X+U*G,gt=u+X+U*(G+1),Zt=u+(X+1)+U*(G+1),$t=u+(X+1)+U*G;l.push(ft,gt,$t),l.push(gt,Zt,$t),W+=6}a.addGroup(f,W,b),f+=W,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Di extends we{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new O,h=new ot;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ce(o,3)),this.setAttribute("normal",new ce(a,3)),this.setAttribute("uv",new ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Di(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ge extends we{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let _=0;const v=[],p=n/2;let m=0;M(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ce(d,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(f,2));function M(){const x=new O,w=new O;let S=0;const T=(e-t)/n;for(let g=0;g<=r;g++){const b=[],A=g/r,C=A*(e-t)+t;for(let P=0;P<=s;P++){const L=P/s,N=L*l+a,U=Math.sin(N),B=Math.cos(N);w.x=C*U,w.y=-A*n+p,w.z=C*B,d.push(w.x,w.y,w.z),x.set(U,T,B).normalize(),u.push(x.x,x.y,x.z),f.push(L,1-A),b.push(_++)}v.push(b)}for(let g=0;g<s;g++)for(let b=0;b<r;b++){const A=v[b][g],C=v[b+1][g],P=v[b+1][g+1],L=v[b][g+1];(t>0||b!==0)&&(h.push(A,C,L),S+=3),(e>0||b!==r-1)&&(h.push(C,P,L),S+=3)}c.addGroup(m,S,0),m+=S}function y(x){const w=_,S=new ot,T=new O;let g=0;const b=x===!0?t:e,A=x===!0?1:-1;for(let P=1;P<=s;P++)d.push(0,p*A,0),u.push(0,A,0),f.push(.5,.5),_++;const C=_;for(let P=0;P<=s;P++){const N=P/s*l+a,U=Math.cos(N),B=Math.sin(N);T.x=b*B,T.y=p*A,T.z=b*U,d.push(T.x,T.y,T.z),u.push(0,A,0),S.x=U*.5+.5,S.y=B*.5*A+.5,f.push(S.x,S.y),_++}for(let P=0;P<s;P++){const L=w+P,N=C+P;x===!0?h.push(N,N+1,L):h.push(N+1,N,L),g+=3}c.addGroup(m,g,x===!0?1:2),m+=g}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ge(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class pc extends ge{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new pc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Oo extends we{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new ce(r,3)),this.setAttribute("normal",new ce(r.slice(),3)),this.setAttribute("uv",new ce(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const y=new O,x=new O,w=new O;for(let S=0;S<e.length;S+=3)f(e[S+0],y),f(e[S+1],x),f(e[S+2],w),l(y,x,w,M)}function l(M,y,x,w){const S=w+1,T=[];for(let g=0;g<=S;g++){T[g]=[];const b=M.clone().lerp(x,g/S),A=y.clone().lerp(x,g/S),C=S-g;for(let P=0;P<=C;P++)P===0&&g===S?T[g][P]=b:T[g][P]=b.clone().lerp(A,P/C)}for(let g=0;g<S;g++)for(let b=0;b<2*(S-g)-1;b++){const A=Math.floor(b/2);b%2===0?(u(T[g][A+1]),u(T[g+1][A]),u(T[g][A])):(u(T[g][A+1]),u(T[g+1][A+1]),u(T[g+1][A]))}}function c(M){const y=new O;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(M),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function h(){const M=new O;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];const x=p(M)/2/Math.PI+.5,w=m(M)/Math.PI+.5;o.push(x,1-w)}_(),d()}function d(){for(let M=0;M<o.length;M+=6){const y=o[M+0],x=o[M+2],w=o[M+4],S=Math.max(y,x,w),T=Math.min(y,x,w);S>.9&&T<.1&&(y<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),w<.2&&(o[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function f(M,y){const x=M*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function _(){const M=new O,y=new O,x=new O,w=new O,S=new ot,T=new ot,g=new ot;for(let b=0,A=0;b<r.length;b+=9,A+=6){M.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),x.set(r[b+6],r[b+7],r[b+8]),S.set(o[A+0],o[A+1]),T.set(o[A+2],o[A+3]),g.set(o[A+4],o[A+5]),w.copy(M).add(y).add(x).divideScalar(3);const C=p(w);v(S,A+0,M,C),v(T,A+2,y,C),v(g,A+4,x,C)}}function v(M,y,x,w){w<0&&M.x===1&&(o[y]=M.x-1),x.x===0&&x.z===0&&(o[y]=w/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oo(t.vertices,t.indices,t.radius,t.detail)}}class mc extends Oo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new mc(t.radius,t.detail)}}class jn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ot:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new O,s=[],r=[],o=[],a=new O,l=new ue;for(let f=0;f<=t;f++){const _=f/t;s[f]=this.getTangentAt(_,new O)}r[0]=new O,o[0]=new O;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(se(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,_))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(se(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],f*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class gc extends jn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ot){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class gp extends gc{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function _c(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const _h=new O,xh=new O,ya=new _c,Sa=new _c,wa=new _c;class _p extends jn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new O){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(xh.subVectors(s[0],s[1]).add(s[0]),c=xh);const d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(_h.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=_h),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),_<1e-4&&(_=v),p<1e-4&&(p=v),ya.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,_,v,p),Sa.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,_,v,p),wa.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,_,v,p)}else this.curveType==="catmullrom"&&(ya.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Sa.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),wa.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(ya.calc(l),Sa.calc(l),wa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function vh(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function xp(i,t){const e=1-i;return e*e*t}function vp(i,t){return 2*(1-i)*i*t}function Mp(i,t){return i*i*t}function dr(i,t,e,n){return xp(i,t)+vp(i,e)+Mp(i,n)}function yp(i,t){const e=1-i;return e*e*e*t}function Sp(i,t){const e=1-i;return 3*e*e*i*t}function wp(i,t){return 3*(1-i)*i*i*t}function bp(i,t){return i*i*i*t}function fr(i,t,e,n,s){return yp(i,t)+Sp(i,e)+wp(i,n)+bp(i,s)}class qu extends jn{constructor(t=new ot,e=new ot,n=new ot,s=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ot){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fr(t,s.x,r.x,o.x,a.x),fr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ep extends jn{constructor(t=new O,e=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new O){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fr(t,s.x,r.x,o.x,a.x),fr(t,s.y,r.y,o.y,a.y),fr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ku extends jn{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tp extends jn{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zu extends jn{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(dr(t,s.x,r.x,o.x),dr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xc extends jn{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(dr(t,s.x,r.x,o.x),dr(t,s.y,r.y,o.y),dr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ju extends jn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(vh(a,l.x,c.x,h.x,d.x),vh(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ot().fromArray(s))}return this}}var Do=Object.freeze({__proto__:null,ArcCurve:gp,CatmullRomCurve3:_p,CubicBezierCurve:qu,CubicBezierCurve3:Ep,EllipseCurve:gc,LineCurve:Ku,LineCurve3:Tp,QuadraticBezierCurve:Zu,QuadraticBezierCurve3:xc,SplineCurve:Ju});class Ap extends jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Do[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Do[s.type]().fromJSON(s))}return this}}class Mh extends Ap{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ku(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Zu(this.currentPoint.clone(),new ot(t,e),new ot(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new qu(this.currentPoint.clone(),new ot(t,e),new ot(n,s),new ot(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Ju(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new gc(t,e,n,s,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Rr extends Mh{constructor(t){super(t),this.uuid=rs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Mh().fromJSON(s))}return this}}function Rp(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=$u(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Ip(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,d=l;for(let u=e;u<s;u+=e){const f=i[u],_=i[u+1];f<a&&(a=f),_<l&&(l=_),f>h&&(h=f),_>d&&(d=_)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Sr(r,o,e,a,l,c,0),o}function $u(i,t,e,n,s){let r;if(s===Wp(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=yh(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=yh(o/n|0,i[o],i[o+1],r);return r&&zs(r,r.next)&&(br(r),r=r.next),r}function ts(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(zs(e,e.next)||Fe(e.prev,e,e.next)===0)){if(br(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Sr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Bp(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Pp(i,n,s,r):Cp(i)){t.push(l.i,i.i,c.i),br(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Dp(ts(i),t),Sr(i,t,e,n,s,r,2)):o===2&&Lp(i,t,e,n,s,r):Sr(ts(i),t,e,n,s,r,1);break}}}function Cp(i){const t=i.prev,e=i,n=i.next;if(Fe(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c);let _=n.next;for(;_!==t;){if(_.x>=h&&_.x<=u&&_.y>=d&&_.y<=f&&rr(s,a,r,l,o,c,_.x,_.y)&&Fe(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Pp(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Fe(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),_=Math.min(h,d,u),v=Math.max(a,l,c),p=Math.max(h,d,u),m=Ol(f,_,t,e,n),M=Ol(v,p,t,e,n);let y=i.prevZ,x=i.nextZ;for(;y&&y.z>=m&&x&&x.z<=M;){if(y.x>=f&&y.x<=v&&y.y>=_&&y.y<=p&&y!==s&&y!==o&&rr(a,h,l,d,c,u,y.x,y.y)&&Fe(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=v&&x.y>=_&&x.y<=p&&x!==s&&x!==o&&rr(a,h,l,d,c,u,x.x,x.y)&&Fe(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=v&&y.y>=_&&y.y<=p&&y!==s&&y!==o&&rr(a,h,l,d,c,u,y.x,y.y)&&Fe(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=M;){if(x.x>=f&&x.x<=v&&x.y>=_&&x.y<=p&&x!==s&&x!==o&&rr(a,h,l,d,c,u,x.x,x.y)&&Fe(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Dp(i,t){let e=i;do{const n=e.prev,s=e.next.next;!zs(n,s)&&ju(n,e,e.next,s)&&wr(n,s)&&wr(s,n)&&(t.push(n.i,e.i,s.i),br(e),br(e.next),e=i=s),e=e.next}while(e!==i);return ts(e)}function Lp(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Gp(o,a)){let l=td(o,a);o=ts(o,o.next),l=ts(l,l.next),Sr(o,t,e,n,s,r,0),Sr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Ip(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=$u(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(kp(c))}s.sort(Np);for(let r=0;r<s.length;r++)e=Up(s[r],e);return e}function Np(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Up(i,t){const e=Op(i,t);if(!e)return t;const n=td(e,i);return ts(n,n.next),ts(e,e.next)}function Op(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(zs(i,e))return e;do{if(zs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Qu(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const d=Math.abs(s-e.y)/(n-e.x);wr(e,i)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&Fp(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function Fp(i,t){return Fe(i.prev,i,t.prev)<0&&Fe(t.next,i,i.next)<0}function Bp(i,t,e,n){let s=i;do s.z===0&&(s.z=Ol(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,zp(s)}function zp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Ol(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function kp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Qu(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function rr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Qu(i,t,e,n,s,r,o,a)}function Gp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Hp(i,t)&&(wr(i,t)&&wr(t,i)&&Vp(i,t)&&(Fe(i.prev,i,t.prev)||Fe(i,t.prev,t))||zs(i,t)&&Fe(i.prev,i,i.next)>0&&Fe(t.prev,t,t.next)>0)}function Fe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function zs(i,t){return i.x===t.x&&i.y===t.y}function ju(i,t,e,n){const s=eo(Fe(i,t,e)),r=eo(Fe(i,t,n)),o=eo(Fe(e,n,i)),a=eo(Fe(e,n,t));return!!(s!==r&&o!==a||s===0&&to(i,e,t)||r===0&&to(i,n,t)||o===0&&to(e,i,n)||a===0&&to(e,t,n))}function to(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function eo(i){return i>0?1:i<0?-1:0}function Hp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ju(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function wr(i,t){return Fe(i.prev,i,i.next)<0?Fe(i,t,i.next)>=0&&Fe(i,i.prev,t)>=0:Fe(i,t,i.prev)<0||Fe(i,i.next,t)<0}function Vp(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function td(i,t){const e=Fl(i.i,i.x,i.y),n=Fl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function yh(i,t,e,n){const s=Fl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function br(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Fl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Wp(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Xp{static triangulate(t,e,n=2){return Rp(t,e,n)}}class di{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return di.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Sh(t),wh(n,t);let o=t.length;e.forEach(Sh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,wh(n,e[l]);const a=Xp.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Sh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function wh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class vc extends we{constructor(t=new Rr([new ot(.5,.5),new ot(-.5,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new ce(s,3)),this.setAttribute("uv",new ce(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Yp;let y,x=!1,w,S,T,g;if(m){y=m.getSpacedPoints(h),x=!0,u=!1;const j=m.isCatmullRomCurve3?m.closed:!1;w=m.computeFrenetFrames(h,j),S=new O,T=new O,g=new O}u||(p=0,f=0,_=0,v=0);const b=a.extractPoints(c);let A=b.shape;const C=b.holes;if(!di.isClockWise(A)){A=A.reverse();for(let j=0,at=C.length;j<at;j++){const ut=C[j];di.isClockWise(ut)&&(C[j]=ut.reverse())}}function L(j){const ut=10000000000000001e-36;let lt=j[0];for(let dt=1;dt<=j.length;dt++){const zt=dt%j.length,Nt=j[zt],kt=Nt.x-lt.x,Kt=Nt.y-lt.y,k=kt*kt+Kt*Kt,pe=Math.max(Math.abs(Nt.x),Math.abs(Nt.y),Math.abs(lt.x),Math.abs(lt.y)),re=ut*pe*pe;if(k<=re){j.splice(zt,1),dt--;continue}lt=Nt}}L(A),C.forEach(L);const N=C.length,U=A;for(let j=0;j<N;j++){const at=C[j];A=A.concat(at)}function B(j,at,ut){return at||me("ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(at,ut)}const z=A.length;function W(j,at,ut){let lt,dt,zt;const Nt=j.x-at.x,kt=j.y-at.y,Kt=ut.x-j.x,k=ut.y-j.y,pe=Nt*Nt+kt*kt,re=Nt*k-kt*Kt;if(Math.abs(re)>Number.EPSILON){const I=Math.sqrt(pe),E=Math.sqrt(Kt*Kt+k*k),Y=at.x-kt/I,Z=at.y+Nt/I,tt=ut.x-k/E,mt=ut.y+Kt/E,vt=((tt-Y)*k-(mt-Z)*Kt)/(Nt*k-kt*Kt);lt=Y+Nt*vt-j.x,dt=Z+kt*vt-j.y;const et=lt*lt+dt*dt;if(et<=2)return new ot(lt,dt);zt=Math.sqrt(et/2)}else{let I=!1;Nt>Number.EPSILON?Kt>Number.EPSILON&&(I=!0):Nt<-Number.EPSILON?Kt<-Number.EPSILON&&(I=!0):Math.sign(kt)===Math.sign(k)&&(I=!0),I?(lt=-kt,dt=Nt,zt=Math.sqrt(pe)):(lt=Nt,dt=kt,zt=Math.sqrt(pe/2))}return new ot(lt/zt,dt/zt)}const D=[];for(let j=0,at=U.length,ut=at-1,lt=j+1;j<at;j++,ut++,lt++)ut===at&&(ut=0),lt===at&&(lt=0),D[j]=W(U[j],U[ut],U[lt]);const G=[];let X,ft=D.concat();for(let j=0,at=N;j<at;j++){const ut=C[j];X=[];for(let lt=0,dt=ut.length,zt=dt-1,Nt=lt+1;lt<dt;lt++,zt++,Nt++)zt===dt&&(zt=0),Nt===dt&&(Nt=0),X[lt]=W(ut[lt],ut[zt],ut[Nt]);G.push(X),ft=ft.concat(X)}let gt;if(p===0)gt=di.triangulateShape(U,C);else{const j=[],at=[];for(let ut=0;ut<p;ut++){const lt=ut/p,dt=f*Math.cos(lt*Math.PI/2),zt=_*Math.sin(lt*Math.PI/2)+v;for(let Nt=0,kt=U.length;Nt<kt;Nt++){const Kt=B(U[Nt],D[Nt],zt);Q(Kt.x,Kt.y,-dt),lt===0&&j.push(Kt)}for(let Nt=0,kt=N;Nt<kt;Nt++){const Kt=C[Nt];X=G[Nt];const k=[];for(let pe=0,re=Kt.length;pe<re;pe++){const I=B(Kt[pe],X[pe],zt);Q(I.x,I.y,-dt),lt===0&&k.push(I)}lt===0&&at.push(k)}}gt=di.triangulateShape(j,at)}const Zt=gt.length,$t=_+v;for(let j=0;j<z;j++){const at=u?B(A[j],ft[j],$t):A[j];x?(T.copy(w.normals[0]).multiplyScalar(at.x),S.copy(w.binormals[0]).multiplyScalar(at.y),g.copy(y[0]).add(T).add(S),Q(g.x,g.y,g.z)):Q(at.x,at.y,0)}for(let j=1;j<=h;j++)for(let at=0;at<z;at++){const ut=u?B(A[at],ft[at],$t):A[at];x?(T.copy(w.normals[j]).multiplyScalar(ut.x),S.copy(w.binormals[j]).multiplyScalar(ut.y),g.copy(y[j]).add(T).add(S),Q(g.x,g.y,g.z)):Q(ut.x,ut.y,d/h*j)}for(let j=p-1;j>=0;j--){const at=j/p,ut=f*Math.cos(at*Math.PI/2),lt=_*Math.sin(at*Math.PI/2)+v;for(let dt=0,zt=U.length;dt<zt;dt++){const Nt=B(U[dt],D[dt],lt);Q(Nt.x,Nt.y,d+ut)}for(let dt=0,zt=C.length;dt<zt;dt++){const Nt=C[dt];X=G[dt];for(let kt=0,Kt=Nt.length;kt<Kt;kt++){const k=B(Nt[kt],X[kt],lt);x?Q(k.x,k.y+y[h-1].y,y[h-1].x+ut):Q(k.x,k.y,d+ut)}}}Lt(),J();function Lt(){const j=s.length/3;if(u){let at=0,ut=z*at;for(let lt=0;lt<Zt;lt++){const dt=gt[lt];Rt(dt[2]+ut,dt[1]+ut,dt[0]+ut)}at=h+p*2,ut=z*at;for(let lt=0;lt<Zt;lt++){const dt=gt[lt];Rt(dt[0]+ut,dt[1]+ut,dt[2]+ut)}}else{for(let at=0;at<Zt;at++){const ut=gt[at];Rt(ut[2],ut[1],ut[0])}for(let at=0;at<Zt;at++){const ut=gt[at];Rt(ut[0]+z*h,ut[1]+z*h,ut[2]+z*h)}}n.addGroup(j,s.length/3-j,0)}function J(){const j=s.length/3;let at=0;F(U,at),at+=U.length;for(let ut=0,lt=C.length;ut<lt;ut++){const dt=C[ut];F(dt,at),at+=dt.length}n.addGroup(j,s.length/3-j,1)}function F(j,at){let ut=j.length;for(;--ut>=0;){const lt=ut;let dt=ut-1;dt<0&&(dt=j.length-1);for(let zt=0,Nt=h+p*2;zt<Nt;zt++){const kt=z*zt,Kt=z*(zt+1),k=at+lt+kt,pe=at+dt+kt,re=at+dt+Kt,I=at+lt+Kt;pt(k,pe,re,I)}}}function Q(j,at,ut){l.push(j),l.push(at),l.push(ut)}function Rt(j,at,ut){_t(j),_t(at),_t(ut);const lt=s.length/3,dt=M.generateTopUV(n,s,lt-3,lt-2,lt-1);Xt(dt[0]),Xt(dt[1]),Xt(dt[2])}function pt(j,at,ut,lt){_t(j),_t(at),_t(lt),_t(at),_t(ut),_t(lt);const dt=s.length/3,zt=M.generateSideWallUV(n,s,dt-6,dt-3,dt-2,dt-1);Xt(zt[0]),Xt(zt[1]),Xt(zt[3]),Xt(zt[1]),Xt(zt[2]),Xt(zt[3])}function _t(j){s.push(l[j*3+0]),s.push(l[j*3+1]),s.push(l[j*3+2])}function Xt(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return qp(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Do[s.type]().fromJSON(s)),new vc(n,t.options)}}const Yp={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ot(r,o),new ot(a,l),new ot(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],_=t[s*3+2],v=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ot(o,1-l),new ot(c,1-d),new ot(u,1-_),new ot(v,1-m)]:[new ot(a,1-l),new ot(h,1-d),new ot(f,1-_),new ot(p,1-m)]}};function qp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Qn extends Oo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Qn(t.radius,t.detail)}}class Cr extends we{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=se(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,d=new O,u=new ot,f=new O,_=new O,v=new O;let p=0,m=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:p=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,f.x=m*1,f.y=-p,f.z=m*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:p=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,f.x=m*1,f.y=-p,f.z=m*0,_.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(_)}for(let M=0;M<=e;M++){const y=n+M*h*s,x=Math.sin(y),w=Math.cos(y);for(let S=0;S<=t.length-1;S++){d.x=t[S].x*x,d.y=t[S].y,d.z=t[S].x*w,o.push(d.x,d.y,d.z),u.x=M/e,u.y=S/(t.length-1),a.push(u.x,u.y);const T=l[3*S+0]*x,g=l[3*S+1],b=l[3*S+0]*w;c.push(T,g,b)}}for(let M=0;M<e;M++)for(let y=0;y<t.length-1;y++){const x=y+M*t.length,w=x,S=x+t.length,T=x+t.length+1,g=x+1;r.push(w,S,g),r.push(T,g,S)}this.setIndex(r),this.setAttribute("position",new ce(o,3)),this.setAttribute("uv",new ce(a,2)),this.setAttribute("normal",new ce(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cr(t.points,t.segments,t.phiStart,t.phiLength)}}class ye extends we{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],_=[],v=[],p=[];for(let m=0;m<h;m++){const M=m*u-o;for(let y=0;y<c;y++){const x=y*d-r;_.push(x,-M,0),v.push(0,0,1),p.push(y/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){const y=M+c*m,x=M+c*(m+1),w=M+1+c*(m+1),S=M+1+c*m;f.push(y,x,S),f.push(x,w,S)}this.setIndex(f),this.setAttribute("position",new ce(_,3)),this.setAttribute("normal",new ce(v,3)),this.setAttribute("uv",new ce(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ye(t.width,t.height,t.widthSegments,t.heightSegments)}}class Mc extends we{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let d=t;const u=(e-t)/s,f=new O,_=new ot;for(let v=0;v<=s;v++){for(let p=0;p<=n;p++){const m=r+p/n*o;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),_.x=(f.x/e+1)/2,_.y=(f.y/e+1)/2,h.push(_.x,_.y)}d+=u}for(let v=0;v<s;v++){const p=v*(n+1);for(let m=0;m<n;m++){const M=m+p,y=M,x=M+n+1,w=M+n+2,S=M+1;a.push(y,x,S),a.push(x,w,S)}}this.setIndex(a),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(c,3)),this.setAttribute("uv",new ce(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Fo extends we{constructor(t=new Rr([new ot(0,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ce(s,3)),this.setAttribute("normal",new ce(r,3)),this.setAttribute("uv",new ce(o,2));function c(h){const d=s.length/3,u=h.extractPoints(e);let f=u.shape;const _=u.holes;di.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=_.length;p<m;p++){const M=_[p];di.isClockWise(M)===!0&&(_[p]=M.reverse())}const v=di.triangulateShape(f,_);for(let p=0,m=_.length;p<m;p++){const M=_[p];f=f.concat(M)}for(let p=0,m=f.length;p<m;p++){const M=f[p];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let p=0,m=v.length;p<m;p++){const M=v[p],y=M[0]+d,x=M[1]+d,w=M[2]+d;n.push(y,x,w),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Kp(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Fo(n,t.curveSegments)}}function Kp(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class On extends we{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new O,u=new O,f=[],_=[],v=[],p=[];for(let m=0;m<=n;m++){const M=[],y=m/n,x=o+y*a,w=t*Math.cos(x),S=Math.sqrt(t*t-w*w);let T=0;m===0&&o===0?T=.5/e:m===n&&l===Math.PI&&(T=-.5/e);for(let g=0;g<=e;g++){const b=g/e,A=s+b*r;d.x=-S*Math.cos(A),d.y=w,d.z=S*Math.sin(A),_.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),p.push(b+T,1-y),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){const y=h[m][M+1],x=h[m][M],w=h[m+1][M],S=h[m+1][M+1];(m!==0||o>0)&&f.push(y,x,S),(m!==n-1||l<Math.PI)&&f.push(x,w,S)}this.setIndex(f),this.setAttribute("position",new ce(_,3)),this.setAttribute("normal",new ce(v,3)),this.setAttribute("uv",new ce(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new On(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Bo extends we{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],d=[],u=new O,f=new O,_=new O;for(let v=0;v<=n;v++){const p=o+v/n*a;for(let m=0;m<=s;m++){const M=m/s*r;f.x=(t+e*Math.cos(p))*Math.cos(M),f.y=(t+e*Math.cos(p))*Math.sin(M),f.z=e*Math.sin(p),c.push(f.x,f.y,f.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),_.subVectors(f,u).normalize(),h.push(_.x,_.y,_.z),d.push(m/s),d.push(v/n)}}for(let v=1;v<=n;v++)for(let p=1;p<=s;p++){const m=(s+1)*v+p-1,M=(s+1)*(v-1)+p-1,y=(s+1)*(v-1)+p,x=(s+1)*v+p;l.push(m,M,x),l.push(M,y,x)}this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class yc extends we{constructor(t=new xc(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new O,l=new O,c=new ot;let h=new O;const d=[],u=[],f=[],_=[];v(),this.setIndex(_),this.setAttribute("position",new ce(d,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(f,2));function v(){for(let y=0;y<e;y++)p(y);p(r===!1?e:0),M(),m()}function p(y){h=t.getPointAt(y/e,h);const x=o.normals[y],w=o.binormals[y];for(let S=0;S<=s;S++){const T=S/s*Math.PI*2,g=Math.sin(T),b=-Math.cos(T);l.x=b*x.x+g*w.x,l.y=b*x.y+g*w.y,l.z=b*x.z+g*w.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function m(){for(let y=1;y<=e;y++)for(let x=1;x<=s;x++){const w=(s+1)*(y-1)+(x-1),S=(s+1)*y+(x-1),T=(s+1)*y+x,g=(s+1)*(y-1)+x;_.push(w,S,g),_.push(S,T,g)}}function M(){for(let y=0;y<=e;y++)for(let x=0;x<=s;x++)c.x=y/e,c.y=x/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new yc(new Do[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function ks(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(bh(s))s.isRenderTargetTexture?(Jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(bh(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function cn(i){const t={};for(let e=0;e<i.length;e++){const n=ks(i[e]);for(const s in n)t[s]=n[s]}return t}function bh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Zp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ed(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}const Er={clone:ks,merge:cn};var Jp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$p=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class je extends Ws{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jp,this.fragmentShader=$p,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ks(t.uniforms),this.uniformsGroups=Zp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ft().setHex(s.value);break;case"v2":this.uniforms[n].value=new ot().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Oe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ee().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ue().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class nd extends je{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ht extends Ws{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nl,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Qp extends Ws{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class jp extends Ws{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Eh={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Th(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Th(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Th(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class t0{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],_=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const e0=new t0;class Sc{constructor(t){this.manager=t!==void 0?t:e0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Sc.DEFAULT_MATERIAL_NAME="__DEFAULT";const ai={};class n0 extends Error{constructor(t,e){super(t),this.response=e}}class i0 extends Sc{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Eh.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(ai[t]!==void 0){ai[t].push({onLoad:e,onProgress:n,onError:s});return}ai[t]=[],ai[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Jt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ai[t],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,_=f!==0;let v=0;const p=new ReadableStream({start(m){M();function M(){d.read().then(({done:y,value:x})=>{if(y)m.close();else{v+=x.byteLength;const w=new ProgressEvent("progress",{lengthComputable:_,loaded:v,total:f});for(let S=0,T=h.length;S<T;S++){const g=h[S];g.onProgress&&g.onProgress(w)}m.enqueue(x),M()}},y=>{m.error(y)})}}});return new Response(p)}else throw new n0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{Eh.add(`file:${t}`,c);const h=ai[t];delete ai[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=ai[t];if(h===void 0)throw this.manager.itemError(t),c;delete ai[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class zo extends fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class s0 extends zo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const ba=new ue,Ah=new O,Rh=new O;class wc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fc,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Ah.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ah),Rh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Rh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){ba.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ba,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===vr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(ba)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const no=new O,io=new Bn,Gn=new O;class id extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(no,io,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(no,io,Gn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(no,io,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(no,io,Gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new O,Ch=new ot,Ph=new ot;class mn extends id{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Fs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fs*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z)}getViewSize(t,e){return this.getViewBounds(t,Ch,Ph),e.subVectors(Ph,Ch)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(hr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class r0 extends wc{constructor(){super(new mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=Fs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class o0 extends zo{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new r0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class a0 extends wc{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0}}class bc extends zo{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new a0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class ko extends id{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class l0 extends wc{constructor(){super(new ko(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bl extends zo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.shadow=new l0}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}let so;class sd{static getContext(){return so===void 0&&(so=new(window.AudioContext||window.webkitAudioContext)),so}static setContext(t){so=t}}class Dh extends Sc{constructor(t){super(t)}load(t,e,n,s){const r=this,o=new i0(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){try{const c=l.slice(0),h=sd.getContext(),d=t+"#decode";r.manager.itemStart(d),h.decodeAudioData(c,function(u){e(u),r.manager.itemEnd(d)}).catch(function(u){a(u),r.manager.itemEnd(d)})}catch(c){a(c)}},n,s);function a(l){s?s(l):me(l),r.manager.itemError(t)}}}const bs=-90,Es=1;class c0 extends fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new mn(bs,Es,t,e);s.layers=this.layers,this.add(s);const r=new mn(bs,Es,t,e);r.layers=this.layers,this.add(r);const o=new mn(bs,Es,t,e);o.layers=this.layers,this.add(o);const a=new mn(bs,Es,t,e);a.layers=this.layers,this.add(a);const l=new mn(bs,Es,t,e);l.layers=this.layers,this.add(l);const c=new mn(bs,Es,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class h0 extends mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Ec{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=u0.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function u0(){this._document.hidden===!1&&this.reset()}const Bi=new O,Ea=new Bn,d0=new O,zi=new O,ki=new O;class f0 extends fe{constructor(){super(),this.type="AudioListener",this.context=sd.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new Ec}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t),this._timer.update();const e=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(Bi,Ea,d0),zi.set(0,0,-1).applyQuaternion(Ea),ki.set(0,1,0).applyQuaternion(Ea),e.positionX){const n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Bi.x,n),e.positionY.linearRampToValueAtTime(Bi.y,n),e.positionZ.linearRampToValueAtTime(Bi.z,n),e.forwardX.linearRampToValueAtTime(zi.x,n),e.forwardY.linearRampToValueAtTime(zi.y,n),e.forwardZ.linearRampToValueAtTime(zi.z,n),e.upX.linearRampToValueAtTime(ki.x,n),e.upY.linearRampToValueAtTime(ki.y,n),e.upZ.linearRampToValueAtTime(ki.z,n)}else e.setPosition(Bi.x,Bi.y,Bi.z),e.setOrientation(zi.x,zi.y,zi.z,ki.x,ki.y,ki.z)}}class p0 extends fe{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){Jt("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){Jt("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){Jt("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){Jt("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){Jt("Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(Jt("Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){Jt("Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}copy(t,e){return super.copy(t,e),t.sourceType!=="buffer"?(Jt("Audio: Audio source type cannot be copied."),this):(this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this)}clone(t){return new this.constructor(this.listener).copy(this,t)}}const Gi=new O,Lh=new Bn,m0=new O,Hi=new O;class g0 extends p0{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Gi,Lh,m0),Hi.set(0,0,1).applyQuaternion(Lh);const e=this.panner;if(e.positionX){const n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(Gi.x,n),e.positionY.linearRampToValueAtTime(Gi.y,n),e.positionZ.linearRampToValueAtTime(Gi.z,n),e.orientationX.linearRampToValueAtTime(Hi.x,n),e.orientationY.linearRampToValueAtTime(Hi.y,n),e.orientationZ.linearRampToValueAtTime(Hi.z,n)}else e.setPosition(Gi.x,Gi.y,Gi.z),e.setOrientation(Hi.x,Hi.y,Hi.z)}}const Ih=new ue;class _0{constructor(t,e,n=0,s=1/0){this.ray=new Uo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new uc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):me("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ih.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ih),this}intersectObject(t,e=!0,n=[]){return zl(t,this,n,e),n.sort(Nh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)zl(t[s],this,n,e);return n.sort(Nh),n}}function Nh(i,t){return i.distance-t.distance}function zl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)zl(r[o],t,e,!0)}}class Uh{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=se(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(se(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Vc=class Vc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Vc.prototype.isMatrix2=!0;let Oh=Vc;class x0 extends Ci{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Fh(i,t,e,n){const s=v0(n);switch(e){case Fu:return i*t;case ic:return i*t/s.components*s.byteLength;case sc:return i*t/s.components*s.byteLength;case ji:return i*t*2/s.components*s.byteLength;case rc:return i*t*2/s.components*s.byteLength;case Bu:return i*t*3/s.components*s.byteLength;case Un:return i*t*4/s.components*s.byteLength;case oc:return i*t*4/s.components*s.byteLength;case go:case _o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xo:case vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case rl:case al:return Math.max(i,16)*Math.max(t,8)/4;case sl:case ol:return Math.max(i,8)*Math.max(t,8)/2;case ll:case cl:case ul:case dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case hl:case To:case fl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ml:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case gl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case _l:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case xl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case vl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case yl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case wl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case bl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case El:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Tl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Al:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Rl:case Cl:case Pl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Dl:case Ll:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ao:case Il:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function v0(i){switch(i){case wn:case Iu:return{byteLength:1,components:1};case _r:case Nu:case _n:return{byteLength:2,components:1};case ec:case nc:return{byteLength:2,components:4};case $n:case tc:case Nn:return{byteLength:4,components:1};case Uu:case Ou:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zl}}));typeof window<"u"&&(window.__THREE__?Jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function rd(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function M0(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,_)=>f.start-_.start);let u=0;for(let f=1;f<d.length;f++){const _=d[u],v=d[f];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,_=d.length;f<_;f++){const v=d[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var y0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,S0=`#ifdef USE_ALPHAHASH
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
#endif`,w0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,b0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,T0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,A0=`#ifdef USE_AOMAP
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
#endif`,R0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,C0=`#ifdef USE_BATCHING
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
#endif`,P0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,D0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,L0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,I0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,N0=`#ifdef USE_IRIDESCENCE
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
#endif`,U0=`#ifdef USE_BUMPMAP
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
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,k0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,G0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,H0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,V0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,W0=`#define PI 3.141592653589793
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
} // validated`,X0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Y0=`vec3 transformedNormal = objectNormal;
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
#endif`,q0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Z0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,J0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,j0=`#ifdef USE_ENVMAP
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
#endif`,tm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,em=`#ifdef USE_ENVMAP
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
#endif`,nm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,im=`#ifdef USE_ENVMAP
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
#endif`,sm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,om=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,am=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lm=`#ifdef USE_GRADIENTMAP
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
}`,cm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,fm=`#ifdef USE_ENVMAP
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
#endif`,pm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xm=`PhysicalMaterial material;
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
#endif`,vm=`uniform sampler2D dfgLUT;
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
}`,Mm=`
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
#endif`,ym=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,bm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Em=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Am=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dm=`#if defined( USE_POINTS_UV )
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
#endif`,Lm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Im=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Um=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Om=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fm=`#ifdef USE_MORPHTARGETS
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
#endif`,Bm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,km=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Wm=`#ifdef USE_NORMALMAP
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
#endif`,Xm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ym=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Km=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ng=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,og=`float getShadowMask() {
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
}`,ag=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lg=`#ifdef USE_SKINNING
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
#endif`,cg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hg=`#ifdef USE_SKINNING
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
#endif`,ug=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mg=`#ifdef USE_TRANSMISSION
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
#endif`,gg=`#ifdef USE_TRANSMISSION
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
#endif`,_g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sg=`uniform sampler2D t2D;
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
}`,wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`#include <common>
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
}`,Rg=`#if DEPTH_PACKING == 3200
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
}`,Cg=`#define DISTANCE
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
}`,Pg=`#define DISTANCE
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
}`,Dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ig=`uniform float scale;
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
}`,Ng=`uniform vec3 diffuse;
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
}`,Ug=`#include <common>
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
}`,Og=`uniform vec3 diffuse;
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
}`,Fg=`#define LAMBERT
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
}`,Bg=`#define LAMBERT
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
}`,zg=`#define MATCAP
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
}`,kg=`#define MATCAP
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
}`,Gg=`#define NORMAL
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
}`,Hg=`#define NORMAL
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
}`,Vg=`#define PHONG
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
}`,Wg=`#define PHONG
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
}`,Xg=`#define STANDARD
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
}`,Yg=`#define STANDARD
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
}`,qg=`#define TOON
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
}`,Kg=`#define TOON
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
}`,Zg=`uniform float size;
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
}`,Jg=`uniform vec3 diffuse;
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
}`,$g=`#include <common>
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
}`,Qg=`uniform vec3 color;
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
}`,jg=`uniform float rotation;
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
}`,t_=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:y0,alphahash_pars_fragment:S0,alphamap_fragment:w0,alphamap_pars_fragment:b0,alphatest_fragment:E0,alphatest_pars_fragment:T0,aomap_fragment:A0,aomap_pars_fragment:R0,batching_pars_vertex:C0,batching_vertex:P0,begin_vertex:D0,beginnormal_vertex:L0,bsdfs:I0,iridescence_fragment:N0,bumpmap_pars_fragment:U0,clipping_planes_fragment:O0,clipping_planes_pars_fragment:F0,clipping_planes_pars_vertex:B0,clipping_planes_vertex:z0,color_fragment:k0,color_pars_fragment:G0,color_pars_vertex:H0,color_vertex:V0,common:W0,cube_uv_reflection_fragment:X0,defaultnormal_vertex:Y0,displacementmap_pars_vertex:q0,displacementmap_vertex:K0,emissivemap_fragment:Z0,emissivemap_pars_fragment:J0,colorspace_fragment:$0,colorspace_pars_fragment:Q0,envmap_fragment:j0,envmap_common_pars_fragment:tm,envmap_pars_fragment:em,envmap_pars_vertex:nm,envmap_physical_pars_fragment:fm,envmap_vertex:im,fog_vertex:sm,fog_pars_vertex:rm,fog_fragment:om,fog_pars_fragment:am,gradientmap_pars_fragment:lm,lightmap_pars_fragment:cm,lights_lambert_fragment:hm,lights_lambert_pars_fragment:um,lights_pars_begin:dm,lights_toon_fragment:pm,lights_toon_pars_fragment:mm,lights_phong_fragment:gm,lights_phong_pars_fragment:_m,lights_physical_fragment:xm,lights_physical_pars_fragment:vm,lights_fragment_begin:Mm,lights_fragment_maps:ym,lights_fragment_end:Sm,lightprobes_pars_fragment:wm,logdepthbuf_fragment:bm,logdepthbuf_pars_fragment:Em,logdepthbuf_pars_vertex:Tm,logdepthbuf_vertex:Am,map_fragment:Rm,map_pars_fragment:Cm,map_particle_fragment:Pm,map_particle_pars_fragment:Dm,metalnessmap_fragment:Lm,metalnessmap_pars_fragment:Im,morphinstance_vertex:Nm,morphcolor_vertex:Um,morphnormal_vertex:Om,morphtarget_pars_vertex:Fm,morphtarget_vertex:Bm,normal_fragment_begin:zm,normal_fragment_maps:km,normal_pars_fragment:Gm,normal_pars_vertex:Hm,normal_vertex:Vm,normalmap_pars_fragment:Wm,clearcoat_normal_fragment_begin:Xm,clearcoat_normal_fragment_maps:Ym,clearcoat_pars_fragment:qm,iridescence_pars_fragment:Km,opaque_fragment:Zm,packing:Jm,premultiplied_alpha_fragment:$m,project_vertex:Qm,dithering_fragment:jm,dithering_pars_fragment:tg,roughnessmap_fragment:eg,roughnessmap_pars_fragment:ng,shadowmap_pars_fragment:ig,shadowmap_pars_vertex:sg,shadowmap_vertex:rg,shadowmask_pars_fragment:og,skinbase_vertex:ag,skinning_pars_vertex:lg,skinning_vertex:cg,skinnormal_vertex:hg,specularmap_fragment:ug,specularmap_pars_fragment:dg,tonemapping_fragment:fg,tonemapping_pars_fragment:pg,transmission_fragment:mg,transmission_pars_fragment:gg,uv_pars_fragment:_g,uv_pars_vertex:xg,uv_vertex:vg,worldpos_vertex:Mg,background_vert:yg,background_frag:Sg,backgroundCube_vert:wg,backgroundCube_frag:bg,cube_vert:Eg,cube_frag:Tg,depth_vert:Ag,depth_frag:Rg,distance_vert:Cg,distance_frag:Pg,equirect_vert:Dg,equirect_frag:Lg,linedashed_vert:Ig,linedashed_frag:Ng,meshbasic_vert:Ug,meshbasic_frag:Og,meshlambert_vert:Fg,meshlambert_frag:Bg,meshmatcap_vert:zg,meshmatcap_frag:kg,meshnormal_vert:Gg,meshnormal_frag:Hg,meshphong_vert:Vg,meshphong_frag:Wg,meshphysical_vert:Xg,meshphysical_frag:Yg,meshtoon_vert:qg,meshtoon_frag:Kg,points_vert:Zg,points_frag:Jg,shadow_vert:$g,shadow_frag:Qg,sprite_vert:jg,sprite_frag:t_},Tt={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},Wn={basic:{uniforms:cn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:cn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Ft(0)},envMapIntensity:{value:1}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:cn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:cn([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:cn([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:cn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:cn([Tt.points,Tt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:cn([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:cn([Tt.common,Tt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:cn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:cn([Tt.sprite,Tt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distance:{uniforms:cn([Tt.common,Tt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distance_vert,fragmentShader:le.distance_frag},shadow:{uniforms:cn([Tt.lights,Tt.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};Wn.physical={uniforms:cn([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const ro={r:0,b:0,g:0},e_=new ue,od=new ee;od.set(-1,0,0,0,1,0,0,0,1);function n_(i,t,e,n,s,r){const o=new Ft(0);let a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let y=M.isScene===!0?M.background:null;if(y&&y.isTexture){const x=M.backgroundBlurriness>0;y=t.get(y,x)}return y}function _(M){let y=!1;const x=f(M);x===null?p(o,a):x&&x.isColor&&(p(x,1),y=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(M,y){const x=f(y);x&&(x.isCubeTexture||x.mapping===No)?(c===void 0&&(c=new it(new Pt(1,1,1),new je({name:"BackgroundCubeMaterial",uniforms:ks(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(e_.makeRotationFromEuler(y.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(od),c.material.toneMapped=de.getTransfer(x.colorSpace)!==Se,(h!==x||d!==x.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new it(new ye(2,2),new je({name:"BackgroundMaterial",uniforms:ks(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=de.getTransfer(x.colorSpace)!==Se,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,y){M.getRGB(ro,ed(i)),e.buffers.color.setClear(ro.r,ro.g,ro.b,y,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,y=1){o.set(M),a=y,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,p(o,a)},render:_,addToRenderList:v,dispose:m}}function i_(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,o=!1;function a(C,P,L,N,U){let B=!1;const z=d(C,N,L,P);r!==z&&(r=z,c(r.object)),B=f(C,N,L,U),B&&_(C,N,L,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,x(C,P,L,N),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function d(C,P,L,N){const U=N.wireframe===!0;let B=n[P.id];B===void 0&&(B={},n[P.id]=B);const z=C.isInstancedMesh===!0?C.id:0;let W=B[z];W===void 0&&(W={},B[z]=W);let D=W[L.id];D===void 0&&(D={},W[L.id]=D);let G=D[U];return G===void 0&&(G=u(l()),D[U]=G),G}function u(C){const P=[],L=[],N=[];for(let U=0;U<e;U++)P[U]=0,L[U]=0,N[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:L,attributeDivisors:N,object:C,attributes:{},index:null}}function f(C,P,L,N){const U=r.attributes,B=P.attributes;let z=0;const W=L.getAttributes();for(const D in W)if(W[D].location>=0){const X=U[D];let ft=B[D];if(ft===void 0&&(D==="instanceMatrix"&&C.instanceMatrix&&(ft=C.instanceMatrix),D==="instanceColor"&&C.instanceColor&&(ft=C.instanceColor)),X===void 0||X.attribute!==ft||ft&&X.data!==ft.data)return!0;z++}return r.attributesNum!==z||r.index!==N}function _(C,P,L,N){const U={},B=P.attributes;let z=0;const W=L.getAttributes();for(const D in W)if(W[D].location>=0){let X=B[D];X===void 0&&(D==="instanceMatrix"&&C.instanceMatrix&&(X=C.instanceMatrix),D==="instanceColor"&&C.instanceColor&&(X=C.instanceColor));const ft={};ft.attribute=X,X&&X.data&&(ft.data=X.data),U[D]=ft,z++}r.attributes=U,r.attributesNum=z,r.index=N}function v(){const C=r.newAttributes;for(let P=0,L=C.length;P<L;P++)C[P]=0}function p(C){m(C,0)}function m(C,P){const L=r.newAttributes,N=r.enabledAttributes,U=r.attributeDivisors;L[C]=1,N[C]===0&&(i.enableVertexAttribArray(C),N[C]=1),U[C]!==P&&(i.vertexAttribDivisor(C,P),U[C]=P)}function M(){const C=r.newAttributes,P=r.enabledAttributes;for(let L=0,N=P.length;L<N;L++)P[L]!==C[L]&&(i.disableVertexAttribArray(L),P[L]=0)}function y(C,P,L,N,U,B,z){z===!0?i.vertexAttribIPointer(C,P,L,U,B):i.vertexAttribPointer(C,P,L,N,U,B)}function x(C,P,L,N){v();const U=N.attributes,B=L.getAttributes(),z=P.defaultAttributeValues;for(const W in B){const D=B[W];if(D.location>=0){let G=U[W];if(G===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(G=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(G=C.instanceColor)),G!==void 0){const X=G.normalized,ft=G.itemSize,gt=t.get(G);if(gt===void 0)continue;const Zt=gt.buffer,$t=gt.type,Lt=gt.bytesPerElement,J=$t===i.INT||$t===i.UNSIGNED_INT||G.gpuType===tc;if(G.isInterleavedBufferAttribute){const F=G.data,Q=F.stride,Rt=G.offset;if(F.isInstancedInterleavedBuffer){for(let pt=0;pt<D.locationSize;pt++)m(D.location+pt,F.meshPerAttribute);C.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let pt=0;pt<D.locationSize;pt++)p(D.location+pt);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let pt=0;pt<D.locationSize;pt++)y(D.location+pt,ft/D.locationSize,$t,X,Q*Lt,(Rt+ft/D.locationSize*pt)*Lt,J)}else{if(G.isInstancedBufferAttribute){for(let F=0;F<D.locationSize;F++)m(D.location+F,G.meshPerAttribute);C.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let F=0;F<D.locationSize;F++)p(D.location+F);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let F=0;F<D.locationSize;F++)y(D.location+F,ft/D.locationSize,$t,X,ft*Lt,ft/D.locationSize*F*Lt,J)}}else if(z!==void 0){const X=z[W];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(D.location,X);break;case 3:i.vertexAttrib3fv(D.location,X);break;case 4:i.vertexAttrib4fv(D.location,X);break;default:i.vertexAttrib1fv(D.location,X)}}}}M()}function w(){b();for(const C in n){const P=n[C];for(const L in P){const N=P[L];for(const U in N){const B=N[U];for(const z in B)h(B[z].object),delete B[z];delete N[U]}}delete n[C]}}function S(C){if(n[C.id]===void 0)return;const P=n[C.id];for(const L in P){const N=P[L];for(const U in N){const B=N[U];for(const z in B)h(B[z].object),delete B[z];delete N[U]}}delete n[C.id]}function T(C){for(const P in n){const L=n[P];for(const N in L){const U=L[N];if(U[C.id]===void 0)continue;const B=U[C.id];for(const z in B)h(B[z].object),delete B[z];delete U[C.id]}}}function g(C){for(const P in n){const L=n[P],N=C.isInstancedMesh===!0?C.id:0,U=L[N];if(U!==void 0){for(const B in U){const z=U[B];for(const W in z)h(z[W].object),delete z[W];delete U[B]}delete L[N],Object.keys(L).length===0&&delete n[P]}}}function b(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:A,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfObject:g,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:p,disableUnusedAttributes:M}}function s_(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function r_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Un&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const g=T===_n&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==wn&&T!==Nn&&!g&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Jt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:x,maxSamples:w,samples:S}}function o_(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ci,a=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const _=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||_===null||_.length===0||r&&!p)r?h(null):c();else{const M=r?0:n,y=M*4;let x=m.clippingState||null;l.value=x,x=h(_,u,y,f);for(let w=0;w!==y;++w)x[w]=e[w];m.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,_){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=l.value,_!==!0||p===null){const m=f+v*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,x=f;y!==v;++y,x+=4)o.copy(d[y]).applyMatrix4(M,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}const Ps=4,a_=6,l_=20,c_=256,er=new ko,Bh=new Ft;let Ta=null,Aa=0,Ra=0,Ca=!1;const h_=new O,Vi=new O;class kl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=h_}=r;Ta=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ta,Aa,Ra),this._renderer.xr.enabled=Ca,t.scissorTest=!1,Ts(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qi||t.mapping===Us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ta=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:_n,format:Un,colorSpace:Ro,depthBuffer:!1},s=zh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zh(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=u_(r)),this._blurMaterial=f_(r,t,e),this._ggxMaterial=d_(r,t,e)}return s}_compileMaterial(t){const e=new it(new we,t);this._renderer.compile(e,er)}_sceneToCubeUV(t,e,n,s,r){const l=new mn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Bh),d.toneMapping=Kn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new it(new Pt,new gi({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,p=v.material;let m=!1;const M=t.background;M?M.isColor&&(p.color.copy(M),t.background=null,m=!0):(p.color.copy(Bh),m=!0);for(let y=0;y<6;y++){const x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));const w=this._cubeSize;Ts(s,x*w,y>2?w:0,w,w),d.setRenderTarget(s),m&&d.render(v,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=M}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Qi||t.mapping===Us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ts(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,er)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:_}=this,v=this._sizeLods[n],p=3*v*(n>_-Ps?n-_+Ps:0),m=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=_-e,Ts(r,p,m,3*v,2*v),s.setRenderTarget(r),s.render(a,er),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,Ts(t,p,m,3*v,2*v),s.setRenderTarget(t),s.render(a,er)}_blur(t,e,n,s){const r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;const c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[s],d=3*h*(s>this._lodMax-Ps?s-this._lodMax+Ps:0),u=4*(this._cubeSize-h);Ts(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,er)}}function u_(i){const t=[],e=[];let n=i;const s=i-Ps+1+a_;for(let r=0;r<s;r++){const o=Math.pow(2,n);t.push(o);const a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,_=new Float32Array(f*u*d),v=new Float32Array(f*u*d);for(let m=0;m<d;m++){const M=m%3*2/3-1,y=m>2?0:-1,x=[M,y,0,M+2/3,y,0,M+2/3,y+1,0,M,y,0,M+2/3,y+1,0,M,y+1,0];_.set(x,f*u*m);for(let w=0;w<u;w++){const S=h[w*2]*2-1,T=h[w*2+1]*2-1;m===0?Vi.set(1,T,S):m===1?Vi.set(-S,1,-T):m===2?Vi.set(-S,T,1):m===3?Vi.set(-1,T,-S):m===4?Vi.set(-S,-1,T):Vi.set(S,T,-1),Vi.toArray(v,(m*u+w)*f)}}const p=new we;p.setAttribute("position",new Be(_,f)),p.setAttribute("outputDirection",new Be(v,f)),e.push(new it(p,null)),n>Ps&&n--}return{lodMeshes:e,sizeLods:t}}function zh(i,t,e){const n=new fn(i,t,e);return n.texture.mapping=No,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ts(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function d_(i,t,e){return new je({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:c_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Go(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function f_(i,t,e){return new je({name:"SphericalGaussianBlur",defines:{SAMPLES:l_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Go(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function kh(){return new je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Go(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Gh(){return new je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Go(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class ad extends fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Xu(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pt(5,5,5),r=new je({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:qn});r.uniforms.tEquirect.value=e;const o=new it(s,r),a=e.minFilter;return e.minFilter===Yi&&(e.minFilter=sn),new c0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}function p_(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===mo||f===Qo)if(t.has(u)){const _=t.get(u).texture;return a(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const v=new ad(_.height);return v.fromEquirectangularTexture(i,u),t.set(u,v),u.addEventListener("dispose",c),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const f=u.mapping,_=f===mo||f===Qo,v=f===Qi||f===Us;if(_||v){let p=e.get(u);const m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new kl(i)),p=_?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{const M=u.image;return _&&M&&M.height>0||v&&M&&l(M)?(n===null&&(n=new kl(i)),p=_?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,f){return f===mo?u.mapping=Qi:f===Qo&&(u.mapping=Us),u}function l(u){let f=0;const _=6;for(let v=0;v<_;v++)u[v]!==void 0&&f++;return f===_}function c(u){const f=u.target;f.removeEventListener("dispose",c);const _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function m_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ls("WebGLRenderer: "+n+" extension not supported."),s}}}function g_(i,t,e,n){const s={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",o),delete s[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,_=d.attributes.position;let v=0;if(_===void 0)return;if(f!==null){const M=f.array;v=f.version;for(let y=0,x=M.length;y<x;y+=3){const w=M[y+0],S=M[y+1],T=M[y+2];u.push(w,S,S,T,T,w)}}else{const M=_.array;v=_.version;for(let y=0,x=M.length/3-1;y<x;y+=3){const w=y+0,S=y+1,T=y+2;u.push(w,S,S,T,T,w)}}const p=new(_.count>=65535?Vu:Hu)(u,1);p.version=v;const m=r.get(d);m&&t.remove(m),r.set(d,p)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function __(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let v=0;for(let p=0;p<f;p++)v+=u[p];e.update(v,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function x_(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:me("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function v_(i,t,e){const n=new WeakMap,s=new Oe;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let A=function(){g.dispose(),n.delete(a),a.removeEventListener("dispose",A)};var f=A;u!==void 0&&u.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),v===!0&&(x=2),p===!0&&(x=3);let w=a.attributes.position.count*x,S=1;w>t.maxTextureSize&&(S=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const T=new Float32Array(w*S*4*d),g=new ku(T,w,S,d);g.type=Nn,g.needsUpdate=!0;const b=x*4;for(let C=0;C<d;C++){const P=m[C],L=M[C],N=y[C],U=w*S*4*C;for(let B=0;B<P.count;B++){const z=B*b;_===!0&&(s.fromBufferAttribute(P,B),T[U+z+0]=s.x,T[U+z+1]=s.y,T[U+z+2]=s.z,T[U+z+3]=0),v===!0&&(s.fromBufferAttribute(L,B),T[U+z+4]=s.x,T[U+z+5]=s.y,T[U+z+6]=s.z,T[U+z+7]=0),p===!0&&(s.fromBufferAttribute(N,B),T[U+z+8]=s.x,T[U+z+9]=s.y,T[U+z+10]=s.z,T[U+z+11]=N.itemSize===4?s.w:1)}}u={count:d,texture:g,size:new ot(w,S)},n.set(a,u),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function M_(i,t,e,n,s){let r=new WeakMap;function o(c){const h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const y_={[Jl]:"LINEAR_TONE_MAPPING",[$l]:"REINHARD_TONE_MAPPING",[Ql]:"CINEON_TONE_MAPPING",[Io]:"ACES_FILMIC_TONE_MAPPING",[mr]:"AGX_TONE_MAPPING",[gr]:"NEUTRAL_TONE_MAPPING",[jl]:"CUSTOM_TONE_MAPPING"};function S_(i,t,e,n,s,r){const o=new fn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new we;c.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ce([0,2,0,0,2,0],2));const h=new nd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new it(c,h),u=new ko(-1,1,1,-1,0,1);let f=null,_=null,v=!1,p,m=null,M=[],y=!1;this.setSize=function(x,w){o.setSize(x,w),a!==null&&a.setSize(x,w),l!==null&&l.setSize(x,w);for(let S=0;S<M.length;S++){const T=M[S];T.setSize&&T.setSize(x,w)}},this.setEffects=function(x){M=x,y=M.length>0&&M[0].isRenderPass===!0;const w=o.width,S=o.height;M.length>0&&a===null&&(a=new fn(w,S,{type:_n,depthBuffer:!1,stencilBuffer:!1}),l=new fn(w,S,{type:_n,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<M.length;T++){const g=M[T];g.setSize&&g.setSize(w,S)}},this.begin=function(x,w){if(v||x.toneMapping===Kn&&M.length===0)return!1;if(m=w,w!==null){const S=w.width,T=w.height;(o.width!==S||o.height!==T)&&this.setSize(S,T)}return y===!1&&x.setRenderTarget(o),p=x.toneMapping,x.toneMapping=Kn,!0},this.hasRenderPass=function(){return y},this.end=function(x,w){x.toneMapping=p,v=!0;let S=o,T=a;for(let g=0;g<M.length;g++){const b=M[g];b.enabled!==!1&&(b.render(x,T,S,w),b.needsSwap!==!1&&(S=T,T=T===a?l:a))}if(f!==x.outputColorSpace||_!==x.toneMapping){f=x.outputColorSpace,_=x.toneMapping,h.defines={},de.getTransfer(f)===Se&&(h.defines.SRGB_TRANSFER="");const g=y_[_];g&&(h.defines[g]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,x.setRenderTarget(m),x.render(d,u),m=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const ld=new rn,Gl=new yr(1,1),cd=new ku,hd=new $f,ud=new Xu,Hh=[],Vh=[],Wh=new Float32Array(16),Xh=new Float32Array(9),Yh=new Float32Array(4);function Xs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Hh[s];if(r===void 0&&(r=new Float32Array(s),Hh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ho(i,t){let e=Vh[t];e===void 0&&(e=new Int32Array(t),Vh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function w_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function b_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2fv(this.addr,t),Ke(e,t)}}function E_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;i.uniform3fv(this.addr,t),Ke(e,t)}}function T_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4fv(this.addr,t),Ke(e,t)}}function A_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if(qe(e,n))return;Yh.set(n),i.uniformMatrix2fv(this.addr,!1,Yh),Ke(e,n)}}function R_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if(qe(e,n))return;Xh.set(n),i.uniformMatrix3fv(this.addr,!1,Xh),Ke(e,n)}}function C_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if(qe(e,n))return;Wh.set(n),i.uniformMatrix4fv(this.addr,!1,Wh),Ke(e,n)}}function P_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function D_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2iv(this.addr,t),Ke(e,t)}}function L_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3iv(this.addr,t),Ke(e,t)}}function I_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4iv(this.addr,t),Ke(e,t)}}function N_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function U_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2uiv(this.addr,t),Ke(e,t)}}function O_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3uiv(this.addr,t),Ke(e,t)}}function F_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4uiv(this.addr,t),Ke(e,t)}}function B_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Gl.compareFunction=e.isReversedDepthBuffer()?lc:ac,r=Gl):r=ld,e.setTexture2D(t||r,s)}function z_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||hd,s)}function k_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ud,s)}function G_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||cd,s)}function H_(i){switch(i){case 5126:return w_;case 35664:return b_;case 35665:return E_;case 35666:return T_;case 35674:return A_;case 35675:return R_;case 35676:return C_;case 5124:case 35670:return P_;case 35667:case 35671:return D_;case 35668:case 35672:return L_;case 35669:case 35673:return I_;case 5125:return N_;case 36294:return U_;case 36295:return O_;case 36296:return F_;case 35678:case 36198:case 36298:case 36306:case 35682:return B_;case 35679:case 36299:case 36307:return z_;case 35680:case 36300:case 36308:case 36293:return k_;case 36289:case 36303:case 36311:case 36292:return G_}}function V_(i,t){i.uniform1fv(this.addr,t)}function W_(i,t){const e=Xs(t,this.size,2);i.uniform2fv(this.addr,e)}function X_(i,t){const e=Xs(t,this.size,3);i.uniform3fv(this.addr,e)}function Y_(i,t){const e=Xs(t,this.size,4);i.uniform4fv(this.addr,e)}function q_(i,t){const e=Xs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function K_(i,t){const e=Xs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Z_(i,t){const e=Xs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function J_(i,t){i.uniform1iv(this.addr,t)}function $_(i,t){i.uniform2iv(this.addr,t)}function Q_(i,t){i.uniform3iv(this.addr,t)}function j_(i,t){i.uniform4iv(this.addr,t)}function tx(i,t){i.uniform1uiv(this.addr,t)}function ex(i,t){i.uniform2uiv(this.addr,t)}function nx(i,t){i.uniform3uiv(this.addr,t)}function ix(i,t){i.uniform4uiv(this.addr,t)}function sx(i,t,e){const n=this.cache,s=t.length,r=Ho(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Gl:o=ld;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function rx(i,t,e){const n=this.cache,s=t.length,r=Ho(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||hd,r[o])}function ox(i,t,e){const n=this.cache,s=t.length,r=Ho(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ud,r[o])}function ax(i,t,e){const n=this.cache,s=t.length,r=Ho(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||cd,r[o])}function lx(i){switch(i){case 5126:return V_;case 35664:return W_;case 35665:return X_;case 35666:return Y_;case 35674:return q_;case 35675:return K_;case 35676:return Z_;case 5124:case 35670:return J_;case 35667:case 35671:return $_;case 35668:case 35672:return Q_;case 35669:case 35673:return j_;case 5125:return tx;case 36294:return ex;case 36295:return nx;case 36296:return ix;case 35678:case 36198:case 36298:case 36306:case 35682:return sx;case 35679:case 36299:case 36307:return rx;case 35680:case 36300:case 36308:case 36293:return ox;case 36289:case 36303:case 36311:case 36292:return ax}}class cx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=H_(e.type)}}class hx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=lx(e.type)}}class ux{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Pa=/(\w+)(\])?(\[|\.)?/g;function qh(i,t){i.seq.push(t),i.map[t.id]=t}function dx(i,t,e){const n=i.name,s=n.length;for(Pa.lastIndex=0;;){const r=Pa.exec(n),o=Pa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){qh(e,c===void 0?new cx(a,i,t):new hx(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new ux(a),qh(e,d)),e=d}}}class Mo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);dx(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Kh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const fx=37297;let px=0;function mx(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Zh=new ee;function gx(i){de._getMatrix(Zh,de.workingColorSpace,i);const t=`mat3( ${Zh.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(i)){case Co:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return Jt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Jh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+mx(i.getShaderSource(t),a)}else return r}function _x(i,t){const e=gx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const xx={[Jl]:"Linear",[$l]:"Reinhard",[Ql]:"Cineon",[Io]:"ACESFilmic",[mr]:"AgX",[gr]:"Neutral",[jl]:"Custom"};function vx(i,t){const e=xx[t];return e===void 0?(Jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const oo=new O;function Mx(){de.getLuminanceCoefficients(oo);const i=oo.x.toFixed(4),t=oo.y.toFixed(4),e=oo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(or).join(`
`)}function Sx(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function wx(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function or(i){return i!==""}function $h(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const bx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hl(i){return i.replace(bx,Tx)}const Ex=new Map;function Tx(i,t){let e=le[t];if(e===void 0){const n=Ex.get(t);if(n!==void 0)e=le[n],Jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Hl(e)}const Ax=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jh(i){return i.replace(Ax,Rx)}function Rx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const Cx={[lr]:"SHADOWMAP_TYPE_PCF",[sr]:"SHADOWMAP_TYPE_VSM"};function Px(i){return Cx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Dx={[Qi]:"ENVMAP_TYPE_CUBE",[Us]:"ENVMAP_TYPE_CUBE",[No]:"ENVMAP_TYPE_CUBE_UV"};function Lx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Dx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Ix={[Us]:"ENVMAP_MODE_REFRACTION"};function Nx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ix[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Ux={[Du]:"ENVMAP_BLENDING_MULTIPLY",[ff]:"ENVMAP_BLENDING_MIX",[pf]:"ENVMAP_BLENDING_ADD"};function Ox(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ux[i.combine]||"ENVMAP_BLENDING_NONE"}function Fx(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Bx(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Px(e),c=Lx(e),h=Nx(e),d=Ox(e),u=Fx(e),f=yx(e),_=Sx(r),v=s.createProgram();let p,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(or).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(or).join(`
`),m.length>0&&(m+=`
`)):(p=[tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),m=[tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Kn?"#define TONE_MAPPING":"",e.toneMapping!==Kn?le.tonemapping_pars_fragment:"",e.toneMapping!==Kn?vx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,_x("linearToOutputTexel",e.outputColorSpace),Mx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(or).join(`
`)),o=Hl(o),o=$h(o,e),o=Qh(o,e),a=Hl(a),a=$h(a,e),a=Qh(a,e),o=jh(o),a=jh(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=M+p+o,x=M+m+a,w=Kh(s,s.VERTEX_SHADER,y),S=Kh(s,s.FRAGMENT_SHADER,x);s.attachShader(v,w),s.attachShader(v,S),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(C){if(i.debug.checkShaderErrors){const P=s.getProgramInfoLog(v)||"",L=s.getShaderInfoLog(w)||"",N=s.getShaderInfoLog(S)||"",U=P.trim(),B=L.trim(),z=N.trim();let W=!0,D=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,w,S);else{const G=Jh(s,w,"vertex"),X=Jh(s,S,"fragment");me("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+G+`
`+X)}else U!==""?Jt("WebGLProgram: Program Info Log:",U):(B===""||z==="")&&(D=!1);D&&(C.diagnostics={runnable:W,programLog:U,vertexShader:{log:B,prefix:p},fragmentShader:{log:z,prefix:m}})}s.deleteShader(w),s.deleteShader(S),g=new Mo(s,v),b=wx(s,v)}let g;this.getUniforms=function(){return g===void 0&&T(this),g};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(v,fx)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=px++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=S,this}let zx=0;class kx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Gx(t),e.set(t,n)),n}}class Gx{constructor(t){this.id=zx++,this.code=t,this.usedTimes=0}}function Hx(i){return i===ji||i===To||i===Ao}function Vx(i,t,e,n,s,r){const o=new uc,a=new kx,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(g){return l.add(g),g===0?"uv":`uv${g}`}function v(g,b,A,C,P,L){const N=C.fog,U=P.geometry,B=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?C.environment:null,z=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,W=t.get(g.envMap||B,z),D=W&&W.mapping===No?W.image.height:null,G=f[g.type];g.precision!==null&&(u=n.getMaxPrecision(g.precision),u!==g.precision&&Jt("WebGLProgram.getParameters:",g.precision,"not supported, using",u,"instead."));const X=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ft=X!==void 0?X.length:0;let gt=0;U.morphAttributes.position!==void 0&&(gt=1),U.morphAttributes.normal!==void 0&&(gt=2),U.morphAttributes.color!==void 0&&(gt=3);let Zt,$t,Lt,J;if(G){const Ee=Wn[G];Zt=Ee.vertexShader,$t=Ee.fragmentShader}else{Zt=g.vertexShader,$t=g.fragmentShader;const Ee=a.getVertexShaderStage(g),ne=a.getFragmentShaderStage(g);a.update(g,Ee,ne),Lt=Ee.id,J=ne.id}const F=i.getRenderTarget(),Q=i.state.buffers.depth.getReversed(),Rt=P.isInstancedMesh===!0,pt=P.isBatchedMesh===!0,_t=!!g.map,Xt=!!g.matcap,j=!!W,at=!!g.aoMap,ut=!!g.lightMap,lt=!!g.bumpMap&&g.wireframe===!1,dt=!!g.normalMap,zt=!!g.displacementMap,Nt=!!g.emissiveMap,kt=!!g.metalnessMap,Kt=!!g.roughnessMap,k=g.anisotropy>0,pe=g.clearcoat>0,re=g.dispersion>0,I=g.retroreflectivity>0,E=g.iridescence>0,Y=g.sheen>0,Z=g.transmission>0,tt=k&&!!g.anisotropyMap,mt=pe&&!!g.clearcoatMap,vt=pe&&!!g.clearcoatNormalMap,et=pe&&!!g.clearcoatRoughnessMap,st=E&&!!g.iridescenceMap,St=E&&!!g.iridescenceThicknessMap,Yt=Y&&!!g.sheenColorMap,xt=Y&&!!g.sheenRoughnessMap,Mt=!!g.specularMap,qt=!!g.specularColorMap,Gt=!!g.specularIntensityMap,te=Z&&!!g.transmissionMap,V=Z&&!!g.thicknessMap,yt=!!g.gradientMap,rt=!!g.alphaMap,wt=g.alphaTest>0,Ct=!!g.alphaHash,ct=!!g.extensions;let Vt=Kn;g.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Vt=i.toneMapping);const Wt={shaderID:G,shaderType:g.type,shaderName:g.name,vertexShader:Zt,fragmentShader:$t,defines:g.defines,customVertexShaderID:Lt,customFragmentShaderID:J,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:u,batching:pt,batchingColor:pt&&P._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&P.instanceColor!==null,instancingMorph:Rt&&P.morphTexture!==null,outputColorSpace:F===null?i.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:de.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:_t,matcap:Xt,envMap:j,envMapMode:j&&W.mapping,envMapCubeUVHeight:D,aoMap:at,lightMap:ut,bumpMap:lt,normalMap:dt,displacementMap:zt,emissiveMap:Nt,normalMapObjectSpace:dt&&g.normalMapType===_f,normalMapTangentSpace:dt&&g.normalMapType===Nl,packedNormalMap:dt&&g.normalMapType===Nl&&Hx(g.normalMap.format),metalnessMap:kt,roughnessMap:Kt,anisotropy:k,anisotropyMap:tt,clearcoat:pe,clearcoatMap:mt,clearcoatNormalMap:vt,clearcoatRoughnessMap:et,dispersion:re,retroreflection:I,iridescence:E,iridescenceMap:st,iridescenceThicknessMap:St,sheen:Y,sheenColorMap:Yt,sheenRoughnessMap:xt,specularMap:Mt,specularColorMap:qt,specularIntensityMap:Gt,transmission:Z,transmissionMap:te,thicknessMap:V,gradientMap:yt,opaque:g.transparent===!1&&g.blending===cr&&g.alphaToCoverage===!1,alphaMap:rt,alphaTest:wt,alphaHash:Ct,combine:g.combine,mapUv:_t&&_(g.map.channel),aoMapUv:at&&_(g.aoMap.channel),lightMapUv:ut&&_(g.lightMap.channel),bumpMapUv:lt&&_(g.bumpMap.channel),normalMapUv:dt&&_(g.normalMap.channel),displacementMapUv:zt&&_(g.displacementMap.channel),emissiveMapUv:Nt&&_(g.emissiveMap.channel),metalnessMapUv:kt&&_(g.metalnessMap.channel),roughnessMapUv:Kt&&_(g.roughnessMap.channel),anisotropyMapUv:tt&&_(g.anisotropyMap.channel),clearcoatMapUv:mt&&_(g.clearcoatMap.channel),clearcoatNormalMapUv:vt&&_(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&_(g.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&_(g.iridescenceMap.channel),iridescenceThicknessMapUv:St&&_(g.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&_(g.sheenColorMap.channel),sheenRoughnessMapUv:xt&&_(g.sheenRoughnessMap.channel),specularMapUv:Mt&&_(g.specularMap.channel),specularColorMapUv:qt&&_(g.specularColorMap.channel),specularIntensityMapUv:Gt&&_(g.specularIntensityMap.channel),transmissionMapUv:te&&_(g.transmissionMap.channel),thicknessMapUv:V&&_(g.thicknessMap.channel),alphaMapUv:rt&&_(g.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(dt||k),vertexNormals:!!U.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!U.attributes.uv&&(_t||rt),fog:!!N,useFog:g.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||U.attributes.normal===void 0&&dt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Q,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:gt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Vt,decodeVideoTexture:_t&&g.map.isVideoTexture===!0&&de.getTransfer(g.map.colorSpace)===Se,decodeVideoTextureEmissive:Nt&&g.emissiveMap.isVideoTexture===!0&&de.getTransfer(g.emissiveMap.colorSpace)===Se,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Ne,flipSided:g.side===dn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ct&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&g.extensions.multiDraw===!0||pt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Wt.vertexUv1s=l.has(1),Wt.vertexUv2s=l.has(2),Wt.vertexUv3s=l.has(3),l.clear(),Wt}function p(g){const b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(const A in g.defines)b.push(A),b.push(g.defines[A]);return g.isRawShaderMaterial===!1&&(m(b,g),M(b,g),b.push(i.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function m(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapCubeUVHeight),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.morphAttributeCount),g.push(b.numSunLights),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numSunLightShadows),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function M(g,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),g.push(o.mask)}function y(g){const b=f[g.type];let A;if(b){const C=Wn[b];A=Er.clone(C.uniforms)}else A=g.uniforms;return A}function x(g,b){let A=h.get(b);return A!==void 0?++A.usedTimes:(A=new Bx(i,b,g,s),c.push(A),h.set(b,A)),A}function w(g){if(--g.usedTimes===0){const b=c.indexOf(g);c[b]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function S(g){a.remove(g)}function T(){a.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:y,acquireProgram:x,releaseProgram:w,releaseShaderCache:S,programs:c,dispose:T}}function Wx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Xx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function eu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function nu(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,_,v,p,m){let M=i[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:_,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:p,group:m},i[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=_,M.materialVariant=o(u),M.groupOrder=v,M.renderOrder=u.renderOrder,M.z=p,M.group=m),t++,M}function l(u,f,_,v,p,m,M){M.reversedDepth===!0&&(p=-p);const y=a(u,f,_,v,p,m);_.transmission>0?n.push(y):_.transparent===!0?s.push(y):e.push(y)}function c(u,f,_,v,p,m){const M=a(u,f,_,v,p,m);_.transmission>0?n.unshift(M):_.transparent===!0?s.unshift(M):e.unshift(M)}function h(u,f){e.length>1&&e.sort(u||Xx),n.length>1&&n.sort(f||eu),s.length>1&&s.sort(f||eu)}function d(){for(let u=t,f=i.length;u<f;u++){const _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Yx(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new nu,i.set(n,[o])):s>=r.length?(o=new nu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function qx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new Ft};break;case"SpotLight":e={position:new O,direction:new O,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function Kx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Zx=0;function Jx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function $x(i){const t=new qx,e=Kx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const s=new O,r=new ue,o=new ue;function a(c){let h=0,d=0,u=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let f=0,_=0,v=0,p=0,m=0,M=0,y=0,x=0,w=0,S=0,T=0,g=0,b=0,A=0;c.sort(Jx);for(let P=0,L=c.length;P<L;P++){const N=c[P],U=N.color,B=N.intensity,z=N.distance;let W=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===ji?W=N.shadow.map.texture:W=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=U.r*B,d+=U.g*B,u+=U.b*B;else if(N.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(N.sh.coefficients[D],B);A++}else if(N.isSunLight){const D=t.get(N);if(D.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const G=N.shadow,X=e.get(N);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),n.sunShadow[_]=X,n.sunShadowMap[_]=W;const ft=G.getViewportCount();for(let gt=0;gt<ft;gt++)n.sunShadowMatrix[v+gt]=G.getMatrix(gt),n.sunShadowCascade[v+gt]=G._cascadeData[gt];v+=ft,_++}n.sun[f]=D,f++}else if(N.isDirectionalLight){const D=t.get(N);if(D.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const G=N.shadow,X=e.get(N);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=N.shadow.matrix,w++}n.directional[p]=D,p++}else if(N.isSpotLight){const D=t.get(N);D.position.setFromMatrixPosition(N.matrixWorld),D.color.copy(U).multiplyScalar(B),D.distance=z,D.coneCos=Math.cos(N.angle),D.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),D.decay=N.decay,n.spot[M]=D;const G=N.shadow;if(N.map&&(n.spotLightMap[g]=N.map,g++,G.updateMatrices(N),N.castShadow&&b++),n.spotLightMatrix[M]=G.matrix,N.castShadow){const X=e.get(N);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,n.spotShadow[M]=X,n.spotShadowMap[M]=W,T++}M++}else if(N.isRectAreaLight){const D=t.get(N);D.color.copy(U).multiplyScalar(B),D.halfWidth.set(N.width*.5,0,0),D.halfHeight.set(0,N.height*.5,0),n.rectArea[y]=D,y++}else if(N.isPointLight){const D=t.get(N);if(D.color.copy(N.color).multiplyScalar(N.intensity),D.distance=N.distance,D.decay=N.decay,N.castShadow){const G=N.shadow,X=e.get(N);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,X.shadowCameraNear=G.camera.near,X.shadowCameraFar=G.camera.far,n.pointShadow[m]=X,n.pointShadowMap[m]=W,n.pointShadowMatrix[m]=N.shadow.matrix,S++}n.point[m]=D,m++}else if(N.isHemisphereLight){const D=t.get(N);D.skyColor.copy(N.color).multiplyScalar(B),D.groundColor.copy(N.groundColor).multiplyScalar(B),n.hemi[x]=D,x++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const C=n.hash;(C.sunLength!==f||C.directionalLength!==p||C.pointLength!==m||C.spotLength!==M||C.rectAreaLength!==y||C.hemiLength!==x||C.numSunShadows!==_||C.numDirectionalShadows!==w||C.numPointShadows!==S||C.numSpotShadows!==T||C.numSpotMaps!==g||C.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=p,n.spot.length=M,n.rectArea.length=y,n.point.length=m,n.hemi.length=x,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+g-b,n.spotLightMap.length=g,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=A,C.sunLength=f,C.directionalLength=p,C.pointLength=m,C.spotLength=M,C.rectAreaLength=y,C.hemiLength=x,C.numSunShadows=_,C.numDirectionalShadows=w,C.numPointShadows=S,C.numSpotShadows=T,C.numSpotMaps=g,C.numLightProbes=A,n.version=Zx++)}function l(c,h){let d=0,u=0,f=0,_=0,v=0,p=0;const m=h.matrixWorldInverse;for(let M=0,y=c.length;M<y;M++){const x=c[M];if(x.isSunLight){const w=n.sun[d];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(m),d++}else if(x.isDirectionalLight){const w=n.directional[u];w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),u++}else if(x.isSpotLight){const w=n.spot[_];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),_++}else if(x.isRectAreaLight){const w=n.rectArea[v];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const w=n.point[f];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const w=n.hemi[p];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(m),p++}}}return{setup:a,setupView:l,state:n}}function iu(i){const t=new $x(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}const d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Qx(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new iu(i),t.set(s,[a])):r>=o.length?(a=new iu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const jx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tv=`uniform sampler2D shadow_pass;
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
}`,ev=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],nv=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],su=new ue,nr=new O,Da=new O;function iv(i,t,e){let n=new fc;const s=new ot,r=new ot,o=new Oe,a=new Qp,l=new jp,c={},h=e.maxTextureSize,d={[$i]:dn,[dn]:$i,[Ne]:Ne},u=new je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:jx,fragmentShader:tv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const _=new we;_.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new it(_,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lr;let m=this.type;this.render=function(S,T,g){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;this.type===qd&&(Jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=lr);const b=i.getRenderTarget(),A=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),P=i.state;P.setBlending(qn),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const L=m!==this.type;L&&T.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(U=>U.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,U=S.length;N<U;N++){const B=S[N],z=B.shadow;if(z===void 0){Jt("WebGLShadowMap:",B,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const W=z.getFrameExtents();s.multiply(W),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,z.mapSize.y=r.y));const D=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=D,z.map===null||L===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===sr){if(B.isPointLight){Jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new fn(s.x,s.y,{format:ji,type:_n,minFilter:sn,magFilter:sn,generateMipmaps:!1}),z.map.texture.name=B.name+".shadowMap",z.map.depthTexture=new yr(s.x,s.y,Nn),z.map.depthTexture.name=B.name+".shadowMapDepth",z.map.depthTexture.format=mi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Qe,z.map.depthTexture.magFilter=Qe}else B.isPointLight?(z.map=new ad(s.x),z.map.depthTexture=new mp(s.x,$n)):(z.map=new fn(s.x,s.y),z.map.depthTexture=new yr(s.x,s.y,$n)),z.map.depthTexture.name=B.name+".shadowMap",z.map.depthTexture.format=mi,this.type===lr?(z.map.depthTexture.compareFunction=D?lc:ac,z.map.depthTexture.minFilter=sn,z.map.depthTexture.magFilter=sn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Qe,z.map.depthTexture.magFilter=Qe);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);const G=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();B.isPointLight!==!0&&z.updateMatrices(B,g);for(let X=0;X<G;X++){const ft=z.getCamera(X);if(B.isPointLight){const gt=z.camera,Zt=z.matrix,$t=B.distance||gt.far;$t!==gt.far&&(gt.far=$t,gt.updateProjectionMatrix()),nr.setFromMatrixPosition(B.matrixWorld),gt.position.copy(nr),Da.copy(gt.position),Da.add(ev[X]),gt.up.copy(nv[X]),gt.lookAt(Da),gt.updateMatrixWorld(),Zt.makeTranslation(-nr.x,-nr.y,-nr.z),su.multiplyMatrices(gt.projectionMatrix,gt.matrixWorldInverse),z._frustum.setFromProjectionMatrix(su,gt.coordinateSystem,gt.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,X),i.clear();else{X===0&&(i.setRenderTarget(z.map),i.clear());const gt=z.getViewport(X);o.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),P.viewport(o)}n=z.getFrustum(X),x(T,g,ft,B,this.type)}z.isPointLightShadow!==!0&&this.type===sr&&M(z,g),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(b,A,C)};function M(S,T){const g=t.update(v);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new fn(s.x,s.y,{format:ji,type:_n}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(T,null,g,u,v,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(T,null,g,f,v,null)}function y(S,T,g,b){let A=null;const C=g.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(C!==void 0)A=C;else if(A=g.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const P=A.uuid,L=T.uuid;let N=c[P];N===void 0&&(N={},c[P]=N);let U=N[L];U===void 0&&(U=A.clone(),N[L]=U,T.addEventListener("dispose",w)),A=U}if(A.visible=T.visible,A.wireframe=T.wireframe,b===sr?A.side=T.shadowSide!==null?T.shadowSide:T.side:A.side=T.shadowSide!==null?T.shadowSide:d[T.side],A.alphaMap=T.alphaMap,A.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,A.map=T.map,A.clipShadows=T.clipShadows,A.clippingPlanes=T.clippingPlanes,A.clipIntersection=T.clipIntersection,A.displacementMap=T.displacementMap,A.displacementScale=T.displacementScale,A.displacementBias=T.displacementBias,A.wireframeLinewidth=T.wireframeLinewidth,A.linewidth=T.linewidth,g.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const P=i.properties.get(A);P.light=g}return A}function x(S,T,g,b,A){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&A===sr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,S.matrixWorld);const L=t.update(S),N=S.material;if(Array.isArray(N)){const U=L.groups;for(let B=0,z=U.length;B<z;B++){const W=U[B],D=N[W.materialIndex];if(D&&D.visible){const G=y(S,D,b,A);S.onBeforeShadow(i,S,T,g,L,G,W),i.renderBufferDirect(g,null,L,G,S,W),S.onAfterShadow(i,S,T,g,L,G,W)}}}else if(N.visible){const U=y(S,N,b,A);S.onBeforeShadow(i,S,T,g,L,U,null),i.renderBufferDirect(g,null,L,U,S,null),S.onAfterShadow(i,S,T,g,L,U,null)}}const P=S.children;for(let L=0,N=P.length;L<N;L++)x(P[L],T,g,b,A)}function w(S){S.target.removeEventListener("dispose",w);for(const g in c){const b=c[g],A=S.target.uuid;A in b&&(b[A].dispose(),delete b[A])}}}function sv(i,t){function e(){let V=!1;const yt=new Oe;let rt=null;const wt=new Oe(0,0,0,0);return{setMask:function(Ct){rt!==Ct&&!V&&(i.colorMask(Ct,Ct,Ct,Ct),rt=Ct)},setLocked:function(Ct){V=Ct},setClear:function(Ct,ct,Vt,Wt,Ee){Ee===!0&&(Ct*=Wt,ct*=Wt,Vt*=Wt),yt.set(Ct,ct,Vt,Wt),wt.equals(yt)===!1&&(i.clearColor(Ct,ct,Vt,Wt),wt.copy(yt))},reset:function(){V=!1,rt=null,wt.set(-1,0,0,0)}}}function n(){let V=!1,yt=!1,rt=null,wt=null,Ct=null;return{setReversed:function(ct){if(yt!==ct){const Vt=t.get("EXT_clip_control");ct?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),yt=ct;const Wt=Ct;Ct=null,this.setClear(Wt)}},getReversed:function(){return yt},setTest:function(ct){ct?F(i.DEPTH_TEST):Q(i.DEPTH_TEST)},setMask:function(ct){rt!==ct&&!V&&(i.depthMask(ct),rt=ct)},setFunc:function(ct){if(yt&&(ct=Cf[ct]),wt!==ct){switch(ct){case Ja:i.depthFunc(i.NEVER);break;case $a:i.depthFunc(i.ALWAYS);break;case Qa:i.depthFunc(i.LESS);break;case pr:i.depthFunc(i.LEQUAL);break;case ja:i.depthFunc(i.EQUAL);break;case tl:i.depthFunc(i.GEQUAL);break;case el:i.depthFunc(i.GREATER);break;case nl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}wt=ct}},setLocked:function(ct){V=ct},setClear:function(ct){Ct!==ct&&(Ct=ct,yt&&(ct=1-ct),i.clearDepth(ct))},reset:function(){V=!1,rt=null,wt=null,Ct=null,yt=!1}}}function s(){let V=!1,yt=null,rt=null,wt=null,Ct=null,ct=null,Vt=null,Wt=null,Ee=null;return{setTest:function(ne){V||(ne?F(i.STENCIL_TEST):Q(i.STENCIL_TEST))},setMask:function(ne){yt!==ne&&!V&&(i.stencilMask(ne),yt=ne)},setFunc:function(ne,ke,on){(rt!==ne||wt!==ke||Ct!==on)&&(i.stencilFunc(ne,ke,on),rt=ne,wt=ke,Ct=on)},setOp:function(ne,ke,on){(ct!==ne||Vt!==ke||Wt!==on)&&(i.stencilOp(ne,ke,on),ct=ne,Vt=ke,Wt=on)},setLocked:function(ne){V=ne},setClear:function(ne){Ee!==ne&&(i.clearStencil(ne),Ee=ne)},reset:function(){V=!1,yt=null,rt=null,wt=null,Ct=null,ct=null,Vt=null,Wt=null,Ee=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},d={},u={},f=new WeakMap,_=[],v=null,p=!1,m=null,M=null,y=null,x=null,w=null,S=null,T=null,g=new Ft(0,0,0),b=0,A=!1,C=null,P=null,L=null,N=null,U=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,W=0;const D=i.getParameter(i.VERSION);D.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(D)[1]),z=W>=1):D.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),z=W>=2);let G=null,X={};const ft=i.getParameter(i.SCISSOR_BOX),gt=i.getParameter(i.VIEWPORT),Zt=new Oe().fromArray(ft),$t=new Oe().fromArray(gt);function Lt(V,yt,rt,wt){const Ct=new Uint8Array(4),ct=i.createTexture();i.bindTexture(V,ct),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<rt;Vt++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(yt,0,i.RGBA,1,1,wt,0,i.RGBA,i.UNSIGNED_BYTE,Ct):i.texImage2D(yt+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ct);return ct}const J={};J[i.TEXTURE_2D]=Lt(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=Lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=Lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=Lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),F(i.DEPTH_TEST),o.setFunc(pr),lt(!1),dt(Xc),F(i.CULL_FACE),at(qn);function F(V){h[V]!==!0&&(i.enable(V),h[V]=!0)}function Q(V){h[V]!==!1&&(i.disable(V),h[V]=!1)}function Rt(V,yt){return u[V]!==yt?(i.bindFramebuffer(V,yt),u[V]=yt,V===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=yt),V===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=yt),!0):!1}function pt(V,yt){let rt=_,wt=!1;if(V){rt=f.get(yt),rt===void 0&&(rt=[],f.set(yt,rt));const Ct=V.textures;if(rt.length!==Ct.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Vt=Ct.length;ct<Vt;ct++)rt[ct]=i.COLOR_ATTACHMENT0+ct;rt.length=Ct.length,wt=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,wt=!0);wt&&i.drawBuffers(rt)}function _t(V){return v!==V?(i.useProgram(V),v=V,!0):!1}const Xt={[As]:i.FUNC_ADD,[Zd]:i.FUNC_SUBTRACT,[Jd]:i.FUNC_REVERSE_SUBTRACT};Xt[$d]=i.MIN,Xt[Qd]=i.MAX;const j={[jd]:i.ZERO,[tf]:i.ONE,[ef]:i.SRC_COLOR,[Cu]:i.SRC_ALPHA,[lf]:i.SRC_ALPHA_SATURATE,[of]:i.DST_COLOR,[sf]:i.DST_ALPHA,[nf]:i.ONE_MINUS_SRC_COLOR,[Pu]:i.ONE_MINUS_SRC_ALPHA,[af]:i.ONE_MINUS_DST_COLOR,[rf]:i.ONE_MINUS_DST_ALPHA,[cf]:i.CONSTANT_COLOR,[hf]:i.ONE_MINUS_CONSTANT_COLOR,[uf]:i.CONSTANT_ALPHA,[df]:i.ONE_MINUS_CONSTANT_ALPHA};function at(V,yt,rt,wt,Ct,ct,Vt,Wt,Ee,ne){if(V===qn){p===!0&&(Q(i.BLEND),p=!1);return}if(p===!1&&(F(i.BLEND),p=!0),V!==Kd){if(V!==m||ne!==A){if((M!==As||w!==As)&&(i.blendEquation(i.FUNC_ADD),M=As,w=As),ne)switch(V){case cr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Eo:i.blendFunc(i.ONE,i.ONE);break;case Yc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:me("WebGLState: Invalid blending: ",V);break}else switch(V){case cr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Eo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Yc:me("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qc:me("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:me("WebGLState: Invalid blending: ",V);break}y=null,x=null,S=null,T=null,g.set(0,0,0),b=0,m=V,A=ne}return}Ct=Ct||yt,ct=ct||rt,Vt=Vt||wt,(yt!==M||Ct!==w)&&(i.blendEquationSeparate(Xt[yt],Xt[Ct]),M=yt,w=Ct),(rt!==y||wt!==x||ct!==S||Vt!==T)&&(i.blendFuncSeparate(j[rt],j[wt],j[ct],j[Vt]),y=rt,x=wt,S=ct,T=Vt),(Wt.equals(g)===!1||Ee!==b)&&(i.blendColor(Wt.r,Wt.g,Wt.b,Ee),g.copy(Wt),b=Ee),m=V,A=!1}function ut(V,yt){V.side===Ne?Q(i.CULL_FACE):F(i.CULL_FACE);let rt=V.side===dn;yt&&(rt=!rt),lt(rt),V.blending===cr&&V.transparent===!1?at(qn):at(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);const wt=V.stencilWrite;a.setTest(wt),wt&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Nt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?F(i.SAMPLE_ALPHA_TO_COVERAGE):Q(i.SAMPLE_ALPHA_TO_COVERAGE)}function lt(V){C!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),C=V)}function dt(V){V!==Xd?(F(i.CULL_FACE),V!==P&&(V===Xc?i.cullFace(i.BACK):V===Yd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Q(i.CULL_FACE),P=V}function zt(V){V!==L&&(z&&i.lineWidth(V),L=V)}function Nt(V,yt,rt){V?(F(i.POLYGON_OFFSET_FILL),(N!==yt||U!==rt)&&(N=yt,U=rt,o.getReversed()&&(yt=-yt),i.polygonOffset(yt,rt))):Q(i.POLYGON_OFFSET_FILL)}function kt(V){V?F(i.SCISSOR_TEST):Q(i.SCISSOR_TEST)}function Kt(V){V===void 0&&(V=i.TEXTURE0+B-1),G!==V&&(i.activeTexture(V),G=V)}function k(V,yt,rt){rt===void 0&&(G===null?rt=i.TEXTURE0+B-1:rt=G);let wt=X[rt];wt===void 0&&(wt={type:void 0,texture:void 0},X[rt]=wt),(wt.type!==V||wt.texture!==yt)&&(G!==rt&&(i.activeTexture(rt),G=rt),i.bindTexture(V,yt||J[V]),wt.type=V,wt.texture=yt)}function pe(){const V=X[G];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function re(){try{i.compressedTexImage2D(...arguments)}catch(V){me("WebGLState:",V)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(V){me("WebGLState:",V)}}function E(){try{i.texSubImage2D(...arguments)}catch(V){me("WebGLState:",V)}}function Y(){try{i.texSubImage3D(...arguments)}catch(V){me("WebGLState:",V)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(V){me("WebGLState:",V)}}function tt(){try{i.compressedTexSubImage3D(...arguments)}catch(V){me("WebGLState:",V)}}function mt(){try{i.texStorage2D(...arguments)}catch(V){me("WebGLState:",V)}}function vt(){try{i.texStorage3D(...arguments)}catch(V){me("WebGLState:",V)}}function et(){try{i.texImage2D(...arguments)}catch(V){me("WebGLState:",V)}}function st(){try{i.texImage3D(...arguments)}catch(V){me("WebGLState:",V)}}function St(V){return d[V]!==void 0?d[V]:i.getParameter(V)}function Yt(V,yt){d[V]!==yt&&(i.pixelStorei(V,yt),d[V]=yt)}function xt(V){Zt.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),Zt.copy(V))}function Mt(V){$t.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),$t.copy(V))}function qt(V,yt){let rt=c.get(yt);rt===void 0&&(rt=new WeakMap,c.set(yt,rt));let wt=rt.get(V);wt===void 0&&(wt=i.getUniformBlockIndex(yt,V.name),rt.set(V,wt))}function Gt(V,yt){const wt=c.get(yt).get(V);l.get(yt)!==wt&&(i.uniformBlockBinding(yt,wt,V.__bindingPointIndex),l.set(yt,wt))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},G=null,X={},u={},f=new WeakMap,_=[],v=null,p=!1,m=null,M=null,y=null,x=null,w=null,S=null,T=null,g=new Ft(0,0,0),b=0,A=!1,C=null,P=null,L=null,N=null,U=null,Zt.set(0,0,i.canvas.width,i.canvas.height),$t.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:F,disable:Q,bindFramebuffer:Rt,drawBuffers:pt,useProgram:_t,setBlending:at,setMaterial:ut,setFlipSided:lt,setCullFace:dt,setLineWidth:zt,setPolygonOffset:Nt,setScissorTest:kt,activeTexture:Kt,bindTexture:k,unbindTexture:pe,compressedTexImage2D:re,compressedTexImage3D:I,texImage2D:et,texImage3D:st,pixelStorei:Yt,getParameter:St,updateUBOMapping:qt,uniformBlockBinding:Gt,texStorage2D:mt,texStorage3D:vt,texSubImage2D:E,texSubImage3D:Y,compressedTexSubImage2D:Z,compressedTexSubImage3D:tt,scissor:xt,viewport:Mt,reset:te}}function rv(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(I,E){return _?new OffscreenCanvas(I,E):Po("canvas")}function p(I,E,Y){let Z=1;const tt=re(I);if((tt.width>Y||tt.height>Y)&&(Z=Y/Math.max(tt.width,tt.height)),Z<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const mt=Math.floor(Z*tt.width),vt=Math.floor(Z*tt.height);u===void 0&&(u=v(mt,vt));const et=E?v(mt,vt):u;return et.width=mt,et.height=vt,et.getContext("2d").drawImage(I,0,0,mt,vt),Jt("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+mt+"x"+vt+")."),et}else return"data"in I&&Jt("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),I;return I}function m(I){return I.generateMipmaps}function M(I){i.generateMipmap(I)}function y(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(I,E,Y,Z,tt,mt=!1){if(I!==null){if(i[I]!==void 0)return i[I];Jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let vt;Z&&(vt=t.get("EXT_texture_norm16"),vt||Jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let et=E;if(E===i.RED&&(Y===i.FLOAT&&(et=i.R32F),Y===i.HALF_FLOAT&&(et=i.R16F),Y===i.UNSIGNED_BYTE&&(et=i.R8),Y===i.UNSIGNED_SHORT&&vt&&(et=vt.R16_EXT),Y===i.SHORT&&vt&&(et=vt.R16_SNORM_EXT)),E===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(et=i.R8UI),Y===i.UNSIGNED_SHORT&&(et=i.R16UI),Y===i.UNSIGNED_INT&&(et=i.R32UI),Y===i.BYTE&&(et=i.R8I),Y===i.SHORT&&(et=i.R16I),Y===i.INT&&(et=i.R32I)),E===i.RG&&(Y===i.FLOAT&&(et=i.RG32F),Y===i.HALF_FLOAT&&(et=i.RG16F),Y===i.UNSIGNED_BYTE&&(et=i.RG8),Y===i.UNSIGNED_SHORT&&vt&&(et=vt.RG16_EXT),Y===i.SHORT&&vt&&(et=vt.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(et=i.RG8UI),Y===i.UNSIGNED_SHORT&&(et=i.RG16UI),Y===i.UNSIGNED_INT&&(et=i.RG32UI),Y===i.BYTE&&(et=i.RG8I),Y===i.SHORT&&(et=i.RG16I),Y===i.INT&&(et=i.RG32I)),E===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(et=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(et=i.RGB16UI),Y===i.UNSIGNED_INT&&(et=i.RGB32UI),Y===i.BYTE&&(et=i.RGB8I),Y===i.SHORT&&(et=i.RGB16I),Y===i.INT&&(et=i.RGB32I)),E===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),Y===i.UNSIGNED_INT&&(et=i.RGBA32UI),Y===i.BYTE&&(et=i.RGBA8I),Y===i.SHORT&&(et=i.RGBA16I),Y===i.INT&&(et=i.RGBA32I)),E===i.RGB&&(Y===i.UNSIGNED_SHORT&&vt&&(et=vt.RGB16_EXT),Y===i.SHORT&&vt&&(et=vt.RGB16_SNORM_EXT),Y===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(et=i.R11F_G11F_B10F)),E===i.RGBA){const st=mt?Co:de.getTransfer(tt);Y===i.FLOAT&&(et=i.RGBA32F),Y===i.HALF_FLOAT&&(et=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(et=st===Se?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT&&vt&&(et=vt.RGBA16_EXT),Y===i.SHORT&&vt&&(et=vt.RGBA16_SNORM_EXT),Y===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function w(I,E){let Y;return I?E===null||E===$n||E===xr?Y=i.DEPTH24_STENCIL8:E===Nn?Y=i.DEPTH32F_STENCIL8:E===_r&&(Y=i.DEPTH24_STENCIL8,Jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===$n||E===xr?Y=i.DEPTH_COMPONENT24:E===Nn?Y=i.DEPTH_COMPONENT32F:E===_r&&(Y=i.DEPTH_COMPONENT16),Y}function S(I,E){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Qe&&I.minFilter!==sn?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function T(I){const E=I.target;E.removeEventListener("dispose",T),b(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&d.delete(E)}function g(I){const E=I.target;E.removeEventListener("dispose",g),C(E)}function b(I){const E=n.get(I);if(E.__webglInit===void 0)return;const Y=I.source,Z=f.get(Y);if(Z){const tt=Z[E.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&A(I),Object.keys(Z).length===0&&f.delete(Y)}n.remove(I)}function A(I){const E=n.get(I);i.deleteTexture(E.__webglTexture);const Y=I.source,Z=f.get(Y);delete Z[E.__cacheKey],o.memory.textures--}function C(I){const E=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let tt=0;tt<E.__webglFramebuffer[Z].length;tt++)i.deleteFramebuffer(E.__webglFramebuffer[Z][tt]);else i.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)i.deleteFramebuffer(E.__webglFramebuffer[Z]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Y=I.textures;for(let Z=0,tt=Y.length;Z<tt;Z++){const mt=n.get(Y[Z]);mt.__webglTexture&&(i.deleteTexture(mt.__webglTexture),o.memory.textures--),n.remove(Y[Z])}n.remove(I)}let P=0;function L(){P=0}function N(){return P}function U(I){P=I}function B(){const I=P;return I>=s.maxTextures&&Jt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),P+=1,I}function z(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function W(I,E){const Y=n.get(I);if(I.isVideoTexture&&k(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Y.__version!==I.version){const Z=I.image;if(Z===null)Jt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Jt("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(Y,I,E);return}}else I.isExternalTexture&&(Y.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+E)}function D(I,E){const Y=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){Q(Y,I,E);return}else I.isExternalTexture&&(Y.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+E)}function G(I,E){const Y=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){Q(Y,I,E);return}e.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+E)}function X(I,E){const Y=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&Y.__version!==I.version){Rt(Y,I,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+E)}const ft={[Os]:i.REPEAT,[ui]:i.CLAMP_TO_EDGE,[il]:i.MIRRORED_REPEAT},gt={[Qe]:i.NEAREST,[mf]:i.NEAREST_MIPMAP_NEAREST,[Ir]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[jo]:i.LINEAR_MIPMAP_NEAREST,[Yi]:i.LINEAR_MIPMAP_LINEAR},Zt={[vf]:i.NEVER,[bf]:i.ALWAYS,[Mf]:i.LESS,[ac]:i.LEQUAL,[yf]:i.EQUAL,[lc]:i.GEQUAL,[Sf]:i.GREATER,[wf]:i.NOTEQUAL};function $t(I,E){if(E.type===Nn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===sn||E.magFilter===jo||E.magFilter===Ir||E.magFilter===Yi||E.minFilter===sn||E.minFilter===jo||E.minFilter===Ir||E.minFilter===Yi)&&Jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,ft[E.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,ft[E.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,ft[E.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,gt[E.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,gt[E.minFilter]),E.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Zt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Qe||E.minFilter!==Ir&&E.minFilter!==Yi||E.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Lt(I,E){let Y=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",T));const Z=E.source;let tt=f.get(Z);tt===void 0&&(tt={},f.set(Z,tt));const mt=z(E);if(mt!==I.__cacheKey){tt[mt]===void 0&&(tt[mt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),tt[mt].usedTimes++;const vt=tt[I.__cacheKey];vt!==void 0&&(tt[I.__cacheKey].usedTimes--,vt.usedTimes===0&&A(E)),I.__cacheKey=mt,I.__webglTexture=tt[mt].texture}return Y}function J(I,E,Y){return Math.floor(Math.floor(I/Y)/E)}function F(I,E,Y,Z){const mt=I.updateRanges;if(mt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,Y,Z,E.data);else{mt.sort((Yt,xt)=>Yt.start-xt.start);let vt=0;for(let Yt=1;Yt<mt.length;Yt++){const xt=mt[vt],Mt=mt[Yt],qt=xt.start+xt.count,Gt=J(Mt.start,E.width,4),te=J(xt.start,E.width,4);Mt.start<=qt+1&&Gt===te&&J(Mt.start+Mt.count-1,E.width,4)===Gt?xt.count=Math.max(xt.count,Mt.start+Mt.count-xt.start):(++vt,mt[vt]=Mt)}mt.length=vt+1;const et=e.getParameter(i.UNPACK_ROW_LENGTH),st=e.getParameter(i.UNPACK_SKIP_PIXELS),St=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let Yt=0,xt=mt.length;Yt<xt;Yt++){const Mt=mt[Yt],qt=Math.floor(Mt.start/4),Gt=Math.ceil(Mt.count/4),te=qt%E.width,V=Math.floor(qt/E.width),yt=Gt,rt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,te),e.pixelStorei(i.UNPACK_SKIP_ROWS,V),e.texSubImage2D(i.TEXTURE_2D,0,te,V,yt,rt,Y,Z,E.data)}I.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,et),e.pixelStorei(i.UNPACK_SKIP_PIXELS,st),e.pixelStorei(i.UNPACK_SKIP_ROWS,St)}}function Q(I,E,Y){let Z=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=i.TEXTURE_3D);const tt=Lt(I,E),mt=E.source;e.bindTexture(Z,I.__webglTexture,i.TEXTURE0+Y);const vt=n.get(mt);if(mt.version!==vt.__version||tt===!0){if(e.activeTexture(i.TEXTURE0+Y),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const rt=de.getPrimaries(de.workingColorSpace),wt=E.colorSpace===hi?null:de.getPrimaries(E.colorSpace),Ct=E.colorSpace===hi||rt===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct)}e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let st=p(E.image,!1,s.maxTextureSize);st=pe(E,st);const St=r.convert(E.format,E.colorSpace),Yt=r.convert(E.type);let xt=x(E.internalFormat,St,Yt,E.normalized,E.colorSpace,E.isVideoTexture);$t(Z,E);let Mt;const qt=E.mipmaps,Gt=E.isVideoTexture!==!0,te=vt.__version===void 0||tt===!0,V=mt.dataReady,yt=S(E,st);if(E.isDepthTexture)xt=w(E.format===qi,E.type),te&&(Gt?e.texStorage2D(i.TEXTURE_2D,1,xt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,xt,st.width,st.height,0,St,Yt,null));else if(E.isDataTexture)if(qt.length>0){Gt&&te&&e.texStorage2D(i.TEXTURE_2D,yt,xt,qt[0].width,qt[0].height);for(let rt=0,wt=qt.length;rt<wt;rt++)Mt=qt[rt],Gt?V&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Mt.width,Mt.height,St,Yt,Mt.data):e.texImage2D(i.TEXTURE_2D,rt,xt,Mt.width,Mt.height,0,St,Yt,Mt.data);E.generateMipmaps=!1}else Gt?(te&&e.texStorage2D(i.TEXTURE_2D,yt,xt,st.width,st.height),V&&F(E,st,St,Yt)):e.texImage2D(i.TEXTURE_2D,0,xt,st.width,st.height,0,St,Yt,st.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Gt&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,xt,qt[0].width,qt[0].height,st.depth);for(let rt=0,wt=qt.length;rt<wt;rt++)if(Mt=qt[rt],E.format!==Un)if(St!==null)if(Gt){if(V)if(E.layerUpdates.size>0){const Ct=Fh(Mt.width,Mt.height,E.format,E.type);for(const ct of E.layerUpdates){const Vt=Mt.data.subarray(ct*Ct/Mt.data.BYTES_PER_ELEMENT,(ct+1)*Ct/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,ct,Mt.width,Mt.height,1,St,Vt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,Mt.width,Mt.height,st.depth,St,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,xt,Mt.width,Mt.height,st.depth,0,Mt.data,0,0);else Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?V&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,Mt.width,Mt.height,st.depth,St,Yt,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,xt,Mt.width,Mt.height,st.depth,0,St,Yt,Mt.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Gt&&te&&e.texStorage2D(i.TEXTURE_2D,yt,xt,qt[0].width,qt[0].height);for(let rt=0,wt=qt.length;rt<wt;rt++)Mt=qt[rt],E.format!==Un?St!==null?Gt?V&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,Mt.width,Mt.height,St,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,xt,Mt.width,Mt.height,0,Mt.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?V&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Mt.width,Mt.height,St,Yt,Mt.data):e.texImage2D(i.TEXTURE_2D,rt,xt,Mt.width,Mt.height,0,St,Yt,Mt.data)}else if(E.isDataArrayTexture)if(Gt){if(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,xt,st.width,st.height,st.depth),V)if(E.layerUpdates.size>0){const rt=Fh(st.width,st.height,E.format,E.type);for(const wt of E.layerUpdates){const Ct=st.data.subarray(wt*rt/st.data.BYTES_PER_ELEMENT,(wt+1)*rt/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,wt,st.width,st.height,1,St,Yt,Ct)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,St,Yt,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,xt,st.width,st.height,st.depth,0,St,Yt,st.data);else if(E.isData3DTexture)Gt?(te&&e.texStorage3D(i.TEXTURE_3D,yt,xt,st.width,st.height,st.depth),V&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,St,Yt,st.data)):e.texImage3D(i.TEXTURE_3D,0,xt,st.width,st.height,st.depth,0,St,Yt,st.data);else if(E.isFramebufferTexture){if(te)if(Gt)e.texStorage2D(i.TEXTURE_2D,yt,xt,st.width,st.height);else{let rt=st.width,wt=st.height;for(let Ct=0;Ct<yt;Ct++)e.texImage2D(i.TEXTURE_2D,Ct,xt,rt,wt,0,St,Yt,null),rt>>=1,wt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){const rt=i.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),st.parentNode!==rt){rt.appendChild(st),d.add(E),rt.onpaint=wt=>{const Ct=wt.changedElements;for(const ct of d)Ct.includes(ct.image)&&(ct.needsUpdate=!0)},rt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,st);else{const Ct=i.RGBA,ct=i.RGBA,Vt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ct,ct,Vt,st)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(qt.length>0){if(Gt&&te){const rt=re(qt[0]);e.texStorage2D(i.TEXTURE_2D,yt,xt,rt.width,rt.height)}for(let rt=0,wt=qt.length;rt<wt;rt++)Mt=qt[rt],Gt?V&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,St,Yt,Mt):e.texImage2D(i.TEXTURE_2D,rt,xt,St,Yt,Mt);E.generateMipmaps=!1}else if(Gt){if(te){const rt=re(st);e.texStorage2D(i.TEXTURE_2D,yt,xt,rt.width,rt.height)}V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Yt,st)}else e.texImage2D(i.TEXTURE_2D,0,xt,St,Yt,st);m(E)&&M(Z),vt.__version=mt.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function Rt(I,E,Y){if(E.image.length!==6)return;const Z=Lt(I,E),tt=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+Y);const mt=n.get(tt);if(tt.version!==mt.__version||Z===!0){e.activeTexture(i.TEXTURE0+Y);const vt=de.getPrimaries(de.workingColorSpace),et=E.colorSpace===hi?null:de.getPrimaries(E.colorSpace),st=E.colorSpace===hi||vt===et?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);const St=E.isCompressedTexture||E.image[0].isCompressedTexture,Yt=E.image[0]&&E.image[0].isDataTexture,xt=[];for(let ct=0;ct<6;ct++)!St&&!Yt?xt[ct]=p(E.image[ct],!0,s.maxCubemapSize):xt[ct]=Yt?E.image[ct].image:E.image[ct],xt[ct]=pe(E,xt[ct]);const Mt=xt[0],qt=r.convert(E.format,E.colorSpace),Gt=r.convert(E.type),te=x(E.internalFormat,qt,Gt,E.normalized,E.colorSpace),V=E.isVideoTexture!==!0,yt=mt.__version===void 0||Z===!0,rt=tt.dataReady;let wt=S(E,Mt);$t(i.TEXTURE_CUBE_MAP,E);let Ct;if(St){V&&yt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,te,Mt.width,Mt.height);for(let ct=0;ct<6;ct++){Ct=xt[ct].mipmaps;for(let Vt=0;Vt<Ct.length;Vt++){const Wt=Ct[Vt];E.format!==Un?qt!==null?V?rt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt,0,0,Wt.width,Wt.height,qt,Wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt,te,Wt.width,Wt.height,0,Wt.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt,0,0,Wt.width,Wt.height,qt,Gt,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt,te,Wt.width,Wt.height,0,qt,Gt,Wt.data)}}}else{if(Ct=E.mipmaps,V&&yt){Ct.length>0&&wt++;const ct=re(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,te,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(Yt){V?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,xt[ct].width,xt[ct].height,qt,Gt,xt[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,te,xt[ct].width,xt[ct].height,0,qt,Gt,xt[ct].data);for(let Vt=0;Vt<Ct.length;Vt++){const Ee=Ct[Vt].image[ct].image;V?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt+1,0,0,Ee.width,Ee.height,qt,Gt,Ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt+1,te,Ee.width,Ee.height,0,qt,Gt,Ee.data)}}else{V?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,qt,Gt,xt[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,te,qt,Gt,xt[ct]);for(let Vt=0;Vt<Ct.length;Vt++){const Wt=Ct[Vt];V?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt+1,0,0,qt,Gt,Wt.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt+1,te,qt,Gt,Wt.image[ct])}}}m(E)&&M(i.TEXTURE_CUBE_MAP),mt.__version=tt.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function pt(I,E,Y,Z,tt,mt){const vt=r.convert(Y.format,Y.colorSpace),et=r.convert(Y.type),st=x(Y.internalFormat,vt,et,Y.normalized,Y.colorSpace),St=n.get(E),Yt=n.get(Y);if(Yt.__renderTarget=E,!St.__hasExternalTextures){const xt=Math.max(1,E.width>>mt),Mt=Math.max(1,E.height>>mt);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,mt,st,xt,Mt,E.depth,0,vt,et,null):e.texImage2D(tt,mt,st,xt,Mt,0,vt,et,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),Kt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,tt,Yt.__webglTexture,0,kt(E)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,tt,Yt.__webglTexture,mt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(I,E,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,I),E.depthBuffer){const Z=E.depthTexture,tt=Z&&Z.isDepthTexture?Z.type:null,mt=w(E.stencilBuffer,tt),vt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Kt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,kt(E),mt,E.width,E.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,kt(E),mt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,mt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,I)}else{const Z=E.textures;for(let tt=0;tt<Z.length;tt++){const mt=Z[tt],vt=r.convert(mt.format,mt.colorSpace),et=r.convert(mt.type),st=x(mt.internalFormat,vt,et,mt.normalized,mt.colorSpace);Kt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,kt(E),st,E.width,E.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,kt(E),st,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,st,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Xt(I,E,Y){const Z=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const tt=n.get(E.depthTexture);if(tt.__renderTarget=E,(!tt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Z){if(tt.__webglInit===void 0&&(tt.__webglInit=!0,E.depthTexture.addEventListener("dispose",T)),tt.__webglTexture===void 0){tt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),$t(i.TEXTURE_CUBE_MAP,E.depthTexture);const St=r.convert(E.depthTexture.format),Yt=r.convert(E.depthTexture.type);let xt;E.depthTexture.format===mi?xt=i.DEPTH_COMPONENT24:E.depthTexture.format===qi&&(xt=i.DEPTH24_STENCIL8);for(let Mt=0;Mt<6;Mt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,xt,E.width,E.height,0,St,Yt,null)}}else W(E.depthTexture,0);const mt=tt.__webglTexture,vt=kt(E),et=Z?i.TEXTURE_CUBE_MAP_POSITIVE_X+Y:i.TEXTURE_2D,st=E.depthTexture.format===qi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===mi)Kt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,et,mt,0,vt):i.framebufferTexture2D(i.FRAMEBUFFER,st,et,mt,0);else if(E.depthTexture.format===qi)Kt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,et,mt,0,vt):i.framebufferTexture2D(i.FRAMEBUFFER,st,et,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function j(I){const E=n.get(I),Y=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const Z=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Z){const tt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Z.removeEventListener("dispose",tt)};Z.addEventListener("dispose",tt),E.__depthDisposeCallback=tt}E.__boundDepthTexture=Z}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(Y)for(let Z=0;Z<6;Z++)Xt(E.__webglFramebuffer[Z],I,Z);else{const Z=I.texture.mipmaps;Z&&Z.length>0?Xt(E.__webglFramebuffer[0],I,0):Xt(E.__webglFramebuffer,I,0)}else if(Y){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]===void 0)E.__webglDepthbuffer[Z]=i.createRenderbuffer(),_t(E.__webglDepthbuffer[Z],I,!1);else{const tt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=E.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,mt)}}else{const Z=I.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),_t(E.__webglDepthbuffer,I,!1);else{const tt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,mt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(I,E,Y){const Z=n.get(I);E!==void 0&&pt(Z.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&j(I)}function ut(I){const E=I.texture,Y=n.get(I),Z=n.get(E);I.addEventListener("dispose",g);const tt=I.textures,mt=I.isWebGLCubeRenderTarget===!0,vt=tt.length>1;if(vt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=E.version,o.memory.textures++),mt){Y.__webglFramebuffer=[];for(let et=0;et<6;et++)if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[et]=[];for(let st=0;st<E.mipmaps.length;st++)Y.__webglFramebuffer[et][st]=i.createFramebuffer()}else Y.__webglFramebuffer[et]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let et=0;et<E.mipmaps.length;et++)Y.__webglFramebuffer[et]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(vt)for(let et=0,st=tt.length;et<st;et++){const St=n.get(tt[et]);St.__webglTexture===void 0&&(St.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&Kt(I)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let et=0;et<tt.length;et++){const st=tt[et];Y.__webglColorRenderbuffer[et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[et]);const St=r.convert(st.format,st.colorSpace),Yt=r.convert(st.type),xt=x(st.internalFormat,St,Yt,st.normalized,st.colorSpace,I.isXRRenderTarget===!0),Mt=kt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,xt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,Y.__webglColorRenderbuffer[et])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),_t(Y.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(mt){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),$t(i.TEXTURE_CUBE_MAP,E);for(let et=0;et<6;et++)if(E.mipmaps&&E.mipmaps.length>0)for(let st=0;st<E.mipmaps.length;st++)pt(Y.__webglFramebuffer[et][st],I,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,st);else pt(Y.__webglFramebuffer[et],I,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);m(E)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let et=0,st=tt.length;et<st;et++){const St=tt[et],Yt=n.get(St);let xt=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(xt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,Yt.__webglTexture),$t(xt,St),pt(Y.__webglFramebuffer,I,St,i.COLOR_ATTACHMENT0+et,xt,0),m(St)&&M(xt)}e.unbindTexture()}else{let et=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(et=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(et,Z.__webglTexture),$t(et,E),E.mipmaps&&E.mipmaps.length>0)for(let st=0;st<E.mipmaps.length;st++)pt(Y.__webglFramebuffer[st],I,E,i.COLOR_ATTACHMENT0,et,st);else pt(Y.__webglFramebuffer,I,E,i.COLOR_ATTACHMENT0,et,0);m(E)&&M(et),e.unbindTexture()}I.depthBuffer&&j(I)}function lt(I){const E=I.textures;for(let Y=0,Z=E.length;Y<Z;Y++){const tt=E[Y];if(m(tt)){const mt=y(I),vt=n.get(tt).__webglTexture;e.bindTexture(mt,vt),M(mt),e.unbindTexture()}}}const dt=[],zt=[];function Nt(I){if(I.samples>0){if(Kt(I)===!1){const E=I.textures,Y=I.width,Z=I.height;let tt=i.COLOR_BUFFER_BIT;const mt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(I),et=E.length>1;if(et)for(let St=0;St<E.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer);const st=I.texture.mipmaps;st&&st.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let St=0;St<E.length;St++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[St]);const Yt=n.get(E[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Yt,0)}i.blitFramebuffer(0,0,Y,Z,0,0,Y,Z,tt,i.NEAREST),l===!0&&(dt.length=0,zt.length=0,dt.push(i.COLOR_ATTACHMENT0+St),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(dt.push(mt),zt.push(mt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,zt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,dt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),et)for(let St=0;St<E.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,vt.__webglColorRenderbuffer[St]);const Yt=n.get(E[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,Yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){const E=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function kt(I){return Math.min(s.maxSamples,I.samples)}function Kt(I){const E=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function k(I){const E=o.render.frame;h.get(I)!==E&&(h.set(I,E),I.update())}function pe(I,E){const Y=I.colorSpace,Z=I.format,tt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Y!==Ro&&Y!==hi&&(de.getTransfer(Y)===Se?(Z!==Un||tt!==wn)&&Jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):me("WebGLTextures: Unsupported texture color space:",Y)),E}function re(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=L,this.getTextureUnits=N,this.setTextureUnits=U,this.setTexture2D=W,this.setTexture2DArray=D,this.setTexture3D=G,this.setTextureCube=X,this.rebindTextures=at,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Kt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function ov(i,t){function e(n,s=hi){let r;const o=de.getTransfer(s);if(n===wn)return i.UNSIGNED_BYTE;if(n===ec)return i.UNSIGNED_SHORT_4_4_4_4;if(n===nc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Uu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ou)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Iu)return i.BYTE;if(n===Nu)return i.SHORT;if(n===_r)return i.UNSIGNED_SHORT;if(n===tc)return i.INT;if(n===$n)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===_n)return i.HALF_FLOAT;if(n===Fu)return i.ALPHA;if(n===Bu)return i.RGB;if(n===Un)return i.RGBA;if(n===mi)return i.DEPTH_COMPONENT;if(n===qi)return i.DEPTH_STENCIL;if(n===ic)return i.RED;if(n===sc)return i.RED_INTEGER;if(n===ji)return i.RG;if(n===rc)return i.RG_INTEGER;if(n===oc)return i.RGBA_INTEGER;if(n===go||n===_o||n===xo||n===vo)if(o===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===go)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===go)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sl||n===rl||n===ol||n===al)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===sl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===rl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ol)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ll||n===cl||n===hl||n===ul||n===dl||n===To||n===fl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ll||n===cl)return o===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===hl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ul)return r.COMPRESSED_R11_EAC;if(n===dl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===To)return r.COMPRESSED_RG11_EAC;if(n===fl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===pl||n===ml||n===gl||n===_l||n===xl||n===vl||n===Ml||n===yl||n===Sl||n===wl||n===bl||n===El||n===Tl||n===Al)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===pl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ml)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_l)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ml)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===El)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Al)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rl||n===Cl||n===Pl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Rl)return o===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Dl||n===Ll||n===Ao||n===Il)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Dl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ll)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ao)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const av=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lv=`
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

}`;class cv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Yu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new je({vertexShader:av,fragmentShader:lv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new it(new ye(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hv extends Ci{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,_=null;const v=typeof XRWebGLBinding<"u",p=new cv,m={},M=e.getContextAttributes();let y=null,x=null;const w=[],S=[],T=new ot;let g=null,b=null;const A=new mn;A.viewport=new Oe;const C=new mn;C.viewport=new Oe;const P=[A,C],L=new h0;let N=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let F=w[J];return F===void 0&&(F=new oa,w[J]=F),F.getTargetRaySpace()},this.getControllerGrip=function(J){let F=w[J];return F===void 0&&(F=new oa,w[J]=F),F.getGripSpace()},this.getHand=function(J){let F=w[J];return F===void 0&&(F=new oa,w[J]=F),F.getHandSpace()};function B(J){const F=S.indexOf(J.inputSource);if(F===-1)return;const Q=w[F];Q!==void 0&&(Q.update(J.inputSource,J.frame,c||o),Q.dispatchEvent({type:J.type,data:J.inputSource}))}function z(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",W);for(let J=0;J<w.length;J++){const F=S[J];F!==null&&(S[J]=null,w[J].disconnect(F))}N=null,U=null,p.reset();for(const J in m)delete m[J];if(t.setRenderTarget(y),f=null,u=null,d=null,s=null,x=null,Lt.stop(),n.isPresenting=!1,t.setPixelRatio(g),t.setSize(T.width,T.height,!1),b!==null){const J=b.camera;J.fov=b.fov,J.zoom=b.zoom,J.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&Jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",z),s.addEventListener("inputsourceschange",W),M.xrCompatible!==!0&&await e.makeXRCompatible(),g=t.getPixelRatio(),t.getSize(T),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,Rt=null,pt=null;M.depth&&(pt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=M.stencil?qi:mi,Rt=M.stencil?xr:$n);const _t={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(_t),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new fn(u.textureWidth,u.textureHeight,{format:Un,type:wn,depthTexture:new yr(u.textureWidth,u.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const Q={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new fn(f.framebufferWidth,f.framebufferHeight,{format:Un,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Lt.setContext(s),Lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function W(J){for(let F=0;F<J.removed.length;F++){const Q=J.removed[F],Rt=S.indexOf(Q);Rt>=0&&(S[Rt]=null,w[Rt].disconnect(Q))}for(let F=0;F<J.added.length;F++){const Q=J.added[F];let Rt=S.indexOf(Q);if(Rt===-1){for(let _t=0;_t<w.length;_t++)if(_t>=S.length){S.push(Q),Rt=_t;break}else if(S[_t]===null){S[_t]=Q,Rt=_t;break}if(Rt===-1)break}const pt=w[Rt];pt&&pt.connect(Q)}}const D=new O,G=new O;function X(J,F,Q){D.setFromMatrixPosition(F.matrixWorld),G.setFromMatrixPosition(Q.matrixWorld);const Rt=D.distanceTo(G),pt=F.projectionMatrix.elements,_t=Q.projectionMatrix.elements,Xt=pt[14]/(pt[10]-1),j=pt[14]/(pt[10]+1),at=(pt[9]+1)/pt[5],ut=(pt[9]-1)/pt[5],lt=(pt[8]-1)/pt[0],dt=(_t[8]+1)/_t[0],zt=Xt*lt,Nt=Xt*dt,kt=Rt/(-lt+dt),Kt=kt*-lt;if(F.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Kt),J.translateZ(kt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),pt[10]===-1)J.projectionMatrix.copy(F.projectionMatrix),J.projectionMatrixInverse.copy(F.projectionMatrixInverse);else{const k=Xt+kt,pe=j+kt,re=zt-Kt,I=Nt+(Rt-Kt),E=at*j/pe*k,Y=ut*j/pe*k;J.projectionMatrix.makePerspective(re,I,E,Y,k,pe),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ft(J,F){F===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(F.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let F=J.near,Q=J.far;p.texture!==null&&(p.depthNear>0&&(F=p.depthNear),p.depthFar>0&&(Q=p.depthFar)),L.near=C.near=A.near=F,L.far=C.far=A.far=Q,(N!==L.near||U!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),N=L.near,U=L.far),L.layers.mask=J.layers.mask|6,A.layers.mask=L.layers.mask&-5,C.layers.mask=L.layers.mask&-3;const Rt=J.parent,pt=L.cameras;ft(L,Rt);for(let _t=0;_t<pt.length;_t++)ft(pt[_t],Rt);pt.length===2?X(L,A,C):L.projectionMatrix.copy(A.projectionMatrix),b===null&&J.isPerspectiveCamera&&(b={camera:J,fov:J.fov,zoom:J.zoom}),gt(J,L,Rt)};function gt(J,F,Q){Q===null?J.matrix.copy(F.matrixWorld):(J.matrix.copy(Q.matrixWorld),J.matrix.invert(),J.matrix.multiply(F.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(F.projectionMatrix),J.projectionMatrixInverse.copy(F.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Fs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(L)},this.getCameraTexture=function(J){return m[J]};let Zt=null;function $t(J,F){if(h=F.getViewerPose(c||o),_=F,h!==null){const Q=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Rt=!1;Q.length!==L.cameras.length&&(L.cameras.length=0,Rt=!0);for(let j=0;j<Q.length;j++){const at=Q[j];let ut=null;if(f!==null)ut=f.getViewport(at);else{const dt=d.getViewSubImage(u,at);ut=dt.viewport,j===0&&(t.setRenderTargetTextures(x,dt.colorTexture,dt.depthStencilTexture),t.setRenderTarget(x))}let lt=P[j];lt===void 0&&(lt=new mn,lt.layers.enable(j),lt.viewport=new Oe,P[j]=lt),lt.matrix.fromArray(at.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(at.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(ut.x,ut.y,ut.width,ut.height),j===0&&(L.matrix.copy(lt.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Rt===!0&&L.cameras.push(lt)}const pt=s.enabledFeatures;if(pt&&pt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const j=d.getDepthInformation(Q[0]);j&&j.isValid&&j.texture&&p.init(j,s.renderState)}if(pt&&pt.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let j=0;j<Q.length;j++){const at=Q[j].camera;if(at){let ut=m[at];ut||(ut=new Yu,m[at]=ut);const lt=d.getCameraImage(at);ut.sourceTexture=lt}}}}for(let Q=0;Q<w.length;Q++){const Rt=S[Q],pt=w[Q];Rt!==null&&pt!==void 0&&pt.update(Rt,F,c||o)}Zt&&Zt(J,F),F.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:F}),_=null}const Lt=new rd;Lt.setAnimationLoop($t),this.setAnimationLoop=function(J){Zt=J},this.dispose=function(){}}}const uv=new ue,dd=new ee;dd.set(-1,0,0,0,1,0,0,0,1);function dv(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,ed(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,y,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,x)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,M,y):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===dn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===dn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=t.get(m),y=M.envMap,x=M.envMapRotation;y&&(p.envMap.value=y,p.envMapRotation.value.setFromMatrix4(uv.makeRotationFromEuler(x)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(dd),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=y*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===dn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const M=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function fv(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,w){const S=w.program;n.uniformBlockBinding(x,S)}function c(x,w){let S=s[x.id];S===void 0&&(p(x),S=h(x),s[x.id]=S,x.addEventListener("dispose",M));const T=w.program;n.updateUBOMapping(x,T);const g=t.render.frame;r[x.id]!==g&&(u(x),r[x.id]=g)}function h(x){const w=d();x.__bindingPointIndex=w;const S=i.createBuffer(),T=x.__size,g=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,T,g),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,S),S}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return me("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const w=s[x.id],S=x.uniforms,T=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let g=0,b=S.length;g<b;g++){const A=S[g];if(Array.isArray(A))for(let C=0,P=A.length;C<P;C++)f(A[C],g,C,T);else f(A,g,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,w,S,T){if(v(x,w,S,T)===!0){const g=x.__offset,b=x.value;if(Array.isArray(b)){let A=0;for(let C=0;C<b.length;C++){const P=b[C],L=m(P);_(P,x.__data,A),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(A+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(b,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,g,x.__data)}}function _(x,w,S){typeof x=="number"||typeof x=="boolean"?w[0]=x:x.isMatrix3?(w[0]=x.elements[0],w[1]=x.elements[1],w[2]=x.elements[2],w[3]=0,w[4]=x.elements[3],w[5]=x.elements[4],w[6]=x.elements[5],w[7]=0,w[8]=x.elements[6],w[9]=x.elements[7],w[10]=x.elements[8],w[11]=0):ArrayBuffer.isView(x)?w.set(new x.constructor(x.buffer,x.byteOffset,w.length)):x.toArray(w,S)}function v(x,w,S,T){const g=x.value,b=w+"_"+S;if(T[b]===void 0)return typeof g=="number"||typeof g=="boolean"?T[b]=g:ArrayBuffer.isView(g)?T[b]=g.slice():T[b]=g.clone(),!0;{const A=T[b];if(typeof g=="number"||typeof g=="boolean"){if(A!==g)return T[b]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(A.equals(g)===!1)return A.copy(g),!0}}return!1}function p(x){const w=x.uniforms;let S=0;const T=16;for(let b=0,A=w.length;b<A;b++){const C=Array.isArray(w[b])?w[b]:[w[b]];for(let P=0,L=C.length;P<L;P++){const N=C[P],U=Array.isArray(N.value)?N.value:[N.value];for(let B=0,z=U.length;B<z;B++){const W=U[B],D=m(W),G=S%T,X=G%D.boundary,ft=G+X;S+=X,ft!==0&&T-ft<D.storage&&(S+=T-ft),N.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=D.storage}}}const g=S%T;return g>0&&(S+=T-g),x.__size=S,x.__cache={},this}function m(x){const w={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(w.boundary=4,w.storage=4):x.isVector2?(w.boundary=8,w.storage=8):x.isVector3||x.isColor?(w.boundary=16,w.storage=12):x.isVector4?(w.boundary=16,w.storage=16):x.isMatrix3?(w.boundary=48,w.storage=48):x.isMatrix4?(w.boundary=64,w.storage=64):x.isTexture?Jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(w.boundary=16,w.storage=x.byteLength):Jt("WebGLRenderer: Unsupported uniform value type.",x),w}function M(x){const w=x.target;w.removeEventListener("dispose",M);const S=o.indexOf(w.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function y(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:y}}const pv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hn=null;function mv(){return Hn===null&&(Hn=new Wu(pv,16,16,ji,_n),Hn.name="DFG_LUT",Hn.minFilter=sn,Hn.magFilter=sn,Hn.wrapS=ui,Hn.wrapT=ui,Hn.generateMipmaps=!1,Hn.needsUpdate=!0),Hn}class gv{constructor(t={}){const{canvas:e=Af(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=wn}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;const v=f,p=new Set([oc,rc,sc]),m=new Set([wn,$n,_r,xr,ec,nc]),M=new Uint32Array(4),y=new Int32Array(4),x=new O;let w=null,S=null;const T=[],g=[];let b=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let C=!1,P=null,L=null,N=null,U=null;this._outputColorSpace=We;let B=0,z=0,W=null,D=-1,G=null;const X=new Oe,ft=new Oe;let gt=null;const Zt=new Ft(0);let $t=0,Lt=e.width,J=e.height,F=1,Q=null,Rt=null;const pt=new Oe(0,0,Lt,J),_t=new Oe(0,0,Lt,J);let Xt=!1;const j=new fc;let at=!1,ut=!1;const lt=new ue,dt=new O,zt=new Oe,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function Kt(){return W===null?F:1}let k=n;function pe(R,H){return e.getContext(R,H)}let re,I,E,Y,Z,tt,mt,vt,et,st,St,Yt,xt,Mt,qt,Gt,te,V,yt,rt,wt,Ct,ct;try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Zl}`),e.addEventListener("webglcontextlost",Ee,!1),e.addEventListener("webglcontextrestored",ne,!1),e.addEventListener("webglcontextcreationerror",ke,!1),k===null){const H="webgl2";if(k=pe(H,R),k===null)throw pe(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Vt()}catch(R){throw e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",ne,!1),e.removeEventListener("webglcontextcreationerror",ke,!1),me("WebGLRenderer: "+R.message),R}function Vt(){re=new m_(k),re.init(),wt=new ov(k,re),I=new r_(k,re,t,wt),E=new sv(k,re),I.reversedDepthBuffer&&u&&E.buffers.depth.setReversed(!0),L=k.createFramebuffer(),N=k.createFramebuffer(),U=k.createFramebuffer(),Y=new x_(k),Z=new Wx,tt=new rv(k,re,E,Z,I,wt,Y),mt=new p_(A),vt=new M0(k),Ct=new i_(k,vt),et=new g_(k,vt,Y,Ct),st=new M_(k,et,vt,Ct,Y),V=new v_(k,I,tt),qt=new o_(Z),St=new Vx(A,mt,re,I,Ct,qt),Yt=new dv(A,Z),xt=new Yx,Mt=new Qx(re),te=new n_(A,mt,E,st,_,l),Gt=new iv(A,st,I),ct=new fv(k,Y,I,E),yt=new s_(k,re,Y),rt=new __(k,re,Y),Y.programs=St.programs,A.capabilities=I,A.extensions=re,A.properties=Z,A.renderLists=xt,A.shadowMap=Gt,A.state=E,A.info=Y}v!==wn&&(b=new S_(v,e.width,e.height,a,s,r));const Wt=new hv(A,k);this.xr=Wt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const R=re.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=re.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(R){R!==void 0&&(F=R,this.setSize(Lt,J,!1))},this.getSize=function(R){return R.set(Lt,J)},this.setSize=function(R,H,$=!0){if(Wt.isPresenting){Jt("WebGLRenderer: Can't change size while VR device is presenting.");return}Lt=R,J=H,e.width=Math.floor(R*F),e.height=Math.floor(H*F),$===!0&&(e.style.width=R+"px",e.style.height=H+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(Lt*F,J*F).floor()},this.setDrawingBufferSize=function(R,H,$){Lt=R,J=H,F=$,e.width=Math.floor(R*$),e.height=Math.floor(H*$),this.setViewport(0,0,R,H)},this.setEffects=function(R){if(v===wn){me("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let H=0;H<R.length;H++)if(R[H].isOutputPass===!0){Jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(X)},this.getViewport=function(R){return R.copy(pt)},this.setViewport=function(R,H,$,q){R.isVector4?pt.set(R.x,R.y,R.z,R.w):pt.set(R,H,$,q),E.viewport(X.copy(pt).multiplyScalar(F).round())},this.getScissor=function(R){return R.copy(_t)},this.setScissor=function(R,H,$,q){R.isVector4?_t.set(R.x,R.y,R.z,R.w):_t.set(R,H,$,q),E.scissor(ft.copy(_t).multiplyScalar(F).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(R){E.setScissorTest(Xt=R)},this.setOpaqueSort=function(R){Q=R},this.setTransparentSort=function(R){Rt=R},this.getClearColor=function(R){return R.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(R=!0,H=!0,$=!0){let q=0;if(R){let K=!1;if(W!==null){const Et=W.texture.format;K=p.has(Et)}if(K){const Et=W.texture.type,It=m.has(Et),bt=te.getClearColor(),At=te.getClearAlpha(),Ht=bt.r,ie=bt.g,oe=bt.b;It?(M[0]=Ht,M[1]=ie,M[2]=oe,M[3]=At,k.clearBufferuiv(k.COLOR,0,M)):(y[0]=Ht,y[1]=ie,y[2]=oe,y[3]=At,k.clearBufferiv(k.COLOR,0,y))}else q|=k.COLOR_BUFFER_BIT}H&&(q|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&k.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),P=R},this.dispose=function(){e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",ne,!1),e.removeEventListener("webglcontextcreationerror",ke,!1),te.dispose(),xt.dispose(),Mt.dispose(),Z.dispose(),mt.dispose(),st.dispose(),Ct.dispose(),ct.dispose(),St.dispose(),Wt.dispose(),Wt.removeEventListener("sessionstart",as),Wt.removeEventListener("sessionend",Dr),nt.stop()};function Ee(R){R.preventDefault(),Jc("WebGLRenderer: Context Lost."),C=!0}function ne(){Jc("WebGLRenderer: Context Restored."),C=!1;const R=Y.autoReset,H=Gt.enabled,$=Gt.autoUpdate,q=Gt.needsUpdate,K=Gt.type;Vt(),Y.autoReset=R,Gt.enabled=H,Gt.autoUpdate=$,Gt.needsUpdate=q,Gt.type=K}function ke(R){me("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function on(R){const H=R.target;H.removeEventListener("dispose",on),Jo(H)}function Jo(R){qs(R),Z.remove(R)}function qs(R){const H=Z.get(R).programs;H!==void 0&&(H.forEach(function($){St.releaseProgram($)}),R.isShaderMaterial&&St.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,$,q,K,Et){H===null&&(H=Nt);const It=K.isMesh&&K.matrixWorld.determinantAffine()<0,bt=ls(R,H,$,q,K);E.setMaterial(q,It);let At=$.index,Ht=1;if(q.wireframe===!0){if(At=et.getWireframeAttribute($),At===void 0)return;Ht=2}const ie=$.drawRange,oe=$.attributes.position;let Ut=ie.start*Ht,_e=(ie.start+ie.count)*Ht;Et!==null&&(Ut=Math.max(Ut,Et.start*Ht),_e=Math.min(_e,(Et.start+Et.count)*Ht)),At!==null?(Ut=Math.max(Ut,0),_e=Math.min(_e,At.count)):oe!=null&&(Ut=Math.max(Ut,0),_e=Math.min(_e,oe.count));const ae=_e-Ut;if(ae<0||ae===1/0)return;Ct.setup(K,q,bt,$,At);let Ce,Re=yt;if(At!==null&&(Ce=vt.get(At),Re=rt,Re.setIndex(Ce)),K.isMesh)q.wireframe===!0?(E.setLineWidth(q.wireframeLinewidth*Kt()),Re.setMode(k.LINES)):Re.setMode(k.TRIANGLES);else if(K.isLine){let tn=q.linewidth;tn===void 0&&(tn=1),E.setLineWidth(tn*Kt()),K.isLineSegments?Re.setMode(k.LINES):K.isLineLoop?Re.setMode(k.LINE_LOOP):Re.setMode(k.LINE_STRIP)}else K.isPoints?Re.setMode(k.POINTS):K.isSprite&&Re.setMode(k.TRIANGLES);if(K.isBatchedMesh)if(re.get("WEBGL_multi_draw"))Re.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const tn=K._multiDrawStarts,Bt=K._multiDrawCounts,an=K._multiDrawCount,xe=At?vt.get(At).bytesPerElement:1,En=Z.get(q).currentProgram.getUniforms();for(let kn=0;kn<an;kn++)En.setValue(k,"_gl_DrawID",kn),Re.render(tn[kn]/xe,Bt[kn])}else if(K.isInstancedMesh)Re.renderInstances(Ut,ae,K.count);else if($.isInstancedBufferGeometry){const tn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Bt=Math.min($.instanceCount,tn);Re.renderInstances(Ut,ae,Bt)}else Re.render(Ut,ae)};function Pr(R,H,$,q){P!==null&&R.isNodeMaterial&&P.setObject(q,R),at===!0&&qt.setState(R,$,!1),R.transparent===!0&&R.side===Ne&&R.forceSinglePass===!1?(R.side=dn,R.needsUpdate=!0,zn(R,H,q),R.side=$i,R.needsUpdate=!0,zn(R,H,q),R.side=Ne):zn(R,H,q)}this.compile=function(R,H,$=null){$===null&&($=R),P!==null&&P.renderStart(R,H,$),S=Mt.get($),S.init(H),g.push(S),$.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),R!==$&&R.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),S.setupLights(),P!==null&&P.updateLights(S.state.lightsArray),ut=this.localClippingEnabled,at=qt.init(this.clippingPlanes,ut),at===!0&&qt.setGlobalState(this.clippingPlanes,H),P!==null&&Gt.render(S.state.shadowsArray,$,H);const q=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Et=K.material;if(Et)if(Array.isArray(Et))for(let It=0;It<Et.length;It++){const bt=Et[It];Pr(bt,$,H,K),q.add(bt)}else Pr(Et,$,H,K),q.add(Et)}),S=g.pop(),P!==null&&P.renderEnd(),q},this.compileAsync=function(R,H,$=null){const q=this.compile(R,H,$);return new Promise(K=>{function Et(){if(q.forEach(function(It){const At=Z.get(It).currentProgram;(At===void 0||At.isReady())&&q.delete(It)}),q.size===0){K(R);return}setTimeout(Et,10)}re.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Ks=null;function Ze(R){Ks&&Ks(R)}function as(){nt.stop()}function Dr(){nt.start()}const nt=new rd;nt.setAnimationLoop(Ze),typeof self<"u"&&nt.setContext(self),this.setAnimationLoop=function(R){Ks=R,Wt.setAnimationLoop(R),R===null?nt.stop():nt.start()},Wt.addEventListener("sessionstart",as),Wt.addEventListener("sessionend",Dr),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){me("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;P!==null&&P.renderStart(R,H);const $=Wt.enabled===!0&&Wt.isPresenting===!0,q=b!==null&&(W===null||$)&&b.begin(A,W);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Wt.enabled===!0&&Wt.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Wt.cameraAutoUpdate===!0&&Wt.updateCamera(H),H=Wt.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,H,W),S=Mt.get(R,g.length),S.init(H),S.state.textureUnits=tt.getTextureUnits(),g.push(S),lt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),j.setFromProjectionMatrix(lt,Yn,H.reversedDepth),ut=this.localClippingEnabled,at=qt.init(this.clippingPlanes,ut),w=xt.get(R,T.length),w.init(),T.push(w),Wt.enabled===!0&&Wt.isPresenting===!0){const It=A.xr.getDepthSensingMesh();It!==null&&Dt(It,H,-1/0,A.sortObjects)}Dt(R,H,0,A.sortObjects),w.finish(),P!==null&&P.updateLights(S.state.lightsArray),A.sortObjects===!0&&w.sort(Q,Rt),kt=Wt.enabled===!1||Wt.isPresenting===!1||Wt.hasDepthSensing()===!1,kt&&te.addToRenderList(w,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),at===!0&&qt.beginShadows();const K=S.state.shadowsArray;if(Gt.render(K,R,H),at===!0&&qt.endShadows(),(q&&b.hasRenderPass())===!1){const It=w.opaque,bt=w.transmissive;if(S.setupLights(),H.isArrayCamera){const At=H.cameras;if(bt.length>0)for(let Ht=0,ie=At.length;Ht<ie;Ht++){const oe=At[Ht];he(It,bt,R,oe)}kt&&te.render(R);for(let Ht=0,ie=At.length;Ht<ie;Ht++){const oe=At[Ht];jt(w,R,oe,oe.viewport)}}else bt.length>0&&he(It,bt,R,H),kt&&te.render(R),jt(w,R,H)}W!==null&&z===0&&(tt.updateMultisampleRenderTarget(W),tt.updateRenderTargetMipmap(W)),q&&b.end(A),R.isScene===!0&&R.onAfterRender(A,R,H),Ct.resetDefaultState(),D=-1,G=null,g.pop(),g.length>0?(S=g[g.length-1],tt.setTextureUnits(S.state.textureUnits),at===!0&&qt.setGlobalState(A.clippingPlanes,S.state.camera)):S=null,T.pop(),T.length>0?w=T[T.length-1]:w=null,P!==null&&P.renderEnd()};function Dt(R,H,$,q){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)$=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLightProbeGrid)S.pushLightProbeGrid(R);else if(R.isLight)S.pushLight(R),R.castShadow&&S.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(j)){q&&zt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(lt);const It=st.update(R),bt=R.material;bt.visible&&w.push(R,It,bt,$,zt.z,null,H)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(j))){const It=st.update(R),bt=R.material;if(q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),zt.copy(R.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),zt.copy(It.boundingSphere.center)),zt.applyMatrix4(R.matrixWorld).applyMatrix4(lt)),Array.isArray(bt)){const At=It.groups;for(let Ht=0,ie=At.length;Ht<ie;Ht++){const oe=At[Ht],Ut=bt[oe.materialIndex];Ut&&Ut.visible&&w.push(R,It,Ut,$,zt.z,oe,H)}}else bt.visible&&w.push(R,It,bt,$,zt.z,null,H)}}const Et=R.children;for(let It=0,bt=Et.length;It<bt;It++)Dt(Et[It],H,$,q)}function jt(R,H,$,q){const{opaque:K,transmissive:Et,transparent:It}=R;S.setupLightsView($),at===!0&&qt.setGlobalState(A.clippingPlanes,$),q&&E.viewport(X.copy(q)),K.length>0&&Ge(K,H,$),Et.length>0&&Ge(Et,H,$),It.length>0&&Ge(It,H,$),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function he(R,H,$,q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[q.id]===void 0){const Ut=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[q.id]=new fn(1,1,{generateMipmaps:!0,type:Ut?_n:wn,minFilter:Yi,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:de.workingColorSpace})}const Et=S.state.transmissionRenderTarget[q.id],It=q.viewport||X;Et.setSize(It.z*A.transmissionResolutionScale,It.w*A.transmissionResolutionScale);const bt=A.getRenderTarget(),At=A.getActiveCubeFace(),Ht=A.getActiveMipmapLevel();A.setRenderTarget(Et),A.getClearColor(Zt),$t=A.getClearAlpha(),$t<1&&A.setClearColor(16777215,.5),A.clear(),kt&&te.render($);const ie=A.toneMapping;A.toneMapping=Kn;const oe=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),S.setupLightsView(q),at===!0&&qt.setGlobalState(A.clippingPlanes,q),Ge(R,$,q),tt.updateMultisampleRenderTarget(Et),tt.updateRenderTargetMipmap(Et),re.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let _e=0,ae=H.length;_e<ae;_e++){const Ce=H[_e],{object:Re,geometry:tn,material:Bt,group:an}=Ce;if(Bt.side===Ne&&Re.layers.test(q.layers)){const xe=Bt.side;Bt.side=dn,Bt.needsUpdate=!0,vn(Re,$,q,tn,Bt,an),Bt.side=xe,Bt.needsUpdate=!0,Ut=!0}}Ut===!0&&(tt.updateMultisampleRenderTarget(Et),tt.updateRenderTargetMipmap(Et))}A.setRenderTarget(bt,At,Ht),A.setClearColor(Zt,$t),oe!==void 0&&(q.viewport=oe),A.toneMapping=ie}function Ge(R,H,$){const q=H.isScene===!0?H.overrideMaterial:null;for(let K=0,Et=R.length;K<Et;K++){const It=R[K],{object:bt,geometry:At,group:Ht}=It;let ie=It.material;ie.allowOverride===!0&&q!==null&&(ie=q),bt.layers.test($.layers)&&vn(bt,H,$,At,ie,Ht)}}function vn(R,H,$,q,K,Et){P!==null&&K.isNodeMaterial&&P.setObject(R,K),R.onBeforeRender(A,H,$,q,K,Et),R.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(A,H,$,q,R,Et),K.transparent===!0&&K.side===Ne&&K.forceSinglePass===!1?(K.side=dn,K.needsUpdate=!0,A.renderBufferDirect($,H,q,K,R,Et),K.side=$i,K.needsUpdate=!0,A.renderBufferDirect($,H,q,K,R,Et),K.side=Ne):A.renderBufferDirect($,H,q,K,R,Et),R.onAfterRender(A,H,$,q,K,Et)}function zn(R,H,$){H.isScene!==!0&&(H=Nt);const q=Z.get(R),K=S.state.lights,Et=S.state.shadowsArray,It=K.state.version,bt=St.getParameters(R,K.state,Et,H,$,S.state.lightProbeGridArray),At=St.getProgramCacheKey(bt);let Ht=q.programs;q.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?H.environment:null,q.fog=H.fog;const ie=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;q.envMap=mt.get(R.envMap||q.environment,ie),q.envMapRotation=q.environment!==null&&R.envMap===null?H.environmentRotation:R.envMapRotation,Ht===void 0&&(R.addEventListener("dispose",on),Ht=new Map,q.programs=Ht);let oe=Ht.get(At);if(oe!==void 0){if(q.currentProgram===oe&&q.lightsStateVersion===It)return Ii(R,bt),oe}else bt.uniforms=St.getUniforms(R),P!==null&&R.isNodeMaterial&&P.build(R,$,bt),R.onBeforeCompile(bt,A),oe=St.acquireProgram(bt,At),Ht.set(At,oe),q.uniforms=bt.uniforms;const Ut=q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ut.clippingPlanes=qt.uniform),Ii(R,bt),q.needsLights=cs(R),q.lightsStateVersion=It,q.needsLights&&(Ut.ambientLightColor.value=K.state.ambient,Ut.lightProbe.value=K.state.probe,Ut.sunLights.value=K.state.sun,Ut.sunLightShadows.value=K.state.sunShadow,Ut.directionalLights.value=K.state.directional,Ut.directionalLightShadows.value=K.state.directionalShadow,Ut.spotLights.value=K.state.spot,Ut.spotLightShadows.value=K.state.spotShadow,Ut.rectAreaLights.value=K.state.rectArea,Ut.ltc_1.value=K.state.rectAreaLTC1,Ut.ltc_2.value=K.state.rectAreaLTC2,Ut.pointLights.value=K.state.point,Ut.pointLightShadows.value=K.state.pointShadow,Ut.hemisphereLights.value=K.state.hemi,Ut.sunShadowMatrix.value=K.state.sunShadowMatrix,Ut.sunShadowCascade.value=K.state.sunShadowCascade,Ut.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ut.spotLightMatrix.value=K.state.spotLightMatrix,Ut.spotLightMap.value=K.state.spotLightMap,Ut.pointShadowMatrix.value=K.state.pointShadowMatrix),q.lightProbeGrid=S.state.lightProbeGridArray.length>0,q.currentProgram=oe,q.uniformsList=null,oe}function ei(R){if(R.uniformsList===null){const H=R.currentProgram.getUniforms();R.uniformsList=Mo.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function Ii(R,H){const $=Z.get(R);$.outputColorSpace=H.outputColorSpace,$.batching=H.batching,$.batchingColor=H.batchingColor,$.instancing=H.instancing,$.instancingColor=H.instancingColor,$.instancingMorph=H.instancingMorph,$.skinning=H.skinning,$.morphTargets=H.morphTargets,$.morphNormals=H.morphNormals,$.morphColors=H.morphColors,$.morphTargetsCount=H.morphTargetsCount,$.numClippingPlanes=H.numClippingPlanes,$.numIntersection=H.numClipIntersection,$.vertexAlphas=H.vertexAlphas,$.vertexTangents=H.vertexTangents,$.toneMapping=H.toneMapping}function Lr(R,H){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;x.setFromMatrixPosition(H.matrixWorld);for(let $=0,q=R.length;$<q;$++){const K=R[$];if(K.texture!==null&&K.boundingBox.containsPoint(x))return K}return null}function ls(R,H,$,q,K){H.isScene!==!0&&(H=Nt),tt.resetTextureUnits();const Et=H.fog,It=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?H.environment:null,bt=W===null?A.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:de.workingColorSpace,At=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Ht=mt.get(q.envMap||It,At),ie=q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,oe=!!$.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ut=!!$.morphAttributes.position,_e=!!$.morphAttributes.normal,ae=!!$.morphAttributes.color;let Ce=Kn;q.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Ce=A.toneMapping);const Re=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,tn=Re!==void 0?Re.length:0,Bt=Z.get(q),an=S.state.lights;if(at===!0&&(ut===!0||R!==G)){const Pe=R===G&&q.id===D;qt.setState(q,R,Pe)}let xe=!1;q.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==an.state.version||Bt.outputColorSpace!==bt||K.isBatchedMesh&&Bt.batching===!1||!K.isBatchedMesh&&Bt.batching===!0||K.isBatchedMesh&&Bt.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Bt.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Bt.instancing===!1||!K.isInstancedMesh&&Bt.instancing===!0||K.isSkinnedMesh&&Bt.skinning===!1||!K.isSkinnedMesh&&Bt.skinning===!0||K.isInstancedMesh&&Bt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Bt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Bt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Bt.instancingMorph===!1&&K.morphTexture!==null||Bt.envMap!==Ht||q.fog===!0&&Bt.fog!==Et||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==qt.numPlanes||Bt.numIntersection!==qt.numIntersection)||Bt.vertexAlphas!==ie||Bt.vertexTangents!==oe||Bt.morphTargets!==Ut||Bt.morphNormals!==_e||Bt.morphColors!==ae||Bt.toneMapping!==Ce||Bt.morphTargetsCount!==tn||!!Bt.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(xe=!0):(xe=!0,Bt.__version=q.version);let En=Bt.currentProgram;xe===!0&&(En=zn(q,H,K),P&&q.isNodeMaterial&&P.onUpdateProgram(q,En,Bt));let kn=!1,xi=!1,us=!1;const Te=En.getUniforms(),He=Bt.uniforms;if(E.useProgram(En.program)&&(kn=!0,xi=!0,us=!0),q.id!==D&&(D=q.id,xi=!0),Bt.needsLights){const Pe=Lr(S.state.lightProbeGridArray,K);Bt.lightProbeGrid!==Pe&&(Bt.lightProbeGrid=Pe,xi=!0)}if(kn||G!==R){E.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Te.setValue(k,"projectionMatrix",R.projectionMatrix),Te.setValue(k,"viewMatrix",R.matrixWorldInverse);const Mi=Te.map.cameraPosition;Mi!==void 0&&Mi.setValue(k,dt.setFromMatrixPosition(R.matrixWorld)),I.logarithmicDepthBuffer&&Te.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Te.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),G!==R&&(G=R,xi=!0,us=!0)}if(Bt.needsLights&&(an.state.sunShadowMap.length>0&&Te.setValue(k,"sunShadowMap",an.state.sunShadowMap,tt),an.state.directionalShadowMap.length>0&&Te.setValue(k,"directionalShadowMap",an.state.directionalShadowMap,tt),an.state.spotShadowMap.length>0&&Te.setValue(k,"spotShadowMap",an.state.spotShadowMap,tt),an.state.pointShadowMap.length>0&&Te.setValue(k,"pointShadowMap",an.state.pointShadowMap,tt)),K.isSkinnedMesh){Te.setOptional(k,K,"bindMatrix"),Te.setOptional(k,K,"bindMatrixInverse");const Pe=K.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),Te.setValue(k,"boneTexture",Pe.boneTexture,tt))}K.isBatchedMesh&&(Te.setOptional(k,K,"batchingTexture"),Te.setValue(k,"batchingTexture",K._matricesTexture,tt),Te.setOptional(k,K,"batchingIdTexture"),Te.setValue(k,"batchingIdTexture",K._indirectTexture,tt),Te.setOptional(k,K,"batchingColorTexture"),K._colorsTexture!==null&&Te.setValue(k,"batchingColorTexture",K._colorsTexture,tt));const vi=$.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&V.update(K,$,En),(xi||Bt.receiveShadow!==K.receiveShadow)&&(Bt.receiveShadow=K.receiveShadow,Te.setValue(k,"receiveShadow",K.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&H.environment!==null&&(He.envMapIntensity.value=H.environmentIntensity),He.dfgLUT!==void 0&&(He.dfgLUT.value=mv()),xi){if(Te.setValue(k,"toneMappingExposure",A.toneMappingExposure),Bt.needsLights&&$o(He,us),Et&&q.fog===!0&&Yt.refreshFogUniforms(He,Et),Yt.refreshMaterialUniforms(He,q,F,J,S.state.transmissionRenderTarget[R.id]),Bt.needsLights&&Bt.lightProbeGrid){const Pe=Bt.lightProbeGrid;He.probesSH.value=Pe.texture,He.probesMin.value.copy(Pe.boundingBox.min),He.probesMax.value.copy(Pe.boundingBox.max),He.probesResolution.value.copy(Pe.resolution)}Mo.upload(k,ei(Bt),He,tt)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Mo.upload(k,ei(Bt),He,tt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Te.setValue(k,"center",K.center),Te.setValue(k,"modelViewMatrix",K.modelViewMatrix),Te.setValue(k,"normalMatrix",K.normalMatrix),Te.setValue(k,"modelMatrix",K.matrixWorld),q.uniformsGroups!==void 0){const Pe=q.uniformsGroups;for(let Mi=0,ds=Pe.length;Mi<ds;Mi++){const Wc=Pe[Mi];ct.update(Wc,En),ct.bind(Wc,En)}}return En}function $o(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.sunLights.needsUpdate=H,R.sunLightShadows.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function cs(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(R,H,$){const q=Z.get(R);q.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Z.get(R.texture).__webglTexture=H,Z.get(R.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:$,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,H){const $=Z.get(R);$.__webglFramebuffer=H,$.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(R,H=0,$=0){W=R,B=H,z=$;let q=null,K=!1,Et=!1;if(R){const bt=Z.get(R);if(bt.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(k.FRAMEBUFFER,bt.__webglFramebuffer),X.copy(R.viewport),ft.copy(R.scissor),gt=R.scissorTest,E.viewport(X),E.scissor(ft),E.setScissorTest(gt),D=-1;return}else if(bt.__webglFramebuffer===void 0)tt.setupRenderTarget(R);else if(bt.__hasExternalTextures)tt.rebindTextures(R,Z.get(R.texture).__webglTexture,Z.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ie=R.depthTexture;if(bt.__boundDepthTexture!==ie){if(ie!==null&&Z.has(ie)&&(R.width!==ie.image.width||R.height!==ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(R)}}const At=R.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(Et=!0);const Ht=Z.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ht[H])?q=Ht[H][$]:q=Ht[H],K=!0):R.samples>0&&tt.useMultisampledRTT(R)===!1?q=Z.get(R).__webglMultisampledFramebuffer:Array.isArray(Ht)?q=Ht[$]:q=Ht,X.copy(R.viewport),ft.copy(R.scissor),gt=R.scissorTest}else X.copy(pt).multiplyScalar(F).floor(),ft.copy(_t).multiplyScalar(F).floor(),gt=Xt;if($!==0&&(q=L),E.bindFramebuffer(k.FRAMEBUFFER,q)&&E.drawBuffers(R,q),E.viewport(X),E.scissor(ft),E.setScissorTest(gt),K){const bt=Z.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+H,bt.__webglTexture,$)}else if(Et){const bt=H;for(let At=0;At<R.textures.length;At++){const Ht=Z.get(R.textures[At]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+At,Ht.__webglTexture,$,bt)}}else if(R!==null&&$!==0){const bt=Z.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,bt.__webglTexture,$)}D=-1};function hs(R){const H=Z.get(R);return(H.__readFormat!==R.format||H.__readType!==R.type)&&(H.__readFormat=R.format,H.__readType=R.type,H.__formatReadable=I.textureFormatReadable(R.format),H.__typeReadable=I.textureTypeReadable(R.type)),H}this.readRenderTargetPixels=function(R,H,$,q,K,Et,It,bt=0){if(!(R&&R.isWebGLRenderTarget)){me("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=Z.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&It!==void 0&&(At=At[It]),At){E.bindFramebuffer(k.FRAMEBUFFER,At);try{const Ht=R.textures[bt],ie=Ht.format,oe=Ht.type;R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+bt);const Ut=hs(Ht);if(Ut.__formatReadable===!1){me("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ut.__typeReadable===!1){me("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-q&&$>=0&&$<=R.height-K&&k.readPixels(H,$,q,K,wt.convert(ie),wt.convert(oe),Et)}finally{const Ht=W!==null?Z.get(W).__webglFramebuffer:null;E.bindFramebuffer(k.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(R,H,$,q,K,Et,It,bt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=Z.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&It!==void 0&&(At=At[It]),At)if(H>=0&&H<=R.width-q&&$>=0&&$<=R.height-K){E.bindFramebuffer(k.FRAMEBUFFER,At);const Ht=R.textures[bt],ie=Ht.format,oe=Ht.type;R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+bt);const Ut=hs(Ht);if(Ut.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ut.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _e=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,_e),k.bufferData(k.PIXEL_PACK_BUFFER,Et.byteLength,k.STREAM_READ),k.readPixels(H,$,q,K,wt.convert(ie),wt.convert(oe),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);const ae=W!==null?Z.get(W).__webglFramebuffer:null;E.bindFramebuffer(k.FRAMEBUFFER,ae);const Ce=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Rf(k,Ce,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,_e),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Et),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(_e),k.deleteSync(Ce),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,H=null,$=0){const q=Math.pow(2,-$),K=Math.floor(R.image.width*q),Et=Math.floor(R.image.height*q),It=H!==null?H.x:0,bt=H!==null?H.y:0;tt.setTexture2D(R,0),k.copyTexSubImage2D(k.TEXTURE_2D,$,0,0,It,bt,K,Et),E.unbindTexture()},this.copyTextureToTexture=function(R,H,$=null,q=null,K=0,Et=0){let It,bt,At,Ht,ie,oe,Ut,_e,ae;const Ce=R.isCompressedTexture?R.mipmaps[Et]:R.image;if($!==null)It=$.max.x-$.min.x,bt=$.max.y-$.min.y,At=$.isBox3?$.max.z-$.min.z:1,Ht=$.min.x,ie=$.min.y,oe=$.isBox3?$.min.z:0;else{const He=Math.pow(2,-K);It=Math.floor(Ce.width*He),bt=Math.floor(Ce.height*He),R.isDataArrayTexture?At=Ce.depth:R.isData3DTexture?At=Math.floor(Ce.depth*He):At=1,Ht=0,ie=0,oe=0}q!==null?(Ut=q.x,_e=q.y,ae=q.z):(Ut=0,_e=0,ae=0);const Re=wt.convert(H.format),tn=wt.convert(H.type);let Bt;H.isData3DTexture?(tt.setTexture3D(H,0),Bt=k.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(tt.setTexture2DArray(H,0),Bt=k.TEXTURE_2D_ARRAY):(tt.setTexture2D(H,0),Bt=k.TEXTURE_2D),E.activeTexture(k.TEXTURE0),E.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,H.flipY),E.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),E.pixelStorei(k.UNPACK_ALIGNMENT,H.unpackAlignment);const an=E.getParameter(k.UNPACK_ROW_LENGTH),xe=E.getParameter(k.UNPACK_IMAGE_HEIGHT),En=E.getParameter(k.UNPACK_SKIP_PIXELS),kn=E.getParameter(k.UNPACK_SKIP_ROWS),xi=E.getParameter(k.UNPACK_SKIP_IMAGES);E.pixelStorei(k.UNPACK_ROW_LENGTH,Ce.width),E.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ce.height),E.pixelStorei(k.UNPACK_SKIP_PIXELS,Ht),E.pixelStorei(k.UNPACK_SKIP_ROWS,ie),E.pixelStorei(k.UNPACK_SKIP_IMAGES,oe);const us=R.isDataArrayTexture||R.isData3DTexture,Te=H.isDataArrayTexture||H.isData3DTexture;if(R.isDepthTexture){const He=Z.get(R),vi=Z.get(H),Pe=Z.get(He.__renderTarget),Mi=Z.get(vi.__renderTarget);E.bindFramebuffer(k.READ_FRAMEBUFFER,Pe.__webglFramebuffer),E.bindFramebuffer(k.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let ds=0;ds<At;ds++)us&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Z.get(R).__webglTexture,K,oe+ds),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Z.get(H).__webglTexture,Et,ae+ds)),k.blitFramebuffer(Ht,ie,It,bt,Ut,_e,It,bt,k.DEPTH_BUFFER_BIT,k.NEAREST);E.bindFramebuffer(k.READ_FRAMEBUFFER,null),E.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||Z.has(R)){const He=Z.get(R),vi=Z.get(H);E.bindFramebuffer(k.READ_FRAMEBUFFER,N),E.bindFramebuffer(k.DRAW_FRAMEBUFFER,U);for(let Pe=0;Pe<At;Pe++)us?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,He.__webglTexture,K,oe+Pe):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,He.__webglTexture,K),Te?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,vi.__webglTexture,Et,ae+Pe):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,vi.__webglTexture,Et),K!==0?k.blitFramebuffer(Ht,ie,It,bt,Ut,_e,It,bt,k.COLOR_BUFFER_BIT,k.NEAREST):Te?k.copyTexSubImage3D(Bt,Et,Ut,_e,ae+Pe,Ht,ie,It,bt):k.copyTexSubImage2D(Bt,Et,Ut,_e,Ht,ie,It,bt);E.bindFramebuffer(k.READ_FRAMEBUFFER,null),E.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Te?R.isDataTexture||R.isData3DTexture?k.texSubImage3D(Bt,Et,Ut,_e,ae,It,bt,At,Re,tn,Ce.data):H.isCompressedArrayTexture?k.compressedTexSubImage3D(Bt,Et,Ut,_e,ae,It,bt,At,Re,Ce.data):k.texSubImage3D(Bt,Et,Ut,_e,ae,It,bt,At,Re,tn,Ce):R.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Et,Ut,_e,It,bt,Re,tn,Ce.data):R.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Et,Ut,_e,Ce.width,Ce.height,Re,Ce.data):k.texSubImage2D(k.TEXTURE_2D,Et,Ut,_e,It,bt,Re,tn,Ce);E.pixelStorei(k.UNPACK_ROW_LENGTH,an),E.pixelStorei(k.UNPACK_IMAGE_HEIGHT,xe),E.pixelStorei(k.UNPACK_SKIP_PIXELS,En),E.pixelStorei(k.UNPACK_SKIP_ROWS,kn),E.pixelStorei(k.UNPACK_SKIP_IMAGES,xi),Et===0&&H.generateMipmaps&&k.generateMipmap(Bt),E.unbindTexture()},this.initRenderTarget=function(R){Z.get(R).__webglFramebuffer===void 0&&tt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?tt.setTextureCube(R,0):R.isData3DTexture?tt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?tt.setTexture2DArray(R,0):tt.setTexture2D(R,0),E.unbindTexture()},this.resetState=function(){B=0,z=0,W=null,E.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}}function Sn(i,t,e=1,n=1){const s=document.createElement("canvas");s.width=s.height=i;const r=s.getContext("2d");t(r,i);const o=new Cn(s);return o.wrapS=o.wrapT=Os,o.repeat.set(e,n),o.colorSpace=We,o.anisotropy=4,o}function _i(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function La(i){return(t,e)=>{const n=_i(i?7:21),s=i?"#3d2a1c":"#8a6844",r=i?"#2a1d12":"#6e5233",o=i?"#54402c":"#a37f52";t.fillStyle=s,t.fillRect(0,0,e,e);for(let a=0;a<130;a++){const l=n()*e;t.strokeStyle=n()<.3?o:r,t.globalAlpha=.14+n()*.24,t.lineWidth=.6+n()*2.2,t.beginPath(),t.moveTo(0,l);for(let c=0;c<=e;c+=16)t.lineTo(c,l+Math.sin(c*.05+a)*2.5);t.stroke()}for(let a=0;a<420;a++)t.fillStyle=r,t.globalAlpha=.1+n()*.12,t.fillRect(n()*e,n()*e,1+n()*1.5,1);t.globalAlpha=.5;for(let a=0;a<7;a++){const l=n()*e,c=n()*e;t.strokeStyle=r,t.lineWidth=1.2;for(let h=2;h<9;h+=2)t.beginPath(),t.ellipse(l,c,h*1.8,h,.3,0,Math.PI*2),t.stroke()}t.globalAlpha=1}}function _v(i,t){const e=_i(99);i.fillStyle="#efe7d6",i.fillRect(0,0,t,t);for(let n=0;n<22;n++){const s=e()*t,r=e()*t,o=t*(.08+e()*.16),a=e()<.5?"210,203,188":"228,222,206",l=i.createRadialGradient(s,r,0,s,r,o);l.addColorStop(0,"rgba("+a+",0.10)"),l.addColorStop(1,"rgba("+a+",0)"),i.fillStyle=l,i.globalAlpha=1,i.beginPath(),i.arc(s,r,o,0,7),i.fill()}for(let n=0;n<2600;n++){const s=225+Math.floor(e()*28);i.fillStyle=`rgb(${s},${s-6},${s-20})`,i.globalAlpha=.35,i.fillRect(e()*t,e()*t,1.4,1.4)}i.globalAlpha=.08,i.fillStyle="#b09a78";for(let n=0;n<8;n++)i.beginPath(),i.arc(e()*t,e()*t,12+e()*30,0,7),i.fill();i.globalAlpha=1}function xv(i,t){const e=_i(5);i.fillStyle="#a8a06a",i.fillRect(0,0,t,t);for(let n=0;n<t;n+=3)i.fillStyle=n/3%2?"#9d955f":"#b3ab74",i.fillRect(0,n,t,2);for(let n=0;n<500;n++)i.fillStyle=e()<.5?"#8a824f":"#c0b87e",i.globalAlpha=.4,i.fillRect(e()*t,e()*t,2,1);i.globalAlpha=1}function vv(i,t){const e=_i(13);i.fillStyle="#f6efdd",i.fillRect(0,0,t,t);for(let n=0;n<900;n++)i.fillStyle=e()<.5?"#efe6d0":"#fbf5e6",i.globalAlpha=.5,i.fillRect(e()*t,e()*t,2,1);i.globalAlpha=1}function Mv(i,t){const e=_i(31);i.fillStyle="#cfc6b4",i.fillRect(0,0,t,t);for(let n=0;n<1500;n++){const s=165+Math.floor(e()*70);i.fillStyle=`rgb(${s},${s-4},${s-14})`,i.beginPath(),i.arc(e()*t,e()*t,.8+e()*1.8,0,7),i.fill()}}function yv(i,t){const e=_i(77);i.fillStyle="#7d8f57",i.fillRect(0,0,t,t);for(let n=0;n<46;n++){const s=e()*t,r=e()*t,o=4+e()*16,a=e(),l=a<.4?"74,102,46":a<.75?"96,128,58":"112,140,72",c=i.createRadialGradient(s,r,0,s,r,o);c.addColorStop(0,"rgba("+l+",0.55)"),c.addColorStop(1,"rgba("+l+",0)"),i.fillStyle=c,i.globalAlpha=1,i.beginPath(),i.arc(s,r,o,0,7),i.fill()}for(let n=0;n<2200;n++)i.fillStyle=e()<.5?"#71834e":"#8a9c60",i.globalAlpha=.6,i.fillRect(e()*t,e()*t,1.5,3);i.globalAlpha=1}function Sv(i,t){const e=_i(55);i.fillStyle="#9a968c",i.fillRect(0,0,t,t);for(let n=0;n<30;n++){const s=e()*t,r=e()*t,o=6+e()*30,a=118+Math.floor(e()*52)-26,l=i.createRadialGradient(s,r,0,s,r,o);l.addColorStop(0,"rgba("+a+","+a+","+(a+4)+",0.22)"),l.addColorStop(1,"rgba("+a+","+a+","+(a+4)+",0)"),i.fillStyle=l,i.globalAlpha=1,i.beginPath(),i.arc(s,r,o,0,7),i.fill()}for(let n=0;n<1200;n++){const s=120+Math.floor(e()*60);i.fillStyle=`rgb(${s},${s},${s-6})`,i.globalAlpha=.5,i.fillRect(e()*t,e()*t,2,2)}i.globalAlpha=.5,i.strokeStyle="rgba(38,38,42,1)",i.lineCap="round";for(let n=0;n<3;n++){let s=e()*t,r=e()*t;i.lineWidth=1.5+e()*1.5,i.beginPath(),i.moveTo(s,r);for(let o=0;o<7;o++)s+=(e()-.35)*26,r+=(e()-.35)*26,i.lineTo(s,r);i.stroke()}i.globalAlpha=.25,i.strokeStyle="#6f6b62";for(let n=0;n<6;n++)i.beginPath(),i.moveTo(e()*t,e()*t),i.lineTo(e()*t,e()*t),i.stroke();i.globalAlpha=1}function wv(i,t){const e=_i(2654435769);i.fillStyle="#808080",i.fillRect(0,0,t,t);for(let n=0;n<900;n++){const s=110+Math.floor(e()*60);i.fillStyle="rgb("+s+","+s+","+s+")",i.fillRect(Math.floor(e()*t),Math.floor(e()*t),1+Math.floor(e()*3),1+Math.floor(e()*3))}}function bv(i,t){const e=_i(5304813);i.fillStyle="#5a4632",i.fillRect(0,0,t,t);for(let n=0;n<40;n++){const s=e()*t,r=e()*t,o=4+e()*16,a=e()<.5?"66,50,34":"96,78,56",l=i.createRadialGradient(s,r,0,s,r,o);l.addColorStop(0,"rgba("+a+",0.5)"),l.addColorStop(1,"rgba("+a+",0)"),i.fillStyle=l,i.globalAlpha=1,i.beginPath(),i.arc(s,r,o,0,7),i.fill()}for(let n=0;n<300;n++)i.fillStyle=e()<.5?"rgba(40,30,20,0.5)":"rgba(140,115,85,0.5)",i.globalAlpha=1,i.fillRect(Math.floor(e()*t),Math.floor(e()*t),2,2);i.globalAlpha=1}function Ev(i,t){i.fillStyle="#2e3d5c",i.fillRect(0,0,t,t),i.fillStyle="#efe7d2",i.fillRect(t*.18,0,t*.1,t),i.fillRect(t*.72,0,t*.1,t),i.beginPath(),i.arc(t/2,t*.34,t*.13,0,7),i.fill(),i.fillStyle="#2e3d5c",i.font=`bold ${Math.floor(t*.16)}px serif`,i.textAlign="center",i.fillText("TEA",t/2,t*.72)}function Tv(i,t){const e=i.createLinearGradient(0,0,0,t);e.addColorStop(0,"#f3ecdb"),e.addColorStop(1,"#e4d8bd"),i.fillStyle=e,i.fillRect(0,0,t,t),i.strokeStyle="#4a4a48",i.lineCap="round";const n=(s,r,o,a)=>{i.lineWidth=o,i.beginPath(),i.moveTo(a,s),i.quadraticCurveTo(a+t*.2,s-r,a+t*.38,s-r*.25),i.quadraticCurveTo(a+t*.5,s-r*.7,a+t*.62,s-r*.1),i.stroke()};i.globalAlpha=.75,n(t*.62,t*.3,7,t*.05),i.globalAlpha=.5,n(t*.7,t*.2,5,t*.35),i.globalAlpha=.9,i.fillStyle="#b0533c",i.beginPath(),i.arc(t*.68,t*.26,t*.05,0,7),i.fill(),i.globalAlpha=1,i.fillStyle="#a33327",i.fillRect(t*.12,t*.78,t*.1,t*.1),i.fillStyle="#f3ecdb",i.font=`${Math.floor(t*.07)}px serif`,i.textAlign="center",i.fillText("wa",t*.17,t*.855)}function Av(i,t){i.fillStyle="#e9dfc6",i.fillRect(0,0,t,t),i.strokeStyle="#c9b98f",i.lineWidth=2,i.globalAlpha=.7;for(let e=-t;e<t*2;e+=26)i.beginPath(),i.arc(e,t*.9,22,Math.PI,0),i.stroke(),i.beginPath(),i.arc(e,t*.45,22,Math.PI,0),i.stroke();i.globalAlpha=1}function fd(){const i=Sn(256,La(!1),1,1),t=Sn(256,La(!0),1,1),e={woodDark:new ht({map:t,color:12164995,roughness:.75,envMapIntensity:.25}),wood:new ht({map:i,color:13609080,roughness:.8,envMapIntensity:.25}),woodFloor:new ht({map:Sn(256,La(!1),4,1),color:14201219,roughness:.7,envMapIntensity:.3}),plaster:new ht({map:Sn(256,_v,1,1),color:16777215,roughness:.95,envMapIntensity:.15}),paper:new ht({map:Sn(128,vv,1,1),color:16774106,emissive:16768926,emissiveIntensity:.38,transparent:!0,opacity:.92,roughness:.9,side:Ne}),tatami:new ht({map:Sn(256,xv,1,1),color:16777215,roughness:.95,envMapIntensity:.1}),tatamiEdge:new ht({color:3099194,roughness:.9}),roofTile:new ht({color:4869461,roughness:.55,metalness:.08,envMapIntensity:.5}),roofTileAlt:new ht({color:3948358,roughness:.6,metalness:.08,envMapIntensity:.5}),ridge:new ht({color:3487549,roughness:.5,metalness:.1,envMapIntensity:.6}),roofUnder:new ht({map:t,color:9072466,roughness:.9}),stone:new ht({map:Sn(256,Sv,1,1),color:16777215,roughness:.95,envMapIntensity:.15}),gravel:new ht({map:Sn(256,Mv,6,6),color:16777215,roughness:1}),grass:new ht({map:Sn(256,yv,10,10),color:16777215,roughness:1}),moss:new ht({color:6126906,roughness:1,envMapIntensity:.1}),mossDark:new ht({color:4613420,roughness:1,envMapIntensity:.1}),bamboo:new ht({color:8364110,roughness:.6,envMapIntensity:.3}),bambooLeaf:new ht({color:5143092,roughness:.8,side:Ne}),trunk:new ht({map:t,color:10123868,roughness:.9}),mapleLeaf:new ht({color:16777215,roughness:.75,side:Ne}),fusuma:new ht({map:Sn(256,Av,1,1),color:16777215,roughness:.9}),noren:new ht({map:Sn(256,Ev,1,1),color:16777215,roughness:.9,side:Ne}),scroll:new ht({map:Sn(256,Tv,1,1),color:16777215,roughness:.9}),lanternGlow:new ht({color:16767392,emissive:16751686,emissiveIntensity:2.2}),paperLantern:new ht({color:16770232,emissive:16757867,emissiveIntensity:1.4,roughness:.8}),bronze:new ht({color:4997688,roughness:.45,metalness:.7,envMapIntensity:.8})};e.woodNew=e.woodNew||new ht({color:9069112,roughness:.7}),e.woodAged=e.woodAged||new ht({color:7234136,roughness:.9}),e.glassDark=e.glassDark||new ht({color:1053980,roughness:.08,metalness:.9}),e.bronze=e.bronze||new ht({color:7035443,roughness:.35,metalness:.9}),e.iron=e.iron||new ht({color:2829102,roughness:.5,metalness:.8}),e.soil=e.soil||new ht({color:4865843,roughness:1}),e.thatch=e.thatch||new ht({color:10127967,roughness:1}),e._wet=e._wet||[],e.registerWet=r=>(r&&!e._wet.includes(r)&&e._wet.push(r),r),e.plasterTinted=r=>new ht({color:r,roughness:.95}),[e.wood,e.woodDark,e.woodNew,e.woodAged,e.plaster,e.tile,e.stone,e.soil].forEach(r=>r&&e.registerWet(r)),e.tile=e.tile||e.roofTile,e.shoji=e.shoji||e.paper,e.registerWet(e.tile);const n=document.createElement("canvas");n.width=n.height=128,wv(n.getContext("2d"),128);const s=new Cn(n);s.wrapS=s.wrapT=Os,s.repeat.set(3,3),s.colorSpace=hi;for(const r of["wood","woodDark","plaster","stone","soil"])e[r]&&(e[r].roughnessMap=s,e[r].roughness=1);return e.soil.map=Sn(128,bv,4,4),e.soil.needsUpdate=!0,e}const Rv=Object.freeze(Object.defineProperty({__proto__:null,buildMaterials:fd},Symbol.toStringTag,{value:"Module"}));function Li(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Ot(i,t,e,n,s=0,r=0,o=0,a=0){const l=new it(new Pt(i,t,e),n);return l.position.set(s,r,o),l.rotation.y=a,l.castShadow=!0,l.receiveShadow=!0,l}const hn=new fe;function fi(i,t){for(let e=0;e<t.length;e++){const n=t[e];hn.position.set(n.p[0],n.p[1],n.p[2]),hn.rotation.set(n.rx||0,n.ry||0,n.rz||0);const s=n.s===void 0?1:n.s;hn.scale.set(n.sx===void 0?s:n.sx,n.sy===void 0?s:n.sy,n.sz===void 0?s:n.sz),hn.updateMatrix(),i.setMatrixAt(e,hn.matrix),n.c&&i.setColorAt(e,n.c)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),i.castShadow=!0,i.receiveShadow=!0,i}function pd(i,t,e=.75,n=1){const s=new Qn(i,n),r=Li(t),o=s.attributes.position,a=new O,l=new Map;for(let c=0;c<o.count;c++){a.fromBufferAttribute(o,c);const h=`${a.x.toFixed(3)},${a.y.toFixed(3)},${a.z.toFixed(3)}`;let d=l.get(h);d===void 0&&(d=.78+r()*.5,l.set(h,d)),a.multiplyScalar(d),a.y*=e,o.setXYZ(c,a.x,a.y,a.z)}return s.computeVertexNormals(),s}let ao=null;function md(){if(ao)return ao;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,6,64,64,62);return e.addColorStop(0,"rgba(20,12,6,0.55)"),e.addColorStop(.6,"rgba(20,12,6,0.28)"),e.addColorStop(1,"rgba(20,12,6,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),ao=new Cn(i),ao}function Vo(i,t,e=1){const n=new it(new ye(i,t),new gi({map:md(),transparent:!0,opacity:e,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));return n.rotation.x=-Math.PI/2,n.renderOrder=1,n}function Tc(i,t,e,n,s,r,o){const a=new Pt(s,n,r),l=new Pt(e,s,r),c=new Qt,h=(f,_)=>{const v=new Ie(f,o,_);return v.castShadow=!1,v.receiveShadow=!0,v},d=h(a,i+1),u=h(l,t+1);for(let f=0;f<=i;f++)hn.position.set(-e/2+f*e/i,0,0),hn.rotation.set(0,0,0),hn.scale.set(1,1,1),hn.updateMatrix(),d.setMatrixAt(f,hn.matrix);for(let f=0;f<=t;f++)hn.position.set(0,-n/2+f*n/t,0),hn.rotation.set(0,0,0),hn.scale.set(1,1,1),hn.updateMatrix(),u.setMatrixAt(f,hn.matrix);return d.instanceMatrix.needsUpdate=u.instanceMatrix.needsUpdate=!0,c.add(d,u),c}const Cv=Object.freeze(Object.defineProperty({__proto__:null,blobTexture:md,contactShadow:Vo,displacedRock:pd,fillInstances:fi,makeBeam:Ot,makeLatticeBars:Tc,mulberry:Li},Symbol.toStringTag,{value:"Module"})),gd={w:10,d:6.4,floorY:.7,wallTop:3.6,pillar:.22};function lo(i,t,e,n=[4,6]){const s=new Qt,r=.07,o=.06,a=e.woodDark;s.add(Ot(i,r,o,a,0,t/2-r/2,0)),s.add(Ot(i,r,o,a,0,-t/2+r/2,0)),s.add(Ot(r,t,o,a,-i/2+r/2,0,0)),s.add(Ot(r,t,o,a,i/2-r/2,0,0)),s.add(Ot(.05,t-2*r,o*.7,a,0,0,0));const l=new it(new ye(i-2*r,t-2*r),e.paper);l.position.z=-.005,l.receiveShadow=!0,s.add(l);const c=Tc(n[0],n[1],i-2*r,t-2*r,.028,.02,e.woodDark);c.position.z=.018,s.add(c);const h=new it(new ge(.035,.035,.03,12),e.bronze);return h.rotation.x=Math.PI/2,h.position.set(i/2-.16,0,.035),s.add(h),s}function Pv(i){const t=new Qt,e=Li(1234),{w:n,d:s,floorY:r,wallTop:o,pillar:a}=gd,l=n/2,c=s/2,h=Vo(n+3.4,s+3.6,.9);h.position.set(0,.03,0),t.add(h);{const L=pd(.32,900,.62,0),N=[];for(let B=-l;B<=l+.01;B+=1.25)for(let z=-c;z<=c+.01;z+=1.6)N.push({p:[B+(e()-.5)*.15,.18,z+(e()-.5)*.15],ry:e()*6.3,s:.8+e()*.5});const U=new Ie(L,i.stone,N.length);fi(U,N),t.add(U)}t.add(Ot(n+.3,.24,.24,i.woodDark,0,r-.12,c)),t.add(Ot(n+.3,.24,.24,i.woodDark,0,r-.12,-c)),t.add(Ot(.24,.24,s,i.woodDark,-l,r-.12,0)),t.add(Ot(.24,.24,s,i.woodDark,l,r-.12,0));for(let L=-l+.8;L<l;L+=1.1)t.add(Ot(.14,.18,s-.2,i.wood,L,r-.1,0));const d=Ot(n+.2,.1,s,i.woodFloor,0,r-.02,0);t.add(d);const u=o-r,f=r+u/2,_=[];for(let L=0;L<=5;L++)_.push(-l+L*n/5);const v=[];_.forEach(L=>{v.push([L,c]),v.push([L,-c])}),[-c+s/4,0,c-s/4].forEach(L=>{v.push([-l,L]),v.push([l,L])}),v.forEach(([L,N])=>t.add(Ot(a,u,a,i.woodDark,L,f,N)));const p=o-.12;t.add(Ot(n+.24,.24,.2,i.woodDark,0,p,c)),t.add(Ot(n+.24,.24,.2,i.woodDark,0,p,-c)),t.add(Ot(.2,.24,s+.24,i.woodDark,-l,p,0)),t.add(Ot(.2,.24,s+.24,i.woodDark,l,p,0));const m=r+2.32;t.add(Ot(n,.14,.12,i.woodDark,0,m,c)),t.add(Ot(n,.1,.14,i.woodDark,0,r+.08,c)),t.add(Ot(n,.14,.12,i.woodDark,0,m,-c)),t.add(Ot(.14,.14,s,i.woodDark,-l,m,0)),t.add(Ot(.14,.14,s,i.woodDark,l,m,0));const M=(m+.07+p-.12)/2,y=p-.12-(m+.07);t.add(Ot(n-.2,y,.1,i.plaster,0,M,c)),t.add(Ot(n-.2,y,.1,i.plaster,0,M,-c)),t.add(Ot(.1,y,s-.2,i.plaster,-l,M,0)),t.add(Ot(.1,y,s-.2,i.plaster,l,M,0));const x=.1,w=m-(r+.1),S=(m+r+.1)/2;t.add(Ot(n-.2,w,x,i.plaster,0,S,-c)),[-l,l].forEach(L=>{t.add(Ot(x,w,s-.2,i.plaster,L,S,0))}),[-l,l].forEach(L=>{const N=L>0?1:-1;[-1.5,1.5].forEach(U=>{const B=r+1.75,z=new Qt,W=1.5,D=1;z.add(Ot(W+.14,.09,.14,i.woodDark,0,D/2,0)),z.add(Ot(W+.14,.09,.14,i.woodDark,0,-D/2,0)),z.add(Ot(.09,D,.14,i.woodDark,-W/2,0,0)),z.add(Ot(.09,D,.14,i.woodDark,W/2,0,0));const G=new it(new ye(W,D),i.paper);G.rotation.y=Math.PI/2,z.add(G);const X=Tc(5,3,W,D,.03,.02,i.woodDark);X.rotation.y=Math.PI/2,X.position.x=N*.06,z.add(X),z.position.set(L+N*.09,B,U),t.add(z)})});const T=n/5,g=m-(r+.12),b=r+.12+g/2,A=[];for(let L=1;L<=3;L++){const N=-l+T*(L+.5),U=lo(T-.3,g,i);U.position.set(N-(T-.3)/4,b,c+.03);const B=lo(T-.3,g,i);B.position.set(N+(T-.3)/4,b,c-.04),t.add(U,B),L===2&&A.push({node:U,closed:U.position.x,open:U.position.x-(T-.3)/2},{node:B,closed:B.position.x,open:B.position.x+(T-.3)/2})}{const L=lo(T-.3,g,i);L.position.set(2,b,c-.04);const N=lo(T-.3,g,i);N.position.set(2,b,c+.1),t.add(L,N)}let C;{const L=-l+T*.5,N=Ot(T-.4,.12,1.6,i.stone,L,r-.06,c-.7);N.receiveShadow=!0,t.add(N);const U=Ot(1.5,.28,.55,i.stone,L,.2,c+1.65);t.add(U),t.add(Ot(.16,g+.1,.16,i.woodDark,L-.85,b,c+.05)),t.add(Ot(.16,g+.1,.16,i.woodDark,L+.85,b,c+.05)),t.add(Ot(1.9,.18,.2,i.woodDark,L,m+.05,c+.05)),C=new Qt;for(let B=0;B<3;B++){const z=new it(new Pt(.5,.85,.02),i.noren);z.position.set(-.53+B*.53,-.5,0),z.castShadow=!0,C.add(z)}C.position.set(L,m-.06,c+.12),t.add(C)}{const L=r-.06,N=Ot(n+.6,.12,1.25,i.woodFloor,0,L,c+.65);t.add(N);const U=Ot(1.25,.12,s+.6,i.woodFloor,l+.65,L,0);t.add(U);for(let W=-l-.2;W<=l+.25;W+=1.7)t.add(Ot(.14,L,.14,i.woodDark,W,L/2,c+1.2));for(let W=-c;W<=c+.01;W+=1.6)t.add(Ot(.14,L,.14,i.woodDark,l+1.2,L/2,W));const B=3.78-L;for(let W=-l-.2;W<=l+.25;W+=2.55)t.add(Ot(.13,B,.13,i.woodDark,W,L+B/2,c+1.2));for(let W=-c;W<=c+.01;W+=2.1)t.add(Ot(.13,B,.13,i.woodDark,l+1.2,L+B/2,W));t.add(Ot(n+.7,.16,.14,i.woodDark,0,3.62,c+1.2)),t.add(Ot(.14,.16,s+.7,i.woodDark,l+1.2,3.62,0));const z=L+.55;for(let W=-c;W<=1;W+=1.05)t.add(Ot(.09,.62,.09,i.woodDark,l+1.2,L+.31,W));t.add(Ot(.08,.08,4.4,i.wood,l+1.2,z,-c+2.2)),t.add(Ot(.06,.06,4.4,i.wood,l+1.2,z-.28,-c+2.2)),t.add(Ot(1.6,.22,.5,i.stone,-l+T*4.5,.16,c+1.65))}let P;{const L=new ht({color:5917240,roughness:.7,side:Ne}),N=new ge(.09,.09,n+2.6,10,1,!0,Math.PI,Math.PI);N.rotateZ(Math.PI/2),[c+1.55,-c-1.55].forEach(D=>{const G=new it(N,L);G.position.set(0,3.66,D),t.add(G)});const U=new ge(.055,.055,3.5,8);[[-l-1.2,c+1.55],[-l-1.2,-c-1.55]].forEach(([D,G])=>{const X=new it(U,i.bamboo);X.position.set(D,1.85,G),X.castShadow=!0,t.add(X)}),P=new Qt;const B=new Bo(.055,.014,6,10);for(let D=0;D<16;D++){const G=new it(B,i.bronze);G.position.y=-D*.2,G.rotation.y=D%2*Math.PI/2,P.add(G)}P.position.set(l+1.2,3.6,c+1.55),t.add(P);const z=[];for(let D=0;D<=8;D++){const G=D/8*Math.PI;z.push(new ot(.12+Math.sin(G)*.3,D*.045))}const W=new it(new Cr(z,14),i.stone);W.position.set(l+1.2,0,c+1.55),W.castShadow=W.receiveShadow=!0,t.add(W)}return{group:t,noren:C,rainChain:P,openBayX:-l+T*4.5,sliders:A}}function Dv(i){const t=new Qt;i.ridge.side=Ne;const e=6.42,n=3.7,s=4.7,r=6,o=s,a=e-n,l=Math.hypot(o,a),c=Math.atan2(a,o),h=o/l,d=a/l,u=r*2,f=new Pt(u,.16,l+.35),_=(e+n)/2-.06,v=s/2,p=new it(f,i.roofUnder);p.position.set(0,_,v),p.rotation.x=c;const m=p.clone();m.position.z=-v,m.rotation.x=-c,p.castShadow=m.castShadow=!0,p.receiveShadow=m.receiveShadow=!0,t.add(p,m),t.add(Ot(u+.15,.3,.09,i.woodDark,0,n-.02,s+.02)),t.add(Ot(u+.15,.3,.09,i.woodDark,0,n-.02,-s-.02));{const M=new Pt(.12,.15,.9),y=[];for(let w=-5.6;w<=5.61;w+=.62)y.push({p:[w,n-.02,s-.35],rx:c}),y.push({p:[w,n-.02,-4.3500000000000005],rx:-c});const x=new Ie(M,i.woodDark,y.length);fi(x,y),x.castShadow=!1,t.add(x)}{const M=new ge(.085,.095,.55,7,1,!0);M.rotateZ(Math.PI/2),M.rotateY(Math.PI/2);const y=11,x=56,w=new Ie(M,i.roofTile,y*x*2),S=Li(20240),T=new Ft;let g=0;const b=[];for(let A=0;A<2;A++){const C=A===0?1:-1;for(let P=0;P<y;P++){const L=.32+P*((l-.35)/y),N=C*(s-L*h),U=n+L*d+.1;for(let B=0;B<x;B++){const z=-5.78+B*(11.56/(x-1));b.push({p:[z,U,N],rx:C*c});const W=.82+S()*.3;T.setRGB(W,W*1.01,W*1.06),w.setColorAt(g++,T)}}}fi(w,b),w.instanceColor.needsUpdate=!0,w.castShadow=!1,w.receiveShadow=!0,t.add(w)}{const M=new ge(.17,.17,.72,9,1,!0,0,Math.PI);M.rotateZ(Math.PI/2);const y=16,x=new Ie(M,i.ridge,y),w=[];for(let S=0;S<y;S++)w.push({p:[-5.6+S*(11.2/(y-1)),e+.02,0]});fi(x,w),x.castShadow=!1,t.add(x),t.add(Ot(.5,.22,.4,i.ridge,-5.85,e-.05,0)),t.add(Ot(.5,.22,.4,i.ridge,5.85,e-.05,0))}[-1,1].forEach(M=>{const y=new Qt;y.add(Ot(.22,.5,.55,i.ridge,0,.2,0));const x=new it(new ge(.3,.3,.14,12),i.ridge);x.rotation.z=Math.PI/2,x.position.y=.55,x.castShadow=!0,y.add(x);const w=new it(new On(.12,10,8),i.ridge);w.position.y=.78,w.castShadow=!0,y.add(w),y.position.set(M*5.95,e-.1,0),t.add(y)});{const M=new Rr;M.moveTo(-3.2,3.55),M.lineTo(3.2,3.55),M.lineTo(0,e-.12),M.closePath();const y=new Fo(M);[4.94,-4.94].forEach(x=>{const w=new it(y,i.plaster);w.rotation.y=Math.PI/2,w.position.x=x,w.castShadow=w.receiveShadow=!0,w.material.side=Ne,t.add(w)}),[1,-1].forEach(x=>{[1,-1].forEach(w=>{const S=Ot(.1,.24,l+.4,i.woodDark,x*(r-.02),_+.12,w*v);S.rotation.x=w*c,t.add(S)})})}{const M=new Pt(2,.09,1.7),y=c-.3;[[5.55,1,4.35,1],[-5.55,-1,4.35,1],[5.55,1,-4.35,-1],[-5.55,-1,-4.35,-1]].forEach(([w,S,T,g])=>{const b=new it(M,i.roofUnder);b.position.set(w,n+.16,T),b.rotation.order="YXZ",b.rotation.y=S*g*.42,b.rotation.x=g*y,b.castShadow=b.receiveShadow=!0,t.add(b);const A=new ge(.085,.095,.55,7,1,!0);A.rotateZ(Math.PI/2),A.rotateY(Math.PI/2);const C=new Ie(A,i.roofTileAlt,5),P=[];for(let L=0;L<5;L++)P.push({p:[w-.7+L*.35,n+.38,T-g*.15],rx:g*y});fi(C,P),C.castShadow=!1,t.add(C)})}return{group:t,ridgeY:e,eaveY:n,eaveZ:s}}function Lv(i){const t=new Qt,{floorY:e}=gd,n=-.9,s=4.9,r=-2.9,o=2.9,a=(n+s)/2;{const f=e+.06;for(let _=r+.1;_+1.82<o+.01;_+=1.82+.02)for(let v=n+.1;v+.92<s+.01;v+=.92+.02){const p=new it(new Pt(.92,.06,1.82),i.tatami);p.position.set(v+.92/2,f,_+1.82/2),p.receiveShadow=!0,t.add(p);const m=Ot(.92+.02,.06+.005,.035,i.tatamiEdge,v+.92/2,f,_+1.82-.017);m.castShadow=!1,t.add(m)}}{const h=3-e;[[n,0],[a,0],[s,-2],[s,2]].forEach(([u,f])=>t.add(Ot(.16,h,.16,i.woodDark,u,e+h/2,f)));const d=new it(new Pt(s-n+.4,.08,o-r+.4),i.woodDark);d.position.set(a,3.02,0),t.add(d)}{const h=Ot(.1,2.2,o-r,i.plaster,n,e+1.15,0);t.add(h);for(let d=0;d<3;d++){const u=new Qt,f=1.75,_=1.7;u.add(Ot(f,.06,.05,i.woodDark,0,_/2,0)),u.add(Ot(f,.06,.05,i.woodDark,0,-_/2,0)),u.add(Ot(.06,_,.05,i.woodDark,-f/2,0,0)),u.add(Ot(.06,_,.05,i.woodDark,f/2,0,0));const v=new it(new ye(f-.1,_-.1),i.fusuma);v.rotation.y=Math.PI/2,u.add(v);const p=new it(new ge(.03,.03,.03,10),i.bronze);p.rotation.z=Math.PI/2,p.position.set(.04,0,.35),u.add(p),u.position.set(n+.09,e+1,-1.85+d*1.85),t.add(u)}}{const u=Ot(2.2,.16,1,i.wood,-2.6,e+.14,r+.55);t.add(u),t.add(Ot(.14,2.2,.14,i.woodDark,-2.6-2.2/2,e+1.1,r+.15)),t.add(Ot(.14,2.2,.14,i.woodDark,-2.6+2.2/2,e+1.1,r+.15)),t.add(Ot(2.2+.2,.14,.16,i.woodDark,-2.6,e+2.25,r+.15));const f=new Qt,_=new it(new Pt(.55,1.05,.02),i.scroll);f.add(_);const v=new ge(.025,.025,.7,8),p=new it(v,i.woodDark);p.rotation.z=Math.PI/2,p.position.y=.55;const m=p.clone();m.position.y=-.55,f.add(p,m),f.position.set(-2.6-.45,e+1.55,r+.22),f.rotation.x=.03,t.add(f);const M=[];for(let T=0;T<=8;T++){const g=T/8*Math.PI;M.push(new ot(.03+Math.sin(g)*.11,T*.035))}const y=new it(new Cr(M,12),new ht({color:3824268,roughness:.35,envMapIntensity:.7}));y.position.set(-2.6+.55,e+.22,r+.55),y.castShadow=!0,t.add(y);const x=new it(new ge(.012,.012,.5,6),i.mossDark);x.position.set(-2.6+.55,e+.5,r+.55),t.add(x);const w=new it(new Qn(.09,0),new ht({color:13920650,roughness:.7}));w.position.set(-2.6+.55,e+.78,r+.55),w.castShadow=!0,t.add(w);const S=new it(new Qn(.14,0),i.stone);S.scale.y=.6,S.position.set(-2.6+.1,e+.26,r+.6),S.castShadow=!0,t.add(S)}{t.add(Ot(1.1,.07,.7,i.wood,2.2,e+.42,.6)),[[-.45,-.25],[.45,-.25],[-.45,.25],[.45,.25]].forEach(([f,_])=>t.add(Ot(.07,.32,.07,i.woodDark,2.2+f,e+.22,.6+_)));const u=new ht({color:8007221,roughness:.9});[[2.2-.2,.6+.75],[2.2+.35,.6-.7]].forEach(([f,_])=>{const v=new it(new Pt(.5,.09,.5),u);v.position.set(f,e+.12,_),v.rotation.y=.2,v.castShadow=v.receiveShadow=!0,t.add(v)})}const l=new Qt;{const h=new it(new ge(.012,.012,.5,6),i.woodDark);h.position.y=.45,l.add(h);const d=new it(new ge(.19,.19,.34,12),i.paperLantern);l.add(d);const u=new it(new ge(.1,.14,.05,10),i.woodDark);u.position.y=.19;const f=u.clone();f.position.y=-.19,l.add(u,f);const _=new it(new ge(.015,.03,.16,8),new ht({color:10695463,roughness:.8}));_.position.y=-.3,l.add(_),l.position.set(2,2.35,.4),t.add(l)}const c=new bc(16757867,5,9,2);return c.position.set(2,2.3,.4),t.add(c),{group:t,lantern:l,lanternLight:c}}const Iv={x:7.5,z:6,w:4.6,d:2.9};function Nv(i){const t=new Qt,{x:e,z:n,w:s,d:r}=Iv,o=new it(new Di(1,40),new ht({color:2241323,roughness:1}));o.rotation.x=-Math.PI/2,o.scale.set(s/2+.15,r/2+.15,1),o.position.set(e,-.1,n),o.receiveShadow=!0,t.add(o);const a=new ht({color:5337212,roughness:.1,metalness:.85,envMapIntensity:1.1,transparent:!0,opacity:.93}),l=30,c=18,h=new ye(s,r,l,c),d=new it(h,a);d.rotation.x=-Math.PI/2,d.position.set(e,.06,n),d.receiveShadow=!0,t.add(d);const u=h.attributes.position.array.slice();{const _=Li(646),v=22,p=new Qn(.22,0),m=new Ie(p,i.stone,v),M=[];for(let y=0;y<v;y++){const x=y/v*Math.PI*2;M.push({p:[e+Math.cos(x)*(s/2+.1),.1,n+Math.sin(x)*(r/2+.1)],ry:_()*6.3,s:.8+_()*.6,sy:.55})}fi(m,M),t.add(m)}function f(_,v=null){const p=h.attributes.position,M=1+(v&&typeof v.wetness=="number"?Math.min(Math.max(v.wetness,0),1):0)*.35;for(let y=0;y<p.count;y++){const x=u[y*3],w=u[y*3+1];p.setZ(y,(Math.sin(x*2.1+_*1.7)*.022+Math.cos(w*2.8+_*2.2)*.02)*M)}p.needsUpdate=!0,h.computeVertexNormals()}return{group:t,update:f,waterMat:a}}function Uv(i,t){const e=new je({side:dn,depthWrite:!1,fog:!1,uniforms:{top:{value:new Ft(8366281)},mid:{value:new Ft(15909267)},bot:{value:new Ft(14721137)}},vertexShader:`
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
      }`}),n=new it(new On(70,24,16),e);i.add(n),i.fog=new dc(15778195,26,62);const s=new Bl(16767400,3);s.position.set(14,8.5,12),s.target.position.set(0,1.2,0),s.castShadow=!0,s.shadow.mapSize.set(2048,2048),s.shadow.camera.left=-15,s.shadow.camera.right=15,s.shadow.camera.top=15,s.shadow.camera.bottom=-15,s.shadow.camera.near=10,s.shadow.camera.far=120,s.shadow.bias=-4e-4,s.shadow.normalBias=.03,i.add(s,s.target);const r=new s0(12375016,9072466,.6);i.add(r);const o=new Bl(16764830,.35);o.position.set(-8,4,-6),i.add(o);const a=document.createElement("canvas");a.width=64,a.height=32;const l=a.getContext("2d"),c=l.createLinearGradient(0,0,0,32);c.addColorStop(0,"#87a9c8"),c.addColorStop(.48,"#f7c98b"),c.addColorStop(.55,"#8a6f52"),c.addColorStop(1,"#3a3428"),l.fillStyle=c,l.fillRect(0,0,64,32);const h=new Cn(a);h.mapping=mo,h.colorSpace=We;const d=new kl(t),u=d.fromEquirectangular(h);return i.environment=u.texture,h.dispose(),d.dispose(),{sun:s,hemi:r,skyMat:e}}function xn(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new we;let c=0;for(let h=0;h<i.length;++h){const d=i[h];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const d=[];for(let u=0;u<i.length;++u){const f=i[u].index;for(let _=0;_<f.count;++_)d.push(f.getX(_)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(const h in r){const d=ru(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){const f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][u]);const _=ru(f);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(_)}}}return l}function ru(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Be(o,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let u=0,f=h.count;u<f;u++)for(let _=0;_<e;_++){const v=h.getComponent(u,_);a.setComponent(u+d,_,v)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function ti(i){let t=i>>>0||1;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const _d=Rv,ou=Cv||{},xd={M:null};function vd(i){xd.M=i}const Ov={tile:"roofTile",shoji:"paper"},Ia={};function Rn(i,t){const e=xd.M||_d;if(e&&e[i])return e[i];const n=Ov[i];return n&&e&&e[n]?e[n]:(Ia[i]||(Ia[i]=t()),Ia[i])}const os=(i,t=.85,e=0)=>new ht({color:i,roughness:t,metalness:e}),li=()=>Rn("woodDark",()=>os(4864552,.8)),au=()=>Rn("woodNew",()=>os(9069112,.7)),lu=()=>Rn("woodAged",()=>os(7234136,.9)),cu=()=>Rn("plaster",()=>os(15261904,.95)),Fv=()=>Rn("tile",()=>os(3817286,.85)),Md=()=>Rn("stone",()=>os(9276808,.95)),Bv=()=>Rn("glassDark",()=>new ht({color:1053980,roughness:.08,metalness:.9})),Vl=()=>Rn("iron",()=>os(2829102,.55,.8));function Ue(i,t,e,n,s,r,o,a,l=0,c=0,h=0){const d=new Pt(e,n,s),u=new ue().makeRotationFromEuler(new bn(h,l,c));u.setPosition(r,o,a),d.applyMatrix4(u),(i[t]||(i[t]=[])).push(d)}function zv(i,t,e,{shadow:n=!0}={}){for(const s of Object.keys(t)){const r=xn(t[s],!1);t[s].forEach(a=>a.dispose());const o=new it(r,e(s));o.castShadow=n,o.receiveShadow=!0,i.add(o)}}function yd(i={}){const t=ti(i.seed??7),e=i.w??6.5,n=i.d??6,s=i.wallH??3.1,r=$e.degToRad(i.pitch??28+t()*8),o=i.roofType??(t()<.7?"kirizuma":"yosemune"),a=i.facadeCols??Math.max(3,Math.round(e/1.8)),l=i.age??t(),c=!!i.isShop,h=i.engawa??(t()<.6?.9:0),d=new Qt;d.name=i.name||"house";const u={},f=(i.woodTone??.5)>.6?"woodNew":"woodAged",_=F=>F==="WOOD"?Rn(f,f==="woodNew"?au:lu):F==="WOOD_D"?li():F==="PLAS"?_d.plasterTinted?.(i.plasterTone??15261904)??cu():F==="STONE"?Md():li(),v=.55,p=.45,m=[],M=Math.max(3,Math.round(e/1.2)+1),y=Math.max(3,Math.round(n/1.2)+1);for(let F=0;F<M;F++)m.push([-e/2+e*F/(M-1),0,-n/2],[-e/2+e*F/(M-1),0,n/2]);for(let F=1;F<y-1;F++)m.push([-e/2,0,-n/2+n*F/(y-1)],[e/2,0,-n/2+n*F/(y-1)]);for(const[F,,Q]of m)Ue(u,"STONE",v,p,v,F,p/2-.06,Q,t()*.1);const x=p-.06;Ue(u,"WOOD_D",e+.3,.22,n+.3,0,x+.11,0);const w=.14,S=x+.22,T=S+s,g=i.winLayout??Array.from({length:a},()=>t()<.55?1:2),b=e/a;for(let F=0;F<a;F++){const Q=-e/2+b*(F+.5),Rt=g[F%g.length],pt=(i.doorSide??0)!==0&&(i.doorSide<0&&F===0||i.doorSide>0&&F===a-1),_t=S+.55,Xt=S+s-.75;Rt===0&&!pt?Ue(u,"PLAS",b-.16,s,w,Q,S+s/2,n/2):pt?(Ue(u,"PLAS",b-.16,_t-S,w,Q,(S+_t)/2,n/2),Ue(u,"PLAS",b-.16,T-(S+2.1),w,Q,(T+S+2.1)/2,n/2)):(Ue(u,"PLAS",b-.16,_t-S,w,Q,(S+_t)/2,n/2),Ue(u,"PLAS",b-.16,T-Xt,w,Q,(T+Xt)/2,n/2),Ue(u,"PLAS",.14,Xt-_t,w,Q-(b-.16)/2+.07,(_t+Xt)/2,n/2),Ue(u,"PLAS",.14,Xt-_t,w,Q+(b-.16)/2-.07,(_t+Xt)/2,n/2))}Ue(u,"PLAS",e,s,w,0,S+s/2,-n/2),Ue(u,"PLAS",w,s,n,-e/2,S+s/2,0),Ue(u,"PLAS",w,s,n,e/2,S+s/2,0);for(let F=0;F<=a;F++){const Q=-e/2+b*F;Ue(u,"WOOD_D",.14,s,.14,Q,S+s/2,n/2+.02),Ue(u,"WOOD_D",.14,s,.14,Q,S+s/2,-n/2-.02)}Ue(u,"WOOD_D",e+.24,.16,.18,0,T-.08,n/2+.02),Ue(u,"WOOD_D",e+.24,.12,.14,0,S+1.55,n/2+.03),Ue(u,"WOOD_D",e+.24,.2,.2,0,T+.02,-n/2-.02);for(let F=0;F<=a;F++){const Q=-e/2+b*F;Ue(u,"WOOD_D",.12,.12,.5,Q,T+.18,n/2+.25)}for(let F=0;F<a;F++){const Q=-e/2+b*(F+.5);Ue(u,"WOOD_D",.22,.16,.3,Q,T+.32,n/2+.32)}const A=[],C=new Qt;for(let F=0;F<a;F++){const Q=-e/2+b*(F+.5),Rt=g[F%g.length],pt=(i.doorSide??0)!==0&&(i.doorSide<0&&F===0||i.doorSide>0&&F===a-1),_t=S+.55,Xt=S+s-.75,j=b-.44,at=Xt-_t;if(pt){const lt=new it(new Pt(j+.12,2.15,.1),li());lt.position.set(Q,S+1.075,n/2+.02),C.add(lt);const dt=new it(new Pt(j/2-.03,2,.05),Rn("woodAged",lu));dt.position.set(Q-j/4,S+1,n/2+.06),C.add(dt);const zt=dt.clone();zt.position.x=Q+j/4,C.add(zt);const Nt=new ge(.02,.02,.16,6);for(const kt of[Q-.08,Q+.08]){const Kt=new it(Nt,Vl());Kt.position.set(kt,S+1,n/2+.1),C.add(Kt)}if(c){const kt=new it(new Pt(j,.5,.03),new ht({color:2899555,roughness:.9}));kt.position.set(Q,S+2.35,n/2+.12),kt.castShadow=!0,C.add(kt)}continue}if(Rt===0)continue;const ut=new it(new Pt(j+.1,at+.1,.09),li());if(ut.position.set(Q,(_t+Xt)/2,n/2+.01),C.add(ut),Rt===1){const lt=new ht({color:15985881,roughness:.9,emissive:16762995,emissiveIntensity:0});A.push(lt);const dt=new it(new ye(j,at),lt);dt.position.set(Q,(_t+Xt)/2,n/2+.072),C.add(dt);const zt=li(),Nt=4,kt=3;for(let Kt=1;Kt<Nt;Kt++){const k=new it(new Pt(.045,at,.03),zt);k.position.set(Q-j/2+j*Kt/Nt,(_t+Xt)/2,n/2+.08),C.add(k)}for(let Kt=1;Kt<kt;Kt++){const k=new it(new Pt(j,.045,.03),zt);k.position.set(Q,_t+at*Kt/kt,n/2+.08),C.add(k)}}else{const lt=new it(new ye(j,at),Bv());lt.position.set(Q,(_t+Xt)/2,n/2+.068),C.add(lt);const dt=li();for(let Nt=0;Nt<=5;Nt++){const kt=new it(new Pt(.05,at,.04),dt);kt.position.set(Q-j/2+j*Nt/5,(_t+Xt)/2,n/2+.075),C.add(kt)}const zt=new it(new Pt(j,.06,.04),dt);zt.position.set(Q,(_t+Xt)/2,n/2+.075),C.add(zt)}}if(C.traverse(F=>{F.isMesh&&(F.castShadow=!1,F.receiveShadow=!0)}),d.add(C),h>0){Ue(u,"WOOD",e*.95,.12,h,0,S+.12,n/2+h/2+.05);for(let F=0;F<=Math.round(e*.95/1.1);F++){const Q=-e*.95/2+e*.95*F/Math.round(e*.95/1.1);Ue(u,"STONE",.3,.3,.3,Q,.1,n/2+h+.02)}for(let F=0;F<=6;F++){const Q=-e*.9/2+e*.9*F/6;Ue(u,"WOOD_D",.09,.7,.09,Q,S+.5,n/2+h)}Ue(u,"WOOD_D",e*.9,.08,.1,0,S+.85,n/2+h)}{const F=new Qt,Q=new it(new Pt(e-.4,.08,n-.4),Rn("woodNew",au));Q.position.y=S+.04,Q.receiveShadow=!0,F.add(Q);const Rt=new it(new ye(e-.4,s-.3),new ht({color:10127984,roughness:1}));Rt.position.set(0,S+s/2,-n/2+.25),F.add(Rt);const pt=new it(new Pt(1.7,.03,.9),new ht({color:10133611,roughness:1}));pt.position.set(-.6,S+.1,.3),F.add(pt);const _t=pt.clone();_t.position.x=1.2,F.add(_t);const Xt=new it(new Pt(1.1,.32,.6),li());Xt.position.set(.2,S+.24,.3),F.add(Xt);const j=new ht({color:4469538,emissive:16757854,emissiveIntensity:0});A.push(j);const at=new it(new On(.09,10,8),j);at.position.set(.2,S+s-.6,.3),F.add(at);const ut=new it(new ge(.008,.008,.7),Vl());ut.position.set(.2,S+s-.25,.3),F.add(ut),F.traverse(lt=>{lt.isMesh&&(lt.castShadow=!1,lt.receiveShadow=!0)}),d.add(F)}zv(d,u,_,{shadow:!0});const P=new Qt,L=Math.tan(r)*(n/2+.9),N=T+.35,U=Math.hypot(n/2+.9,L)+.35,B=Rn("tile",Fv),z=li(),W=new ht({color:4010535,roughness:.95}),D=new Pt(.3,.07,.36),G=[],X=[];for(const F of[1,-1]){const Q=new Pt(e+1.6,.12,U),Rt=F*(n/4+.22),pt=N+L/2;Q.applyMatrix4(new ue().makeRotationX(F>0?r:-r)),Q.translate(0,pt,Rt),X.push(Q);const _t=new Pt(e+1.5,.04,U*.98);_t.applyMatrix4(new ue().makeRotationX(F>0?r:-r)),_t.translate(0,pt-.09,Rt);const Xt=new it(xn([_t],!1),W);Xt.receiveShadow=!0,P.add(Xt);const j=Math.floor(U/.34),at=Math.floor((e+1.4)/.32);for(let ut=0;ut<j;ut++)for(let lt=0;lt<at;lt++){const dt=-((at-1)*.32)/2+lt*.32+(t()-.5)*.015,zt=-U/2+.2+ut*.34,Nt=new O(dt,.1+(t()-.5)*.012,zt).applyEuler(new bn(F>0?r:-r,0,0));G.push({p:[Nt.x,Nt.y+pt,Nt.z+Rt],ry:(t()-.5)*.03,tone:.8+t()*.4})}}const ft=new it(xn(X,!1),new ht({color:2894896,roughness:.9}));ft.castShadow=!0,P.add(ft);const gt=new Ie(D,B.clone(),G.length);{const F=new fe,Q=new Ft;G.forEach((Rt,pt)=>{F.position.set(...Rt.p),F.rotation.set(0,Rt.ry,0),F.updateMatrix(),gt.setMatrixAt(pt,F.matrix);const _t=Rt.tone*(1-l*.25);gt.setColorAt(pt,Q.setRGB(.32*_t+.1,.34*_t+.1,.38*_t+.12))}),gt.instanceMatrix.needsUpdate=!0,gt.instanceColor&&(gt.instanceColor.needsUpdate=!0)}gt.castShadow=!0,gt.receiveShadow=!0,P.add(gt);const Zt=new ge(.14,.14,.46,8,1,!1,0,Math.PI);Zt.rotateZ(Math.PI/2);const $t=Math.ceil((e+1.4)/.5);for(let F=0;F<$t;F++){const Q=new it(Zt,z);Q.position.set(-(e+1.2)/2+.25+F*.5,N+L+.02,0),Q.castShadow=!0,P.add(Q)}const Lt=new Rr;Lt.moveTo(-n/2,0),Lt.lineTo(n/2,0),Lt.lineTo(0,L),Lt.closePath();const J=new vc(Lt,{depth:.12,bevelEnabled:!1});J.rotateY(Math.PI/2);for(const F of[e/2-.02,-e/2-.1]){const Q=new it(J,cu());Q.position.set(F,T+.3,0),Q.castShadow=!0,P.add(Q)}if(o==="yosemune")for(const F of[1,-1]){const Q=new it(new Pt(.14,U*.55,(n/2+.9)*1.02),ft.material);Q.position.set(F*(e/2+.55),N+L*.45,0),Q.rotation.z=F*.62,Q.castShadow=!0,P.add(Q)}if(d.add(P),l>.15){const F=new it(new Pt(e+.05,.5*l+.15,n+.05),new ht({color:3814700,roughness:1,transparent:!0,opacity:.25+l*.3,depthWrite:!1}));F.position.y=S+.25,F.renderOrder=2,d.add(F)}return d.traverse(F=>{F.isMesh&&F.material?.isMeshStandardMaterial&&ou.registerWet&&ou.registerWet(F.material)}),{group:d,glowMats:A,dims:{w:e,d:n,wallH:s},roofTopY:N+L}}function kv(i,t={}){if(!i||i.userData._upgraded)return i;i.userData._upgraded=!0;const e=new Qt;e.name="hero_joinery_upgrade";const n=li(),s=Vl(),r=(v,p,m,M,y,x)=>{const w=new it(new Pt(v,p,m),n);return w.position.set(M,y,x),w.castShadow=!0,w.receiveShadow=!0,e.add(w),w},o=new Pi().setFromObject(i),a=o.max.x-o.min.x||9,l=o.max.z-o.min.z||7,c=(o.max.x+o.min.x)/2-i.position.x,h=(o.max.z+o.min.z)/2-i.position.z,d=Md();for(let v=-a/2;v<=a/2+.01;v+=1.15)for(const p of[-l/2-.15,l/2+.15]){const m=new it(new Pt(.5,.4,.5),d);m.position.set(c+v,.14,h+p),m.receiveShadow=!0,m.castShadow=!1,e.add(m)}r(a*.98,.12,.1,c,t.nageshiY??2,h+l/2+.08);for(let v=-a/2+.8;v<a/2;v+=1.6)r(.24,.18,.3,c+v,t.eaveY??3.35,h+l/2+.3);const u=new ge(.025,.025,.2,6);for(const v of[-.12,.12]){const p=new it(u,s);p.position.set(c+(t.doorX??-2.2)+v,1.25,h+l/2+.12),e.add(p)}const f=new ht({color:4469538,emissive:16757854,emissiveIntensity:0}),_=new it(new On(.1,10,8),f);return _.position.set(c,2.6,h),e.add(_),i.userData.glowMats=[...i.userData.glowMats||[],f],i.add(e),i}const Xn={strength:.45,gust(i){return this.strength*(.65+.35*Math.sin(i*.6)*Math.sin(i*.23+1.7))}},Gv=["clear","windy","rainy","misty","snow"];function Hv({scene:i,pondWaterMats:t=[],wetMats:e=[],heightFn:n=null,snowMats:s=[]}={}){const r=ti(777),o=new Qt;o.name="weather",i?.add(o);let a="clear",l="clear",c=1,h=0,d=0;const u=typeof n=="function"?n:()=>0,f=Array.isArray(s)?s:[],_=800,v=new Float32Array(_*3);for(let D=0;D<_;D++)v[D*3]=(r()-.5)*60,v[D*3+1]=r()*18,v[D*3+2]=(r()-.5)*60;const p=new we;p.setAttribute("position",new Be(v,3));const m=new Bs({color:11452368,size:.14,transparent:!0,opacity:0,depthWrite:!1}),M=new Mr(p,m);M.frustumCulled=!1,o.add(M);const y=new gi({color:13623530,transparent:!0,opacity:0,depthWrite:!1,side:Ne}),x=[],w=new Mc(.05,.09,12);for(let D=0;D<40;D++){const G=new it(w,y.clone());G.rotation.x=-Math.PI/2,G.position.set((r()-.5)*50,.06,(r()-.5)*50),G.userData.ph=r(),o.add(G),x.push(G)}const S=new ht({color:2106924,roughness:.05,metalness:.7,transparent:!0,opacity:0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});for(const[D,G,X]of[[-5.9,9.6,1.2],[4,9.4,1.5],[12,9.7,1],[-12,9.5,1.1],[0,4.2,.9]]){const ft=new it(new Di(X,20),S);ft.rotation.x=-Math.PI/2,ft.position.set(D,.045,G),o.add(ft)}const T=500,g=26,b=60,A=new Float32Array(T*3),C=new Float32Array(T),P=new Float32Array(T);for(let D=0;D<T;D++)A[D*3]=(r()-.5)*b,A[D*3+1]=r()*g,A[D*3+2]=(r()-.5)*b,C[D]=.6+r()*.6,P[D]=r()*Math.PI*2;const L=new we;L.setAttribute("position",new Be(A,3));const N=(()=>{const D=document.createElement("canvas");D.width=32,D.height=32;const G=D.getContext("2d"),X=G.createRadialGradient(16,16,1,16,16,15);X.addColorStop(0,"rgba(255,255,255,1)"),X.addColorStop(.6,"rgba(255,255,255,0.8)"),X.addColorStop(1,"rgba(255,255,255,0)"),G.fillStyle=X,G.fillRect(0,0,32,32);const ft=new Cn(D);return ft.colorSpace=We,ft})(),U=new Bs({map:N,size:.16,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0,color:15922681}),B=new Mr(L,U);B.frustumCulled=!1,B.visible=!1,i?.add(B);const z=new Ft(15265266);for(const D of f)!D||!D.color||D.userData._snowSeeded||(D.userData._snowSeeded=!0,D.userData._dryColor=D.color.clone(),D.userData._dryRough="roughness"in D?D.roughness:1);const W={get state(){return c>=1?l:`${a}>${l}`},get wetness(){return h},setState(D){Gv.includes(D)&&D!==l&&(a=c>=1?l:a,l=D,c=0)},update(D,G){c=Math.min(1,c+D/3);const X=c*c*(3-2*c),ft=l==="rainy",gt=l==="snow",Zt=(ft?X:1-X)*(l==="rainy"?1:0)+(a==="rainy"&&l!=="rainy"?1-X:0);d+=((l==="snow"?X:a==="snow"?1-X:0)-d)*Math.min(1,D*.8);const $t=l==="windy"?1.2:l==="rainy"?.8:l==="misty"?.15:l==="snow"?.55:.45;if(Xn.strength+=($t*(l==="windy"?1:X||1)-Xn.strength)*Math.min(1,D*1.2),l==="windy"&&(Xn.strength+=(1.2-Xn.strength)*Math.min(1,D)),m.opacity=Zt*.75,m.opacity>.01){const Lt=p.attributes.position.array,J=Xn.gust(G)*3.2;for(let F=0;F<_;F++)Lt[F*3+1]-=D*11,Lt[F*3]+=J*D,Lt[F*3+1]<0&&(Lt[F*3+1]=15+r()*3,Lt[F*3]=(r()-.5)*60,Lt[F*3+2]=(r()-.5)*60);p.attributes.position.needsUpdate=!0;for(const F of x){F.material.opacity=Zt*.6;const Q=(G*1.4+F.userData.ph*7)%1;F.scale.setScalar(.5+Q*2.2),F.material.opacity=Zt*.6*(1-Q)}}else for(const Lt of x)Lt.material.opacity=0;h+=((l==="rainy"?X:l==="rainy"?1:a==="rainy"?1-X:0)-h)*Math.min(1,D*.8);for(const Lt of e)Lt?.userData?._dry||(Lt.userData._dry={r:Lt.roughness??.85,e:Lt.envMapIntensity??1}),Lt.roughness=$e.lerp(Lt.userData._dry.r,Math.min(.25,Lt.userData._dry.r*.4),h),Lt.envMapIntensity=$e.lerp(Lt.userData._dry.e,Lt.userData._dry.e+.9,h);S.opacity=h*.75;for(const Lt of t)Lt.roughness=$e.lerp(.18,.05,h);if(B.visible=d>.01,U.opacity=.9*d,B.visible){const J=Xn.gust(G)*(1.2+d*1);for(let F=0;F<T;F++){let Q=A[F*3+1]-C[F]*D,Rt=A[F*3]+(J+Math.sin(G*1.3+P[F])*.25)*D;const pt=A[F*3+2]+Math.cos(G*1.1+P[F])*.2*D;Q<=u(Rt,pt)+.03&&(Q=g*(.85+.15*Math.sin(P[F]+G*.05)),Rt=(P[F]*97.31%1+1)%1*b-b/2),A[F*3]=Rt,A[F*3+1]=Q,A[F*3+2]=pt}L.attributes.position.needsUpdate=!0}if(f.length){const Lt=d*.7;for(const J of f)!J||!J.color||!J.userData._snowSeeded||(J.color.copy(J.userData._dryColor).lerp(z,Lt),"roughness"in J&&(J.roughness=J.userData._dryRough+(.9-J.userData._dryRough)*d*.85))}W.rainK=Zt,W.mistK=l==="misty"?X:a==="misty"?1-X:0,W.dimK=(ft?X*.55:0)+(gt?X*.3:0),W.snowK=d,W.fogK=Math.max(W.mistK,d*.6)},rainK:0,mistK:0,dimK:0,snowK:0,fogK:0};return W}function Vv(i,t={}){const e=new Qt,n=Li(999),s=Array.isArray(t.leafSources)?t.leafSources:null;function r(x){if(!s||!s.length)return null;const w=s[x%s.length],T=(x*2654435761%1e3+1e3)%1e3/1e3*Math.PI*2+x%7*.13,g=(w.r||2.2)*(.35+.65*((x*40503%1e3+1e3)%1e3/1e3));return{x:w.x+Math.cos(T)*g,z:w.z+Math.sin(T)*g}}const o=170,a=new we,l=new Float32Array(o*3),c=new Float32Array(o);for(let x=0;x<o;x++)l[x*3]=-22+n()*44,l[x*3+1]=.3+n()*6,l[x*3+2]=-14+n()*30,c[x]=n()*100;a.setAttribute("position",new Be(l,3));const h=(()=>{const x=document.createElement("canvas");x.width=x.height=32;const w=x.getContext("2d"),S=w.createRadialGradient(16,16,1,16,16,15);return S.addColorStop(0,"rgba(255,240,214,1)"),S.addColorStop(1,"rgba(255,240,214,0)"),w.fillStyle=S,w.fillRect(0,0,32,32),new Cn(x)})(),d=new Mr(a,new Bs({map:h,size:.09,transparent:!0,opacity:.55,depthWrite:!1,color:16771264,sizeAttenuation:!0}));e.add(d);const u=40,f=new ye(.17,.17),_=new Ie(f,i.mapleLeaf,u);_.castShadow=!1,_.receiveShadow=!1,_.frustumCulled=!1;const v=[],p=new Ft,m=[12597547,13849600,15105570,11088422];for(let x=0;x<u;x++){const w=r(x);v.push({bx:w?w.x:-6+(n()-.5)*30,bz:w?w.z:2+(n()-.5)*26,speed:.35+n()*.4,phase:n()*6.28,sway:.4+n()*.7,spin:1+n()*2}),p.setHex(m[Math.floor(n()*m.length)]),_.setColorAt(x,p)}_.instanceColor.needsUpdate=!0,e.add(_);const M=new fe;function y(x){const w=.5+Xn.gust(x),S=a.attributes.position;for(let T=0;T<o;T++){const g=c[T];S.array[T*3]+=Math.sin(x*.3+g)*.0012*(.5+w),S.array[T*3+1]+=(.0016+Math.sin(x*.5+g*2)*8e-4)*(.5+w),S.array[T*3+1]>6.5&&(S.array[T*3+1]=.2)}S.needsUpdate=!0;for(let T=0;T<u;T++){const g=v[T];let A=4.8-(x*g.speed*(.6+w)+g.phase)%4.6;const C=g.bx+Math.sin(x*.9+g.phase)*g.sway*(.6+w),P=g.bz+Math.cos(x*.7+g.phase*1.3)*g.sway*.7;M.position.set(C,A,P),M.rotation.set(x*g.spin+g.phase,g.phase,x*g.spin*.7),M.scale.setScalar(1),M.updateMatrix(),_.setMatrixAt(T,M.matrix)}_.instanceMatrix.needsUpdate=!0}return y(.01),{group:e,update:y}}const hu={type:"change"},Ac={type:"start"},Sd={type:"end"},co=new Uo,uu=new ci,Wv=Math.cos(70*$e.DEG2RAD),Xe=new O,pn=2*Math.PI,be={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Na=1e-6;class Xv extends x0{constructor(t,e=null){super(t,e),this.state=be.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ds.ROTATE,MIDDLE:Ds.DOLLY,RIGHT:Ds.PAN},this.touches={ONE:Cs.ROTATE,TWO:Cs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new Bn,this._lastTargetPosition=new O,this._quat=new Bn().setFromUnitVectors(t.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Uh,this._sphericalDelta=new Uh,this._scale=1,this._panOffset=new O,this._rotateStart=new ot,this._rotateEnd=new ot,this._rotateDelta=new ot,this._panStart=new ot,this._panEnd=new ot,this._panDelta=new ot,this._dollyStart=new ot,this._dollyEnd=new ot,this._dollyDelta=new ot,this._dollyDirection=new O,this._mouse=new ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qv.bind(this),this._onPointerDown=Yv.bind(this),this._onPointerUp=Kv.bind(this),this._onContextMenu=e1.bind(this),this._onMouseWheel=$v.bind(this),this._onKeyDown=Qv.bind(this),this._onTouchStart=jv.bind(this),this._onTouchMove=t1.bind(this),this._onMouseDown=Zv.bind(this),this._onMouseMove=Jv.bind(this),this._interceptControlDown=n1.bind(this),this._interceptControlUp=i1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=be.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(hu),this.update(),this.state=be.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Xe.copy(e).sub(this.target),Xe.applyQuaternion(this._quat),this._spherical.setFromVector3(Xe),this.autoRotate&&this.state===be.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=pn:n>Math.PI&&(n-=pn),s<-Math.PI?s+=pn:s>Math.PI&&(s-=pn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Xe.setFromSpherical(this._spherical),Xe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Xe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Xe.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new O(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Xe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(co.origin.copy(this.object.position),co.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(co.direction))<Wv?this.object.lookAt(this.target):(uu.setFromNormalAndCoplanarPoint(this.object.up,this.target),co.intersectPlane(uu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Na||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Na||this._lastTargetPosition.distanceToSquared(this.target)>Na?(this.dispatchEvent(hu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?pn/60*this.autoRotateSpeed*t:pn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Xe.setFromMatrixColumn(e,0),Xe.multiplyScalar(-t),this._panOffset.add(Xe)}_panUp(t,e){this.screenSpacePanning===!0?Xe.setFromMatrixColumn(e,1):(Xe.setFromMatrixColumn(e,0),Xe.crossVectors(this.object.up,Xe)),Xe.multiplyScalar(t),this._panOffset.add(Xe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Xe.copy(s).sub(this.target);let r=Xe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ot,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Yv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function qv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Kv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Sd),this.state=be.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Zv(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ds.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=be.DOLLY;break;case Ds.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=be.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=be.ROTATE}break;case Ds.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=be.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=be.PAN}break;default:this.state=be.NONE}this.state!==be.NONE&&this.dispatchEvent(Ac)}function Jv(i){switch(this.state){case be.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case be.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case be.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function $v(i){this.enabled===!1||this.enableZoom===!1||this.state!==be.NONE||(i.preventDefault(),this.dispatchEvent(Ac),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Sd))}function Qv(i){this.enabled!==!1&&this._handleKeyDown(i)}function jv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Cs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=be.TOUCH_ROTATE;break;case Cs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=be.TOUCH_PAN;break;default:this.state=be.NONE}break;case 2:switch(this.touches.TWO){case Cs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=be.TOUCH_DOLLY_PAN;break;case Cs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=be.TOUCH_DOLLY_ROTATE;break;default:this.state=be.NONE}break;default:this.state=be.NONE}this.state!==be.NONE&&this.dispatchEvent(Ac)}function t1(i){switch(this._trackPointer(i),this.state){case be.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case be.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case be.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case be.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=be.NONE}}function e1(i){this.enabled!==!1&&i.preventDefault()}function n1(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function i1(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function s1(i){const t=new mn(45,window.innerWidth/window.innerHeight,.3,160);t.position.set(12.5,7,15.5);const e=new Xv(t,i.domElement);e.target.set(0,2.2,1),e.enableDamping=!0,e.dampingFactor=.06,e.minDistance=5,e.maxDistance=48,e.maxPolarAngle=1.45,e.update();function n(){t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)}return window.addEventListener("resize",n),{camera:t,controls:e,onResize:n}}const r1=20260911,Ki=[{name:"hero",cx:0,cz:-1,w:9,d:7,kind:"hero"},{name:"A",cx:-10.5,cz:-1,w:6.5,d:6,kind:"home"},{name:"B",cx:9.8,cz:-.5,w:6,d:6.5,kind:"home"},{name:"shop1",cx:14,cz:13.5,w:7,d:5,kind:"shop"},{name:"shop2",cx:-13,cz:13.5,w:6.5,d:5,kind:"shop"},{name:"C",cx:-9,cz:-12,w:7,d:6,kind:"home"},{name:"D",cx:2,cz:-12.5,w:6.5,d:6,kind:"home"},{name:"E",cx:11.5,cz:-12,w:6,d:5.5,kind:"home"},{name:"F",cx:-19,cz:-3,w:5.5,d:6,kind:"home"},{name:"G",cx:-6,cz:21,w:6,d:5,kind:"home"},{name:"shed1",cx:19.5,cz:-4,w:3,d:2.5,kind:"shed"},{name:"shed2",cx:-20.5,cz:8,w:2.8,d:2.5,kind:"shed"}],o1={A:{seed:11,w:6.5,d:6,wallH:2.9,roofType:"kirizuma",pitch:30,facadeCols:4,doorSide:-1,engawa:.9,woodTone:.3,age:.7},B:{seed:22,w:6,d:6.5,wallH:3.3,roofType:"yosemune",pitch:32,facadeCols:3,doorSide:1,engawa:0,woodTone:.8,age:.2},shop1:{seed:33,w:7,d:5,wallH:3.4,roofType:"kirizuma",pitch:26,facadeCols:4,doorSide:0,engawa:1.4,woodTone:.6,age:.35,isShop:!0},shop2:{seed:44,w:6.5,d:5,wallH:3.2,roofType:"kirizuma",pitch:27,facadeCols:4,doorSide:0,engawa:1.2,woodTone:.4,age:.55,isShop:!0},C:{seed:55,w:7,d:6,wallH:3,roofType:"yosemune",pitch:31,facadeCols:4,doorSide:1,engawa:.9,woodTone:.5,age:.5},D:{seed:66,w:6.5,d:6,wallH:3.5,roofType:"kirizuma",pitch:33,facadeCols:3,doorSide:-1,engawa:0,woodTone:.75,age:.25},E:{seed:77,w:6,d:5.5,wallH:2.8,roofType:"kirizuma",pitch:29,facadeCols:3,doorSide:1,engawa:.8,woodTone:.35,age:.65},F:{seed:88,w:5.5,d:6,wallH:2.9,roofType:"yosemune",pitch:30,facadeCols:3,doorSide:-1,engawa:0,woodTone:.45,age:.6},G:{seed:99,w:6,d:5,wallH:3.1,roofType:"kirizuma",pitch:28,facadeCols:3,doorSide:1,engawa:.9,woodTone:.65,age:.3},shed1:{seed:111,w:3,d:2.5,wallH:2.2,roofType:"kirizuma",pitch:24,facadeCols:2,doorSide:0,engawa:0,woodTone:.2,age:.9,winLayout:[0,0]},shed2:{seed:122,w:2.8,d:2.5,wallH:2.1,roofType:"kirizuma",pitch:25,facadeCols:2,doorSide:0,engawa:0,woodTone:.25,age:.85,winLayout:[0,0]}};function a1(){for(let i=0;i<Ki.length;i++)for(let t=i+1;t<Ki.length;t++){const e=Ki[i],n=Ki[t],s=(e.w+n.w)/2+1-Math.abs(e.cx-n.cx),r=(e.d+n.d)/2+1-Math.abs(e.cz-n.cz);s>0&&r>0&&console.error(`[town] OVERLAP ${e.name}×${n.name} by ${s.toFixed(2)}×${r.toFixed(2)}m`)}}function l1(){const i=[[0,2.45,19,.55],[-8.5,.6,.55,4.2],[8.9,.6,.55,4.2],[.25,-5.05,6.4,.55],[-3.9,3.55,1.6,.7],[3.1,3.55,1.6,.7]],t=[],e=[];i.forEach(([r,o,a,l],c)=>{const h=new ye(a,l);h.rotateX(-Math.PI/2),h.translate(r,.04,o),(c<4?t:e).push(h)});const n=new ht({color:3812896,roughness:1,metalness:0});n.polygonOffset=!0,n.polygonOffsetFactor=-1,n.polygonOffsetUnits=-1;const s=new Qt;for(const r of[t,e]){const o=xn(r,!1);r.forEach(a=>a.dispose()),s.add(new it(o,n))}return s.traverse(r=>{r.isMesh&&(r.receiveShadow=!0)}),s}function c1({scene:i,heroGroup:t=null}={}){a1();const e=ti(r1),n=new Qt;n.name="town";const s=[];for(const c of Ki){if(c.kind==="hero"){t&&(t.position.set(c.cx,0,c.cz),n.add(t),s.push({name:"hero",group:t,glowMats:t.userData.glowMats||[],pos:t.position.clone()}));continue}const h={...o1[c.name],name:c.name},d=yd(h);d.group.position.set(c.cx,0,c.cz),c.kind==="shop"&&(d.group.rotation.y=Math.PI),n.add(d.group),s.push({name:c.name,params:h,group:d.group,glowMats:d.glowMats,pos:d.group.position.clone()})}const r=h1(),o=new Qt;o.name="ground_zoning";const a=new it(new ye(70,70),r.soil);a.rotation.x=-Math.PI/2,a.receiveShadow=!0,o.add(a);const l=(c,h,d,u,f,_=.02)=>{const v=new it(new ye(c,h),f);v.rotation.x=-Math.PI/2,v.position.set(d,_,u),v.receiveShadow=!0,o.add(v)};l(64,3,0,7,r.street),l(2,15,-5.9,-1.7,r.dirt),l(1.1,14.5,-5.9,-1.7,r.stonePath,.03),l(30,2,1,-7.5,r.dirt),l(26,2,-2,17.5,r.dirt),l(10,3.2,0,3.9,r.garden,.015),l(8,3,14,9.8,r.gravel,.015),l(7.5,3,-13,9.8,r.gravel,.015);{const c=new Pt(.5,.18,.3),h=64,d=new Ie(c,r.edging,h*2),u=new fe;let f=0;for(let _=0;_<h;_++)for(const v of[5.35,8.65])u.position.set(-32+_*1+(e()-.5)*.05,.09,v),u.rotation.y=(e()-.5)*.06,u.updateMatrix(),d.setMatrixAt(f++,u.matrix);d.count=f,d.receiveShadow=!0,o.add(d)}return n.add(o),n.add(d1(e)),n.add(f1(e)),n.add(l1()),n.add(p1()),n.add(m1(e)),i&&i.add(n),{group:n,houses:s,lampPositions:[[-4.2,8.9],[6.5,8.9],[15.5,8.9],[-13.5,8.9],[-5,-6.5],[8,-6.5],[-6.4,1.5]],polePositions:[[-2.5,9.3],[8.5,9.3],[19.5,9],[-15.5,9.3],[-15,-6.8]]}}function h1(){const i=(e,n=.95)=>new ht({color:e,roughness:n}),t={soil:i(6050117),street:i(9407101,.9),dirt:i(7824462),stonePath:i(10132116),garden:i(6253386,1),gravel:i(10525320),edging:i(8224120)};for(const[e,n]of Object.entries(t))e!=="edging"&&(n.map=u1(e),n.needsUpdate=!0);return t}const Ua={};function u1(i){if(Ua[i])return Ua[i];let t=0;for(const a of i)t=t*31+a.charCodeAt(0)>>>0;const e=(()=>{let a=t||1;return()=>{a|=0,a=a+1831565813|0;let l=Math.imul(a^a>>>15,1|a);return l=l+Math.imul(l^l>>>7,61|l)^l,((l^l>>>14)>>>0)/4294967296}})(),n=128,s=document.createElement("canvas");s.width=s.height=n;const r=s.getContext("2d");r.fillStyle="#ffffff",r.fillRect(0,0,n,n);for(let a=0;a<900;a++){const l=205+Math.floor(e()*50);r.fillStyle=`rgb(${l},${l},${l})`,r.globalAlpha=.5,r.fillRect(e()*n,e()*n,1+e()*2.5,1+e()*2.5)}const o=new Cn(s);return o.wrapS=o.wrapT=Os,o.repeat.set(8,8),o.colorSpace=We,Ua[i]=o,o}function d1(i,t){const e=new Qt;e.name="stone_walls";const n=[[-16.5,2.8,-7.5,2.8,1.1],[5,2.8,12.5,2.8,1.1],[-13.5,-8.6,-4.5,-8.6,1],[8,18.2,-2.5,18.2,1],[17.8,11.5,21.5,11.5,1.2]],s=new Pt(.55,.32,.4),r=new ht({color:9145222,roughness:.95}),o=[];for(const[c,h,d,u,f]of n){const _=Math.hypot(d-c,u-h),v=Math.floor(_/.58),p=Math.atan2(d-c,u-h),m=Math.max(2,Math.round(f/.33));for(let M=0;M<v;M++)for(let y=0;y<m;y++){const x=(M+.5)/v;o.push({x:c+(d-c)*x+(i()-.5)*.04,z:h+(u-h)*x,y:.16+y*.32,ry:p+(i()-.5)*.08})}for(let M=0;M<v;M++){const y=(M+.5)/v;o.push({x:c+(d-c)*y,z:h+(u-h)*y,y:.16+m*.32+.06,ry:p,cap:!0})}}const a=new Ie(s,r,o.length),l=new fe;return o.forEach((c,h)=>{l.position.set(c.x,c.y,c.z),l.rotation.set(0,c.ry,0),l.scale.set(c.cap?1.15:1,c.cap?.45:1,c.cap?1.2:1),l.updateMatrix(),a.setMatrixAt(h,l.matrix)}),a.castShadow=!1,a.receiveShadow=!0,e.add(a),e}function f1(i){const t=new Qt;t.name="fences_gates";const e=new ht({color:5916208,roughness:.85}),n=new ht({color:4141602,roughness:.85}),s={W:[],D:[]},r=(a,l,c,h,d,u,f,_=0)=>{const v=new Pt(l,c,h),p=new ue().makeRotationY(_);p.setPosition(d,u,f),v.applyMatrix4(p),a.push(v)},o=[{x1:-4.6,z1:2.8,x2:4.6,z2:2.8,gate:.5},{x1:-16,z1:.5,x2:-16,z2:5.5,gate:-1},{x1:10.2,z1:11,x2:17.8,z2:11,gate:0}];for(const a of o){const l=Math.hypot(a.x2-a.x1,a.z2-a.z1),c=Math.floor(l/.28),h=Math.atan2(a.x2-a.x1,a.z2-a.z1)+Math.PI/2;for(let d=0;d<=c;d++){const u=d/c,f=a.x1+(a.x2-a.x1)*u,_=a.z1+(a.z2-a.z1)*u;a.gate&&Math.abs(u-.5)<.09||r(s.W,.16,1.1+(i()-.5)*.06,.04,f,.62,_,h)}r(s.D,l,.09,.06,(a.x1+a.x2)/2,1.05,(a.z1+a.z2)/2,h),r(s.D,l,.09,.06,(a.x1+a.x2)/2,.35,(a.z1+a.z2)/2,h),a.gate===.5?r(s.D,1.1,1.05,.06,(a.x1+a.x2)/2+.9,.6,(a.z1+a.z2)/2+.12,h):a.gate===-1&&r(s.D,1,1,.05,a.x1+.4,.58,a.z1+2.6,h+.6)}for(const[a,l]of[["W",e],["D",n]]){if(!s[a].length)continue;const c=new it(xn(s[a],!1),l);c.castShadow=!0,c.receiveShadow=!0,t.add(c)}return t}function p1(){const i=new Qt;i.name="drainage";const t=new ht({color:3025960,roughness:.9}),e=new ht({color:1911347,roughness:.15,metalness:.6}),n=new ht({color:8224120,roughness:.95}),s=new it(new Pt(60,.1,.5),t);s.position.set(0,.015,9.05),s.receiveShadow=!0,i.add(s);const r=new it(new ye(60,.3),e);r.rotation.x=-Math.PI/2,r.position.set(0,.05,9.05),i.add(r),i.userData.waterMat=e;const o=[];for(let l=-28;l<=28;l+=4){const c=new Pt(1.2,.06,.56);c.translate(l,.09,9.05),o.push(c)}const a=new it(xn(o,!1),n);a.receiveShadow=!0,i.add(a);for(const l of[-5.9,10.5]){const c=new it(new Pt(1.6,.1,1.1),new ht({color:7033395,roughness:.8}));c.position.set(l,.12,9.05),c.castShadow=!0,c.receiveShadow=!0,i.add(c)}return i}function m1(i){const t=new Qt;t.name="stepping_stones";const e=new ht({color:9408393,roughness:.95}),n=[],s=[{x:0,z0:5.4,z1:2.6,n:4},{x:-10.5,z0:5.4,z1:2.4,n:4},{x:9.8,z0:5.4,z1:3,n:3},{x:14,z0:8.6,z1:10.8,n:3},{x:-13,z0:8.6,z1:10.8,n:3}];for(const o of s)for(let a=0;a<o.n;a++){const l=(a+.5)/o.n,c=new ge(.32+i()*.1,.36,.09,7);c.translate(o.x+(i()-.5)*.3,.045,o.z0+(o.z1-o.z0)*l),n.push(c)}const r=new it(xn(n,!1),e);return r.receiveShadow=!0,t.add(r),t}const Oa="audio/suzume.mp3",g1="audio/tsukimori-bgm.mp3",_1="Shamisen Nation (DOVA-SYNDROME)",du="Suzume",ho=19e3,Fa=14e3,fu=8e3,ir=2200,Ba=8;function wd(i,t,e){const n=e.w/2,s=e.d/2;return i>=e.cx-n&&i<=e.cx+n&&t>=e.cz-s&&t<=e.cz+s}function x1(i,t,e){if(!e)return null;for(let n=0;n<e.length;n++){const s=e[n];if(s&&wd(i,t,s))return s}return null}function v1(i,t,e,n,s){const r=s.w/2,o=s.d/2,a=s.cx-r,l=s.cx+r,c=s.cz-o,h=s.cz+o;if(i>=a&&i<=l&&t>=c&&t<=h||e>=a&&e<=l&&n>=c&&n<=h)return!0;const f=e-i,_=n-t;let v=0,p=1;if(Math.abs(f)<1e-12){if(i<a||i>l)return!1}else{let m=(a-i)/f,M=(l-i)/f;if(m>M){const y=m;m=M,M=y}if(m>v&&(v=m),M<p&&(p=M),v>p)return!1}if(Math.abs(_)<1e-12){if(t<c||t>h)return!1}else{let m=(c-t)/_,M=(h-t)/_;if(m>M){const y=m;m=M,M=y}if(m>v&&(v=m),M<p&&(p=M),v>p)return!1}return!0}function pu(i){return i<0?0:i>1?1:i}const mu=new WeakSet;function M1({camera:i=null,scene:t=null,zones:e=[]}={}){const o="inverse";let l=null,c=null,h=null,d=!1,u=null,f=!1,_=!1,v=!0,p=!1,m=!0,M=.9,y=!1,x=!1,w=.9,S=ho,T=-1,g=du,b=null;const A=new O,C=new O;function P(D){_||(_=!0,console.warn(D))}function L(){y||d||i&&l&&(i.add(l),y=!0)}function N(){try{const D=l&&l.context;if(D&&D.state==="suspended"){const G=D.resume();G&&typeof G.catch=="function"&&G.catch(()=>{})}}catch{}}function U(){try{const D=l&&l.context;return!!D&&D.state==="running"}catch{return!1}}function B(){if(d||f||!u||!c)return!1;try{return c.isPlaying||c.play(),x=!1,!0}catch{return!1}}try{l=new f0,c=new g0(l),c.setRefDistance(2.5),c.setRolloffFactor(1.6),c.setMaxDistance(55),c.setDistanceModel(o),c.setLoop(!0),c.setVolume(M),h=l.context.createBiquadFilter(),h.type="lowpass",h.frequency.value=ho,h.Q.value=.4,typeof c.setFilter=="function"&&c.setFilter(h),t&&typeof t.add=="function"&&t.add(c);try{const D=[{url:Oa,label:du},{url:g1,label:_1}],G=X=>{if(X>=D.length){f=!0,P("[audio] missing "+Oa+" (drop your file at public/"+Oa+") and no bundled fallback — radio silent");return}new Dh().load(D[X].url,ft=>{u=ft,g=D[X].label,f=!1;try{c.setBuffer(ft)}catch{}m&&v&&!p&&(L(),U()&&(N(),B()))},void 0,()=>{G(X+1)})};G(0)}catch{f=!0,P("[audio] loader unavailable — radio silent")}}catch{d=!0,f=!0,P("[audio] WebAudio unavailable — silent mode")}function z(){if(!i||!c)return T;c.getWorldPosition(A),C.setFromMatrixPosition(i.matrixWorld);const D=C.x-A.x,G=C.y-A.y,X=C.z-A.z;return Math.sqrt(D*D+G*G+X*X)}const W={source:c,loop:!0,volume:.9,refDistance:2.5,rolloffFactor:1.6,maxDistance:55,distanceModel:o,play(){return m=!0,d||f?!1:u?(L(),N(),B()):(L(),N(),!0)},pause(){if(m=!1,x=!1,!d&&c)try{c.pause()}catch{}},stop(){if(m=!1,x=!1,!d&&c)try{c.stop()}catch{}},mute(D){if(p=D!==!1,!d&&c&&p)try{c.setVolume(0)}catch{}},setVolume(D){const G=Number(D);M=Number.isFinite(G)?Math.min(1,Math.max(0,G)):M,p=!1,W.volume=M},loadCustom(D,G){if(!D||d)return!1;try{if(b&&b!==D)try{URL.revokeObjectURL(b)}catch{}return b=D,g=String(G||"Custom track").slice(0,48),f=!1,u=null,new Dh().load(D,X=>{u=X;try{c&&c.setBuffer(X)}catch{}m&&v&&!p&&(L(),N(),B())},void 0,()=>{P("[audio] could not decode custom track (mp3/m4a/ogg/wav supported by your browser)")}),!0}catch{return!1}},setEnabled(D){if(v=!!D,v)m=!0,!d&&!f&&u?(L(),N(),B()):(L(),N());else if(m=!1,x=!1,!d&&c)try{c.pause()}catch{}},state(){const D=z(),G=pu(1-(S-ir)/(ho-ir));let X=!1;try{X=!d&&!!c&&!!c.isPlaying}catch{X=!1}return{enabled:v,playing:X,track:g,missing:f,dist:D,muffleK:G}},update(D){let G=Number(D);if((!Number.isFinite(G)||G<0)&&(G=0),G>.1&&(G=.1),!i||!c)return;c.getWorldPosition(A),C.setFromMatrixPosition(i.matrixWorld);const X=C.x-A.x,ft=C.z-A.z,gt=Math.sqrt(X*X+(C.y-A.y)*(C.y-A.y)+ft*ft);T=gt;const Zt=x1(A.x,A.z,e),$t=Zt?wd(C.x,C.z,Zt):!1;let Lt=!1;if(!$t&&e)for(let _t=0;_t<e.length;_t++){const Xt=e[_t];if(!(!Xt||Xt===Zt)&&v1(C.x,C.z,A.x,A.z,Xt)){Lt=!0;break}}let J,F;if(gt>55)J=ir,F=0;else if($t)J=ho,F=1;else if(!Lt&&gt<Ba)J=Fa,F=.9;else{const _t=pu((gt-Ba)/(55-Ba));Lt?(J=fu+(ir-fu)*_t,F=.55):(J=Fa+(ir-Fa)*_t,F=1)}let Q=M*F;(!v||p)&&(Q=0);const Rt=1-Math.exp(-6*G),pt=1-Math.exp(-4*G);if(w+=(Q-w)*(G===0?1:Rt),S+=(J-S)*(G===0?1:pt),!d){try{h&&(h.frequency.value=S),c&&Math.abs(w-c.getVolume())>.002&&c.setVolume(w)}catch{}try{u&&c&&(w<.01&&(gt>55||!v||p)?c.isPlaying&&(c.pause(),x=!0):x&&v&&!p&&m&&gt<=55&&B())}catch{}}}};return W}function y1(i){if(!i||mu.has(i))return i;mu.add(i);const t=()=>{e();try{typeof i.setEnabled=="function"&&i.setEnabled(!0)}catch{}},e=()=>{try{document.removeEventListener("pointerdown",t),document.removeEventListener("keydown",t)}catch{}};try{document.addEventListener("pointerdown",t),document.addEventListener("keydown",t)}catch{}return i}function gu(i,t,e){const n=ti(i),s=document.createElement("canvas");s.width=128,s.height=256;const r=s.getContext("2d");r.fillStyle=t,r.fillRect(0,0,128,256),r.strokeStyle=e,r.lineCap="round";for(let a=0;a<3;a++){const l=34+n()*60,c=50+a*70;for(let h=0;h<4;h++)r.lineWidth=4+n()*7,r.beginPath(),r.moveTo(l-22+n()*10,c+(n()-.5)*30),r.quadraticCurveTo(l,c+(n()-.5)*34,l+22-n()*8,c+(n()-.5)*30),r.stroke();r.lineWidth=5,r.beginPath(),r.moveTo(l,c-26),r.lineTo(l+(n()-.5)*12,c+26),r.stroke()}const o=new Cn(s);return o.colorSpace=We,o}function S1({lampPositions:i=[],polePositions:t=[]}={}){const e=ti(4242),n=new Qt;n.name="details";const s=[],r={wood:new ht({color:4864552,roughness:.85}),woodD:new ht({color:3352861,roughness:.9}),iron:new ht({color:2302758,roughness:.5,metalness:.85}),bronze:new ht({color:7035443,roughness:.35,metalness:.9}),paper:new ht({color:15788245,roughness:.9}),stone:new ht({color:9276808,roughness:.95}),leaf:new ht({color:4877109,roughness:1}),indigo:new ht({color:2833502,roughness:.95,side:Ne}),cream:new ht({color:14208952,roughness:.95,side:Ne})},o={},a=(g,b,A,C,P,L=0,N=0,U=0)=>{const B=new ue().makeRotationFromEuler(new bn(N,L,U));B.setPosition(A,C,P),b.applyMatrix4(B),(o[g]||(o[g]=[])).push(b)},l=(g,b,A)=>new Pt(g,b,A),c=(g,b,A,C=8)=>new ge(g,b,A,C),h=[];for(const[g,b]of t)a("woodD",c(.11,.14,6.4),g,3.2,b),a("woodD",l(1.4,.1,.1),g,5.9,b),a("woodD",l(1.1,.09,.09),g,5.4,b),h.push(new O(g,5.9,b));const d=[],u=new ht({color:5591108,emissive:16760938,emissiveIntensity:0});i.forEach(([g,b],A)=>{a("iron",c(.06,.09,3.4),g,1.7,b),a("iron",l(.7,.07,.07),g+.3,3.35,b)});const f=[],_=(g,b,A,C)=>{const P=new Bo(.34,.035,8,20);a("iron",P.clone(),g-.45,.34,b,A),a("iron",P.clone(),g+.45,.34,b,A);const L=(N,U,B,z)=>{const W=Math.hypot(B-N,z-U),D=c(.025,.025,W,6),G=new bn(0,A,Math.atan2(z-U,B-N)-Math.PI/2+C);D.applyMatrix4(new ue().makeRotationFromEuler(G)),D.translate((N+B)/2+g,(U+z)/2,b),(o.iron||(o.iron=[])).push(D)};L(-.45,.34,0,.75),L(.45,.34,0,.75),L(0,.75,-.15,.95),L(-.45,.34,.45,.34),a("woodD",l(.28,.05,.22),g-.05,.78,b,A),a("iron",c(.02,.02,.4,6),g+.45,.95,b,0,0,Math.PI/2)};_(11.2,10.6,.2,.12),_(-10.8,10.7,-.15,-.1),_(-4.9,3.4,1.45,.14);const v=(g,b,A,C,P)=>{const L=gu(P,"#2b3c5e","#e8e0cc"),N=new it(new Pt(.9,1.8,.08),new ht({map:L,roughness:.85}));N.position.set(g,b,A),N.rotation.y=C,N.castShadow=!0,n.add(N)};v(10.6,2.6,10.9,.3,7),v(-10.2,2.5,10.9,-.25,21);for(const[g,b,A]of[[-7.2,2.9,5],[6.9,2.9,9],[5.4,-9.4,13]]){const C=gu(A,"#4a3a28","#efe6d0"),P=new it(new Pt(.34,.7,.05),new ht({map:C,roughness:.85}));P.position.set(g,2,b),n.add(P)}{const g=new it(l(1,1.9,.7),new ht({color:12071722,roughness:.4,metalness:.3}));g.position.set(17.9,.95,10.6),g.castShadow=!0,n.add(g);const b=new ht({color:1118481,emissive:12576511,emissiveIntensity:1.2,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),A=new it(new ye(.8,1.2),b);A.position.set(17.9,1,10.24),A.rotation.y=Math.PI,n.add(A),n.userData.vendGlow=b}const p=(g,b,A=.45,C=0)=>a("wood",l(A,A,A),g,A/2,b,C);p(12.6,10.7,.5,.2),p(12.6,10.7+0,.42,.5),o.wood[o.wood.length-1].translate(0,.46,0),p(-14.8,10.6,.45,-.3),p(5.2,3.6,.4,.7);for(const[g,b]of[[1.8,3.2],[-2.2,3.3],[11.9,10.5]])a("woodD",c(.16,.13,.3),g,.15,b);const m=(g,b,A)=>{a("wood",l(1.6,.08,.4),g,.45,b,A),a("woodD",l(.08,.45,.36),g-.6,.22,b,A),a("woodD",l(.08,.45,.36),g+.6,.22,b,A)};m(.5,4.4,.1),m(-9.5,3.2,-.1);const M=[];for(let g=0;g<=6;g++)M.push(new ot(.14+g/6*.1,g/6*.28));const y=new Cr(M,10);for(const[g,b]of[[-3.4,3.1],[3.2,3],[10.9,10.8],[-11.5,10.6],[2.2,4.3]])a("stone",y.clone(),g,0,b),a("leaf",new On(.2,7,6),g,.42,b);a("woodD",c(.2,.17,.5),-1.8,.25,3.5);for(let g=0;g<3;g++)a("cream",c(.015,.09,.9,6),-1.85+g*.06,.7,3.5+(g-1)*.05);for(const g of[-10,2,12])a("iron",l(.8,.04,.5),g,.1,9.05);const x=(g,b)=>{const A=Math.sin(g*127.1+b*311.7)*43758.5453;return A-Math.floor(A)};for(const[g,b]of[[5.6,.9],[-5.6,.9]])for(let A=0;A<14;A++){const C=Math.floor(A/5),P=A%5,L=l(.85+x(A,g)*.2,.15,.15),N=new ue().makeRotationY((x(A,b)-.5)*.2);N.setPosition(g+(x(A,3)-.5)*.06,.1+C*.16,b+(P-2)*.17),L.applyMatrix4(N),(o.wood||(o.wood=[])).push(L)}{const g=new On(.15,12,10),b=new ht({color:16773848,emissive:16757854,emissiveIntensity:1.2,roughness:.6});for(const[A,C]of[[-3.9,8.9],[6.8,8.9]]){const P=new it(g,b);P.position.set(A,3.02,C),n.add(P)}}for(const[g,b]of[[13.5,"indigo"],[14.5,"cream"]]){const A=new ye(.5,.9,1,2);A.translate(0,-.45,0);const C=new it(A,r[b]);C.position.set(g,2.6,10.8),C.rotation.y=g<14?.15:-.12,C.castShadow=!0,n.add(C),s.push({mesh:C,phase:x(g,1)*6.28,amp:.08})}{const g=new Qn(.32,1),b=g.attributes.position;for(let P=0;P<b.count;P++){const L=1+.22*Math.sin(P*3.7)+.12*Math.sin(P*9.1+1.3);b.setXYZ(P,b.getX(P)*L,b.getY(P)*L*.72,b.getZ(P)*L)}g.computeVertexNormals();const A=new Ie(g,r.stone,5),C=new fe;[[-8.5,11.5],[-3.5,14.2],[-7.8,14.5],[-3.8,11.3],[-6,11]].forEach(([P,L],N)=>{C.position.set(P,.1,L),C.rotation.set(0,x(N,21)*6.28,0);const U=.7+x(N,22)*.9;C.scale.set(U,U*.8,U),C.updateMatrix(),A.setMatrixAt(N,C.matrix)}),A.instanceMatrix.needsUpdate=!0,A.castShadow=!0,A.receiveShadow=!0,n.add(A)}{const g=new ye(.36,.3);g.translate(0,.15,0);const b=new Ie(g,r.leaf,24),A=new fe,C=[[-4.6,3.3],[-2,3.3],[1.5,3.3],[4.6,3.3],[-5.15,.9],[5.15,.9],[13,10.6],[15,10.6],[-14,10.6],[-12,10.6],[-6.2,1],[7.2,5.2]];let P=0;for(let L=0;L<12;L++)for(let N=0;N<2;N++){A.position.set(C[L][0],.02,C[L][1]),A.rotation.set(0,N*Math.PI/2+x(L,31)*.6,0);const U=.7+x(L,32+N)*.7;A.scale.set(U,U,U),A.updateMatrix(),b.setMatrixAt(P++,A.matrix)}b.instanceMatrix.needsUpdate=!0,b.castShadow=!1,b.receiveShadow=!1,n.add(b)}{const A=new it(new Pt(.62,.9,.62),r.wood);A.position.set(15.5,.45,14.5),A.castShadow=!0,n.add(A);const C=new it(new Pt(.55,.35,.3),r.wood);C.position.set(15.5,1.075,14.5),C.castShadow=!0,n.add(C);const P=new it(new Pt(.5,.28,.02),r.iron);P.position.set(15.5,1.075,14.5-.16),n.add(P);const L=new ge(.025,.025,.03,10);for(const z of[-.12,-.05]){const W=new it(L,r.bronze);W.rotation.x=Math.PI/2,W.position.set(15.5+z,.99,14.5-.18),n.add(W)}const N=new it(new ge(.008,.012,.7,6),r.bronze);N.position.set(15.5+.18,1.55,14.5+.05),N.rotation.z=-.35,N.rotation.x=.12,n.add(N);const U=new ht({color:2102280,emissive:16757854,emissiveIntensity:1,roughness:.6}),B=new it(new Pt(.3,.045,.012),U);B.position.set(15.5+.05,1.16,14.5-.175),n.add(B),n.userData.radioGlow=U,n.userData.radioPos=new O(15.5,1.15,14.5),n.userData.radioMeshes=[A,C,P,B]}const w=g=>r[{WOOD:"wood",wood:"wood",woodD:"woodD",iron:"iron",stone:"stone",leaf:"leaf",cream:"cream"}[g]||"wood"];for(const g of Object.keys(o)){const b=new it(xn(o[g],!1),w(g));b.castShadow=g!=="leaf",b.receiveShadow=!0,n.add(b)}i.forEach(([g,b],A)=>{const C=new it(new On(.13,10,8),A<3?u:u.clone());if(C.position.set(g+.6,3.25,b),n.add(C),d.push(C.material),A<3){const P=new bc(16760430,0,12,2);P.position.set(g+.6,3.2,b),n.add(P),f.push(P)}}),n.userData.lampGlows=d,n.userData.lampLights=f;const S=(g,b,A,C,P,L,N=0)=>{const U=new ye(C,P,1,4);U.translate(0,-P/2,0);const B=new it(U,r[L]);B.position.set(g,b,A),B.rotation.y=N,B.castShadow=!0,n.add(B),s.push({mesh:B,phase:e()*6.28,amp:.08+e()*.06})};for(let g=0;g<3;g++)S(12.4+g*.55,2.5,10.95,.45,.8,"indigo");for(let g=0;g<2;g++)S(-14.2+g*.55,2.4,10.95,.45,.7,"cream");S(1.5,2.2,2.62,.4,.6,"cream");const T=new gi({color:1118484});for(let g=0;g<h.length-1;g++){const b=h[g],A=h[g+1];if(b.distanceTo(A)>16)continue;const C=b.clone().lerp(A,.5);C.y-=.7;for(const P of[0,-.22]){const L=new xc(b.clone().add(new O(0,P,0)),C.clone().add(new O(0,P,0)),A.clone().add(new O(0,P,0))),N=new it(new yc(L,20,.015,5),T);n.add(N)}}for(const[g,b]of[[-4.9,2.9],[4.9,2.9],[10.4,10.9],[-9.9,10.9]]){const A=new it(c(.05,.07,.7,7),r.woodD);A.position.set(g,.55,b),A.castShadow=!0,n.add(A);for(let P=0;P<3;P++){const L=new it(new On(.32-P*.06,8,6),r.leaf);L.position.set(g+(e()-.5)*.2,1+P*.28,b+(e()-.5)*.2),L.scale.y=.75,L.castShadow=!0,n.add(L)}const C=new it(y.clone(),r.stone);C.position.set(g,0,b),n.add(C)}return{group:n,cloth:s,lampGlows:d,lampLights:f}}function w1(i,t,e={strength:.5}){if(!i?.cloth)return;const n=.4+(e.strength??.5);for(const s of i.cloth)s.mesh.rotation.x=Math.sin(t*2.1+s.phase)*s.amp*n}const za=["DAWN","DAY","GOLDEN","SUNSET","BLUE_HOUR","NIGHT","MOONLIT","RAIN_NIGHT","MIST_NIGHT"],_u={DAWN:{sunC:16757370,sunI:1.6,el:12,az:95,sky:[10336470,15910043],fog:13620438,hemi:.5,hemiSky:12375016,hemiGround:9072466,exp:1,lit:0,lampK:1,starK:0},DAY:{sunC:16774112,sunI:2.6,el:62,az:150,sky:[7317724,13624303],fog:13621468,hemi:.7,hemiSky:12375016,hemiGround:9072466,exp:1,lit:0,lampK:1,starK:0},GOLDEN:{sunC:16761963,sunI:2,el:18,az:235,sky:[8363204,16767392],fog:14207412,hemi:.55,hemiSky:15255968,hemiGround:6248010,exp:1.05,lit:0,lampK:1,starK:0},SUNSET:{sunC:16744013,sunI:1.4,el:6,az:262,sky:[5926824,16752228],fog:13216143,hemi:.45,hemiSky:9076672,hemiGround:4866104,exp:1.05,lit:.25,lampK:1,starK:.05},BLUE_HOUR:{sunC:8029951,sunI:.35,el:-4,az:290,sky:[1450573,12151374],fog:5922694,hemi:.35,hemiSky:4874144,hemiGround:3025448,exp:.9,lit:.8,lampK:1,starK:.3},NIGHT:{sunC:9414872,sunI:.22,el:28,az:300,sky:[395798,1055795],fog:725536,hemi:.18,hemiSky:2371676,hemiGround:658450,exp:.95,lit:1,lampK:1,starK:.9},MOONLIT:{sunC:12176639,sunI:1.1,el:48,az:40,sky:[330004,858160],fog:659746,hemi:.14,hemiSky:1713232,hemiGround:329484,exp:.85,lit:1,lampK:1,starK:1},RAIN_NIGHT:{sunC:5925514,sunI:.25,el:30,az:120,sky:[461588,1120294],fog:857119,hemi:.18,hemiSky:2765896,hemiGround:658448,exp:.8,lit:1,lampK:1.25,starK:.05},MIST_NIGHT:{sunC:6975622,sunI:.18,el:25,az:200,sky:[658708,1712168],fog:1317410,hemi:.2,hemiSky:3159615,hemiGround:790033,exp:.8,lit:1,lampK:1.1,starK:0}};function b1({renderer:i,scene:t,sun:e,hemi:n,skyMat:s=null,houses:r=[],lampGlows:o=[],lampLights:a=[],vendGlow:l=null,stars:c=null,moon:h=null}={}){let d="DAY",u="DAY",f=1,_=!1,v=0;const p=new Ft,m=new Ft,M=new Ft,y=new Ft,x=new Ft,w=new Ft,S=g("DAY"),T=g("DAY");function g(A){const C=_u[A];return{...C,sky:[...C.sky]}}function b(A,C,P){const L=S,N=T,U=p.set(L.sunC).lerp(new Ft(N.sunC),C);if(e){const G=1-(P?.dimK??0);e.color.copy(U),e.intensity=$e.lerp(L.sunI,N.sunI,C)*G;const X=$e.degToRad($e.lerp(L.el,N.el,C)),ft=$e.degToRad($e.lerp(L.az,N.az,C));e.position.set(Math.cos(X)*Math.cos(ft),Math.sin(X),Math.cos(X)*Math.sin(ft)).multiplyScalar(60)}if(m.set(L.sky[0]).lerp(new Ft(N.sky[0]),C),M.set(L.sky[1]).lerp(new Ft(N.sky[1]),C),s?.uniforms?(s.uniforms.topColor?.value.copy(m),s.uniforms.bottomColor?.value.copy(M),s.uniforms.top&&s.uniforms.top.value.copy(m),s.uniforms.mid&&s.uniforms.mid.value.copy(M),s.uniforms.bot&&s.uniforms.bot.value.copy(M).multiplyScalar(.82)):t?.background?.isColor&&t.background.copy(M),y.set(L.fog).lerp(new Ft(N.fog),C),t?.fog){t.fog.color.copy(y);const G=P?.mistK??0,X=P?.rainK??0;t.fog.near=$e.lerp(30,8,G)-X*6,t.fog.far=$e.lerp(140,45,G)-X*25}n&&(n.intensity=$e.lerp(L.hemi,N.hemi,C),L.hemiSky!==void 0&&(n.color.copy(x.set(L.hemiSky).lerp(new Ft(N.hemiSky),C)),n.groundColor.copy(w.set(L.hemiGround).lerp(new Ft(N.hemiGround),C)))),i&&(i.toneMappingExposure=$e.lerp(L.exp,N.exp,C));const B=$e.lerp(L.lit??0,N.lit??0,C),z=$e.lerp(L.lampK??1,N.lampK??1,C),W=$e.lerp(L.starK??0,N.starK??0,C),D=B;for(const G of r)for(const X of G.glowMats||[])X.emissiveIntensity=D*(G.name==="hero"?1.6:.9);for(const G of o)G.emissiveIntensity=B*2.2*z;for(const G of a)G.intensity=B*14*z;l&&(l.emissiveIntensity=.4+B*1.6),c&&(c.material.opacity=B*W),h&&(h.material.opacity=B)}return{get state(){return f>=1?u:`${d}>${u}`},get auto(){return _},set(A){const C=String(A).toUpperCase().replace(/[\s-]+/g,"_");_u[C]&&C!==u&&(Object.assign(S,g((f>=1,u))),d=f>=1?u:d,Object.assign(T,g(C)),u=C,f=0)},cycle(){this.set(za[(za.indexOf(u)+1)%za.length])},toggleAuto(){return _=!_,_},update(A,C){_&&(v+=A,v>14&&(v=0,this.cycle())),f=Math.min(1,f+A/2.5);const P=f*f*(3-2*f);b(u,P,C)}}}function E1(i){const t=new Qt;t.name="night_sky";const e=400,n=new Float32Array(e*3);for(let c=0;c<e;c++){const h=Math.random()*Math.PI*2,d=Math.random()*Math.PI*.45+.08,u=120;n[c*3]=Math.cos(h)*Math.cos(d)*u,n[c*3+1]=Math.sin(d)*u,n[c*3+2]=Math.sin(h)*Math.cos(d)*u}const s=new we;s.setAttribute("position",new Be(n,3));const r=new Mr(s,new Bs({color:13623551,size:.7,transparent:!0,opacity:0,depthWrite:!1}));r.frustumCulled=!1,t.add(r);const o=new it(new Di(3,24),new gi({color:15265791,transparent:!0,opacity:0,fog:!1}));o.position.set(-60,42,-80),o.lookAt(0,0,0),t.add(o);const a=new Bl(10336488,0);a.position.copy(o.position),t.add(a),t.userData.setMoon=c=>{a.intensity=c*.35};const l=t.userData.setMoon;return i.add(t),{stars:r,moon:o,moonLight:a,setMoon:l}}function T1(i){const t=i<0?0:i>1?1:i;return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}const Me=[{n:"01 MOON FOREST ESTABLISHING",pos:[-28,14,-22],tgt:[0,2,4],fov:55,rail:{to:[-24,13,-18],tgtTo:null,period:14},mood:null,focus:{target:[0,2,4],dist:38},intent:"Moonlit canopy edge first, then eye drops to the lit village bowl."},{n:"02 LANTERN ALLEY",pos:[-5.9,1.6,-8],tgt:[-5.9,1.9,6],fov:50,rail:{to:[-5.9,1.6,1.5],tgtTo:[-5.9,1.9,8],period:12},mood:null,focus:{target:[-5.9,1.9,2],dist:10},intent:"Nearest lantern glow first, then eye travels down the alley line."},{n:"03 ROOF REVEAL",pos:[.5,5.4,1],tgt:[0,4,-1.2],fov:40,rail:{to:[3.8,6.6,6.8],tgtTo:[0,3.2,-1],period:12},mood:null,focus:{target:[0,4,-1],dist:3.5},intent:"Hero tile texture first, then rail pull reveals the ridge line."},{n:"04 MAPLE FOREGROUND",pos:[-4.9,2.7,5.6],tgt:[.5,2,-1.2],fov:45,rail:{to:[-3.6,2.6,5.2],tgtTo:null,period:10},mood:null,focus:{target:[.5,2,-1.2],dist:8.5},intent:"Red maple leaves first framing the edge, then hero house snaps into view."},{n:"05 POND",pos:[-8.6,1.7,13.4],tgt:[-4.2,.8,12.4],fov:50,rail:{to:[-3.4,1.7,13.4],tgtTo:[-6.5,.8,12.8],period:14},mood:null,focus:{target:[-6,.8,13],dist:4.5},intent:"Pond ripple highlight first, then lateral drift carries eye across reflections."},{n:"06 RAIN STREET",pos:[2.2,1.7,6.6],tgt:[-5,1.9,8.6],fov:50,rail:{to:[-1.5,1.7,6.4],tgtTo:null,period:11},mood:{time:"RAIN_NIGHT",wx:"rainy"},focus:{target:[-4.2,1.8,8.9],dist:7.5},intent:"Wet lamp halo first, then eye slides along the rain-streaked street."},{n:"07 MACHIYA ENTRANCE",pos:[6.6,1.9,6.2],tgt:[-.5,1.6,-.5],fov:40,rail:{to:[4.8,1.8,5],tgtTo:null,period:10},mood:null,focus:{target:[0,1.6,0],dist:9},intent:"Lattice doorway warmth first, then 3/4 facade and tiles read as one."},{n:"08 GARDEN PASSAGE",pos:[2.6,1.1,-6.8],tgt:[-2.2,1.3,-1.5],fov:50,rail:{to:[.8,1.1,-4.8],tgtTo:null,period:11},mood:null,focus:{target:[-2,1.2,-2],dist:6},intent:"Near planting leaves first, then low passage funnels eye to the court."},{n:"09 GOLDEN HOUR",pos:[-18,3.4,7.2],tgt:[12,2,7],fov:32,rail:{to:[-14,3,7.4],tgtTo:null,period:14},mood:{time:"GOLDEN",wx:"clear"},focus:{target:[0,2,7],dist:20},intent:"Long warm street axis first, then compressed facades glow edge to edge."},{n:"10 BLUE HOUR",pos:[12.5,5.5,-6],tgt:[0,2,4],fov:40,rail:{to:[9.5,5,-3.5],tgtTo:null,period:13},mood:{time:"BLUE_HOUR",wx:"clear"},focus:{target:[0,2,4],dist:16},intent:"Cool sky gradient first, then village lights detach from dusk."},{n:"11 MOONLIT ROOFLINE",pos:[14.5,4.6,10.5],tgt:[-20,5,-20],fov:24,rail:{to:[12.5,4.4,9],tgtTo:null,period:15},mood:{time:"MOONLIT",wx:"clear"},focus:{target:[-5,4.5,-6],dist:32},intent:"Stacked roof silhouettes first, then eye runs the telephoto line toward moon azimuth."},{n:"12 FINAL REVEAL",pos:[18,9.5,18.5],tgt:[-8,3,-8],fov:45,rail:{to:[15,8.5,16],tgtTo:null,period:16},mood:{time:"MIST_NIGHT",wx:"misty"},focus:{target:[-4,2.5,0],dist:34},intent:"Whole village bowl and moon glow first, then mist softens the far treeline."}];function A1(i,t){let e=0,n="orbit",s=!1,r=0;const o=9;let a=0,l=null,c=null;const h=new O().fromArray(Me[0].pos);new O().fromArray(Me[0].pos);const d=new O().fromArray(Me[0].tgt);new O().fromArray(Me[0].tgt),Me[0].fov;function u(y,x){return x.fromArray(Me[y].pos)}function f(y,x,w){w.fromArray(Me[y].pos);const S=Me[y].rail;if(S&&S.to){const T=S.to[0],g=S.to[1],b=S.to[2];w.set(w.x+(T-Me[y].pos[0])*x,w.y+(g-Me[y].pos[1])*x,w.z+(b-Me[y].pos[2])*x)}return w}function _(y,x){return x.fromArray(Me[y].tgt)}function v(y,x,w){w.fromArray(Me[y].tgt);const S=Me[y].rail;return S&&S.tgtTo&&w.set(w.x+(S.tgtTo[0]-Me[y].tgt[0])*x,w.y+(S.tgtTo[1]-Me[y].tgt[1])*x,w.z+(S.tgtTo[2]-Me[y].tgt[2])*x),w}function p(y,x=2.5){const w=Me.length,S=(y%w+w)%w;c={fp:i.position.clone(),tp:new O().fromArray(Me[S].pos),ft:t?t.target.clone():new O().fromArray(Me[S].tgt),tt:new O().fromArray(Me[S].tgt),ff:i.fov,tf:Me[S].fov,t:0,dur:Math.max(.01,x)},e=S,r=0,a=0}function m(y){u(y,i.position),t&&(_(y,t.target),t.update()),i.fov=Me[y].fov,i.updateProjectionMatrix()}const M={get idx(){return e},get mode(){return n},get label(){return n==="orbit"?"orbit":Me[e].n},get count(){return Me.length},get names(){return Me.map(y=>y.n)},setMode(y){return n=String(y),r=0,t&&(t.enabled=n!=="cine"),n==="cine"&&m(e),n},goTo(y,x=2.5,w=!1){const S=Me.length,T=(y%S+S)%S;if(p(T,x),w&&l&&Me[T].mood)try{l(Me[T].mood)}catch{}return e},onMood(y){return typeof y=="function"&&(l=y),M},next(){return M.goTo(e+1,2.5,!1)},prev(){return M.goTo(e-1,2.5,!1)},toggleAdvance(){return s=!s,r=0,s},update(y){const x=Math.min(Math.max(y||0,0),.1);if(a+=x,n==="free"||n==="orbit"){let g=!1;try{g=!!(window.__explore&&window.__explore.on)}catch{}t&&!g&&t.update();return}if(s&&!c&&(r+=x,r>=o&&M.next()),c){c.t+=x;const g=T1(c.t/c.dur);i.position.lerpVectors(c.fp,c.tp,g);const b=new O().lerpVectors(c.ft,c.tt,g);t&&t.target.copy(b),i.fov=c.ff+(c.tf-c.ff)*g,i.updateProjectionMatrix(),c.t>=c.dur&&(c=null,a=0),t&&t.update();return}const w=Me[e].rail&&Me[e].rail.period||12,S=.5+.5*Math.sin(a/w*Math.PI*2-Math.PI/2);f(e,S,h),v(e,S,d),i.position.copy(h),t&&t.target.copy(d);const T=Me[e].fov;Math.abs(i.fov-T)>.01&&(i.fov+=(T-i.fov)*Math.min(1,x*2),i.updateProjectionMatrix()),t&&t.update()}};return M}function R1(i,t){const e=[],n=[],s=new _0,r=new ot;let o=0,a=0,l=0,c=0;function h(v,p){const m=t.getBoundingClientRect();r.set((v-m.left)/m.width*2-1,-((p-m.top)/m.height)*2+1),s.setFromCamera(r,i);const M=[];for(const w of e)M.push(w.node);for(const w of n)M.push(...w.meshes);const y=s.intersectObjects(M,!0);if(!y.length)return null;let x=y[0].object;for(const w of e){let S=x;for(;S;){if(S===w.node)return{kind:"slide",item:w};S=S.parent}}for(const w of n)for(const S of w.meshes){let T=x;for(;T;){if(T===S)return{kind:"action",item:w};T=T.parent}}return null}function d(v,p){if(!v)return null;const m={node:v,closed:v.position.x,open:p,t:0,target:0};return e.push(m),m}function u(v,p){!v||!v.length||typeof p!="function"||n.push({meshes:v.slice(),fn:p})}try{t.addEventListener("pointerdown",v=>{o=v.clientX,a=v.clientY,l=performance.now()}),t.addEventListener("pointerup",v=>{if(Math.hypot(v.clientX-o,v.clientY-a)>6||performance.now()-l>400)return;let m=null;try{m=h(v.clientX,v.clientY)}catch{m=null}if(m)if(m.kind==="slide")m.item.target=m.item.target>.5?0:1;else try{m.item.fn()}catch{}}),t.addEventListener("pointermove",v=>{const p=performance.now();if(p-c<120)return;c=p;let m=null;try{m=h(v.clientX,v.clientY)}catch{m=null}try{t.style.cursor=m?"pointer":""}catch{}})}catch{}function f(v){let p=Number(v);(!Number.isFinite(p)||p<0)&&(p=0),p>.1&&(p=.1);const m=1-Math.exp(-3*p||1e-4);for(const M of e){M.t+=(M.target-M.t)*(p===0?1:m),Math.abs(M.target-M.t)<.002&&(M.t=M.target);const y=M.t*M.t*(3-2*M.t);M.node.position.x=M.closed+(M.open-M.closed)*y}}return{addSlide:d,onTap:u,update:f,get count(){return e.length+n.length}}}const xu=1.6,C1=3.4;function P1(i,t,e={}){const n=typeof e.heightFn=="function"?e.heightFn:()=>0,s=Array.isArray(e.solids)?e.solids:[];let r=!1,o=0,a=0;const l=new O(0,xu,10),c={},h=new O,d=new O,u=new O;let f=-1,_=-1,v=0,p=0,m=0,M=0,y=0,x=0,w=0,S=0,T=!1,g=null;function b(U,B){let z=0;try{z=n(U,B)}catch{z=0}return(Number.isFinite(z)?z:0)+xu}function A(U){for(const B of s){const z=B.x0-.35,W=B.x1+.35,D=B.z0-.35,G=B.z1+.35;if(U.x>z&&U.x<W&&U.z>D&&U.z<G){const X=U.x-z,ft=W-U.x,gt=U.z-D,Zt=G-U.z,$t=Math.min(X,ft,gt,Zt);$t===X?U.x=z:$t===ft?U.x=W:$t===gt?U.z=D:U.z=G}}}function C(U,B){g||(g=document.createElement("div"),g.style.cssText="position:fixed;width:96px;height:96px;border-radius:50%;border:2px solid rgba(255,255,255,.35);background:rgba(255,255,255,.06);z-index:30;pointer-events:none;display:none;",document.body.appendChild(g)),g.style.display="block",g.style.left=U-48+"px",g.style.top=B-48+"px"}function P(){try{g&&(g.style.display="none")}catch{}}function L(U,B){return r=!!U,r?(B&&(l.set(B.x??0,0,B.z??10),o=B.yaw??0,a=0),l.y=b(l.x,l.z),i.position.copy(l),i.rotation.order="YXZ",i.rotation.set(a,o,0)):P(),r}try{window.addEventListener("keydown",D=>{c[D.code]=!0}),window.addEventListener("keyup",D=>{c[D.code]=!1});let U=-1,B=0,z=0;t.addEventListener("pointerdown",D=>{r&&(D.pointerType==="touch"?D.clientX<window.innerWidth/2&&f<0?(f=D.pointerId,v=m=D.clientX,p=M=D.clientY,C(v,p)):_<0&&(_=D.pointerId,y=w=D.clientX,x=S=D.clientY,T=!0):U<0&&(U=D.pointerId,B=D.clientX,z=D.clientY))});const W=D=>{D.pointerId===f&&(f=-1,P()),D.pointerId===_&&(_=-1,T=!1),D.pointerId===U&&(U=-1)};window.addEventListener("pointerup",W),window.addEventListener("pointercancel",W),window.addEventListener("pointermove",D=>{r&&(D.pointerId===f?(m=D.clientX,M=D.clientY):D.pointerId===_&&T?(o-=(D.clientX-w)*.0042,a-=(D.clientY-S)*.0042,a=Math.max(-1.48,Math.min(1.48,a)),w=D.clientX,S=D.clientY):D.pointerId===U&&D.buttons&&(o-=(D.clientX-B)*.0042,a-=(D.clientY-z)*.0042,a=Math.max(-1.48,Math.min(1.48,a)),B=D.clientX,z=D.clientY))})}catch{}function N(U){if(!r)return;let B=Number(U);(!Number.isFinite(B)||B<0)&&(B=0),B>.1&&(B=.1);let z=0,W=0;(c.KeyW||c.ArrowUp)&&(W+=1),(c.KeyS||c.ArrowDown)&&(W-=1),(c.KeyA||c.ArrowLeft)&&(z-=1),(c.KeyD||c.ArrowRight)&&(z+=1),f>=0&&(z+=(m-v)/40,W-=(M-p)/40);const D=Math.hypot(z,W);D>1&&(z/=D,W/=D),h.set(-Math.sin(o),0,-Math.cos(o)),d.set(-h.z,0,h.x),u.set(0,0,0).addScaledVector(h,W).addScaledVector(d,z),u.lengthSq()>0&&(u.normalize().multiplyScalar(C1*B),l.x+=u.x,l.z+=u.z,A(l));const G=b(l.x,l.z);l.y+=(G-l.y)*Math.min(1,B*10+(B===0?1:0)),i.position.copy(l),i.rotation.order="YXZ";const X=1-Math.exp(-9*(B||.016));i.rotation.y+=(o-i.rotation.y)*X,i.rotation.x+=(a-i.rotation.x)*X,i.rotation.z=0,i.fov=55,i.updateProjectionMatrix()}return{update:N,setEnabled:L,get enabled(){return r}}}function D1(i){i=i||{};var t=i.daytime||{},e=i.weather||{},n=i.cine||{},s=i.hudEl||null,r=i.audio||null,o=["DAWN","DAY","GOLDEN","SUNSET","BLUE_HOUR","NIGHT","MOONLIT","RAIN_NIGHT","MIST_NIGHT"],a={DAWN:"DAWN",DAY:"DAY",GOLDEN:"GOLDEN",SUNSET:"SUNSET",BLUE_HOUR:"BLUE",NIGHT:"NIGHT",MOONLIT:"MOON",RAIN_NIGHT:"RAIN",MIST_NIGHT:"MIST"},l=["clear","windy","rainy","misty","snow"],c={clear:"CLEAR",windy:"WINDY",rainy:"RAIN",misty:"MIST",snow:"SNOW"},h=["low","medium","high","cinematic"],d={low:"LOW",medium:"MED",high:"HIGH",cinematic:"CINE"},u={low:"off",medium:"off",high:"off",cinematic:"high"},f="20260911";function _(nt){return typeof nt=="function"?nt():nt}function v(nt,Dt){try{return nt==null?Dt:String(nt)}catch{return Dt}}function p(nt,Dt,jt){var he=document.createElement(nt);return Dt&&(he.className=Dt),jt!=null&&(he.textContent=jt),he}function m(nt,Dt){try{nt.addEventListener("click",function(jt){try{jt.stopPropagation()}catch{}try{Dt()}catch{}})}catch{}}var M=!1;try{M=window.innerWidth<700}catch{M=!0}var y=M,x=!1,w="time",S=M?"medium":"high",T=!0,g=!1,b=!1,A="",C="",P=0,L=!1;try{L=/[?&]dev=1\b/.test(window.location.search||"")}catch{L=!1}var N='.tsuki-root{position:fixed;inset:0;z-index:20;pointer-events:none;font-family:system-ui,-apple-system,"Hiragino Sans","Noto Sans JP",sans-serif;color:#f2efe6;}.tsuki-root button,.tsuki-root input,.tsuki-l1,.tsuki-l2{pointer-events:auto;}.tsuki-l1{position:fixed;top:calc(env(safe-area-inset-top,0px) + 12px);right:calc(env(safe-area-inset-right,0px) + 12px);background:rgba(9,11,18,.55);-webkit-backdrop-filter:blur(18px) saturate(1.4);backdrop-filter:blur(18px) saturate(1.4);border:1px solid rgba(255,255,255,.14);border-radius:14px;box-shadow:0 4px 18px rgba(0,0,0,.35);padding:8px 10px;min-width:172px;max-width:62vw;display:flex;align-items:center;gap:8px;}.tsuki-title{font-size:12px;letter-spacing:.22em;font-weight:650;white-space:nowrap;}.tsuki-title .jp{font-weight:400;opacity:.75;letter-spacing:.35em;margin-left:6px;}#du-state{font-size:11px;letter-spacing:.08em;opacity:.85;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.tsuki-chev{margin-left:auto;min-width:44px;min-height:44px;border-radius:10px;border:1px solid rgba(255,255,255,.16);background:rgba(255,255,255,.07);color:#f2efe6;font-size:15px;line-height:1;}.tsuki-l2{position:fixed;top:calc(env(safe-area-inset-top,0px) + 96px);right:calc(env(safe-area-inset-right,0px) + 12px);width:300px;max-height:calc(100vh - 130px);overflow-y:auto;-webkit-overflow-scrolling:touch;background:rgba(9,11,18,.72);-webkit-backdrop-filter:blur(18px) saturate(1.4);backdrop-filter:blur(18px) saturate(1.4);border:1px solid rgba(255,255,255,.12);border-radius:16px;box-shadow:0 8px 28px rgba(0,0,0,.45);padding:6px 6px calc(env(safe-area-inset-bottom,0px) + 8px);}.tsuki-sec{border-top:1px solid rgba(255,255,255,.08);}.tsuki-sec:first-child{border-top:none;}.tsuki-sec-head{display:flex;width:100%;min-height:44px;align-items:center;background:none;border:none;color:#f2efe6;font-size:11px;letter-spacing:.24em;padding:6px 10px;}.tsuki-sec-head .dot{width:6px;height:6px;border-radius:50%;background:#c8a86a;margin-right:8px;opacity:.9;}.tsuki-sec-head .st{margin-left:auto;opacity:.55;font-size:10px;letter-spacing:.1em;}.tsuki-sec-body{padding:2px 8px 12px;display:none;}.tsuki-sec.open .tsuki-sec-body{display:block;}.tsuki-row{display:flex;flex-wrap:wrap;gap:6px;}.tsuki-seg{flex:1 1 30%;min-height:44px;min-width:44px;border-radius:9px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);color:#f2efe6;font-size:11px;letter-spacing:.06em;}.tsuki-seg.on{background:rgba(200,168,106,.22);border-color:rgba(200,168,106,.65);}.tsuki-shotname{font-size:17px;letter-spacing:.04em;margin:2px 2px 0;font-weight:650;}.tsuki-mood{font-size:11px;letter-spacing:.2em;opacity:.7;margin:2px;}.tsuki-counter{font-size:11px;letter-spacing:.14em;opacity:.55;margin:0 2px 8px;}.tsuki-trans{display:flex;gap:6px;margin-bottom:8px;}.tsuki-trans button{flex:1;min-height:44px;border-radius:9px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);color:#f2efe6;font-size:12px;}.tsuki-present-btn{width:100%;min-height:44px;border-radius:9px;border:1px solid rgba(200,168,106,.6);background:rgba(200,168,106,.14);color:#f2efe6;font-size:11px;letter-spacing:.22em;margin-bottom:8px;}.tsuki-l3{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:6px;}.tsuki-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px;}.tsuki-grid button{min-height:44px;border-radius:8px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04);color:#f2efe6;font-size:11px;text-align:left;padding:0 10px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.tsuki-grid button.on{background:rgba(200,168,106,.22);border-color:rgba(200,168,106,.65);}.tsuki-track{font-size:12px;margin:2px 2px 8px;opacity:.9;}.tsuki-vol{display:flex;align-items:center;gap:8px;margin:0 2px 6px;}.tsuki-vol input{flex:1;min-height:44px;}.tsuki-note{font-size:11px;line-height:1.5;opacity:.65;margin:4px 2px;font-family:ui-monospace,Menlo,monospace;}.tsuki-about{font-size:11px;line-height:1.9;letter-spacing:.18em;opacity:.8;padding:2px;}.tsuki-root.tsuki-present .tsuki-l1,.tsuki-root.tsuki-present .tsuki-l2{display:none;}.tsuki-anim{transition:opacity .22s ease-out,transform .22s ease-out;}.tsuki-dev{position:fixed;right:calc(env(safe-area-inset-right,0px) + 10px);bottom:calc(env(safe-area-inset-bottom,0px) + 10px);z-index:21;pointer-events:none;background:rgba(0,0,0,.72);border:1px solid rgba(255,255,255,.14);border-radius:8px;padding:8px 10px;font-family:ui-monospace,Menlo,monospace;font-size:10.5px;line-height:1.65;color:#cfe3cf;white-space:pre;max-width:70vw;overflow:hidden;}@media (max-width:700px) and (orientation:portrait){.tsuki-l2{top:auto;bottom:0;right:0;left:0;width:auto;border-radius:16px 16px 0 0;max-height:45vh;padding-bottom:calc(env(safe-area-inset-bottom,0px) + 10px);}.tsuki-l1{max-width:calc(100vw - 24px);}}@media (max-width:700px) and (orientation:landscape){.tsuki-l2{width:278px;max-height:72vh;top:calc(env(safe-area-inset-top,0px) + 88px);}}';try{var U=document.createElement("style");U.setAttribute("data-tsuki","1"),U.textContent=N,document.head.appendChild(U)}catch{}var B=p("div","tsuki-root tsuki-anim"),z=p("div","tsuki-l1"),W=p("div",null),D=p("div","tsuki-title","TSUKIMORI");try{var G=p("span","jp","月森");D.appendChild(G)}catch{}var X=p("div",null);try{X.id="du-state"}catch{}W.appendChild(D),W.appendChild(X);var ft=p("button","tsuki-chev","▾");try{ft.setAttribute("aria-label","toggle panel")}catch{}z.appendChild(W),z.appendChild(ft),B.appendChild(z);var gt=p("div","tsuki-l2");B.appendChild(gt);var Zt={};function $t(nt,Dt){var jt=p("div","tsuki-sec"),he=p("button","tsuki-sec-head");try{he.setAttribute("aria-expanded","false")}catch{}var Ge=p("span","dot"),vn=p("span",null,Dt),zn=p("span","st","");he.appendChild(Ge),he.appendChild(vn),he.appendChild(zn);var ei=p("div","tsuki-sec-body");return jt.appendChild(he),jt.appendChild(ei),gt.appendChild(jt),Zt[nt]={sec:jt,head:he,tag:zn},m(he,function(){Lt(w===nt?"":nt)}),ei}function Lt(nt){w=nt;try{for(var Dt in Zt)if(Object.prototype.hasOwnProperty.call(Zt,Dt)){var jt=Dt===w,he=Zt[Dt];he.sec.className="tsuki-sec"+(jt?" open":"");try{he.head.setAttribute("aria-expanded",jt?"true":"false")}catch{}}}catch{}}var J=$t("time","TIME"),F=p("div","tsuki-row");J.appendChild(F);var Q={};o.forEach(function(nt){var Dt=p("button","tsuki-seg",a[nt]||nt);try{Dt.title=nt}catch{}F.appendChild(Dt),Q[nt]=Dt,m(Dt,function(){try{t.set(nt)}catch{}Ze()})});var Rt=$t("weather","WEATHER"),pt=p("div","tsuki-row");Rt.appendChild(pt);var _t={};l.forEach(function(nt){var Dt=p("button","tsuki-seg",c[nt]||nt.toUpperCase());pt.appendChild(Dt),_t[nt]=Dt,m(Dt,function(){try{e.setState(nt)}catch{}Ze()})});var Xt=$t("cine","CINEMATIC"),j=p("div","tsuki-shotname","—"),at=p("div","tsuki-mood","—"),ut=p("div","tsuki-counter","—");Xt.appendChild(j),Xt.appendChild(at),Xt.appendChild(ut);var lt=p("div","tsuki-trans"),dt=p("button",null,"◀"),zt=p("button",null,"❚❚ ADV"),Nt=p("button",null,"▶"),kt=p("button",null,"MODE"),Kt=p("button",null,"EXPLORE"),k=p("button",null,"AUTO");[dt,zt,Nt,kt,Kt,k].forEach(function(nt){lt.appendChild(nt)}),Xt.appendChild(lt);var pe=p("button","tsuki-present-btn","ENTER CINEMATIC");Xt.appendChild(pe);var re=p("div","tsuki-l3"),I=p("div","tsuki-grid");re.appendChild(I),Xt.appendChild(re);var E=[];function Y(){try{if(n&&Object.prototype.toString.call(n.names)==="[object Array]"&&n.names.length)return n.names}catch{}for(var nt=[],Dt=0;Dt<12;Dt++)nt.push("SHOT "+("0"+(Dt+1)).slice(-2));return nt}m(dt,function(){try{n.prev()}catch{}Ze()}),m(Nt,function(){try{n.next()}catch{}Ze()}),m(zt,function(){try{n.toggleAdvance()}catch{}T=!T,Ze()}),m(kt,function(){try{n.setMode(_(n.mode)==="cine"?"free":"cine")}catch{}Ze()});var Z=!1;m(Kt,function(){Z=!Z;try{window.dispatchEvent(new CustomEvent("tsuki-explore",{detail:Z}))}catch{}try{Kt.textContent=Z?"EXIT EXPLORE":"EXPLORE"}catch{}Ze()}),m(k,function(){try{t.toggleAuto()}catch{}g=!g,Ze()}),m(pe,function(){on(!x)});function tt(){try{I.textContent="",E=[];for(var nt=Y(),Dt=0;Dt<nt.length;Dt++)(function(jt,he){var Ge=p("button",null,("0"+(jt+1)).slice(-2)+" · "+he);I.appendChild(Ge),E.push(Ge),m(Ge,function(){try{n.setMode("cine")}catch{}try{n.goTo(jt,2.5,!0)}catch{}Ze()})})(Dt,v(nt[Dt],"SHOT"))}catch{}}tt();var mt=$t("audio","AUDIO"),vt=p("div","tsuki-track","♫ Suzume");mt.appendChild(vt);var et=p("div","tsuki-row"),st=p("button","tsuki-seg","MUSIC OFF");et.appendChild(st),mt.appendChild(et);var St=p("div","tsuki-vol"),Yt=p("span",null,"VOL");try{Yt.style.fontSize="11px",Yt.style.opacity=".6"}catch{}var xt=p("input",null);try{xt.type="range",xt.min="0",xt.max="100",xt.value="80",xt.setAttribute("aria-label","music volume")}catch{}St.appendChild(Yt),St.appendChild(xt),mt.appendChild(St);var Mt=p("div","tsuki-note","");if(mt.appendChild(Mt),!r){try{st.disabled=!0,xt.disabled=!0}catch{}Mt.textContent="audio offline — running silent"}m(st,function(){if(r){var nt=!b;try{var Dt=r.state?r.state():null;Dt&&typeof Dt.enabled=="boolean"&&(nt=!Dt.enabled)}catch{}try{r.setEnabled(nt)}catch{}b=nt,Ze()}});try{xt.addEventListener("input",function(){if(r)try{var nt=parseFloat(xt.value)/100;nt>=0||(nt=0),nt>1&&(nt=1),r.setVolume(nt)}catch{}})}catch{}var qt=p("button","tsuki-seg","+ ADD TRACK");try{qt.title="Play your own audio file through the village radio"}catch{}et.appendChild(qt);var Gt=null;try{Gt=document.createElement("input"),Gt.type="file",Gt.accept="audio/*,.mp3,.m4a,.ogg,.wav,.flac",Gt.style.display="none",document.body.appendChild(Gt),Gt.addEventListener("change",function(){try{var nt=Gt.files&&Gt.files[0];if(!nt||!r||typeof r.loadCustom!="function")return;var Dt=URL.createObjectURL(nt);if(r.loadCustom(Dt,nt.name.replace(/\.[^.]+$/,""))){try{r.setEnabled(!0)}catch{}b=!0}}catch{}try{Gt.value=""}catch{}Ze()})}catch{Gt=null}m(qt,function(){if(r)try{Gt&&Gt.click()}catch{}});var te=$t("quality","QUALITY"),V=p("div","tsuki-row");te.appendChild(V);var yt={};h.forEach(function(nt){var Dt=p("button","tsuki-seg",d[nt]);V.appendChild(Dt),yt[nt]=Dt,m(Dt,function(){rt(nt)})});function rt(nt){S=nt;try{window.dispatchEvent(new CustomEvent("tsuki-quality",{detail:nt}))}catch{}try{window.__post&&typeof window.__post.setQuality=="function"&&window.__post.setQuality(u[nt]||"off")}catch{}Ze()}var wt=$t("about","ABOUT"),Ct=p("div","tsuki-about","TSUKIMORI 月森 / THE MOON FOREST / LGCY STUDIOS / LGCY AI");wt.appendChild(Ct);var ct=p("div","tsuki-note","BUILD "+ne+" · checking…");wt.appendChild(ct);try{var Vt=null;try{Vt=new AbortController}catch{Vt=null}var Wt=setTimeout(function(){try{Vt&&Vt.abort()}catch{}},8e3),Ee=Vt?{signal:Vt.signal}:{};fetch("https://api.github.com/repos/krshforever/tsukimori/commits/main?per_page=1",Ee).then(function(nt){try{clearTimeout(Wt)}catch{}return nt.ok?nt.json():null}).then(function(nt){var Dt=nt&&nt.sha?String(nt.sha).slice(0,7):null,jt=(ne.split(" ")[0]||"").toLowerCase(),he;Dt?jt&&Dt.toLowerCase()===jt?he="BUILD "+ne+" · ● CURRENT":he="BUILD "+ne+" · ● UPDATE AVAILABLE ("+Dt+")":he="BUILD "+ne+" · ● OFFLINE";try{ct.textContent=he}catch{}try{window.__updateCheck={latest:Dt,current:jt,build:ne}}catch{}}).catch(function(){try{clearTimeout(Wt)}catch{}try{ct.textContent="BUILD "+ne+" · ● OFFLINE"}catch{}try{window.__updateCheck={latest:null,current:null,build:ne}}catch{}})}catch{try{ct.textContent="BUILD "+ne}catch{}}var ne="dev";try{ne="11eb663 2026-09-12"}catch{}var ke=null;if(L)try{ke=p("pre","tsuki-dev","dev…"),document.body.appendChild(ke)}catch{ke=null}function on(nt){x=!!nt;try{if(x){try{var Dt=document.getElementById("caption");Dt&&(C=Dt.style.display,Dt.style.display="none")}catch{}try{s&&(A=s.style.display,s.style.display="none")}catch{}B.className="tsuki-root tsuki-anim tsuki-present";try{pe.textContent="EXIT CINEMATIC"}catch{}}else{try{var jt=document.getElementById("caption");jt&&(jt.style.display=C||"")}catch{}try{s&&(s.style.display=A||"")}catch{}B.className="tsuki-root tsuki-anim";try{pe.textContent="ENTER CINEMATIC"}catch{}}}catch{}Ze()}function Jo(){y=!y;try{gt.style.display=y?"none":"",ft.textContent=y?"▸":"▾"}catch{}}m(ft,Jo);function qs(nt){try{if(nt&&nt.target&&nt.target.closest){var Dt=nt.target;if(Dt.closest(".tsuki-l2")||Dt.closest("input")||Dt.closest("select")||Dt.closest("textarea"))return}}catch{}on(!x)}try{window.addEventListener("dblclick",qs)}catch{}try{window.addEventListener("touchend",function(nt){try{var Dt=Date.now();Dt-P<350?(P=0,qs(nt)):P=Dt}catch{}},{passive:!0})}catch{}try{document.addEventListener("keydown",function(nt){try{nt&&nt.key==="Escape"&&x&&on(!1)}catch{}})}catch{}function Pr(){try{return v(_(t.state),"NIGHT")}catch{return"NIGHT"}}function Ks(){try{return v(_(e.state),"clear")}catch{return"clear"}}function Ze(){try{var nt=Pr(),Dt=Ks(),jt=a[nt]||nt,he=c[Dt]||String(Dt).toUpperCase(),Ge="FREE";try{Ge=v(_(n.label),"FREE")||"FREE"}catch{}var vn=0,zn=Y().length;try{vn=parseInt(n.idx,10),vn>=0||(vn=0)}catch{}try{zn=parseInt(n.count,10)||Y().length}catch{}var ei=("0"+(vn+1)).slice(-2),Ii=("0"+zn).slice(-2);try{X.textContent=jt+" · "+he+" · "+Ge}catch{}try{var Lr="";try{var ls=window.__perf?window.__perf():null;ls&&(Lr=" <"+ls.calls+"c "+ls.triangles+"t "+ls.fps+"f>")}catch{}s&&(s.textContent="TSUKIMORI 月森 — "+jt+" · "+he+" · "+Ge+" | SHOT "+ei+"/"+Ii+Lr)}catch{}try{var $o=Y();j.textContent=v($o[vn]||Ge,Ge),at.textContent=jt+" · "+he,ut.textContent="SHOT "+ei+"/"+Ii}catch{}try{for(var cs=0;cs<E.length;cs++)E[cs].className=cs===vn?"on":""}catch{}try{for(var hs in Q)Object.prototype.hasOwnProperty.call(Q,hs)&&(Q[hs].className="tsuki-seg"+(hs===nt?" on":""));for(var R in _t)Object.prototype.hasOwnProperty.call(_t,R)&&(_t[R].className="tsuki-seg"+(R===Dt?" on":""));for(var H in yt)Object.prototype.hasOwnProperty.call(yt,H)&&(yt[H].className="tsuki-seg"+(H===S?" on":""))}catch{}try{var $=v(_(n.mode),"");kt.textContent="MODE "+($?$.toUpperCase():"—"),zt.textContent=(T?"❚❚":"▶")+" ADV",k.textContent="AUTO "+(g?"ON":"OFF")}catch{}try{Zt.time&&(Zt.time.tag.textContent=jt),Zt.weather&&(Zt.weather.tag.textContent=he),Zt.cine&&(Zt.cine.tag.textContent=ei+"/"+Ii),Zt.quality&&(Zt.quality.tag.textContent=d[S]||"")}catch{}try{if(r&&typeof r.state=="function"){var q=null;try{q=r.state()}catch{q=null}q&&(typeof q.enabled=="boolean"&&(b=q.enabled),vt.textContent="♫ "+v(q.track,"Suzume")+(q.playing?" — PLAYING":""),st.textContent=b?"MUSIC ON":"MUSIC OFF",st.className="tsuki-seg"+(b?" on":""),Mt.textContent=q.missing?"drop audio/suzume.mp3 into public/audio/":"")}else r&&(st.textContent=b?"MUSIC ON":"MUSIC OFF",Mt.textContent="")}catch{}if(L&&ke){var K=[];try{var Et="n/a",It="n/a",bt="n/a";try{var At=typeof window.__perf=="function"?window.__perf():window.__perf;At&&(At.fps!==void 0&&(Et=String(At.fps)),At.calls!==void 0&&(It=String(At.calls)),At.tris!==void 0&&(bt=String(At.tris)),At.draws!==void 0&&It==="n/a"&&(It=String(At.draws)),At.triangles!==void 0&&bt==="n/a"&&(bt=String(At.triangles)))}catch{}var Ht="n/a";try{window.__post&&(typeof window.__post.quality=="string"?Ht=window.__post.quality:typeof window.__post.getQuality=="function"?Ht=String(window.__post.getQuality()):typeof window.__post.current=="string"&&(Ht=window.__post.current))}catch{}var ie="n/a",oe="n/a";try{window.__cam&&(window.__cam.pos&&window.__cam.pos.length>=3&&(ie=window.__cam.pos[0].toFixed(1)+","+window.__cam.pos[1].toFixed(1)+","+window.__cam.pos[2].toFixed(1)),window.__cam.tgt&&window.__cam.tgt.length>=3&&(oe=window.__cam.tgt[0].toFixed(1)+","+window.__cam.tgt[1].toFixed(1)+","+window.__cam.tgt[2].toFixed(1)))}catch{}K.push("FPS "+Et+"  calls "+It+"  tris "+bt);try{var Ut=null;try{Ut=window.__updateCheck||null}catch{}var _e=Ut?Ut.latest?Ut.latest.toLowerCase()===String(Ut.current||"").toLowerCase()?"current":"BEHIND("+Ut.latest+")":"offline":"";K.push("build "+ne+(_e?"  "+_e:""))}catch{try{K.push("build "+ne)}catch{}}K.push("gl WebGL2  post "+Ht+"  seed "+f),K.push("cam "+ie+"  tgt "+oe),K.push(jt+" · "+he+" · "+Ge),ke.textContent=K.join(`
`)}catch{}}}catch{}}try{document.body.appendChild(B)}catch{}try{gt.style.display=y?"none":"",ft.textContent=y?"▸":"▾"}catch{}Lt(w),Ze();var as=null;try{as=setInterval(Ze,250)}catch{}function Dr(){try{as&&clearInterval(as)}catch{}try{window.removeEventListener("dblclick",qs)}catch{}try{B&&B.parentNode&&B.parentNode.removeChild(B)}catch{}try{ke&&ke.parentNode&&ke.parentNode.removeChild(ke)}catch{}}return{root:B,refresh:Ze,destroy:Dr,setQuality:rt,setPresent:on}}const ka={geo:null};function bd(){return ka.geo||(ka.geo=new Pt(1,1,1)),ka.geo}const vu={A:[[0,0,0,4],[2,0,2,4],[0,4,2,4],[0,2,2,2]],B:[[0,0,0,4],[0,4,2,4],[0,2,2,2],[0,0,2,0],[2,4,2,2],[2,2,2,0]],C:[[2,4,0,4],[0,4,0,0],[0,0,2,0]],D:[[0,0,0,4],[0,4,2,4],[2,4,2,0],[2,0,0,0]],E:[[2,4,0,4],[0,4,0,0],[0,0,2,0],[0,2,2,2]],F:[[2,4,0,4],[0,4,0,0],[0,2,2,2]],G:[[2,4,0,4],[0,4,0,0],[0,0,2,0],[2,0,2,2],[2,2,1,2]],H:[[0,0,0,4],[2,0,2,4],[0,2,2,2]],I:[[0,4,2,4],[1,4,1,0],[0,0,2,0]],J:[[2,4,2,0],[2,0,0,0],[0,0,0,2]],K:[[0,0,0,4],[2,4,0,2],[0,2,2,0]],L:[[0,4,0,0],[0,0,2,0]],M:[[0,0,0,4],[0,4,1,2],[1,2,2,4],[2,4,2,0]],N:[[0,0,0,4],[0,4,2,0],[2,0,2,4]],O:[[0,0,0,4],[0,4,2,4],[2,4,2,0],[2,0,0,0]],P:[[0,0,0,4],[0,4,2,4],[2,4,2,2],[2,2,0,2]],Q:[[0,0,0,4],[0,4,2,4],[2,4,2,0],[2,0,0,0],[1,1,2,0]],R:[[0,0,0,4],[0,4,2,4],[2,4,2,2],[2,2,0,2],[1,2,2,0]],S:[[2,4,0,4],[0,4,0,2],[0,2,2,2],[2,2,2,0],[2,0,0,0]],T:[[0,4,2,4],[1,4,1,0]],U:[[0,4,0,0],[0,0,2,0],[2,0,2,4]],V:[[0,4,1,0],[1,0,2,4]],W:[[0,4,0,0],[0,0,1,2],[1,2,2,0],[2,0,2,4]],X:[[0,0,2,4],[0,4,2,0]],Y:[[0,4,1,2],[2,4,1,2],[1,2,1,0]],Z:[[0,4,2,4],[2,4,0,0],[0,0,2,0]],0:[[0,0,0,4],[0,4,2,4],[2,4,2,0],[2,0,0,0],[0,0,2,4]],1:[[1,4,1,0],[0,0,2,0]],2:[[0,4,2,4],[2,4,2,2],[2,2,0,2],[0,2,0,0],[0,0,2,0]],3:[[0,4,2,4],[2,4,2,0],[0,2,2,2],[0,0,2,0]],4:[[0,4,0,2],[0,2,2,2],[2,4,2,0]],5:[[2,4,0,4],[0,4,0,2],[0,2,2,2],[2,2,2,0],[2,0,0,0]],6:[[2,4,0,4],[0,4,0,0],[0,0,2,0],[0,2,2,2],[2,2,2,0]],7:[[0,4,2,4],[2,4,0,0]],8:[[0,0,0,4],[0,4,2,4],[2,4,2,0],[2,0,0,0],[0,2,2,2]],9:[[2,0,0,0],[0,0,0,4],[0,4,2,4],[2,4,2,0],[0,2,2,2]]," ":[],"•":[[1,2,1,2]],".":[[1,0,1,0]],"-":[[0,2,2,2]],"/":[[0,0,2,4]],"&":[[0,0,0,4],[0,4,2,4],[2,4,2,2],[0,2,2,0],[2,0,0,0]],"©":null,月:[[0,0,0,4],[2,0,2,4],[0,4,2,4],[0,0,2,0],[0,2.6,2,2.6],[0,1.3,2,1.3]],森:"COMPOUND_MORI"};function L1(){const i=[],t=(e,n,s,r)=>{i.push([e,n,e,n+r]),i.push([e-s/2,n+r,e+s/2,n+r]),i.push([e-s/2,n+r*.55,e+s/2,n+r*.55]),i.push([e-s*.28,n,e+s*.28,n])};return t(1,2.2,1.7,1.8),t(.35,0,1.1,1.9),t(1.65,0,1.1,1.9),i}function I1(i){return i==="森"?L1():i==="©"?[[.2,0,.2,4],[.2,4,1.8,4],[1.8,4,1.8,0],[1.8,0,.2,0],[.5,1.2,1.5,1.2],[.5,2.8,1.5,2.8]]:vu[i]??vu["-"]}function Xi(i,{size:t=.22,tracking:e=.32,thickness:n=.13,depth:s=.035}={}){const r=2*(t/4)+e*t,o=t/4,a=t/4,l=[];let c=0;const h=String(i).toUpperCase();for(const d of h){if(d===" "){c+=r;continue}for(const[u,f,_,v]of I1(d)){const p=u===_&&f===v,m=c+u*o,M=f*a,y=c+_*o,x=v*a,w=y-m,S=x-M,T=Math.hypot(w,S),g=n*t;p?l.push({x:m,y:M,len:g*1.1,ang:0,t:g,sq:!0}):l.push({x:(m+y)/2,y:(M+x)/2,len:T+g*.9,ang:Math.atan2(S,w),t:g})}c+=r}return{strokes:l,width:Math.max(0,c-e*t),depth:s}}function Wl(i,t,{depth:e=.035}={}){const n=[];for(const d of i){const{strokes:u}=Xi(d.text,d);for(const f of u)n.push({...f,ox:d.ox||0,oy:d.oy||0,oz:d.oz||0,depth:d.depth??e})}const s=bd(),r=new Ie(s,t,Math.max(1,n.length)),o=new ue,a=new Bn,l=new bn,c=new O,h=new O;return n.forEach((d,u)=>{l.set(0,0,d.ang),a.setFromEuler(l),c.set(d.ox+d.x,d.oy+d.y,d.oz),h.set(d.len,d.t,d.depth),d.sq&&h.set(d.t,d.t,d.depth*.7),o.compose(c,a,h),r.setMatrixAt(u,o)}),r.instanceMatrix.needsUpdate=!0,r.castShadow=!1,r.receiveShadow=!1,r.frustumCulled=!0,r}function Ed(i){const t=(e,n=.85,s={})=>new ht({color:e,roughness:n,metalness:0,...s});return{post:i?.woodAged||i?.woodDark||i?.wood||t(3812382,.9),beam:i?.woodDark||i?.woodAged||i?.wood||t(3023640,.9),board:i?.woodNew||i?.wood||t(4864550,.85),stone:i?.stone||i?.stoneDark||i?.rock||t(9078136,.95),bronze:i?.bronze||i?.brass||i?.iron||t(9202490,.45,{metalness:.85}),glyphMain:i?.brass||t(13215850,.38,{metalness:.9}),glyphSub:i?.bronze||t(10124623,.5,{metalness:.8}),wash:new ht({color:2826520,emissive:16763274,emissiveIntensity:.55,roughness:.6})}}function An(i,t,e,n,s,r,o,a=0){const l=new it(bd(),n);return l.scale.set(i,t,e),l.position.set(s,r,o),l.rotation.y=a,l.castShadow=!0,l.receiveShadow=!0,l}function Td(i,t){const e=new Di(1,20),n=new gi({color:0,transparent:!0,opacity:.28,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),s=new it(e,n);return s.rotation.x=-Math.PI/2,s.position.y=.03,s.scale.set(i,t,1),s.renderOrder=2,s}function Mu(i,t,e,n){const s=new Di(1,12),r=new it(s,new ht({color:4872755,roughness:1}));return r.rotation.x=-Math.PI/2,r.position.set(t,.035,e),r.scale.set(i,i*.8,1),r.receiveShadow=!0,r.renderOrder=1,r}function N1(i,t={}){const e=Ed(i),n=new Qt;n.name="tsukimori-main-sign";const s=3.4,r=2.5,o=.16;for(const T of[-1,1])n.add(An(.5,.28,.5,e.stone,T*(s/2),.14,0)),n.add(An(o,r,o,e.post,T*(s/2),.28+r/2,0)),n.add(An(.22,.06,.22,e.bronze,T*(s/2),.3,0));n.add(An(s+.5,.14,.2,e.beam,0,.28+r+.07,0)),n.add(An(s+.3,.1,.12,e.beam,0,.62,0));const a=s-.2,l=1.35,c=1.72,h=.02,d=An(a,l,.07,e.board,0,c,h);n.add(d),n.add(An(a+.1,.05,.1,e.beam,0,c+l/2+.03,h)),n.add(An(a+.1,.05,.1,e.beam,0,c-l/2-.03,h));for(const T of[-1,1])for(const g of[-1,1])n.add(An(.09,.09,.1,e.bronze,T*(a/2-.05),c+g*(l/2-.05),h));const u=h+.035+.075,f=T=>-T/2,_=Xi("LGCY STUDIOS PRESENTS",{size:.115,tracking:.3}),v=Xi("TSUKIMORI",{size:.3,tracking:.3}),p=Xi("月森",{size:.3,tracking:.3}),m=Xi("THE MOON FOREST",{size:.13,tracking:.3}),M=Xi("BUILT WITH LGCY AI",{size:.1,tracking:.3}),y=Wl([{text:"TSUKIMORI",size:.3,tracking:.3,ox:f(v.width),oy:c+.28,oz:u},{text:"月森",size:.3,tracking:.3,ox:f(p.width),oy:c-.14,oz:u}],e.glyphMain),x=Wl([{text:"LGCY STUDIOS PRESENTS",size:.115,tracking:.3,ox:f(_.width),oy:c+.52,oz:u-.012},{text:"THE MOON FOREST",size:.13,tracking:.3,ox:f(m.width),oy:c-.44,oz:u-.012},{text:"BUILT WITH LGCY AI",size:.1,tracking:.3,ox:f(M.width),oy:c-.58,oz:u-.012}],e.glyphSub);n.add(y,x);const w=An(a-.2,.02,.02,e.wash,0,c+l/2-.06,h+.06);w.castShadow=!1,n.add(w);const S=new o0(16767392,6,7,.55,.7,1.6);return S.position.set(0,2.6,1.6),S.target.position.set(0,c-.1,0),S.castShadow=!1,n.add(S,S.target),n.userData.signLight=S,n.userData.washMat=e.wash,n.add(Td(2.3,.8)),n.add(Mu(.3,-s/2,.32),Mu(.26,s/2,-.3)),n.position.set(...t.pos||[6.5,0,14.5]),n.rotation.y=t.ry??-.5,n}function U1(i,t={}){const e=Ed(i),n=new Qt;n.name="lgcy-studio-plaque";for(const f of[-1,1])n.add(An(.07,.62,.07,e.post,f*.42,.31,0));const s=An(1.05,.52,.04,e.bronze,0,.62,.02);s.rotation.x=-.14,n.add(s);const r=.02+.02+.045,a=[{text:"LGCY STUDIOS",size:.085,tracking:.3,oy:.78},{text:"WORLD DESIGNED & BUILT WITH LGCY AI",size:.038,tracking:.28,oy:.66},{text:"PROCEDURAL ENVIRONMENT • CODE • AI",size:.038,tracking:.28,oy:.585},{text:"© 2026 LGCY STUDIOS",size:.038,tracking:.28,oy:.51}].map(f=>({...f,ox:-Xi(f.text,f).width/2,oz:r})),l=Wl(a,e.glyphSub,{depth:.014});l.rotation.x=-.14,l.position.z=.005,n.add(l);const c=document.createElement("canvas");c.width=256,c.height=16;const h=c.getContext("2d");h.fillStyle="#3a2c16",h.fillRect(0,0,256,16),h.fillStyle="#d8b988",h.font="9px sans-serif",h.textAlign="center",h.fillText("tsukimori — moon forest district",128,11);const d=new Cn(c);d.colorSpace=We;const u=new it(new ye(.7,.044),new ht({map:d,roughness:.5,metalness:.6}));return u.position.set(0,.44,.045),u.rotation.x=-.14,n.add(u),n.add(Td(.8,.4)),n.position.set(...t.pos||[2.8,0,9.6]),n.rotation.y=t.ry??-.35,n}function O1(i,t,e={}){const n=new Qt;n.name="signage";const s=N1(t,{pos:e.signPos,ry:e.signRy}),r=U1(t,{pos:e.plaquePos,ry:e.plaqueRy});return n.add(s,r),i.add(n),{group:n,sign:s,plaque:r,signLight:s.userData.signLight}}function F1(i={}){let t=i.fps&&i.fps>0?Math.floor(i.fps):30,e=0;const n=[];let s=typeof i.onShot=="function"?i.onShot:null;const r=l=>1/l,o=(l,c)=>l*(1/c),a={get frame(){return e},get fps(){return t},get t(){return o(e,t)},get dt(){return r(t)},setFps(l){return l&&l>0&&(t=Math.floor(l)),t},register(l){return typeof l!="function"?()=>{}:(n.includes(l)||n.push(l),()=>a.unregister(l))},unregister(l){const c=n.indexOf(l);return c>=0&&n.splice(c,1),n.length},clear(){n.length=0},onShot(l){s=typeof l=="function"?l:null},step(l){const c=l&&l>0?l:r(t);e+=1;const h=o(e,t);for(let d=0;d<n.length;d++)n[d](c,h,e);return{frame:e,t:h,dt:c}},renderFrame(l){e=Math.max(0,Math.floor(l));const c=r(t),h=o(e,t);for(let d=0;d<n.length;d++)n[d](c,h,e);return{frame:e,t:h,dt:c}},reset(){return e=0,{frame:e,t:0,dt:r(t)}},renderShot(l,c){return s&&s(l,Math.max(0,Math.floor(c))),{shotId:l,...a.renderFrame(c)}},renderSequence(l,c,h,d){const u=d&&d>0?Math.floor(d):t,f=Math.max(0,Math.floor(c)),_=Math.max(f,Math.floor(h)),v=[],p=[];for(let m=f;m<=_;m++)v.push(m),p.push(m*(1/u));return{shotId:l,fps:u,frames:v,times:p}}};return a}const yo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ys{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const B1=new ko(-1,1,1,-1,0,1);class z1 extends we{constructor(){super(),this.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ce([0,2,0,0,2,0],2))}}const k1=new z1;class Rc{constructor(t){this._mesh=new it(k1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,B1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class G1 extends Ys{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof je?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Er.clone(t.uniforms),this.material=new je({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Rc(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class yu extends Ys{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class H1 extends Ys{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class V1{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new ot);this._width=n.width,this._height=n.height,e=new fn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:_n}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new G1(yo),this.copyPass.material.blending=qn,this.timer=new Ec}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}yu!==void 0&&(o instanceof yu?n=!0:o instanceof H1&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ot);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class W1 extends Ys{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ft}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const X1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ft(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Gs extends Ys{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new ot(t.x,t.y):new ot(256,256),this.clearColor=new Ft(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new fn(r,o,{type:_n,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new fn(r,o,{type:_n,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const u=new fn(r,o,{type:_n,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}const a=X1;this.highPassUniforms=Er.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new je({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ot(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Er.clone(yo.uniforms),this.blendMaterial=new je({uniforms:this.copyUniforms,vertexShader:yo.vertexShader,fragmentShader:yo.fragmentShader,premultipliedAlpha:!0,blending:Eo,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ft,this._oldClearAlpha=1,this._basic=new gi,this._fsQuad=new Rc(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ot(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Gs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Gs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){const e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);const s=[],r=[];for(let o=1;o<t;o+=2){const a=e[o],l=o+1<t?e[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new je({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ot(.5,.5)},direction:{value:new ot(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new je({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Gs.BlurDirectionX=new ot(1,0);Gs.BlurDirectionY=new ot(0,1);const uo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Y1 extends Ys{constructor(){super(),this.isOutputPass=!0,this.uniforms=Er.clone(uo.uniforms),this.material=new nd({name:uo.name,uniforms:this.uniforms,vertexShader:uo.vertexShader,fragmentShader:uo.fragmentShader}),this._fsQuad=new Rc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},de.getTransfer(this._outputColorSpace)===Se&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Jl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===$l?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ql?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Io?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===mr?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===gr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===jl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function q1({renderer:i,scene:t,camera:e}){let n="off",s=null,r=null,o=1,a=1;function l(){try{const u=i.getSize(new ot);o=Math.max(1,Math.round(u.x)),a=Math.max(1,Math.round(u.y))}catch{o=o||1,a=a||1}}function c(){if(s)try{s.dispose()}catch{}s=null,r=null}function h(u){if(c(),l(),u==="low"||u==="high"){s=new V1(i),s.addPass(new W1(t,e)),u==="high"&&(r=new Gs(new ot(o,a),.18,.6,.85),s.addPass(r)),s.addPass(new Y1);try{s.setSize(o,a)}catch{}}}return{get quality(){return n},setQuality(u){const f=u==="high"?"high":u==="low"?"low":"off";try{if(f===n&&(f==="off"||s))return n;if(f==="off")return c(),n="off",n;h(f),n=f}catch{try{c()}catch{}n="off"}return n},setSize(u,f){if(o=Math.max(1,Math.round(u)),a=Math.max(1,Math.round(f)),s)try{s.setSize(o,a)}catch{}},render(){if(n==="off"||!s)i.render(t,e);else try{s.render()}catch{i.render(t,e)}},dispose(){c(),n="off"}}}const K1=20260912,Su=16;function ar(i,t,e){let n=Math.imul(i,374761393)+Math.imul(t,668265263)+Math.imul(e,1442695041)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}function Z1(i,t){return Math.floor(ar(i,t,K1)*4294967296)}function Ad(i,t,e){let n=(Z1(i,t)^Math.imul(e|0,2246822519))>>>0||1;return function(){n|=0,n=n+1831565813|0;let s=Math.imul(n^n>>>15,1|n);return s=s+Math.imul(s^s>>>7,61|s)^s,((s^s>>>14)>>>0)/4294967296}}function J1(i,t,e){const n=Math.floor(i),s=Math.floor(t),r=i-n,o=t-s,a=r*r*(3-2*r),l=o*o*(3-2*o),c=ar(n,s,e),h=ar(n+1,s,e),d=ar(n,s+1,e),u=ar(n+1,s+1,e);return c+(h-c)*a+(d-c)*l+(c-h-d+u)*a*l}function Cc(i,t,e,n=4){let s=0,r=.5,o=1,a=0;for(let l=0;l<n;l++)s+=r*J1(i*o,t*o,e+l*101),a+=r,r*=.5,o*=2.03;return s/a}function Rd(i,t){const e=Math.max(Math.abs(i)-24,0),n=Math.max(Math.abs(t-4)-22,0),s=Math.hypot(e,n),r=Math.min(Math.max(s/10,0),1);return r*r*(3-2*r)}const Cd=[{cx:-8,cz:48.5,w:14,d:9,y:null},{cx:9,cz:50.5,w:12,d:8,y:null}];function Pd(i){const t=(Cc(i.cx/42+7.3,i.cz/42-2.1,501,4)-.5)*11+Math.max(0,Math.hypot(i.cx,i.cz)-85)*.35;return Math.round(t*2)/2}function $1(i,t){let e=null;for(const n of Cd){const s=Math.max(Math.abs(i-n.cx)-n.w/2,0),r=Math.max(Math.abs(t-n.cz)-n.d/2,0),o=Math.hypot(s,r),a=Math.min(Math.max(o/6,0),1),l=1-a*a*(3-2*a);l>0&&(!e||l>e.m)&&(e={m:l,y:Pd(n)})}return e}function Q1(){return Cd.map(i=>({...i,y:Pd(i)}))}function wu(i,t,e){const n=Math.min(Math.max((e-i)/(t-i),0),1);return n*n*(3-2*n)}function Ae(i,t){const e=Rd(i,t);if(e<=0)return 0;const n=(Cc(i/42+7.3,t/42-2.1,501,4)-.5)*11,s=Math.hypot(i,t),r=Math.max(0,s-85)*.35;let o=(n+r)*e;const a=34+8*Math.sin(i*.045),l=Math.abs(t-a),c=-1.6+2.2*wu(0,8,l),h=wu(7,14,l);let d=c*(1-h)+o*h;const u=$1(i,t);return u&&u.m>0&&(d=u.y*u.m+d*(1-u.m)),d}function Pc(i,t){const n=Ae(i+.6,t)-Ae(i-.6,t),s=Ae(i,t+.6)-Ae(i,t-.6);return Math.hypot(n,s)/(2*.6)}function j1(i,t,e,n=.45){const s=.65+.35*Math.sin(e*.6)*Math.sin(e*.23+1.7),r=Ae(i,t),o=Ae(i+1.5,t),a=Ae(i,t+1.5),l=Math.min(1.5,Math.abs(o-r)+Math.abs(a-r)),h=1+.35*(1-Math.max(0,Math.min(1,(r+2)/6)))+l*.45;return n*2*s*h}function Dd(i,t){const e=Ae(i,t),n=Math.min(Math.max(1-e/9,0),1),s=Cc(i/25-3.7,t/25+9.2,777,3),r=34+8*Math.sin(i*.045),o=Math.max(0,1-Math.abs(t-r)/12);return Math.min(Math.max(n*.45+s*.35+o*.45,0),1)}function Dc(i,t){if(Rd(i,t)<=0)return"village";const e=Ae(i,t),n=Dd(i,t),s=Pc(i,t),r=34+8*Math.sin(i*.045);return Math.abs(t-r)<5?"riverbank":e>9?"mountain":s>.45?"slope":n>.55?e<1.2?"field":"bamboo":n>.42?"maple":n>.25?"grassland":"outskirts"}function Ri(i,t){return[Math.floor(i/Su),Math.floor(t/Su)]}function es(i,t,e,n){return`${i}_${t>=0?"e"+t:"w"+-t}_${e>=0?"s"+e:"n"+-e}_${String(n).padStart(3,"0")}`}const So=new Map;function tM(i,t){return i+","+t}function ns(i,t,e){const n=tM(i,t);return So.has(n)||So.set(n,[]),So.get(n).push(...e),e.length}function Ld(){let i=0,t=0;for(const e of So.values())t++,i+=e.length;return{objects:i,chunks:t}}const Ti=1,eM=.45,Ga=0;function nM(i){const t=Math.sin(i*127.1)*43758.5453;return t-Math.floor(t)}function iM({lampLights:i,lampGlows:t,houses:e}={}){const n=i||[],s=t||[],r=Math.min(n.length,s.length),o=[Ti,Ti,Ti];let a=1;function l(h,d,u,f){const _=f>.05;f>=.85?(o[0]=Ti,o[1]=Ti,o[2]=Ti):_?(o[0]=Ti,o[1]=eM,o[2]=Ti):(o[0]=Ga,o[1]=Ga,o[2]=Ga);const v=Math.floor(d*2);if(a=u==="rainy"&&nM(v)<.12?.25:1,!!_)for(let p=0;p<r;p++){const m=o[p%3]*a;n[p].intensity*=m;const M=s[p];M&&M.material&&typeof M.material.emissiveIntensity=="number"?M.material.emissiveIntensity*=m:M&&typeof M.emissiveIntensity=="number"&&(M.emissiveIntensity*=m)}}function c(){return{circuits:[o[0],o[1],o[2]],dip:a}}return{update:l,state:c}}function bu(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function sM(){const i=document.createElement("canvas");i.width=64,i.height=128;const t=i.getContext("2d"),e=t.createLinearGradient(0,128,0,0);e.addColorStop(0,"rgba(255,90,20,0)"),e.addColorStop(.35,"rgba(255,120,30,0.85)"),e.addColorStop(.65,"rgba(255,190,80,0.95)"),e.addColorStop(.9,"rgba(255,240,200,1)"),e.addColorStop(1,"rgba(255,255,240,0)"),t.fillStyle=e,t.fillRect(0,0,64,128),t.globalCompositeOperation="destination-in";const n=t.createRadialGradient(32,70,6,32,70,62);n.addColorStop(0,"rgba(0,0,0,1)"),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,64,128);const s=new Cn(i);return s.colorSpace=We,s}function rM(){const i=document.createElement("canvas");i.width=64,i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,30);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.5,"rgba(255,255,255,0.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const n=new Cn(i);return n.colorSpace=We,n}const Wi=60,Eu=2.2,Ha=1.2;function oM(i,t,e,n){const s=typeof n=="number"&&isFinite(n)?n:0,r=new Qt;r.position.set(t,s,e);const o=i&&i.stone||new ht({color:9080210,roughness:.95}),a=i&&i.wood||new ht({color:5913892,roughness:.9}),l=new Ie(new Pt(.28,.2,.22),o,8),c=new fe,h=bu(61861);for(let C=0;C<8;C++){const P=C/8*Math.PI*2+(h()-.5)*.2;c.position.set(Math.cos(P)*.55,.1,Math.sin(P)*.55),c.rotation.set(0,-P+(h()-.5)*.4,0),c.scale.setScalar(.9+h()*.25),c.updateMatrix(),l.setMatrixAt(C,c.matrix)}l.instanceMatrix.needsUpdate=!0,l.receiveShadow=!0,r.add(l);const d=new Ie(new Pt(.12,.12,.9),a,4);for(let C=0;C<4;C++){const P=C/4*Math.PI*2+.4;c.position.set(Math.cos(P)*.18,.32,Math.sin(P)*.18),c.rotation.set(.62,P,0),c.scale.setScalar(1),c.updateMatrix(),d.setMatrixAt(C,c.matrix)}d.instanceMatrix.needsUpdate=!0,r.add(d);const u=sM(),f=new gi({map:u,transparent:!0,blending:Eo,depthWrite:!1,side:Ne,fog:!1}),_=new ye(.7,.9),v=new it(_,f);v.position.y=.62;const p=new it(_,f);p.position.y=.62,p.rotation.y=Math.PI/2,r.add(v,p);const m=new Float32Array(Wi*3),M=new Float32Array(Wi),y=new Float32Array(Wi),x=new Float32Array(Wi*2),w=bu(24301);for(let C=0;C<Wi;C++)M[C]=C/Wi*(Eu/Ha),y[C]=w()*Math.PI*2,x[C*2]=(w()-.5)*.3,x[C*2+1]=(w()-.5)*.3;const S=new we;S.setAttribute("position",new Be(m,3));const T=new Bs({map:rM(),size:.55,transparent:!0,opacity:.32,depthWrite:!1,sizeAttenuation:!0,color:10133670}),g=new Mr(S,T);g.frustumCulled=!1,r.add(g);const b=new bc(16747068,8,9,2);b.position.set(0,.85,0),b.castShadow=!1,r.add(b);function A(C,P,L){const N=typeof L=="number"&&isFinite(L)?L:0,U=1+.18*Math.sin(C*11)+.12*Math.sin(C*23+1.3),B=1+.18*Math.sin(C*12.3+2.1)+.12*Math.sin(C*27+.5);v.scale.set(U,1+.25*Math.sin(C*13+.7),1),p.scale.set(B,1+.25*Math.sin(C*14+2),1);for(let z=0;z<Wi;z++){let W=M[z]+P;const D=Eu/Ha;W>D&&(W-=D),M[z]=W;const G=.7+W*Ha,X=N*W*.8;m[z*3]=x[z*2]+X+Math.sin(W*2+y[z])*.1,m[z*3+1]=G,m[z*3+2]=x[z*2+1]+Math.cos(W*1.7+y[z])*.1}S.attributes.position.needsUpdate=!0,b.intensity=8+2*Math.sin(C*11+Math.sin(C*23)*1.7)}return{group:r,update:A}}const Va=300,aM=3;function lM(i,t,e,n){switch(i){case"village":n.setRGB(.36,.32,.25);break;case"riverbank":n.setRGB(.52,.48,.38);break;case"mountain":n.setRGB(.42,.42,.44);break;case"slope":n.setRGB(.4,.36,.28);break;case"field":n.setRGB(.45,.48,.28);break;case"bamboo":n.setRGB(.3,.42,.24);break;case"maple":n.setRGB(.38,.36,.24);break;case"grassland":n.setRGB(.42,.46,.28);break;default:n.setRGB(.38,.36,.28)}const s=1-t*.25;return n.multiplyScalar(s),e>7&&n.lerp(new Ft(.5,.5,.52),Math.min((e-7)/8,.7)),n}function cM(){const i=new Qt;i.name="terrain";const t=Math.floor(Va/aM),e=new ye(Va,Va,t,t);e.rotateX(-Math.PI/2);const n=e.attributes.position,s=new Float32Array(n.count*3),r=new Ft;for(let l=0;l<n.count;l++){const c=n.getX(l),h=n.getZ(l),d=Ae(c,h);n.setY(l,d-.05),lM(Dc(c,h),Dd(c,h),d,r),s[l*3]=r.r,s[l*3+1]=r.g,s[l*3+2]=r.b}e.setAttribute("color",new Be(s,3)),e.computeVertexNormals();const o=new ht({vertexColors:!0,roughness:.96,metalness:0}),a=new it(e,o);return a.receiveShadow=!0,a.frustumCulled=!0,i.add(a),{group:i,mesh:a}}function hM(){const i=new Qt;i.name="river";const t=60,e=8,n=[],s=[];for(let l=0;l<=t;l++){const c=-150+300*l/t,h=34+8*Math.sin(c*.045);if(n.push(c,-.8,h-e/2,c,-.8,h+e/2),l<t){const d=l*2;s.push(d,d+1,d+2,d+1,d+3,d+2)}}const r=new we;r.setAttribute("position",new Be(new Float32Array(n),3)),r.setIndex(s),r.computeVertexNormals();const o=new ht({color:3031624,roughness:.12,metalness:.75,envMapIntensity:1,transparent:!0,opacity:.94}),a=new it(r,o);return a.receiveShadow=!0,i.add(a),{group:i,mesh:a,waterMat:o}}function uM(i,t){let e=(Math.imul(i+1,2654435761)^Math.imul(t,40503))>>>0;return e^=e>>>15,e=Math.imul(e,2246822519),e^=e>>>13,(e>>>0)/4294967296}const dM=[{id:"r1",kind:"road",width:2.5,pts:[[0,24],[1,29],[2,32],[2,38],[1,42],[-4,41]]},{id:"r4",kind:"trail",width:1.2,pts:[[-4,41],[-12,40],[-20,38],[-26,40],[-31,44]]},{id:"r2",kind:"trail",width:1.2,pts:[[-24,10],[-36,2],[-48,-12],[-52,-30],[-44,-46]]},{id:"r3",kind:"trail",width:1.2,pts:[[24,5],[38,12],[52,26],[62,44]]}];function fM(i,t=2){const e=[];for(let n=0;n<i.length-1;n++){const[s,r]=i[n],[o,a]=i[n+1],l=Math.hypot(o-s,a-r),c=Math.max(1,Math.round(l/t));for(let h=0;h<c;h++)e.push([s+(o-s)*h/c,r+(a-r)*h/c])}return e.push(i[i.length-1].slice()),e}const Id=dM.map(i=>({...i,path:fM(i.pts)}));function Nd(i,t){let e=1e9;for(const n of Id)for(const[s,r]of n.path){const o=Math.hypot(i-s,t-r);o<e&&(e=o)}return e}function pM(i){const t=new Qt;t.name="roads";const e=new ht({color:7232066,roughness:.98}),n=new ht({color:6641207,roughness:1});let s=0;for(const r of Id){const o=r.width/2,a=[],l=[];r.path.forEach(([f,_],v)=>{const p=r.path[Math.min(v+1,r.path.length-1)],m=r.path[Math.max(v-1,0)];let M=p[0]-m[0],y=p[1]-m[1];const x=Math.hypot(M,y)||1;M/=x,y/=x;const w=-y,S=M,T=(uM(v,7)-.5)*.3,g=o+T,b=Ae(f+w*g,_+S*g)+.07,A=Ae(f-w*g,_-S*g)+.07,C=Ae(f,_)+.07;if(a.push(f+w*g,b,_+S*g,f,C,_,f-w*g,A,_-S*g),v<r.path.length-1){const P=v*3;l.push(P,P+3,P+1,P+1,P+3,P+4,P+1,P+4,P+2,P+2,P+4,P+5)}});const c=new we;c.setAttribute("position",new Be(new Float32Array(a),3)),c.setIndex(l),c.computeVertexNormals();const h=new it(c,r.kind==="road"?e:n);h.receiveShadow=!0,t.add(h);const[d,u]=Ri(r.path[0][0],r.path[0][1]);ns(d,u,[{id:es("road",d,u,s++),type:"road",x:r.path[0][0],z:r.path[0][1],y:0,data:{road:r.id}}])}{const o=34+8*Math.sin(.09),a=Ae(2,o-9),l=Ae(2,o+9),c=Math.max(a,l)+.25,h=new ht({color:5916208,roughness:.85}),d=new ht({color:4141602,roughness:.85}),u=new it(new Pt(2.2,.14,20),h);u.position.set(2,c,o),u.castShadow=!0,u.receiveShadow=!0,t.add(u);for(const v of[-1,1]){const p=new it(new Pt(.09,.7,20),d);p.position.set(2+v*1,c+.42,o),p.castShadow=!0,t.add(p);for(const m of[-8,-4,0,4,8]){const M=new it(new Pt(.12,1.1,.12),d);M.position.set(2+v*1,c-.1,o+m),t.add(M)}}const[f,_]=Ri(2,o);ns(f,_,[{id:es("bridge",f,_,0),type:"bridge",x:2,z:o,y:c,data:{}}]);for(const v of[-1,1])for(const p of[-6,6]){const m=new it(new Pt(.16,4.2,.16),d);m.position.set(2+v*.9,c-1.9,o+p),t.add(m)}}return{group:t}}function Ud(i){let t=0,e=0;i.forEach(h=>{t+=h.attributes.position.count,e+=h.index.count});const n=new Float32Array(t*3),s=new Float32Array(t*3),r=new Float32Array(t*2),o=new Uint16Array(e);let a=0,l=0;i.forEach(h=>{const d=h.attributes.position,u=h.attributes.normal,f=h.attributes.uv;n.set(d.array,a*3),s.set(u.array,a*3),r.set(f.array,a*2);const _=h.index.array;for(let v=0;v<_.length;v++)o[l+v]=_[v]+a;a+=d.count,l+=_.length});const c=new we;return c.setAttribute("position",new Be(n,3)),c.setAttribute("normal",new Be(s,3)),c.setAttribute("uv",new Be(r,2)),c.setIndex(new Be(o,1)),c}function mM(i,t,e){const n=new Qt,s=Li(808),r=[],o=[],a=9;for(let h=0;h<a;h++){const d=t+(s()-.5)*1.6,u=e+(s()-.5)*1.6,f=3.4+s()*1.8,_=.03+s()*.07,v=s()*Math.PI*2,p=new Qt,m=.5,M=.055;let y=0;for(;y<f;){const x=Math.min(m,f-y),w=new it(new ge(M*.92,M,x,8),i.bamboo);w.position.y=y+x/2,w.castShadow=!0,p.add(w);const S=new it(new ge(M*1.18,M*1.18,.035,8),i.bamboo);if(S.position.y=y+x,p.add(S),y>f*.35){const T=3+Math.floor(s()*3);for(let g=0;g<T;g++)o.push({x:d,y:y+x,z:u,top:y/f,seed:s()*10})}y+=x}p.position.set(d,0,u),p.rotation.set(Math.cos(v)*_,0,Math.sin(v)*_),p.userData.phase=s()*6.28,p.userData.baseRX=p.rotation.x,p.userData.baseRZ=p.rotation.z,r.push(p),n.add(p)}{const h=new ye(.14,.62,1,2),d=h.attributes.position;for(let v=0;v<d.count;v++){const m=(d.getY(v)+.31)/.62;d.setX(v,d.getX(v)*(1-m*.85)),d.setZ(v,-Math.sin(m*Math.PI)*.06)}h.computeVertexNormals();const u=5,f=new Ie(h,i.bambooLeaf,o.length*u),_=[];o.forEach(v=>{for(let p=0;p<u;p++){const m=p/u*Math.PI*2+v.seed;_.push({p:[v.x+Math.cos(m)*.25,v.y+.05,v.z+Math.sin(m)*.25],rx:.9+s()*.5,ry:m,rz:.2,s:.8+s()*.5})}}),fi(f,_),f.castShadow=!1,n.add(f)}const l=Vo(3.2,3.2,.5);l.position.set(t,.035,e),n.add(l);function c(h){for(const d of r)d.rotation.x=d.userData.baseRX+Math.sin(h*.9+d.userData.phase)*.02,d.rotation.z=d.userData.baseRZ+Math.cos(h*.7+d.userData.phase)*.02}return{group:n,update:c}}function gM(i,t,e){const n=new Qt,s=Li(1555),r=[],o=new O(0,1,0);function a(p,m,M,y,x){const w=new ge(y*.62,y,M,7),S=new it(w,i.trunk),T=p.clone().addScaledVector(m,M/2);S.position.copy(T),S.quaternion.setFromUnitVectors(o,m.clone().normalize()),S.castShadow=S.receiveShadow=!0,n.add(S);const g=p.clone().addScaledVector(m,M);if(x<=0||M<.35){r.push(g);return}r.push(g.clone().lerp(p,.4));const b=x>=3?3:2+(s()<.5?1:0);for(let A=0;A<b;A++){const C=m.clone();C.x+=(s()-.5)*1.1,C.z+=(s()-.5)*1.1,C.y+=s()*.45-.08,C.normalize(),a(g,C,M*(.55+s()*.15),y*.58,x-1)}}a(new O(0,0,0),new O(.08,1,.05),1.5,.22,4);function l(p){const m=new Rr,M=7;for(let x=0;x<=20;x++){const w=x/20*Math.PI*2,S=Math.pow(Math.abs(Math.sin(w*M/2)),.7),T=p*(.35+.65*S),g=Math.cos(w)*T,b=Math.sin(w)*T;x===0?m.moveTo(g,b):m.lineTo(g,b)}return new Fo(m)}const c=Ud([l(.17),l(.17).rotateY(Math.PI/2)]),h=340,d=new Ie(c,i.mapleLeaf,h),u=[],f=new Ft;for(let p=0;p<h;p++){const m=r[Math.floor(s()*r.length)],M=m.x+(s()-.5)*1.1,y=m.y+(s()-.5)*.9,x=m.z+(s()-.5)*1.1;u.push({p:[M,y,x],rx:s()*6.3,ry:s()*6.3,rz:s()*6.3,s:.75+s()*.7});const w=$e.clamp((y-1.2)/2.2,0,1),S=s();Wa(p,77)<.14?f.setHex(5926960):S<w*.75?f.setHex(12728868):S<w*.75+.22?f.setHex(14711592):f.setHex(7178812),f.offsetHSL((Wa(p,11)-.5)*.08,0,(Wa(p,33)-.5)*.12),d.setColorAt(p,f)}fi(d,u),d.instanceColor.needsUpdate=!0,d.castShadow=!1,d.receiveShadow=!1,n.add(d),n.position.set(t,0,e);const _=Vo(3.4,3.4,.5);_.position.y=.035,n.add(_);function v(p){n.rotation.z=Math.sin(p*.6)*.004,n.rotation.x=Math.cos(p*.45)*.003}return{group:n,update:v}}function Od(i,t=1,e=1,n=.6,s=0,r=0){const o=ti(t*1e3+7),a=gM(i,0,0),l=a.group||a;l.scale.setScalar(e*(.9+o()*.25));const c=new Ft(4880949).lerp(new Ft(12729374),n);return l.traverse(h=>{h.isMesh&&h.material?.color&&h.geometry?.type!=="CylinderGeometry"&&(h.material=h.material.clone(),h.material.color.copy(c).offsetHSL((o()-.5)*.03,0,(o()-.5)*.06))}),l.rotation.y=o()*6.28,l.position.set(s,0,r),l.userData.tick=a.update||null,l.userData.sway={amp:.02+o()*.02,freq:.8+o()*.6,ph:o()*6.28},l}function Fd(i,t=1,e=0,n=0){const s=ti(t*500+3),r=mM(i,0,0),o=r.group||r;return o.rotation.y=s()*6.28,o.scale.setScalar(.85+s()*.4),o.position.set(e,0,n),o.userData.tick=r.update||null,o.userData.sway={amp:.015+s()*.02,freq:1.1+s()*.7,ph:s()*6.28},o}function Wa(i,t){let e=(Math.imul(i+1,2654435761)^Math.imul(t,40503))>>>0;return e^=e>>>15,e=Math.imul(e,2246822519),e^=e>>>13,(e>>>0)/4294967296}function _M(){const i=document.createElement("canvas");i.width=64,i.height=64;const t=i.getContext("2d");t.fillStyle="#000",t.fillRect(0,0,64,64),t.fillStyle="#fff";for(const[n,s,r]of[[14,9,-6],[30,11,0],[46,8,7]])t.beginPath(),t.moveTo(n-s/2,64),t.quadraticCurveTo(n-s/2+r,30,n+r,4+r*.2),t.quadraticCurveTo(n+s/2+r,30,n+s/2,64),t.closePath(),t.fill();return new Cn(i)}function Lc(i=1,t=.5){const e=ti(i*77+1),n=new Qn(t,2),s=n.attributes.position;for(let a=0;a<s.count;a++){const l=1+(e()-.5)*.35;s.setXYZ(a,s.getX(a)*l,s.getY(a)*l*.72,s.getZ(a)*l)}n.computeVertexNormals();const r=new it(n,new ht({color:new Ft(3759148).offsetHSL(0,0,(e()-.5)*.05),roughness:1})),o=.72+e()*.63;return r.scale.set(o,o*(.85+e()*.4),o),r.rotation.y=e()*Math.PI*2,r.castShadow=!0,r.userData.sway={amp:.008,freq:1.4,ph:e()*6.28},r}function Ic(i=1,t=60,e=[6,3]){const n=ti(i*31+5),s=new ye(.5,.35);s.translate(0,.17,0);const r=xM([s,s.clone().rotateY(Math.PI/2)]),o=new ht({color:6058040,roughness:1,side:Ne,alphaTest:.4,alphaMap:_M(),alphaToCoverage:!0}),a=new Ie(r,o,t),l=new fe;for(let c=0;c<t;c++)l.position.set((n()-.5)*e[0],0,(n()-.5)*e[1]),l.rotation.y=n()*3.14,l.scale.setScalar(.7+n()*.7),(c+i%4+4)%4===0&&(l.scale.y*=1.9),l.updateMatrix(),a.setMatrixAt(c,l.matrix);return a.castShadow=!1,a.receiveShadow=!0,a}function xM(i){return Ud(i)}function Xa(i=1,t=2.2,e=2,n=40){const s=ti(i*13+9),r=new ye(.12,.12),o=new ht({color:4154928,roughness:1,side:Ne}),a=new Ie(r,o,n),l=new fe;for(let h=0;h<n;h++)l.position.set((s()-.5)*t,s()*e,.02+s()*.06),l.rotation.set(s()*3,s()*3,s()*3),l.updateMatrix(),a.setMatrixAt(h,l.matrix);a.castShadow=!1;const c=new Qt;return c.add(a),c}function Bd(i,t=1.6,e=1){const n=new it(new Di(.5,10),new ht({color:4480046,roughness:1}));return n.rotation.x=-Math.PI/2,n.scale.set(t,e,1),n.receiveShadow=!0,n}function vM(i,t,e){const n=e?.gust?e.gust(t):.5;for(const s of i){const r=s.userData.sway;r&&(s.rotation.x=Math.sin(t*r.freq+r.ph)*r.amp*(.5+n),s.rotation.z=Math.cos(t*r.freq*.8+r.ph)*r.amp*(.5+n))}}function Vn(i,t,e){let n=Math.imul(i,374761393)+Math.imul(t,668265263)+Math.imul(e,1442695041)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}function fo(i,t,e,n,s=130){const r=Ad(7,3,n),o=[];for(let a=0;a<4e3&&o.length<t;a++){const l=r()*Math.PI*2,c=30+Math.sqrt(r())*(s-30),h=Math.cos(l)*c,d=Math.sin(l)*c*.9+6,u=Dc(h,d);i.includes(u)&&(Nd(h,d)<4||Math.hypot(h+48,d+28)<10||Pc(h,d)>.55||Math.abs(d-(34+8*Math.sin(h*.045)))<6||o.some(([f,_])=>Math.hypot(f-h,_-d)<e)||o.push([h,d]))}return o}function MM(i){const t=new Qt;t.name="ecology";const e=[],n=[],s=c=>(c?.userData?.sway&&e.push(c),c?.userData?.tick&&n.push(c.userData.tick),c);fo(["maple"],3,14,101,70).forEach(([c,h],d)=>{const u=Ae(c,h),f=Od(i,500+d,1+Vn(d,3,5)*.5,.35+Vn(d,9,6)*.5,0,0);f.position.set(c,u,h),f.rotation.y=Vn(d,13,7)*6.28,po(t,f),s(f)}),fo(["bamboo"],2,16,102,80).forEach(([c,h],d)=>{const u=Fd(i,510+d,0,0);u.position.set(c,Ae(c,h),h),po(t,u),s(u)}),fo(["maple","grassland","outskirts","slope"],8,12,103).forEach(([c,h],d)=>{const u=Lc(520+d,.5+Vn(d,21,8)*.6);u.position.set(c,Ae(c,h)+.2,h),po(t,u),s(u)}),fo(["grassland","field","outskirts","riverbank"],6,14,104).forEach(([c,h],d)=>{const u=Ic(530+d,50,[5,5]);u.position.set(c,Ae(c,h)+.03,h),po(t,u)});{const c=Ad(11,5,105),h=new Qn(1.7,1);{const y=h.attributes.position;for(let x=0;x<y.count;x++){const w=1+(Vn(x,31,9)-.5)*.45;y.setXYZ(x,y.getX(x)*w,y.getY(x)*w*.82,y.getZ(x)*w)}h.computeVertexNormals()}const d=new ge(.13,.2,2.4,6),u=new ht({roughness:.95}),f=new ht({color:4864552,roughness:.95}),_=[];for(let y=0;y<2500&&_.length<380;y++){const x=c()*Math.PI*2,w=32+Math.sqrt(c())*105,S=Math.cos(x)*w,T=Math.sin(x)*w*.9+6,g=Dc(S,T);if(!["maple","bamboo","grassland","slope","mountain","outskirts"].includes(g)||Nd(S,T)<3.5||Pc(S,T)>.7||Math.abs(T-(34+8*Math.sin(S*.045)))<5||Math.hypot(S+48,T+28)<9)continue;const b=Ae(S,T),A=g==="mountain"?.8+c()*.5:1+c()*.9;_.push({x:S,y:b,z:T,sc:A,ry:c()*6.28,biome:g,seed:y})}const v=new Ie(h,u,_.length),p=new Ie(d,f,_.length),m=new fe,M=new Ft;_.forEach((y,x)=>{m.position.set(y.x,y.y+2.2*y.sc,y.z),m.rotation.set(0,y.ry,0),m.scale.set(y.sc*(.9+Vn(x,41,1)*.3),y.sc,y.sc*(.9+Vn(x,42,2)*.3)),m.updateMatrix(),v.setMatrixAt(x,m.matrix),y.biome==="bamboo"?M.setHex(4157488):y.biome==="mountain"?M.setHex(3033652):M.setHSL(.02+Vn(x,43,3)*.09,.55,.32+Vn(x,44,4)*.12),M.offsetHSL(0,0,(Vn(x,45,5)-.5)*.05),v.setColorAt(x,M),m.position.set(y.x,y.y+1.1*y.sc,y.z),m.scale.set(y.sc,y.sc,y.sc),m.updateMatrix(),p.setMatrixAt(x,m.matrix)}),v.instanceMatrix.needsUpdate=!0,p.instanceMatrix.needsUpdate=!0,v.instanceColor&&(v.instanceColor.needsUpdate=!0),v.castShadow=!1,v.receiveShadow=!1,p.castShadow=!1,t.add(v,p)}return{group:t,vegRoots:e,tickers:n}}function po(i,t){i.add(t)}const yM=[{name:"hamletA",cx:-27,cz:34,seed:201,w:6,d:5,wallH:2.9,roofType:"kirizuma",pitch:30,facadeCols:3,doorSide:-1,engawa:.8,woodTone:.3,age:.7,winLayout:[1,0,2]},{name:"hamletB",cx:13,cz:24,seed:202,w:6,d:5.5,wallH:3,roofType:"yosemune",pitch:31,facadeCols:3,doorSide:1,engawa:0,woodTone:.6,age:.4,winLayout:[2,0,1]},{name:"hamletC",cx:22,cz:28,seed:203,w:6,d:5,wallH:2.8,roofType:"kirizuma",pitch:29,facadeCols:3,doorSide:1,engawa:.8,woodTone:.5,age:.55,winLayout:[1,2,0]}],SM=[{name:"farmhouse",cx:13,cz:29,seed:204,w:7.5,d:6,wallH:3.2,roofType:"kirizuma",pitch:32,facadeCols:4,doorSide:1,engawa:1,woodTone:.35,age:.6,winLayout:[1,2,1,0]},{name:"barn",cx:20,cz:30,seed:205,w:5,d:7,wallH:3.6,roofType:"kirizuma",pitch:40,facadeCols:2,doorSide:0,engawa:0,woodTone:.25,age:.8,winLayout:[0,0],glow:!1}];function wM(i){vd(i);const t=new Qt;t.name="settlement";const e=[];for(const[s,r]of[[yM,40],[SM,50]])for(const[o,a]of s.entries()){const l=yd({...a}),c=Ae(a.cx,a.cz);l.group.position.set(a.cx,c,a.cz),t.add(l.group),e.push({name:a.name,group:l.group,glowMats:a.glow===!1?[]:l.glowMats,pos:new O(a.cx,c,a.cz),w:a.w,d:a.d});const[h,d]=Ri(a.cx,a.cz);ns(h,d,[{id:es("house",h,d,r+o),type:"house",x:a.cx,z:a.cz,y:c,data:{name:a.name}}])}{const s={W:[],D:[]},r=[{x1:-30,z1:37.5,x2:-24,z2:37.5},{x1:8.5,z1:27.5,x2:8.5,z2:32}];for(const a of r){const l=Math.hypot(a.x2-a.x1,a.z2-a.z1),c=Math.max(2,Math.floor(l/1.4));for(let d=0;d<=c;d++){const u=d/c,f=a.x1+(a.x2-a.x1)*u,_=a.z1+(a.z2-a.z1)*u,v=new Pt(.1,1,.1);v.translate(f,Ae(f,_)+.5,_),s.D.push(v)}const h=Math.atan2(a.x2-a.x1,a.z2-a.z1)+Math.PI/2;for(const d of[.85,.4]){const u=new Pt(l,.08,.06),f=new ue().makeRotationY(h),_=(a.x1+a.x2)/2,v=(a.z1+a.z2)/2;f.setPosition(_,Ae(_,v)+d,v),u.applyMatrix4(f),s.D.push(u)}}const o=new ht({color:5916208,roughness:.85});for(const a of Object.keys(s)){if(!s[a].length)continue;const l=new it(xn(s[a],!1),o);l.castShadow=!0,l.receiveShadow=!0,t.add(l)}}return Q1().forEach((s,r)=>{const a=s.w-1,l=s.d-.5*2,c=[],h=.35,d=.4;for(const[g,b,A,C]of[[a+d*2,d,0,-l/2],[a+d*2,d,0,l/2],[d,l,-a/2,0],[d,l,a/2,0]]){const P=new Pt(g,h,b);P.translate(s.cx+A,s.y+h/2-.05,s.cz+C),c.push(P)}const u=new it(xn(c,!1),new ht({color:7035456,roughness:1}));u.castShadow=!0,u.receiveShadow=!0,t.add(u);const f=new it(new ye(a,l),new ht({color:3360842,roughness:.12,metalness:.7,envMapIntensity:.9,transparent:!0,opacity:.95}));f.rotation.x=-Math.PI/2,f.position.set(s.cx,s.y+.12,s.cz),f.receiveShadow=!0,t.add(f),t.userData["paddyWater"+r]=f.material;const _=new ye(.22,.4);_.translate(0,.2,0);const v=xn([_,_.clone().rotateY(Math.PI/2)],!1),p=new ht({color:6982204,roughness:.9,side:Ne}),m=7,M=22,y=new Ie(v,p,m*M),x=new fe;let w=0;for(let g=0;g<m;g++)for(let b=0;b<M;b++){x.position.set(s.cx-a/2+.4+(a-.8)*b/(M-1),s.y+.1,s.cz-l/2+.4+(l-.8)*(g+.5)/m),x.rotation.set(0,(g*M+b)%8*.4,0);const A=.8+(g*31+b*17)%10/10*.5;x.scale.set(A,A,A),x.updateMatrix(),y.setMatrixAt(w++,x.matrix)}y.instanceMatrix.needsUpdate=!0,y.castShadow=!1,y.receiveShadow=!0,t.add(y);const[S,T]=Ri(s.cx,s.cz);ns(S,T,[{id:es("paddy",S,T,r),type:"paddy",x:s.cx,z:s.cz,y:s.y,data:{}}])}),{group:t,houses:e}}const De=.69,Le=.012;function bM(i){let t=2166136261;const e=String(i??"home");for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function Wo(i){let t=i>>>0||1;return function(){t+=1831565813;let e=Math.imul(t^t>>>15,t|1);return e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Xo(i,t){return((typeof i.seed=="number"?i.seed>>>0:bM(i.seed??i.name??"house"))^Math.imul(t>>>0,2654435761))>>>0}const Ya={};function qa(i,t,e=.9){return Ya[i]||(Ya[i]=new ht({color:t,roughness:e,metalness:0})),Ya[i]}function zd(i){const t=i||{},e=t.wood||t.timber||t.beam||t.frame||qa("wood",8018490),n=t.dark||t.iron||t.charcoal||t.kitchen||qa("dark",3025446,.85),s=t.ceramic||t.pot||t.clay||t.plaster||qa("ceramic",12101774,.6),r=t.stone||t.rock||t.step||n,o=t.fabric||t.cloth||t.curtain||t.noren||n;return{wood:e,dark:n,ceramic:s,stone:r,fabric:o}}function un(i,t,e,n,s,r,o,a=0){const l=new Pt(t,e,n);a&&l.rotateY(a),l.translate(s,r,o),i.push(l)}function Zn(i,t,e,n,s,r,o,a,l=!1){const c=new ge(t,e,n,s,1,l);c.translate(r,o,a),i.push(c)}function EM(i,t,e,n,s,r,o){const a=new pc(t,e,n);a.translate(s,r,o),i.push(a)}function TM(i,t,e,n,s,r,o,a,l=8,c=6){const h=new On(t,l,c);h.scale(e,n,s),h.translate(r,o,a),i.push(h)}function AM(i,t,e,n,s,r,o){const a=new ge(t,t,e,n);a.rotateX(Math.PI/2),a.translate(s,r,o),i.push(a)}function kd(i,t,e,n,s,r,o=0,a="z"){const l=new ge(t,t,e,6);o&&(a==="z"?l.rotateX(o):l.rotateZ(o)),l.translate(n,s,r),i.push(l)}function Fn(i,t,e){if(!t.length)return null;const n=xn(t,!1);for(const r of t)r.dispose();if(!n)return null;const s=new it(n,e);return i.add(s),s}function RM(i,t,e){const n=[],s=zd(e),r=Math.max(2.2,t.w??3.4),o=Math.max(2.4,t.d??3.6),a=t.kind??"home",l=-o/2+.25,c=r/2-.2,h=Math.max(.8,c-.35);return a==="home"?Tu(i,t,s,{w:r,d:o,zBack:l,sideX:c,hw:h}):a==="shop"?CM(i,t,s,{w:r,d:o,zBack:l},n):a==="farm"||a==="shed"?PM(i,t,s,{d:o,zBack:l,sideX:c}):a==="hero"?DM(i,t,s,{zBack:l,hw:h}):Tu(i,t,s,{w:r,d:o,zBack:l,sideX:c,hw:h}),{cloth:n}}function Tu(i,t,e,n){const s=Wo(Xo(t,48879)),r=[],o=[],a=[],{zBack:l,sideX:c,hw:h}=n,d=Math.min(1.7,n.w-1.2),u=-Math.min(.9,h*.45)+(s()-.5)*.2,f=l+.3,_=Math.min(1.15,(t.wallH??1.9)-.55),v=d/2-.04;for(const S of[-1,1])un(r,.08,_,.32,u+S*v,De+Le+_/2,f);const p=[.28,.58,.88].filter(S=>S<_);for(const S of p)un(r,d,.05,.34,u,De+Le+S,f);const m=5+Math.floor(s()*3);for(let S=0;S<m;S++){const T=p[S%p.length],g=u-d/2+.18+S*(d-.36)/Math.max(1,m-1)+(s()-.5)*.04,b=.055+s()*.035,A=S%3===2?.07+s()*.03:.12+s()*.06;Zn(a,b,b*.85,A,8,g,De+Le+T+.025+A/2,f+(s()-.5)*.1)}const M=c-.32;AM(o,.17,Math.min(1.6,n.d-1.4),8,M,De+Le+.17,-.15),un(o,.38,.12,.26,M,De+Le+.06,.78);const y=-(c-.38);un(r,.46,.44,.46,y,De+Le+.22,.62),un(r,.4,.36,.4,y+.03,De+Le+.44+.012+.18,.6);const x=Math.min(h,c-.55),w=l+.62;un(r,.72,.24,.5,x,De+Le+.12,w),un(o,.42,.36,.42,x-.08,De+Le+.24+.012+.18,w),Zn(o,.16,.14,.15,8,x-.08,De+Le+.24+.012+.36+.012+.075,w);for(let S=0;S<3;S++)Zn(a,.09,.09,.026,8,x+.16+S%2*.02,De+Le+.24+.012+.013+Math.floor(S/2)*.03,w-.12+S*.11);Fn(i,r,e.wood),Fn(i,o,e.dark),Fn(i,a,e.ceramic)}function CM(i,t,e,n,s){const r=Wo(Xo(t,81)),o=[],a=[],{zBack:l}=n,c=Math.min(2,n.w-1),h=n.d/2-1.05;un(o,c,.55,.5,0,De+Le+.275,h),un(o,c+.1,.05,.58,0,De+Le+.55+.025,h);const d=Math.min(1.9,n.w-1);for(const p of[.55,.92])un(o,d,.05,.32,0,De+Le+p,l+.28);for(let p=0;p<8;p++){const m=p<4?.55:.92,M=-d/2+.2+p%4*((d-.4)/3)+(r()-.5)*.03,y=.06+r()*.03,x=.13+r()*.07;Zn(a,y,y*.85,x,8,M,De+Le+m+.025+x/2,l+.28)}Fn(i,o,e.wood),Fn(i,a,e.ceramic);const u=.72,f=Math.min(.9,(t.wallH??1.9)-.7),_=new ye(u,f),v=new it(_,e.fabric);v.material&&v.material.side!==void 0&&(v.material=v.material),v.material.side=Ne,v.position.set(Math.min(.85,n.w/2-.7),De+Le+f/2+.55,l+.16),i.add(v),s.push({mesh:v,phase:r()*Math.PI*2,amp:.09+r()*.03})}function PM(i,t,e,n){const s=Wo(Xo(t,244)),r=String(t.name??"").toLowerCase().startsWith("barn"),o=[],a=[],{zBack:l,sideX:c}=n,h=-(c-.18);for(const u of[.45,.85])un(o,.06,.06,Math.min(1.6,n.d-1.2),h,De+Le+u,-.1);const d=r?2:3;for(let u=0;u<d;u++){const f=-.6+u*.42+(s()-.5)*.06;kd(o,.022,1.25,h+.16,De+Le+.62,f,.18,"z"),un(a,.05,.22,.04,h+.27,De+Le+.35,f)}if(!r){for(let u=0;u<3;u++)TM(a,.24,1,.62,1,.5+u%2*.42+(s()-.5)*.08,De+Le+.15,l+.55+Math.floor(u/2)*.42);Zn(o,.2,.15,.26,8,-.3,De+Le+.13,l+.6,!0),Zn(o,.17,.13,.22,8,-.72,De+Le+.11,l+.62,!0);for(let u=0;u<6;u++)un(o,.22,.16,.5,-.9+u*.26,De+Le+.08,l+.32)}Fn(i,o,e.wood),Fn(i,a,e.dark)}function DM(i,t,e,n){const s=[],r=[],{zBack:o,hw:a}=n,l=-Math.min(.9,a*.5),c=o+.45;Zn(s,.07,.11,.34,10,l,De+Le+.17,c),Zn(s,.05,.05,.06,8,l,De+Le+.34+.03,c);const h=new Qn(.11,0);h.translate(l+.42,De+Le+.08,c+.05),r.push(h),Fn(i,s,e.ceramic),Fn(i,r,e.stone)}function LM(i,t,e){const n=[],s=zd(e),r=Wo(Xo(t,225)),o=Math.max(2.4,t.d??3.6),a=t.kind??"home",l=o/2,c=r()<.5?-1:1,h=[],d=[];Zn(h,.3,.34,.07,10,(r()-.5)*.2,.055,l+.95);const u=c*.62,f=l+.38;if(un(d,.11,.09,.26,u,.065,f,(r()-.5)*.3),un(d,.11,.09,.26,u+.15*c,.065,f+.03,(r()-.5)*.3),a==="home"||a==="farm"){const _=-c*.72,v=l+.36;Zn(d,.13,.11,.42,8,_,.02+.21,v),kd(d,.015,.72,_,.02+.36,v,.06,"z"),EM(d,.13,.24,8,_+.02,.02+.72+.1,v)}return Fn(i,h,s.stone),Fn(i,d,s.dark),{cloth:n}}function IM(i,t,e,n){const s=new Qt;s.name="torii";const r=Ae(t,e),o=new ht({color:9054750,roughness:.6}),a=new ht({color:2763310,roughness:.7}),l={W:[],D:[]},c=p=>{const m=new ge(.14,.17,3,10);m.translate(p*1.1,1.5,0),l.W.push(m);const M=new ge(.22,.26,.3,10);M.translate(p*1.1,.15,0),l.D.push(M)};c(-1),c(1);const h=new Pt(3.4,.22,.3);h.translate(0,3.1,0),l.W.push(h);const d=new Pt(3.7,.12,.42);d.translate(0,3.28,0),l.D.push(d);const u=new Pt(2.4,.16,.16);u.translate(0,2.55,0),l.W.push(u);const f=new Pt(.14,.6,.14);f.translate(0,2.85,0),l.W.push(f);for(const[p,m]of[["W",o],["D",a]]){if(!l[p].length)continue;const M=new it(xn(l[p],!1),m);M.castShadow=!0,M.receiveShadow=!0,s.add(M)}s.position.set(t,r,e),s.rotation.y=n;const[_,v]=[Ri(t,e)[0],Ri(t,e)[1]];return ns(_,v,[{id:es("torii",_,v,0),type:"torii",x:t,z:e,y:r,data:{}}]),{group:s}}function NM(i,t,e,n){const s=new Qt;s.name="shrine";const r=Ae(t,e),o=new ht({color:9145222,roughness:.95}),a=new ht({color:4864552,roughness:.85}),l=new ht({color:3352861,roughness:.9}),c={S:[],W:[],D:[]},h=new Pt(5,.6,4);h.translate(0,.3,0),c.S.push(h);for(let y=0;y<3;y++){const x=new Pt(1.6,.18,.5);x.translate(0,.09+y*.18,2+.25+(2-y)*.42),c.S.push(x)}for(const[y,x]of[[-1.5,-1],[1.5,-1],[-1.5,1],[1.5,1]]){const w=new Pt(.18,2.2,.18);w.translate(y,.6+1.1,x),c.W.push(w)}const d=new Pt(3.6,1.5,2.6);d.translate(0,.6+1.35,0),c.W.push(d);const u=new Pt(.7,1.1,.06);u.translate(0,.6+.85,1.32),c.D.push(u);for(const y of[1,-1]){const x=new Pt(4.6,.1,2.2),w=new ue().makeRotationX(y>0?.62:-.62);w.setPosition(0,3.35,y*.85),x.applyMatrix4(w),c.D.push(x)}const f=new Pt(4.6,.14,.3);f.translate(0,3.95,0),c.D.push(f);for(let y=0;y<=10;y++){const x=y/10,w=-2.4+x*4.8;for(const S of[-1.9,1.9]){if(S>0&&Math.abs(w)<1.1)continue;const T=new Pt(.09,.7,.09);T.translate(w,.6+.35,S),c.D.push(T)}}const _=new Pt(4.9,.07,.08);_.translate(0,.6+.68,-1.9),c.D.push(_);const v=y=>y==="S"?o:y==="W"?a:l;for(const y of Object.keys(c)){if(!c[y].length)continue;const x=new it(xn(c[y],!1),v(y));x.castShadow=!0,x.receiveShadow=!0,s.add(x)}const p=new it(new Pt(.8,.5,.4),l);p.position.set(0,.85,1.7),p.castShadow=!0,s.add(p),s.position.set(t,r,e),s.rotation.y=n;const[m,M]=Ri(t,e);return ns(m,M,[{id:es("shrine",m,M,0),type:"shrine",x:t,z:e,y:r,data:{}}]),{group:s}}const Ye=new gv({antialias:!0,powerPreference:"high-performance"});Ye.setPixelRatio(Math.min(window.devicePixelRatio||1,2));window.addEventListener("tsuki-quality",i=>{try{const t=i&&i.detail,e=t==="low"?1:t==="medium"?1.5:2;Ye.setPixelRatio(Math.min(window.devicePixelRatio||1,e))}catch{}});Ye.setSize(window.innerWidth,window.innerHeight);Ye.shadowMap.enabled=!0;Ye.shadowMap.type=lr;Ye.toneMapping=Io;Ye.toneMappingExposure=1.06;try{const i=new URLSearchParams(location.search).get("tone");i==="agx"&&mr!==void 0?Ye.toneMapping=mr:i==="neutral"&&gr!==void 0&&(Ye.toneMapping=gr)}catch{}document.getElementById("app").appendChild(Ye.domElement);const ve=new rp,ze=fd();vd(ze);const{sun:UM,hemi:OM,skyMat:FM}=Uv(ve,Ye),Yo=new Qt;Yo.name="hero_machiya";const qo=Pv(ze),BM=Dv(ze),wo=Lv(ze);Yo.add(qo.group,BM.group,wo.group);kv(Yo,{nageshiY:2.2,eaveY:3.7,doorX:qo.openBayX});const Nc=[],Uc=[],Ko=i=>(i?.userData?.sway&&Nc.push(i),i?.userData?.tick&&Uc.push(i.userData.tick),i),is=c1({scene:ve,heroGroup:Yo});is.houses.forEach((i,t)=>{const[e,n]=Ri(i.pos.x,i.pos.z);ns(e,n,[{id:es("house",e,n,t),type:i.name==="hero"?"hero":"house",x:i.pos.x,z:i.pos.z,y:0,data:{name:i.name}}])});window.__world={stats:Ld};const zM=cM();ve.add(zM.group);const kM=hM();ve.add(kM.group);const GM=pM();ve.add(GM.group);const Oc=MM(ze);ve.add(Oc.group);for(const i of Oc.tickers)Uc.push(i);for(const i of Oc.vegRoots)Nc.push(i);const Fc=wM(ze);{const i=NM(ze,-48,-28,-2.03);ve.add(i.group);const t=IM(ze,-51,-29.5,2.68);ve.add(t.group)}ve.add(Fc.group);for(const i of Fc.houses)is.houses.push({name:i.name,group:i.group,glowMats:i.glowMats,pos:i.pos});const Xl=[];function HM(i){if(i.params&&i.params.isShop)return"shop";const t=String(i.name||"").toLowerCase(),e=i.params&&i.params.winLayout;return t.startsWith("shed")||Array.isArray(e)&&e.length&&e.every(n=>!n)?"shed":t.startsWith("hamlet")||t.startsWith("farm")||t.startsWith("barn")?"farm":t==="hero"||t.startsWith("hero")?"hero":"home"}function VM(i,t){if(i.params&&typeof i.params.seed=="number")return i.params.seed>>>0;let e=2166136261;const n=String(i.name||"house"+t);for(let s=0;s<n.length;s++)e^=n.charCodeAt(s),e=Math.imul(e,16777619);return(e^Math.imul(t+1>>>0,2654435761))>>>0}for(let i=0;i<is.houses.length;i++){const t=is.houses[i],e=HM(t),n=VM(t,i),s={...t.params||{},name:t.name,kind:e,seed:n};e==="hero"&&(s.w=10,s.d=6.4,s.wallH=2.9);const r=RM(t.group,s,ze),o=LM(t.group,s,ze);if(r&&r.cloth)for(const a of r.cloth)Xl.push(a);if(o&&o.cloth)for(const a of o.cloth)Xl.push(a)}console.log("WORLD registry: "+JSON.stringify(Ld()));const gn=S1(is);ve.add(gn.group);const WM=iM({lampLights:gn.lampLights,lampGlows:gn.lampGlows,houses:is.houses}),Gd=oM(ze,7.5,24.5,Ae(7.5,24.5));ve.add(Gd.group);O1(ve,ze,{signPos:[6.5,0,14.5],signRy:-.5,plaquePos:[1,0,9.7],plaqueRy:-.35});const Hs=Nv(ze);Hs.group.position.set(-13.5,0,7);ve.add(Hs.group);[[-4.2,4.6,1.3,.75],[6.8,4.4,1,.55],[-8.2,-6.2,1.5,.9],[13.5,-8.5,1.1,.4],[-16,3.5,.9,.65]].forEach(([i,t,e,n],s)=>{const r=Od(ze,s+1,e,n,i,t);r.position.set(i,0,t),ve.add(r),Ko(r)});[[0,-5.5],[-7.6,4.6],[7.5,-8.5]].forEach(([i,t],e)=>{const n=Fd(ze,10+e,i,t);ve.add(n),Ko(n)});[[-3.6,3.4,.55],[3.6,3.4,.5],[11,10.6,.6],[-11,10.6,.55],[-2,-8.6,.5]].forEach(([i,t,e],n)=>{const s=Lc(20+n,e);s.position.set(i,.25,t),ve.add(s),Ko(s)});for(const[i,t,e,n,s]of[[0,4,8,2.5,31],[-6,13,7,4,32],[2,-7.5,20,1.5,33]]){const r=Ic(s,60,[e,n]);r.position.set(i,.04,t),ve.add(r)}{const i=Xa(41,2.4,2);i.rotation.y=-Math.PI/2,i.position.set(-5.08,.9,-1),ve.add(i);const t=Xa(42,3,1.8);t.position.set(-9,.7,-8.92),ve.add(t);const e=Xa(43,2.4,1.8);e.rotation.y=Math.PI/2,e.position.set(-9.68,.7,13.5),ve.add(e)}for(const[i,t,e,n,s]of[[-5.4,2.4,1.6,1,51],[5.4,2.4,1.6,1,52],[-4.2,8.9,1.2,.8,53],[0,4.2,2.2,1.4,54]]){const r=Bd(s,e,n);r.position.set(i,.055,t),r.rotation.y=s,ve.add(r)}for(const[i,t,e,n,s]of[[-3.9,3.7,.9,.9,61],[3.1,3.7,.9,.9,62],[-8.4,2.2,.7,.7,63],[8.9,2.2,.7,.7,64]]){const r=Bd(s,e,n);r.position.set(i,.055,t),r.rotation.y=s*.7,ve.add(r)}for(const[i,t,e,n]of[[-7.5,2.45,71,24],[-1.2,2.45,72,24],[4.8,2.45,73,24],[8.6,3.4,74,18],[-4.2,10.6,75,14]]){const s=Ic(e,n,[1.2,1.2]);s.position.set(i,.04,t),ve.add(s)}for(const[i,t,e,n]of[[-2.5,-5.5,.85,81],[3,-5.2,1,82]]){const s=Lc(n,e);s.position.set(i,.25,t),ve.add(s),Ko(s)}{const i=(s,r)=>((Math.imul(s+1,2654435761)^Math.imul(r,40503))>>>0>>>0)/4294967296,t=[12728868,14711592,10115616,7178812],e=(s,r,o,a,l)=>{const c=new ye(.22,.18),h=new Ie(c,ze.mapleLeaf,a),d=new fe,u=new Ft;for(let f=0;f<a;f++){const _=i(f,l)*Math.PI*2,v=Math.sqrt(i(f,l+1))*o;d.position.set(s+Math.cos(_)*v,.05,r+Math.sin(_)*v),d.rotation.set(-Math.PI/2,0,i(f,l+2)*Math.PI*2),d.updateMatrix(),h.setMatrixAt(f,d.matrix),u.setHex(t[Math.floor(i(f,l+3)*t.length)]),u.offsetHSL((i(f,l+4)-.5)*.05,0,(i(f,l+5)-.5)*.08),h.setColorAt(f,u)}h.instanceMatrix.needsUpdate=!0,h.instanceColor&&(h.instanceColor.needsUpdate=!0),h.receiveShadow=!0,ve.add(h)};e(-4.2,4.6,1.1,60,91),e(6.8,4.4,1,50,92);const n=(s,r,o,a)=>{const l=new Ie(new mc(.05,0),ze.stone,40),c=new fe;for(let h=0;h<40;h++){c.position.set(s+i(h,a)*(r-s),.07,o+(i(h,a+1)-.5)*.5),c.rotation.set(i(h,a+2)*3,i(h,a+3)*3,0);const d=.7+i(h,a+4)*.8;c.scale.set(d,d*.75,d),c.updateMatrix(),l.setMatrixAt(h,c.matrix)}l.instanceMatrix.needsUpdate=!0,l.castShadow=!1,l.receiveShadow=!0,ve.add(l)};n(-6,-1,4.9,93),n(1,6,8.2,94)}const Hd=Vv(ze,{leafSources:[{x:-4.2,z:4.6,r:2.4},{x:6.8,z:4.4,r:2.4},{x:-8.2,z:-6.2,r:2.4},{x:13.5,z:-8.5,r:2.4},{x:-16,z:3.5,r:2.6}]});ve.add(Hd.group);const Zi=Hv({scene:ve,pondWaterMats:[Hs.waterMat],wetMats:ze._wet||[],heightFn:(i,t)=>Ae(i,t),snowMats:[ze.stone,ze.gravel,ze.grass].filter(Boolean)}),Yl=E1(ve),Ns=b1({renderer:Ye,scene:ve,sun:UM,hemi:OM,skyMat:FM,houses:is.houses,lampGlows:gn.lampGlows,lampLights:gn.lampLights,vendGlow:gn.group.userData.vendGlow,stars:Yl.stars,moon:Yl.moon}),{camera:Ai,controls:Ji}=s1(Ye),ss=A1(Ai,Ji),ql=[];try{for(const i of Ki)ql.push({x0:i.cx-i.w/2,x1:i.cx+i.w/2,z0:i.cz-i.d/2,z1:i.cz+i.d/2});for(const i of Fc.houses){const t=(i.w||6)/2,e=(i.d||6)/2;ql.push({x0:i.pos.x-t,x1:i.pos.x+t,z0:i.pos.z-e,z1:i.pos.z+e})}}catch{}const Tr=P1(Ai,Ye.domElement,{heightFn:(i,t)=>Ae(i,t),solids:ql});window.__explore={get on(){try{return Tr.enabled}catch{return!1}}};window.addEventListener("tsuki-explore",i=>{try{if(!!(i&&i.detail)){try{ss.setMode("free")}catch{}Ji.enabled=!1,Tr.setEnabled(!0,{x:0,z:10,yaw:Math.PI})}else{Tr.setEnabled(!1),Ji.enabled=!0;try{ss.setMode("orbit")}catch{}}}catch{}});const Zo=R1(Ai,Ye.domElement);for(const i of qo.sliders||[]){const t=Zo.addSlide(i.node,i.open);t&&(t.t=0)}{const i=(gn.group.userData.radioMeshes||[]).filter(Boolean);i.length&&Zo.onTap(i,()=>{try{const t=Jn.state?Jn.state():null;Jn.setEnabled(t&&typeof t.enabled=="boolean"?!t.enabled:!0)}catch{}})}console.log("INTERACT targets: "+Zo.count);const Jn=M1({camera:Ai,scene:ve,zones:Ki});{const i=gn.group.userData.radioPos||new O(15.5,1.15,14.5);Jn.source&&Jn.source.position.copy(i)}new URLSearchParams(location.search).get("music")==="0"?Jn.setEnabled(!1):y1(Jn);window.__audio=Jn;ss.onMood(({time:i,wx:t}={})=>{i&&Ns.set(i),t&&Zi.setState(t)});const Ar=q1({renderer:Ye,scene:ve,camera:Ai});window.__post=Ar;try{const i=new URLSearchParams(location.search).get("post");Ar.setQuality(i==="high"?"high":i==="low"?"low":"off")}catch{try{Ar.setQuality("off")}catch{}}window.addEventListener("resize",()=>{try{Ar.setSize(window.innerWidth,window.innerHeight)}catch{}});const XM=Hs.waterMat.color.clone(),Au=new Ft;let Kl=60;window.__perf=()=>({calls:Ye.info.render.calls,triangles:Ye.info.render.triangles,geometries:Ye.info.memory.geometries,fps:Math.round(Kl),errors:window.__errors||[]});window.__errors=[];window.addEventListener("error",i=>window.__errors.push(String(i.message)));D1({daytime:Ns,weather:Zi,cine:ss,hudEl:document.getElementById("hud"),audio:Jn});{const i=new URLSearchParams(location.search),t=i.get("time"),e=i.get("wx"),n=i.get("shot");if(t&&Ns.set(t.toUpperCase()),e&&Zi.setState(e.toLowerCase()),n!==null&&(ss.setMode("cine"),ss.goTo(Number(n)||0)),i.get("explore")==="1")try{window.dispatchEvent(new CustomEvent("tsuki-explore",{detail:!0}))}catch{}}const Ka=new Ec,Bc=new URLSearchParams(location.search),Vd=Bc.get("fixed")==="1",bo=F1({fps:Number(Bc.get("fps"))||30}),YM=Bc.get("lodfar")==="1";let Za=0;window.__cine={get frame(){return bo.frame},get t(){return bo.t},get fps(){return bo.fps},mode:Vd?"fixed":"wall"};let Ru=!0;function Wd(){requestAnimationFrame(Wd);let i,t;if(Vd){const s=bo.step();i=s.dt,t=s.t}else Ka.update(),i=Math.min(Ka.getDelta(),.05),t=Ka.getElapsed();i>0&&(Kl+=(1/Math.max(i,.001)-Kl)*.05),Za++;const e=YM?2:Ai.position.length()<60?0:Ai.position.length()<120?1:2,n=e===0||(e===1?Za%2===0:Za%4===0);if(n){Hs.update(t,Zi),Au.copy(XM).lerp(ve.fog.color,.35),Hs.waterMat.color.lerp(Au,.08),Hd.update(t,i);for(const s of Uc)s(t)}qo.noren.children.forEach((s,r)=>{s.rotation.x=Math.sin(t*1.3+r*.9)*.06*(.5+Xn.gust(t))}),wo.lantern.rotation.x=Math.sin(t*.8)*.03,wo.lantern.rotation.z=Math.cos(t*.6)*.03,wo.lanternLight.intensity=5+Math.sin(t*7.3)*.25+Math.sin(t*13.1)*.15,Zi.update(i,t),Ns.update(i,Zi);{const s=Ns.state,r=s==="NIGHT"||s==="MOONLIT"||s==="RAIN_NIGHT"||s==="MIST_NIGHT"?1:s==="SUNSET"||s==="BLUE_HOUR"?.45:0;WM.update(i,t,Zi.state,r)}if(n&&Gd.update(t,i,j1(7.5,24.5,t)),Yl.setMoon(Ns.state==="NIGHT"?1:0),ss.update(i),Jn.update(i),gn&&gn.group&&!gn.group.userData.__householdPushed){gn.group.userData.__householdPushed=!0;for(const s of Xl)gn.cloth.push(s)}w1(gn,t,Xn),n&&vM(Nc,t,Xn),Zo.update(i),Tr.update(i),Tr.enabled||Ji.update();try{window.__cam={pos:Ai.position.toArray(),tgt:Ji&&Ji.target?Ji.target.toArray():[]}}catch{}if(Ar.render(),Ru){Ru=!1;const s=document.getElementById("loader");s.style.opacity="0",setTimeout(()=>s.remove(),700)}}Wd();
