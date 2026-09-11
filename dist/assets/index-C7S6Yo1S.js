(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ta="160",Ai={ROTATE:0,DOLLY:1,PAN:2},Ri={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hu=0,Aa=1,Vu=2,Rl=1,Cl=2,An=3,jn=0,qe=1,we=2,Dn=0,Ji=1,Fo=2,Ra=3,Ca=4,Wu=5,hi=100,Xu=101,Yu=102,Pa=103,La=104,qu=200,ju=201,Ku=202,Zu=203,zo=204,Bo=205,Ju=206,$u=207,Qu=208,th=209,eh=210,nh=211,ih=212,sh=213,rh=214,oh=0,ah=1,ch=2,yr=3,lh=4,uh=5,hh=6,dh=7,Pl=0,fh=1,ph=2,Xn=0,Ll=1,Dl=2,Il=3,ea=4,mh=5,Ul=6,Nl=300,es=301,ns=302,Mr=303,ko=304,Cr=306,As=1e3,un=1001,Go=1002,Xe=1003,Da=1004,Xr=1005,nn=1006,gh=1007,Rs=1008,Yn=1009,_h=1010,xh=1011,na=1012,Ol=1013,Vn=1014,Wn=1015,In=1016,Fl=1017,zl=1018,pi=1020,vh=1021,hn=1023,yh=1024,Mh=1025,mi=1026,is=1027,Sh=1028,Bl=1029,wh=1030,kl=1031,Gl=1033,Yr=33776,qr=33777,jr=33778,Kr=33779,Ia=35840,Ua=35841,Na=35842,Oa=35843,Hl=36196,Fa=37492,za=37496,Ba=37808,ka=37809,Ga=37810,Ha=37811,Va=37812,Wa=37813,Xa=37814,Ya=37815,qa=37816,ja=37817,Ka=37818,Za=37819,Ja=37820,$a=37821,Zr=36492,Qa=36494,tc=36495,Eh=36283,ec=36284,nc=36285,ic=36286,Vl=3e3,gi=3001,bh=3200,Th=3201,Wl=0,Ah=1,sn="",Se="srgb",Un="srgb-linear",ia="display-p3",Pr="display-p3-linear",Sr="linear",fe="srgb",wr="rec709",Er="p3",Ci=7680,sc=519,Rh=512,Ch=513,Ph=514,Xl=515,Lh=516,Dh=517,Ih=518,Uh=519,rc=35044,oc="300 es",Ho=1035,Pn=2e3,br=2001;class yi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ac=1234567;const Ss=Math.PI/180,ss=180/Math.PI;function Mi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function Ae(i,t,e){return Math.max(t,Math.min(e,i))}function sa(i,t){return(i%t+t)%t}function Nh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Oh(i,t,e){return i!==t?(e-i)/(t-i):0}function ws(i,t,e){return(1-e)*i+e*t}function Fh(i,t,e,n){return ws(i,t,1-Math.exp(-e*n))}function zh(i,t=1){return t-Math.abs(sa(i,t*2)-t)}function Bh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function kh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Gh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Hh(i,t){return i+Math.random()*(t-i)}function Vh(i){return i*(.5-Math.random())}function Wh(i){i!==void 0&&(ac=i);let t=ac+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Xh(i){return i*Ss}function Yh(i){return i*ss}function Vo(i){return(i&i-1)===0&&i!==0}function qh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Tr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function jh(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),u=a((t+n)/2),h=r((t-n)/2),d=a((t-n)/2),p=r((n-t)/2),_=a((n-t)/2);switch(s){case"XYX":i.set(o*u,c*h,c*d,o*l);break;case"YZY":i.set(c*d,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*d,o*u,o*l);break;case"XZX":i.set(o*u,c*_,c*p,o*l);break;case"YXY":i.set(c*p,o*u,c*_,o*l);break;case"ZYZ":i.set(c*_,c*p,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Yi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function He(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ie={DEG2RAD:Ss,RAD2DEG:ss,generateUUID:Mi,clamp:Ae,euclideanModulo:sa,mapLinear:Nh,inverseLerp:Oh,lerp:ws,damp:Fh,pingpong:zh,smoothstep:Bh,smootherstep:kh,randInt:Gh,randFloat:Hh,randFloatSpread:Vh,seededRandom:Wh,degToRad:Xh,radToDeg:Yh,isPowerOfTwo:Vo,ceilPowerOfTwo:qh,floorPowerOfTwo:Tr,setQuaternionFromProperEuler:jh,normalize:He,denormalize:Yi};class nt{constructor(t=0,e=0){nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class te{constructor(t,e,n,s,r,a,o,c,l){te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],p=n[5],_=n[8],x=s[0],m=s[3],f=s[6],M=s[1],g=s[4],y=s[7],b=s[2],w=s[5],A=s[8];return r[0]=a*x+o*M+c*b,r[3]=a*m+o*g+c*w,r[6]=a*f+o*y+c*A,r[1]=l*x+u*M+h*b,r[4]=l*m+u*g+h*w,r[7]=l*f+u*y+h*A,r[2]=d*x+p*M+_*b,r[5]=d*m+p*g+_*w,r[8]=d*f+p*y+_*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=u*a-o*l,d=o*c-u*r,p=l*r-a*c,_=e*h+n*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=h*x,t[1]=(s*l-u*n)*x,t[2]=(o*n-s*a)*x,t[3]=d*x,t[4]=(u*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=p*x,t[7]=(n*c-l*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Jr.makeScale(t,e)),this}rotate(t){return this.premultiply(Jr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Jr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Jr=new te;function Yl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ar(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kh(){const i=Ar("canvas");return i.style.display="block",i}const cc={};function Es(i){i in cc||(cc[i]=!0,console.warn(i))}const lc=new te().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),uc=new te().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),zs={[Un]:{transfer:Sr,primaries:wr,toReference:i=>i,fromReference:i=>i},[Se]:{transfer:fe,primaries:wr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Pr]:{transfer:Sr,primaries:Er,toReference:i=>i.applyMatrix3(uc),fromReference:i=>i.applyMatrix3(lc)},[ia]:{transfer:fe,primaries:Er,toReference:i=>i.convertSRGBToLinear().applyMatrix3(uc),fromReference:i=>i.applyMatrix3(lc).convertLinearToSRGB()}},Zh=new Set([Un,Pr]),he={enabled:!0,_workingColorSpace:Un,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Zh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=zs[t].toReference,s=zs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return zs[i].primaries},getTransfer:function(i){return i===sn?Sr:zs[i].transfer}};function $i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $r(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Pi;class ql{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Pi===void 0&&(Pi=Ar("canvas")),Pi.width=t.width,Pi.height=t.height;const n=Pi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Pi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ar("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=$i(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($i(e[n]/255)*255):e[n]=$i(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Jh=0;class jl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=Mi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Qr(s[a].image)):r.push(Qr(s[a]))}else r=Qr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Qr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ql.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $h=0;class Ke extends yi{constructor(t=Ke.DEFAULT_IMAGE,e=Ke.DEFAULT_MAPPING,n=un,s=un,r=nn,a=Rs,o=hn,c=Yn,l=Ke.DEFAULT_ANISOTROPY,u=sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=Mi(),this.name="",this.source=new jl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===gi?Se:sn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case As:t.x=t.x-Math.floor(t.x);break;case un:t.x=t.x<0?0:1;break;case Go:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case As:t.y=t.y-Math.floor(t.y);break;case un:t.y=t.y<0?0:1;break;case Go:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Se?gi:Vl}set encoding(t){Es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===gi?Se:sn}}Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=Nl;Ke.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,n=0,s=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],_=c[9],x=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const g=(l+1)/2,y=(p+1)/2,b=(f+1)/2,w=(u+d)/4,A=(h+x)/4,T=(_+m)/4;return g>y&&g>b?g<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(g),s=w/n,r=A/n):y>b?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=T/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=A/r,s=T/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-_)*(m-_)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(h-x)/M,this.z=(d-u)/M,this.w=Math.acos((l+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qh extends yi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const s={width:t,height:e,depth:1};n.encoding!==void 0&&(Es("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===gi?Se:sn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ke(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new jl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dn extends Qh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Kl extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class td extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[a+0],p=r[a+1],_=r[a+2],x=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=_,t[e+3]=x;return}if(h!==x||c!==d||l!==p||u!==_){let m=1-o;const f=c*d+l*p+u*_+h*x,M=f>=0?1:-1,g=1-f*f;if(g>Number.EPSILON){const b=Math.sqrt(g),w=Math.atan2(b,f*M);m=Math.sin(m*w)/b,o=Math.sin(o*w)/b}const y=o*M;if(c=c*m+d*y,l=l*m+p*y,u=u*m+_*y,h=h*m+x*y,m===1-o){const b=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=b,l*=b,u*=b,h*=b}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],d=r[a+1],p=r[a+2],_=r[a+3];return t[e]=o*_+u*h+c*p-l*d,t[e+1]=c*_+u*d+l*h-o*p,t[e+2]=l*_+u*p+o*d-c*h,t[e+3]=u*_-o*h-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),d=c(n/2),p=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*p*_,this._y=l*p*h-d*u*_,this._z=l*u*_+d*p*h,this._w=l*u*h-d*p*_;break;case"YXZ":this._x=d*u*h+l*p*_,this._y=l*p*h-d*u*_,this._z=l*u*_-d*p*h,this._w=l*u*h+d*p*_;break;case"ZXY":this._x=d*u*h-l*p*_,this._y=l*p*h+d*u*_,this._z=l*u*_+d*p*h,this._w=l*u*h-d*p*_;break;case"ZYX":this._x=d*u*h-l*p*_,this._y=l*p*h+d*u*_,this._z=l*u*_-d*p*h,this._w=l*u*h+d*p*_;break;case"YZX":this._x=d*u*h+l*p*_,this._y=l*p*h+d*u*_,this._z=l*u*_-d*p*h,this._w=l*u*h-d*p*_;break;case"XZY":this._x=d*u*h-l*p*_,this._y=l*p*h-d*u*_,this._z=l*u*_+d*p*h,this._w=l*u*h+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(hc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(hc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),u=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return to.copy(this).projectOnVector(t),this.sub(to)}reflect(t){return this.sub(to.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const to=new I,hc=new mn;class Zn{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(on.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(on.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=on.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,on):on.fromBufferAttribute(r,a),on.applyMatrix4(t.matrixWorld),this.expandByPoint(on);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Bs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bs.copy(n.boundingBox)),Bs.applyMatrix4(t.matrixWorld),this.union(Bs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,on),on.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fs),ks.subVectors(this.max,fs),Li.subVectors(t.a,fs),Di.subVectors(t.b,fs),Ii.subVectors(t.c,fs),Fn.subVectors(Di,Li),zn.subVectors(Ii,Di),ni.subVectors(Li,Ii);let e=[0,-Fn.z,Fn.y,0,-zn.z,zn.y,0,-ni.z,ni.y,Fn.z,0,-Fn.x,zn.z,0,-zn.x,ni.z,0,-ni.x,-Fn.y,Fn.x,0,-zn.y,zn.x,0,-ni.y,ni.x,0];return!eo(e,Li,Di,Ii,ks)||(e=[1,0,0,0,1,0,0,0,1],!eo(e,Li,Di,Ii,ks))?!1:(Gs.crossVectors(Fn,zn),e=[Gs.x,Gs.y,Gs.z],eo(e,Li,Di,Ii,ks))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,on).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(on).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Mn=[new I,new I,new I,new I,new I,new I,new I,new I],on=new I,Bs=new Zn,Li=new I,Di=new I,Ii=new I,Fn=new I,zn=new I,ni=new I,fs=new I,ks=new I,Gs=new I,ii=new I;function eo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ii.fromArray(i,r);const o=s.x*Math.abs(ii.x)+s.y*Math.abs(ii.y)+s.z*Math.abs(ii.z),c=t.dot(ii),l=e.dot(ii),u=n.dot(ii);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const ed=new Zn,ps=new I,no=new I;class cs{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ed.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ps.subVectors(t,this.center);const e=ps.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ps,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(no.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ps.copy(t.center).add(no)),this.expandByPoint(ps.copy(t.center).sub(no))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sn=new I,io=new I,Hs=new I,Bn=new I,so=new I,Vs=new I,ro=new I;class ra{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sn.copy(this.origin).addScaledVector(this.direction,e),Sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){io.copy(t).add(e).multiplyScalar(.5),Hs.copy(e).sub(t).normalize(),Bn.copy(this.origin).sub(io);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Hs),o=Bn.dot(this.direction),c=-Bn.dot(Hs),l=Bn.lengthSq(),u=Math.abs(1-a*a);let h,d,p,_;if(u>0)if(h=a*c-o,d=a*o-c,_=r*u,h>=0)if(d>=-_)if(d<=_){const x=1/u;h*=x,d*=x,p=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d<=-_?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l):d<=_?(h=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(io).addScaledVector(Hs,d),p}intersectSphere(t,e){Sn.subVectors(t.center,this.origin);const n=Sn.dot(this.direction),s=Sn.dot(Sn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,n,s,r){so.subVectors(e,t),Vs.subVectors(n,t),ro.crossVectors(so,Vs);let a=this.direction.dot(ro),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bn.subVectors(this.origin,t);const c=o*this.direction.dot(Vs.crossVectors(Bn,Vs));if(c<0)return null;const l=o*this.direction.dot(so.cross(Bn));if(l<0||c+l>a)return null;const u=-o*Bn.dot(ro);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(t,e,n,s,r,a,o,c,l,u,h,d,p,_,x,m){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,u,h,d,p,_,x,m)}set(t,e,n,s,r,a,o,c,l,u,h,d,p,_,x,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=_,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ui.setFromMatrixColumn(t,0).length(),r=1/Ui.setFromMatrixColumn(t,1).length(),a=1/Ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=a*u,p=a*h,_=o*u,x=o*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=p+_*l,e[5]=d-x*l,e[9]=-o*c,e[2]=x-d*l,e[6]=_+p*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*u,p=c*h,_=l*u,x=l*h;e[0]=d+x*o,e[4]=_*o-p,e[8]=a*l,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=p*o-_,e[6]=x+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*u,p=c*h,_=l*u,x=l*h;e[0]=d-x*o,e[4]=-a*h,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*u,e[9]=x-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*u,p=a*h,_=o*u,x=o*h;e[0]=c*u,e[4]=_*l-p,e[8]=d*l+x,e[1]=c*h,e[5]=x*l+d,e[9]=p*l-_,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,p=a*l,_=o*c,x=o*l;e[0]=c*u,e[4]=x-d*h,e[8]=_*h+p,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=p*h+_,e[10]=d-x*h}else if(t.order==="XZY"){const d=a*c,p=a*l,_=o*c,x=o*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+x,e[5]=a*u,e[9]=p*h-_,e[2]=_*h-p,e[6]=o*u,e[10]=x*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(nd,t,id)}lookAt(t,e,n){const s=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),kn.crossVectors(n,Ze),kn.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),kn.crossVectors(n,Ze)),kn.normalize(),Ws.crossVectors(Ze,kn),s[0]=kn.x,s[4]=Ws.x,s[8]=Ze.x,s[1]=kn.y,s[5]=Ws.y,s[9]=Ze.y,s[2]=kn.z,s[6]=Ws.z,s[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],p=n[13],_=n[2],x=n[6],m=n[10],f=n[14],M=n[3],g=n[7],y=n[11],b=n[15],w=s[0],A=s[4],T=s[8],v=s[12],S=s[1],P=s[5],D=s[9],B=s[13],L=s[2],O=s[6],F=s[10],k=s[14],H=s[3],q=s[7],Z=s[11],tt=s[15];return r[0]=a*w+o*S+c*L+l*H,r[4]=a*A+o*P+c*O+l*q,r[8]=a*T+o*D+c*F+l*Z,r[12]=a*v+o*B+c*k+l*tt,r[1]=u*w+h*S+d*L+p*H,r[5]=u*A+h*P+d*O+p*q,r[9]=u*T+h*D+d*F+p*Z,r[13]=u*v+h*B+d*k+p*tt,r[2]=_*w+x*S+m*L+f*H,r[6]=_*A+x*P+m*O+f*q,r[10]=_*T+x*D+m*F+f*Z,r[14]=_*v+x*B+m*k+f*tt,r[3]=M*w+g*S+y*L+b*H,r[7]=M*A+g*P+y*O+b*q,r[11]=M*T+g*D+y*F+b*Z,r[15]=M*v+g*B+y*k+b*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],p=t[14],_=t[3],x=t[7],m=t[11],f=t[15];return _*(+r*c*h-s*l*h-r*o*d+n*l*d+s*o*p-n*c*p)+x*(+e*c*p-e*l*d+r*a*d-s*a*p+s*l*u-r*c*u)+m*(+e*l*h-e*o*p-r*a*h+n*a*p+r*o*u-n*l*u)+f*(-s*o*u-e*c*h+e*o*d+s*a*h-n*a*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],p=t[11],_=t[12],x=t[13],m=t[14],f=t[15],M=h*m*l-x*d*l+x*c*p-o*m*p-h*c*f+o*d*f,g=_*d*l-u*m*l-_*c*p+a*m*p+u*c*f-a*d*f,y=u*x*l-_*h*l+_*o*p-a*x*p-u*o*f+a*h*f,b=_*h*c-u*x*c-_*o*d+a*x*d+u*o*m-a*h*m,w=e*M+n*g+s*y+r*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=M*A,t[1]=(x*d*r-h*m*r-x*s*p+n*m*p+h*s*f-n*d*f)*A,t[2]=(o*m*r-x*c*r+x*s*l-n*m*l-o*s*f+n*c*f)*A,t[3]=(h*c*r-o*d*r-h*s*l+n*d*l+o*s*p-n*c*p)*A,t[4]=g*A,t[5]=(u*m*r-_*d*r+_*s*p-e*m*p-u*s*f+e*d*f)*A,t[6]=(_*c*r-a*m*r-_*s*l+e*m*l+a*s*f-e*c*f)*A,t[7]=(a*d*r-u*c*r+u*s*l-e*d*l-a*s*p+e*c*p)*A,t[8]=y*A,t[9]=(_*h*r-u*x*r-_*n*p+e*x*p+u*n*f-e*h*f)*A,t[10]=(a*x*r-_*o*r+_*n*l-e*x*l-a*n*f+e*o*f)*A,t[11]=(u*o*r-a*h*r-u*n*l+e*h*l+a*n*p-e*o*p)*A,t[12]=b*A,t[13]=(u*x*s-_*h*s+_*n*d-e*x*d-u*n*m+e*h*m)*A,t[14]=(_*o*s-a*x*s-_*n*c+e*x*c+a*n*m-e*o*m)*A,t[15]=(a*h*s-u*o*s+u*n*c-e*h*c-a*n*d+e*o*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,h=o+o,d=r*l,p=r*u,_=r*h,x=a*u,m=a*h,f=o*h,M=c*l,g=c*u,y=c*h,b=n.x,w=n.y,A=n.z;return s[0]=(1-(x+f))*b,s[1]=(p+y)*b,s[2]=(_-g)*b,s[3]=0,s[4]=(p-y)*w,s[5]=(1-(d+f))*w,s[6]=(m+M)*w,s[7]=0,s[8]=(_+g)*A,s[9]=(m-M)*A,s[10]=(1-(d+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ui.set(s[0],s[1],s[2]).length();const a=Ui.set(s[4],s[5],s[6]).length(),o=Ui.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],an.copy(this);const l=1/r,u=1/a,h=1/o;return an.elements[0]*=l,an.elements[1]*=l,an.elements[2]*=l,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=h,an.elements[9]*=h,an.elements[10]*=h,e.setFromRotationMatrix(an),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Pn){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let p,_;if(o===Pn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===br)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Pn){const c=this.elements,l=1/(e-t),u=1/(n-s),h=1/(a-r),d=(e+t)*l,p=(n+s)*u;let _,x;if(o===Pn)_=(a+r)*h,x=-2*h;else if(o===br)_=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ui=new I,an=new re,nd=new I(0,0,0),id=new I(1,1,1),kn=new I,Ws=new I,Ze=new I,dc=new re,fc=new mn;class Nn{constructor(t=0,e=0,n=0,s=Nn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ae(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return dc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(dc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fc.setFromEuler(this),this.setFromQuaternion(fc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nn.DEFAULT_ORDER="XYZ";class Zl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let sd=0;const pc=new I,Ni=new mn,wn=new re,Xs=new I,ms=new I,rd=new I,od=new mn,mc=new I(1,0,0),gc=new I(0,1,0),_c=new I(0,0,1),ad={type:"added"},cd={type:"removed"};class ae extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ae.DEFAULT_UP.clone();const t=new I,e=new Nn,n=new mn,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new te}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ni.setFromAxisAngle(t,e),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(t,e){return Ni.setFromAxisAngle(t,e),this.quaternion.premultiply(Ni),this}rotateX(t){return this.rotateOnAxis(mc,t)}rotateY(t){return this.rotateOnAxis(gc,t)}rotateZ(t){return this.rotateOnAxis(_c,t)}translateOnAxis(t,e){return pc.copy(t).applyQuaternion(this.quaternion),this.position.add(pc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(mc,t)}translateY(t){return this.translateOnAxis(gc,t)}translateZ(t){return this.translateOnAxis(_c,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Xs.copy(t):Xs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(ms,Xs,this.up):wn.lookAt(Xs,ms,this.up),this.quaternion.setFromRotationMatrix(wn),s&&(wn.extractRotation(s.matrixWorld),Ni.setFromRotationMatrix(wn),this.quaternion.premultiply(Ni.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(ad)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cd)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(wn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,t,rd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,od,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ae.DEFAULT_UP=new I(0,1,0);ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new I,En=new I,oo=new I,bn=new I,Oi=new I,Fi=new I,xc=new I,ao=new I,co=new I,lo=new I;let Ys=!1;class ln{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),cn.subVectors(t,e),s.cross(cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){cn.subVectors(s,e),En.subVectors(n,e),oo.subVectors(t,e);const a=cn.dot(cn),o=cn.dot(En),c=cn.dot(oo),l=En.dot(En),u=En.dot(oo),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(l*c-o*u)*d,_=(a*u-o*c)*d;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getUV(t,e,n,s,r,a,o,c){return Ys===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ys=!0),this.getInterpolation(t,e,n,s,r,a,o,c)}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,bn.x),c.addScaledVector(a,bn.y),c.addScaledVector(o,bn.z),c)}static isFrontFacing(t,e,n,s){return cn.subVectors(n,e),En.subVectors(t,e),cn.cross(En).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),En.subVectors(this.a,this.b),cn.cross(En).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ln.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Ys===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ys=!0),ln.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return ln.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Oi.subVectors(s,n),Fi.subVectors(r,n),ao.subVectors(t,n);const c=Oi.dot(ao),l=Fi.dot(ao);if(c<=0&&l<=0)return e.copy(n);co.subVectors(t,s);const u=Oi.dot(co),h=Fi.dot(co);if(u>=0&&h<=u)return e.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(Oi,a);lo.subVectors(t,r);const p=Oi.dot(lo),_=Fi.dot(lo);if(_>=0&&p<=_)return e.copy(r);const x=p*l-c*_;if(x<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(n).addScaledVector(Fi,o);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return xc.subVectors(r,s),o=(h-u)/(h-u+(p-_)),e.copy(s).addScaledVector(xc,o);const f=1/(m+x+d);return a=x*f,o=d*f,e.copy(n).addScaledVector(Oi,a).addScaledVector(Fi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Jl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},qs={h:0,s:0,l:0};function uo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Se){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=he.workingColorSpace){if(t=sa(t,1),e=Ae(e,0,1),n=Ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=uo(a,r,t+1/3),this.g=uo(a,r,t),this.b=uo(a,r,t-1/3)}return he.toWorkingColorSpace(this,s),this}setStyle(t,e=Se){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Se){const n=Jl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}copyLinearToSRGB(t){return this.r=$r(t.r),this.g=$r(t.g),this.b=$r(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Se){return he.fromWorkingColorSpace(Be.copy(this),t),Math.round(Ae(Be.r*255,0,255))*65536+Math.round(Ae(Be.g*255,0,255))*256+Math.round(Ae(Be.b*255,0,255))}getHexString(t=Se){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(Be.copy(this),e);const n=Be.r,s=Be.g,r=Be.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=Se){he.fromWorkingColorSpace(Be.copy(this),t);const e=Be.r,n=Be.g,s=Be.b;return t!==Se?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Gn),this.setHSL(Gn.h+t,Gn.s+e,Gn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Gn),t.getHSL(qs);const n=ws(Gn.h,qs.h,e),s=ws(Gn.s,qs.s,e),r=ws(Gn.l,qs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new Ut;Ut.NAMES=Jl;let ld=0;class ls extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=Ji,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zo,this.blendDst=Bo,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zo&&(n.blendSrc=this.blendSrc),this.blendDst!==Bo&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Jn extends ls{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new I,js=new nt;class Re{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=rc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)js.fromBufferAttribute(this,e),js.applyMatrix3(t),this.setXY(e,js.x,js.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Yi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yi(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yi(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yi(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==rc&&(t.usage=this.usage),t}}class $l extends Re{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ql extends Re{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ee extends Re{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ud=0;const Qe=new re,ho=new ae,zi=new I,Je=new Zn,gs=new Zn,De=new I;class ge extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yl(t)?Ql:$l)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,n){return Qe.makeTranslation(t,e,n),this.applyMatrix4(Qe),this}scale(t,e,n){return Qe.makeScale(t,e,n),this.applyMatrix4(Qe),this}lookAt(t){return ho.lookAt(t),ho.updateMatrix(),this.applyMatrix4(ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ee(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];gs.setFromBufferAttribute(o),this.morphTargetsRelative?(De.addVectors(Je.min,gs.min),Je.expandByPoint(De),De.addVectors(Je.max,gs.max),Je.expandByPoint(De)):(Je.expandByPoint(gs.min),Je.expandByPoint(gs.max))}Je.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)De.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(De));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)De.fromBufferAttribute(o,l),c&&(zi.fromBufferAttribute(t,l),De.add(zi)),s=Math.max(s,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Re(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let S=0;S<o;S++)l[S]=new I,u[S]=new I;const h=new I,d=new I,p=new I,_=new nt,x=new nt,m=new nt,f=new I,M=new I;function g(S,P,D){h.fromArray(s,S*3),d.fromArray(s,P*3),p.fromArray(s,D*3),_.fromArray(a,S*2),x.fromArray(a,P*2),m.fromArray(a,D*2),d.sub(h),p.sub(h),x.sub(_),m.sub(_);const B=1/(x.x*m.y-m.x*x.y);isFinite(B)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(B),M.copy(p).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(B),l[S].add(f),l[P].add(f),l[D].add(f),u[S].add(M),u[P].add(M),u[D].add(M))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let S=0,P=y.length;S<P;++S){const D=y[S],B=D.start,L=D.count;for(let O=B,F=B+L;O<F;O+=3)g(n[O+0],n[O+1],n[O+2])}const b=new I,w=new I,A=new I,T=new I;function v(S){A.fromArray(r,S*3),T.copy(A);const P=l[S];b.copy(P),b.sub(A.multiplyScalar(A.dot(P))).normalize(),w.crossVectors(T,P);const B=w.dot(u[S])<0?-1:1;c[S*4]=b.x,c[S*4+1]=b.y,c[S*4+2]=b.z,c[S*4+3]=B}for(let S=0,P=y.length;S<P;++S){const D=y[S],B=D.start,L=D.count;for(let O=B,F=B+L;O<F;O+=3)v(n[O+0]),v(n[O+1]),v(n[O+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Re(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new I,r=new I,a=new I,o=new I,c=new I,l=new I,u=new I,h=new I;if(t)for(let d=0,p=t.count;d<p;d+=3){const _=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let p=0,_=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*u;for(let f=0;f<u;f++)d[_++]=l[p++]}return new Re(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ge,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=t(d,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vc=new re,si=new ra,Ks=new cs,yc=new I,Bi=new I,ki=new I,Gi=new I,fo=new I,Zs=new I,Js=new nt,$s=new nt,Qs=new nt,Mc=new I,Sc=new I,wc=new I,tr=new I,er=new I;class rt extends ae{constructor(t=new ge,e=new Jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Zs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(fo.fromBufferAttribute(h,t),a?Zs.addScaledVector(fo,u):Zs.addScaledVector(fo.sub(e),u))}e.add(Zs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(r),si.copy(t.ray).recast(t.near),!(Ks.containsPoint(si.origin)===!1&&(si.intersectSphere(Ks,yc)===null||si.origin.distanceToSquared(yc)>(t.far-t.near)**2))&&(vc.copy(r).invert(),si.copy(t.ray).applyMatrix4(vc),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,si)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const m=d[_],f=a[m.materialIndex],M=Math.max(m.start,p.start),g=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,b=g;y<b;y+=3){const w=o.getX(y),A=o.getX(y+1),T=o.getX(y+2);s=nr(this,f,t,n,l,u,h,w,A,T),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=_,f=x;m<f;m+=3){const M=o.getX(m),g=o.getX(m+1),y=o.getX(m+2);s=nr(this,a,t,n,l,u,h,M,g,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const m=d[_],f=a[m.materialIndex],M=Math.max(m.start,p.start),g=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,b=g;y<b;y+=3){const w=y,A=y+1,T=y+2;s=nr(this,f,t,n,l,u,h,w,A,T),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=_,f=x;m<f;m+=3){const M=m,g=m+1,y=m+2;s=nr(this,a,t,n,l,u,h,M,g,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function hd(i,t,e,n,s,r,a,o){let c;if(t.side===qe?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===jn,o),c===null)return null;er.copy(o),er.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(er);return l<e.near||l>e.far?null:{distance:l,point:er.clone(),object:i}}function nr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Bi),i.getVertexPosition(c,ki),i.getVertexPosition(l,Gi);const u=hd(i,t,e,n,Bi,ki,Gi,tr);if(u){s&&(Js.fromBufferAttribute(s,o),$s.fromBufferAttribute(s,c),Qs.fromBufferAttribute(s,l),u.uv=ln.getInterpolation(tr,Bi,ki,Gi,Js,$s,Qs,new nt)),r&&(Js.fromBufferAttribute(r,o),$s.fromBufferAttribute(r,c),Qs.fromBufferAttribute(r,l),u.uv1=ln.getInterpolation(tr,Bi,ki,Gi,Js,$s,Qs,new nt),u.uv2=u.uv1),a&&(Mc.fromBufferAttribute(a,o),Sc.fromBufferAttribute(a,c),wc.fromBufferAttribute(a,l),u.normal=ln.getInterpolation(tr,Bi,ki,Gi,Mc,Sc,wc,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new I,materialIndex:0};ln.getNormal(Bi,ki,Gi,h.normal),u.face=h}return u}class Ht extends ge{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ee(l,3)),this.setAttribute("normal",new ee(u,3)),this.setAttribute("uv",new ee(h,2));function _(x,m,f,M,g,y,b,w,A,T,v){const S=y/A,P=b/T,D=y/2,B=b/2,L=w/2,O=A+1,F=T+1;let k=0,H=0;const q=new I;for(let Z=0;Z<F;Z++){const tt=Z*P-B;for(let ut=0;ut<O;ut++){const Y=ut*S-D;q[x]=Y*M,q[m]=tt*g,q[f]=L,l.push(q.x,q.y,q.z),q[x]=0,q[m]=0,q[f]=w>0?1:-1,u.push(q.x,q.y,q.z),h.push(ut/A),h.push(1-Z/T),k+=1}}for(let Z=0;Z<T;Z++)for(let tt=0;tt<A;tt++){const ut=d+tt+O*Z,Y=d+tt+O*(Z+1),Q=d+(tt+1)+O*(Z+1),mt=d+(tt+1)+O*Z;c.push(ut,Y,mt),c.push(Y,Q,mt),H+=6}o.addGroup(p,H,v),p+=H,d+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ht(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function rs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ve(i){const t={};for(let e=0;e<i.length;e++){const n=rs(i[e]);for(const s in n)t[s]=n[s]}return t}function dd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function tu(i){return i.getRenderTarget()===null?i.outputColorSpace:he.workingColorSpace}const Cs={clone:rs,merge:Ve};var fd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ye extends ls{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fd,this.fragmentShader=pd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rs(t.uniforms),this.uniformsGroups=dd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class eu extends ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=Pn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class je extends eu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ss*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ss*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ss*2*Math.atan(Math.tan(Ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ss*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Hi=-90,Vi=1;class md extends ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new je(Hi,Vi,t,e);s.layers=this.layers,this.add(s);const r=new je(Hi,Vi,t,e);r.layers=this.layers,this.add(r);const a=new je(Hi,Vi,t,e);a.layers=this.layers,this.add(a);const o=new je(Hi,Vi,t,e);o.layers=this.layers,this.add(o);const c=new je(Hi,Vi,t,e);c.layers=this.layers,this.add(c);const l=new je(Hi,Vi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===br)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class nu extends Ke{constructor(t,e,n,s,r,a,o,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:es,super(t,e,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class gd extends dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(Es("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===gi?Se:sn),this.texture=new nu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ht(5,5,5),r=new Ye({name:"CubemapFromEquirect",uniforms:rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:Dn});r.uniforms.tEquirect.value=e;const a=new rt(s,r),o=e.minFilter;return e.minFilter===Rs&&(e.minFilter=nn),new md(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const po=new I,_d=new I,xd=new te;class Hn{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=po.subVectors(n,e).cross(_d.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(po),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||xd.getNormalMatrix(t),s=this.coplanarPoint(po).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new cs,ir=new I;class oa{constructor(t=new Hn,e=new Hn,n=new Hn,s=new Hn,r=new Hn,a=new Hn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],p=s[8],_=s[9],x=s[10],m=s[11],f=s[12],M=s[13],g=s[14],y=s[15];if(n[0].setComponents(c-r,d-l,m-p,y-f).normalize(),n[1].setComponents(c+r,d+l,m+p,y+f).normalize(),n[2].setComponents(c+a,d+u,m+_,y+M).normalize(),n[3].setComponents(c-a,d-u,m-_,y-M).normalize(),n[4].setComponents(c-o,d-h,m-x,y-g).normalize(),e===Pn)n[5].setComponents(c+o,d+h,m+x,y+g).normalize();else if(e===br)n[5].setComponents(o,h,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(t){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ir.x=s.normal.x>0?t.max.x:t.min.x,ir.y=s.normal.y>0?t.max.y:t.min.y,ir.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ir)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function iu(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function vd(i,t){const e=t.isWebGL2,n=new WeakMap;function s(l,u){const h=l.array,d=l.usage,p=h.byteLength,_=i.createBuffer();i.bindBuffer(u,_),i.bufferData(u,h,d),l.onUploadCallback();let x;if(h instanceof Float32Array)x=i.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=i.SHORT;else if(h instanceof Uint32Array)x=i.UNSIGNED_INT;else if(h instanceof Int32Array)x=i.INT;else if(h instanceof Int8Array)x=i.BYTE;else if(h instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,u,h){const d=u.array,p=u._updateRange,_=u.updateRanges;if(i.bindBuffer(h,l),p.count===-1&&_.length===0&&i.bufferSubData(h,0,d),_.length!==0){for(let x=0,m=_.length;x<m;x++){const f=_[x];e?i.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}p.count!==-1&&(e?i.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);if(h===void 0)n.set(l,s(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,l,u),h.version=l.version}}return{get:a,remove:o,update:c}}class ye extends ge{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=t/o,d=e/c,p=[],_=[],x=[],m=[];for(let f=0;f<u;f++){const M=f*d-a;for(let g=0;g<l;g++){const y=g*h-r;_.push(y,-M,0),x.push(0,0,1),m.push(g/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let M=0;M<o;M++){const g=M+l*f,y=M+l*(f+1),b=M+1+l*(f+1),w=M+1+l*f;p.push(g,y,w),p.push(y,b,w)}this.setIndex(p),this.setAttribute("position",new ee(_,3)),this.setAttribute("normal",new ee(x,3)),this.setAttribute("uv",new ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ye(t.width,t.height,t.widthSegments,t.heightSegments)}}var yd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Md=`#ifdef USE_ALPHAHASH
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
#endif`,Sd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ed=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,bd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Td=`#ifdef USE_AOMAP
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
#endif`,Ad=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rd=`#ifdef USE_BATCHING
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
#endif`,Cd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Pd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ld=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Id=`#ifdef USE_IRIDESCENCE
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
#endif`,Ud=`#ifdef USE_BUMPMAP
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
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Hd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Vd=`#define PI 3.141592653589793
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
} // validated`,Wd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xd=`vec3 transformedNormal = objectNormal;
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
#endif`,Yd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jd=`
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
}`,$d=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Qd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tf=`#ifdef USE_ENVMAP
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
#endif`,ef=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nf=`#ifdef USE_ENVMAP
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
#endif`,sf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,of=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,af=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cf=`#ifdef USE_GRADIENTMAP
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
}`,lf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,uf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ff=`uniform bool receiveShadow;
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
#endif`,pf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,mf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_f=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vf=`PhysicalMaterial material;
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
#endif`,yf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,Mf=`
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
#endif`,Sf=`#if defined( RE_IndirectDiffuse )
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
#endif`,wf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ef=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Af=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Rf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lf=`#if defined( USE_POINTS_UV )
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
#endif`,Df=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,If=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nf=`#ifdef USE_MORPHNORMALS
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
#endif`,Of=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
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
#endif`,Ff=`#ifdef USE_MORPHTARGETS
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
#endif`,zf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vf=`#ifdef USE_NORMALMAP
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
#endif`,Wf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$f=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ep=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,np=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ip=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rp=`float getShadowMask() {
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
}`,op=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ap=`#ifdef USE_SKINNING
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
#endif`,cp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lp=`#ifdef USE_SKINNING
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
#endif`,up=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fp=`#ifndef saturate
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pp=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mp=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mp=`uniform sampler2D t2D;
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
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tp=`#include <common>
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
}`,Ap=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
}`,Rp=`#define DISTANCE
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
}`,Cp=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dp=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ip=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Up=`#include <common>
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
}`,Np=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Op=`#define LAMBERT
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
}`,Fp=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,zp=`#define MATCAP
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
}`,Bp=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,kp=`#define NORMAL
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
}`,Gp=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hp=`#define PHONG
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
}`,Vp=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Wp=`#define STANDARD
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
}`,Xp=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Yp=`#define TOON
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
}`,qp=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,jp=`uniform float size;
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
}`,Kp=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Zp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Jp=`uniform vec3 color;
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
}`,$p=`uniform float rotation;
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
}`,Qp=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Kt={alphahash_fragment:yd,alphahash_pars_fragment:Md,alphamap_fragment:Sd,alphamap_pars_fragment:wd,alphatest_fragment:Ed,alphatest_pars_fragment:bd,aomap_fragment:Td,aomap_pars_fragment:Ad,batching_pars_vertex:Rd,batching_vertex:Cd,begin_vertex:Pd,beginnormal_vertex:Ld,bsdfs:Dd,iridescence_fragment:Id,bumpmap_pars_fragment:Ud,clipping_planes_fragment:Nd,clipping_planes_pars_fragment:Od,clipping_planes_pars_vertex:Fd,clipping_planes_vertex:zd,color_fragment:Bd,color_pars_fragment:kd,color_pars_vertex:Gd,color_vertex:Hd,common:Vd,cube_uv_reflection_fragment:Wd,defaultnormal_vertex:Xd,displacementmap_pars_vertex:Yd,displacementmap_vertex:qd,emissivemap_fragment:jd,emissivemap_pars_fragment:Kd,colorspace_fragment:Zd,colorspace_pars_fragment:Jd,envmap_fragment:$d,envmap_common_pars_fragment:Qd,envmap_pars_fragment:tf,envmap_pars_vertex:ef,envmap_physical_pars_fragment:pf,envmap_vertex:nf,fog_vertex:sf,fog_pars_vertex:rf,fog_fragment:of,fog_pars_fragment:af,gradientmap_pars_fragment:cf,lightmap_fragment:lf,lightmap_pars_fragment:uf,lights_lambert_fragment:hf,lights_lambert_pars_fragment:df,lights_pars_begin:ff,lights_toon_fragment:mf,lights_toon_pars_fragment:gf,lights_phong_fragment:_f,lights_phong_pars_fragment:xf,lights_physical_fragment:vf,lights_physical_pars_fragment:yf,lights_fragment_begin:Mf,lights_fragment_maps:Sf,lights_fragment_end:wf,logdepthbuf_fragment:Ef,logdepthbuf_pars_fragment:bf,logdepthbuf_pars_vertex:Tf,logdepthbuf_vertex:Af,map_fragment:Rf,map_pars_fragment:Cf,map_particle_fragment:Pf,map_particle_pars_fragment:Lf,metalnessmap_fragment:Df,metalnessmap_pars_fragment:If,morphcolor_vertex:Uf,morphnormal_vertex:Nf,morphtarget_pars_vertex:Of,morphtarget_vertex:Ff,normal_fragment_begin:zf,normal_fragment_maps:Bf,normal_pars_fragment:kf,normal_pars_vertex:Gf,normal_vertex:Hf,normalmap_pars_fragment:Vf,clearcoat_normal_fragment_begin:Wf,clearcoat_normal_fragment_maps:Xf,clearcoat_pars_fragment:Yf,iridescence_pars_fragment:qf,opaque_fragment:jf,packing:Kf,premultiplied_alpha_fragment:Zf,project_vertex:Jf,dithering_fragment:$f,dithering_pars_fragment:Qf,roughnessmap_fragment:tp,roughnessmap_pars_fragment:ep,shadowmap_pars_fragment:np,shadowmap_pars_vertex:ip,shadowmap_vertex:sp,shadowmask_pars_fragment:rp,skinbase_vertex:op,skinning_pars_vertex:ap,skinning_vertex:cp,skinnormal_vertex:lp,specularmap_fragment:up,specularmap_pars_fragment:hp,tonemapping_fragment:dp,tonemapping_pars_fragment:fp,transmission_fragment:pp,transmission_pars_fragment:mp,uv_pars_fragment:gp,uv_pars_vertex:_p,uv_vertex:xp,worldpos_vertex:vp,background_vert:yp,background_frag:Mp,backgroundCube_vert:Sp,backgroundCube_frag:wp,cube_vert:Ep,cube_frag:bp,depth_vert:Tp,depth_frag:Ap,distanceRGBA_vert:Rp,distanceRGBA_frag:Cp,equirect_vert:Pp,equirect_frag:Lp,linedashed_vert:Dp,linedashed_frag:Ip,meshbasic_vert:Up,meshbasic_frag:Np,meshlambert_vert:Op,meshlambert_frag:Fp,meshmatcap_vert:zp,meshmatcap_frag:Bp,meshnormal_vert:kp,meshnormal_frag:Gp,meshphong_vert:Hp,meshphong_frag:Vp,meshphysical_vert:Wp,meshphysical_frag:Xp,meshtoon_vert:Yp,meshtoon_frag:qp,points_vert:jp,points_frag:Kp,shadow_vert:Zp,shadow_frag:Jp,sprite_vert:$p,sprite_frag:Qp},wt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},fn={basic:{uniforms:Ve([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Ve([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Ve([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Ve([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Ve([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Ve([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Ve([wt.points,wt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Ve([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Ve([wt.common,wt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Ve([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Ve([wt.sprite,wt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:Ve([wt.common,wt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:Ve([wt.lights,wt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};fn.physical={uniforms:Ve([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const sr={r:0,b:0,g:0};function tm(i,t,e,n,s,r,a){const o=new Ut(0);let c=r===!0?0:1,l,u,h=null,d=0,p=null;function _(m,f){let M=!1,g=f.isScene===!0?f.background:null;g&&g.isTexture&&(g=(f.backgroundBlurriness>0?e:t).get(g)),g===null?x(o,c):g&&g.isColor&&(x(g,1),M=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Cr)?(u===void 0&&(u=new rt(new Ht(1,1,1),new Ye({name:"BackgroundCubeMaterial",uniforms:rs(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=he.getTransfer(g.colorSpace)!==fe,(h!==g||d!==g.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=g,d=g.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new rt(new ye(2,2),new Ye({name:"BackgroundMaterial",uniforms:rs(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=he.getTransfer(g.colorSpace)!==fe,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||d!==g.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=g,d=g.version,p=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function x(m,f){m.getRGB(sr,tu(i)),n.buffers.color.setClear(sr.r,sr.g,sr.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),c=f,x(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,x(o,c)},render:_}}function em(i,t,e,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=m(null);let l=c,u=!1;function h(L,O,F,k,H){let q=!1;if(a){const Z=x(k,F,O);l!==Z&&(l=Z,p(l.object)),q=f(L,k,F,H),q&&M(L,k,F,H)}else{const Z=O.wireframe===!0;(l.geometry!==k.id||l.program!==F.id||l.wireframe!==Z)&&(l.geometry=k.id,l.program=F.id,l.wireframe=Z,q=!0)}H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(q||u)&&(u=!1,T(L,O,F,k),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function _(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function x(L,O,F){const k=F.wireframe===!0;let H=o[L.id];H===void 0&&(H={},o[L.id]=H);let q=H[O.id];q===void 0&&(q={},H[O.id]=q);let Z=q[k];return Z===void 0&&(Z=m(d()),q[k]=Z),Z}function m(L){const O=[],F=[],k=[];for(let H=0;H<s;H++)O[H]=0,F[H]=0,k[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:F,attributeDivisors:k,object:L,attributes:{},index:null}}function f(L,O,F,k){const H=l.attributes,q=O.attributes;let Z=0;const tt=F.getAttributes();for(const ut in tt)if(tt[ut].location>=0){const Q=H[ut];let mt=q[ut];if(mt===void 0&&(ut==="instanceMatrix"&&L.instanceMatrix&&(mt=L.instanceMatrix),ut==="instanceColor"&&L.instanceColor&&(mt=L.instanceColor)),Q===void 0||Q.attribute!==mt||mt&&Q.data!==mt.data)return!0;Z++}return l.attributesNum!==Z||l.index!==k}function M(L,O,F,k){const H={},q=O.attributes;let Z=0;const tt=F.getAttributes();for(const ut in tt)if(tt[ut].location>=0){let Q=q[ut];Q===void 0&&(ut==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),ut==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor));const mt={};mt.attribute=Q,Q&&Q.data&&(mt.data=Q.data),H[ut]=mt,Z++}l.attributes=H,l.attributesNum=Z,l.index=k}function g(){const L=l.newAttributes;for(let O=0,F=L.length;O<F;O++)L[O]=0}function y(L){b(L,0)}function b(L,O){const F=l.newAttributes,k=l.enabledAttributes,H=l.attributeDivisors;F[L]=1,k[L]===0&&(i.enableVertexAttribArray(L),k[L]=1),H[L]!==O&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,O),H[L]=O)}function w(){const L=l.newAttributes,O=l.enabledAttributes;for(let F=0,k=O.length;F<k;F++)O[F]!==L[F]&&(i.disableVertexAttribArray(F),O[F]=0)}function A(L,O,F,k,H,q,Z){Z===!0?i.vertexAttribIPointer(L,O,F,H,q):i.vertexAttribPointer(L,O,F,k,H,q)}function T(L,O,F,k){if(n.isWebGL2===!1&&(L.isInstancedMesh||k.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;g();const H=k.attributes,q=F.getAttributes(),Z=O.defaultAttributeValues;for(const tt in q){const ut=q[tt];if(ut.location>=0){let Y=H[tt];if(Y===void 0&&(tt==="instanceMatrix"&&L.instanceMatrix&&(Y=L.instanceMatrix),tt==="instanceColor"&&L.instanceColor&&(Y=L.instanceColor)),Y!==void 0){const Q=Y.normalized,mt=Y.itemSize,bt=e.get(Y);if(bt===void 0)continue;const Tt=bt.buffer,X=bt.type,ot=bt.bytesPerElement,_t=n.isWebGL2===!0&&(X===i.INT||X===i.UNSIGNED_INT||Y.gpuType===Ol);if(Y.isInterleavedBufferAttribute){const Ct=Y.data,U=Ct.stride,it=Y.offset;if(Ct.isInstancedInterleavedBuffer){for(let K=0;K<ut.locationSize;K++)b(ut.location+K,Ct.meshPerAttribute);L.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Ct.meshPerAttribute*Ct.count)}else for(let K=0;K<ut.locationSize;K++)y(ut.location+K);i.bindBuffer(i.ARRAY_BUFFER,Tt);for(let K=0;K<ut.locationSize;K++)A(ut.location+K,mt/ut.locationSize,X,Q,U*ot,(it+mt/ut.locationSize*K)*ot,_t)}else{if(Y.isInstancedBufferAttribute){for(let Ct=0;Ct<ut.locationSize;Ct++)b(ut.location+Ct,Y.meshPerAttribute);L.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Ct=0;Ct<ut.locationSize;Ct++)y(ut.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,Tt);for(let Ct=0;Ct<ut.locationSize;Ct++)A(ut.location+Ct,mt/ut.locationSize,X,Q,mt*ot,mt/ut.locationSize*Ct*ot,_t)}}else if(Z!==void 0){const Q=Z[tt];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(ut.location,Q);break;case 3:i.vertexAttrib3fv(ut.location,Q);break;case 4:i.vertexAttrib4fv(ut.location,Q);break;default:i.vertexAttrib1fv(ut.location,Q)}}}}w()}function v(){D();for(const L in o){const O=o[L];for(const F in O){const k=O[F];for(const H in k)_(k[H].object),delete k[H];delete O[F]}delete o[L]}}function S(L){if(o[L.id]===void 0)return;const O=o[L.id];for(const F in O){const k=O[F];for(const H in k)_(k[H].object),delete k[H];delete O[F]}delete o[L.id]}function P(L){for(const O in o){const F=o[O];if(F[L.id]===void 0)continue;const k=F[L.id];for(const H in k)_(k[H].object),delete k[H];delete F[L.id]}}function D(){B(),u=!0,l!==c&&(l=c,p(l.object))}function B(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:D,resetDefaultState:B,dispose:v,releaseStatesOfGeometry:S,releaseStatesOfProgram:P,initAttributes:g,enableAttribute:y,disableUnusedAttributes:w}}function nm(i,t,e,n){const s=n.isWebGL2;let r;function a(u){r=u}function o(u,h){i.drawArrays(r,u,h),e.update(h,r,1)}function c(u,h,d){if(d===0)return;let p,_;if(s)p=i,_="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](r,u,h,d),e.update(h,r,d)}function l(u,h,d){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<d;_++)this.render(u[_],h[_]);else{p.multiDrawArraysWEBGL(r,u,0,h,0,d);let _=0;for(let x=0;x<d;x++)_+=h[x];e.update(_,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function im(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),g=d>0,y=a||t.has("OES_texture_float"),b=g&&y,w=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:M,vertexTextures:g,floatFragmentTextures:y,floatVertexTextures:b,maxSamples:w}}function sm(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Hn,o=new te,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):l();else{const M=r?0:n,g=M*4;let y=f.clippingState||null;c.value=y,y=u(_,d,g,p);for(let b=0;b!==g;++b)y[b]=e[b];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,p,_){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=c.value,_!==!0||m===null){const f=p+x*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let g=0,y=p;g!==x;++g,y+=4)a.copy(h[g]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function rm(i){let t=new WeakMap;function e(a,o){return o===Mr?a.mapping=es:o===ko&&(a.mapping=ns),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Mr||o===ko)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new gd(c.height/2);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class aa extends eu{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const qi=4,Ec=[.125,.215,.35,.446,.526,.582],di=20,mo=new aa,bc=new Ut;let go=null,_o=0,xo=0;const ui=(1+Math.sqrt(5))/2,Wi=1/ui,Tc=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,ui,Wi),new I(0,ui,-Wi),new I(Wi,0,ui),new I(-Wi,0,ui),new I(ui,Wi,0),new I(-ui,Wi,0)];class Wo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){go=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(go,_o,xo),t.scissorTest=!1,rr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===es||t.mapping===ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),go=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:In,format:hn,colorSpace:Un,depthBuffer:!1},s=Ac(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ac(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=om(r)),this._blurMaterial=am(r,t,e)}return s}_compileMaterial(t){const e=new rt(this._lodPlanes[0],t);this._renderer.compile(e,mo)}_sceneToCubeUV(t,e,n,s){const o=new je(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(bc),u.toneMapping=Xn,u.autoClear=!1;const p=new Jn({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),_=new rt(new Ht,p);let x=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(bc),x=!0);for(let f=0;f<6;f++){const M=f%3;M===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):M===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const g=this._cubeSize;rr(s,M*g,f>2?g:0,g,g),u.setRenderTarget(s),x&&u.render(_,o),u.render(t,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===es||t.mapping===ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new rt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;rr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,mo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Tc[(s-1)%Tc.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new rt(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*di-1),x=r/_,m=isFinite(r)?1+Math.floor(u*x):di;m>di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${di}`);const f=[];let M=0;for(let A=0;A<di;++A){const T=A/x,v=Math.exp(-T*T/2);f.push(v),A===0?M+=v:A<m&&(M+=2*v)}for(let A=0;A<f.length;A++)f[A]=f[A]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:g}=this;d.dTheta.value=_,d.mipInt.value=g-n;const y=this._sizeLods[s],b=3*y*(s>g-qi?s-g+qi:0),w=4*(this._cubeSize-y);rr(e,b,w,3*y,2*y),c.setRenderTarget(e),c.render(h,mo)}}function om(i){const t=[],e=[],n=[];let s=i;const r=i-qi+1+Ec.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-qi?c=Ec[a-i+qi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,x=3,m=2,f=1,M=new Float32Array(x*_*p),g=new Float32Array(m*_*p),y=new Float32Array(f*_*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,T=w>2?0:-1,v=[A,T,0,A+2/3,T,0,A+2/3,T+1,0,A,T,0,A+2/3,T+1,0,A,T+1,0];M.set(v,x*_*w),g.set(d,m*_*w);const S=[w,w,w,w,w,w];y.set(S,f*_*w)}const b=new ge;b.setAttribute("position",new Re(M,x)),b.setAttribute("uv",new Re(g,m)),b.setAttribute("faceIndex",new Re(y,f)),t.push(b),s>qi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ac(i,t,e){const n=new dn(i,t,e);return n.texture.mapping=Cr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function am(i,t,e){const n=new Float32Array(di),s=new I(0,1,0);return new Ye({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ca(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Rc(){return new Ye({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ca(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Cc(){return new Ye({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function ca(){return`

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
	`}function cm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Mr||c===ko,u=c===es||c===ns;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=t.get(o);return e===null&&(e=new Wo(i)),h=l?e.fromEquirectangular(o,h):e.fromCubemap(o,h),t.set(o,h),h.texture}else{if(t.has(o))return t.get(o).texture;{const h=o.image;if(l&&h&&h.height>0||u&&h&&s(h)){e===null&&(e=new Wo(i));const d=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function lm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function um(i,t,e,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const x=d.morphAttributes[_];for(let m=0,f=x.length;m<f;m++)t.remove(x[m])}d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const _ in d)t.update(d[_],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const _ in p){const x=p[_];for(let m=0,f=x.length;m<f;m++)t.update(x[m],i.ARRAY_BUFFER)}}function l(h){const d=[],p=h.index,_=h.attributes.position;let x=0;if(p!==null){const M=p.array;x=p.version;for(let g=0,y=M.length;g<y;g+=3){const b=M[g+0],w=M[g+1],A=M[g+2];d.push(b,w,w,A,A,b)}}else if(_!==void 0){const M=_.array;x=_.version;for(let g=0,y=M.length/3-1;g<y;g+=3){const b=g+0,w=g+1,A=g+2;d.push(b,w,w,A,A,b)}}else return;const m=new(Yl(d)?Ql:$l)(d,1);m.version=x;const f=r.get(h);f&&t.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function hm(i,t,e,n){const s=n.isWebGL2;let r;function a(p){r=p}let o,c;function l(p){o=p.type,c=p.bytesPerElement}function u(p,_){i.drawElements(r,_,o,p*c),e.update(_,r,1)}function h(p,_,x){if(x===0)return;let m,f;if(s)m=i,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,_,o,p*c,x),e.update(_,r,x)}function d(p,_,x){if(x===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<x;f++)this.render(p[f]/c,_[f]);else{m.multiDrawElementsWEBGL(r,_,0,o,p,0,x);let f=0;for(let M=0;M<x;M++)f+=_[M];e.update(f,r,1)}}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function dm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function fm(i,t){return i[0]-t[0]}function pm(i,t){return Math.abs(t[1])-Math.abs(i[1])}function mm(i,t,e){const n={},s=new Float32Array(8),r=new WeakMap,a=new me,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,h){const d=l.morphTargetInfluences;if(t.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=_!==void 0?_.length:0;let m=r.get(u);if(m===void 0||m.count!==x){let O=function(){B.dispose(),r.delete(u),u.removeEventListener("dispose",O)};var p=O;m!==void 0&&m.texture.dispose();const g=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let v=0;g===!0&&(v=1),y===!0&&(v=2),b===!0&&(v=3);let S=u.attributes.position.count*v,P=1;S>t.maxTextureSize&&(P=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const D=new Float32Array(S*P*4*x),B=new Kl(D,S,P,x);B.type=Wn,B.needsUpdate=!0;const L=v*4;for(let F=0;F<x;F++){const k=w[F],H=A[F],q=T[F],Z=S*P*4*F;for(let tt=0;tt<k.count;tt++){const ut=tt*L;g===!0&&(a.fromBufferAttribute(k,tt),D[Z+ut+0]=a.x,D[Z+ut+1]=a.y,D[Z+ut+2]=a.z,D[Z+ut+3]=0),y===!0&&(a.fromBufferAttribute(H,tt),D[Z+ut+4]=a.x,D[Z+ut+5]=a.y,D[Z+ut+6]=a.z,D[Z+ut+7]=0),b===!0&&(a.fromBufferAttribute(q,tt),D[Z+ut+8]=a.x,D[Z+ut+9]=a.y,D[Z+ut+10]=a.z,D[Z+ut+11]=q.itemSize===4?a.w:1)}}m={count:x,texture:B,size:new nt(S,P)},r.set(u,m),u.addEventListener("dispose",O)}let f=0;for(let g=0;g<d.length;g++)f+=d[g];const M=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(i,"morphTargetBaseInfluence",M),h.getUniforms().setValue(i,"morphTargetInfluences",d),h.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const _=d===void 0?0:d.length;let x=n[u.id];if(x===void 0||x.length!==_){x=[];for(let y=0;y<_;y++)x[y]=[y,0];n[u.id]=x}for(let y=0;y<_;y++){const b=x[y];b[0]=y,b[1]=d[y]}x.sort(pm);for(let y=0;y<8;y++)y<_&&x[y][1]?(o[y][0]=x[y][0],o[y][1]=x[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(fm);const m=u.morphAttributes.position,f=u.morphAttributes.normal;let M=0;for(let y=0;y<8;y++){const b=o[y],w=b[0],A=b[1];w!==Number.MAX_SAFE_INTEGER&&A?(m&&u.getAttribute("morphTarget"+y)!==m[w]&&u.setAttribute("morphTarget"+y,m[w]),f&&u.getAttribute("morphNormal"+y)!==f[w]&&u.setAttribute("morphNormal"+y,f[w]),s[y]=A,M+=A):(m&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),f&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),s[y]=0)}const g=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(i,"morphTargetBaseInfluence",g),h.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function gm(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class su extends Ke{constructor(t,e,n,s,r,a,o,c,l,u){if(u=u!==void 0?u:mi,u!==mi&&u!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===mi&&(n=Vn),n===void 0&&u===is&&(n=pi),super(null,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Xe,this.minFilter=c!==void 0?c:Xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ru=new Ke,ou=new su(1,1);ou.compareFunction=Xl;const au=new Kl,cu=new td,lu=new nu,Pc=[],Lc=[],Dc=new Float32Array(16),Ic=new Float32Array(9),Uc=new Float32Array(4);function us(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Pc[s];if(r===void 0&&(r=new Float32Array(s),Pc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Lr(i,t){let e=Lc[t];e===void 0&&(e=new Int32Array(t),Lc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function _m(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function xm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2fv(this.addr,t),Pe(e,t)}}function vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;i.uniform3fv(this.addr,t),Pe(e,t)}}function ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4fv(this.addr,t),Pe(e,t)}}function Mm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Uc.set(n),i.uniformMatrix2fv(this.addr,!1,Uc),Pe(e,n)}}function Sm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Ic.set(n),i.uniformMatrix3fv(this.addr,!1,Ic),Pe(e,n)}}function wm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Dc.set(n),i.uniformMatrix4fv(this.addr,!1,Dc),Pe(e,n)}}function Em(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2iv(this.addr,t),Pe(e,t)}}function Tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3iv(this.addr,t),Pe(e,t)}}function Am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4iv(this.addr,t),Pe(e,t)}}function Rm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2uiv(this.addr,t),Pe(e,t)}}function Pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3uiv(this.addr,t),Pe(e,t)}}function Lm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4uiv(this.addr,t),Pe(e,t)}}function Dm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?ou:ru;e.setTexture2D(t||r,s)}function Im(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||cu,s)}function Um(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||lu,s)}function Nm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||au,s)}function Om(i){switch(i){case 5126:return _m;case 35664:return xm;case 35665:return vm;case 35666:return ym;case 35674:return Mm;case 35675:return Sm;case 35676:return wm;case 5124:case 35670:return Em;case 35667:case 35671:return bm;case 35668:case 35672:return Tm;case 35669:case 35673:return Am;case 5125:return Rm;case 36294:return Cm;case 36295:return Pm;case 36296:return Lm;case 35678:case 36198:case 36298:case 36306:case 35682:return Dm;case 35679:case 36299:case 36307:return Im;case 35680:case 36300:case 36308:case 36293:return Um;case 36289:case 36303:case 36311:case 36292:return Nm}}function Fm(i,t){i.uniform1fv(this.addr,t)}function zm(i,t){const e=us(t,this.size,2);i.uniform2fv(this.addr,e)}function Bm(i,t){const e=us(t,this.size,3);i.uniform3fv(this.addr,e)}function km(i,t){const e=us(t,this.size,4);i.uniform4fv(this.addr,e)}function Gm(i,t){const e=us(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Hm(i,t){const e=us(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Vm(i,t){const e=us(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Wm(i,t){i.uniform1iv(this.addr,t)}function Xm(i,t){i.uniform2iv(this.addr,t)}function Ym(i,t){i.uniform3iv(this.addr,t)}function qm(i,t){i.uniform4iv(this.addr,t)}function jm(i,t){i.uniform1uiv(this.addr,t)}function Km(i,t){i.uniform2uiv(this.addr,t)}function Zm(i,t){i.uniform3uiv(this.addr,t)}function Jm(i,t){i.uniform4uiv(this.addr,t)}function $m(i,t,e){const n=this.cache,s=t.length,r=Lr(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||ru,r[a])}function Qm(i,t,e){const n=this.cache,s=t.length,r=Lr(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||cu,r[a])}function t0(i,t,e){const n=this.cache,s=t.length,r=Lr(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||lu,r[a])}function e0(i,t,e){const n=this.cache,s=t.length,r=Lr(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||au,r[a])}function n0(i){switch(i){case 5126:return Fm;case 35664:return zm;case 35665:return Bm;case 35666:return km;case 35674:return Gm;case 35675:return Hm;case 35676:return Vm;case 5124:case 35670:return Wm;case 35667:case 35671:return Xm;case 35668:case 35672:return Ym;case 35669:case 35673:return qm;case 5125:return jm;case 36294:return Km;case 36295:return Zm;case 36296:return Jm;case 35678:case 36198:case 36298:case 36306:case 35682:return $m;case 35679:case 36299:case 36307:return Qm;case 35680:case 36300:case 36308:case 36293:return t0;case 36289:case 36303:case 36311:case 36292:return e0}}class i0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Om(e.type)}}class s0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=n0(e.type)}}class r0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const vo=/(\w+)(\])?(\[|\.)?/g;function Nc(i,t){i.seq.push(t),i.map[t.id]=t}function o0(i,t,e){const n=i.name,s=n.length;for(vo.lastIndex=0;;){const r=vo.exec(n),a=vo.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Nc(e,l===void 0?new i0(o,i,t):new s0(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new r0(o),Nc(e,h)),e=h}}}class _r{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);o0(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Oc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const a0=37297;let c0=0;function l0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function u0(i){const t=he.getPrimaries(he.workingColorSpace),e=he.getPrimaries(i);let n;switch(t===e?n="":t===Er&&e===wr?n="LinearDisplayP3ToLinearSRGB":t===wr&&e===Er&&(n="LinearSRGBToLinearDisplayP3"),i){case Un:case Pr:return[n,"LinearTransferOETF"];case Se:case ia:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Fc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+l0(i.getShaderSource(t),a)}else return s}function h0(i,t){const e=u0(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function d0(i,t){let e;switch(t){case Ll:e="Linear";break;case Dl:e="Reinhard";break;case Il:e="OptimizedCineon";break;case ea:e="ACESFilmic";break;case Ul:e="AgX";break;case mh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function f0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ji).join(`
`)}function p0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ji).join(`
`)}function m0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function g0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ji(i){return i!==""}function zc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xo(i){return i.replace(_0,v0)}const x0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function v0(i,t){let e=Kt[t];if(e===void 0){const n=x0.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Xo(e)}const y0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kc(i){return i.replace(y0,M0)}function M0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gc(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function S0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Cl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===An&&(t="SHADOWMAP_TYPE_VSM"),t}function w0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case es:case ns:t="ENVMAP_TYPE_CUBE";break;case Cr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function E0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ns:t="ENVMAP_MODE_REFRACTION";break}return t}function b0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Pl:t="ENVMAP_BLENDING_MULTIPLY";break;case fh:t="ENVMAP_BLENDING_MIX";break;case ph:t="ENVMAP_BLENDING_ADD";break}return t}function T0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function A0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=S0(e),l=w0(e),u=E0(e),h=b0(e),d=T0(e),p=e.isWebGL2?"":f0(e),_=p0(e),x=m0(r),m=s.createProgram();let f,M,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ji).join(`
`),f.length>0&&(f+=`
`),M=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ji).join(`
`),M.length>0&&(M+=`
`)):(f=[Gc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ji).join(`
`),M=[p,Gc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Xn?d0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,h0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ji).join(`
`)),a=Xo(a),a=zc(a,e),a=Bc(a,e),o=Xo(o),o=zc(o,e),o=Bc(o,e),a=kc(a),o=kc(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,f=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,M=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const y=g+f+a,b=g+M+o,w=Oc(s,s.VERTEX_SHADER,y),A=Oc(s,s.FRAGMENT_SHADER,b);s.attachShader(m,w),s.attachShader(m,A),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function T(D){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(w).trim(),O=s.getShaderInfoLog(A).trim();let F=!0,k=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,w,A);else{const H=Fc(s,w,"vertex"),q=Fc(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+B+`
`+H+`
`+q)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(L===""||O==="")&&(k=!1);k&&(D.diagnostics={runnable:F,programLog:B,vertexShader:{log:L,prefix:f},fragmentShader:{log:O,prefix:M}})}s.deleteShader(w),s.deleteShader(A),v=new _r(s,m),S=g0(s,m)}let v;this.getUniforms=function(){return v===void 0&&T(this),v};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(m,a0)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=c0++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=A,this}let R0=0;class C0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new P0(t),e.set(t,n)),n}}class P0{constructor(t){this.id=R0++,this.code=t,this.usedTimes=0}}function L0(i,t,e,n,s,r,a){const o=new Zl,c=new C0,l=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return v===0?"uv":`uv${v}`}function m(v,S,P,D,B){const L=D.fog,O=B.geometry,F=v.isMeshStandardMaterial?D.environment:null,k=(v.isMeshStandardMaterial?e:t).get(v.envMap||F),H=k&&k.mapping===Cr?k.image.height:null,q=_[v.type];v.precision!==null&&(p=s.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const Z=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,tt=Z!==void 0?Z.length:0;let ut=0;O.morphAttributes.position!==void 0&&(ut=1),O.morphAttributes.normal!==void 0&&(ut=2),O.morphAttributes.color!==void 0&&(ut=3);let Y,Q,mt,bt;if(q){const ce=fn[q];Y=ce.vertexShader,Q=ce.fragmentShader}else Y=v.vertexShader,Q=v.fragmentShader,c.update(v),mt=c.getVertexShaderID(v),bt=c.getFragmentShaderID(v);const Tt=i.getRenderTarget(),X=B.isInstancedMesh===!0,ot=B.isBatchedMesh===!0,_t=!!v.map,Ct=!!v.matcap,U=!!k,it=!!v.aoMap,K=!!v.lightMap,ct=!!v.bumpMap,$=!!v.normalMap,Et=!!v.displacementMap,gt=!!v.emissiveMap,R=!!v.metalnessMap,E=!!v.roughnessMap,G=v.anisotropy>0,et=v.clearcoat>0,st=v.iridescence>0,lt=v.sheen>0,Lt=v.transmission>0,St=G&&!!v.anisotropyMap,Rt=et&&!!v.clearcoatMap,zt=et&&!!v.clearcoatNormalMap,Vt=et&&!!v.clearcoatRoughnessMap,dt=st&&!!v.iridescenceMap,qt=st&&!!v.iridescenceThicknessMap,N=lt&&!!v.sheenColorMap,ht=lt&&!!v.sheenRoughnessMap,yt=!!v.specularMap,ft=!!v.specularColorMap,It=!!v.specularIntensityMap,jt=Lt&&!!v.transmissionMap,Jt=Lt&&!!v.thicknessMap,Xt=!!v.gradientMap,Mt=!!v.alphaMap,z=v.alphaTest>0,vt=!!v.alphaHash,pt=!!v.extensions,Ft=!!O.attributes.uv1,Ot=!!O.attributes.uv2,ne=!!O.attributes.uv3;let se=Xn;return v.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(se=i.toneMapping),{isWebGL2:u,shaderID:q,shaderType:v.type,shaderName:v.name,vertexShader:Y,fragmentShader:Q,defines:v.defines,customVertexShaderID:mt,customFragmentShaderID:bt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:ot,instancing:X,instancingColor:X&&B.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Tt===null?i.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:Un,map:_t,matcap:Ct,envMap:U,envMapMode:U&&k.mapping,envMapCubeUVHeight:H,aoMap:it,lightMap:K,bumpMap:ct,normalMap:$,displacementMap:d&&Et,emissiveMap:gt,normalMapObjectSpace:$&&v.normalMapType===Ah,normalMapTangentSpace:$&&v.normalMapType===Wl,metalnessMap:R,roughnessMap:E,anisotropy:G,anisotropyMap:St,clearcoat:et,clearcoatMap:Rt,clearcoatNormalMap:zt,clearcoatRoughnessMap:Vt,iridescence:st,iridescenceMap:dt,iridescenceThicknessMap:qt,sheen:lt,sheenColorMap:N,sheenRoughnessMap:ht,specularMap:yt,specularColorMap:ft,specularIntensityMap:It,transmission:Lt,transmissionMap:jt,thicknessMap:Jt,gradientMap:Xt,opaque:v.transparent===!1&&v.blending===Ji,alphaMap:Mt,alphaTest:z,alphaHash:vt,combine:v.combine,mapUv:_t&&x(v.map.channel),aoMapUv:it&&x(v.aoMap.channel),lightMapUv:K&&x(v.lightMap.channel),bumpMapUv:ct&&x(v.bumpMap.channel),normalMapUv:$&&x(v.normalMap.channel),displacementMapUv:Et&&x(v.displacementMap.channel),emissiveMapUv:gt&&x(v.emissiveMap.channel),metalnessMapUv:R&&x(v.metalnessMap.channel),roughnessMapUv:E&&x(v.roughnessMap.channel),anisotropyMapUv:St&&x(v.anisotropyMap.channel),clearcoatMapUv:Rt&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:zt&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Vt&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:N&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:ht&&x(v.sheenRoughnessMap.channel),specularMapUv:yt&&x(v.specularMap.channel),specularColorMapUv:ft&&x(v.specularColorMap.channel),specularIntensityMapUv:It&&x(v.specularIntensityMap.channel),transmissionMapUv:jt&&x(v.transmissionMap.channel),thicknessMapUv:Jt&&x(v.thicknessMap.channel),alphaMapUv:Mt&&x(v.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&($||G),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Ft,vertexUv2s:Ot,vertexUv3s:ne,pointsUvs:B.isPoints===!0&&!!O.attributes.uv&&(_t||Mt),fog:!!L,useFog:v.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:B.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:ut,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:se,useLegacyLights:i._useLegacyLights,decodeVideoTexture:_t&&v.map.isVideoTexture===!0&&he.getTransfer(v.map.colorSpace)===fe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===we,flipSided:v.side===qe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:pt&&v.extensions.derivatives===!0,extensionFragDepth:pt&&v.extensions.fragDepth===!0,extensionDrawBuffers:pt&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:pt&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pt&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function f(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)S.push(P),S.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(M(S,v),g(S,v),S.push(i.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function M(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function g(v,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),v.push(o.mask)}function y(v){const S=_[v.type];let P;if(S){const D=fn[S];P=Cs.clone(D.uniforms)}else P=v.uniforms;return P}function b(v,S){let P;for(let D=0,B=l.length;D<B;D++){const L=l[D];if(L.cacheKey===S){P=L,++P.usedTimes;break}}return P===void 0&&(P=new A0(i,S,v,r),l.push(P)),P}function w(v){if(--v.usedTimes===0){const S=l.indexOf(v);l[S]=l[l.length-1],l.pop(),v.destroy()}}function A(v){c.remove(v)}function T(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:b,releaseProgram:w,releaseShaderCache:A,programs:l,dispose:T}}function D0(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function I0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Hc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Vc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,d,p,_,x,m){let f=i[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:_,renderOrder:h.renderOrder,z:x,group:m},i[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=x,f.group=m),t++,f}function o(h,d,p,_,x,m){const f=a(h,d,p,_,x,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(h,d,p,_,x,m){const f=a(h,d,p,_,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(h,d){e.length>1&&e.sort(h||I0),n.length>1&&n.sort(d||Hc),s.length>1&&s.sort(d||Hc)}function u(){for(let h=t,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function U0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Vc,i.set(n,[a])):s>=r.length?(a=new Vc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function N0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Ut};break;case"SpotLight":e={position:new I,direction:new I,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function O0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let F0=0;function z0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function B0(i,t){const e=new N0,n=O0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new I);const r=new I,a=new re,o=new re;function c(u,h){let d=0,p=0,_=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let x=0,m=0,f=0,M=0,g=0,y=0,b=0,w=0,A=0,T=0,v=0;u.sort(z0);const S=h===!0?Math.PI:1;for(let D=0,B=u.length;D<B;D++){const L=u[D],O=L.color,F=L.intensity,k=L.distance,H=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=O.r*F*S,p+=O.g*F*S,_+=O.b*F*S;else if(L.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(L.sh.coefficients[q],F);v++}else if(L.isDirectionalLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*S),L.castShadow){const Z=L.shadow,tt=n.get(L);tt.shadowBias=Z.bias,tt.shadowNormalBias=Z.normalBias,tt.shadowRadius=Z.radius,tt.shadowMapSize=Z.mapSize,s.directionalShadow[x]=tt,s.directionalShadowMap[x]=H,s.directionalShadowMatrix[x]=L.shadow.matrix,y++}s.directional[x]=q,x++}else if(L.isSpotLight){const q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(O).multiplyScalar(F*S),q.distance=k,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,s.spot[f]=q;const Z=L.shadow;if(L.map&&(s.spotLightMap[A]=L.map,A++,Z.updateMatrices(L),L.castShadow&&T++),s.spotLightMatrix[f]=Z.matrix,L.castShadow){const tt=n.get(L);tt.shadowBias=Z.bias,tt.shadowNormalBias=Z.normalBias,tt.shadowRadius=Z.radius,tt.shadowMapSize=Z.mapSize,s.spotShadow[f]=tt,s.spotShadowMap[f]=H,w++}f++}else if(L.isRectAreaLight){const q=e.get(L);q.color.copy(O).multiplyScalar(F),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),s.rectArea[M]=q,M++}else if(L.isPointLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*S),q.distance=L.distance,q.decay=L.decay,L.castShadow){const Z=L.shadow,tt=n.get(L);tt.shadowBias=Z.bias,tt.shadowNormalBias=Z.normalBias,tt.shadowRadius=Z.radius,tt.shadowMapSize=Z.mapSize,tt.shadowCameraNear=Z.camera.near,tt.shadowCameraFar=Z.camera.far,s.pointShadow[m]=tt,s.pointShadowMap[m]=H,s.pointShadowMatrix[m]=L.shadow.matrix,b++}s.point[m]=q,m++}else if(L.isHemisphereLight){const q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(F*S),q.groundColor.copy(L.groundColor).multiplyScalar(F*S),s.hemi[g]=q,g++}}M>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=wt.LTC_FLOAT_1,s.rectAreaLTC2=wt.LTC_FLOAT_2):(s.rectAreaLTC1=wt.LTC_HALF_1,s.rectAreaLTC2=wt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=wt.LTC_FLOAT_1,s.rectAreaLTC2=wt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=wt.LTC_HALF_1,s.rectAreaLTC2=wt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=_;const P=s.hash;(P.directionalLength!==x||P.pointLength!==m||P.spotLength!==f||P.rectAreaLength!==M||P.hemiLength!==g||P.numDirectionalShadows!==y||P.numPointShadows!==b||P.numSpotShadows!==w||P.numSpotMaps!==A||P.numLightProbes!==v)&&(s.directional.length=x,s.spot.length=f,s.rectArea.length=M,s.point.length=m,s.hemi.length=g,s.directionalShadow.length=y,s.directionalShadowMap.length=y,s.pointShadow.length=b,s.pointShadowMap.length=b,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=y,s.pointShadowMatrix.length=b,s.spotLightMatrix.length=w+A-T,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=T,s.numLightProbes=v,P.directionalLength=x,P.pointLength=m,P.spotLength=f,P.rectAreaLength=M,P.hemiLength=g,P.numDirectionalShadows=y,P.numPointShadows=b,P.numSpotShadows=w,P.numSpotMaps=A,P.numLightProbes=v,s.version=F0++)}function l(u,h){let d=0,p=0,_=0,x=0,m=0;const f=h.matrixWorldInverse;for(let M=0,g=u.length;M<g;M++){const y=u[M];if(y.isDirectionalLight){const b=s.directional[d];b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(f),d++}else if(y.isSpotLight){const b=s.spot[_];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(f),_++}else if(y.isRectAreaLight){const b=s.rectArea[x];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(f),o.identity(),a.copy(y.matrixWorld),a.premultiply(f),o.extractRotation(a),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){const b=s.point[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const b=s.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(f),m++}}}return{setup:c,setupView:l,state:s}}function Wc(i,t){const e=new B0(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(h){n.push(h)}function o(h){s.push(h)}function c(h){e.setup(n,h)}function l(h){e.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function k0(i,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let c;return o===void 0?(c=new Wc(i,t),e.set(r,[c])):a>=o.length?(c=new Wc(i,t),o.push(c)):c=o[a],c}function s(){e=new WeakMap}return{get:n,dispose:s}}class G0 extends ls{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class H0 extends ls{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const V0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W0=`uniform sampler2D shadow_pass;
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
}`;function X0(i,t,e){let n=new oa;const s=new nt,r=new nt,a=new me,o=new G0({depthPacking:Th}),c=new H0,l={},u=e.maxTextureSize,h={[jn]:qe,[qe]:jn,[we]:we},d=new Ye({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:V0,fragmentShader:W0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new ge;_.setAttribute("position",new Re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new rt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rl;let f=this.type;this.render=function(w,A,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const v=i.getRenderTarget(),S=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Dn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const B=f!==An&&this.type===An,L=f===An&&this.type!==An;for(let O=0,F=w.length;O<F;O++){const k=w[O],H=k.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const q=H.getFrameExtents();if(s.multiply(q),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/q.x),s.x=r.x*q.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/q.y),s.y=r.y*q.y,H.mapSize.y=r.y)),H.map===null||B===!0||L===!0){const tt=this.type!==An?{minFilter:Xe,magFilter:Xe}:{};H.map!==null&&H.map.dispose(),H.map=new dn(s.x,s.y,tt),H.map.texture.name=k.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const Z=H.getViewportCount();for(let tt=0;tt<Z;tt++){const ut=H.getViewport(tt);a.set(r.x*ut.x,r.y*ut.y,r.x*ut.z,r.y*ut.w),D.viewport(a),H.updateMatrices(k,tt),n=H.getFrustum(),y(A,T,H.camera,k,this.type)}H.isPointLightShadow!==!0&&this.type===An&&M(H,T),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(v,S,P)};function M(w,A){const T=t.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new dn(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,T,d,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,T,p,x,null)}function g(w,A,T,v){let S=null;const P=T.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)S=P;else if(S=T.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const D=S.uuid,B=A.uuid;let L=l[D];L===void 0&&(L={},l[D]=L);let O=L[B];O===void 0&&(O=S.clone(),L[B]=O,A.addEventListener("dispose",b)),S=O}if(S.visible=A.visible,S.wireframe=A.wireframe,v===An?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:h[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,T.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const D=i.properties.get(S);D.light=T}return S}function y(w,A,T,v,S){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===An)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,w.matrixWorld);const B=t.update(w),L=w.material;if(Array.isArray(L)){const O=B.groups;for(let F=0,k=O.length;F<k;F++){const H=O[F],q=L[H.materialIndex];if(q&&q.visible){const Z=g(w,q,v,S);w.onBeforeShadow(i,w,A,T,B,Z,H),i.renderBufferDirect(T,null,B,Z,w,H),w.onAfterShadow(i,w,A,T,B,Z,H)}}}else if(L.visible){const O=g(w,L,v,S);w.onBeforeShadow(i,w,A,T,B,O,null),i.renderBufferDirect(T,null,B,O,w,null),w.onAfterShadow(i,w,A,T,B,O,null)}}const D=w.children;for(let B=0,L=D.length;B<L;B++)y(D[B],A,T,v,S)}function b(w){w.target.removeEventListener("dispose",b);for(const T in l){const v=l[T],S=w.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}function Y0(i,t,e){const n=e.isWebGL2;function s(){let z=!1;const vt=new me;let pt=null;const Ft=new me(0,0,0,0);return{setMask:function(Ot){pt!==Ot&&!z&&(i.colorMask(Ot,Ot,Ot,Ot),pt=Ot)},setLocked:function(Ot){z=Ot},setClear:function(Ot,ne,se,Ee,ce){ce===!0&&(Ot*=Ee,ne*=Ee,se*=Ee),vt.set(Ot,ne,se,Ee),Ft.equals(vt)===!1&&(i.clearColor(Ot,ne,se,Ee),Ft.copy(vt))},reset:function(){z=!1,pt=null,Ft.set(-1,0,0,0)}}}function r(){let z=!1,vt=null,pt=null,Ft=null;return{setTest:function(Ot){Ot?ot(i.DEPTH_TEST):_t(i.DEPTH_TEST)},setMask:function(Ot){vt!==Ot&&!z&&(i.depthMask(Ot),vt=Ot)},setFunc:function(Ot){if(pt!==Ot){switch(Ot){case oh:i.depthFunc(i.NEVER);break;case ah:i.depthFunc(i.ALWAYS);break;case ch:i.depthFunc(i.LESS);break;case yr:i.depthFunc(i.LEQUAL);break;case lh:i.depthFunc(i.EQUAL);break;case uh:i.depthFunc(i.GEQUAL);break;case hh:i.depthFunc(i.GREATER);break;case dh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=Ot}},setLocked:function(Ot){z=Ot},setClear:function(Ot){Ft!==Ot&&(i.clearDepth(Ot),Ft=Ot)},reset:function(){z=!1,vt=null,pt=null,Ft=null}}}function a(){let z=!1,vt=null,pt=null,Ft=null,Ot=null,ne=null,se=null,Ee=null,ce=null;return{setTest:function(le){z||(le?ot(i.STENCIL_TEST):_t(i.STENCIL_TEST))},setMask:function(le){vt!==le&&!z&&(i.stencilMask(le),vt=le)},setFunc:function(le,Ne,at){(pt!==le||Ft!==Ne||Ot!==at)&&(i.stencilFunc(le,Ne,at),pt=le,Ft=Ne,Ot=at)},setOp:function(le,Ne,at){(ne!==le||se!==Ne||Ee!==at)&&(i.stencilOp(le,Ne,at),ne=le,se=Ne,Ee=at)},setLocked:function(le){z=le},setClear:function(le){ce!==le&&(i.clearStencil(le),ce=le)},reset:function(){z=!1,vt=null,pt=null,Ft=null,Ot=null,ne=null,se=null,Ee=null,ce=null}}}const o=new s,c=new r,l=new a,u=new WeakMap,h=new WeakMap;let d={},p={},_=new WeakMap,x=[],m=null,f=!1,M=null,g=null,y=null,b=null,w=null,A=null,T=null,v=new Ut(0,0,0),S=0,P=!1,D=null,B=null,L=null,O=null,F=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,q=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Z)[1]),H=q>=1):Z.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),H=q>=2);let tt=null,ut={};const Y=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),mt=new me().fromArray(Y),bt=new me().fromArray(Q);function Tt(z,vt,pt,Ft){const Ot=new Uint8Array(4),ne=i.createTexture();i.bindTexture(z,ne),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let se=0;se<pt;se++)n&&(z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY)?i.texImage3D(vt,0,i.RGBA,1,1,Ft,0,i.RGBA,i.UNSIGNED_BYTE,Ot):i.texImage2D(vt+se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ot);return ne}const X={};X[i.TEXTURE_2D]=Tt(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=Tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(X[i.TEXTURE_2D_ARRAY]=Tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=Tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ot(i.DEPTH_TEST),c.setFunc(yr),gt(!1),R(Aa),ot(i.CULL_FACE),$(Dn);function ot(z){d[z]!==!0&&(i.enable(z),d[z]=!0)}function _t(z){d[z]!==!1&&(i.disable(z),d[z]=!1)}function Ct(z,vt){return p[z]!==vt?(i.bindFramebuffer(z,vt),p[z]=vt,n&&(z===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=vt),z===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=vt)),!0):!1}function U(z,vt){let pt=x,Ft=!1;if(z)if(pt=_.get(vt),pt===void 0&&(pt=[],_.set(vt,pt)),z.isWebGLMultipleRenderTargets){const Ot=z.texture;if(pt.length!==Ot.length||pt[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,se=Ot.length;ne<se;ne++)pt[ne]=i.COLOR_ATTACHMENT0+ne;pt.length=Ot.length,Ft=!0}}else pt[0]!==i.COLOR_ATTACHMENT0&&(pt[0]=i.COLOR_ATTACHMENT0,Ft=!0);else pt[0]!==i.BACK&&(pt[0]=i.BACK,Ft=!0);Ft&&(e.isWebGL2?i.drawBuffers(pt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(pt))}function it(z){return m!==z?(i.useProgram(z),m=z,!0):!1}const K={[hi]:i.FUNC_ADD,[Xu]:i.FUNC_SUBTRACT,[Yu]:i.FUNC_REVERSE_SUBTRACT};if(n)K[Pa]=i.MIN,K[La]=i.MAX;else{const z=t.get("EXT_blend_minmax");z!==null&&(K[Pa]=z.MIN_EXT,K[La]=z.MAX_EXT)}const ct={[qu]:i.ZERO,[ju]:i.ONE,[Ku]:i.SRC_COLOR,[zo]:i.SRC_ALPHA,[eh]:i.SRC_ALPHA_SATURATE,[Qu]:i.DST_COLOR,[Ju]:i.DST_ALPHA,[Zu]:i.ONE_MINUS_SRC_COLOR,[Bo]:i.ONE_MINUS_SRC_ALPHA,[th]:i.ONE_MINUS_DST_COLOR,[$u]:i.ONE_MINUS_DST_ALPHA,[nh]:i.CONSTANT_COLOR,[ih]:i.ONE_MINUS_CONSTANT_COLOR,[sh]:i.CONSTANT_ALPHA,[rh]:i.ONE_MINUS_CONSTANT_ALPHA};function $(z,vt,pt,Ft,Ot,ne,se,Ee,ce,le){if(z===Dn){f===!0&&(_t(i.BLEND),f=!1);return}if(f===!1&&(ot(i.BLEND),f=!0),z!==Wu){if(z!==M||le!==P){if((g!==hi||w!==hi)&&(i.blendEquation(i.FUNC_ADD),g=hi,w=hi),le)switch(z){case Ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fo:i.blendFunc(i.ONE,i.ONE);break;case Ra:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ca:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ra:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ca:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}y=null,b=null,A=null,T=null,v.set(0,0,0),S=0,M=z,P=le}return}Ot=Ot||vt,ne=ne||pt,se=se||Ft,(vt!==g||Ot!==w)&&(i.blendEquationSeparate(K[vt],K[Ot]),g=vt,w=Ot),(pt!==y||Ft!==b||ne!==A||se!==T)&&(i.blendFuncSeparate(ct[pt],ct[Ft],ct[ne],ct[se]),y=pt,b=Ft,A=ne,T=se),(Ee.equals(v)===!1||ce!==S)&&(i.blendColor(Ee.r,Ee.g,Ee.b,ce),v.copy(Ee),S=ce),M=z,P=!1}function Et(z,vt){z.side===we?_t(i.CULL_FACE):ot(i.CULL_FACE);let pt=z.side===qe;vt&&(pt=!pt),gt(pt),z.blending===Ji&&z.transparent===!1?$(Dn):$(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),c.setFunc(z.depthFunc),c.setTest(z.depthTest),c.setMask(z.depthWrite),o.setMask(z.colorWrite);const Ft=z.stencilWrite;l.setTest(Ft),Ft&&(l.setMask(z.stencilWriteMask),l.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),l.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),G(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):_t(i.SAMPLE_ALPHA_TO_COVERAGE)}function gt(z){D!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),D=z)}function R(z){z!==Hu?(ot(i.CULL_FACE),z!==B&&(z===Aa?i.cullFace(i.BACK):z===Vu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_t(i.CULL_FACE),B=z}function E(z){z!==L&&(H&&i.lineWidth(z),L=z)}function G(z,vt,pt){z?(ot(i.POLYGON_OFFSET_FILL),(O!==vt||F!==pt)&&(i.polygonOffset(vt,pt),O=vt,F=pt)):_t(i.POLYGON_OFFSET_FILL)}function et(z){z?ot(i.SCISSOR_TEST):_t(i.SCISSOR_TEST)}function st(z){z===void 0&&(z=i.TEXTURE0+k-1),tt!==z&&(i.activeTexture(z),tt=z)}function lt(z,vt,pt){pt===void 0&&(tt===null?pt=i.TEXTURE0+k-1:pt=tt);let Ft=ut[pt];Ft===void 0&&(Ft={type:void 0,texture:void 0},ut[pt]=Ft),(Ft.type!==z||Ft.texture!==vt)&&(tt!==pt&&(i.activeTexture(pt),tt=pt),i.bindTexture(z,vt||X[z]),Ft.type=z,Ft.texture=vt)}function Lt(){const z=ut[tt];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function St(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Rt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function zt(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Vt(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function qt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function N(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ht(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function yt(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ft(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function It(z){mt.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),mt.copy(z))}function jt(z){bt.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),bt.copy(z))}function Jt(z,vt){let pt=h.get(vt);pt===void 0&&(pt=new WeakMap,h.set(vt,pt));let Ft=pt.get(z);Ft===void 0&&(Ft=i.getUniformBlockIndex(vt,z.name),pt.set(z,Ft))}function Xt(z,vt){const Ft=h.get(vt).get(z);u.get(vt)!==Ft&&(i.uniformBlockBinding(vt,Ft,z.__bindingPointIndex),u.set(vt,Ft))}function Mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},tt=null,ut={},p={},_=new WeakMap,x=[],m=null,f=!1,M=null,g=null,y=null,b=null,w=null,A=null,T=null,v=new Ut(0,0,0),S=0,P=!1,D=null,B=null,L=null,O=null,F=null,mt.set(0,0,i.canvas.width,i.canvas.height),bt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:ot,disable:_t,bindFramebuffer:Ct,drawBuffers:U,useProgram:it,setBlending:$,setMaterial:Et,setFlipSided:gt,setCullFace:R,setLineWidth:E,setPolygonOffset:G,setScissorTest:et,activeTexture:st,bindTexture:lt,unbindTexture:Lt,compressedTexImage2D:St,compressedTexImage3D:Rt,texImage2D:yt,texImage3D:ft,updateUBOMapping:Jt,uniformBlockBinding:Xt,texStorage2D:N,texStorage3D:ht,texSubImage2D:zt,texSubImage3D:Vt,compressedTexSubImage2D:dt,compressedTexSubImage3D:qt,scissor:It,viewport:jt,reset:Mt}}function q0(i,t,e,n,s,r,a){const o=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,E){return p?new OffscreenCanvas(R,E):Ar("canvas")}function x(R,E,G,et){let st=1;if((R.width>et||R.height>et)&&(st=et/Math.max(R.width,R.height)),st<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const lt=E?Tr:Math.floor,Lt=lt(st*R.width),St=lt(st*R.height);h===void 0&&(h=_(Lt,St));const Rt=G?_(Lt,St):h;return Rt.width=Lt,Rt.height=St,Rt.getContext("2d").drawImage(R,0,0,Lt,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Lt+"x"+St+")."),Rt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return Vo(R.width)&&Vo(R.height)}function f(R){return o?!1:R.wrapS!==un||R.wrapT!==un||R.minFilter!==Xe&&R.minFilter!==nn}function M(R,E){return R.generateMipmaps&&E&&R.minFilter!==Xe&&R.minFilter!==nn}function g(R){i.generateMipmap(R)}function y(R,E,G,et,st=!1){if(o===!1)return E;if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let lt=E;if(E===i.RED&&(G===i.FLOAT&&(lt=i.R32F),G===i.HALF_FLOAT&&(lt=i.R16F),G===i.UNSIGNED_BYTE&&(lt=i.R8)),E===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(lt=i.R8UI),G===i.UNSIGNED_SHORT&&(lt=i.R16UI),G===i.UNSIGNED_INT&&(lt=i.R32UI),G===i.BYTE&&(lt=i.R8I),G===i.SHORT&&(lt=i.R16I),G===i.INT&&(lt=i.R32I)),E===i.RG&&(G===i.FLOAT&&(lt=i.RG32F),G===i.HALF_FLOAT&&(lt=i.RG16F),G===i.UNSIGNED_BYTE&&(lt=i.RG8)),E===i.RGBA){const Lt=st?Sr:he.getTransfer(et);G===i.FLOAT&&(lt=i.RGBA32F),G===i.HALF_FLOAT&&(lt=i.RGBA16F),G===i.UNSIGNED_BYTE&&(lt=Lt===fe?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(lt=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(lt=i.RGB5_A1)}return(lt===i.R16F||lt===i.R32F||lt===i.RG16F||lt===i.RG32F||lt===i.RGBA16F||lt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function b(R,E,G){return M(R,G)===!0||R.isFramebufferTexture&&R.minFilter!==Xe&&R.minFilter!==nn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function w(R){return R===Xe||R===Da||R===Xr?i.NEAREST:i.LINEAR}function A(R){const E=R.target;E.removeEventListener("dispose",A),v(E),E.isVideoTexture&&u.delete(E)}function T(R){const E=R.target;E.removeEventListener("dispose",T),P(E)}function v(R){const E=n.get(R);if(E.__webglInit===void 0)return;const G=R.source,et=d.get(G);if(et){const st=et[E.__cacheKey];st.usedTimes--,st.usedTimes===0&&S(R),Object.keys(et).length===0&&d.delete(G)}n.remove(R)}function S(R){const E=n.get(R);i.deleteTexture(E.__webglTexture);const G=R.source,et=d.get(G);delete et[E.__cacheKey],a.memory.textures--}function P(R){const E=R.texture,G=n.get(R),et=n.get(E);if(et.__webglTexture!==void 0&&(i.deleteTexture(et.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(G.__webglFramebuffer[st]))for(let lt=0;lt<G.__webglFramebuffer[st].length;lt++)i.deleteFramebuffer(G.__webglFramebuffer[st][lt]);else i.deleteFramebuffer(G.__webglFramebuffer[st]);G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer[st])}else{if(Array.isArray(G.__webglFramebuffer))for(let st=0;st<G.__webglFramebuffer.length;st++)i.deleteFramebuffer(G.__webglFramebuffer[st]);else i.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&i.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let st=0;st<G.__webglColorRenderbuffer.length;st++)G.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(G.__webglColorRenderbuffer[st]);G.__webglDepthRenderbuffer&&i.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let st=0,lt=E.length;st<lt;st++){const Lt=n.get(E[st]);Lt.__webglTexture&&(i.deleteTexture(Lt.__webglTexture),a.memory.textures--),n.remove(E[st])}n.remove(E),n.remove(R)}let D=0;function B(){D=0}function L(){const R=D;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),D+=1,R}function O(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function F(R,E){const G=n.get(R);if(R.isVideoTexture&&Et(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const et=R.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(G,R,E);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+E)}function k(R,E){const G=n.get(R);if(R.version>0&&G.__version!==R.version){mt(G,R,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+E)}function H(R,E){const G=n.get(R);if(R.version>0&&G.__version!==R.version){mt(G,R,E);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+E)}function q(R,E){const G=n.get(R);if(R.version>0&&G.__version!==R.version){bt(G,R,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+E)}const Z={[As]:i.REPEAT,[un]:i.CLAMP_TO_EDGE,[Go]:i.MIRRORED_REPEAT},tt={[Xe]:i.NEAREST,[Da]:i.NEAREST_MIPMAP_NEAREST,[Xr]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[gh]:i.LINEAR_MIPMAP_NEAREST,[Rs]:i.LINEAR_MIPMAP_LINEAR},ut={[Rh]:i.NEVER,[Uh]:i.ALWAYS,[Ch]:i.LESS,[Xl]:i.LEQUAL,[Ph]:i.EQUAL,[Ih]:i.GEQUAL,[Lh]:i.GREATER,[Dh]:i.NOTEQUAL};function Y(R,E,G){if(G?(i.texParameteri(R,i.TEXTURE_WRAP_S,Z[E.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Z[E.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Z[E.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,tt[E.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,tt[E.minFilter])):(i.texParameteri(R,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(R,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==un||E.wrapT!==un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(R,i.TEXTURE_MAG_FILTER,w(E.magFilter)),i.texParameteri(R,i.TEXTURE_MIN_FILTER,w(E.minFilter)),E.minFilter!==Xe&&E.minFilter!==nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,ut[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const et=t.get("EXT_texture_filter_anisotropic");if(E.magFilter===Xe||E.minFilter!==Xr&&E.minFilter!==Rs||E.type===Wn&&t.has("OES_texture_float_linear")===!1||o===!1&&E.type===In&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(R,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function Q(R,E){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",A));const et=E.source;let st=d.get(et);st===void 0&&(st={},d.set(et,st));const lt=O(E);if(lt!==R.__cacheKey){st[lt]===void 0&&(st[lt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),st[lt].usedTimes++;const Lt=st[R.__cacheKey];Lt!==void 0&&(st[R.__cacheKey].usedTimes--,Lt.usedTimes===0&&S(E)),R.__cacheKey=lt,R.__webglTexture=st[lt].texture}return G}function mt(R,E,G){let et=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(et=i.TEXTURE_3D);const st=Q(R,E),lt=E.source;e.bindTexture(et,R.__webglTexture,i.TEXTURE0+G);const Lt=n.get(lt);if(lt.version!==Lt.__version||st===!0){e.activeTexture(i.TEXTURE0+G);const St=he.getPrimaries(he.workingColorSpace),Rt=E.colorSpace===sn?null:he.getPrimaries(E.colorSpace),zt=E.colorSpace===sn||St===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);const Vt=f(E)&&m(E.image)===!1;let dt=x(E.image,Vt,!1,s.maxTextureSize);dt=gt(E,dt);const qt=m(dt)||o,N=r.convert(E.format,E.colorSpace);let ht=r.convert(E.type),yt=y(E.internalFormat,N,ht,E.colorSpace,E.isVideoTexture);Y(et,E,qt);let ft;const It=E.mipmaps,jt=o&&E.isVideoTexture!==!0&&yt!==Hl,Jt=Lt.__version===void 0||st===!0,Xt=b(E,dt,qt);if(E.isDepthTexture)yt=i.DEPTH_COMPONENT,o?E.type===Wn?yt=i.DEPTH_COMPONENT32F:E.type===Vn?yt=i.DEPTH_COMPONENT24:E.type===pi?yt=i.DEPTH24_STENCIL8:yt=i.DEPTH_COMPONENT16:E.type===Wn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===mi&&yt===i.DEPTH_COMPONENT&&E.type!==na&&E.type!==Vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Vn,ht=r.convert(E.type)),E.format===is&&yt===i.DEPTH_COMPONENT&&(yt=i.DEPTH_STENCIL,E.type!==pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=pi,ht=r.convert(E.type))),Jt&&(jt?e.texStorage2D(i.TEXTURE_2D,1,yt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,yt,dt.width,dt.height,0,N,ht,null));else if(E.isDataTexture)if(It.length>0&&qt){jt&&Jt&&e.texStorage2D(i.TEXTURE_2D,Xt,yt,It[0].width,It[0].height);for(let Mt=0,z=It.length;Mt<z;Mt++)ft=It[Mt],jt?e.texSubImage2D(i.TEXTURE_2D,Mt,0,0,ft.width,ft.height,N,ht,ft.data):e.texImage2D(i.TEXTURE_2D,Mt,yt,ft.width,ft.height,0,N,ht,ft.data);E.generateMipmaps=!1}else jt?(Jt&&e.texStorage2D(i.TEXTURE_2D,Xt,yt,dt.width,dt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt.width,dt.height,N,ht,dt.data)):e.texImage2D(i.TEXTURE_2D,0,yt,dt.width,dt.height,0,N,ht,dt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){jt&&Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Xt,yt,It[0].width,It[0].height,dt.depth);for(let Mt=0,z=It.length;Mt<z;Mt++)ft=It[Mt],E.format!==hn?N!==null?jt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,0,ft.width,ft.height,dt.depth,N,ft.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Mt,yt,ft.width,ft.height,dt.depth,0,ft.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,0,ft.width,ft.height,dt.depth,N,ht,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Mt,yt,ft.width,ft.height,dt.depth,0,N,ht,ft.data)}else{jt&&Jt&&e.texStorage2D(i.TEXTURE_2D,Xt,yt,It[0].width,It[0].height);for(let Mt=0,z=It.length;Mt<z;Mt++)ft=It[Mt],E.format!==hn?N!==null?jt?e.compressedTexSubImage2D(i.TEXTURE_2D,Mt,0,0,ft.width,ft.height,N,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,Mt,yt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?e.texSubImage2D(i.TEXTURE_2D,Mt,0,0,ft.width,ft.height,N,ht,ft.data):e.texImage2D(i.TEXTURE_2D,Mt,yt,ft.width,ft.height,0,N,ht,ft.data)}else if(E.isDataArrayTexture)jt?(Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Xt,yt,dt.width,dt.height,dt.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,N,ht,dt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,yt,dt.width,dt.height,dt.depth,0,N,ht,dt.data);else if(E.isData3DTexture)jt?(Jt&&e.texStorage3D(i.TEXTURE_3D,Xt,yt,dt.width,dt.height,dt.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,N,ht,dt.data)):e.texImage3D(i.TEXTURE_3D,0,yt,dt.width,dt.height,dt.depth,0,N,ht,dt.data);else if(E.isFramebufferTexture){if(Jt)if(jt)e.texStorage2D(i.TEXTURE_2D,Xt,yt,dt.width,dt.height);else{let Mt=dt.width,z=dt.height;for(let vt=0;vt<Xt;vt++)e.texImage2D(i.TEXTURE_2D,vt,yt,Mt,z,0,N,ht,null),Mt>>=1,z>>=1}}else if(It.length>0&&qt){jt&&Jt&&e.texStorage2D(i.TEXTURE_2D,Xt,yt,It[0].width,It[0].height);for(let Mt=0,z=It.length;Mt<z;Mt++)ft=It[Mt],jt?e.texSubImage2D(i.TEXTURE_2D,Mt,0,0,N,ht,ft):e.texImage2D(i.TEXTURE_2D,Mt,yt,N,ht,ft);E.generateMipmaps=!1}else jt?(Jt&&e.texStorage2D(i.TEXTURE_2D,Xt,yt,dt.width,dt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,N,ht,dt)):e.texImage2D(i.TEXTURE_2D,0,yt,N,ht,dt);M(E,qt)&&g(et),Lt.__version=lt.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function bt(R,E,G){if(E.image.length!==6)return;const et=Q(R,E),st=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+G);const lt=n.get(st);if(st.version!==lt.__version||et===!0){e.activeTexture(i.TEXTURE0+G);const Lt=he.getPrimaries(he.workingColorSpace),St=E.colorSpace===sn?null:he.getPrimaries(E.colorSpace),Rt=E.colorSpace===sn||Lt===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const zt=E.isCompressedTexture||E.image[0].isCompressedTexture,Vt=E.image[0]&&E.image[0].isDataTexture,dt=[];for(let Mt=0;Mt<6;Mt++)!zt&&!Vt?dt[Mt]=x(E.image[Mt],!1,!0,s.maxCubemapSize):dt[Mt]=Vt?E.image[Mt].image:E.image[Mt],dt[Mt]=gt(E,dt[Mt]);const qt=dt[0],N=m(qt)||o,ht=r.convert(E.format,E.colorSpace),yt=r.convert(E.type),ft=y(E.internalFormat,ht,yt,E.colorSpace),It=o&&E.isVideoTexture!==!0,jt=lt.__version===void 0||et===!0;let Jt=b(E,qt,N);Y(i.TEXTURE_CUBE_MAP,E,N);let Xt;if(zt){It&&jt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Jt,ft,qt.width,qt.height);for(let Mt=0;Mt<6;Mt++){Xt=dt[Mt].mipmaps;for(let z=0;z<Xt.length;z++){const vt=Xt[z];E.format!==hn?ht!==null?It?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,z,0,0,vt.width,vt.height,ht,vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,z,ft,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,z,0,0,vt.width,vt.height,ht,yt,vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,z,ft,vt.width,vt.height,0,ht,yt,vt.data)}}}else{Xt=E.mipmaps,It&&jt&&(Xt.length>0&&Jt++,e.texStorage2D(i.TEXTURE_CUBE_MAP,Jt,ft,dt[0].width,dt[0].height));for(let Mt=0;Mt<6;Mt++)if(Vt){It?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,dt[Mt].width,dt[Mt].height,ht,yt,dt[Mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ft,dt[Mt].width,dt[Mt].height,0,ht,yt,dt[Mt].data);for(let z=0;z<Xt.length;z++){const pt=Xt[z].image[Mt].image;It?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,z+1,0,0,pt.width,pt.height,ht,yt,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,z+1,ft,pt.width,pt.height,0,ht,yt,pt.data)}}else{It?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,ht,yt,dt[Mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ft,ht,yt,dt[Mt]);for(let z=0;z<Xt.length;z++){const vt=Xt[z];It?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,z+1,0,0,ht,yt,vt.image[Mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,z+1,ft,ht,yt,vt.image[Mt])}}}M(E,N)&&g(i.TEXTURE_CUBE_MAP),lt.__version=st.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Tt(R,E,G,et,st,lt){const Lt=r.convert(G.format,G.colorSpace),St=r.convert(G.type),Rt=y(G.internalFormat,Lt,St,G.colorSpace);if(!n.get(E).__hasExternalTextures){const Vt=Math.max(1,E.width>>lt),dt=Math.max(1,E.height>>lt);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,lt,Rt,Vt,dt,E.depth,0,Lt,St,null):e.texImage2D(st,lt,Rt,Vt,dt,0,Lt,St,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),$(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,st,n.get(G).__webglTexture,0,ct(E)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,st,n.get(G).__webglTexture,lt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function X(R,E,G){if(i.bindRenderbuffer(i.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let et=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(G||$(E)){const st=E.depthTexture;st&&st.isDepthTexture&&(st.type===Wn?et=i.DEPTH_COMPONENT32F:st.type===Vn&&(et=i.DEPTH_COMPONENT24));const lt=ct(E);$(E)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,et,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,et,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,et,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){const et=ct(E);G&&$(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,et,i.DEPTH24_STENCIL8,E.width,E.height):$(E)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{const et=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let st=0;st<et.length;st++){const lt=et[st],Lt=r.convert(lt.format,lt.colorSpace),St=r.convert(lt.type),Rt=y(lt.internalFormat,Lt,St,lt.colorSpace),zt=ct(E);G&&$(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,Rt,E.width,E.height):$(E)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,zt,Rt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Rt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ot(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),F(E.depthTexture,0);const et=n.get(E.depthTexture).__webglTexture,st=ct(E);if(E.depthTexture.format===mi)$(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(E.depthTexture.format===is)$(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function _t(R){const E=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ot(E.__webglFramebuffer,R)}else if(G){E.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[et]),E.__webglDepthbuffer[et]=i.createRenderbuffer(),X(E.__webglDepthbuffer[et],R,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),X(E.__webglDepthbuffer,R,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(R,E,G){const et=n.get(R);E!==void 0&&Tt(et.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&_t(R)}function U(R){const E=R.texture,G=n.get(R),et=n.get(E);R.addEventListener("dispose",T),R.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=E.version,a.memory.textures++);const st=R.isWebGLCubeRenderTarget===!0,lt=R.isWebGLMultipleRenderTargets===!0,Lt=m(R)||o;if(st){G.__webglFramebuffer=[];for(let St=0;St<6;St++)if(o&&E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[St]=[];for(let Rt=0;Rt<E.mipmaps.length;Rt++)G.__webglFramebuffer[St][Rt]=i.createFramebuffer()}else G.__webglFramebuffer[St]=i.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let St=0;St<E.mipmaps.length;St++)G.__webglFramebuffer[St]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(lt)if(s.drawBuffers){const St=R.texture;for(let Rt=0,zt=St.length;Rt<zt;Rt++){const Vt=n.get(St[Rt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&$(R)===!1){const St=lt?E:[E];G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Rt=0;Rt<St.length;Rt++){const zt=St[Rt];G.__webglColorRenderbuffer[Rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[Rt]);const Vt=r.convert(zt.format,zt.colorSpace),dt=r.convert(zt.type),qt=y(zt.internalFormat,Vt,dt,zt.colorSpace,R.isXRRenderTarget===!0),N=ct(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,N,qt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,G.__webglColorRenderbuffer[Rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),X(G.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),Y(i.TEXTURE_CUBE_MAP,E,Lt);for(let St=0;St<6;St++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let Rt=0;Rt<E.mipmaps.length;Rt++)Tt(G.__webglFramebuffer[St][Rt],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+St,Rt);else Tt(G.__webglFramebuffer[St],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0);M(E,Lt)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){const St=R.texture;for(let Rt=0,zt=St.length;Rt<zt;Rt++){const Vt=St[Rt],dt=n.get(Vt);e.bindTexture(i.TEXTURE_2D,dt.__webglTexture),Y(i.TEXTURE_2D,Vt,Lt),Tt(G.__webglFramebuffer,R,Vt,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,0),M(Vt,Lt)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let St=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?St=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(St,et.__webglTexture),Y(St,E,Lt),o&&E.mipmaps&&E.mipmaps.length>0)for(let Rt=0;Rt<E.mipmaps.length;Rt++)Tt(G.__webglFramebuffer[Rt],R,E,i.COLOR_ATTACHMENT0,St,Rt);else Tt(G.__webglFramebuffer,R,E,i.COLOR_ATTACHMENT0,St,0);M(E,Lt)&&g(St),e.unbindTexture()}R.depthBuffer&&_t(R)}function it(R){const E=m(R)||o,G=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let et=0,st=G.length;et<st;et++){const lt=G[et];if(M(lt,E)){const Lt=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,St=n.get(lt).__webglTexture;e.bindTexture(Lt,St),g(Lt),e.unbindTexture()}}}function K(R){if(o&&R.samples>0&&$(R)===!1){const E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],G=R.width,et=R.height;let st=i.COLOR_BUFFER_BIT;const lt=[],Lt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(R),Rt=R.isWebGLMultipleRenderTargets===!0;if(Rt)for(let zt=0;zt<E.length;zt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let zt=0;zt<E.length;zt++){lt.push(i.COLOR_ATTACHMENT0+zt),R.depthBuffer&&lt.push(Lt);const Vt=St.__ignoreDepthValues!==void 0?St.__ignoreDepthValues:!1;if(Vt===!1&&(R.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),Rt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[zt]),Vt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Lt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Lt])),Rt){const dt=n.get(E[zt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,dt,0)}i.blitFramebuffer(0,0,G,et,0,0,G,et,st,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,lt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Rt)for(let zt=0;zt<E.length;zt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.RENDERBUFFER,St.__webglColorRenderbuffer[zt]);const Vt=n.get(E[zt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.TEXTURE_2D,Vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}}function ct(R){return Math.min(s.maxSamples,R.samples)}function $(R){const E=n.get(R);return o&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Et(R){const E=a.render.frame;u.get(R)!==E&&(u.set(R,E),R.update())}function gt(R,E){const G=R.colorSpace,et=R.format,st=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Ho||G!==Un&&G!==sn&&(he.getTransfer(G)===fe?o===!1?t.has("EXT_sRGB")===!0&&et===hn?(R.format=Ho,R.minFilter=nn,R.generateMipmaps=!1):E=ql.sRGBToLinear(E):(et!==hn||st!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}this.allocateTextureUnit=L,this.resetTextureUnits=B,this.setTexture2D=F,this.setTexture2DArray=k,this.setTexture3D=H,this.setTextureCube=q,this.rebindTextures=Ct,this.setupRenderTarget=U,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=$}function j0(i,t,e){const n=e.isWebGL2;function s(r,a=sn){let o;const c=he.getTransfer(a);if(r===Yn)return i.UNSIGNED_BYTE;if(r===Fl)return i.UNSIGNED_SHORT_4_4_4_4;if(r===zl)return i.UNSIGNED_SHORT_5_5_5_1;if(r===_h)return i.BYTE;if(r===xh)return i.SHORT;if(r===na)return i.UNSIGNED_SHORT;if(r===Ol)return i.INT;if(r===Vn)return i.UNSIGNED_INT;if(r===Wn)return i.FLOAT;if(r===In)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===vh)return i.ALPHA;if(r===hn)return i.RGBA;if(r===yh)return i.LUMINANCE;if(r===Mh)return i.LUMINANCE_ALPHA;if(r===mi)return i.DEPTH_COMPONENT;if(r===is)return i.DEPTH_STENCIL;if(r===Ho)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Sh)return i.RED;if(r===Bl)return i.RED_INTEGER;if(r===wh)return i.RG;if(r===kl)return i.RG_INTEGER;if(r===Gl)return i.RGBA_INTEGER;if(r===Yr||r===qr||r===jr||r===Kr)if(c===fe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Yr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===qr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===jr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Kr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Yr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===qr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===jr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Kr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ia||r===Ua||r===Na||r===Oa)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Ia)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ua)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Na)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Oa)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Hl)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Fa||r===za)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Fa)return c===fe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===za)return c===fe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ba||r===ka||r===Ga||r===Ha||r===Va||r===Wa||r===Xa||r===Ya||r===qa||r===ja||r===Ka||r===Za||r===Ja||r===$a)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Ba)return c===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ka)return c===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ga)return c===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ha)return c===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Va)return c===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Wa)return c===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Xa)return c===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ya)return c===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===qa)return c===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ja)return c===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ka)return c===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Za)return c===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ja)return c===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===$a)return c===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Zr||r===Qa||r===tc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Zr)return c===fe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Qa)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===tc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Eh||r===ec||r===nc||r===ic)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Zr)return o.COMPRESSED_RED_RGTC1_EXT;if(r===ec)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===nc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ic)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===pi?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class K0 extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Zt extends ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Z0={type:"move"};class yo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),f=this._getHandJoint(l,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,_=.005;l.inputState.pinching&&d>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Z0)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Zt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class J0 extends yi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,_=null;const x=e.getContextAttributes();let m=null,f=null;const M=[],g=[],y=new nt;let b=null;const w=new je;w.layers.enable(1),w.viewport=new me;const A=new je;A.layers.enable(2),A.viewport=new me;const T=[w,A],v=new K0;v.layers.enable(1),v.layers.enable(2);let S=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=M[Y];return Q===void 0&&(Q=new yo,M[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=M[Y];return Q===void 0&&(Q=new yo,M[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=M[Y];return Q===void 0&&(Q=new yo,M[Y]=Q),Q.getHandSpace()};function D(Y){const Q=g.indexOf(Y.inputSource);if(Q===-1)return;const mt=M[Q];mt!==void 0&&(mt.update(Y.inputSource,Y.frame,l||a),mt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function B(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",L);for(let Y=0;Y<M.length;Y++){const Q=g[Y];Q!==null&&(g[Y]=null,M[Y].disconnect(Q))}S=null,P=null,t.setRenderTarget(m),p=null,d=null,h=null,s=null,f=null,ut.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",B),s.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(y),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Q={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new dn(p.framebufferWidth,p.framebufferHeight,{format:hn,type:Yn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let Q=null,mt=null,bt=null;x.depth&&(bt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=x.stencil?is:mi,mt=x.stencil?pi:Vn);const Tt={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(Tt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),f=new dn(d.textureWidth,d.textureHeight,{format:hn,type:Yn,depthTexture:new su(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});const X=t.properties.get(f);X.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ut.setContext(s),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(Y){for(let Q=0;Q<Y.removed.length;Q++){const mt=Y.removed[Q],bt=g.indexOf(mt);bt>=0&&(g[bt]=null,M[bt].disconnect(mt))}for(let Q=0;Q<Y.added.length;Q++){const mt=Y.added[Q];let bt=g.indexOf(mt);if(bt===-1){for(let X=0;X<M.length;X++)if(X>=g.length){g.push(mt),bt=X;break}else if(g[X]===null){g[X]=mt,bt=X;break}if(bt===-1)break}const Tt=M[bt];Tt&&Tt.connect(mt)}}const O=new I,F=new I;function k(Y,Q,mt){O.setFromMatrixPosition(Q.matrixWorld),F.setFromMatrixPosition(mt.matrixWorld);const bt=O.distanceTo(F),Tt=Q.projectionMatrix.elements,X=mt.projectionMatrix.elements,ot=Tt[14]/(Tt[10]-1),_t=Tt[14]/(Tt[10]+1),Ct=(Tt[9]+1)/Tt[5],U=(Tt[9]-1)/Tt[5],it=(Tt[8]-1)/Tt[0],K=(X[8]+1)/X[0],ct=ot*it,$=ot*K,Et=bt/(-it+K),gt=Et*-it;Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(gt),Y.translateZ(Et),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const R=ot+Et,E=_t+Et,G=ct-gt,et=$+(bt-gt),st=Ct*_t/E*R,lt=U*_t/E*R;Y.projectionMatrix.makePerspective(G,et,st,lt,R,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function H(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;v.near=A.near=w.near=Y.near,v.far=A.far=w.far=Y.far,(S!==v.near||P!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,P=v.far);const Q=Y.parent,mt=v.cameras;H(v,Q);for(let bt=0;bt<mt.length;bt++)H(mt[bt],Q);mt.length===2?k(v,w,A):v.projectionMatrix.copy(w.projectionMatrix),q(Y,v,Q)};function q(Y,Q,mt){mt===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(mt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ss*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)};let Z=null;function tt(Y,Q){if(u=Q.getViewerPose(l||a),_=Q,u!==null){const mt=u.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let bt=!1;mt.length!==v.cameras.length&&(v.cameras.length=0,bt=!0);for(let Tt=0;Tt<mt.length;Tt++){const X=mt[Tt];let ot=null;if(p!==null)ot=p.getViewport(X);else{const Ct=h.getViewSubImage(d,X);ot=Ct.viewport,Tt===0&&(t.setRenderTargetTextures(f,Ct.colorTexture,d.ignoreDepthValues?void 0:Ct.depthStencilTexture),t.setRenderTarget(f))}let _t=T[Tt];_t===void 0&&(_t=new je,_t.layers.enable(Tt),_t.viewport=new me,T[Tt]=_t),_t.matrix.fromArray(X.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(X.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(ot.x,ot.y,ot.width,ot.height),Tt===0&&(v.matrix.copy(_t.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),bt===!0&&v.cameras.push(_t)}}for(let mt=0;mt<M.length;mt++){const bt=g[mt],Tt=M[mt];bt!==null&&Tt!==void 0&&Tt.update(bt,Q,l||a)}Z&&Z(Y,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),_=null}const ut=new iu;ut.setAnimationLoop(tt),this.setAnimationLoop=function(Y){Z=Y},this.dispose=function(){}}}function $0(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,tu(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,g,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,M,g):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===qe&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===qe&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=t.get(f).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const g=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*g,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,M,g){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=g*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===qe&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const M=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Q0(i,t,e,n){let s={},r={},a=[];const o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(M,g){const y=g.program;n.uniformBlockBinding(M,y)}function l(M,g){let y=s[M.id];y===void 0&&(_(M),y=u(M),s[M.id]=y,M.addEventListener("dispose",m));const b=g.program;n.updateUBOMapping(M,b);const w=t.render.frame;r[M.id]!==w&&(d(M),r[M.id]=w)}function u(M){const g=h();M.__bindingPointIndex=g;const y=i.createBuffer(),b=M.__size,w=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,b,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,g,y),y}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const g=s[M.id],y=M.uniforms,b=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,g);for(let w=0,A=y.length;w<A;w++){const T=Array.isArray(y[w])?y[w]:[y[w]];for(let v=0,S=T.length;v<S;v++){const P=T[v];if(p(P,w,v,b)===!0){const D=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let L=0;for(let O=0;O<B.length;O++){const F=B[O],k=x(F);typeof F=="number"||typeof F=="boolean"?(P.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,D+L,P.__data)):F.isMatrix3?(P.__data[0]=F.elements[0],P.__data[1]=F.elements[1],P.__data[2]=F.elements[2],P.__data[3]=0,P.__data[4]=F.elements[3],P.__data[5]=F.elements[4],P.__data[6]=F.elements[5],P.__data[7]=0,P.__data[8]=F.elements[6],P.__data[9]=F.elements[7],P.__data[10]=F.elements[8],P.__data[11]=0):(F.toArray(P.__data,L),L+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,g,y,b){const w=M.value,A=g+"_"+y;if(b[A]===void 0)return typeof w=="number"||typeof w=="boolean"?b[A]=w:b[A]=w.clone(),!0;{const T=b[A];if(typeof w=="number"||typeof w=="boolean"){if(T!==w)return b[A]=w,!0}else if(T.equals(w)===!1)return T.copy(w),!0}return!1}function _(M){const g=M.uniforms;let y=0;const b=16;for(let A=0,T=g.length;A<T;A++){const v=Array.isArray(g[A])?g[A]:[g[A]];for(let S=0,P=v.length;S<P;S++){const D=v[S],B=Array.isArray(D.value)?D.value:[D.value];for(let L=0,O=B.length;L<O;L++){const F=B[L],k=x(F),H=y%b;H!==0&&b-H<k.boundary&&(y+=b-H),D.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=k.storage}}}const w=y%b;return w>0&&(y+=b-w),M.__size=y,M.__cache={},this}function x(M){const g={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(g.boundary=4,g.storage=4):M.isVector2?(g.boundary=8,g.storage=8):M.isVector3||M.isColor?(g.boundary=16,g.storage=12):M.isVector4?(g.boundary=16,g.storage=16):M.isMatrix3?(g.boundary=48,g.storage=48):M.isMatrix4?(g.boundary=64,g.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),g}function m(M){const g=M.target;g.removeEventListener("dispose",m);const y=a.indexOf(g.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[g.id]),delete s[g.id],delete r[g.id]}function f(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}class uu{constructor(t={}){const{canvas:e=Kh(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const p=new Uint32Array(4),_=new Int32Array(4);let x=null,m=null;const f=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Se,this._useLegacyLights=!1,this.toneMapping=Xn,this.toneMappingExposure=1;const g=this;let y=!1,b=0,w=0,A=null,T=-1,v=null;const S=new me,P=new me;let D=null;const B=new Ut(0);let L=0,O=e.width,F=e.height,k=1,H=null,q=null;const Z=new me(0,0,O,F),tt=new me(0,0,O,F);let ut=!1;const Y=new oa;let Q=!1,mt=!1,bt=null;const Tt=new re,X=new nt,ot=new I,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ct(){return A===null?k:1}let U=n;function it(C,V){for(let j=0;j<C.length;j++){const J=C[j],W=e.getContext(J,V);if(W!==null)return W}return null}try{const C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ta}`),e.addEventListener("webglcontextlost",Mt,!1),e.addEventListener("webglcontextrestored",z,!1),e.addEventListener("webglcontextcreationerror",vt,!1),U===null){const V=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&V.shift(),U=it(V,C),U===null)throw it(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let K,ct,$,Et,gt,R,E,G,et,st,lt,Lt,St,Rt,zt,Vt,dt,qt,N,ht,yt,ft,It,jt;function Jt(){K=new lm(U),ct=new im(U,K,t),K.init(ct),ft=new j0(U,K,ct),$=new Y0(U,K,ct),Et=new dm(U),gt=new D0,R=new q0(U,K,$,gt,ct,ft,Et),E=new rm(g),G=new cm(g),et=new vd(U,ct),It=new em(U,K,et,ct),st=new um(U,et,Et,It),lt=new gm(U,st,et,Et),N=new mm(U,ct,R),Vt=new sm(gt),Lt=new L0(g,E,G,K,ct,It,Vt),St=new $0(g,gt),Rt=new U0,zt=new k0(K,ct),qt=new tm(g,E,G,$,lt,d,c),dt=new X0(g,lt,ct),jt=new Q0(U,Et,ct,$),ht=new nm(U,K,Et,ct),yt=new hm(U,K,Et,ct),Et.programs=Lt.programs,g.capabilities=ct,g.extensions=K,g.properties=gt,g.renderLists=Rt,g.shadowMap=dt,g.state=$,g.info=Et}Jt();const Xt=new J0(g,U);this.xr=Xt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const C=K.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=K.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(C){C!==void 0&&(k=C,this.setSize(O,F,!1))},this.getSize=function(C){return C.set(O,F)},this.setSize=function(C,V,j=!0){if(Xt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,F=V,e.width=Math.floor(C*k),e.height=Math.floor(V*k),j===!0&&(e.style.width=C+"px",e.style.height=V+"px"),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(O*k,F*k).floor()},this.setDrawingBufferSize=function(C,V,j){O=C,F=V,k=j,e.width=Math.floor(C*j),e.height=Math.floor(V*j),this.setViewport(0,0,C,V)},this.getCurrentViewport=function(C){return C.copy(S)},this.getViewport=function(C){return C.copy(Z)},this.setViewport=function(C,V,j,J){C.isVector4?Z.set(C.x,C.y,C.z,C.w):Z.set(C,V,j,J),$.viewport(S.copy(Z).multiplyScalar(k).floor())},this.getScissor=function(C){return C.copy(tt)},this.setScissor=function(C,V,j,J){C.isVector4?tt.set(C.x,C.y,C.z,C.w):tt.set(C,V,j,J),$.scissor(P.copy(tt).multiplyScalar(k).floor())},this.getScissorTest=function(){return ut},this.setScissorTest=function(C){$.setScissorTest(ut=C)},this.setOpaqueSort=function(C){H=C},this.setTransparentSort=function(C){q=C},this.getClearColor=function(C){return C.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(C=!0,V=!0,j=!0){let J=0;if(C){let W=!1;if(A!==null){const At=A.texture.format;W=At===Gl||At===kl||At===Bl}if(W){const At=A.texture.type,Nt=At===Yn||At===Vn||At===na||At===pi||At===Fl||At===zl,Bt=qt.getClearColor(),Gt=qt.getClearAlpha(),kt=Bt.r,Wt=Bt.g,Yt=Bt.b;Nt?(p[0]=kt,p[1]=Wt,p[2]=Yt,p[3]=Gt,U.clearBufferuiv(U.COLOR,0,p)):(_[0]=kt,_[1]=Wt,_[2]=Yt,_[3]=Gt,U.clearBufferiv(U.COLOR,0,_))}else J|=U.COLOR_BUFFER_BIT}V&&(J|=U.DEPTH_BUFFER_BIT),j&&(J|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Mt,!1),e.removeEventListener("webglcontextrestored",z,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),Rt.dispose(),zt.dispose(),gt.dispose(),E.dispose(),G.dispose(),lt.dispose(),It.dispose(),jt.dispose(),Lt.dispose(),Xt.dispose(),Xt.removeEventListener("sessionstart",ce),Xt.removeEventListener("sessionend",le),bt&&(bt.dispose(),bt=null),Ne.stop()};function Mt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=Et.autoReset,V=dt.enabled,j=dt.autoUpdate,J=dt.needsUpdate,W=dt.type;Jt(),Et.autoReset=C,dt.enabled=V,dt.autoUpdate=j,dt.needsUpdate=J,dt.type=W}function vt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function pt(C){const V=C.target;V.removeEventListener("dispose",pt),Ft(V)}function Ft(C){Ot(C),gt.remove(C)}function Ot(C){const V=gt.get(C).programs;V!==void 0&&(V.forEach(function(j){Lt.releaseProgram(j)}),C.isShaderMaterial&&Lt.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,j,J,W,At){V===null&&(V=_t);const Nt=W.isMesh&&W.matrixWorld.determinant()<0,Bt=bi(C,V,j,J,W);$.setMaterial(J,Nt);let Gt=j.index,kt=1;if(J.wireframe===!0){if(Gt=st.getWireframeAttribute(j),Gt===void 0)return;kt=2}const Wt=j.drawRange,Yt=j.attributes.position;let pe=Wt.start*kt,ue=(Wt.start+Wt.count)*kt;At!==null&&(pe=Math.max(pe,At.start*kt),ue=Math.min(ue,(At.start+At.count)*kt)),Gt!==null?(pe=Math.max(pe,0),ue=Math.min(ue,Gt.count)):Yt!=null&&(pe=Math.max(pe,0),ue=Math.min(ue,Yt.count));const Le=ue-pe;if(Le<0||Le===1/0)return;It.setup(W,J,Bt,j,Gt);let yn,_e=ht;if(Gt!==null&&(yn=et.get(Gt),_e=yt,_e.setIndex(yn)),W.isMesh)J.wireframe===!0?($.setLineWidth(J.wireframeLinewidth*Ct()),_e.setMode(U.LINES)):_e.setMode(U.TRIANGLES);else if(W.isLine){let Qt=J.linewidth;Qt===void 0&&(Qt=1),$.setLineWidth(Qt*Ct()),W.isLineSegments?_e.setMode(U.LINES):W.isLineLoop?_e.setMode(U.LINE_LOOP):_e.setMode(U.LINE_STRIP)}else W.isPoints?_e.setMode(U.POINTS):W.isSprite&&_e.setMode(U.TRIANGLES);if(W.isBatchedMesh)_e.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)_e.renderInstances(pe,Le,W.count);else if(j.isInstancedBufferGeometry){const Qt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Gr=Math.min(j.instanceCount,Qt);_e.renderInstances(pe,Le,Gr)}else _e.render(pe,Le)};function ne(C,V,j){C.transparent===!0&&C.side===we&&C.forceSinglePass===!1?(C.side=qe,C.needsUpdate=!0,Ge(C,V,j),C.side=jn,C.needsUpdate=!0,Ge(C,V,j),C.side=we):Ge(C,V,j)}this.compile=function(C,V,j=null){j===null&&(j=C),m=zt.get(j),m.init(),M.push(m),j.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),C!==j&&C.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights(g._useLegacyLights);const J=new Set;return C.traverse(function(W){const At=W.material;if(At)if(Array.isArray(At))for(let Nt=0;Nt<At.length;Nt++){const Bt=At[Nt];ne(Bt,j,W),J.add(Bt)}else ne(At,j,W),J.add(At)}),M.pop(),m=null,J},this.compileAsync=function(C,V,j=null){const J=this.compile(C,V,j);return new Promise(W=>{function At(){if(J.forEach(function(Nt){gt.get(Nt).currentProgram.isReady()&&J.delete(Nt)}),J.size===0){W(C);return}setTimeout(At,10)}K.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let se=null;function Ee(C){se&&se(C)}function ce(){Ne.stop()}function le(){Ne.start()}const Ne=new iu;Ne.setAnimationLoop(Ee),typeof self<"u"&&Ne.setContext(self),this.setAnimationLoop=function(C){se=C,Xt.setAnimationLoop(C),C===null?Ne.stop():Ne.start()},Xt.addEventListener("sessionstart",ce),Xt.addEventListener("sessionend",le),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Xt.enabled===!0&&Xt.isPresenting===!0&&(Xt.cameraAutoUpdate===!0&&Xt.updateCamera(V),V=Xt.getCamera()),C.isScene===!0&&C.onBeforeRender(g,C,V,A),m=zt.get(C,M.length),m.init(),M.push(m),Tt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Y.setFromProjectionMatrix(Tt),mt=this.localClippingEnabled,Q=Vt.init(this.clippingPlanes,mt),x=Rt.get(C,f.length),x.init(),f.push(x),at(C,V,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(H,q),this.info.render.frame++,Q===!0&&Vt.beginShadows();const j=m.state.shadowsArray;if(dt.render(j,C,V),Q===!0&&Vt.endShadows(),this.info.autoReset===!0&&this.info.reset(),qt.render(x,C),m.setupLights(g._useLegacyLights),V.isArrayCamera){const J=V.cameras;for(let W=0,At=J.length;W<At;W++){const Nt=J[W];Dt(x,C,Nt,Nt.viewport)}}else Dt(x,C,V);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(g,C,V),It.resetDefaultState(),T=-1,v=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function at(C,V,j,J){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)j=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Y.intersectsSprite(C)){J&&ot.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Tt);const Nt=lt.update(C),Bt=C.material;Bt.visible&&x.push(C,Nt,Bt,j,ot.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Y.intersectsObject(C))){const Nt=lt.update(C),Bt=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ot.copy(C.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),ot.copy(Nt.boundingSphere.center)),ot.applyMatrix4(C.matrixWorld).applyMatrix4(Tt)),Array.isArray(Bt)){const Gt=Nt.groups;for(let kt=0,Wt=Gt.length;kt<Wt;kt++){const Yt=Gt[kt],pe=Bt[Yt.materialIndex];pe&&pe.visible&&x.push(C,Nt,pe,j,ot.z,Yt)}}else Bt.visible&&x.push(C,Nt,Bt,j,ot.z,null)}}const At=C.children;for(let Nt=0,Bt=At.length;Nt<Bt;Nt++)at(At[Nt],V,j,J)}function Dt(C,V,j,J){const W=C.opaque,At=C.transmissive,Nt=C.transparent;m.setupLightsView(j),Q===!0&&Vt.setGlobalState(g.clippingPlanes,j),At.length>0&&$t(W,At,V,j),J&&$.viewport(S.copy(J)),W.length>0&&ie(W,V,j),At.length>0&&ie(At,V,j),Nt.length>0&&ie(Nt,V,j),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function $t(C,V,j,J){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const At=ct.isWebGL2;bt===null&&(bt=new dn(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")?In:Yn,minFilter:Rs,samples:At?4:0})),g.getDrawingBufferSize(X),At?bt.setSize(X.x,X.y):bt.setSize(Tr(X.x),Tr(X.y));const Nt=g.getRenderTarget();g.setRenderTarget(bt),g.getClearColor(B),L=g.getClearAlpha(),L<1&&g.setClearColor(16777215,.5),g.clear();const Bt=g.toneMapping;g.toneMapping=Xn,ie(C,j,J),R.updateMultisampleRenderTarget(bt),R.updateRenderTargetMipmap(bt);let Gt=!1;for(let kt=0,Wt=V.length;kt<Wt;kt++){const Yt=V[kt],pe=Yt.object,ue=Yt.geometry,Le=Yt.material,yn=Yt.group;if(Le.side===we&&pe.layers.test(J.layers)){const _e=Le.side;Le.side=qe,Le.needsUpdate=!0,Oe(pe,j,J,ue,Le,yn),Le.side=_e,Le.needsUpdate=!0,Gt=!0}}Gt===!0&&(R.updateMultisampleRenderTarget(bt),R.updateRenderTargetMipmap(bt)),g.setRenderTarget(Nt),g.setClearColor(B,L),g.toneMapping=Bt}function ie(C,V,j){const J=V.isScene===!0?V.overrideMaterial:null;for(let W=0,At=C.length;W<At;W++){const Nt=C[W],Bt=Nt.object,Gt=Nt.geometry,kt=J===null?Nt.material:J,Wt=Nt.group;Bt.layers.test(j.layers)&&Oe(Bt,V,j,Gt,kt,Wt)}}function Oe(C,V,j,J,W,At){C.onBeforeRender(g,V,j,J,W,At),C.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),W.onBeforeRender(g,V,j,J,C,At),W.transparent===!0&&W.side===we&&W.forceSinglePass===!1?(W.side=qe,W.needsUpdate=!0,g.renderBufferDirect(j,V,J,W,C,At),W.side=jn,W.needsUpdate=!0,g.renderBufferDirect(j,V,J,W,C,At),W.side=we):g.renderBufferDirect(j,V,J,W,C,At),C.onAfterRender(g,V,j,J,W,At)}function Ge(C,V,j){V.isScene!==!0&&(V=_t);const J=gt.get(C),W=m.state.lights,At=m.state.shadowsArray,Nt=W.state.version,Bt=Lt.getParameters(C,W.state,At,V,j),Gt=Lt.getProgramCacheKey(Bt);let kt=J.programs;J.environment=C.isMeshStandardMaterial?V.environment:null,J.fog=V.fog,J.envMap=(C.isMeshStandardMaterial?G:E).get(C.envMap||J.environment),kt===void 0&&(C.addEventListener("dispose",pt),kt=new Map,J.programs=kt);let Wt=kt.get(Gt);if(Wt!==void 0){if(J.currentProgram===Wt&&J.lightsStateVersion===Nt)return vn(C,Bt),Wt}else Bt.uniforms=Lt.getUniforms(C),C.onBuild(j,Bt,g),C.onBeforeCompile(Bt,g),Wt=Lt.acquireProgram(Bt,Gt),kt.set(Gt,Wt),J.uniforms=Bt.uniforms;const Yt=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Yt.clippingPlanes=Vt.uniform),vn(C,Bt),J.needsLights=Ti(C),J.lightsStateVersion=Nt,J.needsLights&&(Yt.ambientLightColor.value=W.state.ambient,Yt.lightProbe.value=W.state.probe,Yt.directionalLights.value=W.state.directional,Yt.directionalLightShadows.value=W.state.directionalShadow,Yt.spotLights.value=W.state.spot,Yt.spotLightShadows.value=W.state.spotShadow,Yt.rectAreaLights.value=W.state.rectArea,Yt.ltc_1.value=W.state.rectAreaLTC1,Yt.ltc_2.value=W.state.rectAreaLTC2,Yt.pointLights.value=W.state.point,Yt.pointLightShadows.value=W.state.pointShadow,Yt.hemisphereLights.value=W.state.hemi,Yt.directionalShadowMap.value=W.state.directionalShadowMap,Yt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Yt.spotShadowMap.value=W.state.spotShadowMap,Yt.spotLightMatrix.value=W.state.spotLightMatrix,Yt.spotLightMap.value=W.state.spotLightMap,Yt.pointShadowMap.value=W.state.pointShadowMap,Yt.pointShadowMatrix.value=W.state.pointShadowMatrix),J.currentProgram=Wt,J.uniformsList=null,Wt}function On(C){if(C.uniformsList===null){const V=C.currentProgram.getUniforms();C.uniformsList=_r.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function vn(C,V){const j=gt.get(C);j.outputColorSpace=V.outputColorSpace,j.batching=V.batching,j.instancing=V.instancing,j.instancingColor=V.instancingColor,j.skinning=V.skinning,j.morphTargets=V.morphTargets,j.morphNormals=V.morphNormals,j.morphColors=V.morphColors,j.morphTargetsCount=V.morphTargetsCount,j.numClippingPlanes=V.numClippingPlanes,j.numIntersection=V.numClipIntersection,j.vertexAlphas=V.vertexAlphas,j.vertexTangents=V.vertexTangents,j.toneMapping=V.toneMapping}function bi(C,V,j,J,W){V.isScene!==!0&&(V=_t),R.resetTextureUnits();const At=V.fog,Nt=J.isMeshStandardMaterial?V.environment:null,Bt=A===null?g.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Un,Gt=(J.isMeshStandardMaterial?G:E).get(J.envMap||Nt),kt=J.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Wt=!!j.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Yt=!!j.morphAttributes.position,pe=!!j.morphAttributes.normal,ue=!!j.morphAttributes.color;let Le=Xn;J.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Le=g.toneMapping);const yn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,_e=yn!==void 0?yn.length:0,Qt=gt.get(J),Gr=m.state.lights;if(Q===!0&&(mt===!0||C!==v)){const $e=C===v&&J.id===T;Vt.setState(J,C,$e)}let Me=!1;J.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==Gr.state.version||Qt.outputColorSpace!==Bt||W.isBatchedMesh&&Qt.batching===!1||!W.isBatchedMesh&&Qt.batching===!0||W.isInstancedMesh&&Qt.instancing===!1||!W.isInstancedMesh&&Qt.instancing===!0||W.isSkinnedMesh&&Qt.skinning===!1||!W.isSkinnedMesh&&Qt.skinning===!0||W.isInstancedMesh&&Qt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Qt.instancingColor===!1&&W.instanceColor!==null||Qt.envMap!==Gt||J.fog===!0&&Qt.fog!==At||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==Vt.numPlanes||Qt.numIntersection!==Vt.numIntersection)||Qt.vertexAlphas!==kt||Qt.vertexTangents!==Wt||Qt.morphTargets!==Yt||Qt.morphNormals!==pe||Qt.morphColors!==ue||Qt.toneMapping!==Le||ct.isWebGL2===!0&&Qt.morphTargetsCount!==_e)&&(Me=!0):(Me=!0,Qt.__version=J.version);let ti=Qt.currentProgram;Me===!0&&(ti=Ge(J,V,W));let ba=!1,ds=!1,Hr=!1;const Fe=ti.getUniforms(),ei=Qt.uniforms;if($.useProgram(ti.program)&&(ba=!0,ds=!0,Hr=!0),J.id!==T&&(T=J.id,ds=!0),ba||v!==C){Fe.setValue(U,"projectionMatrix",C.projectionMatrix),Fe.setValue(U,"viewMatrix",C.matrixWorldInverse);const $e=Fe.map.cameraPosition;$e!==void 0&&$e.setValue(U,ot.setFromMatrixPosition(C.matrixWorld)),ct.logarithmicDepthBuffer&&Fe.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Fe.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),v!==C&&(v=C,ds=!0,Hr=!0)}if(W.isSkinnedMesh){Fe.setOptional(U,W,"bindMatrix"),Fe.setOptional(U,W,"bindMatrixInverse");const $e=W.skeleton;$e&&(ct.floatVertexTextures?($e.boneTexture===null&&$e.computeBoneTexture(),Fe.setValue(U,"boneTexture",$e.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(Fe.setOptional(U,W,"batchingTexture"),Fe.setValue(U,"batchingTexture",W._matricesTexture,R));const Vr=j.morphAttributes;if((Vr.position!==void 0||Vr.normal!==void 0||Vr.color!==void 0&&ct.isWebGL2===!0)&&N.update(W,j,ti),(ds||Qt.receiveShadow!==W.receiveShadow)&&(Qt.receiveShadow=W.receiveShadow,Fe.setValue(U,"receiveShadow",W.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(ei.envMap.value=Gt,ei.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),ds&&(Fe.setValue(U,"toneMappingExposure",g.toneMappingExposure),Qt.needsLights&&kr(ei,Hr),At&&J.fog===!0&&St.refreshFogUniforms(ei,At),St.refreshMaterialUniforms(ei,J,k,F,bt),_r.upload(U,On(Qt),ei,R)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(_r.upload(U,On(Qt),ei,R),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Fe.setValue(U,"center",W.center),Fe.setValue(U,"modelViewMatrix",W.modelViewMatrix),Fe.setValue(U,"normalMatrix",W.normalMatrix),Fe.setValue(U,"modelMatrix",W.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const $e=J.uniformsGroups;for(let Wr=0,Gu=$e.length;Wr<Gu;Wr++)if(ct.isWebGL2){const Ta=$e[Wr];jt.update(Ta,ti),jt.bind(Ta,ti)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ti}function kr(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function Ti(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,V,j){gt.get(C.texture).__webglTexture=V,gt.get(C.depthTexture).__webglTexture=j;const J=gt.get(C);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=j===void 0,J.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,V){const j=gt.get(C);j.__webglFramebuffer=V,j.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,j=0){A=C,b=V,w=j;let J=!0,W=null,At=!1,Nt=!1;if(C){const Gt=gt.get(C);Gt.__useDefaultFramebuffer!==void 0?($.bindFramebuffer(U.FRAMEBUFFER,null),J=!1):Gt.__webglFramebuffer===void 0?R.setupRenderTarget(C):Gt.__hasExternalTextures&&R.rebindTextures(C,gt.get(C.texture).__webglTexture,gt.get(C.depthTexture).__webglTexture);const kt=C.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Nt=!0);const Wt=gt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Wt[V])?W=Wt[V][j]:W=Wt[V],At=!0):ct.isWebGL2&&C.samples>0&&R.useMultisampledRTT(C)===!1?W=gt.get(C).__webglMultisampledFramebuffer:Array.isArray(Wt)?W=Wt[j]:W=Wt,S.copy(C.viewport),P.copy(C.scissor),D=C.scissorTest}else S.copy(Z).multiplyScalar(k).floor(),P.copy(tt).multiplyScalar(k).floor(),D=ut;if($.bindFramebuffer(U.FRAMEBUFFER,W)&&ct.drawBuffers&&J&&$.drawBuffers(C,W),$.viewport(S),$.scissor(P),$.setScissorTest(D),At){const Gt=gt.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+V,Gt.__webglTexture,j)}else if(Nt){const Gt=gt.get(C.texture),kt=V||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Gt.__webglTexture,j||0,kt)}T=-1},this.readRenderTargetPixels=function(C,V,j,J,W,At,Nt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=gt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Nt!==void 0&&(Bt=Bt[Nt]),Bt){$.bindFramebuffer(U.FRAMEBUFFER,Bt);try{const Gt=C.texture,kt=Gt.format,Wt=Gt.type;if(kt!==hn&&ft.convert(kt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Yt=Wt===In&&(K.has("EXT_color_buffer_half_float")||ct.isWebGL2&&K.has("EXT_color_buffer_float"));if(Wt!==Yn&&ft.convert(Wt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Wt===Wn&&(ct.isWebGL2||K.has("OES_texture_float")||K.has("WEBGL_color_buffer_float")))&&!Yt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-J&&j>=0&&j<=C.height-W&&U.readPixels(V,j,J,W,ft.convert(kt),ft.convert(Wt),At)}finally{const Gt=A!==null?gt.get(A).__webglFramebuffer:null;$.bindFramebuffer(U.FRAMEBUFFER,Gt)}}},this.copyFramebufferToTexture=function(C,V,j=0){const J=Math.pow(2,-j),W=Math.floor(V.image.width*J),At=Math.floor(V.image.height*J);R.setTexture2D(V,0),U.copyTexSubImage2D(U.TEXTURE_2D,j,0,0,C.x,C.y,W,At),$.unbindTexture()},this.copyTextureToTexture=function(C,V,j,J=0){const W=V.image.width,At=V.image.height,Nt=ft.convert(j.format),Bt=ft.convert(j.type);R.setTexture2D(j,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,j.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,j.unpackAlignment),V.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,J,C.x,C.y,W,At,Nt,Bt,V.image.data):V.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,J,C.x,C.y,V.mipmaps[0].width,V.mipmaps[0].height,Nt,V.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,J,C.x,C.y,Nt,Bt,V.image),J===0&&j.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),$.unbindTexture()},this.copyTextureToTexture3D=function(C,V,j,J,W=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const At=C.max.x-C.min.x+1,Nt=C.max.y-C.min.y+1,Bt=C.max.z-C.min.z+1,Gt=ft.convert(J.format),kt=ft.convert(J.type);let Wt;if(J.isData3DTexture)R.setTexture3D(J,0),Wt=U.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)R.setTexture2DArray(J,0),Wt=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,J.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,J.unpackAlignment);const Yt=U.getParameter(U.UNPACK_ROW_LENGTH),pe=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ue=U.getParameter(U.UNPACK_SKIP_PIXELS),Le=U.getParameter(U.UNPACK_SKIP_ROWS),yn=U.getParameter(U.UNPACK_SKIP_IMAGES),_e=j.isCompressedTexture?j.mipmaps[W]:j.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,_e.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_e.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,C.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,C.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,C.min.z),j.isDataTexture||j.isData3DTexture?U.texSubImage3D(Wt,W,V.x,V.y,V.z,At,Nt,Bt,Gt,kt,_e.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Wt,W,V.x,V.y,V.z,At,Nt,Bt,Gt,_e.data)):U.texSubImage3D(Wt,W,V.x,V.y,V.z,At,Nt,Bt,Gt,kt,_e),U.pixelStorei(U.UNPACK_ROW_LENGTH,Yt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,pe),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ue),U.pixelStorei(U.UNPACK_SKIP_ROWS,Le),U.pixelStorei(U.UNPACK_SKIP_IMAGES,yn),W===0&&J.generateMipmaps&&U.generateMipmap(Wt),$.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?R.setTextureCube(C,0):C.isData3DTexture?R.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?R.setTexture2DArray(C,0):R.setTexture2D(C,0),$.unbindTexture()},this.resetState=function(){b=0,w=0,A=null,$.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ia?"display-p3":"srgb",e.unpackColorSpace=he.workingColorSpace===Pr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Se?gi:Vl}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===gi?Se:Un}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class tg extends uu{}tg.prototype.isWebGL1Renderer=!0;class la{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=e,this.far=n}clone(){return new la(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class eg extends ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Xc extends Re{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Xi=new re,Yc=new re,or=[],qc=new Zn,ng=new re,_s=new rt,xs=new cs;class Ue extends rt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Xc(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ng)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Zn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xi),qc.copy(t.boundingBox).applyMatrix4(Xi),this.boundingBox.union(qc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new cs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xi),xs.copy(t.boundingSphere).applyMatrix4(Xi),this.boundingSphere.union(xs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,s=this.count;if(_s.geometry=this.geometry,_s.material=this.material,_s.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xs.copy(this.boundingSphere),xs.applyMatrix4(n),t.ray.intersectsSphere(xs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Xi),Yc.multiplyMatrices(n,Xi),_s.matrixWorld=Yc,_s.raycast(t,or);for(let a=0,o=or.length;a<o;a++){const c=or[a];c.instanceId=r,c.object=this,e.push(c)}or.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Xc(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Dr extends ls{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const jc=new re,Yo=new ra,ar=new cs,cr=new I;class ua extends ae{constructor(t=new ge,e=new Dr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(s),ar.radius+=r,t.ray.intersectsSphere(ar)===!1)return;jc.copy(s).invert(),Yo.copy(t.ray).applyMatrix4(jc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let _=d,x=p;_<x;_++){const m=l.getX(_);cr.fromBufferAttribute(h,m),Kc(cr,m,c,s,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=d,x=p;_<x;_++)cr.fromBufferAttribute(h,_),Kc(cr,_,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Kc(i,t,e,n,s,r,a){const o=Yo.distanceSqToPoint(i);if(o<e){const c=new I;Yo.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:a})}}class Si extends Ke{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const u=n[s],d=n[s+1]-u,p=(a-u)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new nt:new I);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,s=[],r=[],a=[],o=new I,c=new re;for(let p=0;p<=t;p++){const _=p/t;s[p]=this.getTangentAt(_,new I)}r[0]=new I,a[0]=new I;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Ae(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,_))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Ae(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let _=1;_<=t;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],p*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ha extends gn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e){const n=e||new nt,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*u-p*h+this.aX,l=d*h+p*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ig extends ha{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function da(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,h){let d=(a-r)/l-(o-r)/(l+u)+(o-a)/u,p=(o-a)/u-(c-a)/(u+h)+(c-o)/h;d*=u,p*=u,s(a,o,d,p)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const lr=new I,Mo=new da,So=new da,wo=new da;class sg extends gn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(lr.subVectors(s[0],s[1]).add(s[0]),l=lr);const h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(lr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=lr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(h),p),x=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);x<1e-4&&(x=1),_<1e-4&&(_=x),m<1e-4&&(m=x),Mo.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,_,x,m),So.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,_,x,m),wo.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,_,x,m)}else this.curveType==="catmullrom"&&(Mo.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),So.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),wo.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(Mo.calc(c),So.calc(c),wo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Zc(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function rg(i,t){const e=1-i;return e*e*t}function og(i,t){return 2*(1-i)*i*t}function ag(i,t){return i*i*t}function bs(i,t,e,n){return rg(i,t)+og(i,e)+ag(i,n)}function cg(i,t){const e=1-i;return e*e*e*t}function lg(i,t){const e=1-i;return 3*e*e*i*t}function ug(i,t){return 3*(1-i)*i*i*t}function hg(i,t){return i*i*i*t}function Ts(i,t,e,n,s){return cg(i,t)+lg(i,e)+ug(i,n)+hg(i,s)}class hu extends gn{constructor(t=new nt,e=new nt,n=new nt,s=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new nt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ts(t,s.x,r.x,a.x,o.x),Ts(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class dg extends gn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ts(t,s.x,r.x,a.x,o.x),Ts(t,s.y,r.y,a.y,o.y),Ts(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class du extends gn{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fg extends gn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fu extends gn{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(bs(t,s.x,r.x,a.x),bs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fa extends gn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(bs(t,s.x,r.x,a.x),bs(t,s.y,r.y,a.y),bs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pu extends gn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(Zc(o,c.x,l.x,u.x,h.x),Zc(o,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new nt().fromArray(s))}return this}}var Rr=Object.freeze({__proto__:null,ArcCurve:ig,CatmullRomCurve3:sg,CubicBezierCurve:hu,CubicBezierCurve3:dg,EllipseCurve:ha,LineCurve:du,LineCurve3:fg,QuadraticBezierCurve:fu,QuadraticBezierCurve3:fa,SplineCurve:pu});class pg extends gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Rr[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Rr[s.type]().fromJSON(s))}return this}}class Jc extends pg{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new du(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new fu(this.currentPoint.clone(),new nt(t,e),new nt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new hu(this.currentPoint.clone(),new nt(t,e),new nt(n,s),new nt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new pu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){const l=new ha(t,e,n,s,r,a,o,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Os extends ge{constructor(t=[new nt(0,-.5),new nt(.5,0),new nt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ae(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],u=1/e,h=new I,d=new nt,p=new I,_=new I,x=new I;let m=0,f=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,f=t[M+1].y-t[M].y,p.x=f*1,p.y=-m,p.z=f*0,x.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:m=t[M+1].x-t[M].x,f=t[M+1].y-t[M].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),c.push(p.x,p.y,p.z),x.copy(_)}for(let M=0;M<=e;M++){const g=n+M*u*s,y=Math.sin(g),b=Math.cos(g);for(let w=0;w<=t.length-1;w++){h.x=t[w].x*y,h.y=t[w].y,h.z=t[w].x*b,a.push(h.x,h.y,h.z),d.x=M/e,d.y=w/(t.length-1),o.push(d.x,d.y);const A=c[3*w+0]*y,T=c[3*w+1],v=c[3*w+0]*b;l.push(A,T,v)}}for(let M=0;M<e;M++)for(let g=0;g<t.length-1;g++){const y=g+M*t.length,b=y,w=y+t.length,A=y+t.length+1,T=y+1;r.push(b,w,T),r.push(A,T,w)}this.setIndex(r),this.setAttribute("position",new ee(a,3)),this.setAttribute("uv",new ee(o,2)),this.setAttribute("normal",new ee(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Os(t.points,t.segments,t.phiStart,t.phiLength)}}class $n extends ge{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new I,u=new nt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const p=n+h/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ee(a,3)),this.setAttribute("normal",new ee(o,3)),this.setAttribute("uv",new ee(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $n(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class de extends ge{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],p=[];let _=0;const x=[],m=n/2;let f=0;M(),a===!1&&(t>0&&g(!0),e>0&&g(!1)),this.setIndex(u),this.setAttribute("position",new ee(h,3)),this.setAttribute("normal",new ee(d,3)),this.setAttribute("uv",new ee(p,2));function M(){const y=new I,b=new I;let w=0;const A=(e-t)/n;for(let T=0;T<=r;T++){const v=[],S=T/r,P=S*(e-t)+t;for(let D=0;D<=s;D++){const B=D/s,L=B*c+o,O=Math.sin(L),F=Math.cos(L);b.x=P*O,b.y=-S*n+m,b.z=P*F,h.push(b.x,b.y,b.z),y.set(O,A,F).normalize(),d.push(y.x,y.y,y.z),p.push(B,1-S),v.push(_++)}x.push(v)}for(let T=0;T<s;T++)for(let v=0;v<r;v++){const S=x[v][T],P=x[v+1][T],D=x[v+1][T+1],B=x[v][T+1];u.push(S,P,B),u.push(P,D,B),w+=6}l.addGroup(f,w,0),f+=w}function g(y){const b=_,w=new nt,A=new I;let T=0;const v=y===!0?t:e,S=y===!0?1:-1;for(let D=1;D<=s;D++)h.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),_++;const P=_;for(let D=0;D<=s;D++){const L=D/s*c+o,O=Math.cos(L),F=Math.sin(L);A.x=v*F,A.y=m*S,A.z=v*O,h.push(A.x,A.y,A.z),d.push(0,S,0),w.x=O*.5+.5,w.y=F*.5*S+.5,p.push(w.x,w.y),_++}for(let D=0;D<s;D++){const B=b+D,L=P+D;y===!0?u.push(L,L+1,B):u.push(L+1,L,B),T+=3}l.addGroup(f,T,y===!0?1:2),f+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new de(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class pa extends ge{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),l(n),u(),this.setAttribute("position",new ee(r,3)),this.setAttribute("normal",new ee(r.slice(),3)),this.setAttribute("uv",new ee(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const g=new I,y=new I,b=new I;for(let w=0;w<e.length;w+=3)p(e[w+0],g),p(e[w+1],y),p(e[w+2],b),c(g,y,b,M)}function c(M,g,y,b){const w=b+1,A=[];for(let T=0;T<=w;T++){A[T]=[];const v=M.clone().lerp(y,T/w),S=g.clone().lerp(y,T/w),P=w-T;for(let D=0;D<=P;D++)D===0&&T===w?A[T][D]=v:A[T][D]=v.clone().lerp(S,D/P)}for(let T=0;T<w;T++)for(let v=0;v<2*(w-T)-1;v++){const S=Math.floor(v/2);v%2===0?(d(A[T][S+1]),d(A[T+1][S]),d(A[T][S])):(d(A[T][S+1]),d(A[T+1][S+1]),d(A[T+1][S]))}}function l(M){const g=new I;for(let y=0;y<r.length;y+=3)g.x=r[y+0],g.y=r[y+1],g.z=r[y+2],g.normalize().multiplyScalar(M),r[y+0]=g.x,r[y+1]=g.y,r[y+2]=g.z}function u(){const M=new I;for(let g=0;g<r.length;g+=3){M.x=r[g+0],M.y=r[g+1],M.z=r[g+2];const y=m(M)/2/Math.PI+.5,b=f(M)/Math.PI+.5;a.push(y,1-b)}_(),h()}function h(){for(let M=0;M<a.length;M+=6){const g=a[M+0],y=a[M+2],b=a[M+4],w=Math.max(g,y,b),A=Math.min(g,y,b);w>.9&&A<.1&&(g<.2&&(a[M+0]+=1),y<.2&&(a[M+2]+=1),b<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function p(M,g){const y=M*3;g.x=t[y+0],g.y=t[y+1],g.z=t[y+2]}function _(){const M=new I,g=new I,y=new I,b=new I,w=new nt,A=new nt,T=new nt;for(let v=0,S=0;v<r.length;v+=9,S+=6){M.set(r[v+0],r[v+1],r[v+2]),g.set(r[v+3],r[v+4],r[v+5]),y.set(r[v+6],r[v+7],r[v+8]),w.set(a[S+0],a[S+1]),A.set(a[S+2],a[S+3]),T.set(a[S+4],a[S+5]),b.copy(M).add(g).add(y).divideScalar(3);const P=m(b);x(w,S+0,M,P),x(A,S+2,g,P),x(T,S+4,y,P)}}function x(M,g,y,b){b<0&&M.x===1&&(a[g]=M.x-1),y.x===0&&y.z===0&&(a[g]=b/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pa(t.vertices,t.indices,t.radius,t.details)}}class Fs extends Jc{constructor(t){super(t),this.uuid=Mi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Jc().fromJSON(s))}return this}}const mg={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=mu(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,u,h,d,p;if(n&&(r=yg(i,t,r,e)),i.length>80*e){o=l=i[0],c=u=i[1];for(let _=e;_<s;_+=e)h=i[_],d=i[_+1],h<o&&(o=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);p=Math.max(l-o,u-c),p=p!==0?32767/p:0}return Ps(r,a,e,o,c,p,0),a}};function mu(i,t,e,n,s){let r,a;if(s===Lg(i,t,e,n)>0)for(r=t;r<e;r+=n)a=$c(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=$c(r,i[r],i[r+1],a);return a&&Ir(a,a.next)&&(Ds(a),a=a.next),a}function _i(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ir(e,e.next)||ve(e.prev,e,e.next)===0)){if(Ds(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ps(i,t,e,n,s,r,a){if(!i)return;!a&&r&&bg(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?_g(i,n,s,r):gg(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Ds(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=xg(_i(i),t,e),Ps(i,t,e,n,s,r,2)):a===2&&vg(i,t,e,n,s,r):Ps(_i(i),t,e,n,s,r,1);break}}}function gg(i){const t=i.prev,e=i,n=i.next;if(ve(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,u=s<r?s<a?s:a:r<a?r:a,h=o<c?o<l?o:l:c<l?c:l,d=s>r?s>a?s:a:r>a?r:a,p=o>c?o>l?o:l:c>l?c:l;let _=n.next;for(;_!==t;){if(_.x>=u&&_.x<=d&&_.y>=h&&_.y<=p&&Ki(s,o,r,c,a,l,_.x,_.y)&&ve(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function _g(i,t,e,n){const s=i.prev,r=i,a=i.next;if(ve(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,u=s.y,h=r.y,d=a.y,p=o<c?o<l?o:l:c<l?c:l,_=u<h?u<d?u:d:h<d?h:d,x=o>c?o>l?o:l:c>l?c:l,m=u>h?u>d?u:d:h>d?h:d,f=qo(p,_,t,e,n),M=qo(x,m,t,e,n);let g=i.prevZ,y=i.nextZ;for(;g&&g.z>=f&&y&&y.z<=M;){if(g.x>=p&&g.x<=x&&g.y>=_&&g.y<=m&&g!==s&&g!==a&&Ki(o,u,c,h,l,d,g.x,g.y)&&ve(g.prev,g,g.next)>=0||(g=g.prevZ,y.x>=p&&y.x<=x&&y.y>=_&&y.y<=m&&y!==s&&y!==a&&Ki(o,u,c,h,l,d,y.x,y.y)&&ve(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;g&&g.z>=f;){if(g.x>=p&&g.x<=x&&g.y>=_&&g.y<=m&&g!==s&&g!==a&&Ki(o,u,c,h,l,d,g.x,g.y)&&ve(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;y&&y.z<=M;){if(y.x>=p&&y.x<=x&&y.y>=_&&y.y<=m&&y!==s&&y!==a&&Ki(o,u,c,h,l,d,y.x,y.y)&&ve(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function xg(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Ir(s,r)&&gu(s,n,n.next,r)&&Ls(s,r)&&Ls(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ds(n),Ds(n.next),n=i=r),n=n.next}while(n!==i);return _i(n)}function vg(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Rg(a,o)){let c=_u(a,o);a=_i(a,a.next),c=_i(c,c.next),Ps(a,t,e,n,s,r,0),Ps(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function yg(i,t,e,n){const s=[];let r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=mu(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Ag(l));for(s.sort(Mg),r=0;r<s.length;r++)e=Sg(s[r],e);return e}function Mg(i,t){return i.x-t.x}function Sg(i,t){const e=wg(i,t);if(!e)return t;const n=_u(e,i);return _i(n,n.next),_i(e,e.next)}function wg(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,c=s.x,l=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Ki(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(h=Math.abs(a-e.y)/(r-e.x),Ls(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&Eg(s,e)))&&(s=e,u=h)),e=e.next;while(e!==o);return s}function Eg(i,t){return ve(i.prev,i,t.prev)<0&&ve(t.next,i,i.next)<0}function bg(i,t,e,n){let s=i;do s.z===0&&(s.z=qo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Tg(s)}function Tg(i){let t,e,n,s,r,a,o,c,l=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(a>1);return i}function qo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ag(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ki(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Rg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Cg(i,t)&&(Ls(i,t)&&Ls(t,i)&&Pg(i,t)&&(ve(i.prev,i,t.prev)||ve(i,t.prev,t))||Ir(i,t)&&ve(i.prev,i,i.next)>0&&ve(t.prev,t,t.next)>0)}function ve(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ir(i,t){return i.x===t.x&&i.y===t.y}function gu(i,t,e,n){const s=hr(ve(i,t,e)),r=hr(ve(i,t,n)),a=hr(ve(e,n,i)),o=hr(ve(e,n,t));return!!(s!==r&&a!==o||s===0&&ur(i,e,t)||r===0&&ur(i,n,t)||a===0&&ur(e,i,n)||o===0&&ur(e,t,n))}function ur(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function hr(i){return i>0?1:i<0?-1:0}function Cg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&gu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ls(i,t){return ve(i.prev,i,i.next)<0?ve(i,t,i.next)>=0&&ve(i,i.prev,t)>=0:ve(i,t,i.prev)<0||ve(i,i.next,t)<0}function Pg(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function _u(i,t){const e=new jo(i.i,i.x,i.y),n=new jo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function $c(i,t,e,n){const s=new jo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ds(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function jo(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Lg(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class qn{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return qn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Qc(t),tl(n,t);let a=t.length;e.forEach(Qc);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,tl(n,e[c]);const o=mg.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function Qc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function tl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class ma extends ge{constructor(t=new Fs([new nt(.5,.5),new nt(-.5,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new ee(s,3)),this.setAttribute("uv",new ee(r,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:p-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Dg;let g,y=!1,b,w,A,T;f&&(g=f.getSpacedPoints(u),y=!0,d=!1,b=f.computeFrenetFrames(u,!1),w=new I,A=new I,T=new I),d||(m=0,p=0,_=0,x=0);const v=o.extractPoints(l);let S=v.shape;const P=v.holes;if(!qn.isClockWise(S)){S=S.reverse();for(let U=0,it=P.length;U<it;U++){const K=P[U];qn.isClockWise(K)&&(P[U]=K.reverse())}}const B=qn.triangulateShape(S,P),L=S;for(let U=0,it=P.length;U<it;U++){const K=P[U];S=S.concat(K)}function O(U,it,K){return it||console.error("THREE.ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(it,K)}const F=S.length,k=B.length;function H(U,it,K){let ct,$,Et;const gt=U.x-it.x,R=U.y-it.y,E=K.x-U.x,G=K.y-U.y,et=gt*gt+R*R,st=gt*G-R*E;if(Math.abs(st)>Number.EPSILON){const lt=Math.sqrt(et),Lt=Math.sqrt(E*E+G*G),St=it.x-R/lt,Rt=it.y+gt/lt,zt=K.x-G/Lt,Vt=K.y+E/Lt,dt=((zt-St)*G-(Vt-Rt)*E)/(gt*G-R*E);ct=St+gt*dt-U.x,$=Rt+R*dt-U.y;const qt=ct*ct+$*$;if(qt<=2)return new nt(ct,$);Et=Math.sqrt(qt/2)}else{let lt=!1;gt>Number.EPSILON?E>Number.EPSILON&&(lt=!0):gt<-Number.EPSILON?E<-Number.EPSILON&&(lt=!0):Math.sign(R)===Math.sign(G)&&(lt=!0),lt?(ct=-R,$=gt,Et=Math.sqrt(et)):(ct=gt,$=R,Et=Math.sqrt(et/2))}return new nt(ct/Et,$/Et)}const q=[];for(let U=0,it=L.length,K=it-1,ct=U+1;U<it;U++,K++,ct++)K===it&&(K=0),ct===it&&(ct=0),q[U]=H(L[U],L[K],L[ct]);const Z=[];let tt,ut=q.concat();for(let U=0,it=P.length;U<it;U++){const K=P[U];tt=[];for(let ct=0,$=K.length,Et=$-1,gt=ct+1;ct<$;ct++,Et++,gt++)Et===$&&(Et=0),gt===$&&(gt=0),tt[ct]=H(K[ct],K[Et],K[gt]);Z.push(tt),ut=ut.concat(tt)}for(let U=0;U<m;U++){const it=U/m,K=p*Math.cos(it*Math.PI/2),ct=_*Math.sin(it*Math.PI/2)+x;for(let $=0,Et=L.length;$<Et;$++){const gt=O(L[$],q[$],ct);Tt(gt.x,gt.y,-K)}for(let $=0,Et=P.length;$<Et;$++){const gt=P[$];tt=Z[$];for(let R=0,E=gt.length;R<E;R++){const G=O(gt[R],tt[R],ct);Tt(G.x,G.y,-K)}}}const Y=_+x;for(let U=0;U<F;U++){const it=d?O(S[U],ut[U],Y):S[U];y?(A.copy(b.normals[0]).multiplyScalar(it.x),w.copy(b.binormals[0]).multiplyScalar(it.y),T.copy(g[0]).add(A).add(w),Tt(T.x,T.y,T.z)):Tt(it.x,it.y,0)}for(let U=1;U<=u;U++)for(let it=0;it<F;it++){const K=d?O(S[it],ut[it],Y):S[it];y?(A.copy(b.normals[U]).multiplyScalar(K.x),w.copy(b.binormals[U]).multiplyScalar(K.y),T.copy(g[U]).add(A).add(w),Tt(T.x,T.y,T.z)):Tt(K.x,K.y,h/u*U)}for(let U=m-1;U>=0;U--){const it=U/m,K=p*Math.cos(it*Math.PI/2),ct=_*Math.sin(it*Math.PI/2)+x;for(let $=0,Et=L.length;$<Et;$++){const gt=O(L[$],q[$],ct);Tt(gt.x,gt.y,h+K)}for(let $=0,Et=P.length;$<Et;$++){const gt=P[$];tt=Z[$];for(let R=0,E=gt.length;R<E;R++){const G=O(gt[R],tt[R],ct);y?Tt(G.x,G.y+g[u-1].y,g[u-1].x+K):Tt(G.x,G.y,h+K)}}}Q(),mt();function Q(){const U=s.length/3;if(d){let it=0,K=F*it;for(let ct=0;ct<k;ct++){const $=B[ct];X($[2]+K,$[1]+K,$[0]+K)}it=u+m*2,K=F*it;for(let ct=0;ct<k;ct++){const $=B[ct];X($[0]+K,$[1]+K,$[2]+K)}}else{for(let it=0;it<k;it++){const K=B[it];X(K[2],K[1],K[0])}for(let it=0;it<k;it++){const K=B[it];X(K[0]+F*u,K[1]+F*u,K[2]+F*u)}}n.addGroup(U,s.length/3-U,0)}function mt(){const U=s.length/3;let it=0;bt(L,it),it+=L.length;for(let K=0,ct=P.length;K<ct;K++){const $=P[K];bt($,it),it+=$.length}n.addGroup(U,s.length/3-U,1)}function bt(U,it){let K=U.length;for(;--K>=0;){const ct=K;let $=K-1;$<0&&($=U.length-1);for(let Et=0,gt=u+m*2;Et<gt;Et++){const R=F*Et,E=F*(Et+1),G=it+ct+R,et=it+$+R,st=it+$+E,lt=it+ct+E;ot(G,et,st,lt)}}}function Tt(U,it,K){c.push(U),c.push(it),c.push(K)}function X(U,it,K){_t(U),_t(it),_t(K);const ct=s.length/3,$=M.generateTopUV(n,s,ct-3,ct-2,ct-1);Ct($[0]),Ct($[1]),Ct($[2])}function ot(U,it,K,ct){_t(U),_t(it),_t(ct),_t(it),_t(K),_t(ct);const $=s.length/3,Et=M.generateSideWallUV(n,s,$-6,$-3,$-2,$-1);Ct(Et[0]),Ct(Et[1]),Ct(Et[3]),Ct(Et[1]),Ct(Et[2]),Ct(Et[3])}function _t(U){s.push(c[U*3+0]),s.push(c[U*3+1]),s.push(c[U*3+2])}function Ct(U){r.push(U.x),r.push(U.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ig(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Rr[s.type]().fromJSON(s)),new ma(n,t.options)}}const Dg={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new nt(r,a),new nt(o,c),new nt(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],h=t[n*3+2],d=t[s*3],p=t[s*3+1],_=t[s*3+2],x=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new nt(a,1-c),new nt(l,1-h),new nt(d,1-_),new nt(x,1-f)]:[new nt(o,1-c),new nt(u,1-h),new nt(p,1-_),new nt(m,1-f)]}};function Ig(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Kn extends pa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Kn(t.radius,t.detail)}}class ga extends ge{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],u=[];let h=t;const d=(e-t)/s,p=new I,_=new nt;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const f=r+m/n*a;p.x=h*Math.cos(f),p.y=h*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),_.x=(p.x/e+1)/2,_.y=(p.y/e+1)/2,u.push(_.x,_.y)}h+=d}for(let x=0;x<s;x++){const m=x*(n+1);for(let f=0;f<n;f++){const M=f+m,g=M,y=M+n+1,b=M+n+2,w=M+1;o.push(g,y,w),o.push(y,b,w)}}this.setIndex(o),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(l,3)),this.setAttribute("uv",new ee(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ga(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ur extends ge{constructor(t=new Fs([new nt(0,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],a=[];let o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new ee(s,3)),this.setAttribute("normal",new ee(r,3)),this.setAttribute("uv",new ee(a,2));function l(u){const h=s.length/3,d=u.extractPoints(e);let p=d.shape;const _=d.holes;qn.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=_.length;m<f;m++){const M=_[m];qn.isClockWise(M)===!0&&(_[m]=M.reverse())}const x=qn.triangulateShape(p,_);for(let m=0,f=_.length;m<f;m++){const M=_[m];p=p.concat(M)}for(let m=0,f=p.length;m<f;m++){const M=p[m];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let m=0,f=x.length;m<f;m++){const M=x[m],g=M[0]+h,y=M[1]+h,b=M[2]+h;n.push(g,y,b),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Ug(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];n.push(a)}return new Ur(n,t.curveSegments)}}function Ug(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class pn extends ge{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new I,d=new I,p=[],_=[],x=[],m=[];for(let f=0;f<=n;f++){const M=[],g=f/n;let y=0;f===0&&a===0?y=.5/e:f===n&&c===Math.PI&&(y=-.5/e);for(let b=0;b<=e;b++){const w=b/e;h.x=-t*Math.cos(s+w*r)*Math.sin(a+g*o),h.y=t*Math.cos(a+g*o),h.z=t*Math.sin(s+w*r)*Math.sin(a+g*o),_.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(w+y,1-g),M.push(l++)}u.push(M)}for(let f=0;f<n;f++)for(let M=0;M<e;M++){const g=u[f][M+1],y=u[f][M],b=u[f+1][M],w=u[f+1][M+1];(f!==0||a>0)&&p.push(g,y,w),(f!==n-1||c<Math.PI)&&p.push(y,b,w)}this.setIndex(p),this.setAttribute("position",new ee(_,3)),this.setAttribute("normal",new ee(x,3)),this.setAttribute("uv",new ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Nr extends ge{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],u=new I,h=new I,d=new I;for(let p=0;p<=n;p++)for(let _=0;_<=s;_++){const x=_/s*r,m=p/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(x),h.y=(t+e*Math.cos(m))*Math.sin(x),h.z=e*Math.sin(m),o.push(h.x,h.y,h.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(_/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=s;_++){const x=(s+1)*p+_-1,m=(s+1)*(p-1)+_-1,f=(s+1)*(p-1)+_,M=(s+1)*p+_;a.push(x,m,M),a.push(m,f,M)}this.setIndex(a),this.setAttribute("position",new ee(o,3)),this.setAttribute("normal",new ee(c,3)),this.setAttribute("uv",new ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class _a extends ge{constructor(t=new fa(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new I,c=new I,l=new nt;let u=new I;const h=[],d=[],p=[],_=[];x(),this.setIndex(_),this.setAttribute("position",new ee(h,3)),this.setAttribute("normal",new ee(d,3)),this.setAttribute("uv",new ee(p,2));function x(){for(let g=0;g<e;g++)m(g);m(r===!1?e:0),M(),f()}function m(g){u=t.getPointAt(g/e,u);const y=a.normals[g],b=a.binormals[g];for(let w=0;w<=s;w++){const A=w/s*Math.PI*2,T=Math.sin(A),v=-Math.cos(A);c.x=v*y.x+T*b.x,c.y=v*y.y+T*b.y,c.z=v*y.z+T*b.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,h.push(o.x,o.y,o.z)}}function f(){for(let g=1;g<=e;g++)for(let y=1;y<=s;y++){const b=(s+1)*(g-1)+(y-1),w=(s+1)*g+(y-1),A=(s+1)*g+y,T=(s+1)*(g-1)+y;_.push(b,w,T),_.push(w,A,T)}}function M(){for(let g=0;g<=e;g++)for(let y=0;y<=s;y++)l.x=g/e,l.y=y/s,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new _a(new Rr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ng extends Ye{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xt extends ls{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wl,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const el={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Og{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const p=l[h],_=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const Fg=new Og;class xa{constructor(t){this.manager=t!==void 0?t:Fg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}xa.DEFAULT_MATERIAL_NAME="__DEFAULT";const Tn={};class zg extends Error{constructor(t,e){super(t),this.response=e}}class Bg extends xa{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=el.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Tn[t]!==void 0){Tn[t].push({onLoad:e,onProgress:n,onError:s});return}Tn[t]=[],Tn[t].push({onLoad:e,onProgress:n,onError:s});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Tn[t],h=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),p=d?parseInt(d):0,_=p!==0;let x=0;const m=new ReadableStream({start(f){M();function M(){h.read().then(({done:g,value:y})=>{if(g)f.close();else{x+=y.byteLength;const b=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:p});for(let w=0,A=u.length;w<A;w++){const T=u[w];T.onProgress&&T.onProgress(b)}f.enqueue(y),M()}})}}});return new Response(m)}else throw new zg(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(_=>p.decode(_))}}}).then(l=>{el.add(t,l);const u=Tn[t];delete Tn[t];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(l)}}).catch(l=>{const u=Tn[t];if(u===void 0)throw this.manager.itemError(t),l;delete Tn[t];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Or extends ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class kg extends Or{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Eo=new re,nl=new I,il=new I;class va{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oa,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;nl.setFromMatrixPosition(t.matrixWorld),e.position.copy(nl),il.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(il),e.updateMatrixWorld(),Eo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Eo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Gg extends va{constructor(){super(new je(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=ss*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Hg extends Or{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.target=new ae,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Gg}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const sl=new re,vs=new I,bo=new I;class Vg extends va{constructor(){super(new je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new me(2,1,1,1),new me(0,1,1,1),new me(3,1,1,1),new me(1,1,1,1),new me(3,0,1,1),new me(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),vs.setFromMatrixPosition(t.matrixWorld),n.position.copy(vs),bo.copy(n.position),bo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(bo),n.updateMatrixWorld(),s.makeTranslation(-vs.x,-vs.y,-vs.z),sl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sl)}}class xu extends Or{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Vg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Wg extends va{constructor(){super(new aa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ko extends Or{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.target=new ae,this.shadow=new Wg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}let dr;class vu{static getContext(){return dr===void 0&&(dr=new(window.AudioContext||window.webkitAudioContext)),dr}static setContext(t){dr=t}}class Xg extends xa{constructor(t){super(t)}load(t,e,n,s){const r=this,a=new Bg(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(c){try{const l=c.slice(0);vu.getContext().decodeAudioData(l,function(h){e(h)}).catch(o)}catch(l){o(l)}},n,s);function o(c){s?s(c):console.error(c),r.manager.itemError(t)}}}class ya{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=rl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=rl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function rl(){return(typeof performance>"u"?Date:performance).now()}const oi=new I,ol=new mn,Yg=new I,ai=new I;class qg extends ae{constructor(){super(),this.type="AudioListener",this.context=vu.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new ya}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const e=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(oi,ol,Yg),ai.set(0,0,-1).applyQuaternion(ol),e.positionX){const s=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(oi.x,s),e.positionY.linearRampToValueAtTime(oi.y,s),e.positionZ.linearRampToValueAtTime(oi.z,s),e.forwardX.linearRampToValueAtTime(ai.x,s),e.forwardY.linearRampToValueAtTime(ai.y,s),e.forwardZ.linearRampToValueAtTime(ai.z,s),e.upX.linearRampToValueAtTime(n.x,s),e.upY.linearRampToValueAtTime(n.y,s),e.upZ.linearRampToValueAtTime(n.z,s)}else e.setPosition(oi.x,oi.y,oi.z),e.setOrientation(ai.x,ai.y,ai.z,n.x,n.y,n.z)}}class jg extends ae{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){if(this.detune=t,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}const ci=new I,al=new mn,Kg=new I,li=new I;class Zg extends jg{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(ci,al,Kg),li.set(0,0,1).applyQuaternion(al);const e=this.panner;if(e.positionX){const n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(ci.x,n),e.positionY.linearRampToValueAtTime(ci.y,n),e.positionZ.linearRampToValueAtTime(ci.z,n),e.orientationX.linearRampToValueAtTime(li.x,n),e.orientationY.linearRampToValueAtTime(li.y,n),e.orientationZ.linearRampToValueAtTime(li.z,n)}else e.setPosition(ci.x,ci.y,ci.z),e.setOrientation(li.x,li.y,li.z)}}class cl{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ae(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ta}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ta);function tn(i,t,e=1,n=1){const s=document.createElement("canvas");s.width=s.height=i;const r=s.getContext("2d");t(r,i);const a=new Si(s);return a.wrapS=a.wrapT=As,a.repeat.set(e,n),a.colorSpace=Se,a.anisotropy=4,a}function wi(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function To(i){return(t,e)=>{const n=wi(i?7:21),s=i?"#3d2a1c":"#8a6844",r=i?"#2a1d12":"#6e5233",a=i?"#54402c":"#a37f52";t.fillStyle=s,t.fillRect(0,0,e,e);for(let o=0;o<130;o++){const c=n()*e;t.strokeStyle=n()<.3?a:r,t.globalAlpha=.14+n()*.24,t.lineWidth=.6+n()*2.2,t.beginPath(),t.moveTo(0,c);for(let l=0;l<=e;l+=16)t.lineTo(l,c+Math.sin(l*.05+o)*2.5);t.stroke()}for(let o=0;o<420;o++)t.fillStyle=r,t.globalAlpha=.1+n()*.12,t.fillRect(n()*e,n()*e,1+n()*1.5,1);t.globalAlpha=.5;for(let o=0;o<7;o++){const c=n()*e,l=n()*e;t.strokeStyle=r,t.lineWidth=1.2;for(let u=2;u<9;u+=2)t.beginPath(),t.ellipse(c,l,u*1.8,u,.3,0,Math.PI*2),t.stroke()}t.globalAlpha=1}}function Jg(i,t){const e=wi(99);i.fillStyle="#efe7d6",i.fillRect(0,0,t,t);for(let n=0;n<2600;n++){const s=225+Math.floor(e()*28);i.fillStyle=`rgb(${s},${s-6},${s-20})`,i.globalAlpha=.35,i.fillRect(e()*t,e()*t,1.4,1.4)}i.globalAlpha=.08,i.fillStyle="#b09a78";for(let n=0;n<8;n++)i.beginPath(),i.arc(e()*t,e()*t,12+e()*30,0,7),i.fill();i.globalAlpha=1}function $g(i,t){const e=wi(5);i.fillStyle="#a8a06a",i.fillRect(0,0,t,t);for(let n=0;n<t;n+=3)i.fillStyle=n/3%2?"#9d955f":"#b3ab74",i.fillRect(0,n,t,2);for(let n=0;n<500;n++)i.fillStyle=e()<.5?"#8a824f":"#c0b87e",i.globalAlpha=.4,i.fillRect(e()*t,e()*t,2,1);i.globalAlpha=1}function Qg(i,t){const e=wi(13);i.fillStyle="#f6efdd",i.fillRect(0,0,t,t);for(let n=0;n<900;n++)i.fillStyle=e()<.5?"#efe6d0":"#fbf5e6",i.globalAlpha=.5,i.fillRect(e()*t,e()*t,2,1);i.globalAlpha=1}function t_(i,t){const e=wi(31);i.fillStyle="#cfc6b4",i.fillRect(0,0,t,t);for(let n=0;n<1500;n++){const s=165+Math.floor(e()*70);i.fillStyle=`rgb(${s},${s-4},${s-14})`,i.beginPath(),i.arc(e()*t,e()*t,.8+e()*1.8,0,7),i.fill()}}function e_(i,t){const e=wi(77);i.fillStyle="#7d8f57",i.fillRect(0,0,t,t);for(let n=0;n<2200;n++)i.fillStyle=e()<.5?"#71834e":"#8a9c60",i.globalAlpha=.6,i.fillRect(e()*t,e()*t,1.5,3);i.globalAlpha=1}function n_(i,t){const e=wi(55);i.fillStyle="#9a968c",i.fillRect(0,0,t,t);for(let n=0;n<1200;n++){const s=120+Math.floor(e()*60);i.fillStyle=`rgb(${s},${s},${s-6})`,i.globalAlpha=.5,i.fillRect(e()*t,e()*t,2,2)}i.globalAlpha=.25,i.strokeStyle="#6f6b62";for(let n=0;n<6;n++)i.beginPath(),i.moveTo(e()*t,e()*t),i.lineTo(e()*t,e()*t),i.stroke();i.globalAlpha=1}function i_(i,t){i.fillStyle="#2e3d5c",i.fillRect(0,0,t,t),i.fillStyle="#efe7d2",i.fillRect(t*.18,0,t*.1,t),i.fillRect(t*.72,0,t*.1,t),i.beginPath(),i.arc(t/2,t*.34,t*.13,0,7),i.fill(),i.fillStyle="#2e3d5c",i.font=`bold ${Math.floor(t*.16)}px serif`,i.textAlign="center",i.fillText("TEA",t/2,t*.72)}function s_(i,t){const e=i.createLinearGradient(0,0,0,t);e.addColorStop(0,"#f3ecdb"),e.addColorStop(1,"#e4d8bd"),i.fillStyle=e,i.fillRect(0,0,t,t),i.strokeStyle="#4a4a48",i.lineCap="round";const n=(s,r,a,o)=>{i.lineWidth=a,i.beginPath(),i.moveTo(o,s),i.quadraticCurveTo(o+t*.2,s-r,o+t*.38,s-r*.25),i.quadraticCurveTo(o+t*.5,s-r*.7,o+t*.62,s-r*.1),i.stroke()};i.globalAlpha=.75,n(t*.62,t*.3,7,t*.05),i.globalAlpha=.5,n(t*.7,t*.2,5,t*.35),i.globalAlpha=.9,i.fillStyle="#b0533c",i.beginPath(),i.arc(t*.68,t*.26,t*.05,0,7),i.fill(),i.globalAlpha=1,i.fillStyle="#a33327",i.fillRect(t*.12,t*.78,t*.1,t*.1),i.fillStyle="#f3ecdb",i.font=`${Math.floor(t*.07)}px serif`,i.textAlign="center",i.fillText("wa",t*.17,t*.855)}function r_(i,t){i.fillStyle="#e9dfc6",i.fillRect(0,0,t,t),i.strokeStyle="#c9b98f",i.lineWidth=2,i.globalAlpha=.7;for(let e=-t;e<t*2;e+=26)i.beginPath(),i.arc(e,t*.9,22,Math.PI,0),i.stroke(),i.beginPath(),i.arc(e,t*.45,22,Math.PI,0),i.stroke();i.globalAlpha=1}function yu(){const i=tn(256,To(!1),1,1),t=tn(256,To(!0),1,1),e={woodDark:new xt({map:t,color:12164995,roughness:.75,envMapIntensity:.25}),wood:new xt({map:i,color:13609080,roughness:.8,envMapIntensity:.25}),woodFloor:new xt({map:tn(256,To(!1),4,1),color:14201219,roughness:.7,envMapIntensity:.3}),plaster:new xt({map:tn(256,Jg,1,1),color:16777215,roughness:.95,envMapIntensity:.15}),paper:new xt({map:tn(128,Qg,1,1),color:16774106,emissive:16768926,emissiveIntensity:.38,transparent:!0,opacity:.92,roughness:.9,side:we}),tatami:new xt({map:tn(256,$g,1,1),color:16777215,roughness:.95,envMapIntensity:.1}),tatamiEdge:new xt({color:3099194,roughness:.9}),roofTile:new xt({color:4869461,roughness:.55,metalness:.08,envMapIntensity:.5}),roofTileAlt:new xt({color:3948358,roughness:.6,metalness:.08,envMapIntensity:.5}),ridge:new xt({color:3487549,roughness:.5,metalness:.1,envMapIntensity:.6}),roofUnder:new xt({map:t,color:9072466,roughness:.9}),stone:new xt({map:tn(256,n_,1,1),color:16777215,roughness:.95,envMapIntensity:.15}),gravel:new xt({map:tn(256,t_,6,6),color:16777215,roughness:1}),grass:new xt({map:tn(256,e_,10,10),color:16777215,roughness:1}),moss:new xt({color:6126906,roughness:1,envMapIntensity:.1}),mossDark:new xt({color:4613420,roughness:1,envMapIntensity:.1}),bamboo:new xt({color:8364110,roughness:.6,envMapIntensity:.3}),bambooLeaf:new xt({color:5143092,roughness:.8,side:we}),trunk:new xt({map:t,color:10123868,roughness:.9}),mapleLeaf:new xt({color:16777215,roughness:.75,side:we}),fusuma:new xt({map:tn(256,r_,1,1),color:16777215,roughness:.9}),noren:new xt({map:tn(256,i_,1,1),color:16777215,roughness:.9,side:we}),scroll:new xt({map:tn(256,s_,1,1),color:16777215,roughness:.9}),lanternGlow:new xt({color:16767392,emissive:16751686,emissiveIntensity:2.2}),paperLantern:new xt({color:16770232,emissive:16757867,emissiveIntensity:1.4,roughness:.8}),bronze:new xt({color:4997688,roughness:.45,metalness:.7,envMapIntensity:.8})};return e.woodNew=e.woodNew||new xt({color:9069112,roughness:.7}),e.woodAged=e.woodAged||new xt({color:7234136,roughness:.9}),e.glassDark=e.glassDark||new xt({color:1053980,roughness:.08,metalness:.9}),e.bronze=e.bronze||new xt({color:7035443,roughness:.35,metalness:.9}),e.iron=e.iron||new xt({color:2829102,roughness:.5,metalness:.8}),e.soil=e.soil||new xt({color:4865843,roughness:1}),e.thatch=e.thatch||new xt({color:10127967,roughness:1}),e._wet=e._wet||[],e.registerWet=n=>(n&&!e._wet.includes(n)&&e._wet.push(n),n),e.plasterTinted=n=>new xt({color:n,roughness:.95}),[e.wood,e.woodDark,e.woodNew,e.woodAged,e.plaster,e.tile,e.stone,e.soil].forEach(n=>n&&e.registerWet(n)),e.tile=e.tile||e.roofTile,e.shoji=e.shoji||e.paper,e.registerWet(e.tile),e}const o_=Object.freeze(Object.defineProperty({__proto__:null,buildMaterials:yu},Symbol.toStringTag,{value:"Module"}));function Qn(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Pt(i,t,e,n,s=0,r=0,a=0,o=0){const c=new rt(new Ht(i,t,e),n);return c.position.set(s,r,a),c.rotation.y=o,c.castShadow=!0,c.receiveShadow=!0,c}const We=new ae;function Ln(i,t){for(let e=0;e<t.length;e++){const n=t[e];We.position.set(n.p[0],n.p[1],n.p[2]),We.rotation.set(n.rx||0,n.ry||0,n.rz||0);const s=n.s===void 0?1:n.s;We.scale.set(n.sx===void 0?s:n.sx,n.sy===void 0?s:n.sy,n.sz===void 0?s:n.sz),We.updateMatrix(),i.setMatrixAt(e,We.matrix),n.c&&i.setColorAt(e,n.c)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),i.castShadow=!0,i.receiveShadow=!0,i}function Mu(i,t,e=.75,n=1){const s=new Kn(i,n),r=Qn(t),a=s.attributes.position,o=new I,c=new Map;for(let l=0;l<a.count;l++){o.fromBufferAttribute(a,l);const u=`${o.x.toFixed(3)},${o.y.toFixed(3)},${o.z.toFixed(3)}`;let h=c.get(u);h===void 0&&(h=.78+r()*.5,c.set(u,h)),o.multiplyScalar(h),o.y*=e,a.setXYZ(l,o.x,o.y,o.z)}return s.computeVertexNormals(),s}let fr=null;function Su(){if(fr)return fr;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,6,64,64,62);return e.addColorStop(0,"rgba(20,12,6,0.55)"),e.addColorStop(.6,"rgba(20,12,6,0.28)"),e.addColorStop(1,"rgba(20,12,6,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),fr=new Si(i),fr}function Fr(i,t,e=1){const n=new rt(new ye(i,t),new Jn({map:Su(),transparent:!0,opacity:e,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));return n.rotation.x=-Math.PI/2,n.renderOrder=1,n}function Ma(i,t,e,n,s,r,a){const o=new Ht(s,n,r),c=new Ht(e,s,r),l=new Zt,u=(p,_)=>{const x=new Ue(p,a,_);return x.castShadow=!1,x.receiveShadow=!0,x},h=u(o,i+1),d=u(c,t+1);for(let p=0;p<=i;p++)We.position.set(-e/2+p*e/i,0,0),We.rotation.set(0,0,0),We.scale.set(1,1,1),We.updateMatrix(),h.setMatrixAt(p,We.matrix);for(let p=0;p<=t;p++)We.position.set(0,-n/2+p*n/t,0),We.rotation.set(0,0,0),We.scale.set(1,1,1),We.updateMatrix(),d.setMatrixAt(p,We.matrix);return h.instanceMatrix.needsUpdate=d.instanceMatrix.needsUpdate=!0,l.add(h,d),l}const a_=Object.freeze(Object.defineProperty({__proto__:null,blobTexture:Su,contactShadow:Fr,displacedRock:Mu,fillInstances:Ln,makeBeam:Pt,makeLatticeBars:Ma,mulberry:Qn},Symbol.toStringTag,{value:"Module"})),wu={w:10,d:6.4,floorY:.7,wallTop:3.6,pillar:.22};function pr(i,t,e,n=[4,6]){const s=new Zt,r=.07,a=.06,o=e.woodDark;s.add(Pt(i,r,a,o,0,t/2-r/2,0)),s.add(Pt(i,r,a,o,0,-t/2+r/2,0)),s.add(Pt(r,t,a,o,-i/2+r/2,0,0)),s.add(Pt(r,t,a,o,i/2-r/2,0,0)),s.add(Pt(.05,t-2*r,a*.7,o,0,0,0));const c=new rt(new ye(i-2*r,t-2*r),e.paper);c.position.z=-.005,c.receiveShadow=!0,s.add(c);const l=Ma(n[0],n[1],i-2*r,t-2*r,.028,.02,e.woodDark);l.position.z=.018,s.add(l);const u=new rt(new de(.035,.035,.03,12),e.bronze);return u.rotation.x=Math.PI/2,u.position.set(i/2-.16,0,.035),s.add(u),s}function c_(i){const t=new Zt,e=Qn(1234),{w:n,d:s,floorY:r,wallTop:a,pillar:o}=wu,c=n/2,l=s/2,u=Fr(n+3.4,s+3.6,.9);u.position.set(0,.03,0),t.add(u);{const D=Mu(.32,900,.62,0),B=[];for(let O=-c;O<=c+.01;O+=1.25)for(let F=-l;F<=l+.01;F+=1.6)B.push({p:[O+(e()-.5)*.15,.18,F+(e()-.5)*.15],ry:e()*6.3,s:.8+e()*.5});const L=new Ue(D,i.stone,B.length);Ln(L,B),t.add(L)}t.add(Pt(n+.3,.24,.24,i.woodDark,0,r-.12,l)),t.add(Pt(n+.3,.24,.24,i.woodDark,0,r-.12,-l)),t.add(Pt(.24,.24,s,i.woodDark,-c,r-.12,0)),t.add(Pt(.24,.24,s,i.woodDark,c,r-.12,0));for(let D=-c+.8;D<c;D+=1.1)t.add(Pt(.14,.18,s-.2,i.wood,D,r-.1,0));const h=Pt(n+.2,.1,s,i.woodFloor,0,r-.02,0);t.add(h);const d=a-r,p=r+d/2,_=[];for(let D=0;D<=5;D++)_.push(-c+D*n/5);const x=[];_.forEach(D=>{x.push([D,l]),x.push([D,-l])}),[-l+s/4,0,l-s/4].forEach(D=>{x.push([-c,D]),x.push([c,D])}),x.forEach(([D,B])=>t.add(Pt(o,d,o,i.woodDark,D,p,B)));const m=a-.12;t.add(Pt(n+.24,.24,.2,i.woodDark,0,m,l)),t.add(Pt(n+.24,.24,.2,i.woodDark,0,m,-l)),t.add(Pt(.2,.24,s+.24,i.woodDark,-c,m,0)),t.add(Pt(.2,.24,s+.24,i.woodDark,c,m,0));const f=r+2.32;t.add(Pt(n,.14,.12,i.woodDark,0,f,l)),t.add(Pt(n,.1,.14,i.woodDark,0,r+.08,l)),t.add(Pt(n,.14,.12,i.woodDark,0,f,-l)),t.add(Pt(.14,.14,s,i.woodDark,-c,f,0)),t.add(Pt(.14,.14,s,i.woodDark,c,f,0));const M=(f+.07+m-.12)/2,g=m-.12-(f+.07);t.add(Pt(n-.2,g,.1,i.plaster,0,M,l)),t.add(Pt(n-.2,g,.1,i.plaster,0,M,-l)),t.add(Pt(.1,g,s-.2,i.plaster,-c,M,0)),t.add(Pt(.1,g,s-.2,i.plaster,c,M,0));const y=.1,b=f-(r+.1),w=(f+r+.1)/2;t.add(Pt(n-.2,b,y,i.plaster,0,w,-l)),[-c,c].forEach(D=>{t.add(Pt(y,b,s-.2,i.plaster,D,w,0))}),[-c,c].forEach(D=>{const B=D>0?1:-1;[-1.5,1.5].forEach(L=>{const O=r+1.75,F=new Zt,k=1.5,H=1;F.add(Pt(k+.14,.09,.14,i.woodDark,0,H/2,0)),F.add(Pt(k+.14,.09,.14,i.woodDark,0,-H/2,0)),F.add(Pt(.09,H,.14,i.woodDark,-k/2,0,0)),F.add(Pt(.09,H,.14,i.woodDark,k/2,0,0));const q=new rt(new ye(k,H),i.paper);q.rotation.y=Math.PI/2,F.add(q);const Z=Ma(5,3,k,H,.03,.02,i.woodDark);Z.rotation.y=Math.PI/2,Z.position.x=B*.06,F.add(Z),F.position.set(D+B*.09,O,L),t.add(F)})});const A=n/5,T=f-(r+.12),v=r+.12+T/2;for(let D=1;D<=3;D++){const B=-c+A*(D+.5),L=pr(A-.3,T,i);L.position.set(B-(A-.3)/4,v,l+.03);const O=pr(A-.3,T,i);O.position.set(B+(A-.3)/4,v,l-.04),t.add(L,O)}{const D=pr(A-.3,T,i);D.position.set(2,v,l-.04);const B=pr(A-.3,T,i);B.position.set(2,v,l+.1),t.add(D,B)}let S;{const D=-c+A*.5,B=Pt(A-.4,.12,1.6,i.stone,D,r-.06,l-.7);B.receiveShadow=!0,t.add(B);const L=Pt(1.5,.28,.55,i.stone,D,.2,l+1.65);t.add(L),t.add(Pt(.16,T+.1,.16,i.woodDark,D-.85,v,l+.05)),t.add(Pt(.16,T+.1,.16,i.woodDark,D+.85,v,l+.05)),t.add(Pt(1.9,.18,.2,i.woodDark,D,f+.05,l+.05)),S=new Zt;for(let O=0;O<3;O++){const F=new rt(new Ht(.5,.85,.02),i.noren);F.position.set(-.53+O*.53,-.5,0),F.castShadow=!0,S.add(F)}S.position.set(D,f-.06,l+.12),t.add(S)}{const D=r-.06,B=Pt(n+.6,.12,1.25,i.woodFloor,0,D,l+.65);t.add(B);const L=Pt(1.25,.12,s+.6,i.woodFloor,c+.65,D,0);t.add(L);for(let k=-c-.2;k<=c+.25;k+=1.7)t.add(Pt(.14,D,.14,i.woodDark,k,D/2,l+1.2));for(let k=-l;k<=l+.01;k+=1.6)t.add(Pt(.14,D,.14,i.woodDark,c+1.2,D/2,k));const O=3.78-D;for(let k=-c-.2;k<=c+.25;k+=2.55)t.add(Pt(.13,O,.13,i.woodDark,k,D+O/2,l+1.2));for(let k=-l;k<=l+.01;k+=2.1)t.add(Pt(.13,O,.13,i.woodDark,c+1.2,D+O/2,k));t.add(Pt(n+.7,.16,.14,i.woodDark,0,3.62,l+1.2)),t.add(Pt(.14,.16,s+.7,i.woodDark,c+1.2,3.62,0));const F=D+.55;for(let k=-l;k<=1;k+=1.05)t.add(Pt(.09,.62,.09,i.woodDark,c+1.2,D+.31,k));t.add(Pt(.08,.08,4.4,i.wood,c+1.2,F,-l+2.2)),t.add(Pt(.06,.06,4.4,i.wood,c+1.2,F-.28,-l+2.2)),t.add(Pt(1.6,.22,.5,i.stone,-c+A*4.5,.16,l+1.65))}let P;{const D=new xt({color:5917240,roughness:.7,side:we}),B=new de(.09,.09,n+2.6,10,1,!0,Math.PI,Math.PI);B.rotateZ(Math.PI/2),[l+1.55,-l-1.55].forEach(H=>{const q=new rt(B,D);q.position.set(0,3.66,H),t.add(q)});const L=new de(.055,.055,3.5,8);[[-c-1.2,l+1.55],[-c-1.2,-l-1.55]].forEach(([H,q])=>{const Z=new rt(L,i.bamboo);Z.position.set(H,1.85,q),Z.castShadow=!0,t.add(Z)}),P=new Zt;const O=new Nr(.055,.014,6,10);for(let H=0;H<16;H++){const q=new rt(O,i.bronze);q.position.y=-H*.2,q.rotation.y=H%2*Math.PI/2,P.add(q)}P.position.set(c+1.2,3.6,l+1.55),t.add(P);const F=[];for(let H=0;H<=8;H++){const q=H/8*Math.PI;F.push(new nt(.12+Math.sin(q)*.3,H*.045))}const k=new rt(new Os(F,14),i.stone);k.position.set(c+1.2,0,l+1.55),k.castShadow=k.receiveShadow=!0,t.add(k)}return{group:t,noren:S,rainChain:P,openBayX:-c+A*4.5}}function l_(i){const t=new Zt;i.ridge.side=we;const e=6.42,n=3.7,s=4.7,r=6,a=s,o=e-n,c=Math.hypot(a,o),l=Math.atan2(o,a),u=a/c,h=o/c,d=r*2,p=new Ht(d,.16,c+.35),_=(e+n)/2-.06,x=s/2,m=new rt(p,i.roofUnder);m.position.set(0,_,x),m.rotation.x=l;const f=m.clone();f.position.z=-x,f.rotation.x=-l,m.castShadow=f.castShadow=!0,m.receiveShadow=f.receiveShadow=!0,t.add(m,f),t.add(Pt(d+.15,.3,.09,i.woodDark,0,n-.02,s+.02)),t.add(Pt(d+.15,.3,.09,i.woodDark,0,n-.02,-s-.02));{const M=new Ht(.12,.15,.9),g=[];for(let b=-5.6;b<=5.61;b+=.62)g.push({p:[b,n-.02,s-.35],rx:l}),g.push({p:[b,n-.02,-4.3500000000000005],rx:-l});const y=new Ue(M,i.woodDark,g.length);Ln(y,g),y.castShadow=!1,t.add(y)}{const M=new de(.085,.095,.55,7,1,!0);M.rotateZ(Math.PI/2),M.rotateY(Math.PI/2);const g=11,y=56,b=new Ue(M,i.roofTile,g*y*2),w=Qn(20240),A=new Ut;let T=0;const v=[];for(let S=0;S<2;S++){const P=S===0?1:-1;for(let D=0;D<g;D++){const B=.32+D*((c-.35)/g),L=P*(s-B*u),O=n+B*h+.1;for(let F=0;F<y;F++){const k=-5.78+F*(11.56/(y-1));v.push({p:[k,O,L],rx:P*l});const H=.82+w()*.3;A.setRGB(H,H*1.01,H*1.06),b.setColorAt(T++,A)}}}Ln(b,v),b.instanceColor.needsUpdate=!0,b.castShadow=!1,b.receiveShadow=!0,t.add(b)}{const M=new de(.17,.17,.72,9,1,!0,0,Math.PI);M.rotateZ(Math.PI/2);const g=16,y=new Ue(M,i.ridge,g),b=[];for(let w=0;w<g;w++)b.push({p:[-5.6+w*(11.2/(g-1)),e+.02,0]});Ln(y,b),y.castShadow=!1,t.add(y),t.add(Pt(.5,.22,.4,i.ridge,-5.85,e-.05,0)),t.add(Pt(.5,.22,.4,i.ridge,5.85,e-.05,0))}[-1,1].forEach(M=>{const g=new Zt;g.add(Pt(.22,.5,.55,i.ridge,0,.2,0));const y=new rt(new de(.3,.3,.14,12),i.ridge);y.rotation.z=Math.PI/2,y.position.y=.55,y.castShadow=!0,g.add(y);const b=new rt(new pn(.12,10,8),i.ridge);b.position.y=.78,b.castShadow=!0,g.add(b),g.position.set(M*5.95,e-.1,0),t.add(g)});{const M=new Fs;M.moveTo(-3.2,3.55),M.lineTo(3.2,3.55),M.lineTo(0,e-.12),M.closePath();const g=new Ur(M);[4.94,-4.94].forEach(y=>{const b=new rt(g,i.plaster);b.rotation.y=Math.PI/2,b.position.x=y,b.castShadow=b.receiveShadow=!0,b.material.side=we,t.add(b)}),[1,-1].forEach(y=>{[1,-1].forEach(b=>{const w=Pt(.1,.24,c+.4,i.woodDark,y*(r-.02),_+.12,b*x);w.rotation.x=b*l,t.add(w)})})}{const M=new Ht(2,.09,1.7),g=l-.3;[[5.55,1,4.35,1],[-5.55,-1,4.35,1],[5.55,1,-4.35,-1],[-5.55,-1,-4.35,-1]].forEach(([b,w,A,T])=>{const v=new rt(M,i.roofUnder);v.position.set(b,n+.16,A),v.rotation.order="YXZ",v.rotation.y=w*T*.42,v.rotation.x=T*g,v.castShadow=v.receiveShadow=!0,t.add(v);const S=new de(.085,.095,.55,7,1,!0);S.rotateZ(Math.PI/2),S.rotateY(Math.PI/2);const P=new Ue(S,i.roofTileAlt,5),D=[];for(let B=0;B<5;B++)D.push({p:[b-.7+B*.35,n+.38,A-T*.15],rx:T*g});Ln(P,D),P.castShadow=!1,t.add(P)})}return{group:t,ridgeY:e,eaveY:n,eaveZ:s}}function u_(i){const t=new Zt,{floorY:e}=wu,n=-.9,s=4.9,r=-2.9,a=2.9,o=(n+s)/2;{const p=e+.06;for(let _=r+.1;_+1.82<a+.01;_+=1.82+.02)for(let x=n+.1;x+.92<s+.01;x+=.92+.02){const m=new rt(new Ht(.92,.06,1.82),i.tatami);m.position.set(x+.92/2,p,_+1.82/2),m.receiveShadow=!0,t.add(m);const f=Pt(.92+.02,.06+.005,.035,i.tatamiEdge,x+.92/2,p,_+1.82-.017);f.castShadow=!1,t.add(f)}}{const u=3-e;[[n,0],[o,0],[s,-2],[s,2]].forEach(([d,p])=>t.add(Pt(.16,u,.16,i.woodDark,d,e+u/2,p)));const h=new rt(new Ht(s-n+.4,.08,a-r+.4),i.woodDark);h.position.set(o,3.02,0),t.add(h)}{const u=Pt(.1,2.2,a-r,i.plaster,n,e+1.15,0);t.add(u);for(let h=0;h<3;h++){const d=new Zt,p=1.75,_=1.7;d.add(Pt(p,.06,.05,i.woodDark,0,_/2,0)),d.add(Pt(p,.06,.05,i.woodDark,0,-_/2,0)),d.add(Pt(.06,_,.05,i.woodDark,-p/2,0,0)),d.add(Pt(.06,_,.05,i.woodDark,p/2,0,0));const x=new rt(new ye(p-.1,_-.1),i.fusuma);x.rotation.y=Math.PI/2,d.add(x);const m=new rt(new de(.03,.03,.03,10),i.bronze);m.rotation.z=Math.PI/2,m.position.set(.04,0,.35),d.add(m),d.position.set(n+.09,e+1,-1.85+h*1.85),t.add(d)}}{const d=Pt(2.2,.16,1,i.wood,-2.6,e+.14,r+.55);t.add(d),t.add(Pt(.14,2.2,.14,i.woodDark,-2.6-2.2/2,e+1.1,r+.15)),t.add(Pt(.14,2.2,.14,i.woodDark,-2.6+2.2/2,e+1.1,r+.15)),t.add(Pt(2.2+.2,.14,.16,i.woodDark,-2.6,e+2.25,r+.15));const p=new Zt,_=new rt(new Ht(.55,1.05,.02),i.scroll);p.add(_);const x=new de(.025,.025,.7,8),m=new rt(x,i.woodDark);m.rotation.z=Math.PI/2,m.position.y=.55;const f=m.clone();f.position.y=-.55,p.add(m,f),p.position.set(-2.6-.45,e+1.55,r+.22),p.rotation.x=.03,t.add(p);const M=[];for(let A=0;A<=8;A++){const T=A/8*Math.PI;M.push(new nt(.03+Math.sin(T)*.11,A*.035))}const g=new rt(new Os(M,12),new xt({color:3824268,roughness:.35,envMapIntensity:.7}));g.position.set(-2.6+.55,e+.22,r+.55),g.castShadow=!0,t.add(g);const y=new rt(new de(.012,.012,.5,6),i.mossDark);y.position.set(-2.6+.55,e+.5,r+.55),t.add(y);const b=new rt(new Kn(.09,0),new xt({color:13920650,roughness:.7}));b.position.set(-2.6+.55,e+.78,r+.55),b.castShadow=!0,t.add(b);const w=new rt(new Kn(.14,0),i.stone);w.scale.y=.6,w.position.set(-2.6+.1,e+.26,r+.6),w.castShadow=!0,t.add(w)}{t.add(Pt(1.1,.07,.7,i.wood,2.2,e+.42,.6)),[[-.45,-.25],[.45,-.25],[-.45,.25],[.45,.25]].forEach(([p,_])=>t.add(Pt(.07,.32,.07,i.woodDark,2.2+p,e+.22,.6+_)));const d=new xt({color:8007221,roughness:.9});[[2.2-.2,.6+.75],[2.2+.35,.6-.7]].forEach(([p,_])=>{const x=new rt(new Ht(.5,.09,.5),d);x.position.set(p,e+.12,_),x.rotation.y=.2,x.castShadow=x.receiveShadow=!0,t.add(x)})}const c=new Zt;{const u=new rt(new de(.012,.012,.5,6),i.woodDark);u.position.y=.45,c.add(u);const h=new rt(new de(.19,.19,.34,12),i.paperLantern);c.add(h);const d=new rt(new de(.1,.14,.05,10),i.woodDark);d.position.y=.19;const p=d.clone();p.position.y=-.19,c.add(d,p);const _=new rt(new de(.015,.03,.16,8),new xt({color:10695463,roughness:.8}));_.position.y=-.3,c.add(_),c.position.set(2,2.35,.4),t.add(c)}const l=new xu(16757867,5,9,2);return l.position.set(2,2.3,.4),t.add(l),{group:t,lantern:c,lanternLight:l}}const h_={x:7.5,z:6,w:4.6,d:2.9};function d_(i){const t=new Zt,{x:e,z:n,w:s,d:r}=h_,a=new rt(new $n(1,40),new xt({color:2241323,roughness:1}));a.rotation.x=-Math.PI/2,a.scale.set(s/2+.15,r/2+.15,1),a.position.set(e,-.1,n),a.receiveShadow=!0,t.add(a);const o=new xt({color:5337212,roughness:.1,metalness:.85,envMapIntensity:1.1,transparent:!0,opacity:.93}),c=30,l=18,u=new ye(s,r,c,l),h=new rt(u,o);h.rotation.x=-Math.PI/2,h.position.set(e,.06,n),h.receiveShadow=!0,t.add(h);const d=u.attributes.position.array.slice();{const _=Qn(646),x=22,m=new Kn(.22,0),f=new Ue(m,i.stone,x),M=[];for(let g=0;g<x;g++){const y=g/x*Math.PI*2;M.push({p:[e+Math.cos(y)*(s/2+.1),.1,n+Math.sin(y)*(r/2+.1)],ry:_()*6.3,s:.8+_()*.6,sy:.55})}Ln(f,M),t.add(f)}function p(_,x=null){const m=u.attributes.position,M=1+(x&&typeof x.wetness=="number"?Math.min(Math.max(x.wetness,0),1):0)*.35;for(let g=0;g<m.count;g++){const y=d[g*3],b=d[g*3+1];m.setZ(g,(Math.sin(y*2.1+_*1.7)*.022+Math.cos(b*2.8+_*2.2)*.02)*M)}m.needsUpdate=!0,u.computeVertexNormals()}return{group:t,update:p,waterMat:o}}function f_(i,t){const e=new Ye({side:qe,depthWrite:!1,fog:!1,uniforms:{top:{value:new Ut(8366281)},mid:{value:new Ut(15909267)},bot:{value:new Ut(14721137)}},vertexShader:`
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
      }`}),n=new rt(new pn(70,24,16),e);i.add(n),i.fog=new la(15778195,26,62);const s=new Ko(16767400,3);s.position.set(14,8.5,12),s.target.position.set(0,1.2,0),s.castShadow=!0,s.shadow.mapSize.set(2048,2048),s.shadow.camera.left=-15,s.shadow.camera.right=15,s.shadow.camera.top=15,s.shadow.camera.bottom=-15,s.shadow.camera.near=10,s.shadow.camera.far=120,s.shadow.bias=-4e-4,s.shadow.normalBias=.03,i.add(s,s.target);const r=new kg(12375016,9072466,.6);i.add(r);const a=new Ko(16764830,.35);a.position.set(-8,4,-6),i.add(a);const o=document.createElement("canvas");o.width=64,o.height=32;const c=o.getContext("2d"),l=c.createLinearGradient(0,0,0,32);l.addColorStop(0,"#87a9c8"),l.addColorStop(.48,"#f7c98b"),l.addColorStop(.55,"#8a6f52"),l.addColorStop(1,"#3a3428"),c.fillStyle=l,c.fillRect(0,0,64,32);const u=new Si(o);u.mapping=Mr,u.colorSpace=Se;const h=new Wo(t),d=h.fromEquirectangular(u);return i.environment=d.texture,u.dispose(),h.dispose(),{sun:s,hemi:r,skyMat:e}}function xi(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new ge;let l=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(h.morphAttributes[p])}if(t){let p;if(e)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,u),l+=p}}if(e){let u=0;const h=[];for(let d=0;d<i.length;++d){const p=i[d].index;for(let _=0;_<p.count;++_)h.push(p.getX(_)+u);u+=i[d].attributes.position.count}c.setIndex(h)}for(const u in r){const h=ll(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){const p=[];for(let x=0;x<a[u].length;++x)p.push(a[u][x][d]);const _=ll(p);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(_)}}return c}function ll(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const u=i[l];if(u.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.array.length}const a=new t(r);let o=0;for(let l=0;l<i.length;++l)a.set(i[l].array,o),o+=i[l].array.length;const c=new Re(a,e,n);return s!==void 0&&(c.gpuType=s),c}function _n(i){let t=i>>>0||1;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const Eu=o_,ul=a_||{},bu={M:null};function p_(i){bu.M=i}const m_={tile:"roofTile",shoji:"paper"},Ao={};function rn(i,t){const e=bu.M||Eu;if(e&&e[i])return e[i];const n=m_[i];return n&&e&&e[n]?e[n]:(Ao[i]||(Ao[i]=t()),Ao[i])}const Ei=(i,t=.85,e=0)=>new xt({color:i,roughness:t,metalness:e}),Rn=()=>rn("woodDark",()=>Ei(4864552,.8)),hl=()=>rn("woodNew",()=>Ei(9069112,.7)),dl=()=>rn("woodAged",()=>Ei(7234136,.9)),fl=()=>rn("plaster",()=>Ei(15261904,.95)),g_=()=>rn("tile",()=>Ei(3817286,.85)),Tu=()=>rn("stone",()=>Ei(9276808,.95)),__=()=>rn("glassDark",()=>new xt({color:1053980,roughness:.08,metalness:.9})),Zo=()=>rn("iron",()=>Ei(2829102,.55,.8));function xe(i,t,e,n,s,r,a,o,c=0,l=0,u=0){const h=new Ht(e,n,s),d=new re().makeRotationFromEuler(new Nn(u,c,l));d.setPosition(r,a,o),h.applyMatrix4(d),(i[t]||(i[t]=[])).push(h)}function x_(i,t,e,{shadow:n=!0}={}){for(const s of Object.keys(t)){const r=xi(t[s],!1);t[s].forEach(o=>o.dispose());const a=new rt(r,e(s));a.castShadow=n,a.receiveShadow=!0,i.add(a)}}function v_(i={}){const t=_n(i.seed??7),e=i.w??6.5,n=i.d??6,s=i.wallH??3.1,r=Ie.degToRad(i.pitch??28+t()*8),a=i.roofType??(t()<.7?"kirizuma":"yosemune"),o=i.facadeCols??Math.max(3,Math.round(e/1.8)),c=i.age??t(),l=!!i.isShop,u=i.engawa??(t()<.6?.9:0),h=new Zt;h.name=i.name||"house";const d={},p=(i.woodTone??.5)>.6?"woodNew":"woodAged",_=X=>X==="WOOD"?rn(p,p==="woodNew"?hl:dl):X==="WOOD_D"?Rn():X==="PLAS"?Eu.plasterTinted?.(i.plasterTone??15261904)??fl():X==="STONE"?Tu():Rn(),x=.55,m=.45,f=[],M=Math.max(3,Math.round(e/1.2)+1),g=Math.max(3,Math.round(n/1.2)+1);for(let X=0;X<M;X++)f.push([-e/2+e*X/(M-1),0,-n/2],[-e/2+e*X/(M-1),0,n/2]);for(let X=1;X<g-1;X++)f.push([-e/2,0,-n/2+n*X/(g-1)],[e/2,0,-n/2+n*X/(g-1)]);for(const[X,,ot]of f)xe(d,"STONE",x,m,x,X,m/2-.06,ot,t()*.1);const y=m-.06;xe(d,"WOOD_D",e+.3,.22,n+.3,0,y+.11,0);const b=.14,w=y+.22,A=w+s,T=i.winLayout??Array.from({length:o},()=>t()<.55?1:2),v=e/o;for(let X=0;X<o;X++){const ot=-e/2+v*(X+.5),_t=T[X%T.length],Ct=(i.doorSide??0)!==0&&(i.doorSide<0&&X===0||i.doorSide>0&&X===o-1),U=w+.55,it=w+s-.75;_t===0&&!Ct?xe(d,"PLAS",v-.16,s,b,ot,w+s/2,n/2):Ct?(xe(d,"PLAS",v-.16,U-w,b,ot,(w+U)/2,n/2),xe(d,"PLAS",v-.16,A-(w+2.1),b,ot,(A+w+2.1)/2,n/2)):(xe(d,"PLAS",v-.16,U-w,b,ot,(w+U)/2,n/2),xe(d,"PLAS",v-.16,A-it,b,ot,(A+it)/2,n/2),xe(d,"PLAS",.14,it-U,b,ot-(v-.16)/2+.07,(U+it)/2,n/2),xe(d,"PLAS",.14,it-U,b,ot+(v-.16)/2-.07,(U+it)/2,n/2))}xe(d,"PLAS",e,s,b,0,w+s/2,-n/2),xe(d,"PLAS",b,s,n,-e/2,w+s/2,0),xe(d,"PLAS",b,s,n,e/2,w+s/2,0);for(let X=0;X<=o;X++){const ot=-e/2+v*X;xe(d,"WOOD_D",.14,s,.14,ot,w+s/2,n/2+.02),xe(d,"WOOD_D",.14,s,.14,ot,w+s/2,-n/2-.02)}xe(d,"WOOD_D",e+.24,.16,.18,0,A-.08,n/2+.02),xe(d,"WOOD_D",e+.24,.12,.14,0,w+1.55,n/2+.03),xe(d,"WOOD_D",e+.24,.2,.2,0,A+.02,-n/2-.02);for(let X=0;X<=o;X++){const ot=-e/2+v*X;xe(d,"WOOD_D",.12,.12,.5,ot,A+.18,n/2+.25)}for(let X=0;X<o;X++){const ot=-e/2+v*(X+.5);xe(d,"WOOD_D",.22,.16,.3,ot,A+.32,n/2+.32)}const S=[],P=new Zt;for(let X=0;X<o;X++){const ot=-e/2+v*(X+.5),_t=T[X%T.length],Ct=(i.doorSide??0)!==0&&(i.doorSide<0&&X===0||i.doorSide>0&&X===o-1),U=w+.55,it=w+s-.75,K=v-.44,ct=it-U;if(Ct){const Et=new rt(new Ht(K+.12,2.15,.1),Rn());Et.position.set(ot,w+1.075,n/2+.02),P.add(Et);const gt=new rt(new Ht(K/2-.03,2,.05),rn("woodAged",dl));gt.position.set(ot-K/4,w+1,n/2+.06),P.add(gt);const R=gt.clone();R.position.x=ot+K/4,P.add(R);const E=new de(.02,.02,.16,6);for(const G of[ot-.08,ot+.08]){const et=new rt(E,Zo());et.position.set(G,w+1,n/2+.1),P.add(et)}if(l){const G=new rt(new Ht(K,.5,.03),new xt({color:2899555,roughness:.9}));G.position.set(ot,w+2.35,n/2+.12),G.castShadow=!0,P.add(G)}continue}if(_t===0)continue;const $=new rt(new Ht(K+.1,ct+.1,.09),Rn());if($.position.set(ot,(U+it)/2,n/2+.01),P.add($),_t===1){const Et=new xt({color:15985881,roughness:.9,emissive:16762995,emissiveIntensity:0});S.push(Et);const gt=new rt(new ye(K,ct),Et);gt.position.set(ot,(U+it)/2,n/2+.072),P.add(gt);const R=Rn(),E=4,G=3;for(let et=1;et<E;et++){const st=new rt(new Ht(.045,ct,.03),R);st.position.set(ot-K/2+K*et/E,(U+it)/2,n/2+.08),P.add(st)}for(let et=1;et<G;et++){const st=new rt(new Ht(K,.045,.03),R);st.position.set(ot,U+ct*et/G,n/2+.08),P.add(st)}}else{const Et=new rt(new ye(K,ct),__());Et.position.set(ot,(U+it)/2,n/2+.068),P.add(Et);const gt=Rn();for(let E=0;E<=5;E++){const G=new rt(new Ht(.05,ct,.04),gt);G.position.set(ot-K/2+K*E/5,(U+it)/2,n/2+.075),P.add(G)}const R=new rt(new Ht(K,.06,.04),gt);R.position.set(ot,(U+it)/2,n/2+.075),P.add(R)}}if(P.traverse(X=>{X.isMesh&&(X.castShadow=!1,X.receiveShadow=!0)}),h.add(P),u>0){xe(d,"WOOD",e*.95,.12,u,0,w+.12,n/2+u/2+.05);for(let X=0;X<=Math.round(e*.95/1.1);X++){const ot=-e*.95/2+e*.95*X/Math.round(e*.95/1.1);xe(d,"STONE",.3,.3,.3,ot,.1,n/2+u+.02)}for(let X=0;X<=6;X++){const ot=-e*.9/2+e*.9*X/6;xe(d,"WOOD_D",.09,.7,.09,ot,w+.5,n/2+u)}xe(d,"WOOD_D",e*.9,.08,.1,0,w+.85,n/2+u)}{const X=new Zt,ot=new rt(new Ht(e-.4,.08,n-.4),rn("woodNew",hl));ot.position.y=w+.04,ot.receiveShadow=!0,X.add(ot);const _t=new rt(new ye(e-.4,s-.3),new xt({color:10127984,roughness:1}));_t.position.set(0,w+s/2,-n/2+.25),X.add(_t);const Ct=new rt(new Ht(1.7,.03,.9),new xt({color:10133611,roughness:1}));Ct.position.set(-.6,w+.1,.3),X.add(Ct);const U=Ct.clone();U.position.x=1.2,X.add(U);const it=new rt(new Ht(1.1,.32,.6),Rn());it.position.set(.2,w+.24,.3),X.add(it);const K=new xt({color:4469538,emissive:16757854,emissiveIntensity:0});S.push(K);const ct=new rt(new pn(.09,10,8),K);ct.position.set(.2,w+s-.6,.3),X.add(ct);const $=new rt(new de(.008,.008,.7),Zo());$.position.set(.2,w+s-.25,.3),X.add($),X.traverse(Et=>{Et.isMesh&&(Et.castShadow=!1,Et.receiveShadow=!0)}),h.add(X)}x_(h,d,_,{shadow:!0});const D=new Zt,B=Math.tan(r)*(n/2+.9),L=A+.35,O=Math.hypot(n/2+.9,B)+.35,F=rn("tile",g_),k=Rn(),H=new xt({color:4010535,roughness:.95}),q=new Ht(.3,.07,.36),Z=[],tt=[];for(const X of[1,-1]){const ot=new Ht(e+1.6,.12,O),_t=X*(n/4+.22),Ct=L+B/2;ot.applyMatrix4(new re().makeRotationX(X>0?r:-r)),ot.translate(0,Ct,_t),tt.push(ot);const U=new Ht(e+1.5,.04,O*.98);U.applyMatrix4(new re().makeRotationX(X>0?r:-r)),U.translate(0,Ct-.09,_t);const it=new rt(xi([U],!1),H);it.receiveShadow=!0,D.add(it);const K=Math.floor(O/.34),ct=Math.floor((e+1.4)/.32);for(let $=0;$<K;$++)for(let Et=0;Et<ct;Et++){const gt=-((ct-1)*.32)/2+Et*.32+(t()-.5)*.015,R=-O/2+.2+$*.34,E=new I(gt,.1+(t()-.5)*.012,R).applyEuler(new Nn(X>0?r:-r,0,0));Z.push({p:[E.x,E.y+Ct,E.z+_t],ry:(t()-.5)*.03,tone:.8+t()*.4})}}const ut=new rt(xi(tt,!1),new xt({color:2894896,roughness:.9}));ut.castShadow=!0,D.add(ut);const Y=new Ue(q,F.clone(),Z.length);{const X=new ae,ot=new Ut;Z.forEach((_t,Ct)=>{X.position.set(..._t.p),X.rotation.set(0,_t.ry,0),X.updateMatrix(),Y.setMatrixAt(Ct,X.matrix);const U=_t.tone*(1-c*.25);Y.setColorAt(Ct,ot.setRGB(.32*U+.1,.34*U+.1,.38*U+.12))}),Y.instanceMatrix.needsUpdate=!0,Y.instanceColor&&(Y.instanceColor.needsUpdate=!0)}Y.castShadow=!0,Y.receiveShadow=!0,D.add(Y);const Q=new de(.14,.14,.46,8,1,!1,0,Math.PI);Q.rotateZ(Math.PI/2);const mt=Math.ceil((e+1.4)/.5);for(let X=0;X<mt;X++){const ot=new rt(Q,k);ot.position.set(-(e+1.2)/2+.25+X*.5,L+B+.02,0),ot.castShadow=!0,D.add(ot)}const bt=new Fs;bt.moveTo(-n/2,0),bt.lineTo(n/2,0),bt.lineTo(0,B),bt.closePath();const Tt=new ma(bt,{depth:.12,bevelEnabled:!1});Tt.rotateY(Math.PI/2);for(const X of[e/2-.02,-e/2-.1]){const ot=new rt(Tt,fl());ot.position.set(X,A+.3,0),ot.castShadow=!0,D.add(ot)}if(a==="yosemune")for(const X of[1,-1]){const ot=new rt(new Ht(.14,O*.55,(n/2+.9)*1.02),ut.material);ot.position.set(X*(e/2+.55),L+B*.45,0),ot.rotation.z=X*.62,ot.castShadow=!0,D.add(ot)}if(h.add(D),c>.15){const X=new rt(new Ht(e+.05,.5*c+.15,n+.05),new xt({color:3814700,roughness:1,transparent:!0,opacity:.25+c*.3,depthWrite:!1}));X.position.y=w+.25,X.renderOrder=2,h.add(X)}return h.traverse(X=>{X.isMesh&&X.material?.isMeshStandardMaterial&&ul.registerWet&&ul.registerWet(X.material)}),{group:h,glowMats:S,dims:{w:e,d:n,wallH:s},roofTopY:L+B}}function y_(i,t={}){if(!i||i.userData._upgraded)return i;i.userData._upgraded=!0;const e=new Zt;e.name="hero_joinery_upgrade";const n=Rn(),s=Zo(),r=(x,m,f,M,g,y)=>{const b=new rt(new Ht(x,m,f),n);return b.position.set(M,g,y),b.castShadow=!0,b.receiveShadow=!0,e.add(b),b},a=new Zn().setFromObject(i),o=a.max.x-a.min.x||9,c=a.max.z-a.min.z||7,l=(a.max.x+a.min.x)/2-i.position.x,u=(a.max.z+a.min.z)/2-i.position.z,h=Tu();for(let x=-o/2;x<=o/2+.01;x+=1.15)for(const m of[-c/2-.15,c/2+.15]){const f=new rt(new Ht(.5,.4,.5),h);f.position.set(l+x,.14,u+m),f.receiveShadow=!0,f.castShadow=!1,e.add(f)}r(o*.98,.12,.1,l,t.nageshiY??2,u+c/2+.08);for(let x=-o/2+.8;x<o/2;x+=1.6)r(.24,.18,.3,l+x,t.eaveY??3.35,u+c/2+.3);const d=new de(.025,.025,.2,6);for(const x of[-.12,.12]){const m=new rt(d,s);m.position.set(l+(t.doorX??-2.2)+x,1.25,u+c/2+.12),e.add(m)}const p=new xt({color:4469538,emissive:16757854,emissiveIntensity:0}),_=new rt(new pn(.1,10,8),p);return _.position.set(l,2.6,u),e.add(_),i.userData.glowMats=[...i.userData.glowMats||[],p],i.add(e),i}const Cn={strength:.45,gust(i){return this.strength*(.65+.35*Math.sin(i*.6)*Math.sin(i*.23+1.7))}},M_=["clear","windy","rainy","misty"];function S_({scene:i,pondWaterMats:t=[],wetMats:e=[]}={}){const n=_n(777),s=new Zt;s.name="weather",i?.add(s);let r="clear",a="clear",o=1,c=0;const l=800,u=new Float32Array(l*3);for(let g=0;g<l;g++)u[g*3]=(n()-.5)*60,u[g*3+1]=n()*18,u[g*3+2]=(n()-.5)*60;const h=new ge;h.setAttribute("position",new Re(u,3));const d=new Dr({color:11452368,size:.14,transparent:!0,opacity:0,depthWrite:!1}),p=new ua(h,d);p.frustumCulled=!1,s.add(p);const _=new Jn({color:13623530,transparent:!0,opacity:0,depthWrite:!1,side:we}),x=[],m=new ga(.05,.09,12);for(let g=0;g<40;g++){const y=new rt(m,_.clone());y.rotation.x=-Math.PI/2,y.position.set((n()-.5)*50,.06,(n()-.5)*50),y.userData.ph=n(),s.add(y),x.push(y)}const f=new xt({color:2106924,roughness:.05,metalness:.7,transparent:!0,opacity:0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});for(const[g,y,b]of[[-5.9,9.6,1.2],[4,9.4,1.5],[12,9.7,1],[-12,9.5,1.1],[0,4.2,.9]]){const w=new rt(new $n(b,20),f);w.rotation.x=-Math.PI/2,w.position.set(g,.045,y),s.add(w)}const M={get state(){return o>=1?a:`${r}>${a}`},get wetness(){return c},setState(g){M_.includes(g)&&g!==a&&(r=o>=1?a:r,a=g,o=0)},update(g,y){o=Math.min(1,o+g/3);const b=o*o*(3-2*o),w=a==="rainy",A=(w?b:1-b)*(a==="rainy"?1:0)+(r==="rainy"&&a!=="rainy"?1-b:0),T=a==="windy"?1.2:a==="rainy"?.8:a==="misty"?.15:.45;if(Cn.strength+=(T*(a==="windy"?1:b||1)-Cn.strength)*Math.min(1,g*1.2),a==="windy"&&(Cn.strength+=(1.2-Cn.strength)*Math.min(1,g)),d.opacity=A*.75,d.opacity>.01){const v=h.attributes.position.array,S=Cn.gust(y)*3.2;for(let P=0;P<l;P++)v[P*3+1]-=g*11,v[P*3]+=S*g,v[P*3+1]<0&&(v[P*3+1]=15+n()*3,v[P*3]=(n()-.5)*60,v[P*3+2]=(n()-.5)*60);h.attributes.position.needsUpdate=!0;for(const P of x){P.material.opacity=A*.6;const D=(y*1.4+P.userData.ph*7)%1;P.scale.setScalar(.5+D*2.2),P.material.opacity=A*.6*(1-D)}}else for(const v of x)v.material.opacity=0;c+=((a==="rainy"?b:a==="rainy"?1:r==="rainy"?1-b:0)-c)*Math.min(1,g*.8);for(const v of e)v?.userData?._dry||(v.userData._dry={r:v.roughness??.85,e:v.envMapIntensity??1}),v.roughness=Ie.lerp(v.userData._dry.r,Math.min(.25,v.userData._dry.r*.4),c),v.envMapIntensity=Ie.lerp(v.userData._dry.e,v.userData._dry.e+.9,c);f.opacity=c*.75;for(const v of t)v.roughness=Ie.lerp(.18,.05,c);M.rainK=A,M.mistK=a==="misty"?b:r==="misty"?1-b:0,M.dimK=w?b*.55:0},rainK:0,mistK:0,dimK:0};return M}function w_(i){const t=new Zt,e=Qn(999),n=170,s=new ge,r=new Float32Array(n*3),a=new Float32Array(n);for(let f=0;f<n;f++)r[f*3]=-22+e()*44,r[f*3+1]=.3+e()*6,r[f*3+2]=-14+e()*30,a[f]=e()*100;s.setAttribute("position",new Re(r,3));const o=(()=>{const f=document.createElement("canvas");f.width=f.height=32;const M=f.getContext("2d"),g=M.createRadialGradient(16,16,1,16,16,15);return g.addColorStop(0,"rgba(255,240,214,1)"),g.addColorStop(1,"rgba(255,240,214,0)"),M.fillStyle=g,M.fillRect(0,0,32,32),new Si(f)})(),c=new ua(s,new Dr({map:o,size:.09,transparent:!0,opacity:.55,depthWrite:!1,color:16771264,sizeAttenuation:!0}));t.add(c);const l=40,u=new ye(.17,.17),h=new Ue(u,i.mapleLeaf,l);h.castShadow=!1,h.receiveShadow=!1,h.frustumCulled=!1;const d=[],p=new Ut,_=[12597547,13849600,15105570,11088422];for(let f=0;f<l;f++)d.push({bx:-6+(e()-.5)*30,bz:2+(e()-.5)*26,speed:.35+e()*.4,phase:e()*6.28,sway:.4+e()*.7,spin:1+e()*2}),p.setHex(_[Math.floor(e()*_.length)]),h.setColorAt(f,p);h.instanceColor.needsUpdate=!0,t.add(h);const x=new ae;function m(f){const M=.5+Cn.gust(f),g=s.attributes.position;for(let y=0;y<n;y++){const b=a[y];g.array[y*3]+=Math.sin(f*.3+b)*.0012*(.5+M),g.array[y*3+1]+=(.0016+Math.sin(f*.5+b*2)*8e-4)*(.5+M),g.array[y*3+1]>6.5&&(g.array[y*3+1]=.2)}g.needsUpdate=!0;for(let y=0;y<l;y++){const b=d[y];let A=4.8-(f*b.speed*(.6+M)+b.phase)%4.6;const T=b.bx+Math.sin(f*.9+b.phase)*b.sway*(.6+M),v=b.bz+Math.cos(f*.7+b.phase*1.3)*b.sway*.7;x.position.set(T,A,v),x.rotation.set(f*b.spin+b.phase,b.phase,f*b.spin*.7),x.scale.setScalar(1),x.updateMatrix(),h.setMatrixAt(y,x.matrix)}h.instanceMatrix.needsUpdate=!0}return m(.01),{group:t,update:m}}const pl={type:"change"},Ro={type:"start"},ml={type:"end"},mr=new ra,gl=new Hn,E_=Math.cos(70*Ie.DEG2RAD);class b_ extends yi{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ai.ROTATE,MIDDLE:Ai.DOLLY,RIGHT:Ai.PAN},this.touches={ONE:Ri.ROTATE,TWO:Ri.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",lt),this._domElementKeyEvents=N},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",lt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(pl),n.update(),r=s.NONE},this.update=function(){const N=new I,ht=new mn().setFromUnitVectors(t.up,new I(0,1,0)),yt=ht.clone().invert(),ft=new I,It=new mn,jt=new I,Jt=2*Math.PI;return function(Mt=null){const z=n.object.position;N.copy(z).sub(n.target),N.applyQuaternion(ht),o.setFromVector3(N),n.autoRotate&&r===s.NONE&&P(v(Mt)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let vt=n.minAzimuthAngle,pt=n.maxAzimuthAngle;isFinite(vt)&&isFinite(pt)&&(vt<-Math.PI?vt+=Jt:vt>Math.PI&&(vt-=Jt),pt<-Math.PI?pt+=Jt:pt>Math.PI&&(pt-=Jt),vt<=pt?o.theta=Math.max(vt,Math.min(pt,o.theta)):o.theta=o.theta>(vt+pt)/2?Math.max(vt,o.theta):Math.min(pt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&w||n.object.isOrthographicCamera?o.radius=q(o.radius):o.radius=q(o.radius*l),N.setFromSpherical(o),N.applyQuaternion(yt),z.copy(n.target).add(N),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let Ft=!1;if(n.zoomToCursor&&w){let Ot=null;if(n.object.isPerspectiveCamera){const ne=N.length();Ot=q(ne*l);const se=ne-Ot;n.object.position.addScaledVector(y,se),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const ne=new I(b.x,b.y,0);ne.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Ft=!0;const se=new I(b.x,b.y,0);se.unproject(n.object),n.object.position.sub(se).add(ne),n.object.updateMatrixWorld(),Ot=N.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ot!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ot).add(n.object.position):(mr.origin.copy(n.object.position),mr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(mr.direction))<E_?t.lookAt(n.target):(gl.setFromNormalAndCoplanarPoint(n.object.up,n.target),mr.intersectPlane(gl,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Ft=!0);return l=1,w=!1,Ft||ft.distanceToSquared(n.object.position)>a||8*(1-It.dot(n.object.quaternion))>a||jt.distanceToSquared(n.target)>0?(n.dispatchEvent(pl),ft.copy(n.object.position),It.copy(n.object.quaternion),jt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Rt),n.domElement.removeEventListener("pointerdown",gt),n.domElement.removeEventListener("pointercancel",E),n.domElement.removeEventListener("wheel",st),n.domElement.removeEventListener("pointermove",R),n.domElement.removeEventListener("pointerup",E),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",lt),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const a=1e-6,o=new cl,c=new cl;let l=1;const u=new I,h=new nt,d=new nt,p=new nt,_=new nt,x=new nt,m=new nt,f=new nt,M=new nt,g=new nt,y=new I,b=new nt;let w=!1;const A=[],T={};function v(N){return N!==null?2*Math.PI/60*n.autoRotateSpeed*N:2*Math.PI/60/60*n.autoRotateSpeed}function S(N){const ht=Math.abs(N)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*ht)}function P(N){c.theta-=N}function D(N){c.phi-=N}const B=function(){const N=new I;return function(yt,ft){N.setFromMatrixColumn(ft,0),N.multiplyScalar(-yt),u.add(N)}}(),L=function(){const N=new I;return function(yt,ft){n.screenSpacePanning===!0?N.setFromMatrixColumn(ft,1):(N.setFromMatrixColumn(ft,0),N.crossVectors(n.object.up,N)),N.multiplyScalar(yt),u.add(N)}}(),O=function(){const N=new I;return function(yt,ft){const It=n.domElement;if(n.object.isPerspectiveCamera){const jt=n.object.position;N.copy(jt).sub(n.target);let Jt=N.length();Jt*=Math.tan(n.object.fov/2*Math.PI/180),B(2*yt*Jt/It.clientHeight,n.object.matrix),L(2*ft*Jt/It.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(B(yt*(n.object.right-n.object.left)/n.object.zoom/It.clientWidth,n.object.matrix),L(ft*(n.object.top-n.object.bottom)/n.object.zoom/It.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function F(N){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(N){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(N,ht){if(!n.zoomToCursor)return;w=!0;const yt=n.domElement.getBoundingClientRect(),ft=N-yt.left,It=ht-yt.top,jt=yt.width,Jt=yt.height;b.x=ft/jt*2-1,b.y=-(It/Jt)*2+1,y.set(b.x,b.y,1).unproject(n.object).sub(n.object.position).normalize()}function q(N){return Math.max(n.minDistance,Math.min(n.maxDistance,N))}function Z(N){h.set(N.clientX,N.clientY)}function tt(N){H(N.clientX,N.clientX),f.set(N.clientX,N.clientY)}function ut(N){_.set(N.clientX,N.clientY)}function Y(N){d.set(N.clientX,N.clientY),p.subVectors(d,h).multiplyScalar(n.rotateSpeed);const ht=n.domElement;P(2*Math.PI*p.x/ht.clientHeight),D(2*Math.PI*p.y/ht.clientHeight),h.copy(d),n.update()}function Q(N){M.set(N.clientX,N.clientY),g.subVectors(M,f),g.y>0?F(S(g.y)):g.y<0&&k(S(g.y)),f.copy(M),n.update()}function mt(N){x.set(N.clientX,N.clientY),m.subVectors(x,_).multiplyScalar(n.panSpeed),O(m.x,m.y),_.copy(x),n.update()}function bt(N){H(N.clientX,N.clientY),N.deltaY<0?k(S(N.deltaY)):N.deltaY>0&&F(S(N.deltaY)),n.update()}function Tt(N){let ht=!1;switch(N.code){case n.keys.UP:N.ctrlKey||N.metaKey||N.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),ht=!0;break;case n.keys.BOTTOM:N.ctrlKey||N.metaKey||N.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),ht=!0;break;case n.keys.LEFT:N.ctrlKey||N.metaKey||N.shiftKey?P(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),ht=!0;break;case n.keys.RIGHT:N.ctrlKey||N.metaKey||N.shiftKey?P(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),ht=!0;break}ht&&(N.preventDefault(),n.update())}function X(N){if(A.length===1)h.set(N.pageX,N.pageY);else{const ht=qt(N),yt=.5*(N.pageX+ht.x),ft=.5*(N.pageY+ht.y);h.set(yt,ft)}}function ot(N){if(A.length===1)_.set(N.pageX,N.pageY);else{const ht=qt(N),yt=.5*(N.pageX+ht.x),ft=.5*(N.pageY+ht.y);_.set(yt,ft)}}function _t(N){const ht=qt(N),yt=N.pageX-ht.x,ft=N.pageY-ht.y,It=Math.sqrt(yt*yt+ft*ft);f.set(0,It)}function Ct(N){n.enableZoom&&_t(N),n.enablePan&&ot(N)}function U(N){n.enableZoom&&_t(N),n.enableRotate&&X(N)}function it(N){if(A.length==1)d.set(N.pageX,N.pageY);else{const yt=qt(N),ft=.5*(N.pageX+yt.x),It=.5*(N.pageY+yt.y);d.set(ft,It)}p.subVectors(d,h).multiplyScalar(n.rotateSpeed);const ht=n.domElement;P(2*Math.PI*p.x/ht.clientHeight),D(2*Math.PI*p.y/ht.clientHeight),h.copy(d)}function K(N){if(A.length===1)x.set(N.pageX,N.pageY);else{const ht=qt(N),yt=.5*(N.pageX+ht.x),ft=.5*(N.pageY+ht.y);x.set(yt,ft)}m.subVectors(x,_).multiplyScalar(n.panSpeed),O(m.x,m.y),_.copy(x)}function ct(N){const ht=qt(N),yt=N.pageX-ht.x,ft=N.pageY-ht.y,It=Math.sqrt(yt*yt+ft*ft);M.set(0,It),g.set(0,Math.pow(M.y/f.y,n.zoomSpeed)),F(g.y),f.copy(M);const jt=(N.pageX+ht.x)*.5,Jt=(N.pageY+ht.y)*.5;H(jt,Jt)}function $(N){n.enableZoom&&ct(N),n.enablePan&&K(N)}function Et(N){n.enableZoom&&ct(N),n.enableRotate&&it(N)}function gt(N){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(N.pointerId),n.domElement.addEventListener("pointermove",R),n.domElement.addEventListener("pointerup",E)),zt(N),N.pointerType==="touch"?Lt(N):G(N))}function R(N){n.enabled!==!1&&(N.pointerType==="touch"?St(N):et(N))}function E(N){Vt(N),A.length===0&&(n.domElement.releasePointerCapture(N.pointerId),n.domElement.removeEventListener("pointermove",R),n.domElement.removeEventListener("pointerup",E)),n.dispatchEvent(ml),r=s.NONE}function G(N){let ht;switch(N.button){case 0:ht=n.mouseButtons.LEFT;break;case 1:ht=n.mouseButtons.MIDDLE;break;case 2:ht=n.mouseButtons.RIGHT;break;default:ht=-1}switch(ht){case Ai.DOLLY:if(n.enableZoom===!1)return;tt(N),r=s.DOLLY;break;case Ai.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enablePan===!1)return;ut(N),r=s.PAN}else{if(n.enableRotate===!1)return;Z(N),r=s.ROTATE}break;case Ai.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enableRotate===!1)return;Z(N),r=s.ROTATE}else{if(n.enablePan===!1)return;ut(N),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Ro)}function et(N){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;Y(N);break;case s.DOLLY:if(n.enableZoom===!1)return;Q(N);break;case s.PAN:if(n.enablePan===!1)return;mt(N);break}}function st(N){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(N.preventDefault(),n.dispatchEvent(Ro),bt(N),n.dispatchEvent(ml))}function lt(N){n.enabled===!1||n.enablePan===!1||Tt(N)}function Lt(N){switch(dt(N),A.length){case 1:switch(n.touches.ONE){case Ri.ROTATE:if(n.enableRotate===!1)return;X(N),r=s.TOUCH_ROTATE;break;case Ri.PAN:if(n.enablePan===!1)return;ot(N),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Ri.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ct(N),r=s.TOUCH_DOLLY_PAN;break;case Ri.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;U(N),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Ro)}function St(N){switch(dt(N),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;it(N),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;K(N),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;$(N),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Et(N),n.update();break;default:r=s.NONE}}function Rt(N){n.enabled!==!1&&N.preventDefault()}function zt(N){A.push(N.pointerId)}function Vt(N){delete T[N.pointerId];for(let ht=0;ht<A.length;ht++)if(A[ht]==N.pointerId){A.splice(ht,1);return}}function dt(N){let ht=T[N.pointerId];ht===void 0&&(ht=new nt,T[N.pointerId]=ht),ht.set(N.pageX,N.pageY)}function qt(N){const ht=N.pointerId===A[0]?A[1]:A[0];return T[ht]}n.domElement.addEventListener("contextmenu",Rt),n.domElement.addEventListener("pointerdown",gt),n.domElement.addEventListener("pointercancel",E),n.domElement.addEventListener("wheel",st,{passive:!1}),this.update()}}function T_(i){const t=new je(45,window.innerWidth/window.innerHeight,.3,160);t.position.set(12.5,7,15.5);const e=new b_(t,i.domElement);e.target.set(0,2.2,1),e.enableDamping=!0,e.dampingFactor=.06,e.minDistance=5,e.maxDistance=48,e.maxPolarAngle=1.45,e.update();function n(){t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)}return window.addEventListener("resize",n),{camera:t,controls:e,onResize:n}}const A_=20260911,Zi=[{name:"hero",cx:0,cz:-1,w:9,d:7,kind:"hero"},{name:"A",cx:-10.5,cz:-1,w:6.5,d:6,kind:"home"},{name:"B",cx:9.8,cz:-.5,w:6,d:6.5,kind:"home"},{name:"shop1",cx:14,cz:13.5,w:7,d:5,kind:"shop"},{name:"shop2",cx:-13,cz:13.5,w:6.5,d:5,kind:"shop"},{name:"C",cx:-9,cz:-12,w:7,d:6,kind:"home"},{name:"D",cx:2,cz:-12.5,w:6.5,d:6,kind:"home"},{name:"E",cx:11.5,cz:-12,w:6,d:5.5,kind:"home"},{name:"F",cx:-19,cz:-3,w:5.5,d:6,kind:"home"},{name:"G",cx:-6,cz:21,w:6,d:5,kind:"home"},{name:"shed1",cx:19.5,cz:-4,w:3,d:2.5,kind:"shed"},{name:"shed2",cx:-20.5,cz:8,w:2.8,d:2.5,kind:"shed"}],R_={A:{seed:11,w:6.5,d:6,wallH:2.9,roofType:"kirizuma",pitch:30,facadeCols:4,doorSide:-1,engawa:.9,woodTone:.3,age:.7},B:{seed:22,w:6,d:6.5,wallH:3.3,roofType:"yosemune",pitch:32,facadeCols:3,doorSide:1,engawa:0,woodTone:.8,age:.2},shop1:{seed:33,w:7,d:5,wallH:3.4,roofType:"kirizuma",pitch:26,facadeCols:4,doorSide:0,engawa:1.4,woodTone:.6,age:.35,isShop:!0},shop2:{seed:44,w:6.5,d:5,wallH:3.2,roofType:"kirizuma",pitch:27,facadeCols:4,doorSide:0,engawa:1.2,woodTone:.4,age:.55,isShop:!0},C:{seed:55,w:7,d:6,wallH:3,roofType:"yosemune",pitch:31,facadeCols:4,doorSide:1,engawa:.9,woodTone:.5,age:.5},D:{seed:66,w:6.5,d:6,wallH:3.5,roofType:"kirizuma",pitch:33,facadeCols:3,doorSide:-1,engawa:0,woodTone:.75,age:.25},E:{seed:77,w:6,d:5.5,wallH:2.8,roofType:"kirizuma",pitch:29,facadeCols:3,doorSide:1,engawa:.8,woodTone:.35,age:.65},F:{seed:88,w:5.5,d:6,wallH:2.9,roofType:"yosemune",pitch:30,facadeCols:3,doorSide:-1,engawa:0,woodTone:.45,age:.6},G:{seed:99,w:6,d:5,wallH:3.1,roofType:"kirizuma",pitch:28,facadeCols:3,doorSide:1,engawa:.9,woodTone:.65,age:.3},shed1:{seed:111,w:3,d:2.5,wallH:2.2,roofType:"kirizuma",pitch:24,facadeCols:2,doorSide:0,engawa:0,woodTone:.2,age:.9,winLayout:[0,0]},shed2:{seed:122,w:2.8,d:2.5,wallH:2.1,roofType:"kirizuma",pitch:25,facadeCols:2,doorSide:0,engawa:0,woodTone:.25,age:.85,winLayout:[0,0]}};function C_(){for(let i=0;i<Zi.length;i++)for(let t=i+1;t<Zi.length;t++){const e=Zi[i],n=Zi[t],s=(e.w+n.w)/2+1-Math.abs(e.cx-n.cx),r=(e.d+n.d)/2+1-Math.abs(e.cz-n.cz);s>0&&r>0&&console.error(`[town] OVERLAP ${e.name}×${n.name} by ${s.toFixed(2)}×${r.toFixed(2)}m`)}}function P_({scene:i,heroGroup:t=null}={}){C_();const e=_n(A_),n=new Zt;n.name="town";const s=[];for(const l of Zi){if(l.kind==="hero"){t&&(t.position.set(l.cx,0,l.cz),n.add(t),s.push({name:"hero",group:t,glowMats:t.userData.glowMats||[],pos:t.position.clone()}));continue}const u={...R_[l.name],name:l.name},h=v_(u);h.group.position.set(l.cx,0,l.cz),l.kind==="shop"&&(h.group.rotation.y=Math.PI),n.add(h.group),s.push({name:l.name,params:u,group:h.group,glowMats:h.glowMats,pos:h.group.position.clone()})}const r=L_(),a=new Zt;a.name="ground_zoning";const o=new rt(new ye(70,70),r.soil);o.rotation.x=-Math.PI/2,o.receiveShadow=!0,a.add(o);const c=(l,u,h,d,p,_=.02)=>{const x=new rt(new ye(l,u),p);x.rotation.x=-Math.PI/2,x.position.set(h,_,d),x.receiveShadow=!0,a.add(x)};c(64,3,0,7,r.street),c(2,15,-5.9,-1.7,r.dirt),c(1.1,14.5,-5.9,-1.7,r.stonePath,.03),c(30,2,1,-7.5,r.dirt),c(26,2,-2,17.5,r.dirt),c(10,3.2,0,3.9,r.garden,.015),c(8,3,14,9.8,r.gravel,.015),c(7.5,3,-13,9.8,r.gravel,.015);{const l=new Ht(.5,.18,.3),u=64,h=new Ue(l,r.edging,u*2),d=new ae;let p=0;for(let _=0;_<u;_++)for(const x of[5.35,8.65])d.position.set(-32+_*1+(e()-.5)*.05,.09,x),d.rotation.y=(e()-.5)*.06,d.updateMatrix(),h.setMatrixAt(p++,d.matrix);h.count=p,h.receiveShadow=!0,a.add(h)}return n.add(a),n.add(I_(e)),n.add(U_(e)),n.add(N_()),n.add(O_(e)),i&&i.add(n),{group:n,houses:s,lampPositions:[[-4.2,8.9],[6.5,8.9],[15.5,8.9],[-13.5,8.9],[-5,-6.5],[8,-6.5],[-6.4,1.5]],polePositions:[[-2.5,9.3],[8.5,9.3],[19.5,9],[-15.5,9.3],[-15,-6.8]]}}function L_(){const i=(e,n=.95)=>new xt({color:e,roughness:n}),t={soil:i(6050117),street:i(9407101,.9),dirt:i(7824462),stonePath:i(10132116),garden:i(6253386,1),gravel:i(10525320),edging:i(8224120)};for(const[e,n]of Object.entries(t))e!=="edging"&&(n.map=D_(e),n.needsUpdate=!0);return t}const Co={};function D_(i){if(Co[i])return Co[i];let t=0;for(const o of i)t=t*31+o.charCodeAt(0)>>>0;const e=(()=>{let o=t||1;return()=>{o|=0,o=o+1831565813|0;let c=Math.imul(o^o>>>15,1|o);return c=c+Math.imul(c^c>>>7,61|c)^c,((c^c>>>14)>>>0)/4294967296}})(),n=128,s=document.createElement("canvas");s.width=s.height=n;const r=s.getContext("2d");r.fillStyle="#ffffff",r.fillRect(0,0,n,n);for(let o=0;o<900;o++){const c=205+Math.floor(e()*50);r.fillStyle=`rgb(${c},${c},${c})`,r.globalAlpha=.5,r.fillRect(e()*n,e()*n,1+e()*2.5,1+e()*2.5)}const a=new Si(s);return a.wrapS=a.wrapT=As,a.repeat.set(8,8),a.colorSpace=Se,Co[i]=a,a}function I_(i,t){const e=new Zt;e.name="stone_walls";const n=[[-16.5,2.8,-7.5,2.8,1.1],[5,2.8,12.5,2.8,1.1],[-13.5,-8.6,-4.5,-8.6,1],[8,18.2,-2.5,18.2,1],[17.8,11.5,21.5,11.5,1.2]],s=new Ht(.55,.32,.4),r=new xt({color:9145222,roughness:.95}),a=[];for(const[l,u,h,d,p]of n){const _=Math.hypot(h-l,d-u),x=Math.floor(_/.58),m=Math.atan2(h-l,d-u),f=Math.max(2,Math.round(p/.33));for(let M=0;M<x;M++)for(let g=0;g<f;g++){const y=(M+.5)/x;a.push({x:l+(h-l)*y+(i()-.5)*.04,z:u+(d-u)*y,y:.16+g*.32,ry:m+(i()-.5)*.08})}for(let M=0;M<x;M++){const g=(M+.5)/x;a.push({x:l+(h-l)*g,z:u+(d-u)*g,y:.16+f*.32+.06,ry:m,cap:!0})}}const o=new Ue(s,r,a.length),c=new ae;return a.forEach((l,u)=>{c.position.set(l.x,l.y,l.z),c.rotation.set(0,l.ry,0),c.scale.set(l.cap?1.15:1,l.cap?.45:1,l.cap?1.2:1),c.updateMatrix(),o.setMatrixAt(u,c.matrix)}),o.castShadow=!1,o.receiveShadow=!0,e.add(o),e}function U_(i){const t=new Zt;t.name="fences_gates";const e=new xt({color:5916208,roughness:.85}),n=new xt({color:4141602,roughness:.85}),s={W:[],D:[]},r=(o,c,l,u,h,d,p,_=0)=>{const x=new Ht(c,l,u),m=new re().makeRotationY(_);m.setPosition(h,d,p),x.applyMatrix4(m),o.push(x)},a=[{x1:-4.6,z1:2.8,x2:4.6,z2:2.8,gate:.5},{x1:-16,z1:.5,x2:-16,z2:5.5,gate:-1},{x1:10.2,z1:11,x2:17.8,z2:11,gate:0}];for(const o of a){const c=Math.hypot(o.x2-o.x1,o.z2-o.z1),l=Math.floor(c/.28),u=Math.atan2(o.x2-o.x1,o.z2-o.z1)+Math.PI/2;for(let h=0;h<=l;h++){const d=h/l,p=o.x1+(o.x2-o.x1)*d,_=o.z1+(o.z2-o.z1)*d;o.gate&&Math.abs(d-.5)<.09||r(s.W,.16,1.1+(i()-.5)*.06,.04,p,.62,_,u)}r(s.D,c,.09,.06,(o.x1+o.x2)/2,1.05,(o.z1+o.z2)/2,u),r(s.D,c,.09,.06,(o.x1+o.x2)/2,.35,(o.z1+o.z2)/2,u),o.gate===.5?r(s.D,1.1,1.05,.06,(o.x1+o.x2)/2+.9,.6,(o.z1+o.z2)/2+.12,u):o.gate===-1&&r(s.D,1,1,.05,o.x1+.4,.58,o.z1+2.6,u+.6)}for(const[o,c]of[["W",e],["D",n]]){if(!s[o].length)continue;const l=new rt(xi(s[o],!1),c);l.castShadow=!0,l.receiveShadow=!0,t.add(l)}return t}function N_(){const i=new Zt;i.name="drainage";const t=new xt({color:3025960,roughness:.9}),e=new xt({color:1911347,roughness:.15,metalness:.6}),n=new xt({color:8224120,roughness:.95}),s=new rt(new Ht(60,.1,.5),t);s.position.set(0,.015,9.05),s.receiveShadow=!0,i.add(s);const r=new rt(new ye(60,.3),e);r.rotation.x=-Math.PI/2,r.position.set(0,.05,9.05),i.add(r),i.userData.waterMat=e;const a=[];for(let c=-28;c<=28;c+=4){const l=new Ht(1.2,.06,.56);l.translate(c,.09,9.05),a.push(l)}const o=new rt(xi(a,!1),n);o.receiveShadow=!0,i.add(o);for(const c of[-5.9,10.5]){const l=new rt(new Ht(1.6,.1,1.1),new xt({color:7033395,roughness:.8}));l.position.set(c,.12,9.05),l.castShadow=!0,l.receiveShadow=!0,i.add(l)}return i}function O_(i){const t=new Zt;t.name="stepping_stones";const e=new xt({color:9408393,roughness:.95}),n=[],s=[{x:0,z0:5.4,z1:2.6,n:4},{x:-10.5,z0:5.4,z1:2.4,n:4},{x:9.8,z0:5.4,z1:3,n:3},{x:14,z0:8.6,z1:10.8,n:3},{x:-13,z0:8.6,z1:10.8,n:3}];for(const a of s)for(let o=0;o<a.n;o++){const c=(o+.5)/a.n,l=new de(.32+i()*.1,.36,.09,7);l.translate(a.x+(i()-.5)*.3,.045,a.z0+(a.z1-a.z0)*c),n.push(l)}const r=new rt(xi(n,!1),e);return r.receiveShadow=!0,t.add(r),t}const Po="audio/suzume.mp3",F_="Suzume",gr=19e3,Lo=14e3,_l=8e3,ys=2200,Do=8;function Au(i,t,e){const n=e.w/2,s=e.d/2;return i>=e.cx-n&&i<=e.cx+n&&t>=e.cz-s&&t<=e.cz+s}function z_(i,t,e){if(!e)return null;for(let n=0;n<e.length;n++){const s=e[n];if(s&&Au(i,t,s))return s}return null}function B_(i,t,e,n,s){const r=s.w/2,a=s.d/2,o=s.cx-r,c=s.cx+r,l=s.cz-a,u=s.cz+a;if(i>=o&&i<=c&&t>=l&&t<=u||e>=o&&e<=c&&n>=l&&n<=u)return!0;const p=e-i,_=n-t;let x=0,m=1;if(Math.abs(p)<1e-12){if(i<o||i>c)return!1}else{let f=(o-i)/p,M=(c-i)/p;if(f>M){const g=f;f=M,M=g}if(f>x&&(x=f),M<m&&(m=M),x>m)return!1}if(Math.abs(_)<1e-12){if(t<l||t>u)return!1}else{let f=(l-t)/_,M=(u-t)/_;if(f>M){const g=f;f=M,M=g}if(f>x&&(x=f),M<m&&(m=M),x>m)return!1}return!0}function xl(i){return i<0?0:i>1?1:i}const vl=new WeakSet;function k_({camera:i=null,scene:t=null,zones:e=[]}={}){const a="inverse";let c=null,l=null,u=null,h=!1,d=null,p=!1,_=!1,x=!0,m=!1,f=!0,M=.9,g=!1,y=!1,b=.9,w=gr,A=-1;const T=new I,v=new I;function S(k){_||(_=!0,console.warn(k))}function P(){g||h||i&&c&&(i.add(c),g=!0)}function D(){try{const k=c&&c.context;if(k&&k.state==="suspended"){const H=k.resume();H&&typeof H.catch=="function"&&H.catch(()=>{})}}catch{}}function B(){try{const k=c&&c.context;return!!k&&k.state==="running"}catch{return!1}}function L(){if(h||p||!d||!l)return!1;try{return l.isPlaying||l.play(),y=!1,!0}catch{return!1}}try{c=new qg,l=new Zg(c),l.setRefDistance(2.5),l.setRolloffFactor(1.6),l.setMaxDistance(55),l.setDistanceModel(a),l.setLoop(!0),l.setVolume(M),u=c.context.createBiquadFilter(),u.type="lowpass",u.frequency.value=gr,u.Q.value=.4,typeof l.setFilter=="function"&&l.setFilter(u),t&&typeof t.add=="function"&&t.add(l);try{new Xg().load(Po,k=>{d=k;try{l.setBuffer(k)}catch{}f&&x&&!m&&(P(),B()&&(D(),L()))},void 0,()=>{p=!0,S("[audio] missing "+Po+" — radio silent (drop the user file at "+Po+")")})}catch{p=!0,S("[audio] loader unavailable — radio silent")}}catch{h=!0,p=!0,S("[audio] WebAudio unavailable — silent mode")}function O(){if(!i||!l)return A;l.getWorldPosition(T),v.setFromMatrixPosition(i.matrixWorld);const k=v.x-T.x,H=v.y-T.y,q=v.z-T.z;return Math.sqrt(k*k+H*H+q*q)}const F={source:l,loop:!0,volume:.9,refDistance:2.5,rolloffFactor:1.6,maxDistance:55,distanceModel:a,play(){return f=!0,h||p?!1:d?(P(),D(),L()):(P(),D(),!0)},pause(){if(f=!1,y=!1,!h&&l)try{l.pause()}catch{}},stop(){if(f=!1,y=!1,!h&&l)try{l.stop()}catch{}},mute(k){if(m=k!==!1,!h&&l&&m)try{l.setVolume(0)}catch{}},setVolume(k){const H=Number(k);M=Number.isFinite(H)?Math.min(1,Math.max(0,H)):M,m=!1,F.volume=M},setEnabled(k){if(x=!!k,x)f=!0,!h&&!p&&d?(P(),D(),L()):(P(),D());else if(f=!1,y=!1,!h&&l)try{l.pause()}catch{}},state(){const k=O(),H=xl(1-(w-ys)/(gr-ys));let q=!1;try{q=!h&&!!l&&!!l.isPlaying}catch{q=!1}return{enabled:x,playing:q,track:F_,missing:p,dist:k,muffleK:H}},update(k){let H=Number(k);if((!Number.isFinite(H)||H<0)&&(H=0),H>.1&&(H=.1),!i||!l)return;l.getWorldPosition(T),v.setFromMatrixPosition(i.matrixWorld);const q=v.x-T.x,Z=v.z-T.z,tt=Math.sqrt(q*q+(v.y-T.y)*(v.y-T.y)+Z*Z);A=tt;const ut=z_(T.x,T.z,e),Y=ut?Au(v.x,v.z,ut):!1;let Q=!1;if(!Y&&e)for(let _t=0;_t<e.length;_t++){const Ct=e[_t];if(!(!Ct||Ct===ut)&&B_(v.x,v.z,T.x,T.z,Ct)){Q=!0;break}}let mt,bt;if(tt>55)mt=ys,bt=0;else if(Y)mt=gr,bt=1;else if(!Q&&tt<Do)mt=Lo,bt=.9;else{const _t=xl((tt-Do)/(55-Do));Q?(mt=_l+(ys-_l)*_t,bt=.55):(mt=Lo+(ys-Lo)*_t,bt=1)}let Tt=M*bt;(!x||m)&&(Tt=0);const X=1-Math.exp(-6*H),ot=1-Math.exp(-4*H);if(b+=(Tt-b)*(H===0?1:X),w+=(mt-w)*(H===0?1:ot),!h){try{u&&(u.frequency.value=w),l&&Math.abs(b-l.getVolume())>.002&&l.setVolume(b)}catch{}try{d&&l&&(b<.01&&(tt>55||!x||m)?l.isPlaying&&(l.pause(),y=!0):y&&x&&!m&&f&&tt<=55&&L())}catch{}}}};return F}function G_(i){if(!i||vl.has(i))return i;vl.add(i);const t=()=>{e();try{typeof i.setEnabled=="function"&&i.setEnabled(!0)}catch{}},e=()=>{try{document.removeEventListener("pointerdown",t),document.removeEventListener("keydown",t)}catch{}};try{document.addEventListener("pointerdown",t),document.addEventListener("keydown",t)}catch{}return i}function yl(i,t,e){const n=_n(i),s=document.createElement("canvas");s.width=128,s.height=256;const r=s.getContext("2d");r.fillStyle=t,r.fillRect(0,0,128,256),r.strokeStyle=e,r.lineCap="round";for(let o=0;o<3;o++){const c=34+n()*60,l=50+o*70;for(let u=0;u<4;u++)r.lineWidth=4+n()*7,r.beginPath(),r.moveTo(c-22+n()*10,l+(n()-.5)*30),r.quadraticCurveTo(c,l+(n()-.5)*34,c+22-n()*8,l+(n()-.5)*30),r.stroke();r.lineWidth=5,r.beginPath(),r.moveTo(c,l-26),r.lineTo(c+(n()-.5)*12,l+26),r.stroke()}const a=new Si(s);return a.colorSpace=Se,a}function H_({lampPositions:i=[],polePositions:t=[]}={}){const e=_n(4242),n=new Zt;n.name="details";const s=[],r={wood:new xt({color:4864552,roughness:.85}),woodD:new xt({color:3352861,roughness:.9}),iron:new xt({color:2302758,roughness:.5,metalness:.85}),bronze:new xt({color:7035443,roughness:.35,metalness:.9}),paper:new xt({color:15788245,roughness:.9}),stone:new xt({color:9276808,roughness:.95}),leaf:new xt({color:4877109,roughness:1}),indigo:new xt({color:2833502,roughness:.95,side:we}),cream:new xt({color:14208952,roughness:.95,side:we})},a={},o=(T,v,S,P,D,B=0,L=0,O=0)=>{const F=new re().makeRotationFromEuler(new Nn(L,B,O));F.setPosition(S,P,D),v.applyMatrix4(F),(a[T]||(a[T]=[])).push(v)},c=(T,v,S)=>new Ht(T,v,S),l=(T,v,S,P=8)=>new de(T,v,S,P),u=[];for(const[T,v]of t)o("woodD",l(.11,.14,6.4),T,3.2,v),o("woodD",c(1.4,.1,.1),T,5.9,v),o("woodD",c(1.1,.09,.09),T,5.4,v),u.push(new I(T,5.9,v));const h=[],d=new xt({color:5591108,emissive:16760938,emissiveIntensity:0});i.forEach(([T,v],S)=>{o("iron",l(.06,.09,3.4),T,1.7,v),o("iron",c(.7,.07,.07),T+.3,3.35,v)});const p=[],_=(T,v,S,P)=>{const D=new Nr(.34,.035,8,20);o("iron",D.clone(),T-.45,.34,v,S),o("iron",D.clone(),T+.45,.34,v,S);const B=(L,O,F,k)=>{const H=Math.hypot(F-L,k-O),q=l(.025,.025,H,6),Z=new Nn(0,S,Math.atan2(k-O,F-L)-Math.PI/2+P);q.applyMatrix4(new re().makeRotationFromEuler(Z)),q.translate((L+F)/2+T,(O+k)/2,v),(a.iron||(a.iron=[])).push(q)};B(-.45,.34,0,.75),B(.45,.34,0,.75),B(0,.75,-.15,.95),B(-.45,.34,.45,.34),o("woodD",c(.28,.05,.22),T-.05,.78,v,S),o("iron",l(.02,.02,.4,6),T+.45,.95,v,0,0,Math.PI/2)};_(11.2,10.6,.2,.12),_(-10.8,10.7,-.15,-.1),_(-4.9,3.4,1.45,.14);const x=(T,v,S,P,D)=>{const B=yl(D,"#2b3c5e","#e8e0cc"),L=new rt(new Ht(.9,1.8,.08),new xt({map:B,roughness:.85}));L.position.set(T,v,S),L.rotation.y=P,L.castShadow=!0,n.add(L)};x(10.6,2.6,10.9,.3,7),x(-10.2,2.5,10.9,-.25,21);for(const[T,v,S]of[[-7.2,2.9,5],[6.9,2.9,9],[5.4,-9.4,13]]){const P=yl(S,"#4a3a28","#efe6d0"),D=new rt(new Ht(.34,.7,.05),new xt({map:P,roughness:.85}));D.position.set(T,2,v),n.add(D)}{const T=new rt(c(1,1.9,.7),new xt({color:12071722,roughness:.4,metalness:.3}));T.position.set(17.9,.95,10.6),T.castShadow=!0,n.add(T);const v=new xt({color:1118481,emissive:12576511,emissiveIntensity:1.2,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),S=new rt(new ye(.8,1.2),v);S.position.set(17.9,1,10.24),S.rotation.y=Math.PI,n.add(S),n.userData.vendGlow=v}const m=(T,v,S=.45,P=0)=>o("wood",c(S,S,S),T,S/2,v,P);m(12.6,10.7,.5,.2),m(12.6,10.7+0,.42,.5),a.wood[a.wood.length-1].translate(0,.46,0),m(-14.8,10.6,.45,-.3),m(5.2,3.6,.4,.7);for(const[T,v]of[[1.8,3.2],[-2.2,3.3],[11.9,10.5]])o("woodD",l(.16,.13,.3),T,.15,v);const f=(T,v,S)=>{o("wood",c(1.6,.08,.4),T,.45,v,S),o("woodD",c(.08,.45,.36),T-.6,.22,v,S),o("woodD",c(.08,.45,.36),T+.6,.22,v,S)};f(.5,4.4,.1),f(-9.5,3.2,-.1);const M=[];for(let T=0;T<=6;T++)M.push(new nt(.14+T/6*.1,T/6*.28));const g=new Os(M,10);for(const[T,v]of[[-3.4,3.1],[3.2,3],[10.9,10.8],[-11.5,10.6],[2.2,4.3]])o("stone",g.clone(),T,0,v),o("leaf",new pn(.2,7,6),T,.42,v);o("woodD",l(.2,.17,.5),-1.8,.25,3.5);for(let T=0;T<3;T++)o("cream",l(.015,.09,.9,6),-1.85+T*.06,.7,3.5+(T-1)*.05);for(const T of[-10,2,12])o("iron",c(.8,.04,.5),T,.1,9.05);const y=(T,v)=>{const S=Math.sin(T*127.1+v*311.7)*43758.5453;return S-Math.floor(S)};for(const[T,v]of[[5.6,.9],[-5.6,.9]])for(let S=0;S<14;S++){const P=Math.floor(S/5),D=S%5,B=c(.85+y(S,T)*.2,.15,.15),L=new re().makeRotationY((y(S,v)-.5)*.2);L.setPosition(T+(y(S,3)-.5)*.06,.1+P*.16,v+(D-2)*.17),B.applyMatrix4(L),(a.wood||(a.wood=[])).push(B)}{const T=new pn(.15,12,10),v=new xt({color:16773848,emissive:16757854,emissiveIntensity:1.2,roughness:.6});for(const[S,P]of[[-3.9,8.9],[6.8,8.9]]){const D=new rt(T,v);D.position.set(S,3.02,P),n.add(D)}}for(const[T,v]of[[13.5,"indigo"],[14.5,"cream"]]){const S=new ye(.5,.9,1,2);S.translate(0,-.45,0);const P=new rt(S,r[v]);P.position.set(T,2.6,10.8),P.rotation.y=T<14?.15:-.12,P.castShadow=!0,n.add(P),s.push({mesh:P,phase:y(T,1)*6.28,amp:.08})}{const T=new Kn(.32,1),v=T.attributes.position;for(let D=0;D<v.count;D++){const B=1+.22*Math.sin(D*3.7)+.12*Math.sin(D*9.1+1.3);v.setXYZ(D,v.getX(D)*B,v.getY(D)*B*.72,v.getZ(D)*B)}T.computeVertexNormals();const S=new Ue(T,r.stone,5),P=new ae;[[-8.5,11.5],[-3.5,14.2],[-7.8,14.5],[-3.8,11.3],[-6,11]].forEach(([D,B],L)=>{P.position.set(D,.1,B),P.rotation.set(0,y(L,21)*6.28,0);const O=.7+y(L,22)*.9;P.scale.set(O,O*.8,O),P.updateMatrix(),S.setMatrixAt(L,P.matrix)}),S.instanceMatrix.needsUpdate=!0,S.castShadow=!0,S.receiveShadow=!0,n.add(S)}{const T=new ye(.36,.3);T.translate(0,.15,0);const v=new Ue(T,r.leaf,24),S=new ae,P=[[-4.6,3.3],[-2,3.3],[1.5,3.3],[4.6,3.3],[-5.15,.9],[5.15,.9],[13,10.6],[15,10.6],[-14,10.6],[-12,10.6],[-6.2,1],[7.2,5.2]];let D=0;for(let B=0;B<12;B++)for(let L=0;L<2;L++){S.position.set(P[B][0],.02,P[B][1]),S.rotation.set(0,L*Math.PI/2+y(B,31)*.6,0);const O=.7+y(B,32+L)*.7;S.scale.set(O,O,O),S.updateMatrix(),v.setMatrixAt(D++,S.matrix)}v.instanceMatrix.needsUpdate=!0,v.castShadow=!1,v.receiveShadow=!1,n.add(v)}{const S=new rt(new Ht(.62,.9,.62),r.wood);S.position.set(15.5,.45,14.5),S.castShadow=!0,n.add(S);const P=new rt(new Ht(.55,.35,.3),r.wood);P.position.set(15.5,1.075,14.5),P.castShadow=!0,n.add(P);const D=new rt(new Ht(.5,.28,.02),r.iron);D.position.set(15.5,1.075,14.5-.16),n.add(D);const B=new de(.025,.025,.03,10);for(const k of[-.12,-.05]){const H=new rt(B,r.bronze);H.rotation.x=Math.PI/2,H.position.set(15.5+k,.99,14.5-.18),n.add(H)}const L=new rt(new de(.008,.012,.7,6),r.bronze);L.position.set(15.5+.18,1.55,14.5+.05),L.rotation.z=-.35,L.rotation.x=.12,n.add(L);const O=new xt({color:2102280,emissive:16757854,emissiveIntensity:1,roughness:.6}),F=new rt(new Ht(.3,.045,.012),O);F.position.set(15.5+.05,1.16,14.5-.175),n.add(F),n.userData.radioGlow=O,n.userData.radioPos=new I(15.5,1.15,14.5)}const b=T=>r[{WOOD:"wood",wood:"wood",woodD:"woodD",iron:"iron",stone:"stone",leaf:"leaf",cream:"cream"}[T]||"wood"];for(const T of Object.keys(a)){const v=new rt(xi(a[T],!1),b(T));v.castShadow=T!=="leaf",v.receiveShadow=!0,n.add(v)}i.forEach(([T,v],S)=>{const P=new rt(new pn(.13,10,8),S<3?d:d.clone());if(P.position.set(T+.6,3.25,v),n.add(P),h.push(P.material),S<3){const D=new xu(16760430,0,12,2);D.position.set(T+.6,3.2,v),n.add(D),p.push(D)}}),n.userData.lampGlows=h,n.userData.lampLights=p;const w=(T,v,S,P,D,B,L=0)=>{const O=new ye(P,D,1,4);O.translate(0,-D/2,0);const F=new rt(O,r[B]);F.position.set(T,v,S),F.rotation.y=L,F.castShadow=!0,n.add(F),s.push({mesh:F,phase:e()*6.28,amp:.08+e()*.06})};for(let T=0;T<3;T++)w(12.4+T*.55,2.5,10.95,.45,.8,"indigo");for(let T=0;T<2;T++)w(-14.2+T*.55,2.4,10.95,.45,.7,"cream");w(1.5,2.2,2.62,.4,.6,"cream");const A=new Jn({color:1118484});for(let T=0;T<u.length-1;T++){const v=u[T],S=u[T+1];if(v.distanceTo(S)>16)continue;const P=v.clone().lerp(S,.5);P.y-=.7;for(const D of[0,-.22]){const B=new fa(v.clone().add(new I(0,D,0)),P.clone().add(new I(0,D,0)),S.clone().add(new I(0,D,0))),L=new rt(new _a(B,20,.015,5),A);n.add(L)}}for(const[T,v]of[[-4.9,2.9],[4.9,2.9],[10.4,10.9],[-9.9,10.9]]){const S=new rt(l(.05,.07,.7,7),r.woodD);S.position.set(T,.55,v),S.castShadow=!0,n.add(S);for(let D=0;D<3;D++){const B=new rt(new pn(.32-D*.06,8,6),r.leaf);B.position.set(T+(e()-.5)*.2,1+D*.28,v+(e()-.5)*.2),B.scale.y=.75,B.castShadow=!0,n.add(B)}const P=new rt(g.clone(),r.stone);P.position.set(T,0,v),n.add(P)}return{group:n,cloth:s,lampGlows:h,lampLights:p}}function V_(i,t,e={strength:.5}){if(!i?.cloth)return;const n=.4+(e.strength??.5);for(const s of i.cloth)s.mesh.rotation.x=Math.sin(t*2.1+s.phase)*s.amp*n}const Io=["DAWN","DAY","GOLDEN","SUNSET","BLUE_HOUR","NIGHT","MOONLIT","RAIN_NIGHT","MIST_NIGHT"],Ml={DAWN:{sunC:16757370,sunI:1.6,el:12,az:95,sky:[10336470,15910043],fog:13620438,hemi:.5,hemiSky:12375016,hemiGround:9072466,exp:1,lit:0,lampK:1,starK:0},DAY:{sunC:16774112,sunI:2.6,el:62,az:150,sky:[7317724,13624303],fog:13621468,hemi:.7,hemiSky:12375016,hemiGround:9072466,exp:1,lit:0,lampK:1,starK:0},GOLDEN:{sunC:16761963,sunI:2,el:18,az:235,sky:[8363204,16767392],fog:14207412,hemi:.55,hemiSky:15255968,hemiGround:6248010,exp:1.05,lit:0,lampK:1,starK:0},SUNSET:{sunC:16744013,sunI:1.4,el:6,az:262,sky:[5926824,16752228],fog:13216143,hemi:.45,hemiSky:9076672,hemiGround:4866104,exp:1.05,lit:.25,lampK:1,starK:.05},BLUE_HOUR:{sunC:8029951,sunI:.35,el:-4,az:290,sky:[1450573,12151374],fog:5922694,hemi:.35,hemiSky:4874144,hemiGround:3025448,exp:.9,lit:.8,lampK:1,starK:.3},NIGHT:{sunC:9414872,sunI:.22,el:28,az:300,sky:[395798,1055795],fog:725536,hemi:.18,hemiSky:2371676,hemiGround:658450,exp:.95,lit:1,lampK:1,starK:.9},MOONLIT:{sunC:12176639,sunI:1.1,el:48,az:40,sky:[330004,858160],fog:659746,hemi:.14,hemiSky:1713232,hemiGround:329484,exp:.85,lit:1,lampK:1,starK:1},RAIN_NIGHT:{sunC:5925514,sunI:.25,el:30,az:120,sky:[461588,1120294],fog:857119,hemi:.18,hemiSky:2765896,hemiGround:658448,exp:.8,lit:1,lampK:1.25,starK:.05},MIST_NIGHT:{sunC:6975622,sunI:.18,el:25,az:200,sky:[658708,1712168],fog:1317410,hemi:.2,hemiSky:3159615,hemiGround:790033,exp:.8,lit:1,lampK:1.1,starK:0}};function W_({renderer:i,scene:t,sun:e,hemi:n,skyMat:s=null,houses:r=[],lampGlows:a=[],lampLights:o=[],vendGlow:c=null,stars:l=null,moon:u=null}={}){let h="DAY",d="DAY",p=1,_=!1,x=0;const m=new Ut,f=new Ut,M=new Ut,g=new Ut,y=new Ut,b=new Ut,w=T("DAY"),A=T("DAY");function T(S){const P=Ml[S];return{...P,sky:[...P.sky]}}function v(S,P,D){const B=w,L=A,O=m.set(B.sunC).lerp(new Ut(L.sunC),P);if(e){const Z=1-(D?.dimK??0);e.color.copy(O),e.intensity=Ie.lerp(B.sunI,L.sunI,P)*Z;const tt=Ie.degToRad(Ie.lerp(B.el,L.el,P)),ut=Ie.degToRad(Ie.lerp(B.az,L.az,P));e.position.set(Math.cos(tt)*Math.cos(ut),Math.sin(tt),Math.cos(tt)*Math.sin(ut)).multiplyScalar(60)}if(f.set(B.sky[0]).lerp(new Ut(L.sky[0]),P),M.set(B.sky[1]).lerp(new Ut(L.sky[1]),P),s?.uniforms?(s.uniforms.topColor?.value.copy(f),s.uniforms.bottomColor?.value.copy(M),s.uniforms.top&&s.uniforms.top.value.copy(f),s.uniforms.mid&&s.uniforms.mid.value.copy(M),s.uniforms.bot&&s.uniforms.bot.value.copy(M).multiplyScalar(.82)):t?.background?.isColor&&t.background.copy(M),g.set(B.fog).lerp(new Ut(L.fog),P),t?.fog){t.fog.color.copy(g);const Z=D?.mistK??0,tt=D?.rainK??0;t.fog.near=Ie.lerp(30,8,Z)-tt*6,t.fog.far=Ie.lerp(140,45,Z)-tt*25}n&&(n.intensity=Ie.lerp(B.hemi,L.hemi,P),B.hemiSky!==void 0&&(n.color.copy(y.set(B.hemiSky).lerp(new Ut(L.hemiSky),P)),n.groundColor.copy(b.set(B.hemiGround).lerp(new Ut(L.hemiGround),P)))),i&&(i.toneMappingExposure=Ie.lerp(B.exp,L.exp,P));const F=Ie.lerp(B.lit??0,L.lit??0,P),k=Ie.lerp(B.lampK??1,L.lampK??1,P),H=Ie.lerp(B.starK??0,L.starK??0,P),q=F;for(const Z of r)for(const tt of Z.glowMats||[])tt.emissiveIntensity=q*(Z.name==="hero"?1.6:.9);for(const Z of a)Z.emissiveIntensity=F*2.2*k;for(const Z of o)Z.intensity=F*14*k;c&&(c.emissiveIntensity=.4+F*1.6),l&&(l.material.opacity=F*H),u&&(u.material.opacity=F)}return{get state(){return p>=1?d:`${h}>${d}`},get auto(){return _},set(S){const P=String(S).toUpperCase().replace(/[\s-]+/g,"_");Ml[P]&&P!==d&&(Object.assign(w,T((p>=1,d))),h=p>=1?d:h,Object.assign(A,T(P)),d=P,p=0)},cycle(){this.set(Io[(Io.indexOf(d)+1)%Io.length])},toggleAuto(){return _=!_,_},update(S,P){_&&(x+=S,x>14&&(x=0,this.cycle())),p=Math.min(1,p+S/2.5);const D=p*p*(3-2*p);v(d,D,P)}}}function X_(i){const t=new Zt;t.name="night_sky";const e=400,n=new Float32Array(e*3);for(let l=0;l<e;l++){const u=Math.random()*Math.PI*2,h=Math.random()*Math.PI*.45+.08,d=120;n[l*3]=Math.cos(u)*Math.cos(h)*d,n[l*3+1]=Math.sin(h)*d,n[l*3+2]=Math.sin(u)*Math.cos(h)*d}const s=new ge;s.setAttribute("position",new Re(n,3));const r=new ua(s,new Dr({color:13623551,size:.7,transparent:!0,opacity:0,depthWrite:!1}));r.frustumCulled=!1,t.add(r);const a=new rt(new $n(3,24),new Jn({color:15265791,transparent:!0,opacity:0,fog:!1}));a.position.set(-60,42,-80),a.lookAt(0,0,0),t.add(a);const o=new Ko(10336488,0);o.position.copy(a.position),t.add(o),t.userData.setMoon=l=>{o.intensity=l*.35};const c=t.userData.setMoon;return i.add(t),{stars:r,moon:a,moonLight:o,setMoon:c}}function Y_(i){const t=i<0?0:i>1?1:i;return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}const oe=[{n:"01 MOON FOREST ESTABLISHING",pos:[-28,14,-22],tgt:[0,2,4],fov:55,rail:{to:[-24,13,-18],tgtTo:null,period:14},mood:null,focus:{target:[0,2,4],dist:38},intent:"Moonlit canopy edge first, then eye drops to the lit village bowl."},{n:"02 LANTERN ALLEY",pos:[-5.9,1.6,-8],tgt:[-5.9,1.9,6],fov:50,rail:{to:[-5.9,1.6,1.5],tgtTo:[-5.9,1.9,8],period:12},mood:null,focus:{target:[-5.9,1.9,2],dist:10},intent:"Nearest lantern glow first, then eye travels down the alley line."},{n:"03 ROOF REVEAL",pos:[.5,5.4,1],tgt:[0,4,-1.2],fov:40,rail:{to:[3.8,6.6,6.8],tgtTo:[0,3.2,-1],period:12},mood:null,focus:{target:[0,4,-1],dist:3.5},intent:"Hero tile texture first, then rail pull reveals the ridge line."},{n:"04 MAPLE FOREGROUND",pos:[-4.9,2.7,5.6],tgt:[.5,2,-1.2],fov:45,rail:{to:[-3.6,2.6,5.2],tgtTo:null,period:10},mood:null,focus:{target:[.5,2,-1.2],dist:8.5},intent:"Red maple leaves first framing the edge, then hero house snaps into view."},{n:"05 POND",pos:[-8.6,1.7,13.4],tgt:[-4.2,.8,12.4],fov:50,rail:{to:[-3.4,1.7,13.4],tgtTo:[-6.5,.8,12.8],period:14},mood:null,focus:{target:[-6,.8,13],dist:4.5},intent:"Pond ripple highlight first, then lateral drift carries eye across reflections."},{n:"06 RAIN STREET",pos:[2.2,1.7,6.6],tgt:[-5,1.9,8.6],fov:50,rail:{to:[-1.5,1.7,6.4],tgtTo:null,period:11},mood:{time:"RAIN_NIGHT",wx:"rainy"},focus:{target:[-4.2,1.8,8.9],dist:7.5},intent:"Wet lamp halo first, then eye slides along the rain-streaked street."},{n:"07 MACHIYA ENTRANCE",pos:[6.6,1.9,6.2],tgt:[-.5,1.6,-.5],fov:40,rail:{to:[4.8,1.8,5],tgtTo:null,period:10},mood:null,focus:{target:[0,1.6,0],dist:9},intent:"Lattice doorway warmth first, then 3/4 facade and tiles read as one."},{n:"08 GARDEN PASSAGE",pos:[2.6,1.1,-6.8],tgt:[-2.2,1.3,-1.5],fov:50,rail:{to:[.8,1.1,-4.8],tgtTo:null,period:11},mood:null,focus:{target:[-2,1.2,-2],dist:6},intent:"Near planting leaves first, then low passage funnels eye to the court."},{n:"09 GOLDEN HOUR",pos:[-18,3.4,7.2],tgt:[12,2,7],fov:32,rail:{to:[-14,3,7.4],tgtTo:null,period:14},mood:{time:"GOLDEN",wx:"clear"},focus:{target:[0,2,7],dist:20},intent:"Long warm street axis first, then compressed facades glow edge to edge."},{n:"10 BLUE HOUR",pos:[12.5,5.5,-6],tgt:[0,2,4],fov:40,rail:{to:[9.5,5,-3.5],tgtTo:null,period:13},mood:{time:"BLUE_HOUR",wx:"clear"},focus:{target:[0,2,4],dist:16},intent:"Cool sky gradient first, then village lights detach from dusk."},{n:"11 MOONLIT ROOFLINE",pos:[14.5,4.6,10.5],tgt:[-20,5,-20],fov:24,rail:{to:[12.5,4.4,9],tgtTo:null,period:15},mood:{time:"MOONLIT",wx:"clear"},focus:{target:[-5,4.5,-6],dist:32},intent:"Stacked roof silhouettes first, then eye runs the telephoto line toward moon azimuth."},{n:"12 FINAL REVEAL",pos:[18,9.5,18.5],tgt:[-8,3,-8],fov:45,rail:{to:[15,8.5,16],tgtTo:null,period:16},mood:{time:"MIST_NIGHT",wx:"misty"},focus:{target:[-4,2.5,0],dist:34},intent:"Whole village bowl and moon glow first, then mist softens the far treeline."}];function q_(i,t){let e=0,n="orbit",s=!1,r=0;const a=9;let o=0,c=null,l=null;const u=new I().fromArray(oe[0].pos);new I().fromArray(oe[0].pos);const h=new I().fromArray(oe[0].tgt);new I().fromArray(oe[0].tgt),oe[0].fov;function d(g,y){return y.fromArray(oe[g].pos)}function p(g,y,b){b.fromArray(oe[g].pos);const w=oe[g].rail;if(w&&w.to){const A=w.to[0],T=w.to[1],v=w.to[2];b.set(b.x+(A-oe[g].pos[0])*y,b.y+(T-oe[g].pos[1])*y,b.z+(v-oe[g].pos[2])*y)}return b}function _(g,y){return y.fromArray(oe[g].tgt)}function x(g,y,b){b.fromArray(oe[g].tgt);const w=oe[g].rail;return w&&w.tgtTo&&b.set(b.x+(w.tgtTo[0]-oe[g].tgt[0])*y,b.y+(w.tgtTo[1]-oe[g].tgt[1])*y,b.z+(w.tgtTo[2]-oe[g].tgt[2])*y),b}function m(g,y=2.5){const b=oe.length,w=(g%b+b)%b;l={fp:i.position.clone(),tp:new I().fromArray(oe[w].pos),ft:t?t.target.clone():new I().fromArray(oe[w].tgt),tt:new I().fromArray(oe[w].tgt),ff:i.fov,tf:oe[w].fov,t:0,dur:Math.max(.01,y)},e=w,r=0,o=0}function f(g){d(g,i.position),t&&(_(g,t.target),t.update()),i.fov=oe[g].fov,i.updateProjectionMatrix()}const M={get idx(){return e},get mode(){return n},get label(){return n==="orbit"?"orbit":oe[e].n},get count(){return oe.length},get names(){return oe.map(g=>g.n)},setMode(g){return n=String(g),r=0,t&&(t.enabled=n!=="cine"),n==="cine"&&f(e),n},goTo(g,y=2.5,b=!1){const w=oe.length,A=(g%w+w)%w;if(m(A,y),b&&c&&oe[A].mood)try{c(oe[A].mood)}catch{}return e},onMood(g){return typeof g=="function"&&(c=g),M},next(){return M.goTo(e+1,2.5,!1)},prev(){return M.goTo(e-1,2.5,!1)},toggleAdvance(){return s=!s,r=0,s},update(g){const y=Math.min(Math.max(g||0,0),.1);if(o+=y,n==="free"||n==="orbit"){t&&t.update();return}if(s&&!l&&(r+=y,r>=a&&M.next()),l){l.t+=y;const T=Y_(l.t/l.dur);i.position.lerpVectors(l.fp,l.tp,T);const v=new I().lerpVectors(l.ft,l.tt,T);t&&t.target.copy(v),i.fov=l.ff+(l.tf-l.ff)*T,i.updateProjectionMatrix(),l.t>=l.dur&&(l=null,o=0),t&&t.update();return}const b=oe[e].rail&&oe[e].rail.period||12,w=.5+.5*Math.sin(o/b*Math.PI*2-Math.PI/2);p(e,w,u),x(e,w,h),i.position.copy(u),t&&t.target.copy(h);const A=oe[e].fov;Math.abs(i.fov-A)>.01&&(i.fov+=(A-i.fov)*Math.min(1,y*2),i.updateProjectionMatrix()),t&&t.update()}};return M}function j_(i){i=i||{};var t=i.daytime||{},e=i.weather||{},n=i.cine||{},s=i.hudEl||null,r=i.audio||null,a=["DAWN","DAY","GOLDEN","SUNSET","BLUE_HOUR","NIGHT","MOONLIT","RAIN_NIGHT","MIST_NIGHT"],o={DAWN:"DAWN",DAY:"DAY",GOLDEN:"GOLDEN",SUNSET:"SUNSET",BLUE_HOUR:"BLUE",NIGHT:"NIGHT",MOONLIT:"MOON",RAIN_NIGHT:"RAIN",MIST_NIGHT:"MIST"},c=["clear","windy","rainy","misty"],l={clear:"CLEAR",windy:"WINDY",rainy:"RAIN",misty:"MIST"},u=["low","medium","high","cinematic"],h={low:"LOW",medium:"MED",high:"HIGH",cinematic:"CINE"},d={low:"off",medium:"off",high:"off",cinematic:"high"},p="20260911";function _(at){return typeof at=="function"?at():at}function x(at,Dt){try{return at==null?Dt:String(at)}catch{return Dt}}function m(at,Dt,$t){var ie=document.createElement(at);return Dt&&(ie.className=Dt),$t!=null&&(ie.textContent=$t),ie}function f(at,Dt){try{at.addEventListener("click",function($t){try{$t.stopPropagation()}catch{}try{Dt()}catch{}})}catch{}}var M=!1;try{M=window.innerWidth<700}catch{M=!0}var g=M,y=!1,b="time",w=M?"medium":"high",A=!0,T=!1,v=!1,S="",P="",D=0,B=!1;try{B=/[?&]dev=1\b/.test(window.location.search||"")}catch{B=!1}var L='.tsuki-root{position:fixed;inset:0;z-index:20;pointer-events:none;font-family:system-ui,-apple-system,"Hiragino Sans","Noto Sans JP",sans-serif;color:#f2efe6;}.tsuki-root button,.tsuki-root input,.tsuki-l1,.tsuki-l2{pointer-events:auto;}.tsuki-l1{position:fixed;top:calc(env(safe-area-inset-top,0px) + 12px);right:calc(env(safe-area-inset-right,0px) + 12px);background:rgba(9,11,18,.55);-webkit-backdrop-filter:blur(18px) saturate(1.4);backdrop-filter:blur(18px) saturate(1.4);border:1px solid rgba(255,255,255,.14);border-radius:14px;box-shadow:0 4px 18px rgba(0,0,0,.35);padding:8px 10px;min-width:172px;max-width:62vw;display:flex;align-items:center;gap:8px;}.tsuki-title{font-size:12px;letter-spacing:.22em;font-weight:650;white-space:nowrap;}.tsuki-title .jp{font-weight:400;opacity:.75;letter-spacing:.35em;margin-left:6px;}#du-state{font-size:11px;letter-spacing:.08em;opacity:.85;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.tsuki-chev{margin-left:auto;min-width:44px;min-height:44px;border-radius:10px;border:1px solid rgba(255,255,255,.16);background:rgba(255,255,255,.07);color:#f2efe6;font-size:15px;line-height:1;}.tsuki-l2{position:fixed;top:calc(env(safe-area-inset-top,0px) + 96px);right:calc(env(safe-area-inset-right,0px) + 12px);width:300px;max-height:calc(100vh - 130px);overflow-y:auto;-webkit-overflow-scrolling:touch;background:rgba(9,11,18,.72);-webkit-backdrop-filter:blur(18px) saturate(1.4);backdrop-filter:blur(18px) saturate(1.4);border:1px solid rgba(255,255,255,.12);border-radius:16px;box-shadow:0 8px 28px rgba(0,0,0,.45);padding:6px 6px calc(env(safe-area-inset-bottom,0px) + 8px);}.tsuki-sec{border-top:1px solid rgba(255,255,255,.08);}.tsuki-sec:first-child{border-top:none;}.tsuki-sec-head{display:flex;width:100%;min-height:44px;align-items:center;background:none;border:none;color:#f2efe6;font-size:11px;letter-spacing:.24em;padding:6px 10px;}.tsuki-sec-head .dot{width:6px;height:6px;border-radius:50%;background:#c8a86a;margin-right:8px;opacity:.9;}.tsuki-sec-head .st{margin-left:auto;opacity:.55;font-size:10px;letter-spacing:.1em;}.tsuki-sec-body{padding:2px 8px 12px;display:none;}.tsuki-sec.open .tsuki-sec-body{display:block;}.tsuki-row{display:flex;flex-wrap:wrap;gap:6px;}.tsuki-seg{flex:1 1 30%;min-height:44px;min-width:44px;border-radius:9px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);color:#f2efe6;font-size:11px;letter-spacing:.06em;}.tsuki-seg.on{background:rgba(200,168,106,.22);border-color:rgba(200,168,106,.65);}.tsuki-shotname{font-size:17px;letter-spacing:.04em;margin:2px 2px 0;font-weight:650;}.tsuki-mood{font-size:11px;letter-spacing:.2em;opacity:.7;margin:2px;}.tsuki-counter{font-size:11px;letter-spacing:.14em;opacity:.55;margin:0 2px 8px;}.tsuki-trans{display:flex;gap:6px;margin-bottom:8px;}.tsuki-trans button{flex:1;min-height:44px;border-radius:9px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);color:#f2efe6;font-size:12px;}.tsuki-present-btn{width:100%;min-height:44px;border-radius:9px;border:1px solid rgba(200,168,106,.6);background:rgba(200,168,106,.14);color:#f2efe6;font-size:11px;letter-spacing:.22em;margin-bottom:8px;}.tsuki-l3{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:6px;}.tsuki-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px;}.tsuki-grid button{min-height:44px;border-radius:8px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04);color:#f2efe6;font-size:11px;text-align:left;padding:0 10px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.tsuki-grid button.on{background:rgba(200,168,106,.22);border-color:rgba(200,168,106,.65);}.tsuki-track{font-size:12px;margin:2px 2px 8px;opacity:.9;}.tsuki-vol{display:flex;align-items:center;gap:8px;margin:0 2px 6px;}.tsuki-vol input{flex:1;min-height:44px;}.tsuki-note{font-size:11px;line-height:1.5;opacity:.65;margin:4px 2px;font-family:ui-monospace,Menlo,monospace;}.tsuki-about{font-size:11px;line-height:1.9;letter-spacing:.18em;opacity:.8;padding:2px;}.tsuki-root.tsuki-present .tsuki-l1,.tsuki-root.tsuki-present .tsuki-l2{display:none;}.tsuki-anim{transition:opacity .22s ease-out,transform .22s ease-out;}.tsuki-dev{position:fixed;right:calc(env(safe-area-inset-right,0px) + 10px);bottom:calc(env(safe-area-inset-bottom,0px) + 10px);z-index:21;pointer-events:none;background:rgba(0,0,0,.72);border:1px solid rgba(255,255,255,.14);border-radius:8px;padding:8px 10px;font-family:ui-monospace,Menlo,monospace;font-size:10.5px;line-height:1.65;color:#cfe3cf;white-space:pre;max-width:70vw;overflow:hidden;}@media (max-width:700px) and (orientation:portrait){.tsuki-l2{top:auto;bottom:0;right:0;left:0;width:auto;border-radius:16px 16px 0 0;max-height:45vh;padding-bottom:calc(env(safe-area-inset-bottom,0px) + 10px);}.tsuki-l1{max-width:calc(100vw - 24px);}}@media (max-width:700px) and (orientation:landscape){.tsuki-l2{width:278px;max-height:72vh;top:calc(env(safe-area-inset-top,0px) + 88px);}}';try{var O=document.createElement("style");O.setAttribute("data-tsuki","1"),O.textContent=L,document.head.appendChild(O)}catch{}var F=m("div","tsuki-root tsuki-anim"),k=m("div","tsuki-l1"),H=m("div",null),q=m("div","tsuki-title","TSUKIMORI");try{var Z=m("span","jp","月森");q.appendChild(Z)}catch{}var tt=m("div",null);try{tt.id="du-state"}catch{}H.appendChild(q),H.appendChild(tt);var ut=m("button","tsuki-chev","▾");try{ut.setAttribute("aria-label","toggle panel")}catch{}k.appendChild(H),k.appendChild(ut),F.appendChild(k);var Y=m("div","tsuki-l2");F.appendChild(Y);var Q={};function mt(at,Dt){var $t=m("div","tsuki-sec"),ie=m("button","tsuki-sec-head");try{ie.setAttribute("aria-expanded","false")}catch{}var Oe=m("span","dot"),Ge=m("span",null,Dt),On=m("span","st","");ie.appendChild(Oe),ie.appendChild(Ge),ie.appendChild(On);var vn=m("div","tsuki-sec-body");return $t.appendChild(ie),$t.appendChild(vn),Y.appendChild($t),Q[at]={sec:$t,head:ie,tag:On},f(ie,function(){bt(b===at?"":at)}),vn}function bt(at){b=at;try{for(var Dt in Q)if(Object.prototype.hasOwnProperty.call(Q,Dt)){var $t=Dt===b,ie=Q[Dt];ie.sec.className="tsuki-sec"+($t?" open":"");try{ie.head.setAttribute("aria-expanded",$t?"true":"false")}catch{}}}catch{}}var Tt=mt("time","TIME"),X=m("div","tsuki-row");Tt.appendChild(X);var ot={};a.forEach(function(at){var Dt=m("button","tsuki-seg",o[at]||at);try{Dt.title=at}catch{}X.appendChild(Dt),ot[at]=Dt,f(Dt,function(){try{t.set(at)}catch{}ce()})});var _t=mt("weather","WEATHER"),Ct=m("div","tsuki-row");_t.appendChild(Ct);var U={};c.forEach(function(at){var Dt=m("button","tsuki-seg",l[at]||at.toUpperCase());Ct.appendChild(Dt),U[at]=Dt,f(Dt,function(){try{e.setState(at)}catch{}ce()})});var it=mt("cine","CINEMATIC"),K=m("div","tsuki-shotname","—"),ct=m("div","tsuki-mood","—"),$=m("div","tsuki-counter","—");it.appendChild(K),it.appendChild(ct),it.appendChild($);var Et=m("div","tsuki-trans"),gt=m("button",null,"◀"),R=m("button",null,"❚❚ ADV"),E=m("button",null,"▶"),G=m("button",null,"MODE"),et=m("button",null,"AUTO");[gt,R,E,G,et].forEach(function(at){Et.appendChild(at)}),it.appendChild(Et);var st=m("button","tsuki-present-btn","ENTER CINEMATIC");it.appendChild(st);var lt=m("div","tsuki-l3"),Lt=m("div","tsuki-grid");lt.appendChild(Lt),it.appendChild(lt);var St=[];function Rt(){try{if(n&&Object.prototype.toString.call(n.names)==="[object Array]"&&n.names.length)return n.names}catch{}for(var at=[],Dt=0;Dt<12;Dt++)at.push("SHOT "+("0"+(Dt+1)).slice(-2));return at}f(gt,function(){try{n.prev()}catch{}ce()}),f(E,function(){try{n.next()}catch{}ce()}),f(R,function(){try{n.toggleAdvance()}catch{}A=!A,ce()}),f(G,function(){try{n.setMode(_(n.mode)==="cine"?"free":"cine")}catch{}ce()}),f(et,function(){try{t.toggleAuto()}catch{}T=!T,ce()}),f(st,function(){Ft(!y)});function zt(){try{Lt.textContent="",St=[];for(var at=Rt(),Dt=0;Dt<at.length;Dt++)(function($t,ie){var Oe=m("button",null,("0"+($t+1)).slice(-2)+" · "+ie);Lt.appendChild(Oe),St.push(Oe),f(Oe,function(){try{n.setMode("cine")}catch{}try{n.goTo($t,2.5,!0)}catch{}ce()})})(Dt,x(at[Dt],"SHOT"))}catch{}}zt();var Vt=mt("audio","AUDIO"),dt=m("div","tsuki-track","♫ Suzume");Vt.appendChild(dt);var qt=m("div","tsuki-row"),N=m("button","tsuki-seg","MUSIC OFF");qt.appendChild(N),Vt.appendChild(qt);var ht=m("div","tsuki-vol"),yt=m("span",null,"VOL");try{yt.style.fontSize="11px",yt.style.opacity=".6"}catch{}var ft=m("input",null);try{ft.type="range",ft.min="0",ft.max="100",ft.value="80",ft.setAttribute("aria-label","music volume")}catch{}ht.appendChild(yt),ht.appendChild(ft),Vt.appendChild(ht);var It=m("div","tsuki-note","");if(Vt.appendChild(It),!r){try{N.disabled=!0,ft.disabled=!0}catch{}It.textContent="audio offline — running silent"}f(N,function(){if(r){var at=!v;try{var Dt=r.state?r.state():null;Dt&&typeof Dt.enabled=="boolean"&&(at=!Dt.enabled)}catch{}try{r.setEnabled(at)}catch{}v=at,ce()}});try{ft.addEventListener("input",function(){if(r)try{var at=parseFloat(ft.value)/100;at>=0||(at=0),at>1&&(at=1),r.setVolume(at)}catch{}})}catch{}var jt=mt("quality","QUALITY"),Jt=m("div","tsuki-row");jt.appendChild(Jt);var Xt={};u.forEach(function(at){var Dt=m("button","tsuki-seg",h[at]);Jt.appendChild(Dt),Xt[at]=Dt,f(Dt,function(){Mt(at)})});function Mt(at){w=at;try{window.dispatchEvent(new CustomEvent("tsuki-quality",{detail:at}))}catch{}try{window.__post&&typeof window.__post.setQuality=="function"&&window.__post.setQuality(d[at]||"off")}catch{}ce()}var z=mt("about","ABOUT"),vt=m("div","tsuki-about","TSUKIMORI 月森 / THE MOON FOREST / LGCY STUDIOS / LGCY AI");z.appendChild(vt);var pt=null;if(B)try{pt=m("pre","tsuki-dev","dev…"),document.body.appendChild(pt)}catch{pt=null}function Ft(at){y=!!at;try{if(y){try{var Dt=document.getElementById("caption");Dt&&(P=Dt.style.display,Dt.style.display="none")}catch{}try{s&&(S=s.style.display,s.style.display="none")}catch{}F.className="tsuki-root tsuki-anim tsuki-present";try{st.textContent="EXIT CINEMATIC"}catch{}}else{try{var $t=document.getElementById("caption");$t&&($t.style.display=P||"")}catch{}try{s&&(s.style.display=S||"")}catch{}F.className="tsuki-root tsuki-anim";try{st.textContent="ENTER CINEMATIC"}catch{}}}catch{}ce()}function Ot(){g=!g;try{Y.style.display=g?"none":"",ut.textContent=g?"▸":"▾"}catch{}}f(ut,Ot);function ne(at){try{if(at&&at.target&&at.target.closest){var Dt=at.target;if(Dt.closest(".tsuki-l2")||Dt.closest("input")||Dt.closest("select")||Dt.closest("textarea"))return}}catch{}Ft(!y)}try{window.addEventListener("dblclick",ne)}catch{}try{window.addEventListener("touchend",function(at){try{var Dt=Date.now();Dt-D<350?(D=0,ne(at)):D=Dt}catch{}},{passive:!0})}catch{}try{document.addEventListener("keydown",function(at){try{at&&at.key==="Escape"&&y&&Ft(!1)}catch{}})}catch{}function se(){try{return x(_(t.state),"NIGHT")}catch{return"NIGHT"}}function Ee(){try{return x(_(e.state),"clear")}catch{return"clear"}}function ce(){try{var at=se(),Dt=Ee(),$t=o[at]||at,ie=l[Dt]||String(Dt).toUpperCase(),Oe="FREE";try{Oe=x(_(n.label),"FREE")||"FREE"}catch{}var Ge=0,On=Rt().length;try{Ge=parseInt(n.idx,10),Ge>=0||(Ge=0)}catch{}try{On=parseInt(n.count,10)||Rt().length}catch{}var vn=("0"+(Ge+1)).slice(-2),bi=("0"+On).slice(-2);try{tt.textContent=$t+" · "+ie+" · "+Oe}catch{}try{s&&(s.textContent="TSUKIMORI 月森 — "+$t+" · "+ie+" · "+Oe+" | SHOT "+vn+"/"+bi)}catch{}try{var kr=Rt();K.textContent=x(kr[Ge]||Oe,Oe),ct.textContent=$t+" · "+ie,$.textContent="SHOT "+vn+"/"+bi}catch{}try{for(var Ti=0;Ti<St.length;Ti++)St[Ti].className=Ti===Ge?"on":""}catch{}try{for(var C in ot)Object.prototype.hasOwnProperty.call(ot,C)&&(ot[C].className="tsuki-seg"+(C===at?" on":""));for(var V in U)Object.prototype.hasOwnProperty.call(U,V)&&(U[V].className="tsuki-seg"+(V===Dt?" on":""));for(var j in Xt)Object.prototype.hasOwnProperty.call(Xt,j)&&(Xt[j].className="tsuki-seg"+(j===w?" on":""))}catch{}try{var J=x(_(n.mode),"");G.textContent="MODE "+(J?J.toUpperCase():"—"),R.textContent=(A?"❚❚":"▶")+" ADV",et.textContent="AUTO "+(T?"ON":"OFF")}catch{}try{Q.time&&(Q.time.tag.textContent=$t),Q.weather&&(Q.weather.tag.textContent=ie),Q.cine&&(Q.cine.tag.textContent=vn+"/"+bi),Q.quality&&(Q.quality.tag.textContent=h[w]||"")}catch{}try{if(r&&typeof r.state=="function"){var W=null;try{W=r.state()}catch{W=null}W&&(typeof W.enabled=="boolean"&&(v=W.enabled),dt.textContent="♫ "+x(W.track,"Suzume")+(W.playing?" — PLAYING":""),N.textContent=v?"MUSIC ON":"MUSIC OFF",N.className="tsuki-seg"+(v?" on":""),It.textContent=W.missing?"drop audio/suzume.mp3 into public/audio/":"")}else r&&(N.textContent=v?"MUSIC ON":"MUSIC OFF",It.textContent="")}catch{}if(B&&pt){var At=[];try{var Nt="n/a",Bt="n/a",Gt="n/a";try{var kt=typeof window.__perf=="function"?window.__perf():window.__perf;kt&&(kt.fps!==void 0&&(Nt=String(kt.fps)),kt.calls!==void 0&&(Bt=String(kt.calls)),kt.tris!==void 0&&(Gt=String(kt.tris)),kt.draws!==void 0&&Bt==="n/a"&&(Bt=String(kt.draws)),kt.triangles!==void 0&&Gt==="n/a"&&(Gt=String(kt.triangles)))}catch{}var Wt="n/a";try{window.__post&&(typeof window.__post.quality=="string"?Wt=window.__post.quality:typeof window.__post.getQuality=="function"?Wt=String(window.__post.getQuality()):typeof window.__post.current=="string"&&(Wt=window.__post.current))}catch{}var Yt="n/a",pe="n/a";try{window.__cam&&(window.__cam.pos&&window.__cam.pos.length>=3&&(Yt=window.__cam.pos[0].toFixed(1)+","+window.__cam.pos[1].toFixed(1)+","+window.__cam.pos[2].toFixed(1)),window.__cam.tgt&&window.__cam.tgt.length>=3&&(pe=window.__cam.tgt[0].toFixed(1)+","+window.__cam.tgt[1].toFixed(1)+","+window.__cam.tgt[2].toFixed(1)))}catch{}At.push("FPS "+Nt+"  calls "+Bt+"  tris "+Gt),At.push("gl WebGL2  post "+Wt+"  seed "+p),At.push("cam "+Yt+"  tgt "+pe),At.push($t+" · "+ie+" · "+Oe),pt.textContent=At.join(`
`)}catch{}}}catch{}}try{document.body.appendChild(F)}catch{}try{Y.style.display=g?"none":"",ut.textContent=g?"▸":"▾"}catch{}bt(b),ce();var le=null;try{le=setInterval(ce,250)}catch{}function Ne(){try{le&&clearInterval(le)}catch{}try{window.removeEventListener("dblclick",ne)}catch{}try{F&&F.parentNode&&F.parentNode.removeChild(F)}catch{}try{pt&&pt.parentNode&&pt.parentNode.removeChild(pt)}catch{}}return{root:F,refresh:ce,destroy:Ne,setQuality:Mt,setPresent:Ft}}const Uo={geo:null};function Ru(){return Uo.geo||(Uo.geo=new Ht(1,1,1)),Uo.geo}const Sl={A:[[0,0,0,4],[2,0,2,4],[0,4,2,4],[0,2,2,2]],B:[[0,0,0,4],[0,4,2,4],[0,2,2,2],[0,0,2,0],[2,4,2,2],[2,2,2,0]],C:[[2,4,0,4],[0,4,0,0],[0,0,2,0]],D:[[0,0,0,4],[0,4,2,4],[2,4,2,0],[2,0,0,0]],E:[[2,4,0,4],[0,4,0,0],[0,0,2,0],[0,2,2,2]],F:[[2,4,0,4],[0,4,0,0],[0,2,2,2]],G:[[2,4,0,4],[0,4,0,0],[0,0,2,0],[2,0,2,2],[2,2,1,2]],H:[[0,0,0,4],[2,0,2,4],[0,2,2,2]],I:[[0,4,2,4],[1,4,1,0],[0,0,2,0]],J:[[2,4,2,0],[2,0,0,0],[0,0,0,2]],K:[[0,0,0,4],[2,4,0,2],[0,2,2,0]],L:[[0,4,0,0],[0,0,2,0]],M:[[0,0,0,4],[0,4,1,2],[1,2,2,4],[2,4,2,0]],N:[[0,0,0,4],[0,4,2,0],[2,0,2,4]],O:[[0,0,0,4],[0,4,2,4],[2,4,2,0],[2,0,0,0]],P:[[0,0,0,4],[0,4,2,4],[2,4,2,2],[2,2,0,2]],Q:[[0,0,0,4],[0,4,2,4],[2,4,2,0],[2,0,0,0],[1,1,2,0]],R:[[0,0,0,4],[0,4,2,4],[2,4,2,2],[2,2,0,2],[1,2,2,0]],S:[[2,4,0,4],[0,4,0,2],[0,2,2,2],[2,2,2,0],[2,0,0,0]],T:[[0,4,2,4],[1,4,1,0]],U:[[0,4,0,0],[0,0,2,0],[2,0,2,4]],V:[[0,4,1,0],[1,0,2,4]],W:[[0,4,0,0],[0,0,1,2],[1,2,2,0],[2,0,2,4]],X:[[0,0,2,4],[0,4,2,0]],Y:[[0,4,1,2],[2,4,1,2],[1,2,1,0]],Z:[[0,4,2,4],[2,4,0,0],[0,0,2,0]],0:[[0,0,0,4],[0,4,2,4],[2,4,2,0],[2,0,0,0],[0,0,2,4]],1:[[1,4,1,0],[0,0,2,0]],2:[[0,4,2,4],[2,4,2,2],[2,2,0,2],[0,2,0,0],[0,0,2,0]],3:[[0,4,2,4],[2,4,2,0],[0,2,2,2],[0,0,2,0]],4:[[0,4,0,2],[0,2,2,2],[2,4,2,0]],5:[[2,4,0,4],[0,4,0,2],[0,2,2,2],[2,2,2,0],[2,0,0,0]],6:[[2,4,0,4],[0,4,0,0],[0,0,2,0],[0,2,2,2],[2,2,2,0]],7:[[0,4,2,4],[2,4,0,0]],8:[[0,0,0,4],[0,4,2,4],[2,4,2,0],[2,0,0,0],[0,2,2,2]],9:[[2,0,0,0],[0,0,0,4],[0,4,2,4],[2,4,2,0],[0,2,2,2]]," ":[],"•":[[1,2,1,2]],".":[[1,0,1,0]],"-":[[0,2,2,2]],"/":[[0,0,2,4]],"&":[[0,0,0,4],[0,4,2,4],[2,4,2,2],[0,2,2,0],[2,0,0,0]],"©":null,月:[[0,0,0,4],[2,0,2,4],[0,4,2,4],[0,0,2,0],[0,2.6,2,2.6],[0,1.3,2,1.3]],森:"COMPOUND_MORI"};function K_(){const i=[],t=(e,n,s,r)=>{i.push([e,n,e,n+r]),i.push([e-s/2,n+r,e+s/2,n+r]),i.push([e-s/2,n+r*.55,e+s/2,n+r*.55]),i.push([e-s*.28,n,e+s*.28,n])};return t(1,2.2,1.7,1.8),t(.35,0,1.1,1.9),t(1.65,0,1.1,1.9),i}function Z_(i){return i==="森"?K_():i==="©"?[[.2,0,.2,4],[.2,4,1.8,4],[1.8,4,1.8,0],[1.8,0,.2,0],[.5,1.2,1.5,1.2],[.5,2.8,1.5,2.8]]:Sl[i]??Sl["-"]}function fi(i,{size:t=.22,tracking:e=.32,thickness:n=.13,depth:s=.035}={}){const r=2*(t/4)+e*t,a=t/4,o=t/4,c=[];let l=0;const u=String(i).toUpperCase();for(const h of u){if(h===" "){l+=r;continue}for(const[d,p,_,x]of Z_(h)){const m=d===_&&p===x,f=l+d*a,M=p*o,g=l+_*a,y=x*o,b=g-f,w=y-M,A=Math.hypot(b,w),T=n*t;m?c.push({x:f,y:M,len:T*1.1,ang:0,t:T,sq:!0}):c.push({x:(f+g)/2,y:(M+y)/2,len:A+T*.9,ang:Math.atan2(w,b),t:T})}l+=r}return{strokes:c,width:Math.max(0,l-e*t),depth:s}}function Jo(i,t,{depth:e=.035}={}){const n=[];for(const h of i){const{strokes:d}=fi(h.text,h);for(const p of d)n.push({...p,ox:h.ox||0,oy:h.oy||0,oz:h.oz||0,depth:h.depth??e})}const s=Ru(),r=new Ue(s,t,Math.max(1,n.length)),a=new re,o=new mn,c=new Nn,l=new I,u=new I;return n.forEach((h,d)=>{c.set(0,0,h.ang),o.setFromEuler(c),l.set(h.ox+h.x,h.oy+h.y,h.oz),u.set(h.len,h.t,h.depth),h.sq&&u.set(h.t,h.t,h.depth*.7),a.compose(l,o,u),r.setMatrixAt(d,a)}),r.instanceMatrix.needsUpdate=!0,r.castShadow=!1,r.receiveShadow=!1,r.frustumCulled=!0,r}function Cu(i){const t=(e,n=.85,s={})=>new xt({color:e,roughness:n,metalness:0,...s});return{post:i?.woodAged||i?.woodDark||i?.wood||t(3812382,.9),beam:i?.woodDark||i?.woodAged||i?.wood||t(3023640,.9),board:i?.woodNew||i?.wood||t(4864550,.85),stone:i?.stone||i?.stoneDark||i?.rock||t(9078136,.95),bronze:i?.bronze||i?.brass||i?.iron||t(9202490,.45,{metalness:.85}),glyphMain:i?.brass||t(13215850,.38,{metalness:.9}),glyphSub:i?.bronze||t(10124623,.5,{metalness:.8}),wash:new xt({color:2826520,emissive:16763274,emissiveIntensity:.55,roughness:.6})}}function en(i,t,e,n,s,r,a,o=0){const c=new rt(Ru(),n);return c.scale.set(i,t,e),c.position.set(s,r,a),c.rotation.y=o,c.castShadow=!0,c.receiveShadow=!0,c}function Pu(i,t){const e=new $n(1,20),n=new Jn({color:0,transparent:!0,opacity:.28,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),s=new rt(e,n);return s.rotation.x=-Math.PI/2,s.position.y=.03,s.scale.set(i,t,1),s.renderOrder=2,s}function wl(i,t,e,n){const s=new $n(1,12),r=new rt(s,new xt({color:4872755,roughness:1}));return r.rotation.x=-Math.PI/2,r.position.set(t,.035,e),r.scale.set(i,i*.8,1),r.receiveShadow=!0,r.renderOrder=1,r}function J_(i,t={}){const e=Cu(i),n=new Zt;n.name="tsukimori-main-sign";const s=3.4,r=2.5,a=.16;for(const A of[-1,1])n.add(en(.5,.28,.5,e.stone,A*(s/2),.14,0)),n.add(en(a,r,a,e.post,A*(s/2),.28+r/2,0)),n.add(en(.22,.06,.22,e.bronze,A*(s/2),.3,0));n.add(en(s+.5,.14,.2,e.beam,0,.28+r+.07,0)),n.add(en(s+.3,.1,.12,e.beam,0,.62,0));const o=s-.2,c=1.35,l=1.72,u=.02,h=en(o,c,.07,e.board,0,l,u);n.add(h),n.add(en(o+.1,.05,.1,e.beam,0,l+c/2+.03,u)),n.add(en(o+.1,.05,.1,e.beam,0,l-c/2-.03,u));for(const A of[-1,1])for(const T of[-1,1])n.add(en(.09,.09,.1,e.bronze,A*(o/2-.05),l+T*(c/2-.05),u));const d=u+.035+.075,p=A=>-A/2,_=fi("LGCY STUDIOS PRESENTS",{size:.115,tracking:.3}),x=fi("TSUKIMORI",{size:.3,tracking:.3}),m=fi("月森",{size:.3,tracking:.3}),f=fi("THE MOON FOREST",{size:.13,tracking:.3}),M=fi("BUILT WITH LGCY AI",{size:.1,tracking:.3}),g=Jo([{text:"TSUKIMORI",size:.3,tracking:.3,ox:p(x.width),oy:l+.28,oz:d},{text:"月森",size:.3,tracking:.3,ox:p(m.width),oy:l-.14,oz:d}],e.glyphMain),y=Jo([{text:"LGCY STUDIOS PRESENTS",size:.115,tracking:.3,ox:p(_.width),oy:l+.52,oz:d-.012},{text:"THE MOON FOREST",size:.13,tracking:.3,ox:p(f.width),oy:l-.44,oz:d-.012},{text:"BUILT WITH LGCY AI",size:.1,tracking:.3,ox:p(M.width),oy:l-.58,oz:d-.012}],e.glyphSub);n.add(g,y);const b=en(o-.2,.02,.02,e.wash,0,l+c/2-.06,u+.06);b.castShadow=!1,n.add(b);const w=new Hg(16767392,6,7,.55,.7,1.6);return w.position.set(0,2.6,1.6),w.target.position.set(0,l-.1,0),w.castShadow=!1,n.add(w,w.target),n.userData.signLight=w,n.userData.washMat=e.wash,n.add(Pu(2.3,.8)),n.add(wl(.3,-s/2,.32),wl(.26,s/2,-.3)),n.position.set(...t.pos||[6.5,0,14.5]),n.rotation.y=t.ry??-.5,n}function $_(i,t={}){const e=Cu(i),n=new Zt;n.name="lgcy-studio-plaque";for(const p of[-1,1])n.add(en(.07,.62,.07,e.post,p*.42,.31,0));const s=en(1.05,.52,.04,e.bronze,0,.62,.02);s.rotation.x=-.14,n.add(s);const r=.02+.02+.045,o=[{text:"LGCY STUDIOS",size:.085,tracking:.3,oy:.78},{text:"WORLD DESIGNED & BUILT WITH LGCY AI",size:.038,tracking:.28,oy:.66},{text:"PROCEDURAL ENVIRONMENT • CODE • AI",size:.038,tracking:.28,oy:.585},{text:"© 2026 LGCY STUDIOS",size:.038,tracking:.28,oy:.51}].map(p=>({...p,ox:-fi(p.text,p).width/2,oz:r})),c=Jo(o,e.glyphSub,{depth:.014});c.rotation.x=-.14,c.position.z=.005,n.add(c);const l=document.createElement("canvas");l.width=256,l.height=16;const u=l.getContext("2d");u.fillStyle="#3a2c16",u.fillRect(0,0,256,16),u.fillStyle="#d8b988",u.font="9px sans-serif",u.textAlign="center",u.fillText("tsukimori — moon forest district",128,11);const h=new Si(l);h.colorSpace=Se;const d=new rt(new ye(.7,.044),new xt({map:h,roughness:.5,metalness:.6}));return d.position.set(0,.44,.045),d.rotation.x=-.14,n.add(d),n.add(Pu(.8,.4)),n.position.set(...t.pos||[2.8,0,9.6]),n.rotation.y=t.ry??-.35,n}function Q_(i,t,e={}){const n=new Zt;n.name="signage";const s=J_(t,{pos:e.signPos,ry:e.signRy}),r=$_(t,{pos:e.plaquePos,ry:e.plaqueRy});return n.add(s,r),i.add(n),{group:n,sign:s,plaque:r,signLight:s.userData.signLight}}function tx(i={}){let t=i.fps&&i.fps>0?Math.floor(i.fps):30,e=0;const n=[];let s=typeof i.onShot=="function"?i.onShot:null;const r=c=>1/c,a=(c,l)=>c*(1/l),o={get frame(){return e},get fps(){return t},get t(){return a(e,t)},get dt(){return r(t)},setFps(c){return c&&c>0&&(t=Math.floor(c)),t},register(c){return typeof c!="function"?()=>{}:(n.includes(c)||n.push(c),()=>o.unregister(c))},unregister(c){const l=n.indexOf(c);return l>=0&&n.splice(l,1),n.length},clear(){n.length=0},onShot(c){s=typeof c=="function"?c:null},step(c){const l=c&&c>0?c:r(t);e+=1;const u=a(e,t);for(let h=0;h<n.length;h++)n[h](l,u,e);return{frame:e,t:u,dt:l}},renderFrame(c){e=Math.max(0,Math.floor(c));const l=r(t),u=a(e,t);for(let h=0;h<n.length;h++)n[h](l,u,e);return{frame:e,t:u,dt:l}},reset(){return e=0,{frame:e,t:0,dt:r(t)}},renderShot(c,l){return s&&s(c,Math.max(0,Math.floor(l))),{shotId:c,...o.renderFrame(l)}},renderSequence(c,l,u,h){const d=h&&h>0?Math.floor(h):t,p=Math.max(0,Math.floor(l)),_=Math.max(p,Math.floor(u)),x=[],m=[];for(let f=p;f<=_;f++)x.push(f),m.push(f*(1/d));return{shotId:c,fps:d,frames:x,times:m}}};return o}const Lu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class hs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ex=new aa(-1,1,1,-1,0,1);class nx extends ge{constructor(){super(),this.setAttribute("position",new ee([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ee([0,2,0,0,2,0],2))}}const ix=new nx;class Sa{constructor(t){this._mesh=new rt(ix,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,ex)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class sx extends hs{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ye?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Cs.clone(t.uniforms),this.material=new Ye({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Sa(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class El extends hs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class rx extends hs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class ox{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new nt);this._width=n.width,this._height=n.height,e=new dn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:In}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new sx(Lu),this.copyPass.material.blending=Dn,this.clock=new ya}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}El!==void 0&&(a instanceof El?n=!0:a instanceof rx&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ax extends hs{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ut}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const cx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ut(0)},defaultOpacity:{value:0}},vertexShader:`

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

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class os extends hs{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new nt(t.x,t.y):new nt(256,256),this.clearColor=new Ut(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new dn(r,a,{type:In}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new dn(r,a,{type:In});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new dn(r,a,{type:In});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}const o=cx;this.highPassUniforms=Cs.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ye({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new nt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Lu;this.copyUniforms=Cs.clone(u.uniforms),this.blendMaterial=new Ye({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Fo,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ut,this.oldClearAlpha=1,this.basic=new Jn,this.fsQuad=new Sa(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new nt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=os.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=os.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ye({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new nt(.5,.5)},direction:{value:new nt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Ye({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}os.BlurDirectionX=new nt(1,0);os.BlurDirectionY=new nt(0,1);const lx={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class ux extends hs{constructor(){super();const t=lx;this.uniforms=Cs.clone(t.uniforms),this.material=new Ng({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Sa(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},he.getTransfer(this._outputColorSpace)===fe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ll?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Dl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Il?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ea?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ul&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function hx({renderer:i,scene:t,camera:e}){let n="off",s=null,r=null,a=1,o=1;function c(){try{const d=i.getSize(new nt);a=Math.max(1,Math.round(d.x)),o=Math.max(1,Math.round(d.y))}catch{a=a||1,o=o||1}}function l(){if(s)try{s.dispose()}catch{}s=null,r=null}function u(d){if(l(),c(),d==="low"||d==="high"){s=new ox(i),s.addPass(new ax(t,e)),d==="high"&&(r=new os(new nt(a,o),.18,.6,.85),s.addPass(r)),s.addPass(new ux);try{s.setSize(a,o)}catch{}}}return{get quality(){return n},setQuality(d){const p=d==="high"?"high":d==="low"?"low":"off";try{if(p===n&&(p==="off"||s))return n;if(p==="off")return l(),n="off",n;u(p),n=p}catch{try{l()}catch{}n="off"}return n},setSize(d,p){if(a=Math.max(1,Math.round(d)),o=Math.max(1,Math.round(p)),s)try{s.setSize(a,o)}catch{}},render(){if(n==="off"||!s)i.render(t,e);else try{s.render()}catch{i.render(t,e)}},dispose(){l(),n="off"}}}function Du(i){let t=0,e=0;i.forEach(u=>{t+=u.attributes.position.count,e+=u.index.count});const n=new Float32Array(t*3),s=new Float32Array(t*3),r=new Float32Array(t*2),a=new Uint16Array(e);let o=0,c=0;i.forEach(u=>{const h=u.attributes.position,d=u.attributes.normal,p=u.attributes.uv;n.set(h.array,o*3),s.set(d.array,o*3),r.set(p.array,o*2);const _=u.index.array;for(let x=0;x<_.length;x++)a[c+x]=_[x]+o;o+=h.count,c+=_.length});const l=new ge;return l.setAttribute("position",new Re(n,3)),l.setAttribute("normal",new Re(s,3)),l.setAttribute("uv",new Re(r,2)),l.setIndex(new Re(a,1)),l}function dx(i,t,e){const n=new Zt,s=Qn(808),r=[],a=[],o=9;for(let u=0;u<o;u++){const h=t+(s()-.5)*1.6,d=e+(s()-.5)*1.6,p=3.4+s()*1.8,_=.03+s()*.07,x=s()*Math.PI*2,m=new Zt,f=.5,M=.055;let g=0;for(;g<p;){const y=Math.min(f,p-g),b=new rt(new de(M*.92,M,y,8),i.bamboo);b.position.y=g+y/2,b.castShadow=!0,m.add(b);const w=new rt(new de(M*1.18,M*1.18,.035,8),i.bamboo);if(w.position.y=g+y,m.add(w),g>p*.35){const A=3+Math.floor(s()*3);for(let T=0;T<A;T++)a.push({x:h,y:g+y,z:d,top:g/p,seed:s()*10})}g+=y}m.position.set(h,0,d),m.rotation.set(Math.cos(x)*_,0,Math.sin(x)*_),m.userData.phase=s()*6.28,m.userData.baseRX=m.rotation.x,m.userData.baseRZ=m.rotation.z,r.push(m),n.add(m)}{const u=new ye(.14,.62,1,2),h=u.attributes.position;for(let x=0;x<h.count;x++){const f=(h.getY(x)+.31)/.62;h.setX(x,h.getX(x)*(1-f*.85)),h.setZ(x,-Math.sin(f*Math.PI)*.06)}u.computeVertexNormals();const d=5,p=new Ue(u,i.bambooLeaf,a.length*d),_=[];a.forEach(x=>{for(let m=0;m<d;m++){const f=m/d*Math.PI*2+x.seed;_.push({p:[x.x+Math.cos(f)*.25,x.y+.05,x.z+Math.sin(f)*.25],rx:.9+s()*.5,ry:f,rz:.2,s:.8+s()*.5})}}),Ln(p,_),p.castShadow=!1,n.add(p)}const c=Fr(3.2,3.2,.5);c.position.set(t,.035,e),n.add(c);function l(u){for(const h of r)h.rotation.x=h.userData.baseRX+Math.sin(u*.9+h.userData.phase)*.02,h.rotation.z=h.userData.baseRZ+Math.cos(u*.7+h.userData.phase)*.02}return{group:n,update:l}}function fx(i,t,e){const n=new Zt,s=Qn(1555),r=[],a=new I(0,1,0);function o(m,f,M,g,y){const b=new de(g*.62,g,M,7),w=new rt(b,i.trunk),A=m.clone().addScaledVector(f,M/2);w.position.copy(A),w.quaternion.setFromUnitVectors(a,f.clone().normalize()),w.castShadow=w.receiveShadow=!0,n.add(w);const T=m.clone().addScaledVector(f,M);if(y<=0||M<.35){r.push(T);return}r.push(T.clone().lerp(m,.4));const v=y>=3?3:2+(s()<.5?1:0);for(let S=0;S<v;S++){const P=f.clone();P.x+=(s()-.5)*1.1,P.z+=(s()-.5)*1.1,P.y+=s()*.45-.08,P.normalize(),o(T,P,M*(.55+s()*.15),g*.58,y-1)}}o(new I(0,0,0),new I(.08,1,.05),1.5,.22,4);function c(m){const f=new Fs,M=7;for(let y=0;y<=20;y++){const b=y/20*Math.PI*2,w=Math.pow(Math.abs(Math.sin(b*M/2)),.7),A=m*(.35+.65*w),T=Math.cos(b)*A,v=Math.sin(b)*A;y===0?f.moveTo(T,v):f.lineTo(T,v)}return new Ur(f)}const l=Du([c(.17),c(.17).rotateY(Math.PI/2)]),u=340,h=new Ue(l,i.mapleLeaf,u),d=[],p=new Ut;for(let m=0;m<u;m++){const f=r[Math.floor(s()*r.length)],M=f.x+(s()-.5)*1.1,g=f.y+(s()-.5)*.9,y=f.z+(s()-.5)*1.1;d.push({p:[M,g,y],rx:s()*6.3,ry:s()*6.3,rz:s()*6.3,s:.75+s()*.7});const b=Ie.clamp((g-1.2)/2.2,0,1),w=s();w<b*.75?p.setHex(12728868):w<b*.75+.22?p.setHex(14711592):p.setHex(7178812),p.offsetHSL((s()-.5)*.03,0,(s()-.5)*.06),h.setColorAt(m,p)}Ln(h,d),h.instanceColor.needsUpdate=!0,h.castShadow=!1,h.receiveShadow=!1,n.add(h),n.position.set(t,0,e);const _=Fr(3.4,3.4,.5);_.position.y=.035,n.add(_);function x(m){n.rotation.z=Math.sin(m*.6)*.004,n.rotation.x=Math.cos(m*.45)*.003}return{group:n,update:x}}function px(i,t=1,e=1,n=.6,s=0,r=0){const a=_n(t*1e3+7),o=fx(i,0,0),c=o.group||o;c.scale.setScalar(e*(.9+a()*.25));const l=new Ut(4880949).lerp(new Ut(12729374),n);return c.traverse(u=>{u.isMesh&&u.material?.color&&u.geometry?.type!=="CylinderGeometry"&&(u.material=u.material.clone(),u.material.color.copy(l).offsetHSL((a()-.5)*.03,0,(a()-.5)*.06))}),c.rotation.y=a()*6.28,c.position.set(s,0,r),c.userData.tick=o.update||null,c.userData.sway={amp:.02+a()*.02,freq:.8+a()*.6,ph:a()*6.28},c}function mx(i,t=1,e=0,n=0){const s=_n(t*500+3),r=dx(i,0,0),a=r.group||r;return a.rotation.y=s()*6.28,a.scale.setScalar(.85+s()*.4),a.position.set(e,0,n),a.userData.tick=r.update||null,a.userData.sway={amp:.015+s()*.02,freq:1.1+s()*.7,ph:s()*6.28},a}function gx(i=1,t=.5){const e=_n(i*77+1),n=new Kn(t,2),s=n.attributes.position;for(let a=0;a<s.count;a++){const o=1+(e()-.5)*.35;s.setXYZ(a,s.getX(a)*o,s.getY(a)*o*.72,s.getZ(a)*o)}n.computeVertexNormals();const r=new rt(n,new xt({color:new Ut(3759148).offsetHSL(0,0,(e()-.5)*.05),roughness:1}));return r.castShadow=!0,r.userData.sway={amp:.008,freq:1.4,ph:e()*6.28},r}function _x(i=1,t=60,e=[6,3]){const n=_n(i*31+5),s=new ye(.5,.35);s.translate(0,.17,0);const r=xx([s,s.clone().rotateY(Math.PI/2)]),a=new xt({color:6058040,roughness:1,side:we,alphaTest:.4}),o=new Ue(r,a,t),c=new ae;for(let l=0;l<t;l++)c.position.set((n()-.5)*e[0],0,(n()-.5)*e[1]),c.rotation.y=n()*3.14,c.scale.setScalar(.7+n()*.7),c.updateMatrix(),o.setMatrixAt(l,c.matrix);return o.castShadow=!1,o.receiveShadow=!0,o}function xx(i){return Du(i)}function No(i=1,t=2.2,e=2,n=40){const s=_n(i*13+9),r=new ye(.12,.12),a=new xt({color:4154928,roughness:1,side:we}),o=new Ue(r,a,n),c=new ae;for(let u=0;u<n;u++)c.position.set((s()-.5)*t,s()*e,.02+s()*.06),c.rotation.set(s()*3,s()*3,s()*3),c.updateMatrix(),o.setMatrixAt(u,c.matrix);o.castShadow=!1;const l=new Zt;return l.add(o),l}function vx(i,t=1.6,e=1){const n=new rt(new $n(.5,10),new xt({color:4480046,roughness:1}));return n.rotation.x=-Math.PI/2,n.scale.set(t,e,1),n.receiveShadow=!0,n}function yx(i,t,e){const n=e?.gust?e.gust(t):.5;for(const s of i){const r=s.userData.sway;r&&(s.rotation.x=Math.sin(t*r.freq+r.ph)*r.amp*(.5+n),s.rotation.z=Math.cos(t*r.freq*.8+r.ph)*r.amp*(.5+n))}}const ke=new uu({antialias:!0,powerPreference:"high-performance"});ke.setPixelRatio(Math.min(window.devicePixelRatio||1,2));window.addEventListener("tsuki-quality",i=>{try{const t=i&&i.detail,e=t==="low"?1:t==="medium"?1.5:2;ke.setPixelRatio(Math.min(window.devicePixelRatio||1,e))}catch{}});ke.setSize(window.innerWidth,window.innerHeight);ke.shadowMap.enabled=!0;ke.shadowMap.type=Cl;ke.toneMapping=ea;ke.toneMappingExposure=1.06;document.getElementById("app").appendChild(ke.domElement);const Te=new eg,xn=yu();p_(xn);const{sun:Mx,hemi:Sx,skyMat:wx}=f_(Te,ke),zr=new Zt;zr.name="hero_machiya";const wa=c_(xn),Ex=l_(xn),xr=u_(xn);zr.add(wa.group,Ex.group,xr.group);y_(zr,{nageshiY:2.2,eaveY:3.7,doorX:wa.openBayX});const Iu=P_({scene:Te,heroGroup:zr}),Qi=H_(Iu);Te.add(Qi.group);Q_(Te,xn,{signPos:[6.5,0,14.5],signRy:-.5,plaquePos:[1,0,9.7],plaqueRy:-.35});const as=d_(xn);as.group.position.set(-13.5,0,7);Te.add(as.group);const Uu=[],Nu=[],Ea=i=>(i?.userData?.sway&&Uu.push(i),i?.userData?.tick&&Nu.push(i.userData.tick),i);[[-4.2,4.6,1.3,.75],[6.8,4.4,1,.55],[-8.2,-6.2,1.5,.9],[13.5,-8.5,1.1,.4],[-16,3.5,.9,.65]].forEach(([i,t,e,n],s)=>{const r=px(xn,s+1,e,n,i,t);r.position.set(i,0,t),Te.add(r),Ea(r)});[[0,-5.5],[-7.6,4.6],[7.5,-8.5]].forEach(([i,t],e)=>{const n=mx(xn,10+e,i,t);Te.add(n),Ea(n)});[[-3.6,3.4,.55],[3.6,3.4,.5],[11,10.6,.6],[-11,10.6,.55],[-2,-8.6,.5]].forEach(([i,t,e],n)=>{const s=gx(20+n,e);s.position.set(i,.25,t),Te.add(s),Ea(s)});for(const[i,t,e,n,s]of[[0,4,8,2.5,31],[-6,13,7,4,32],[2,-7.5,20,1.5,33]]){const r=_x(s,60,[e,n]);r.position.set(i,.04,t),Te.add(r)}{const i=No(41,2.4,2);i.rotation.y=-Math.PI/2,i.position.set(-5.08,.9,-1),Te.add(i);const t=No(42,3,1.8);t.position.set(-9,.7,-8.92),Te.add(t);const e=No(43,2.4,1.8);e.rotation.y=Math.PI/2,e.position.set(-9.68,.7,13.5),Te.add(e)}for(const[i,t,e,n,s]of[[-5.4,2.4,1.6,1,51],[5.4,2.4,1.6,1,52],[-4.2,8.9,1.2,.8,53],[0,4.2,2.2,1.4,54]]){const r=vx(s,e,n);r.position.set(i,.055,t),r.rotation.y=s,Te.add(r)}const Ou=w_(xn);Te.add(Ou.group);const ts=S_({scene:Te,pondWaterMats:[as.waterMat],wetMats:xn._wet||[]}),$o=X_(Te),Is=W_({renderer:ke,scene:Te,sun:Mx,hemi:Sx,skyMat:wx,houses:Iu.houses,lampGlows:Qi.lampGlows,lampLights:Qi.lampLights,vendGlow:Qi.group.userData.vendGlow,stars:$o.stars,moon:$o.moon}),{camera:Br,controls:Ms}=T_(ke),Us=q_(Br,Ms),vi=k_({camera:Br,scene:Te,zones:Zi});{const i=Qi.group.userData.radioPos||new I(15.5,1.15,14.5);vi.source&&vi.source.position.copy(i)}new URLSearchParams(location.search).get("music")==="0"?vi.setEnabled(!1):G_(vi);window.__audio=vi;Us.onMood(({time:i,wx:t}={})=>{i&&Is.set(i),t&&ts.setState(t)});const Ns=hx({renderer:ke,scene:Te,camera:Br});window.__post=Ns;try{const i=new URLSearchParams(location.search).get("post");Ns.setQuality(i==="high"?"high":i==="low"?"low":"off")}catch{try{Ns.setQuality("off")}catch{}}window.addEventListener("resize",()=>{try{Ns.setSize(window.innerWidth,window.innerHeight)}catch{}});const bx=as.waterMat.color.clone(),bl=new Ut,Tx=document.getElementById("hud");let Oo=0,Qo=60;function Fu(){const i=ke.info;Tx.innerHTML=`draw calls&nbsp; ${i.render.calls}<br>triangles&nbsp;&nbsp; ${i.render.triangles.toLocaleString("en-US")}<br>geometries&nbsp; ${i.memory.geometries}`}window.__perf=()=>({calls:ke.info.render.calls,triangles:ke.info.render.triangles,geometries:ke.info.memory.geometries,fps:Math.round(Qo),errors:window.__errors||[]});window.__errors=[];window.addEventListener("error",i=>window.__errors.push(String(i.message)));j_({daytime:Is,weather:ts,cine:Us,hudEl:document.getElementById("hud"),audio:vi});{const i=new URLSearchParams(location.search),t=i.get("time"),e=i.get("wx"),n=i.get("shot");t&&Is.set(t.toUpperCase()),e&&ts.setState(e.toLowerCase()),n!==null&&(Us.setMode("cine"),Us.goTo(Number(n)||0))}const Tl=new ya,zu=new URLSearchParams(location.search),Bu=zu.get("fixed")==="1",vr=tx({fps:Number(zu.get("fps"))||30});window.__cine={get frame(){return vr.frame},get t(){return vr.t},get fps(){return vr.fps},mode:Bu?"fixed":"wall"};let Al=!0;function ku(){requestAnimationFrame(ku);let i,t;if(Bu){const e=vr.step();i=e.dt,t=e.t}else i=Math.min(Tl.getDelta(),.05),t=Tl.elapsedTime;i>0&&(Qo+=(1/Math.max(i,.001)-Qo)*.05),as.update(t,ts),bl.copy(bx).lerp(Te.fog.color,.35),as.waterMat.color.lerp(bl,.08),Ou.update(t,i);for(const e of Nu)e(t);wa.noren.children.forEach((e,n)=>{e.rotation.x=Math.sin(t*1.3+n*.9)*.06*(.5+Cn.gust(t))}),xr.lantern.rotation.x=Math.sin(t*.8)*.03,xr.lantern.rotation.z=Math.cos(t*.6)*.03,xr.lanternLight.intensity=5+Math.sin(t*7.3)*.25+Math.sin(t*13.1)*.15,ts.update(i,t),Is.update(i,ts),$o.setMoon(Is.state==="NIGHT"?1:0),Us.update(i),vi.update(i),V_(Qi,t,Cn),yx(Uu,t,Cn),Ms.update();try{window.__cam={pos:Br.position.toArray(),tgt:Ms&&Ms.target?Ms.target.toArray():[]}}catch{}if(Ns.render(),Al){Al=!1;const e=document.getElementById("loader");e.style.opacity="0",setTimeout(()=>e.remove(),700)}Oo+=i,Oo>.5&&(Oo=0,Fu())}Fu();ku();
