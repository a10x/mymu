import fabric from "fabric/fabric-impl";
import { Brushes, Canvas } from "../canvas";
import { DrawingMode, SelectionMode } from "../canvas/canvas_modes";
import { Tool, ToolProperty } from "./tool";
import { RgbaColour, toRgbString } from "./utils";

export const Tools = {
	POINTER_TOOL: new Tool("pointer_tool", "Select",
		{
		},
		()=>{
			Canvas.get().setMode(new SelectionMode());	
		}),
	BRUSH_TOOL: new Tool("brush_tool", "Brush",
		{
			COLOUR: new ToolProperty<RgbaColour>("colour_property", "Colour", new RgbaColour(255, 0, 20),
				(colour:RgbaColour)=>{
					if(Canvas.get())Canvas.get().brushes.PENCIL_BRUSH.color = toRgbString(colour);
				}),
			SIZE: new ToolProperty<number>("size_property", "Size", 7, 
				size=>{
					if(Canvas.get())Canvas.get().brushes.PENCIL_BRUSH.width = size;
				})
		}, ()=>{
			Canvas.get().setMode(new DrawingMode());
			Canvas.get().setBrush(Canvas.get().brushes.PENCIL_BRUSH);
		}),
	PEN_TOOL: new Tool("pen_tool", "Pen", undefined, ()=>{})
};

