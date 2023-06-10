let displayImage = document.querySelector('#displayImage');
let loading = document.querySelector('#loading')

function generateImage() {
  loading.style.display = 'block';

  let removedImage = document.getElementById("image")

  if (removedImage) {
    displayImage.removeChild(removedImage)
  }
  setTimeout(newImage, 1500);
};

function newImage() {
  let randomNumber = Math.floor(Math.random() * 1000) + 1;

  let image = document.createElement("img");
  image.setAttribute("src", `https://picsum.photos/${780}/${780}?random=${randomNumber}`) 
  image.setAttribute("id", "image") 

  loading.style.display = 'none';

  displayImage.appendChild(image)
};
