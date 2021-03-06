import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { xbase } from './x.base';
// Ext Class - Ext.pivot.plugin.rangeeditor.Panel
class xpivotrangeeditorMetaData {
	public static XTYPE: string = 'pivotrangeeditor';
	public static INPUTNAMES: string[] = [
		'activeItem',
		'alwaysOnTop',
		'anchor',
		'anchorPosition',
		'api',
		'autoDestroy',
		'axisLock',
		'baseCls',
		'baseParams',
		'bind',
		'bodyBorder',
		'bodyPadding',
		'border',
		'bottom',
		'cardSwitchAnimation',
		'centered',
		'closable',
		'closeAction',
		'closeToolText',
		'cls',
		'contentEl',
		'control',
		'controller',
		'data',
		'defaultListenerScope',
		'defaults',
		'defaultType',
		'disabled',
		'docked',
		'draggable',
		'enableSubmissionForm',
		'enctype',
		'enterAnimation',
		'exitAnimation',
		'fieldSeparators',
		'flex',
		'floated',
		'fullscreen',
		'header',
		'height',
		'hidden',
		'hideAnimation',
		'hideOnMaskTap',
		'html',
		'icon',
		'iconCls',
		'id',
		'inputBorders',
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
		'method',
		'minHeight',
		'minWidth',
		'modal',
		'multipartDetection',
		'padding',
		'paramOrder',
		'paramsAsHash',
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
		'standardSubmit',
		'style',
		'styleHtmlCls',
		'styleHtmlContent',
		'submitOnAction',
		'timeout',
		'title',
		'toFrontOnShow',
		'tools',
		'tooltip',
		'top',
		'touchAction',
		'tpl',
		'tplWriteMode',
		'trackResetOnLoad',
		'translatable',
		'twoWayBindable',
		'ui',
		'url',
		'useBodyElement',
		'userCls',
		'viewModel',
		'width',
		'x',
		'xtype',
		'y',
		'zIndex',
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'activate',parameters:'newActiveItem,pivotrangeeditor,oldActiveItem'},
		{name:'add',parameters:'pivotrangeeditor,item,index'},
		{name:'added',parameters:'pivotrangeeditor,container,index'},
		{name:'beforehide',parameters:'pivotrangeeditor'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeshow',parameters:'pivotrangeeditor'},
		{name:'beforesubmit',parameters:'pivotrangeeditor,values,options,e'},
		{name:'beforetofront',parameters:'pivotrangeeditor'},
		{name:'deactivate',parameters:'oldActiveItem,pivotrangeeditor,newActiveItem'},
		{name:'destroy',parameters:''},
		{name:'erased',parameters:'pivotrangeeditor'},
		{name:'exception',parameters:'pivotrangeeditor,result'},
		{name:'floatingchange',parameters:'pivotrangeeditor,positioned'},
		{name:'fullscreen',parameters:'pivotrangeeditor'},
		{name:'hide',parameters:'pivotrangeeditor'},
		{name:'initialize',parameters:'pivotrangeeditor'},
		{name:'move',parameters:'pivotrangeeditor,item,toIndex,fromIndex'},
		{name:'moved',parameters:'pivotrangeeditor,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'positionedchange',parameters:'pivotrangeeditor,positioned'},
		{name:'remove',parameters:'pivotrangeeditor,item,index'},
		{name:'removed',parameters:'pivotrangeeditor,container,index'},
		{name:'renderedchange',parameters:'pivotrangeeditor,item,rendered'},
		{name:'resize',parameters:'element'},
		{name:'show',parameters:'pivotrangeeditor'},
		{name:'submit',parameters:'pivotrangeeditor,result,e'},
		{name:'tofront',parameters:'pivotrangeeditor'},
		{name:'updatedata',parameters:'pivotrangeeditor,newData'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'activate',
		'add',
		'added',
		'beforehide',
		'beforeorientationchange',
		'beforeshow',
		'beforesubmit',
		'beforetofront',
		'deactivate',
		'destroy',
		'erased',
		'exception',
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
		'submit',
		'tofront',
		'updatedata',
		'ready'
];
}
@Component({
  selector: 'x-' + xpivotrangeeditorMetaData.XTYPE,
	inputs: xpivotrangeeditorMetaData.INPUTNAMES,
	outputs: xpivotrangeeditorMetaData.OUTPUTNAMES,
	providers: [{provide: xbase, useExisting: forwardRef(() => xpivotrangeeditor)}],
	template: '<template #dynamic></template>'
})
export class xpivotrangeeditor extends xbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,xpivotrangeeditorMetaData);
	}
	//@ContentChildren(xbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(xbase,{read: xbase}) extbaseRef: QueryList<xbase>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,xpivotrangeeditorMetaData);}
}
