const form = document.getElementById('form');
const loader = document.querySelector('.loader');
const formcontainer =document.querySelector('.container')
const popupcontainer =document.querySelector('.popup-container')
const closeIcon = document.querySelector('.icon')
const formDetail = document.querySelector('.form-detail')

// Form Data And Value Acsess ///
//Errors Feild 
const errors = {
    firstName: document.getElementById('firstnameError'),
    middleName: document.getElementById('middlenameError'),
    lastName: document.getElementById('lastnameError'),
    email: document.getElementById('emailError'),
    contact: document.getElementById('contactError'),
    dob: document.getElementById('dobError'),
    pinCode: document.getElementById('pinError'),
    className: document.getElementById('classError'),
    address: document.getElementById('addressError')
};
// set Error fuction 
const setError = (feild, message) =>{
    errors[feild].textContent = message;
}
// ClearError function
const ClearError =() =>{
    Object.keys(errors).forEach(field => errors[field].textContent= '')
}
const formValidation = () => {
    ClearError();

     const field = {
        firstName: document.getElementById('first-name').value.trim(),
        middleName: document.getElementById('middle-name').value.trim(),
        lastName: document.getElementById('last-name').value.trim(),
        email: document.getElementById('email').value.trim(),
        contact: document.getElementById('contact').value.trim(),
        dob: document.getElementById('dob').value.trim(),
        pinCode: document.getElementById('pin').value.trim(),
        className: document.getElementById('class').value.trim(),
        address: document.getElementById('address').value.trim()
    };

   

    
    if (field.firstName === '') {
        setError('firstName','First name Requierd')
       
    } else if (field.firstName.length < 5) {
        setError('firstName',"First name must be at least 5 characters")
    }

    if (field.middleName === '') {
        setError('middleName',"middle name is required")
    } else if (field.middleName.length < 5) {
        setError('middleName','middle name must be at least 5 characters')
    }

    if (field.lastName === '') {
        setError('lastName','last name is requierd')
    } else if (field.lastName.length < 5) {
        setError('lastName' ,'Last name must be at least 5 characters')
    }

    if (field.email === '') {
        setError('email','Email is required');
    } else if (!/\S+@\S+\.\S+/.test(field.email)) {
        setError('email','Email is invalid');
    }
    if (field.contact === '') {
        setError('contact' ,'Contact number is required')
    } else if (!/^\d{10}$/.test(field.contact)) {
        setError('contact','Contact number must be 10 digits')
    }
    if (field.dob === '') {
        setError('dob','Date of birth is required')
    } else {
        const today = new Date();
        const dobDate = new Date(field.dob);
        const age = today.getFullYear() - dobDate.getFullYear();
        const monthDiff = today.getMonth() - dobDate.getMonth();
        if (age < 18) {
            setError('dob','You must be at least 18 years old')
        }
    }
    if (field.pinCode === '') {
        setError('pinCode','Pin code is required')
    } else if (!/^\d{6}$/.test(field.pinCode)) {
        setError('pinCode','Pn code must be 6 digits')
    }
    if (field.address === '') {
        setError('address','Address is required')

    } else if (field.address.length < 10) {
        setError('address','Address must be at least 10 Characters')
    }
    if (field.className === '') {
        setError('className','class is Requierd')
    } else if (field.className.length < 2) {
        setError('className','class must be at least 2 character')
    } 

    if (!Object.values(errors).some(err => err.textContent !== '')) {
        loader.style.display = 'block';         
        setTimeout(() => {
            loader.style.display = 'none';
            showPopup(field)
            form.reset();
        }, 2000);
        
    }
    
    
}
form.addEventListener('submit' , (e) =>{
    e.preventDefault()
    

   formValidation()
   
})

const showPopup = (field) => {
    formcontainer.style.display = "none"
    popupcontainer.style.display = 'block'
    const html = Object.entries(field).map(([key, value]) => `<p>${key.charAt(0).toUpperCase() + key.slice(1)}: <span>${value}</span></p>`).join('');
    formDetail.innerHTML = html;

}
closeIcon.addEventListener('click', () =>{
    popupcontainer.style.display = 'none'
    formcontainer.style.display = "flex"
})