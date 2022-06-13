import { EditorScreen } from "./screens/editor_screen";
import { GalleryScreen } from "./screens/gallery_screen";

import {Router} from "preact-router";

export function App() {

	return (
		<>
			<Router>
				<GalleryScreen path="/gallery" default />	
				<EditorScreen path="/edit/:file" file="null" />
			</Router>
		</>
	);
}
