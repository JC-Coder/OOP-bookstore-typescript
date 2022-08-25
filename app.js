//  This code demonstrates how to use OOP approach in javascript to build a simple book store. 



class Book {

    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
};

class UI {

    // method for adding new books 
    addBookToList(book){
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="" class="delete" >X</a></td>
        `;

        list.appendChild(row);
    }


    // method for alerts
    showAlert(message, className){
        const div = document.createElement('div');

        // add class name to created div
        div.className = `alert alert-${className}`;

        // adding message to the created div
        div.appendChild(document.createTextNode(message));

        // getting the container element 
        let container = document.querySelector('.container');

        // get form div
        let form = document.querySelector('#book-form');

        // Insert alert 
        container.insertBefore(div, form);

        // hide alert after 3 s
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    // delete book method
    deleteBook(target){
        if(target.className == 'delete'){
            target.parentNode.parentNode.remove();
        }
    }

    // clear fields method 
    clearFields(){
        let title = document.querySelector('#title').value = '';
        let author = document.querySelector('#author').value = '';
        let isbn = document.querySelector('#isbn').value = '';
    }
}


// Listening for events 

document.querySelector('#submit').addEventListener('click', (e) => {
    //preventing default html 
    e.preventDefault();

    // get values of form inputs 
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let isbn = document.querySelector('#isbn').value;

    // instantiate book 
    let book = new Book(title, author, isbn);

    // instantiate ui
    let ui = new UI();

    // validating input and checking for empty values 
    if(title == '' || author == '' || isbn == ''){
        // show error message 
        ui.showAlert('Please fill in all fields','danger');

    } else {

        // adding the new book 
        ui.addBookToList(book);

        // show success alert 
        ui.showAlert('Book added successfully', 'success');

        // clear fields 
        ui.clearFields();
    }

});

// delete button function 
document.querySelector('#book-list').addEventListener('click', (e) => {
    e.preventDefault();
    
    // instantiate new ui
    let ui = new UI();

    // delete book 
    ui.deleteBook(e.target);

    // show success message 
    ui.showAlert('Book removed successfully', 'success');
})