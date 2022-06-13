export const loadImageFromComp = async (imgPath: string) =>{
	const fileContents = await Neutralino.filesystem.readBinaryFile(imgPath);
	const imgContents = btoa(Array.from(new Uint8Array(fileContents)).map(byte => String.fromCharCode(byte)).join(""));
	return `data:image/png;base64,${imgContents}`;
};