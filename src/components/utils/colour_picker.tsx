import { useState } from "preact/hooks";
import { RgbaColorPicker } from "react-colorful";

import "./colour_picker.css";

export const FloatingColourPicker = (props)=>{
	const [mouseOver, setMouseOver] = useState(false);

	const onPickerBlur = ()=>{
		if(!mouseOver)props.onBlur();
	};

	return (
		<div class="pickerContainer">
			<RgbaColorPicker color={props.colour}
				onMouseEnter={()=>setMouseOver(true)}
				onMouseLeave={()=>setMouseOver(false)} onBlur={onPickerBlur} onChange={props.onChange} />
		</div>
	);
};