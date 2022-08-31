export class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        Book.allBooks.push({
            title: this.title,
            author: this.author,
            isbn: this.isbn
        });
    }
    showAllBooks() {
        return Book.allBooks;
    }
    showBooksInDom(container) {
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
            </tr> `;
            container.innerHTML = html;
        });
    }
    deleteBook(id) {
        Book.allBooks.splice(id, 1);
    }
}
Book.allBooks = [];
