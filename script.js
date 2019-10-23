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
function createImage(src, i) {
    const image = document.createElement('img');
    image.src = src
    return image;
  }
  
  function onThumbnailClick(event) {
    var image = createImage(event.currentTarget.src);
    document.body.classList.add('no-scroll');
    modalView.style.top = window.pageYOffset + 'px';
    modalView.appendChild(image);
    modalView.classList.remove('hidden');
    let a1 = 1
    addEventListener("keydown", function(event){
        const albumView = document.querySelector('#album-view');
        if (event.key === 'Escape'){
          modalView.innerHTML = '';
          modalView.classList.add('hidden');
          document.body.classList.remove('no-scroll');
        }
        if(event.key === 'ArrowRight'){
          if(a1<9){
            modalView.innerHTML = '';
            a1 = a1 + 1
            image = createImage('images/g'+(a1)+'.jpg')
            modalView.appendChild(image);
          }
        }       
        if(event.key === 'ArrowLeft' ){
          if(a1>>1 && a1<=9){
            a1 = a1-1
            modalView.innerHTML = '';
            image = createImage('images/g'+(a1)+'.jpg')
            modalView.appendChild(image);
          }
          
        }
    })
  }
  
  function onModalClick() {
    document.body.classList.remove('no-scroll');
    modalView.classList.add('hidden');
    modalView.innerHTML = '';
  }

  const albumView = document.querySelector('#album-view');
  for (let i = 0; i < PHOTO_LIST.length; i++){
    const photoSrc = PHOTO_LIST[i];
    const image = createImage(photoSrc , i);
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