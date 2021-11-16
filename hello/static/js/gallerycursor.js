let galleryCursor = document.getElementById('gallery-cursor');

const onMouseMove = (e) => {
  galleryCursor.style.left = e.pageX + 'px';
  galleryCursor.style.top = e.pageY + 'px';
}

document.addEventListener('mousemove', onMouseMove);