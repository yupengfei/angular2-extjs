"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ext_base_1 = require('./ext.base');
var extcarouselindicatorMetaData = (function () {
    function extcarouselindicatorMetaData() {
    }
    extcarouselindicatorMetaData.XTYPE = 'carouselindicator';
    extcarouselindicatorMetaData.INPUTNAMES = [
        'alwaysOnTop',
        'axisLock',
        'baseCls',
        'bind',
        'border',
        'bottom',
        'centered',
        'cls',
        'contentEl',
        'controller',
        'data',
        'defaultListenerScope',
        'disabled',
        'docked',
        'draggable',
        'enterAnimation',
        'exitAnimation',
        'flex',
        'floated',
        'fullscreen',
        'height',
        'hidden',
        'hideAnimation',
        'hideOnMaskTap',
        'html',
        'id',
        'itemId',
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'left',
        'listeners',
        'margin',
        'maxHeight',
        'maxWidth',
        'minHeight',
        'minWidth',
        'modal',
        'padding',
        'plugins',
        'publishes',
        'record',
        'reference',
        'relative',
        'renderTo',
        'right',
        'scrollable',
        'session',
        'shadow',
        'shim',
        'showAnimation',
        'style',
        'styleHtmlCls',
        'styleHtmlContent',
        'toFrontOnShow',
        'tooltip',
        'top',
        'touchAction',
        'tpl',
        'tplWriteMode',
        'translatable',
        'twoWayBindable',
        'ui',
        'useBodyElement',
        'userCls',
        'viewModel',
        'width',
        'x',
        'xtype',
        'y',
        'zIndex',
        'fit',
        'config'
    ];
    extcarouselindicatorMetaData.OUTPUTS = [
        { name: 'added', parameters: 'carouselindicator,container,index' },
        { name: 'beforehide', parameters: 'carouselindicator' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'carouselindicator' },
        { name: 'beforetofront', parameters: 'carouselindicator' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'carouselindicator' },
        { name: 'floatingchange', parameters: 'carouselindicator,positioned' },
        { name: 'fullscreen', parameters: 'carouselindicator' },
        { name: 'hide', parameters: 'carouselindicator' },
        { name: 'initialize', parameters: 'carouselindicator' },
        { name: 'moved', parameters: 'carouselindicator,container,toIndex,fromIndex' },
        { name: 'next', parameters: 'carouselindicator' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'carouselindicator,positioned' },
        { name: 'previous', parameters: 'carouselindicator' },
        { name: 'removed', parameters: 'carouselindicator,container,index' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'carouselindicator' },
        { name: 'tofront', parameters: 'carouselindicator' },
        { name: 'updatedata', parameters: 'carouselindicator,newData' },
        { name: 'ready', parameters: '' }
    ];
    extcarouselindicatorMetaData.OUTPUTNAMES = [
        'added',
        'beforehide',
        'beforeorientationchange',
        'beforeshow',
        'beforetofront',
        'destroy',
        'erased',
        'floatingchange',
        'fullscreen',
        'hide',
        'initialize',
        'moved',
        'next',
        'orientationchange',
        'painted',
        'positionedchange',
        'previous',
        'removed',
        'resize',
        'show',
        'tofront',
        'updatedata',
        'ready'
    ];
    return extcarouselindicatorMetaData;
}());
var extcarouselindicator = (function (_super) {
    __extends(extcarouselindicator, _super);
    function extcarouselindicator(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extcarouselindicatorMetaData);
    }
    extcarouselindicator.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extcarouselindicator.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extcarouselindicatorMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extcarouselindicator.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extcarouselindicator.prototype, "dynamicRef", void 0);
    extcarouselindicator = __decorate([
        core_1.Component({
            selector: 'ext-' + extcarouselindicatorMetaData.XTYPE,
            inputs: extcarouselindicatorMetaData.INPUTNAMES,
            outputs: extcarouselindicatorMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extcarouselindicator; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extcarouselindicator);
    return extcarouselindicator;
}(ext_base_1.extbase));
exports.extcarouselindicator = extcarouselindicator;