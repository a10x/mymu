import {FunctionComponent, h} from "preact";
import {useRef, useEffect, useState} from "preact/hooks";

import "./canvas_style.css";
import { Canvas } from "../core/canvas";
import {fabric} from "fabric";
import { loadImageFromComp } from "../core/utils";

export const EditorCanvas: FunctionComponent<{width?: number, height?: number, imageSrc?: string}> = (props) =>{

	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [size, setSize] = useState({width: props.width, height: props.height});
	const imgRef = useRef(new Image());

	const setBackgroundImage = async (imgPath: string, resize: boolean)=>{
		const image = await loadImageFromComp(imgPath);
		imgRef.current.src = image;
		imgRef.current.onload = () =>{
			console.log(imgRef.current.width, imgRef.current.height, 1);
			if(!resize){
				setSize({width: imgRef.current.width, height: imgRef.current.height});
				Canvas.get().setSize(imgRef.current.width, imgRef.current.height);
			}
			Canvas.get().getFabric().setBackgroundImage(imgRef.current.src, Canvas.get().getFabric().renderAll.bind(Canvas.get().getFabric()),
				{
					originX: "left",
					originY: "top",
					scaleX: Canvas.get().getWidth()/imgRef.current.width,
					scaleY: Canvas.get().getHeight()/imgRef.current.height
				});
		};
		imgRef.current.onerror = (e) =>{
			console.log("Image could not be loaded");
			console.log(e);
		};
	};

	useEffect(()=>{
		if(!canvasRef.current) return;
		Canvas.init("canvas", canvasRef.current.clientWidth, canvasRef.current.clientHeight);

		if(props.imageSrc)setBackgroundImage(props.imageSrc, false);
			
		Canvas.get().getFabric().add(new fabric.Rect({
			left: 10,
			top: 10,
			originX: "left",
			originY: "top",
			width: 100,
			height: 100,
			fill: "rgb(255, 0, 0)"
		}));
		window.addEventListener("wheel", handleZoom);
		return ()=>{
			window.removeEventListener("wheel", handleZoom);
		};
	}, []);

	useEffect(()=>{
		if(!Canvas.get())return;
		if(!props.width || !props.height)return;
		Canvas.get().setSize(props.width, props.height);
	}, [props.width, props.height]);

	const handleZoom = (e: WheelEvent) => {
		const scale = e.deltaY;
		if(Math.sign(scale) === 1)
			Canvas.get().scaleBy(1.03);
		else
			Canvas.get().scaleBy(0.97);
		if(props.imageSrc)setBackgroundImage(props.imageSrc, true);
	};

	return (
		<div class="canvas-parent">
			<canvas id="canvas" width={size.width} height={size.height}  ref={canvasRef} />
		</div>
	);
};