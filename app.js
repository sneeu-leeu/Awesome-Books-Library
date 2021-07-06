/* eslint-disable no-unused-vars */
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
function addBook() {
  const title = g('t').value;
  const author = g('a').value;
  stack(`<div id="${i + title}">
      <p>${title}</p>
      <p>${author}</p>
      <button id="${i + title}" value="${i}" onclick="removeBook(this.id, this.value)">Remove</button>
    </div>
    <hr>`);
  const locaList = JSON.parse(localStorage.getItem('stuff')).arr;
  if (locaList !== undefined) {
    list = locaList;
    const book = {};
    book.author = author;
    book.title = title;
    list.push(book);
    i += 1;
    localStorage.setItem('stuff', JSON.stringify({ arr: list }));
  } else {
    const book = {};
    book.author = author;
    book.title = title;
    list.push(book);
    i += 1;
    localStorage.setItem('stuff', JSON.stringify({ arr: list }));
  }
  g('t').value = '';
  g('a').value = '';
}
function removeBook(id, p) {
  const position = parseInt(p, 10);
  list.splice(position, 1);
  document.getElementById(id).remove();
  localStorage.setItem('stuff', JSON.stringify({ arr: list }));
}
/* eslint-disable no-plusplus */
function loadPrev() {
  const mList = JSON.parse(localStorage.getItem('stuff')).arr;
  for (let j = 0; j < mList.length; j++) {
    const book = mList[j];
    stack(`<div id="${j + book.title}">
        <p>${book.title}</p>
        <p>${book.author}</p>
        <button id="${j + book.title}" value="${j}" onclick="removeBook(this.id, this.value)">Remove</button>
      </div>
      <hr>`);
  }
}
window.onload = loadPrev();
/* eslint-enable no-plusplus */
/* eslint-enable no-unused-vars */
