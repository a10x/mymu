import {h} from "preact";
import { route } from "preact-router";

import "./gallery_create_item.css";

import newIcon from "./../../images/new.png";
import openIcon from "./../../images/open.png";

export const GalleryCreateItem = () =>{
	
	const onIconClick = async (icon: number) => {
		if(icon){
			console.log("open");
			const selectedFiles = await Neutralino.os.showOpenDialog("Open Image", {
				filters: [{name: "Images", extensions: ["png", "jpg"]}],
			});
			if(selectedFiles.length > 0)
				route(`/edit/${selectedFiles[0]}`);
		}else{
			route("/edit/null", true);
		}
	};

	return (
		<div class="gallery-create-item">
			<img src={newIcon} onClick={()=>onIconClick(0)} class="gallery-create-icon" />
			<hr class="hr-line" />
			<img src={openIcon} onClick={()=>onIconClick(1)} class="gallery-create-icon" />
		</div>
	);
};