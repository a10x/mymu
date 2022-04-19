import {h, FunctionComponent } from "preact";
import { useEffect, useRef } from "preact/hooks";
import { scaleValue } from "../../core/tools/utils";

import "./range_slider.css";

type RangeSliderFn = FunctionComponent<{
	min: number, max: number,
	value: number, width?: number,
	// eslint-disable-next-line no-unused-vars
	onChange?: (value:number)=>void}>;

export const RangeSlider: RangeSliderFn = (props) => {

	const sliderRef = useRef<HTMLInputElement>(null);
	const progressRef = useRef<HTMLProgressElement>(null);

	useEffect(()=>{
		onChange();
	});

	const onChange = () =>{
		if(!sliderRef.current || !progressRef.current)return;
		const newValue = parseInt(sliderRef.current.value, 10); 
		progressRef.current.value = scaleValue(newValue, props.min, props.max, 0, 100);
		if(props.onChange)props.onChange(newValue);
	};

	return (
		<div class="range-slider">
			<progress ref={progressRef} class="progress" max={props.max} />
			<input onInput={onChange} class="slider" value={props.value} ref={sliderRef}
				min={props.min} max={props.max} type="range" />	
		</div>
	);
};