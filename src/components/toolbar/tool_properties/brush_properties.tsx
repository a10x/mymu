import {h, FunctionalComponent } from "preact";
import {useState } from "preact/hooks";

import { FloatingColourPicker } from "../../utils/colour_picker";

import {rgbaToCssString} from "./utils";

import "./brush_properties.css";
import { Tool } from "../../../core/tools/tool";
import { RgbaColour } from "../../../core/tools/utils";
import { RangeSlider } from "../../utils/range_slider";

export const BrushColourProperty: FunctionalComponent<{tool: Tool}> = (props)=>{
	const property = props.tool.getProperty<RgbaColour>("COLOUR");
	const [colour, setColour] = useState(property.getValue());
	const [showPicker, setShowPicker] = useState(false);

	const onChange = (value: RgbaColour) => {
		setColour(value);	
		property.setValue(value);
	};

	return (
		<div class="brushColourProp">
			<div onClick={()=>setShowPicker(!showPicker)} class="colourSquare" style={`background-color: ${rgbaToCssString(colour)};`} />
			{showPicker && <FloatingColourPicker colour={colour} onBlur={()=>setShowPicker(false)} onChange={onChange} />}
		</div>
		
	);
};

export const BrushSizeProperty: FunctionalComponent<{tool: Tool}> = (props)=>{
	const property = props.tool.getProperty<number>("COLOUR");
	const [size, setSize] = useState(property.getValue());

	const onChange = (value: number)=>{
		setSize(value);
		property.setValue(value);
		console.log(value);
	};

	return (
		<div class="brushSizeProp">
			<RangeSlider min={90} max={100} value={size} onChange={onChange} />
		</div>
	);
};