// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface ToolProperties{[key: string]: any;}

type onChangeFn = ((value: T)=>void) | null;
export class ToolProperty<T>{
	private readonly name: string;
	private displayName: string;
	private value: T;
	private onChange: onChangeFn;

	constructor(name:string, displayName:string, value:T, onChange: onChangeFn){
		this.name = name;
		this.displayName = displayName;
		this.value = value;
		this.onChange = onChange;

		this.setValue(value);
	}
	
	getName(){return this.name;}
	getDisplayName(){return this.displayName;}
	getValue(){return this.value;}
	setDisplayName(displayName: string){this.displayName=displayName;}
	setValue(value:T){this.value=value;if(this.onChange)this.onChange(value);}
}

type onUseFn = (()=>void)|null;
export class Tool{
	private readonly name: string;
	private displayName: string;
	private properties: ToolProperties;
	private onUse: onUseFn;

	constructor(name:string, displayName:string, properties:ToolProperties={}, onUse: onUseFn){
		this.name = name;
		this.displayName = displayName;
		this.properties = properties;
		this.onUse = onUse;
	}

	getName(){return this.name;}
	getDisplayName(){return this.displayName;}
	getProperties(){return this.properties;}
	getProperty<T>(key: string): ToolProperty<T>{return this.properties[key];}
	setDisplayName(displayName: string){this.displayName=displayName;}
	callUseFn(){if(this.onUse)this.onUse();}
}
