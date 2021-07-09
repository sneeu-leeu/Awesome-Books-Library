/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const book = new Book();
book.loadPrev();

document.getElementById('add_book').addEventListener('click', () => {
  book.addBook();
});

function target(element) {
  book.removeBook(element.id, element.value);
}

function display_c() {
  var refresh = 1000; // Refresh rate in milli seconds
  mytime = setTimeout('display_ct()', refresh);
}

function display_ct() {
  const x = new Date();
  const x1 = x.toUTCString();// changing the display to UTC string
  document.getElementById('ct').innerHTML = x1;
  tt = display_c();
}

display_ct();

function switchPage(target) {
  switch (target) {
    case 'toAdd':
      document.getElementById('list').style.display = 'none';
      document.getElementById('foo_book').style.display = 'block';
      document.getElementById('contact').style.display = 'none';
      break;
    case 'toContact':
      document.getElementById('list').style.display = 'none';
      document.getElementById('foo_book').style.display = 'none';
      document.getElementById('contact').style.display = 'block';
      break;
    default:
      document.getElementById('list').style.display = 'block';
      document.getElementById('foo_book').style.display = 'none';
      document.getElementById('contact').style.display = 'none';
      break;
  }
}
/* eslint-enable no-unused-vars */
/* eslint-enable no-undef */