import { fabric } from "fabric";
import { BaseBrush } from "fabric/fabric-impl";
import { CanvasMode, SelectionMode } from "./canvas/canvas_modes";
export class Canvas{

	private _canvas: fabric.Canvas;
	private static canvas: Canvas;
	
	private _currentMode: CanvasMode;
	private _currentBrush: BaseBrush | null;

	public brushes : Brushes;

	private constructor(elemId: string){
		this._canvas = new fabric.Canvas("canvas");
		this._currentMode = new SelectionMode();
		this._currentBrush = null;
	}
	public static init(elemId: string, width=200, height=200){
		if(!Canvas.canvas){
			Canvas.canvas = new Canvas(elemId);
			Canvas.get().brushes = new Brushes();
			Canvas.get().getFabric().setWidth(400);
			Canvas.get().getFabric().setHeight(250);
			Canvas.get().getFabric().setBackgroundColor("lightgrey", ()=>{});
		}

		Canvas.get().getFabric().setWidth(width);
		Canvas.get().getFabric().setHeight(height);
		Canvas.get().getFabric().requestRenderAll();
		Canvas.get().getFabric().setBackgroundColor("lightgrey", ()=>{});
		Canvas.get().getFabric().calcOffset();
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

}

export class Brushes{
	public PENCIL_BRUSH = new fabric.PencilBrush(Canvas.get().getFabric());
}