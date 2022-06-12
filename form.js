const form = document.getElementById('contactForm')
const name = document.getElementById('name')
const nameError = document.getElementById('nameError')
const subject = document.getElementById('subject')
const subjectError = document.getElementById('subjectError')
const email = document.getElementById('email')
const emaiError = document.getElementById('emailError')
const address = document.getElementById('address')
const addresError = document.getElementById('addressError')
const successMessage = document.querySelector('.success_text')


const formPassed = document.getElementById('formPassed')


// subject.style.color = 'red'
// name.style.color = 'red'
// email.style.color = 'red'
// address.style.color = 'red'
// form.style.backgroundColor = 'red';


function formValidation() {
    event.preventDefault();
    // let successAll =  successMessage.classList.add('show');
    if (valueLength(name.value, 3) === true) {
        nameError.style.display = 'none'

    } else {
        nameError.style.display = 'block'
    }

    if (valueLength(subject.value, 10) === true) {
        subjectError.style.display = 'none'

    } else {
        subjectError.style.display = 'block'
    }
    if (emailValidator(email.value) === true) {
        emailError.style.display = 'none'
    } else {
        emailError.style.display = 'block'
    }
    if (valueLength(address.value, 25) === true) {
        addressError.style.display = 'none'
    } else {
        addressError.style.display = 'block'
    }

    if (valueLength(name.value, 3) === true && emailValidator(email.value) === true && emailValidator(email.value) === true &&
        valueLength(address.value, 25) === true) {
        successMessage.classList.add('show')
        form.style.display = 'none'
    }





}



form.addEventListener('submit', formValidation)




function valueLength(value, len) {
    if (value.trim().length > len) {
        return true
    } else {
        return false
    }
}


function emailValidator(email) {
    const regEx = /\S+@\S+\.\S+/;
    const emailPattern = regEx.test(email);
    return emailPattern;
}

// form.addEventListener('submit',(e)=>{
// e.preventDefault()

//     successMessage.classList.add('show');
//     setTimeout(() => form.submit(), 3000);



// }
// )