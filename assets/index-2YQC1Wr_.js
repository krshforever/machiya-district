(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mo="160",si={ROTATE:0,DOLLY:1,PAN:2},oi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zl=0,Yo=1,Kl=2,zc=1,Bc=2,fn=3,Un=0,Fe=1,pe=2,Cn=0,Ci=1,qo=2,jo=3,Zo=4,Jl=5,Xn=100,$l=101,Ql=102,Ko=103,Jo=104,tu=200,eu=201,nu=202,iu=203,ro=204,so=205,ru=206,su=207,ou=208,au=209,cu=210,lu=211,uu=212,hu=213,du=214,fu=0,pu=1,mu=2,Xr=3,gu=4,_u=5,xu=6,vu=7,Gc=0,Mu=1,Su=2,Pn=0,yu=1,wu=2,Eu=3,Hc=4,bu=5,Tu=6,kc=300,Li=301,Di=302,Yr=303,oo=304,rs=306,qr=1e3,tn=1001,ao=1002,Ne=1003,$o=1004,xs=1005,qe=1006,Au=1007,er=1008,Ln=1009,Ru=1010,Cu=1011,So=1012,Vc=1013,An=1014,Rn=1015,nr=1016,Wc=1017,Xc=1018,qn=1020,Pu=1021,en=1023,Lu=1024,Du=1025,jn=1026,Ui=1027,Uu=1028,Yc=1029,Iu=1030,qc=1031,jc=1033,vs=33776,Ms=33777,Ss=33778,ys=33779,Qo=35840,ta=35841,ea=35842,na=35843,Zc=36196,ia=37492,ra=37496,sa=37808,oa=37809,aa=37810,ca=37811,la=37812,ua=37813,ha=37814,da=37815,fa=37816,pa=37817,ma=37818,ga=37819,_a=37820,xa=37821,ws=36492,va=36494,Ma=36495,Nu=36283,Sa=36284,ya=36285,wa=36286,Kc=3e3,Zn=3001,Ou=3200,Fu=3201,Jc=0,zu=1,je="",ge="srgb",vn="srgb-linear",yo="display-p3",ss="display-p3-linear",jr="linear",re="srgb",Zr="rec709",Kr="p3",ai=7680,Ea=519,Bu=512,Gu=513,Hu=514,$c=515,ku=516,Vu=517,Wu=518,Xu=519,ba=35044,Ta="300 es",co=1035,gn=2e3,Jr=2001;class ei{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Aa=1234567;const Zi=Math.PI/180,ir=180/Math.PI;function ni(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ae[i&255]+Ae[i>>8&255]+Ae[i>>16&255]+Ae[i>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]).toLowerCase()}function xe(i,t,e){return Math.max(t,Math.min(e,i))}function wo(i,t){return(i%t+t)%t}function Yu(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function qu(i,t,e){return i!==t?(e-i)/(t-i):0}function Ki(i,t,e){return(1-e)*i+e*t}function ju(i,t,e,n){return Ki(i,t,1-Math.exp(-e*n))}function Zu(i,t=1){return t-Math.abs(wo(i,t*2)-t)}function Ku(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ju(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function $u(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Qu(i,t){return i+Math.random()*(t-i)}function th(i){return i*(.5-Math.random())}function eh(i){i!==void 0&&(Aa=i);let t=Aa+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function nh(i){return i*Zi}function ih(i){return i*ir}function lo(i){return(i&i-1)===0&&i!==0}function rh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function $r(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function sh(i,t,e,n,r){const s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),l=s((t+n)/2),u=a((t+n)/2),h=s((t-n)/2),d=a((t-n)/2),p=s((n-t)/2),g=a((n-t)/2);switch(r){case"XYX":i.set(o*u,c*h,c*d,o*l);break;case"YZY":i.set(c*d,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*d,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*p,o*l);break;case"YXY":i.set(c*p,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*p,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function bi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function De(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ce={DEG2RAD:Zi,RAD2DEG:ir,generateUUID:ni,clamp:xe,euclideanModulo:wo,mapLinear:Yu,inverseLerp:qu,lerp:Ki,damp:ju,pingpong:Zu,smoothstep:Ku,smootherstep:Ju,randInt:$u,randFloat:Qu,randFloatSpread:th,seededRandom:eh,degToRad:nh,radToDeg:ih,isPowerOfTwo:lo,ceilPowerOfTwo:rh,floorPowerOfTwo:$r,setQuaternionFromProperEuler:sh,normalize:De,denormalize:bi};class ot{constructor(t=0,e=0){ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(t,e,n,r,s,a,o,c,l){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l)}set(t,e,n,r,s,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],_=r[0],m=r[3],f=r[6],S=r[1],x=r[4],M=r[7],T=r[2],b=r[5],y=r[8];return s[0]=a*_+o*S+c*T,s[3]=a*m+o*x+c*b,s[6]=a*f+o*M+c*y,s[1]=l*_+u*S+h*T,s[4]=l*m+u*x+h*b,s[7]=l*f+u*M+h*y,s[2]=d*_+p*S+g*T,s[5]=d*m+p*x+g*b,s[8]=d*f+p*M+g*y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=u*a-o*l,d=o*c-u*s,p=l*s-a*c,g=e*h+n*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(r*l-u*n)*_,t[2]=(o*n-r*a)*_,t[3]=d*_,t[4]=(u*e-r*c)*_,t[5]=(r*s-o*e)*_,t[6]=p*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Es.makeScale(t,e)),this}rotate(t){return this.premultiply(Es.makeRotation(-t)),this}translate(t,e){return this.premultiply(Es.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Es=new Zt;function Qc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Qr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function oh(){const i=Qr("canvas");return i.style.display="block",i}const Ra={};function Ji(i){i in Ra||(Ra[i]=!0,console.warn(i))}const Ca=new Zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Pa=new Zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),dr={[vn]:{transfer:jr,primaries:Zr,toReference:i=>i,fromReference:i=>i},[ge]:{transfer:re,primaries:Zr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ss]:{transfer:jr,primaries:Kr,toReference:i=>i.applyMatrix3(Pa),fromReference:i=>i.applyMatrix3(Ca)},[yo]:{transfer:re,primaries:Kr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Pa),fromReference:i=>i.applyMatrix3(Ca).convertLinearToSRGB()}},ah=new Set([vn,ss]),ne={enabled:!0,_workingColorSpace:vn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ah.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=dr[t].toReference,r=dr[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return dr[i].primaries},getTransfer:function(i){return i===je?jr:dr[i].transfer}};function Pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function bs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ci;class tl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ci===void 0&&(ci=Qr("canvas")),ci.width=t.width,ci.height=t.height;const n=ci.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ci}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Qr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Pi(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Pi(e[n]/255)*255):e[n]=Pi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ch=0;class el{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ch++}),this.uuid=ni(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ts(r[a].image)):s.push(Ts(r[a]))}else s=Ts(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ts(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?tl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lh=0;class Be extends ei{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,n=tn,r=tn,s=qe,a=er,o=en,c=Ln,l=Be.DEFAULT_ANISOTROPY,u=je){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lh++}),this.uuid=ni(),this.name="",this.source=new el(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ji("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Zn?ge:je),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qr:t.x=t.x-Math.floor(t.x);break;case tn:t.x=t.x<0?0:1;break;case ao:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qr:t.y=t.y-Math.floor(t.y);break;case tn:t.y=t.y<0?0:1;break;case ao:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ji("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ge?Zn:Kc}set encoding(t){Ji("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Zn?ge:je}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=kc;Be.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,n=0,r=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,M=(p+1)/2,T=(f+1)/2,b=(u+d)/4,y=(h+_)/4,C=(g+m)/4;return x>M&&x>T?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=b/n,s=y/n):M>T?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=b/r,s=C/r):T<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),n=y/s,r=C/s),this.set(n,r,s,e),this}let S=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-_)/S,this.z=(d-u)/S,this.w=Math.acos((l+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uh extends ei{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const r={width:t,height:e,depth:1};n.encoding!==void 0&&(Ji("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Zn?ge:je),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qe,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Be(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new el(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends uh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class nl extends Be{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hh extends Be{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jn{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3];const d=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(h!==_||c!==d||l!==p||u!==g){let m=1-o;const f=c*d+l*p+u*g+h*_,S=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const T=Math.sqrt(x),b=Math.atan2(T,f*S);m=Math.sin(m*b)/T,o=Math.sin(o*b)/T}const M=o*S;if(c=c*m+d*M,l=l*m+p*M,u=u*m+g*M,h=h*m+_*M,m===1-o){const T=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=T,l*=T,u*=T,h*=T}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return t[e]=o*g+u*h+c*p-l*d,t[e+1]=c*g+u*d+l*h-o*p,t[e+2]=l*g+u*p+o*d-c*h,t[e+3]=u*g-o*h-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),h=o(s/2),d=c(n/2),p=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"YZX":this._x=d*u*h+l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h-d*p*g;break;case"XZY":this._x=d*u*h-l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),n*Math.sin(s),n*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(La.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(La.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*n),u=2*(o*e-s*r),h=2*(s*n-a*e);return this.x=e+c*l+a*h-o*u,this.y=n+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return As.copy(this).projectOnVector(t),this.sub(As)}reflect(t){return this.sub(As.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const As=new U,La=new Jn;class On{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ke):Ke.fromBufferAttribute(s,a),Ke.applyMatrix4(t.matrixWorld),this.expandByPoint(Ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fr.copy(n.boundingBox)),fr.applyMatrix4(t.matrixWorld),this.union(fr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ke),Ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hi),pr.subVectors(this.max,Hi),li.subVectors(t.a,Hi),ui.subVectors(t.b,Hi),hi.subVectors(t.c,Hi),Sn.subVectors(ui,li),yn.subVectors(hi,ui),Gn.subVectors(li,hi);let e=[0,-Sn.z,Sn.y,0,-yn.z,yn.y,0,-Gn.z,Gn.y,Sn.z,0,-Sn.x,yn.z,0,-yn.x,Gn.z,0,-Gn.x,-Sn.y,Sn.x,0,-yn.y,yn.x,0,-Gn.y,Gn.x,0];return!Rs(e,li,ui,hi,pr)||(e=[1,0,0,0,1,0,0,0,1],!Rs(e,li,ui,hi,pr))?!1:(mr.crossVectors(Sn,yn),e=[mr.x,mr.y,mr.z],Rs(e,li,ui,hi,pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const cn=[new U,new U,new U,new U,new U,new U,new U,new U],Ke=new U,fr=new On,li=new U,ui=new U,hi=new U,Sn=new U,yn=new U,Gn=new U,Hi=new U,pr=new U,mr=new U,Hn=new U;function Rs(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Hn.fromArray(i,s);const o=r.x*Math.abs(Hn.x)+r.y*Math.abs(Hn.y)+r.z*Math.abs(Hn.z),c=t.dot(Hn),l=e.dot(Hn),u=n.dot(Hn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const dh=new On,ki=new U,Cs=new U;class Ni{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):dh.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ki.subVectors(t,this.center);const e=ki.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(ki,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Cs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ki.copy(t.center).add(Cs)),this.expandByPoint(ki.copy(t.center).sub(Cs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ln=new U,Ps=new U,gr=new U,wn=new U,Ls=new U,_r=new U,Ds=new U;class Eo{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ln.copy(this.origin).addScaledVector(this.direction,e),ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Ps.copy(t).add(e).multiplyScalar(.5),gr.copy(e).sub(t).normalize(),wn.copy(this.origin).sub(Ps);const s=t.distanceTo(e)*.5,a=-this.direction.dot(gr),o=wn.dot(this.direction),c=-wn.dot(gr),l=wn.lengthSq(),u=Math.abs(1-a*a);let h,d,p,g;if(u>0)if(h=a*c-o,d=a*o-c,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,p=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+d*(d+2*c)+l);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ps).addScaledVector(gr,d),p}intersectSphere(t,e){ln.subVectors(t.center,this.origin);const n=ln.dot(this.direction),r=ln.dot(ln)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),u>=0?(s=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,ln)!==null}intersectTriangle(t,e,n,r,s){Ls.subVectors(e,t),_r.subVectors(n,t),Ds.crossVectors(Ls,_r);let a=this.direction.dot(Ds),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wn.subVectors(this.origin,t);const c=o*this.direction.dot(_r.crossVectors(wn,_r));if(c<0)return null;const l=o*this.direction.dot(Ls.cross(wn));if(l<0||c+l>a)return null;const u=-o*wn.dot(Ds);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(t,e,n,r,s,a,o,c,l,u,h,d,p,g,_,m){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l,u,h,d,p,g,_,m)}set(t,e,n,r,s,a,o,c,l,u,h,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/di.setFromMatrixColumn(t,0).length(),s=1/di.setFromMatrixColumn(t,1).length(),a=1/di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=a*u,p=a*h,g=o*u,_=o*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=p+g*l,e[5]=d-_*l,e[9]=-o*c,e[2]=_-d*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*u,p=c*h,g=l*u,_=l*h;e[0]=d+_*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=_+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*u,p=c*h,g=l*u,_=l*h;e[0]=d-_*o,e[4]=-a*h,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=_-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*u,p=a*h,g=o*u,_=o*h;e[0]=c*u,e[4]=g*l-p,e[8]=d*l+_,e[1]=c*h,e[5]=_*l+d,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,p=a*l,g=o*c,_=o*l;e[0]=c*u,e[4]=_-d*h,e[8]=g*h+p,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=p*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=a*c,p=a*l,g=o*c,_=o*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+_,e[5]=a*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=o*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fh,t,ph)}lookAt(t,e,n){const r=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),En.crossVectors(n,He),En.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),En.crossVectors(n,He)),En.normalize(),xr.crossVectors(He,En),r[0]=En.x,r[4]=xr.x,r[8]=He.x,r[1]=En.y,r[5]=xr.y,r[9]=He.y,r[2]=En.z,r[6]=xr.z,r[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],S=n[3],x=n[7],M=n[11],T=n[15],b=r[0],y=r[4],C=r[8],v=r[12],E=r[1],L=r[5],I=r[9],k=r[13],D=r[2],F=r[6],z=r[10],H=r[14],V=r[3],K=r[7],$=r[11],ut=r[15];return s[0]=a*b+o*E+c*D+l*V,s[4]=a*y+o*L+c*F+l*K,s[8]=a*C+o*I+c*z+l*$,s[12]=a*v+o*k+c*H+l*ut,s[1]=u*b+h*E+d*D+p*V,s[5]=u*y+h*L+d*F+p*K,s[9]=u*C+h*I+d*z+p*$,s[13]=u*v+h*k+d*H+p*ut,s[2]=g*b+_*E+m*D+f*V,s[6]=g*y+_*L+m*F+f*K,s[10]=g*C+_*I+m*z+f*$,s[14]=g*v+_*k+m*H+f*ut,s[3]=S*b+x*E+M*D+T*V,s[7]=S*y+x*L+M*F+T*K,s[11]=S*C+x*I+M*z+T*$,s[15]=S*v+x*k+M*H+T*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+s*c*h-r*l*h-s*o*d+n*l*d+r*o*p-n*c*p)+_*(+e*c*p-e*l*d+s*a*d-r*a*p+r*l*u-s*c*u)+m*(+e*l*h-e*o*p-s*a*h+n*a*p+s*o*u-n*l*u)+f*(-r*o*u-e*c*h+e*o*d+r*a*h-n*a*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],S=h*m*l-_*d*l+_*c*p-o*m*p-h*c*f+o*d*f,x=g*d*l-u*m*l-g*c*p+a*m*p+u*c*f-a*d*f,M=u*_*l-g*h*l+g*o*p-a*_*p-u*o*f+a*h*f,T=g*h*c-u*_*c-g*o*d+a*_*d+u*o*m-a*h*m,b=e*S+n*x+r*M+s*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/b;return t[0]=S*y,t[1]=(_*d*s-h*m*s-_*r*p+n*m*p+h*r*f-n*d*f)*y,t[2]=(o*m*s-_*c*s+_*r*l-n*m*l-o*r*f+n*c*f)*y,t[3]=(h*c*s-o*d*s-h*r*l+n*d*l+o*r*p-n*c*p)*y,t[4]=x*y,t[5]=(u*m*s-g*d*s+g*r*p-e*m*p-u*r*f+e*d*f)*y,t[6]=(g*c*s-a*m*s-g*r*l+e*m*l+a*r*f-e*c*f)*y,t[7]=(a*d*s-u*c*s+u*r*l-e*d*l-a*r*p+e*c*p)*y,t[8]=M*y,t[9]=(g*h*s-u*_*s-g*n*p+e*_*p+u*n*f-e*h*f)*y,t[10]=(a*_*s-g*o*s+g*n*l-e*_*l-a*n*f+e*o*f)*y,t[11]=(u*o*s-a*h*s-u*n*l+e*h*l+a*n*p-e*o*p)*y,t[12]=T*y,t[13]=(u*_*r-g*h*r+g*n*d-e*_*d-u*n*m+e*h*m)*y,t[14]=(g*o*r-a*_*r-g*n*c+e*_*c+a*n*m-e*o*m)*y,t[15]=(a*h*r-u*o*r+u*n*c-e*h*c-a*n*d+e*o*d)*y,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,u=a+a,h=o+o,d=s*l,p=s*u,g=s*h,_=a*u,m=a*h,f=o*h,S=c*l,x=c*u,M=c*h,T=n.x,b=n.y,y=n.z;return r[0]=(1-(_+f))*T,r[1]=(p+M)*T,r[2]=(g-x)*T,r[3]=0,r[4]=(p-M)*b,r[5]=(1-(d+f))*b,r[6]=(m+S)*b,r[7]=0,r[8]=(g+x)*y,r[9]=(m-S)*y,r[10]=(1-(d+_))*y,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=di.set(r[0],r[1],r[2]).length();const a=di.set(r[4],r[5],r[6]).length(),o=di.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Je.copy(this);const l=1/s,u=1/a,h=1/o;return Je.elements[0]*=l,Je.elements[1]*=l,Je.elements[2]*=l,Je.elements[4]*=u,Je.elements[5]*=u,Je.elements[6]*=u,Je.elements[8]*=h,Je.elements[9]*=h,Je.elements[10]*=h,e.setFromRotationMatrix(Je),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=gn){const c=this.elements,l=2*s/(e-t),u=2*s/(n-r),h=(e+t)/(e-t),d=(n+r)/(n-r);let p,g;if(o===gn)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Jr)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=gn){const c=this.elements,l=1/(e-t),u=1/(n-r),h=1/(a-s),d=(e+t)*l,p=(n+r)*u;let g,_;if(o===gn)g=(a+s)*h,_=-2*h;else if(o===Jr)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const di=new U,Je=new ee,fh=new U(0,0,0),ph=new U(1,1,1),En=new U,xr=new U,He=new U,Da=new ee,Ua=new Jn;class In{constructor(t=0,e=0,n=0,r=In.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Da.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Da,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ua.setFromEuler(this),this.setFromQuaternion(Ua,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}In.DEFAULT_ORDER="XYZ";class il{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let mh=0;const Ia=new U,fi=new Jn,un=new ee,vr=new U,Vi=new U,gh=new U,_h=new Jn,Na=new U(1,0,0),Oa=new U(0,1,0),Fa=new U(0,0,1),xh={type:"added"},vh={type:"removed"};class oe extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=oe.DEFAULT_UP.clone();const t=new U,e=new In,n=new Jn,r=new U(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ee},normalMatrix:{value:new Zt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=oe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new il,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fi.setFromAxisAngle(t,e),this.quaternion.multiply(fi),this}rotateOnWorldAxis(t,e){return fi.setFromAxisAngle(t,e),this.quaternion.premultiply(fi),this}rotateX(t){return this.rotateOnAxis(Na,t)}rotateY(t){return this.rotateOnAxis(Oa,t)}rotateZ(t){return this.rotateOnAxis(Fa,t)}translateOnAxis(t,e){return Ia.copy(t).applyQuaternion(this.quaternion),this.position.add(Ia.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Na,t)}translateY(t){return this.translateOnAxis(Oa,t)}translateZ(t){return this.translateOnAxis(Fa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vr.copy(t):vr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Vi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(Vi,vr,this.up):un.lookAt(vr,Vi,this.up),this.quaternion.setFromRotationMatrix(un),r&&(un.extractRotation(r.matrixWorld),fi.setFromRotationMatrix(un),this.quaternion.premultiply(fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(xh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vh)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),un.multiply(t.parent.matrixWorld)),t.applyMatrix4(un),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,t,gh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,_h,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(t.shapes,h)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}oe.DEFAULT_UP=new U(0,1,0);oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $e=new U,hn=new U,Us=new U,dn=new U,pi=new U,mi=new U,za=new U,Is=new U,Ns=new U,Os=new U;let Mr=!1;class Qe{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),$e.subVectors(t,e),r.cross($e);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){$e.subVectors(r,e),hn.subVectors(n,e),Us.subVectors(t,e);const a=$e.dot($e),o=$e.dot(hn),c=$e.dot(Us),l=hn.dot(hn),u=hn.dot(Us),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(l*c-o*u)*d,g=(a*u-o*c)*d;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getUV(t,e,n,r,s,a,o,c){return Mr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Mr=!0),this.getInterpolation(t,e,n,r,s,a,o,c)}static getInterpolation(t,e,n,r,s,a,o,c){return this.getBarycoord(t,e,n,r,dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,dn.x),c.addScaledVector(a,dn.y),c.addScaledVector(o,dn.z),c)}static isFrontFacing(t,e,n,r){return $e.subVectors(n,e),hn.subVectors(t,e),$e.cross(hn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $e.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),$e.cross(hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qe.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,r,s){return Mr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Mr=!0),Qe.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}getInterpolation(t,e,n,r,s){return Qe.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;pi.subVectors(r,n),mi.subVectors(s,n),Is.subVectors(t,n);const c=pi.dot(Is),l=mi.dot(Is);if(c<=0&&l<=0)return e.copy(n);Ns.subVectors(t,r);const u=pi.dot(Ns),h=mi.dot(Ns);if(u>=0&&h<=u)return e.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(pi,a);Os.subVectors(t,s);const p=pi.dot(Os),g=mi.dot(Os);if(g>=0&&p<=g)return e.copy(s);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(mi,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return za.subVectors(s,r),o=(h-u)/(h-u+(p-g)),e.copy(r).addScaledVector(za,o);const f=1/(m+_+d);return a=_*f,o=d*f,e.copy(n).addScaledVector(pi,a).addScaledVector(mi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const rl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function Fs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class It{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=ne.workingColorSpace){if(t=wo(t,1),e=xe(e,0,1),n=xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Fs(a,s,t+1/3),this.g=Fs(a,s,t),this.b=Fs(a,s,t-1/3)}return ne.toWorkingColorSpace(this,r),this}setStyle(t,e=ge){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ge){const n=rl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pi(t.r),this.g=Pi(t.g),this.b=Pi(t.b),this}copyLinearToSRGB(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ge){return ne.fromWorkingColorSpace(Re.copy(this),t),Math.round(xe(Re.r*255,0,255))*65536+Math.round(xe(Re.g*255,0,255))*256+Math.round(xe(Re.b*255,0,255))}getHexString(t=ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(Re.copy(this),e);const n=Re.r,r=Re.g,s=Re.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=ge){ne.fromWorkingColorSpace(Re.copy(this),t);const e=Re.r,n=Re.g,r=Re.b;return t!==ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(bn),this.setHSL(bn.h+t,bn.s+e,bn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(bn),t.getHSL(Sr);const n=Ki(bn.h,Sr.h,e),r=Ki(bn.s,Sr.s,e),s=Ki(bn.l,Sr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new It;It.NAMES=rl;let Mh=0;class Oi extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=ni(),this.name="",this.type="Material",this.blending=Ci,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ro,this.blendDst=so,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=Xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ea,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ai,this.stencilZFail=ai,this.stencilZPass=ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ro&&(n.blendSrc=this.blendSrc),this.blendDst!==so&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ea&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Fi extends Oi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new U,yr=new ot;class ve{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ba,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)yr.fromBufferAttribute(this,e),yr.applyMatrix3(t),this.setXY(e,yr.x,yr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=bi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=De(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=bi(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=bi(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=bi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=bi(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),r=De(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),r=De(r,this.array),s=De(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ba&&(t.usage=this.usage),t}}class sl extends ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ol extends ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Jt extends ve{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Sh=0;const Xe=new ee,zs=new oe,gi=new U,ke=new On,Wi=new On,Ee=new U;class he extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qc(t)?ol:sl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Zt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,n){return Xe.makeTranslation(t,e,n),this.applyMatrix4(Xe),this}scale(t,e,n){return Xe.makeScale(t,e,n),this.applyMatrix4(Xe),this}lookAt(t){return zs.lookAt(t),zs.updateMatrix(),this.applyMatrix4(zs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Jt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];ke.setFromBufferAttribute(s),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,ke.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,ke.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(ke.min),this.boundingBox.expandByPoint(ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(ke.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Wi.setFromBufferAttribute(o),this.morphTargetsRelative?(Ee.addVectors(ke.min,Wi.min),ke.expandByPoint(Ee),Ee.addVectors(ke.max,Wi.max),ke.expandByPoint(Ee)):(ke.expandByPoint(Wi.min),ke.expandByPoint(Wi.max))}ke.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Ee.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ee));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ee.fromBufferAttribute(o,l),c&&(gi.fromBufferAttribute(t,l),Ee.add(gi)),r=Math.max(r,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,r=e.position.array,s=e.normal.array,a=e.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ve(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let E=0;E<o;E++)l[E]=new U,u[E]=new U;const h=new U,d=new U,p=new U,g=new ot,_=new ot,m=new ot,f=new U,S=new U;function x(E,L,I){h.fromArray(r,E*3),d.fromArray(r,L*3),p.fromArray(r,I*3),g.fromArray(a,E*2),_.fromArray(a,L*2),m.fromArray(a,I*2),d.sub(h),p.sub(h),_.sub(g),m.sub(g);const k=1/(_.x*m.y-m.x*_.y);isFinite(k)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(k),S.copy(p).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(k),l[E].add(f),l[L].add(f),l[I].add(f),u[E].add(S),u[L].add(S),u[I].add(S))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let E=0,L=M.length;E<L;++E){const I=M[E],k=I.start,D=I.count;for(let F=k,z=k+D;F<z;F+=3)x(n[F+0],n[F+1],n[F+2])}const T=new U,b=new U,y=new U,C=new U;function v(E){y.fromArray(s,E*3),C.copy(y);const L=l[E];T.copy(L),T.sub(y.multiplyScalar(y.dot(L))).normalize(),b.crossVectors(C,L);const k=b.dot(u[E])<0?-1:1;c[E*4]=T.x,c[E*4+1]=T.y,c[E*4+2]=T.z,c[E*4+3]=k}for(let E=0,L=M.length;E<L;++E){const I=M[E],k=I.start,D=I.count;for(let F=k,z=k+D;F<z;F+=3)v(n[F+0]),v(n[F+1]),v(n[F+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new U,s=new U,a=new U,o=new U,c=new U,l=new U,u=new U,h=new U;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*u;for(let f=0;f<u;f++)d[g++]=l[p++]}return new ve(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new he,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,n);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=t(d,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ba=new ee,kn=new Eo,wr=new Ni,Ga=new U,_i=new U,xi=new U,vi=new U,Bs=new U,Er=new U,br=new ot,Tr=new ot,Ar=new ot,Ha=new U,ka=new U,Va=new U,Rr=new U,Cr=new U;class lt extends oe{constructor(t=new he,e=new Fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Er.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(Bs.fromBufferAttribute(h,t),a?Er.addScaledVector(Bs,u):Er.addScaledVector(Bs.sub(e),u))}e.add(Er)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(s),kn.copy(t.ray).recast(t.near),!(wr.containsPoint(kn.origin)===!1&&(kn.intersectSphere(wr,Ga)===null||kn.origin.distanceToSquared(Ga)>(t.far-t.near)**2))&&(Ba.copy(s).invert(),kn.copy(t.ray).applyMatrix4(Ba),!(n.boundingBox!==null&&kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,kn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],S=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=S,T=x;M<T;M+=3){const b=o.getX(M),y=o.getX(M+1),C=o.getX(M+2);r=Pr(this,f,t,n,l,u,h,b,y,C),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const S=o.getX(m),x=o.getX(m+1),M=o.getX(m+2);r=Pr(this,a,t,n,l,u,h,S,x,M),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],S=Math.max(m.start,p.start),x=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=S,T=x;M<T;M+=3){const b=M,y=M+1,C=M+2;r=Pr(this,f,t,n,l,u,h,b,y,C),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const S=m,x=m+1,M=m+2;r=Pr(this,a,t,n,l,u,h,S,x,M),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function yh(i,t,e,n,r,s,a,o){let c;if(t.side===Fe?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,t.side===Un,o),c===null)return null;Cr.copy(o),Cr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Cr);return l<e.near||l>e.far?null:{distance:l,point:Cr.clone(),object:i}}function Pr(i,t,e,n,r,s,a,o,c,l){i.getVertexPosition(o,_i),i.getVertexPosition(c,xi),i.getVertexPosition(l,vi);const u=yh(i,t,e,n,_i,xi,vi,Rr);if(u){r&&(br.fromBufferAttribute(r,o),Tr.fromBufferAttribute(r,c),Ar.fromBufferAttribute(r,l),u.uv=Qe.getInterpolation(Rr,_i,xi,vi,br,Tr,Ar,new ot)),s&&(br.fromBufferAttribute(s,o),Tr.fromBufferAttribute(s,c),Ar.fromBufferAttribute(s,l),u.uv1=Qe.getInterpolation(Rr,_i,xi,vi,br,Tr,Ar,new ot),u.uv2=u.uv1),a&&(Ha.fromBufferAttribute(a,o),ka.fromBufferAttribute(a,c),Va.fromBufferAttribute(a,l),u.normal=Qe.getInterpolation(Rr,_i,xi,vi,Ha,ka,Va,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new U,materialIndex:0};Qe.getNormal(_i,xi,vi,h.normal),u.face=h}return u}class Bt extends he{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,r,a,2),g("x","z","y",1,-1,t,n,-e,r,a,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(h,2));function g(_,m,f,S,x,M,T,b,y,C,v){const E=M/y,L=T/C,I=M/2,k=T/2,D=b/2,F=y+1,z=C+1;let H=0,V=0;const K=new U;for(let $=0;$<z;$++){const ut=$*L-k;for(let ht=0;ht<F;ht++){const q=ht*E-I;K[_]=q*S,K[m]=ut*x,K[f]=D,l.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[f]=b>0?1:-1,u.push(K.x,K.y,K.z),h.push(ht/y),h.push(1-$/C),H+=1}}for(let $=0;$<C;$++)for(let ut=0;ut<y;ut++){const ht=d+ut+F*$,q=d+ut+F*($+1),st=d+(ut+1)+F*($+1),yt=d+(ut+1)+F*$;c.push(ht,q,yt),c.push(q,st,yt),V+=6}o.addGroup(p,V,v),p+=V,d+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ii(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ue(i){const t={};for(let e=0;e<i.length;e++){const n=Ii(i[e]);for(const r in n)t[r]=n[r]}return t}function wh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function al(i){return i.getRenderTarget()===null?i.outputColorSpace:ne.workingColorSpace}const Eh={clone:Ii,merge:Ue};var bh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Th=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends Oi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bh,this.fragmentShader=Th,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ii(t.uniforms),this.uniformsGroups=wh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class cl extends oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=gn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ve extends cl{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ir*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ir*2*Math.atan(Math.tan(Zi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zi*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Mi=-90,Si=1;class Ah extends oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ve(Mi,Si,t,e);r.layers=this.layers,this.add(r);const s=new Ve(Mi,Si,t,e);s.layers=this.layers,this.add(s);const a=new Ve(Mi,Si,t,e);a.layers=this.layers,this.add(a);const o=new Ve(Mi,Si,t,e);o.layers=this.layers,this.add(o);const c=new Ve(Mi,Si,t,e);c.layers=this.layers,this.add(c);const l=new Ve(Mi,Si,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===gn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Jr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(h,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ll extends Be{constructor(t,e,n,r,s,a,o,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Li,super(t,e,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Rh extends Kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];e.encoding!==void 0&&(Ji("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Zn?ge:je),this.texture=new ll(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:qe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Bt(5,5,5),s=new Nn({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:Cn});s.uniforms.tEquirect.value=e;const a=new lt(r,s),o=e.minFilter;return e.minFilter===er&&(e.minFilter=qe),new Ah(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const Gs=new U,Ch=new U,Ph=new Zt;class Tn{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Gs.subVectors(n,e).cross(Ch.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Gs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ph.getNormalMatrix(t),r=this.coplanarPoint(Gs).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vn=new Ni,Lr=new U;class bo{constructor(t=new Tn,e=new Tn,n=new Tn,r=new Tn,s=new Tn,a=new Tn){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=gn){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],h=r[6],d=r[7],p=r[8],g=r[9],_=r[10],m=r[11],f=r[12],S=r[13],x=r[14],M=r[15];if(n[0].setComponents(c-s,d-l,m-p,M-f).normalize(),n[1].setComponents(c+s,d+l,m+p,M+f).normalize(),n[2].setComponents(c+a,d+u,m+g,M+S).normalize(),n[3].setComponents(c-a,d-u,m-g,M-S).normalize(),n[4].setComponents(c-o,d-h,m-_,M-x).normalize(),e===gn)n[5].setComponents(c+o,d+h,m+_,M+x).normalize();else if(e===Jr)n[5].setComponents(o,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vn)}intersectsSprite(t){return Vn.center.set(0,0,0),Vn.radius=.7071067811865476,Vn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Lr.x=r.normal.x>0?t.max.x:t.min.x,Lr.y=r.normal.y>0?t.max.y:t.min.y,Lr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ul(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Lh(i,t){const e=t.isWebGL2,n=new WeakMap;function r(l,u){const h=l.array,d=l.usage,p=h.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,h,d),l.onUploadCallback();let _;if(h instanceof Float32Array)_=i.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=i.SHORT;else if(h instanceof Uint32Array)_=i.UNSIGNED_INT;else if(h instanceof Int32Array)_=i.INT;else if(h instanceof Int8Array)_=i.BYTE;else if(h instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:p}}function s(l,u,h){const d=u.array,p=u._updateRange,g=u.updateRanges;if(i.bindBuffer(h,l),p.count===-1&&g.length===0&&i.bufferSubData(h,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){const f=g[_];e?i.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}p.count!==-1&&(e?i.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);if(h===void 0)n.set(l,r(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,l,u),h.version=l.version}}return{get:a,remove:o,update:c}}class _e extends he{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,h=t/o,d=e/c,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const S=f*d-a;for(let x=0;x<l;x++){const M=x*h-s;g.push(M,-S,0),_.push(0,0,1),m.push(x/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<o;S++){const x=S+l*f,M=S+l*(f+1),T=S+1+l*(f+1),b=S+1+l*f;p.push(x,M,b),p.push(M,T,b)}this.setIndex(p),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _e(t.width,t.height,t.widthSegments,t.heightSegments)}}var Dh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uh=`#ifdef USE_ALPHAHASH
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
#endif`,Ih=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Oh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Fh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zh=`#ifdef USE_AOMAP
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
#endif`,Bh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gh=`#ifdef USE_BATCHING
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
#endif`,Hh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,kh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xh=`#ifdef USE_IRIDESCENCE
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
#endif`,Yh=`#ifdef USE_BUMPMAP
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
#endif`,qh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$h=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ed=`#define PI 3.141592653589793
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
} // validated`,nd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,id=`vec3 transformedNormal = objectNormal;
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
#endif`,rd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,od=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ad=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cd="gl_FragColor = linearToOutputTexel( gl_FragColor );",ld=`
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
}`,ud=`#ifdef USE_ENVMAP
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
#endif`,hd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dd=`#ifdef USE_ENVMAP
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
#endif`,fd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pd=`#ifdef USE_ENVMAP
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
#endif`,md=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_d=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vd=`#ifdef USE_GRADIENTMAP
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
}`,Md=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Sd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ed=`uniform bool receiveShadow;
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
#endif`,bd=`#ifdef USE_ENVMAP
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
#endif`,Td=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pd=`PhysicalMaterial material;
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
#endif`,Ld=`struct PhysicalMaterial {
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
}`,Dd=`
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
#endif`,Ud=`#if defined( RE_IndirectDiffuse )
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
#endif`,Id=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Od=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,zd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Bd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kd=`#if defined( USE_POINTS_UV )
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
#endif`,Vd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yd=`#ifdef USE_MORPHNORMALS
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
#endif`,qd=`#ifdef USE_MORPHTARGETS
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
#endif`,jd=`#ifdef USE_MORPHTARGETS
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
#endif`,Zd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Kd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$d=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tf=`#ifdef USE_NORMALMAP
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
#endif`,ef=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,of=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,af=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,df=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ff=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_f=`float getShadowMask() {
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
}`,xf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vf=`#ifdef USE_SKINNING
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
#endif`,Mf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sf=`#ifdef USE_SKINNING
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
#endif`,yf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ef=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tf=`#ifdef USE_TRANSMISSION
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
#endif`,Af=`#ifdef USE_TRANSMISSION
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
#endif`,Rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Df=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Uf=`uniform sampler2D t2D;
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
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ff=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zf=`#include <common>
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
}`,Bf=`#if DEPTH_PACKING == 3200
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
}`,Gf=`#define DISTANCE
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
}`,Hf=`#define DISTANCE
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
}`,kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wf=`uniform float scale;
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
}`,Xf=`uniform vec3 diffuse;
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
}`,Yf=`#include <common>
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
}`,qf=`uniform vec3 diffuse;
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
}`,jf=`#define LAMBERT
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
}`,Zf=`#define LAMBERT
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
}`,Kf=`#define MATCAP
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
}`,Jf=`#define MATCAP
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
}`,$f=`#define NORMAL
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
}`,Qf=`#define NORMAL
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
}`,tp=`#define PHONG
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
}`,ep=`#define PHONG
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
}`,np=`#define STANDARD
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
}`,ip=`#define STANDARD
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
}`,rp=`#define TOON
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
}`,sp=`#define TOON
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
}`,op=`uniform float size;
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
}`,ap=`uniform vec3 diffuse;
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
}`,cp=`#include <common>
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
}`,lp=`uniform vec3 color;
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
}`,up=`uniform float rotation;
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
}`,hp=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:Dh,alphahash_pars_fragment:Uh,alphamap_fragment:Ih,alphamap_pars_fragment:Nh,alphatest_fragment:Oh,alphatest_pars_fragment:Fh,aomap_fragment:zh,aomap_pars_fragment:Bh,batching_pars_vertex:Gh,batching_vertex:Hh,begin_vertex:kh,beginnormal_vertex:Vh,bsdfs:Wh,iridescence_fragment:Xh,bumpmap_pars_fragment:Yh,clipping_planes_fragment:qh,clipping_planes_pars_fragment:jh,clipping_planes_pars_vertex:Zh,clipping_planes_vertex:Kh,color_fragment:Jh,color_pars_fragment:$h,color_pars_vertex:Qh,color_vertex:td,common:ed,cube_uv_reflection_fragment:nd,defaultnormal_vertex:id,displacementmap_pars_vertex:rd,displacementmap_vertex:sd,emissivemap_fragment:od,emissivemap_pars_fragment:ad,colorspace_fragment:cd,colorspace_pars_fragment:ld,envmap_fragment:ud,envmap_common_pars_fragment:hd,envmap_pars_fragment:dd,envmap_pars_vertex:fd,envmap_physical_pars_fragment:bd,envmap_vertex:pd,fog_vertex:md,fog_pars_vertex:gd,fog_fragment:_d,fog_pars_fragment:xd,gradientmap_pars_fragment:vd,lightmap_fragment:Md,lightmap_pars_fragment:Sd,lights_lambert_fragment:yd,lights_lambert_pars_fragment:wd,lights_pars_begin:Ed,lights_toon_fragment:Td,lights_toon_pars_fragment:Ad,lights_phong_fragment:Rd,lights_phong_pars_fragment:Cd,lights_physical_fragment:Pd,lights_physical_pars_fragment:Ld,lights_fragment_begin:Dd,lights_fragment_maps:Ud,lights_fragment_end:Id,logdepthbuf_fragment:Nd,logdepthbuf_pars_fragment:Od,logdepthbuf_pars_vertex:Fd,logdepthbuf_vertex:zd,map_fragment:Bd,map_pars_fragment:Gd,map_particle_fragment:Hd,map_particle_pars_fragment:kd,metalnessmap_fragment:Vd,metalnessmap_pars_fragment:Wd,morphcolor_vertex:Xd,morphnormal_vertex:Yd,morphtarget_pars_vertex:qd,morphtarget_vertex:jd,normal_fragment_begin:Zd,normal_fragment_maps:Kd,normal_pars_fragment:Jd,normal_pars_vertex:$d,normal_vertex:Qd,normalmap_pars_fragment:tf,clearcoat_normal_fragment_begin:ef,clearcoat_normal_fragment_maps:nf,clearcoat_pars_fragment:rf,iridescence_pars_fragment:sf,opaque_fragment:of,packing:af,premultiplied_alpha_fragment:cf,project_vertex:lf,dithering_fragment:uf,dithering_pars_fragment:hf,roughnessmap_fragment:df,roughnessmap_pars_fragment:ff,shadowmap_pars_fragment:pf,shadowmap_pars_vertex:mf,shadowmap_vertex:gf,shadowmask_pars_fragment:_f,skinbase_vertex:xf,skinning_pars_vertex:vf,skinning_vertex:Mf,skinnormal_vertex:Sf,specularmap_fragment:yf,specularmap_pars_fragment:wf,tonemapping_fragment:Ef,tonemapping_pars_fragment:bf,transmission_fragment:Tf,transmission_pars_fragment:Af,uv_pars_fragment:Rf,uv_pars_vertex:Cf,uv_vertex:Pf,worldpos_vertex:Lf,background_vert:Df,background_frag:Uf,backgroundCube_vert:If,backgroundCube_frag:Nf,cube_vert:Of,cube_frag:Ff,depth_vert:zf,depth_frag:Bf,distanceRGBA_vert:Gf,distanceRGBA_frag:Hf,equirect_vert:kf,equirect_frag:Vf,linedashed_vert:Wf,linedashed_frag:Xf,meshbasic_vert:Yf,meshbasic_frag:qf,meshlambert_vert:jf,meshlambert_frag:Zf,meshmatcap_vert:Kf,meshmatcap_frag:Jf,meshnormal_vert:$f,meshnormal_frag:Qf,meshphong_vert:tp,meshphong_frag:ep,meshphysical_vert:np,meshphysical_frag:ip,meshtoon_vert:rp,meshtoon_frag:sp,points_vert:op,points_frag:ap,shadow_vert:cp,shadow_frag:lp,sprite_vert:up,sprite_frag:hp},vt={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},rn={basic:{uniforms:Ue([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Ue([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new It(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Ue([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Ue([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Ue([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new It(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Ue([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Ue([vt.points,vt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Ue([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Ue([vt.common,vt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Ue([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Ue([vt.sprite,vt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Ue([vt.common,vt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Ue([vt.lights,vt.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};rn.physical={uniforms:Ue([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Dr={r:0,b:0,g:0};function dp(i,t,e,n,r,s,a){const o=new It(0);let c=s===!0?0:1,l,u,h=null,d=0,p=null;function g(m,f){let S=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?e:t).get(x)),x===null?_(o,c):x&&x.isColor&&(_(x,1),S=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===rs)?(u===void 0&&(u=new lt(new Bt(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Ii(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,b,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=ne.getTransfer(x.colorSpace)!==re,(h!==x||d!==x.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new lt(new _e(2,2),new Nn({name:"BackgroundMaterial",uniforms:Ii(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=ne.getTransfer(x.colorSpace)!==re,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,p=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,f){m.getRGB(Dr,al(i)),n.buffers.color.setClear(Dr.r,Dr.g,Dr.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),c=f,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(o,c)},render:g}}function fp(i,t,e,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=m(null);let l=c,u=!1;function h(D,F,z,H,V){let K=!1;if(a){const $=_(H,z,F);l!==$&&(l=$,p(l.object)),K=f(D,H,z,V),K&&S(D,H,z,V)}else{const $=F.wireframe===!0;(l.geometry!==H.id||l.program!==z.id||l.wireframe!==$)&&(l.geometry=H.id,l.program=z.id,l.wireframe=$,K=!0)}V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(K||u)&&(u=!1,C(D,F,z,H),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function p(D){return n.isWebGL2?i.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?i.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function _(D,F,z){const H=z.wireframe===!0;let V=o[D.id];V===void 0&&(V={},o[D.id]=V);let K=V[F.id];K===void 0&&(K={},V[F.id]=K);let $=K[H];return $===void 0&&($=m(d()),K[H]=$),$}function m(D){const F=[],z=[],H=[];for(let V=0;V<r;V++)F[V]=0,z[V]=0,H[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:H,object:D,attributes:{},index:null}}function f(D,F,z,H){const V=l.attributes,K=F.attributes;let $=0;const ut=z.getAttributes();for(const ht in ut)if(ut[ht].location>=0){const st=V[ht];let yt=K[ht];if(yt===void 0&&(ht==="instanceMatrix"&&D.instanceMatrix&&(yt=D.instanceMatrix),ht==="instanceColor"&&D.instanceColor&&(yt=D.instanceColor)),st===void 0||st.attribute!==yt||yt&&st.data!==yt.data)return!0;$++}return l.attributesNum!==$||l.index!==H}function S(D,F,z,H){const V={},K=F.attributes;let $=0;const ut=z.getAttributes();for(const ht in ut)if(ut[ht].location>=0){let st=K[ht];st===void 0&&(ht==="instanceMatrix"&&D.instanceMatrix&&(st=D.instanceMatrix),ht==="instanceColor"&&D.instanceColor&&(st=D.instanceColor));const yt={};yt.attribute=st,st&&st.data&&(yt.data=st.data),V[ht]=yt,$++}l.attributes=V,l.attributesNum=$,l.index=H}function x(){const D=l.newAttributes;for(let F=0,z=D.length;F<z;F++)D[F]=0}function M(D){T(D,0)}function T(D,F){const z=l.newAttributes,H=l.enabledAttributes,V=l.attributeDivisors;z[D]=1,H[D]===0&&(i.enableVertexAttribArray(D),H[D]=1),V[D]!==F&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,F),V[D]=F)}function b(){const D=l.newAttributes,F=l.enabledAttributes;for(let z=0,H=F.length;z<H;z++)F[z]!==D[z]&&(i.disableVertexAttribArray(z),F[z]=0)}function y(D,F,z,H,V,K,$){$===!0?i.vertexAttribIPointer(D,F,z,V,K):i.vertexAttribPointer(D,F,z,H,V,K)}function C(D,F,z,H){if(n.isWebGL2===!1&&(D.isInstancedMesh||H.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const V=H.attributes,K=z.getAttributes(),$=F.defaultAttributeValues;for(const ut in K){const ht=K[ut];if(ht.location>=0){let q=V[ut];if(q===void 0&&(ut==="instanceMatrix"&&D.instanceMatrix&&(q=D.instanceMatrix),ut==="instanceColor"&&D.instanceColor&&(q=D.instanceColor)),q!==void 0){const st=q.normalized,yt=q.itemSize,Rt=e.get(q);if(Rt===void 0)continue;const Et=Rt.buffer,W=Rt.type,nt=Rt.bytesPerElement,St=n.isWebGL2===!0&&(W===i.INT||W===i.UNSIGNED_INT||q.gpuType===Vc);if(q.isInterleavedBufferAttribute){const Ct=q.data,P=Ct.stride,et=q.offset;if(Ct.isInstancedInterleavedBuffer){for(let j=0;j<ht.locationSize;j++)T(ht.location+j,Ct.meshPerAttribute);D.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Ct.meshPerAttribute*Ct.count)}else for(let j=0;j<ht.locationSize;j++)M(ht.location+j);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let j=0;j<ht.locationSize;j++)y(ht.location+j,yt/ht.locationSize,W,st,P*nt,(et+yt/ht.locationSize*j)*nt,St)}else{if(q.isInstancedBufferAttribute){for(let Ct=0;Ct<ht.locationSize;Ct++)T(ht.location+Ct,q.meshPerAttribute);D.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Ct=0;Ct<ht.locationSize;Ct++)M(ht.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let Ct=0;Ct<ht.locationSize;Ct++)y(ht.location+Ct,yt/ht.locationSize,W,st,yt*nt,yt/ht.locationSize*Ct*nt,St)}}else if($!==void 0){const st=$[ut];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(ht.location,st);break;case 3:i.vertexAttrib3fv(ht.location,st);break;case 4:i.vertexAttrib4fv(ht.location,st);break;default:i.vertexAttrib1fv(ht.location,st)}}}}b()}function v(){I();for(const D in o){const F=o[D];for(const z in F){const H=F[z];for(const V in H)g(H[V].object),delete H[V];delete F[z]}delete o[D]}}function E(D){if(o[D.id]===void 0)return;const F=o[D.id];for(const z in F){const H=F[z];for(const V in H)g(H[V].object),delete H[V];delete F[z]}delete o[D.id]}function L(D){for(const F in o){const z=o[F];if(z[D.id]===void 0)continue;const H=z[D.id];for(const V in H)g(H[V].object),delete H[V];delete z[D.id]}}function I(){k(),u=!0,l!==c&&(l=c,p(l.object))}function k(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:I,resetDefaultState:k,dispose:v,releaseStatesOfGeometry:E,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:M,disableUnusedAttributes:b}}function pp(i,t,e,n){const r=n.isWebGL2;let s;function a(u){s=u}function o(u,h){i.drawArrays(s,u,h),e.update(h,s,1)}function c(u,h,d){if(d===0)return;let p,g;if(r)p=i,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,u,h,d),e.update(h,s,d)}function l(u,h,d){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{p.multiDrawArraysWEBGL(s,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];e.update(g,s,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function mp(i,t,e){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const y=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,M=a||t.has("OES_texture_float"),T=x&&M,b=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:S,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:T,maxSamples:b}}function gp(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new Tn,o=new Zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||r;return r=d,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const S=s?0:n,x=S*4;let M=f.clippingState||null;c.value=M,M=u(g,d,x,p);for(let T=0;T!==x;++T)M[T]=e[T];f.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,M=p;x!==_;++x,M+=4)a.copy(h[x]).applyMatrix4(S,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function _p(i){let t=new WeakMap;function e(a,o){return o===Yr?a.mapping=Li:o===oo&&(a.mapping=Di),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Yr||o===oo)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Rh(c.height/2);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",r),e(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class hl extends cl{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ti=4,Wa=[.125,.215,.35,.446,.526,.582],Yn=20,Hs=new hl,Xa=new It;let ks=null,Vs=0,Ws=0;const Wn=(1+Math.sqrt(5))/2,yi=1/Wn,Ya=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Wn,yi),new U(0,Wn,-yi),new U(yi,0,Wn),new U(-yi,0,Wn),new U(Wn,yi,0),new U(-Wn,yi,0)];class uo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){ks=this._renderer.getRenderTarget(),Vs=this._renderer.getActiveCubeFace(),Ws=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Za(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ja(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ks,Vs,Ws),t.scissorTest=!1,Ur(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Li||t.mapping===Di?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ks=this._renderer.getRenderTarget(),Vs=this._renderer.getActiveCubeFace(),Ws=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:qe,minFilter:qe,generateMipmaps:!1,type:nr,format:en,colorSpace:vn,depthBuffer:!1},r=qa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qa(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xp(s)),this._blurMaterial=vp(s,t,e)}return r}_compileMaterial(t){const e=new lt(this._lodPlanes[0],t);this._renderer.compile(e,Hs)}_sceneToCubeUV(t,e,n,r){const o=new Ve(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Xa),u.toneMapping=Pn,u.autoClear=!1;const p=new Fi({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),g=new lt(new Bt,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Xa),_=!0);for(let f=0;f<6;f++){const S=f%3;S===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):S===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const x=this._cubeSize;Ur(r,S*x,f>2?x:0,x,x),u.setRenderTarget(r),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Li||t.mapping===Di;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Za()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ja());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new lt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;Ur(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Hs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ya[(r-1)%Ya.length];this._blur(t,r-1,r,s,a)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new lt(this._lodPlanes[r],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Yn-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Yn;m>Yn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yn}`);const f=[];let S=0;for(let y=0;y<Yn;++y){const C=y/_,v=Math.exp(-C*C/2);f.push(v),y===0?S+=v:y<m&&(S+=2*v)}for(let y=0;y<f.length;y++)f[y]=f[y]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const M=this._sizeLods[r],T=3*M*(r>x-Ti?r-x+Ti:0),b=4*(this._cubeSize-M);Ur(e,T,b,3*M,2*M),c.setRenderTarget(e),c.render(h,Hs)}}function xp(i){const t=[],e=[],n=[];let r=i;const s=i-Ti+1+Wa.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>i-Ti?c=Wa[a-i+Ti-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,f=1,S=new Float32Array(_*g*p),x=new Float32Array(m*g*p),M=new Float32Array(f*g*p);for(let b=0;b<p;b++){const y=b%3*2/3-1,C=b>2?0:-1,v=[y,C,0,y+2/3,C,0,y+2/3,C+1,0,y,C,0,y+2/3,C+1,0,y,C+1,0];S.set(v,_*g*b),x.set(d,m*g*b);const E=[b,b,b,b,b,b];M.set(E,f*g*b)}const T=new he;T.setAttribute("position",new ve(S,_)),T.setAttribute("uv",new ve(x,m)),T.setAttribute("faceIndex",new ve(M,f)),t.push(T),r>Ti&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function qa(i,t,e){const n=new Kn(i,t,e);return n.texture.mapping=rs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ur(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function vp(i,t,e){const n=new Float32Array(Yn),r=new U(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:To(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function ja(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:To(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Za(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function To(){return`

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
	`}function Mp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Yr||c===oo,u=c===Li||c===Di;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=t.get(o);return e===null&&(e=new uo(i)),h=l?e.fromEquirectangular(o,h):e.fromCubemap(o,h),t.set(o,h),h.texture}else{if(t.has(o))return t.get(o).texture;{const h=o.image;if(l&&h&&h.height>0||u&&h&&r(h)){e===null&&(e=new uo(i));const d=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Sp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const r=e(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function yp(i,t,e,n){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(h){const d=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const S=p.array;_=p.version;for(let x=0,M=S.length;x<M;x+=3){const T=S[x+0],b=S[x+1],y=S[x+2];d.push(T,b,b,y,y,T)}}else if(g!==void 0){const S=g.array;_=g.version;for(let x=0,M=S.length/3-1;x<M;x+=3){const T=x+0,b=x+1,y=x+2;d.push(T,b,b,y,y,T)}}else return;const m=new(Qc(d)?ol:sl)(d,1);m.version=_;const f=s.get(h);f&&t.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function wp(i,t,e,n){const r=n.isWebGL2;let s;function a(p){s=p}let o,c;function l(p){o=p.type,c=p.bytesPerElement}function u(p,g){i.drawElements(s,g,o,p*c),e.update(g,s,1)}function h(p,g,_){if(_===0)return;let m,f;if(r)m=i,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,g,o,p*c,_),e.update(g,s,_)}function d(p,g,_){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<_;f++)this.render(p[f]/c,g[f]);else{m.multiDrawElementsWEBGL(s,g,0,o,p,0,_);let f=0;for(let S=0;S<_;S++)f+=g[S];e.update(f,s,1)}}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function Ep(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function bp(i,t){return i[0]-t[0]}function Tp(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Ap(i,t,e){const n={},r=new Float32Array(8),s=new WeakMap,a=new ae,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,h){const d=l.morphTargetInfluences;if(t.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==_){let F=function(){k.dispose(),s.delete(u),u.removeEventListener("dispose",F)};var p=F;m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],y=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let v=0;x===!0&&(v=1),M===!0&&(v=2),T===!0&&(v=3);let E=u.attributes.position.count*v,L=1;E>t.maxTextureSize&&(L=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const I=new Float32Array(E*L*4*_),k=new nl(I,E,L,_);k.type=Rn,k.needsUpdate=!0;const D=v*4;for(let z=0;z<_;z++){const H=b[z],V=y[z],K=C[z],$=E*L*4*z;for(let ut=0;ut<H.count;ut++){const ht=ut*D;x===!0&&(a.fromBufferAttribute(H,ut),I[$+ht+0]=a.x,I[$+ht+1]=a.y,I[$+ht+2]=a.z,I[$+ht+3]=0),M===!0&&(a.fromBufferAttribute(V,ut),I[$+ht+4]=a.x,I[$+ht+5]=a.y,I[$+ht+6]=a.z,I[$+ht+7]=0),T===!0&&(a.fromBufferAttribute(K,ut),I[$+ht+8]=a.x,I[$+ht+9]=a.y,I[$+ht+10]=a.z,I[$+ht+11]=K.itemSize===4?a.w:1)}}m={count:_,texture:k,size:new ot(E,L)},s.set(u,m),u.addEventListener("dispose",F)}let f=0;for(let x=0;x<d.length;x++)f+=d[x];const S=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(i,"morphTargetBaseInfluence",S),h.getUniforms().setValue(i,"morphTargetInfluences",d),h.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let M=0;M<g;M++)_[M]=[M,0];n[u.id]=_}for(let M=0;M<g;M++){const T=_[M];T[0]=M,T[1]=d[M]}_.sort(Tp);for(let M=0;M<8;M++)M<g&&_[M][1]?(o[M][0]=_[M][0],o[M][1]=_[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(bp);const m=u.morphAttributes.position,f=u.morphAttributes.normal;let S=0;for(let M=0;M<8;M++){const T=o[M],b=T[0],y=T[1];b!==Number.MAX_SAFE_INTEGER&&y?(m&&u.getAttribute("morphTarget"+M)!==m[b]&&u.setAttribute("morphTarget"+M,m[b]),f&&u.getAttribute("morphNormal"+M)!==f[b]&&u.setAttribute("morphNormal"+M,f[b]),r[M]=y,S+=y):(m&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),f&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),r[M]=0)}const x=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(i,"morphTargetBaseInfluence",x),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function Rp(i,t,e,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(r.get(h)!==l&&(t.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}class dl extends Be{constructor(t,e,n,r,s,a,o,c,l,u){if(u=u!==void 0?u:jn,u!==jn&&u!==Ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===jn&&(n=An),n===void 0&&u===Ui&&(n=qn),super(null,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ne,this.minFilter=c!==void 0?c:Ne,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const fl=new Be,pl=new dl(1,1);pl.compareFunction=$c;const ml=new nl,gl=new hh,_l=new ll,Ka=[],Ja=[],$a=new Float32Array(16),Qa=new Float32Array(9),tc=new Float32Array(4);function zi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Ka[r];if(s===void 0&&(s=new Float32Array(r),Ka[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function Me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Se(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function os(i,t){let e=Ja[t];e===void 0&&(e=new Int32Array(t),Ja[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Cp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Pp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2fv(this.addr,t),Se(e,t)}}function Lp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;i.uniform3fv(this.addr,t),Se(e,t)}}function Dp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4fv(this.addr,t),Se(e,t)}}function Up(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;tc.set(n),i.uniformMatrix2fv(this.addr,!1,tc),Se(e,n)}}function Ip(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;Qa.set(n),i.uniformMatrix3fv(this.addr,!1,Qa),Se(e,n)}}function Np(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;$a.set(n),i.uniformMatrix4fv(this.addr,!1,$a),Se(e,n)}}function Op(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Fp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2iv(this.addr,t),Se(e,t)}}function zp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3iv(this.addr,t),Se(e,t)}}function Bp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4iv(this.addr,t),Se(e,t)}}function Gp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Hp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2uiv(this.addr,t),Se(e,t)}}function kp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3uiv(this.addr,t),Se(e,t)}}function Vp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4uiv(this.addr,t),Se(e,t)}}function Wp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?pl:fl;e.setTexture2D(t||s,r)}function Xp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||gl,r)}function Yp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||_l,r)}function qp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||ml,r)}function jp(i){switch(i){case 5126:return Cp;case 35664:return Pp;case 35665:return Lp;case 35666:return Dp;case 35674:return Up;case 35675:return Ip;case 35676:return Np;case 5124:case 35670:return Op;case 35667:case 35671:return Fp;case 35668:case 35672:return zp;case 35669:case 35673:return Bp;case 5125:return Gp;case 36294:return Hp;case 36295:return kp;case 36296:return Vp;case 35678:case 36198:case 36298:case 36306:case 35682:return Wp;case 35679:case 36299:case 36307:return Xp;case 35680:case 36300:case 36308:case 36293:return Yp;case 36289:case 36303:case 36311:case 36292:return qp}}function Zp(i,t){i.uniform1fv(this.addr,t)}function Kp(i,t){const e=zi(t,this.size,2);i.uniform2fv(this.addr,e)}function Jp(i,t){const e=zi(t,this.size,3);i.uniform3fv(this.addr,e)}function $p(i,t){const e=zi(t,this.size,4);i.uniform4fv(this.addr,e)}function Qp(i,t){const e=zi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function tm(i,t){const e=zi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function em(i,t){const e=zi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function nm(i,t){i.uniform1iv(this.addr,t)}function im(i,t){i.uniform2iv(this.addr,t)}function rm(i,t){i.uniform3iv(this.addr,t)}function sm(i,t){i.uniform4iv(this.addr,t)}function om(i,t){i.uniform1uiv(this.addr,t)}function am(i,t){i.uniform2uiv(this.addr,t)}function cm(i,t){i.uniform3uiv(this.addr,t)}function lm(i,t){i.uniform4uiv(this.addr,t)}function um(i,t,e){const n=this.cache,r=t.length,s=os(e,r);Me(n,s)||(i.uniform1iv(this.addr,s),Se(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||fl,s[a])}function hm(i,t,e){const n=this.cache,r=t.length,s=os(e,r);Me(n,s)||(i.uniform1iv(this.addr,s),Se(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||gl,s[a])}function dm(i,t,e){const n=this.cache,r=t.length,s=os(e,r);Me(n,s)||(i.uniform1iv(this.addr,s),Se(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||_l,s[a])}function fm(i,t,e){const n=this.cache,r=t.length,s=os(e,r);Me(n,s)||(i.uniform1iv(this.addr,s),Se(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||ml,s[a])}function pm(i){switch(i){case 5126:return Zp;case 35664:return Kp;case 35665:return Jp;case 35666:return $p;case 35674:return Qp;case 35675:return tm;case 35676:return em;case 5124:case 35670:return nm;case 35667:case 35671:return im;case 35668:case 35672:return rm;case 35669:case 35673:return sm;case 5125:return om;case 36294:return am;case 36295:return cm;case 36296:return lm;case 35678:case 36198:case 36298:case 36306:case 35682:return um;case 35679:case 36299:case 36307:return hm;case 35680:case 36300:case 36308:case 36293:return dm;case 36289:case 36303:case 36311:case 36292:return fm}}class mm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=jp(e.type)}}class gm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=pm(e.type)}}class _m{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const Xs=/(\w+)(\])?(\[|\.)?/g;function ec(i,t){i.seq.push(t),i.map[t.id]=t}function xm(i,t,e){const n=i.name,r=n.length;for(Xs.lastIndex=0;;){const s=Xs.exec(n),a=Xs.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){ec(e,l===void 0?new mm(o,i,t):new gm(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new _m(o),ec(e,h)),e=h}}}class Vr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);xm(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function nc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const vm=37297;let Mm=0;function Sm(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function ym(i){const t=ne.getPrimaries(ne.workingColorSpace),e=ne.getPrimaries(i);let n;switch(t===e?n="":t===Kr&&e===Zr?n="LinearDisplayP3ToLinearSRGB":t===Zr&&e===Kr&&(n="LinearSRGBToLinearDisplayP3"),i){case vn:case ss:return[n,"LinearTransferOETF"];case ge:case yo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ic(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Sm(i.getShaderSource(t),a)}else return r}function wm(i,t){const e=ym(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Em(i,t){let e;switch(t){case yu:e="Linear";break;case wu:e="Reinhard";break;case Eu:e="OptimizedCineon";break;case Hc:e="ACESFilmic";break;case Tu:e="AgX";break;case bu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function bm(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ai).join(`
`)}function Tm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ai).join(`
`)}function Am(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Rm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ai(i){return i!==""}function rc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Cm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ho(i){return i.replace(Cm,Lm)}const Pm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Lm(i,t){let e=Vt[t];if(e===void 0){const n=Pm.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ho(e)}const Dm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oc(i){return i.replace(Dm,Um)}function Um(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ac(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Im(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===zc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Bc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===fn&&(t="SHADOWMAP_TYPE_VSM"),t}function Nm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Li:case Di:t="ENVMAP_TYPE_CUBE";break;case rs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Om(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Di:t="ENVMAP_MODE_REFRACTION";break}return t}function Fm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Gc:t="ENVMAP_BLENDING_MULTIPLY";break;case Mu:t="ENVMAP_BLENDING_MIX";break;case Su:t="ENVMAP_BLENDING_ADD";break}return t}function zm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Bm(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Im(e),l=Nm(e),u=Om(e),h=Fm(e),d=zm(e),p=e.isWebGL2?"":bm(e),g=Tm(e),_=Am(s),m=r.createProgram();let f,S,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ai).join(`
`),f.length>0&&(f+=`
`),S=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ai).join(`
`),S.length>0&&(S+=`
`)):(f=[ac(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ai).join(`
`),S=[p,ac(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pn?"#define TONE_MAPPING":"",e.toneMapping!==Pn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Pn?Em("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,wm("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ai).join(`
`)),a=ho(a),a=rc(a,e),a=sc(a,e),o=ho(o),o=rc(o,e),o=sc(o,e),a=oc(a),o=oc(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,S=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Ta?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ta?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const M=x+f+a,T=x+S+o,b=nc(r,r.VERTEX_SHADER,M),y=nc(r,r.FRAGMENT_SHADER,T);r.attachShader(m,b),r.attachShader(m,y),e.index0AttributeName!==void 0?r.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function C(I){if(i.debug.checkShaderErrors){const k=r.getProgramInfoLog(m).trim(),D=r.getShaderInfoLog(b).trim(),F=r.getShaderInfoLog(y).trim();let z=!0,H=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,m,b,y);else{const V=ic(r,b,"vertex"),K=ic(r,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+k+`
`+V+`
`+K)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(D===""||F==="")&&(H=!1);H&&(I.diagnostics={runnable:z,programLog:k,vertexShader:{log:D,prefix:f},fragmentShader:{log:F,prefix:S}})}r.deleteShader(b),r.deleteShader(y),v=new Vr(r,m),E=Rm(r,m)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(m,vm)),L},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Mm++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=y,this}let Gm=0;class Hm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new km(t),e.set(t,n)),n}}class km{constructor(t){this.id=Gm++,this.code=t,this.usedTimes=0}}function Vm(i,t,e,n,r,s,a){const o=new il,c=new Hm,l=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===0?"uv":`uv${v}`}function m(v,E,L,I,k){const D=I.fog,F=k.geometry,z=v.isMeshStandardMaterial?I.environment:null,H=(v.isMeshStandardMaterial?e:t).get(v.envMap||z),V=H&&H.mapping===rs?H.image.height:null,K=g[v.type];v.precision!==null&&(p=r.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const $=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ut=$!==void 0?$.length:0;let ht=0;F.morphAttributes.position!==void 0&&(ht=1),F.morphAttributes.normal!==void 0&&(ht=2),F.morphAttributes.color!==void 0&&(ht=3);let q,st,yt,Rt;if(K){const Pe=rn[K];q=Pe.vertexShader,st=Pe.fragmentShader}else q=v.vertexShader,st=v.fragmentShader,c.update(v),yt=c.getVertexShaderID(v),Rt=c.getFragmentShaderID(v);const Et=i.getRenderTarget(),W=k.isInstancedMesh===!0,nt=k.isBatchedMesh===!0,St=!!v.map,Ct=!!v.matcap,P=!!H,et=!!v.aoMap,j=!!v.lightMap,it=!!v.bumpMap,J=!!v.normalMap,wt=!!v.displacementMap,ft=!!v.emissiveMap,A=!!v.metalnessMap,w=!!v.roughnessMap,B=v.anisotropy>0,Q=v.clearcoat>0,tt=v.iridescence>0,rt=v.sheen>0,Pt=v.transmission>0,Mt=B&&!!v.anisotropyMap,Tt=Q&&!!v.clearcoatMap,Nt=Q&&!!v.clearcoatNormalMap,Gt=Q&&!!v.clearcoatRoughnessMap,at=tt&&!!v.iridescenceMap,Yt=tt&&!!v.iridescenceThicknessMap,N=rt&&!!v.sheenColorMap,ct=rt&&!!v.sheenRoughnessMap,_t=!!v.specularMap,dt=!!v.specularColorMap,Lt=!!v.specularIntensityMap,qt=Pt&&!!v.transmissionMap,$t=Pt&&!!v.thicknessMap,Wt=!!v.gradientMap,gt=!!v.alphaMap,O=v.alphaTest>0,pt=!!v.alphaHash,mt=!!v.extensions,Ot=!!F.attributes.uv1,Dt=!!F.attributes.uv2,Qt=!!F.attributes.uv3;let te=Pn;return v.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(te=i.toneMapping),{isWebGL2:u,shaderID:K,shaderType:v.type,shaderName:v.name,vertexShader:q,fragmentShader:st,defines:v.defines,customVertexShaderID:yt,customFragmentShaderID:Rt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:nt,instancing:W,instancingColor:W&&k.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Et===null?i.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:vn,map:St,matcap:Ct,envMap:P,envMapMode:P&&H.mapping,envMapCubeUVHeight:V,aoMap:et,lightMap:j,bumpMap:it,normalMap:J,displacementMap:d&&wt,emissiveMap:ft,normalMapObjectSpace:J&&v.normalMapType===zu,normalMapTangentSpace:J&&v.normalMapType===Jc,metalnessMap:A,roughnessMap:w,anisotropy:B,anisotropyMap:Mt,clearcoat:Q,clearcoatMap:Tt,clearcoatNormalMap:Nt,clearcoatRoughnessMap:Gt,iridescence:tt,iridescenceMap:at,iridescenceThicknessMap:Yt,sheen:rt,sheenColorMap:N,sheenRoughnessMap:ct,specularMap:_t,specularColorMap:dt,specularIntensityMap:Lt,transmission:Pt,transmissionMap:qt,thicknessMap:$t,gradientMap:Wt,opaque:v.transparent===!1&&v.blending===Ci,alphaMap:gt,alphaTest:O,alphaHash:pt,combine:v.combine,mapUv:St&&_(v.map.channel),aoMapUv:et&&_(v.aoMap.channel),lightMapUv:j&&_(v.lightMap.channel),bumpMapUv:it&&_(v.bumpMap.channel),normalMapUv:J&&_(v.normalMap.channel),displacementMapUv:wt&&_(v.displacementMap.channel),emissiveMapUv:ft&&_(v.emissiveMap.channel),metalnessMapUv:A&&_(v.metalnessMap.channel),roughnessMapUv:w&&_(v.roughnessMap.channel),anisotropyMapUv:Mt&&_(v.anisotropyMap.channel),clearcoatMapUv:Tt&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:N&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:ct&&_(v.sheenRoughnessMap.channel),specularMapUv:_t&&_(v.specularMap.channel),specularColorMapUv:dt&&_(v.specularColorMap.channel),specularIntensityMapUv:Lt&&_(v.specularIntensityMap.channel),transmissionMapUv:qt&&_(v.transmissionMap.channel),thicknessMapUv:$t&&_(v.thicknessMap.channel),alphaMapUv:gt&&_(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(J||B),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Ot,vertexUv2s:Dt,vertexUv3s:Qt,pointsUvs:k.isPoints===!0&&!!F.attributes.uv&&(St||gt),fog:!!D,useFog:v.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:k.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:ht,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:te,useLegacyLights:i._useLegacyLights,decodeVideoTexture:St&&v.map.isVideoTexture===!0&&ne.getTransfer(v.map.colorSpace)===re,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===pe,flipSided:v.side===Fe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:mt&&v.extensions.derivatives===!0,extensionFragDepth:mt&&v.extensions.fragDepth===!0,extensionDrawBuffers:mt&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:mt&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:mt&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function f(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)E.push(L),E.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(S(E,v),x(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function S(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function x(v,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),v.push(o.mask)}function M(v){const E=g[v.type];let L;if(E){const I=rn[E];L=Eh.clone(I.uniforms)}else L=v.uniforms;return L}function T(v,E){let L;for(let I=0,k=l.length;I<k;I++){const D=l[I];if(D.cacheKey===E){L=D,++L.usedTimes;break}}return L===void 0&&(L=new Bm(i,E,v,s),l.push(L)),L}function b(v){if(--v.usedTimes===0){const E=l.indexOf(v);l[E]=l[l.length-1],l.pop(),v.destroy()}}function y(v){c.remove(v)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:T,releaseProgram:b,releaseShaderCache:y,programs:l,dispose:C}}function Wm(){let i=new WeakMap;function t(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function e(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function Xm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function cc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function lc(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(h,d,p,g,_,m){let f=i[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=m),t++,f}function o(h,d,p,g,_,m){const f=a(h,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?r.push(f):e.push(f)}function c(h,d,p,g,_,m){const f=a(h,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?r.unshift(f):e.unshift(f)}function l(h,d){e.length>1&&e.sort(h||Xm),n.length>1&&n.sort(d||cc),r.length>1&&r.sort(d||cc)}function u(){for(let h=t,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function Ym(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new lc,i.set(n,[a])):r>=s.length?(a=new lc,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function qm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new It};break;case"SpotLight":e={position:new U,direction:new U,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function jm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Zm=0;function Km(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Jm(i,t){const e=new qm,n=jm(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new U);const s=new U,a=new ee,o=new ee;function c(u,h){let d=0,p=0,g=0;for(let I=0;I<9;I++)r.probe[I].set(0,0,0);let _=0,m=0,f=0,S=0,x=0,M=0,T=0,b=0,y=0,C=0,v=0;u.sort(Km);const E=h===!0?Math.PI:1;for(let I=0,k=u.length;I<k;I++){const D=u[I],F=D.color,z=D.intensity,H=D.distance,V=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=F.r*z*E,p+=F.g*z*E,g+=F.b*z*E;else if(D.isLightProbe){for(let K=0;K<9;K++)r.probe[K].addScaledVector(D.sh.coefficients[K],z);v++}else if(D.isDirectionalLight){const K=e.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity*E),D.castShadow){const $=D.shadow,ut=n.get(D);ut.shadowBias=$.bias,ut.shadowNormalBias=$.normalBias,ut.shadowRadius=$.radius,ut.shadowMapSize=$.mapSize,r.directionalShadow[_]=ut,r.directionalShadowMap[_]=V,r.directionalShadowMatrix[_]=D.shadow.matrix,M++}r.directional[_]=K,_++}else if(D.isSpotLight){const K=e.get(D);K.position.setFromMatrixPosition(D.matrixWorld),K.color.copy(F).multiplyScalar(z*E),K.distance=H,K.coneCos=Math.cos(D.angle),K.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),K.decay=D.decay,r.spot[f]=K;const $=D.shadow;if(D.map&&(r.spotLightMap[y]=D.map,y++,$.updateMatrices(D),D.castShadow&&C++),r.spotLightMatrix[f]=$.matrix,D.castShadow){const ut=n.get(D);ut.shadowBias=$.bias,ut.shadowNormalBias=$.normalBias,ut.shadowRadius=$.radius,ut.shadowMapSize=$.mapSize,r.spotShadow[f]=ut,r.spotShadowMap[f]=V,b++}f++}else if(D.isRectAreaLight){const K=e.get(D);K.color.copy(F).multiplyScalar(z),K.halfWidth.set(D.width*.5,0,0),K.halfHeight.set(0,D.height*.5,0),r.rectArea[S]=K,S++}else if(D.isPointLight){const K=e.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity*E),K.distance=D.distance,K.decay=D.decay,D.castShadow){const $=D.shadow,ut=n.get(D);ut.shadowBias=$.bias,ut.shadowNormalBias=$.normalBias,ut.shadowRadius=$.radius,ut.shadowMapSize=$.mapSize,ut.shadowCameraNear=$.camera.near,ut.shadowCameraFar=$.camera.far,r.pointShadow[m]=ut,r.pointShadowMap[m]=V,r.pointShadowMatrix[m]=D.shadow.matrix,T++}r.point[m]=K,m++}else if(D.isHemisphereLight){const K=e.get(D);K.skyColor.copy(D.color).multiplyScalar(z*E),K.groundColor.copy(D.groundColor).multiplyScalar(z*E),r.hemi[x]=K,x++}}S>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=vt.LTC_FLOAT_1,r.rectAreaLTC2=vt.LTC_FLOAT_2):(r.rectAreaLTC1=vt.LTC_HALF_1,r.rectAreaLTC2=vt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=vt.LTC_FLOAT_1,r.rectAreaLTC2=vt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=vt.LTC_HALF_1,r.rectAreaLTC2=vt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=g;const L=r.hash;(L.directionalLength!==_||L.pointLength!==m||L.spotLength!==f||L.rectAreaLength!==S||L.hemiLength!==x||L.numDirectionalShadows!==M||L.numPointShadows!==T||L.numSpotShadows!==b||L.numSpotMaps!==y||L.numLightProbes!==v)&&(r.directional.length=_,r.spot.length=f,r.rectArea.length=S,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=b+y-C,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=C,r.numLightProbes=v,L.directionalLength=_,L.pointLength=m,L.spotLength=f,L.rectAreaLength=S,L.hemiLength=x,L.numDirectionalShadows=M,L.numPointShadows=T,L.numSpotShadows=b,L.numSpotMaps=y,L.numLightProbes=v,r.version=Zm++)}function l(u,h){let d=0,p=0,g=0,_=0,m=0;const f=h.matrixWorldInverse;for(let S=0,x=u.length;S<x;S++){const M=u[S];if(M.isDirectionalLight){const T=r.directional[d];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),d++}else if(M.isSpotLight){const T=r.spot[g];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),g++}else if(M.isRectAreaLight){const T=r.rectArea[_];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(f),o.identity(),a.copy(M.matrixWorld),a.premultiply(f),o.extractRotation(a),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const T=r.point[p];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(f),p++}else if(M.isHemisphereLight){const T=r.hemi[m];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(f),m++}}}return{setup:c,setupView:l,state:r}}function uc(i,t){const e=new Jm(i,t),n=[],r=[];function s(){n.length=0,r.length=0}function a(h){n.push(h)}function o(h){r.push(h)}function c(h){e.setup(n,h)}function l(h){e.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function $m(i,t){let e=new WeakMap;function n(s,a=0){const o=e.get(s);let c;return o===void 0?(c=new uc(i,t),e.set(s,[c])):a>=o.length?(c=new uc(i,t),o.push(c)):c=o[a],c}function r(){e=new WeakMap}return{get:n,dispose:r}}class Qm extends Oi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ou,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class t0 extends Oi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const e0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n0=`uniform sampler2D shadow_pass;
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
}`;function i0(i,t,e){let n=new bo;const r=new ot,s=new ot,a=new ae,o=new Qm({depthPacking:Fu}),c=new t0,l={},u=e.maxTextureSize,h={[Un]:Fe,[Fe]:Un,[pe]:pe},d=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:e0,fragmentShader:n0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new he;g.setAttribute("position",new ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new lt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zc;let f=this.type;this.render=function(b,y,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const v=i.getRenderTarget(),E=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Cn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const k=f!==fn&&this.type===fn,D=f===fn&&this.type!==fn;for(let F=0,z=b.length;F<z;F++){const H=b[F],V=H.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const K=V.getFrameExtents();if(r.multiply(K),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/K.x),r.x=s.x*K.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/K.y),r.y=s.y*K.y,V.mapSize.y=s.y)),V.map===null||k===!0||D===!0){const ut=this.type!==fn?{minFilter:Ne,magFilter:Ne}:{};V.map!==null&&V.map.dispose(),V.map=new Kn(r.x,r.y,ut),V.map.texture.name=H.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const $=V.getViewportCount();for(let ut=0;ut<$;ut++){const ht=V.getViewport(ut);a.set(s.x*ht.x,s.y*ht.y,s.x*ht.z,s.y*ht.w),I.viewport(a),V.updateMatrices(H,ut),n=V.getFrustum(),M(y,C,V.camera,H,this.type)}V.isPointLightShadow!==!0&&this.type===fn&&S(V,C),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(v,E,L)};function S(b,y){const C=t.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Kn(r.x,r.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(y,null,C,d,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(y,null,C,p,_,null)}function x(b,y,C,v){let E=null;const L=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)E=L;else if(E=C.isPointLight===!0?c:o,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const I=E.uuid,k=y.uuid;let D=l[I];D===void 0&&(D={},l[I]=D);let F=D[k];F===void 0&&(F=E.clone(),D[k]=F,y.addEventListener("dispose",T)),E=F}if(E.visible=y.visible,E.wireframe=y.wireframe,v===fn?E.side=y.shadowSide!==null?y.shadowSide:y.side:E.side=y.shadowSide!==null?y.shadowSide:h[y.side],E.alphaMap=y.alphaMap,E.alphaTest=y.alphaTest,E.map=y.map,E.clipShadows=y.clipShadows,E.clippingPlanes=y.clippingPlanes,E.clipIntersection=y.clipIntersection,E.displacementMap=y.displacementMap,E.displacementScale=y.displacementScale,E.displacementBias=y.displacementBias,E.wireframeLinewidth=y.wireframeLinewidth,E.linewidth=y.linewidth,C.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const I=i.properties.get(E);I.light=C}return E}function M(b,y,C,v,E){if(b.visible===!1)return;if(b.layers.test(y.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===fn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);const k=t.update(b),D=b.material;if(Array.isArray(D)){const F=k.groups;for(let z=0,H=F.length;z<H;z++){const V=F[z],K=D[V.materialIndex];if(K&&K.visible){const $=x(b,K,v,E);b.onBeforeShadow(i,b,y,C,k,$,V),i.renderBufferDirect(C,null,k,$,b,V),b.onAfterShadow(i,b,y,C,k,$,V)}}}else if(D.visible){const F=x(b,D,v,E);b.onBeforeShadow(i,b,y,C,k,F,null),i.renderBufferDirect(C,null,k,F,b,null),b.onAfterShadow(i,b,y,C,k,F,null)}}const I=b.children;for(let k=0,D=I.length;k<D;k++)M(I[k],y,C,v,E)}function T(b){b.target.removeEventListener("dispose",T);for(const C in l){const v=l[C],E=b.target.uuid;E in v&&(v[E].dispose(),delete v[E])}}}function r0(i,t,e){const n=e.isWebGL2;function r(){let O=!1;const pt=new ae;let mt=null;const Ot=new ae(0,0,0,0);return{setMask:function(Dt){mt!==Dt&&!O&&(i.colorMask(Dt,Dt,Dt,Dt),mt=Dt)},setLocked:function(Dt){O=Dt},setClear:function(Dt,Qt,te,ye,Pe){Pe===!0&&(Dt*=ye,Qt*=ye,te*=ye),pt.set(Dt,Qt,te,ye),Ot.equals(pt)===!1&&(i.clearColor(Dt,Qt,te,ye),Ot.copy(pt))},reset:function(){O=!1,mt=null,Ot.set(-1,0,0,0)}}}function s(){let O=!1,pt=null,mt=null,Ot=null;return{setTest:function(Dt){Dt?nt(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(Dt){pt!==Dt&&!O&&(i.depthMask(Dt),pt=Dt)},setFunc:function(Dt){if(mt!==Dt){switch(Dt){case fu:i.depthFunc(i.NEVER);break;case pu:i.depthFunc(i.ALWAYS);break;case mu:i.depthFunc(i.LESS);break;case Xr:i.depthFunc(i.LEQUAL);break;case gu:i.depthFunc(i.EQUAL);break;case _u:i.depthFunc(i.GEQUAL);break;case xu:i.depthFunc(i.GREATER);break;case vu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}mt=Dt}},setLocked:function(Dt){O=Dt},setClear:function(Dt){Ot!==Dt&&(i.clearDepth(Dt),Ot=Dt)},reset:function(){O=!1,pt=null,mt=null,Ot=null}}}function a(){let O=!1,pt=null,mt=null,Ot=null,Dt=null,Qt=null,te=null,ye=null,Pe=null;return{setTest:function(ie){O||(ie?nt(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(ie){pt!==ie&&!O&&(i.stencilMask(ie),pt=ie)},setFunc:function(ie,Le,nn){(mt!==ie||Ot!==Le||Dt!==nn)&&(i.stencilFunc(ie,Le,nn),mt=ie,Ot=Le,Dt=nn)},setOp:function(ie,Le,nn){(Qt!==ie||te!==Le||ye!==nn)&&(i.stencilOp(ie,Le,nn),Qt=ie,te=Le,ye=nn)},setLocked:function(ie){O=ie},setClear:function(ie){Pe!==ie&&(i.clearStencil(ie),Pe=ie)},reset:function(){O=!1,pt=null,mt=null,Ot=null,Dt=null,Qt=null,te=null,ye=null,Pe=null}}}const o=new r,c=new s,l=new a,u=new WeakMap,h=new WeakMap;let d={},p={},g=new WeakMap,_=[],m=null,f=!1,S=null,x=null,M=null,T=null,b=null,y=null,C=null,v=new It(0,0,0),E=0,L=!1,I=null,k=null,D=null,F=null,z=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,K=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec($)[1]),V=K>=1):$.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),V=K>=2);let ut=null,ht={};const q=i.getParameter(i.SCISSOR_BOX),st=i.getParameter(i.VIEWPORT),yt=new ae().fromArray(q),Rt=new ae().fromArray(st);function Et(O,pt,mt,Ot){const Dt=new Uint8Array(4),Qt=i.createTexture();i.bindTexture(O,Qt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let te=0;te<mt;te++)n&&(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)?i.texImage3D(pt,0,i.RGBA,1,1,Ot,0,i.RGBA,i.UNSIGNED_BYTE,Dt):i.texImage2D(pt+te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Dt);return Qt}const W={};W[i.TEXTURE_2D]=Et(i.TEXTURE_2D,i.TEXTURE_2D,1),W[i.TEXTURE_CUBE_MAP]=Et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(W[i.TEXTURE_2D_ARRAY]=Et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),W[i.TEXTURE_3D]=Et(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),nt(i.DEPTH_TEST),c.setFunc(Xr),ft(!1),A(Yo),nt(i.CULL_FACE),J(Cn);function nt(O){d[O]!==!0&&(i.enable(O),d[O]=!0)}function St(O){d[O]!==!1&&(i.disable(O),d[O]=!1)}function Ct(O,pt){return p[O]!==pt?(i.bindFramebuffer(O,pt),p[O]=pt,n&&(O===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=pt),O===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=pt)),!0):!1}function P(O,pt){let mt=_,Ot=!1;if(O)if(mt=g.get(pt),mt===void 0&&(mt=[],g.set(pt,mt)),O.isWebGLMultipleRenderTargets){const Dt=O.texture;if(mt.length!==Dt.length||mt[0]!==i.COLOR_ATTACHMENT0){for(let Qt=0,te=Dt.length;Qt<te;Qt++)mt[Qt]=i.COLOR_ATTACHMENT0+Qt;mt.length=Dt.length,Ot=!0}}else mt[0]!==i.COLOR_ATTACHMENT0&&(mt[0]=i.COLOR_ATTACHMENT0,Ot=!0);else mt[0]!==i.BACK&&(mt[0]=i.BACK,Ot=!0);Ot&&(e.isWebGL2?i.drawBuffers(mt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(mt))}function et(O){return m!==O?(i.useProgram(O),m=O,!0):!1}const j={[Xn]:i.FUNC_ADD,[$l]:i.FUNC_SUBTRACT,[Ql]:i.FUNC_REVERSE_SUBTRACT};if(n)j[Ko]=i.MIN,j[Jo]=i.MAX;else{const O=t.get("EXT_blend_minmax");O!==null&&(j[Ko]=O.MIN_EXT,j[Jo]=O.MAX_EXT)}const it={[tu]:i.ZERO,[eu]:i.ONE,[nu]:i.SRC_COLOR,[ro]:i.SRC_ALPHA,[cu]:i.SRC_ALPHA_SATURATE,[ou]:i.DST_COLOR,[ru]:i.DST_ALPHA,[iu]:i.ONE_MINUS_SRC_COLOR,[so]:i.ONE_MINUS_SRC_ALPHA,[au]:i.ONE_MINUS_DST_COLOR,[su]:i.ONE_MINUS_DST_ALPHA,[lu]:i.CONSTANT_COLOR,[uu]:i.ONE_MINUS_CONSTANT_COLOR,[hu]:i.CONSTANT_ALPHA,[du]:i.ONE_MINUS_CONSTANT_ALPHA};function J(O,pt,mt,Ot,Dt,Qt,te,ye,Pe,ie){if(O===Cn){f===!0&&(St(i.BLEND),f=!1);return}if(f===!1&&(nt(i.BLEND),f=!0),O!==Jl){if(O!==S||ie!==L){if((x!==Xn||b!==Xn)&&(i.blendEquation(i.FUNC_ADD),x=Xn,b=Xn),ie)switch(O){case Ci:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qo:i.blendFunc(i.ONE,i.ONE);break;case jo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ci:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case jo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}M=null,T=null,y=null,C=null,v.set(0,0,0),E=0,S=O,L=ie}return}Dt=Dt||pt,Qt=Qt||mt,te=te||Ot,(pt!==x||Dt!==b)&&(i.blendEquationSeparate(j[pt],j[Dt]),x=pt,b=Dt),(mt!==M||Ot!==T||Qt!==y||te!==C)&&(i.blendFuncSeparate(it[mt],it[Ot],it[Qt],it[te]),M=mt,T=Ot,y=Qt,C=te),(ye.equals(v)===!1||Pe!==E)&&(i.blendColor(ye.r,ye.g,ye.b,Pe),v.copy(ye),E=Pe),S=O,L=!1}function wt(O,pt){O.side===pe?St(i.CULL_FACE):nt(i.CULL_FACE);let mt=O.side===Fe;pt&&(mt=!mt),ft(mt),O.blending===Ci&&O.transparent===!1?J(Cn):J(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),c.setFunc(O.depthFunc),c.setTest(O.depthTest),c.setMask(O.depthWrite),o.setMask(O.colorWrite);const Ot=O.stencilWrite;l.setTest(Ot),Ot&&(l.setMask(O.stencilWriteMask),l.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),l.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),B(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function ft(O){I!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),I=O)}function A(O){O!==Zl?(nt(i.CULL_FACE),O!==k&&(O===Yo?i.cullFace(i.BACK):O===Kl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),k=O}function w(O){O!==D&&(V&&i.lineWidth(O),D=O)}function B(O,pt,mt){O?(nt(i.POLYGON_OFFSET_FILL),(F!==pt||z!==mt)&&(i.polygonOffset(pt,mt),F=pt,z=mt)):St(i.POLYGON_OFFSET_FILL)}function Q(O){O?nt(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function tt(O){O===void 0&&(O=i.TEXTURE0+H-1),ut!==O&&(i.activeTexture(O),ut=O)}function rt(O,pt,mt){mt===void 0&&(ut===null?mt=i.TEXTURE0+H-1:mt=ut);let Ot=ht[mt];Ot===void 0&&(Ot={type:void 0,texture:void 0},ht[mt]=Ot),(Ot.type!==O||Ot.texture!==pt)&&(ut!==mt&&(i.activeTexture(mt),ut=mt),i.bindTexture(O,pt||W[O]),Ot.type=O,Ot.texture=pt)}function Pt(){const O=ht[ut];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Mt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Nt(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Gt(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function N(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ct(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _t(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function dt(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Lt(O){yt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),yt.copy(O))}function qt(O){Rt.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Rt.copy(O))}function $t(O,pt){let mt=h.get(pt);mt===void 0&&(mt=new WeakMap,h.set(pt,mt));let Ot=mt.get(O);Ot===void 0&&(Ot=i.getUniformBlockIndex(pt,O.name),mt.set(O,Ot))}function Wt(O,pt){const Ot=h.get(pt).get(O);u.get(pt)!==Ot&&(i.uniformBlockBinding(pt,Ot,O.__bindingPointIndex),u.set(pt,Ot))}function gt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ut=null,ht={},p={},g=new WeakMap,_=[],m=null,f=!1,S=null,x=null,M=null,T=null,b=null,y=null,C=null,v=new It(0,0,0),E=0,L=!1,I=null,k=null,D=null,F=null,z=null,yt.set(0,0,i.canvas.width,i.canvas.height),Rt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:nt,disable:St,bindFramebuffer:Ct,drawBuffers:P,useProgram:et,setBlending:J,setMaterial:wt,setFlipSided:ft,setCullFace:A,setLineWidth:w,setPolygonOffset:B,setScissorTest:Q,activeTexture:tt,bindTexture:rt,unbindTexture:Pt,compressedTexImage2D:Mt,compressedTexImage3D:Tt,texImage2D:_t,texImage3D:dt,updateUBOMapping:$t,uniformBlockBinding:Wt,texStorage2D:N,texStorage3D:ct,texSubImage2D:Nt,texSubImage3D:Gt,compressedTexSubImage2D:at,compressedTexSubImage3D:Yt,scissor:Lt,viewport:qt,reset:gt}}function s0(i,t,e,n,r,s,a){const o=r.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,w){return p?new OffscreenCanvas(A,w):Qr("canvas")}function _(A,w,B,Q){let tt=1;if((A.width>Q||A.height>Q)&&(tt=Q/Math.max(A.width,A.height)),tt<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const rt=w?$r:Math.floor,Pt=rt(tt*A.width),Mt=rt(tt*A.height);h===void 0&&(h=g(Pt,Mt));const Tt=B?g(Pt,Mt):h;return Tt.width=Pt,Tt.height=Mt,Tt.getContext("2d").drawImage(A,0,0,Pt,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Pt+"x"+Mt+")."),Tt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return lo(A.width)&&lo(A.height)}function f(A){return o?!1:A.wrapS!==tn||A.wrapT!==tn||A.minFilter!==Ne&&A.minFilter!==qe}function S(A,w){return A.generateMipmaps&&w&&A.minFilter!==Ne&&A.minFilter!==qe}function x(A){i.generateMipmap(A)}function M(A,w,B,Q,tt=!1){if(o===!1)return w;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let rt=w;if(w===i.RED&&(B===i.FLOAT&&(rt=i.R32F),B===i.HALF_FLOAT&&(rt=i.R16F),B===i.UNSIGNED_BYTE&&(rt=i.R8)),w===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(rt=i.R8UI),B===i.UNSIGNED_SHORT&&(rt=i.R16UI),B===i.UNSIGNED_INT&&(rt=i.R32UI),B===i.BYTE&&(rt=i.R8I),B===i.SHORT&&(rt=i.R16I),B===i.INT&&(rt=i.R32I)),w===i.RG&&(B===i.FLOAT&&(rt=i.RG32F),B===i.HALF_FLOAT&&(rt=i.RG16F),B===i.UNSIGNED_BYTE&&(rt=i.RG8)),w===i.RGBA){const Pt=tt?jr:ne.getTransfer(Q);B===i.FLOAT&&(rt=i.RGBA32F),B===i.HALF_FLOAT&&(rt=i.RGBA16F),B===i.UNSIGNED_BYTE&&(rt=Pt===re?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function T(A,w,B){return S(A,B)===!0||A.isFramebufferTexture&&A.minFilter!==Ne&&A.minFilter!==qe?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function b(A){return A===Ne||A===$o||A===xs?i.NEAREST:i.LINEAR}function y(A){const w=A.target;w.removeEventListener("dispose",y),v(w),w.isVideoTexture&&u.delete(w)}function C(A){const w=A.target;w.removeEventListener("dispose",C),L(w)}function v(A){const w=n.get(A);if(w.__webglInit===void 0)return;const B=A.source,Q=d.get(B);if(Q){const tt=Q[w.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&E(A),Object.keys(Q).length===0&&d.delete(B)}n.remove(A)}function E(A){const w=n.get(A);i.deleteTexture(w.__webglTexture);const B=A.source,Q=d.get(B);delete Q[w.__cacheKey],a.memory.textures--}function L(A){const w=A.texture,B=n.get(A),Q=n.get(w);if(Q.__webglTexture!==void 0&&(i.deleteTexture(Q.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(B.__webglFramebuffer[tt]))for(let rt=0;rt<B.__webglFramebuffer[tt].length;rt++)i.deleteFramebuffer(B.__webglFramebuffer[tt][rt]);else i.deleteFramebuffer(B.__webglFramebuffer[tt]);B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer[tt])}else{if(Array.isArray(B.__webglFramebuffer))for(let tt=0;tt<B.__webglFramebuffer.length;tt++)i.deleteFramebuffer(B.__webglFramebuffer[tt]);else i.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&i.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let tt=0;tt<B.__webglColorRenderbuffer.length;tt++)B.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(B.__webglColorRenderbuffer[tt]);B.__webglDepthRenderbuffer&&i.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let tt=0,rt=w.length;tt<rt;tt++){const Pt=n.get(w[tt]);Pt.__webglTexture&&(i.deleteTexture(Pt.__webglTexture),a.memory.textures--),n.remove(w[tt])}n.remove(w),n.remove(A)}let I=0;function k(){I=0}function D(){const A=I;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),I+=1,A}function F(A){const w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.colorSpace),w.join()}function z(A,w){const B=n.get(A);if(A.isVideoTexture&&wt(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{yt(B,A,w);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+w)}function H(A,w){const B=n.get(A);if(A.version>0&&B.__version!==A.version){yt(B,A,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+w)}function V(A,w){const B=n.get(A);if(A.version>0&&B.__version!==A.version){yt(B,A,w);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+w)}function K(A,w){const B=n.get(A);if(A.version>0&&B.__version!==A.version){Rt(B,A,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+w)}const $={[qr]:i.REPEAT,[tn]:i.CLAMP_TO_EDGE,[ao]:i.MIRRORED_REPEAT},ut={[Ne]:i.NEAREST,[$o]:i.NEAREST_MIPMAP_NEAREST,[xs]:i.NEAREST_MIPMAP_LINEAR,[qe]:i.LINEAR,[Au]:i.LINEAR_MIPMAP_NEAREST,[er]:i.LINEAR_MIPMAP_LINEAR},ht={[Bu]:i.NEVER,[Xu]:i.ALWAYS,[Gu]:i.LESS,[$c]:i.LEQUAL,[Hu]:i.EQUAL,[Wu]:i.GEQUAL,[ku]:i.GREATER,[Vu]:i.NOTEQUAL};function q(A,w,B){if(B?(i.texParameteri(A,i.TEXTURE_WRAP_S,$[w.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,$[w.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,$[w.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ut[w.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ut[w.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(w.wrapS!==tn||w.wrapT!==tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,b(w.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,b(w.minFilter)),w.minFilter!==Ne&&w.minFilter!==qe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ht[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const Q=t.get("EXT_texture_filter_anisotropic");if(w.magFilter===Ne||w.minFilter!==xs&&w.minFilter!==er||w.type===Rn&&t.has("OES_texture_float_linear")===!1||o===!1&&w.type===nr&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(i.texParameterf(A,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function st(A,w){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",y));const Q=w.source;let tt=d.get(Q);tt===void 0&&(tt={},d.set(Q,tt));const rt=F(w);if(rt!==A.__cacheKey){tt[rt]===void 0&&(tt[rt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),tt[rt].usedTimes++;const Pt=tt[A.__cacheKey];Pt!==void 0&&(tt[A.__cacheKey].usedTimes--,Pt.usedTimes===0&&E(w)),A.__cacheKey=rt,A.__webglTexture=tt[rt].texture}return B}function yt(A,w,B){let Q=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Q=i.TEXTURE_3D);const tt=st(A,w),rt=w.source;e.bindTexture(Q,A.__webglTexture,i.TEXTURE0+B);const Pt=n.get(rt);if(rt.version!==Pt.__version||tt===!0){e.activeTexture(i.TEXTURE0+B);const Mt=ne.getPrimaries(ne.workingColorSpace),Tt=w.colorSpace===je?null:ne.getPrimaries(w.colorSpace),Nt=w.colorSpace===je||Mt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);const Gt=f(w)&&m(w.image)===!1;let at=_(w.image,Gt,!1,r.maxTextureSize);at=ft(w,at);const Yt=m(at)||o,N=s.convert(w.format,w.colorSpace);let ct=s.convert(w.type),_t=M(w.internalFormat,N,ct,w.colorSpace,w.isVideoTexture);q(Q,w,Yt);let dt;const Lt=w.mipmaps,qt=o&&w.isVideoTexture!==!0&&_t!==Zc,$t=Pt.__version===void 0||tt===!0,Wt=T(w,at,Yt);if(w.isDepthTexture)_t=i.DEPTH_COMPONENT,o?w.type===Rn?_t=i.DEPTH_COMPONENT32F:w.type===An?_t=i.DEPTH_COMPONENT24:w.type===qn?_t=i.DEPTH24_STENCIL8:_t=i.DEPTH_COMPONENT16:w.type===Rn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===jn&&_t===i.DEPTH_COMPONENT&&w.type!==So&&w.type!==An&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=An,ct=s.convert(w.type)),w.format===Ui&&_t===i.DEPTH_COMPONENT&&(_t=i.DEPTH_STENCIL,w.type!==qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=qn,ct=s.convert(w.type))),$t&&(qt?e.texStorage2D(i.TEXTURE_2D,1,_t,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,_t,at.width,at.height,0,N,ct,null));else if(w.isDataTexture)if(Lt.length>0&&Yt){qt&&$t&&e.texStorage2D(i.TEXTURE_2D,Wt,_t,Lt[0].width,Lt[0].height);for(let gt=0,O=Lt.length;gt<O;gt++)dt=Lt[gt],qt?e.texSubImage2D(i.TEXTURE_2D,gt,0,0,dt.width,dt.height,N,ct,dt.data):e.texImage2D(i.TEXTURE_2D,gt,_t,dt.width,dt.height,0,N,ct,dt.data);w.generateMipmaps=!1}else qt?($t&&e.texStorage2D(i.TEXTURE_2D,Wt,_t,at.width,at.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,at.width,at.height,N,ct,at.data)):e.texImage2D(i.TEXTURE_2D,0,_t,at.width,at.height,0,N,ct,at.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){qt&&$t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Wt,_t,Lt[0].width,Lt[0].height,at.depth);for(let gt=0,O=Lt.length;gt<O;gt++)dt=Lt[gt],w.format!==en?N!==null?qt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,dt.width,dt.height,at.depth,N,dt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,gt,_t,dt.width,dt.height,at.depth,0,dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,dt.width,dt.height,at.depth,N,ct,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,gt,_t,dt.width,dt.height,at.depth,0,N,ct,dt.data)}else{qt&&$t&&e.texStorage2D(i.TEXTURE_2D,Wt,_t,Lt[0].width,Lt[0].height);for(let gt=0,O=Lt.length;gt<O;gt++)dt=Lt[gt],w.format!==en?N!==null?qt?e.compressedTexSubImage2D(i.TEXTURE_2D,gt,0,0,dt.width,dt.height,N,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,gt,_t,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?e.texSubImage2D(i.TEXTURE_2D,gt,0,0,dt.width,dt.height,N,ct,dt.data):e.texImage2D(i.TEXTURE_2D,gt,_t,dt.width,dt.height,0,N,ct,dt.data)}else if(w.isDataArrayTexture)qt?($t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Wt,_t,at.width,at.height,at.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,N,ct,at.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,_t,at.width,at.height,at.depth,0,N,ct,at.data);else if(w.isData3DTexture)qt?($t&&e.texStorage3D(i.TEXTURE_3D,Wt,_t,at.width,at.height,at.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,N,ct,at.data)):e.texImage3D(i.TEXTURE_3D,0,_t,at.width,at.height,at.depth,0,N,ct,at.data);else if(w.isFramebufferTexture){if($t)if(qt)e.texStorage2D(i.TEXTURE_2D,Wt,_t,at.width,at.height);else{let gt=at.width,O=at.height;for(let pt=0;pt<Wt;pt++)e.texImage2D(i.TEXTURE_2D,pt,_t,gt,O,0,N,ct,null),gt>>=1,O>>=1}}else if(Lt.length>0&&Yt){qt&&$t&&e.texStorage2D(i.TEXTURE_2D,Wt,_t,Lt[0].width,Lt[0].height);for(let gt=0,O=Lt.length;gt<O;gt++)dt=Lt[gt],qt?e.texSubImage2D(i.TEXTURE_2D,gt,0,0,N,ct,dt):e.texImage2D(i.TEXTURE_2D,gt,_t,N,ct,dt);w.generateMipmaps=!1}else qt?($t&&e.texStorage2D(i.TEXTURE_2D,Wt,_t,at.width,at.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,N,ct,at)):e.texImage2D(i.TEXTURE_2D,0,_t,N,ct,at);S(w,Yt)&&x(Q),Pt.__version=rt.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function Rt(A,w,B){if(w.image.length!==6)return;const Q=st(A,w),tt=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);const rt=n.get(tt);if(tt.version!==rt.__version||Q===!0){e.activeTexture(i.TEXTURE0+B);const Pt=ne.getPrimaries(ne.workingColorSpace),Mt=w.colorSpace===je?null:ne.getPrimaries(w.colorSpace),Tt=w.colorSpace===je||Pt===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const Nt=w.isCompressedTexture||w.image[0].isCompressedTexture,Gt=w.image[0]&&w.image[0].isDataTexture,at=[];for(let gt=0;gt<6;gt++)!Nt&&!Gt?at[gt]=_(w.image[gt],!1,!0,r.maxCubemapSize):at[gt]=Gt?w.image[gt].image:w.image[gt],at[gt]=ft(w,at[gt]);const Yt=at[0],N=m(Yt)||o,ct=s.convert(w.format,w.colorSpace),_t=s.convert(w.type),dt=M(w.internalFormat,ct,_t,w.colorSpace),Lt=o&&w.isVideoTexture!==!0,qt=rt.__version===void 0||Q===!0;let $t=T(w,Yt,N);q(i.TEXTURE_CUBE_MAP,w,N);let Wt;if(Nt){Lt&&qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,$t,dt,Yt.width,Yt.height);for(let gt=0;gt<6;gt++){Wt=at[gt].mipmaps;for(let O=0;O<Wt.length;O++){const pt=Wt[O];w.format!==en?ct!==null?Lt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,O,0,0,pt.width,pt.height,ct,pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,O,dt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,O,0,0,pt.width,pt.height,ct,_t,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,O,dt,pt.width,pt.height,0,ct,_t,pt.data)}}}else{Wt=w.mipmaps,Lt&&qt&&(Wt.length>0&&$t++,e.texStorage2D(i.TEXTURE_CUBE_MAP,$t,dt,at[0].width,at[0].height));for(let gt=0;gt<6;gt++)if(Gt){Lt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,at[gt].width,at[gt].height,ct,_t,at[gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,dt,at[gt].width,at[gt].height,0,ct,_t,at[gt].data);for(let O=0;O<Wt.length;O++){const mt=Wt[O].image[gt].image;Lt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,O+1,0,0,mt.width,mt.height,ct,_t,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,O+1,dt,mt.width,mt.height,0,ct,_t,mt.data)}}else{Lt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,ct,_t,at[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,dt,ct,_t,at[gt]);for(let O=0;O<Wt.length;O++){const pt=Wt[O];Lt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,O+1,0,0,ct,_t,pt.image[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,O+1,dt,ct,_t,pt.image[gt])}}}S(w,N)&&x(i.TEXTURE_CUBE_MAP),rt.__version=tt.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function Et(A,w,B,Q,tt,rt){const Pt=s.convert(B.format,B.colorSpace),Mt=s.convert(B.type),Tt=M(B.internalFormat,Pt,Mt,B.colorSpace);if(!n.get(w).__hasExternalTextures){const Gt=Math.max(1,w.width>>rt),at=Math.max(1,w.height>>rt);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,rt,Tt,Gt,at,w.depth,0,Pt,Mt,null):e.texImage2D(tt,rt,Tt,Gt,at,0,Pt,Mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),J(w)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,tt,n.get(B).__webglTexture,0,it(w)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,tt,n.get(B).__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function W(A,w,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),w.depthBuffer&&!w.stencilBuffer){let Q=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(B||J(w)){const tt=w.depthTexture;tt&&tt.isDepthTexture&&(tt.type===Rn?Q=i.DEPTH_COMPONENT32F:tt.type===An&&(Q=i.DEPTH_COMPONENT24));const rt=it(w);J(w)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,Q,w.width,w.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,Q,w.width,w.height)}else i.renderbufferStorage(i.RENDERBUFFER,Q,w.width,w.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(w.depthBuffer&&w.stencilBuffer){const Q=it(w);B&&J(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,w.width,w.height):J(w)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{const Q=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let tt=0;tt<Q.length;tt++){const rt=Q[tt],Pt=s.convert(rt.format,rt.colorSpace),Mt=s.convert(rt.type),Tt=M(rt.internalFormat,Pt,Mt,rt.colorSpace),Nt=it(w);B&&J(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,Tt,w.width,w.height):J(w)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Nt,Tt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function nt(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),z(w.depthTexture,0);const Q=n.get(w.depthTexture).__webglTexture,tt=it(w);if(w.depthTexture.format===jn)J(w)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(w.depthTexture.format===Ui)J(w)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function St(A){const w=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");nt(w.__webglFramebuffer,A)}else if(B){w.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[Q]),w.__webglDepthbuffer[Q]=i.createRenderbuffer(),W(w.__webglDepthbuffer[Q],A,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=i.createRenderbuffer(),W(w.__webglDepthbuffer,A,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(A,w,B){const Q=n.get(A);w!==void 0&&Et(Q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&St(A)}function P(A){const w=A.texture,B=n.get(A),Q=n.get(w);A.addEventListener("dispose",C),A.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=w.version,a.memory.textures++);const tt=A.isWebGLCubeRenderTarget===!0,rt=A.isWebGLMultipleRenderTargets===!0,Pt=m(A)||o;if(tt){B.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(o&&w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer[Mt]=[];for(let Tt=0;Tt<w.mipmaps.length;Tt++)B.__webglFramebuffer[Mt][Tt]=i.createFramebuffer()}else B.__webglFramebuffer[Mt]=i.createFramebuffer()}else{if(o&&w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer=[];for(let Mt=0;Mt<w.mipmaps.length;Mt++)B.__webglFramebuffer[Mt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(rt)if(r.drawBuffers){const Mt=A.texture;for(let Tt=0,Nt=Mt.length;Tt<Nt;Tt++){const Gt=n.get(Mt[Tt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&J(A)===!1){const Mt=rt?w:[w];B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Tt=0;Tt<Mt.length;Tt++){const Nt=Mt[Tt];B.__webglColorRenderbuffer[Tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[Tt]);const Gt=s.convert(Nt.format,Nt.colorSpace),at=s.convert(Nt.type),Yt=M(Nt.internalFormat,Gt,at,Nt.colorSpace,A.isXRRenderTarget===!0),N=it(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,N,Yt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,B.__webglColorRenderbuffer[Tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),W(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),q(i.TEXTURE_CUBE_MAP,w,Pt);for(let Mt=0;Mt<6;Mt++)if(o&&w.mipmaps&&w.mipmaps.length>0)for(let Tt=0;Tt<w.mipmaps.length;Tt++)Et(B.__webglFramebuffer[Mt][Tt],A,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Tt);else Et(B.__webglFramebuffer[Mt],A,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);S(w,Pt)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){const Mt=A.texture;for(let Tt=0,Nt=Mt.length;Tt<Nt;Tt++){const Gt=Mt[Tt],at=n.get(Gt);e.bindTexture(i.TEXTURE_2D,at.__webglTexture),q(i.TEXTURE_2D,Gt,Pt),Et(B.__webglFramebuffer,A,Gt,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,0),S(Gt,Pt)&&x(i.TEXTURE_2D)}e.unbindTexture()}else{let Mt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?Mt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(Mt,Q.__webglTexture),q(Mt,w,Pt),o&&w.mipmaps&&w.mipmaps.length>0)for(let Tt=0;Tt<w.mipmaps.length;Tt++)Et(B.__webglFramebuffer[Tt],A,w,i.COLOR_ATTACHMENT0,Mt,Tt);else Et(B.__webglFramebuffer,A,w,i.COLOR_ATTACHMENT0,Mt,0);S(w,Pt)&&x(Mt),e.unbindTexture()}A.depthBuffer&&St(A)}function et(A){const w=m(A)||o,B=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Q=0,tt=B.length;Q<tt;Q++){const rt=B[Q];if(S(rt,w)){const Pt=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Mt=n.get(rt).__webglTexture;e.bindTexture(Pt,Mt),x(Pt),e.unbindTexture()}}}function j(A){if(o&&A.samples>0&&J(A)===!1){const w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],B=A.width,Q=A.height;let tt=i.COLOR_BUFFER_BIT;const rt=[],Pt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(A),Tt=A.isWebGLMultipleRenderTargets===!0;if(Tt)for(let Nt=0;Nt<w.length;Nt++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Nt=0;Nt<w.length;Nt++){rt.push(i.COLOR_ATTACHMENT0+Nt),A.depthBuffer&&rt.push(Pt);const Gt=Mt.__ignoreDepthValues!==void 0?Mt.__ignoreDepthValues:!1;if(Gt===!1&&(A.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),Tt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[Nt]),Gt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Pt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Pt])),Tt){const at=n.get(w[Nt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,at,0)}i.blitFramebuffer(0,0,B,Q,0,0,B,Q,tt,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Tt)for(let Nt=0;Nt<w.length;Nt++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[Nt]);const Gt=n.get(w[Nt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}}function it(A){return Math.min(r.maxSamples,A.samples)}function J(A){const w=n.get(A);return o&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function wt(A){const w=a.render.frame;u.get(A)!==w&&(u.set(A,w),A.update())}function ft(A,w){const B=A.colorSpace,Q=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===co||B!==vn&&B!==je&&(ne.getTransfer(B)===re?o===!1?t.has("EXT_sRGB")===!0&&Q===en?(A.format=co,A.minFilter=qe,A.generateMipmaps=!1):w=tl.sRGBToLinear(w):(Q!==en||tt!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),w}this.allocateTextureUnit=D,this.resetTextureUnits=k,this.setTexture2D=z,this.setTexture2DArray=H,this.setTexture3D=V,this.setTextureCube=K,this.rebindTextures=Ct,this.setupRenderTarget=P,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=J}function o0(i,t,e){const n=e.isWebGL2;function r(s,a=je){let o;const c=ne.getTransfer(a);if(s===Ln)return i.UNSIGNED_BYTE;if(s===Wc)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Xc)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Ru)return i.BYTE;if(s===Cu)return i.SHORT;if(s===So)return i.UNSIGNED_SHORT;if(s===Vc)return i.INT;if(s===An)return i.UNSIGNED_INT;if(s===Rn)return i.FLOAT;if(s===nr)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Pu)return i.ALPHA;if(s===en)return i.RGBA;if(s===Lu)return i.LUMINANCE;if(s===Du)return i.LUMINANCE_ALPHA;if(s===jn)return i.DEPTH_COMPONENT;if(s===Ui)return i.DEPTH_STENCIL;if(s===co)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Uu)return i.RED;if(s===Yc)return i.RED_INTEGER;if(s===Iu)return i.RG;if(s===qc)return i.RG_INTEGER;if(s===jc)return i.RGBA_INTEGER;if(s===vs||s===Ms||s===Ss||s===ys)if(c===re)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===vs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ms)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ss)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ys)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===vs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ms)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ss)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ys)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Qo||s===ta||s===ea||s===na)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Qo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ta)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ea)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===na)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Zc)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ia||s===ra)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===ia)return c===re?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===ra)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===sa||s===oa||s===aa||s===ca||s===la||s===ua||s===ha||s===da||s===fa||s===pa||s===ma||s===ga||s===_a||s===xa)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===sa)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===oa)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===aa)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ca)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===la)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ua)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ha)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===da)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===fa)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===pa)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ma)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ga)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===_a)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===xa)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ws||s===va||s===Ma)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===ws)return c===re?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===va)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ma)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Nu||s===Sa||s===ya||s===wa)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===ws)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Sa)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ya)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wa)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===qn?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class a0 extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Kt extends oe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const c0={type:"move"};class Ys{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(c0)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Kt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class l0 extends ei{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,g=null;const _=e.getContextAttributes();let m=null,f=null;const S=[],x=[],M=new ot;let T=null;const b=new Ve;b.layers.enable(1),b.viewport=new ae;const y=new Ve;y.layers.enable(2),y.viewport=new ae;const C=[b,y],v=new a0;v.layers.enable(1),v.layers.enable(2);let E=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let st=S[q];return st===void 0&&(st=new Ys,S[q]=st),st.getTargetRaySpace()},this.getControllerGrip=function(q){let st=S[q];return st===void 0&&(st=new Ys,S[q]=st),st.getGripSpace()},this.getHand=function(q){let st=S[q];return st===void 0&&(st=new Ys,S[q]=st),st.getHandSpace()};function I(q){const st=x.indexOf(q.inputSource);if(st===-1)return;const yt=S[st];yt!==void 0&&(yt.update(q.inputSource,q.frame,l||a),yt.dispatchEvent({type:q.type,data:q.inputSource}))}function k(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",D);for(let q=0;q<S.length;q++){const st=x[q];st!==null&&(x[q]=null,S[q].disconnect(st))}E=null,L=null,t.setRenderTarget(m),p=null,d=null,h=null,r=null,f=null,ht.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",k),r.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(M),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const st={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,st),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Kn(p.framebufferWidth,p.framebufferHeight,{format:en,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let st=null,yt=null,Rt=null;_.depth&&(Rt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=_.stencil?Ui:jn,yt=_.stencil?qn:An);const Et={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:s};h=new XRWebGLBinding(r,e),d=h.createProjectionLayer(Et),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),f=new Kn(d.textureWidth,d.textureHeight,{format:en,type:Ln,depthTexture:new dl(d.textureWidth,d.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const W=t.properties.get(f);W.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),ht.setContext(r),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function D(q){for(let st=0;st<q.removed.length;st++){const yt=q.removed[st],Rt=x.indexOf(yt);Rt>=0&&(x[Rt]=null,S[Rt].disconnect(yt))}for(let st=0;st<q.added.length;st++){const yt=q.added[st];let Rt=x.indexOf(yt);if(Rt===-1){for(let W=0;W<S.length;W++)if(W>=x.length){x.push(yt),Rt=W;break}else if(x[W]===null){x[W]=yt,Rt=W;break}if(Rt===-1)break}const Et=S[Rt];Et&&Et.connect(yt)}}const F=new U,z=new U;function H(q,st,yt){F.setFromMatrixPosition(st.matrixWorld),z.setFromMatrixPosition(yt.matrixWorld);const Rt=F.distanceTo(z),Et=st.projectionMatrix.elements,W=yt.projectionMatrix.elements,nt=Et[14]/(Et[10]-1),St=Et[14]/(Et[10]+1),Ct=(Et[9]+1)/Et[5],P=(Et[9]-1)/Et[5],et=(Et[8]-1)/Et[0],j=(W[8]+1)/W[0],it=nt*et,J=nt*j,wt=Rt/(-et+j),ft=wt*-et;st.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ft),q.translateZ(wt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const A=nt+wt,w=St+wt,B=it-ft,Q=J+(Rt-ft),tt=Ct*St/w*A,rt=P*St/w*A;q.projectionMatrix.makePerspective(B,Q,tt,rt,A,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function V(q,st){st===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(st.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;v.near=y.near=b.near=q.near,v.far=y.far=b.far=q.far,(E!==v.near||L!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,L=v.far);const st=q.parent,yt=v.cameras;V(v,st);for(let Rt=0;Rt<yt.length;Rt++)V(yt[Rt],st);yt.length===2?H(v,b,y):v.projectionMatrix.copy(b.projectionMatrix),K(q,v,st)};function K(q,st,yt){yt===null?q.matrix.copy(st.matrixWorld):(q.matrix.copy(yt.matrixWorld),q.matrix.invert(),q.matrix.multiply(st.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(st.projectionMatrix),q.projectionMatrixInverse.copy(st.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ir*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)};let $=null;function ut(q,st){if(u=st.getViewerPose(l||a),g=st,u!==null){const yt=u.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let Rt=!1;yt.length!==v.cameras.length&&(v.cameras.length=0,Rt=!0);for(let Et=0;Et<yt.length;Et++){const W=yt[Et];let nt=null;if(p!==null)nt=p.getViewport(W);else{const Ct=h.getViewSubImage(d,W);nt=Ct.viewport,Et===0&&(t.setRenderTargetTextures(f,Ct.colorTexture,d.ignoreDepthValues?void 0:Ct.depthStencilTexture),t.setRenderTarget(f))}let St=C[Et];St===void 0&&(St=new Ve,St.layers.enable(Et),St.viewport=new ae,C[Et]=St),St.matrix.fromArray(W.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(W.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(nt.x,nt.y,nt.width,nt.height),Et===0&&(v.matrix.copy(St.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Rt===!0&&v.cameras.push(St)}}for(let yt=0;yt<S.length;yt++){const Rt=x[yt],Et=S[yt];Rt!==null&&Et!==void 0&&Et.update(Rt,st,l||a)}$&&$(q,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}const ht=new ul;ht.setAnimationLoop(ut),this.setAnimationLoop=function(q){$=q},this.dispose=function(){}}}function u0(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,al(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,S,x,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,S,x):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Fe&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Fe&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const S=t.get(f).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const x=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*x,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,S,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=x*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Fe&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const S=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function h0(i,t,e,n){let r={},s={},a=[];const o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(S,x){const M=x.program;n.uniformBlockBinding(S,M)}function l(S,x){let M=r[S.id];M===void 0&&(g(S),M=u(S),r[S.id]=M,S.addEventListener("dispose",m));const T=x.program;n.updateUBOMapping(S,T);const b=t.render.frame;s[S.id]!==b&&(d(S),s[S.id]=b)}function u(S){const x=h();S.__bindingPointIndex=x;const M=i.createBuffer(),T=S.__size,b=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,T,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,M),M}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const x=r[S.id],M=S.uniforms,T=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let b=0,y=M.length;b<y;b++){const C=Array.isArray(M[b])?M[b]:[M[b]];for(let v=0,E=C.length;v<E;v++){const L=C[v];if(p(L,b,v,T)===!0){const I=L.__offset,k=Array.isArray(L.value)?L.value:[L.value];let D=0;for(let F=0;F<k.length;F++){const z=k[F],H=_(z);typeof z=="number"||typeof z=="boolean"?(L.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,I+D,L.__data)):z.isMatrix3?(L.__data[0]=z.elements[0],L.__data[1]=z.elements[1],L.__data[2]=z.elements[2],L.__data[3]=0,L.__data[4]=z.elements[3],L.__data[5]=z.elements[4],L.__data[6]=z.elements[5],L.__data[7]=0,L.__data[8]=z.elements[6],L.__data[9]=z.elements[7],L.__data[10]=z.elements[8],L.__data[11]=0):(z.toArray(L.__data,D),D+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,x,M,T){const b=S.value,y=x+"_"+M;if(T[y]===void 0)return typeof b=="number"||typeof b=="boolean"?T[y]=b:T[y]=b.clone(),!0;{const C=T[y];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return T[y]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function g(S){const x=S.uniforms;let M=0;const T=16;for(let y=0,C=x.length;y<C;y++){const v=Array.isArray(x[y])?x[y]:[x[y]];for(let E=0,L=v.length;E<L;E++){const I=v[E],k=Array.isArray(I.value)?I.value:[I.value];for(let D=0,F=k.length;D<F;D++){const z=k[D],H=_(z),V=M%T;V!==0&&T-V<H.boundary&&(M+=T-V),I.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=H.storage}}}const b=M%T;return b>0&&(M+=T-b),S.__size=M,S.__cache={},this}function _(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){const x=S.target;x.removeEventListener("dispose",m);const M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function f(){for(const S in r)i.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:c,update:l,dispose:f}}class xl{constructor(t={}){const{canvas:e=oh(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ge,this._useLegacyLights=!1,this.toneMapping=Pn,this.toneMappingExposure=1;const x=this;let M=!1,T=0,b=0,y=null,C=-1,v=null;const E=new ae,L=new ae;let I=null;const k=new It(0);let D=0,F=e.width,z=e.height,H=1,V=null,K=null;const $=new ae(0,0,F,z),ut=new ae(0,0,F,z);let ht=!1;const q=new bo;let st=!1,yt=!1,Rt=null;const Et=new ee,W=new ot,nt=new U,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ct(){return y===null?H:1}let P=n;function et(R,G){for(let Y=0;Y<R.length;Y++){const Z=R[Y],X=e.getContext(Z,G);if(X!==null)return X}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Mo}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",O,!1),e.addEventListener("webglcontextcreationerror",pt,!1),P===null){const G=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&G.shift(),P=et(G,R),P===null)throw et(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let j,it,J,wt,ft,A,w,B,Q,tt,rt,Pt,Mt,Tt,Nt,Gt,at,Yt,N,ct,_t,dt,Lt,qt;function $t(){j=new Sp(P),it=new mp(P,j,t),j.init(it),dt=new o0(P,j,it),J=new r0(P,j,it),wt=new Ep(P),ft=new Wm,A=new s0(P,j,J,ft,it,dt,wt),w=new _p(x),B=new Mp(x),Q=new Lh(P,it),Lt=new fp(P,j,Q,it),tt=new yp(P,Q,wt,Lt),rt=new Rp(P,tt,Q,wt),N=new Ap(P,it,A),Gt=new gp(ft),Pt=new Vm(x,w,B,j,it,Lt,Gt),Mt=new u0(x,ft),Tt=new Ym,Nt=new $m(j,it),Yt=new dp(x,w,B,J,rt,d,c),at=new i0(x,rt,it),qt=new h0(P,wt,it,J),ct=new pp(P,j,wt,it),_t=new wp(P,j,wt,it),wt.programs=Pt.programs,x.capabilities=it,x.extensions=j,x.properties=ft,x.renderLists=Tt,x.shadowMap=at,x.state=J,x.info=wt}$t();const Wt=new l0(x,P);this.xr=Wt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const R=j.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=j.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(R){R!==void 0&&(H=R,this.setSize(F,z,!1))},this.getSize=function(R){return R.set(F,z)},this.setSize=function(R,G,Y=!0){if(Wt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=R,z=G,e.width=Math.floor(R*H),e.height=Math.floor(G*H),Y===!0&&(e.style.width=R+"px",e.style.height=G+"px"),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(F*H,z*H).floor()},this.setDrawingBufferSize=function(R,G,Y){F=R,z=G,H=Y,e.width=Math.floor(R*Y),e.height=Math.floor(G*Y),this.setViewport(0,0,R,G)},this.getCurrentViewport=function(R){return R.copy(E)},this.getViewport=function(R){return R.copy($)},this.setViewport=function(R,G,Y,Z){R.isVector4?$.set(R.x,R.y,R.z,R.w):$.set(R,G,Y,Z),J.viewport(E.copy($).multiplyScalar(H).floor())},this.getScissor=function(R){return R.copy(ut)},this.setScissor=function(R,G,Y,Z){R.isVector4?ut.set(R.x,R.y,R.z,R.w):ut.set(R,G,Y,Z),J.scissor(L.copy(ut).multiplyScalar(H).floor())},this.getScissorTest=function(){return ht},this.setScissorTest=function(R){J.setScissorTest(ht=R)},this.setOpaqueSort=function(R){V=R},this.setTransparentSort=function(R){K=R},this.getClearColor=function(R){return R.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(R=!0,G=!0,Y=!0){let Z=0;if(R){let X=!1;if(y!==null){const At=y.texture.format;X=At===jc||At===qc||At===Yc}if(X){const At=y.texture.type,Ut=At===Ln||At===An||At===So||At===qn||At===Wc||At===Xc,Ft=Yt.getClearColor(),zt=Yt.getClearAlpha(),Xt=Ft.r,Ht=Ft.g,kt=Ft.b;Ut?(p[0]=Xt,p[1]=Ht,p[2]=kt,p[3]=zt,P.clearBufferuiv(P.COLOR,0,p)):(g[0]=Xt,g[1]=Ht,g[2]=kt,g[3]=zt,P.clearBufferiv(P.COLOR,0,g))}else Z|=P.COLOR_BUFFER_BIT}G&&(Z|=P.DEPTH_BUFFER_BIT),Y&&(Z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",O,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),Tt.dispose(),Nt.dispose(),ft.dispose(),w.dispose(),B.dispose(),rt.dispose(),Lt.dispose(),qt.dispose(),Pt.dispose(),Wt.dispose(),Wt.removeEventListener("sessionstart",Pe),Wt.removeEventListener("sessionend",ie),Rt&&(Rt.dispose(),Rt=null),Le.stop()};function gt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const R=wt.autoReset,G=at.enabled,Y=at.autoUpdate,Z=at.needsUpdate,X=at.type;$t(),wt.autoReset=R,at.enabled=G,at.autoUpdate=Y,at.needsUpdate=Z,at.type=X}function pt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function mt(R){const G=R.target;G.removeEventListener("dispose",mt),Ot(G)}function Ot(R){Dt(R),ft.remove(R)}function Dt(R){const G=ft.get(R).programs;G!==void 0&&(G.forEach(function(Y){Pt.releaseProgram(Y)}),R.isShaderMaterial&&Pt.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,Y,Z,X,At){G===null&&(G=St);const Ut=X.isMesh&&X.matrixWorld.determinant()<0,Ft=Xl(R,G,Y,Z,X);J.setMaterial(Z,Ut);let zt=Y.index,Xt=1;if(Z.wireframe===!0){if(zt=tt.getWireframeAttribute(Y),zt===void 0)return;Xt=2}const Ht=Y.drawRange,kt=Y.attributes.position;let fe=Ht.start*Xt,Ge=(Ht.start+Ht.count)*Xt;At!==null&&(fe=Math.max(fe,At.start*Xt),Ge=Math.min(Ge,(At.start+At.count)*Xt)),zt!==null?(fe=Math.max(fe,0),Ge=Math.min(Ge,zt.count)):kt!=null&&(fe=Math.max(fe,0),Ge=Math.min(Ge,kt.count));const we=Ge-fe;if(we<0||we===1/0)return;Lt.setup(X,Z,Ft,Y,zt);let an,ce=ct;if(zt!==null&&(an=Q.get(zt),ce=_t,ce.setIndex(an)),X.isMesh)Z.wireframe===!0?(J.setLineWidth(Z.wireframeLinewidth*Ct()),ce.setMode(P.LINES)):ce.setMode(P.TRIANGLES);else if(X.isLine){let jt=Z.linewidth;jt===void 0&&(jt=1),J.setLineWidth(jt*Ct()),X.isLineSegments?ce.setMode(P.LINES):X.isLineLoop?ce.setMode(P.LINE_LOOP):ce.setMode(P.LINE_STRIP)}else X.isPoints?ce.setMode(P.POINTS):X.isSprite&&ce.setMode(P.TRIANGLES);if(X.isBatchedMesh)ce.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)ce.renderInstances(fe,we,X.count);else if(Y.isInstancedBufferGeometry){const jt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ps=Math.min(Y.instanceCount,jt);ce.renderInstances(fe,we,ps)}else ce.render(fe,we)};function Qt(R,G,Y){R.transparent===!0&&R.side===pe&&R.forceSinglePass===!1?(R.side=Fe,R.needsUpdate=!0,hr(R,G,Y),R.side=Un,R.needsUpdate=!0,hr(R,G,Y),R.side=pe):hr(R,G,Y)}this.compile=function(R,G,Y=null){Y===null&&(Y=R),m=Nt.get(Y),m.init(),S.push(m),Y.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),R!==Y&&R.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights(x._useLegacyLights);const Z=new Set;return R.traverse(function(X){const At=X.material;if(At)if(Array.isArray(At))for(let Ut=0;Ut<At.length;Ut++){const Ft=At[Ut];Qt(Ft,Y,X),Z.add(Ft)}else Qt(At,Y,X),Z.add(At)}),S.pop(),m=null,Z},this.compileAsync=function(R,G,Y=null){const Z=this.compile(R,G,Y);return new Promise(X=>{function At(){if(Z.forEach(function(Ut){ft.get(Ut).currentProgram.isReady()&&Z.delete(Ut)}),Z.size===0){X(R);return}setTimeout(At,10)}j.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let te=null;function ye(R){te&&te(R)}function Pe(){Le.stop()}function ie(){Le.start()}const Le=new ul;Le.setAnimationLoop(ye),typeof self<"u"&&Le.setContext(self),this.setAnimationLoop=function(R){te=R,Wt.setAnimationLoop(R),R===null?Le.stop():Le.start()},Wt.addEventListener("sessionstart",Pe),Wt.addEventListener("sessionend",ie),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Wt.enabled===!0&&Wt.isPresenting===!0&&(Wt.cameraAutoUpdate===!0&&Wt.updateCamera(G),G=Wt.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,G,y),m=Nt.get(R,S.length),m.init(),S.push(m),Et.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),q.setFromProjectionMatrix(Et),yt=this.localClippingEnabled,st=Gt.init(this.clippingPlanes,yt),_=Tt.get(R,f.length),_.init(),f.push(_),nn(R,G,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(V,K),this.info.render.frame++,st===!0&&Gt.beginShadows();const Y=m.state.shadowsArray;if(at.render(Y,R,G),st===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Yt.render(_,R),m.setupLights(x._useLegacyLights),G.isArrayCamera){const Z=G.cameras;for(let X=0,At=Z.length;X<At;X++){const Ut=Z[X];Go(_,R,Ut,Ut.viewport)}}else Go(_,R,G);y!==null&&(A.updateMultisampleRenderTarget(y),A.updateRenderTargetMipmap(y)),R.isScene===!0&&R.onAfterRender(x,R,G),Lt.resetDefaultState(),C=-1,v=null,S.pop(),S.length>0?m=S[S.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function nn(R,G,Y,Z){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)Y=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||q.intersectsSprite(R)){Z&&nt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Et);const Ut=rt.update(R),Ft=R.material;Ft.visible&&_.push(R,Ut,Ft,Y,nt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||q.intersectsObject(R))){const Ut=rt.update(R),Ft=R.material;if(Z&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),nt.copy(R.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),nt.copy(Ut.boundingSphere.center)),nt.applyMatrix4(R.matrixWorld).applyMatrix4(Et)),Array.isArray(Ft)){const zt=Ut.groups;for(let Xt=0,Ht=zt.length;Xt<Ht;Xt++){const kt=zt[Xt],fe=Ft[kt.materialIndex];fe&&fe.visible&&_.push(R,Ut,fe,Y,nt.z,kt)}}else Ft.visible&&_.push(R,Ut,Ft,Y,nt.z,null)}}const At=R.children;for(let Ut=0,Ft=At.length;Ut<Ft;Ut++)nn(At[Ut],G,Y,Z)}function Go(R,G,Y,Z){const X=R.opaque,At=R.transmissive,Ut=R.transparent;m.setupLightsView(Y),st===!0&&Gt.setGlobalState(x.clippingPlanes,Y),At.length>0&&Wl(X,At,G,Y),Z&&J.viewport(E.copy(Z)),X.length>0&&ur(X,G,Y),At.length>0&&ur(At,G,Y),Ut.length>0&&ur(Ut,G,Y),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function Wl(R,G,Y,Z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;const At=it.isWebGL2;Rt===null&&(Rt=new Kn(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")?nr:Ln,minFilter:er,samples:At?4:0})),x.getDrawingBufferSize(W),At?Rt.setSize(W.x,W.y):Rt.setSize($r(W.x),$r(W.y));const Ut=x.getRenderTarget();x.setRenderTarget(Rt),x.getClearColor(k),D=x.getClearAlpha(),D<1&&x.setClearColor(16777215,.5),x.clear();const Ft=x.toneMapping;x.toneMapping=Pn,ur(R,Y,Z),A.updateMultisampleRenderTarget(Rt),A.updateRenderTargetMipmap(Rt);let zt=!1;for(let Xt=0,Ht=G.length;Xt<Ht;Xt++){const kt=G[Xt],fe=kt.object,Ge=kt.geometry,we=kt.material,an=kt.group;if(we.side===pe&&fe.layers.test(Z.layers)){const ce=we.side;we.side=Fe,we.needsUpdate=!0,Ho(fe,Y,Z,Ge,we,an),we.side=ce,we.needsUpdate=!0,zt=!0}}zt===!0&&(A.updateMultisampleRenderTarget(Rt),A.updateRenderTargetMipmap(Rt)),x.setRenderTarget(Ut),x.setClearColor(k,D),x.toneMapping=Ft}function ur(R,G,Y){const Z=G.isScene===!0?G.overrideMaterial:null;for(let X=0,At=R.length;X<At;X++){const Ut=R[X],Ft=Ut.object,zt=Ut.geometry,Xt=Z===null?Ut.material:Z,Ht=Ut.group;Ft.layers.test(Y.layers)&&Ho(Ft,G,Y,zt,Xt,Ht)}}function Ho(R,G,Y,Z,X,At){R.onBeforeRender(x,G,Y,Z,X,At),R.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),X.onBeforeRender(x,G,Y,Z,R,At),X.transparent===!0&&X.side===pe&&X.forceSinglePass===!1?(X.side=Fe,X.needsUpdate=!0,x.renderBufferDirect(Y,G,Z,X,R,At),X.side=Un,X.needsUpdate=!0,x.renderBufferDirect(Y,G,Z,X,R,At),X.side=pe):x.renderBufferDirect(Y,G,Z,X,R,At),R.onAfterRender(x,G,Y,Z,X,At)}function hr(R,G,Y){G.isScene!==!0&&(G=St);const Z=ft.get(R),X=m.state.lights,At=m.state.shadowsArray,Ut=X.state.version,Ft=Pt.getParameters(R,X.state,At,G,Y),zt=Pt.getProgramCacheKey(Ft);let Xt=Z.programs;Z.environment=R.isMeshStandardMaterial?G.environment:null,Z.fog=G.fog,Z.envMap=(R.isMeshStandardMaterial?B:w).get(R.envMap||Z.environment),Xt===void 0&&(R.addEventListener("dispose",mt),Xt=new Map,Z.programs=Xt);let Ht=Xt.get(zt);if(Ht!==void 0){if(Z.currentProgram===Ht&&Z.lightsStateVersion===Ut)return Vo(R,Ft),Ht}else Ft.uniforms=Pt.getUniforms(R),R.onBuild(Y,Ft,x),R.onBeforeCompile(Ft,x),Ht=Pt.acquireProgram(Ft,zt),Xt.set(zt,Ht),Z.uniforms=Ft.uniforms;const kt=Z.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(kt.clippingPlanes=Gt.uniform),Vo(R,Ft),Z.needsLights=ql(R),Z.lightsStateVersion=Ut,Z.needsLights&&(kt.ambientLightColor.value=X.state.ambient,kt.lightProbe.value=X.state.probe,kt.directionalLights.value=X.state.directional,kt.directionalLightShadows.value=X.state.directionalShadow,kt.spotLights.value=X.state.spot,kt.spotLightShadows.value=X.state.spotShadow,kt.rectAreaLights.value=X.state.rectArea,kt.ltc_1.value=X.state.rectAreaLTC1,kt.ltc_2.value=X.state.rectAreaLTC2,kt.pointLights.value=X.state.point,kt.pointLightShadows.value=X.state.pointShadow,kt.hemisphereLights.value=X.state.hemi,kt.directionalShadowMap.value=X.state.directionalShadowMap,kt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,kt.spotShadowMap.value=X.state.spotShadowMap,kt.spotLightMatrix.value=X.state.spotLightMatrix,kt.spotLightMap.value=X.state.spotLightMap,kt.pointShadowMap.value=X.state.pointShadowMap,kt.pointShadowMatrix.value=X.state.pointShadowMatrix),Z.currentProgram=Ht,Z.uniformsList=null,Ht}function ko(R){if(R.uniformsList===null){const G=R.currentProgram.getUniforms();R.uniformsList=Vr.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function Vo(R,G){const Y=ft.get(R);Y.outputColorSpace=G.outputColorSpace,Y.batching=G.batching,Y.instancing=G.instancing,Y.instancingColor=G.instancingColor,Y.skinning=G.skinning,Y.morphTargets=G.morphTargets,Y.morphNormals=G.morphNormals,Y.morphColors=G.morphColors,Y.morphTargetsCount=G.morphTargetsCount,Y.numClippingPlanes=G.numClippingPlanes,Y.numIntersection=G.numClipIntersection,Y.vertexAlphas=G.vertexAlphas,Y.vertexTangents=G.vertexTangents,Y.toneMapping=G.toneMapping}function Xl(R,G,Y,Z,X){G.isScene!==!0&&(G=St),A.resetTextureUnits();const At=G.fog,Ut=Z.isMeshStandardMaterial?G.environment:null,Ft=y===null?x.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:vn,zt=(Z.isMeshStandardMaterial?B:w).get(Z.envMap||Ut),Xt=Z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ht=!!Y.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),kt=!!Y.morphAttributes.position,fe=!!Y.morphAttributes.normal,Ge=!!Y.morphAttributes.color;let we=Pn;Z.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(we=x.toneMapping);const an=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ce=an!==void 0?an.length:0,jt=ft.get(Z),ps=m.state.lights;if(st===!0&&(yt===!0||R!==v)){const We=R===v&&Z.id===C;Gt.setState(Z,R,We)}let de=!1;Z.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==ps.state.version||jt.outputColorSpace!==Ft||X.isBatchedMesh&&jt.batching===!1||!X.isBatchedMesh&&jt.batching===!0||X.isInstancedMesh&&jt.instancing===!1||!X.isInstancedMesh&&jt.instancing===!0||X.isSkinnedMesh&&jt.skinning===!1||!X.isSkinnedMesh&&jt.skinning===!0||X.isInstancedMesh&&jt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&jt.instancingColor===!1&&X.instanceColor!==null||jt.envMap!==zt||Z.fog===!0&&jt.fog!==At||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==Gt.numPlanes||jt.numIntersection!==Gt.numIntersection)||jt.vertexAlphas!==Xt||jt.vertexTangents!==Ht||jt.morphTargets!==kt||jt.morphNormals!==fe||jt.morphColors!==Ge||jt.toneMapping!==we||it.isWebGL2===!0&&jt.morphTargetsCount!==ce)&&(de=!0):(de=!0,jt.__version=Z.version);let zn=jt.currentProgram;de===!0&&(zn=hr(Z,G,X));let Wo=!1,Gi=!1,ms=!1;const Te=zn.getUniforms(),Bn=jt.uniforms;if(J.useProgram(zn.program)&&(Wo=!0,Gi=!0,ms=!0),Z.id!==C&&(C=Z.id,Gi=!0),Wo||v!==R){Te.setValue(P,"projectionMatrix",R.projectionMatrix),Te.setValue(P,"viewMatrix",R.matrixWorldInverse);const We=Te.map.cameraPosition;We!==void 0&&We.setValue(P,nt.setFromMatrixPosition(R.matrixWorld)),it.logarithmicDepthBuffer&&Te.setValue(P,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Te.setValue(P,"isOrthographic",R.isOrthographicCamera===!0),v!==R&&(v=R,Gi=!0,ms=!0)}if(X.isSkinnedMesh){Te.setOptional(P,X,"bindMatrix"),Te.setOptional(P,X,"bindMatrixInverse");const We=X.skeleton;We&&(it.floatVertexTextures?(We.boneTexture===null&&We.computeBoneTexture(),Te.setValue(P,"boneTexture",We.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(Te.setOptional(P,X,"batchingTexture"),Te.setValue(P,"batchingTexture",X._matricesTexture,A));const gs=Y.morphAttributes;if((gs.position!==void 0||gs.normal!==void 0||gs.color!==void 0&&it.isWebGL2===!0)&&N.update(X,Y,zn),(Gi||jt.receiveShadow!==X.receiveShadow)&&(jt.receiveShadow=X.receiveShadow,Te.setValue(P,"receiveShadow",X.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Bn.envMap.value=zt,Bn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),Gi&&(Te.setValue(P,"toneMappingExposure",x.toneMappingExposure),jt.needsLights&&Yl(Bn,ms),At&&Z.fog===!0&&Mt.refreshFogUniforms(Bn,At),Mt.refreshMaterialUniforms(Bn,Z,H,z,Rt),Vr.upload(P,ko(jt),Bn,A)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Vr.upload(P,ko(jt),Bn,A),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Te.setValue(P,"center",X.center),Te.setValue(P,"modelViewMatrix",X.modelViewMatrix),Te.setValue(P,"normalMatrix",X.normalMatrix),Te.setValue(P,"modelMatrix",X.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const We=Z.uniformsGroups;for(let _s=0,jl=We.length;_s<jl;_s++)if(it.isWebGL2){const Xo=We[_s];qt.update(Xo,zn),qt.bind(Xo,zn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return zn}function Yl(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function ql(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(R,G,Y){ft.get(R.texture).__webglTexture=G,ft.get(R.depthTexture).__webglTexture=Y;const Z=ft.get(R);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=Y===void 0,Z.__autoAllocateDepthBuffer||j.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,G){const Y=ft.get(R);Y.__webglFramebuffer=G,Y.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,Y=0){y=R,T=G,b=Y;let Z=!0,X=null,At=!1,Ut=!1;if(R){const zt=ft.get(R);zt.__useDefaultFramebuffer!==void 0?(J.bindFramebuffer(P.FRAMEBUFFER,null),Z=!1):zt.__webglFramebuffer===void 0?A.setupRenderTarget(R):zt.__hasExternalTextures&&A.rebindTextures(R,ft.get(R.texture).__webglTexture,ft.get(R.depthTexture).__webglTexture);const Xt=R.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Ut=!0);const Ht=ft.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ht[G])?X=Ht[G][Y]:X=Ht[G],At=!0):it.isWebGL2&&R.samples>0&&A.useMultisampledRTT(R)===!1?X=ft.get(R).__webglMultisampledFramebuffer:Array.isArray(Ht)?X=Ht[Y]:X=Ht,E.copy(R.viewport),L.copy(R.scissor),I=R.scissorTest}else E.copy($).multiplyScalar(H).floor(),L.copy(ut).multiplyScalar(H).floor(),I=ht;if(J.bindFramebuffer(P.FRAMEBUFFER,X)&&it.drawBuffers&&Z&&J.drawBuffers(R,X),J.viewport(E),J.scissor(L),J.setScissorTest(I),At){const zt=ft.get(R.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+G,zt.__webglTexture,Y)}else if(Ut){const zt=ft.get(R.texture),Xt=G||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,zt.__webglTexture,Y||0,Xt)}C=-1},this.readRenderTargetPixels=function(R,G,Y,Z,X,At,Ut){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=ft.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ft=Ft[Ut]),Ft){J.bindFramebuffer(P.FRAMEBUFFER,Ft);try{const zt=R.texture,Xt=zt.format,Ht=zt.type;if(Xt!==en&&dt.convert(Xt)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const kt=Ht===nr&&(j.has("EXT_color_buffer_half_float")||it.isWebGL2&&j.has("EXT_color_buffer_float"));if(Ht!==Ln&&dt.convert(Ht)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ht===Rn&&(it.isWebGL2||j.has("OES_texture_float")||j.has("WEBGL_color_buffer_float")))&&!kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-Z&&Y>=0&&Y<=R.height-X&&P.readPixels(G,Y,Z,X,dt.convert(Xt),dt.convert(Ht),At)}finally{const zt=y!==null?ft.get(y).__webglFramebuffer:null;J.bindFramebuffer(P.FRAMEBUFFER,zt)}}},this.copyFramebufferToTexture=function(R,G,Y=0){const Z=Math.pow(2,-Y),X=Math.floor(G.image.width*Z),At=Math.floor(G.image.height*Z);A.setTexture2D(G,0),P.copyTexSubImage2D(P.TEXTURE_2D,Y,0,0,R.x,R.y,X,At),J.unbindTexture()},this.copyTextureToTexture=function(R,G,Y,Z=0){const X=G.image.width,At=G.image.height,Ut=dt.convert(Y.format),Ft=dt.convert(Y.type);A.setTexture2D(Y,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,Y.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,Y.unpackAlignment),G.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Z,R.x,R.y,X,At,Ut,Ft,G.image.data):G.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Z,R.x,R.y,G.mipmaps[0].width,G.mipmaps[0].height,Ut,G.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,Z,R.x,R.y,Ut,Ft,G.image),Z===0&&Y.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),J.unbindTexture()},this.copyTextureToTexture3D=function(R,G,Y,Z,X=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const At=R.max.x-R.min.x+1,Ut=R.max.y-R.min.y+1,Ft=R.max.z-R.min.z+1,zt=dt.convert(Z.format),Xt=dt.convert(Z.type);let Ht;if(Z.isData3DTexture)A.setTexture3D(Z,0),Ht=P.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)A.setTexture2DArray(Z,0),Ht=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,Z.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,Z.unpackAlignment);const kt=P.getParameter(P.UNPACK_ROW_LENGTH),fe=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ge=P.getParameter(P.UNPACK_SKIP_PIXELS),we=P.getParameter(P.UNPACK_SKIP_ROWS),an=P.getParameter(P.UNPACK_SKIP_IMAGES),ce=Y.isCompressedTexture?Y.mipmaps[X]:Y.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,ce.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ce.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,R.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,R.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,R.min.z),Y.isDataTexture||Y.isData3DTexture?P.texSubImage3D(Ht,X,G.x,G.y,G.z,At,Ut,Ft,zt,Xt,ce.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(Ht,X,G.x,G.y,G.z,At,Ut,Ft,zt,ce.data)):P.texSubImage3D(Ht,X,G.x,G.y,G.z,At,Ut,Ft,zt,Xt,ce),P.pixelStorei(P.UNPACK_ROW_LENGTH,kt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,fe),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ge),P.pixelStorei(P.UNPACK_SKIP_ROWS,we),P.pixelStorei(P.UNPACK_SKIP_IMAGES,an),X===0&&Z.generateMipmaps&&P.generateMipmap(Ht),J.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?A.setTextureCube(R,0):R.isData3DTexture?A.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?A.setTexture2DArray(R,0):A.setTexture2D(R,0),J.unbindTexture()},this.resetState=function(){T=0,b=0,y=null,J.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===yo?"display-p3":"srgb",e.unpackColorSpace=ne.workingColorSpace===ss?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ge?Zn:Kc}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Zn?ge:vn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class d0 extends xl{}d0.prototype.isWebGL1Renderer=!0;class Ao{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new It(t),this.near=e,this.far=n}clone(){return new Ao(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class f0 extends oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class hc extends ve{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const wi=new ee,dc=new ee,Ir=[],fc=new On,p0=new ee,Xi=new lt,Yi=new Ni;class Oe extends lt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new hc(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,p0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new On),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,wi),fc.copy(t.boundingBox).applyMatrix4(wi),this.boundingBox.union(fc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ni),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,wi),Yi.copy(t.boundingSphere).applyMatrix4(wi),this.boundingSphere.union(Yi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,r=this.count;if(Xi.geometry=this.geometry,Xi.material=this.material,Xi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yi.copy(this.boundingSphere),Yi.applyMatrix4(n),t.ray.intersectsSphere(Yi)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,wi),dc.multiplyMatrices(n,wi),Xi.matrixWorld=dc,Xi.raycast(t,Ir);for(let a=0,o=Ir.length;a<o;a++){const c=Ir[a];c.instanceId=s,c.object=this,e.push(c)}Ir.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new hc(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class as extends Oi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const pc=new ee,fo=new Eo,Nr=new Ni,Or=new U;class Ro extends oe{constructor(t=new he,e=new as){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(r),Nr.radius+=s,t.ray.intersectsSphere(Nr)===!1)return;pc.copy(r).invert(),fo.copy(t.ray).applyMatrix4(pc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=d,_=p;g<_;g++){const m=l.getX(g);Or.fromBufferAttribute(h,m),mc(Or,m,c,r,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=d,_=p;g<_;g++)Or.fromBufferAttribute(h,g),mc(Or,g,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function mc(i,t,e,n,r,s,a){const o=fo.distanceSqToPoint(i);if(o<e){const c=new U;fo.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:a})}}class ar extends Be{constructor(t,e,n,r,s,a,o,c,l){super(t,e,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=n[r]-a,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);const u=n[r],d=n[r+1]-u,p=(a-u)/d;return(r+p)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=e||(a.isVector2?new ot:new U);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new U,r=[],s=[],a=[],o=new U,c=new ee;for(let p=0;p<=t;p++){const g=p/t;r[p]=this.getTangentAt(g,new U)}s[0]=new U,a[0]=new U;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(xe(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(r[p],s[p])}if(e===!0){let p=Math.acos(xe(s[0].dot(s[t]),-1,1));p/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(p=-p);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],p*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Co extends sn{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e){const n=e||new ot,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*u-p*h+this.aX,l=d*h+p*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class m0 extends Co{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Po(){let i=0,t=0,e=0,n=0;function r(s,a,o,c){i=s,t=o,e=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,u,h){let d=(a-s)/l-(o-s)/(l+u)+(o-a)/u,p=(o-a)/u-(c-a)/(u+h)+(c-o)/h;d*=u,p*=u,r(a,o,d,p)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const Fr=new U,qs=new Po,js=new Po,Zs=new Po;class g0 extends sn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new U){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,u;this.closed||o>0?l=r[(o-1)%s]:(Fr.subVectors(r[0],r[1]).add(r[0]),l=Fr);const h=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(Fr.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Fr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),qs.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,_,m),js.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,_,m),Zs.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(qs.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),js.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Zs.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(qs.calc(c),js.calc(c),Zs.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new U().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function gc(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,c=i*o;return(2*e-2*n+s+a)*c+(-3*e+3*n-2*s-a)*o+s*i+e}function _0(i,t){const e=1-i;return e*e*t}function x0(i,t){return 2*(1-i)*i*t}function v0(i,t){return i*i*t}function $i(i,t,e,n){return _0(i,t)+x0(i,e)+v0(i,n)}function M0(i,t){const e=1-i;return e*e*e*t}function S0(i,t){const e=1-i;return 3*e*e*i*t}function y0(i,t){return 3*(1-i)*i*i*t}function w0(i,t){return i*i*i*t}function Qi(i,t,e,n,r){return M0(i,t)+S0(i,e)+y0(i,n)+w0(i,r)}class vl extends sn{constructor(t=new ot,e=new ot,n=new ot,r=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new ot){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Qi(t,r.x,s.x,a.x,o.x),Qi(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class E0 extends sn{constructor(t=new U,e=new U,n=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new U){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Qi(t,r.x,s.x,a.x,o.x),Qi(t,r.y,s.y,a.y,o.y),Qi(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ml extends sn{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class b0 extends sn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Sl extends sn{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set($i(t,r.x,s.x,a.x),$i(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lo extends sn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set($i(t,r.x,s.x,a.x),$i(t,r.y,s.y,a.y),$i(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yl extends sn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return n.set(gc(o,c.x,l.x,u.x,h.x),gc(o,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new ot().fromArray(r))}return this}}var ts=Object.freeze({__proto__:null,ArcCurve:m0,CatmullRomCurve3:g0,CubicBezierCurve:vl,CubicBezierCurve3:E0,EllipseCurve:Co,LineCurve:Ml,LineCurve3:b0,QuadraticBezierCurve:Sl,QuadraticBezierCurve3:Lo,SplineCurve:yl});class T0 extends sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ts[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new ts[r.type]().fromJSON(r))}return this}}class _c extends T0{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ml(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new Sl(this.currentPoint.clone(),new ot(t,e),new ot(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,a){const o=new vl(this.currentPoint.clone(),new ot(t,e),new ot(n,r),new ot(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new yl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,r,s,a),this}absarc(t,e,n,r,s,a){return this.absellipse(t,e,n,n,r,s,a),this}ellipse(t,e,n,r,s,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,r,s,a,o,c),this}absellipse(t,e,n,r,s,a,o,c){const l=new Co(t,e,n,r,s,a,o,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class cr extends he{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=xe(r,0,Math.PI*2);const s=[],a=[],o=[],c=[],l=[],u=1/e,h=new U,d=new ot,p=new U,g=new U,_=new U;let m=0,f=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,f=t[S+1].y-t[S].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[S+1].x-t[S].x,f=t[S+1].y-t[S].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),c.push(p.x,p.y,p.z),_.copy(g)}for(let S=0;S<=e;S++){const x=n+S*u*r,M=Math.sin(x),T=Math.cos(x);for(let b=0;b<=t.length-1;b++){h.x=t[b].x*M,h.y=t[b].y,h.z=t[b].x*T,a.push(h.x,h.y,h.z),d.x=S/e,d.y=b/(t.length-1),o.push(d.x,d.y);const y=c[3*b+0]*M,C=c[3*b+1],v=c[3*b+0]*T;l.push(y,C,v)}}for(let S=0;S<e;S++)for(let x=0;x<t.length-1;x++){const M=x+S*t.length,T=M,b=M+t.length,y=M+t.length+1,C=M+1;s.push(T,b,C),s.push(y,C,b)}this.setIndex(s),this.setAttribute("position",new Jt(a,3)),this.setAttribute("uv",new Jt(o,2)),this.setAttribute("normal",new Jt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cr(t.points,t.segments,t.phiStart,t.phiLength)}}class Bi extends he{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],a=[],o=[],c=[],l=new U,u=new ot;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const p=n+h/e*r;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Jt(a,3)),this.setAttribute("normal",new Jt(o,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bi(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class se extends he{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;S(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Jt(h,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(p,2));function S(){const M=new U,T=new U;let b=0;const y=(e-t)/n;for(let C=0;C<=s;C++){const v=[],E=C/s,L=E*(e-t)+t;for(let I=0;I<=r;I++){const k=I/r,D=k*c+o,F=Math.sin(D),z=Math.cos(D);T.x=L*F,T.y=-E*n+m,T.z=L*z,h.push(T.x,T.y,T.z),M.set(F,y,z).normalize(),d.push(M.x,M.y,M.z),p.push(k,1-E),v.push(g++)}_.push(v)}for(let C=0;C<r;C++)for(let v=0;v<s;v++){const E=_[v][C],L=_[v+1][C],I=_[v+1][C+1],k=_[v][C+1];u.push(E,L,k),u.push(L,I,k),b+=6}l.addGroup(f,b,0),f+=b}function x(M){const T=g,b=new ot,y=new U;let C=0;const v=M===!0?t:e,E=M===!0?1:-1;for(let I=1;I<=r;I++)h.push(0,m*E,0),d.push(0,E,0),p.push(.5,.5),g++;const L=g;for(let I=0;I<=r;I++){const D=I/r*c+o,F=Math.cos(D),z=Math.sin(D);y.x=v*z,y.y=m*E,y.z=v*F,h.push(y.x,y.y,y.z),d.push(0,E,0),b.x=F*.5+.5,b.y=z*.5*E+.5,p.push(b.x,b.y),g++}for(let I=0;I<r;I++){const k=T+I,D=L+I;M===!0?u.push(D,D+1,k):u.push(D+1,D,k),C+=3}l.addGroup(f,C,M===!0?1:2),f+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new se(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Do extends he{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],a=[];o(r),l(n),u(),this.setAttribute("position",new Jt(s,3)),this.setAttribute("normal",new Jt(s.slice(),3)),this.setAttribute("uv",new Jt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const x=new U,M=new U,T=new U;for(let b=0;b<e.length;b+=3)p(e[b+0],x),p(e[b+1],M),p(e[b+2],T),c(x,M,T,S)}function c(S,x,M,T){const b=T+1,y=[];for(let C=0;C<=b;C++){y[C]=[];const v=S.clone().lerp(M,C/b),E=x.clone().lerp(M,C/b),L=b-C;for(let I=0;I<=L;I++)I===0&&C===b?y[C][I]=v:y[C][I]=v.clone().lerp(E,I/L)}for(let C=0;C<b;C++)for(let v=0;v<2*(b-C)-1;v++){const E=Math.floor(v/2);v%2===0?(d(y[C][E+1]),d(y[C+1][E]),d(y[C][E])):(d(y[C][E+1]),d(y[C+1][E+1]),d(y[C+1][E]))}}function l(S){const x=new U;for(let M=0;M<s.length;M+=3)x.x=s[M+0],x.y=s[M+1],x.z=s[M+2],x.normalize().multiplyScalar(S),s[M+0]=x.x,s[M+1]=x.y,s[M+2]=x.z}function u(){const S=new U;for(let x=0;x<s.length;x+=3){S.x=s[x+0],S.y=s[x+1],S.z=s[x+2];const M=m(S)/2/Math.PI+.5,T=f(S)/Math.PI+.5;a.push(M,1-T)}g(),h()}function h(){for(let S=0;S<a.length;S+=6){const x=a[S+0],M=a[S+2],T=a[S+4],b=Math.max(x,M,T),y=Math.min(x,M,T);b>.9&&y<.1&&(x<.2&&(a[S+0]+=1),M<.2&&(a[S+2]+=1),T<.2&&(a[S+4]+=1))}}function d(S){s.push(S.x,S.y,S.z)}function p(S,x){const M=S*3;x.x=t[M+0],x.y=t[M+1],x.z=t[M+2]}function g(){const S=new U,x=new U,M=new U,T=new U,b=new ot,y=new ot,C=new ot;for(let v=0,E=0;v<s.length;v+=9,E+=6){S.set(s[v+0],s[v+1],s[v+2]),x.set(s[v+3],s[v+4],s[v+5]),M.set(s[v+6],s[v+7],s[v+8]),b.set(a[E+0],a[E+1]),y.set(a[E+2],a[E+3]),C.set(a[E+4],a[E+5]),T.copy(S).add(x).add(M).divideScalar(3);const L=m(T);_(b,E+0,S,L),_(y,E+2,x,L),_(C,E+4,M,L)}}function _(S,x,M,T){T<0&&S.x===1&&(a[x]=S.x-1),M.x===0&&M.z===0&&(a[x]=T/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Do(t.vertices,t.indices,t.radius,t.details)}}class lr extends _c{constructor(t){super(t),this.uuid=ni(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new _c().fromJSON(r))}return this}}const A0={triangulate:function(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=wl(i,0,r,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,l,u,h,d,p;if(n&&(s=D0(i,t,s,e)),i.length>80*e){o=l=i[0],c=u=i[1];for(let g=e;g<r;g+=e)h=i[g],d=i[g+1],h<o&&(o=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);p=Math.max(l-o,u-c),p=p!==0?32767/p:0}return rr(s,a,e,o,c,p,0),a}};function wl(i,t,e,n,r){let s,a;if(r===V0(i,t,e,n)>0)for(s=t;s<e;s+=n)a=xc(s,i[s],i[s+1],a);else for(s=e-n;s>=t;s-=n)a=xc(s,i[s],i[s+1],a);return a&&cs(a,a.next)&&(or(a),a=a.next),a}function $n(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(cs(e,e.next)||ue(e.prev,e,e.next)===0)){if(or(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function rr(i,t,e,n,r,s,a){if(!i)return;!a&&s&&F0(i,n,r,s);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,s?C0(i,n,r,s):R0(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),or(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=P0($n(i),t,e),rr(i,t,e,n,r,s,2)):a===2&&L0(i,t,e,n,r,s):rr($n(i),t,e,n,r,s,1);break}}}function R0(i){const t=i.prev,e=i,n=i.next;if(ue(t,e,n)>=0)return!1;const r=t.x,s=e.x,a=n.x,o=t.y,c=e.y,l=n.y,u=r<s?r<a?r:a:s<a?s:a,h=o<c?o<l?o:l:c<l?c:l,d=r>s?r>a?r:a:s>a?s:a,p=o>c?o>l?o:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=p&&Ri(r,o,s,c,a,l,g.x,g.y)&&ue(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function C0(i,t,e,n){const r=i.prev,s=i,a=i.next;if(ue(r,s,a)>=0)return!1;const o=r.x,c=s.x,l=a.x,u=r.y,h=s.y,d=a.y,p=o<c?o<l?o:l:c<l?c:l,g=u<h?u<d?u:d:h<d?h:d,_=o>c?o>l?o:l:c>l?c:l,m=u>h?u>d?u:d:h>d?h:d,f=po(p,g,t,e,n),S=po(_,m,t,e,n);let x=i.prevZ,M=i.nextZ;for(;x&&x.z>=f&&M&&M.z<=S;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==a&&Ri(o,u,c,h,l,d,x.x,x.y)&&ue(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=p&&M.x<=_&&M.y>=g&&M.y<=m&&M!==r&&M!==a&&Ri(o,u,c,h,l,d,M.x,M.y)&&ue(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=f;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==a&&Ri(o,u,c,h,l,d,x.x,x.y)&&ue(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=S;){if(M.x>=p&&M.x<=_&&M.y>=g&&M.y<=m&&M!==r&&M!==a&&Ri(o,u,c,h,l,d,M.x,M.y)&&ue(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function P0(i,t,e){let n=i;do{const r=n.prev,s=n.next.next;!cs(r,s)&&El(r,n,n.next,s)&&sr(r,s)&&sr(s,r)&&(t.push(r.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),or(n),or(n.next),n=i=s),n=n.next}while(n!==i);return $n(n)}function L0(i,t,e,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&G0(a,o)){let c=bl(a,o);a=$n(a,a.next),c=$n(c,c.next),rr(a,t,e,n,r,s,0),rr(c,t,e,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function D0(i,t,e,n){const r=[];let s,a,o,c,l;for(s=0,a=t.length;s<a;s++)o=t[s]*n,c=s<a-1?t[s+1]*n:i.length,l=wl(i,o,c,n,!1),l===l.next&&(l.steiner=!0),r.push(B0(l));for(r.sort(U0),s=0;s<r.length;s++)e=I0(r[s],e);return e}function U0(i,t){return i.x-t.x}function I0(i,t){const e=N0(i,t);if(!e)return t;const n=bl(e,i);return $n(n,n.next),$n(e,e.next)}function N0(i,t){let e=t,n=-1/0,r;const s=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>n&&(n=d,r=e.x<e.next.x?e:e.next,d===s))return r}e=e.next}while(e!==t);if(!r)return null;const o=r,c=r.x,l=r.y;let u=1/0,h;e=r;do s>=e.x&&e.x>=c&&s!==e.x&&Ri(a<l?s:n,a,c,l,a<l?n:s,a,e.x,e.y)&&(h=Math.abs(a-e.y)/(s-e.x),sr(e,i)&&(h<u||h===u&&(e.x>r.x||e.x===r.x&&O0(r,e)))&&(r=e,u=h)),e=e.next;while(e!==o);return r}function O0(i,t){return ue(i.prev,i,t.prev)<0&&ue(t.next,i,i.next)<0}function F0(i,t,e,n){let r=i;do r.z===0&&(r.z=po(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,z0(r)}function z0(i){let t,e,n,r,s,a,o,c,l=1;do{for(e=i,i=null,s=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,o--):(r=n,n=n.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;e=n}s.nextZ=null,l*=2}while(a>1);return i}function po(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function B0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ri(i,t,e,n,r,s,a,o){return(r-a)*(t-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(r-a)*(n-o)}function G0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!H0(i,t)&&(sr(i,t)&&sr(t,i)&&k0(i,t)&&(ue(i.prev,i,t.prev)||ue(i,t.prev,t))||cs(i,t)&&ue(i.prev,i,i.next)>0&&ue(t.prev,t,t.next)>0)}function ue(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function cs(i,t){return i.x===t.x&&i.y===t.y}function El(i,t,e,n){const r=Br(ue(i,t,e)),s=Br(ue(i,t,n)),a=Br(ue(e,n,i)),o=Br(ue(e,n,t));return!!(r!==s&&a!==o||r===0&&zr(i,e,t)||s===0&&zr(i,n,t)||a===0&&zr(e,i,n)||o===0&&zr(e,t,n))}function zr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Br(i){return i>0?1:i<0?-1:0}function H0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&El(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function sr(i,t){return ue(i.prev,i,i.next)<0?ue(i,t,i.next)>=0&&ue(i,i.prev,t)>=0:ue(i,t,i.prev)<0||ue(i,i.next,t)<0}function k0(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function bl(i,t){const e=new mo(i.i,i.x,i.y),n=new mo(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function xc(i,t,e,n){const r=new mo(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function or(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function mo(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function V0(i,t,e,n){let r=0;for(let s=t,a=e-n;s<e;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class Dn{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return Dn.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];vc(t),Mc(n,t);let a=t.length;e.forEach(vc);for(let c=0;c<e.length;c++)r.push(a),a+=e[c].length,Mc(n,e[c]);const o=A0.triangulate(n,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function vc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Mc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Uo extends he{constructor(t=new lr([new ot(.5,.5),new ot(-.5,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new Jt(r,3)),this.setAttribute("uv",new Jt(s,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:W0;let x,M=!1,T,b,y,C;f&&(x=f.getSpacedPoints(u),M=!0,d=!1,T=f.computeFrenetFrames(u,!1),b=new U,y=new U,C=new U),d||(m=0,p=0,g=0,_=0);const v=o.extractPoints(l);let E=v.shape;const L=v.holes;if(!Dn.isClockWise(E)){E=E.reverse();for(let P=0,et=L.length;P<et;P++){const j=L[P];Dn.isClockWise(j)&&(L[P]=j.reverse())}}const k=Dn.triangulateShape(E,L),D=E;for(let P=0,et=L.length;P<et;P++){const j=L[P];E=E.concat(j)}function F(P,et,j){return et||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(et,j)}const z=E.length,H=k.length;function V(P,et,j){let it,J,wt;const ft=P.x-et.x,A=P.y-et.y,w=j.x-P.x,B=j.y-P.y,Q=ft*ft+A*A,tt=ft*B-A*w;if(Math.abs(tt)>Number.EPSILON){const rt=Math.sqrt(Q),Pt=Math.sqrt(w*w+B*B),Mt=et.x-A/rt,Tt=et.y+ft/rt,Nt=j.x-B/Pt,Gt=j.y+w/Pt,at=((Nt-Mt)*B-(Gt-Tt)*w)/(ft*B-A*w);it=Mt+ft*at-P.x,J=Tt+A*at-P.y;const Yt=it*it+J*J;if(Yt<=2)return new ot(it,J);wt=Math.sqrt(Yt/2)}else{let rt=!1;ft>Number.EPSILON?w>Number.EPSILON&&(rt=!0):ft<-Number.EPSILON?w<-Number.EPSILON&&(rt=!0):Math.sign(A)===Math.sign(B)&&(rt=!0),rt?(it=-A,J=ft,wt=Math.sqrt(Q)):(it=ft,J=A,wt=Math.sqrt(Q/2))}return new ot(it/wt,J/wt)}const K=[];for(let P=0,et=D.length,j=et-1,it=P+1;P<et;P++,j++,it++)j===et&&(j=0),it===et&&(it=0),K[P]=V(D[P],D[j],D[it]);const $=[];let ut,ht=K.concat();for(let P=0,et=L.length;P<et;P++){const j=L[P];ut=[];for(let it=0,J=j.length,wt=J-1,ft=it+1;it<J;it++,wt++,ft++)wt===J&&(wt=0),ft===J&&(ft=0),ut[it]=V(j[it],j[wt],j[ft]);$.push(ut),ht=ht.concat(ut)}for(let P=0;P<m;P++){const et=P/m,j=p*Math.cos(et*Math.PI/2),it=g*Math.sin(et*Math.PI/2)+_;for(let J=0,wt=D.length;J<wt;J++){const ft=F(D[J],K[J],it);Et(ft.x,ft.y,-j)}for(let J=0,wt=L.length;J<wt;J++){const ft=L[J];ut=$[J];for(let A=0,w=ft.length;A<w;A++){const B=F(ft[A],ut[A],it);Et(B.x,B.y,-j)}}}const q=g+_;for(let P=0;P<z;P++){const et=d?F(E[P],ht[P],q):E[P];M?(y.copy(T.normals[0]).multiplyScalar(et.x),b.copy(T.binormals[0]).multiplyScalar(et.y),C.copy(x[0]).add(y).add(b),Et(C.x,C.y,C.z)):Et(et.x,et.y,0)}for(let P=1;P<=u;P++)for(let et=0;et<z;et++){const j=d?F(E[et],ht[et],q):E[et];M?(y.copy(T.normals[P]).multiplyScalar(j.x),b.copy(T.binormals[P]).multiplyScalar(j.y),C.copy(x[P]).add(y).add(b),Et(C.x,C.y,C.z)):Et(j.x,j.y,h/u*P)}for(let P=m-1;P>=0;P--){const et=P/m,j=p*Math.cos(et*Math.PI/2),it=g*Math.sin(et*Math.PI/2)+_;for(let J=0,wt=D.length;J<wt;J++){const ft=F(D[J],K[J],it);Et(ft.x,ft.y,h+j)}for(let J=0,wt=L.length;J<wt;J++){const ft=L[J];ut=$[J];for(let A=0,w=ft.length;A<w;A++){const B=F(ft[A],ut[A],it);M?Et(B.x,B.y+x[u-1].y,x[u-1].x+j):Et(B.x,B.y,h+j)}}}st(),yt();function st(){const P=r.length/3;if(d){let et=0,j=z*et;for(let it=0;it<H;it++){const J=k[it];W(J[2]+j,J[1]+j,J[0]+j)}et=u+m*2,j=z*et;for(let it=0;it<H;it++){const J=k[it];W(J[0]+j,J[1]+j,J[2]+j)}}else{for(let et=0;et<H;et++){const j=k[et];W(j[2],j[1],j[0])}for(let et=0;et<H;et++){const j=k[et];W(j[0]+z*u,j[1]+z*u,j[2]+z*u)}}n.addGroup(P,r.length/3-P,0)}function yt(){const P=r.length/3;let et=0;Rt(D,et),et+=D.length;for(let j=0,it=L.length;j<it;j++){const J=L[j];Rt(J,et),et+=J.length}n.addGroup(P,r.length/3-P,1)}function Rt(P,et){let j=P.length;for(;--j>=0;){const it=j;let J=j-1;J<0&&(J=P.length-1);for(let wt=0,ft=u+m*2;wt<ft;wt++){const A=z*wt,w=z*(wt+1),B=et+it+A,Q=et+J+A,tt=et+J+w,rt=et+it+w;nt(B,Q,tt,rt)}}}function Et(P,et,j){c.push(P),c.push(et),c.push(j)}function W(P,et,j){St(P),St(et),St(j);const it=r.length/3,J=S.generateTopUV(n,r,it-3,it-2,it-1);Ct(J[0]),Ct(J[1]),Ct(J[2])}function nt(P,et,j,it){St(P),St(et),St(it),St(et),St(j),St(it);const J=r.length/3,wt=S.generateSideWallUV(n,r,J-6,J-3,J-2,J-1);Ct(wt[0]),Ct(wt[1]),Ct(wt[3]),Ct(wt[1]),Ct(wt[2]),Ct(wt[3])}function St(P){r.push(c[P*3+0]),r.push(c[P*3+1]),r.push(c[P*3+2])}function Ct(P){s.push(P.x),s.push(P.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return X0(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=e[t.shapes[s]];n.push(o)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new ts[r.type]().fromJSON(r)),new Uo(n,t.options)}}const W0={generateTopUV:function(i,t,e,n,r){const s=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[r*3],u=t[r*3+1];return[new ot(s,a),new ot(o,c),new ot(l,u)]},generateSideWallUV:function(i,t,e,n,r,s){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],h=t[n*3+2],d=t[r*3],p=t[r*3+1],g=t[r*3+2],_=t[s*3],m=t[s*3+1],f=t[s*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new ot(a,1-c),new ot(l,1-h),new ot(d,1-g),new ot(_,1-f)]:[new ot(o,1-c),new ot(u,1-h),new ot(p,1-g),new ot(m,1-f)]}};function X0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Qn extends Do{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Qn(t.radius,t.detail)}}class Io extends he{constructor(t=.5,e=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],c=[],l=[],u=[];let h=t;const d=(e-t)/r,p=new U,g=new ot;for(let _=0;_<=r;_++){for(let m=0;m<=n;m++){const f=s+m/n*a;p.x=h*Math.cos(f),p.y=h*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<r;_++){const m=_*(n+1);for(let f=0;f<n;f++){const S=f+m,x=S,M=S+n+1,T=S+n+2,b=S+1;o.push(x,M,b),o.push(M,T,b)}}this.setIndex(o),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Io(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ls extends he{constructor(t=new lr([new ot(0,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],r=[],s=[],a=[];let o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Jt(r,3)),this.setAttribute("normal",new Jt(s,3)),this.setAttribute("uv",new Jt(a,2));function l(u){const h=r.length/3,d=u.extractPoints(e);let p=d.shape;const g=d.holes;Dn.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){const S=g[m];Dn.isClockWise(S)===!0&&(g[m]=S.reverse())}const _=Dn.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){const S=g[m];p=p.concat(S)}for(let m=0,f=p.length;m<f;m++){const S=p[m];r.push(S.x,S.y,0),s.push(0,0,1),a.push(S.x,S.y)}for(let m=0,f=_.length;m<f;m++){const S=_[m],x=S[0]+h,M=S[1]+h,T=S[2]+h;n.push(x,M,T),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Y0(e,t)}static fromJSON(t,e){const n=[];for(let r=0,s=t.shapes.length;r<s;r++){const a=e[t.shapes[r]];n.push(a)}return new ls(n,t.curveSegments)}}function Y0(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const r=i[e];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t}class xn extends he{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new U,d=new U,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const S=[],x=f/n;let M=0;f===0&&a===0?M=.5/e:f===n&&c===Math.PI&&(M=-.5/e);for(let T=0;T<=e;T++){const b=T/e;h.x=-t*Math.cos(r+b*s)*Math.sin(a+x*o),h.y=t*Math.cos(a+x*o),h.z=t*Math.sin(r+b*s)*Math.sin(a+x*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(b+M,1-x),S.push(l++)}u.push(S)}for(let f=0;f<n;f++)for(let S=0;S<e;S++){const x=u[f][S+1],M=u[f][S],T=u[f+1][S],b=u[f+1][S+1];(f!==0||a>0)&&p.push(x,M,b),(f!==n-1||c<Math.PI)&&p.push(M,T,b)}this.setIndex(p),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class us extends he{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],c=[],l=[],u=new U,h=new U,d=new U;for(let p=0;p<=n;p++)for(let g=0;g<=r;g++){const _=g/r*s,m=p/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),o.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/r),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=r;g++){const _=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,f=(r+1)*(p-1)+g,S=(r+1)*p+g;a.push(_,m,S),a.push(m,f,S)}this.setIndex(a),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(c,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new us(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class No extends he{constructor(t=new Lo(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:r,closed:s};const a=t.computeFrenetFrames(e,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new U,c=new U,l=new ot;let u=new U;const h=[],d=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Jt(h,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(p,2));function _(){for(let x=0;x<e;x++)m(x);m(s===!1?e:0),S(),f()}function m(x){u=t.getPointAt(x/e,u);const M=a.normals[x],T=a.binormals[x];for(let b=0;b<=r;b++){const y=b/r*Math.PI*2,C=Math.sin(y),v=-Math.cos(y);c.x=v*M.x+C*T.x,c.y=v*M.y+C*T.y,c.z=v*M.z+C*T.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,h.push(o.x,o.y,o.z)}}function f(){for(let x=1;x<=e;x++)for(let M=1;M<=r;M++){const T=(r+1)*(x-1)+(M-1),b=(r+1)*x+(M-1),y=(r+1)*x+M,C=(r+1)*(x-1)+M;g.push(T,b,C),g.push(b,y,C)}}function S(){for(let x=0;x<=e;x++)for(let M=0;M<=r;M++)l.x=x/e,l.y=M/r,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new No(new ts[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class xt extends Oi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jc,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Oo extends oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class q0 extends Oo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ks=new ee,Sc=new U,yc=new U;class Tl{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bo,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Sc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sc),yc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yc),e.updateMatrixWorld(),Ks.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ks),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ks)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const wc=new ee,qi=new U,Js=new U;class j0 extends Tl{constructor(){super(new Ve(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ot(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),qi.setFromMatrixPosition(t.matrixWorld),n.position.copy(qi),Js.copy(n.position),Js.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Js),n.updateMatrixWorld(),r.makeTranslation(-qi.x,-qi.y,-qi.z),wc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wc)}}class Al extends Oo{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new j0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Z0 extends Tl{constructor(){super(new hl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class go extends Oo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(oe.DEFAULT_UP),this.updateMatrix(),this.target=new oe,this.shadow=new Z0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class K0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ec(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ec();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ec(){return(typeof performance>"u"?Date:performance).now()}class bc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(xe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mo);function Ye(i,t,e=1,n=1){const r=document.createElement("canvas");r.width=r.height=i;const s=r.getContext("2d");t(s,i);const a=new ar(r);return a.wrapS=a.wrapT=qr,a.repeat.set(e,n),a.colorSpace=ge,a.anisotropy=4,a}function ii(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function $s(i){return(t,e)=>{const n=ii(i?7:21),r=i?"#3d2a1c":"#8a6844",s=i?"#2a1d12":"#6e5233",a=i?"#54402c":"#a37f52";t.fillStyle=r,t.fillRect(0,0,e,e);for(let o=0;o<90;o++){const c=n()*e;t.strokeStyle=n()<.3?a:s,t.globalAlpha=.12+n()*.22,t.lineWidth=.6+n()*2.2,t.beginPath(),t.moveTo(0,c);for(let l=0;l<=e;l+=16)t.lineTo(l,c+Math.sin(l*.05+o)*2.5);t.stroke()}t.globalAlpha=.5;for(let o=0;o<7;o++){const c=n()*e,l=n()*e;t.strokeStyle=s,t.lineWidth=1.2;for(let u=2;u<9;u+=2)t.beginPath(),t.ellipse(c,l,u*1.8,u,.3,0,Math.PI*2),t.stroke()}t.globalAlpha=1}}function J0(i,t){const e=ii(99);i.fillStyle="#efe7d6",i.fillRect(0,0,t,t);for(let n=0;n<2600;n++){const r=225+Math.floor(e()*28);i.fillStyle=`rgb(${r},${r-6},${r-20})`,i.globalAlpha=.35,i.fillRect(e()*t,e()*t,1.4,1.4)}i.globalAlpha=.08,i.fillStyle="#b09a78";for(let n=0;n<8;n++)i.beginPath(),i.arc(e()*t,e()*t,12+e()*30,0,7),i.fill();i.globalAlpha=1}function $0(i,t){const e=ii(5);i.fillStyle="#a8a06a",i.fillRect(0,0,t,t);for(let n=0;n<t;n+=3)i.fillStyle=n/3%2?"#9d955f":"#b3ab74",i.fillRect(0,n,t,2);for(let n=0;n<500;n++)i.fillStyle=e()<.5?"#8a824f":"#c0b87e",i.globalAlpha=.4,i.fillRect(e()*t,e()*t,2,1);i.globalAlpha=1}function Q0(i,t){const e=ii(13);i.fillStyle="#f6efdd",i.fillRect(0,0,t,t);for(let n=0;n<900;n++)i.fillStyle=e()<.5?"#efe6d0":"#fbf5e6",i.globalAlpha=.5,i.fillRect(e()*t,e()*t,2,1);i.globalAlpha=1}function tg(i,t){const e=ii(31);i.fillStyle="#cfc6b4",i.fillRect(0,0,t,t);for(let n=0;n<1500;n++){const r=165+Math.floor(e()*70);i.fillStyle=`rgb(${r},${r-4},${r-14})`,i.beginPath(),i.arc(e()*t,e()*t,.8+e()*1.8,0,7),i.fill()}}function eg(i,t){const e=ii(77);i.fillStyle="#7d8f57",i.fillRect(0,0,t,t);for(let n=0;n<2200;n++)i.fillStyle=e()<.5?"#71834e":"#8a9c60",i.globalAlpha=.6,i.fillRect(e()*t,e()*t,1.5,3);i.globalAlpha=1}function ng(i,t){const e=ii(55);i.fillStyle="#9a968c",i.fillRect(0,0,t,t);for(let n=0;n<1200;n++){const r=120+Math.floor(e()*60);i.fillStyle=`rgb(${r},${r},${r-6})`,i.globalAlpha=.5,i.fillRect(e()*t,e()*t,2,2)}i.globalAlpha=.25,i.strokeStyle="#6f6b62";for(let n=0;n<6;n++)i.beginPath(),i.moveTo(e()*t,e()*t),i.lineTo(e()*t,e()*t),i.stroke();i.globalAlpha=1}function ig(i,t){i.fillStyle="#2e3d5c",i.fillRect(0,0,t,t),i.fillStyle="#efe7d2",i.fillRect(t*.18,0,t*.1,t),i.fillRect(t*.72,0,t*.1,t),i.beginPath(),i.arc(t/2,t*.34,t*.13,0,7),i.fill(),i.fillStyle="#2e3d5c",i.font=`bold ${Math.floor(t*.16)}px serif`,i.textAlign="center",i.fillText("TEA",t/2,t*.72)}function rg(i,t){const e=i.createLinearGradient(0,0,0,t);e.addColorStop(0,"#f3ecdb"),e.addColorStop(1,"#e4d8bd"),i.fillStyle=e,i.fillRect(0,0,t,t),i.strokeStyle="#4a4a48",i.lineCap="round";const n=(r,s,a,o)=>{i.lineWidth=a,i.beginPath(),i.moveTo(o,r),i.quadraticCurveTo(o+t*.2,r-s,o+t*.38,r-s*.25),i.quadraticCurveTo(o+t*.5,r-s*.7,o+t*.62,r-s*.1),i.stroke()};i.globalAlpha=.75,n(t*.62,t*.3,7,t*.05),i.globalAlpha=.5,n(t*.7,t*.2,5,t*.35),i.globalAlpha=.9,i.fillStyle="#b0533c",i.beginPath(),i.arc(t*.68,t*.26,t*.05,0,7),i.fill(),i.globalAlpha=1,i.fillStyle="#a33327",i.fillRect(t*.12,t*.78,t*.1,t*.1),i.fillStyle="#f3ecdb",i.font=`${Math.floor(t*.07)}px serif`,i.textAlign="center",i.fillText("wa",t*.17,t*.855)}function sg(i,t){i.fillStyle="#e9dfc6",i.fillRect(0,0,t,t),i.strokeStyle="#c9b98f",i.lineWidth=2,i.globalAlpha=.7;for(let e=-t;e<t*2;e+=26)i.beginPath(),i.arc(e,t*.9,22,Math.PI,0),i.stroke(),i.beginPath(),i.arc(e,t*.45,22,Math.PI,0),i.stroke();i.globalAlpha=1}function Rl(){const i=Ye(256,$s(!1),1,1),t=Ye(256,$s(!0),1,1),e={woodDark:new xt({map:t,color:12164995,roughness:.75,envMapIntensity:.25}),wood:new xt({map:i,color:13609080,roughness:.8,envMapIntensity:.25}),woodFloor:new xt({map:Ye(256,$s(!1),4,1),color:14201219,roughness:.7,envMapIntensity:.3}),plaster:new xt({map:Ye(256,J0,1,1),color:16777215,roughness:.95,envMapIntensity:.15}),paper:new xt({map:Ye(128,Q0,1,1),color:16774106,emissive:16768926,emissiveIntensity:.38,transparent:!0,opacity:.92,roughness:.9,side:pe}),tatami:new xt({map:Ye(256,$0,1,1),color:16777215,roughness:.95,envMapIntensity:.1}),tatamiEdge:new xt({color:3099194,roughness:.9}),roofTile:new xt({color:4869461,roughness:.55,metalness:.08,envMapIntensity:.5}),roofTileAlt:new xt({color:3948358,roughness:.6,metalness:.08,envMapIntensity:.5}),ridge:new xt({color:3487549,roughness:.5,metalness:.1,envMapIntensity:.6}),roofUnder:new xt({map:t,color:9072466,roughness:.9}),stone:new xt({map:Ye(256,ng,1,1),color:16777215,roughness:.95,envMapIntensity:.15}),gravel:new xt({map:Ye(256,tg,6,6),color:16777215,roughness:1}),grass:new xt({map:Ye(256,eg,10,10),color:16777215,roughness:1}),moss:new xt({color:6126906,roughness:1,envMapIntensity:.1}),mossDark:new xt({color:4613420,roughness:1,envMapIntensity:.1}),bamboo:new xt({color:8364110,roughness:.6,envMapIntensity:.3}),bambooLeaf:new xt({color:5143092,roughness:.8,side:pe}),trunk:new xt({map:t,color:10123868,roughness:.9}),mapleLeaf:new xt({color:16777215,roughness:.75,side:pe}),fusuma:new xt({map:Ye(256,sg,1,1),color:16777215,roughness:.9}),noren:new xt({map:Ye(256,ig,1,1),color:16777215,roughness:.9,side:pe}),scroll:new xt({map:Ye(256,rg,1,1),color:16777215,roughness:.9}),lanternGlow:new xt({color:16767392,emissive:16751686,emissiveIntensity:2.2}),paperLantern:new xt({color:16770232,emissive:16757867,emissiveIntensity:1.4,roughness:.8}),bronze:new xt({color:4997688,roughness:.45,metalness:.7,envMapIntensity:.8})};return e.woodNew=e.woodNew||new xt({color:9069112,roughness:.7}),e.woodAged=e.woodAged||new xt({color:7234136,roughness:.9}),e.glassDark=e.glassDark||new xt({color:1053980,roughness:.08,metalness:.9}),e.bronze=e.bronze||new xt({color:7035443,roughness:.35,metalness:.9}),e.iron=e.iron||new xt({color:2829102,roughness:.5,metalness:.8}),e.soil=e.soil||new xt({color:4865843,roughness:1}),e.thatch=e.thatch||new xt({color:10127967,roughness:1}),e._wet=e._wet||[],e.registerWet=n=>(n&&!e._wet.includes(n)&&e._wet.push(n),n),e.plasterTinted=n=>new xt({color:n,roughness:.95}),[e.wood,e.woodDark,e.woodNew,e.woodAged,e.plaster,e.tile,e.stone,e.soil].forEach(n=>n&&e.registerWet(n)),e.tile=e.tile||e.roofTile,e.shoji=e.shoji||e.paper,e.registerWet(e.tile),e}const og=Object.freeze(Object.defineProperty({__proto__:null,buildMaterials:Rl},Symbol.toStringTag,{value:"Module"}));function Fn(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function bt(i,t,e,n,r=0,s=0,a=0,o=0){const c=new lt(new Bt(i,t,e),n);return c.position.set(r,s,a),c.rotation.y=o,c.castShadow=!0,c.receiveShadow=!0,c}const Ie=new oe;function _n(i,t){for(let e=0;e<t.length;e++){const n=t[e];Ie.position.set(n.p[0],n.p[1],n.p[2]),Ie.rotation.set(n.rx||0,n.ry||0,n.rz||0);const r=n.s===void 0?1:n.s;Ie.scale.set(n.sx===void 0?r:n.sx,n.sy===void 0?r:n.sy,n.sz===void 0?r:n.sz),Ie.updateMatrix(),i.setMatrixAt(e,Ie.matrix),n.c&&i.setColorAt(e,n.c)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),i.castShadow=!0,i.receiveShadow=!0,i}function Cl(i,t,e=.75,n=1){const r=new Qn(i,n),s=Fn(t),a=r.attributes.position,o=new U,c=new Map;for(let l=0;l<a.count;l++){o.fromBufferAttribute(a,l);const u=`${o.x.toFixed(3)},${o.y.toFixed(3)},${o.z.toFixed(3)}`;let h=c.get(u);h===void 0&&(h=.78+s()*.5,c.set(u,h)),o.multiplyScalar(h),o.y*=e,a.setXYZ(l,o.x,o.y,o.z)}return r.computeVertexNormals(),r}let Gr=null;function Pl(){if(Gr)return Gr;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,6,64,64,62);return e.addColorStop(0,"rgba(20,12,6,0.55)"),e.addColorStop(.6,"rgba(20,12,6,0.28)"),e.addColorStop(1,"rgba(20,12,6,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),Gr=new ar(i),Gr}function hs(i,t,e=1){const n=new lt(new _e(i,t),new Fi({map:Pl(),transparent:!0,opacity:e,depthWrite:!1}));return n.rotation.x=-Math.PI/2,n.renderOrder=1,n}function Fo(i,t,e,n,r,s,a){const o=new Bt(r,n,s),c=new Bt(e,r,s),l=new Kt,u=(p,g)=>{const _=new Oe(p,a,g);return _.castShadow=!1,_.receiveShadow=!0,_},h=u(o,i+1),d=u(c,t+1);for(let p=0;p<=i;p++)Ie.position.set(-e/2+p*e/i,0,0),Ie.rotation.set(0,0,0),Ie.scale.set(1,1,1),Ie.updateMatrix(),h.setMatrixAt(p,Ie.matrix);for(let p=0;p<=t;p++)Ie.position.set(0,-n/2+p*n/t,0),Ie.rotation.set(0,0,0),Ie.scale.set(1,1,1),Ie.updateMatrix(),d.setMatrixAt(p,Ie.matrix);return h.instanceMatrix.needsUpdate=d.instanceMatrix.needsUpdate=!0,l.add(h,d),l}const ag=Object.freeze(Object.defineProperty({__proto__:null,blobTexture:Pl,contactShadow:hs,displacedRock:Cl,fillInstances:_n,makeBeam:bt,makeLatticeBars:Fo,mulberry:Fn},Symbol.toStringTag,{value:"Module"})),Ll={w:10,d:6.4,floorY:.7,wallTop:3.6,pillar:.22};function Hr(i,t,e,n=[4,6]){const r=new Kt,s=.07,a=.06,o=e.woodDark;r.add(bt(i,s,a,o,0,t/2-s/2,0)),r.add(bt(i,s,a,o,0,-t/2+s/2,0)),r.add(bt(s,t,a,o,-i/2+s/2,0,0)),r.add(bt(s,t,a,o,i/2-s/2,0,0)),r.add(bt(.05,t-2*s,a*.7,o,0,0,0));const c=new lt(new _e(i-2*s,t-2*s),e.paper);c.position.z=-.005,c.receiveShadow=!0,r.add(c);const l=Fo(n[0],n[1],i-2*s,t-2*s,.028,.02,e.woodDark);l.position.z=.018,r.add(l);const u=new lt(new se(.035,.035,.03,12),e.bronze);return u.rotation.x=Math.PI/2,u.position.set(i/2-.16,0,.035),r.add(u),r}function cg(i){const t=new Kt,e=Fn(1234),{w:n,d:r,floorY:s,wallTop:a,pillar:o}=Ll,c=n/2,l=r/2,u=hs(n+3.4,r+3.6,.9);u.position.set(0,.02,0),t.add(u);{const I=Cl(.32,900,.62,0),k=[];for(let F=-c;F<=c+.01;F+=1.25)for(let z=-l;z<=l+.01;z+=1.6)k.push({p:[F+(e()-.5)*.15,.18,z+(e()-.5)*.15],ry:e()*6.3,s:.8+e()*.5});const D=new Oe(I,i.stone,k.length);_n(D,k),t.add(D)}t.add(bt(n+.3,.24,.24,i.woodDark,0,s-.12,l)),t.add(bt(n+.3,.24,.24,i.woodDark,0,s-.12,-l)),t.add(bt(.24,.24,r,i.woodDark,-c,s-.12,0)),t.add(bt(.24,.24,r,i.woodDark,c,s-.12,0));for(let I=-c+.8;I<c;I+=1.1)t.add(bt(.14,.18,r-.2,i.wood,I,s-.1,0));const h=bt(n+.2,.1,r,i.woodFloor,0,s-.02,0);t.add(h);const d=a-s,p=s+d/2,g=[];for(let I=0;I<=5;I++)g.push(-c+I*n/5);const _=[];g.forEach(I=>{_.push([I,l]),_.push([I,-l])}),[-l+r/4,0,l-r/4].forEach(I=>{_.push([-c,I]),_.push([c,I])}),_.forEach(([I,k])=>t.add(bt(o,d,o,i.woodDark,I,p,k)));const m=a-.12;t.add(bt(n+.24,.24,.2,i.woodDark,0,m,l)),t.add(bt(n+.24,.24,.2,i.woodDark,0,m,-l)),t.add(bt(.2,.24,r+.24,i.woodDark,-c,m,0)),t.add(bt(.2,.24,r+.24,i.woodDark,c,m,0));const f=s+2.32;t.add(bt(n,.14,.12,i.woodDark,0,f,l)),t.add(bt(n,.1,.14,i.woodDark,0,s+.08,l)),t.add(bt(n,.14,.12,i.woodDark,0,f,-l)),t.add(bt(.14,.14,r,i.woodDark,-c,f,0)),t.add(bt(.14,.14,r,i.woodDark,c,f,0));const S=(f+.07+m-.12)/2,x=m-.12-(f+.07);t.add(bt(n-.2,x,.1,i.plaster,0,S,l)),t.add(bt(n-.2,x,.1,i.plaster,0,S,-l)),t.add(bt(.1,x,r-.2,i.plaster,-c,S,0)),t.add(bt(.1,x,r-.2,i.plaster,c,S,0));const M=.1,T=f-(s+.1),b=(f+s+.1)/2;t.add(bt(n-.2,T,M,i.plaster,0,b,-l)),[-c,c].forEach(I=>{t.add(bt(M,T,r-.2,i.plaster,I,b,0))}),[-c,c].forEach(I=>{const k=I>0?1:-1;[-1.5,1.5].forEach(D=>{const F=s+1.75,z=new Kt,H=1.5,V=1;z.add(bt(H+.14,.09,.14,i.woodDark,0,V/2,0)),z.add(bt(H+.14,.09,.14,i.woodDark,0,-V/2,0)),z.add(bt(.09,V,.14,i.woodDark,-H/2,0,0)),z.add(bt(.09,V,.14,i.woodDark,H/2,0,0));const K=new lt(new _e(H,V),i.paper);K.rotation.y=Math.PI/2,z.add(K);const $=Fo(5,3,H,V,.03,.02,i.woodDark);$.rotation.y=Math.PI/2,$.position.x=k*.06,z.add($),z.position.set(I+k*.09,F,D),t.add(z)})});const y=n/5,C=f-(s+.12),v=s+.12+C/2;for(let I=1;I<=3;I++){const k=-c+y*(I+.5),D=Hr(y-.3,C,i);D.position.set(k-(y-.3)/4,v,l+.03);const F=Hr(y-.3,C,i);F.position.set(k+(y-.3)/4,v,l-.04),t.add(D,F)}{const I=Hr(y-.3,C,i);I.position.set(2,v,l-.04);const k=Hr(y-.3,C,i);k.position.set(2,v,l+.1),t.add(I,k)}let E;{const I=-c+y*.5,k=bt(y-.4,.12,1.6,i.stone,I,s-.06,l-.7);k.receiveShadow=!0,t.add(k);const D=bt(1.5,.28,.55,i.stone,I,.2,l+1.65);t.add(D),t.add(bt(.16,C+.1,.16,i.woodDark,I-.85,v,l+.05)),t.add(bt(.16,C+.1,.16,i.woodDark,I+.85,v,l+.05)),t.add(bt(1.9,.18,.2,i.woodDark,I,f+.05,l+.05)),E=new Kt;for(let F=0;F<3;F++){const z=new lt(new Bt(.5,.85,.02),i.noren);z.position.set(-.53+F*.53,-.5,0),z.castShadow=!0,E.add(z)}E.position.set(I,f-.06,l+.12),t.add(E)}{const I=s-.06,k=bt(n+.6,.12,1.25,i.woodFloor,0,I,l+.65);t.add(k);const D=bt(1.25,.12,r+.6,i.woodFloor,c+.65,I,0);t.add(D);for(let H=-c-.2;H<=c+.25;H+=1.7)t.add(bt(.14,I,.14,i.woodDark,H,I/2,l+1.2));for(let H=-l;H<=l+.01;H+=1.6)t.add(bt(.14,I,.14,i.woodDark,c+1.2,I/2,H));const F=3.78-I;for(let H=-c-.2;H<=c+.25;H+=2.55)t.add(bt(.13,F,.13,i.woodDark,H,I+F/2,l+1.2));for(let H=-l;H<=l+.01;H+=2.1)t.add(bt(.13,F,.13,i.woodDark,c+1.2,I+F/2,H));t.add(bt(n+.7,.16,.14,i.woodDark,0,3.62,l+1.2)),t.add(bt(.14,.16,r+.7,i.woodDark,c+1.2,3.62,0));const z=I+.55;for(let H=-l;H<=1;H+=1.05)t.add(bt(.09,.62,.09,i.woodDark,c+1.2,I+.31,H));t.add(bt(.08,.08,4.4,i.wood,c+1.2,z,-l+2.2)),t.add(bt(.06,.06,4.4,i.wood,c+1.2,z-.28,-l+2.2)),t.add(bt(1.6,.22,.5,i.stone,-c+y*4.5,.16,l+1.65))}let L;{const I=new xt({color:5917240,roughness:.7,side:pe}),k=new se(.09,.09,n+2.6,10,1,!0,Math.PI,Math.PI);k.rotateZ(Math.PI/2),[l+1.55,-l-1.55].forEach(V=>{const K=new lt(k,I);K.position.set(0,3.66,V),t.add(K)});const D=new se(.055,.055,3.5,8);[[-c-1.2,l+1.55],[-c-1.2,-l-1.55]].forEach(([V,K])=>{const $=new lt(D,i.bamboo);$.position.set(V,1.85,K),$.castShadow=!0,t.add($)}),L=new Kt;const F=new us(.055,.014,6,10);for(let V=0;V<16;V++){const K=new lt(F,i.bronze);K.position.y=-V*.2,K.rotation.y=V%2*Math.PI/2,L.add(K)}L.position.set(c+1.2,3.6,l+1.55),t.add(L);const z=[];for(let V=0;V<=8;V++){const K=V/8*Math.PI;z.push(new ot(.12+Math.sin(K)*.3,V*.045))}const H=new lt(new cr(z,14),i.stone);H.position.set(c+1.2,0,l+1.55),H.castShadow=H.receiveShadow=!0,t.add(H)}return{group:t,noren:E,rainChain:L,openBayX:-c+y*4.5}}function lg(i){const t=new Kt;i.ridge.side=pe;const e=6.42,n=3.7,r=4.7,s=6,a=r,o=e-n,c=Math.hypot(a,o),l=Math.atan2(o,a),u=a/c,h=o/c,d=s*2,p=new Bt(d,.16,c+.35),g=(e+n)/2-.06,_=r/2,m=new lt(p,i.roofUnder);m.position.set(0,g,_),m.rotation.x=l;const f=m.clone();f.position.z=-_,f.rotation.x=-l,m.castShadow=f.castShadow=!0,m.receiveShadow=f.receiveShadow=!0,t.add(m,f),t.add(bt(d+.15,.3,.09,i.woodDark,0,n-.02,r+.02)),t.add(bt(d+.15,.3,.09,i.woodDark,0,n-.02,-r-.02));{const S=new Bt(.12,.15,.9),x=[];for(let T=-5.6;T<=5.61;T+=.62)x.push({p:[T,n-.02,r-.35],rx:l}),x.push({p:[T,n-.02,-4.3500000000000005],rx:-l});const M=new Oe(S,i.woodDark,x.length);_n(M,x),M.castShadow=!1,t.add(M)}{const S=new se(.085,.095,.55,7,1,!0);S.rotateZ(Math.PI/2),S.rotateY(Math.PI/2);const x=11,M=56,T=new Oe(S,i.roofTile,x*M*2),b=Fn(20240),y=new It;let C=0;const v=[];for(let E=0;E<2;E++){const L=E===0?1:-1;for(let I=0;I<x;I++){const k=.32+I*((c-.35)/x),D=L*(r-k*u),F=n+k*h+.1;for(let z=0;z<M;z++){const H=-5.78+z*(11.56/(M-1));v.push({p:[H,F,D],rx:L*l});const V=.82+b()*.3;y.setRGB(V,V*1.01,V*1.06),T.setColorAt(C++,y)}}}_n(T,v),T.instanceColor.needsUpdate=!0,T.castShadow=!1,T.receiveShadow=!0,t.add(T)}{const S=new se(.17,.17,.72,9,1,!0,0,Math.PI);S.rotateZ(Math.PI/2);const x=16,M=new Oe(S,i.ridge,x),T=[];for(let b=0;b<x;b++)T.push({p:[-5.6+b*(11.2/(x-1)),e+.02,0]});_n(M,T),M.castShadow=!1,t.add(M),t.add(bt(.5,.22,.4,i.ridge,-5.85,e-.05,0)),t.add(bt(.5,.22,.4,i.ridge,5.85,e-.05,0))}[-1,1].forEach(S=>{const x=new Kt;x.add(bt(.22,.5,.55,i.ridge,0,.2,0));const M=new lt(new se(.3,.3,.14,12),i.ridge);M.rotation.z=Math.PI/2,M.position.y=.55,M.castShadow=!0,x.add(M);const T=new lt(new xn(.12,10,8),i.ridge);T.position.y=.78,T.castShadow=!0,x.add(T),x.position.set(S*5.95,e-.1,0),t.add(x)});{const S=new lr;S.moveTo(-3.2,3.55),S.lineTo(3.2,3.55),S.lineTo(0,e-.12),S.closePath();const x=new ls(S);[4.94,-4.94].forEach(M=>{const T=new lt(x,i.plaster);T.rotation.y=Math.PI/2,T.position.x=M,T.castShadow=T.receiveShadow=!0,T.material.side=pe,t.add(T)}),[1,-1].forEach(M=>{[1,-1].forEach(T=>{const b=bt(.1,.24,c+.4,i.woodDark,M*(s-.02),g+.12,T*_);b.rotation.x=T*l,t.add(b)})})}{const S=new Bt(2,.09,1.7),x=l-.3;[[5.55,1,4.35,1],[-5.55,-1,4.35,1],[5.55,1,-4.35,-1],[-5.55,-1,-4.35,-1]].forEach(([T,b,y,C])=>{const v=new lt(S,i.roofUnder);v.position.set(T,n+.16,y),v.rotation.order="YXZ",v.rotation.y=b*C*.42,v.rotation.x=C*x,v.castShadow=v.receiveShadow=!0,t.add(v);const E=new se(.085,.095,.55,7,1,!0);E.rotateZ(Math.PI/2),E.rotateY(Math.PI/2);const L=new Oe(E,i.roofTileAlt,5),I=[];for(let k=0;k<5;k++)I.push({p:[T-.7+k*.35,n+.38,y-C*.15],rx:C*x});_n(L,I),L.castShadow=!1,t.add(L)})}return{group:t,ridgeY:e,eaveY:n,eaveZ:r}}function ug(i){const t=new Kt,{floorY:e}=Ll,n=-.9,r=4.9,s=-2.9,a=2.9,o=(n+r)/2;{const p=e+.06;for(let g=s+.1;g+1.82<a+.01;g+=1.82+.02)for(let _=n+.1;_+.92<r+.01;_+=.92+.02){const m=new lt(new Bt(.92,.06,1.82),i.tatami);m.position.set(_+.92/2,p,g+1.82/2),m.receiveShadow=!0,t.add(m);const f=bt(.92+.02,.06+.005,.035,i.tatamiEdge,_+.92/2,p,g+1.82-.017);f.castShadow=!1,t.add(f)}}{const u=3-e;[[n,0],[o,0],[r,-2],[r,2]].forEach(([d,p])=>t.add(bt(.16,u,.16,i.woodDark,d,e+u/2,p)));const h=new lt(new Bt(r-n+.4,.08,a-s+.4),i.woodDark);h.position.set(o,3.02,0),t.add(h)}{const u=bt(.1,2.2,a-s,i.plaster,n,e+1.15,0);t.add(u);for(let h=0;h<3;h++){const d=new Kt,p=1.75,g=1.7;d.add(bt(p,.06,.05,i.woodDark,0,g/2,0)),d.add(bt(p,.06,.05,i.woodDark,0,-g/2,0)),d.add(bt(.06,g,.05,i.woodDark,-p/2,0,0)),d.add(bt(.06,g,.05,i.woodDark,p/2,0,0));const _=new lt(new _e(p-.1,g-.1),i.fusuma);_.rotation.y=Math.PI/2,d.add(_);const m=new lt(new se(.03,.03,.03,10),i.bronze);m.rotation.z=Math.PI/2,m.position.set(.04,0,.35),d.add(m),d.position.set(n+.09,e+1,-1.85+h*1.85),t.add(d)}}{const d=bt(2.2,.16,1,i.wood,-2.6,e+.14,s+.55);t.add(d),t.add(bt(.14,2.2,.14,i.woodDark,-2.6-2.2/2,e+1.1,s+.15)),t.add(bt(.14,2.2,.14,i.woodDark,-2.6+2.2/2,e+1.1,s+.15)),t.add(bt(2.2+.2,.14,.16,i.woodDark,-2.6,e+2.25,s+.15));const p=new Kt,g=new lt(new Bt(.55,1.05,.02),i.scroll);p.add(g);const _=new se(.025,.025,.7,8),m=new lt(_,i.woodDark);m.rotation.z=Math.PI/2,m.position.y=.55;const f=m.clone();f.position.y=-.55,p.add(m,f),p.position.set(-2.6-.45,e+1.55,s+.22),p.rotation.x=.03,t.add(p);const S=[];for(let y=0;y<=8;y++){const C=y/8*Math.PI;S.push(new ot(.03+Math.sin(C)*.11,y*.035))}const x=new lt(new cr(S,12),new xt({color:3824268,roughness:.35,envMapIntensity:.7}));x.position.set(-2.6+.55,e+.22,s+.55),x.castShadow=!0,t.add(x);const M=new lt(new se(.012,.012,.5,6),i.mossDark);M.position.set(-2.6+.55,e+.5,s+.55),t.add(M);const T=new lt(new Qn(.09,0),new xt({color:13920650,roughness:.7}));T.position.set(-2.6+.55,e+.78,s+.55),T.castShadow=!0,t.add(T);const b=new lt(new Qn(.14,0),i.stone);b.scale.y=.6,b.position.set(-2.6+.1,e+.26,s+.6),b.castShadow=!0,t.add(b)}{t.add(bt(1.1,.07,.7,i.wood,2.2,e+.42,.6)),[[-.45,-.25],[.45,-.25],[-.45,.25],[.45,.25]].forEach(([p,g])=>t.add(bt(.07,.32,.07,i.woodDark,2.2+p,e+.22,.6+g)));const d=new xt({color:8007221,roughness:.9});[[2.2-.2,.6+.75],[2.2+.35,.6-.7]].forEach(([p,g])=>{const _=new lt(new Bt(.5,.09,.5),d);_.position.set(p,e+.12,g),_.rotation.y=.2,_.castShadow=_.receiveShadow=!0,t.add(_)})}const c=new Kt;{const u=new lt(new se(.012,.012,.5,6),i.woodDark);u.position.y=.45,c.add(u);const h=new lt(new se(.19,.19,.34,12),i.paperLantern);c.add(h);const d=new lt(new se(.1,.14,.05,10),i.woodDark);d.position.y=.19;const p=d.clone();p.position.y=-.19,c.add(d,p);const g=new lt(new se(.015,.03,.16,8),new xt({color:10695463,roughness:.8}));g.position.y=-.3,c.add(g),c.position.set(2,2.35,.4),t.add(c)}const l=new Al(16757867,5,9,2);return l.position.set(2,2.3,.4),t.add(l),{group:t,lantern:c,lanternLight:l}}const hg={x:7.5,z:6,w:4.6,d:2.9};function dg(i){const t=new Kt,{x:e,z:n,w:r,d:s}=hg,a=new lt(new Bi(1,40),new xt({color:2241323,roughness:1}));a.rotation.x=-Math.PI/2,a.scale.set(r/2+.15,s/2+.15,1),a.position.set(e,-.1,n),a.receiveShadow=!0,t.add(a);const o=new xt({color:5337212,roughness:.1,metalness:.85,envMapIntensity:1.1,transparent:!0,opacity:.93}),c=30,l=18,u=new _e(r,s,c,l),h=new lt(u,o);h.rotation.x=-Math.PI/2,h.position.set(e,.06,n),h.receiveShadow=!0,t.add(h);const d=u.attributes.position.array.slice();{const g=Fn(646),_=22,m=new Qn(.22,0),f=new Oe(m,i.stone,_),S=[];for(let x=0;x<_;x++){const M=x/_*Math.PI*2;S.push({p:[e+Math.cos(M)*(r/2+.1),.1,n+Math.sin(M)*(s/2+.1)],ry:g()*6.3,s:.8+g()*.6,sy:.55})}_n(f,S),t.add(f)}function p(g){const _=u.attributes.position;for(let m=0;m<_.count;m++){const f=d[m*3],S=d[m*3+1];_.setZ(m,Math.sin(f*2.1+g*1.7)*.022+Math.cos(S*2.8+g*2.2)*.02)}_.needsUpdate=!0,u.computeVertexNormals()}return{group:t,update:p,waterMat:o}}function fg(i,t){const e=new Nn({side:Fe,depthWrite:!1,fog:!1,uniforms:{top:{value:new It(8366281)},mid:{value:new It(15909267)},bot:{value:new It(14721137)}},vertexShader:`
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
      }`}),n=new lt(new xn(70,24,16),e);i.add(n),i.fog=new Ao(15778195,26,62);const r=new go(16767400,3);r.position.set(14,8.5,12),r.target.position.set(0,1.2,0),r.castShadow=!0,r.shadow.mapSize.set(2048,2048),r.shadow.camera.left=-15,r.shadow.camera.right=15,r.shadow.camera.top=15,r.shadow.camera.bottom=-15,r.shadow.camera.near=10,r.shadow.camera.far=120,r.shadow.bias=-4e-4,r.shadow.normalBias=.03,i.add(r,r.target);const s=new q0(12375016,9072466,.6);i.add(s);const a=new go(16764830,.35);a.position.set(-8,4,-6),i.add(a);const o=document.createElement("canvas");o.width=64,o.height=32;const c=o.getContext("2d"),l=c.createLinearGradient(0,0,0,32);l.addColorStop(0,"#87a9c8"),l.addColorStop(.48,"#f7c98b"),l.addColorStop(.55,"#8a6f52"),l.addColorStop(1,"#3a3428"),c.fillStyle=l,c.fillRect(0,0,64,32);const u=new ar(o);u.mapping=Yr,u.colorSpace=ge;const h=new uo(t),d=h.fromEquirectangular(u);return i.environment=d.texture,u.dispose(),h.dispose(),{sun:r,hemi:s,skyMat:e}}function ti(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,c=new he;let l=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(h.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in h.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(h.morphAttributes[p])}if(t){let p;if(e)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,u),l+=p}}if(e){let u=0;const h=[];for(let d=0;d<i.length;++d){const p=i[d].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+u);u+=i[d].attributes.position.count}c.setIndex(h)}for(const u in s){const h=Tc(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){const p=[];for(let _=0;_<a[u].length;++_)p.push(a[u][_][d]);const g=Tc(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function Tc(i){let t,e,n,r=-1,s=0;for(let l=0;l<i.length;++l){const u=i[l];if(u.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.array.length}const a=new t(s);let o=0;for(let l=0;l<i.length;++l)a.set(i[l].array,o),o+=i[l].array.length;const c=new ve(a,e,n);return r!==void 0&&(c.gpuType=r),c}function on(i){let t=i>>>0||1;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const Dl=og,Ac=ag||{},Ul={M:null};function pg(i){Ul.M=i}const mg={tile:"roofTile",shoji:"paper"},Qs={};function Ze(i,t){const e=Ul.M||Dl;if(e&&e[i])return e[i];const n=mg[i];return n&&e&&e[n]?e[n]:(Qs[i]||(Qs[i]=t()),Qs[i])}const ri=(i,t=.85,e=0)=>new xt({color:i,roughness:t,metalness:e}),pn=()=>Ze("woodDark",()=>ri(4864552,.8)),Rc=()=>Ze("woodNew",()=>ri(9069112,.7)),Cc=()=>Ze("woodAged",()=>ri(7234136,.9)),Pc=()=>Ze("plaster",()=>ri(15261904,.95)),gg=()=>Ze("tile",()=>ri(3817286,.85)),Il=()=>Ze("stone",()=>ri(9276808,.95)),_g=()=>Ze("glassDark",()=>new xt({color:1053980,roughness:.08,metalness:.9})),_o=()=>Ze("iron",()=>ri(2829102,.55,.8));function le(i,t,e,n,r,s,a,o,c=0,l=0,u=0){const h=new Bt(e,n,r),d=new ee().makeRotationFromEuler(new In(u,c,l));d.setPosition(s,a,o),h.applyMatrix4(d),(i[t]||(i[t]=[])).push(h)}function xg(i,t,e,{shadow:n=!0}={}){for(const r of Object.keys(t)){const s=ti(t[r],!1);t[r].forEach(o=>o.dispose());const a=new lt(s,e(r));a.castShadow=n,a.receiveShadow=!0,i.add(a)}}function vg(i={}){const t=on(i.seed??7),e=i.w??6.5,n=i.d??6,r=i.wallH??3.1,s=Ce.degToRad(i.pitch??28+t()*8),a=i.roofType??(t()<.7?"kirizuma":"yosemune"),o=i.facadeCols??Math.max(3,Math.round(e/1.8)),c=i.age??t(),l=!!i.isShop,u=i.engawa??(t()<.6?.9:0),h=new Kt;h.name=i.name||"house";const d={},p=(i.woodTone??.5)>.6?"woodNew":"woodAged",g=W=>W==="WOOD"?Ze(p,p==="woodNew"?Rc:Cc):W==="WOOD_D"?pn():W==="PLAS"?Dl.plasterTinted?.(i.plasterTone??15261904)??Pc():W==="STONE"?Il():pn(),_=.55,m=.45,f=[],S=Math.max(3,Math.round(e/1.2)+1),x=Math.max(3,Math.round(n/1.2)+1);for(let W=0;W<S;W++)f.push([-e/2+e*W/(S-1),0,-n/2],[-e/2+e*W/(S-1),0,n/2]);for(let W=1;W<x-1;W++)f.push([-e/2,0,-n/2+n*W/(x-1)],[e/2,0,-n/2+n*W/(x-1)]);for(const[W,,nt]of f)le(d,"STONE",_,m,_,W,m/2-.06,nt,t()*.1);const M=m-.06;le(d,"WOOD_D",e+.3,.22,n+.3,0,M+.11,0);const T=.14,b=M+.22,y=b+r,C=i.winLayout??Array.from({length:o},()=>t()<.55?1:2),v=e/o;for(let W=0;W<o;W++){const nt=-e/2+v*(W+.5),St=C[W%C.length],Ct=(i.doorSide??0)!==0&&(i.doorSide<0&&W===0||i.doorSide>0&&W===o-1),P=b+.55,et=b+r-.75;St===0&&!Ct?le(d,"PLAS",v-.16,r,T,nt,b+r/2,n/2):Ct?(le(d,"PLAS",v-.16,P-b,T,nt,(b+P)/2,n/2),le(d,"PLAS",v-.16,y-(b+2.1),T,nt,(y+b+2.1)/2,n/2)):(le(d,"PLAS",v-.16,P-b,T,nt,(b+P)/2,n/2),le(d,"PLAS",v-.16,y-et,T,nt,(y+et)/2,n/2),le(d,"PLAS",.14,et-P,T,nt-(v-.16)/2+.07,(P+et)/2,n/2),le(d,"PLAS",.14,et-P,T,nt+(v-.16)/2-.07,(P+et)/2,n/2))}le(d,"PLAS",e,r,T,0,b+r/2,-n/2),le(d,"PLAS",T,r,n,-e/2,b+r/2,0),le(d,"PLAS",T,r,n,e/2,b+r/2,0);for(let W=0;W<=o;W++){const nt=-e/2+v*W;le(d,"WOOD_D",.14,r,.14,nt,b+r/2,n/2+.02),le(d,"WOOD_D",.14,r,.14,nt,b+r/2,-n/2-.02)}le(d,"WOOD_D",e+.24,.16,.18,0,y-.08,n/2+.02),le(d,"WOOD_D",e+.24,.12,.14,0,b+1.55,n/2+.03),le(d,"WOOD_D",e+.24,.2,.2,0,y+.02,-n/2-.02);for(let W=0;W<=o;W++){const nt=-e/2+v*W;le(d,"WOOD_D",.12,.12,.5,nt,y+.18,n/2+.25)}for(let W=0;W<o;W++){const nt=-e/2+v*(W+.5);le(d,"WOOD_D",.22,.16,.3,nt,y+.32,n/2+.32)}const E=[],L=new Kt;for(let W=0;W<o;W++){const nt=-e/2+v*(W+.5),St=C[W%C.length],Ct=(i.doorSide??0)!==0&&(i.doorSide<0&&W===0||i.doorSide>0&&W===o-1),P=b+.55,et=b+r-.75,j=v-.44,it=et-P;if(Ct){const wt=new lt(new Bt(j+.12,2.15,.1),pn());wt.position.set(nt,b+1.075,n/2+.02),L.add(wt);const ft=new lt(new Bt(j/2-.03,2,.05),Ze("woodAged",Cc));ft.position.set(nt-j/4,b+1,n/2+.06),L.add(ft);const A=ft.clone();A.position.x=nt+j/4,L.add(A);const w=new se(.02,.02,.16,6);for(const B of[nt-.08,nt+.08]){const Q=new lt(w,_o());Q.position.set(B,b+1,n/2+.1),L.add(Q)}if(l){const B=new lt(new Bt(j,.5,.03),new xt({color:2899555,roughness:.9}));B.position.set(nt,b+2.35,n/2+.12),B.castShadow=!0,L.add(B)}continue}if(St===0)continue;const J=new lt(new Bt(j+.1,it+.1,.09),pn());if(J.position.set(nt,(P+et)/2,n/2+.01),L.add(J),St===1){const wt=new xt({color:15985881,roughness:.9,emissive:16762995,emissiveIntensity:0});E.push(wt);const ft=new lt(new _e(j,it),wt);ft.position.set(nt,(P+et)/2,n/2+.065),L.add(ft);const A=pn(),w=4,B=3;for(let Q=1;Q<w;Q++){const tt=new lt(new Bt(.045,it,.03),A);tt.position.set(nt-j/2+j*Q/w,(P+et)/2,n/2+.08),L.add(tt)}for(let Q=1;Q<B;Q++){const tt=new lt(new Bt(j,.045,.03),A);tt.position.set(nt,P+it*Q/B,n/2+.08),L.add(tt)}}else{const wt=new lt(new _e(j,it),_g());wt.position.set(nt,(P+et)/2,n/2+.055),L.add(wt);const ft=pn();for(let w=0;w<=5;w++){const B=new lt(new Bt(.05,it,.04),ft);B.position.set(nt-j/2+j*w/5,(P+et)/2,n/2+.075),L.add(B)}const A=new lt(new Bt(j,.06,.04),ft);A.position.set(nt,(P+et)/2,n/2+.075),L.add(A)}}if(L.traverse(W=>{W.isMesh&&(W.castShadow=!1,W.receiveShadow=!0)}),h.add(L),u>0){le(d,"WOOD",e*.95,.12,u,0,b+.12,n/2+u/2+.05);for(let W=0;W<=Math.round(e*.95/1.1);W++){const nt=-e*.95/2+e*.95*W/Math.round(e*.95/1.1);le(d,"STONE",.3,.3,.3,nt,.1,n/2+u+.02)}for(let W=0;W<=6;W++){const nt=-e*.9/2+e*.9*W/6;le(d,"WOOD_D",.09,.7,.09,nt,b+.5,n/2+u)}le(d,"WOOD_D",e*.9,.08,.1,0,b+.85,n/2+u)}{const W=new Kt,nt=new lt(new Bt(e-.4,.08,n-.4),Ze("woodNew",Rc));nt.position.y=b+.04,nt.receiveShadow=!0,W.add(nt);const St=new lt(new _e(e-.4,r-.3),new xt({color:10127984,roughness:1}));St.position.set(0,b+r/2,-n/2+.25),W.add(St);const Ct=new lt(new Bt(1.7,.03,.9),new xt({color:10133611,roughness:1}));Ct.position.set(-.6,b+.1,.3),W.add(Ct);const P=Ct.clone();P.position.x=1.2,W.add(P);const et=new lt(new Bt(1.1,.32,.6),pn());et.position.set(.2,b+.24,.3),W.add(et);const j=new xt({color:4469538,emissive:16757854,emissiveIntensity:0});E.push(j);const it=new lt(new xn(.09,10,8),j);it.position.set(.2,b+r-.6,.3),W.add(it);const J=new lt(new se(.008,.008,.7),_o());J.position.set(.2,b+r-.25,.3),W.add(J),W.traverse(wt=>{wt.isMesh&&(wt.castShadow=!1,wt.receiveShadow=!0)}),h.add(W)}xg(h,d,g,{shadow:!0});const I=new Kt,k=Math.tan(s)*(n/2+.9),D=y+.35,F=Math.hypot(n/2+.9,k)+.35,z=Ze("tile",gg),H=pn(),V=new xt({color:4010535,roughness:.95}),K=new Bt(.3,.07,.36),$=[],ut=[];for(const W of[1,-1]){const nt=new Bt(e+1.6,.12,F),St=W*(n/4+.22),Ct=D+k/2;nt.applyMatrix4(new ee().makeRotationX(W>0?s:-s)),nt.translate(0,Ct,St),ut.push(nt);const P=new Bt(e+1.5,.04,F*.98);P.applyMatrix4(new ee().makeRotationX(W>0?s:-s)),P.translate(0,Ct-.09,St);const et=new lt(ti([P],!1),V);et.receiveShadow=!0,I.add(et);const j=Math.floor(F/.34),it=Math.floor((e+1.4)/.32);for(let J=0;J<j;J++)for(let wt=0;wt<it;wt++){const ft=-((it-1)*.32)/2+wt*.32+(t()-.5)*.015,A=-F/2+.2+J*.34,w=new U(ft,.1+(t()-.5)*.012,A).applyEuler(new In(W>0?s:-s,0,0));$.push({p:[w.x,w.y+Ct,w.z+St],ry:(t()-.5)*.03,tone:.85+t()*.3})}}const ht=new lt(ti(ut,!1),new xt({color:2894896,roughness:.9}));ht.castShadow=!0,I.add(ht);const q=new Oe(K,z.clone(),$.length);{const W=new oe,nt=new It;$.forEach((St,Ct)=>{W.position.set(...St.p),W.rotation.set(0,St.ry,0),W.updateMatrix(),q.setMatrixAt(Ct,W.matrix);const P=St.tone*(1-c*.25);q.setColorAt(Ct,nt.setRGB(.32*P+.1,.34*P+.1,.38*P+.12))}),q.instanceMatrix.needsUpdate=!0,q.instanceColor&&(q.instanceColor.needsUpdate=!0)}q.castShadow=!0,q.receiveShadow=!0,I.add(q);const st=new se(.14,.14,.46,8,1,!1,0,Math.PI);st.rotateZ(Math.PI/2);const yt=Math.ceil((e+1.4)/.5);for(let W=0;W<yt;W++){const nt=new lt(st,H);nt.position.set(-(e+1.2)/2+.25+W*.5,D+k+.02,0),nt.castShadow=!0,I.add(nt)}const Rt=new lr;Rt.moveTo(-n/2,0),Rt.lineTo(n/2,0),Rt.lineTo(0,k),Rt.closePath();const Et=new Uo(Rt,{depth:.12,bevelEnabled:!1});Et.rotateY(Math.PI/2);for(const W of[e/2-.02,-e/2-.1]){const nt=new lt(Et,Pc());nt.position.set(W,y+.3,0),nt.castShadow=!0,I.add(nt)}if(a==="yosemune")for(const W of[1,-1]){const nt=new lt(new Bt(.14,F*.55,(n/2+.9)*1.02),ht.material);nt.position.set(W*(e/2+.55),D+k*.45,0),nt.rotation.z=W*.62,nt.castShadow=!0,I.add(nt)}if(h.add(I),c>.15){const W=new lt(new Bt(e+.05,.5*c+.15,n+.05),new xt({color:3814700,roughness:1,transparent:!0,opacity:.25+c*.3,depthWrite:!1}));W.position.y=b+.25,W.renderOrder=2,h.add(W)}return h.traverse(W=>{W.isMesh&&W.material?.isMeshStandardMaterial&&Ac.registerWet&&Ac.registerWet(W.material)}),{group:h,glowMats:E,dims:{w:e,d:n,wallH:r},roofTopY:D+k}}function Mg(i,t={}){if(!i||i.userData._upgraded)return i;i.userData._upgraded=!0;const e=new Kt;e.name="hero_joinery_upgrade";const n=pn(),r=_o(),s=(_,m,f,S,x,M)=>{const T=new lt(new Bt(_,m,f),n);return T.position.set(S,x,M),T.castShadow=!0,T.receiveShadow=!0,e.add(T),T},a=new On().setFromObject(i),o=a.max.x-a.min.x||9,c=a.max.z-a.min.z||7,l=(a.max.x+a.min.x)/2-i.position.x,u=(a.max.z+a.min.z)/2-i.position.z,h=Il();for(let _=-o/2;_<=o/2+.01;_+=1.15)for(const m of[-c/2-.15,c/2+.15]){const f=new lt(new Bt(.5,.4,.5),h);f.position.set(l+_,.14,u+m),f.receiveShadow=!0,f.castShadow=!1,e.add(f)}s(o*.98,.12,.1,l,t.nageshiY??2,u+c/2+.08);for(let _=-o/2+.8;_<o/2;_+=1.6)s(.24,.18,.3,l+_,t.eaveY??3.35,u+c/2+.3);const d=new se(.025,.025,.2,6);for(const _ of[-.12,.12]){const m=new lt(d,r);m.position.set(l+(t.doorX??-2.2)+_,1.25,u+c/2+.12),e.add(m)}const p=new xt({color:4469538,emissive:16757854,emissiveIntensity:0}),g=new lt(new xn(.1,10,8),p);return g.position.set(l,2.6,u),e.add(g),i.userData.glowMats=[...i.userData.glowMats||[],p],i.add(e),i}const mn={strength:.45,gust(i){return this.strength*(.65+.35*Math.sin(i*.6)*Math.sin(i*.23+1.7))}},Sg=["clear","windy","rainy","misty"];function yg({scene:i,pondWaterMats:t=[],wetMats:e=[]}={}){const n=on(777),r=new Kt;r.name="weather",i?.add(r);let s="clear",a="clear",o=1,c=0;const l=800,u=new Float32Array(l*3);for(let x=0;x<l;x++)u[x*3]=(n()-.5)*60,u[x*3+1]=n()*18,u[x*3+2]=(n()-.5)*60;const h=new he;h.setAttribute("position",new ve(u,3));const d=new as({color:11452368,size:.14,transparent:!0,opacity:0,depthWrite:!1}),p=new Ro(h,d);p.frustumCulled=!1,r.add(p);const g=new Fi({color:13623530,transparent:!0,opacity:0,depthWrite:!1,side:pe}),_=[],m=new Io(.05,.09,12);for(let x=0;x<40;x++){const M=new lt(m,g.clone());M.rotation.x=-Math.PI/2,M.position.set((n()-.5)*50,.06,(n()-.5)*50),M.userData.ph=n(),r.add(M),_.push(M)}const f=new xt({color:2106924,roughness:.05,metalness:.7,transparent:!0,opacity:0});for(const[x,M,T]of[[-5.9,9.6,1.2],[4,9.4,1.5],[12,9.7,1],[-12,9.5,1.1],[0,4.2,.9]]){const b=new lt(new Bi(T,20),f);b.rotation.x=-Math.PI/2,b.position.set(x,.045,M),r.add(b)}const S={get state(){return o>=1?a:`${s}>${a}`},get wetness(){return c},setState(x){Sg.includes(x)&&x!==a&&(s=o>=1?a:s,a=x,o=0)},update(x,M){o=Math.min(1,o+x/3);const T=o*o*(3-2*o),b=a==="rainy",y=(b?T:1-T)*(a==="rainy"?1:0)+(s==="rainy"&&a!=="rainy"?1-T:0),C=a==="windy"?1.2:a==="rainy"?.8:a==="misty"?.15:.45;if(mn.strength+=(C*(a==="windy"?1:T||1)-mn.strength)*Math.min(1,x*1.2),a==="windy"&&(mn.strength+=(1.2-mn.strength)*Math.min(1,x)),d.opacity=y*.75,d.opacity>.01){const v=h.attributes.position.array,E=mn.gust(M)*3.2;for(let L=0;L<l;L++)v[L*3+1]-=x*11,v[L*3]+=E*x,v[L*3+1]<0&&(v[L*3+1]=15+n()*3,v[L*3]=(n()-.5)*60,v[L*3+2]=(n()-.5)*60);h.attributes.position.needsUpdate=!0;for(const L of _){L.material.opacity=y*.6;const I=(M*1.4+L.userData.ph*7)%1;L.scale.setScalar(.5+I*2.2),L.material.opacity=y*.6*(1-I)}}else for(const v of _)v.material.opacity=0;c+=((a==="rainy"?T:a==="rainy"?1:s==="rainy"?1-T:0)-c)*Math.min(1,x*.8);for(const v of e)v?.userData?._dry||(v.userData._dry={r:v.roughness??.85,e:v.envMapIntensity??1}),v.roughness=Ce.lerp(v.userData._dry.r,Math.min(.25,v.userData._dry.r*.4),c),v.envMapIntensity=Ce.lerp(v.userData._dry.e,v.userData._dry.e+.9,c);f.opacity=c*.75;for(const v of t)v.roughness=Ce.lerp(.18,.05,c);S.rainK=y,S.mistK=a==="misty"?T:s==="misty"?1-T:0,S.dimK=b?T*.55:0},rainK:0,mistK:0,dimK:0};return S}function wg(i){const t=new Kt,e=Fn(999),n=170,r=new he,s=new Float32Array(n*3),a=new Float32Array(n);for(let f=0;f<n;f++)s[f*3]=-22+e()*44,s[f*3+1]=.3+e()*6,s[f*3+2]=-14+e()*30,a[f]=e()*100;r.setAttribute("position",new ve(s,3));const o=(()=>{const f=document.createElement("canvas");f.width=f.height=32;const S=f.getContext("2d"),x=S.createRadialGradient(16,16,1,16,16,15);return x.addColorStop(0,"rgba(255,240,214,1)"),x.addColorStop(1,"rgba(255,240,214,0)"),S.fillStyle=x,S.fillRect(0,0,32,32),new ar(f)})(),c=new Ro(r,new as({map:o,size:.09,transparent:!0,opacity:.55,depthWrite:!1,color:16771264,sizeAttenuation:!0}));t.add(c);const l=40,u=new _e(.17,.17),h=new Oe(u,i.mapleLeaf,l);h.castShadow=!1,h.receiveShadow=!1,h.frustumCulled=!1;const d=[],p=new It,g=[12597547,13849600,15105570,11088422];for(let f=0;f<l;f++)d.push({bx:-6+(e()-.5)*30,bz:2+(e()-.5)*26,speed:.35+e()*.4,phase:e()*6.28,sway:.4+e()*.7,spin:1+e()*2}),p.setHex(g[Math.floor(e()*g.length)]),h.setColorAt(f,p);h.instanceColor.needsUpdate=!0,t.add(h);const _=new oe;function m(f){const S=.5+mn.gust(f),x=r.attributes.position;for(let M=0;M<n;M++){const T=a[M];x.array[M*3]+=Math.sin(f*.3+T)*.0012*(.5+S),x.array[M*3+1]+=(.0016+Math.sin(f*.5+T*2)*8e-4)*(.5+S),x.array[M*3+1]>6.5&&(x.array[M*3+1]=.2)}x.needsUpdate=!0;for(let M=0;M<l;M++){const T=d[M];let y=4.8-(f*T.speed*(.6+S)+T.phase)%4.6;const C=T.bx+Math.sin(f*.9+T.phase)*T.sway*(.6+S),v=T.bz+Math.cos(f*.7+T.phase*1.3)*T.sway*.7;_.position.set(C,y,v),_.rotation.set(f*T.spin+T.phase,T.phase,f*T.spin*.7),_.scale.setScalar(1),_.updateMatrix(),h.setMatrixAt(M,_.matrix)}h.instanceMatrix.needsUpdate=!0}return m(.01),{group:t,update:m}}const Lc={type:"change"},to={type:"start"},Dc={type:"end"},kr=new Eo,Uc=new Tn,Eg=Math.cos(70*Ce.DEG2RAD);class bg extends ei{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:si.ROTATE,MIDDLE:si.DOLLY,RIGHT:si.PAN},this.touches={ONE:oi.ROTATE,TWO:oi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",rt),this._domElementKeyEvents=N},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",rt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Lc),n.update(),s=r.NONE},this.update=function(){const N=new U,ct=new Jn().setFromUnitVectors(t.up,new U(0,1,0)),_t=ct.clone().invert(),dt=new U,Lt=new Jn,qt=new U,$t=2*Math.PI;return function(gt=null){const O=n.object.position;N.copy(O).sub(n.target),N.applyQuaternion(ct),o.setFromVector3(N),n.autoRotate&&s===r.NONE&&L(v(gt)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let pt=n.minAzimuthAngle,mt=n.maxAzimuthAngle;isFinite(pt)&&isFinite(mt)&&(pt<-Math.PI?pt+=$t:pt>Math.PI&&(pt-=$t),mt<-Math.PI?mt+=$t:mt>Math.PI&&(mt-=$t),pt<=mt?o.theta=Math.max(pt,Math.min(mt,o.theta)):o.theta=o.theta>(pt+mt)/2?Math.max(pt,o.theta):Math.min(mt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&b||n.object.isOrthographicCamera?o.radius=K(o.radius):o.radius=K(o.radius*l),N.setFromSpherical(o),N.applyQuaternion(_t),O.copy(n.target).add(N),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let Ot=!1;if(n.zoomToCursor&&b){let Dt=null;if(n.object.isPerspectiveCamera){const Qt=N.length();Dt=K(Qt*l);const te=Qt-Dt;n.object.position.addScaledVector(M,te),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Qt=new U(T.x,T.y,0);Qt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Ot=!0;const te=new U(T.x,T.y,0);te.unproject(n.object),n.object.position.sub(te).add(Qt),n.object.updateMatrixWorld(),Dt=N.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Dt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Dt).add(n.object.position):(kr.origin.copy(n.object.position),kr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(kr.direction))<Eg?t.lookAt(n.target):(Uc.setFromNormalAndCoplanarPoint(n.object.up,n.target),kr.intersectPlane(Uc,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Ot=!0);return l=1,b=!1,Ot||dt.distanceToSquared(n.object.position)>a||8*(1-Lt.dot(n.object.quaternion))>a||qt.distanceToSquared(n.target)>0?(n.dispatchEvent(Lc),dt.copy(n.object.position),Lt.copy(n.object.quaternion),qt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Tt),n.domElement.removeEventListener("pointerdown",ft),n.domElement.removeEventListener("pointercancel",w),n.domElement.removeEventListener("wheel",tt),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",w),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",rt),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new bc,c=new bc;let l=1;const u=new U,h=new ot,d=new ot,p=new ot,g=new ot,_=new ot,m=new ot,f=new ot,S=new ot,x=new ot,M=new U,T=new ot;let b=!1;const y=[],C={};function v(N){return N!==null?2*Math.PI/60*n.autoRotateSpeed*N:2*Math.PI/60/60*n.autoRotateSpeed}function E(N){const ct=Math.abs(N)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*ct)}function L(N){c.theta-=N}function I(N){c.phi-=N}const k=function(){const N=new U;return function(_t,dt){N.setFromMatrixColumn(dt,0),N.multiplyScalar(-_t),u.add(N)}}(),D=function(){const N=new U;return function(_t,dt){n.screenSpacePanning===!0?N.setFromMatrixColumn(dt,1):(N.setFromMatrixColumn(dt,0),N.crossVectors(n.object.up,N)),N.multiplyScalar(_t),u.add(N)}}(),F=function(){const N=new U;return function(_t,dt){const Lt=n.domElement;if(n.object.isPerspectiveCamera){const qt=n.object.position;N.copy(qt).sub(n.target);let $t=N.length();$t*=Math.tan(n.object.fov/2*Math.PI/180),k(2*_t*$t/Lt.clientHeight,n.object.matrix),D(2*dt*$t/Lt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(k(_t*(n.object.right-n.object.left)/n.object.zoom/Lt.clientWidth,n.object.matrix),D(dt*(n.object.top-n.object.bottom)/n.object.zoom/Lt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function z(N){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(N){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(N,ct){if(!n.zoomToCursor)return;b=!0;const _t=n.domElement.getBoundingClientRect(),dt=N-_t.left,Lt=ct-_t.top,qt=_t.width,$t=_t.height;T.x=dt/qt*2-1,T.y=-(Lt/$t)*2+1,M.set(T.x,T.y,1).unproject(n.object).sub(n.object.position).normalize()}function K(N){return Math.max(n.minDistance,Math.min(n.maxDistance,N))}function $(N){h.set(N.clientX,N.clientY)}function ut(N){V(N.clientX,N.clientX),f.set(N.clientX,N.clientY)}function ht(N){g.set(N.clientX,N.clientY)}function q(N){d.set(N.clientX,N.clientY),p.subVectors(d,h).multiplyScalar(n.rotateSpeed);const ct=n.domElement;L(2*Math.PI*p.x/ct.clientHeight),I(2*Math.PI*p.y/ct.clientHeight),h.copy(d),n.update()}function st(N){S.set(N.clientX,N.clientY),x.subVectors(S,f),x.y>0?z(E(x.y)):x.y<0&&H(E(x.y)),f.copy(S),n.update()}function yt(N){_.set(N.clientX,N.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),F(m.x,m.y),g.copy(_),n.update()}function Rt(N){V(N.clientX,N.clientY),N.deltaY<0?H(E(N.deltaY)):N.deltaY>0&&z(E(N.deltaY)),n.update()}function Et(N){let ct=!1;switch(N.code){case n.keys.UP:N.ctrlKey||N.metaKey||N.shiftKey?I(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),ct=!0;break;case n.keys.BOTTOM:N.ctrlKey||N.metaKey||N.shiftKey?I(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),ct=!0;break;case n.keys.LEFT:N.ctrlKey||N.metaKey||N.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),ct=!0;break;case n.keys.RIGHT:N.ctrlKey||N.metaKey||N.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),ct=!0;break}ct&&(N.preventDefault(),n.update())}function W(N){if(y.length===1)h.set(N.pageX,N.pageY);else{const ct=Yt(N),_t=.5*(N.pageX+ct.x),dt=.5*(N.pageY+ct.y);h.set(_t,dt)}}function nt(N){if(y.length===1)g.set(N.pageX,N.pageY);else{const ct=Yt(N),_t=.5*(N.pageX+ct.x),dt=.5*(N.pageY+ct.y);g.set(_t,dt)}}function St(N){const ct=Yt(N),_t=N.pageX-ct.x,dt=N.pageY-ct.y,Lt=Math.sqrt(_t*_t+dt*dt);f.set(0,Lt)}function Ct(N){n.enableZoom&&St(N),n.enablePan&&nt(N)}function P(N){n.enableZoom&&St(N),n.enableRotate&&W(N)}function et(N){if(y.length==1)d.set(N.pageX,N.pageY);else{const _t=Yt(N),dt=.5*(N.pageX+_t.x),Lt=.5*(N.pageY+_t.y);d.set(dt,Lt)}p.subVectors(d,h).multiplyScalar(n.rotateSpeed);const ct=n.domElement;L(2*Math.PI*p.x/ct.clientHeight),I(2*Math.PI*p.y/ct.clientHeight),h.copy(d)}function j(N){if(y.length===1)_.set(N.pageX,N.pageY);else{const ct=Yt(N),_t=.5*(N.pageX+ct.x),dt=.5*(N.pageY+ct.y);_.set(_t,dt)}m.subVectors(_,g).multiplyScalar(n.panSpeed),F(m.x,m.y),g.copy(_)}function it(N){const ct=Yt(N),_t=N.pageX-ct.x,dt=N.pageY-ct.y,Lt=Math.sqrt(_t*_t+dt*dt);S.set(0,Lt),x.set(0,Math.pow(S.y/f.y,n.zoomSpeed)),z(x.y),f.copy(S);const qt=(N.pageX+ct.x)*.5,$t=(N.pageY+ct.y)*.5;V(qt,$t)}function J(N){n.enableZoom&&it(N),n.enablePan&&j(N)}function wt(N){n.enableZoom&&it(N),n.enableRotate&&et(N)}function ft(N){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(N.pointerId),n.domElement.addEventListener("pointermove",A),n.domElement.addEventListener("pointerup",w)),Nt(N),N.pointerType==="touch"?Pt(N):B(N))}function A(N){n.enabled!==!1&&(N.pointerType==="touch"?Mt(N):Q(N))}function w(N){Gt(N),y.length===0&&(n.domElement.releasePointerCapture(N.pointerId),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",w)),n.dispatchEvent(Dc),s=r.NONE}function B(N){let ct;switch(N.button){case 0:ct=n.mouseButtons.LEFT;break;case 1:ct=n.mouseButtons.MIDDLE;break;case 2:ct=n.mouseButtons.RIGHT;break;default:ct=-1}switch(ct){case si.DOLLY:if(n.enableZoom===!1)return;ut(N),s=r.DOLLY;break;case si.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enablePan===!1)return;ht(N),s=r.PAN}else{if(n.enableRotate===!1)return;$(N),s=r.ROTATE}break;case si.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enableRotate===!1)return;$(N),s=r.ROTATE}else{if(n.enablePan===!1)return;ht(N),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(to)}function Q(N){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;q(N);break;case r.DOLLY:if(n.enableZoom===!1)return;st(N);break;case r.PAN:if(n.enablePan===!1)return;yt(N);break}}function tt(N){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(N.preventDefault(),n.dispatchEvent(to),Rt(N),n.dispatchEvent(Dc))}function rt(N){n.enabled===!1||n.enablePan===!1||Et(N)}function Pt(N){switch(at(N),y.length){case 1:switch(n.touches.ONE){case oi.ROTATE:if(n.enableRotate===!1)return;W(N),s=r.TOUCH_ROTATE;break;case oi.PAN:if(n.enablePan===!1)return;nt(N),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case oi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ct(N),s=r.TOUCH_DOLLY_PAN;break;case oi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;P(N),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(to)}function Mt(N){switch(at(N),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;et(N),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;j(N),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;J(N),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;wt(N),n.update();break;default:s=r.NONE}}function Tt(N){n.enabled!==!1&&N.preventDefault()}function Nt(N){y.push(N.pointerId)}function Gt(N){delete C[N.pointerId];for(let ct=0;ct<y.length;ct++)if(y[ct]==N.pointerId){y.splice(ct,1);return}}function at(N){let ct=C[N.pointerId];ct===void 0&&(ct=new ot,C[N.pointerId]=ct),ct.set(N.pageX,N.pageY)}function Yt(N){const ct=N.pointerId===y[0]?y[1]:y[0];return C[ct]}n.domElement.addEventListener("contextmenu",Tt),n.domElement.addEventListener("pointerdown",ft),n.domElement.addEventListener("pointercancel",w),n.domElement.addEventListener("wheel",tt,{passive:!1}),this.update()}}function Tg(i){const t=new Ve(45,window.innerWidth/window.innerHeight,.1,200);t.position.set(12.5,7,15.5);const e=new bg(t,i.domElement);e.target.set(0,2.2,1),e.enableDamping=!0,e.dampingFactor=.06,e.minDistance=5,e.maxDistance=48,e.maxPolarAngle=1.45,e.update();function n(){t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)}return window.addEventListener("resize",n),{camera:t,controls:e,onResize:n}}const Ag=20260911,ji=[{name:"hero",cx:0,cz:-1,w:9,d:7,kind:"hero"},{name:"A",cx:-10.5,cz:-1,w:6.5,d:6,kind:"home"},{name:"B",cx:9.8,cz:-.5,w:6,d:6.5,kind:"home"},{name:"shop1",cx:14,cz:13.5,w:7,d:5,kind:"shop"},{name:"shop2",cx:-13,cz:13.5,w:6.5,d:5,kind:"shop"},{name:"C",cx:-9,cz:-12,w:7,d:6,kind:"home"},{name:"D",cx:2,cz:-12.5,w:6.5,d:6,kind:"home"},{name:"E",cx:11.5,cz:-12,w:6,d:5.5,kind:"home"},{name:"F",cx:-19,cz:-3,w:5.5,d:6,kind:"home"},{name:"G",cx:-6,cz:21,w:6,d:5,kind:"home"},{name:"shed1",cx:19.5,cz:-4,w:3,d:2.5,kind:"shed"},{name:"shed2",cx:-20.5,cz:8,w:2.8,d:2.5,kind:"shed"}],Rg={A:{seed:11,w:6.5,d:6,wallH:2.9,roofType:"kirizuma",pitch:30,facadeCols:4,doorSide:-1,engawa:.9,woodTone:.3,age:.7},B:{seed:22,w:6,d:6.5,wallH:3.3,roofType:"yosemune",pitch:32,facadeCols:3,doorSide:1,engawa:0,woodTone:.8,age:.2},shop1:{seed:33,w:7,d:5,wallH:3.4,roofType:"kirizuma",pitch:26,facadeCols:4,doorSide:0,engawa:1.4,woodTone:.6,age:.35,isShop:!0},shop2:{seed:44,w:6.5,d:5,wallH:3.2,roofType:"kirizuma",pitch:27,facadeCols:4,doorSide:0,engawa:1.2,woodTone:.4,age:.55,isShop:!0},C:{seed:55,w:7,d:6,wallH:3,roofType:"yosemune",pitch:31,facadeCols:4,doorSide:1,engawa:.9,woodTone:.5,age:.5},D:{seed:66,w:6.5,d:6,wallH:3.5,roofType:"kirizuma",pitch:33,facadeCols:3,doorSide:-1,engawa:0,woodTone:.75,age:.25},E:{seed:77,w:6,d:5.5,wallH:2.8,roofType:"kirizuma",pitch:29,facadeCols:3,doorSide:1,engawa:.8,woodTone:.35,age:.65},F:{seed:88,w:5.5,d:6,wallH:2.9,roofType:"yosemune",pitch:30,facadeCols:3,doorSide:-1,engawa:0,woodTone:.45,age:.6},G:{seed:99,w:6,d:5,wallH:3.1,roofType:"kirizuma",pitch:28,facadeCols:3,doorSide:1,engawa:.9,woodTone:.65,age:.3},shed1:{seed:111,w:3,d:2.5,wallH:2.2,roofType:"kirizuma",pitch:24,facadeCols:2,doorSide:0,engawa:0,woodTone:.2,age:.9,winLayout:[0,0]},shed2:{seed:122,w:2.8,d:2.5,wallH:2.1,roofType:"kirizuma",pitch:25,facadeCols:2,doorSide:0,engawa:0,woodTone:.25,age:.85,winLayout:[0,0]}};function Cg(){for(let i=0;i<ji.length;i++)for(let t=i+1;t<ji.length;t++){const e=ji[i],n=ji[t],r=(e.w+n.w)/2+1-Math.abs(e.cx-n.cx),s=(e.d+n.d)/2+1-Math.abs(e.cz-n.cz);r>0&&s>0&&console.error(`[town] OVERLAP ${e.name}×${n.name} by ${r.toFixed(2)}×${s.toFixed(2)}m`)}}function Pg({scene:i,heroGroup:t=null}={}){Cg();const e=on(Ag),n=new Kt;n.name="town";const r=[];for(const l of ji){if(l.kind==="hero"){t&&(t.position.set(l.cx,0,l.cz),n.add(t),r.push({name:"hero",group:t,glowMats:t.userData.glowMats||[],pos:t.position.clone()}));continue}const u={...Rg[l.name],name:l.name},h=vg(u);h.group.position.set(l.cx,0,l.cz),l.kind==="shop"&&(h.group.rotation.y=Math.PI),n.add(h.group),r.push({name:l.name,params:u,group:h.group,glowMats:h.glowMats,pos:h.group.position.clone()})}const s=Lg(),a=new Kt;a.name="ground_zoning";const o=new lt(new _e(70,70),s.soil);o.rotation.x=-Math.PI/2,o.receiveShadow=!0,a.add(o);const c=(l,u,h,d,p,g=.02)=>{const _=new lt(new _e(l,u),p);_.rotation.x=-Math.PI/2,_.position.set(h,g,d),_.receiveShadow=!0,a.add(_)};c(64,3,0,7,s.street),c(2,15,-5.9,-1.7,s.dirt),c(1.1,14.5,-5.9,-1.7,s.stonePath,.03),c(30,2,1,-7.5,s.dirt),c(26,2,-2,17.5,s.dirt),c(10,3.2,0,3.9,s.garden,.015),c(8,3,14,9.8,s.gravel,.015),c(7.5,3,-13,9.8,s.gravel,.015);{const l=new Bt(.5,.18,.3),u=64,h=new Oe(l,s.edging,u*2),d=new oe;let p=0;for(let g=0;g<u;g++)for(const _ of[5.35,8.65])d.position.set(-32+g*1+(e()-.5)*.05,.09,_),d.rotation.y=(e()-.5)*.06,d.updateMatrix(),h.setMatrixAt(p++,d.matrix);h.count=p,h.receiveShadow=!0,a.add(h)}return n.add(a),n.add(Dg(e)),n.add(Ug(e)),n.add(Ig()),n.add(Ng(e)),i&&i.add(n),{group:n,houses:r,lampPositions:[[-4.2,8.9],[6.5,8.9],[15.5,8.9],[-13.5,8.9],[-5,-6.5],[8,-6.5],[-6.4,1.5]],polePositions:[[-2.5,9.3],[8.5,9.3],[19.5,9],[-15.5,9.3],[-15,-6.8]]}}function Lg(){const i=(t,e=.95)=>new xt({color:t,roughness:e});return{soil:i(6050117),street:i(9407101,.9),dirt:i(7824462),stonePath:i(10132116),garden:i(6253386,1),gravel:i(10525320),edging:i(8224120)}}function Dg(i,t){const e=new Kt;e.name="stone_walls";const n=[[-16.5,2.8,-7.5,2.8,1.1],[5,2.8,12.5,2.8,1.1],[-13.5,-8.6,-4.5,-8.6,1],[8,18.2,-2.5,18.2,1],[17.8,11.5,21.5,11.5,1.2]],r=new Bt(.55,.32,.4),s=new xt({color:9145222,roughness:.95}),a=[];for(const[l,u,h,d,p]of n){const g=Math.hypot(h-l,d-u),_=Math.floor(g/.58),m=Math.atan2(h-l,d-u),f=Math.max(2,Math.round(p/.33));for(let S=0;S<_;S++)for(let x=0;x<f;x++){const M=(S+.5)/_;a.push({x:l+(h-l)*M+(i()-.5)*.04,z:u+(d-u)*M,y:.16+x*.32,ry:m+(i()-.5)*.08})}for(let S=0;S<_;S++){const x=(S+.5)/_;a.push({x:l+(h-l)*x,z:u+(d-u)*x,y:.16+f*.32+.06,ry:m,cap:!0})}}const o=new Oe(r,s,a.length),c=new oe;return a.forEach((l,u)=>{c.position.set(l.x,l.y,l.z),c.rotation.set(0,l.ry,0),c.scale.set(l.cap?1.15:1,l.cap?.45:1,l.cap?1.2:1),c.updateMatrix(),o.setMatrixAt(u,c.matrix)}),o.castShadow=!1,o.receiveShadow=!0,e.add(o),e}function Ug(i){const t=new Kt;t.name="fences_gates";const e=new xt({color:5916208,roughness:.85}),n=new xt({color:4141602,roughness:.85}),r={W:[],D:[]},s=(o,c,l,u,h,d,p,g=0)=>{const _=new Bt(c,l,u),m=new ee().makeRotationY(g);m.setPosition(h,d,p),_.applyMatrix4(m),o.push(_)},a=[{x1:-4.6,z1:2.8,x2:4.6,z2:2.8,gate:.5},{x1:-16,z1:.5,x2:-16,z2:5.5,gate:-1},{x1:10.2,z1:11,x2:17.8,z2:11,gate:0}];for(const o of a){const c=Math.hypot(o.x2-o.x1,o.z2-o.z1),l=Math.floor(c/.28),u=Math.atan2(o.x2-o.x1,o.z2-o.z1)+Math.PI/2;for(let h=0;h<=l;h++){const d=h/l,p=o.x1+(o.x2-o.x1)*d,g=o.z1+(o.z2-o.z1)*d;o.gate&&Math.abs(d-.5)<.09||s(r.W,.16,1.1+(i()-.5)*.06,.04,p,.62,g,u)}s(r.D,c,.09,.06,(o.x1+o.x2)/2,1.05,(o.z1+o.z2)/2,u),s(r.D,c,.09,.06,(o.x1+o.x2)/2,.35,(o.z1+o.z2)/2,u),o.gate===.5?s(r.D,1.1,1.05,.06,(o.x1+o.x2)/2+.9,.6,(o.z1+o.z2)/2+.12,u):o.gate===-1&&s(r.D,1,1,.05,o.x1+.4,.58,o.z1+2.6,u+.6)}for(const[o,c]of[["W",e],["D",n]]){if(!r[o].length)continue;const l=new lt(ti(r[o],!1),c);l.castShadow=!0,l.receiveShadow=!0,t.add(l)}return t}function Ig(){const i=new Kt;i.name="drainage";const t=new xt({color:3025960,roughness:.9}),e=new xt({color:1911347,roughness:.15,metalness:.6}),n=new xt({color:8224120,roughness:.95}),r=new lt(new Bt(60,.1,.5),t);r.position.set(0,.015,9.05),r.receiveShadow=!0,i.add(r);const s=new lt(new _e(60,.3),e);s.rotation.x=-Math.PI/2,s.position.set(0,.05,9.05),i.add(s),i.userData.waterMat=e;const a=[];for(let c=-28;c<=28;c+=4){const l=new Bt(1.2,.06,.56);l.translate(c,.09,9.05),a.push(l)}const o=new lt(ti(a,!1),n);o.receiveShadow=!0,i.add(o);for(const c of[-5.9,10.5]){const l=new lt(new Bt(1.6,.1,1.1),new xt({color:7033395,roughness:.8}));l.position.set(c,.12,9.05),l.castShadow=!0,l.receiveShadow=!0,i.add(l)}return i}function Ng(i){const t=new Kt;t.name="stepping_stones";const e=new xt({color:9408393,roughness:.95}),n=[],r=[{x:0,z0:5.4,z1:2.6,n:4},{x:-10.5,z0:5.4,z1:2.4,n:4},{x:9.8,z0:5.4,z1:3,n:3},{x:14,z0:8.6,z1:10.8,n:3},{x:-13,z0:8.6,z1:10.8,n:3}];for(const a of r)for(let o=0;o<a.n;o++){const c=(o+.5)/a.n,l=new se(.32+i()*.1,.36,.09,7);l.translate(a.x+(i()-.5)*.3,.045,a.z0+(a.z1-a.z0)*c),n.push(l)}const s=new lt(ti(n,!1),e);return s.receiveShadow=!0,t.add(s),t}function Ic(i,t,e){const n=on(i),r=document.createElement("canvas");r.width=128,r.height=256;const s=r.getContext("2d");s.fillStyle=t,s.fillRect(0,0,128,256),s.strokeStyle=e,s.lineCap="round";for(let o=0;o<3;o++){const c=34+n()*60,l=50+o*70;for(let u=0;u<4;u++)s.lineWidth=4+n()*7,s.beginPath(),s.moveTo(c-22+n()*10,l+(n()-.5)*30),s.quadraticCurveTo(c,l+(n()-.5)*34,c+22-n()*8,l+(n()-.5)*30),s.stroke();s.lineWidth=5,s.beginPath(),s.moveTo(c,l-26),s.lineTo(c+(n()-.5)*12,l+26),s.stroke()}const a=new ar(r);return a.colorSpace=ge,a}function Og({lampPositions:i=[],polePositions:t=[]}={}){const e=on(4242),n=new Kt;n.name="details";const r=[],s={wood:new xt({color:4864552,roughness:.85}),woodD:new xt({color:3352861,roughness:.9}),iron:new xt({color:2302758,roughness:.5,metalness:.85}),bronze:new xt({color:7035443,roughness:.35,metalness:.9}),paper:new xt({color:15788245,roughness:.9}),stone:new xt({color:9276808,roughness:.95}),leaf:new xt({color:4877109,roughness:1}),indigo:new xt({color:2833502,roughness:.95,side:pe}),cream:new xt({color:14208952,roughness:.95,side:pe})},a={},o=(y,C,v,E,L,I=0,k=0,D=0)=>{const F=new ee().makeRotationFromEuler(new In(k,I,D));F.setPosition(v,E,L),C.applyMatrix4(F),(a[y]||(a[y]=[])).push(C)},c=(y,C,v)=>new Bt(y,C,v),l=(y,C,v,E=8)=>new se(y,C,v,E),u=[];for(const[y,C]of t)o("woodD",l(.11,.14,6.4),y,3.2,C),o("woodD",c(1.4,.1,.1),y,5.9,C),o("woodD",c(1.1,.09,.09),y,5.4,C),u.push(new U(y,5.9,C));const h=[],d=new xt({color:5591108,emissive:16760938,emissiveIntensity:0});i.forEach(([y,C],v)=>{o("iron",l(.06,.09,3.4),y,1.7,C),o("iron",c(.7,.07,.07),y+.3,3.35,C)});const p=[],g=(y,C,v,E)=>{const L=new us(.34,.035,8,20);o("iron",L.clone(),y-.45,.34,C,v),o("iron",L.clone(),y+.45,.34,C,v);const I=(k,D,F,z)=>{const H=Math.hypot(F-k,z-D),V=l(.025,.025,H,6),K=new In(0,v,Math.atan2(z-D,F-k)-Math.PI/2+E);V.applyMatrix4(new ee().makeRotationFromEuler(K)),V.translate((k+F)/2+y,(D+z)/2,C),(a.iron||(a.iron=[])).push(V)};I(-.45,.34,0,.75),I(.45,.34,0,.75),I(0,.75,-.15,.95),I(-.45,.34,.45,.34),o("woodD",c(.28,.05,.22),y-.05,.78,C,v),o("iron",l(.02,.02,.4,6),y+.45,.95,C,0,0,Math.PI/2)};g(11.2,10.6,.2,.12),g(-10.8,10.7,-.15,-.1),g(-4.9,3.4,1.45,.14);const _=(y,C,v,E,L)=>{const I=Ic(L,"#2b3c5e","#e8e0cc"),k=new lt(new Bt(.9,1.8,.08),new xt({map:I,roughness:.85}));k.position.set(y,C,v),k.rotation.y=E,k.castShadow=!0,n.add(k)};_(10.6,2.6,10.9,.3,7),_(-10.2,2.5,10.9,-.25,21);for(const[y,C,v]of[[-7.2,2.9,5],[6.9,2.9,9],[5.4,-9.4,13]]){const E=Ic(v,"#4a3a28","#efe6d0"),L=new lt(new Bt(.34,.7,.05),new xt({map:E,roughness:.85}));L.position.set(y,2,C),n.add(L)}{const y=new lt(c(1,1.9,.7),new xt({color:12071722,roughness:.4,metalness:.3}));y.position.set(17.9,.95,10.6),y.castShadow=!0,n.add(y);const C=new xt({color:1118481,emissive:12576511,emissiveIntensity:1.2}),v=new lt(new _e(.8,1.2),C);v.position.set(17.9,1,10.24),v.rotation.y=Math.PI,n.add(v),n.userData.vendGlow=C}const m=(y,C,v=.45,E=0)=>o("wood",c(v,v,v),y,v/2,C,E);m(12.6,10.7,.5,.2),m(12.6,10.7+0,.42,.5),a.wood[a.wood.length-1].translate(0,.46,0),m(-14.8,10.6,.45,-.3),m(5.2,3.6,.4,.7);for(const[y,C]of[[1.8,3.2],[-2.2,3.3],[11.9,10.5]])o("woodD",l(.16,.13,.3),y,.15,C);const f=(y,C,v)=>{o("wood",c(1.6,.08,.4),y,.45,C,v),o("woodD",c(.08,.45,.36),y-.6,.22,C,v),o("woodD",c(.08,.45,.36),y+.6,.22,C,v)};f(.5,4.4,.1),f(-9.5,3.2,-.1);const S=[];for(let y=0;y<=6;y++)S.push(new ot(.14+y/6*.1,y/6*.28));const x=new cr(S,10);for(const[y,C]of[[-3.4,3.1],[3.2,3],[10.9,10.8],[-11.5,10.6],[2.2,4.3]])o("stone",x.clone(),y,0,C),o("leaf",new xn(.2,7,6),y,.42,C);o("woodD",l(.2,.17,.5),-1.8,.25,3.5);for(let y=0;y<3;y++)o("cream",l(.015,.09,.9,6),-1.85+y*.06,.7,3.5+(y-1)*.05);for(const y of[-10,2,12])o("iron",c(.8,.04,.5),y,.1,9.05);const M=y=>s[{WOOD:"wood",wood:"wood",woodD:"woodD",iron:"iron",stone:"stone",leaf:"leaf",cream:"cream"}[y]||"wood"];for(const y of Object.keys(a)){const C=new lt(ti(a[y],!1),M(y));C.castShadow=y!=="leaf",C.receiveShadow=!0,n.add(C)}i.forEach(([y,C],v)=>{const E=new lt(new xn(.13,10,8),v<3?d:d.clone());if(E.position.set(y+.6,3.25,C),n.add(E),h.push(E.material),v<3){const L=new Al(16760430,0,12,2);L.position.set(y+.6,3.2,C),n.add(L),p.push(L)}}),n.userData.lampGlows=h,n.userData.lampLights=p;const T=(y,C,v,E,L,I,k=0)=>{const D=new _e(E,L,1,4);D.translate(0,-L/2,0);const F=new lt(D,s[I]);F.position.set(y,C,v),F.rotation.y=k,F.castShadow=!0,n.add(F),r.push({mesh:F,phase:e()*6.28,amp:.08+e()*.06})};for(let y=0;y<3;y++)T(12.4+y*.55,2.5,10.95,.45,.8,"indigo");for(let y=0;y<2;y++)T(-14.2+y*.55,2.4,10.95,.45,.7,"cream");T(1.5,2.2,2.62,.4,.6,"cream");const b=new Fi({color:1118484});for(let y=0;y<u.length-1;y++){const C=u[y],v=u[y+1];if(C.distanceTo(v)>16)continue;const E=C.clone().lerp(v,.5);E.y-=.7;for(const L of[0,-.22]){const I=new Lo(C.clone().add(new U(0,L,0)),E.clone().add(new U(0,L,0)),v.clone().add(new U(0,L,0))),k=new lt(new No(I,20,.015,5),b);n.add(k)}}for(const[y,C]of[[-4.9,2.9],[4.9,2.9],[10.4,10.9],[-9.9,10.9]]){const v=new lt(l(.05,.07,.7,7),s.woodD);v.position.set(y,.55,C),v.castShadow=!0,n.add(v);for(let L=0;L<3;L++){const I=new lt(new xn(.32-L*.06,8,6),s.leaf);I.position.set(y+(e()-.5)*.2,1+L*.28,C+(e()-.5)*.2),I.scale.y=.75,I.castShadow=!0,n.add(I)}const E=new lt(x.clone(),s.stone);E.position.set(y,0,C),n.add(E)}return{group:n,cloth:r,lampGlows:h,lampLights:p}}function Fg(i,t,e={strength:.5}){if(!i?.cloth)return;const n=.4+(e.strength??.5);for(const r of i.cloth)r.mesh.rotation.x=Math.sin(t*2.1+r.phase)*r.amp*n}const eo=["DAWN","DAY","GOLDEN","SUNSET","NIGHT"],Nc={DAWN:{sunC:16757370,sunI:1.6,el:12,az:95,sky:[10336470,15910043],fog:13620438,hemi:.5,exp:1},DAY:{sunC:16774112,sunI:2.6,el:62,az:150,sky:[7317724,13624303],fog:13621468,hemi:.7,exp:1},GOLDEN:{sunC:16761963,sunI:2,el:18,az:235,sky:[8363204,16767392],fog:14207412,hemi:.55,exp:1.05},SUNSET:{sunC:16744013,sunI:1.4,el:6,az:262,sky:[5926824,16752228],fog:13216143,hemi:.45,exp:1.05},NIGHT:{sunC:9414872,sunI:.22,el:28,az:300,sky:[395798,1055795],fog:725536,hemi:.18,exp:.95}};function zg({renderer:i,scene:t,sun:e,hemi:n,skyMat:r=null,houses:s=[],lampGlows:a=[],lampLights:o=[],vendGlow:c=null,stars:l=null,moon:u=null}={}){let h="DAY",d="DAY",p=1,g=!1,_=0;const m=new It,f=new It,S=new It,x=new It,M=b("DAY"),T=b("DAY");function b(C){const v=Nc[C];return{...v,sky:[...v.sky]}}function y(C,v,E){const L=M,I=T,k=m.set(L.sunC).lerp(new It(I.sunC),v);if(e){const z=1-(E?.dimK??0);e.color.copy(k),e.intensity=Ce.lerp(L.sunI,I.sunI,v)*z;const H=Ce.degToRad(Ce.lerp(L.el,I.el,v)),V=Ce.degToRad(Ce.lerp(L.az,I.az,v));e.position.set(Math.cos(H)*Math.cos(V),Math.sin(H),Math.cos(H)*Math.sin(V)).multiplyScalar(60)}if(f.set(L.sky[0]).lerp(new It(I.sky[0]),v),S.set(L.sky[1]).lerp(new It(I.sky[1]),v),r?.uniforms?(r.uniforms.topColor?.value.copy(f),r.uniforms.bottomColor?.value.copy(S),r.uniforms.top&&r.uniforms.top.value.copy(f),r.uniforms.mid&&r.uniforms.mid.value.copy(S),r.uniforms.bot&&r.uniforms.bot.value.copy(S).multiplyScalar(.82)):t?.background?.isColor&&t.background.copy(S),x.set(L.fog).lerp(new It(I.fog),v),t?.fog){t.fog.color.copy(x);const z=E?.mistK??0,H=E?.rainK??0;t.fog.near=Ce.lerp(30,8,z)-H*6,t.fog.far=Ce.lerp(140,45,z)-H*25}n&&(n.intensity=Ce.lerp(L.hemi,I.hemi,v)),i&&(i.toneMappingExposure=Ce.lerp(L.exp,I.exp,v));const D=C==="NIGHT"?v:h==="NIGHT"?1-v:0,F=D;for(const z of s)for(const H of z.glowMats||[])H.emissiveIntensity=F*(z.name==="hero"?1.6:.9);for(const z of a)z.emissiveIntensity=D*2.2;for(const z of o)z.intensity=D*14;c&&(c.emissiveIntensity=.4+D*1.6),l&&(l.material.opacity=D*.9),u&&(u.material.opacity=D)}return{get state(){return p>=1?d:`${h}>${d}`},get auto(){return g},set(C){Nc[C]&&C!==d&&(Object.assign(M,b((p>=1,d))),h=p>=1?d:h,Object.assign(T,b(C)),d=C,p=0)},cycle(){this.set(eo[(eo.indexOf(d)+1)%eo.length])},toggleAuto(){return g=!g,g},update(C,v){g&&(_+=C,_>14&&(_=0,this.cycle())),p=Math.min(1,p+C/2.5);const E=p*p*(3-2*p);y(d,E,v)}}}function Bg(i){const t=new Kt;t.name="night_sky";const e=400,n=new Float32Array(e*3);for(let l=0;l<e;l++){const u=Math.random()*Math.PI*2,h=Math.random()*Math.PI*.45+.08,d=120;n[l*3]=Math.cos(u)*Math.cos(h)*d,n[l*3+1]=Math.sin(h)*d,n[l*3+2]=Math.sin(u)*Math.cos(h)*d}const r=new he;r.setAttribute("position",new ve(n,3));const s=new Ro(r,new as({color:13623551,size:.7,transparent:!0,opacity:0,depthWrite:!1}));s.frustumCulled=!1,t.add(s);const a=new lt(new Bi(3,24),new Fi({color:15265791,transparent:!0,opacity:0,fog:!1}));a.position.set(-60,42,-80),a.lookAt(0,0,0),t.add(a);const o=new go(10336488,0);o.position.copy(a.position),t.add(o),t.userData.setMoon=l=>{o.intensity=l*.35};const c=t.userData.setMoon;return i.add(t),{stars:s,moon:a,moonLight:o,setMoon:c}}const Ei=[{n:"01 establishing wide",pos:[24,14,30],tgt:[0,2,2],fov:45,rail:[3,.5,0]},{n:"02 hero three-quarter",pos:[9,4.2,11],tgt:[0,2.2,0],fov:40,rail:[1.2,0,.8]},{n:"03 street-level human",pos:[-6,1.6,7.2],tgt:[4,2.2,2],fov:50,rail:[1.5,0,0]},{n:"04 alley compression",pos:[-5.9,1.7,4.5],tgt:[-5.9,2,-9],fov:35,rail:[0,.15,-1.2]},{n:"05 garden low",pos:[3.5,.9,4.8],tgt:[-1,1.2,-1],fov:50,rail:[.8,.1,0]},{n:"06 interior-out",pos:[0,1.6,1.5],tgt:[0,1.5,9],fov:55,rail:[.5,0,0]},{n:"07 doorway framing",pos:[2.8,1.6,4.2],tgt:[-1.5,1.4,-2],fov:45,rail:[0,.1,.5]},{n:"08 rooftop vista",pos:[-14,9,-12],tgt:[5,2,8],fov:42,rail:[1.5,0,1]},{n:"09 golden long-lens",pos:[-22,3.2,18],tgt:[6,2.5,-2],fov:30,rail:[1,.2,-.6]},{n:"10 night moody",pos:[8,2.2,12.5],tgt:[-2,2,0],fov:40,rail:[1,0,.4]}];function Gg(i,t){let e=1,n="orbit",r=0,s=!1,a=null;const o=l=>new U(...l);function c(l,u=2.5){e=(l%Ei.length+Ei.length)%Ei.length;const h=Ei[e];a={p0:i.position.clone(),p1:o(h.pos),t0:t.target.clone(),t1:o(h.tgt),f0:i.fov,f1:h.fov,k:0,dur:u}}return{get idx(){return e},get mode(){return n},get label(){return n==="cine"?Ei[e].n:"orbit"},setMode(l){n=l,t.enabled=l==="orbit",l==="cine"&&c(e)},goTo:c,next(){c(e+1)},prev(){c(e-1)},toggleAdvance(){return s=!s,s},update(l){if(r+=l,a){a.k=Math.min(1,a.k+l/a.dur);const u=a.k<.5?4*a.k**3:1-(-2*a.k+2)**3/2;i.position.lerpVectors(a.p0,a.p1,u),t.target.lerpVectors(a.t0,a.t1,u),i.fov=Ce.lerp(a.f0,a.f1,u),i.updateProjectionMatrix(),a.k>=1&&(a=null)}else if(n==="cine"){const u=Ei[e],h=Math.sin(r*.12)*.5+.5;i.position.set(u.pos[0]+u.rail[0]*h,u.pos[1]+u.rail[1]*h,u.pos[2]+u.rail[2]*h),i.lookAt(t.target),s&&Math.sin(r*.12)>.999&&this.next()}}}}function Hg({daytime:i,weather:t,cine:e,hudEl:n}){const r=document.createElement("div");r.id="district-ui",r.innerHTML=`
  <style>
    #district-ui{position:fixed;left:10px;bottom:10px;z-index:20;font-family:Georgia,serif;
      background:rgba(16,14,12,.72);color:#e9e2d2;border:1px solid rgba(233,226,210,.25);
      border-radius:8px;padding:8px 10px;font-size:12px;max-width:230px;backdrop-filter:blur(4px)}
    #district-ui button{background:rgba(233,226,210,.1);color:#e9e2d2;border:1px solid rgba(233,226,210,.3);
      border-radius:5px;font-family:inherit;font-size:11px;padding:2px 7px;margin:1px;cursor:pointer}
    #district-ui button.on{background:#c9a86a;color:#191512;border-color:#c9a86a}
    #district-ui .row{margin:3px 0} #district-ui .hd{opacity:.75;letter-spacing:.08em;font-size:10px}
    #district-ui.min .bd{display:none}
  </style>
  <div class="hd">町 DISTRICT — <span id="du-state">DAY · clear · orbit</span> <button id="du-min">–</button></div>
  <div class="bd">
    <div class="row" id="du-time"></div>
    <div class="row" id="du-wx"></div>
    <div class="row" id="du-shots"></div>
    <div class="row"><button id="du-mode">cine</button><button id="du-adv">auto-advance: off</button><button id="du-auto">day-cycle: off</button></div>
  </div>`,document.body.appendChild(r);const s=(h,d,p)=>{const g=document.createElement("button");return g.textContent=d,g.onclick=()=>p(g),h.appendChild(g),g},a=r.querySelector("#du-time"),o=r.querySelector("#du-wx"),c=r.querySelector("#du-shots"),l=r.querySelector("#du-state"),u=()=>{l.textContent=`${i.state} · ${t.state} · ${e.label}`;const h=window.__perf?.();n&&(n.innerHTML=h?`${h.calls} calls · ${h.triangles.toLocaleString("en-US")} tris · ${h.fps}fps<br>${i.state} · ${t.state} · ${e.label}`:`${i.state} · ${t.state} · ${e.label}`)};["DAWN","DAY","GOLDEN","SUNSET","NIGHT"].forEach(h=>s(a,h,d=>{i.set(h),u()})),["clear","windy","rainy","misty"].forEach(h=>s(o,h,()=>{t.setState(h),u()}));for(let h=0;h<10;h++)s(c,String(h+1).padStart(2,"0"),()=>{e.setMode("cine"),e.goTo(h),u()});return r.querySelector("#du-min").onclick=()=>r.classList.toggle("min"),r.querySelector("#du-mode").onclick=h=>{const d=e.mode==="cine"?"orbit":"cine";e.setMode(d),h.target.textContent=d==="cine"?"orbit":"cine",u()},r.querySelector("#du-adv").onclick=h=>{const d=e.toggleAdvance();h.target.textContent=`auto-advance: ${d?"on":"off"}`,h.target.classList.toggle("on",d)},r.querySelector("#du-auto").onclick=h=>{const d=i.toggleAuto();h.target.textContent=`day-cycle: ${d?"on":"off"}`,h.target.classList.toggle("on",d)},setInterval(u,500),{refresh:u}}function Nl(i){let t=0,e=0;i.forEach(u=>{t+=u.attributes.position.count,e+=u.index.count});const n=new Float32Array(t*3),r=new Float32Array(t*3),s=new Float32Array(t*2),a=new Uint16Array(e);let o=0,c=0;i.forEach(u=>{const h=u.attributes.position,d=u.attributes.normal,p=u.attributes.uv;n.set(h.array,o*3),r.set(d.array,o*3),s.set(p.array,o*2);const g=u.index.array;for(let _=0;_<g.length;_++)a[c+_]=g[_]+o;o+=h.count,c+=g.length});const l=new he;return l.setAttribute("position",new ve(n,3)),l.setAttribute("normal",new ve(r,3)),l.setAttribute("uv",new ve(s,2)),l.setIndex(new ve(a,1)),l}function kg(i,t,e){const n=new Kt,r=Fn(808),s=[],a=[],o=9;for(let u=0;u<o;u++){const h=t+(r()-.5)*1.6,d=e+(r()-.5)*1.6,p=3.4+r()*1.8,g=.03+r()*.07,_=r()*Math.PI*2,m=new Kt,f=.5,S=.055;let x=0;for(;x<p;){const M=Math.min(f,p-x),T=new lt(new se(S*.92,S,M,8),i.bamboo);T.position.y=x+M/2,T.castShadow=!0,m.add(T);const b=new lt(new se(S*1.18,S*1.18,.035,8),i.bamboo);if(b.position.y=x+M,m.add(b),x>p*.35){const y=3+Math.floor(r()*3);for(let C=0;C<y;C++)a.push({x:h,y:x+M,z:d,top:x/p,seed:r()*10})}x+=M}m.position.set(h,0,d),m.rotation.set(Math.cos(_)*g,0,Math.sin(_)*g),m.userData.phase=r()*6.28,s.push(m),n.add(m)}{const u=new _e(.14,.62,1,2),h=u.attributes.position;for(let _=0;_<h.count;_++){const f=(h.getY(_)+.31)/.62;h.setX(_,h.getX(_)*(1-f*.85)),h.setZ(_,-Math.sin(f*Math.PI)*.06)}u.computeVertexNormals();const d=5,p=new Oe(u,i.bambooLeaf,a.length*d),g=[];a.forEach(_=>{for(let m=0;m<d;m++){const f=m/d*Math.PI*2+_.seed;g.push({p:[_.x+Math.cos(f)*.25,_.y+.05,_.z+Math.sin(f)*.25],rx:.9+r()*.5,ry:f,rz:.2,s:.8+r()*.5})}}),_n(p,g),p.castShadow=!1,n.add(p)}const c=hs(3.2,3.2,.5);c.position.set(t,.025,e),n.add(c);function l(u){s.forEach(h=>{h.rotation.x+=Math.sin(u*.9+h.userData.phase)*6e-4,h.rotation.z+=Math.cos(u*.7+h.userData.phase)*6e-4})}return{group:n,update:l}}function Vg(i,t,e){const n=new Kt,r=Fn(1555),s=[],a=new U(0,1,0);function o(m,f,S,x,M){const T=new se(x*.62,x,S,7),b=new lt(T,i.trunk),y=m.clone().addScaledVector(f,S/2);b.position.copy(y),b.quaternion.setFromUnitVectors(a,f.clone().normalize()),b.castShadow=b.receiveShadow=!0,n.add(b);const C=m.clone().addScaledVector(f,S);if(M<=0||S<.35){s.push(C);return}s.push(C.clone().lerp(m,.4));const v=M>=3?3:2+(r()<.5?1:0);for(let E=0;E<v;E++){const L=f.clone();L.x+=(r()-.5)*1.1,L.z+=(r()-.5)*1.1,L.y+=r()*.45-.08,L.normalize(),o(C,L,S*(.55+r()*.15),x*.58,M-1)}}o(new U(0,0,0),new U(.08,1,.05),1.5,.22,4);function c(m){const f=new lr,S=7;for(let M=0;M<=20;M++){const T=M/20*Math.PI*2,b=Math.pow(Math.abs(Math.sin(T*S/2)),.7),y=m*(.35+.65*b),C=Math.cos(T)*y,v=Math.sin(T)*y;M===0?f.moveTo(C,v):f.lineTo(C,v)}return new ls(f)}const l=Nl([c(.17),c(.17).rotateY(Math.PI/2)]),u=340,h=new Oe(l,i.mapleLeaf,u),d=[],p=new It;for(let m=0;m<u;m++){const f=s[Math.floor(r()*s.length)],S=f.x+(r()-.5)*1.1,x=f.y+(r()-.5)*.9,M=f.z+(r()-.5)*1.1;d.push({p:[S,x,M],rx:r()*6.3,ry:r()*6.3,rz:r()*6.3,s:.75+r()*.7});const T=Ce.clamp((x-1.2)/2.2,0,1),b=r();b<T*.75?p.setHex(12728868):b<T*.75+.22?p.setHex(14711592):p.setHex(7178812),p.offsetHSL((r()-.5)*.03,0,(r()-.5)*.06),h.setColorAt(m,p)}_n(h,d),h.instanceColor.needsUpdate=!0,h.castShadow=!1,h.receiveShadow=!1,n.add(h),n.position.set(t,0,e);const g=hs(3.4,3.4,.5);g.position.y=.025,n.add(g);function _(m){n.rotation.z=Math.sin(m*.6)*.004,n.rotation.x=Math.cos(m*.45)*.003}return{group:n,update:_}}function Wg(i,t=1,e=1,n=.6,r=0,s=0){const a=on(t*1e3+7),o=Vg(i,0,0),c=o.group||o;c.scale.setScalar(e*(.9+a()*.25));const l=new It(4880949).lerp(new It(12729374),n);return c.traverse(u=>{u.isMesh&&u.material?.color&&u.geometry?.type!=="CylinderGeometry"&&(u.material=u.material.clone(),u.material.color.copy(l).offsetHSL((a()-.5)*.03,0,(a()-.5)*.06))}),c.rotation.y=a()*6.28,c.position.set(r,0,s),c.userData.tick=o.update||null,c.userData.sway={amp:.02+a()*.02,freq:.8+a()*.6,ph:a()*6.28},c}function Xg(i,t=1,e=0,n=0){const r=on(t*500+3),s=kg(i,0,0),a=s.group||s;return a.rotation.y=r()*6.28,a.scale.setScalar(.85+r()*.4),a.position.set(e,0,n),a.userData.tick=s.update||null,a.userData.sway={amp:.015+r()*.02,freq:1.1+r()*.7,ph:r()*6.28},a}function Yg(i=1,t=.5){const e=on(i*77+1),n=new Qn(t,2),r=n.attributes.position;for(let a=0;a<r.count;a++){const o=1+(e()-.5)*.35;r.setXYZ(a,r.getX(a)*o,r.getY(a)*o*.72,r.getZ(a)*o)}n.computeVertexNormals();const s=new lt(n,new xt({color:new It(3759148).offsetHSL(0,0,(e()-.5)*.05),roughness:1}));return s.castShadow=!0,s.userData.sway={amp:.008,freq:1.4,ph:e()*6.28},s}function qg(i=1,t=60,e=[6,3]){const n=on(i*31+5),r=new _e(.5,.35);r.translate(0,.17,0);const s=jg([r,r.clone().rotateY(Math.PI/2)]),a=new xt({color:6058040,roughness:1,side:pe,alphaTest:.4}),o=new Oe(s,a,t),c=new oe;for(let l=0;l<t;l++)c.position.set((n()-.5)*e[0],0,(n()-.5)*e[1]),c.rotation.y=n()*3.14,c.scale.setScalar(.7+n()*.7),c.updateMatrix(),o.setMatrixAt(l,c.matrix);return o.castShadow=!1,o.receiveShadow=!0,o}function jg(i){return Nl(i)}function no(i=1,t=2.2,e=2,n=40){const r=on(i*13+9),s=new _e(.12,.12),a=new xt({color:4154928,roughness:1,side:pe}),o=new Oe(s,a,n),c=new oe;for(let u=0;u<n;u++)c.position.set((r()-.5)*t,r()*e,.02+r()*.06),c.rotation.set(r()*3,r()*3,r()*3),c.updateMatrix(),o.setMatrixAt(u,c.matrix);o.castShadow=!1;const l=new Kt;return l.add(o),l}function Zg(i,t=1.6,e=1){const n=new lt(new Bi(.5,10),new xt({color:4480046,roughness:1}));return n.rotation.x=-Math.PI/2,n.scale.set(t,e,1),n.receiveShadow=!0,n}function Kg(i,t,e){const n=e?.gust?e.gust(t):.5;for(const r of i){const s=r.userData.sway;s&&(r.rotation.x=Math.sin(t*s.freq+s.ph)*s.amp*(.5+n),r.rotation.z=Math.cos(t*s.freq*.8+s.ph)*s.amp*(.5+n))}}const ze=new xl({antialias:!0,powerPreference:"high-performance"});ze.setPixelRatio(Math.min(window.devicePixelRatio||1,2));ze.setSize(window.innerWidth,window.innerHeight);ze.shadowMap.enabled=!0;ze.shadowMap.type=Bc;ze.toneMapping=Hc;ze.toneMappingExposure=1.06;document.getElementById("app").appendChild(ze.domElement);const be=new f0,Mn=Rl();pg(Mn);const{sun:Jg,hemi:$g,skyMat:Qg}=fg(be,ze),ds=new Kt;ds.name="hero_machiya";const zo=cg(Mn),t_=lg(Mn),Wr=ug(Mn);ds.add(zo.group,t_.group,Wr.group);Mg(ds,{nageshiY:2.2,eaveY:3.7,doorX:zo.openBayX});const Ol=Pg({scene:be,heroGroup:ds}),tr=Og(Ol);be.add(tr.group);const fs=dg(Mn);fs.group.position.set(-13.5,0,7);be.add(fs.group);const Fl=[],zl=[],Bo=i=>(i?.userData?.sway&&Fl.push(i),i?.userData?.tick&&zl.push(i.userData.tick),i);[[-4.2,4.6,1.3,.75],[6.8,4.4,1,.55],[-8.2,-6.2,1.5,.9],[13.5,-8.5,1.1,.4],[-16,3.5,.9,.65]].forEach(([i,t,e,n],r)=>{const s=Wg(Mn,r+1,e,n,i,t);s.position.set(i,0,t),be.add(s),Bo(s)});[[0,-5.5],[-7.6,4.6],[7.5,-8.5]].forEach(([i,t],e)=>{const n=Xg(Mn,10+e,i,t);be.add(n),Bo(n)});[[-3.6,3.4,.55],[3.6,3.4,.5],[11,10.6,.6],[-11,10.6,.55],[-2,-8.6,.5]].forEach(([i,t,e],n)=>{const r=Yg(20+n,e);r.position.set(i,.25,t),be.add(r),Bo(r)});for(const[i,t,e,n,r]of[[0,4,8,2.5,31],[-6,13,7,4,32],[2,-7.5,20,1.5,33]]){const s=qg(r,60,[e,n]);s.position.set(i,.04,t),be.add(s)}{const i=no(41,2.4,2);i.rotation.y=-Math.PI/2,i.position.set(-5.08,.9,-1),be.add(i);const t=no(42,3,1.8);t.position.set(-9,.7,-8.92),be.add(t);const e=no(43,2.4,1.8);e.rotation.y=Math.PI/2,e.position.set(-9.68,.7,13.5),be.add(e)}for(const[i,t,e,n,r]of[[-5.4,2.4,1.6,1,51],[5.4,2.4,1.6,1,52],[-4.2,8.9,1.2,.8,53],[0,4.2,2.2,1.4,54]]){const s=Zg(r,e,n);s.position.set(i,.055,t),s.rotation.y=r,be.add(s)}const Bl=wg(Mn);be.add(Bl.group);const es=yg({scene:be,pondWaterMats:[fs.waterMat],wetMats:Mn._wet||[]}),xo=Bg(be),ns=zg({renderer:ze,scene:be,sun:Jg,hemi:$g,skyMat:Qg,houses:Ol.houses,lampGlows:tr.lampGlows,lampLights:tr.lampLights,vendGlow:tr.group.userData.vendGlow,stars:xo.stars,moon:xo.moon}),{camera:Gl,controls:Hl}=Tg(ze),is=Gg(Gl,Hl),e_=document.getElementById("hud");let io=0,vo=60;function kl(){const i=ze.info;e_.innerHTML=`draw calls&nbsp; ${i.render.calls}<br>triangles&nbsp;&nbsp; ${i.render.triangles.toLocaleString("en-US")}<br>geometries&nbsp; ${i.memory.geometries}`}window.__perf=()=>({calls:ze.info.render.calls,triangles:ze.info.render.triangles,geometries:ze.info.memory.geometries,fps:Math.round(vo),errors:window.__errors||[]});window.__errors=[];window.addEventListener("error",i=>window.__errors.push(String(i.message)));Hg({daytime:ns,weather:es,cine:is,hudEl:document.getElementById("hud")});{const i=new URLSearchParams(location.search),t=i.get("time"),e=i.get("wx"),n=i.get("shot");t&&ns.set(t.toUpperCase()),e&&es.setState(e.toLowerCase()),n!==null&&(is.setMode("cine"),is.goTo(Number(n)||0))}const Oc=new K0;let Fc=!0;function Vl(){requestAnimationFrame(Vl);const i=Math.min(Oc.getDelta(),.05),t=Oc.elapsedTime;i>0&&(vo+=(1/Math.max(i,.001)-vo)*.05),fs.update(t),Bl.update(t,i);for(const e of zl)e(t);if(zo.noren.children.forEach((e,n)=>{e.rotation.x=Math.sin(t*1.3+n*.9)*.06*(.5+mn.gust(t))}),Wr.lantern.rotation.x=Math.sin(t*.8)*.03,Wr.lantern.rotation.z=Math.cos(t*.6)*.03,Wr.lanternLight.intensity=5+Math.sin(t*7.3)*.25+Math.sin(t*13.1)*.15,es.update(i,t),ns.update(i,es),xo.setMoon(ns.state==="NIGHT"?1:0),is.update(i),Fg(tr,t,mn),Kg(Fl,t,mn),Hl.update(),ze.render(be,Gl),Fc){Fc=!1;const e=document.getElementById("loader");e.style.opacity="0",setTimeout(()=>e.remove(),700)}io+=i,io>.5&&(io=0,kl())}kl();Vl();
