var pictures = [
  'images/1.jpg',
  'images/2.jpg',
  'images/3.jpg',
  'images/4.jpg'
]

var index = 0;
var img = document.getElementById('img');

function prev () {
  index = index === 0 ? pictures.length - 1 : index - 1;
  img.setAttribute('src', pictures[index])
}

function next() {
  index = index === pictures.length - 1 ? 0 : index + 1;
  img.setAttribute('src', pictures[index])
}

setInterval(next, 300);