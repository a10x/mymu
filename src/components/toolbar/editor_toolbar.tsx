import {h, FunctionComponent } from "preact";
import {useState} from "preact/hooks";

import {ToolViews } from "./tool_views";

import "./toolbar_style.css";
import { Tool } from "../../core/tools/tool";

const ICON_SIZE = "32";

// eslint-disable-next-line no-unused-vars
type ToolClickFn = (toolIndex: number) => void;

export const EditorToolbar: FunctionComponent = ()=>{
	const [curTool, setCurTool] = useState(0);
	const [curToolProps, setCurToolProps] = useState(ToolViews[curTool].getPropsViews());
	
	const onToolClick: ToolClickFn= (toolIndex: number)=>{
		setCurTool(toolIndex);
		setCurToolProps(ToolViews[toolIndex].getPropsViews());
	};

	return (
		<div class="canvasToolbar">
			<div class="tools">
				{ToolViews.map((_,i)=><ToolViewComponent key={i} onClick={onToolClick} viewIndex={i} />)}
			</div>
			<div class="vl" />
			<CurrentPropsComponent properties={curToolProps} toolIndex={curTool} />
		</div>
	);
};

const CurrentPropsComponent: FunctionComponent<{toolIndex: number, properties:FunctionComponent<{tool: Tool}>[] }> = (props)=>{
	return (
		<div class="toolProperties">
			{console.log(ToolViews[props.toolIndex].getTool().getProperties())}
			{props.properties.map((ToolProperty, i) =>
				<div key={i} class="toolProperty">
					<ToolProperty tool={ToolViews[props.toolIndex].getTool()} />
				</div>
			)}
		</div>
	);
};

export const ToolViewComponent: FunctionComponent<{viewIndex: number, onClick: ToolClickFn }> = (props) => {
	const index = props.viewIndex;
	const toolView = ToolViews[index];

	return (
		<div class="canvasTool" onClick={()=>props.onClick(index)} key={toolView.getTool().getName()}>
			<img class="toolIcon" src={toolView.getIcon()} width={ICON_SIZE} height={ICON_SIZE} />
		</div>
	);
};