import { FunctionComponent } from "preact";
import { Tool } from "../../core/tools/tool";
import { Tools } from "../../core/tools/tools";

import brushIcon from "../../images/paint-brush.png";
import pointerIcon from "../../images/pointer.png";
import { BrushColourProperty} from "./tool_properties/brush_properties";

class ToolViewHolder{
	private tool: Tool;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	private icon: any;
	private propsViews: FunctionComponent<{tool: Tool}>[];

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	constructor(tool: Tool, icon: any, propsViews: FunctionComponent<{tool: Tool}>[]=[]){
		this.tool = tool;
		this.icon = icon;
		this.propsViews = propsViews;
	}
	getTool(){return this.tool;}
	getIcon(){return this.icon;}
	getPropsViews(){return this.propsViews;}
	
	addPropView(view: FunctionComponent){this.propsViews.push(view);}
	getPropView(index: number){return this.propsViews[index];}
}

export const ToolViews = [new ToolViewHolder(Tools.POINTER_TOOL, pointerIcon)];

ToolViews.push(new ToolViewHolder(Tools.BRUSH_TOOL, brushIcon, 
	[BrushColourProperty, BrushColourProperty, BrushColourProperty]));
ToolViews.push(new ToolViewHolder(Tools.PEN_TOOL, brushIcon));