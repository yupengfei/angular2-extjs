import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { extbase } from './ext.base';
// Ext Class - Ext.field.DatePicker
class extdatepickerfieldMetaData {
	public static XTYPE: string = 'datepickerfield';
	public static INPUTNAMES: string[] = [
		'alwaysOnTop',
		'autoCapitalize',
		'autoComplete',
		'autoCorrect',
		'axisLock',
		'baseCls',
		'bind',
		'bodyAlign',
		'border',
		'bottom',
		'centered',
		'clearIcon',
		'cls',
		'component',
		'contentEl',
		'controller',
		'data',
		'dateFormat',
		'defaultListenerScope',
		'defaultPhonePickerConfig',
		'defaultTabletPickerConfig',
		'destroyPickerOnHide',
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
		'labelTextAlign',
		'labelWidth',
		'labelWrap',
		'left',
		'listeners',
		'margin',
		'maxHeight',
		'maxLength',
		'maxWidth',
		'minHeight',
		'minWidth',
		'modal',
		'name',
		'padding',
		'picker',
		'pickerSlotAlign',
		'placeHolder',
		'plugins',
		'publishes',
		'readOnly',
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
		'textAlign',
		'toFrontOnShow',
		'tooltip',
		'top',
		'touchAction',
		'tpl',
		'tplWriteMode',
		'translatable',
		'triggers',
		'twoWayBindable',
		'ui',
		'useBodyElement',
		'usePicker',
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
		{name:'action',parameters:'datepickerfield,e'},
		{name:'added',parameters:'datepickerfield,container,index'},
		{name:'beforehide',parameters:'datepickerfield'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeshow',parameters:'datepickerfield'},
		{name:'beforetofront',parameters:'datepickerfield'},
		{name:'blur',parameters:'datepickerfield,e'},
		{name:'change',parameters:'datepickerfield,newDate,oldDate'},
		{name:'clearicontap',parameters:'datepickerfield,input,e'},
		{name:'destroy',parameters:''},
		{name:'erased',parameters:'datepickerfield'},
		{name:'floatingchange',parameters:'datepickerfield,positioned'},
		{name:'focus',parameters:'datepickerfield,e'},
		{name:'fullscreen',parameters:'datepickerfield'},
		{name:'hide',parameters:'datepickerfield'},
		{name:'initialize',parameters:'datepickerfield'},
		{name:'keyup',parameters:'datepickerfield,e'},
		{name:'mousedown',parameters:'datepickerfield,e'},
		{name:'moved',parameters:'datepickerfield,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'paste',parameters:'datepickerfield,e'},
		{name:'positionedchange',parameters:'datepickerfield,positioned'},
		{name:'removed',parameters:'datepickerfield,container,index'},
		{name:'resize',parameters:'element'},
		{name:'show',parameters:'datepickerfield'},
		{name:'tofront',parameters:'datepickerfield'},
		{name:'updatedata',parameters:'datepickerfield,newData'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'action',
		'added',
		'beforehide',
		'beforeorientationchange',
		'beforeshow',
		'beforetofront',
		'blur',
		'change',
		'clearicontap',
		'destroy',
		'erased',
		'floatingchange',
		'focus',
		'fullscreen',
		'hide',
		'initialize',
		'keyup',
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
  selector: 'ext-' + extdatepickerfieldMetaData.XTYPE,
	inputs: extdatepickerfieldMetaData.INPUTNAMES,
	outputs: extdatepickerfieldMetaData.OUTPUTNAMES,
	providers: [{provide: extbase, useExisting: forwardRef(() => extdatepickerfield)}],
	template: '<template #dynamic></template>'
})
export class extdatepickerfield extends extbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,extdatepickerfieldMetaData);
	}
	@ContentChildren(extbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,extdatepickerfieldMetaData);}
}