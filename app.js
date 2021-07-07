/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
let i = 0;
let list = [];
function g(j) {
  return document.getElementById(j);
}
function stack(templateString) {
  const template = document.createElement('template');
  template.innerHTML = templateString.trim();
  document.getElementById('books').appendChild(template.content.firstChild);
}
function updateList() {
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
function updateLocalStorage() {
  localStorage.setItem('stuff', JSON.stringify({
    arr: list,
    count: i,
  }));
}
function addBook() {
  const title = g('t').value;
  const author = g('a').value;
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
function removeBook(id, p) {
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

function loadPrev() {
  if (JSON.parse(window.localStorage.getItem('stuff')) !== null) {
    updateList();
  }
}
window.onload = loadPrev();
/* eslint-enable no-plusplus */
/* eslint-enable no-unused-vars */
