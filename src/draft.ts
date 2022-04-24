let id: number = 1
let company: string = 'Traversy Media'
let isPublished: boolean = true
let x: any = "hello"

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, 'hello']

// TUPLE
let person: [number, string, boolean] = [1, 'hello', true]

let employee: [number, string][];

employee = [
    [1, "String"],
    [56, "Homerun"],

]

// UNIONS

let union: string | number = 22;
union = 'twenty two';

// eNUM / eNUMERATED TYPE

enum Direction1 {
    Up  = 9,
    down,
    left,
    right
}


type user = {
    id: number,
    name : any,
}

const userName: user = {
    id: 3,
    name: 'saugat'
}

// Type assertion

let cid: any = 1

//  two ways we can assert type
// 1st

let customerId = <number>cid
customerId = 4;

// 2nd
let personalId = cid as string
personalId = 'XYZ30213'

// functions

function addNum(x:number, y:number): number {
    return x + y
}

// Void : if the function does not return anything

function log(message: string | number): void {
    console.log(message);
}

//INTERFACES
interface userInterface  {
    readonly id: number //to make the property immutable
    name: string
    age? : number //if you need to make some properties optional, use ?
}

const user1: userInterface = {
    id: 3,
    name: 'Saugat',
}


interface MathFunc {
    (x:number, y:number) : number
}

const multiply: MathFunc = (x, y) => {
    return x * y;
}


// Classes

// IMPLEMENTING INTERFACES IN CLASSES, use implements keyword and not regular :

interface personInterface  {
    id: number 
    name: string
    register() : string
    }

class Person implements personInterface {
    // Data modifiers, CAN MAKE DATA PRIVATE AND ONLY ACCESSIBLE WITHIN THE CLASS
    // PUBLIC, PRIVATE & PROTECTED
    id: number;
    name: string;
    
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    register() {
        return `${this.name} is now a registered User.`
    }
}

const saugat = new Person(1, 'Saugat Giri');
const rujan = new Person(3, 'Rujan Shrestha')

// SUBCLASSES // EXTENDED CLASSES

class Employee extends Person {
    position: string 
    
    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'Saugat', 'Developer');
// console.log(emp);

// GENERICS : used for creating resuable functions/components

function getArray<T>(items: T[]): T[]{
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4]);
let stringArray = getArray<string>(['Saugat', 'John', 'Brad']);

stringArray.push('hello');


function getString<T>(elements: T): T{
    return elements
}

let strString = getString<string>('stringaljdklskjdalksdjlkasjdlkjd')

console.log(stringArray, strString);




// console.log(customerId, personalId, user1, saugat.register(), rujan.register())
