import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { xbase } from './x.base';
// Ext Class - Ext.d3.HeatMap
class xd3_heatmapMetaData {
	public static XTYPE: string = 'd3-heatmap';
	public static INPUTNAMES: string[] = [
		'alwaysOnTop',
		'axisLock',
		'baseCls',
		'bind',
		'border',
		'bottom',
		'centered',
		'clipScene',
		'cls',
		'colorAxis',
		'componentCls',
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
		'labels',
		'left',
		'legend',
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
		'size',
		'store',
		'style',
		'styleHtmlCls',
		'styleHtmlContent',
		'tiles',
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
		'xAxis',
		'xtype',
		'y',
		'yAxis',
		'zIndex',
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'added',parameters:'d3-heatmap,container,index'},
		{name:'beforehide',parameters:'d3-heatmap'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeshow',parameters:'d3-heatmap'},
		{name:'beforetofront',parameters:'d3-heatmap'},
		{name:'destroy',parameters:''},
		{name:'erased',parameters:'d3-heatmap'},
		{name:'floatingchange',parameters:'d3-heatmap,positioned'},
		{name:'fullscreen',parameters:'d3-heatmap'},
		{name:'hide',parameters:'d3-heatmap'},
		{name:'initialize',parameters:'d3-heatmap'},
		{name:'moved',parameters:'d3-heatmap,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'positionedchange',parameters:'d3-heatmap,positioned'},
		{name:'removed',parameters:'d3-heatmap,container,index'},
		{name:'resize',parameters:'element'},
		{name:'sceneresize',parameters:'component,scene,size'},
		{name:'scenesetup',parameters:'component,scene'},
		{name:'show',parameters:'d3-heatmap'},
		{name:'tofront',parameters:'d3-heatmap'},
		{name:'updatedata',parameters:'d3-heatmap,newData'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
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
		'orientationchange',
		'painted',
		'positionedchange',
		'removed',
		'resize',
		'sceneresize',
		'scenesetup',
		'show',
		'tofront',
		'updatedata',
		'ready'
];
}
@Component({
  selector: 'x-' + xd3_heatmapMetaData.XTYPE,
	inputs: xd3_heatmapMetaData.INPUTNAMES,
	outputs: xd3_heatmapMetaData.OUTPUTNAMES,
	providers: [{provide: xbase, useExisting: forwardRef(() => xd3_heatmap)}],
	template: '<template #dynamic></template>'
})
export class xd3_heatmap extends xbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,xd3_heatmapMetaData);
	}
	//@ContentChildren(xbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(xbase,{read: xbase}) extbaseRef: QueryList<xbase>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,xd3_heatmapMetaData);}
}
