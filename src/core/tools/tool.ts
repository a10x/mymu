export class Tool{

	constructor(name:string, displayName:string, properties=[]){
		this.name = name;
		this.displayName = displayName;
		this.properties = properties;
	}

	getName(){return this.name;}
	getDisplayName(){return this.displayName;}
	getProperties(){return this.properties;}
	getProperty(key){return this.properties[key];}
}

export class ToolProperty{
	constructor(name, displayName, value){
		this.name = name;
		this.displayName = displayName;
		this.value = value;
	}

	getName(){return this.name;}
	getDisplayName(){return this.displayName;}
	getValue(){return this.value;}

	setValue(value){this.value = value;}

}
