import multiply, { multiplyByTwo as mBy2, HelloWorld } from './multiply'
// We use the "* as anyName" syntax to import all exports from a module into a single variable.

const a = 5;
const b = 2;

console.log(`${a} * ${b} = ${multiply(a, b)}`);
mBy2(2);

// boolean
let c: boolean = true;

// number
let num: number = 1 + 0b1 + 0o1 + 0x1;

// string 
const hello: string = 'Hello';
const world: string = "World";
const helloWorld = ` 
  ${hello}
  ${world}
`;

// null and undefined
let n: null = null;
let u: undefined = undefined;

function uppercasseFirstLetter(str: string) {
  return str[0].toUpperCase() + str.substr(1);
}

console.log(uppercasseFirstLetter('hello'))

// object
type primitiveTypes = boolean | number | string | symbol | null | undefined

// Void   , The void type exists to describe the functions which are not supposed to return anything
function log(message: string): void {
  console.log(message)
}

// Array 
let array1: string[] = ['x', 'y']
let array2: Array<string> = array1

// Tuple
let tuple: [string, number] = ['str', 1]

// Enum
enum Color {
  Red,
  Green,
  Blue
}

// Any
let ANY: any;
ANY = 'a string'
ANY = 1
ANY = true

// Type Assertions

const email = document.getElementById('email');

if (email) {
  email.addEventListener('change', e => {
    const input = e.currentTarget as HTMLInputElement;
    console.log(input.value);
  });
}


