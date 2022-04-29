/*export enum CanvasMode {
	SELECTION, PENCIL_DRAWING, BRUSH_DRAWING
}*/

import { Canvas } from "../canvas";

export interface CanvasMode{
	apply(canvas: Canvas): void;
	getName(): string;
}

export class SelectionMode implements CanvasMode{
	
	private _name = "selection";

	apply(canvas: Canvas): void {
		canvas.getFabric().isDrawingMode = false;
	}

	getName(): string {
		return this._name;
	}
}

export class DrawingMode implements CanvasMode{
	private _name = "drawing";

	apply(canvas: Canvas): void {
		canvas.getFabric().isDrawingMode = true;
	}

	getName(): string {
		return this._name;
	}
}