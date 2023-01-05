// En strängvariabel
let message: string = 'Hello, world!';

// En numerisk variabel
let number: number = 42;

// En boolesk variabel
let isTrue: boolean = true;

// En array med element av typen number
let numbers: number[] = [1, 2, 3, 4, 5];

// En tuple med element av typen string och number
let user: [string, number] = ['Alice', 42];

// En konstant som inte kan ändras
const PI: number = 3.14;

// En enum som ger namn till numeriska värden
enum Color {Red, Green, Blue}
let favoriteColor: Color = Color.Green;

// En funktion som tar en parameter av typen number och returnerar en number
function add(x: number, y: number): number {
  return x + y;
}

// En objekttyp med en egenskap av typen string
interface User {
  name: string;
}

// En variabel av typen User
let alice: User = {name: 'Alice'};