import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { xbase } from './x.base';
// Ext Class - Ext.Menu
class xmenuMetaData {
	public static XTYPE: string = 'menu';
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
		'stretchX',
		'stretchY',
		'style',
		'styleHtmlCls',
		'styleHtmlContent',
		'title',
		'toFrontOnShow',
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
		{name:'activate',parameters:'newActiveItem,menu,oldActiveItem'},
		{name:'add',parameters:'menu,item,index'},
		{name:'added',parameters:'menu,container,index'},
		{name:'beforehide',parameters:'menu'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeshow',parameters:'menu'},
		{name:'beforetofront',parameters:'menu'},
		{name:'deactivate',parameters:'oldActiveItem,menu,newActiveItem'},
		{name:'destroy',parameters:''},
		{name:'erased',parameters:'menu'},
		{name:'floatingchange',parameters:'menu,positioned'},
		{name:'fullscreen',parameters:'menu'},
		{name:'hide',parameters:'menu'},
		{name:'initialize',parameters:'menu'},
		{name:'move',parameters:'menu,item,toIndex,fromIndex'},
		{name:'moved',parameters:'menu,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'positionedchange',parameters:'menu,positioned'},
		{name:'remove',parameters:'menu,item,index'},
		{name:'removed',parameters:'menu,container,index'},
		{name:'renderedchange',parameters:'menu,item,rendered'},
		{name:'resize',parameters:'element'},
		{name:'show',parameters:'menu'},
		{name:'tofront',parameters:'menu'},
		{name:'updatedata',parameters:'menu,newData'},
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
}
@Component({
  selector: 'x-' + xmenuMetaData.XTYPE,
	inputs: xmenuMetaData.INPUTNAMES,
	outputs: xmenuMetaData.OUTPUTNAMES,
	providers: [{provide: xbase, useExisting: forwardRef(() => xmenu)}],
	template: '<template #dynamic></template>'
})
export class xmenu extends xbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,xmenuMetaData);
	}
	//@ContentChildren(xbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(xbase,{read: xbase}) extbaseRef: QueryList<xbase>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,xmenuMetaData);}
}
