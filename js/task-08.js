const form = document.querySelector('.login-form');

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;
    
    if (email.value === '' || password.value === '') {
        return alert('All fields must be filled');
    } 
        const data = {
            email: email.value,
            password: password.value
        };
    
        console.log(data);

    event.currentTarget.reset();
    }
