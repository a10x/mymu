import {h} from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import { EditorCanvas } from "../components/editor_canvas";
import { EditorToolbar } from "../components/toolbar/editor_toolbar";

export const EditorScreen = (props: any) =>{

	const [image, setImage] = useState();
	const imgRef = useRef(new Image());
	const [size, setSize] = useState({width: 100, height: 200});

	const loadImage = async () =>{
		console.log(props.file);
		const fileContents = await Neutralino.filesystem.readBinaryFile(props.file);
		const imageSrc = btoa(Array.from(new Uint8Array(fileContents)).map(byte => String.fromCharCode(byte)).join(""));
		imgRef.current.src = `data:image/png;base64,${imageSrc}`;
		imgRef.current.onload = () =>{
			console.log("image loaded");
			console.log(imgRef.current.width, imgRef.current.height, 1);
			setSize({width: imgRef.current.width, height: imgRef.current.height});
		};
		imgRef.current.onerror = (e) =>{
			console.log("Image could not be loaded");
			console.log(e);
		};
	};

	useEffect(()=>{
		console.log(props.file);
		if(props.file === "null") return;

		//loadImage();
		
		/*const image = new Image();
		image.src = props.file;
		image.onload = () =>{
			console.log(`${image.width } : ${ image.height}`);
		};
		image.onerror = (e) =>{
			console.log("Image could not be loaded");
			console.log(e);
		};*/
	}, []);

	return (
		<>
			<EditorToolbar />
			<EditorCanvas imageSrc={props.file} />
		</>
	);

};