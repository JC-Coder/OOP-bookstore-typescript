import { Book } from "./book.js";
export class Render extends Book {
    constructor(title, author, isbn) {
        super(title, author, isbn);
    }
    showBooksInDom(books) {
        books.forEach(element => {
            console.log(element);
        });
    }
}
