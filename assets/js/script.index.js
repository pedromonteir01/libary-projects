//classe do livro
class Book {
    constructor(title, author, numberPgs) {
        this.title = title;
        this.author = author;
        this.numberPgs = numberPgs;
    }
}

//classe das pessoas
class Person {
    //parâmetros
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.arrayBook = [];
    }
    //método de emprestar
    getBook(book) {
        this.arrayBook.push(book);
        console.log(`${this.name} pegou o livro ${book.title}`);
    }
    //método para mostrar o livro da pessoa
    showBooks() {
        let showBook = "";

        if (this.arrayBook.length == 0) {
            console.log(`${this.name} não tem livros emprestados`);
        } else {
            this.arrayBook.forEach((index) => {
                showBook += index.title + ", ";
            })
            console.log(`${this.name} tem tais livros: ${showBook}`);
        }

    }
}

//classe da biblioteca
class Library {
    constructor() {
        //cadastro das pessoas
        this.personC = [];
        //cadastro dos livros
        this.arrayBooksL = [];
    }
    //método para casatrar livro
    addBook(book) {
        this.arrayBooksL.push(book);
        console.log(`Foi adicionado ${book.title}`);
    }
    //método para cadastrar pessoa
    addPerson(person) {
        this.personC.push(person);
        console.log(`${person.name} foi cadastrada`);
    }

}

//livros
const book1 = new Book("Novembro 9", "Collen Hoover", 396);
const book2 = new Book("Teto pra dois", "Beth O'Leary", 505);
//pessoas
const person1 = new Person("Pedro", 16);
const person2 = new Person("Sophia", 16);

//biblioteca
const library = new Library();

//cadastro
library.addBook(book1);
library.addBook(book2);
library.addPerson(person1);
library.addPerson(person2);

//empréstimo
person1.getBook(book1);
person1.getBook(book2)

//mostrar livros
person1.showBooks();
person2.showBooks();
