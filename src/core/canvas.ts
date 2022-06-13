import { fabric } from "fabric";
import { BaseBrush } from "fabric/fabric-impl";
import { CanvasMode, SelectionMode } from "./canvas/canvas_modes";
import { Tools } from "./tools/tools";
export class Canvas{

	private _canvas: fabric.Canvas;
	private static canvas: Canvas;
	
	private _currentMode: CanvasMode;
	private _currentBrush: BaseBrush | null;
	private _scale: number;

	public brushes : Brushes;

	private constructor(canvasId: string){
		this._canvas = new fabric.Canvas(canvasId);
		this._currentMode = new SelectionMode();
		this._currentBrush = null;
		this._scale = 1;
	}
	public static init(canvasId?: string, width=200, height=200){
		if(!Canvas.canvas){
			Canvas.canvas = new Canvas(canvasId??"canvas");
			Canvas.get().brushes = new Brushes();
		}

		Canvas.get().getFabric().setWidth(width);
		Canvas.get().getFabric().setHeight(height);
		Canvas.get().getFabric().requestRenderAll();
		Canvas.get().getFabric().setBackgroundColor("lightgrey", ()=>{});
		Canvas.get().getFabric().calcOffset();
		Canvas.get().getFabric().renderAll();
	}

	public static get(){return this.canvas;}

	public canDraw = () =>this._canvas.isDrawingMode??false;

	public setBrush(brush: BaseBrush){this._currentBrush = brush;this._canvas.freeDrawingBrush=this._currentBrush;}
	public getCurrentBrush(){return this._currentBrush;}

	public getFabric = () => this._canvas;

	public setMode = (mode: CanvasMode) =>{
		this._currentMode = mode;
		this._currentMode.apply(this);
	};

	public setSize = (width: number, height: number) =>{
		Canvas.get().getFabric().setWidth(width);
		Canvas.get().getFabric().setHeight(height);
		Canvas.get().getFabric().renderAll();
		Canvas.get().getFabric().calcOffset();
	};

	public scaleBy = (value: number) =>{
		this._scale = this._scale * value;
		Canvas.get().brushes.PENCIL_BRUSH.width = Canvas.get().brushes.PENCIL_BRUSH.width*value;
		this._canvas.getObjects().forEach((obj)=>{
			obj.scaleX = obj.scaleX!*value;
			obj.scaleY = obj.scaleY!*value;	
			obj.left = obj.left!*value;
			obj.top = obj.top!*value;
			obj.setCoords();
		});
		this._canvas.discardActiveObject();
		this.setSize(this.getWidth()!*value, this.getHeight()!*value);
	};

	public scaleTo = (value: number) => {
		if(value === this._scale)return;
		this.scaleBy(value/this._scale);
	};

	public getScale = ()=>this._scale;
	public getWidth = () => Canvas.get().getFabric().width;
	public getHeight = () => Canvas.get().getFabric().height;

}

export class Brushes{
	public PENCIL_BRUSH = new fabric.PencilBrush(Canvas.get().getFabric());
}