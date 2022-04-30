import {h} from "preact";
import { GalleryCreateItem } from "../components/gallery/gallery_create_item";
import { GalleryItem } from "../components/gallery/gallery_item";

import "./gallery_screen.css";

import checkered from "./../images/checkered_pattern.png";

export const GalleryScreen = ()=>{

	return (
		<div class="gallery-screen">
			<GalleryCreateItem />
			<GalleryItem title="Hello, meme" image={checkered} />
		</div>
	);
};