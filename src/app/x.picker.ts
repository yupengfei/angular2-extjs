import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { xbase } from './x.base';
// Ext Class - Ext.picker.Picker
class xpickerMetaData {
	public static XTYPE: string = 'picker';
	public static INPUTNAMES: string[] = [
		'activeItem',
		'alwaysOnTop',
		'anchor',
		'anchorPosition',
		'autoDestroy',
		'axisLock',
		'baseCls',
		'bind',
		'bodyBorder',
		'bodyPadding',
		'border',
		'bottom',
		'cancelButton',
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
		'doneButton',
		'draggable',
		'enter',
		'enterAnimation',
		'exit',
		'exitAnimation',
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
		'slots',
		'stretchX',
		'stretchY',
		'style',
		'styleHtmlCls',
		'styleHtmlContent',
		'title',
		'toFrontOnShow',
		'toolbar',
		'tools',
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
		'useTitles',
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
		{name:'activate',parameters:'newActiveItem,picker,oldActiveItem'},
		{name:'add',parameters:'picker,item,index'},
		{name:'added',parameters:'picker,container,index'},
		{name:'beforehide',parameters:'picker'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeshow',parameters:'picker'},
		{name:'beforetofront',parameters:'picker'},
		{name:'cancel',parameters:'picker'},
		{name:'change',parameters:'picker,values'},
		{name:'deactivate',parameters:'oldActiveItem,picker,newActiveItem'},
		{name:'destroy',parameters:''},
		{name:'erased',parameters:'picker'},
		{name:'floatingchange',parameters:'picker,positioned'},
		{name:'fullscreen',parameters:'picker'},
		{name:'hide',parameters:'picker'},
		{name:'initialize',parameters:'picker'},
		{name:'move',parameters:'picker,item,toIndex,fromIndex'},
		{name:'moved',parameters:'picker,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'pick',parameters:'picker,values,slot'},
		{name:'positionedchange',parameters:'picker,positioned'},
		{name:'remove',parameters:'picker,item,index'},
		{name:'removed',parameters:'picker,container,index'},
		{name:'renderedchange',parameters:'picker,item,rendered'},
		{name:'resize',parameters:'element'},
		{name:'show',parameters:'picker'},
		{name:'tofront',parameters:'picker'},
		{name:'updatedata',parameters:'picker,newData'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'activate',
		'add',
		'added',
		'beforehide',
		'beforeorientationchange',
		'beforeshow',
		'beforetofront',
		'cancel',
		'change',
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
		'pick',
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
}
@Component({
  selector: 'x-' + xpickerMetaData.XTYPE,
	inputs: xpickerMetaData.INPUTNAMES,
	outputs: xpickerMetaData.OUTPUTNAMES,
	providers: [{provide: xbase, useExisting: forwardRef(() => xpicker)}],
	template: '<template #dynamic></template>'
})
export class xpicker extends xbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,xpickerMetaData);
	}
	//@ContentChildren(xbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(xbase,{read: xbase}) extbaseRef: QueryList<xbase>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,xpickerMetaData);}
}
