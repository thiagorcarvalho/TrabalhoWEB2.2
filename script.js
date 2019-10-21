const PHOTO_LIST = [
    'images/g1.jpg',
    'images/g2.jpg',
    'images/g3.jpg',
    'images/g4.jpg',
    'images/g5.jpg',
    'images/g6.jpg',
    'images/g7.jpg',
    'images/g8.jpg',
    'images/g9.jpg',
  ];
  //if(event.keyCode ==39){
    //const newImage = event.currentTarget
    //newImage.src="images/g8.jpg"
//}
function createImage(src) {
    const image = document.createElement('img');
    image.src = src;
    return image;
  }
  
  function onThumbnailClick(event) {
    const image = createImage(event.currentTarget.src);
    document.body.classList.add('no-scroll');
    modalView.style.top = window.pageYOffset + 'px';
    modalView.appendChild(image);
    modalView.classList.remove('hidden');
    console.log("entrou aqui")
  }
  
  function onModalClick() {
    document.body.classList.remove('no-scroll');
    modalView.classList.add('hidden');
    modalView.innerHTML = '';
  }
  
  // Main
  
  const albumView = document.querySelector('#album-view');
  for (let i = 0; i < PHOTO_LIST.length; i++) {
    const photoSrc = PHOTO_LIST[i];
    const image = createImage(photoSrc);
    image.addEventListener('click', onThumbnailClick);
    albumView.appendChild(image);
  }
  
  const modalView = document.querySelector('#modal-view');
  modalView.addEventListener('click', onModalClick);
  
  function Seguir(){
    const title = document.querySelector('button')
    title.textContent = 'Seguindo'
  

}
  const botao = document.querySelector('button')
  botao.addEventListener('click', Seguir)

  function trocar(){

    if(currentImgIndex == ImgSrcArray.length && event.keyCode == 39){ //reseta quando o contatador for igual ao tamanho da array e volta a 1° img
      currentImgIndex=0;
    }
    document.getElementById("images/g").src=ImgSrcArray[currentImgIndex]; //altera a img do elemento "agni" de acordo com o indice
      currentImgIndex++; // incrementa a nossa referencia
  
  }


  addEventListener("keydown", function(event) {
    if (event.key === 't')
      document.body.style.background = "violet";
  });
  addEventListener("keyup", function(event) {
    if (event.key === 'h')
      document.body.style.background = "";
  });