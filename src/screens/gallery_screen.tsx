import {h} from "preact";
import { GalleryCreateItem } from "../components/gallery/gallery_create_item";
import { GalleryItem } from "../components/gallery/gallery_item";

import "./gallery_screen.css";

import checkered from "./../images/checkered_pattern.png";
import { useCallback, useEffect, useMemo, useState } from "preact/hooks";

const useMymuPath = ()=>{
	const [path, setPath] = useState("");

	useEffect(()=>{
		const getPath = async ()=>{
			let docPath = await Neutralino.os.getPath("documents");
			docPath += "\\mymu";

			try{
				await Neutralino.filesystem.getStats(docPath);
			}catch(err){
				await Neutralino.filesystem.createDirectory(docPath);
			}
			setPath(docPath);
		};
		getPath();
	}, []);
	return path;
};

export const GalleryScreen = ()=>{
	const [path, setPath] = useState();

	useMymuPath();

	return (
		<div class="gallery-screen">
			<GalleryCreateItem />
			<GalleryItem title="Hello, meme" image={checkered} />
			<GalleryItem title="Hello, meme" image={checkered} />
			<GalleryItem title="Hello, meme" image={checkered} />
			<GalleryItem title="Hello, meme" image={checkered} />
			<GalleryItem title="Hello, meme" image={checkered} />
		</div>
	);
};