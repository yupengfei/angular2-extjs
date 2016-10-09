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
var extcarouselMetaData = (function () {
    function extcarouselMetaData() {
    }
    extcarouselMetaData.XTYPE = 'carousel';
    extcarouselMetaData.INPUTNAMES = [
        'activeItem',
        'alwaysOnTop',
        'autoDestroy',
        'axisLock',
        'baseCls',
        'bind',
        'border',
        'bottom',
        'cardSwitchAnimation',
        'centered',
        'cls',
        'contentEl',
        'control',
        'controller',
        'data',
        'defaultListenerScope',
        'defaults',
        'defaultType',
        'direction',
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
        'indicator',
        'itemId',
        'items',
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'layout',
        'left',
        'listeners',
        'manageBorders',
        'margin',
        'masked',
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
        'referenceHolder',
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
    extcarouselMetaData.OUTPUTS = [
        { name: 'activate', parameters: 'newActiveItem,carousel,oldActiveItem' },
        { name: 'add', parameters: 'carousel,item,index' },
        { name: 'added', parameters: 'carousel,container,index' },
        { name: 'beforehide', parameters: 'carousel' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'carousel' },
        { name: 'beforetofront', parameters: 'carousel' },
        { name: 'deactivate', parameters: 'oldActiveItem,carousel,newActiveItem' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'carousel' },
        { name: 'floatingchange', parameters: 'carousel,positioned' },
        { name: 'fullscreen', parameters: 'carousel' },
        { name: 'hide', parameters: 'carousel' },
        { name: 'initialize', parameters: 'carousel' },
        { name: 'move', parameters: 'carousel,item,toIndex,fromIndex' },
        { name: 'moved', parameters: 'carousel,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'carousel,positioned' },
        { name: 'remove', parameters: 'carousel,item,index' },
        { name: 'removed', parameters: 'carousel,container,index' },
        { name: 'renderedchange', parameters: 'carousel,item,rendered' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'carousel' },
        { name: 'tofront', parameters: 'carousel' },
        { name: 'updatedata', parameters: 'carousel,newData' },
        { name: 'ready', parameters: '' }
    ];
    extcarouselMetaData.OUTPUTNAMES = [
        'activate',
        'add',
        'added',
        'beforehide',
        'beforeorientationchange',
        'beforeshow',
        'beforetofront',
        'deactivate',
        'destroy',
        'erased',
        'floatingchange',
        'fullscreen',
        'hide',
        'initialize',
        'move',
        'moved',
        'orientationchange',
        'painted',
        'positionedchange',
        'remove',
        'removed',
        'renderedchange',
        'resize',
        'show',
        'tofront',
        'updatedata',
        'ready'
    ];
    return extcarouselMetaData;
}());
var extcarousel = (function (_super) {
    __extends(extcarousel, _super);
    function extcarousel(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extcarouselMetaData);
    }
    extcarousel.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extcarousel.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extcarouselMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extcarousel.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extcarousel.prototype, "dynamicRef", void 0);
    extcarousel = __decorate([
        core_1.Component({
            selector: 'ext-' + extcarouselMetaData.XTYPE,
            inputs: extcarouselMetaData.INPUTNAMES,
            outputs: extcarouselMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extcarousel; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extcarousel);
    return extcarousel;
}(ext_base_1.extbase));
exports.extcarousel = extcarousel;