import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { extbase } from './ext.base';
// Ext Class - Ext.field.TextInput
class exttextinputMetaData {
	public static XTYPE: string = 'textinput';
	public static INPUTNAMES: string[] = [
		'alwaysOnTop',
		'autoCapitalize',
		'autoComplete',
		'autoCorrect',
		'axisLock',
		'baseCls',
		'bind',
		'border',
		'bottom',
		'centered',
		'checked',
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
		'fastFocus',
		'flex',
		'floated',
		'fullscreen',
		'height',
		'hidden',
		'hideAnimation',
		'hideOnMaskTap',
		'html',
		'id',
		'isFocused',
		'itemId',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'left',
		'listeners',
		'margin',
		'maxHeight',
		'maxLength',
		'maxRows',
		'maxValue',
		'maxWidth',
		'minHeight',
		'minValue',
		'minWidth',
		'modal',
		'name',
		'originalValue',
		'padding',
		'pattern',
		'placeHolder',
		'plugins',
		'publishes',
		'readOnly',
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
		'startValue',
		'stepValue',
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
		'type',
		'ui',
		'useBodyElement',
		'useMask',
		'userCls',
		'value',
		'viewModel',
		'width',
		'x',
		'xtype',
		'y',
		'zIndex',
		'fit',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'added',parameters:'textinput,container,index'},
		{name:'beforehide',parameters:'textinput'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeshow',parameters:'textinput'},
		{name:'beforetofront',parameters:'textinput'},
		{name:'blur',parameters:'e'},
		{name:'click',parameters:'e'},
		{name:'destroy',parameters:''},
		{name:'erased',parameters:'textinput'},
		{name:'floatingchange',parameters:'textinput,positioned'},
		{name:'focus',parameters:'e'},
		{name:'fullscreen',parameters:'textinput'},
		{name:'hide',parameters:'textinput'},
		{name:'initialize',parameters:'textinput'},
		{name:'keyup',parameters:'e'},
		{name:'masktap',parameters:'textinput,e'},
		{name:'mousedown',parameters:'e'},
		{name:'moved',parameters:'textinput,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'paste',parameters:'e'},
		{name:'positionedchange',parameters:'textinput,positioned'},
		{name:'removed',parameters:'textinput,container,index'},
		{name:'resize',parameters:'element'},
		{name:'show',parameters:'textinput'},
		{name:'tofront',parameters:'textinput'},
		{name:'updatedata',parameters:'textinput,newData'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'added',
		'beforehide',
		'beforeorientationchange',
		'beforeshow',
		'beforetofront',
		'blur',
		'click',
		'destroy',
		'erased',
		'floatingchange',
		'focus',
		'fullscreen',
		'hide',
		'initialize',
		'keyup',
		'masktap',
		'mousedown',
		'moved',
		'orientationchange',
		'painted',
		'paste',
		'positionedchange',
		'removed',
		'resize',
		'show',
		'tofront',
		'updatedata',
		'ready'
];
}
@Component({
  selector: 'ext-' + exttextinputMetaData.XTYPE,
	inputs: exttextinputMetaData.INPUTNAMES,
	outputs: exttextinputMetaData.OUTPUTNAMES,
	providers: [{provide: extbase, useExisting: forwardRef(() => exttextinput)}],
	template: '<template #dynamic></template>'
})
export class exttextinput extends extbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,exttextinputMetaData);
	}
	@ContentChildren(extbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,exttextinputMetaData);}
}