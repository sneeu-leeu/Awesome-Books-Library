/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const book = new Book();
book.loadPrev();

document.getElementById('add_book').addEventListener('click', () => {
  book.addBook();
});

function display_c() {
  var refresh = 1000; // Refresh rate in milli seconds
  mytime = setTimeout('display_ct()', refresh)
}

function display_ct() {
  var x = new Date()
  var x1 = x.toUTCString();// changing the display to UTC string
  document.getElementById('ct').innerHTML = x1;
  tt = display_c();
}

display_ct()

function _switch(target) {
  switch (target) {
    case 'toList':
      document.getElementById('list').style.display = "block"
      document.getElementById('add_book').style.display = "none"
      document.getElementById('contact').style.display = "none"
      break
    case 'toAdd':
      document.getElementById('list').style.display = "none"
      document.getElementById('add_book').style.display = "block"
      document.getElementById('contact').style.display = "none"
      break
    case 'toContact':
      document.getElementById('list').style.display = "none"
      document.getElementById('add_book').style.display = "none"
      document.getElementById('contact').style.display = "block"
      break
  }
}
/* eslint-enable no-unused-vars */
/* eslint-enable no-undef */