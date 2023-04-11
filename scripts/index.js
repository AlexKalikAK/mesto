let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#description');
let profilename = document.querySelector('.profile__name');
let profileabout = document.querySelector('.profile__about');
let nameFilled;
let aboutFilled;
const editButtion = document.querySelector('.profile__btn-edit');
const popup = document.querySelector('.popup');
const closeButtion = document.querySelector('.popup__close');
const submitButtion = document.querySelector('.popup__btn-save');


function handleFormSubmit (evt) {
    evt.preventDefault(); 

    // Получите значение полей jobInput и nameInput из свойства value
    nameFilled=nameInput.value;
    aboutFilled=jobInput.value;

    
    // Выберите элементы, куда должны быть вставлены значения полей
    profilename.textContent = nameFilled;
    profileabout.textContent = aboutFilled;
    

    // Вставьте новые значения с помощью textContent
}

formElement.addEventListener('submit', handleFormSubmit);


 
 function open() {
  popup.classList.add('popup_opened');

  nameInput.value = profilename.textContent;
  jobInput.value = profileabout.textContent;
  

}

function close() {
  popup.classList.remove('popup_opened');
  
}
 
 editButtion.addEventListener('click', open);
 closeButtion.addEventListener('click', close);
 submitButtion.addEventListener('click', close);

 


 
