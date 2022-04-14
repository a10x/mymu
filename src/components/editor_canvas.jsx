import {useRef, useEffect} from "preact/hooks";

export function EditorCanvas(props){

	const canvasRef = useRef(null);

	useEffect(()=>{
		if(!canvasRef.current) return;
		const canvas = new fabric.Canvas("canvas", {
			width: canvasRef.current.clientWidth,
			height: canvasRef.current.clientHeight,
			backgroundColor: "lightgrey"
		});
	});

	return (
		<>
			<canvas id="canvas" ref={canvasRef} width="400" height="320"></canvas>
		</>
	);
}

