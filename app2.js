//  This code demonstrates how to use OOP approach in javascript to build a simple book store. 
// this also makes use of the local storage api which help save items . if user leave the page and visit some other time . the items will still be available on the site .


let title = document.querySelector('#title');
let author = document.querySelector('#author');
let isbn = document.querySelector('#isbn');
let submitBtn = document.querySelector('#submit');

// check and update list from local storage 
let savedBooks = localStorage.getItem('savedBooks');

if(savedBooks) booksArrayStatus = JSON.parse(savedBooks);
else booksArrayStatus = [];



class Book {

    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//this class will handle the dom creation and manipulation

class Dom {


    // booksArray = [{title: 'test', author: 'jc', isbn: 'ajikda'}, {title: 'nio2', author: 'jcd', isbn: 'abdha'}];
    booksArray = booksArrayStatus;

    // add new book method
    addNewBook(book){
        this.booksArray.push({
            title: book.title,
            author: book.author,
            isbn: book.isbn
        });

        localStorage.setItem('savedBooks', JSON.stringify(this.booksArray));
    }


    // show all books method 
    showAllBooks(){
        let html = '';
        this.booksArray.forEach( (item, index) => {
            html += `
            <tr>
                <td>${item.title}</td>
                <td>${item.author}</td>
                <td>${item.isbn}</td>
                <td><a href="" class="delete" id="${index}">X</a></td>
            </tr>
            `;
        });

        // append html to book-list div
        document.querySelector('#book-list').innerHTML = html;
    }


    // show alert method
    showAlert(message, status){
        let container = document.querySelector('.container');
        let formDiv = document.querySelector('#book-form');

        // create alert element 
        let alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${status}`;
        alertDiv.appendChild(document.createTextNode(message));

        container.insertBefore(alertDiv, formDiv);

        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    // delete item method
    deleteItem(id){
        this.booksArray.splice(id, 1);
        this.showAllBooks();
        localStorage.setItem('savedBooks', JSON.stringify(this.booksArray));
    }

    // clear input field method 
    clearInput(){
        title.value = '';
        author.value = '';
        isbn.value = '';
    }


}


// Instantiate ui globally 
let dom = new Dom();

// show all books on page load 
dom.showAllBooks();




//   add new book function 
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if(title.value == '' || author.value == '' || isbn == ''){
        // show error message 
        dom.showAlert('Please fill in all fields', 'danger');
    } else {
        // add new book 
        let book = new Book(title.value, author.value, isbn.value);
        dom.addNewBook(book);

        // clear input fields
        dom.clearInput();

        // show books
        dom.showAllBooks();
        
    }
} );


// delete book function 
function delEventListener(){
    document.querySelectorAll('.delete').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            dom.deleteItem(e.target.id);
            delEventListener();
        })
    })
}

delEventListener();