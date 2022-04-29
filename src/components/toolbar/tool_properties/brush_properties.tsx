import {h, FunctionalComponent } from "preact";
import {useState } from "preact/hooks";

import { FloatingColourPicker } from "../../utils/colour_picker";

import {rgbaToCssString} from "./utils";

import "./brush_properties.css";
import { Tool } from "../../../core/tools/tool";
import { RgbaColour } from "../../../core/tools/utils";
import { RangeSlider } from "../../utils/range_slider";

type BrushColourPropertyFn = FunctionalComponent<{tool: Tool}>;
export const BrushColourProperty:BrushColourPropertyFn = (props)=>{
	const property = props.tool.getProperty<RgbaColour>("COLOUR");
	const [colour, setColour] = useState(property.getValue());
	const [showPicker, setShowPicker] = useState(false);

	const onChange = (value: RgbaColour) => {
		setColour(value);	
		property.setValue(value);
	};

	const onClick = (e: MouseEvent) =>{
		if(e.detail === 1)property.setValue(colour);
		else if(e.detail == 2)setShowPicker(!showPicker);
	};

	return (
		<div class="brush-colour-prop">
			<div onClick={onClick} class="colour-square" style={`background-color: ${rgbaToCssString(colour)};`} />
			{showPicker && <FloatingColourPicker colour={colour} onBlur={()=>setShowPicker(false)} onChange={onChange} />}
		</div>
	);
};

export const BrushColourPalette: FunctionalComponent<{tool: Tool}> = (props)=>{
	const [selectedId, setSelectedId] = useState(0);

	const onClick = (id: number) =>{
		setSelectedId(id);
	};

	return (
		<div class="brush-colour-palette">
			<div key="0" onClick={()=>onClick(0)} class={`palette-colour ${selectedId==0?"selected":""}`}><BrushColourProperty tool={props.tool} /></div>
			<div key="1" onClick={()=>onClick(1)} class={`palette-colour ${selectedId==1?"selected":""}`}><BrushColourProperty tool={props.tool} /></div>
			<div key="2" onClick={()=>onClick(2)} class={`palette-colour ${selectedId==2?"selected":""}`}><BrushColourProperty tool={props.tool} /></div>
		</div>
	);
};

export const BrushSizeProperty: FunctionalComponent<{tool: Tool}> = (props)=>{
	const property = props.tool.getProperty<number>("SIZE");
	const [size, setSize] = useState(property.getValue());

	const onChange = (value: number)=>{
		setSize(value);
		property.setValue(value);
	};

	return (
		<div class="brushSizeProp">
			<div class="brush-slider">
				<RangeSlider min={1} max={100} value={size} onChange={onChange} />
			</div>
			<span class="size-text">{size}</span>
		</div>
	);
};