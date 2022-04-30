import {FunctionComponent, h} from "preact";

import "./gallery_item.css";

export const GalleryItem: FunctionComponent<{title: string, image: any}> = (props) => {

	return (
		<div class="gallery-item">
			<div class="image-parent">
				<img src={props.image} />
			</div>
			<div class="item-title" style="padding: 0"><h5 style="padding: 0">{props.title}</h5></div>
			<div class="item-overlay" />
		</div>
	);

};