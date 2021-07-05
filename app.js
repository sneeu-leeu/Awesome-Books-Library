var i = 0;
var list = [];
function g(j) {
    return document.getElementById(j);
}
function addBook() {
    var title = g("t").value;
    var author = g("a").value;
    var template = document.createElement("template");
    template.innerHTML = ("<div id=\"" + (i + title) + "\">\n    <p>" + title + "</p>\n    <p>" + author + "</p>\n    <button id=\"" + (i + title) + "\" value=\"" + i + "\" onclick=\"removeBook(this.id, this.value)\">Remove</button>\n  </div>\n  <hr>").trim();
    document.getElementById("books").appendChild(template.content.firstChild);
    var book = {
        author: author,
        title: title
    };
    list[i] = book;
    i++;
    console.log(list);
}
function removeBook(id, p) {
    var position = parseInt(p);
    list.splice(position, 1);
    document.getElementById(id).remove;
}
//# sourceMappingURL=app.js.map