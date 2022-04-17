import {useEffect, useState} from "preact/hooks";

import { ToolView } from "./tool_views";
import { ToolViews } from "./tool_views";

import "./toolbar_style.css";

export function EditorToolbar(props){
	const [prevTool, setPrevTool] = useState(-1);
	const [curTool, setCurTool] = useState(0);
	const [curToolProps, setCurToolProps] = useState(ToolViews[curTool].getPropertiesViews());
	
	const onToolClick = (toolIndex)=>{
		setCurTool(toolIndex);
		setCurToolProps(ToolViews[toolIndex].getPropertiesViews());
	};

	return (
		<div class="canvasToolbar">
			<div class="tools">
				{ToolViews.map((_,i)=><ToolView onClick={onToolClick} index={i} />)}
			</div>
			<div class="vl" />
			<CurrentPropsComponent properties={curToolProps} toolIndex={curTool} />
		</div>
	);
}

const CurrentPropsComponent = (props)=>{
	return (
		<div class="toolProperties">
			{console.log(ToolViews[props.toolIndex].getTool().getProperties())}
			{props.properties.map(ToolProperty =>
				<div class="toolProperty">
					<ToolProperty tool={ToolViews[props.toolIndex].getTool()} />
				</div>
			)}
		</div>
	);
};
