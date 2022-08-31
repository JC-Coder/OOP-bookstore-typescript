import { Book } from "./classes/book.js";
let form = document.querySelector("#book-form");
let bookTitle = document.querySelector("#title");
let bookAuthor = document.querySelector("#author");
let bookIsbn = document.querySelector("#isbn");
let submitBtn = document.querySelector("#submit");
let booksContainer = document.querySelector("#book-list");
// let deleteBookBtn = document.querySelectorAll('.delete-book') as NodeListOf<HTMLAnchorElement>;
let book;
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // input elements validations
    if (bookTitle.value && bookAuthor.value && bookIsbn.value) {
        book = new Book(bookTitle.value, bookAuthor.value, bookIsbn.value);
        book.showBooksInDom(booksContainer);
        // get all delete btns
        deleteBtnFunc();
        // reset input fields
        form.reset();
    }
    else {
        alert("Please fill in all fields");
    }
});
function deleteBtnFunc() {
    let deleteBookBtn = document.querySelectorAll(".delete-book");
    deleteBookBtn.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            book.deleteBook(parseInt(item.id));
            book.showBooksInDom(booksContainer);
            deleteBtnFunc();
        });
    });
}
