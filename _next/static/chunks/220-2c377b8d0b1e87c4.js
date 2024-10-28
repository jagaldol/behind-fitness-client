"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[220],{81749:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return v}});let r=n(86921),i=n(91884),o=n(57437),s=i._(n(2265)),u=r._(n(54887)),a=r._(n(42251)),l=n(38630),d=n(76906),c=n(60337);n(76184);let f=n(46993),p=r._(n(10536)),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e,t,n,r,i,o){let s=null==e?void 0:e.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function g(e){let[t,n]=s.version.split(".",2),r=parseInt(t,10),i=parseInt(n,10);return r>18||18===r&&i>=3?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let b=(0,s.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:i,height:u,width:a,decoding:l,className:d,style:c,fetchPriority:f,placeholder:p,loading:h,unoptimized:b,fill:y,onLoadRef:v,onLoadingCompleteRef:_,setBlurComplete:w,setShowAltText:S,onLoad:C,onError:O,...x}=e;return(0,o.jsx)("img",{...x,...g(f),loading:h,width:a,height:u,decoding:l,"data-nimg":y?"fill":"1",className:d,style:c,sizes:i,srcSet:r,src:n,ref:(0,s.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(O&&(e.src=e.src),e.complete&&m(e,p,v,_,w,b))},[n,p,v,_,w,O,b,t]),onLoad:e=>{m(e.currentTarget,p,v,_,w,b)},onError:e=>{S(!0),"empty"!==p&&w(!0),O&&O(e)}})});function y(e){let{isAppRouter:t,imgAttributes:n}=e,r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...g(n.fetchPriority)};return t&&u.default.preload?(u.default.preload(n.src,r),null):(0,o.jsx)(a.default,{children:(0,o.jsx)("link",{rel:"preload",href:n.srcSet?void 0:n.src,...r},"__nimg-"+n.src+n.srcSet+n.sizes)})}let v=(0,s.forwardRef)((e,t)=>{let n=(0,s.useContext)(f.RouterContext),r=(0,s.useContext)(c.ImageConfigContext),i=(0,s.useMemo)(()=>{let e=h||r||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:u,onLoadingComplete:a}=e,m=(0,s.useRef)(u);(0,s.useEffect)(()=>{m.current=u},[u]);let g=(0,s.useRef)(a);(0,s.useEffect)(()=>{g.current=a},[a]);let[v,_]=(0,s.useState)(!1),[w,S]=(0,s.useState)(!1),{props:C,meta:O}=(0,l.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:v,showAltText:w});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(b,{...C,unoptimized:O.unoptimized,placeholder:O.placeholder,fill:O.fill,onLoadRef:m,onLoadingCompleteRef:g,setBlurComplete:_,setShowAltText:S,ref:t}),O.priority?(0,o.jsx)(y,{isAppRouter:!n,imgAttributes:C}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2595:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});let r=n(86921)._(n(2265)).default.createContext({})},43044:function(e,t){function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},38630:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return u}}),n(76184);let r=n(67160),i=n(76906);function o(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function u(e,t){var n;let u,a,l,{src:d,sizes:c,unoptimized:f=!1,priority:p=!1,loading:h,className:m,quality:g,width:b,height:y,fill:v=!1,style:_,onLoad:w,onLoadingComplete:S,placeholder:C="empty",blurDataURL:O,fetchPriority:x,layout:j,objectFit:M,objectPosition:P,lazyBoundary:E,lazyRoot:R,...z}=e,{imgConf:I,showAltText:k,blurComplete:A,defaultLoader:D}=t,L=I||i.imageConfigDefault;if("allSizes"in L)u=L;else{let e=[...L.deviceSizes,...L.imageSizes].sort((e,t)=>e-t),t=L.deviceSizes.sort((e,t)=>e-t);u={...L,allSizes:e,deviceSizes:t}}let U=z.loader||D;delete z.loader,delete z.srcSet;let N="__next_img_default"in U;if(N){if("custom"===u.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=U;U=t=>{let{config:n,...r}=t;return e(r)}}if(j){"fill"===j&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[j];e&&(_={..._,...e});let t={responsive:"100vw",fill:"100vw"}[j];t&&!c&&(c=t)}let T="",B=s(b),F=s(y);if("object"==typeof(n=d)&&(o(n)||void 0!==n.src)){let e=o(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,l=e.blurHeight,O=O||e.blurDataURL,T=e.src,!v){if(B||F){if(B&&!F){let t=B/e.width;F=Math.round(e.height*t)}else if(!B&&F){let t=F/e.height;B=Math.round(e.width*t)}}else B=e.width,F=e.height}}let G=!p&&("lazy"===h||void 0===h);(!(d="string"==typeof d?d:T)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,G=!1),u.unoptimized&&(f=!0),N&&d.endsWith(".svg")&&!u.dangerouslyAllowSVG&&(f=!0),p&&(x="high");let V=s(g),W=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:P}:{},k?{}:{color:"transparent"},_),H=A||"empty"===C?null:"blur"===C?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:B,heightInt:F,blurWidth:a,blurHeight:l,blurDataURL:O||"",objectFit:W.objectFit})+'")':'url("'+C+'")',K=H?{backgroundSize:W.objectFit||"cover",backgroundPosition:W.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:H}:{},Y=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:o,sizes:s,loader:u}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:a,kind:l}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,s),d=a.length-1;return{sizes:s||"w"!==l?s:"100vw",srcSet:a.map((e,r)=>u({config:t,src:n,quality:o,width:e})+" "+("w"===l?e:r+1)+l).join(", "),src:u({config:t,src:n,quality:o,width:a[d]})}}({config:u,src:d,unoptimized:f,width:B,quality:V,sizes:c,loader:U});return{props:{...z,loading:G?"lazy":h,fetchPriority:x,width:B,height:F,decoding:"async",className:m,style:{...W,...K},sizes:Y.sizes,srcSet:Y.srcSet,src:Y.src},meta:{unoptimized:f,priority:p,placeholder:C,fill:v}}}},42251:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return c},default:function(){return m}});let r=n(86921),i=n(91884),o=n(57437),s=i._(n(2265)),u=r._(n(27392)),a=n(2595),l=n(27484),d=n(43044);function c(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(76184);let p=["name","httpEquiv","charSet","itemProp"];function h(e,t){let{inAmpMode:n}=t;return e.reduce(f,[]).reverse().concat(c(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return i=>{let o=!0,s=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){s=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?o=!1:n.add(t);else{let e=i.props[t],n=r[t]||new Set;("name"!==t||!s)&&n.has(e)?o=!1:(n.add(e),r[t]=n)}}}}return o}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,s.default.cloneElement(e,t)}return s.default.cloneElement(e,{key:r})})}let m=function(e){let{children:t}=e,n=(0,s.useContext)(a.AmpStateContext),r=(0,s.useContext)(l.HeadManagerContext);return(0,o.jsx)(u.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,d.isInAmpMode)(n),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},67160:function(e,t){function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:o,objectFit:s}=e,u=r?40*r:t,a=i?40*i:n,l=u&&a?"viewBox='0 0 "+u+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+l+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(l?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},60337:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let r=n(86921)._(n(2265)),i=n(76906),o=r.default.createContext(i.imageConfigDefault)},76906:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},10536:function(e,t){function n(e){let{config:t,src:n,width:r,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},46993:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return r}});let r=n(86921)._(n(2265)).default.createContext(null)},27392:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let r=n(2265),i="undefined"==typeof window,o=i?()=>{}:r.useLayoutEffect,s=i?()=>{}:r.useEffect;function u(e){let{headManager:t,reduceComponentsToState:n}=e;function u(){if(t&&t.mountedInstances){let i=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(i,e))}}if(i){var a;null==t||null==(a=t.mountedInstances)||a.add(e.children),u()}return o(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=u),()=>{t&&(t._pendingUpdate=u)})),s(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},20568:function(e,t,n){n.d(t,{D:function(){return c}});var r=n(2265),i=n(1793),o=n(45139),s=n(44614),u=n(46063),a=class extends s.l{#e;#t=void 0;#n;#r;constructor(e,t){super(),this.#e=e,this.setOptions(t),this.bindMethods(),this.#i()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){let t=this.options;this.options=this.#e.defaultMutationOptions(e),(0,u.VS)(this.options,t)||this.#e.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#n,observer:this}),t?.mutationKey&&this.options.mutationKey&&(0,u.Ym)(t.mutationKey)!==(0,u.Ym)(this.options.mutationKey)?this.reset():this.#n?.state.status==="pending"&&this.#n.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#n?.removeObserver(this)}onMutationUpdate(e){this.#i(),this.#o(e)}getCurrentResult(){return this.#t}reset(){this.#n?.removeObserver(this),this.#n=void 0,this.#i(),this.#o()}mutate(e,t){return this.#r=t,this.#n?.removeObserver(this),this.#n=this.#e.getMutationCache().build(this.#e,this.options),this.#n.addObserver(this),this.#n.execute(e)}#i(){let e=this.#n?.state??(0,i.R)();this.#t={...e,isPending:"pending"===e.status,isSuccess:"success"===e.status,isError:"error"===e.status,isIdle:"idle"===e.status,mutate:this.mutate,reset:this.reset}}#o(e){o.V.batch(()=>{if(this.#r&&this.hasListeners()){let t=this.#t.variables,n=this.#t.context;e?.type==="success"?(this.#r.onSuccess?.(e.data,t,n),this.#r.onSettled?.(e.data,null,t,n)):e?.type==="error"&&(this.#r.onError?.(e.error,t,n),this.#r.onSettled?.(void 0,e.error,t,n))}this.listeners.forEach(e=>{e(this.#t)})})}},l=n(47082),d=n(20826);function c(e,t){let n=(0,l.NL)(t),[i]=r.useState(()=>new a(n,e));r.useEffect(()=>{i.setOptions(e)},[i,e]);let s=r.useSyncExternalStore(r.useCallback(e=>i.subscribe(o.V.batchCalls(e)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),u=r.useCallback((e,t)=>{i.mutate(e,t).catch(d.Z)},[i]);if(s.error&&(0,d.L)(i.options.throwOnError,[s.error]))throw s.error;return{...s,mutate:u,mutateAsync:s.mutate}}},20826:function(e,t,n){function r(e,t){return"function"==typeof e?e(...t):!!e}function i(){}n.d(t,{L:function(){return r},Z:function(){return i}})},40376:function(e,t,n){n.d(t,{d7:function(){return i}});let{Axios:r,AxiosError:i,CanceledError:o,isCancel:s,CancelToken:u,VERSION:a,all:l,Cancel:d,isAxiosError:c,spread:f,toFormData:p,AxiosHeaders:h,HttpStatusCode:m,formToJSON:g,getAdapter:b,mergeConfig:y}=n(7908).default}}]);