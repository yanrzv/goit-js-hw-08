import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector('form');
const email = form.querySelector('input[name="email"]');
const message = form.querySelector('textarea');
let localStorageObject = {};
let storageValue = {};

form.addEventListener('input', throttle(formInput, 500)); 


function formInput (e) {
    localStorageObject[e.target.name] = e.target.value;

    storageValue = JSON.stringify(localStorageObject);
    
    localStorage.setItem(STORAGE_KEY, storageValue)

}

const formData = localStorage.getItem(STORAGE_KEY)

if (formData) {
    const parsedLocalStorage = JSON.parse(formData);
    
    if (parsedLocalStorage.message) {
    message.value = parsedLocalStorage.message;
    } 
    
    if (parsedLocalStorage.email) {
    email.value = parsedLocalStorage.email;
    };
}

    
form.addEventListener('submit', event => {
    event.preventDefault();

    if(email.value.length > 1 && message.value.length > 1) {
        console.log(localStorageObject);

        form.reset();
        localStorage.removeItem('feedback-form-state');
    } else {
        alert(`Заповніть всі поля`)
    }    
} )




