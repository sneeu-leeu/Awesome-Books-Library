class Book {
  #list: number[]

  constructor() {
    const localList = JSON.parse(localStorage.getItem('stuff'))
    if (localList !== null) {
      this.#list = localList.arr
    }
  }

  #g(j: string): HTMLInputElement {
    return document.getElementById(j) as HTMLInputElement
  }

  #stack(templateString: string) {
    const template = document.createElement('template')
    template.innerHTML = templateString.trim()
    document.getElementById('books').appendChild(template.content.firstChild)
  }

  updateList() {
    // let localList = JSON.parse(localStorage.getItem('stuff')).arr as number[]
    document.getElementById('books').innerHTML = ''
    for (let j = 0; j < this.#list.length; j++) {
      const book = this.#list[j] as any

      this.#stack(`<div id="${book.title}">
        <p>${book.title}</p>
        <p>${book.author}</p>
        <button id="${j + book.title}" value="${j}" onclick="target(this)">Remove</button>
      </div>
      <hr>`
      )
    }
  }

  updateLocalStorage() {
    localStorage.setItem('stuff', JSON.stringify({
      arr: this.#list
    }))
  }

  addBook() {
    const title = this.#g('t').value
    const author = this.#g('a').value


    const book: any = {}

    book.author = author
    book.title = title

    this.#list.push(book)
    this.updateLocalStorage()
    this.updateList()
    this.#g('t').value = ''
    this.#g('a').value = ''
  }

  removeBook(id: string, position: string) {
    const p = parseInt(position, 10)
    document.getElementById(id).remove()
    const filteredList = this.#list.slice(0, p).concat(this.#list.slice(p + 1, this.#list.length))
    this.#list = filteredList
    this.updateLocalStorage()
    this.updateList()
  }

  loadPrev() {
    this.updateList()
  }
}

const book = new Book()
book.loadPrev()

document.getElementById('add_book').addEventListener('click', () => {
  book.addBook()
})

function target(element: { id: string; value: string }) {
  book.removeBook(element.id, element.value)
}

// /* eslint-disable no-unused-vars */
// let i = 0
// let list = []
// let fromLocalStorage = false

// function g(j: string): HTMLInputElement {
//   return document.getElementById(j) as HTMLInputElement
// }



// function updateList() {
//   let localList = JSON.parse(localStorage.getItem('stuff')).arr as number[]
//   document.getElementById('books').innerHTML = ''
//   for (let j = 0; j < localList.length; j++) {
//     const book = localList[j] as any
//     stack(`<div id="${j + book.title}">
//         <p>${book.title}</p>
//         <p>${book.author}</p>
//         <button id="${j + book.title}" value="${j}" onclick="removeBook(this.id, this.value)">Remove</button>
//       </div>
//       <hr>`
//     )
//   }
// }

// function updateLocalStorage() {
//   localStorage.setItem('stuff', JSON.stringify({
//     arr: list,
//     count: i
//   }))
// }

// function addBook() {
//   const title = g('t').value
//   const author = g('a').value

//   let locaList = JSON.parse(window.localStorage.getItem('stuff'))

//   if (locaList !== null) {
//     list = locaList.arr
//     i = locaList.count

//     const book = {}

//     book.author = author
//     book.title = title

//     list.push(book)

//     i += 1

//     updateLocalStorage()
//     updateList()
//   } else {
//     const book = {}

//     book.author = author
//     book.title = title

//     list.push(book)

//     i += 1

//     updateLocalStorage()
//     updateList()
//   }

//   g('t').value = ''
//   g('a').value = ''
// }

// function removeBook(id: string, p: string) {
//   let locaList = JSON.parse(localStorage.getItem('stuff'))

//   if (locaList !== null) {
//     list = locaList.arr
//     i = locaList.count

//     const position = parseInt(p, 10);
//     list.splice(position, 1);
//     document.getElementById(id).remove()
//     i--
//     updateLocalStorage()
//     updateList()
//   }



//   // if (fromLocalStorage) {

//   // } else {
//   //   let locaList = JSON.parse(localStorage.getItem('stuff'))

//   //   if (locaList !== undefined) {
//   //     list = locaList.arr
//   //     list.splice(position, 1);
//   //     document.getElementById(id).remove()
//   //     updateLocalStorage()
//   //   } else {
//   //     list.splice(position, 1);
//   //     document.getElementById(id).remove()
//   //     updateLocalStorage()
//   //   }
//   // }
// }

// /* eslint-disable no-plusplus */
// function loadPrev() {
//   if (JSON.parse(window.localStorage.getItem('stuff')) !== null) {
//     updateList()
//   }


  // for (let j = 0; j < mList.length; j++) {
  //   const book = mList[j] as any

  //   stack(`<div id="${j + book.title}">
  //       <p>${book.title}</p>
  //       <p>${book.author}</p>
  //       <button id="${j + book.title}" value="${j}" onclick="removeBook(this.id, this.value)">Remove</button>
  //     </div>
  //     <hr>`
  //   )
  // }
// }



    // let locaList = JSON.parse(window.localStorage.getItem('stuff'))

    // if (locaList !== null) {
    //   list = locaList.arr
    //   i = locaList.count



    //   list.push(book)

    //   i += 1

    //   updateLocalStorage()
    //   updateList()
    // } else {
    //   const book = {}

    //   book.author = author
    //   book.title = title

    //   list.push(book)

    //   i += 1

    //   updateLocalStorage()
    //   updateList()
    // }

// window.onload = loadPrev()
// /* eslint-enable no-plusplus */
// /* eslint-enable no-unused-vars */