import { IAllBooks } from "../interfaces/allBooks.js";
import { TStringOrNumber } from "../types/stringOrNumber.js";

export class Book {

    protected static allBooks: Array<IAllBooks> = [];

    constructor(private title: string, private author: string, private isbn: TStringOrNumber ){

        Book.allBooks.push({
            title: this.title,
            author: this.author,
            isbn: this.isbn
        });

    }

    showAllBooks(){
        return Book.allBooks;
    }

    showBooksInDom(container: HTMLTableElement){
        container.innerHTML = '';
        let html = '';
        Book.allBooks.forEach((book, index) => {
            html += `
            <tr>
                <td>${index + 1}</td>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.isbn}</td>
                <td style="color: red" class="delete-book"  id="${index}" >X</td>
            </tr> `

            container.innerHTML = html;
        })
    }


    deleteBook(id: number){
        Book.allBooks.splice(id, 1);
    }
}