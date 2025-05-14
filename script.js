const form = document.getElementById('form');
const firstNameError = document.getElementById('firstnameError');
const middleNameError = document.getElementById('middlenameError');
const lastNameError = document.getElementById('lastnameError');
const emailError = document.getElementById('emailError');
const contactError = document.getElementById('contactError');
const pinCodeError = document.getElementById('pinError');
const addressError = document.getElementById('addressError');
const loader = document.querySelector('.loader');

const formValidation = (event) => {
    event.preventDefault();
    const firstName = document.getElementById('first-name').value; 
    const middleName = document.getElementById('middle-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;  
    const contact = document.getElementById('contact').value;
    const pinCode = document.getElementById('pin').value;
    const address = document.getElementById('address').value;
    firstNameError.textContent = '';
    lastNameError.textContent = '';
    middleNameError.textContent = '';
    emailError.textContent = '';
    contactError.textContent = '';
    pinCodeError.textContent = '';
    addressError.textContent = '';
    if (firstName === '') {
        firstNameError.textContent = 'First name is required';
    } else if (firstName.length < 5) {
        firstNameError.textContent = 'First name must be at least 5 characters';
    }

    if (middleName === '') {
        middleNameError.textContent = 'middle name is required';
    } else if (middleNameError.length < 5) {
        middleNameError.textContent = 'middle name must be at least 5 characters';
    }

    if (lastName === '') {
        lastNameError.textContent = 'Last name is required';
    } else if (lastName.length < 5) {
        lastNameError.textContent = 'Last name must be at least 5 characters';
    }

    if (email === '') {
        emailError.textContent = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        emailError.textContent = 'Email is invalid';
    }
    if (contact === '') {
        contactError.textContent = 'Contact number is required';
    } else if (!/^\d{10}$/.test(contact)) {
        contactError.textContent = 'Contact number must be 10 digits';
    }
    if (pinCode === '') {
        pinCodeError.textContent = 'Pin code is required';
    } else if (!/^\d{6}$/.test(pinCode)) {
        pinCodeError.textContent = 'Pin code must be 6 digits';
    }
    if (address === '') {
        addressError.textContent = 'Address is required';
    } else if (address.length < 10) {
        addressError.textContent = 'Address must be at least 10 characters';
    }
    if (firstNameError.textContent === '' && lastNameError.textContent === '' && middleNameError.textContent === '' && emailError.textContent === '' && contactError.textContent === '' && pinCodeError.textContent === '' && addressError.textContent === '') {
        loader.style.display = 'block';         
        setTimeout(() => {
            loader.style.display = 'none';
            alert('Form submitted successfully');
            form.reset();
        }, 2000);
        
    }
    
    
}
form.addEventListener('submit', formValidation);