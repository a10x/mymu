import { Tools } from "../../core/tools/tools";

import brushIcon from "../../images/paint-brush.png";
import pointerIcon from "../../images/pointer.png";
import { BrushColourProperty, BrushTestProperty } from "./tool_properties/brush_properties";

const ICON_SIZE = "32";

class ToolViewHolder{
	constructor(tool, icon, propertiesViews=[]){
		this.tool = tool;
		this.icon = icon;
		this.propertiesViews = propertiesViews;
	}
	getTool(){return this.tool;}
	getIcon(){return this.icon;}
	getPropertiesViews(){return this.propertiesViews;}
	
	addPropertyView(view){this.propertiesViews.push(view);}
	getPropertyView(index){return this.propertiesViews[index];}
}

export const ToolViews = [new ToolViewHolder(Tools.POINTER_TOOL, pointerIcon),
								  new ToolViewHolder(Tools.BRUSH_TOOL, brushIcon, [BrushColourProperty, BrushColourProperty, BrushColourProperty]),
								  new ToolViewHolder(Tools.PEN_TOOL, brushIcon)];

export const ToolView = (props) => {
	const index = props.index;
	const toolView = ToolViews[index];

	return (
		<div class="canvasTool" onClick={()=>props.onClick(index)} key={toolView.getTool().getName()}>
			<img class="toolIcon" src={toolView.getIcon()} width={ICON_SIZE} height={ICON_SIZE} />
		</div>
	);
};