var i = 0
var list = []

function g(j: string): HTMLInputElement {
  return document.getElementById(j) as HTMLInputElement
}

function stack(templateString: string) {
  var template = document.createElement("template")
  template.innerHTML = templateString.trim()
  document.getElementById("books").appendChild(template.content.firstChild)
}

function addBook() {
  var title = g("t").value
  var author = g("a").value

  stack(`<div id="${i + title}">
      <p>${title}</p>
      <p>${author}</p>
      <button id="${i + title}" value="${i}" onclick="removeBook(this.id, this.value)">Remove</button>
    </div>
    <hr>`
  )

  var book = {
    author: author,
    title: title
  }

  list[i] = book
  i++

  localStorage.list = list
}

function removeBook(id: string, p: string) {
  let position = parseInt(p);
  list.splice(position, 1);

  document.getElementById(id).remove()
  localStorage.list = list
}

function loadPrev() {
  let mList = localStorage.list as number[]

  for (let j = 0; j < mList.length; j++) {
    let book = mList[j] as any
    stack(`<div id="${j + book.title}">
        <p>${book.title}</p>
        <p>${book.author}</p>
        <button id="${j + book.title}" value="${j}" onclick="removeBook(this.id, this.value)">Remove</button>
      </div>
      <hr>`
    )
  }
}

window.onload = loadPrev()