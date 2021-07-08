const book = new Book()
book.loadPrev()

document.getElementById('add_book').addEventListener('click', () => {
  book.addBook()
})

function target(element) {
  book.removeBook(element.id, element.value)
}
