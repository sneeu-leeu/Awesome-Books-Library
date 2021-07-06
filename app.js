var i = 0;
var list = [];
function g(j) {
    return document.getElementById(j);
}
function stack(templateString) {
    var template = document.createElement('template');
    template.innerHTML = templateString.trim();
    document.getElementById('books').appendChild(template.content.firstChild);
}
function addBook() {
    var title = g('t').value;
    var author = g('a').value;
    stack("<div id=\"" + (i + title) + "\">\n      <p>" + title + "</p>\n      <p>" + author + "</p>\n      <button id=\"" + (i + title) + "\" value=\"" + i + "\" onclick=\"removeBook(this.id, this.value)\">Remove</button>\n    </div>\n    <hr>");
    var book = {
        author: author,
        title: title
    };
    list[i] = book;
    i += 1;
    window.localStorage.setItem('stuff', JSON.stringify({ arr: list }));
}
function removeBook(id, p) {
    var position = parseInt(p);
    list.splice(position, 1);
    document.getElementById(id).remove();
    localStorage.list = list;
}

function loadPrev() {
    if (typeof (Storage) !== 'undefined') {
        var mList = JSON.parse(localStorage.getItem('stuff')).arr;
        for (var j = 0; j < mList.length; j++) {
            var book = mList[j];
            stack("<div id=\"" + (j + book.title) + "\">\n        <p>" + book.title + "</p>\n        <p>" + book.author + "</p>\n        <button id=\"" + (j + book.title) + "\" value=\"" + j + "\" onclick=\"removeBook(this.id, this.value)\">Remove</button>\n      </div>\n      <hr>");
        }
    }
    else {
        alert(0);
    }
}
window.onload = loadPrev();
//# sourceMappingURL=app.js.map