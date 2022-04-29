import { useEffect } from "preact/hooks";
import { EditorCanvas } from "./components/editor_canvas";
import {EditorToolbar} from "./components/toolbar/editor_toolbar";
import { Canvas } from "./core/canvas";
import { SelectionMode } from "./core/canvas/canvas_modes";

export function App(props: any) {

	/*	useEffect(()=>{
		Canvas.init("canvas");
		Canvas.get().setMode(new SelectionMode());
	},[]);*/

	return (
		<>
			<EditorToolbar />
			<EditorCanvas />
		</>
	);
}
