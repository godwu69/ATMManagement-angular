import{$ as se,A as c,C as re,E as q,M as z,W as V,a,b as u,ba as oe,c as ee,ca as Z,d as te,da as D,ea as d,f as ie,fa as X,g as ne,i as I,j as v,k as S,l as f,o as N,p as l,q as H,t as L,u as y,v as $,x as s,y as W,z as C}from"./chunk-2EZZRFYD.js";var ge=(()=>{class i{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(n){return new(n||i)(s(W),s($))}}static{this.\u0275dir=l({type:i})}}return i})(),Ne=(()=>{class i extends ge{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=L(i)))(r||i)}})()}static{this.\u0275dir=l({type:i,features:[c]})}}return i})(),me=new f("");var Oe={provide:me,useExisting:v(()=>_e),multi:!0};function xe(){let i=X()?X().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var Pe=new f(""),_e=(()=>{class i extends ge{constructor(t,n,r){super(t,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!xe())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(n){return new(n||i)(s(W),s($),s(Pe,8))}}static{this.\u0275dir=l({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&z("input",function(h){return r._handleInput(h.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(h){return r._compositionEnd(h.target.value)})},features:[V([Oe]),c]})}}return i})();function ke(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}var K=new f(""),ve=new f("");function Ge(i){return ke(i.value)?{required:!0}:null}function ae(i){return null}function ye(i){return i!=null}function Ce(i){return se(i)?te(i):i}function Ve(i){let e={};return i.forEach(t=>{e=t!=null?a(a({},e),t):e}),Object.keys(e).length===0?null:e}function De(i,e){return e.map(t=>t(i))}function Re(i){return!i.validate}function be(i){return i.map(e=>Re(e)?e:t=>e.validate(t))}function Te(i){if(!i)return null;let e=i.filter(ye);return e.length==0?null:function(t){return Ve(De(t,e))}}function J(i){return i!=null?Te(be(i)):null}function je(i){if(!i)return null;let e=i.filter(ye);return e.length==0?null:function(t){let n=De(t,e).map(Ce);return ne(n).pipe(ie(Ve))}}function Q(i){return i!=null?je(be(i)):null}function le(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function Be(i){return i._rawValidators}function Ue(i){return i._rawAsyncValidators}function Y(i){return i?Array.isArray(i)?i:[i]:[]}function x(i,e){return Array.isArray(i)?i.includes(e):i===e}function ue(i,e){let t=Y(e);return Y(i).forEach(r=>{x(t,r)||t.push(r)}),t}function ce(i,e){return Y(e).filter(t=>!x(i,t))}var P=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=J(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Q(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},m=class extends P{get formDirective(){return null}get path(){return null}},w=class extends P{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},k=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},He={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Ot=u(a({},He),{"[class.ng-submitted]":"isSubmitted"}),xt=(()=>{class i extends k{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(s(w,2))}}static{this.\u0275dir=l({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&q("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[c]})}}return i})(),Pt=(()=>{class i extends k{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(s(m,10))}}static{this.\u0275dir=l({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&q("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[c]})}}return i})();var b="VALID",O="INVALID",p="PENDING",A="DISABLED",_=class{},G=class extends _{constructor(e,t){super(),this.value=e,this.source=t}},E=class extends _{constructor(e,t){super(),this.pristine=e,this.source=t}},F=class extends _{constructor(e,t){super(),this.touched=e,this.source=t}},g=class extends _{constructor(e,t){super(),this.status=e,this.source=t}};function Ae(i){return(j(i)?i.validators:i)||null}function Le(i){return Array.isArray(i)?J(i):i||null}function Me(i,e){return(j(e)?e.asyncValidators:i)||null}function $e(i){return Array.isArray(i)?Q(i):i||null}function j(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function We(i,e,t){let n=i.controls;if(!(e?Object.keys(n):n).length)throw new I(1e3,"");if(!n[t])throw new I(1001,"")}function qe(i,e,t){i._forEachChild((n,r)=>{if(t[r]===void 0)throw new I(1002,"")})}var R=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=D(()=>this.statusReactive()),this.statusReactive=C(void 0),this._pristine=D(()=>this.pristineReactive()),this.pristineReactive=C(!0),this._touched=D(()=>this.touchedReactive()),this.touchedReactive=C(!1),this._events=new ee,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return d(this.statusReactive)}set status(e){d(()=>this.statusReactive.set(e))}get valid(){return this.status===b}get invalid(){return this.status===O}get pending(){return this.status==p}get disabled(){return this.status===A}get enabled(){return this.status!==A}get pristine(){return d(this.pristineReactive)}set pristine(e){d(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return d(this.touchedReactive)}set touched(e){d(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(ue(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(ue(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(ce(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(ce(e,this._rawAsyncValidators))}hasValidator(e){return x(this._rawValidators,e)}hasAsyncValidator(e){return x(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(u(a({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new F(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new F(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(u(a({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new E(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new E(!0,n))}markAsPending(e={}){this.status=p;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new g(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(u(a({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=A,this.errors=null,this._forEachChild(r=>{r.disable(u(a({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new G(this.value,n)),this._events.next(new g(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(u(a({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=b,this._forEachChild(n=>{n.enable(u(a({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(u(a({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===b||this.status===p)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new G(this.value,t)),this._events.next(new g(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(u(a({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?A:b}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=p,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let n=Ce(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new g(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new y,this.statusChanges=new y}_calculateStatus(){return this._allControlsDisabled()?A:this.errors?O:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(p)?p:this._anyControlsHaveStatus(O)?O:b}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new E(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new F(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){j(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Le(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=$e(this._rawAsyncValidators)}},T=class extends R{constructor(e,t,n){super(Ae(t),Me(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,n={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){qe(this,!0,e),Object.keys(e).forEach(n=>{We(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this.controls[n];r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,n)=>(e[n]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,n)=>n._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let n=this.controls[t];n&&e(n,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,n]of Object.entries(this.controls))if(this.contains(t)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,n,r)=>((n.enabled||this.disabled)&&(t[r]=n.value),t))}_reduceChildren(e,t){let n=e;return this._forEachChild((r,o)=>{n=t(n,r,o)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var B=new f("CallSetDisabledState",{providedIn:"root",factory:()=>U}),U="always";function ze(i,e){return[...e.path,i]}function Ee(i,e,t=U){Fe(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),Xe(i,e),Ke(i,e),Ye(i,e),Ze(i,e)}function de(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function Ze(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function Fe(i,e){let t=Be(i);e.validator!==null?i.setValidators(le(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=Ue(i);e.asyncValidator!==null?i.setAsyncValidators(le(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();de(e._rawValidators,r),de(e._rawAsyncValidators,r)}function Xe(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&we(i,e)})}function Ye(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&we(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function we(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function Ke(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function Je(i,e){i==null,Fe(i,e)}function Qe(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function et(i){return Object.getPrototypeOf(i.constructor)===Ne}function tt(i,e){i._syncPendingControls(),e.forEach(t=>{let n=t.control;n.updateOn==="submit"&&n._pendingChange&&(t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function it(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(o=>{o.constructor===_e?t=o:et(o)?n=o:r=o}),r||n||t||null}var nt={provide:m,useExisting:v(()=>rt)},M=Promise.resolve(),rt=(()=>{class i extends m{get submitted(){return d(this.submittedReactive)}constructor(t,n,r){super(),this.callSetDisabledState=r,this._submitted=D(()=>this.submittedReactive()),this.submittedReactive=C(!1),this._directives=new Set,this.ngSubmit=new y,this.form=new T({},J(t),Q(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){M.then(()=>{let n=this._findContainer(t.path);t.control=n.registerControl(t.name,t.control),Ee(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){M.then(()=>{let n=this._findContainer(t.path);n&&n.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){M.then(()=>{let n=this._findContainer(t.path),r=new T({});Je(r,t),n.registerControl(t.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){M.then(()=>{let n=this._findContainer(t.path);n&&n.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,n){M.then(()=>{this.form.get(t.path).setValue(n)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),tt(this.form,this._directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static{this.\u0275fac=function(n){return new(n||i)(s(K,10),s(ve,10),s(B,8))}}static{this.\u0275dir=l({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,r){n&1&&z("submit",function(h){return r.onSubmit(h)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[V([nt]),c]})}}return i})();function he(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function fe(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var st=class extends R{constructor(e=null,t,n){super(Ae(t),Me(n,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),j(t)&&(t.nonNullable||t.initialValueIsDefault)&&(fe(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){he(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){he(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){fe(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var ot={provide:w,useExisting:v(()=>at)},pe=Promise.resolve(),at=(()=>{class i extends w{constructor(t,n,r,o,h,Se){super(),this._changeDetectorRef=h,this.callSetDisabledState=Se,this.control=new st,this._registered=!1,this.name="",this.update=new y,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=it(this,o)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let n=t.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),Qe(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Ee(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){pe.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let n=t.isDisabled.currentValue,r=n!==0&&Z(n);pe.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?ze(t,this._parent):[t]}static{this.\u0275fac=function(n){return new(n||i)(s(m,9),s(K,10),s(ve,10),s(me,10),s(oe,8),s(B,8))}}static{this.\u0275dir=l({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[V([ot]),c,H]})}}return i})(),Gt=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=l({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}}return i})();var lt=new f("");var ut=(()=>{class i{constructor(){this._validator=ae}ngOnChanges(t){if(this.inputName in t){let n=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):ae,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=l({type:i,features:[H]})}}return i})();var ct={provide:K,useExisting:v(()=>dt),multi:!0};var dt=(()=>{class i extends ut{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=Z,this.createValidator=t=>Ge}enabled(t){return t}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=L(i)))(r||i)}})()}static{this.\u0275dir=l({type:i,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(n,r){n&2&&re("required",r._enabled?"":null)},inputs:{required:"required"},features:[V([ct]),c]})}}return i})();var Ie=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=N({type:i})}static{this.\u0275inj=S({})}}return i})();var Rt=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:B,useValue:t.callSetDisabledState??U}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=N({type:i})}static{this.\u0275inj=S({imports:[Ie]})}}return i})(),Tt=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:lt,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:B,useValue:t.callSetDisabledState??U}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=N({type:i})}static{this.\u0275inj=S({imports:[Ie]})}}return i})();export{_e as a,xt as b,Pt as c,rt as d,at as e,Gt as f,dt as g,Rt as h,Tt as i};
