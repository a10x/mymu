import { useEffect, useState } from "preact/hooks";

import { FloatingColourPicker } from "../../utils/colour_picker";

import {rgbaToCssString} from "./utils";

import "./brush_properties.css";

export const BrushColourProperty = (props)=>{
	const property = props.tool.getProperty("COLOUR");
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

export const BrushTestProperty = (props)=>{

	return (
		<div style="background: blue; width:32px; height:32px;">{console.log("property")}</div>
	);
};

export const BrushSizeProperty = (props)=>{

	return (
		<div class="brushSizeProp" />
	);
};