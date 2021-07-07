class Book {
  g(j) {
    return document.getElementById(j);
  }

  //Stacks the Teplate for Title & Author
  stack(templateString) {
    const template = document.createElement('template');
    template.innerHTML = templateString.trim();
    document.getElementById('books').appendChild(template.content.firstChild);
  }

  //Updates the list with book info
  updateList() {
    const localList = JSON.parse(localStorage.getItem('stuff')).arr;
    document.getElementById('books').innerHTML = '';
    for (let j = 0; j < localList.length; j++) {
      const book = localList[j];
      stack(`<div id="${j + book.title}">
          <p>${book.title}</p>
          <p>${book.author}</p>
          <button id="${j + book.title}" value="${j}" onclick="removeBook(this.id, this.value)">Remove</button>
        </div>
        <hr>`);
    }
  }

  //Update Local Storage
  updateLocalStorage() {
    localStorage.setItem('stuff', JSON.stringify({
      arr: list,
      count: i,
    }));
  }

  // Add a book to the colection
  addBook() {
    const title = this.g('t').value;
    const author = this.g('a').value;
    const locaList = JSON.parse(window.localStorage.getItem('stuff'));
    if (locaList !== null) {
      list = locaList.arr;
      i = locaList.count;
      const book = {};
      book.author = author;
      book.title = title;
      list.push(book);
      i += 1;
      updateLocalStorage();
      updateList();
    } else {
      const book = {};
      book.author = author;
      book.title = title;
      list.push(book);
      i += 1;
      updateLocalStorage();
      updateList();
    }
    g('t').value = '';
    g('a').value = '';
  }

  //Removes a book from the collection
  removeBook(id, p) {
    const locaList = JSON.parse(localStorage.getItem('stuff'));
    if (locaList !== null) {
      list = locaList.arr;
      i = locaList.count;
      const position = parseInt(p, 10);
      list.splice(position, 1);
      document.getElementById(id).remove();
      i--;
      updateLocalStorage();
      updateList();
    }
  }

  //Loads the Local Storage onto the page
  loadPrev() {
    if (JSON.parse(window.localStorage.getItem('stuff')) !== null) {
      updateList();
    }
  }
}