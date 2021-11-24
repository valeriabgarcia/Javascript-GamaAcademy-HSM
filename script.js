
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

// ******************************************************************
// VARIÁVEIS 
var num = 1;
num = 5;

if (num == 1 ) {
    console.log("num é igual a 1");
} else if (num == 2) {
    console.log("num é igual a 2");
} else {
    console.log("num é igual a 5");
}

var mes = "Janeiro";

switch (mes) {
    case "Fevereiro":
        console.log("mês 2");
        break;
    case "Março":
        console.log("mês 3");
        break;
    case "Janeiro":
        console.log("mês 1");
        break;
    default:
        console.log("nenhum dos casos foi atendidos");
}


// ******************************************************************
// ESTRUTURAS DE REPETIÇÃO
var colors = ['black', 'red', 'blue', 'green'];

for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

for (var i = 0; i <= 3; i++) {
    console.log(i);
}


var a = 0;
while  (a < 10) {
    console.log(a);
    a++;
}

var b = 0;
do {
    console.log(b);
    b++;
} while (b <= 5);


// ******************************************************************
// FUNÇÕES
function sayHello(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}
sayHello('Valeria', 'Garcia');

function sum(a, b) {
    return a + b;
}
console.log('A soma de a + b é ' + sum(5, 3));


// ******************************************************************
// CLASSES
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }  

    read() {
        return `Estou lendo ${this.title}`
    }
}

//Herança
class ITBook extends Book {
    constructor(title, author, pages, technology) {
        super(title, author, pages);
        this.technology = technology;
    }
}

let book = new Book('Algoritimos Para Viver', 'Brian', 500);
let otherBook = new Book('Outro Livro', 'Joao', 100);
let itBook = new ITBook('Livro de Tecnologia', 'Ana', 300, "Algoritimos");

console.log(book);
console.log(otherBook.read());
console.log(itBook);

//Encapsulamento 
class Person {
    constructor(name) {
        this._name = name;
    }

    get name () {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}

let person2 = new Person('Valeria');
person2.name = "Valentina";
console.log(person2.name);







