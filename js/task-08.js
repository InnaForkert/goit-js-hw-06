const form = document.querySelector(".login-form");

function formSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;

    if (!email.value || !password.value) {
        alert("Усі поля повинні бути заповнені!")
    } else {
        let formData = {
            email: email.value,
            password: password.value
        }
        console.log(formData);
        event.currentTarget.reset();
    }
}

form.addEventListener('submit', formSubmit)
