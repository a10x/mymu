export class RgbaColour{
	r: number;
	g: number;
	b: number;
	a: number;

	constructor(r:number, g=r, b=r, a=1){
		this.r = r;
		this.g = g;
		this.b = b;
		this.a = a;
	}
}

export const scaleValue = (value: number, oldMin: number, oldMax: number, newMin: number, newMax: number)=> {
	return (value - oldMin) / (oldMax-oldMin) * (newMax - newMin) + newMin;
};