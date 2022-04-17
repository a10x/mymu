import { Tool, ToolProperty } from "./Tool";

export class RgbaColour{
	constructor(r, g=r, b=r, a=1){
		this.r = r;
		this.g = g;
		this.b = b;
		this.a = a;
	}
}

export const Tools = {
	POINTER_TOOL: new Tool("pointer_tool", "Select", null),
	BRUSH_TOOL: new Tool("brush_tool", "Brush",
		{
			COLOUR: new ToolProperty("colour_property", "Colour", new RgbaColour(255, 0, 20)),
			SIZE: new ToolProperty("size_property", "Size", 3) 
		}),
	PEN_TOOL: new Tool("pen_tool", "Pen", null)
}

