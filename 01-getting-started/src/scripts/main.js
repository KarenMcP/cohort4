import functions from './functions.js';
import{adding,subtracting,mutliplyoing,dividing}from './calculator';
// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));
