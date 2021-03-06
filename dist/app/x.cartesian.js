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
var x_base_1 = require('./x.base');
var xcartesianMetaData = (function () {
    function xcartesianMetaData() {
    }
    xcartesianMetaData.XTYPE = 'cartesian';
    xcartesianMetaData.INPUTNAMES = [
        'animation',
        'axes',
        'background',
        'colors',
        'engine',
        'flipXY',
        'gradients',
        'highlightItem',
        'innerPadding',
        'insetPadding',
        'interactions',
        'legend',
        'mainRect',
        'resizeHandler',
        'series',
        'sprites',
        'store',
        'style',
        'theme',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    xcartesianMetaData.OUTPUTS = [
        { name: 'beforerefresh', parameters: 'cartesian' },
        { name: 'bodyresize', parameters: 'size' },
        { name: 'itemclick', parameters: 'chart,item,event' },
        { name: 'itemdblclick', parameters: 'chart,item,event' },
        { name: 'itemmousedown', parameters: 'chart,item,event' },
        { name: 'itemmousemove', parameters: 'chart,item,event' },
        { name: 'itemmouseout', parameters: 'chart,item,event' },
        { name: 'itemmouseover', parameters: 'chart,item,event' },
        { name: 'itemmouseup', parameters: 'chart,item,event' },
        { name: 'itemtap', parameters: 'chart,item,event' },
        { name: 'redraw', parameters: 'cartesian' },
        { name: 'refresh', parameters: 'cartesian' },
        { name: 'spriteclick', parameters: 'sprite,event' },
        { name: 'spritedblclick', parameters: 'sprite,event' },
        { name: 'spritemousedown', parameters: 'sprite,event' },
        { name: 'spritemousemove', parameters: 'sprite,event' },
        { name: 'spritemouseout', parameters: 'sprite,event' },
        { name: 'spritemouseover', parameters: 'sprite,event' },
        { name: 'spritemouseup', parameters: 'sprite,event' },
        { name: 'spritetap', parameters: 'sprite,event' },
        { name: 'storechange', parameters: 'chart,newStore,oldStore' },
        { name: 'ready', parameters: '' }
    ];
    xcartesianMetaData.OUTPUTNAMES = [
        'beforerefresh',
        'bodyresize',
        'itemclick',
        'itemdblclick',
        'itemmousedown',
        'itemmousemove',
        'itemmouseout',
        'itemmouseover',
        'itemmouseup',
        'itemtap',
        'redraw',
        'refresh',
        'spriteclick',
        'spritedblclick',
        'spritemousedown',
        'spritemousemove',
        'spritemouseout',
        'spritemouseover',
        'spritemouseup',
        'spritetap',
        'storechange',
        'ready'
    ];
    return xcartesianMetaData;
}());
var xcartesian = (function (_super) {
    __extends(xcartesian, _super);
    function xcartesian(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xcartesianMetaData);
    }
    xcartesian.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xcartesian.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xcartesianMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: x_base_1.xbase }), 
        __metadata('design:type', core_1.QueryList)
    ], xcartesian.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xcartesian.prototype, "dynamicRef", void 0);
    xcartesian = __decorate([
        core_1.Component({
            selector: 'x-' + xcartesianMetaData.XTYPE,
            inputs: xcartesianMetaData.INPUTNAMES,
            outputs: xcartesianMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xcartesian; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xcartesian);
    return xcartesian;
}(x_base_1.xbase));
exports.xcartesian = xcartesian;
