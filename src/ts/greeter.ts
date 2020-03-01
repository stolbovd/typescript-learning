interface Person {
	firstName: string;
	lastName: string;
}

class Student implements Person {
	fullName: string;
	
	constructor (public firstName: string, public middleInitial: string, public lastName: string) {
		this.fullName = firstName + " " + middleInitial + " " + lastName;
	}
	
	toString (): string {
		return this.fullName;
	}
}

class Professor extends Student {
	constructor (firstName: string,
			middleInitial: string,
			lastName: string,
			public saincificLevel: string)
	{
		super(firstName, middleInitial, lastName);
		this.saincificLevel = saincificLevel;
		this.fullName = firstName + " " + middleInitial + " " + lastName;
	}
	
	toString (): string {
		return `${super.toString()} ${this.saincificLevel}`;
	}
}

function greeter (person: Person) {
	return "Hello, " + person;
}

function onDocumentLoad (): void {
//	let user = {firstName: "Jane", lastName: "User", birthday: "07.05.2000"};
	let user: Person = new Student("Jane", "M.", "User");
	let users: Person[] = [user, new Professor("Catherine", "A.", "Stolbova", "PhD")];
	let temp: string = "";
	users.forEach(user => {
		temp += greeter(user) + "\n";
	});
	document.body.textContent = temp;
}

