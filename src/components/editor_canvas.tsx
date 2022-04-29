import {h} from "preact";
import {useRef, useEffect, useState} from "preact/hooks";

import {fabric} from "fabric";

import "./canvas_style.css";
import { Canvas } from "../core/canvas";

export const EditorCanvas = () =>{

	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [size, setSize] = useState([600, 600]);
	
	useEffect(()=>{
		if(!canvasRef.current) return;

		Canvas.init("canvas", canvasRef.current.clientWidth, canvasRef.current.clientHeight);
		/*
		const brush = new fabric.PencilBrush(Canvas.get().getFabric());
		brush.width = 8;
		Canvas.get().getFabric().freeDrawingBrush = brush;*/
	});

	return (
		<div class="canvas-parent">
			<canvas id="canvas" width={size[0]} height={size[1]}  ref={canvasRef} />
		</div>
	);
};