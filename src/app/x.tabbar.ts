import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { xbase } from './x.base';
// Ext Class - Ext.tab.Bar
class xtabbarMetaData {
	public static XTYPE: string = 'tabbar';
	public static INPUTNAMES: string[] = [
		'activeItem',
		'activeTab',
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
		'defaultButtonUI',
		'defaultListenerScope',
		'defaults',
		'defaultTabUI',
		'defaultType',
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
		'title',
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
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'activate',parameters:'newActiveItem,tabbar,oldActiveItem'},
		{name:'add',parameters:'tabbar,item,index'},
		{name:'added',parameters:'tabbar,container,index'},
		{name:'beforehide',parameters:'tabbar'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeshow',parameters:'tabbar'},
		{name:'beforetofront',parameters:'tabbar'},
		{name:'deactivate',parameters:'oldActiveItem,tabbar,newActiveItem'},
		{name:'destroy',parameters:''},
		{name:'erased',parameters:'tabbar'},
		{name:'floatingchange',parameters:'tabbar,positioned'},
		{name:'fullscreen',parameters:'tabbar'},
		{name:'hide',parameters:'tabbar'},
		{name:'initialize',parameters:'tabbar'},
		{name:'move',parameters:'tabbar,item,toIndex,fromIndex'},
		{name:'moved',parameters:'tabbar,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'positionedchange',parameters:'tabbar,positioned'},
		{name:'remove',parameters:'tabbar,item,index'},
		{name:'removed',parameters:'tabbar,container,index'},
		{name:'renderedchange',parameters:'tabbar,item,rendered'},
		{name:'resize',parameters:'element'},
		{name:'show',parameters:'tabbar'},
		{name:'tabchange',parameters:'tabbar,newTab,oldTab'},
		{name:'tofront',parameters:'tabbar'},
		{name:'updatedata',parameters:'tabbar,newData'},
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
		'tabchange',
		'tofront',
		'updatedata',
		'ready'
];
}
@Component({
  selector: 'x-' + xtabbarMetaData.XTYPE,
	inputs: xtabbarMetaData.INPUTNAMES,
	outputs: xtabbarMetaData.OUTPUTNAMES,
	providers: [{provide: xbase, useExisting: forwardRef(() => xtabbar)}],
	template: '<template #dynamic></template>'
})
export class xtabbar extends xbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,xtabbarMetaData);
	}
	//@ContentChildren(xbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(xbase,{read: xbase}) extbaseRef: QueryList<xbase>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,xtabbarMetaData);}
}
