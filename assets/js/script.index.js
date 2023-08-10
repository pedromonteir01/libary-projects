class Book {
    constructor(title, author, numberPgs) {
        this.title = title;
        this.author = author;
        this.numberPgs = numberPgs;
    }
}

class Person {
    constructor(name, age, books) {
        this.name = name;
        this.age = age;
        this.books = books;
    }
}

class Library {
    constructor(booksF, personC) {
        this.booksF = booksF;
        this.personC = personC;
    }
}