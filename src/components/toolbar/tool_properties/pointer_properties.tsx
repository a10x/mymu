import {h, FunctionalComponent } from "preact";

import "./pointer_properties.css";

import closeIcon from "./../../../images/close.png";
import saveIcon from "./../../../images/save.png";
import { route } from "preact-router";

export const PointerCloseProperty = ()=>{
	
	const onClick = () => {
		console.log("closing canvas");
		route("/", true);
	};

	return (
		<div onClick={onClick} class="centred-icon-prop pointer-close-prop">
			<img src={closeIcon} /> 
		</div>
	);
};

export const PointerSaveProperty = ()=>{
	
	const onClick = () => {
		console.log("saving canvas");
	};

	return (
		<div onClick={onClick} class="centred-icon-prop pointer-save-prop">
			<img src={saveIcon} /> 
		</div>
	);
};