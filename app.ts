var i = 0
var list = []

function g(j: string): HTMLInputElement {
  return document.getElementById(j) as HTMLInputElement
}

function addBook() {
  var title = g("t").value
  var author = g("a").value

  var template = document.createElement("template")
  template.innerHTML = `<div>
    <p>${title}</p>
    <p>${author}</p>
    <button value="${i}" onclick="removeBook(this.value)">Remove</button>
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

function removeBook(p: string) {
  let position = parseInt(p);
}