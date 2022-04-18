import { Tool, ToolProperty } from "./tool";
import { RgbaColour } from "./utils";

export const Tools = {
	POINTER_TOOL: new Tool("pointer_tool", "Select"),
	BRUSH_TOOL: new Tool("brush_tool", "Brush",
		{
			COLOUR: new ToolProperty<RgbaColour>("colour_property", "Colour", new RgbaColour(255, 0, 20)),
			SIZE: new ToolProperty<number>("size_property", "Size", 3) 
		}),
	PEN_TOOL: new Tool("pen_tool", "Pen")
};

