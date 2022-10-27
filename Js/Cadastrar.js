// Criar numero aleatorio
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
document.addEventListener("submit", event => {
    event.preventDefault()
    // nao atualizar a pagina 
    checkInputs()
    saveLocalStorage()

})
var form = document.getElementById('form')
var username = document.getElementById('usuario')
var email = document.getElementById('email')
var password = document.getElementById('password')
var passwordtwo = document.getElementById('passwordtwo')
            
function checkInputs() {

    // funcao de checar input
    var usernameValue = username.value
    var emailValue = email.value
    var passwordValue = password.value
    var passwordtwoValue = passwordtwo.value

    if (usernameValue === '') {
        document.getElementById('usuario').style.borderBottom = '1px solid red' // input vazia
    } else {
        document.getElementById('usuario').style.borderBottom = '1px solid green' // input valida
    }
    if (emailValue === '') {
        document.getElementById('email').style.borderBottom = '1px solid red'// input vazia
    } else {
        document.getElementById('email').style.borderBottom = '1px solid green'// input valida
    }
    if (passwordValue === '') {
        document.getElementById('password').style.borderBottom = '1px solid red'// input vazia
    } else if (passwordValue.length < 8) {

        document.getElementById('password').style.borderBottom = '1px solid red'// input com menos de 8 numeros
    } else {
        document.getElementById('password').style.borderBottom = '1px solid green'// input valida
    }
    if (passwordtwoValue === '') {

        document.getElementById('passwordtwo').style.borderBottom = '1px solid red' // Ver se a senha da do input 1 e igual a input 2
    } else if (passwordValue !== passwordtwoValue) {

        document.getElementById('passwordtwo').style.borderBottom = '1px solid red'// input vazia

    } else if (passwordValue.length < 8) {
        document.getElementById('passwordtwo').style.borderBottom = '1px solid red'// input com menos de 8 numeros
    } else {
        document.getElementById('passwordtwo').style.borderBottom = '1px solid green'// input valida
    }

}


// Funcao salvar local storage
function saveLocalStorage() {
    var numeroAleatorio = getRandomIntInclusive(0, 10000000)
    if (username.value == '' || email.value == "" || password.value == "" || password.value.length < 8 || password.value !== passwordtwo.value) {
        alert('campos invalidos')
    } else {

        var userCad = JSON.parse(localStorage.getItem('userCad') || '[]')

        userCad.push({
            idCad: numeroAleatorio,
            nomeCad: username.value,
            emailCad: email.value,
            passwordCad: password.value
        })

        localStorage.setItem('userCad', JSON.stringify(userCad))

        window.location.href = 'login.html'
    }
}

