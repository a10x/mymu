import { RgbaColour } from "../../../core/tools/utils";

export const rgbaToCssString = (rgba: RgbaColour)=>{
	return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;
};