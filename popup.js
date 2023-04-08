const editButtion = document.querySelector('.profile__btn-edit');
const popup = document.querySelector('.popup');
const closeButtion = document.querySelector('.popup__close');
 
 function open() {
  popup.classList.add('popup_opened');
  
}

function close() {
  popup.classList.remove('popup_opened');
  
}
 
 editButtion.addEventListener('click', open);
 closeButtion.addEventListener('click', close);


 
