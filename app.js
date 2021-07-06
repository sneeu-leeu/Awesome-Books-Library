let i = 0;
let list = [];
function g(j) {
  return document.getElementById(j);
}
function stack(templateString) {
  let template = document.createElement('template');
  template.innerHTML = templateString.trim();
  document.getElementById('books').appendChild(template.content.firstChild);
}
function addBook() {
  let title = g('t').value;
  let author = g('a').value;
  stack(`<div id="${i + title}">
      <p>${title}</p>
      <p>${author}</p>
      <button id="${i + title}" value="${i}" onclick="removeBook(this.id, this.value)">Remove</button>
    </div>
    <hr>`);
  let book = {
    author: author,
    title: title
  };
  list[i] = book;
  i += 1;
  window.localStorage.setItem('stuff', JSON.stringify({ arr: list }));
}
function removeBook(id, p) {
  let position = parseInt(p);
  list.splice(position, 1);
  document.getElementById(id).remove();
  localStorage.list = list;
}
function loadPrev() {
  if (typeof (Storage) !== 'undefined') {
    let mList = JSON.parse(localStorage.getItem('stuff')).arr;
    for (let j = 0; j < mList.length; j++) {
      let book = mList[j];
      stack(`<div id="${j + book.title}">
        <p>${book.title}</p>
        <p>${book.author}</p>
        <button id="${j + book.title}" value="${j}" onclick="removeBook(this.id, this.value)">Remove</button>
      </div>
      <hr>`);
    }
  }
  else {
    alert(0);
  }
}
window.onload = loadPrev();
//# sourceMappingURL=app.js.map