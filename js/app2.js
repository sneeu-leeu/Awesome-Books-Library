
class Book {
  #list
  constructor() {
    const localList = JSON.parse(localStorage.getItem('stuff'));
    if (localList !== null) {
      this.#list = localList.arr
    };
  }

  #g(j) {
    return document.getElementById(j);
  }

  #stack(templateString) {
    const template = document.createElement('template');
    template.innerHTML = templateString.trim();
    document.getElementById('books').appendChild(template.content.firstChild);
  }

  updateList() {
    document.getElementById('books').innerHTML = '';
    for (let j = 0; j < this.#list.length; j++) {
      const book = this.#list[j];
      this.#stack(`<div id="${book.title}">
        <p>${book.title}</p>
        <p>${book.author}</p>
        <button id="${j + book.title}" value="${j}" onclick="target(this)">Remove</button>
      </div>
      <hr>`,
      );
    }
  }

  updateLocalStorage() {
    localStorage.setItem('stuff', JSON.stringify({
      arr: this.#list,
    }));
  }

  addBook() {
    const title = this.#g('t').value;
    const author = this.#g('a').value;
    const book = {};
    book.author = author;
    book.title = title;
    this.#list.push(book);
    this.updateLocalStorage();
    this.updateList();
    this.#g('t').value = '';
    this.#g('a').value = '';
  }

  removeBook(id, position) {
    const p = parseInt(position, 10);
    document.getElementById(id).remove();
    const filteredList = this.#list.slice(0, p).concat(this.#list.slice(p + 1, this.#list.length));
    this.#list = filteredList;
    this.updateLocalStorage();
    this.updateList();
  }

  loadPrev() {
    this.updateList();
  }
}
