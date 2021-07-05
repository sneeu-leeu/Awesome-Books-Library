var i = 0
var list = []

function g(j: string): HTMLInputElement {
  return document.getElementById(j) as HTMLInputElement
}

function addBook() {
  var title = g("t").value
  var author = g("a").value

  var template = document.createElement("template")
  template.innerHTML = `<div id="${i+title}">
    <p>${title}</p>
    <p>${author}</p>
    <button id="${i+title}" value="${i}" onclick="removeBook(this.id, this.value)">Remove</button>
  </div>
  <hr>`.trim()

  document.getElementById("books").appendChild(template.content.firstChild)

  var book = {
    author: author,
    title: title
  }

  list[i] = book
  i++

  console.log(list)
}

function removeBook(id: string ,p: string) {
  let position = parseInt(p);
  list.splice(position, 1);

  document.getElementById(id).remove
}