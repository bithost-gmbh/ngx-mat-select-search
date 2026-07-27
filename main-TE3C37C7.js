var ED=Object.defineProperty,wD=Object.defineProperties;var xD=Object.getOwnPropertyDescriptors;var Gm=Object.getOwnPropertySymbols;var ID=Object.prototype.hasOwnProperty,SD=Object.prototype.propertyIsEnumerable;var Wm=(t,n,e)=>n in t?ED(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,E=(t,n)=>{for(var e in n||={})ID.call(n,e)&&Wm(t,e,n[e]);if(Gm)for(var e of Gm(n))SD.call(n,e)&&Wm(t,e,n[e]);return t},ie=(t,n)=>wD(t,xD(n));var rr=(t,n,e)=>new Promise((i,r)=>{var o=c=>{try{a(e.next(c))}catch(l){r(l)}},s=c=>{try{a(e.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(o,s);a((e=e.apply(t,n)).next())});var nt=null,Ns=!1,Ol=1,MD=null,He=Symbol("SIGNAL");function A(t){let n=nt;return nt=t,n}function Ps(){return nt}var ui={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function or(t){if(Ns)throw new Error("");if(nt===null)return;nt.consumerOnSignalRead(t);let n=nt.producersTail;if(n!==void 0&&n.producer===t)return;let e,i=nt.recomputing;if(i&&(e=n!==void 0?n.nextProducer:nt.producers,e!==void 0&&e.producer===t)){nt.producersTail=e,e.lastReadVersion=t.version;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===nt&&(!i||TD(r,nt)))return;let o=ar(nt),s={producer:t,consumer:nt,nextProducer:e,prevConsumer:r,lastReadVersion:t.version,nextConsumer:void 0};nt.producersTail=s,n!==void 0?n.nextProducer=s:nt.producers=s,o&&Km(t,s)}function qm(){Ol++}function Ls(t){if(!(ar(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===Ol)){if(!t.producerMustRecompute(t)&&!sr(t)){Fs(t);return}t.producerRecomputeValue(t),Fs(t)}}function Fl(t){if(t.consumers===void 0)return;let n=Ns;Ns=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let i=e.consumer;i.dirty||kD(i)}}finally{Ns=n}}function Pl(){return nt?.consumerAllowSignalWrites!==!1}function kD(t){t.dirty=!0,Fl(t),t.consumerMarkedDirty?.(t)}function Fs(t){t.dirty=!1,t.lastCleanEpoch=Ol}function Vn(t){return t&&Ym(t),A(t)}function Ym(t){t.producersTail=void 0,t.recomputing=!0}function fi(t,n){A(n),t&&Zm(t)}function Zm(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(ar(t))do e=Ll(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function sr(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,i=n.lastReadVersion;if(i!==e.version||(Ls(e),i!==e.version))return!0}return!1}function Bn(t){if(ar(t)){let n=t.producers;for(;n!==void 0;)n=Ll(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function Km(t,n){let e=t.consumersTail,i=ar(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!i)for(let r=t.producers;r!==void 0;r=r.nextProducer)Km(r.producer,r)}function Ll(t){let n=t.producer,e=t.nextProducer,i=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:n.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(n.consumers=i,!ar(n)){let o=n.producers;for(;o!==void 0;)o=Ll(o)}return e}function ar(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function Vs(t){MD?.(t)}function TD(t,n){let e=n.producersTail;if(e!==void 0){let i=n.producers;do{if(i===t)return!0;if(i===e)break;i=i.nextProducer}while(i!==void 0)}return!1}function Bs(t,n){return Object.is(t,n)}function io(t,n){let e=Object.create(AD);e.computation=t,n!==void 0&&(e.equal=n);let i=()=>{if(Ls(e),or(e),e.value===no)throw e.error;return e.value};return i[He]=e,Vs(e),i}var Rs=Symbol("UNSET"),Os=Symbol("COMPUTING"),no=Symbol("ERRORED"),AD=ie(E({},ui),{value:Rs,dirty:!0,error:null,equal:Bs,kind:"computed",producerMustRecompute(t){return t.value===Rs||t.value===Os},producerRecomputeValue(t){if(t.value===Os)throw new Error("");let n=t.value;t.value=Os;let e=Vn(t),i,r=!1;try{i=t.computation(),A(null),r=n!==Rs&&n!==no&&i!==no&&t.equal(n,i)}catch(o){i=no,t.error=o}finally{fi(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function ND(){throw new Error}var Qm=ND;function Xm(t){Qm(t)}function Vl(t){Qm=t}var RD=null;function Bl(t,n){let e=Object.create(js);e.value=t,n!==void 0&&(e.equal=n);let i=()=>Jm(e);return i[He]=e,Vs(e),[i,s=>ro(e,s),s=>jl(e,s)]}function Jm(t){return or(t),t.value}function ro(t,n){Pl()||Xm(t),t.equal(t.value,n)||(t.value=n,OD(t))}function jl(t,n){Pl()||Xm(t),ro(t,n(t.value))}var js=ie(E({},ui),{equal:Bs,value:void 0,kind:"signal"});function OD(t){t.version++,qm(),Fl(t),RD?.(t)}var Hl=ie(E({},ui),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function Ul(t){if(t.dirty=!1,t.version>0&&!sr(t))return;t.version++;let n=Vn(t);try{t.cleanup(),t.fn()}finally{fi(t,n)}}function hi(t){return typeof t=="function"}var $l=!1,gt={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){if(t){let n=new Error;console.warn(`DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: 
`+n.stack)}else $l&&console.log("RxJS: Back to a better error behavior. Thank you. <3");$l=t},get useDeprecatedSynchronousErrorHandling(){return $l}};function Dn(t){setTimeout(()=>{throw t},0)}var cr={closed:!0,next(t){},error(t){if(gt.useDeprecatedSynchronousErrorHandling)throw t;Dn(t)},complete(){}};var Cn=Array.isArray||(t=>t&&typeof t.length=="number");function lr(t){return t!==null&&typeof t=="object"}var FD=(()=>{function t(n){return Error.call(this),this.message=n?`${n.length} errors occurred during unsubscription:
${n.map((e,i)=>`${i+1}) ${e.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=n,this}return t.prototype=Object.create(Error.prototype),t})(),oo=FD;var O=class t{constructor(n){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,n&&(this._ctorUnsubscribe=!0,this._unsubscribe=n)}unsubscribe(){let n;if(this.closed)return;let{_parentOrParents:e,_ctorUnsubscribe:i,_unsubscribe:r,_subscriptions:o}=this;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,e instanceof t)e.remove(this);else if(e!==null)for(let s=0;s<e.length;++s)e[s].remove(this);if(hi(r)){i&&(this._unsubscribe=void 0);try{r.call(this)}catch(s){n=s instanceof oo?ep(s.errors):[s]}}if(Cn(o)){let s=-1,a=o.length;for(;++s<a;){let c=o[s];if(lr(c))try{c.unsubscribe()}catch(l){n=n||[],l instanceof oo?n=n.concat(ep(l.errors)):n.push(l)}}}if(n)throw new oo(n)}add(n){let e=n;if(!n)return t.EMPTY;switch(typeof n){case"function":e=new t(n);case"object":if(e===this||e.closed||typeof e.unsubscribe!="function")return e;if(this.closed)return e.unsubscribe(),e;if(!(e instanceof t)){let o=e;e=new t,e._subscriptions=[o]}break;default:throw new Error("unrecognized teardown "+n+" added to Subscription.")}let{_parentOrParents:i}=e;if(i===null)e._parentOrParents=this;else if(i instanceof t){if(i===this)return e;e._parentOrParents=[i,this]}else if(i.indexOf(this)===-1)i.push(this);else return e;let r=this._subscriptions;return r===null?this._subscriptions=[e]:r.push(e),e}remove(n){let e=this._subscriptions;if(e){let i=e.indexOf(n);i!==-1&&e.splice(i,1)}}};O.EMPTY=(function(t){return t.closed=!0,t})(new O);function ep(t){return t.reduce((n,e)=>n.concat(e instanceof oo?e.errors:e),[])}var mi=typeof Symbol=="function"?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random();var j=class t extends O{constructor(n,e,i){switch(super(),this.syncErrorValue=null,this.syncErrorThrown=!1,this.syncErrorThrowable=!1,this.isStopped=!1,arguments.length){case 0:this.destination=cr;break;case 1:if(!n){this.destination=cr;break}if(typeof n=="object"){n instanceof t?(this.syncErrorThrowable=n.syncErrorThrowable,this.destination=n,n.add(this)):(this.syncErrorThrowable=!0,this.destination=new Hs(this,n));break}default:this.syncErrorThrowable=!0,this.destination=new Hs(this,n,e,i);break}}[mi](){return this}static create(n,e,i){let r=new t(n,e,i);return r.syncErrorThrowable=!1,r}next(n){this.isStopped||this._next(n)}error(n){this.isStopped||(this.isStopped=!0,this._error(n))}complete(){this.isStopped||(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe())}_next(n){this.destination.next(n)}_error(n){this.destination.error(n),this.unsubscribe()}_complete(){this.destination.complete(),this.unsubscribe()}_unsubscribeAndRecycle(){let{_parentOrParents:n}=this;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=n,this}},Hs=class extends j{constructor(n,e,i,r){super(),this._parentSubscriber=n;let o,s=this;hi(e)?o=e:e&&(o=e.next,i=e.error,r=e.complete,e!==cr&&(s=Object.create(e),hi(s.unsubscribe)&&this.add(s.unsubscribe.bind(s)),s.unsubscribe=this.unsubscribe.bind(this))),this._context=s,this._next=o,this._error=i,this._complete=r}next(n){if(!this.isStopped&&this._next){let{_parentSubscriber:e}=this;!gt.useDeprecatedSynchronousErrorHandling||!e.syncErrorThrowable?this.__tryOrUnsub(this._next,n):this.__tryOrSetError(e,this._next,n)&&this.unsubscribe()}}error(n){if(!this.isStopped){let{_parentSubscriber:e}=this,{useDeprecatedSynchronousErrorHandling:i}=gt;if(this._error)!i||!e.syncErrorThrowable?(this.__tryOrUnsub(this._error,n),this.unsubscribe()):(this.__tryOrSetError(e,this._error,n),this.unsubscribe());else if(e.syncErrorThrowable)i?(e.syncErrorValue=n,e.syncErrorThrown=!0):Dn(n),this.unsubscribe();else{if(this.unsubscribe(),i)throw n;Dn(n)}}}complete(){if(!this.isStopped){let{_parentSubscriber:n}=this;if(this._complete){let e=()=>this._complete.call(this._context);!gt.useDeprecatedSynchronousErrorHandling||!n.syncErrorThrowable?(this.__tryOrUnsub(e),this.unsubscribe()):(this.__tryOrSetError(n,e),this.unsubscribe())}else this.unsubscribe()}}__tryOrUnsub(n,e){try{n.call(this._context,e)}catch(i){if(this.unsubscribe(),gt.useDeprecatedSynchronousErrorHandling)throw i;Dn(i)}}__tryOrSetError(n,e,i){if(!gt.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,i)}catch(r){return gt.useDeprecatedSynchronousErrorHandling?(n.syncErrorValue=r,n.syncErrorThrown=!0,!0):(Dn(r),!0)}return!1}_unsubscribe(){let{_parentSubscriber:n}=this;this._context=null,this._parentSubscriber=null,n.unsubscribe()}};function tp(t){for(;t;){let{closed:n,destination:e,isStopped:i}=t;if(n||i)return!1;e&&e instanceof j?t=e:t=null}return!0}function np(t,n,e){if(t){if(t instanceof j)return t;if(t[mi])return t[mi]()}return!t&&!n&&!e?new j(cr):new j(t,n,e)}var en=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Us(t){return t}function ip(t){return t.length===0?Us:t.length===1?t[0]:function(e){return t.reduce((i,r)=>r(i),e)}}var B=(()=>{class t{constructor(e){this._isScalar=!1,e&&(this._subscribe=e)}lift(e){let i=new t;return i.source=this,i.operator=e,i}subscribe(e,i,r){let{operator:o}=this,s=np(e,i,r);if(o?s.add(o.call(s,this.source)):s.add(this.source||gt.useDeprecatedSynchronousErrorHandling&&!s.syncErrorThrowable?this._subscribe(s):this._trySubscribe(s)),gt.useDeprecatedSynchronousErrorHandling&&s.syncErrorThrowable&&(s.syncErrorThrowable=!1,s.syncErrorThrown))throw s.syncErrorValue;return s}_trySubscribe(e){try{return this._subscribe(e)}catch(i){gt.useDeprecatedSynchronousErrorHandling&&(e.syncErrorThrown=!0,e.syncErrorValue=i),tp(e)?e.error(i):console.warn(i)}}forEach(e,i){return i=rp(i),new i((r,o)=>{let s;s=this.subscribe(a=>{try{e(a)}catch(c){o(c),s&&s.unsubscribe()}},o,r)})}_subscribe(e){let{source:i}=this;return i&&i.subscribe(e)}[en](){return this}pipe(...e){return e.length===0?this:ip(e)(this)}toPromise(e){return e=rp(e),new e((i,r)=>{let o;this.subscribe(s=>o=s,s=>r(s),()=>i(o))})}}return t.create=n=>new t(n),t})();function rp(t){if(t||(t=gt.Promise||Promise),!t)throw new Error("no Promise impl found");return t}var PD=(()=>{function t(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return t.prototype=Object.create(Error.prototype),t})(),tn=PD;var dr=class extends O{constructor(n,e){super(),this.subject=n,this.subscriber=e,this.closed=!1}unsubscribe(){if(this.closed)return;this.closed=!0;let n=this.subject,e=n.observers;if(this.subject=null,!e||e.length===0||n.isStopped||n.closed)return;let i=e.indexOf(this.subscriber);i!==-1&&e.splice(i,1)}};var so=class extends j{constructor(n){super(n),this.destination=n}},k=(()=>{class t extends B{constructor(){super(),this.observers=[],this.closed=!1,this.isStopped=!1,this.hasError=!1,this.thrownError=null}[mi](){return new so(this)}lift(e){let i=new $s(this,this);return i.operator=e,i}next(e){if(this.closed)throw new tn;if(!this.isStopped){let{observers:i}=this,r=i.length,o=i.slice();for(let s=0;s<r;s++)o[s].next(e)}}error(e){if(this.closed)throw new tn;this.hasError=!0,this.thrownError=e,this.isStopped=!0;let{observers:i}=this,r=i.length,o=i.slice();for(let s=0;s<r;s++)o[s].error(e);this.observers.length=0}complete(){if(this.closed)throw new tn;this.isStopped=!0;let{observers:e}=this,i=e.length,r=e.slice();for(let o=0;o<i;o++)r[o].complete();this.observers.length=0}unsubscribe(){this.isStopped=!0,this.closed=!0,this.observers=null}_trySubscribe(e){if(this.closed)throw new tn;return super._trySubscribe(e)}_subscribe(e){if(this.closed)throw new tn;return this.hasError?(e.error(this.thrownError),O.EMPTY):this.isStopped?(e.complete(),O.EMPTY):(this.observers.push(e),new dr(this,e))}asObservable(){let e=new B;return e.source=this,e}}return t.create=(n,e)=>new $s(n,e),t})(),$s=class extends k{constructor(n,e){super(),this.destination=n,this.source=e}next(n){let{destination:e}=this;e&&e.next&&e.next(n)}error(n){let{destination:e}=this;e&&e.error&&this.destination.error(n)}complete(){let{destination:n}=this;n&&n.complete&&this.destination.complete()}_subscribe(n){let{source:e}=this;return e?this.source.subscribe(n):O.EMPTY}};function zs(){return function(n){return n.lift(new zl(n))}}var zl=class{constructor(n){this.connectable=n}call(n,e){let{connectable:i}=this;i._refCount++;let r=new Gl(n,i),o=e.subscribe(r);return r.closed||(r.connection=i.connect()),o}},Gl=class extends j{constructor(n,e){super(n),this.connectable=e}_unsubscribe(){let{connectable:n}=this;if(!n){this.connection=null;return}this.connectable=null;let e=n._refCount;if(e<=0){this.connection=null;return}if(n._refCount=e-1,e>1){this.connection=null;return}let{connection:i}=this,r=n._connection;this.connection=null,r&&(!i||r===i)&&r.unsubscribe()}};var Wl=class extends B{constructor(n,e){super(),this.source=n,this.subjectFactory=e,this._refCount=0,this._isComplete=!1}_subscribe(n){return this.getSubject().subscribe(n)}getSubject(){let n=this._subject;return(!n||n.isStopped)&&(this._subject=this.subjectFactory()),this._subject}connect(){let n=this._connection;return n||(this._isComplete=!1,n=this._connection=new O,n.add(this.source.subscribe(new ql(this.getSubject(),this))),n.closed&&(this._connection=null,n=O.EMPTY)),n}refCount(){return zs()(this)}},op=(()=>{let t=Wl.prototype;return{operator:{value:null},_refCount:{value:0,writable:!0},_subject:{value:null,writable:!0},_connection:{value:null,writable:!0},_subscribe:{value:t._subscribe},_isComplete:{value:t._isComplete,writable:!0},getSubject:{value:t.getSubject},connect:{value:t.connect},refCount:{value:t.refCount}}})(),ql=class extends so{constructor(n,e){super(n),this.connectable=e}_error(n){this._unsubscribe(),super._error(n)}_complete(){this.connectable._isComplete=!0,this._unsubscribe(),super._complete()}_unsubscribe(){let n=this.connectable;if(n){this.connectable=null;let e=n._connection;n._refCount=0,n._subject=null,n._connection=null,e&&e.unsubscribe()}}};var En=class extends k{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return e&&!e.closed&&n.next(this._value),e}getValue(){if(this.hasError)throw this.thrownError;if(this.closed)throw new tn;return this._value}next(n){super.next(this._value=n)}};var Gs=class extends O{constructor(n,e){super()}schedule(n,e=0){return this}};var ur=class extends Gs{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){if(this.closed)return this;this.state=n;let i=this.id,r=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(r,i,e)),this.pending=!0,this.delay=e,this.id=this.id||this.requestAsyncId(r,this.id,e),this}requestAsyncId(n,e,i=0){return setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(i!==null&&this.delay===i&&this.pending===!1)return e;clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(n,e);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let i=!1,r;try{this.work(n)}catch(o){i=!0,r=!!o&&o||new Error(o)}if(i)return this.unsubscribe(),r}_unsubscribe(){let n=this.id,e=this.scheduler,i=e.actions,r=i.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,r!==-1&&i.splice(r,1),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null}};var Ws=class extends ur{constructor(n,e){super(n,e),this.scheduler=n,this.work=e}schedule(n,e=0){return e>0?super.schedule(n,e):(this.delay=e,this.state=n,this.scheduler.flush(this),this)}execute(n,e){return e>0||this.closed?super.execute(n,e):this._execute(n,e)}requestAsyncId(n,e,i=0){return i!==null&&i>0||i===null&&this.delay>0?super.requestAsyncId(n,e,i):n.flush(this)}};var Yl=(()=>{class t{constructor(e,i=t.now){this.SchedulerAction=e,this.now=i}schedule(e,i=0,r){return new this.SchedulerAction(this,e).schedule(r,i)}}return t.now=()=>Date.now(),t})();var fr=class t extends Yl{constructor(n,e=Yl.now){super(n,()=>t.delegate&&t.delegate!==this?t.delegate.now():e()),this.actions=[],this.active=!1,this.scheduled=void 0}schedule(n,e=0,i){return t.delegate&&t.delegate!==this?t.delegate.schedule(n,e,i):super.schedule(n,e,i)}flush(n){let{actions:e}=this;if(this.active){e.push(n);return}let i;this.active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=e.shift());if(this.active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}};var qs=class extends fr{};var LD=new qs(Ws),sp=LD;var VD=new B(t=>t.complete());function hr(t){return t?BD(t):VD}function BD(t){return new B(n=>t.schedule(()=>n.complete()))}function Ht(t){return t&&typeof t.schedule=="function"}var Ys=t=>n=>{for(let e=0,i=t.length;e<i&&!n.closed;e++)n.next(t[e]);n.complete()};function mr(t,n){return new B(e=>{let i=new O,r=0;return i.add(n.schedule(function(){if(r===t.length){e.complete();return}e.next(t[r++]),e.closed||i.add(this.schedule())})),i})}function pr(t,n){return n?mr(t,n):new B(Ys(t))}function Ae(...t){let n=t[t.length-1];return Ht(n)?(t.pop(),mr(t,n)):pr(t)}function ao(t,n){return n?new B(e=>n.schedule(jD,0,{error:t,subscriber:e})):new B(e=>e.error(t))}function jD({error:t,subscriber:n}){n.error(t)}var _t=class t{constructor(n,e,i){this.kind=n,this.value=e,this.error=i,this.hasValue=n==="N"}observe(n){switch(this.kind){case"N":return n.next&&n.next(this.value);case"E":return n.error&&n.error(this.error);case"C":return n.complete&&n.complete()}}do(n,e,i){switch(this.kind){case"N":return n&&n(this.value);case"E":return e&&e(this.error);case"C":return i&&i()}}accept(n,e,i){return n&&typeof n.next=="function"?this.observe(n):this.do(n,e,i)}toObservable(){switch(this.kind){case"N":return Ae(this.value);case"E":return ao(this.error);case"C":return hr()}throw new Error("unexpected notification kind value")}static createNext(n){return typeof n<"u"?new t("N",n):t.undefinedValueNotification}static createError(n){return new t("E",void 0,n)}static createComplete(){return t.completeNotification}};_t.completeNotification=new _t("C");_t.undefinedValueNotification=new _t("N",void 0);var Zs=class t extends j{constructor(n,e,i=0){super(n),this.scheduler=e,this.delay=i}static dispatch(n){let{notification:e,destination:i}=n;e.observe(i),this.unsubscribe()}scheduleMessage(n){this.destination.add(this.scheduler.schedule(t.dispatch,this.delay,new Zl(n,this.destination)))}_next(n){this.scheduleMessage(_t.createNext(n))}_error(n){this.scheduleMessage(_t.createError(n)),this.unsubscribe()}_complete(){this.scheduleMessage(_t.createComplete()),this.unsubscribe()}},Zl=class{constructor(n,e){this.notification=n,this.destination=e}};var Ks=class extends k{constructor(n=Number.POSITIVE_INFINITY,e=Number.POSITIVE_INFINITY,i){super(),this.scheduler=i,this._events=[],this._infiniteTimeWindow=!1,this._bufferSize=n<1?1:n,this._windowTime=e<1?1:e,e===Number.POSITIVE_INFINITY?(this._infiniteTimeWindow=!0,this.next=this.nextInfiniteTimeWindow):this.next=this.nextTimeWindow}nextInfiniteTimeWindow(n){if(!this.isStopped){let e=this._events;e.push(n),e.length>this._bufferSize&&e.shift()}super.next(n)}nextTimeWindow(n){this.isStopped||(this._events.push(new Kl(this._getNow(),n)),this._trimBufferThenGetEvents()),super.next(n)}_subscribe(n){let e=this._infiniteTimeWindow,i=e?this._events:this._trimBufferThenGetEvents(),r=this.scheduler,o=i.length,s;if(this.closed)throw new tn;if(this.isStopped||this.hasError?s=O.EMPTY:(this.observers.push(n),s=new dr(this,n)),r&&n.add(n=new Zs(n,r)),e)for(let a=0;a<o&&!n.closed;a++)n.next(i[a]);else for(let a=0;a<o&&!n.closed;a++)n.next(i[a].value);return this.hasError?n.error(this.thrownError):this.isStopped&&n.complete(),s}_getNow(){return(this.scheduler||sp).now()}_trimBufferThenGetEvents(){let n=this._getNow(),e=this._bufferSize,i=this._windowTime,r=this._events,o=r.length,s=0;for(;s<o&&!(n-r[s].time<i);)s++;return o>e&&(s=Math.max(s,o-e)),s>0&&r.splice(0,s),r}},Kl=class{constructor(n,e){this.time=n,this.value=e}};var HD=new fr(ur),jn=HD;function wn(){}var UD=(()=>{function t(){return Error.call(this),this.message="argument out of range",this.name="ArgumentOutOfRangeError",this}return t.prototype=Object.create(Error.prototype),t})(),ap=UD;function ee(t,n){return function(i){if(typeof t!="function")throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return i.lift(new Ql(t,n))}}var Ql=class{constructor(n,e){this.project=n,this.thisArg=e}call(n,e){return e.subscribe(new Xl(n,this.project,this.thisArg))}},Xl=class extends j{constructor(n,e,i){super(n),this.project=e,this.count=0,this.thisArg=i||this}_next(n){let e;try{e=this.project.call(this.thisArg,n,this.count++)}catch(i){this.destination.error(i);return}this.destination.next(e)}};var Qs=class extends j{notifyNext(n,e,i,r,o){this.destination.next(e)}notifyError(n,e){this.destination.error(n)}notifyComplete(n){this.destination.complete()}};var Xs=class extends j{constructor(n,e,i){super(),this.parent=n,this.outerValue=e,this.outerIndex=i,this.index=0}_next(n){this.parent.notifyNext(this.outerValue,n,this.outerIndex,this.index++,this)}_error(n){this.parent.notifyError(n,this),this.unsubscribe()}_complete(){this.parent.notifyComplete(this),this.unsubscribe()}};var cp=t=>n=>(t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,Dn),n);function $D(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Hn=$D();var lp=t=>n=>{let e=t[Hn]();do{let i;try{i=e.next()}catch(r){return n.error(r),n}if(i.done){n.complete();break}if(n.next(i.value),n.closed)break}while(!0);return typeof e.return=="function"&&n.add(()=>{e.return&&e.return()}),n};var dp=t=>n=>{let e=t[en]();if(typeof e.subscribe!="function")throw new TypeError("Provided object does not correctly implement Symbol.observable");return e.subscribe(n)};var Js=t=>t&&typeof t.length=="number"&&typeof t!="function";function ea(t){return!!t&&typeof t.subscribe!="function"&&typeof t.then=="function"}var gr=t=>{if(t&&typeof t[en]=="function")return dp(t);if(Js(t))return Ys(t);if(ea(t))return cp(t);if(t&&typeof t[Hn]=="function")return lp(t);{let e=`You provided ${lr(t)?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`;throw new TypeError(e)}};function up(t,n,e,i,r=new Xs(t,e,i)){if(!r.closed)return n instanceof B?n.subscribe(r):gr(n)(r)}var fp={};function td(...t){let n,e;return Ht(t[t.length-1])&&(e=t.pop()),typeof t[t.length-1]=="function"&&(n=t.pop()),t.length===1&&Cn(t[0])&&(t=t[0]),pr(t,e).lift(new Jl(n))}var Jl=class{constructor(n){this.resultSelector=n}call(n,e){return e.subscribe(new ed(n,this.resultSelector))}},ed=class extends Qs{constructor(n,e){super(n),this.resultSelector=e,this.active=0,this.values=[],this.observables=[]}_next(n){this.values.push(fp),this.observables.push(n)}_complete(){let n=this.observables,e=n.length;if(e===0)this.destination.complete();else{this.active=e,this.toRespond=e;for(let i=0;i<e;i++){let r=n[i];this.add(up(this,r,void 0,i))}}}notifyComplete(n){(this.active-=1)===0&&this.destination.complete()}notifyNext(n,e,i){let r=this.values,o=r[i],s=this.toRespond?o===fp?--this.toRespond:this.toRespond:0;r[i]=e,s===0&&(this.resultSelector?this._tryResultSelector(r):this.destination.next(r.slice()))}_tryResultSelector(n){let e;try{e=this.resultSelector.apply(this,n)}catch(i){this.destination.error(i);return}this.destination.next(e)}};function hp(t,n){return new B(e=>{let i=new O;return i.add(n.schedule(()=>{let r=t[en]();i.add(r.subscribe({next(o){i.add(n.schedule(()=>e.next(o)))},error(o){i.add(n.schedule(()=>e.error(o)))},complete(){i.add(n.schedule(()=>e.complete()))}}))})),i})}function mp(t,n){return new B(e=>{let i=new O;return i.add(n.schedule(()=>t.then(r=>{i.add(n.schedule(()=>{e.next(r),i.add(n.schedule(()=>e.complete()))}))},r=>{i.add(n.schedule(()=>e.error(r)))}))),i})}function pp(t,n){if(!t)throw new Error("Iterable cannot be null");return new B(e=>{let i=new O,r;return i.add(()=>{r&&typeof r.return=="function"&&r.return()}),i.add(n.schedule(()=>{r=t[Hn](),i.add(n.schedule(function(){if(e.closed)return;let o,s;try{let a=r.next();o=a.value,s=a.done}catch(a){e.error(a);return}s?e.complete():(e.next(o),this.schedule())}))})),i})}function gp(t){return t&&typeof t[en]=="function"}function bp(t){return t&&typeof t[Hn]=="function"}function vp(t,n){if(t!=null){if(gp(t))return hp(t,n);if(ea(t))return mp(t,n);if(Js(t))return mr(t,n);if(bp(t)||typeof t=="string")return pp(t,n)}throw new TypeError((t!==null&&typeof t||t)+" is not observable")}function Ut(t,n){return n?vp(t,n):t instanceof B?t:new B(gr(t))}var xt=class extends j{constructor(n){super(),this.parent=n}_next(n){this.parent.notifyNext(n)}_error(n){this.parent.notifyError(n),this.unsubscribe()}_complete(){this.parent.notifyComplete(),this.unsubscribe()}};var It=class extends j{notifyNext(n){this.destination.next(n)}notifyError(n){this.destination.error(n)}notifyComplete(){this.destination.complete()}};function nn(t,n){if(n.closed)return;if(t instanceof B)return t.subscribe(n);let e;try{e=gr(t)(n)}catch(i){n.error(i)}return e}function co(t,n,e=Number.POSITIVE_INFINITY){return typeof n=="function"?i=>i.pipe(co((r,o)=>Ut(t(r,o)).pipe(ee((s,a)=>n(r,s,o,a))),e)):(typeof n=="number"&&(e=n),i=>i.lift(new nd(t,e)))}var nd=class{constructor(n,e=Number.POSITIVE_INFINITY){this.project=n,this.concurrent=e}call(n,e){return e.subscribe(new id(n,this.project,this.concurrent))}},id=class extends It{constructor(n,e,i=Number.POSITIVE_INFINITY){super(n),this.project=e,this.concurrent=i,this.hasCompleted=!1,this.buffer=[],this.active=0,this.index=0}_next(n){this.active<this.concurrent?this._tryNext(n):this.buffer.push(n)}_tryNext(n){let e,i=this.index++;try{e=this.project(n,i)}catch(r){this.destination.error(r);return}this.active++,this._innerSub(e)}_innerSub(n){let e=new xt(this),i=this.destination;i.add(e);let r=nn(n,e);r!==e&&i.add(r)}_complete(){this.hasCompleted=!0,this.active===0&&this.buffer.length===0&&this.destination.complete(),this.unsubscribe()}notifyNext(n){this.destination.next(n)}notifyComplete(){let n=this.buffer;this.active--,n.length>0?this._next(n.shift()):this.active===0&&this.hasCompleted&&this.destination.complete()}};function ta(t=Number.POSITIVE_INFINITY){return co(Us,t)}function _p(){return ta(1)}function rd(...t){return _p()(Ae(...t))}function od(t){return new B(n=>{let e;try{e=t()}catch(r){n.error(r);return}return(e?Ut(e):hr()).subscribe(n)})}function lo(...t){if(t.length===1){let n=t[0];if(Cn(n))return na(n,null);if(lr(n)&&Object.getPrototypeOf(n)===Object.prototype){let e=Object.keys(n);return na(e.map(i=>n[i]),e)}}if(typeof t[t.length-1]=="function"){let n=t.pop();return t=t.length===1&&Cn(t[0])?t[0]:t,na(t,null).pipe(ee(e=>n(...e)))}return na(t,null)}function na(t,n){return new B(e=>{let i=t.length;if(i===0){e.complete();return}let r=new Array(i),o=0,s=0;for(let a=0;a<i;a++){let c=Ut(t[a]),l=!1;e.add(c.subscribe({next:d=>{l||(l=!0,s++),r[a]=d},error:d=>e.error(d),complete:()=>{o++,(o===i||!l)&&(s===i&&e.next(n?n.reduce((d,f,h)=>(d[f]=r[h],d),{}):r),e.complete())}}))}})}function sd(t){return!Cn(t)&&t-parseFloat(t)+1>=0}function pi(...t){let n=Number.POSITIVE_INFINITY,e=null,i=t[t.length-1];return Ht(i)?(e=t.pop(),t.length>1&&typeof t[t.length-1]=="number"&&(n=t.pop())):typeof i=="number"&&(n=t.pop()),e===null&&t.length===1&&t[0]instanceof B?t[0]:ta(n)(pr(t,e))}function Ue(t,n){return function(i){return i.lift(new ad(t,n))}}var ad=class{constructor(n,e){this.predicate=n,this.thisArg=e}call(n,e){return e.subscribe(new cd(n,this.predicate,this.thisArg))}},cd=class extends j{constructor(n,e,i){super(n),this.predicate=e,this.thisArg=i,this.count=0}_next(n){let e;try{e=this.predicate.call(this.thisArg,n,this.count++)}catch(i){this.destination.error(i);return}e&&this.destination.next(n)}};function yp(t=0,n,e){let i=-1;return sd(n)?i=Number(n)<1&&1||Number(n):Ht(n)&&(e=n),Ht(e)||(e=jn),new B(r=>{let o=sd(t)?t:+t-e.now();return e.schedule(zD,o,{index:0,period:i,subscriber:r})})}function zD(t){let{index:n,period:e,subscriber:i}=t;if(i.next(n),!i.closed){if(e===-1)return i.complete();t.index=n+1,this.schedule(t,e)}}var ld;function ia(){return ld}function rn(t){let n=ld;return ld=t,n}var Dp=Symbol("NotFound");function br(t){return t===Dp||t?.name==="\u0275NotFound"}function Cp(t){let n=A(null);try{return t()}finally{A(n)}}var bi=class{full;major;minor;patch;constructor(n){this.full=n;let e=n.split(".");this.major=e[0],this.minor=e[1],this.patch=e.slice(2).join(".")}};var da="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",I=class extends Error{code;constructor(n,e){super(_r(n,e)),this.code=n}};function GD(t){return`NG0${Math.abs(t)}`}function _r(t,n){return`${GD(t)}${n?": "+n:""}`}var yr=globalThis;function he(t){for(let n in t)if(t[n]===he)return n;throw Error("")}function Sp(t,n){for(let e in n)n.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=n[e])}function ua(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(ua).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let i=e.indexOf(`
`);return i>=0?e.slice(0,i):e}function fa(t,n){return t?n?`${t} ${n}`:t:n||""}var WD=he({__forward_ref__:he});function rt(t){return t.__forward_ref__=rt,t}function Qe(t){return Cd(t)?t():t}function Cd(t){return typeof t=="function"&&t.hasOwnProperty(WD)&&t.__forward_ref__===rt}function y(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function K(t){return{providers:t.providers||[],imports:t.imports||[]}}function ha(t){return qD(t,ma)}function qD(t,n){return t.hasOwnProperty(n)&&t[n]||null}function YD(t){let n=t?.[ma]??null;return n||null}function ud(t){return t&&t.hasOwnProperty(oa)?t[oa]:null}var ma=he({\u0275prov:he}),oa=he({\u0275inj:he}),v=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=y({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Ed(t){return t&&!!t.\u0275providers}var bo=he({\u0275cmp:he}),vo=he({\u0275dir:he}),wd=he({\u0275pipe:he});var fo=he({\u0275fac:he}),Di=he({__NG_ELEMENT_ID__:he}),Ep=he({__NG_ENV_ID__:he});function Gn(t){return Id(t,"@Component"),t[bo]||null}function xd(t){return Id(t,"@Directive"),t[vo]||null}function Mp(t){return Id(t,"@Pipe"),t[wd]||null}function Id(t,n){if(t==null)throw new I(-919,!1)}function Sd(t){return typeof t=="string"?t:t==null?"":String(t)}var kp=he({ngErrorCode:he}),ZD=he({ngErrorMessage:he}),KD=he({ngTokenPath:he});function Md(t,n){return Tp("",-200,n)}function pa(t,n){throw new I(-201,!1)}function Tp(t,n,e){let i=new I(n,t);return i[kp]=n,i[ZD]=t,e&&(i[KD]=e),i}function QD(t){return t[kp]}var fd;function Ap(){return fd}function ut(t){let n=fd;return fd=t,n}function kd(t,n,e){let i=ha(t);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(e&8)return null;if(n!==void 0)return n;pa(t,"")}var XD={},gi=XD,JD="__NG_DI_FLAG__",hd=class{injector;constructor(n){this.injector=n}retrieve(n,e){let i=vi(e)||0;try{return this.injector.get(n,i&8?null:gi,i)}catch(r){if(br(r))return r;throw r}}};function eC(t,n=0){let e=ia();if(e===void 0)throw new I(-203,!1);if(e===null)return kd(t,void 0,n);{let i=tC(n),r=e.retrieve(t,i);if(br(r)){if(i.optional)return null;throw r}return r}}function F(t,n=0){return(Ap()||eC)(Qe(t),n)}function u(t,n){return F(t,vi(n))}function vi(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function tC(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function md(t){let n=[];for(let e=0;e<t.length;e++){let i=Qe(t[e]);if(Array.isArray(i)){if(i.length===0)throw new I(900,!1);let r,o=0;for(let s=0;s<i.length;s++){let a=i[s],c=nC(a);typeof c=="number"?c===-1?r=a.token:o|=c:r=a}n.push(F(r,o))}else n.push(F(i))}return n}function nC(t){return t[JD]}function Un(t,n){let e=t.hasOwnProperty(fo);return e?t[fo]:null}function Np(t,n,e){if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function Rp(t){return t.flat(Number.POSITIVE_INFINITY)}function ga(t,n){t.forEach(e=>Array.isArray(e)?ga(e,n):n(e))}function Td(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function _o(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function Op(t,n){let e=[];for(let i=0;i<t;i++)e.push(n);return e}function Fp(t,n,e,i){let r=t.length;if(r==n)t.push(e,i);else if(r===1)t.push(i,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>n;){let o=r-2;t[r]=t[o],r--}t[n]=e,t[n+1]=i}}function ba(t,n,e){let i=Dr(t,n);return i>=0?t[i|1]=e:(i=~i,Fp(t,i,n,e)),i}function va(t,n){let e=Dr(t,n);if(e>=0)return t[e|1]}function Dr(t,n){return iC(t,n,1)}function iC(t,n,e){let i=0,r=t.length>>e;for(;r!==i;){let o=i+(r-i>>1),s=t[o<<e];if(n===s)return o<<e;s>n?r=o:i=o+1}return~(r<<e)}var Wn={},it=[],qn=new v(""),Ad=new v("",-1),Nd=new v(""),ho=class{get(n,e=gi){if(e===gi){let r=Tp("",-201);throw r.name="\u0275NotFound",r}return e}};function yo(t){return{\u0275providers:t}}function Pp(...t){return{\u0275providers:Rd(!0,t),\u0275fromNgModule:!0}}function Rd(t,...n){let e=[],i=new Set,r,o=s=>{e.push(s)};return ga(n,s=>{let a=s;sa(a,o,[],i)&&(r||=[],r.push(a))}),r!==void 0&&Lp(r,o),e}function Lp(t,n){for(let e=0;e<t.length;e++){let{ngModule:i,providers:r}=t[e];Od(r,o=>{n(o,i)})}}function sa(t,n,e,i){if(t=Qe(t),!t)return!1;let r=null,o=ud(t),s=!o&&Gn(t);if(!o&&!s){let c=t.ngModule;if(o=ud(c),o)r=c;else return!1}else{if(s&&!s.standalone)return!1;r=t}let a=i.has(r);if(s){if(a)return!1;if(i.add(r),s.dependencies){let c=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let l of c)sa(l,n,e,i)}}else if(o){if(o.imports!=null&&!a){i.add(r);let l;ga(o.imports,d=>{sa(d,n,e,i)&&(l||=[],l.push(d))}),l!==void 0&&Lp(l,n)}if(!a){let l=Un(r)||(()=>new r);n({provide:r,useFactory:l,deps:it},r),n({provide:Nd,useValue:r,multi:!0},r),n({provide:qn,useValue:()=>F(r),multi:!0},r)}let c=o.providers;if(c!=null&&!a){let l=t;Od(c,d=>{n(d,l)})}}else return!1;return r!==t&&t.providers!==void 0}function Od(t,n){for(let e of t)Ed(e)&&(e=e.\u0275providers),Array.isArray(e)?Od(e,n):n(e)}var rC=he({provide:String,useValue:he});function Vp(t){return t!==null&&typeof t=="object"&&rC in t}function oC(t){return!!(t&&t.useExisting)}function sC(t){return!!(t&&t.useFactory)}function _i(t){return typeof t=="function"}function Bp(t){return!!t.useClass}var Do=new v(""),ra={},wp={},dd;function Cr(){return dd===void 0&&(dd=new ho),dd}var we=class{},yi=class extends we{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,i,r){super(),this.parent=e,this.source=i,this.scopes=r,gd(n,s=>this.processProvider(s)),this.records.set(Ad,vr(void 0,this)),r.has("environment")&&this.records.set(we,vr(void 0,this));let o=this.records.get(Do);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(Nd,it,{self:!0}))}retrieve(n,e){let i=vi(e)||0;try{return this.get(n,gi,i)}catch(r){if(br(r))return r;throw r}}destroy(){uo(this),this._destroyed=!0;let n=A(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of e)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),A(n)}}onDestroy(n){return uo(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){uo(this);let e=rn(this),i=ut(void 0),r;try{return n()}finally{rn(e),ut(i)}}get(n,e=gi,i){if(uo(this),n.hasOwnProperty(Ep))return n[Ep](this);let r=vi(i),o,s=rn(this),a=ut(void 0);try{if(!(r&4)){let l=this.records.get(n);if(l===void 0){let d=uC(n)&&ha(n);d&&this.injectableDefInScope(d)?l=vr(pd(n),ra):l=null,this.records.set(n,l)}if(l!=null)return this.hydrate(n,l,r)}let c=r&2?Cr():this.parent;return e=r&8&&e===gi?null:e,c.get(n,e)}catch(c){let l=QD(c);throw l===-200||l===-201?new I(l,null):c}finally{ut(a),rn(s)}}resolveInjectorInitializers(){let n=A(null),e=rn(this),i=ut(void 0),r;try{let o=this.get(qn,it,{self:!0});for(let s of o)s()}finally{rn(e),ut(i),A(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=Qe(n);let e=_i(n)?n:Qe(n&&n.provide),i=cC(n);if(!_i(n)&&n.multi===!0){let r=this.records.get(e);r||(r=vr(void 0,ra,!0),r.factory=()=>md(r.multi),this.records.set(e,r)),e=n,r.multi.push(n)}this.records.set(e,i)}hydrate(n,e,i){let r=A(null);try{if(e.value===wp)throw Md("");return e.value===ra&&(e.value=wp,e.value=e.factory(void 0,i)),typeof e.value=="object"&&e.value&&dC(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{A(r)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=Qe(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function pd(t){let n=ha(t),e=n!==null?n.factory:Un(t);if(e!==null)return e;if(t instanceof v)throw new I(-204,!1);if(t instanceof Function)return aC(t);throw new I(-204,!1)}function aC(t){if(t.length>0)throw new I(-204,!1);let e=YD(t);return e!==null?()=>e.factory(t):()=>new t}function cC(t){if(Vp(t))return vr(void 0,t.useValue);{let n=Fd(t);return vr(n,ra)}}function Fd(t,n,e){let i;if(_i(t)){let r=Qe(t);return Un(r)||pd(r)}else if(Vp(t))i=()=>Qe(t.useValue);else if(sC(t))i=()=>t.useFactory(...md(t.deps||[]));else if(oC(t))i=(r,o)=>F(Qe(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=Qe(t&&(t.useClass||t.provide));if(lC(t))i=()=>new r(...md(t.deps));else return Un(r)||pd(r)}return i}function uo(t){if(t.destroyed)throw new I(-205,!1)}function vr(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function lC(t){return!!t.deps}function dC(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function uC(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function gd(t,n){for(let e of t)Array.isArray(e)?gd(e,n):e&&Ed(e)?gd(e.\u0275providers,n):n(e)}function Er(t,n){let e;t instanceof yi?(uo(t),e=t):e=new hd(t);let i,r=rn(e),o=ut(void 0);try{return n()}finally{rn(r),ut(o)}}function jp(){return Ap()!==void 0||ia()!=null}var zt=0,T=1,P=2,Fe=3,St=4,ft=5,Ci=6,wr=7,xe=8,In=9,on=10,pe=11,xr=12,Pd=13,Ei=14,ht=15,Yn=16,wi=17,sn=18,Sn=19,Ld=20,xn=21,_a=22,$n=23,yt=24,xi=25,Zn=26,_e=27,Hp=1,Vd=6,Kn=7,Co=8,Ii=9,Ee=10;function Mn(t){return Array.isArray(t)&&typeof t[Hp]=="object"}function Gt(t){return Array.isArray(t)&&t[Hp]===!0}function Bd(t){return(t.flags&4)!==0}function kn(t){return t.componentOffset>-1}function Ir(t){return(t.flags&1)===1}function an(t){return!!t.template}function Sr(t){return(t[P]&512)!==0}function Si(t){return(t[P]&256)===256}var jd="svg",Up="math";function Mt(t){for(;Array.isArray(t);)t=t[zt];return t}function Hd(t,n){return Mt(n[t])}function Wt(t,n){return Mt(n[t.index])}function ya(t,n){return t.data[n]}function Ud(t,n){return t[n]}function $d(t,n,e,i){e>=t.data.length&&(t.data[e]=null,t.blueprint[e]=null),n[e]=i}function kt(t,n){let e=n[t];return Mn(e)?e:e[zt]}function $p(t){return(t[P]&4)===4}function Da(t){return(t[P]&128)===128}function zp(t){return Gt(t[Fe])}function Tt(t,n){return n==null?null:t[n]}function zd(t){t[wi]=0}function Gd(t){t[P]&1024||(t[P]|=1024,Da(t)&&Mi(t))}function Gp(t,n){for(;t>0;)n=n[Ei],t--;return n}function Eo(t){return!!(t[P]&9216||t[yt]?.dirty)}function Ca(t){t[on].changeDetectionScheduler?.notify(8),t[P]&64&&(t[P]|=1024),Eo(t)&&Mi(t)}function Mi(t){t[on].changeDetectionScheduler?.notify(0);let n=zn(t);for(;n!==null&&!(n[P]&8192||(n[P]|=8192,!Da(n)));)n=zn(n)}function Wd(t,n){if(Si(t))throw new I(911,!1);t[xn]===null&&(t[xn]=[]),t[xn].push(n)}function Wp(t,n){if(t[xn]===null)return;let e=t[xn].indexOf(n);e!==-1&&t[xn].splice(e,1)}function zn(t){let n=t[Fe];return Gt(n)?n[Fe]:n}function qd(t){return t[wr]??=[]}function Yd(t){return t.cleanup??=[]}function qp(t,n,e,i){let r=qd(n);r.push(e),t.firstCreatePass&&Yd(t).push(i,r.length-1)}var q={lFrame:og(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var bd=!1;function Yp(){return q.lFrame.elementDepthCount}function Zp(){q.lFrame.elementDepthCount++}function Zd(){q.lFrame.elementDepthCount--}function Ea(){return q.bindingsEnabled}function Kd(){return q.skipHydrationRootTNode!==null}function Qd(t){return q.skipHydrationRootTNode===t}function Xd(){q.skipHydrationRootTNode=null}function H(){return q.lFrame.lView}function De(){return q.lFrame.tView}function ki(t){return q.lFrame.contextLView=t,t[xe]}function Ti(t){return q.lFrame.contextLView=null,t}function $e(){let t=Jd();for(;t!==null&&t.type===64;)t=t.parent;return t}function Jd(){return q.lFrame.currentTNode}function Kp(){let t=q.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function Mr(t,n){let e=q.lFrame;e.currentTNode=t,e.isParent=n}function eu(){return q.lFrame.isParent}function tu(){q.lFrame.isParent=!1}function Qp(){return q.lFrame.contextLView}function nu(){return bd}function mo(t){let n=bd;return bd=t,n}function Xp(){let t=q.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function Jp(t){return q.lFrame.bindingIndex=t}function Ai(){return q.lFrame.bindingIndex++}function iu(t){let n=q.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function eg(){return q.lFrame.inI18n}function tg(t,n){let e=q.lFrame;e.bindingIndex=e.bindingRootIndex=t,wa(n)}function ng(){return q.lFrame.currentDirectiveIndex}function wa(t){q.lFrame.currentDirectiveIndex=t}function ig(t){let n=q.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function xa(){return q.lFrame.currentQueryIndex}function wo(t){q.lFrame.currentQueryIndex=t}function fC(t){let n=t[T];return n.type===2?n.declTNode:n.type===1?t[ft]:null}function ru(t,n,e){if(e&4){let r=n,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=fC(o),r===null||(o=o[Ei],r.type&10))break;if(r===null)return!1;n=r,t=o}let i=q.lFrame=rg();return i.currentTNode=n,i.lView=t,!0}function Ia(t){let n=rg(),e=t[T];q.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function rg(){let t=q.lFrame,n=t===null?null:t.child;return n===null?og(t):n}function og(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function sg(){let t=q.lFrame;return q.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var ou=sg;function Sa(){let t=sg();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function ag(t){return(q.lFrame.contextLView=Gp(t,q.lFrame.contextLView))[xe]}function Tn(){return q.lFrame.selectedIndex}function Qn(t){q.lFrame.selectedIndex=t}function Ma(){let t=q.lFrame;return ya(t.tView,t.selectedIndex)}function qt(){q.lFrame.currentNamespace=jd}function kr(){hC()}function hC(){q.lFrame.currentNamespace=null}function su(){return q.lFrame.currentNamespace}var cg=!0;function ka(){return cg}function xo(t){cg=t}function vd(t,n=null,e=null,i){let r=lg(t,n,e,i);return r.resolveInjectorInitializers(),r}function lg(t,n=null,e=null,i,r=new Set){let o=[e||it,Pp(t)],s;return new yi(o,n||Cr(),s||null,r)}var J=class t{static THROW_IF_NOT_FOUND=gi;static NULL=new ho;static create(n,e){if(Array.isArray(n))return vd({name:""},e,n,"");{let i=n.name??"";return vd({name:i},n.parent,n.providers,i)}}static \u0275prov=y({token:t,providedIn:"any",factory:()=>F(Ad)});static __NG_ELEMENT_ID__=-1},V=new v(""),Dt=(()=>{class t{static __NG_ELEMENT_ID__=mC;static __NG_ENV_ID__=e=>e}return t})(),aa=class extends Dt{_lView;constructor(n){super(),this._lView=n}get destroyed(){return Si(this._lView)}onDestroy(n){let e=this._lView;return Wd(e,n),()=>Wp(e,n)}};function mC(){return new aa(H())}var au=!1,dg=new v(""),Xn=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new En(!1);debugTaskTracker=u(dg,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new B(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=y({token:t,providedIn:"root",factory:()=>new t})}return t})(),_d=class extends k{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,jp()&&(this.destroyRef=u(Dt,{optional:!0})??void 0,this.pendingTasks=u(Xn,{optional:!0})??void 0)}emit(n){let e=A(null);try{super.next(n)}finally{A(e)}}subscribe(n,e,i){let r=n,o=e||(()=>null),s=i;if(n&&typeof n=="object"){let c=n;r=c.next?.bind(c),o=c.error?.bind(c),s=c.complete?.bind(c)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:r,error:o,complete:s});return n instanceof O&&n.add(a),a}wrapInTimeout(n){return e=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},Z=_d;function ca(...t){}function cu(t){let n,e;function i(){t=ca;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch(r){}}return n=setTimeout(()=>{t(),i()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),i()})),()=>i()}function ug(t){return queueMicrotask(()=>t()),()=>{t=ca}}var lu="isAngularZone",po=lu+"_ID",pC=0,S=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new Z(!1);onMicrotaskEmpty=new Z(!1);onStable=new Z(!1);onError=new Z(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=au}=n;if(typeof Zone>"u")throw new I(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!r&&i,s.shouldCoalesceRunChangeDetection=r,s.callbackScheduled=!1,s.scheduleInRootZone=o,vC(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(lu)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new I(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new I(909,!1)}run(n,e,i){return this._inner.run(n,e,i)}runTask(n,e,i,r){let o=this._inner,s=o.scheduleEventTask("NgZoneEvent: "+r,n,gC,ca,ca);try{return o.runTask(s,e,i)}finally{o.cancelTask(s)}}runGuarded(n,e,i){return this._inner.runGuarded(n,e,i)}runOutsideAngular(n){return this._outer.run(n)}},gC={};function du(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function bC(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){cu(()=>{t.callbackScheduled=!1,yd(t),t.isCheckStableRunning=!0,du(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),yd(t)}function vC(t){let n=()=>{bC(t)},e=pC++;t._inner=t._inner.fork({name:"angular",properties:{[lu]:!0,[po]:e,[po+e]:!0},onInvokeTask:(i,r,o,s,a,c)=>{if(_C(c))return i.invokeTask(o,s,a,c);try{return xp(t),i.invokeTask(o,s,a,c)}finally{(t.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),Ip(t)}},onInvoke:(i,r,o,s,a,c,l)=>{try{return xp(t),i.invoke(o,s,a,c,l)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!yC(c)&&n(),Ip(t)}},onHasTask:(i,r,o,s)=>{i.hasTask(o,s),r===o&&(s.change=="microTask"?(t._hasPendingMicrotasks=s.microTask,yd(t),du(t)):s.change=="macroTask"&&(t.hasPendingMacrotasks=s.macroTask))},onHandleError:(i,r,o,s)=>(i.handleError(o,s),t.runOutsideAngular(()=>t.onError.emit(s)),!1)})}function yd(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function xp(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function Ip(t){t._nesting--,du(t)}var go=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new Z;onMicrotaskEmpty=new Z;onStable=new Z;onError=new Z;run(n,e,i){return n.apply(e,i)}runGuarded(n,e,i){return n.apply(e,i)}runOutsideAngular(n){return n()}runTask(n,e,i,r){return n.apply(e,i)}};function _C(t){return fg(t,"__ignore_ng_zone__")}function yC(t){return fg(t,"__scheduler_tick__")}function fg(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var bt=class{_console=console;handleError(n){this._console.error("ERROR",n)}},cn=new v("",{factory:()=>{let t=u(S),n=u(we),e;return i=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw i}):(e??=n.get(bt),e.handleError(i))})}}}),hg={provide:qn,useValue:()=>{let t=u(bt,{optional:!0})},multi:!0};function me(t,n){let[e,i,r]=Bl(t,n?.equal),o=e,s=o[He];return o.set=i,o.update=r,o.asReadonly=mg.bind(o),o}function mg(){let t=this[He];if(t.readonlyFn===void 0){let n=()=>this();n[He]=t,t.readonlyFn=n}return t.readonlyFn}var Tr=(()=>{class t{view;node;constructor(e,i){this.view=e,this.node=i}static __NG_ELEMENT_ID__=DC}return t})();function DC(){return new Tr(H(),$e())}var $t=class{},Ar=new v("",{factory:()=>!0});var Ta=new v(""),Io=(()=>{class t{internalPendingTasks=u(Xn);scheduler=u($t);errorHandler=u(cn);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let i=this.add();e().catch(this.errorHandler).finally(i)}static \u0275prov=y({token:t,providedIn:"root",factory:()=>new t})}return t})(),Aa=(()=>{class t{static \u0275prov=y({token:t,providedIn:"root",factory:()=>new Dd})}return t})(),Dd=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,i=this.queues.get(e);i.has(n)&&(i.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let i=this.queues.get(e);i.has(n)||i.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,i]of this.queues)e===null?n||=this.flushQueue(i):n||=e.run(()=>this.flushQueue(i));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let i of n)i.dirty&&(this.dirtyEffectCount--,e=!0,i.run());return e}},la=class{[He];constructor(n){this[He]=n}destroy(){this[He].destroy()}};function Ni(t,n){let e=n?.injector??u(J),i=n?.manualCleanup!==!0?e.get(Dt):null,r,o=e.get(Tr,null,{optional:!0}),s=e.get($t);return o!==null?(r=wC(o.view,s,t),i instanceof aa&&i._lView===o.view&&(i=null)):r=xC(t,e.get(Aa),s),r.injector=e,i!==null&&(r.onDestroyFns=[i.onDestroy(()=>r.destroy())]),new la(r)}var pg=ie(E({},Hl),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=mo(!1);try{Ul(this)}finally{mo(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=A(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],A(t)}}}),CC=ie(E({},pg),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(Bn(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),EC=ie(E({},pg),{consumerMarkedDirty(){this.view[P]|=8192,Mi(this.view),this.notifier.notify(13)},destroy(){if(Bn(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[$n]?.delete(this)}});function wC(t,n,e){let i=Object.create(EC);return i.view=t,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=n,i.fn=gg(i,e),t[$n]??=new Set,t[$n].add(i),i.consumerMarkedDirty(i),i}function xC(t,n,e){let i=Object.create(CC);return i.fn=gg(i,t),i.scheduler=n,i.notifier=e,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function gg(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function bg(t){return function(e){return e.lift(new uu(t))}}var uu=class{constructor(n){this.durationSelector=n}call(n,e){return e.subscribe(new fu(n,this.durationSelector))}},fu=class extends It{constructor(n,e){super(n),this.durationSelector=e,this.hasValue=!1}_next(n){if(this.value=n,this.hasValue=!0,!this.throttled){let e;try{let{durationSelector:r}=this;e=r(n)}catch(r){return this.destination.error(r)}let i=nn(e,new xt(this));!i||i.closed?this.clearThrottle():this.add(this.throttled=i)}}clearThrottle(){let{value:n,hasValue:e,throttled:i}=this;i&&(this.remove(i),this.throttled=void 0,i.unsubscribe()),e&&(this.value=void 0,this.hasValue=!1,this.destination.next(n))}notifyNext(){this.clearThrottle()}notifyComplete(){this.clearThrottle()}};function Na(t,n=jn){return bg(()=>yp(t,n))}function pu(t){return function(e){let i=new hu(t),r=e.lift(i);return i.caught=r}}var hu=class{constructor(n){this.selector=n}call(n,e){return e.subscribe(new mu(n,this.selector,this.caught))}},mu=class extends It{constructor(n,e,i){super(n),this.selector=e,this.caught=i}error(n){if(!this.isStopped){let e;try{e=this.selector(n,this.caught)}catch(o){super.error(o);return}this._unsubscribeAndRecycle();let i=new xt(this);this.add(i);let r=nn(e,i);r!==i&&this.add(r)}}};function gu(t,n){return co(t,n,1)}function So(t,n=jn){return e=>e.lift(new bu(t,n))}var bu=class{constructor(n,e){this.dueTime=n,this.scheduler=e}call(n,e){return e.subscribe(new vu(n,this.dueTime,this.scheduler))}},vu=class extends j{constructor(n,e,i){super(n),this.dueTime=e,this.scheduler=i,this.debouncedSubscription=null,this.lastValue=null,this.hasValue=!1}_next(n){this.clearDebounce(),this.lastValue=n,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(IC,this.dueTime,this))}_complete(){this.debouncedNext(),this.destination.complete()}debouncedNext(){if(this.clearDebounce(),this.hasValue){let{lastValue:n}=this;this.lastValue=null,this.hasValue=!1,this.destination.next(n)}}clearDebounce(){let n=this.debouncedSubscription;n!==null&&(this.remove(n),n.unsubscribe(),this.debouncedSubscription=null)}};function IC(t){t.debouncedNext()}function vg(t){return t instanceof Date&&!isNaN(+t)}function Mo(t,n=jn){let i=vg(t)?+t-n.now():Math.abs(t);return r=>r.lift(new _u(i,n))}var _u=class{constructor(n,e){this.delay=n,this.scheduler=e}call(n,e){return e.subscribe(new yu(n,this.delay,this.scheduler))}},yu=class t extends j{constructor(n,e,i){super(n),this.delay=e,this.scheduler=i,this.queue=[],this.active=!1,this.errored=!1}static dispatch(n){let e=n.source,i=e.queue,r=n.scheduler,o=n.destination;for(;i.length>0&&i[0].time-r.now()<=0;)i.shift().notification.observe(o);if(i.length>0){let s=Math.max(0,i[0].time-r.now());this.schedule(n,s)}else this.unsubscribe(),e.active=!1}_schedule(n){this.active=!0,this.destination.add(n.schedule(t.dispatch,this.delay,{source:this,destination:this.destination,scheduler:n}))}scheduleNotification(n){if(this.errored===!0)return;let e=this.scheduler,i=new Du(e.now()+this.delay,n);this.queue.push(i),this.active===!1&&this._schedule(e)}_next(n){this.scheduleNotification(_t.createNext(n))}_error(n){this.errored=!0,this.queue=[],this.destination.error(n),this.unsubscribe()}_complete(){this.scheduleNotification(_t.createComplete()),this.unsubscribe()}},Du=class{constructor(n,e){this.time=n,this.notification=e}};function Ra(t,n){return e=>e.lift(new Cu(t,n))}var Cu=class{constructor(n,e){this.compare=n,this.keySelector=e}call(n,e){return e.subscribe(new Eu(n,this.compare,this.keySelector))}},Eu=class extends j{constructor(n,e,i){super(n),this.keySelector=i,this.hasKey=!1,typeof e=="function"&&(this.compare=e)}compare(n,e){return n===e}_next(n){let e;try{let{keySelector:r}=this;e=r?r(n):n}catch(r){return this.destination.error(r)}let i=!1;if(this.hasKey)try{let{compare:r}=this;i=r(this.key,e)}catch(r){return this.destination.error(r)}else this.hasKey=!0;i||(this.key=e,this.destination.next(n))}};function Ri(t){return n=>t===0?hr():n.lift(new wu(t))}var wu=class{constructor(n){if(this.total=n,this.total<0)throw new ap}call(n,e){return e.subscribe(new xu(n,this.total))}},xu=class extends j{constructor(n,e){super(n),this.total=e,this.count=0}_next(n){let e=this.total,i=++this.count;i<=e&&(this.destination.next(n),i===e&&(this.destination.complete(),this.unsubscribe()))}};function ko(t){return n=>n.lift(new Iu(t))}var Iu=class{constructor(n){this.callback=n}call(n,e){return e.subscribe(new Su(n,this.callback))}},Su=class extends j{constructor(n,e){super(n),this.add(new O(e))}};function _g(t,n){return function(i){let r;if(typeof t=="function"?r=t:r=function(){return t},typeof n=="function")return i.lift(new Mu(r,n));let o=Object.create(i,op);return o.source=i,o.subjectFactory=r,o}}var Mu=class{constructor(n,e){this.subjectFactory=n,this.selector=e}call(n,e){let{selector:i}=this,r=this.subjectFactory(),o=i(r).subscribe(n);return o.add(e.subscribe(r)),o}};function Oa(){return t=>t.lift(new ku)}var ku=class{call(n,e){return e.subscribe(new Tu(n))}},Tu=class extends j{constructor(n){super(n),this.hasPrev=!1}_next(n){let e;this.hasPrev?e=[this.prev,n]:this.hasPrev=!0,this.prev=n,e&&this.destination.next(e)}};function SC(){return new k}function Au(){return t=>zs()(_g(SC)(t))}function Fa(t,n,e){let i;return t&&typeof t=="object"?i=t:i={bufferSize:t,windowTime:n,refCount:!1,scheduler:e},r=>r.lift(MC(i))}function MC({bufferSize:t=Number.POSITIVE_INFINITY,windowTime:n=Number.POSITIVE_INFINITY,refCount:e,scheduler:i}){let r,o=0,s,a=!1,c=!1;return function(d){o++;let f;!r||a?(a=!1,r=new Ks(t,n,i),f=r.subscribe(this),s=d.subscribe({next(h){r.next(h)},error(h){a=!0,r.error(h)},complete(){c=!0,s=void 0,r.complete()}}),c&&(s=void 0)):f=r.subscribe(this),this.add(()=>{o--,f.unsubscribe(),f=void 0,s&&!c&&e&&o===0&&(s.unsubscribe(),s=void 0,r=void 0)})}}function Ou(t){return n=>n.lift(new Nu(t))}var Nu=class{constructor(n){this.total=n}call(n,e){return e.subscribe(new Ru(n,this.total))}},Ru=class extends j{constructor(n,e){super(n),this.total=e,this.count=0}_next(n){++this.count>this.total&&this.destination.next(n)}};function be(...t){let n=t[t.length-1];return Ht(n)?(t.pop(),e=>rd(t,e,n)):e=>rd(t,e)}function Yt(t,n){return typeof n=="function"?e=>e.pipe(Yt((i,r)=>Ut(t(i,r)).pipe(ee((o,s)=>n(i,o,r,s))))):e=>e.lift(new Fu(t))}var Fu=class{constructor(n){this.project=n}call(n,e){return e.subscribe(new Pu(n,this.project))}},Pu=class extends It{constructor(n,e){super(n),this.project=e,this.index=0}_next(n){let e,i=this.index++;try{e=this.project(n,i)}catch(r){this.destination.error(r);return}this._innerSub(e)}_innerSub(n){let e=this.innerSubscription;e&&e.unsubscribe();let i=new xt(this),r=this.destination;r.add(i),this.innerSubscription=nn(n,i),this.innerSubscription!==i&&r.add(this.innerSubscription)}_complete(){let{innerSubscription:n}=this;(!n||n.closed)&&super._complete(),this.unsubscribe()}_unsubscribe(){this.innerSubscription=void 0}notifyComplete(){this.innerSubscription=void 0,this.isStopped&&super._complete()}notifyNext(n){this.destination.next(n)}};function le(t){return n=>n.lift(new Lu(t))}var Lu=class{constructor(n){this.notifier=n}call(n,e){let i=new Vu(n),r=nn(this.notifier,new xt(i));return r&&!i.seenValue?(i.add(r),e.subscribe(i)):i}},Vu=class extends It{constructor(n){super(n),this.seenValue=!1}notifyNext(){this.seenValue=!0,this.complete()}notifyComplete(){}};function Hu(t,n=!1){return e=>e.lift(new Bu(t,n))}var Bu=class{constructor(n,e){this.predicate=n,this.inclusive=e}call(n,e){return e.subscribe(new ju(n,this.predicate,this.inclusive))}},ju=class extends j{constructor(n,e,i){super(n),this.predicate=e,this.inclusive=i,this.index=0}_next(n){let e=this.destination,i;try{i=this.predicate(n,this.index++)}catch(r){e.error(r);return}this.nextOrComplete(n,i)}nextOrComplete(n,e){let i=this.destination;e?i.next(n):(this.inclusive&&i.next(n),i.complete())}};function Ct(t,n,e){return function(r){return r.lift(new Uu(t,n,e))}}var Uu=class{constructor(n,e,i){this.nextOrObserver=n,this.error=e,this.complete=i}call(n,e){return e.subscribe(new $u(n,this.nextOrObserver,this.error,this.complete))}},$u=class extends j{constructor(n,e,i,r){super(n),this._tapNext=wn,this._tapError=wn,this._tapComplete=wn,this._tapError=i||wn,this._tapComplete=r||wn,hi(e)?(this._context=this,this._tapNext=e):e&&(this._context=e,this._tapNext=e.next||wn,this._tapError=e.error||wn,this._tapComplete=e.complete||wn)}_next(n){try{this._tapNext.call(this._context,n)}catch(e){this.destination.error(e);return}this.destination.next(n)}_error(n){try{this._tapError.call(this._context,n)}catch(e){this.destination.error(e);return}this.destination.error(n)}_complete(){try{this._tapComplete.call(this._context)}catch(n){this.destination.error(n);return}return this.destination.complete()}};function jo(t){return{toString:t}.toString()}function LC(t){return typeof t=="function"}function Qg(t,n,e,i){n!==null?n.applyValueToInputSignal(n,i):t[e]=i}var za=class{previousValue;currentValue;firstChange;constructor(n,e,i){this.previousValue=n,this.currentValue=e,this.firstChange=i}isFirstChange(){return this.firstChange}},ot=(()=>{let t=()=>Xg;return t.ngInherit=!0,t})();function Xg(t){return t.type.prototype.ngOnChanges&&(t.setInput=BC),VC}function VC(){let t=eb(this),n=t?.current;if(n){let e=t.previous;if(e===Wn)t.previous=n;else for(let i in n)e[i]=n[i];t.current=null,this.ngOnChanges(n)}}function BC(t,n,e,i,r){let o=this.declaredInputs[i],s=eb(t)||jC(t,{previous:Wn,current:null}),a=s.current||(s.current={}),c=s.previous,l=c[o];a[o]=new za(l&&l.currentValue,e,c===Wn),Qg(t,n,r,e)}var Jg="__ngSimpleChanges__";function eb(t){return t[Jg]||null}function jC(t,n){return t[Jg]=n}var yg=[];var de=function(t,n=null,e){for(let i=0;i<yg.length;i++){let r=yg[i];r(t,n,e)}},re=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(re||{});function HC(t,n,e){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=n.type.prototype;if(i){let s=Xg(n);(e.preOrderHooks??=[]).push(t,s),(e.preOrderCheckHooks??=[]).push(t,s)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function tb(t,n){for(let e=n.directiveStart,i=n.directiveEnd;e<i;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:d}=o;s&&(t.contentHooks??=[]).push(-e,s),a&&((t.contentHooks??=[]).push(e,a),(t.contentCheckHooks??=[]).push(e,a)),c&&(t.viewHooks??=[]).push(-e,c),l&&((t.viewHooks??=[]).push(e,l),(t.viewCheckHooks??=[]).push(e,l)),d!=null&&(t.destroyHooks??=[]).push(e,d)}}function Ba(t,n,e){nb(t,n,3,e)}function ja(t,n,e,i){(t[P]&3)===e&&nb(t,n,e,i)}function zu(t,n){let e=t[P];(e&3)===n&&(e&=16383,e+=1,t[P]=e)}function nb(t,n,e,i){let r=i!==void 0?t[wi]&65535:0,o=i??-1,s=n.length-1,a=0;for(let c=r;c<s;c++)if(typeof n[c+1]=="number"){if(a=n[c],i!=null&&a>=i)break}else n[c]<0&&(t[wi]+=65536),(a<o||o==-1)&&(UC(t,e,n,c),t[wi]=(t[wi]&4294901760)+c+2),c++}function Dg(t,n){de(re.LifecycleHookStart,t,n);let e=A(null);try{n.call(t)}finally{A(e),de(re.LifecycleHookEnd,t,n)}}function UC(t,n,e,i){let r=e[i]<0,o=e[i+1],s=r?-e[i]:e[i],a=t[s];r?t[P]>>14<t[wi]>>16&&(t[P]&3)===n&&(t[P]+=16384,Dg(a,o)):Dg(a,o)}var Rr=-1,Fi=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,i,r){this.factory=n,this.name=r,this.canSeeViewProviders=e,this.injectImpl=i}};function $C(t){return(t.flags&8)!==0}function zC(t){return(t.flags&16)!==0}function GC(t,n,e){let i=0;for(;i<e.length;){let r=e[i];if(typeof r=="number"){if(r!==0)break;i++;let o=e[i++],s=e[i++],a=e[i++];t.setAttribute(n,s,a,o)}else{let o=r,s=e[++i];WC(o)?t.setProperty(n,o,s):t.setAttribute(n,o,s),i++}}return i}function ib(t){return t===3||t===4||t===6}function WC(t){return t.charCodeAt(0)===64}function Or(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let i=0;i<n.length;i++){let r=n[i];typeof r=="number"?e=r:e===0||(e===-1||e===2?Cg(t,e,r,null,n[++i]):Cg(t,e,r,null,null))}}return t}function Cg(t,n,e,i,r){let o=0,s=t.length;if(n===-1)s=-1;else for(;o<t.length;){let a=t[o++];if(typeof a=="number"){if(a===n){s=-1;break}else if(a>n){s=o-1;break}}}for(;o<t.length;){let a=t[o];if(typeof a=="number")break;if(a===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}s!==-1&&(t.splice(s,0,n),o=s+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function rb(t){return t!==Rr}function Ga(t){return t&32767}function qC(t){return t>>16}function Wa(t,n){let e=qC(t),i=n;for(;e>0;)i=i[Ei],e--;return i}var ef=!0;function qa(t){let n=ef;return ef=t,n}var YC=256,ob=YC-1,sb=5,ZC=0,ln={};function KC(t,n,e){let i;typeof e=="string"?i=e.charCodeAt(0)||0:e.hasOwnProperty(Di)&&(i=e[Di]),i==null&&(i=e[Di]=ZC++);let r=i&ob,o=1<<r;n.data[t+(r>>sb)]|=o}function Ya(t,n){let e=ab(t,n);if(e!==-1)return e;let i=n[T];i.firstCreatePass&&(t.injectorIndex=n.length,Gu(i.data,t),Gu(n,null),Gu(i.blueprint,null));let r=Vf(t,n),o=t.injectorIndex;if(rb(r)){let s=Ga(r),a=Wa(r,n),c=a[T].data;for(let l=0;l<8;l++)n[o+l]=a[s+l]|c[s+l]}return n[o+8]=r,o}function Gu(t,n){t.push(0,0,0,0,0,0,0,0,n)}function ab(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function Vf(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,i=null,r=n;for(;r!==null;){if(i=fb(r),i===null)return Rr;if(e++,r=r[Ei],i.injectorIndex!==-1)return i.injectorIndex|e<<16}return Rr}function tf(t,n,e){KC(t,n,e)}function QC(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let i=e.length,r=0;for(;r<i;){let o=e[r];if(ib(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<i&&typeof e[r]=="string";)r++;else{if(o===n)return e[r+1];r=r+2}}}return null}function cb(t,n,e){if(e&8||t!==void 0)return t;pa(n,"NodeInjector")}function lb(t,n,e,i){if(e&8&&i===void 0&&(i=null),(e&3)===0){let r=t[In],o=ut(void 0);try{return r?r.get(n,i,e&8):kd(n,i,e&8)}finally{ut(o)}}return cb(i,n,e)}function db(t,n,e,i=0,r){if(t!==null){if(n[P]&2048&&!(i&2)){let s=tE(t,n,e,i,ln);if(s!==ln)return s}let o=ub(t,n,e,i,ln);if(o!==ln)return o}return lb(n,e,i,r)}function ub(t,n,e,i,r){let o=JC(e);if(typeof o=="function"){if(!ru(n,t,i))return i&1?cb(r,e,i):lb(n,e,i,r);try{let s;if(s=o(i),s==null&&!(i&8))pa(e);else return s}finally{ou()}}else if(typeof o=="number"){let s=null,a=ab(t,n),c=Rr,l=i&1?n[ht][ft]:null;for((a===-1||i&4)&&(c=a===-1?Vf(t,n):n[a+8],c===Rr||!wg(i,!1)?a=-1:(s=n[T],a=Ga(c),n=Wa(c,n)));a!==-1;){let d=n[T];if(Eg(o,a,d.data)){let f=XC(a,n,e,s,i,l);if(f!==ln)return f}c=n[a+8],c!==Rr&&wg(i,n[T].data[a+8]===l)&&Eg(o,a,n)?(s=d,a=Ga(c),n=Wa(c,n)):a=-1}}return r}function XC(t,n,e,i,r,o){let s=n[T],a=s.data[t+8],c=i==null?kn(a)&&ef:i!=s&&(a.type&3)!==0,l=r&1&&o===a,d=Ha(a,s,e,c,l);return d!==null?Ro(n,s,d,a,r):ln}function Ha(t,n,e,i,r){let o=t.providerIndexes,s=n.data,a=o&1048575,c=t.directiveStart,l=t.directiveEnd,d=o>>20,f=i?a:a+d,h=r?a+d:l;for(let m=f;m<h;m++){let _=s[m];if(m<c&&e===_||m>=c&&_.type===e)return m}if(r){let m=s[c];if(m&&an(m)&&m.type===e)return c}return null}function Ro(t,n,e,i,r){let o=t[e],s=n.data;if(o instanceof Fi){let a=o;if(a.resolving)throw Md("");let c=qa(a.canSeeViewProviders);a.resolving=!0;let l=s[e].type||s[e],d,f=a.injectImpl?ut(a.injectImpl):null,h=ru(t,i,0);try{o=t[e]=a.factory(void 0,r,s,t,i),n.firstCreatePass&&e>=i.directiveStart&&HC(e,s[e],n)}finally{f!==null&&ut(f),qa(c),a.resolving=!1,ou()}}return o}function JC(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=t.hasOwnProperty(Di)?t[Di]:void 0;return typeof n=="number"?n>=0?n&ob:eE:n}function Eg(t,n,e){let i=1<<t;return!!(e[n+(t>>sb)]&i)}function wg(t,n){return!(t&2)&&!(t&1&&n)}var Oi=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,i){return db(this._tNode,this._lView,n,vi(i),e)}};function eE(){return new Oi($e(),H())}function fn(t){return jo(()=>{let n=t.prototype.constructor,e=n[fo]||nf(n),i=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==i;){let o=r[fo]||nf(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function nf(t){return Cd(t)?()=>{let n=nf(Qe(t));return n&&n()}:Un(t)}function tE(t,n,e,i,r){let o=t,s=n;for(;o!==null&&s!==null&&s[P]&2048&&!Sr(s);){let a=ub(o,s,e,i|2,ln);if(a!==ln)return a;let c=o.parent;if(!c){let l=s[Ld];if(l){let d=l.get(e,ln,i&-5);if(d!==ln)return d}c=fb(s),s=s[Ei]}o=c}return r}function fb(t){let n=t[T],e=n.type;return e===2?n.declTNode:e===1?t[ft]:null}function Bf(t){return QC($e(),t)}function nE(){return Br($e(),H())}function Br(t,n){return new N(Wt(t,n))}var N=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=nE}return t})();function hb(t){return t instanceof N?t.nativeElement:t}function iE(){return this._results[Symbol.iterator]()}var Pi=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new k}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let i=Rp(n);(this._changesDetected=!Np(this._results,i,e))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=iE};function mb(t){return(t.flags&128)===128}var jf=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(jf||{}),pb=new Map,rE=0;function oE(){return rE++}function sE(t){pb.set(t[Sn],t)}function rf(t){pb.delete(t[Sn])}var xg="__ngContext__";function Fr(t,n){Mn(n)?(t[xg]=n[Sn],sE(n)):t[xg]=n}function gb(t){return vb(t[xr])}function bb(t){return vb(t[St])}function vb(t){for(;t!==null&&!Gt(t);)t=t[St];return t}var aE;function Hf(t){aE=t}var ei=new v("",{factory:()=>cE}),cE="ng";var ic=new v(""),ji=new v("",{providedIn:"platform",factory:()=>"unknown"}),Ho=new v(""),Hi=new v("",{factory:()=>u(V).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var _b="r";var yb="di";var Db=!1,Cb=new v("",{factory:()=>Db});var Ig=new WeakMap;function lE(t,n){if(t==null||typeof t!="object")return;let e=Ig.get(t);e||(e=new WeakSet,Ig.set(t,e)),e.add(n)}var dE=(t,n,e,i)=>{};function uE(t,n,e,i){dE(t,n,e,i)}function rc(t){return(t.flags&32)===32}var fE=()=>null;function Eb(t,n,e=!1){return fE(t,n,e)}function wb(t,n){let e=t.contentQueries;if(e!==null){let i=A(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],s=e[r+1];if(s!==-1){let a=t.data[s];wo(o),a.contentQueries(2,n[s],s)}}}finally{A(i)}}}function of(t,n,e){wo(0);let i=A(null);try{n(t,e)}finally{A(i)}}function Uf(t,n,e){if(Bd(n)){let i=A(null);try{let r=n.directiveStart,o=n.directiveEnd;for(let s=r;s<o;s++){let a=t.data[s];if(a.contentQueries){let c=e[s];a.contentQueries(1,c,s)}}}finally{A(i)}}}var Qt=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(Qt||{});var Pa;function hE(){if(Pa===void 0&&(Pa=null,yr.trustedTypes))try{Pa=yr.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch(t){}return Pa}function oc(t){return hE()?.createHTML(t)||t}var An=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${da})`}},sf=class extends An{getTypeName(){return"HTML"}},af=class extends An{getTypeName(){return"Style"}},cf=class extends An{getTypeName(){return"Script"}},lf=class extends An{getTypeName(){return"URL"}},df=class extends An{getTypeName(){return"ResourceURL"}};function Nn(t){return t instanceof An?t.changingThisBreaksApplicationSecurity:t}function Ui(t,n){let e=xb(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${da})`)}return e===n}function xb(t){return t instanceof An&&t.getTypeName()||null}function $f(t){return new sf(t)}function zf(t){return new af(t)}function Gf(t){return new cf(t)}function Wf(t){return new lf(t)}function qf(t){return new df(t)}function mE(t){let n=new ff(t);return pE()?new uf(n):n}var uf=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n="<body><remove></remove>"+n;try{let e=new window.DOMParser().parseFromString(oc(n),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(n):(e.firstChild?.remove(),e)}catch(e){return null}}},ff=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(n){let e=this.inertDocument.createElement("template");return e.innerHTML=oc(n),e}};function pE(){try{return!!new window.DOMParser().parseFromString(oc(""),"text/html")}catch(t){return!1}}var gE=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function sc(t){return t=String(t),t.match(gE)?t:"unsafe:"+t}function Rn(t){let n={};for(let e of t.split(","))n[e]=!0;return n}function Uo(...t){let n={};for(let e of t)for(let i in e)e.hasOwnProperty(i)&&(n[i]=!0);return n}var Ib=Rn("area,br,col,hr,img,wbr"),Sb=Rn("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),Mb=Rn("rp,rt"),bE=Uo(Mb,Sb),vE=Uo(Sb,Rn("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),_E=Uo(Mb,Rn("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),Sg=Uo(Ib,vE,_E,bE),kb=Rn("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),yE=Rn("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),DE=Rn("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),CE=Uo(kb,yE,DE),EE=Rn("script,style,template"),hf=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let e=n.firstChild,i=!0,r=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?i=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,i&&e.firstChild){r.push(e),e=IE(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=xE(e);if(o){e=o;break}e=r.pop()}}return this.buf.join("")}startElement(n){let e=Mg(n).toLowerCase();if(!Sg.hasOwnProperty(e))return this.sanitizedSomething=!0,!EE.hasOwnProperty(e);this.buf.push("<"),this.buf.push(e);let i=n.attributes;for(let r=0;r<i.length;r++){let o=i.item(r),s=o.name,a=s.toLowerCase();if(!CE.hasOwnProperty(a)){this.sanitizedSomething=!0;continue}let c=o.value;kb[a]&&(c=sc(c)),this.buf.push(" ",s,'="',kg(c),'"')}return this.buf.push(">"),!0}endElement(n){let e=Mg(n).toLowerCase();Sg.hasOwnProperty(e)&&!Ib.hasOwnProperty(e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(n){this.buf.push(kg(n))}};function wE(t,n){return(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function xE(t){let n=t.nextSibling;if(n&&t!==n.previousSibling)throw Tb(n);return n}function IE(t){let n=t.firstChild;if(n&&wE(t,n))throw Tb(n);return n}function Mg(t){let n=t.nodeName;return typeof n=="string"?n:"FORM"}function Tb(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var SE=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,ME=/([^\#-~ |!])/g;function kg(t){return t.replace(/&/g,"&amp;").replace(SE,function(n){let e=n.charCodeAt(0),i=n.charCodeAt(1);return"&#"+((e-55296)*1024+(i-56320)+65536)+";"}).replace(ME,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var La;function Yf(t,n){let e=null;try{La=La||mE(t);let i=n?String(n):"";e=La.getInertBodyElement(i);let r=5,o=i;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,i=o,o=e.innerHTML,e=La.getInertBodyElement(i)}while(i!==o);let a=new hf().sanitizeChildren(Tg(e)||e);return oc(a)}finally{if(e){let i=Tg(e)||e;for(;i.firstChild;)i.firstChild.remove()}}}function Tg(t){return"content"in t&&kE(t)?t.content:null}function kE(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}var TE=/^>|^->|<!--|-->|--!>|<!-$/g,AE=/(<|>)/g,NE="\u200B$1\u200B";function RE(t){return t.replace(TE,n=>n.replace(AE,NE))}function OE(t,n){return t.createText(n)}function FE(t,n,e){t.setValue(n,e)}function PE(t,n){return t.createComment(RE(n))}function Ab(t,n,e){return t.createElement(n,e)}function Za(t,n,e,i,r){t.insertBefore(n,e,i,r)}function Nb(t,n,e){t.appendChild(n,e)}function Ag(t,n,e,i,r){i!==null?Za(t,n,e,i,r):Nb(t,n,e)}function Rb(t,n,e,i){t.removeChild(null,n,e,i)}function LE(t,n,e){t.setAttribute(n,"style",e)}function VE(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function Ob(t,n,e){let{mergedAttrs:i,classes:r,styles:o}=e;i!==null&&GC(t,n,i),r!==null&&VE(t,n,r),o!==null&&LE(t,n,o)}var Xe=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t[t.ATTRIBUTE_NO_BINDING=6]="ATTRIBUTE_NO_BINDING",t})(Xe||{});function BE(t,n,e){let i=t.length;for(;;){let r=t.indexOf(n,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=n.length;if(r+o===i||t.charCodeAt(r+o)<=32)return r}e=r+1}}var Fb="ng-template";function jE(t,n,e,i){let r=0;if(i){for(;r<n.length&&typeof n[r]=="string";r+=2)if(n[r]==="class"&&BE(n[r+1].toLowerCase(),e,0)!==-1)return!0}else if(Zf(t))return!1;if(r=n.indexOf(1,r),r>-1){let o;for(;++r<n.length&&typeof(o=n[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function Zf(t){return t.type===4&&t.value!==Fb}function HE(t,n,e){let i=t.type===4&&!e?Fb:t.value;return n===i}function UE(t,n,e){let i=4,r=t.attrs,o=r!==null?GE(r):0,s=!1;for(let a=0;a<n.length;a++){let c=n[a];if(typeof c=="number"){if(!s&&!Zt(i)&&!Zt(c))return!1;if(s&&Zt(c))continue;s=!1,i=c|i&1;continue}if(!s)if(i&4){if(i=2|i&1,c!==""&&!HE(t,c,e)||c===""&&n.length===1){if(Zt(i))return!1;s=!0}}else if(i&8){if(r===null||!jE(t,r,c,e)){if(Zt(i))return!1;s=!0}}else{let l=n[++a],d=$E(c,r,Zf(t),e);if(d===-1){if(Zt(i))return!1;s=!0;continue}if(l!==""){let f;if(d>o?f="":f=r[d+1].toLowerCase(),i&2&&l!==f){if(Zt(i))return!1;s=!0}}}}return Zt(i)||s}function Zt(t){return(t&1)===0}function $E(t,n,e,i){if(n===null)return-1;let r=0;if(i||!e){let o=!1;for(;r<n.length;){let s=n[r];if(s===t)return r;if(s===3||s===6)o=!0;else if(s===1||s===2){let a=n[++r];for(;typeof a=="string";)a=n[++r];continue}else{if(s===4)break;if(s===0){r+=4;continue}}r+=o?1:2}return-1}else return WE(n,t)}function Pb(t,n,e=!1){for(let i=0;i<n.length;i++)if(UE(t,n[i],e))return!0;return!1}function zE(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function GE(t){for(let n=0;n<t.length;n++){let e=t[n];if(ib(e))return n}return t.length}function WE(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let i=t[e];if(typeof i=="number")return-1;if(i===n)return e;e++}return-1}function qE(t,n){e:for(let e=0;e<n.length;e++){let i=n[e];if(t.length===i.length){for(let r=0;r<t.length;r++)if(t[r]!==i[r])continue e;return!0}}return!1}function Ng(t,n){return t?":not("+n.trim()+")":n}function YE(t){let n=t[0],e=1,i=2,r="",o=!1;for(;e<t.length;){let s=t[e];if(typeof s=="string")if(i&2){let a=t[++e];r+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+s:i&4&&(r+=" "+s);else r!==""&&!Zt(s)&&(n+=Ng(o,r),r=""),i=s,o=o||!Zt(i);e++}return r!==""&&(n+=Ng(o,r)),n}function ZE(t){return t.map(YE).join(",")}function KE(t){let n=[],e=[],i=1,r=2;for(;i<t.length;){let o=t[i];if(typeof o=="string")r===2?o!==""&&n.push(o,t[++i]):r===8&&e.push(o);else{if(!Zt(r))break;r=o}i++}return e.length&&n.push(1,...e),n}var At={};function Kf(t,n,e,i,r,o,s,a,c,l,d){let f=_e+i,h=f+r,m=QE(f,h),_=typeof l=="function"?l():l;return m[T]={type:t,blueprint:m,template:e,queries:null,viewQuery:a,declTNode:n,data:m.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:c,consts:_,incompleteFirstPass:!1,ssrId:d}}function QE(t,n){let e=[];for(let i=0;i<n;i++)e.push(i<t?null:At);return e}function XE(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=Kf(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function Qf(t,n,e,i,r,o,s,a,c,l,d){let f=n.blueprint.slice();return f[zt]=r,f[P]=i|4|128|8|64|1024,(l!==null||t&&t[P]&2048)&&(f[P]|=2048),zd(f),f[Fe]=f[Ei]=t,f[xe]=e,f[on]=s||t&&t[on],f[pe]=a||t&&t[pe],f[In]=c||t&&t[In]||null,f[ft]=o,f[Sn]=oE(),f[Ci]=d,f[Ld]=l,f[ht]=n.type==2?t[ht]:f,f}function JE(t,n,e){let i=Wt(n,t),r=XE(e),o=t[on].rendererFactory,s=Xf(t,Qf(t,r,null,Lb(e),i,n,null,o.createRenderer(i,e),null,null,null));return t[n.index]=s}function Lb(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function Vb(t,n,e,i){if(e===0)return-1;let r=n.length;for(let o=0;o<e;o++)n.push(i),t.blueprint.push(i),t.data.push(null);return r}function Xf(t,n){return t[xr]?t[Pd][St]=n:t[xr]=n,t[Pd]=n,n}function b(t=1){Bb(De(),H(),Tn()+t,!1)}function Bb(t,n,e,i){if(!i)if((n[P]&3)===3){let o=t.preOrderCheckHooks;o!==null&&Ba(n,o,e)}else{let o=t.preOrderHooks;o!==null&&ja(n,o,0,e)}Qn(e)}var ac=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(ac||{});function mf(t,n,e,i){let r=A(null);try{let[o,s,a]=t.inputs[e],c=null;(s&ac.SignalBased)!==0&&(c=n[o][He]),c!==null&&c.transformFn!==void 0?i=c.transformFn(i):a!==null&&(i=a.call(n,i)),t.setInput!==null?t.setInput(n,c,i,e,o):Qg(n,c,o,i)}finally{A(r)}}var dn=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(dn||{}),ew;function Jf(t,n){return ew(t,n)}var VP=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var pf=new WeakMap,To=new WeakSet;function tw(t,n){let e=pf.get(t);if(!e||e.length===0)return;let i=n.parentNode,r=n.previousSibling;for(let o=e.length-1;o>=0;o--){let s=e[o],a=s.parentNode;s===n?(e.splice(o,1),To.add(s),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(r&&s===r||a&&i&&a!==i)&&(e.splice(o,1),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),s.parentNode?.removeChild(s))}}function nw(t,n){let e=pf.get(t);e?e.includes(n)||e.push(n):pf.set(t,[n])}var Li=new Set,cc=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(cc||{}),Xt=new v(""),Rg=new Set;function ti(t){Rg.has(t)||(Rg.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var lc=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=y({token:t,providedIn:"root",factory:()=>new t})}return t})(),eh=[0,1,2,3],th=(()=>{class t{ngZone=u(S);scheduler=u($t);errorHandler=u(bt,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){u(Xt,{optional:!0})}execute(){let e=this.sequences.size>0;e&&de(re.AfterRenderHooksStart),this.executing=!0;for(let i of eh)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[i];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&de(re.AfterRenderHooksEnd)}register(e){let{view:i}=e;i!==void 0?((i[xi]??=[]).push(e),Mi(i),i[P]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,i){return i?i.run(cc.AFTER_NEXT_RENDER,e):e()}static \u0275prov=y({token:t,providedIn:"root",factory:()=>new t})}return t})(),Oo=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,i,r,o,s=null){this.impl=n,this.hooks=e,this.view=i,this.once=r,this.snapshot=s,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[xi];n&&(this.view[xi]=n.filter(e=>e!==this))}};function hn(t,n){let e=n?.injector??u(J);return ti("NgAfterNextRender"),rw(t,e,n,!0)}function iw(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function rw(t,n,e,i){let r=n.get(lc);r.impl??=n.get(th);let o=n.get(Xt,null,{optional:!0}),s=e?.manualCleanup!==!0?n.get(Dt):null,a=n.get(Tr,null,{optional:!0}),c=new Oo(r.impl,iw(t),a?.view,i,s,o?.snapshot(null));return r.impl.register(c),c}var jb=new v("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:u(we)})});function Hb(t,n,e){let i=t.get(jb);if(Array.isArray(n))for(let r of n)i.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else i.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);i.scheduler&&i.scheduler(t)}function ow(t,n){let e=t.get(jb);if(n.detachedLeaveAnimationFns){for(let i of n.detachedLeaveAnimationFns)e.queue.delete(i);n.detachedLeaveAnimationFns=void 0}}function sw(t,n){for(let[e,i]of n)Hb(t,i.animateFns)}function Og(t,n,e,i){let r=t?.[Zn]?.enter;n!==null&&r&&r.has(e.index)&&sw(i,r)}function Nr(t,n,e,i,r,o,s,a){if(r!=null){let c,l=!1;Gt(r)?c=r:Mn(r)&&(l=!0,r=r[zt]);let d=Mt(r);t===0&&i!==null?(Og(a,i,o,e),s==null?Nb(n,i,d):Za(n,i,d,s||null,!0)):t===1&&i!==null?(Og(a,i,o,e),Za(n,i,d,s||null,!0),tw(o,d)):t===2?(a?.[Zn]?.leave?.has(o.index)&&nw(o,d),To.delete(d),Fg(a,o,e,f=>{if(To.has(d)){To.delete(d);return}Rb(n,d,l,f)})):t===3&&(To.delete(d),Fg(a,o,e,()=>{n.destroyNode(d)})),c!=null&&bw(n,t,e,c,o,i,s)}}function aw(t,n){Ub(t,n),n[zt]=null,n[ft]=null}function cw(t,n,e,i,r,o){i[zt]=r,i[ft]=n,uc(t,i,e,1,r,o)}function Ub(t,n){n[on].changeDetectionScheduler?.notify(9),uc(t,n,n[pe],2,null,null)}function lw(t){let n=t[xr];if(!n)return Wu(t[T],t);for(;n;){let e=null;if(Mn(n))e=n[xr];else{let i=n[Ee];i&&(e=i)}if(!e){for(;n&&!n[St]&&n!==t;)Mn(n)&&Wu(n[T],n),n=n[Fe];n===null&&(n=t),Mn(n)&&Wu(n[T],n),e=n&&n[St]}n=e}}function nh(t,n){let e=t[Ii],i=e.indexOf(n);e.splice(i,1)}function dc(t,n){if(Si(n))return;let e=n[pe];e.destroyNode&&uc(t,n,e,3,null,null),lw(n)}function Wu(t,n){if(Si(n))return;let e=A(null);try{n[P]&=-129,n[P]|=256,n[yt]&&Bn(n[yt]),fw(t,n),uw(t,n),n[T].type===1&&n[pe].destroy();let i=n[Yn];if(i!==null&&Gt(n[Fe])){i!==n[Fe]&&nh(i,n);let r=n[sn];r!==null&&r.detachView(t)}rf(n)}finally{A(e)}}function Fg(t,n,e,i){let r=t?.[Zn];if(r==null||r.leave==null||!r.leave.has(n.index))return i(!1);t&&Li.add(t[Sn]),Hb(e,()=>{if(r.leave&&r.leave.has(n.index)){let s=r.leave.get(n.index),a=[];if(s){for(let c=0;c<s.animateFns.length;c++){let l=s.animateFns[c],{promise:d}=l();a.push(d)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(a),dw(t,i)}else t&&Li.delete(t[Sn]),i(!1)},r)}function dw(t,n){let e=t[Zn]?.running;if(e){e.then(()=>{t[Zn].running=void 0,Li.delete(t[Sn]),n(!0)});return}n(!1)}function uw(t,n){let e=t.cleanup,i=n[wr];if(e!==null)for(let s=0;s<e.length-1;s+=2)if(typeof e[s]=="string"){let a=e[s+3];a>=0?i[a]():i[-a].unsubscribe(),s+=2}else{let a=i[e[s+1]];e[s].call(a)}i!==null&&(n[wr]=null);let r=n[xn];if(r!==null){n[xn]=null;for(let s=0;s<r.length;s++){let a=r[s];a()}}let o=n[$n];if(o!==null){n[$n]=null;for(let s of o)s.destroy()}}function fw(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let i=0;i<e.length;i+=2){let r=n[e[i]];if(!(r instanceof Fi)){let o=e[i+1];if(Array.isArray(o))for(let s=0;s<o.length;s+=2){let a=r[o[s]],c=o[s+1];de(re.LifecycleHookStart,a,c);try{c.call(a)}finally{de(re.LifecycleHookEnd,a,c)}}else{de(re.LifecycleHookStart,r,o);try{o.call(r)}finally{de(re.LifecycleHookEnd,r,o)}}}}}function $b(t,n,e){return hw(t,n.parent,e)}function hw(t,n,e){let i=n;for(;i!==null&&i.type&168;)n=i,i=n.parent;if(i===null)return e[zt];if(kn(i)){let{encapsulation:r}=t.data[i.directiveStart+i.componentOffset];if(r===Qt.None||r===Qt.Emulated)return null}return Wt(i,e)}function zb(t,n,e){return pw(t,n,e)}function mw(t,n,e){return t.type&40?Wt(t,e):null}var pw=mw,Pg;function ih(t,n,e,i){let r=$b(t,i,n),o=n[pe],s=i.parent||n[ft],a=zb(s,i,n);if(r!=null)if(Array.isArray(e))for(let c=0;c<e.length;c++)Ag(o,r,e[c],a,!1);else Ag(o,r,e,a,!1);Pg!==void 0&&Pg(o,i,n,e,r)}function Ao(t,n){if(n!==null){let e=n.type;if(e&3)return Wt(n,t);if(e&4)return gf(-1,t[n.index]);if(e&8){let i=n.child;if(i!==null)return Ao(t,i);{let r=t[n.index];return Gt(r)?gf(-1,r):Mt(r)}}else{if(e&128)return Ao(t,n.next);if(e&32)return Jf(n,t)()||Mt(t[n.index]);{let i=Gb(t,n);if(i!==null){if(Array.isArray(i))return i[0];let r=zn(t[ht]);return Ao(r,i)}else return Ao(t,n.next)}}}return null}function Gb(t,n){if(n!==null){let i=t[ht][ft],r=n.projection;return i.projection[r]}return null}function gf(t,n){let e=Ee+t+1;if(e<n.length){let i=n[e],r=i[T].firstChild;if(r!==null)return Ao(i,r)}return n[Kn]}function rh(t,n,e,i,r,o,s){for(;e!=null;){let a=i[In];if(e.type===128){e=e.next;continue}let c=i[e.index],l=e.type;if(s&&n===0&&(c&&Fr(Mt(c),i),e.flags|=2),!rc(e))if(l&8)rh(t,n,e.child,i,r,o,!1),Nr(n,t,a,r,c,e,o,i);else if(l&32){let d=Jf(e,i),f;for(;f=d();)Nr(n,t,a,r,f,e,o,i);Nr(n,t,a,r,c,e,o,i)}else l&16?Wb(t,n,i,e,r,o):Nr(n,t,a,r,c,e,o,i);e=s?e.projectionNext:e.next}}function uc(t,n,e,i,r,o){rh(e,i,t.firstChild,n,r,o,!1)}function gw(t,n,e){let i=n[pe],r=$b(t,e,n),o=e.parent||n[ft],s=zb(o,e,n);Wb(i,0,n,e,r,s)}function Wb(t,n,e,i,r,o){let s=e[ht],c=s[ft].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let d=c[l];Nr(n,t,e[In],r,d,i,o,e)}else{let l=c,d=s[Fe];mb(i)&&(l.flags|=128),rh(t,n,l,d,r,o,!0)}}function bw(t,n,e,i,r,o,s){let a=i[Kn],c=Mt(i);a!==c&&Nr(n,t,e,o,a,r,s);for(let l=Ee;l<i.length;l++){let d=i[l];uc(d[T],d,t,n,o,a)}}function vw(t,n,e,i,r){if(n)r?t.addClass(e,i):t.removeClass(e,i);else{let o=i.indexOf("-")===-1?void 0:dn.DashCase;r==null?t.removeStyle(e,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=dn.Important),t.setStyle(e,i,r,o))}}function qb(t,n,e,i,r){let o=Tn(),s=i&2;try{Qn(-1),s&&n.length>_e&&Bb(t,n,_e,!1);let a=s?re.TemplateUpdateStart:re.TemplateCreateStart;de(a,r,e),e(i,r)}finally{Qn(o);let a=s?re.TemplateUpdateEnd:re.TemplateCreateEnd;de(a,r,e)}}function fc(t,n,e){xw(t,n,e),(e.flags&64)===64&&Iw(t,n,e)}function $o(t,n,e=Wt){let i=n.localNames;if(i!==null){let r=n.index+1;for(let o=0;o<i.length;o+=2){let s=i[o+1],a=s===-1?e(n,t):t[s];t[r++]=a}}}function _w(t,n,e,i){let o=i.get(Cb,Db)||e===Qt.ShadowDom||e===Qt.ExperimentalIsolatedShadowDom,s=t.selectRootElement(n,o);return yw(s),s}function yw(t){Dw(t)}var Dw=()=>null;function Cw(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function Ew(t,n,e,i,r,o){let s=n[T];if(ch(t,s,n,e,i)){kn(t)&&ww(n,t.index);return}t.type&3&&(e=Cw(e)),Yb(t,n,e,i,r,o)}function Yb(t,n,e,i,r,o){if(t.type&3){let s=Wt(t,n);i=o!=null?o(i,t.value||"",e):i,r.setProperty(s,e,i)}else t.type&12}function ww(t,n){let e=kt(n,t);e[P]&16||(e[P]|=64)}function xw(t,n,e){let i=e.directiveStart,r=e.directiveEnd;kn(e)&&JE(n,e,t.data[i+e.componentOffset]),t.firstCreatePass||Ya(e,n);let o=e.initialInputs;for(let s=i;s<r;s++){let a=t.data[s],c=Ro(n,t,s,e);if(Fr(c,n),o!==null&&Tw(n,s-i,c,a,e,o),an(a)){let l=kt(e.index,n);l[xe]=Ro(n,t,s,e)}}}function Iw(t,n,e){let i=e.directiveStart,r=e.directiveEnd,o=e.index,s=ng();try{Qn(o);for(let a=i;a<r;a++){let c=t.data[a],l=n[a];wa(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&Sw(c,l)}}finally{Qn(-1),wa(s)}}function Sw(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function oh(t,n){let e=t.directiveRegistry,i=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];Pb(n,o.selectors,!1)&&(i??=[],an(o)?i.unshift(o):i.push(o))}return i}function Mw(t,n,e,i,r,o){let s=Wt(t,n);kw(n[pe],s,o,t.value,e,i,r)}function kw(t,n,e,i,r,o,s){if(o==null)t.removeAttribute(n,r,e);else{let a=s==null?Sd(o):s(o,i||"",r);t.setAttribute(n,r,a,e)}}function Tw(t,n,e,i,r,o){let s=o[n];if(s!==null)for(let a=0;a<s.length;a+=2){let c=s[a],l=s[a+1];mf(i,e,c,l)}}function sh(t,n,e,i,r){let o=_e+e,s=n[T],a=r(s,n,t,i,e);n[o]=a,Mr(t,!0);let c=t.type===2;return c?(Ob(n[pe],a,t),(Yp()===0||Ir(t))&&Fr(a,n),Zp()):Fr(a,n),ka()&&(!c||!rc(t))&&ih(s,n,a,t),t}function ah(t){let n=t;return eu()?tu():(n=n.parent,Mr(n,!1)),n}function Aw(t,n){let e=t[In];if(!e)return;let i;try{i=e.get(cn,null)}catch(r){i=null}i?.(n)}function ch(t,n,e,i,r){let o=t.inputs?.[i],s=t.hostDirectiveInputs?.[i],a=!1;if(s)for(let c=0;c<s.length;c+=2){let l=s[c],d=s[c+1],f=n.data[l];mf(f,e[l],d,r),a=!0}if(o)for(let c of o){let l=e[c],d=n.data[c];mf(d,l,i,r),a=!0}return a}function Nw(t,n){let e=kt(n,t),i=e[T];Rw(i,e);let r=e[zt];r!==null&&e[Ci]===null&&(e[Ci]=Eb(r,e[In])),de(re.ComponentStart);try{lh(i,e,e[xe])}finally{de(re.ComponentEnd,e[xe])}}function Rw(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function lh(t,n,e){Ia(n);try{let i=t.viewQuery;i!==null&&of(1,i,e);let r=t.template;r!==null&&qb(t,n,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[sn]?.finishViewCreation(t),t.staticContentQueries&&wb(t,n),t.staticViewQueries&&of(2,t.viewQuery,e);let o=t.components;o!==null&&Ow(n,o)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{n[P]&=-5,Sa()}}function Ow(t,n){for(let e=0;e<n.length;e++)Nw(t,n[e])}function zo(t,n,e,i){let r=A(null);try{let o=n.tView,a=t[P]&4096?4096:16,c=Qf(t,o,e,a,null,n,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=t[n.index];c[Yn]=l;let d=t[sn];return d!==null&&(c[sn]=d.createEmbeddedView(o)),lh(o,c,e),c}finally{A(r)}}function Pr(t,n){return!n||n.firstChild===null||mb(t)}function Fo(t,n,e,i,r=!1){for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=n[e.index];o!==null&&i.push(Mt(o)),Gt(o)&&Zb(o,i);let s=e.type;if(s&8)Fo(t,n,e.child,i);else if(s&32){let a=Jf(e,n),c;for(;c=a();)i.push(c)}else if(s&16){let a=Gb(n,e);if(Array.isArray(a))i.push(...a);else{let c=zn(n[ht]);Fo(c[T],c,a,i,!0)}}e=r?e.projectionNext:e.next}return i}function Zb(t,n){for(let e=Ee;e<t.length;e++){let i=t[e],r=i[T].firstChild;r!==null&&Fo(i[T],i,r,n)}t[Kn]!==t[zt]&&n.push(t[Kn])}function Kb(t){if(t[xi]!==null){for(let n of t[xi])n.impl.addSequence(n);t[xi].length=0}}var Qb=[];function Fw(t){return t[yt]??Pw(t)}function Pw(t){let n=Qb.pop()??Object.create(Vw);return n.lView=t,n}function Lw(t){t.lView[yt]!==t&&(t.lView=null,Qb.push(t))}var Vw=ie(E({},ui),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{Mi(t.lView)},consumerOnSignalRead(){this.lView[yt]=this}});function Bw(t){let n=t[yt]??Object.create(jw);return n.lView=t,n}var jw=ie(E({},ui),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=zn(t.lView);for(;n&&!Xb(n[T]);)n=zn(n);n&&Gd(n)},consumerOnSignalRead(){this.lView[yt]=this}});function Xb(t){return t.type!==2}function Jb(t){if(t[$n]===null)return;let n=!0;for(;n;){let e=!1;for(let i of t[$n])i.dirty&&(e=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));n=e&&!!(t[P]&8192)}}var Hw=100;function ev(t,n=0){let i=t[on].rendererFactory,r=!1;r||i.begin?.();try{Uw(t,n)}finally{r||i.end?.()}}function Uw(t,n){let e=nu();try{mo(!0),bf(t,n);let i=0;for(;Eo(t);){if(i===Hw)throw new I(103,!1);i++,bf(t,1)}}finally{mo(e)}}function $w(t,n,e,i){if(Si(n))return;let r=n[P],o=!1,s=!1;Ia(n);let a=!0,c=null,l=null;o||(Xb(t)?(l=Fw(n),c=Vn(l)):Ps()===null?(a=!1,l=Bw(n),c=Vn(l)):n[yt]&&(Bn(n[yt]),n[yt]=null));try{zd(n),Jp(t.bindingStartIndex),e!==null&&qb(t,n,e,2,i);let d=(r&3)===3;if(!o)if(d){let m=t.preOrderCheckHooks;m!==null&&Ba(n,m,null)}else{let m=t.preOrderHooks;m!==null&&ja(n,m,0,null),zu(n,0)}if(s||zw(n),Jb(n),tv(n,0),t.contentQueries!==null&&wb(t,n),!o)if(d){let m=t.contentCheckHooks;m!==null&&Ba(n,m)}else{let m=t.contentHooks;m!==null&&ja(n,m,1),zu(n,1)}Ww(t,n);let f=t.components;f!==null&&iv(n,f,0);let h=t.viewQuery;if(h!==null&&of(2,h,i),!o)if(d){let m=t.viewCheckHooks;m!==null&&Ba(n,m)}else{let m=t.viewHooks;m!==null&&ja(n,m,2),zu(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[_a]){for(let m of n[_a])m();n[_a]=null}o||(Kb(n),n[P]&=-73)}catch(d){throw o||Mi(n),d}finally{l!==null&&(fi(l,c),a&&Lw(l)),Sa()}}function tv(t,n){for(let e=gb(t);e!==null;e=bb(e))for(let i=Ee;i<e.length;i++){let r=e[i];nv(r,n)}}function zw(t){for(let n=gb(t);n!==null;n=bb(n)){if(!(n[P]&2))continue;let e=n[Ii];for(let i=0;i<e.length;i++){let r=e[i];Gd(r)}}}function Gw(t,n,e){de(re.ComponentStart);let i=kt(n,t);try{nv(i,e)}finally{de(re.ComponentEnd,i[xe])}}function nv(t,n){Da(t)&&bf(t,n)}function bf(t,n){let i=t[T],r=t[P],o=t[yt],s=!!(n===0&&r&16);if(s||=!!(r&64&&n===0),s||=!!(r&1024),s||=!!(o?.dirty&&sr(o)),s||=!1,o&&(o.dirty=!1),t[P]&=-9217,s)$w(i,t,i.template,t[xe]);else if(r&8192){let a=A(null);try{Jb(t),tv(t,1);let c=i.components;c!==null&&iv(t,c,1),Kb(t)}finally{A(a)}}}function iv(t,n,e){for(let i=0;i<n.length;i++)Gw(t,n[i],e)}function Ww(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let i=0;i<e.length;i++){let r=e[i];if(r<0)Qn(~r);else{let o=r,s=e[++i],a=e[++i];tg(s,o);let c=n[o];de(re.HostBindingsUpdateStart,c);try{a(2,c)}finally{de(re.HostBindingsUpdateEnd,c)}}}}finally{Qn(-1)}}function dh(t,n){let e=nu()?64:1088;for(t[on].changeDetectionScheduler?.notify(n);t;){t[P]|=e;let i=zn(t);if(Sr(t)&&!i)return t;t=i}return null}function rv(t,n,e,i){return[t,!0,0,n,null,i,null,e,null,null]}function ov(t,n){let e=Ee+n;if(e<t.length)return t[e]}function Go(t,n,e,i=!0){let r=n[T];if(qw(r,n,t,e),i){let s=gf(e,t),a=n[pe],c=a.parentNode(t[Kn]);c!==null&&cw(r,t[ft],a,n,c,s)}let o=n[Ci];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function sv(t,n){let e=Po(t,n);return e!==void 0&&dc(e[T],e),e}function Po(t,n){if(t.length<=Ee)return;let e=Ee+n,i=t[e];if(i){let r=i[Yn];r!==null&&r!==t&&nh(r,i),n>0&&(t[e-1][St]=i[St]);let o=_o(t,Ee+n);aw(i[T],i);let s=o[sn];s!==null&&s.detachView(o[T]),i[Fe]=null,i[St]=null,i[P]&=-129}return i}function qw(t,n,e,i){let r=Ee+i,o=e.length;i>0&&(e[r-1][St]=n),i<o-Ee?(n[St]=e[r],Td(e,Ee+i,n)):(e.push(n),n[St]=null),n[Fe]=e;let s=n[Yn];s!==null&&e!==s&&av(s,n);let a=n[sn];a!==null&&a.insertView(t),Ca(n),n[P]|=128}function av(t,n){let e=t[Ii],i=n[Fe];if(Mn(i))t[P]|=2;else{let r=i[Fe][ht];n[ht]!==r&&(t[P]|=2)}e===null?t[Ii]=[n]:e.push(n)}var Jn=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[T];return Fo(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[xe]}set context(n){this._lView[xe]=n}get destroyed(){return Si(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[Fe];if(Gt(n)){let e=n[Co],i=e?e.indexOf(this):-1;i>-1&&(Po(n,i),_o(e,i))}this._attachedToViewContainer=!1}dc(this._lView[T],this._lView)}onDestroy(n){Wd(this._lView,n)}markForCheck(){dh(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[P]&=-129}reattach(){Ca(this._lView),this._lView[P]|=128}detectChanges(){this._lView[P]|=1024,ev(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new I(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=Sr(this._lView),e=this._lView[Yn];e!==null&&!n&&nh(e,this._lView),Ub(this._lView[T],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new I(902,!1);this._appRef=n;let e=Sr(this._lView),i=this._lView[Yn];i!==null&&!e&&av(i,this._lView),Ca(this._lView)}};var un=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=Yw;constructor(e,i,r){this._declarationLView=e,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,i){return this.createEmbeddedViewImpl(e,i)}createEmbeddedViewImpl(e,i,r){let o=zo(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:i,dehydratedView:r});return new Jn(o)}}return t})();function Yw(){return hc($e(),H())}function hc(t,n){return t.type&4?new un(n,t,Br(t,n)):null}function jr(t,n,e,i,r){let o=t.data[n];if(o===null)o=Zw(t,n,e,i,r),eg()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=i,o.attrs=r;let s=Kp();o.injectorIndex=s===null?-1:s.injectorIndex}return Mr(o,!0),o}function Zw(t,n,e,i,r){let o=Jd(),s=eu(),a=s?o:o&&o.parent,c=t.data[n]=Qw(t,a,e,n,i,r);return Kw(t,c,o,s),c}function Kw(t,n,e,i){t.firstChild===null&&(t.firstChild=n),e!==null&&(i?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function Qw(t,n,e,i,r,o){let s=n?n.injectorIndex:-1,a=0;return Kd()&&(a|=128),{type:e,index:i,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,namespace:su(),attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function Xw(t){let n=t[Vd]??[],i=t[Fe][pe],r=[];for(let o of n)o.data[yb]!==void 0?r.push(o):Jw(o,i);t[Vd]=r}function Jw(t,n){let e=0,i=t.firstChild;if(i){let r=t.data[_b];for(;e<r;){let o=i.nextSibling;Rb(n,i,!1),i=o,e++}}}var e0=()=>null,t0=()=>null;function Ka(t,n){return e0(t,n)}function cv(t,n,e){return t0(t,n,e)}var lv=class{},mc=class{},vf=class{resolveComponentFactory(n){throw new I(917,!1)}},pc=class{static NULL=new vf},ze=class{},st=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>n0()}return t})();function n0(){let t=H(),n=$e(),e=kt(n.index,t);return(Mn(e)?e:t)[pe]}var dv=(()=>{class t{static \u0275prov=y({token:t,providedIn:"root",factory:()=>null})}return t})();var Ua={},_f=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,i){let r=this.injector.get(n,Ua,i);return r!==Ua||e===Ua?r:this.parentInjector.get(n,e,i)}};function Qa(t,n,e){let i=e?t.styles:null,r=e?t.classes:null,o=0;if(n!==null)for(let s=0;s<n.length;s++){let a=n[s];if(typeof a=="number")o=a;else if(o==1)r=fa(r,a);else if(o==2){let c=a,l=n[++s];i=fa(i,c+": "+l+";")}}e?t.styles=i:t.stylesWithoutHost=i,e?t.classes=r:t.classesWithoutHost=r}function oe(t,n=0){let e=H();if(e===null)return F(t,n);let i=$e();return db(i,e,Qe(t),n)}function uv(t,n,e,i,r){let o=i===null?null:{"":-1},s=r(t,e);if(s!==null){let a=s,c=null,l=null;for(let d of s)if(d.resolveHostDirectives!==null){[a,c,l]=d.resolveHostDirectives(s);break}o0(t,n,e,a,o,c,l)}o!==null&&i!==null&&i0(e,i,o)}function i0(t,n,e){let i=t.localNames=[];for(let r=0;r<n.length;r+=2){let o=e[n[r+1]];if(o==null)throw new I(-301,!1);i.push(n[r],o)}}function r0(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function o0(t,n,e,i,r,o,s){let a=i.length,c=null;for(let h=0;h<a;h++){let m=i[h];c===null&&an(m)&&(c=m,r0(t,e,h)),tf(Ya(e,n),t,m.type)}u0(e,t.data.length,a),c?.viewProvidersResolver&&c.viewProvidersResolver(c);for(let h=0;h<a;h++){let m=i[h];m.providersResolver&&m.providersResolver(m)}let l=!1,d=!1,f=Vb(t,n,a,null);a>0&&(e.directiveToIndex=new Map);for(let h=0;h<a;h++){let m=i[h];if(e.mergedAttrs=Or(e.mergedAttrs,m.hostAttrs),a0(t,e,n,f,m),d0(f,m,r),s!==null&&s.has(m)){let[R,M]=s.get(m);e.directiveToIndex.set(m.type,[f,R+e.directiveStart,M+e.directiveStart])}else(o===null||!o.has(m))&&e.directiveToIndex.set(m.type,f);m.contentQueries!==null&&(e.flags|=4),(m.hostBindings!==null||m.hostAttrs!==null||m.hostVars!==0)&&(e.flags|=64);let _=m.type.prototype;!l&&(_.ngOnChanges||_.ngOnInit||_.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),l=!0),!d&&(_.ngOnChanges||_.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),d=!0),f++}s0(t,e,o)}function s0(t,n,e){for(let i=n.directiveStart;i<n.directiveEnd;i++){let r=t.data[i];if(e===null||!e.has(r))Lg(0,n,r,i),Lg(1,n,r,i),Bg(n,i,!1);else{let o=e.get(r);Vg(0,n,o,i),Vg(1,n,o,i),Bg(n,i,!0)}}}function Lg(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let s;t===0?s=n.inputs??={}:s=n.outputs??={},s[o]??=[],s[o].push(i),fv(n,o)}}function Vg(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let s=r[o],a;t===0?a=n.hostDirectiveInputs??={}:a=n.hostDirectiveOutputs??={},a[s]??=[],a[s].push(i,o),fv(n,s)}}function fv(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function Bg(t,n,e){let{attrs:i,inputs:r,hostDirectiveInputs:o}=t;if(i===null||!e&&r===null||e&&o===null||Zf(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let s=null,a=0;for(;a<i.length;){let c=i[a];if(c===0){a+=4;continue}else if(c===5){a+=2;continue}else if(typeof c=="number")break;if(!e&&r.hasOwnProperty(c)){let l=r[c];for(let d of l)if(d===n){s??=[],s.push(c,i[a+1]);break}}else if(e&&o.hasOwnProperty(c)){let l=o[c];for(let d=0;d<l.length;d+=2)if(l[d]===n){s??=[],s.push(l[d+1],i[a+1]);break}}a+=2}t.initialInputs??=[],t.initialInputs.push(s)}function a0(t,n,e,i,r){t.data[i]=r;let o=r.factory||(r.factory=Un(r.type,!0)),s=new Fi(o,an(r),oe,null);t.blueprint[i]=s,e[i]=s,c0(t,n,i,Vb(t,e,r.hostVars,At),r)}function c0(t,n,e,i,r){let o=r.hostBindings;if(o){let s=t.hostBindingOpCodes;s===null&&(s=t.hostBindingOpCodes=[]);let a=~n.index;l0(s)!=a&&s.push(a),s.push(e,i,o)}}function l0(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function d0(t,n,e){if(e){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)e[n.exportAs[i]]=t;an(n)&&(e[""]=t)}}function u0(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function uh(t,n,e,i,r,o,s,a){let c=n[T],l=c.consts,d=Tt(l,s),f=jr(c,t,e,i,d);return o&&uv(c,n,f,Tt(l,a),r),f.mergedAttrs=Or(f.mergedAttrs,f.attrs),f.attrs!==null&&Qa(f,f.attrs,!1),f.mergedAttrs!==null&&Qa(f,f.mergedAttrs,!0),c.queries!==null&&c.queries.elementStart(c,f),f}function fh(t,n){tb(t,n),Bd(n)&&t.queries.elementEnd(n)}function f0(t,n,e,i,r,o){let s=n.consts,a=Tt(s,r),c=jr(n,t,e,i,a);if(c.mergedAttrs=Or(c.mergedAttrs,c.attrs),o!=null){let l=Tt(s,o);c.localNames=[];for(let d=0;d<l.length;d+=2)c.localNames.push(l[d],-1)}return c.attrs!==null&&Qa(c,c.attrs,!1),c.mergedAttrs!==null&&Qa(c,c.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,c),c}function h0(t,n,e){return t[n]=e}function On(t,n,e){if(e===At)return!1;let i=t[n];return Object.is(i,e)?!1:(t[n]=e,!0)}function $a(t,n,e){return function i(r){let o=i.__ngNativeEl__;o!==void 0&&lE(r,o);let s=kn(t)?kt(t.index,n):n;dh(s,5);let a=n[xe],c=jg(n,a,e,r),l=i.__ngNextListenerFn__;for(;l;)c=jg(n,a,l,r)&&c,l=l.__ngNextListenerFn__;return c}}function jg(t,n,e,i){let r=A(null);try{return de(re.OutputStart,n,e),e(i)!==!1}catch(o){return Aw(t,o),!1}finally{de(re.OutputEnd,n,e),A(r)}}function hv(t,n,e,i,r,o,s,a){let c=Ir(t),l=!1,d=null;if(!i&&c&&(d=p0(n,e,o,t.index)),d!==null){let f=d.__ngLastListenerFn__||d;f.__ngNextListenerFn__=s,d.__ngLastListenerFn__=s,l=!0}else{let f=Wt(t,e),h=i?i(f):f;uE(e,h,o,a),i||(a.__ngNativeEl__=f);let m=r.listen(h,o,a);if(!m0(o)){let _=i?R=>i(Mt(R[t.index])):t.index;mv(_,n,e,o,a,m,!1)}}return l}function m0(t){return t.startsWith("animation")||t.startsWith("transition")}function p0(t,n,e,i){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let s=r[o];if(s===e&&r[o+1]===i){let a=n[wr],c=r[o+2];return a&&a.length>c?a[c]:null}typeof s=="string"&&(o+=2)}return null}function mv(t,n,e,i,r,o,s){let a=n.firstCreatePass?Yd(n):null,c=qd(e),l=c.length;c.push(r,o),a&&a.push(i,t,l,(l+1)*(s?-1:1))}function Hg(t,n,e,i,r,o){let s=n[e],a=n[T],l=a.data[e].outputs[i],f=s[l].subscribe(o);mv(t.index,a,n,r,o,f,!0)}var yf=Symbol("BINDING");function pv(t){return t.debugInfo?.className||t.type.name||null}var Df=class extends pc{ngModule;constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){let e=Gn(n);return new Lr(e,this.ngModule)}};function g0(t){return Object.keys(t).map(n=>{let[e,i,r]=t[n],o={propName:e,templateName:n,isSignal:(i&ac.SignalBased)!==0};return r&&(o.transform=r),o})}function b0(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function v0(t,n,e){let i=n instanceof we?n:n?.injector;return i&&t.getStandaloneInjector!==null&&(i=t.getStandaloneInjector(i)||i),i?new _f(e,i):e}function _0(t){let n=t.get(ze,null);if(n===null)throw new I(407,!1);let e=t.get(dv,null),i=t.get($t,null),r=t.get(Xt,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function y0(t,n){let e=gv(t);return Ab(n,e,e==="svg"?jd:e==="math"?Up:null)}function D0(t){if(t?.toLowerCase()==="script")throw new I(905,!1)}function gv(t){return(t.selectors[0][0]||"div").toLowerCase()}var Lr=class extends mc{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=g0(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=b0(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){super(),this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=ZE(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,i,r,o,s){de(re.DynamicComponentStart);let a=A(null);try{let c=this.componentDef,l=v0(c,r||this.ngModule,n),d=_0(l),f=d.tracingService;return f&&f.componentCreate?f.componentCreate(pv(c),()=>this.createComponentRef(d,l,e,i,o,s)):this.createComponentRef(d,l,e,i,o,s)}finally{A(a)}}createComponentRef(n,e,i,r,o,s){let a=this.componentDef,c=C0(r,a,s,o),l=n.rendererFactory.createRenderer(null,a),d=r?_w(l,r,a.encapsulation,e):y0(a,l);D0(d?.tagName);let f=s?.some(Ug)||o?.some(_=>typeof _!="function"&&_.bindings.some(Ug)),h=Qf(null,c,null,512|Lb(a),null,null,n,l,e,null,Eb(d,e,!0));h[_e]=d,Ia(h);let m=null;try{let _=uh(_e,h,2,"#host",()=>c.directiveRegistry,!0,0);Ob(l,d,_),Fr(d,h),fc(c,h,_),Uf(c,_,h),fh(c,_),i!==void 0&&w0(_,this.ngContentSelectors,i),m=kt(_.index,h),h[xe]=m[xe],lh(c,h,null)}catch(_){throw m!==null&&rf(m),rf(h),_}finally{de(re.DynamicComponentEnd),Sa()}return new Xa(this.componentType,h,!!f)}};function C0(t,n,e,i){let r=t?["ng-version","21.2.18"]:KE(n.selectors[0]),o=null,s=null,a=0;if(e)for(let d of e)a+=d[yf].requiredVars,d.create&&(d.targetIdx=0,(o??=[]).push(d)),d.update&&(d.targetIdx=0,(s??=[]).push(d));if(i)for(let d=0;d<i.length;d++){let f=i[d];if(typeof f!="function")for(let h of f.bindings){a+=h[yf].requiredVars;let m=d+1;h.create&&(h.targetIdx=m,(o??=[]).push(h)),h.update&&(h.targetIdx=m,(s??=[]).push(h))}}let c=[n];if(i)for(let d of i){let f=typeof d=="function"?d:d.type,h=xd(f);c.push(h)}return Kf(0,null,E0(o,s),1,a,c,null,null,null,[r],null)}function E0(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let i of t)i.create();if(e&2&&n)for(let i of n)i.update()}}function Ug(t){let n=t[yf].kind;return n==="input"||n==="twoWay"}var Xa=class extends lv{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,i){super(),this._rootLView=e,this._hasInputBindings=i,this._tNode=ya(e[T],_e),this.location=Br(this._tNode,e),this.instance=kt(this._tNode.index,e)[xe],this.hostView=this.changeDetectorRef=new Jn(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let r=this._rootLView,o=ch(i,r[T],r,n,e);this.previousInputValues.set(n,e);let s=kt(i.index,r);dh(s,1)}get injector(){return new Oi(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function w0(t,n,e){let i=t.projection=[];for(let r=0;r<n.length;r++){let o=e[r];i.push(o!=null&&o.length?Array.from(o):null)}}var Nt=(()=>{class t{static __NG_ELEMENT_ID__=x0}return t})();function x0(){let t=$e();return bv(t,H())}var Cf=class t extends Nt{_lContainer;_hostTNode;_hostLView;constructor(n,e,i){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=i}get element(){return Br(this._hostTNode,this._hostLView)}get injector(){return new Oi(this._hostTNode,this._hostLView)}get parentInjector(){let n=Vf(this._hostTNode,this._hostLView);if(rb(n)){let e=Wa(n,this._hostLView),i=Ga(n),r=e[T].data[i+8];return new Oi(r,e)}else return new Oi(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=$g(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-Ee}createEmbeddedView(n,e,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let s=Ka(this._lContainer,n.ssrId),a=n.createEmbeddedViewImpl(e||{},o,s);return this.insertImpl(a,r,Pr(this._hostTNode,s)),a}createComponent(n,e,i,r,o,s,a){let c=n&&!LC(n),l;if(c)l=e;else{let M=e||{};l=M.index,i=M.injector,r=M.projectableNodes,o=M.environmentInjector||M.ngModuleRef,s=M.directives,a=M.bindings}let d=c?n:new Lr(Gn(n)),f=i||this.parentInjector;if(!o&&d.ngModule==null){let Y=(c?f:this.parentInjector).get(we,null);Y&&(o=Y)}let h=Gn(d.componentType??{}),m=Ka(this._lContainer,h?.id??null),_=m?.firstChild??null,R=d.create(f,r,_,o,s,a);return this.insertImpl(R.hostView,l,Pr(this._hostTNode,m)),R}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,i){let r=n._lView;if(zp(r)){let a=this.indexOf(n);if(a!==-1)this.detach(a);else{let c=r[Fe],l=new t(c,c[ft],c[Fe]);l.detach(l.indexOf(n))}}let o=this._adjustIndex(e),s=this._lContainer;return Go(s,r,o,i),n.attachToViewContainerRef(),Td(qu(s),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=$g(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),i=Po(this._lContainer,e);i&&(_o(qu(this._lContainer),e),dc(i[T],i))}detach(n){let e=this._adjustIndex(n,-1),i=Po(this._lContainer,e);return i&&_o(qu(this._lContainer),e)!=null?new Jn(i):null}_adjustIndex(n,e=0){return n??this.length+e}};function $g(t){return t[Co]}function qu(t){return t[Co]||(t[Co]=[])}function bv(t,n){let e,i=n[t.index];return Gt(i)?e=i:(e=rv(i,n,null,t),n[t.index]=e,Xf(n,e)),S0(e,n,t,i),new Cf(e,t,n)}function I0(t,n){let e=t[pe],i=e.createComment(""),r=Wt(n,t),o=e.parentNode(r);return Za(e,o,i,e.nextSibling(r),!1),i}var S0=T0,M0=()=>!1;function k0(t,n,e){return M0(t,n,e)}function T0(t,n,e,i){if(t[Kn])return;let r;e.type&8?r=Mt(i):r=I0(n,e),t[Kn]=r}var Ef=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},wf=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let i=n.contentQueries!==null?n.contentQueries[0]:e.length,r=[];for(let o=0;o<i;o++){let s=e.getByIndex(o),a=this.queries[s.indexInDeclarationView];r.push(a.clone())}return new t(r)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)mh(n,e).matches!==null&&this.queries[e].setDirty()}},Ja=class{flags;read;predicate;constructor(n,e,i=null){this.flags=e,this.read=i,typeof n=="string"?this.predicate=F0(n):this.predicate=n}},xf=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let i=0;i<this.length;i++){let r=e!==null?e.length:0,o=this.getByIndex(i).embeddedTView(n,r);o&&(o.indexInDeclarationView=i,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},If=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,i=n.parent;for(;i!==null&&i.type&8&&i.index!==e;)i=i.parent;return e===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(n,e,A0(e,o)),this.matchTNodeWithReadOption(n,e,Ha(e,n,o,!1,!1))}else i===un?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,Ha(e,n,i,!1,!1))}matchTNodeWithReadOption(n,e,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===N||r===Nt||r===un&&e.type&4)this.addMatch(e.index,-2);else{let o=Ha(e,n,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,i)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function A0(t,n){let e=t.localNames;if(e!==null){for(let i=0;i<e.length;i+=2)if(e[i]===n)return e[i+1]}return null}function N0(t,n){return t.type&11?Br(t,n):t.type&4?hc(t,n):null}function R0(t,n,e,i){return e===-1?N0(n,t):e===-2?O0(t,n,i):Ro(t,t[T],e,n)}function O0(t,n,e){if(e===N)return Br(n,t);if(e===un)return hc(n,t);if(e===Nt)return bv(n,t)}function vv(t,n,e,i){let r=n[sn].queries[i];if(r.matches===null){let o=t.data,s=e.matches,a=[];for(let c=0;s!==null&&c<s.length;c+=2){let l=s[c];if(l<0)a.push(null);else{let d=o[l];a.push(R0(n,d,s[c+1],e.metadata.read))}}r.matches=a}return r.matches}function Sf(t,n,e,i){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let s=vv(t,n,r,e);for(let a=0;a<o.length;a+=2){let c=o[a];if(c>0)i.push(s[a/2]);else{let l=o[a+1],d=n[-c];for(let f=Ee;f<d.length;f++){let h=d[f];h[Yn]===h[Fe]&&Sf(h[T],h,l,i)}if(d[Ii]!==null){let f=d[Ii];for(let h=0;h<f.length;h++){let m=f[h];Sf(m[T],m,l,i)}}}}}return i}function hh(t,n){return t[sn].queries[n].queryList}function _v(t,n,e){let i=new Pi((e&4)===4);return qp(t,n,i,i.destroy),(n[sn]??=new wf).queries.push(new Ef(i))-1}function yv(t,n,e){let i=De();return i.firstCreatePass&&(Cv(i,new Ja(t,n,e),-1),(n&2)===2&&(i.staticViewQueries=!0)),_v(i,H(),n)}function Dv(t,n,e,i){let r=De();if(r.firstCreatePass){let o=$e();Cv(r,new Ja(n,e,i),o.index),P0(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return _v(r,H(),e)}function F0(t){return t.split(",").map(n=>n.trim())}function Cv(t,n,e){t.queries===null&&(t.queries=new xf),t.queries.track(new If(n,e))}function P0(t,n){let e=t.contentQueries||(t.contentQueries=[]),i=e.length?e[e.length-1]:-1;n!==i&&e.push(t.queries.length-1,n)}function mh(t,n){return t.queries.getByIndex(n)}function Ev(t,n){let e=t[T],i=mh(e,n);return i.crossesNgTemplate?Sf(e,t,n,[]):vv(e,t,i,n)}function wv(t,n,e){let i,r=io(()=>{i._dirtyCounter();let o=L0(i,t);if(n&&o===void 0)throw new I(-951,!1);return o});return i=r[He],i._dirtyCounter=me(0),i._flatValue=void 0,r}function ph(t){return wv(!0,!1,t)}function gh(t){return wv(!0,!0,t)}function xv(t,n){let e=t[He];e._lView=H(),e._queryIndex=n,e._queryList=hh(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(i=>i+1))}function L0(t,n){let e=t._lView,i=t._queryIndex;if(e===void 0||i===void 0||e[P]&4)return n?void 0:it;let r=hh(e,i),o=Ev(e,i);return r.reset(o,hb),n?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}var Vi=class{};var Lo=class extends Vi{injector;componentFactoryResolver=new Df(this);instance=null;constructor(n){super();let e=new yi([...n.providers,{provide:Vi,useValue:this},{provide:pc,useValue:this.componentFactoryResolver}],n.parent||Cr(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function Iv(t,n,e=null){return new Lo({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var V0=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let i=Rd(!1,e.type),r=i.length>0?Iv([i],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=y({token:t,providedIn:"environment",factory:()=>new t(F(we))})}return t})();function w(t){return jo(()=>{let n=Sv(t),e=ie(E({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===jf.OnPush,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?r=>r.get(V0).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||Qt.Emulated,styles:t.styles||it,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&ti("NgStandalone"),Mv(e);let i=t.dependencies;return e.directiveDefs=zg(i,B0),e.pipeDefs=zg(i,Mp),e.id=U0(e),e})}function B0(t){return Gn(t)||xd(t)}function X(t){return jo(()=>({type:t.type,bootstrap:t.bootstrap||it,declarations:t.declarations||it,imports:t.imports||it,exports:t.exports||it,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function j0(t,n){if(t==null)return Wn;let e={};for(let i in t)if(t.hasOwnProperty(i)){let r=t[i],o,s,a,c;Array.isArray(r)?(a=r[0],o=r[1],s=r[2]??o,c=r[3]||null):(o=r,s=r,a=ac.None,c=null),e[o]=[i,a,c],n[o]=s}return e}function H0(t){if(t==null)return Wn;let n={};for(let e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);return n}function Q(t){return jo(()=>{let n=Sv(t);return Mv(n),n})}function bh(t){return{type:t.type,name:t.name,factory:null,pure:t.pure!==!1,standalone:t.standalone??!0,onDestroy:t.type.prototype.ngOnDestroy||null}}function Sv(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||Wn,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||it,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:j0(t.inputs,n),outputs:H0(t.outputs),debugInfo:null}}function Mv(t){t.features?.forEach(n=>n(t))}function zg(t,n){return t?()=>{let e=typeof t=="function"?t():t,i=[];for(let r of e){let o=n(r);o!==null&&i.push(o)}return i}:null}function U0(t){let n=0,e=typeof t.consts=="function"?"":t.consts,i=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of i.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}function $0(t){return Object.getPrototypeOf(t.prototype).constructor}function Ge(t){let n=$0(t.type),e=!0,i=[t];for(;n&&n!==Function.prototype&&n!==Object.prototype;){let r,o=Object.hasOwn(n,bo)?n[bo]:void 0,s=Object.hasOwn(n,vo)?n[vo]:void 0;if(an(t))r=o??s;else{if(o)throw new I(903,!1);r=s}if(r){if(e){i.push(r);let c=t;c.inputs=Yu(t.inputs),c.declaredInputs=Yu(t.declaredInputs),c.outputs=Yu(t.outputs);let l=r.hostBindings;l&&Y0(t,l);let d=r.viewQuery,f=r.contentQueries;if(d&&W0(t,d),f&&q0(t,f),z0(t,r),Sp(t.outputs,r.outputs),an(r)&&r.data.animation){let h=t.data;h.animation=(h.animation||[]).concat(r.data.animation)}}let a=r.features;if(a)for(let c=0;c<a.length;c++){let l=a[c];l&&l.ngInherit&&l(t),l===Ge&&(e=!1)}}n=Object.getPrototypeOf(n)}G0(i)}function z0(t,n){for(let e in n.inputs){if(!n.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let i=n.inputs[e];i!==void 0&&(t.inputs[e]=i,t.declaredInputs[e]=n.declaredInputs[e])}}function G0(t){let n=0,e=null;for(let i=t.length-1;i>=0;i--){let r=t[i];r.hostVars=n+=r.hostVars,r.hostAttrs=Or(r.hostAttrs,e=Or(e,r.hostAttrs))}}function Yu(t){return t===Wn?{}:t===it?[]:t}function W0(t,n){let e=t.viewQuery;e?t.viewQuery=(i,r)=>{n(i,r),e(i,r)}:t.viewQuery=n}function q0(t,n){let e=t.contentQueries;e?t.contentQueries=(i,r,o)=>{n(i,r,o),e(i,r,o)}:t.contentQueries=n}function Y0(t,n){let e=t.hostBindings;e?t.hostBindings=(i,r)=>{n(i,r),e(i,r)}:t.hostBindings=n}function kv(t,n,e,i,r,o,s,a){if(e.firstCreatePass){t.mergedAttrs=Or(t.mergedAttrs,t.attrs);let d=t.tView=Kf(2,t,r,o,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),d.queries=e.queries.embeddedTView(t))}a&&(t.flags|=a),Mr(t,!1);let c=K0(e,n,t,i);ka()&&ih(e,n,c,t),Fr(c,n);let l=rv(c,n,c,t);n[i+_e]=l,Xf(n,l),k0(l,t,n)}function Z0(t,n,e,i,r,o,s,a,c,l,d){let f=e+_e,h;return n.firstCreatePass?(h=jr(n,f,4,s||null,a||null),Ea()&&uv(n,t,h,Tt(n.consts,l),oh),tb(n,h)):h=n.data[f],kv(h,t,n,e,i,r,o,c),Ir(h)&&fc(n,t,h),l!=null&&$o(t,h,d),h}function Vo(t,n,e,i,r,o,s,a,c,l,d){let f=e+_e,h;if(n.firstCreatePass){if(h=jr(n,f,4,s||null,a||null),l!=null){let m=Tt(n.consts,l);h.localNames=[];for(let _=0;_<m.length;_+=2)h.localNames.push(m[_],-1)}}else h=n.data[f];return kv(h,t,n,e,i,r,o,c),l!=null&&$o(t,h,d),h}function mn(t,n,e,i,r,o,s,a){let c=H(),l=De(),d=Tt(l.consts,o);return Z0(c,l,t,n,e,i,r,d,void 0,s,a),mn}var K0=Q0;function Q0(t,n,e,i){return xo(!0),n[pe].createComment("")}function $i(t){return typeof t=="function"&&t[He]!==void 0}var vh=new v("");function zi(t){return!!t&&typeof t.then=="function"}function gc(t){return!!t&&typeof t.subscribe=="function"}var Tv=new v("");var _h=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,i)=>{this.resolve=e,this.reject=i});appInits=u(Tv,{optional:!0})??[];injector=u(J);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=Er(this.injector,r);if(zi(o))e.push(o);else if(gc(o)){let s=new Promise((a,c)=>{o.subscribe({complete:a,error:c})});e.push(s)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{i()}).catch(r=>{this.reject(r)}),e.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Av=new v("");function Nv(){Vl(()=>{let t="";throw new I(600,t)})}function Rv(t){return t.isBoundToModule}var X0=10;var Rt=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=u(cn);afterRenderManager=u(lc);zonelessEnabled=u(Ar);rootEffectScheduler=u(Aa);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new k;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=u(Xn);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(ee(e=>!e))}constructor(){u(Xt,{optional:!0})}whenStable(){let e;return new Promise(i=>{e=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{e.unsubscribe()})}_injector=u(we);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,i){return this.bootstrapImpl(e,i)}bootstrapImpl(e,i,r=J.NULL){return this._injector.get(S).run(()=>{de(re.BootstrapComponentStart);let s=e instanceof mc;if(!this._injector.get(_h).done){let _="";throw new I(405,_)}let c;s?c=e:c=this._injector.get(pc).resolveComponentFactory(e),this.componentTypes.push(c.componentType);let l=Rv(c)?void 0:this._injector.get(Vi),d=i||c.selector,f=c.create(r,[],d,l),h=f.location.nativeElement,m=f.injector.get(vh,null);return m?.registerApplication(h),f.onDestroy(()=>{this.detachView(f.hostView),No(this.components,f),m?.unregisterApplication(h)}),this._loadComponent(f),de(re.BootstrapComponentEnd,f),f})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){de(re.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(cc.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw de(re.ChangeDetectionEnd),new I(101,!1);let e=A(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,A(e),this.afterTick.next(),de(re.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(ze,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<X0;){de(re.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{de(re.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!Eo(r))continue;let o=i&&!this.zonelessEnabled?0:1;ev(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>Eo(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let i=e;this._views.push(i),i.attachToAppRef(this)}detachView(e){let i=e;No(this._views,i),i.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(Av,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>No(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new I(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function No(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function te(t,n,e,i){let r=H(),o=Ai();if(On(r,o,n)){let s=De(),a=Ma();Mw(a,r,t,n,e,i)}return te}var Mf=class{destroy(n){}updateValue(n,e){}swap(n,e){let i=Math.min(n,e),r=Math.max(n,e),o=this.detach(r);if(r-i>1){let s=this.detach(i);this.attach(i,o),this.attach(r,s)}else this.attach(i,o)}move(n,e){this.attach(e,this.detach(n))}};function Zu(t,n,e,i,r){return t===e&&Object.is(n,i)?1:Object.is(r(t,n),r(e,i))?-1:0}function J0(t,n,e,i){let r,o,s=0,a=t.length-1,c=void 0;if(Array.isArray(n)){A(i);let l=n.length-1;for(A(null);s<=a&&s<=l;){let d=t.at(s),f=n[s],h=Zu(s,d,s,f,e);if(h!==0){h<0&&t.updateValue(s,f),s++;continue}let m=t.at(a),_=n[l],R=Zu(a,m,l,_,e);if(R!==0){R<0&&t.updateValue(a,_),a--,l--;continue}let M=e(s,d),Y=e(a,m),Te=e(s,f);if(Object.is(Te,Y)){let vt=e(l,_);Object.is(vt,M)?(t.swap(s,a),t.updateValue(a,_),l--,a--):t.move(a,s),t.updateValue(s,f),s++;continue}if(r??=new ec,o??=Wg(t,s,a,e),kf(t,r,s,Te))t.updateValue(s,f),s++,a++;else if(o.has(Te))r.set(M,t.detach(s)),a--;else{let vt=t.create(s,n[s]);t.attach(s,vt),s++,a++}}for(;s<=l;)Gg(t,r,e,s,n[s]),s++}else if(n!=null){A(i);let l=n[Symbol.iterator]();A(null);let d=l.next();for(;!d.done&&s<=a;){let f=t.at(s),h=d.value,m=Zu(s,f,s,h,e);if(m!==0)m<0&&t.updateValue(s,h),s++,d=l.next();else{r??=new ec,o??=Wg(t,s,a,e);let _=e(s,h);if(kf(t,r,s,_))t.updateValue(s,h),s++,a++,d=l.next();else if(!o.has(_))t.attach(s,t.create(s,h)),s++,a++,d=l.next();else{let R=e(s,f);r.set(R,t.detach(s)),a--}}}for(;!d.done;)Gg(t,r,e,t.length,d.value),d=l.next()}for(;s<=a;)t.destroy(t.detach(a--));r?.forEach(l=>{t.destroy(l)})}function kf(t,n,e,i){return n!==void 0&&n.has(i)?(t.attach(e,n.get(i)),n.delete(i),!0):!1}function Gg(t,n,e,i,r){if(kf(t,n,i,e(i,r)))t.updateValue(i,r);else{let o=t.create(i,r);t.attach(i,o)}}function Wg(t,n,e,i){let r=new Set;for(let o=n;o<=e;o++)r.add(i(o,t.at(o)));return r}var ec=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let i=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,i]of this.kvMap)if(n(i,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),n(i,e)}}};function ae(t,n,e,i,r,o,s,a){ti("NgControlFlow");let c=H(),l=De(),d=Tt(l.consts,o);return Vo(c,l,t,n,e,i,r,d,256,s,a),yh}function yh(t,n,e,i,r,o,s,a){ti("NgControlFlow");let c=H(),l=De(),d=Tt(l.consts,o);return Vo(c,l,t,n,e,i,r,d,512,s,a),yh}function ce(t,n){ti("NgControlFlow");let e=H(),i=Ai(),r=e[i]!==At?e[i]:-1,o=r!==-1?tc(e,_e+r):void 0,s=0;if(On(e,i,t)){let a=A(null);try{if(o!==void 0&&sv(o,s),t!==-1){let c=_e+t,l=tc(e,c),d=Rf(e[T],c),f=cv(l,d,e),h=zo(e,d,n,{dehydratedView:f});Go(l,h,s,Pr(d,f))}}finally{A(a)}}else if(o!==void 0){let a=ov(o,s);a!==void 0&&(a[xe]=n)}}var Tf=class{lContainer;$implicit;$index;constructor(n,e,i){this.lContainer=n,this.$implicit=e,this.$index=i}get $count(){return this.lContainer.length-Ee}};function Ie(t){return t}var Af=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,i){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=i}};function Se(t,n,e,i,r,o,s,a,c,l,d,f,h){ti("NgControlFlow");let m=H(),_=De(),R=c!==void 0,M=H(),Y=a?s.bind(M[ht][xe]):s,Te=new Af(R,Y);M[_e+t]=Te,Vo(m,_,t+1,n,e,i,r,Tt(_.consts,o),256),R&&Vo(m,_,t+2,c,l,d,f,Tt(_.consts,h),512)}var Nf=class extends Mf{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,i){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=i}get length(){return this.lContainer.length-Ee}at(n){return this.getLView(n)[xe].$implicit}attach(n,e){let i=e[Ci];this.needsIndexUpdate||=n!==this.length,Go(this.lContainer,e,n,Pr(this.templateTNode,i)),ex(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,tx(this.lContainer,n),nx(this.lContainer,n)}create(n,e){let i=Ka(this.lContainer,this.templateTNode.tView.ssrId);return zo(this.hostLView,this.templateTNode,new Tf(this.lContainer,e,n),{dehydratedView:i})}destroy(n){dc(n[T],n)}updateValue(n,e){this.getLView(n)[xe].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[xe].$index=n}getLView(n){return ix(this.lContainer,n)}};function Me(t){let n=A(null),e=Tn();try{let i=H(),r=i[T],o=i[e],s=e+1,a=tc(i,s);if(o.liveCollection===void 0){let l=Rf(r,s);o.liveCollection=new Nf(a,i,l)}else o.liveCollection.reset();let c=o.liveCollection;if(J0(c,t,o.trackByFn,n),c.updateIndexes(),o.hasEmptyBlock){let l=Ai(),d=c.length===0;if(On(i,l,d)){let f=e+2,h=tc(i,f);if(d){let m=Rf(r,f),_=cv(h,m,i),R=zo(i,m,void 0,{dehydratedView:_});Go(h,R,0,Pr(m,_))}else r.firstUpdatePass&&Xw(h),sv(h,0)}}}finally{A(n)}}function tc(t,n){return t[n]}function ex(t,n){if(t.length<=Ee)return;let e=Ee+n,i=t[e],r=i?i[Zn]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[In];ow(o,r),Li.delete(i[Sn]),r.detachedLeaveAnimationFns=void 0}}function tx(t,n){if(t.length<=Ee)return;let e=Ee+n,i=t[e],r=i?i[Zn]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function nx(t,n){return Po(t,n)}function ix(t,n){return ov(t,n)}function Rf(t,n){return ya(t,n)}function C(t,n,e){let i=H(),r=Ai();if(On(i,r,n)){let o=De(),s=Ma();Ew(s,i,t,n,i[pe],e)}return C}function Of(t,n,e,i,r){ch(n,t,e,r?"class":"style",i)}function g(t,n,e,i){let r=H(),o=r[T],s=t+_e,a=o.firstCreatePass?uh(s,r,2,n,oh,Ea(),e,i):o.data[s];if(kn(a)){let c=r[on].tracingService;if(c&&c.componentCreate){let l=o.data[a.directiveStart+a.componentOffset];return c.componentCreate(pv(l),()=>(qg(t,n,r,a,i),g))}}return qg(t,n,r,a,i),g}function qg(t,n,e,i,r){if(sh(i,e,t,n,Ov),Ir(i)){let o=e[T];fc(o,e,i),Uf(o,i,e)}r!=null&&$o(e,i)}function p(){let t=De(),n=$e(),e=ah(n);return t.firstCreatePass&&fh(t,e),Qd(e)&&Xd(),Zd(),e.classesWithoutHost!=null&&$C(e)&&Of(t,e,H(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&zC(e)&&Of(t,e,H(),e.stylesWithoutHost,!1),p}function $(t,n,e,i){return g(t,n,e,i),p(),$}function Et(t,n,e,i){let r=H(),o=r[T],s=t+_e,a=o.firstCreatePass?f0(s,o,2,n,e,i):o.data[s];return sh(a,r,t,n,Ov),i!=null&&$o(r,a),Et}function Ot(){let t=$e(),n=ah(t);return Qd(n)&&Xd(),Zd(),Ot}function Ft(t,n,e,i){return Et(t,n,e,i),Ot(),Ft}var Ov=(t,n,e,i,r)=>(xo(!0),Ab(n[pe],i,su()));function Dh(t,n,e){let i=H(),r=i[T],o=t+_e,s=r.firstCreatePass?uh(o,i,8,"ng-container",oh,Ea(),n,e):r.data[o];if(sh(s,i,t,"ng-container",rx),Ir(s)){let a=i[T];fc(a,i,s),Uf(a,s,i)}return e!=null&&$o(i,s),Dh}function Ch(){let t=De(),n=$e(),e=ah(n);return t.firstCreatePass&&fh(t,e),Ch}function Hr(t,n,e){return Dh(t,n,e),Ch(),Hr}var rx=(t,n,e,i,r)=>(xo(!0),PE(n[pe],""));function Ur(){return H()}function Jt(t,n,e){let i=H(),r=Ai();if(On(i,r,n)){let o=De(),s=Ma();Yb(s,i,t,n,i[pe],e)}return Jt}var Wo="en-US";var ox=Wo;function Fv(t){typeof t=="string"&&(ox=t.toLowerCase().replace(/_/g,"-"))}function ne(t,n,e){let i=H(),r=De(),o=$e();return sx(r,i,i[pe],o,t,n,e),ne}function bc(t,n,e){let i=H(),r=De(),o=$e();return(o.type&3||e)&&hv(o,r,i,e,i[pe],t,n,$a(o,i,n)),bc}function sx(t,n,e,i,r,o,s){let a=!0,c=null;if((i.type&3||s)&&(c??=$a(i,n,o),hv(i,t,n,s,e,r,o,c)&&(a=!1)),a){let l=i.outputs?.[r],d=i.hostDirectiveOutputs?.[r];if(d&&d.length)for(let f=0;f<d.length;f+=2){let h=d[f],m=d[f+1];c??=$a(i,n,o),Hg(i,n,h,m,r,c)}if(l&&l.length)for(let f of l)c??=$a(i,n,o),Hg(i,n,f,r,r,c)}}function ue(t=1){return ag(t)}function ax(t,n){let e=null,i=zE(t);for(let r=0;r<n.length;r++){let o=n[r];if(o==="*"){e=r;continue}if(i===null?Pb(t,o,!0):qE(i,o))return r}return e}function ge(t){let n=H()[ht][ft];if(!n.projection){let e=t?t.length:1,i=n.projection=Op(e,null),r=i.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let s=t?ax(o,t):0;s!==null&&(r[s]?r[s].projectionNext=o:i[s]=o,r[s]=o)}o=o.next}}}function z(t,n=0,e,i,r,o){let s=H(),a=De(),c=i?t+1:null;c!==null&&Vo(s,a,c,i,r,o,null,e);let l=jr(a,_e+t,16,null,e||null);l.projection===null&&(l.projection=n),tu();let f=!s[Ci]||Kd();s[ht][ft].projection[l.projection]===null&&c!==null?cx(s,a,c):f&&!rc(l)&&gw(a,s,l)}function cx(t,n,e){let i=_e+e,r=n.data[i],o=t[i],s=Ka(o,r.tView.ssrId),a=zo(t,r,void 0,{dehydratedView:s});Go(o,a,0,Pr(r,s))}function pn(t,n,e,i){return Dv(t,n,e,i),pn}function Ne(t,n,e){return yv(t,n,e),Ne}function G(t){let n=H(),e=De(),i=xa();wo(i+1);let r=mh(e,i);if(t.dirty&&$p(n)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=Ev(n,i);t.reset(o,hb),t.notifyOnChanges()}return!0}return!1}function W(){return hh(H(),xa())}function vc(t,n,e,i,r){return xv(n,Dv(t,e,i,r)),vc}function _c(t,n,e,i){return xv(t,yv(n,e,i)),_c}function yc(t=1){wo(xa()+t)}function Pt(t){let n=Qp();return Ud(n,_e+t)}function Va(t,n){return t<<17|n<<2}function Bi(t){return t>>17&32767}function lx(t){return(t&2)==2}function dx(t,n){return t&131071|n<<17}function Ff(t){return t|2}function Vr(t){return(t&131068)>>2}function Ku(t,n){return t&-131069|n<<2}function ux(t){return(t&1)===1}function Pf(t){return t|1}function fx(t,n,e,i,r,o){let s=o?n.classBindings:n.styleBindings,a=Bi(s),c=Vr(s);t[i]=e;let l=!1,d;if(Array.isArray(e)){let f=e;d=f[1],(d===null||Dr(f,d)>0)&&(l=!0)}else d=e;if(r)if(c!==0){let h=Bi(t[a+1]);t[i+1]=Va(h,a),h!==0&&(t[h+1]=Ku(t[h+1],i)),t[a+1]=dx(t[a+1],i)}else t[i+1]=Va(a,0),a!==0&&(t[a+1]=Ku(t[a+1],i)),a=i;else t[i+1]=Va(c,0),a===0?a=i:t[c+1]=Ku(t[c+1],i),c=i;l&&(t[i+1]=Ff(t[i+1])),Yg(t,d,i,!0),Yg(t,d,i,!1),hx(n,d,t,i,o),s=Va(a,c),o?n.classBindings=s:n.styleBindings=s}function hx(t,n,e,i,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&Dr(o,n)>=0&&(e[i+1]=Pf(e[i+1]))}function Yg(t,n,e,i){let r=t[e+1],o=n===null,s=i?Bi(r):Vr(r),a=!1;for(;s!==0&&(a===!1||o);){let c=t[s],l=t[s+1];mx(c,n)&&(a=!0,t[s+1]=i?Pf(l):Ff(l)),s=i?Bi(l):Vr(l)}a&&(t[e+1]=i?Ff(r):Pf(r))}function mx(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?Dr(t,n)>=0:!1}var Kt={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function px(t){return t.substring(Kt.key,Kt.keyEnd)}function gx(t){return bx(t),Pv(t,Lv(t,0,Kt.textEnd))}function Pv(t,n){let e=Kt.textEnd;return e===n?-1:(n=Kt.keyEnd=vx(t,Kt.key=n,e),Lv(t,n,e))}function bx(t){Kt.key=0,Kt.keyEnd=0,Kt.value=0,Kt.valueEnd=0,Kt.textEnd=t.length}function Lv(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function vx(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function Gi(t,n,e){return Vv(t,n,e,!1),Gi}function L(t,n){return Vv(t,n,null,!0),L}function Je(t){yx(Ix,_x,t,!0)}function _x(t,n){for(let e=gx(n);e>=0;e=Pv(n,e))ba(t,px(n),!0)}function Vv(t,n,e,i){let r=H(),o=De(),s=iu(2);if(o.firstUpdatePass&&jv(o,t,s,i),n!==At&&On(r,s,n)){let a=o.data[Tn()];Hv(o,a,r,r[pe],t,r[s+1]=Mx(n,e),i,s)}}function yx(t,n,e,i){let r=De(),o=iu(2);r.firstUpdatePass&&jv(r,null,o,i);let s=H();if(e!==At&&On(s,o,e)){let a=r.data[Tn()];if(Uv(a,i)&&!Bv(r,o)){let c=i?a.classesWithoutHost:a.stylesWithoutHost;c!==null&&(e=fa(c,e||"")),Of(r,a,s,e,i)}else Sx(r,a,s,s[pe],s[o+1],s[o+1]=xx(t,n,e),i,o)}}function Bv(t,n){return n>=t.expandoStartIndex}function jv(t,n,e,i){let r=t.data;if(r[e+1]===null){let o=r[Tn()],s=Bv(t,e);Uv(o,i)&&n===null&&!s&&(n=!1),n=Dx(r,o,n,i),fx(r,o,n,e,s,i)}}function Dx(t,n,e,i){let r=ig(t),o=i?n.residualClasses:n.residualStyles;if(r===null)(i?n.classBindings:n.styleBindings)===0&&(e=Qu(null,t,n,e,i),e=Bo(e,n.attrs,i),o=null);else{let s=n.directiveStylingLast;if(s===-1||t[s]!==r)if(e=Qu(r,t,n,e,i),o===null){let c=Cx(t,n,i);c!==void 0&&Array.isArray(c)&&(c=Qu(null,t,n,c[1],i),c=Bo(c,n.attrs,i),Ex(t,n,i,c))}else o=wx(t,n,i)}return o!==void 0&&(i?n.residualClasses=o:n.residualStyles=o),e}function Cx(t,n,e){let i=e?n.classBindings:n.styleBindings;if(Vr(i)!==0)return t[Bi(i)]}function Ex(t,n,e,i){let r=e?n.classBindings:n.styleBindings;t[Bi(r)]=i}function wx(t,n,e){let i,r=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<r;o++){let s=t[o].hostAttrs;i=Bo(i,s,e)}return Bo(i,n.attrs,e)}function Qu(t,n,e,i,r){let o=null,s=e.directiveEnd,a=e.directiveStylingLast;for(a===-1?a=e.directiveStart:a++;a<s&&(o=n[a],i=Bo(i,o.hostAttrs,r),o!==t);)a++;return t!==null&&(e.directiveStylingLast=a),i}function Bo(t,n,e){let i=e?1:2,r=-1;if(n!==null)for(let o=0;o<n.length;o++){let s=n[o];typeof s=="number"?r=s:r===i&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),ba(t,s,e?!0:n[++o]))}return t===void 0?null:t}function xx(t,n,e){if(e==null||e==="")return it;let i=[],r=Nn(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(i,r[o],!0);else if(r instanceof Set)for(let o of r)t(i,o,!0);else if(typeof r=="object")for(let o in r)r.hasOwnProperty(o)&&t(i,o,r[o]);else typeof r=="string"&&n(i,r);return i}function Ix(t,n,e){let i=String(n);i!==""&&!i.includes(" ")&&ba(t,i,e)}function Sx(t,n,e,i,r,o,s,a){r===At&&(r=it);let c=0,l=0,d=0<r.length?r[0]:null,f=0<o.length?o[0]:null;for(;d!==null||f!==null;){let h=c<r.length?r[c+1]:void 0,m=l<o.length?o[l+1]:void 0,_=null,R;d===f?(c+=2,l+=2,h!==m&&(_=f,R=m)):f===null||d!==null&&d<f?(c+=2,_=d):(l+=2,_=f,R=m),_!==null&&Hv(t,n,e,i,_,R,s,a),d=c<r.length?r[c]:null,f=l<o.length?o[l]:null}}function Hv(t,n,e,i,r,o,s,a){if(!(n.type&3))return;let c=t.data,l=c[a+1],d=ux(l)?Zg(c,n,e,r,Vr(l),s):void 0;if(!nc(d)){nc(o)||lx(l)&&(o=Zg(c,null,e,r,a,s));let f=Hd(Tn(),e);vw(i,s,f,r,o)}}function Zg(t,n,e,i,r,o){let s=n===null,a;for(;r>0;){let c=t[r],l=Array.isArray(c),d=l?c[1]:c,f=d===null,h=e[r+1];h===At&&(h=f?it:void 0);let m=f?va(h,i):d===i?h:void 0;if(l&&!nc(m)&&(m=va(c,i)),nc(m)&&(a=m,s))return a;let _=t[r+1];r=s?Bi(_):Vr(_)}if(n!==null){let c=o?n.residualClasses:n.residualStyles;c!=null&&(a=va(c,i))}return a}function nc(t){return t!==void 0}function Mx(t,n){return t==null||t===""||(typeof n=="string"?t=t+n:typeof t=="object"&&(t=ua(Nn(t)))),t}function Uv(t,n){return(t.flags&(n?8:16))!==0}function D(t,n=""){let e=H(),i=De(),r=t+_e,o=i.firstCreatePass?jr(i,r,1,n,null):i.data[r],s=kx(i,e,o,n);e[r]=s,ka()&&ih(i,e,s,o),Mr(o,!1)}var kx=(t,n,e,i)=>(xo(!0),OE(n[pe],i));function Tx(t,n,e,i=""){return On(t,Ai(),e)?n+Sd(e)+i:At}function mt(t){return se("",t),mt}function se(t,n,e){let i=H(),r=Tx(i,t,n,e);return r!==At&&Ax(i,Tn(),r),se}function Ax(t,n,e){let i=Hd(n,t);FE(t[pe],i,e)}function Kg(t,n,e){let i=De();i.firstCreatePass&&$v(n,i.data,i.blueprint,an(t),e)}function $v(t,n,e,i,r){if(t=Qe(t),Array.isArray(t))for(let o=0;o<t.length;o++)$v(t[o],n,e,i,r);else{let o=De(),s=H(),a=$e(),c=_i(t)?t:Qe(t.provide),l=Fd(t),d=a.providerIndexes&1048575,f=a.directiveStart,h=a.providerIndexes>>20;if(_i(t)||!t.multi){let m=new Fi(l,r,oe,null),_=Ju(c,n,r?d:d+h,f);_===-1?(tf(Ya(a,s),o,c),Xu(o,t,n.length),n.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),e.push(m),s.push(m)):(e[_]=m,s[_]=m)}else{let m=Ju(c,n,d+h,f),_=Ju(c,n,d,d+h),R=m>=0&&e[m],M=_>=0&&e[_];if(r&&!M||!r&&!R){tf(Ya(a,s),o,c);let Y=Ox(r?Rx:Nx,e.length,r,i,l,t);!r&&M&&(e[_].providerFactory=Y),Xu(o,t,n.length,0),n.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),e.push(Y),s.push(Y)}else{let Y=zv(e[r?_:m],l,!r&&i);Xu(o,t,m>-1?m:_,Y)}!r&&i&&M&&e[_].componentProviders++}}}function Xu(t,n,e,i){let r=_i(n),o=Bp(n);if(r||o){let c=(o?Qe(n.useClass):n).prototype.ngOnDestroy;if(c){let l=t.destroyHooks||(t.destroyHooks=[]);if(!r&&n.multi){let d=l.indexOf(e);d===-1?l.push(e,[i,c]):l[d+1].push(i,c)}else l.push(e,c)}}}function zv(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function Ju(t,n,e,i){for(let r=e;r<i;r++)if(n[r]===t)return r;return-1}function Nx(t,n,e,i,r){return Lf(this.multi,[])}function Rx(t,n,e,i,r){let o=this.multi,s;if(this.providerFactory){let a=this.providerFactory.componentProviders,c=Ro(i,i[T],this.providerFactory.index,r);s=c.slice(0,a),Lf(o,s);for(let l=a;l<c.length;l++)s.push(c[l])}else s=[],Lf(o,s);return s}function Lf(t,n){for(let e=0;e<t.length;e++){let i=t[e];n.push(i())}return n}function Ox(t,n,e,i,r,o){let s=new Fi(t,e,oe,null);return s.multi=[],s.index=n,s.componentProviders=0,zv(s,r,i&&!e),s}function Re(t,n){return e=>{e.providersResolver=(i,r)=>Kg(i,r?r(t):t,!1),n&&(e.viewProvidersResolver=(i,r)=>Kg(i,r?r(n):n,!0))}}function Fx(t,n){let e=t[n];return e===At?void 0:e}function Px(t,n,e,i,r,o){let s=n+e;return On(t,s,r)?h0(t,s+1,o?i.call(o,r):i(r)):Fx(t,s+1)}function Eh(t,n){let e=De(),i,r=t+_e;e.firstCreatePass?(i=Lx(n,e.pipeRegistry),e.data[r]=i,i.onDestroy&&(e.destroyHooks??=[]).push(r,i.onDestroy)):i=e.data[r];let o=i.factory||(i.factory=Un(i.type,!0)),s,a=ut(oe);try{let c=qa(!1),l=o();return qa(c),$d(e,H(),r,l),l}finally{ut(a)}}function Lx(t,n){if(n)for(let e=n.length-1;e>=0;e--){let i=n[e];if(t===i.name)return i}}function wh(t,n,e){let i=t+_e,r=H(),o=Ud(r,i);return Vx(r,i)?Px(r,Xp(),n,o.transform,e,o):o.transform(e)}function Vx(t,n){return t[T].data[n].pure}function qo(t,n){return hc(t,n)}var Gv=(()=>{class t{applicationErrorHandler=u(cn);appRef=u(Rt);taskService=u(Xn);ngZone=u(S);zonelessEnabled=u(Ar);tracing=u(Xt,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new O;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(po):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(u(Ta,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?ug:cu;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(po+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Wv(){return[{provide:$t,useExisting:Gv},{provide:S,useClass:go},{provide:Ar,useValue:!0}]}function Bx(){return typeof $localize<"u"&&$localize.locale||Wo}var Dc=new v("",{factory:()=>u(Dc,{optional:!0,skipSelf:!0})||Bx()});function pt(t){return Cp(t)}function fe(t,n){return io(t,n?.equal)}var gn=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>Bf(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function qv(t,n){return ph(n)}function nI(t,n){return gh(n)}var Zo=(qv.required=nI,qv);function Yv(t,n){return ph(n)}function iI(t,n){return gh(n)}var Zv=(Yv.required=iI,Yv);var rI=(()=>{class t{zone=u(S);changeDetectionScheduler=u($t);applicationRef=u(Rt);applicationErrorHandler=u(cn);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{try{this.applicationRef.dirtyFlags|=1,this.applicationRef._tick()}catch(e){this.applicationErrorHandler(e)}})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),oI=new v("",{factory:()=>!1});function sI({ngZoneFactory:t,scheduleInRootZone:n}){return t??=()=>new S(ie(E({},Qv()),{scheduleInRootZone:n})),[{provide:Ar,useValue:!1},{provide:S,useFactory:t},{provide:qn,multi:!0,useFactory:()=>{let e=u(rI,{optional:!0});return()=>e.initialize()}},{provide:qn,multi:!0,useFactory:()=>{let e=u(aI);return()=>{e.initialize()}}},{provide:Ta,useValue:n??au}]}function Kv(t){let n=t?.scheduleInRootZone,e=sI({ngZoneFactory:()=>{let i=Qv(t);return i.scheduleInRootZone=n,i.shouldCoalesceEventChangeDetection&&ti("NgZone_CoalesceEvent"),new S(i)},scheduleInRootZone:n});return yo([{provide:oI,useValue:!0},e])}function Qv(t){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:t?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:t?.runCoalescing??!1}}var aI=(()=>{class t{subscription=new O;initialized=!1;zone=u(S);pendingTasks=u(Xn);initialize(){if(this.initialized)return;this.initialized=!0;let e=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(e=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{S.assertNotInAngularZone(),queueMicrotask(()=>{e!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(e),e=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{S.assertInAngularZone(),e??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ih=new v(""),cI=new v("");function Yo(t){return!t.moduleRef}function lI(t){let n=Yo(t)?t.r3Injector:t.moduleRef.injector,e=n.get(S);return e.run(()=>{Yo(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let i=n.get(cn),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:i})}),Yo(t)){let o=()=>n.destroy(),s=t.platformInjector.get(Ih);s.add(o),n.onDestroy(()=>{r.unsubscribe(),s.delete(o)})}else{let o=()=>t.moduleRef.destroy(),s=t.platformInjector.get(Ih);s.add(o),t.moduleRef.onDestroy(()=>{No(t.allPlatformModules,t.moduleRef),r.unsubscribe(),s.delete(o)})}return uI(i,e,()=>{let o=n.get(Xn),s=o.add(),a=n.get(_h);return a.runInitializers(),a.donePromise.then(()=>{let c=n.get(Dc,Wo);if(Fv(c||Wo),!n.get(cI,!0))return Yo(t)?n.get(Rt):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(Yo(t)){let d=n.get(Rt);return t.rootComponent!==void 0&&d.bootstrap(t.rootComponent),d}else return dI?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(s)})})})}var dI;function uI(t,n,e){try{let i=e();return zi(i)?i.catch(r=>{throw n.runOutsideAngular(()=>t(r)),r}):i}catch(i){throw n.runOutsideAngular(()=>t(i)),i}}var Cc=null;function fI(t=[],n){return J.create({name:n,providers:[{provide:Do,useValue:"platform"},{provide:Ih,useValue:new Set([()=>Cc=null])},...t]})}function hI(t=[]){if(Cc)return Cc;let n=fI(t);return Cc=n,Nv(),mI(n),n}function mI(t){let n=t.get(ic,null);Er(t,()=>{n?.forEach(e=>e())})}var pI=1e4;var iU=pI-1e3;var We=(()=>{class t{static __NG_ELEMENT_ID__=gI}return t})();function gI(t){return bI($e(),H(),(t&16)===16)}function bI(t,n,e){if(kn(t)&&!e){let i=kt(t.index,n);return new Jn(i,i)}else if(t.type&175){let i=n[ht];return new Jn(i,n)}return null}function Xv(t){let{rootComponent:n,appProviders:e,platformProviders:i,platformRef:r}=t;de(re.BootstrapApplicationStart);try{let o=r?.injector??hI(i),s=[Wv(),hg,...e||[]],a=new Lo({providers:s,parent:o,debugName:"",runEnvironmentInitializers:!1});return lI({r3Injector:a.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{de(re.BootstrapApplicationEnd)}}function U(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function wt(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var xh=Symbol("NOT_SET"),Jv=new Set,vI=ie(E({},js),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:xh,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==xh&&!sr(this))return this.signal;try{for(let r of this.cleanup??Jv)r()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=Vn(this),i;try{i=this.userFn.apply(null,n)}finally{fi(this,e)}return(this.value===xh||!this.equal(this.value,i))&&(this.value=i,this.version++),this.signal}}),Sh=class extends Oo{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,i,r,o,s=null){super(n,[void 0,void 0,void 0,void 0],i,!1,o.get(Dt),s),this.scheduler=r;for(let a of eh){let c=e[a];if(c===void 0)continue;let l=Object.create(vI);l.sequence=this,l.phase=a,l.userFn=c,l.dirty=!0,l.signal=()=>(or(l),l.value),l.signal[He]=l,l.registerCleanupFn=d=>(l.cleanup??=new Set).add(d),this.nodes[a]=l,this.hooks[a]=d=>l.phaseFn(d)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??Jv)e()}finally{Bn(n)}}};function e_(t,n){let e=n?.injector??u(J),i=e.get($t),r=e.get(lc),o=e.get(Xt,null,{optional:!0});r.impl??=e.get(th);let s=t;typeof s=="function"&&(s={mixedReadWrite:t});let a=e.get(Tr,null,{optional:!0}),c=new Sh(r.impl,[s.earlyRead,s.write,s.mixedReadWrite,s.read],a?.view,i,e,o?.snapshot(null));return r.impl.register(c),c}function Ec(t,n){let e=Gn(t),i=n.elementInjector||Cr();return new Lr(e).create(i,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}var t_=null;function Lt(){return t_}function Mh(t){t_??=t}var Ko=class{},wc=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:()=>u(n_),providedIn:"platform"})}return t})();var n_=(()=>{class t extends wc{_location;_history;_doc=u(V);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Lt().getBaseHref(this._doc)}onPopState(e){let i=Lt().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=Lt().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function o_(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function i_(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function ni(t){return t&&t[0]!=="?"?`?${t}`:t}var xc=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:()=>u(yI),providedIn:"root"})}return t})(),_I=new v(""),yI=(()=>{class t extends xc{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??u(V).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return o_(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+ni(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let s=this.prepareExternalUrl(r+ni(o));this._platformLocation.pushState(e,i,s)}replaceState(e,i,r,o){let s=this.prepareExternalUrl(r+ni(o));this._platformLocation.replaceState(e,i,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(F(wc),F(_I,8))};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ic=(()=>{class t{_subject=new k;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=EI(i_(r_(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+ni(i))}normalize(e){return t.stripTrailingSlash(CI(this._basePath,r_(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+ni(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+ni(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=ni;static joinWithSlash=o_;static stripTrailingSlash=i_;static \u0275fac=function(i){return new(i||t)(F(xc))};static \u0275prov=y({token:t,factory:()=>DI(),providedIn:"root"})}return t})();function DI(){return new Ic(F(xc))}function CI(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function r_(t){return t.replace(/\/index\.html$/,"")}function EI(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Qo=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=u(J);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||t)(oe(Nt))};static \u0275dir=Q({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[ot]})}return t})();function xI(t,n){return new I(2100,!1)}var kh=class{createSubscription(n,e,i){return pt(()=>n.subscribe({next:e,error:i}))}dispose(n){pt(()=>n.unsubscribe())}},Th=class{createSubscription(n,e,i){return n.then(r=>e?.(r),r=>i?.(r)),{unsubscribe:()=>{e=null,i=null}}}dispose(n){n.unsubscribe()}},II=new Th,SI=new kh,Ah=(()=>{class t{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=u(cn);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,i=>this._updateLatestValue(e,i),i=>this.applicationErrorHandler(i))}_selectStrategy(e){if(zi(e))return II;if(gc(e))return SI;throw xI(t,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,i){e===this._obj&&(this._latestValue=i,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(i){return new(i||t)(oe(We,16))};static \u0275pipe=bh({name:"async",type:t,pure:!1})}return t})();function Sc(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}var Wi=class{};var Nh="browser";function s_(t){return t===Nh}var Xo=class{_doc;constructor(n){this._doc=n}manager},Mc=(()=>{class t extends Xo{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||t)(F(V))};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})(),Ac=new v(""),Ph=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(s=>{s.manager=this});let r=e.filter(s=>!(s instanceof Mc));this._plugins=r.slice().reverse();let o=e.find(s=>s instanceof Mc);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new I(5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(F(Ac),F(S))};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})(),Rh="ng-app-id";function a_(t){for(let n of t)n.remove()}function c_(t,n){let e=n.createElement("style");return e.textContent=t,e}function TI(t,n,e,i){let r=t.head?.querySelectorAll(`style[${Rh}="${n}"],link[${Rh}="${n}"]`);if(r)for(let o of r)o.removeAttribute(Rh),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Fh(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Lh=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,TI(e,i,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,c_);i?.forEach(r=>this.addUsage(r,this.external,Fh))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(a_(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])a_(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,c_(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,Fh(i,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(F(V),F(ei),F(Hi,8),F(ji))};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})(),Oh={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Vh=/%COMP%/g;var d_="%COMP%",AI=`_nghost-${d_}`,NI=`_ngcontent-${d_}`,RI=!0,OI=new v("",{factory:()=>RI});function FI(t){return NI.replace(Vh,t)}function PI(t){return AI.replace(Vh,t)}function u_(t,n){return n.map(e=>e.replace(Vh,t))}var Bh=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,i,r,o,s,a,c=null,l=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=s,this.ngZone=a,this.nonce=c,this.tracingService=l,this.defaultRenderer=new Jo(e,s,a,this.tracingService)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof Tc?r.applyToHost(e):r instanceof es&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let s=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,f=this.tracingService;switch(i.encapsulation){case Qt.Emulated:o=new Tc(c,l,i,this.appId,d,s,a,f);break;case Qt.ShadowDom:return new kc(c,e,i,s,a,this.nonce,f,l);case Qt.ExperimentalIsolatedShadowDom:return new kc(c,e,i,s,a,this.nonce,f);default:o=new es(c,l,i,d,s,a,f);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(F(Ph),F(Lh),F(ei),F(OI),F(V),F(S),F(Hi),F(Xt,8))};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})(),Jo=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(Oh[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(l_(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){n&&(l_(n)?n.content:n).insertBefore(e,i)}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new I(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let o=Oh[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=Oh[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){r&(dn.DashCase|dn.Important)?n.style.setProperty(e,i,r&dn.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){i&dn.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=Lt().getGlobalEventTarget(this.doc,n),!n))throw new I(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function l_(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var kc=class extends Jo{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,s,a,c){super(n,r,o,a),this.hostEl=e,this.sharedStylesHost=c,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let l=i.styles;l=u_(i.id,l);for(let f of l){let h=document.createElement("style");s&&h.setAttribute("nonce",s),h.textContent=f,this.shadowRoot.appendChild(h)}let d=i.getExternalStyles?.();if(d)for(let f of d){let h=Fh(f,r);s&&h.setAttribute("nonce",s),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},es=class extends Jo{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,s,a,c){super(n,o,s,a),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let l=i.styles;this.styles=c?u_(c,l):l,this.styleUrls=i.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Li.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Tc=class extends es{contentAttr;hostAttr;constructor(n,e,i,r,o,s,a,c){let l=r+"-"+i.id;super(n,e,i,o,s,a,c,l),this.contentAttr=FI(l),this.hostAttr=PI(l)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var Nc=class t extends Ko{supportsDOMEvents=!0;static makeCurrent(){Mh(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=LI();return e==null?null:VI(e)}resetBaseElement(){ts=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Sc(document.cookie,n)}},ts=null;function LI(){return ts=ts||document.head.querySelector("base"),ts?ts.getAttribute("href"):null}function VI(t){return new URL(t,document.baseURI).pathname}var BI=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})(),f_=["alt","control","meta","shift"],jI={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},HI={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},h_=(()=>{class t extends Xo{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let s=t.parseEventName(i),a=t.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Lt().onAndCancel(e,s.domEventName,a,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(i.pop()),s="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),s="code."),f_.forEach(l=>{let d=i.indexOf(l);d>-1&&(i.splice(d,1),s+=l+".")}),s+=o,i.length!=0||o.length===0)return null;let c={};return c.domEventName=r,c.fullKey=s,c}static matchEventFullKeyCode(e,i){let r=jI[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),f_.forEach(s=>{if(s!==r){let a=HI[s];a(e)&&(o+=s+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(F(V))};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})();function jh(t,n,e){return rr(this,null,function*(){let i=E({rootComponent:t},UI(n,e));return Xv(i)})}function UI(t,n){return{platformRef:n?.platformRef,appProviders:[...qI,...t?.providers??[]],platformProviders:WI}}function $I(){Nc.makeCurrent()}function zI(){return new bt}function GI(){return Hf(document),document}var WI=[{provide:ji,useValue:Nh},{provide:ic,useValue:$I,multi:!0},{provide:V,useFactory:GI}];var qI=[{provide:Do,useValue:"root"},{provide:bt,useFactory:zI},{provide:Ac,useClass:Mc,multi:!0},{provide:Ac,useClass:h_,multi:!0},Bh,Lh,Ph,{provide:ze,useExisting:Bh},{provide:Wi,useClass:BI},[]];var ii=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...i),this.headers.set(e,r);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=this.headers.get(e);if(!s)return;s=s.filter(a=>o.indexOf(a)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var Uh=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},$h=class{encodeKey(n){return m_(n)}encodeValue(n){return m_(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function YI(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[s,a]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],c=e.get(s)||[];c.push(a),e.set(s,c)}),e}var ZI=/%(\d[a-f0-9])/gi,KI={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function m_(t){return encodeURIComponent(t).replace(ZI,(n,e)=>KI[e]??n)}function Rc(t){return`${t}`}var Fn=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new $h,n.fromString){if(n.fromObject)throw new I(2805,!1);this.map=YI(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(Rc):[Rc(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(Rc(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=this.map.get(n.param)||[],r=i.indexOf(Rc(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function QI(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function p_(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function g_(t){return typeof Blob<"u"&&t instanceof Blob}function b_(t){return typeof FormData<"u"&&t instanceof FormData}function XI(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var v_="Content-Type",__="Accept",y_="text/plain",D_="application/json",JI=`${D_}, ${y_}, */*`,$r=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(QI(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new I(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new ii,this.context??=new Uh,!this.params)this.params=new Fn,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let a=e.indexOf("?"),c=a===-1?"?":a<e.length-1?"&":"";this.urlWithParams=e+c+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||p_(this.body)||g_(this.body)||b_(this.body)||XI(this.body)?this.body:this.body instanceof Fn?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||b_(this.body)?null:g_(this.body)?this.body.type||null:p_(this.body)?null:typeof this.body=="string"?y_:this.body instanceof Fn?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?D_:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,s=n.priority||this.priority,a=n.cache||this.cache,c=n.mode||this.mode,l=n.redirect||this.redirect,d=n.credentials||this.credentials,f=n.referrer??this.referrer,h=n.integrity||this.integrity,m=n.referrerPolicy||this.referrerPolicy,_=n.transferCache??this.transferCache,R=n.timeout??this.timeout,M=n.body!==void 0?n.body:this.body,Y=n.withCredentials??this.withCredentials,Te=n.reportProgress??this.reportProgress,vt=n.headers||this.headers,je=n.params||this.params,eo=n.context??this.context;return n.setHeaders!==void 0&&(vt=Object.keys(n.setHeaders).reduce((to,di)=>to.set(di,n.setHeaders[di]),vt)),n.setParams&&(je=Object.keys(n.setParams).reduce((to,di)=>to.set(di,n.setParams[di]),je)),new t(e,i,M,{params:je,headers:vt,context:eo,reportProgress:Te,responseType:r,withCredentials:Y,transferCache:_,keepalive:o,cache:a,priority:s,timeout:R,mode:c,redirect:l,credentials:d,referrer:f,integrity:h,referrerPolicy:m})}},qi=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(qi||{}),ns=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i="OK"){this.headers=n.headers||new ii,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},zh=class t extends ns{constructor(n={}){super(n)}type=qi.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},is=class t extends ns{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=qi.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},zr=class extends ns{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},eS=200,tS=204;var nS=/^\)\]\}',?\n/;var iS=(()=>{class t{xhrFactory;tracingService=u(Xt,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new I(-2800,!1);let i=this.xhrFactory;return Ae(null).pipe(Yt(()=>new B(o=>{let s=i.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((M,Y)=>s.setRequestHeader(M,Y.join(","))),e.headers.has(__)||s.setRequestHeader(__,JI),!e.headers.has(v_)){let M=e.detectContentTypeHeader();M!==null&&s.setRequestHeader(v_,M)}if(e.timeout&&(s.timeout=e.timeout),e.responseType){let M=e.responseType.toLowerCase();s.responseType=M!=="json"?M:"text"}let a=e.serializeBody(),c=null,l=()=>{if(c!==null)return c;let M=s.statusText||"OK",Y=new ii(s.getAllResponseHeaders()),Te=s.responseURL||e.url;return c=new zh({headers:Y,status:s.status,statusText:M,url:Te}),c},d=this.maybePropagateTrace(()=>{let{headers:M,status:Y,statusText:Te,url:vt}=l(),je=null;Y!==tS&&(je=typeof s.response>"u"?s.responseText:s.response),Y===0&&(Y=je?eS:0);let eo=Y>=200&&Y<300;if(e.responseType==="json"&&typeof je=="string"){let to=je;je=je.replace(nS,"");try{je=je!==""?JSON.parse(je):null}catch(di){je=to,eo&&(eo=!1,je={error:di,text:je})}}eo?(o.next(new is({body:je,headers:M,status:Y,statusText:Te,url:vt||void 0})),o.complete()):o.error(new zr({error:je,headers:M,status:Y,statusText:Te,url:vt||void 0}))}),f=this.maybePropagateTrace(M=>{let{url:Y}=l(),Te=new zr({error:M,status:s.status||0,statusText:s.statusText||"Unknown Error",url:Y||void 0});o.error(Te)}),h=f;e.timeout&&(h=this.maybePropagateTrace(M=>{let{url:Y}=l(),Te=new zr({error:new DOMException("Request timed out","TimeoutError"),status:s.status||0,statusText:s.statusText||"Request timeout",url:Y||void 0});o.error(Te)}));let m=!1,_=this.maybePropagateTrace(M=>{m||(o.next(l()),m=!0);let Y={type:qi.DownloadProgress,loaded:M.loaded};M.lengthComputable&&(Y.total=M.total),e.responseType==="text"&&s.responseText&&(Y.partialText=s.responseText),o.next(Y)}),R=this.maybePropagateTrace(M=>{let Y={type:qi.UploadProgress,loaded:M.loaded};M.lengthComputable&&(Y.total=M.total),o.next(Y)});return s.addEventListener("load",d),s.addEventListener("error",f),s.addEventListener("timeout",h),s.addEventListener("abort",f),e.reportProgress&&(s.addEventListener("progress",_),a!==null&&s.upload&&s.upload.addEventListener("progress",R)),s.send(a),o.next({type:qi.Sent}),()=>{s.removeEventListener("error",f),s.removeEventListener("abort",f),s.removeEventListener("load",d),s.removeEventListener("timeout",h),e.reportProgress&&(s.removeEventListener("progress",_),a!==null&&s.upload&&s.upload.removeEventListener("progress",R)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(i){return new(i||t)(F(Wi))};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function rS(t,n){return n(t)}function oS(t,n,e){return(i,r)=>Er(e,()=>n(i,o=>t(o,r)))}var sS=new v("",{factory:()=>[]}),C_=new v(""),aS=new v("",{factory:()=>!0});var cS=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=F(iS),r},providedIn:"root"})}return t})();var lS=(()=>{class t{backend;injector;chain=null;pendingTasks=u(Io);contributeToStability=u(aS);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(sS),...this.injector.get(C_,[])]));this.chain=i.reduceRight((r,o)=>oS(r,o,this.injector),rS)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(ko(i))}else return this.chain(e,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||t)(F(cS),F(we))};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),dS=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=F(lS),r},providedIn:"root"})}return t})();function Hh(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var Gh=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof $r)o=e;else{let c;r.headers instanceof ii?c=r.headers:c=new ii(r.headers);let l;r.params&&(r.params instanceof Fn?l=r.params:l=new Fn({fromObject:r.params})),o=new $r(e,i,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:l,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let s=Ae(o).pipe(gu(c=>this.handler.handle(c)));if(e instanceof $r||r.observe==="events")return s;let a=s.pipe(Ue(c=>c instanceof is));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return a.pipe(ee(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new I(2806,!1);return c.body}));case"blob":return a.pipe(ee(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new I(2807,!1);return c.body}));case"text":return a.pipe(ee(c=>{if(c.body!==null&&typeof c.body!="string")throw new I(2808,!1);return c.body}));default:return a.pipe(ee(c=>c.body))}case"response":return a;default:throw new I(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new Fn().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,Hh(r,i))}post(e,i,r={}){return this.request("POST",e,Hh(r,i))}put(e,i,r={}){return this.request("PUT",e,Hh(r,i))}static \u0275fac=function(i){return new(i||t)(F(dS))};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var rs=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=F(fS),r},providedIn:"root"})}return t})(),fS=(()=>{class t extends rs{_doc;constructor(e){super(),this._doc=e}sanitize(e,i){if(i==null)return null;switch(e){case Xe.NONE:return i;case Xe.HTML:return Ui(i,"HTML")?Nn(i):Yf(this._doc,String(i)).toString();case Xe.STYLE:return Ui(i,"Style")?Nn(i):i;case Xe.SCRIPT:if(Ui(i,"Script"))return Nn(i);throw new I(5200,!1);case Xe.URL:return Ui(i,"URL")?Nn(i):sc(String(i));case Xe.RESOURCE_URL:if(Ui(i,"ResourceURL"))return Nn(i);throw new I(5201,!1);default:throw new I(5202,!1)}}bypassSecurityTrustHtml(e){return $f(e)}bypassSecurityTrustStyle(e){return zf(e)}bypassSecurityTrustScript(e){return Gf(e)}bypassSecurityTrustUrl(e){return Wf(e)}bypassSecurityTrustResourceUrl(e){return qf(e)}static \u0275fac=function(i){return new(i||t)(F(V))};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var E_=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Wh;try{Wh=typeof Intl<"u"&&Intl.v8BreakIterator}catch(t){Wh=!1}var ve=(()=>{class t{_platformId=u(ji);isBrowser=this._platformId?s_(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Wh)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function qh(t){return Array.isArray(t)?t:[t]}var w_=new Set,Yi,os=(()=>{class t{_platform=u(ve);_nonce=u(Hi,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):pS}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&mS(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function mS(t,n){if(!w_.has(t))try{Yi||(Yi=document.createElement("style"),n&&Yi.setAttribute("nonce",n),Yi.setAttribute("type","text/css"),document.head.appendChild(Yi)),Yi.sheet&&(Yi.sheet.insertRule(`@media ${t} {body{ }}`,0),w_.add(t))}catch(e){console.error(e)}}function pS(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var gS=new v("MATERIAL_ANIMATIONS"),x_=null;function Yh(){return u(gS,{optional:!0})?.animationsDisabled||u(Ho,{optional:!0})==="NoopAnimations"?"di-disabled":(x_??=u(os).matchMedia("(prefers-reduced-motion)").matches,x_?"reduced-motion":"enabled")}function Pe(){return Yh()!=="enabled"}function ss(t){return t.buttons===0||t.detail===0}function as(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var Zh;function I_(){if(Zh==null){let t=typeof document<"u"?document.head:null;Zh=!!(t&&(t.createShadowRoot||t.attachShadow))}return Zh}function Kh(t){if(I_()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function et(t){return t.composedPath?t.composedPath()[0]:t.target}var cs;function S_(){if(cs==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>cs=!0}))}finally{cs=cs||!1}return cs}function Gr(t){return S_()?t:!!t.capture}function ls(t,n=0){return M_(t)?Number(t):arguments.length===2?n:0}function M_(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function vn(t){return t instanceof N?t.nativeElement:t}var k_=new v("cdk-input-modality-detector-options"),T_={ignoreKeys:[18,17,224,91,16]},A_=650,Qh={passive:!0,capture:!0},N_=(()=>{class t{_platform=u(ve);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new En(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=et(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<A_||(this._modality.next(ss(e)?"keyboard":"mouse"),this._mostRecentTarget=et(e))};_onTouchstart=e=>{if(as(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=et(e)};constructor(){let e=u(S),i=u(V),r=u(k_,{optional:!0});if(this._options=E(E({},T_),r),this.modalityDetected=this._modality.pipe(Ou(1)),this.modalityChanged=this.modalityDetected.pipe(Ra()),this._platform.isBrowser){let o=u(ze).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,Qh),o.listen(i,"mousedown",this._onMousedown,Qh),o.listen(i,"touchstart",this._onTouchstart,Qh)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ds=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(ds||{}),R_=new v("cdk-focus-monitor-default-options"),Oc=Gr({passive:!0,capture:!0}),Zi=(()=>{class t{_ngZone=u(S);_platform=u(ve);_inputModalityDetector=u(N_);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=u(V);_stopInputModalityDetector=new k;constructor(){let e=u(R_,{optional:!0});this._detectionMode=e?.detectionMode||ds.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=et(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=vn(e);if(!this._platform.isBrowser||r.nodeType!==1)return Ae();let o=Kh(r)||this._document,s=this._elementInfo.get(r);if(s)return i&&(s.checkChildren=!0),s.subject;let a={checkChildren:i,subject:new k,rootNode:o};return this._elementInfo.set(r,a),this._registerGlobalListeners(a),a.subject}stopMonitoring(e){let i=vn(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=vn(e),s=this._document.activeElement;o===s?this._getClosestElementsInfo(o).forEach(([a,c])=>this._originChanged(a,i,c)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===ds.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===ds.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?A_:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=et(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,Oc),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,Oc)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(le(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Oc),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Oc),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let s=0;s<o.length;s++)if(o[s].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Fc=new WeakMap,at=(()=>{class t{_appRef;_injector=u(J);_environmentInjector=u(we);load(e){let i=this._appRef=this._appRef||this._injector.get(Rt),r=Fc.get(i);r||(r={loaders:new Set,refs:[]},Fc.set(i,r),i.onDestroy(()=>{Fc.get(i)?.refs.forEach(o=>o.destroy()),Fc.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(Ec(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var us=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=w({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})(),Pc;function bS(){if(Pc===void 0&&(Pc=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(Pc=t.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return Pc}function Ki(t){return bS()?.createHTML(t)||t}function O_(t,n,e){let i=e.sanitize(Xe.HTML,n);t.innerHTML=Ki(i||"")}var vS=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var F_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=X({type:t});static \u0275inj=K({providers:[vS]})}return t})();var P_=new v("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),L_=new v("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),_S=0,Xh=(()=>{class t{_ngZone=u(S);_defaultOptions=u(L_,{optional:!0});_liveElement;_document=u(V);_sanitizer=u(rs);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=u(P_,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...i){let r=this._defaultOptions,o,s;return i.length===1&&typeof i[0]=="number"?s=i[0]:[o,s]=i,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),s==null&&r&&(s=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(a=>this._currentResolve=a)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:O_(this._liveElement,e,this._sanitizer),typeof s=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),s)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",i=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<i.length;o++)i[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${_S++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let i=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<i.length;r++){let o=i[r],s=o.getAttribute("aria-owns");s?s.indexOf(e)===-1&&o.setAttribute("aria-owns",s+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var yS=200,Lc=class{_letterKeyStream=new k;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new k;selectedItem=this._selectedItem;constructor(n,e){let i=typeof e?.debounceInterval=="number"?e.debounceInterval:yS;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(Ct(e=>this._pressedLetters.push(e)),So(n),Ue(()=>this._pressedLetters.length>0),ee(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Vt(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var Vc=class{_items;_activeItemIndex=me(-1);_activeItem=me(null);_wrap=!1;_typeaheadSubscription=O.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof Pi?this._itemChangesSubscription=n.changes.subscribe(i=>this._itemsChanged(i.toArray())):$i(n)&&(this._effectRef=Ni(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new k;change=new k;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Lc(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(o<s?o:s-1,-1);break}else return;default:(r||Vt(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),i=typeof n=="number"?n:e.indexOf(n),r=e[i];this._activeItem.set(r??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let i=1;i<=e.length;i++){let r=(this._activeItemIndex()+n*i+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let i=this._getItemsArray();if(i[n]){for(;this._skipPredicateFn(i[n]);)if(n+=e,!i[n])return;this.setActiveItem(n)}}_getItemsArray(){return $i(this._items)?this._items():this._items instanceof Pi?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let i=n.indexOf(e);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var fs=class extends Vc{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var tm={},tt=class t{_appId=u(ei);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),tm.hasOwnProperty(n)||(tm[n]=0),`${n}${e?t._infix+"-":""}${tm[n]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})};var U_=" ";function rm(t,n,e){let i=jc(t,n);e=e.trim(),!i.some(r=>r.trim()===e)&&(i.push(e),t.setAttribute(n,i.join(U_)))}function Hc(t,n,e){let i=jc(t,n);e=e.trim();let r=i.filter(o=>o!==e);r.length?t.setAttribute(n,r.join(U_)):t.removeAttribute(n)}function jc(t,n){return t.getAttribute(n)?.match(/\S+/g)??[]}var $_="cdk-describedby-message",Bc="cdk-describedby-host",im=0,z_=(()=>{class t{_platform=u(ve);_document=u(V);_messageRegistry=new Map;_messagesContainer=null;_id=`${im++}`;constructor(){u(at).load(us),this._id=u(ei)+"-"+im++}describe(e,i,r){if(!this._canBeDescribed(e,i))return;let o=nm(i,r);typeof i!="string"?(H_(i,this._id),this._messageRegistry.set(o,{messageElement:i,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(i,r),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,i,r){if(!i||!this._isElementNode(e))return;let o=nm(i,r);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof i=="string"){let s=this._messageRegistry.get(o);s&&s.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${Bc}="${this._id}"]`);for(let i=0;i<e.length;i++)this._removeCdkDescribedByReferenceIds(e[i]),e[i].removeAttribute(Bc);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,i){let r=this._document.createElement("div");H_(r,this._id),r.textContent=e,i&&r.setAttribute("role",i),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(nm(e,i),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",i=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<i.length;o++)i[o].remove();let r=this._document.createElement("div");r.style.visibility="hidden",r.classList.add(e),r.classList.add("cdk-visually-hidden"),this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(e){let i=jc(e,"aria-describedby").filter(r=>r.indexOf($_)!=0);e.setAttribute("aria-describedby",i.join(" "))}_addMessageReference(e,i){let r=this._messageRegistry.get(i);rm(e,"aria-describedby",r.messageElement.id),e.setAttribute(Bc,this._id),r.referenceCount++}_removeMessageReference(e,i){let r=this._messageRegistry.get(i);r.referenceCount--,Hc(e,"aria-describedby",r.messageElement.id),e.removeAttribute(Bc)}_isElementDescribedByMessage(e,i){let r=jc(e,"aria-describedby"),o=this._messageRegistry.get(i),s=o&&o.messageElement.id;return!!s&&r.indexOf(s)!=-1}_canBeDescribed(e,i){if(!this._isElementNode(e))return!1;if(i&&typeof i=="object")return!0;let r=i==null?"":`${i}`.trim(),o=e.getAttribute("aria-label");return r?!o||o.trim()!==r:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function nm(t,n){return typeof t=="string"?`${n||""}/${t}`:t}function H_(t,n){t.id||(t.id=`${$_}-${n}-${im++}`)}var Qi;function G_(){if(Qi==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Qi=!1,Qi;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Qi=!0;else{let t=Element.prototype.scrollTo;t?Qi=!/\{\s*\[native code\]\s*\}/.test(t.toString()):Qi=!1}}return Qi}function om(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function ke(t){return t==null?"":typeof t=="string"?t:`${t}px`}function ri(t){return t!=null&&`${t}`!="false"}var Bt=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(Bt||{}),sm=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Bt.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},W_=Gr({passive:!0,capture:!0}),am=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let s=o.get(i);s?s.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,W_)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,W_)))}_delegateEventHandler=n=>{let e=et(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},hs={enterDuration:225,exitDuration:150},DS=800,q_=Gr({passive:!0,capture:!0}),Y_=["mousedown","touchstart"],Z_=["mouseup","mouseleave","touchend","touchcancel"],CS=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=w({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return t})(),ms=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new am;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=vn(i)),o&&o.get(at).load(CS)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=E(E({},hs),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let s=i.radius||ES(n,e,r),a=n-r.left,c=e-r.top,l=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${a-s}px`,d.style.top=`${c-s}px`,d.style.height=`${s*2}px`,d.style.width=`${s*2}px`,i.color!=null&&(d.style.backgroundColor=i.color),d.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(d);let f=window.getComputedStyle(d),h=f.transitionProperty,m=f.transitionDuration,_=h==="none"||m==="0s"||m==="0s, 0s"||r.width===0&&r.height===0,R=new sm(this,d,i,_);d.style.transform="scale3d(1, 1, 1)",R.state=Bt.FADING_IN,i.persistent||(this._mostRecentTransientRipple=R);let M=null;return!_&&(l||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Y=()=>{M&&(M.fallbackTimer=null),clearTimeout(vt),this._finishRippleTransition(R)},Te=()=>this._destroyRipple(R),vt=setTimeout(Te,l+100);d.addEventListener("transitionend",Y),d.addEventListener("transitioncancel",Te),M={onTransitionEnd:Y,onTransitionCancel:Te,fallbackTimer:vt}}),this._activeRipples.set(R,M),(_||!l)&&this._finishRippleTransition(R),R}fadeOutRipple(n){if(n.state===Bt.FADING_OUT||n.state===Bt.HIDDEN)return;let e=n.element,i=E(E({},hs),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=Bt.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=vn(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Y_.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Z_.forEach(e=>{this._triggerElement.addEventListener(e,this,q_)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===Bt.FADING_IN?this._startFadeOutTransition(n):n.state===Bt.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=Bt.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=Bt.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=ss(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+DS;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!as(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===Bt.VISIBLE||n.config.terminateOnPointerUp&&n.state===Bt.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(Y_.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(Z_.forEach(e=>n.removeEventListener(e,this,q_)),this._pointerUpEventsRegistered=!1))}};function ES(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var cm=new v("mat-ripple-global-options"),Wr=(()=>{class t{_elementRef=u(N);_animationsDisabled=Pe();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=u(S),i=u(ve),r=u(cm,{optional:!0}),o=u(J);this._globalOptions=r||{},this._rippleRenderer=new ms(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:E(E(E({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,i,E(E({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,E(E({},this.rippleConfig),e))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=Q({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&L("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var K_=(()=>{class t{_animationsDisabled=Pe();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=w({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(i,r){i&2&&L("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return t})();var oi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=w({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var wS=["*",[["mat-option"],["ng-container"]]],xS=["*","mat-option, ng-container"],IS=["text"],SS=[[["mat-icon"]],"*"],MS=["mat-icon","*"];function kS(t,n){if(t&1&&$(0,"mat-pseudo-checkbox",1),t&2){let e=ue();C("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function TS(t,n){if(t&1&&$(0,"mat-pseudo-checkbox",3),t&2){let e=ue();C("disabled",e.disabled)}}function AS(t,n){if(t&1&&(g(0,"span",4),D(1),p()),t&2){let e=ue();b(),se("(",e.group.label,")")}}var ps=new v("MAT_OPTION_PARENT_COMPONENT"),gs=new v("MatOptgroup"),Gc=(()=>{class t{label;disabled=!1;_labelId=u(tt).getId("mat-optgroup-label-");_inert;constructor(){let e=u(ps,{optional:!0});this._inert=e?.inertGroups??!1}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=w({type:t,selectors:[["mat-optgroup"]],hostAttrs:[1,"mat-mdc-optgroup"],hostVars:3,hostBindings:function(i,r){i&2&&te("role",r._inert?null:"group")("aria-disabled",r._inert?null:r.disabled.toString())("aria-labelledby",r._inert?null:r._labelId)},inputs:{label:"label",disabled:[2,"disabled","disabled",U]},exportAs:["matOptgroup"],features:[Re([{provide:gs,useExisting:t}])],ngContentSelectors:xS,decls:5,vars:4,consts:[["role","presentation",1,"mat-mdc-optgroup-label",3,"id"],[1,"mdc-list-item__primary-text"]],template:function(i,r){i&1&&(ge(wS),Et(0,"span",0)(1,"span",1),D(2),z(3),Ot()(),z(4,1)),i&2&&(L("mdc-list-item--disabled",r.disabled),Jt("id",r._labelId),b(2),se("",r.label," "))},styles:[`.mat-mdc-optgroup {
  color: var(--mat-optgroup-label-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-optgroup-label-text-font, var(--mat-sys-title-small-font));
  line-height: var(--mat-optgroup-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-size: var(--mat-optgroup-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-optgroup-label-text-tracking, var(--mat-sys-title-small-tracking));
  font-weight: var(--mat-optgroup-label-text-weight, var(--mat-sys-title-small-weight));
}

.mat-mdc-optgroup-label {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  outline: none;
}
.mat-mdc-optgroup-label.mdc-list-item--disabled {
  opacity: 0.38;
}
.mat-mdc-optgroup-label .mdc-list-item__primary-text {
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  white-space: normal;
  color: inherit;
}
`],encapsulation:2,changeDetection:0})}return t})(),Uc=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},Ce=(()=>{class t{_element=u(N);_changeDetectorRef=u(We);_parent=u(ps,{optional:!0});group=u(gs,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=u(tt).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=me(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new Z;_text;_stateChanges=new k;constructor(){let e=u(at);e.load(oi),e.load(us),this._signalDisableRipple=!!this._parent&&$i(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,i){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(i)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Vt(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Uc(this,e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=w({type:t,selectors:[["mat-option"]],viewQuery:function(i,r){if(i&1&&Ne(IS,7),i&2){let o;G(o=W())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(i,r){i&1&&ne("click",function(){return r._selectViaInteraction()})("keydown",function(s){return r._handleKeydown(s)}),i&2&&(Jt("id",r.id),te("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),L("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",U]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:MS,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(i,r){i&1&&(ge(SS),ae(0,kS,1,2,"mat-pseudo-checkbox",1),z(1),g(2,"span",2,0),z(4,1),p(),ae(5,TS,1,1,"mat-pseudo-checkbox",3),ae(6,AS,2,1,"span",4),$(7,"div",5)),i&2&&(ce(r.multiple?0:-1),b(5),ce(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),b(),ce(r.group&&r.group._inert?6:-1),b(),C("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[K_,Wr],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return t})();function lm(t,n,e){if(e.length){let i=n.toArray(),r=e.toArray(),o=0;for(let s=0;s<t+1;s++)i[s].group&&i[s].group===r[o]&&o++;return o}return 0}function dm(t,n,e,i){return t<e?t:t+n>e+i?Math.max(0,t-i+n):e}var NS=new v("cdk-dir-doc",{providedIn:"root",factory:()=>u(V)}),RS=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Q_(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?RS.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var _n=(()=>{class t{get value(){return this.valueSignal()}valueSignal=me("ltr");change=new Z;constructor(){let e=u(NS,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Q_(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Le=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=X({type:t});static \u0275inj=K({})}return t})();var Wc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=X({type:t});static \u0275inj=K({imports:[Le]})}return t})();var X_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=X({type:t});static \u0275inj=K({imports:[Le]})}return t})();var um=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=X({type:t});static \u0275inj=K({imports:[Wc,X_,Ce,Le]})}return t})();var OS={capture:!0},FS=["focus","mousedown","mouseenter","touchstart"],fm="mat-ripple-loader-uninitialized",hm="mat-ripple-loader-class-name",J_="mat-ripple-loader-centered",qc="mat-ripple-loader-disabled",ey=(()=>{class t{_document=u(V);_animationsDisabled=Pe();_globalRippleOptions=u(cm,{optional:!0});_platform=u(ve);_ngZone=u(S);_injector=u(J);_eventCleanups;_hosts=new Map;constructor(){let e=u(ze).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>FS.map(i=>e.listen(this._document,i,this._onInteraction,OS)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(fm,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(hm))&&e.setAttribute(hm,i.className||""),i.centered&&e.setAttribute(J_,""),i.disabled&&e.setAttribute(qc,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(qc,""):e.removeAttribute(qc)}_onInteraction=e=>{let i=et(e);if(i instanceof HTMLElement){let r=i.closest(`[${fm}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(hm)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??hs.enterDuration,s=this._animationsDisabled?0:r?.animation?.exitDuration??hs.exitDuration,a={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(qc),rippleConfig:{centered:e.hasAttribute(J_),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:s}}},c=new ms(a,this._ngZone,i,this._platform,this._injector),l=!a.rippleDisabled;l&&c.setupTriggerEvents(e),this._hosts.set(e,{target:a,renderer:c,hasSetUpEvents:l}),e.removeAttribute(fm)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Yc=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,i,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var PS=["mat-internal-form-field",""],LS=["*"],Zc=(()=>{class t{labelPosition="after";static \u0275fac=function(i){return new(i||t)};static \u0275cmp=w({type:t,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(i,r){i&2&&L("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:PS,ngContentSelectors:LS,decls:1,vars:0,template:function(i,r){i&1&&(ge(),z(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})();var ty=new bi("21.2.14");var ay=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(oe(st),oe(N))};static \u0275dir=Q({type:t})}return t})(),VS=(()=>{class t extends ay{static \u0275fac=(()=>{let e;return function(r){return(e||(e=fn(t)))(r||t)}})();static \u0275dir=Q({type:t,features:[Ge]})}return t})(),ai=new v("");var BS={provide:ai,useExisting:rt(()=>ll),multi:!0};function jS(){let t=Lt()?Lt().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var HS=new v(""),ll=(()=>{class t extends ay{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!jS())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(oe(st),oe(N),oe(HS,8))};static \u0275dir=Q({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&ne("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},standalone:!1,features:[Re([BS]),Ge]})}return t})();function gm(t){return t==null||bm(t)===0}function bm(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Ji=new v(""),vm=new v(""),US=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Qc=class{static min(n){return $S(n)}static max(n){return zS(n)}static required(n){return GS(n)}static requiredTrue(n){return WS(n)}static email(n){return qS(n)}static minLength(n){return YS(n)}static maxLength(n){return ZS(n)}static pattern(n){return KS(n)}static nullValidator(n){return cy()}static compose(n){return my(n)}static composeAsync(n){return py(n)}};function $S(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function zS(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function GS(t){return gm(t.value)?{required:!0}:null}function WS(t){return t.value===!0?null:{required:!0}}function qS(t){return gm(t.value)||US.test(t.value)?null:{email:!0}}function YS(t){return n=>{let e=n.value?.length??bm(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function ZS(t){return n=>{let e=n.value?.length??bm(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function KS(t){if(!t)return cy;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(gm(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function cy(t){return null}function ly(t){return t!=null}function dy(t){return zi(t)?Ut(t):t}function uy(t){let n={};return t.forEach(e=>{n=e!=null?E(E({},n),e):n}),Object.keys(n).length===0?null:n}function fy(t,n){return n.map(e=>e(t))}function QS(t){return!t.validate}function hy(t){return t.map(n=>QS(n)?n:e=>n.validate(e))}function my(t){if(!t)return null;let n=t.filter(ly);return n.length==0?null:function(e){return uy(fy(e,n))}}function _m(t){return t!=null?my(hy(t)):null}function py(t){if(!t)return null;let n=t.filter(ly);return n.length==0?null:function(e){let i=fy(e,n).map(dy);return lo(i).pipe(ee(uy))}}function ym(t){return t!=null?py(hy(t)):null}function ny(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function gy(t){return t._rawValidators}function by(t){return t._rawAsyncValidators}function mm(t){return t?Array.isArray(t)?t:[t]:[]}function Xc(t,n){return Array.isArray(t)?t.includes(n):t===n}function iy(t,n){let e=mm(n);return mm(t).forEach(r=>{Xc(e,r)||e.push(r)}),e}function ry(t,n){return mm(n).filter(e=>!Xc(t,e))}var Jc=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=_m(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=ym(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},Zr=class extends Jc{name;get formDirective(){return null}get path(){return null}},Xi=class extends Jc{_parent=null;name=null;valueAccessor=null},pm=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var qe=(()=>{class t extends pm{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(oe(Xi,2))};static \u0275dir=Q({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&L("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[Ge]})}return t})();var bs="VALID",Kc="INVALID",qr="PENDING",vs="DISABLED",si=class{},el=class extends si{value;source;constructor(n,e){super(),this.value=n,this.source=e}},ys=class extends si{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},Ds=class extends si{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},Yr=class extends si{status;source;constructor(n,e){super(),this.status=n,this.source=e}},tl=class extends si{source;constructor(n){super(),this.source=n}},nl=class extends si{source;constructor(n){super(),this.source=n}};function vy(t){return(dl(t)?t.validators:t)||null}function XS(t){return Array.isArray(t)?_m(t):t||null}function _y(t,n){return(dl(n)?n.asyncValidators:t)||null}function JS(t){return Array.isArray(t)?ym(t):t||null}function dl(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function eM(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new I(1e3,"");if(!i[e])throw new I(1001,"")}function tM(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new I(-1002,"")})}var il=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return pt(this.statusReactive)}set status(n){pt(()=>this.statusReactive.set(n))}_status=fe(()=>this.statusReactive());statusReactive=me(void 0);get valid(){return this.status===bs}get invalid(){return this.status===Kc}get pending(){return this.status===qr}get disabled(){return this.status===vs}get enabled(){return this.status!==vs}errors;get pristine(){return pt(this.pristineReactive)}set pristine(n){pt(()=>this.pristineReactive.set(n))}_pristine=fe(()=>this.pristineReactive());pristineReactive=me(!0);get dirty(){return!this.pristine}get touched(){return pt(this.touchedReactive)}set touched(n){pt(()=>this.touchedReactive.set(n))}_touched=fe(()=>this.touchedReactive());touchedReactive=me(!1);get untouched(){return!this.touched}_events=new k;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(iy(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(iy(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(ry(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(ry(n,this._rawAsyncValidators))}hasValidator(n){return Xc(this._rawValidators,n)}hasAsyncValidator(n){return Xc(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(ie(E({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Ds(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new Ds(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(ie(E({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new ys(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new ys(!0,i))}markAsPending(n={}){this.status=qr;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Yr(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(ie(E({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=vs,this.errors=null,this._forEachChild(r=>{r.disable(ie(E({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new el(this.value,i)),this._events.next(new Yr(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(ie(E({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=bs,this._forEachChild(i=>{i.enable(ie(E({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(ie(E({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===bs||this.status===qr)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new el(this.value,e)),this._events.next(new Yr(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(ie(E({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?vs:bs}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=qr,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=dy(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new Yr(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new Z,this.statusChanges=new Z}_calculateStatus(){return this._allControlsDisabled()?vs:this.errors?Kc:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(qr)?qr:this._anyControlsHaveStatus(Kc)?Kc:bs}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new ys(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new Ds(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){dl(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=XS(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=JS(this._rawAsyncValidators)}},rl=class extends il{constructor(n,e,i){super(vy(e),_y(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){tM(this,!0,n),Object.keys(n).forEach(i=>{eM(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this.controls[i];r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,ie(E({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new nl(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var ul=new v("",{factory:()=>Dm}),Dm="always";function ol(t,n,e=Dm){Cm(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),iM(t,n),oM(t,n),rM(t,n),nM(t,n)}function sl(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),cl(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function al(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function nM(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function Cm(t,n){let e=gy(t);n.validator!==null?t.setValidators(ny(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=by(t);n.asyncValidator!==null?t.setAsyncValidators(ny(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();al(n._rawValidators,r),al(n._rawAsyncValidators,r)}function cl(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=gy(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=by(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return al(n._rawValidators,i),al(n._rawAsyncValidators,i),e}function iM(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&yy(t,n)})}function rM(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&yy(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function yy(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function oM(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function Dy(t,n){t==null,Cm(t,n)}function sM(t,n){return cl(t,n)}function aM(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function cM(t){return Object.getPrototypeOf(t.constructor)===VS}function Cy(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function lM(t,n){if(!n)return null;Array.isArray(n);let e,i,r;return n.forEach(o=>{o.constructor===ll?e=o:cM(o)?i=o:r=o}),r||i||e||null}function dM(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var uM={provide:Zr,useExisting:rt(()=>Em)},_s=Promise.resolve(),Em=(()=>{class t extends Zr{callSetDisabledState;get submitted(){return pt(this.submittedReactive)}_submitted=fe(()=>this.submittedReactive());submittedReactive=me(!1);_directives=new Set;form;ngSubmit=new Z;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new rl({},_m(e),ym(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){_s.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),ol(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){_s.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){_s.then(()=>{let i=this._findContainer(e.path),r=new rl({});Dy(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){_s.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){_s.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),Cy(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new tl(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)(oe(Ji,10),oe(vm,10),oe(ul,8))};static \u0275dir=Q({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&ne("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Re([uM]),Ge]})}return t})();function oy(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function sy(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var ye=class extends il{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(vy(e),_y(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),dl(e)&&(e.nonNullable||e.initialValueIsDefault)&&(sy(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new nl(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){oy(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){oy(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){sy(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var fM=t=>t instanceof ye;var hM=(()=>{class t extends Zr{callSetDisabledState;get submitted(){return pt(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=fe(()=>this._submittedReactive());_submittedReactive=me(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(cl(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return ol(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){sl(e.control||null,e,!1),dM(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,Cy(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new tl(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(sl(i||null,e),fM(r)&&(ol(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);Dy(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&sM(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Cm(this.form,this),this._oldForm&&cl(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)(oe(Ji,10),oe(vm,10),oe(ul,8))};static \u0275dir=Q({type:t,features:[Ge,ot]})}return t})();var Ey=new v(""),mM={provide:Xi,useExisting:rt(()=>Ve)},Ve=(()=>{class t extends Xi{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new Z;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,r,o,s){super(),this._ngModelWarningConfig=o,this.callSetDisabledState=s,this._setValidators(e),this._setAsyncValidators(i),this.valueAccessor=lM(this,r)}ngOnChanges(e){if(this._isControlChanged(e)){let i=e.form.previousValue;i&&sl(i,this,!1),ol(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}aM(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&sl(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}static \u0275fac=function(i){return new(i||t)(oe(Ji,10),oe(vm,10),oe(ai,10),oe(Ey,8),oe(ul,8))};static \u0275dir=Q({type:t,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[Re([mM]),Ge,ot]})}return t})();var pM={provide:Zr,useExisting:rt(()=>wm)},wm=(()=>{class t extends hM{form=null;ngSubmit=new Z;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=fn(t)))(r||t)}})();static \u0275dir=Q({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&ne("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Re([pM]),Ge]})}return t})();var gM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=X({type:t});static \u0275inj=K({})}return t})();var Ye=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Ey,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:ul,useValue:e.callSetDisabledState??Dm}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=X({type:t});static \u0275inj=K({imports:[gM]})}return t})();var bM=["switch"],vM=["*"];function _M(t,n){t&1&&(g(0,"span",11),qt(),g(1,"svg",13),$(2,"path",14),p(),g(3,"svg",15),$(4,"path",16),p()())}var yM=new v("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),fl=class{source;checked;constructor(n,e){this.source=n,this.checked=e}},xm=(()=>{class t{_elementRef=u(N);_focusMonitor=u(Zi);_changeDetectorRef=u(We);defaults=u(yM);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new fl(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=Pe();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new Z;toggleChange=new Z;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){u(at).load(oi);let e=u(new gn("tabindex"),{optional:!0}),i=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=i.color||"accent",this.id=this._uniqueId=u(tt).getId("mat-mdc-slide-toggle-"),this.hideIcon=i.hideIcon??!1,this.disabledInteractive=i.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new fl(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=w({type:t,selectors:[["mat-slide-toggle"]],viewQuery:function(i,r){if(i&1&&Ne(bM,5),i&2){let o;G(o=W())&&(r._switchElement=o.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(i,r){i&2&&(Jt("id",r.id),te("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),Je(r.color?"mat-"+r.color:""),L("mat-mdc-slide-toggle-focused",r._focused)("mat-mdc-slide-toggle-checked",r.checked)("_mat-animation-noopable",r._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",U],color:"color",disabled:[2,"disabled","disabled",U],disableRipple:[2,"disableRipple","disableRipple",U],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:wt(e)],checked:[2,"checked","checked",U],hideIcon:[2,"hideIcon","hideIcon",U],disabledInteractive:[2,"disabledInteractive","disabledInteractive",U]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[Re([{provide:ai,useExisting:rt(()=>t),multi:!0},{provide:Ji,useExisting:t,multi:!0}]),ot],ngContentSelectors:vM,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(i,r){if(i&1&&(ge(),g(0,"div",1)(1,"button",2,0),ne("click",function(){return r._handleClick()}),$(3,"div",3)(4,"span",4),g(5,"span",5)(6,"span",6)(7,"span",7),$(8,"span",8),p(),g(9,"span",9),$(10,"span",10),p(),ae(11,_M,5,0,"span",11),p()()(),g(12,"label",12),ne("click",function(s){return s.stopPropagation()}),z(13),p()()),i&2){let o=Pt(2);C("labelPosition",r.labelPosition),b(),L("mdc-switch--selected",r.checked)("mdc-switch--unselected",!r.checked)("mdc-switch--checked",r.checked)("mdc-switch--disabled",r.disabled)("mat-mdc-slide-toggle-disabled-interactive",r.disabledInteractive),C("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex)("disabled",r.disabled&&!r.disabledInteractive),te("id",r.buttonId)("name",r.name)("aria-label",r.ariaLabel)("aria-labelledby",r._getAriaLabelledBy())("aria-describedby",r.ariaDescribedby)("aria-required",r.required||null)("aria-checked",r.checked)("aria-disabled",r.disabled&&r.disabledInteractive?"true":null),b(9),C("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0),b(),ce(r.hideIcon?-1:11),b(),C("for",r.buttonId),te("id",r._labelId)}},dependencies:[Wr,Zc],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--mat-slide-toggle-track-height, 32px);
  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--mat-slide-toggle-handle-width);
  height: var(--mat-slide-toggle-handle-height);
  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--mat-slide-toggle-selected-handle-size, 24px);
  height: var(--mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--selected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));
}
.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));
}
.mdc-switch--unselected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));
}
.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--mat-slide-toggle-state-layer-size, 40px);
  height: var(--mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--mat-slide-toggle-selected-icon-size, 16px);
  height: var(--mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return t})(),wy=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=X({type:t});static \u0275inj=K({imports:[xm,Le]})}return t})();var CM=["*",[["mat-toolbar-row"]]],EM=["*","mat-toolbar-row"],wM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=Q({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),xy=(()=>{class t{_elementRef=u(N);_platform=u(ve);_document=u(V);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=w({type:t,selectors:[["mat-toolbar"]],contentQueries:function(i,r,o){if(i&1&&pn(o,wM,5),i&2){let s;G(s=W())&&(r._toolbarRows=s)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(i,r){i&2&&(Je(r.color?"mat-"+r.color:""),L("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:EM,decls:2,vars:0,template:function(i,r){i&1&&(ge(CM),z(0),z(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var Im=class{_box;_destroyed=new k;_resizeSubject=new k;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new B(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(Ue(e=>e.some(i=>i.target===n)),Fa({bufferSize:1,refCount:!0}),le(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Iy=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=u(S);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new Im(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var xM=["notch"],IM=["matFormFieldNotchedOutline",""],SM=["*"],Sy=["iconPrefixContainer"],My=["textPrefixContainer"],ky=["iconSuffixContainer"],Ty=["textSuffixContainer"],MM=["textField"],kM=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],TM=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function AM(t,n){t&1&&$(0,"span",21)}function NM(t,n){if(t&1&&(g(0,"label",20),z(1,1),ae(2,AM,1,0,"span",21),p()),t&2){let e=ue(2);C("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),te("for",e._control.disableAutomaticLabeling?null:e._control.id),b(2),ce(!e.hideRequiredMarker&&e._control.required?2:-1)}}function RM(t,n){if(t&1&&ae(0,NM,3,5,"label",20),t&2){let e=ue();ce(e._hasFloatingLabel()?0:-1)}}function OM(t,n){t&1&&$(0,"div",7)}function FM(t,n){}function PM(t,n){if(t&1&&mn(0,FM,0,0,"ng-template",13),t&2){ue(2);let e=Pt(1);C("ngTemplateOutlet",e)}}function LM(t,n){if(t&1&&(g(0,"div",9),ae(1,PM,1,1,null,13),p()),t&2){let e=ue();C("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),b(),ce(e._forceDisplayInfixLabel()?-1:1)}}function VM(t,n){t&1&&(g(0,"div",10,2),z(2,2),p())}function BM(t,n){t&1&&(g(0,"div",11,3),z(2,3),p())}function jM(t,n){}function HM(t,n){if(t&1&&mn(0,jM,0,0,"ng-template",13),t&2){ue();let e=Pt(1);C("ngTemplateOutlet",e)}}function UM(t,n){t&1&&(g(0,"div",14,4),z(2,4),p())}function $M(t,n){t&1&&(g(0,"div",15,5),z(2,5),p())}function zM(t,n){t&1&&$(0,"div",16)}function GM(t,n){t&1&&(g(0,"div",18),z(1,6),p())}function WM(t,n){if(t&1&&(g(0,"mat-hint",22),D(1),p()),t&2){let e=ue(2);C("id",e._hintLabelId),b(),mt(e.hintLabel)}}function qM(t,n){if(t&1&&(g(0,"div",19),ae(1,WM,2,2,"mat-hint",22),z(2,7),$(3,"div",23),z(4,8),p()),t&2){let e=ue();b(),ce(e.hintLabel?1:-1)}}var Sm=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=Q({type:t,selectors:[["mat-label"]]})}return t})(),YM=new v("MatError");var Mm=(()=>{class t{align="start";id=u(tt).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=Q({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(Jt("id",r.id),te("align",null),L("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),ZM=new v("MatPrefix");var KM=new v("MatSuffix");var Ly=new v("FloatingLabelParent"),Ay=(()=>{class t{_elementRef=u(N);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=u(Iy);_ngZone=u(S);_parent=u(Ly);_resizeSubscription=new O;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return QM(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=Q({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&L("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function QM(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var Ny="mdc-line-ripple--active",hl="mdc-line-ripple--deactivating",Ry=(()=>{class t{_elementRef=u(N);_cleanupTransitionEnd;constructor(){let e=u(S),i=u(st);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(hl),e.add(Ny)}deactivate(){this._elementRef.nativeElement.classList.add(hl)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(hl);e.propertyName==="opacity"&&r&&i.remove(Ny,hl)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=Q({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),Oy=(()=>{class t{_elementRef=u(N);_ngZone=u(S);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=w({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&Ne(xM,5),i&2){let o;G(o=W())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&L("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:IM,ngContentSelectors:SM,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(ge(),Ft(0,"div",1),Et(1,"div",2,0),z(3),Ot(),Ft(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),km=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=Q({type:t})}return t})();var Tm=new v("MatFormField"),XM=new v("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Fy="fill",JM="auto",Py="fixed",ek="translateY(-50%)",Oe=(()=>{class t{_elementRef=u(N);_changeDetectorRef=u(We);_platform=u(ve);_idGenerator=u(tt);_ngZone=u(S);_defaults=u(XM,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Zo("iconPrefixContainer");_textPrefixContainerSignal=Zo("textPrefixContainer");_iconSuffixContainerSignal=Zo("iconSuffixContainer");_textSuffixContainerSignal=Zo("textSuffixContainer");_prefixSuffixContainers=fe(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Zv(Sm);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=ri(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||JM}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||Fy;this._appearanceSignal.set(i)}_appearanceSignal=me(Fy);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Py}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Py}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new k;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Pe();constructor(){let e=this._defaults,i=u(_n);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Ni(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=fe(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(be([void 0,void 0]),ee(()=>[i.errorState,i.userAriaDescribedBy]),Oa(),Ue(([[o,s],[a,c]])=>o!==a||s!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(le(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),pi(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){e_({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=fe(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(a=>a.align==="start"):null,s=this._hintChildren?this._hintChildren.find(a=>a.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),s&&e.push(s.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(s=>s&&!o.includes(s)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,s=e?.getBoundingClientRect().width??0,a=i?.getBoundingClientRect().width??0,c=r?.getBoundingClientRect().width??0,l=o?.getBoundingClientRect().width??0,d=this._currentDirection==="rtl"?"-1":"1",f=`${s+a}px`,m=`calc(${d} * (${f} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,_=`var(--mat-mdc-form-field-label-transform, ${ek} translateX(${m}))`,R=s+a+c+l;return[_,R]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=w({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(vc(o,r._labelChild,Sm,5),pn(o,km,5)(o,ZM,5)(o,KM,5)(o,YM,5)(o,Mm,5)),i&2){yc();let s;G(s=W())&&(r._formFieldControl=s.first),G(s=W())&&(r._prefixChildren=s),G(s=W())&&(r._suffixChildren=s),G(s=W())&&(r._errorChildren=s),G(s=W())&&(r._hintChildren=s)}},viewQuery:function(i,r){if(i&1&&(_c(r._iconPrefixContainerSignal,Sy,5)(r._textPrefixContainerSignal,My,5)(r._iconSuffixContainerSignal,ky,5)(r._textSuffixContainerSignal,Ty,5),Ne(MM,5)(Sy,5)(My,5)(ky,5)(Ty,5)(Ay,5)(Oy,5)(Ry,5)),i&2){yc(4);let o;G(o=W())&&(r._textField=o.first),G(o=W())&&(r._iconPrefixContainer=o.first),G(o=W())&&(r._textPrefixContainer=o.first),G(o=W())&&(r._iconSuffixContainer=o.first),G(o=W())&&(r._textSuffixContainer=o.first),G(o=W())&&(r._floatingLabel=o.first),G(o=W())&&(r._notchedOutline=o.first),G(o=W())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&L("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Re([{provide:Tm,useExisting:t},{provide:Ly,useExisting:t}])],ngContentSelectors:TM,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(ge(kM),mn(0,RM,1,1,"ng-template",null,0,qo),g(2,"div",6,1),ne("click",function(s){return r._control.onContainerClick(s)}),ae(4,OM,1,0,"div",7),g(5,"div",8),ae(6,LM,2,2,"div",9),ae(7,VM,3,0,"div",10),ae(8,BM,3,0,"div",11),g(9,"div",12),ae(10,HM,1,1,null,13),z(11),p(),ae(12,UM,3,0,"div",14),ae(13,$M,3,0,"div",15),p(),ae(14,zM,1,0,"div",16),p(),g(15,"div",17),ae(16,GM,2,0,"div",18)(17,qM,5,1,"div",19),p()),i&2){let o;b(2),L("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),b(2),ce(!r._hasOutline()&&!r._control.disabled?4:-1),b(2),ce(r._hasOutline()?6:-1),b(),ce(r._hasIconPrefix?7:-1),b(),ce(r._hasTextPrefix?8:-1),b(2),ce(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),b(2),ce(r._hasTextSuffix?12:-1),b(),ce(r._hasIconSuffix?13:-1),b(),ce(r._hasOutline()?-1:14),b(),L("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let s=r._getSubscriptMessageType();b(),ce((o=s)==="error"?16:o==="hint"?17:-1)}},dependencies:[Ay,Oy,Qo,Ry,Mm],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return t})();var Ze=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=X({type:t});static \u0275inj=K({imports:[F_,Oe,Le]})}return t})();var Cs=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new k;constructor(n=!1,e,i=!0,r){this._multiple=n,this._emitChanges=i,this.compareWith=r,e&&e.length&&(n?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){this._verifyValueAssignment(n),n.forEach(i=>this._markSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...n){this._verifyValueAssignment(n),n.forEach(i=>this._unmarkSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...n){this._verifyValueAssignment(n);let e=this.selected,i=new Set(n.map(o=>this._getConcreteValue(o)));n.forEach(o=>this._markSelected(o)),e.filter(o=>!i.has(this._getConcreteValue(o,i))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let i of e)if(this.compareWith(n,i))return i;return n}else return n}};var tk=20,Kr=(()=>{class t{_ngZone=u(S);_platform=u(ve);_renderer=u(ze).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new k;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=tk){return this._platform.isBrowser?new B(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(Na(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Ae()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(Ue(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&i.push(o)}),i}_scrollableContainsElement(e,i){let r=vn(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var nk=20,yn=(()=>{class t{_platform=u(ve);_listeners;_viewportSize=null;_change=new k;_document=u(V);constructor(){let e=u(S),i=u(ze).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen("window","resize",r),i.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),s=-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,a=-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:s,left:a}}change(e=nk){return e>0?this._change.pipe(Na(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Es=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=X({type:t});static \u0275inj=K({})}return t})(),Am=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=X({type:t});static \u0275inj=K({imports:[Le,Es,Le,Es]})}return t})();var ws=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},xs=class extends ws{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,i,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=i,this.projectableNodes=r,this.bindings=o||null}},Is=class extends ws{templateRef;viewContainerRef;context;injector;constructor(n,e,i,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},Nm=class extends ws{element;constructor(n){super(),this.element=n instanceof N?n.nativeElement:n}},Rm=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof xs)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof Is)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof Nm)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},ml=class extends Rm{outletElement;_appRef;_defaultInjector;constructor(n,e,i){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=i}attachComponentPortal(n){let e;if(n.viewContainerRef){let i=n.injector||n.viewContainerRef.injector,r=i.get(Vi,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:i,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,r=n.injector||this._defaultInjector||J.NULL,o=r.get(we,i.injector);e=Ec(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,i=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return i.rootNodes.forEach(r=>this.outletElement.appendChild(r)),i.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(i);r!==-1&&e.remove(r)}),this._attachedPortal=n,i}attachDomPortal=n=>{let e=n.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var Vy=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=X({type:t});static \u0275inj=K({})}return t})();var By=G_();function Wy(t){return new pl(t.get(yn),t.get(V))}var pl=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=ke(-this._previousScrollPosition.left),n.style.top=ke(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,i=n.style,r=e.style,o=i.scrollBehavior||"",s=r.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),By&&(i.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),By&&(i.scrollBehavior=o,r.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function qy(t,n){return new gl(t.get(Kr),t.get(S),t.get(yn),n)}var gl=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,i,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(Ue(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Ss=class{enable(){}disable(){}attach(){}};function Om(t,n){return n.some(e=>{let i=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,s=t.left>e.right;return i||r||o||s})}function jy(t,n){return n.some(e=>{let i=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,s=t.right>e.right;return i||r||o||s})}function tr(t,n){return new bl(t.get(Kr),t.get(yn),t.get(S),n)}var bl=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,i,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();Om(e,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},Yy=(()=>{class t{_injector=u(J);constructor(){}noop=()=>new Ss;close=e=>qy(this._injector,e);block=()=>Wy(this._injector);reposition=e=>tr(this._injector,e);static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ms=class{positionStrategy;scrollStrategy=new Ss;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let i of e)n[i]!==void 0&&(this[i]=n[i])}}};var vl=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var Zy=(()=>{class t{_attachedOverlays=[];_document=u(V);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ky=(()=>{class t extends Zy{_ngZone=u(S);_renderer=u(ze).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let r=i.length-1;r>-1;r--){let o=i[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=fn(t)))(r||t)}})();static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Qy=(()=>{class t extends Zy{_platform=u(ve);_ngZone=u(S);_renderer=u(ze).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,"pointerdown",this._pointerDownListener,r),o.listen(i,"click",this._clickListener,r),o.listen(i,"auxclick",this._clickListener,r),o.listen(i,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=et(e)};_clickListener=e=>{let i=et(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let s=o.length-1;s>-1;s--){let a=o[s],c=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,e,c))){if(Hy(a.overlayElement,i)||Hy(a.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=fn(t)))(r||t)}})();static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Hy(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=n;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var Xy=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=w({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),Jy=(()=>{class t{_platform=u(ve);_containerElement;_document=u(V);_styleLoader=u(at);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||om()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let i=this._document.createElement("div");i.classList.add(e),om()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(Xy)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Fm=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,i,r){this._renderer=e,this._ngZone=i,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Pm(t){return t&&t.nodeType===1}var _l=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new k;_attachments=new k;_detachments=new k;_positionStrategy;_scrollStrategy;_locationChanges=O.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new k;_outsidePointerEvents=new k;_afterNextRenderRef;constructor(n,e,i,r,o,s,a,c,l,d=!1,f,h){this._portalOutlet=n,this._host=e,this._pane=i,this._config=r,this._ngZone=o,this._keyboardDispatcher=s,this._document=a,this._location=c,this._outsideClickDispatcher=l,this._animationsDisabled=d,this._injector=f,this._renderer=h,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=hn(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=E(E({},this._config),n),this._updateElementSize()}setDirection(n){this._config=ie(E({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=ke(this._config.width),n.height=ke(this._config.height),n.minWidth=ke(this._config.minWidth),n.minHeight=ke(this._config.minHeight),n.maxWidth=ke(this._config.maxWidth),n.maxHeight=ke(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Pm(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(n){}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Fm(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,i){let r=qh(e||[]).filter(o=>!!o);r.length&&(i?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=hn(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},Uy="cdk-overlay-connected-position-bounding-box",rk=/([A-Za-z%]+)$/;function ks(t,n){return new yl(n,t.get(yn),t.get(V),t.get(ve),t.get(Jy))}var yl=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new k;_resizeSubscription=O.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,i,r,o){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(Uy),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,i=this._viewportRect,r=this._containerRect,o=[],s;for(let a of this._preferredPositions){let c=this._getOriginPoint(n,r,a),l=this._getOverlayPoint(c,e,a),d=this._getOverlayFit(l,e,i,a);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,c);return}if(this._canFitWithFlexibleDimensions(d,l,i)){o.push({position:a,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,a)});continue}(!s||s.overlayFit.visibleArea<d.visibleArea)&&(s={overlayFit:d,overlayPoint:l,originPoint:c,position:a,overlayRect:e})}if(o.length){let a=null,c=-1;for(let l of o){let d=l.boundingBoxRect.width*l.boundingBoxRect.height*(l.position.weight||1);d>c&&(c=d,a=l)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&er(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Uy),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof N?this._origin.nativeElement:Pm(this._origin)?this._origin:null}_getOriginPoint(n,e,i){let r;if(i.originX=="center")r=n.left+n.width/2;else{let s=this._isRtl()?n.right:n.left,a=this._isRtl()?n.left:n.right;r=i.originX=="start"?s:a}e.left<0&&(r-=e.left);let o;return i.originY=="center"?o=n.top+n.height/2:o=i.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,i){let r;i.overlayX=="center"?r=-e.width/2:i.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return i.overlayY=="center"?o=-e.height/2:o=i.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,i,r){let o=zy(e),{x:s,y:a}=n,c=this._getOffset(r,"x"),l=this._getOffset(r,"y");c&&(s+=c),l&&(a+=l);let d=0-s,f=s+o.width-i.width,h=0-a,m=a+o.height-i.height,_=this._subtractOverflows(o.width,d,f),R=this._subtractOverflows(o.height,h,m),M=_*R;return{visibleArea:M,isCompletelyWithinViewport:o.width*o.height===M,fitsInViewportVertically:R===o.height,fitsInViewportHorizontally:_==o.width}}_canFitWithFlexibleDimensions(n,e,i){if(this._hasFlexibleDimensions){let r=i.bottom-e.y,o=i.right-e.x,s=$y(this._overlayRef.getConfig().minHeight),a=$y(this._overlayRef.getConfig().minWidth),c=n.fitsInViewportVertically||s!=null&&s<=r,l=n.fitsInViewportHorizontally||a!=null&&a<=o;return c&&l}return!1}_pushOverlayOnScreen(n,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=zy(e),o=this._viewportRect,s=Math.max(n.x+r.width-o.width,0),a=Math.max(n.y+r.height-o.height,0),c=Math.max(o.top-i.top-n.y,0),l=Math.max(o.left-i.left-n.x,0),d=0,f=0;return r.width<=o.width?d=l||-s:d=n.x<this._getViewportMarginStart()?o.left-i.left-n.x:0,r.height<=o.height?f=c||-a:f=n.y<this._getViewportMarginTop()?o.top-i.top-n.y:0,this._previousPushAmount={x:d,y:f},{x:n.x+d,y:n.y+f}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!ok(this._lastScrollVisibility,i)){let r=new vl(n,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=n.overlayY;n.overlayX==="center"?i="center":this._isRtl()?i=n.overlayX==="start"?"right":"left":i=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(n,e){let i=this._viewportRect,r=this._isRtl(),o,s,a;if(e.overlayY==="top")s=n.y,o=i.height-s+this._getViewportMarginBottom();else if(e.overlayY==="bottom")a=i.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-a+this._getViewportMarginTop();else{let m=Math.min(i.bottom-n.y+i.top,n.y),_=this._lastBoundingBoxSize.height;o=m*2,s=n.y-m,o>_&&!this._isInitialRender&&!this._growAfterOpen&&(s=n.y-_/2)}let c=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,l=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,d,f,h;if(l)h=i.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=n.x-this._getViewportMarginStart();else if(c)f=n.x,d=i.right-n.x-this._getViewportMarginEnd();else{let m=Math.min(i.right-n.x+i.left,n.x),_=this._lastBoundingBoxSize.width;d=m*2,f=n.x-m,d>_&&!this._isInitialRender&&!this._growAfterOpen&&(f=n.x-_/2)}return{top:s,left:f,bottom:a,right:h,width:d,height:o}}_setBoundingBoxStyles(n,e){let i=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;r.width=ke(i.width),r.height=ke(i.height),r.top=ke(i.top)||"auto",r.bottom=ke(i.bottom)||"auto",r.left=ke(i.left)||"auto",r.right=ke(i.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=ke(o)),s&&(r.maxWidth=ke(s))}this._lastBoundingBoxSize=i,er(this._boundingBox.style,r)}_resetBoundingBoxStyles(){er(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){er(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let i={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(r){let d=this._viewportRuler.getViewportScrollPosition();er(i,this._getExactOverlayY(e,n,d)),er(i,this._getExactOverlayX(e,n,d))}else i.position="static";let a="",c=this._getOffset(e,"x"),l=this._getOffset(e,"y");c&&(a+=`translateX(${c}px) `),l&&(a+=`translateY(${l}px)`),i.transform=a.trim(),s.maxHeight&&(r?i.maxHeight=ke(s.maxHeight):o&&(i.maxHeight="")),s.maxWidth&&(r?i.maxWidth=ke(s.maxWidth):o&&(i.maxWidth="")),er(this._pane.style,i)}_getExactOverlayY(n,e,i){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),n.overlayY==="bottom"){let s=this._document.documentElement.clientHeight;r.bottom=`${s-(o.y+this._overlayRect.height)}px`}else r.top=ke(o.y);return r}_getExactOverlayX(n,e,i){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let s;if(this._isRtl()?s=n.overlayX==="end"?"left":"right":s=n.overlayX==="end"?"right":"left",s==="right"){let a=this._document.documentElement.clientWidth;r.right=`${a-(o.x+this._overlayRect.width)}px`}else r.left=ke(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:jy(n,i),isOriginOutsideView:Om(n,i),isOverlayClipped:jy(e,i),isOverlayOutsideView:Om(e,i)}}_subtractOverflows(n,...e){return e.reduce((i,r)=>i-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+n-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&qh(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof N)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,i=n.height||0;return{top:n.y,bottom:n.y+i,left:n.x,right:n.x+e,height:i,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let i=e.getBoundingClientRect();return n&&(e.style.display=""),i}};function er(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function $y(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(rk);return!e||e==="px"?parseFloat(n):null}return t||null}function zy(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function ok(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var Gy="cdk-global-overlay-wrapper";function eD(t){return new Dl}var Dl=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(Gy),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:s,maxHeight:a}=i,c=(r==="100%"||r==="100vw")&&(!s||s==="100%"||s==="100vw"),l=(o==="100%"||o==="100vh")&&(!a||a==="100%"||a==="100vh"),d=this._xPosition,f=this._xOffset,h=this._overlayRef.getConfig().direction==="rtl",m="",_="",R="";c?R="flex-start":d==="center"?(R="center",h?_=f:m=f):h?d==="left"||d==="end"?(R="flex-end",m=f):(d==="right"||d==="start")&&(R="flex-start",_=f):d==="left"||d==="start"?(R="flex-start",m=f):(d==="right"||d==="end")&&(R="flex-end",_=f),n.position=this._cssPosition,n.marginLeft=c?"0":m,n.marginTop=l?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=c?"0":_,e.justifyContent=R,e.alignItems=l?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(Gy),i.justifyContent=i.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},tD=(()=>{class t{_injector=u(J);constructor(){}global(){return eD()}flexibleConnectedTo(e){return ks(this._injector,e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ts=new v("OVERLAY_DEFAULT_CONFIG");function As(t,n){t.get(at).load(Xy);let e=t.get(Jy),i=t.get(V),r=t.get(tt),o=t.get(Rt),s=t.get(_n),a=t.get(st,null,{optional:!0})||t.get(ze).createRenderer(null,null),c=new Ms(n),l=t.get(Ts,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||s.value,"showPopover"in i.body?c.usePopover=n?.usePopover??l:c.usePopover=!1;let d=i.createElement("div"),f=i.createElement("div");d.id=r.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),f.appendChild(d),c.usePopover&&(f.setAttribute("popover","manual"),f.classList.add("cdk-overlay-popover"));let h=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return Pm(h)?h.after(f):h?.type==="parent"?h.element.appendChild(f):e.getContainerElement().appendChild(f),new _l(new ml(d,o,t),f,d,c,t.get(S),t.get(Ky),i,t.get(Ic),t.get(Qy),n?.disableAnimations??t.get(Ho,null,{optional:!0})==="NoopAnimations",t.get(we),a)}var nD=(()=>{class t{scrollStrategies=u(Yy);_positionBuilder=u(tD);_injector=u(J);constructor(){}create(e){return As(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),sk=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],ak=new v("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(J);return()=>tr(t)}}),Qr=(()=>{class t{elementRef=u(N);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=Q({type:t,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return t})(),iD=new v("cdk-connected-overlay-default-config"),El=(()=>{class t{_dir=u(_n,{optional:!0});_injector=u(J);_overlayRef;_templatePortal;_backdropSubscription=O.EMPTY;_attachSubscription=O.EMPTY;_detachSubscription=O.EMPTY;_positionSubscription=O.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=u(ak);_ngZone=u(S);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new Z;positionChange=new Z;attach=new Z;detach=new Z;overlayKeydown=new Z;overlayOutsideClick=new Z;constructor(){let e=u(un),i=u(Nt),r=u(iD,{optional:!0}),o=u(Ts,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new Is(e,i),this.scrollStrategy=this._scrollStrategyFactory(),r&&this._assignConfig(r)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=sk);let e=this._overlayRef=As(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(i=>{this.overlayKeydown.next(i),i.keyCode===27&&!this.disableClose&&!Vt(i)&&(i.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(i=>{let r=this._getOriginElement(),o=et(i);(!r||r!==o&&!r.contains(o))&&this.overlayOutsideClick.next(i)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),i=new Ms({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(i.height=this.height),(this.minWidth||this.minWidth===0)&&(i.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(i.minHeight=this.minHeight),this.backdropClass&&(i.backdropClass=this.backdropClass),this.panelClass&&(i.panelClass=this.panelClass),i}_updatePositionStrategy(e){let i=this.positions.map(r=>({originX:r.originX,originY:r.originY,overlayX:r.overlayX,overlayY:r.overlayY,offsetX:r.offsetX||this.offsetX,offsetY:r.offsetY||this.offsetY,panelClass:r.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(i).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=ks(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof Qr?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Qr?this.origin.elementRef.nativeElement:this.origin instanceof N?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(i=>this.backdropClick.emit(i)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Hu(()=>this.positionChange.observers.length>0)).subscribe(i=>{this._ngZone.run(()=>this.positionChange.emit(i)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(i){return new(i||t)};static \u0275dir=Q({type:t,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",U],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",U],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",U],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",U],push:[2,"cdkConnectedOverlayPush","push",U],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",U],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",U],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[ot]})}return t})(),Lm=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=X({type:t});static \u0275inj=K({providers:[nD],imports:[Le,Vy,Am,Am]})}return t})();var ck=["trigger"],lk=["panel"],dk=[[["mat-select-trigger"]],"*"],uk=["mat-select-trigger","*"];function fk(t,n){if(t&1&&(g(0,"span",4),D(1),p()),t&2){let e=ue();b(),mt(e.placeholder)}}function hk(t,n){t&1&&z(0)}function mk(t,n){if(t&1&&(g(0,"span",11),D(1),p()),t&2){let e=ue(2);b(),mt(e.triggerValue)}}function pk(t,n){if(t&1&&(g(0,"span",5),ae(1,hk,1,0)(2,mk,2,1,"span",11),p()),t&2){let e=ue();b(),ce(e.customTrigger?1:2)}}function gk(t,n){if(t&1){let e=Ur();g(0,"div",12,1),ne("keydown",function(r){ki(e);let o=ue();return Ti(o._handleKeydown(r))}),z(2,1),p()}if(t&2){let e=ue();Je(e.panelClass),L("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),te("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var bk=new v("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(J);return()=>tr(t)}}),vk=new v("MAT_SELECT_CONFIG"),_k=new v("MatSelectTrigger"),Vm=class{source;value;constructor(n,e){this.source=n,this.value=e}},Ke=(()=>{class t{_viewportRuler=u(yn);_changeDetectorRef=u(We);_elementRef=u(N);_dir=u(_n,{optional:!0});_idGenerator=u(tt);_renderer=u(st);_parentFormField=u(Tm,{optional:!0});ngControl=u(Xi,{self:!0,optional:!0});_liveAnnouncer=u(Xh);_defaultOptions=u(vk,{optional:!0});_animationsDisabled=Pe();_popoverLocation;_initialized=new k;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let i=this.options.toArray()[e];if(i){let r=this.panel.nativeElement,o=lm(e,this.options,this.optionGroups),s=i._getHostElement();e===0&&o===1?r.scrollTop=0:r.scrollTop=dm(s.offsetTop,s.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Vm(this,e)}_scrollStrategyFactory=u(bk);_panelOpen=!1;_compareWith=(e,i)=>e===i;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new k;_errorStateTracker;stateChanges=new k;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=me(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Qc.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=od(()=>{let e=this.options;return e?e.changes.pipe(be(e),Yt(()=>pi(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(Yt(()=>this.optionSelectionChanges))});openedChange=new Z;_openedStream=this.openedChange.pipe(Ue(e=>e),ee(()=>{}));_closedStream=this.openedChange.pipe(Ue(e=>!e),ee(()=>{}));selectionChange=new Z;valueChange=new Z;constructor(){let e=u(E_),i=u(Em,{optional:!0}),r=u(wm,{optional:!0}),o=u(new gn("tabindex"),{optional:!0}),s=u(Ts,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Yc(e,this.ngControl,r,i,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=s?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Cs(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(le(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(le(this._destroy)).subscribe(e=>{e.added.forEach(i=>i.select()),e.removed.forEach(i=>i.deselect())}),this.options.changes.pipe(be(null),le(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),i=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute("aria-labelledby",e):r.removeAttribute("aria-labelledby")}i&&(this._previousControl!==i.control&&(this._previousControl!==void 0&&i.disabled!==null&&i.disabled!==this.disabled&&(this.disabled=i.disabled),this._previousControl=i.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Ri(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let i=`${this.id}-panel`;this._trackedModal&&Hc(this._trackedModal,"aria-owns",i),rm(e,"aria-owns",i),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;Hc(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{i(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,i=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(i=>i.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let i=e.keyCode,r=i===40||i===38||i===37||i===39,o=i===13||i===32,s=this._keyManager;if(!s.isTyping()&&o&&!Vt(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let a=this.selected;s.onKeydown(e);let c=this.selected;c&&a!==c&&this._liveAnnouncer.announce(c.viewValue,1e4)}}_handleOpenKeydown(e){let i=this._keyManager,r=e.keyCode,o=r===40||r===38,s=i.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!s&&(r===13||r===32)&&i.activeItem&&!Vt(e))e.preventDefault(),i.activeItem._selectViaInteraction();else if(!s&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let a=this.options.some(c=>!c.disabled&&!c.selected);this.options.forEach(c=>{c.disabled||(a?c.select():c.deselect())})}else{let a=i.activeItemIndex;i.onKeydown(e),this._multiple&&o&&e.shiftKey&&i.activeItem&&i.activeItemIndex!==a&&i.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Vt(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(i=>i.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(i=>this._selectOptionByValue(i)),this._sortValues();else{let i=this._selectOptionByValue(e);i?this._keyManager.updateActiveItem(i):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let i=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch(o){return!1}});return i&&this._selectionModel.select(i),i}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Qr?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new fs(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=pi(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(le(e)).subscribe(i=>{this._onSelect(i.source,i.isUserInput),i.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),pi(...this.options.map(i=>i._stateChanges)).pipe(le(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,i){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),i&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),i&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((i,r)=>this.sortComparator?this.sortComparator(i,r,e):e.indexOf(i)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let i;this.multiple?i=this.selected.map(r=>r.value):i=this.selected?this.selected.value:e,this._value=i,this.valueChange.emit(i),this._onChange(i),this.selectionChange.emit(this._getChangeEvent(i)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let i=0;i<this.options.length;i++)if(!this.options.get(i).disabled){e=i;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,i=e?e+" ":"";return this.ariaLabelledby?i+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(e){let i=et(e);i&&(i.tagName==="MAT-OPTION"||i.classList.contains("cdk-overlay-backdrop")||i.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=w({type:t,selectors:[["mat-select"]],contentQueries:function(i,r,o){if(i&1&&pn(o,_k,5)(o,Ce,5)(o,gs,5),i&2){let s;G(s=W())&&(r.customTrigger=s.first),G(s=W())&&(r.options=s),G(s=W())&&(r.optionGroups=s)}},viewQuery:function(i,r){if(i&1&&Ne(ck,5)(lk,5)(El,5),i&2){let o;G(o=W())&&(r.trigger=o.first),G(o=W())&&(r.panel=o.first),G(o=W())&&(r._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(i,r){i&1&&ne("keydown",function(s){return r._handleKeydown(s)})("focus",function(){return r._onFocus()})("blur",function(){return r._onBlur()}),i&2&&(te("id",r.id)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r.panelOpen?r.id+"-panel":null)("aria-expanded",r.panelOpen)("aria-label",r.ariaLabel||null)("aria-required",r.required.toString())("aria-disabled",r.disabled.toString())("aria-invalid",r.errorState)("aria-activedescendant",r._getAriaActiveDescendant()),L("mat-mdc-select-disabled",r.disabled)("mat-mdc-select-invalid",r.errorState)("mat-mdc-select-required",r.required)("mat-mdc-select-empty",r.empty)("mat-mdc-select-multiple",r.multiple)("mat-select-open",r.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",U],disableRipple:[2,"disableRipple","disableRipple",U],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:wt(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",U],placeholder:"placeholder",required:[2,"required","required",U],multiple:[2,"multiple","multiple",U],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",U],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",wt],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",U]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[Re([{provide:km,useExisting:t},{provide:ps,useExisting:t}]),ot],ngContentSelectors:uk,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(i,r){if(i&1&&(ge(dk),g(0,"div",2,0),ne("click",function(){return r.open()}),g(3,"div",3),ae(4,fk,2,1,"span",4)(5,pk,3,1,"span",5),p(),g(6,"div",6)(7,"div",7),qt(),g(8,"svg",8),$(9,"path",9),p()()()(),mn(10,gk,3,16,"ng-template",10),ne("detach",function(){return r.close()})("backdropClick",function(){return r.close()})("overlayKeydown",function(s){return r._handleOverlayKeydown(s)})),i&2){let o=Pt(1);b(3),te("id",r._valueId),b(),ce(r.empty?4:5),b(6),C("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",r._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",r._scrollStrategy)("cdkConnectedOverlayOrigin",r._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",r._positions)("cdkConnectedOverlayWidth",r._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",r._popoverLocation)}},dependencies:[Qr,El],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return t})();var ct=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=X({type:t});static \u0275inj=K({imports:[Lm,um,Le,Es,Ze,um]})}return t})();var nr=class t{static \u0275fac=function(e){return new(e||t)};static \u0275dir=Q({type:t,selectors:[["","ngxMatSelectSearchClear",""]]})};var rD=["ariaLabel","clearSearchInput","closeIcon","closeSvgIcon","disableInitialFocus","disableScrollToActiveOnOptionsChanged","enableClearOnEscapePressed","hideClearSearchButton","noEntriesFoundLabel","placeholderLabel","preventHomeEndKeyPropagation","searching"],oD=new v("mat-selectsearch-default-options");var ir=class t{static \u0275fac=function(e){return new(e||t)};static \u0275dir=Q({type:t,selectors:[["","ngxMatSelectNoEntriesFound",""]]})};var yk=["input"],Dk=["label"],Ck=["*"],Bm={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},Ek=new v("mat-checkbox-default-options",{providedIn:"root",factory:()=>Bm}),lt=(function(t){return t[t.Init=0]="Init",t[t.Checked=1]="Checked",t[t.Unchecked=2]="Unchecked",t[t.Indeterminate=3]="Indeterminate",t})(lt||{}),jm=class{source;checked},sD=(()=>{class t{_elementRef=u(N);_changeDetectorRef=u(We);_ngZone=u(S);_animationsDisabled=Pe();_options=u(Ek,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let i=new jm;return i.source=this,i.checked=e,i}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new Z;indeterminateChange=new Z;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=lt.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){u(at).load(oi);let e=u(new gn("tabindex"),{optional:!0});this._options=this._options||Bm,this.color=this._options.color||Bm.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=u(tt).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let i=e!=this._indeterminate();this._indeterminate.set(e),i&&(e?this._transitionCheckState(lt.Indeterminate):this._transitionCheckState(this.checked?lt.Checked:lt.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=me(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let i=this._currentCheckState,r=this._getAnimationTargetElement();if(!(i===e||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(i,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?lt.Checked:lt.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,i){if(this._animationsDisabled)return"";switch(e){case lt.Init:if(i===lt.Checked)return this._animationClasses.uncheckedToChecked;if(i==lt.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case lt.Unchecked:return i===lt.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case lt.Checked:return i===lt.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case lt.Indeterminate:return i===lt.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let i=this._inputElement;i&&(i.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=w({type:t,selectors:[["mat-checkbox"]],viewQuery:function(i,r){if(i&1&&Ne(yk,5)(Dk,5),i&2){let o;G(o=W())&&(r._inputElement=o.first),G(o=W())&&(r._labelElement=o.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(i,r){i&2&&(Jt("id",r.id),te("tabindex",null)("aria-label",null)("aria-labelledby",null),Je(r.color?"mat-"+r.color:"mat-accent"),L("_mat-animation-noopable",r._animationsDisabled)("mdc-checkbox--disabled",r.disabled)("mat-mdc-checkbox-disabled",r.disabled)("mat-mdc-checkbox-checked",r.checked)("mat-mdc-checkbox-disabled-interactive",r.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",U],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",U],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",U],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:wt(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",U],checked:[2,"checked","checked",U],disabled:[2,"disabled","disabled",U],indeterminate:[2,"indeterminate","indeterminate",U]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[Re([{provide:ai,useExisting:rt(()=>t),multi:!0},{provide:Ji,useExisting:t,multi:!0}]),ot],ngContentSelectors:Ck,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(i,r){if(i&1&&(ge(),g(0,"div",3),ne("click",function(s){return r._preventBubblingFromLabel(s)}),g(1,"div",4,0)(3,"div",5),ne("click",function(){return r._onTouchTargetClick()}),p(),g(4,"input",6,1),ne("blur",function(){return r._onBlur()})("click",function(){return r._onInputClick()})("change",function(s){return r._onInteractionEvent(s)}),p(),$(6,"div",7),g(7,"div",8),qt(),g(8,"svg",9),$(9,"path",10),p(),kr(),$(10,"div",11),p(),$(11,"div",12),p(),g(12,"label",13,2),z(14),p()()),i&2){let o=Pt(2);C("labelPosition",r.labelPosition),b(4),L("mdc-checkbox--selected",r.checked),C("checked",r.checked)("indeterminate",r.indeterminate)("disabled",r.disabled&&!r.disabledInteractive)("id",r.inputId)("required",r.required)("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex),te("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-checked",r.indeterminate?"mixed":null)("aria-controls",r.ariaControls)("aria-disabled",r.disabled&&r.disabledInteractive?!0:null)("aria-expanded",r.ariaExpanded)("aria-owns",r.ariaOwns)("name",r.name)("value",r.value),b(7),C("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0),b(),C("for",r.inputId)}},dependencies:[Wr,Zc],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: GrayText;
  }
}
.mat-mdc-checkbox label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-checkbox-touch-target-size, 48px);
  width: var(--mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return t})();var aD=(()=>{class t{get vertical(){return this._vertical}set vertical(e){this._vertical=ri(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=ri(e)}_inset=!1;static \u0275fac=function(i){return new(i||t)};static \u0275cmp=w({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(i,r){i&2&&(te("aria-orientation",r.vertical?"vertical":"horizontal"),L("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-top-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-right-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2,changeDetection:0})}return t})();var wk=["tooltip"],xk=20;var Ik=new v("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(J);return()=>tr(t,{scrollThrottle:xk})}}),Sk=new v("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var cD="tooltip-panel",Mk={passive:!0},kk=8,Tk=8,Ak=24,Nk=200,Hm=(()=>{class t{_elementRef=u(N);_ngZone=u(S);_platform=u(ve);_ariaDescriber=u(z_);_focusMonitor=u(Zi);_dir=u(_n);_injector=u(J);_viewContainerRef=u(Nt);_mediaMatcher=u(os);_document=u(V);_renderer=u(st);_animationsDisabled=Pe();_defaultOptions=u(Sk,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=lD;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=ri(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let i=ri(e);this._disabled!==i&&(this._disabled=i,i?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=ls(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=ls(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let i=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(i)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new k;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=kk}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(le(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(i=>i()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,i){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let r=this._createOverlay(i);this._detach(),this._portal=this._portal||new xs(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=r.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(le(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(e)}hide(e=this.hideDelay){let i=this._tooltipInstance;i&&(i.isVisible()?i.hide(e):(i._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let s=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&s._origin instanceof N)return this._overlayRef;this._detach()}let i=this._injector.get(Kr).getAncestorScrollContainers(this._elementRef),r=`${this._cssClassPrefix}-${cD}`,o=ks(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(i).withPopoverLocation("global");return o.positionChanges.pipe(le(this._destroyed)).subscribe(s=>{this._updateCurrentPositionClass(s.connectionPair),this._tooltipInstance&&s.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=As(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,r]:r,scrollStrategy:this._injector.get(Ik)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(le(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(le(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(le(this._destroyed)).subscribe(s=>{s.preventDefault(),s.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(le(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let i=e.getConfig().positionStrategy,r=this._getOrigin(),o=this._getOverlayPosition();i.withPositions([this._addOffset(E(E({},r.main),o.main)),this._addOffset(E(E({},r.fallback),o.fallback))])}_addOffset(e){let i=Tk,r=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-i:e.originY==="bottom"?e.offsetY=i:e.originX==="start"?e.offsetX=r?-i:i:e.originX==="end"&&(e.offsetX=r?i:-i),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",i=this.position,r;i=="above"||i=="below"?r={originX:"center",originY:i=="above"?"top":"bottom"}:i=="before"||i=="left"&&e||i=="right"&&!e?r={originX:"start",originY:"center"}:(i=="after"||i=="right"&&e||i=="left"&&!e)&&(r={originX:"end",originY:"center"});let{x:o,y:s}=this._invertPosition(r.originX,r.originY);return{main:r,fallback:{originX:o,originY:s}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",i=this.position,r;i=="above"?r={overlayX:"center",overlayY:"bottom"}:i=="below"?r={overlayX:"center",overlayY:"top"}:i=="before"||i=="left"&&e||i=="right"&&!e?r={overlayX:"end",overlayY:"center"}:(i=="after"||i=="right"&&e||i=="left"&&!e)&&(r={overlayX:"start",overlayY:"center"});let{x:o,y:s}=this._invertPosition(r.overlayX,r.overlayY);return{main:r,fallback:{overlayX:o,overlayY:s}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),hn(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,i){return this.position==="above"||this.position==="below"?i==="top"?i="bottom":i==="bottom"&&(i="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:i}}_updateCurrentPositionClass(e){let{overlayY:i,originX:r,originY:o}=e,s;if(i==="center"?this._dir&&this._dir.value==="rtl"?s=r==="end"?"left":"right":s=r==="start"?"left":"right":s=i==="bottom"&&o==="top"?"above":"below",s!==this._currentPosition){let a=this._overlayRef;if(a){let c=`${this._cssClassPrefix}-${cD}-`;a.removePanelClass(c+this._currentPosition),a.addPanelClass(c+s)}this._currentPosition=s}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let i=e.targetTouches?.[0],r=i?{x:i.clientX,y:i.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,r)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let i;e.x!==void 0&&e.y!==void 0&&(i=e),this.show(void 0,i)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let i=e.relatedTarget;(!i||!this._overlayRef?.overlayElement.contains(i))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let i=this._document.elementFromPoint(e.clientX,e.clientY),r=this._elementRef.nativeElement;i!==r&&!r.contains(i)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,i){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,i,Mk))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let i=this._elementRef.nativeElement,r=i.style;(e==="on"||i.nodeName!=="INPUT"&&i.nodeName!=="TEXTAREA")&&(r.userSelect=r.msUserSelect=r.webkitUserSelect=r.MozUserSelect="none"),(e==="on"||!i.draggable)&&(r.webkitUserDrag="none"),r.touchAction="none",r.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||hn({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!Vt(e):!0;static \u0275fac=function(i){return new(i||t)};static \u0275dir=Q({type:t,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(i,r){i&2&&L("mat-mdc-tooltip-disabled",r.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return t})(),lD=(()=>{class t{_changeDetectorRef=u(We);_elementRef=u(N);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=Pe();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new k;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>Ak&&e.width>=Nk}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let i=this._tooltip.nativeElement,r=this._showAnimation,o=this._hideAnimation;if(i.classList.remove(e?o:r),i.classList.add(e?r:o),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let s=getComputedStyle(i);(s.getPropertyValue("animation-duration")==="0s"||s.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(i.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=w({type:t,selectors:[["mat-tooltip-component"]],viewQuery:function(i,r){if(i&1&&Ne(wk,7),i&2){let o;G(o=W())&&(r._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(i,r){i&1&&ne("mouseleave",function(s){return r._handleMouseLeave(s)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(i,r){i&1&&(Et(0,"div",1,0),bc("animationend",function(s){return r._handleAnimationEnd(s)}),Et(2,"div",2),D(3),Ot()()),i&2&&(Je(r.tooltipClass),L("mdc-tooltip--multiline",r._isMultiline),b(3),mt(r.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return t})();var Rk=["determinateSpinner"];function Ok(t,n){if(t&1&&(qt(),g(0,"svg",11),$(1,"circle",12),p()),t&2){let e=ue();te("viewBox",e._viewBox()),b(),Gi("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),te("r",e._circleRadius())}}var Fk=new v("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:dD})}),dD=100,Pk=10,uD=(()=>{class t{_elementRef=u(N);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=u(Fk),i=Yh(),r=this._elementRef.nativeElement;this._noopAnimations=i==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=r.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&i==="reduced-motion"&&r.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=dD;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-Pk)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=w({type:t,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(i,r){if(i&1&&Ne(Rk,5),i&2){let o;G(o=W())&&(r._determinateCircle=o.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(i,r){i&2&&(te("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",r.mode==="determinate"?r.value:null)("mode",r.mode),Je("mat-"+r.color),Gi("width",r.diameter,"px")("height",r.diameter,"px")("--mat-progress-spinner-size",r.diameter+"px")("--mat-progress-spinner-active-indicator-width",r.diameter+"px"),L("_mat-animation-noopable",r._noopAnimations)("mdc-circular-progress--indeterminate",r.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",wt],diameter:[2,"diameter","diameter",wt],strokeWidth:[2,"strokeWidth","strokeWidth",wt]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(i,r){if(i&1&&(mn(0,Ok,2,8,"ng-template",null,0,qo),g(2,"div",2,1),qt(),g(4,"svg",3),$(5,"circle",4),p()(),kr(),g(6,"div",5)(7,"div",6)(8,"div",7),Hr(9,8),p(),g(10,"div",9),Hr(11,8),p(),g(12,"div",10),Hr(13,8),p()()()),i&2){let o=Pt(1);b(4),te("viewBox",r._viewBox()),b(),Gi("stroke-dasharray",r._strokeCircumference(),"px")("stroke-dashoffset",r._strokeDashOffset(),"px")("stroke-width",r._circleStrokeWidth(),"%"),te("r",r._circleRadius()),b(4),C("ngTemplateOutlet",o),b(2),C("ngTemplateOutlet",o),b(2),C("ngTemplateOutlet",o)}},dependencies:[Qo],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function fD(t){return Error(`Unable to find icon with the name "${t}"`)}function Lk(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function hD(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function mD(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var Ln=class{url;svgText;options;svgElement=null;constructor(n,e,i){this.url=n,this.svgText=e,this.options=i}},gD=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,i,r,o){this._httpClient=e,this._sanitizer=i,this._errorHandler=o,this._document=r}addSvgIcon(e,i,r){return this.addSvgIconInNamespace("",e,i,r)}addSvgIconLiteral(e,i,r){return this.addSvgIconLiteralInNamespace("",e,i,r)}addSvgIconInNamespace(e,i,r,o){return this._addSvgIconConfig(e,i,new Ln(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,i,r,o){let s=this._sanitizer.sanitize(Xe.HTML,r);if(!s)throw mD(r);let a=Ki(s);return this._addSvgIconConfig(e,i,new Ln("",a,o))}addSvgIconSet(e,i){return this.addSvgIconSetInNamespace("",e,i)}addSvgIconSetLiteral(e,i){return this.addSvgIconSetLiteralInNamespace("",e,i)}addSvgIconSetInNamespace(e,i,r){return this._addSvgIconSetConfig(e,new Ln(i,null,r))}addSvgIconSetLiteralInNamespace(e,i,r){let o=this._sanitizer.sanitize(Xe.HTML,i);if(!o)throw mD(i);let s=Ki(o);return this._addSvgIconSetConfig(e,new Ln("",s,r))}registerFontClassAlias(e,i=e){return this._fontCssClassesByAlias.set(e,i),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let i=this._sanitizer.sanitize(Xe.RESOURCE_URL,e);if(!i)throw hD(e);let r=this._cachedIconsByUrl.get(i);return r?Ae(wl(r)):this._loadSvgIconFromConfig(new Ln(e,null)).pipe(Ct(o=>this._cachedIconsByUrl.set(i,o)),ee(o=>wl(o)))}getNamedSvgIcon(e,i=""){let r=pD(i,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(i,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let s=this._iconSetConfigs.get(i);return s?this._getSvgFromIconSetConfigs(e,s):ao(fD(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?Ae(wl(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(ee(i=>wl(i)))}_getSvgFromIconSetConfigs(e,i){let r=this._extractIconWithNameFromAnySet(e,i);if(r)return Ae(r);let o=i.filter(s=>!s.svgText).map(s=>this._loadSvgIconSetFromConfig(s).pipe(pu(a=>{let l=`Loading icon set URL: ${this._sanitizer.sanitize(Xe.RESOURCE_URL,s.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(l)),Ae(null)})));return lo(o).pipe(ee(()=>{let s=this._extractIconWithNameFromAnySet(e,i);if(!s)throw fD(e);return s}))}_extractIconWithNameFromAnySet(e,i){for(let r=i.length-1;r>=0;r--){let o=i[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let s=this._svgElementFromConfig(o),a=this._extractSvgIconFromSet(s,e,o.options);if(a)return a}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(Ct(i=>e.svgText=i),ee(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?Ae(null):this._fetchIcon(e).pipe(Ct(i=>e.svgText=i))}_extractSvgIconFromSet(e,i,r){let o=e.querySelector(`[id="${i}"]`);if(!o)return null;let s=o.cloneNode(!0);if(s.removeAttribute("id"),s.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(s,r);if(s.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(s),r);let a=this._svgElementFromString(Ki("<svg></svg>"));return a.appendChild(s),this._setSvgAttributes(a,r)}_svgElementFromString(e){let i=this._document.createElement("DIV");i.innerHTML=e;let r=i.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let i=this._svgElementFromString(Ki("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:s,value:a}=r[o];s!=="id"&&i.setAttribute(s,a)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&i.appendChild(e.childNodes[o].cloneNode(!0));return i}_setSvgAttributes(e,i){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),i&&i.viewBox&&e.setAttribute("viewBox",i.viewBox),e}_fetchIcon(e){let{url:i,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw Lk();if(i==null)throw Error(`Cannot fetch icon from URL "${i}".`);let s=this._sanitizer.sanitize(Xe.RESOURCE_URL,i);if(!s)throw hD(i);let a=this._inProgressUrlFetches.get(s);if(a)return a;let c=this._httpClient.get(s,{responseType:"text",withCredentials:o}).pipe(ee(l=>Ki(l)),ko(()=>this._inProgressUrlFetches.delete(s)),Au());return this._inProgressUrlFetches.set(s,c),c}_addSvgIconConfig(e,i,r){return this._svgIconConfigs.set(pD(e,i),r),this}_addSvgIconSetConfig(e,i){let r=this._iconSetConfigs.get(e);return r?r.push(i):this._iconSetConfigs.set(e,[i]),this}_svgElementFromConfig(e){if(!e.svgElement){let i=this._svgElementFromString(e.svgText);this._setSvgAttributes(i,e.options),e.svgElement=i}return e.svgElement}_getIconConfigFromResolvers(e,i){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](i,e);if(o)return Vk(o)?new Ln(o.url,null,o.options):new Ln(o,null)}}static \u0275fac=function(i){return new(i||t)(F(Gh,8),F(rs),F(V,8),F(bt))};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function wl(t){return t.cloneNode(!0)}function pD(t,n){return t+":"+n}function Vk(t){return!!(t.url&&t.options)}var Bk=["*"],jk=new v("MAT_ICON_DEFAULT_OPTIONS"),Hk=new v("mat-icon-location",{providedIn:"root",factory:()=>{let t=u(V),n=t?t.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),bD=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Uk=bD.map(t=>`[${t}]`).join(", "),$k=/^url\(['"]?#(.*?)['"]?\)$/,Xr=(()=>{class t{_elementRef=u(N);_iconRegistry=u(gD);_location=u(Hk);_errorHandler=u(bt);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let i=this._cleanupFontValue(e);i!==this._fontSet&&(this._fontSet=i,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let i=this._cleanupFontValue(e);i!==this._fontIcon&&(this._fontIcon=i,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=O.EMPTY;constructor(){let e=u(new gn("aria-hidden"),{optional:!0}),i=u(jk,{optional:!0});i&&(i.color&&(this.color=this._defaultColor=i.color),i.fontSet&&(this.fontSet=i.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let i=e.split(":");switch(i.length){case 1:return["",i[0]];case 2:return i;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let i=this._location.getPathname();i!==this._previousPath&&(this._previousPath=i,this._prependPathToReferences(i))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,i=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();i--;){let r=e.childNodes[i];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,i=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),i.forEach(r=>e.classList.add(r)),this._previousFontSetClass=i,this.fontIcon!==this._previousFontIconClass&&!i.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let i=this._elementsWithExternalReferences;i&&i.forEach((r,o)=>{r.forEach(s=>{o.setAttribute(s.name,`url('${e}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(e){let i=e.querySelectorAll(Uk),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<i.length;o++)bD.forEach(s=>{let a=i[o],c=a.getAttribute(s),l=c?c.match($k):null;if(l){let d=r.get(a);d||(d=[],r.set(a,d)),d.push({name:s,value:l[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[i,r]=this._splitIconName(e);i&&(this._svgNamespace=i),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,i).pipe(Ri(1)).subscribe(o=>this._setSvgElement(o),o=>{let s=`Error retrieving icon ${i}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(s))})}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=w({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,r){i&2&&(te("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),Je(r.color?"mat-"+r.color:""),L("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",U],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:Bk,decls:1,vars:0,template:function(i,r){i&1&&(ge(),z(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return t})();var zk=["mat-icon-button",""],Gk=["*"],Wk=new v("MAT_BUTTON_CONFIG");function vD(t){return t==null?void 0:wt(t)}var Um=(()=>{class t{_elementRef=u(N);_ngZone=u(S);_animationsDisabled=Pe();_config=u(Wk,{optional:!0});_focusMonitor=u(Zi);_cleanupClick;_renderer=u(st);_rippleLoader=u(ey);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){u(at).load(oi);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=Q({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(i,r){i&2&&(te("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),Je(r.color?"mat-"+r.color:""),L("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",U],disabled:[2,"disabled","disabled",U],ariaDisabled:[2,"aria-disabled","ariaDisabled",U],disabledInteractive:[2,"disabledInteractive","disabledInteractive",U],tabIndex:[2,"tabIndex","tabIndex",vD],_tabindex:[2,"tabindex","_tabindex",vD]}})}return t})(),$m=(()=>{class t extends Um{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=w({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Ge],attrs:zk,ngContentSelectors:Gk,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(ge(),Ft(0,"span",0),z(1),Ft(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var qk=["matButton",""],Yk=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Zk=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var _D=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),yD=(()=>{class t extends Um{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=Kk(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?_D.get(this._appearance):null,o=_D.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=w({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Ge],attrs:qk,ngContentSelectors:Zk,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(ge(Yk),Ft(0,"span",0),z(1),Et(2,"span",1),z(3,1),Ot(),z(4,2),Ft(5,"span",2)(6,"span",3)),i&2&&L("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function Kk(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var xl=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=X({type:t});static \u0275inj=K({imports:[Wc,Le]})}return t})();var Qk=["searchSelectInput"],Xk=["innerSelectSearch"],Jk=[[["",8,"mat-select-search-custom-header-content"]],[["","ngxMatSelectSearchClear",""]],[["","ngxMatSelectNoEntriesFound",""]]],eT=[".mat-select-search-custom-header-content","[ngxMatSelectSearchClear]","[ngxMatSelectNoEntriesFound]"];function tT(t,n){if(t&1){let e=Ur();g(0,"mat-checkbox",10),ne("change",function(r){ki(e);let o=ue();return Ti(o._emitSelectAllBooleanToParent(r.checked))}),p()}if(t&2){let e=ue();C("color",e.matFormField==null?null:e.matFormField.color)("checked",e.toggleAllCheckboxChecked)("indeterminate",e.toggleAllCheckboxIndeterminate)("matTooltip",e.toggleAllCheckboxTooltipMessage)("matTooltipPosition",e.toggleAllCheckboxTooltipPosition)}}function nT(t,n){t&1&&$(0,"mat-spinner",7)}function iT(t,n){t&1&&z(0,1)}function rT(t,n){if(t&1&&$(0,"mat-icon",12),t&2){let e=ue(2);C("svgIcon",e.closeSvgIcon)}}function oT(t,n){if(t&1&&(g(0,"mat-icon"),D(1),p()),t&2){let e=ue(2);b(),se(" ",e.closeIcon," ")}}function sT(t,n){if(t&1){let e=Ur();g(0,"button",11),ne("click",function(){ki(e);let r=ue();return Ti(r._reset(!0))}),ae(1,iT,1,0)(2,rT,1,1,"mat-icon",12)(3,oT,2,1,"mat-icon"),p()}if(t&2){let e=ue();b(),ce(e.clearIcon?1:e.closeSvgIcon?2:3)}}function aT(t,n){t&1&&z(0,2)}function cT(t,n){if(t&1&&D(0),t&2){let e=ue(2);se(" ",e.noEntriesFoundLabel," ")}}function lT(t,n){if(t&1&&(g(0,"div",9),ae(1,aT,1,0)(2,cT,1,1),p()),t&2){let e=ue();b(),ce(e.noEntriesFound?1:2)}}var Be=class t{constructor(n,e,i,r,o,s){this.matSelect=n;this.changeDetectorRef=e;this._viewportRuler=i;this.matOption=r;this.matFormField=o;this.applyDefaultOptions(s)}matSelect;changeDetectorRef;_viewportRuler;matOption;matFormField;placeholderLabel="Suche";type="text";closeIcon="close";closeSvgIcon;noEntriesFoundLabel="Keine Optionen gefunden";clearSearchInput=!0;searching=!1;disableInitialFocus=!1;enableClearOnEscapePressed=!1;preventHomeEndKeyPropagation=!1;disableScrollToActiveOnOptionsChanged=!1;ariaLabel="dropdown search";showToggleAllCheckbox=!1;toggleAllCheckboxChecked=!1;toggleAllCheckboxIndeterminate=!1;toggleAllCheckboxTooltipMessage="";toggleAllCheckboxTooltipPosition="below";hideClearSearchButton=!1;alwaysRestoreSelectedOptionsMulti=!1;recreateValuesArray=!1;toggleAll=new Z;searchSelectInput;innerSelectSearch;clearIcon;noEntriesFound;get value(){return this._formControl.value}_lastExternalInputValue;onTouched=()=>{};set _options(n){this._options$.next(n)}get _options(){return this._options$.getValue()}_options$=new En(null);optionsList$=this._options$.pipe(Yt(n=>n?n.changes.pipe(ee(e=>e.toArray()),be(n.toArray())):Ae(null)));optionsLength$=this.optionsList$.pipe(ee(n=>n?n.length:0));previousSelectedValues;_formControl=new ye("",{nonNullable:!0});_showNoEntriesFound$=td([this._formControl.valueChanges,this.optionsLength$]).pipe(ee(([n,e])=>!!(this.noEntriesFoundLabel&&n&&e===this.getOptionsLengthOffset())));_onDestroy=new k;activeDescendant;_removePanelKeydownListener;applyDefaultOptions(n){if(n)for(let e of rD)Object.prototype.hasOwnProperty.call(n,e)&&(this[e]=n[e])}ngOnInit(){this.matOption?(this.matOption.disabled=!0,this.matOption._getHostElement().classList.add("contains-mat-select-search"),this.matOption._getHostElement().setAttribute("role","presentation")):console.error("<ngx-mat-select-search> must be placed inside a <mat-option> element"),this.matSelect.openedChange.pipe(Mo(1),le(this._onDestroy)).subscribe(n=>{n?(this.updateInputWidth(),this.disableInitialFocus||this._focus(),this._installPanelKeydownListener()):(this._removePanelKeydownListener?.(),this._removePanelKeydownListener=void 0,this.clearSearchInput&&this._reset())}),this.matSelect.openedChange.pipe(Ri(1),Yt(()=>{this._options=this.matSelect.options;let n=this._options.toArray()[this.getOptionsLengthOffset()];return this._options.changes.pipe(Ct(()=>{setTimeout(()=>{let e=this._options.toArray(),i=e[this.getOptionsLengthOffset()],r=this.matSelect._keyManager;r&&this.matSelect.panelOpen&&i&&((!n||!this.matSelect.compareWith(n.value,i.value)||!r.activeItem||!e.find(s=>this.matSelect.compareWith(s.value,r.activeItem?.value)))&&r.setActiveItem(this.getOptionsLengthOffset()),setTimeout(()=>{this.updateInputWidth()})),n=i})}))})).pipe(le(this._onDestroy)).subscribe(),this._showNoEntriesFound$.pipe(le(this._onDestroy)).subscribe(n=>{this.matOption&&(n?this.matOption._getHostElement().classList.add("mat-select-search-no-entries-found"):this.matOption._getHostElement().classList.remove("mat-select-search-no-entries-found"))}),this._viewportRuler.change().pipe(le(this._onDestroy)).subscribe(()=>{this.matSelect.panelOpen&&this.updateInputWidth()}),this.initMultipleHandling(),this.optionsList$.pipe(le(this._onDestroy)).subscribe(()=>{this.changeDetectorRef.markForCheck()})}_emitSelectAllBooleanToParent(n){this.toggleAll.emit(n)}ngOnDestroy(){this._removePanelKeydownListener?.(),this._removePanelKeydownListener=void 0,this._onDestroy.next(),this._onDestroy.complete()}_isToggleAllCheckboxVisible(){return this.matSelect.multiple&&this.showToggleAllCheckbox}_handleKeydown(n){(n.key&&n.key.length===1||this.preventHomeEndKeyPropagation&&(n.key==="Home"||n.key==="End"))&&n.stopPropagation(),this.matSelect.multiple&&n.key&&n.key==="Enter"&&setTimeout(()=>this._focus()),this.enableClearOnEscapePressed&&n.key==="Escape"&&this.value&&(this._reset(!0),n.stopPropagation())}_installPanelKeydownListener(){this._removePanelKeydownListener?.(),this._removePanelKeydownListener=void 0;let n=this.matSelect.panel?.nativeElement;if(!n)return;let e=i=>{i.key!=="Escape"&&i.stopPropagation()};n.addEventListener("keydown",e),this._removePanelKeydownListener=()=>n.removeEventListener("keydown",e)}_handleKeyup(n){if(n.key==="ArrowUp"||n.key==="ArrowDown"){let e=this.matSelect._getAriaActiveDescendant(),i=this._options.toArray().findIndex(r=>r.id===e);i!==-1&&(this.unselectActiveDescendant(),this.activeDescendant=this._options.toArray()[i]._getHostElement(),this.activeDescendant.setAttribute("aria-selected","true"),this.searchSelectInput.nativeElement.setAttribute("aria-activedescendant",e))}}writeValue(n){this._lastExternalInputValue=n,this._formControl.setValue(n),this.changeDetectorRef.markForCheck()}onBlur(){this.unselectActiveDescendant(),this.onTouched()}registerOnChange(n){this._formControl.valueChanges.pipe(Ue(e=>e!==this._lastExternalInputValue),Ct(()=>this._lastExternalInputValue=void 0),le(this._onDestroy)).subscribe(n)}registerOnTouched(n){this.onTouched=n}_focus(){if(!this.searchSelectInput||!this.matSelect.panel)return;let n=this.matSelect.panel.nativeElement,e=n.scrollTop;this.searchSelectInput.nativeElement.focus(),n.scrollTop=e}_reset(n){this._formControl.setValue(""),n&&this._focus()}initMultipleHandling(){if(!this.matSelect.ngControl){this.matSelect.multiple&&console.error("the mat-select containing ngx-mat-select-search must have a ngModel or formControl directive when multiple=true");return}this.previousSelectedValues=this.matSelect.ngControl.value,this.matSelect.ngControl.valueChanges&&this.matSelect.ngControl.valueChanges.pipe(le(this._onDestroy)).subscribe(n=>{let e=!1;if(this.matSelect.multiple&&(this.alwaysRestoreSelectedOptionsMulti||this._formControl.value&&this._formControl.value.length)&&this.previousSelectedValues&&Array.isArray(this.previousSelectedValues)){(!n||!Array.isArray(n))&&(n=[]);let i=this.matSelect.options.map(r=>r.value);this.previousSelectedValues.forEach(r=>{!n.some(o=>this.matSelect.compareWith(o,r))&&!i.some(o=>this.matSelect.compareWith(o,r))&&(this.recreateValuesArray?n=[...n,r]:n.push(r),e=!0)})}this.previousSelectedValues=n,e&&this.matSelect._onChange(n)})}updateInputWidth(){if(!this.innerSelectSearch||!this.innerSelectSearch.nativeElement)return;let n=this.innerSelectSearch.nativeElement,e=null;for(;n&&n.parentElement;)if(n=n.parentElement,n.classList.contains("mat-select-panel")){e=n;break}e&&(this.innerSelectSearch.nativeElement.style.width=e.clientWidth+"px")}getOptionsLengthOffset(){return this.matOption?1:0}unselectActiveDescendant(){this.activeDescendant?.removeAttribute("aria-selected"),this.searchSelectInput.nativeElement.removeAttribute("aria-activedescendant")}static \u0275fac=function(e){return new(e||t)(oe(Ke),oe(We),oe(yn),oe(Ce,8),oe(Oe,8),oe(oD,8))};static \u0275cmp=w({type:t,selectors:[["ngx-mat-select-search"]],contentQueries:function(e,i,r){if(e&1&&pn(r,nr,5)(r,ir,5),e&2){let o;G(o=W())&&(i.clearIcon=o.first),G(o=W())&&(i.noEntriesFound=o.first)}},viewQuery:function(e,i){if(e&1&&Ne(Qk,7,N)(Xk,7,N),e&2){let r;G(r=W())&&(i.searchSelectInput=r.first),G(r=W())&&(i.innerSelectSearch=r.first)}},inputs:{placeholderLabel:"placeholderLabel",type:"type",closeIcon:"closeIcon",closeSvgIcon:"closeSvgIcon",noEntriesFoundLabel:"noEntriesFoundLabel",clearSearchInput:"clearSearchInput",searching:"searching",disableInitialFocus:"disableInitialFocus",enableClearOnEscapePressed:"enableClearOnEscapePressed",preventHomeEndKeyPropagation:"preventHomeEndKeyPropagation",disableScrollToActiveOnOptionsChanged:"disableScrollToActiveOnOptionsChanged",ariaLabel:"ariaLabel",showToggleAllCheckbox:"showToggleAllCheckbox",toggleAllCheckboxChecked:"toggleAllCheckboxChecked",toggleAllCheckboxIndeterminate:"toggleAllCheckboxIndeterminate",toggleAllCheckboxTooltipMessage:"toggleAllCheckboxTooltipMessage",toggleAllCheckboxTooltipPosition:"toggleAllCheckboxTooltipPosition",hideClearSearchButton:"hideClearSearchButton",alwaysRestoreSelectedOptionsMulti:"alwaysRestoreSelectedOptionsMulti",recreateValuesArray:"recreateValuesArray"},outputs:{toggleAll:"toggleAll"},features:[Re([{provide:ai,useExisting:rt(()=>t),multi:!0}])],ngContentSelectors:eT,decls:13,vars:14,consts:[["innerSelectSearch",""],["searchSelectInput",""],["matInput","",1,"mat-select-search-input","mat-select-search-hidden"],[1,"mat-select-search-inner","mat-typography","mat-datepicker-content","mat-tab-header"],[1,"mat-select-search-inner-row"],["matTooltipClass","ngx-mat-select-search-toggle-all-tooltip",1,"mat-select-search-toggle-all-checkbox",3,"color","checked","indeterminate","matTooltip","matTooltipPosition"],["autocomplete","off",1,"mat-select-search-input",3,"keydown","keyup","blur","type","formControl","placeholder"],["diameter","16",1,"mat-select-search-spinner"],["mat-icon-button","","aria-label","Clear",1,"mat-select-search-clear"],[1,"mat-select-search-no-entries-found"],["matTooltipClass","ngx-mat-select-search-toggle-all-tooltip",1,"mat-select-search-toggle-all-checkbox",3,"change","color","checked","indeterminate","matTooltip","matTooltipPosition"],["mat-icon-button","","aria-label","Clear",1,"mat-select-search-clear",3,"click"],[3,"svgIcon"]],template:function(e,i){e&1&&(ge(Jk),$(0,"input",2),g(1,"div",3,0)(3,"div",4),ae(4,tT,1,5,"mat-checkbox",5),g(5,"input",6,1),ne("keydown",function(o){return i._handleKeydown(o)})("keyup",function(o){return i._handleKeyup(o)})("blur",function(){return i.onBlur()}),p(),ae(7,nT,1,0,"mat-spinner",7),ae(8,sT,4,1,"button",8),z(9),p(),$(10,"mat-divider"),p(),ae(11,lT,3,1,"div",9),Eh(12,"async")),e&2&&(b(),L("mat-select-search-inner-multiple",i.matSelect.multiple)("mat-select-search-inner-toggle-all",i._isToggleAllCheckboxVisible()),b(3),ce(i._isToggleAllCheckboxVisible()?4:-1),b(),C("type",i.type)("formControl",i._formControl)("placeholder",i.placeholderLabel),te("aria-label",i.ariaLabel),b(2),ce(i.searching?7:-1),b(),ce(!i.hideClearSearchButton&&i.value&&!i.searching?8:-1),b(3),ce(wh(12,12,i._showNoEntriesFound$)?11:-1))},dependencies:[Ye,ll,qe,Ve,sD,aD,Hm,uD,Xr,xl,$m,Ah],styles:[".mat-select-search-hidden[_ngcontent-%COMP%]{visibility:hidden}.mat-select-search-inner[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;z-index:100;font-size:inherit;box-shadow:none;background-color:var(--mat-sys-surface-container, var(--mat-select-panel-background-color, white))}.mat-select-search-inner.mat-select-search-inner-multiple.mat-select-search-inner-toggle-all[_ngcontent-%COMP%]   .mat-select-search-inner-row[_ngcontent-%COMP%]{display:flex;align-items:center}.mat-select-search-input[_ngcontent-%COMP%]{box-sizing:border-box;width:100%;border:none;font-family:inherit;font-size:inherit;color:currentColor;outline:none;background-color:var(--mat-sys-surface-container, var(--mat-select-panel-background-color, white));padding:0 44px 0 16px;height:47px;line-height:47px}[dir=rtl][_nghost-%COMP%]   .mat-select-search-input[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .mat-select-search-input[_ngcontent-%COMP%]{padding-right:16px;padding-left:44px}.mat-select-search-input[_ngcontent-%COMP%]::placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mdc-filled-text-field-input-text-placeholder-color))}.mat-select-search-inner-toggle-all[_ngcontent-%COMP%]   .mat-select-search-input[_ngcontent-%COMP%]{padding-left:5px}.mat-select-search-no-entries-found[_ngcontent-%COMP%]{padding-top:8px}.mat-select-search-clear[_ngcontent-%COMP%]{position:absolute;right:4px;top:0}[dir=rtl][_nghost-%COMP%]   .mat-select-search-clear[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .mat-select-search-clear[_ngcontent-%COMP%]{right:auto;left:4px}.mat-select-search-spinner[_ngcontent-%COMP%]{position:absolute;right:16px;top:calc(50% - 8px)}[dir=rtl][_nghost-%COMP%]   .mat-select-search-spinner[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .mat-select-search-spinner[_ngcontent-%COMP%]{right:auto;left:16px}  .mat-mdc-option[aria-disabled=true].contains-mat-select-search{position:sticky;top:-8px;z-index:1;opacity:1;margin-top:-8px;pointer-events:all}  .mat-mdc-option[aria-disabled=true].contains-mat-select-search .mat-icon{margin-right:0;margin-left:0}  .mat-mdc-option[aria-disabled=true].contains-mat-select-search mat-pseudo-checkbox{display:none}  .mat-mdc-option[aria-disabled=true].contains-mat-select-search .mdc-list-item__primary-text{opacity:1}.mat-select-search-toggle-all-checkbox[_ngcontent-%COMP%]{padding-left:5px}[dir=rtl][_nghost-%COMP%]   .mat-select-search-toggle-all-checkbox[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .mat-select-search-toggle-all-checkbox[_ngcontent-%COMP%]{padding-left:0;padding-right:5px}"],changeDetection:0})};var CD="9.0.0";function dt(t,n){let i=!n?.manualCleanup?n?.injector?.get(Dt)??u(Dt):null,r=dT(n?.equal),o;n?.requireSync?o=me({kind:0},{equal:r}):o=me({kind:1,value:n?.initialValue},{equal:r});let s,a=t.subscribe({next:c=>o.set({kind:1,value:c}),error:c=>{o.set({kind:2,error:c}),s?.()},complete:()=>{s?.()}});if(n?.requireSync&&o().kind===0)throw new I(601,!1);return s=i?.onDestroy(a.unsubscribe.bind(a)),fe(()=>{let c=o();switch(c.kind){case 1:return c.value;case 2:throw c.error;case 0:throw new I(601,!1)}},{equal:n?.equal})}function dT(t=Object.is){return(n,e)=>n.kind===1&&e.kind===1&&t(n.value,e.value)}var jt=[{name:"Bank A (Switzerland)",id:"A"},{name:"Bank B (Switzerland)",id:"B"},{name:"Bank C (France)",id:"C"},{name:"Bank D (France)",id:"D"},{name:"Bank E (France)",id:"E"},{name:"Bank F (Italy)",id:"F"},{name:"Bank G (Italy)",id:"G"},{name:"Bank H (Italy)",id:"H"},{name:"Bank I (Italy)",id:"I"},{name:"Bank J (Italy)",id:"J"},{name:"Bank Kolombia (United States of America)",id:"K"},{name:"Bank L (Germany)",id:"L"},{name:"Bank M (Germany)",id:"M"},{name:"Bank N (Germany)",id:"N"},{name:"Bank O (Germany)",id:"O"},{name:"Bank P (Germany)",id:"P"},{name:"Bank Q (Germany)",id:"Q"},{name:"Bank R (Germany)",id:"R"}],zm=[{name:"Switzerland",banks:[{name:"Bank A",id:"A"},{name:"Bank B",id:"B"}]},{name:"France",banks:[{name:"Bank C",id:"C"},{name:"Bank D",id:"D"},{name:"Bank E",id:"E"}]},{name:"Italy",banks:[{name:"Bank F",id:"F"},{name:"Bank G",id:"G"},{name:"Bank H",id:"H"},{name:"Bank I",id:"I"},{name:"Bank J",id:"J"}]},{name:"United States of America",banks:[{name:"Bank Kolombia",id:"K"}]},{name:"Germany",banks:[{name:"Bank L",id:"L"},{name:"Bank M",id:"M"},{name:"Bank N",id:"N"},{name:"Bank O",id:"O"},{name:"Bank P",id:"P"},{name:"Bank Q",id:"Q"},{name:"Bank R",id:"R"}]}];function uT(t,n){if(t&1&&(g(0,"mat-option",2),D(1),p()),t&2){let e=n.$implicit;C("value",e),b(),se(" ",e.name," ")}}var Jr=class t{banks=jt;bankCtrl=new ye(this.banks[10]);bankFilterCtrl=new ye("",{nonNullable:!0});$filteredBanks=fe(()=>{let n=(this.$bankControlsChanges()||"").toLowerCase();return n?this.banks.filter(e=>e.name.toLowerCase().includes(n)):[...this.banks]});$bankControlsChanges=dt(this.bankFilterCtrl.valueChanges.pipe(be("")));static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-single-selection-example"]],decls:11,vars:3,consts:[["placeholder","Bank",3,"formControl"],[3,"formControl"],[3,"value"]],template:function(e,i){e&1&&(g(0,"h3"),D(1,"Single selection"),p(),g(2,"p")(3,"mat-form-field")(4,"mat-select",0)(5,"mat-option"),$(6,"ngx-mat-select-search",1),p(),Se(7,uT,2,2,"mat-option",2,Ie),p()()(),g(9,"p"),D(10),p()),e&2&&(b(4),C("formControl",i.bankCtrl),b(2),C("formControl",i.bankFilterCtrl),b(),Me(i.$filteredBanks()),b(3),se(" Selected Bank: ",i.bankCtrl.value==null?null:i.bankCtrl.value.name,`
`))},dependencies:[Ze,Oe,ct,Ke,Ce,Ye,qe,Ve,Be],encapsulation:2})};function fT(t,n){if(t&1&&(g(0,"mat-option",2),D(1),p()),t&2){let e=n.$implicit;C("value",e),b(),se(" ",e.name," ")}}function hT(t,n){if(t&1&&(g(0,"li"),D(1),p()),t&2){let e=n.$implicit;b(),mt(e.name)}}var Il=class t{banks=jt;bankMultiCtrl=new ye([this.banks[10],this.banks[11],this.banks[12]],{nonNullable:!0});bankMultiFilterCtrl=new ye("",{nonNullable:!0});$filteredBanks=fe(()=>{let n=(this.$bankControlsChanges()||"").toLowerCase();return n?this.banks.filter(e=>e.name.toLowerCase().includes(n)):[...this.banks]});$bankControlsChanges=dt(this.bankMultiFilterCtrl.valueChanges.pipe(be("")));static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-multiple-selection-example"]],decls:14,vars:3,consts:[["placeholder","Banks",3,"formControl","multiple"],[3,"formControl"],[3,"value"]],template:function(e,i){e&1&&(g(0,"h3"),D(1,"Multiple selection"),p(),g(2,"p")(3,"mat-form-field")(4,"mat-select",0)(5,"mat-option"),$(6,"ngx-mat-select-search",1),p(),Se(7,fT,2,2,"mat-option",2,Ie),p()()(),g(9,"p"),D(10,` Selected Banks:
`),p(),g(11,"ul"),Se(12,hT,2,1,"li",null,Ie),p()),e&2&&(b(4),C("formControl",i.bankMultiCtrl)("multiple",!0),b(2),C("formControl",i.bankMultiFilterCtrl),b(),Me(i.$filteredBanks()),b(5),Me(i.bankMultiCtrl.value))},dependencies:[Ze,Oe,ct,Ke,Ce,Ye,qe,Ve,Be],encapsulation:2})};function mT(t,n){if(t&1&&(g(0,"mat-option",3),D(1),p()),t&2){let e=n.$implicit;C("value",e),b(),se(" ",e.name," ")}}var Sl=class t extends Jr{static \u0275fac=(()=>{let n;return function(i){return(n||(n=fn(t)))(i||t)}})();static \u0275cmp=w({type:t,selectors:[["app-custom-clear-icon-example"]],features:[Ge],decls:13,vars:4,consts:[["placeholder","Bank",3,"formControl"],[3,"formControl","preventHomeEndKeyPropagation"],["ngxMatSelectSearchClear",""],[3,"value"]],template:function(e,i){e&1&&(g(0,"h3"),D(1,"Single selection with custom clear icon"),p(),g(2,"p")(3,"mat-form-field")(4,"mat-select",0)(5,"mat-option")(6,"ngx-mat-select-search",1)(7,"mat-icon",2),D(8,"delete"),p()()(),Se(9,mT,2,2,"mat-option",3,Ie),p()()(),g(11,"p"),D(12),p()),e&2&&(b(4),C("formControl",i.bankCtrl),b(2),C("formControl",i.bankFilterCtrl)("preventHomeEndKeyPropagation",!0),b(3),Me(i.$filteredBanks()),b(3),se(" Selected Bank: ",i.bankCtrl.value==null?null:i.bankCtrl.value.name,`
`))},dependencies:[Ze,Oe,ct,Ke,Ce,Ye,qe,Ve,Be,Xr,nr],encapsulation:2})};function pT(t,n){if(t&1&&(g(0,"mat-option",4),D(1),p()),t&2){let e=n.$implicit;C("value",e),b(),se(" ",e.name," ")}}function gT(t,n){if(t&1&&(g(0,"mat-optgroup",3),Se(1,pT,2,2,"mat-option",4,Ie),p()),t&2){let e=n.$implicit;C("label",e.name),b(),Me(e.banks)}}var Ml=class t{bankGroups=this.copyBankGroups(zm);bankGroupsCtrl=new ye(null);bankGroupsFilterCtrl=new ye("",{nonNullable:!0});$filteredBankGroups=fe(()=>{let n=(this.$bankControlsChanges()||"").toLowerCase();return n?this.copyBankGroups(zm).filter(e=>e.name.toLowerCase().includes(n)?!0:(e.banks=e.banks.filter(i=>i.name.toLowerCase().includes(n)),e.banks.length>0)):this.bankGroups});$bankControlsChanges=dt(this.bankGroupsFilterCtrl.valueChanges.pipe(be("")));copyBankGroups(n){let e=[];return n.forEach(i=>{e.push({name:i.name,banks:i.banks.slice()})}),e}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-option-groups-example"]],decls:12,vars:3,consts:[["singleSelect",""],["placeholder","Bank",3,"formControl"],[3,"formControl"],[3,"label"],[3,"value"]],template:function(e,i){e&1&&(g(0,"h3"),D(1,"Single selection with option groups"),p(),g(2,"p")(3,"mat-form-field")(4,"mat-select",1,0)(6,"mat-option"),$(7,"ngx-mat-select-search",2),p(),Se(8,gT,3,1,"mat-optgroup",3,Ie),p()()(),g(10,"p"),D(11),p()),e&2&&(b(4),C("formControl",i.bankGroupsCtrl),b(3),C("formControl",i.bankGroupsFilterCtrl),b(),Me(i.$filteredBankGroups()),b(3),se(" Selected Bank: ",i.bankGroupsCtrl.value==null?null:i.bankGroupsCtrl.value.name,`
`))},dependencies:[Ze,Oe,ct,Ke,Ce,Gc,Ye,qe,Ve,Be],encapsulation:2})};function bT(t,n){if(t&1&&(g(0,"mat-option",2),D(1),p()),t&2){let e=n.$implicit;C("value",e),b(),se(" ",e.name," ")}}var kl=class t{banks=jt;bankServerSideCtrl=new ye(null);bankServerSideFilteringCtrl=new ye("",{nonNullable:!0});bankControlsChanges$=this.bankServerSideFilteringCtrl.valueChanges.pipe(be(""),Ct(()=>this.searching.set(!0)),So(200));filteredBanks$=this.bankControlsChanges$.pipe(ee(n=>this.banks?this.banks.filter(e=>e.name.toLowerCase().indexOf(n)>-1):[]),Mo(500),Ct(()=>this.searching.set(!1)));searching=me(!1);$filteredServerSideBanks=dt(this.filteredBanks$);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-server-side-search-example"]],decls:11,vars:4,consts:[["placeholder","Bank",3,"formControl"],[3,"formControl","searching"],[3,"value"]],template:function(e,i){e&1&&(g(0,"h3"),D(1,"Server Side Search"),p(),g(2,"p")(3,"mat-form-field")(4,"mat-select",0)(5,"mat-option"),$(6,"ngx-mat-select-search",1),p(),Se(7,bT,2,2,"mat-option",2,Ie),p()()(),g(9,"p"),D(10),p()),e&2&&(b(4),C("formControl",i.bankServerSideCtrl),b(2),C("formControl",i.bankServerSideFilteringCtrl)("searching",i.searching()),b(),Me(i.$filteredServerSideBanks()),b(3),se(" Selected Bank: ",i.bankServerSideCtrl.value==null?null:i.bankServerSideCtrl.value.name,`
`))},dependencies:[Ze,Oe,ct,Ke,Ce,Ye,qe,Ve,Be],encapsulation:2})};function vT(t,n){if(t&1&&(g(0,"mat-option",3),D(1),p()),t&2){let e=n.$implicit;C("value",e),b(),se(" ",e.name," ")}}function _T(t,n){if(t&1&&(g(0,"li"),D(1),p()),t&2){let e=n.$implicit;b(),mt(e.name)}}var Tl=class t{banks=jt;bankMultiCtrl=new ye([this.banks[10],this.banks[11],this.banks[12]],{nonNullable:!0});bankMultiFilterCtrl=new ye("",{nonNullable:!0});$filteredBanks=fe(()=>{let n=(this.$bankControlsChanges()||"").toLowerCase();return n?this.banks.filter(e=>e.name.toLowerCase().includes(n)):[...this.banks]});$bankControlsChanges=dt(this.bankMultiFilterCtrl.valueChanges.pipe(be("")));$selectedBanks=dt(this.bankMultiCtrl.valueChanges.pipe(be(this.bankMultiCtrl.value)));$isIndeterminate=fe(()=>{let n=this.$selectedBanks();return n?n.length>0&&n.length<this.banks.length:!1});$isChecked=fe(()=>{let n=this.$selectedBanks();return n?n.length===this.banks.length:!1});toggleSelectAll(n){n?this.bankMultiCtrl.patchValue([...this.$filteredBanks()]):this.bankMultiCtrl.patchValue([])}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-multiple-selection-select-all-example"]],decls:14,vars:6,consts:[["color","accent"],["placeholder","Banks",3,"formControl","multiple"],[3,"toggleAll","showToggleAllCheckbox","toggleAllCheckboxIndeterminate","toggleAllCheckboxChecked","formControl"],[3,"value"]],template:function(e,i){e&1&&(g(0,"h3"),D(1,"Multiple selection with Select All Checkbox"),p(),g(2,"p")(3,"mat-form-field",0)(4,"mat-select",1)(5,"mat-option")(6,"ngx-mat-select-search",2),ne("toggleAll",function(o){return i.toggleSelectAll(o)}),p()(),Se(7,vT,2,2,"mat-option",3,Ie),p()()(),g(9,"p"),D(10,` Selected Banks:
`),p(),g(11,"ul"),Se(12,_T,2,1,"li",null,Ie),p()),e&2&&(b(4),C("formControl",i.bankMultiCtrl)("multiple",!0),b(2),C("showToggleAllCheckbox",!0)("toggleAllCheckboxIndeterminate",i.$isIndeterminate())("toggleAllCheckboxChecked",i.$isChecked())("formControl",i.bankMultiFilterCtrl),b(),Me(i.$filteredBanks()),b(5),Me(i.bankMultiCtrl.value))},dependencies:[Ze,Oe,ct,Ke,Ce,Ye,qe,Ve,Be],encapsulation:2})};function yT(t,n){if(t&1&&(g(0,"mat-option",3),D(1),p()),t&2){let e=n.$implicit;C("value",e),b(),se(" ",e.name," ")}}function DT(t,n){if(t&1&&(g(0,"li"),D(1),p()),t&2){let e=n.$implicit;b(),mt(e.name)}}var Al=class t{banks=jt;bankMultiCtrl=new ye([this.banks[10],this.banks[11],this.banks[12]],{nonNullable:!0});bankMultiFilterCtrl=new ye("",{nonNullable:!0});$filteredBanks=fe(()=>{let n=(this.$bankControlsChanges()||"").toLowerCase();return n?this.banks.filter(e=>e.name.toLowerCase().includes(n)):[...this.banks]});$bankControlsChanges=dt(this.bankMultiFilterCtrl.valueChanges.pipe(be("")));$selectedBanks=dt(this.bankMultiCtrl.valueChanges.pipe(be(this.bankMultiCtrl.value)));$isIndeterminate=fe(()=>{let n=this.$selectedBanks();return n?n.length>0&&n.length<this.banks.length:!1});$isChecked=fe(()=>{let n=this.$selectedBanks();return n?n.length===this.banks.length:!1});toggleSelectAll(n){n?this.bankMultiCtrl.patchValue([...this.$filteredBanks()]):this.bankMultiCtrl.patchValue([])}tooltipMessage="Select All / Unselect All";static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-tooltip-select-all-example"]],decls:14,vars:8,consts:[["color","accent"],["placeholder","Banks",3,"formControl","multiple"],[3,"toggleAll","showToggleAllCheckbox","toggleAllCheckboxIndeterminate","toggleAllCheckboxChecked","toggleAllCheckboxTooltipMessage","toggleAllCheckboxTooltipPosition","formControl"],[3,"value"]],template:function(e,i){e&1&&(g(0,"h3"),D(1,"Tooltip on the Select All Checkbox"),p(),g(2,"p")(3,"mat-form-field",0)(4,"mat-select",1)(5,"mat-option")(6,"ngx-mat-select-search",2),ne("toggleAll",function(o){return i.toggleSelectAll(o)}),p()(),Se(7,yT,2,2,"mat-option",3,Ie),p()()(),g(9,"p"),D(10,` Selected Banks:
`),p(),g(11,"ul"),Se(12,DT,2,1,"li",null,Ie),p()),e&2&&(b(4),C("formControl",i.bankMultiCtrl)("multiple",!0),b(2),C("showToggleAllCheckbox",!0)("toggleAllCheckboxIndeterminate",i.$isIndeterminate())("toggleAllCheckboxChecked",i.$isChecked())("toggleAllCheckboxTooltipMessage",i.tooltipMessage)("toggleAllCheckboxTooltipPosition","above")("formControl",i.bankMultiFilterCtrl),b(),Me(i.$filteredBanks()),b(5),Me(i.bankMultiCtrl.value))},dependencies:[Ze,Oe,ct,Ke,Ce,Ye,qe,Ve,Be],styles:[".ngx-mat-select-search-toggle-all-tooltip{font-size:.8em}"]})};function CT(t,n){if(t&1&&(g(0,"mat-option",4),D(1),p()),t&2){let e=n.$implicit;C("value",e),b(),se(" ",e.name," ")}}var Nl=class t{banks=jt;bankCtrl=new ye(this.banks[10]);bankFilterCtrl=new ye("",{nonNullable:!0});$filteredBanks=fe(()=>{let n=(this.$bankControlsChanges()||"").toLowerCase();return n?this.banks.filter(e=>e.name.toLowerCase().includes(n)):[...this.banks]});$bankControlsChanges=dt(this.bankFilterCtrl.valueChanges.pipe(be("")));static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-custom-no-entries-found-example"]],decls:17,vars:4,consts:[["placeholder","Bank",3,"formControl"],[3,"formControl","preventHomeEndKeyPropagation"],["ngxMatSelectNoEntriesFound",""],["mat-button","","color","primary"],[3,"value"]],template:function(e,i){e&1&&(g(0,"h3"),D(1,"Single selection with custom no entries found element"),p(),g(2,"p")(3,"mat-form-field")(4,"mat-select",0)(5,"mat-option")(6,"ngx-mat-select-search",1)(7,"span",2),D(8," No entries found "),g(9,"button",3),D(10," Add "),g(11,"mat-icon"),D(12,"add"),p()()()()(),Se(13,CT,2,2,"mat-option",4,Ie),p()()(),g(15,"p"),D(16),p()),e&2&&(b(4),C("formControl",i.bankCtrl),b(2),C("formControl",i.bankFilterCtrl)("preventHomeEndKeyPropagation",!0),b(7),Me(i.$filteredBanks()),b(3),se(" Selected Bank: ",i.bankCtrl.value==null?null:i.bankCtrl.value.name,`
`))},dependencies:[Ze,Oe,ct,Ke,Ce,Ye,qe,Ve,Be,Xr,ir,xl,yD],encapsulation:2})};var Rl=class t{version=ty;matSelectSearchVersion=CD;rightToLeft=!1;toggleRightToLeft(){this.rightToLeft=!this.rightToLeft,document.body.dir=this.rightToLeft?"rtl":""}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-root"]],decls:33,vars:2,consts:[["color","primary"],[1,"basic-container"],["href","https://material.angular.io/components/select/overview","target","_blank"],["href","https://material.angular.io"],["href","https://github.com/bithost-gmbh/ngx-mat-select-search","target","_blank"],[3,"toggleChange"],[1,"version-info"]],template:function(e,i){e&1&&(g(0,"mat-toolbar",0),D(1,` Angular Material 2 App
`),p(),g(2,"div",1)(3,"h1"),D(4,"ngx-mat-select-search"),p(),g(5,"p"),D(6,"Angular component providing an input field for searching / filtering "),g(7,"a",2),D(8,"MatSelect"),p(),D(9," options of the "),g(10,"a",3),D(11,"Angular Material"),p(),D(12," library."),p(),g(13,"p")(14,"a",4),D(15,"https://github.com/bithost-gmbh/ngx-mat-select-search"),p()(),g(16,"h2"),D(17,"Examples"),p(),$(18,"app-single-selection-example")(19,"app-multiple-selection-example")(20,"app-custom-clear-icon-example")(21,"app-custom-no-entries-found-example")(22,"app-option-groups-example")(23,"app-server-side-search-example")(24,"app-multiple-selection-select-all-example")(25,"app-tooltip-select-all-example"),g(26,"div")(27,"mat-slide-toggle",5),ne("toggleChange",function(){return i.toggleRightToLeft()}),D(28,"Right-to-left"),p()(),g(29,"div",6),D(30),$(31,"br"),D(32),p()()),e&2&&(b(30),se(" ngx-mat-select-search Version: ",i.matSelectSearchVersion," "),b(2),se(" Material Version: ",i.version.full," "))},dependencies:[xy,wy,xm,Jr,Sl,Il,Nl,Ml,kl,Tl,Al],styles:["[_nghost-%COMP%]{display:block;margin-bottom:200px}"]})};jh(Rl,{providers:[Kv()]}).catch(t=>console.log(t));
