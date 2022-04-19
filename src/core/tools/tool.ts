// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface ToolProperties{[key: string]: any;}

export class ToolProperty<T>{
	private readonly name: string;
	private displayName: string;
	private value: T;

	constructor(name:string, displayName:string, value:T){
		this.name = name;
		this.displayName = displayName;
		this.value = value;
	}

	getName(){return this.name;}
	getDisplayName(){return this.displayName;}
	getValue(){return this.value;}
	setDisplayName(displayName: string){this.displayName=displayName;}
	setValue(value:T){this.value=value;}
}

export class Tool{
	private readonly name: string;
	private displayName: string;
	private properties: ToolProperties ;

	constructor(name:string, displayName:string, properties:ToolProperties={}){
		this.name = name;
		this.displayName = displayName;
		this.properties = properties;
	}

	getName(){return this.name;}
	getDisplayName(){return this.displayName;}
	getProperties(){return this.properties;}
	getProperty<T>(key: string): ToolProperty<T>{return this.properties[key];}
	setDisplayName(displayName: string){this.displayName=displayName;}
}
