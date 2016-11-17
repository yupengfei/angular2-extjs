import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { xbase } from './x.base';
// Ext Class - Ext.field.Radio
class xradiofieldMetaData {
	public static XTYPE: string = 'radiofield';
	public static INPUTNAMES: string[] = [
		'alwaysOnTop',
		'axisLock',
		'baseCls',
		'bind',
		'bodyAlign',
		'border',
		'bottom',
		'centered',
		'checked',
		'clearIcon',
		'cls',
		'component',
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
		'inputCls',
		'inputType',
		'isFocused',
		'itemId',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'label',
		'labelAlign',
		'labelCls',
		'labelMaskTap',
		'labelTextAlign',
		'labelWidth',
		'labelWrap',
		'left',
		'listeners',
		'margin',
		'maxHeight',
		'maxWidth',
		'minHeight',
		'minWidth',
		'modal',
		'name',
		'padding',
		'plugins',
		'publishes',
		'record',
		'reference',
		'relative',
		'renderTo',
		'required',
		'right',
		'scrollable',
		'session',
		'shadow',
		'shim',
		'showAnimation',
		'style',
		'styleHtmlCls',
		'styleHtmlContent',
		'tabIndex',
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
		'value',
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
		{name:'added',parameters:'radiofield,container,index'},
		{name:'beforehide',parameters:'radiofield'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeshow',parameters:'radiofield'},
		{name:'beforetofront',parameters:'radiofield'},
		{name:'change',parameters:'radiofield,newValue,oldValue'},
		{name:'check',parameters:'radiofield'},
		{name:'destroy',parameters:''},
		{name:'erased',parameters:'radiofield'},
		{name:'floatingchange',parameters:'radiofield,positioned'},
		{name:'fullscreen',parameters:'radiofield'},
		{name:'hide',parameters:'radiofield'},
		{name:'initialize',parameters:'radiofield'},
		{name:'moved',parameters:'radiofield,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'positionedchange',parameters:'radiofield,positioned'},
		{name:'removed',parameters:'radiofield,container,index'},
		{name:'resize',parameters:'element'},
		{name:'show',parameters:'radiofield'},
		{name:'tofront',parameters:'radiofield'},
		{name:'uncheck',parameters:'radiofield'},
		{name:'updatedata',parameters:'radiofield,newData'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'added',
		'beforehide',
		'beforeorientationchange',
		'beforeshow',
		'beforetofront',
		'change',
		'check',
		'destroy',
		'erased',
		'floatingchange',
		'fullscreen',
		'hide',
		'initialize',
		'moved',
		'orientationchange',
		'painted',
		'positionedchange',
		'removed',
		'resize',
		'show',
		'tofront',
		'uncheck',
		'updatedata',
		'ready'
];
}
@Component({
  selector: 'x-' + xradiofieldMetaData.XTYPE,
	inputs: xradiofieldMetaData.INPUTNAMES,
	outputs: xradiofieldMetaData.OUTPUTNAMES,
	providers: [{provide: xbase, useExisting: forwardRef(() => xradiofield)}],
	template: '<template #dynamic></template>'
})
export class xradiofield extends xbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,xradiofieldMetaData);
	}
	//@ContentChildren(xbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(xbase,{read: xbase}) extbaseRef: QueryList<xbase>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,xradiofieldMetaData);}
}
