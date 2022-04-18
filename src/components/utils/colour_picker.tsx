import { FunctionComponent } from "preact";
import { StateUpdater, useState } from "preact/hooks";
import { RgbaColorPicker } from "react-colorful";
import { RgbaColour } from "../../core/tools/utils";

import "./colour_picker.css";

type FloatingColourPickerFn = FunctionComponent<{
	colour: RgbaColour,
	onBlur: ()=>void,
	onChange: StateUpdater<RgbaColour>}>;

export const FloatingColourPicker: FloatingColourPickerFn = (props)=>{
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