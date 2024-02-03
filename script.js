const dialog = document.querySelector("dialog");
const showButton = document.querySelector("btn__add");
const addBooks = document.getElementById("add__book__btn");


// "Show the dialog" button opens the dialog modally
btn__add.addEventListener("click", () => {
    dialog.showModal();

  });
  
//   // "Close" button closes the dialog
// closeButton.addEventListener("click", () => {
//     dialog.close();

//   });
  

  
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  
}

Book.prototype.toggleRead = function(){
  this.read = !this.read;
}

function toggleRead(index){
  myLibrary[index].toggleRead();
  render();
}

function removeBook(index){
  myLibrary.splice(index, 1);
  render();
}

function addBookToLibrary() {
  let title  = document.getElementById("title").value;
  let author  = document.getElementById("author").value;
  let pages  = document.getElementById("pages").value;
  let read  = document.getElementById("read").checked;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();

};

function render(){
  let LibraryElement = document.querySelector("#library" || ".library");
  LibraryElement.innerHTML = "";
  for(let i = 0; i < myLibrary.length; i++){
    let book = myLibrary[i];
    let bookElement = document.createElement("div");
    bookElement.setAttribute("class", "book-card");
    bookElement.innerHTML = `
    <div class="card-header">
      <h3 class="title>${book.title}</h3>
    </div>


    <div class="card-body">
      <p>${book.title}  Title</p>
      <p>${book.author}  Author</p>
      <p>${book.pages}  Pages</p>
      <p class="read-status ${book.read}">${book.read ? "Read" : "Not read yet"}</p>
      <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
      <button class="toggle-read-btn" onclick=toggleRead(${i})>Toggle Read</button>
    </div>
    `
    LibraryElement.appendChild(bookElement);
  }
}

add__book__btn.addEventListener("click", (event) =>{
  event.preventDefault();
  addBookToLibrary();
});