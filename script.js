const form = document.getElementById('form');
const firstNameError = document.getElementById('firstnameError');
const middleNameError = document.getElementById('middlenameError');
const lastNameError = document.getElementById('lastnameError');
const emailError = document.getElementById('emailError');
const contactError = document.getElementById('contactError');
const pinCodeError = document.getElementById('pinError');
const classError = document.getElementById('classError');
const addressError = document.getElementById('addressError');
const dobError = document.getElementById('dobError');
const loader = document.querySelector('.loader');
const formcontainer =document.querySelector('.container')
const popupcontainer =document.querySelector('.popup-container')
const closeIcon = document.querySelector('.icon')
const formDetail = document.querySelector('.form-detail')

// Form Data And Value Acsess ///



const formValidation = () => {
    const firstName = document.getElementById('first-name').value
    const middleName = document.getElementById('middle-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;  
    const contact = document.getElementById('contact').value;
    const dob = document.getElementById('dob').value;
    const pinCode = document.getElementById('pin').value;
    const className = document.getElementById('class').value;
    const address = document.getElementById('address').value;
   
    firstNameError.textContent = '';
    lastNameError.textContent = '';
    middleNameError.textContent = '';
    emailError.textContent = '';
    contactError.textContent = '';
    dobError.textContent = '';
    pinCodeError.textContent = '';
    addressError.textContent = '';
    classError.textContent = '';
    
    /*if (firstName === '') {
        firstNameError.innerHTML = 'First name is required';
       
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
    if (dob === '') {
        dobError.textContent = 'Date of birth is required';
    } else {
        const today = new Date();
        const dobDate = new Date(dob);
        const age = today.getFullYear() - dobDate.getFullYear();
        const monthDiff = today.getMonth() - dobDate.getMonth();
        if (age < 18) {
            dobError.textContent = 'You must be at least 18 years old';
        }
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
    if (className === '') {
        classError.textContent = 'Class is required';
    } else if (className.length < 2) {
        classError.textContent = 'Class must be at least 2 characters';
    }  */

    if (firstNameError.textContent === '' && lastNameError.textContent === '' && middleNameError.textContent === '' && emailError.textContent === '' && contactError.textContent === '' && pinCodeError.textContent === '' && addressError.textContent === '') {
        loader.style.display = 'block';         
        setTimeout(() => {
            loader.style.display = 'none';
            showPopup()
            form.reset();
        }, 2000);
        
    }
    
    
}
form.addEventListener('submit' , (e) =>{
    e.preventDefault()
    

   formValidation()
   
})

const showPopup = () => {
    formcontainer.style.display = "none"
    popupcontainer.style.display = 'block'
    const firstName = document.getElementById('first-name').value
    const middleName = document.getElementById('middle-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;  
    const contact = document.getElementById('contact').value;
    const dob = document.getElementById('dob').value;
    const pinCode = document.getElementById('pin').value;
    const className = document.getElementById('class').value;
    const address = document.getElementById('address').value;
    const html = `
                 <p>FirstName :<span>${firstName}</span></p>
                <p>MiddleName :<span>${middleName}</span></p>
                <p>LastName :<span>${lastName}</span></p>
                <p>Email :<span>${email}</span></p>
                <p>Contact :<span>${contact}</span></p>
                <p>DOB :<span>${dob}</span></p>
                <p>PIN CODE :<span>${pinCode}</span></p>
                <p>Class :<span>${className}</span></p>
                <p>Address :<span>${address}</span></p>
    `
    formDetail.innerHTML = html;

}
closeIcon.addEventListener('click', () =>{
    popupcontainer.style.display = 'none'
    formcontainer.style.display = "flex"
})