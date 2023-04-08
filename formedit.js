let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#description');



function handleFormSubmit (evt) {
    evt.preventDefault(); 

    // Получите значение полей jobInput и nameInput из свойства value
    a=nameInput.value;
    b=jobInput.value;

    console.log (a, b);
    // Выберите элементы, куда должны быть вставлены значения полей

    let profilename = document.querySelector('.profile__name');
    let profileabout = document.querySelector('.profile__about');
    profilename.textContent = a;
    profileabout.textContent = b;
    

    // Вставьте новые значения с помощью textContent
}

formElement.addEventListener('submit', handleFormSubmit); 

