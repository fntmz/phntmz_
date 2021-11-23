let galleryCursor = document.getElementById('gallery-cursor');
let cursorArea = document.getElementById('cursor-area');

const onMouseMove = (e) => {
  var rect = cursorArea.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;

  galleryCursor.style.left = x + 'px';
  galleryCursor.style.top = y + 'px';
}

document.addEventListener('mousemove', onMouseMove);