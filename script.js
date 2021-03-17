document.getElementById('image-swap').addEventListener('click', image)
document.getElementById('text-change').addEventListener('click', text)
document.getElementById('background').addEventListener('click', background)
document.getElementById('hide').addEventListener('click', hide)
document.getElementById('show').addEventListener('click', show)

function image () {
  document.getElementById('image').src = 
  "./image/Big boy john.jfif"
}

function text () {
  document.getElementById('text').innerHTML="I've Changed!"
}

function background () {
  document.body.style.backgroundColor = "blue"
}

function hide () {
  document.getElementById('text').style.display = "none"
}

function show () {
  document.getElementById('text').style.display = "block"
}