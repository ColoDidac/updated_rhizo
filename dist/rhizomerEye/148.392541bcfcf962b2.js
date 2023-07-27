"use strict";(self.webpackChunkrhizomerEye=self.webpackChunkrhizomerEye||[]).push([[148],{1148:(k,C,s)=>{s.r(C),s.d(C,{EditResourceModule:()=>I});var m,p=s(9808),u=s(5787),_=s(4801),R=s(9113),e=s(5e3),d=s(3075);function v(n,i){n.onload=function(){this.onerror=this.onload=null,i(null,n)},n.onerror=function(){this.onerror=this.onload=null,i(new Error("Failed to load "+this.src),n)}}function T(n,i){n.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,i(null,n))}}function y(n,i){return"CKEDITOR"in window?Promise.resolve(CKEDITOR):"string"!=typeof n||n.length<1?Promise.reject(new TypeError("CKEditor URL must be a non-empty string.")):(m||(m=y.scriptLoader(n).then(function(t){return i&&i(t),t})),m)}function Z(n,i){}y.scriptLoader=function(n){return new Promise(function(i,t){!function w(n,i,t){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("script");"function"==typeof i&&(t=i,i={}),t=t||function(){},r.type=(i=i||{}).type||"text/javascript",r.charset=i.charset||"utf8",r.async=!("async"in i)||!!i.async,r.src=n,i.attrs&&function x(n,i){for(var t in i)n.setAttribute(t,i[t])}(r,i.attrs),i.text&&(r.text=String(i.text)),("onload"in r?v:T)(r,t),r.onload||v(r,t),o.appendChild(r)}(n,function(o){return m=void 0,o?t(o):window.CKEDITOR?void i(CKEDITOR):t(new Error("Script loaded from editorUrl doesn't provide CKEDITOR namespace."))})})};let M=(()=>{class n{constructor(t,o){this.elementRef=t,this.ngZone=o,this.editorUrl="https://cdn.ckeditor.com/4.17.1/standard-all/ckeditor.js",this.tagName="textarea",this.type="classic",this.namespaceLoaded=new e.vpe,this.ready=new e.vpe,this.dataReady=new e.vpe,this.change=new e.vpe,this.dataChange=new e.vpe,this.dragStart=new e.vpe,this.dragEnd=new e.vpe,this.drop=new e.vpe,this.fileUploadResponse=new e.vpe,this.fileUploadRequest=new e.vpe,this.focus=new e.vpe,this.paste=new e.vpe,this.afterPaste=new e.vpe,this.blur=new e.vpe,this._readOnly=null,this._data=null,this._destroyed=!1}set data(t){if(t!==this._data){if(this.instance)return this.instance.setData(t),void(this._data=this.instance.getData());this._data=t}}get data(){return this._data}set readOnly(t){this.instance?this.instance.setReadOnly(t):this._readOnly=t}get readOnly(){return this.instance?this.instance.readOnly:this._readOnly}ngAfterViewInit(){y(this.editorUrl,t=>{this.namespaceLoaded.emit(t)}).then(()=>{this._destroyed||this.ngZone.runOutsideAngular(this.createEditor.bind(this))}).catch(window.console.error)}ngOnDestroy(){this._destroyed=!0,this.ngZone.runOutsideAngular(()=>{this.instance&&(this.instance.destroy(),this.instance=null)})}writeValue(t){this.data=t}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}createEditor(){var t,o;const r=document.createElement(this.tagName);this.elementRef.nativeElement.appendChild(r);const a=null===(o=null===(t=this.config)||void 0===t?void 0:t.on)||void 0===o?void 0:o.instanceReady,h=Object.assign(Object.assign({},{delayIfDetached:!0}),this.config);void 0===h.on&&(h.on={}),h.on.instanceReady=f=>{const c=f.editor;this.instance=c,this.readOnly=null!==this._readOnly?this._readOnly:this.instance.readOnly,this.subscribe(this.instance);const g=c.undoManager;null!==this.data?(g&&g.lock(),c.setData(this.data,{callback:()=>{this.data!==c.getData()&&c.fire(g?"change":"dataReady"),g&&g.unlock(),this.ngZone.run(()=>{"function"==typeof a&&a(f),this.ready.emit(f)})}})):this.ngZone.run(()=>{"function"==typeof a&&a(f),this.ready.emit(f)})},"inline"===this.type?CKEDITOR.inline(r,h):CKEDITOR.replace(r,h)}subscribe(t){t.on("focus",o=>{this.ngZone.run(()=>{this.focus.emit(o)})}),t.on("paste",o=>{this.ngZone.run(()=>{this.paste.emit(o)})}),t.on("afterPaste",o=>{this.ngZone.run(()=>{this.afterPaste.emit(o)})}),t.on("dragend",o=>{this.ngZone.run(()=>{this.dragEnd.emit(o)})}),t.on("dragstart",o=>{this.ngZone.run(()=>{this.dragStart.emit(o)})}),t.on("drop",o=>{this.ngZone.run(()=>{this.drop.emit(o)})}),t.on("fileUploadRequest",o=>{this.ngZone.run(()=>{this.fileUploadRequest.emit(o)})}),t.on("fileUploadResponse",o=>{this.ngZone.run(()=>{this.fileUploadResponse.emit(o)})}),t.on("blur",o=>{this.ngZone.run(()=>{this.onTouched&&this.onTouched(),this.blur.emit(o)})}),t.on("dataReady",this.propagateChange,this),t.on(this.instance.undoManager?"change":"selectionCheck",this.propagateChange,this)}propagateChange(t){this.ngZone.run(()=>{const o=this.instance.getData();"change"===t.name?this.change.emit(t):"dataReady"===t.name&&this.dataReady.emit(t),o!==this.data&&(this._data=o,this.dataChange.emit(o),this.onChange&&this.onChange(o))})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq),e.Y36(e.R0b))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ckeditor"]],inputs:{editorUrl:"editorUrl",tagName:"tagName",type:"type",data:"data",readOnly:"readOnly",config:"config"},outputs:{namespaceLoaded:"namespaceLoaded",ready:"ready",dataReady:"dataReady",change:"change",dataChange:"dataChange",dragStart:"dragStart",dragEnd:"dragEnd",drop:"drop",fileUploadResponse:"fileUploadResponse",fileUploadRequest:"fileUploadRequest",focus:"focus",paste:"paste",afterPaste:"afterPaste",blur:"blur"},features:[e._Bn([{provide:d.JU,useExisting:(0,e.Gpc)(()=>n),multi:!0}])],decls:1,vars:0,template:function(t,o){1&t&&e.YNc(0,Z,0,0,"ng-template")},encapsulation:2}),n})(),O=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[d.u5,p.ez]]}),n})();const E=function(n){return{uri:n}};function J(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",6),e._UZ(1,"i",7),e.TgZ(2,"i",8),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).saveContent()}),e.qZA(),e.qZA()}if(2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("routerLink","../resource")("queryParams",e.VKq(2,E,t.resourceUri))}}const U=function(n,i){return{"col-md-4 m-0":n,"col-12 m-0":i}};function K(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",3),e.YNc(1,J,3,4,"div",4),e.TgZ(2,"textarea",5),e.NdJ("ngModelChange",function(r){return e.CHM(t),e.oxw().jsonld=r}),e.qZA(),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("ngClass",e.WLB(3,U,t.resource.anonBody,!t.resource.anonBody)),e.xp6(1),e.Q6J("ngIf",!t.resource.anonBody),e.xp6(1),e.Q6J("ngModel",t.jsonld)}}function D(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",9),e.TgZ(1,"div",6),e.TgZ(2,"i",10),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return r.jsonld=r.resource.asJsonLd()}),e.qZA(),e._UZ(3,"i",7),e.TgZ(4,"i",8),e.NdJ("click",function(){return e.CHM(t),e.oxw().saveContent()}),e.qZA(),e.qZA(),e.TgZ(5,"ckeditor",11),e.NdJ("dataChange",function(r){return e.CHM(t),e.oxw().resource.anonBody.values[0].value=r}),e.qZA(),e.qZA()}if(2&n){const t=e.oxw();e.xp6(3),e.Q6J("routerLink","../resource")("queryParams",e.VKq(4,E,t.resourceUri)),e.xp6(2),e.Q6J("data",t.resource.anonBody.values[0].value)("config",t.editorConfig)}}const b=[{path:"",component:(()=>{class n{constructor(t,o,r){this.router=t,this.route=o,this.datasetService=r,this.resource=new R._,this.anonResources=new Map,this.labels=new Map,this.editorConfig={extraPlugins:"autogrow",allowedContent:!0},this.jsonld="",this.router.routeReuseStrategy.shouldReuseRoute=()=>!1;const a=this.router.getCurrentNavigation();this.resource=a.extras.state&&a.extras.state.resource}ngOnInit(){this.datasetId=this.route.snapshot.paramMap.get("did")||"default",this.resourceUri=this.route.snapshot.queryParamMap.get("uri"),this.resource?this.jsonld=this.resource.asJsonLd():this.router.navigate(["../resource"],{relativeTo:this.route,queryParams:{uri:this.resourceUri}})}saveContent(){this.datasetService.updateDatasetResource(this.datasetId,this.resourceUri,this.jsonld).subscribe(()=>this.router.navigate(["../resource"],{relativeTo:this.route,queryParams:{uri:this.resourceUri}}))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.F0),e.Y36(u.gz),e.Y36(_.d))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-edit-resource"]],decls:3,vars:2,consts:[["id","describe",1,"row"],["id","localmetadata-edit",3,"ngClass",4,"ngIf"],["id","localcontent-edit","class","col-md-8 m-0",4,"ngIf"],["id","localmetadata-edit",3,"ngClass"],["class","text-right",4,"ngIf"],["rows","64",1,"form-control",2,"font-size","x-small",3,"ngModel","ngModelChange"],[1,"text-right"],[1,"resource-btn","fa","fa-close",3,"routerLink","queryParams"],[1,"resource-btn","fa","fa-save",3,"click"],["id","localcontent-edit",1,"col-md-8","m-0"],[1,"resource-btn","fa","fa-refresh",3,"click"],[3,"data","config","dataChange"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.YNc(1,K,3,6,"div",1),e.YNc(2,D,6,6,"div",2),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",o.resource&&o.resource["@id"]),e.xp6(1),e.Q6J("ngIf",o.resource&&o.resource.anonBody))},directives:[p.O5,p.mk,u.rH,d.Fj,d.JJ,d.On,M],styles:[".resource-btn[_ngcontent-%COMP%]{cursor:pointer;margin-left:.5em}"]}),n})()}];let A=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[u.Bz.forChild(b)],u.Bz]}),n})(),I=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[p.ez,A,O,d.u5]]}),n})()}}]);