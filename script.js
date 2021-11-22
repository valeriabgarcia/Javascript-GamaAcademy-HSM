
//************************************************************************
// VARIÁVEIS TIPOS DE DADOS 

var myName = "Valéria Garcia"; //string

let language = "Javascript";

const pattern = "ECMAScript";

{
    var age = 32; // number
    var height = 1.67; // number
    var isStudent = true // boolean
}

console.log(myName);
console.log(age);


// Objeto, array, function

// Objeto => variável objeto person // e chaves na forma de string // e valor de qualquer tipo
var person = { 
    "name": "Valeria",
    "age": 32
}

// Array => conj de informações 
var students = ["Joao", "Maria", "Ana"];

// Function => objeto que tem capacidade de ser chamado e executado
function sum(a, b) {
    return a + b; 
}

// podemos usar o typeof para saber o tipo da variavel
console.log(typeof age) //tipo number
console.log(typeof sum) //tipo function


// ******************************************************************
// OPERADORES


// OPREADORES ARITIMÉTICOS +-*/%
// EX: adição
var sumTwoNumbers = 1+3;
console.log(sumTwoNumbers);

// OPERADORES DE ATRIBUIÇÃO
var x = 8;
var y = 5;
console.log(x+=y); // igual a x = x + y
console.log(x-=y); 
console.log(x*=y); 
console.log(x/=y);
console.log(x%=y);

// OPERADORES DE COMPARAÇÃO
// == comparação
// != diferente de 
// <=, >=

// OPERADORES LÓGICOS
// &&, ||, !


