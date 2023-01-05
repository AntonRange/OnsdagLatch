// En strängletiabel
let message = 'Hello, world!';
// En numerisk letiabel
let number = 42;
// En boolesk letiabel
let isTrue = true;
// En array med element av typen number
let numbers = [1, 2, 3, 4, 5];
// En tuple med element av typen string och number
let user = ['Alice', 42];
// En konstant som inte kan ändras
let PI = 3.14;
// En enum som ger namn till numeriska värden
let Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let favoriteColor = Color.Green;
// En funktion som tar en parameter av typen number och returnerar en number
function add(x, y) {
    return x + y;
}
// En letiabel av typen User
let alice = { name: 'Alice' };
