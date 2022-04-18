import {h, FunctionalComponent } from "preact";
import { useEffect, useState } from "preact/hooks";

import { FloatingColourPicker } from "../../utils/colour_picker";

import {rgbaToCssString} from "./utils";

import "./brush_properties.css";
import { Tool } from "../../../core/tools/tool";
import { RgbaColour } from "../../../core/tools/utils";

export const BrushColourProperty: FunctionalComponent<{tool: Tool}> = (props)=>{
	const property = props.tool.getProperty<RgbaColour>("COLOUR");
	const [colour, setColour] = useState(property.getValue());
	const [showPicker, setShowPicker] = useState(false);

	useEffect(()=>{
		property.setValue(colour);
	}, [colour]);

	return (
		<div class="brushColourProp">
			<div onClick={()=>setShowPicker(!showPicker)} class="colourSquare" style={`background-color: ${rgbaToCssString(colour)};`} />
			{showPicker && <FloatingColourPicker colour={colour} onBlur={()=>setShowPicker(false)} onChange={setColour} />}
		</div>
		
	);
};

export const BrushSizeProperty: FunctionalComponent<{tool: Tool}> = (props)=>{
	const property = props.tool.getProperty<number>("COLOUR");
	const [size, setSize] = useState(property.getValue());

	return (
		<div class="brushSizeProp" />
	);
};