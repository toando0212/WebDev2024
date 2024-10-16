
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailPattern.test(email)
}

function validatePassword(password) {
    return password.length >= 8
}

document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault()
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.')
        return
    }

    if (!validatePassword(password)) {
        alert('Wrong email or password');
        return;
    }

    alert('Login successful!');
    // console.log('Redirecting to main.html');
    window.location.href = "main.html"
})
