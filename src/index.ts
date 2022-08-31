import { Book } from "./classes/book.js";

let form = document.querySelector("#book-form") as HTMLFormElement;
let bookTitle = document.querySelector("#title") as HTMLInputElement;
let bookAuthor = document.querySelector("#author") as HTMLInputElement;
let bookIsbn = document.querySelector("#isbn") as HTMLInputElement;
let submitBtn = document.querySelector("#submit") as HTMLButtonElement;
let booksContainer = document.querySelector("#book-list") as HTMLTableElement;
// let deleteBookBtn = document.querySelectorAll('.delete-book') as NodeListOf<HTMLAnchorElement>;

let book: Book;

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
  } else {
    alert("Please fill in all fields");
  }
});


function deleteBtnFunc(){

    let deleteBookBtn = document.querySelectorAll(".delete-book") as NodeListOf<HTMLAnchorElement>;

  
      deleteBookBtn.forEach((item) => {
        item.addEventListener("click", (e: Event) => {
          e.preventDefault();
  
          book.deleteBook(parseInt(item.id));
          book.showBooksInDom(booksContainer);
          deleteBtnFunc();

        });
      });

}