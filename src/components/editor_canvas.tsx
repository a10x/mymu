import {FunctionComponent, h} from "preact";
import {useRef, useEffect, useState} from "preact/hooks";

import {fabric} from "fabric";

import "./canvas_style.css";
import { Canvas } from "../core/canvas";

export const EditorCanvas: FunctionComponent<{width: number, height: number, imageSrc: string}> = (props) =>{

	const canvasRef = useRef<HTMLCanvasElement>(null);
	
	useEffect(()=>{

		if(!canvasRef.current) return;

		console.log(props.imageSrc);
		Canvas.init("canvas", canvasRef.current.clientWidth, canvasRef.current.clientHeight);
		Canvas.get().getFabric().setDimensions({width: props.width, height: props.height});
		Canvas.get().getFabric().setBackgroundImage(props.imageSrc, Canvas.get().getFabric().renderAll.bind(Canvas.get().getFabric()), {
			originX: "left",
			originY: "top"
		});
	});

	return (
		<div class="canvas-parent">
			<canvas id="canvas" width="200" height="200"  ref={canvasRef} />
		</div>
	);
};