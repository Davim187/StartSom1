// Criar numero aleatorio
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Nao atualizar pagina
document.addEventListener("submit", event => {
  event.preventDefault()
  elogar()
  checkInputs()
  saveLocalStorage()
})
// Variaveis
var usuario = window.document.getElementById('usuario')
var password = window.document.getElementById('password')
// logar
function elogar() {
  var msgerro = window.document.getElementById('erro')

  userCad = []

  userValid = {
    idCad: '',
    nomeCad: '',
    emailCad: '',
    passwordCad: ''
  }

  userCad = JSON.parse(localStorage.getItem('userCad'))

  userCad.forEach((item) => {
    if(usuario.value == item.nomeCad && password.value == item.passwordCad ){
      userValid = {
        id:item.idCad ,
        nome: item.nomeCad,
        email: item.emailCad,
        password: item.passwordCad
      }

    }
    console.log(userCad)
  })
  var usuarioValue = usuario.value
  var passwordValue = password.value

  if (usuarioValue == userValid.nome || passwordValue == userValid.password) {
    window.location.href = 'home.html'


    localStorage.setItem('userLogado' , JSON.stringify(userValid))

  } else {
    msgerro.setAttribute('style', 'display: block')
    msgerro.innerHTML = 'USUARIO OU SENHA INVALIDOS '
    document.getElementById('usuario').style.borderBottom = '1px solid red'  // input invalida
    document.getElementById('password').style.borderBottom = '1px solid red' // input invalida
  }
}







