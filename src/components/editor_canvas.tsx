import {useRef, useEffect} from "preact/hooks";

import "./canvas_style.css";

export function EditorCanvas(props){

	const canvasRef = useRef(null);

	useEffect(()=>{
		if(!canvasRef.current) return;
		console.log(canvasRef.current);
		const canvas = new fabric.Canvas("canvas", {
			width: canvasRef.current.clientWidth,
			height: canvasRef.current.clientHeight,
			backgroundColor: "lightgrey"
		});
	});

	return (
		<>
			<canvas id="canvas" style="margin-left:30%; margin-top:10%;" ref={canvasRef} width="600" height="600" />
		</>
	);
}