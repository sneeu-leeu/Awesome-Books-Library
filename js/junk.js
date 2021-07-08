var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Book_instances, _Book_list, _Book_g, _Book_stack;
class Book {
    constructor() {
        _Book_instances.add(this);
        _Book_list.set(this, void 0);
        const localList = JSON.parse(localStorage.getItem('stuff'));
        if (localList !== null) {
            __classPrivateFieldSet(this, _Book_list, localList.arr, "f");
        }
    }
    updateList() {
        // let localList = JSON.parse(localStorage.getItem('stuff')).arr as number[]
        document.getElementById('books').innerHTML = '';
        for (let j = 0; j < __classPrivateFieldGet(this, _Book_list, "f").length; j++) {
            const book = __classPrivateFieldGet(this, _Book_list, "f")[j];
            __classPrivateFieldGet(this, _Book_instances, "m", _Book_stack).call(this, `<div id="${book.title}">
        <p>${book.title}</p>
        <p>${book.author}</p>
        <button id="${j + book.title}" value="${j}" onclick="target(this)">Remove</button>
      </div>
      <hr>`);
        }
    }
    updateLocalStorage() {
        localStorage.setItem('stuff', JSON.stringify({
            arr: __classPrivateFieldGet(this, _Book_list, "f")
        }));
    }
    addBook() {
        const title = __classPrivateFieldGet(this, _Book_instances, "m", _Book_g).call(this, 't').value;
        const author = __classPrivateFieldGet(this, _Book_instances, "m", _Book_g).call(this, 'a').value;
        const book = {};
        book.author = author;
        book.title = title;
        __classPrivateFieldGet(this, _Book_list, "f").push(book);
        this.updateLocalStorage();
        this.updateList();
        __classPrivateFieldGet(this, _Book_instances, "m", _Book_g).call(this, 't').value = '';
        __classPrivateFieldGet(this, _Book_instances, "m", _Book_g).call(this, 'a').value = '';
    }
    removeBook(id, position) {
        const p = parseInt(position, 10);
        document.getElementById(id).remove();
        const filteredList = __classPrivateFieldGet(this, _Book_list, "f").slice(0, p).concat(__classPrivateFieldGet(this, _Book_list, "f").slice(p + 1, __classPrivateFieldGet(this, _Book_list, "f").length));
        __classPrivateFieldSet(this, _Book_list, filteredList, "f");
        this.updateLocalStorage();
        this.updateList();
    }
    loadPrev() {
        this.updateList();
    }
}
_Book_list = new WeakMap(), _Book_instances = new WeakSet(), _Book_g = function _Book_g(j) {
    return document.getElementById(j);
}, _Book_stack = function _Book_stack(templateString) {
    const template = document.createElement('template');
    template.innerHTML = templateString.trim();
    document.getElementById('books').appendChild(template.content.firstChild);
};
const book = new Book();
book.loadPrev();
document.getElementById('add_book').addEventListener('click', () => {
    book.addBook();
});
function target(element) {
    book.removeBook(element.id, element.value);
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
